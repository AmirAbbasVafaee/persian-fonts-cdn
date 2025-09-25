const fs = require('fs');
const path = require('path');

// Font configurations with their weights and file mappings
const fontConfigs = {
  'iran-yekan': {
    family: 'IranYekan',
    weights: {
      100: 'IRANYekanWebThin',
      300: 'IRANYekanWebLight', 
      400: 'IRANYekanWebRegular',
      500: 'IRANYekanWebMedium',
      700: 'IRANYekanWebBold',
      800: 'IRANYekanWebExtraBold',
      900: 'IRANYekanWebBlack',
      950: 'IRANYekanWebExtraBlack'
    },
    prefix: 'iran-yekan',
    description: 'Modern, clean Persian font with excellent readability'
  },
  'dana': {
    family: 'Dana',
    weights: {
      100: 'DanaFaNum-Hairline',
      200: 'DanaFaNum-UltraLight',
      300: 'DanaFaNum-Thin',
      400: 'DanaFaNum-Regular',
      500: 'DanaFaNum-Light',
      600: 'DanaFaNum-Medium',
      700: 'DanaFaNum-DemiBold',
      800: 'DanaFaNum-Bold',
      900: 'DanaFaNum-ExtraBold',
      950: 'DanaFaNum-Heavy',
      1000: 'DanaFaNum-Black',
      1050: 'DanaFaNum-ExtraBlack',
      1100: 'DanaFaNum-fat'
    },
    prefix: 'dana',
    description: 'Elegant, versatile Persian font with extensive weight range'
  },
  'kalameh': {
    family: 'Kalameh',
    weights: {
      100: 'KalamehWeb(FaNum)-Thin',
      200: 'KalamehWeb(FaNum)-ExtraLight',
      300: 'KalamehWeb(FaNum)-Light',
      400: 'KalamehWeb(FaNum)-Regular',
      500: 'KalamehWeb(FaNum)-Medium',
      600: 'KalamehWeb(FaNum)-SemiBold',
      700: 'KalamehWeb(FaNum)-Bold',
      800: 'KalamehWeb(FaNum)-ExtraBold',
      900: 'KalamehWeb(FaNum)-Black'
    },
    prefix: 'kalameh',
    description: 'Professional Persian font with clean geometric design'
  },
  'peyda': {
    family: 'Peyda',
    weights: {
      100: 'PeydaWeb-Thin',
      200: 'peydaWeb-extralight',
      400: 'peydaWeb-light',
      500: 'PeydaWeb-Regular',
      600: 'PeydaWeb-Medium',
      700: 'PeydaWeb-SemiBold',
      800: 'PeydaWeb-Bold',
      900: 'PeydaWeb-ExtraBold',
      950: 'PeydaWeb-Black'
    },
    prefix: 'peyda',
    description: 'Friendly, approachable Persian font for modern interfaces'
  },
  'yekan-bakh': {
    family: 'YekanBakh',
    weights: {
      100: 'YekanBakhFaNum-Thin',
      300: 'YekanBakhFaNum-Light',
      400: 'YekanBakhFaNum-Regular',
      600: 'YekanBakhFaNum-SemiBold',
      700: 'YekanBakhFaNum-Bold',
      800: 'YekanBakhFaNum-ExtraBold',
      900: 'YekanBakhFaNum-Black',
      950: 'YekanBakhFaNum-ExtraBlack'
    },
    prefix: 'yekan-bakh',
    description: 'Contemporary Persian font with excellent digital readability'
  }
};

// Utility classes for all fonts
const utilityClasses = [
  'text', 'heading', 'body', 'light', 'medium', 'bold', 'thin', 'black',
  'input', 'button', 'label', 'table', 'nav', 'card', 'modal',
  'search', 'pagination', 'badge', 'datetime', 'numbers', 'currency',
  'list', 'error', 'success', 'warning', 'info', 'tooltip', 'dropdown',
  'checkbox', 'radio', 'progress', 'breadcrumb', 'tabs', 'accordion',
  'timeline', 'stepper', 'notification', 'alert', 'skeleton', 'loading',
  'empty', 'spotlight', 'command', 'context-menu', 'popover', 'hover-card',
  'drawer', 'overlay', 'portal', 'scroll-area', 'virtual-list', 'infinite-scroll',
  'masonry', 'carousel', 'image', 'avatar', 'group', 'stack', 'grid',
  'container', 'center', 'flex', 'box', 'paper', 'section', 'divider', 'space'
];

