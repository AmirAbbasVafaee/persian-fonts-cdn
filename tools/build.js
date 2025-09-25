const fs = require('fs');
const path = require('path');

// Check if PostCSS is available
let postcss, autoprefixer, cssnano;
try {
  postcss = require('postcss');
  autoprefixer = require('autoprefixer');
  cssnano = require('cssnano');
} catch (error) {
  console.log('⚠️  PostCSS dependencies not found. Installing...');
  console.log('Please run: npm install postcss autoprefixer cssnano');
  process.exit(1);
}

const fonts = [
  'iran-yekan',
  'dana', 
  'kalameh',
  'peyda',
  'yekan-bakh'
];

async function buildCSS() {
  console.log('🔨 Building CSS files...\n');
  
  // Ensure css directory exists
  if (!fs.existsSync('css')) {
    fs.mkdirSync('css');
  }
  
  for (const font of fonts) {
    const cssPath = `css/${font}.css`;
    
    if (!fs.existsSync(cssPath)) {
      console.log(`⚠️  ${cssPath} not found. Generating first...`);
      // Run CSS generator
      require('./css-generator.js');
    }
    
    const css = fs.readFileSync(cssPath, 'utf8');
    
    try {
      // Process with PostCSS
      const result = await postcss([
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
        }),
        cssnano({ 
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }]
        })
      ]).process(css, { from: cssPath });
      
      // Write minified version
      fs.writeFileSync(`css/${font}.min.css`, result.css);
      console.log(`✅ Built ${font}.min.css`);
      
    } catch (error) {
      console.error(`❌ Error building ${font}:`, error.message);
    }
  }
  
  // Generate combined CSS
  await generateCombinedCSS();
  
  console.log('\n🎉 Build completed successfully!');
  console.log('\nGenerated files:');
  fonts.forEach(font => {
    console.log(`  • css/${font}.css (development)`);
    console.log(`  • css/${font}.min.css (production)`);
  });
  console.log('  • css/all-fonts.css (combined development)');
  console.log('  • css/all-fonts.min.css (combined production)');
}

async function generateCombinedCSS() {
  console.log('\n📦 Generating combined CSS files...');
  
  let combinedCSS = '/* ===== PERSIAN FONTS CDN - ALL FONTS ===== */\n';
  combinedCSS += '/* Comprehensive collection of Persian fonts for web applications */\n';
  combinedCSS += '/* Generated: ' + new Date().toISOString() + ' */\n\n';
  
  for (const font of fonts) {
    const cssPath = `css/${font}.css`;
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      combinedCSS += `/* ${font.toUpperCase()} FONT */\n`;
      combinedCSS += css + '\n\n';
    }
  }
  
  // Write development version
  fs.writeFileSync('css/all-fonts.css', combinedCSS);
  
  // Minify combined version
  try {
    const result = await postcss([
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
      }),
      cssnano({ 
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }]
      })
    ]).process(combinedCSS, { from: 'css/all-fonts.css' });
    
    fs.writeFileSync('css/all-fonts.min.css', result.css);
    console.log('✅ Generated combined CSS files');
    
  } catch (error) {
    console.error('❌ Error generating combined CSS:', error.message);
  }
}

// Run the build
buildCSS().catch(console.error);