function getWeightForClass(className) {
  const weightMap = {
    'thin': '100',
    'light': '300', 
    'text': 'normal',
    'body': 'normal',
    'medium': '500',
    'bold': 'bold',
    'heading': 'bold',
    'black': '900'
  };
  return weightMap[className] || 'normal';
}

function generateFontCSS(fontName, config) {
  let css = `/* ===== ${config.family.toUpperCase()} FONT CSS ===== */\n`;
  css += `/* ${config.description} */\n\n`;
  
  // Generate @font-face declarations
  Object.entries(config.weights).forEach(([weight, variant]) => {
    css += `@font-face {\n`;
    css += `  font-family: '${config.family}';\n`;
           css += `  src: url('../fonts/${fontName}/${variant}.woff2') format('woff2');\n`;
    css += `  font-weight: ${weight};\n`;
    css += `  font-style: normal;\n`;
    css += `  font-display: swap;\n`;
    css += `  unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;\n`;
    css += `}\n\n`;
  });
  
  // Generate utility classes
  css += `/* ===== ${config.family.toUpperCase()} TYPOGRAPHY CLASSES ===== */\n\n`;
  
  // Basic typography classes
  const basicClasses = ['text', 'heading', 'body', 'light', 'medium', 'bold', 'thin', 'black'];
  
  basicClasses.forEach(className => {
    const weight = getWeightForClass(className);
    css += `.${config.prefix}-${className} {\n`;
    css += `  font-family: '${config.family}', sans-serif;\n`;
    css += `  font-weight: ${weight};\n`;
    css += `  direction: rtl;\n`;
    css += `  text-align: right;\n`;
    css += `  line-height: 1.8;\n`;
    css += `  letter-spacing: 0.02em;\n`;
    css += `}\n\n`;
  });
  
  // Component classes
  utilityClasses.forEach(className => {
    if (!basicClasses.includes(className)) {
      css += `.${config.prefix}-${className} {\n`;
      css += `  font-family: '${config.family}', sans-serif;\n`;
      css += `  direction: rtl;\n`;
      css += `  text-align: right;\n`;
      css += `}\n\n`;
    }
  });
  
  // Special weight classes for fonts with many weights
  if (fontName === 'dana') {
    const danaWeights = {
      'hairline': '100',
      'ultra-light': '200',
      'thin': '300',
      'regular': '400',
      'light': '500',
      'medium': '600',
      'demi-bold': '700',
      'bold': '800',
      'extra-bold': '900',
      'heavy': '950',
      'black': '1000',
      'extra-black': '1050',
      'fat': '1100'
    };
    
    Object.entries(danaWeights).forEach(([weightName, weightValue]) => {
      css += `.${config.prefix}-${weightName} {\n`;
      css += `  font-family: '${config.family}', sans-serif;\n`;
      css += `  font-weight: ${weightValue};\n`;
      css += `  direction: rtl;\n`;
      css += `  text-align: right;\n`;
      css += `}\n\n`;
    });
  }
  
  return css;
}

// Generate CSS for all fonts
function generateAllCSS() {
  console.log('🚀 Generating CSS files for all fonts...\n');
  
  Object.entries(fontConfigs).forEach(([fontName, config]) => {
    const css = generateFontCSS(fontName, config);
    const cssPath = `css/${fontName}.css`;
    
    // Ensure css directory exists
    if (!fs.existsSync('css')) {
      fs.mkdirSync('css');
    }
    
    fs.writeFileSync(cssPath, css);
    console.log(`✅ Generated CSS for ${fontName} (${Object.keys(config.weights).length} weights)`);
  });
  
  // Generate combined CSS
  let combinedCSS = '/* ===== PERSIAN FONTS CDN - ALL FONTS ===== */\n';
  combinedCSS += '/* Comprehensive collection of Persian fonts for web applications */\n\n';
  
  Object.entries(fontConfigs).forEach(([fontName, config]) => {
    const css = fs.readFileSync(`css/${fontName}.css`, 'utf8');
    combinedCSS += `/* ${config.family.toUpperCase()} FONT */\n`;
    combinedCSS += css + '\n\n';
  });
  
  fs.writeFileSync('css/all-fonts.css', combinedCSS);
  console.log('✅ Generated combined CSS file (all-fonts.css)');
  
  console.log('\n🎉 CSS generation completed!');
  console.log('\nAvailable fonts:');
  Object.entries(fontConfigs).forEach(([fontName, config]) => {
    console.log(`  • ${config.family} (${config.prefix}) - ${config.description}`);
  });
}

// Run the generator
generateAllCSS();
