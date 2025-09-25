const fs = require('fs');
const path = require('path');

// Font configurations
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
    }
  },
  'dana': {
    family: 'Dana',
    weights: {
      100: 'Dana-Hairline',
      200: 'Dana-UltraLight',
      300: 'Dana-Thin',
      400: 'Dana-Light',
      500: 'Dana-Regular',
      600: 'Dana-Medium',
      700: 'Dana-DemiBold',
      800: 'Dana-Bold',
      900: 'Dana-ExtraBold',
      950: 'Dana-Heavy',
      1000: 'Dana-Black',
      1050: 'Dana-ExtraBlack',
      1100: 'Dana-fat'
    }
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
    }
  },
  'peyda': {
    family: 'Peyda',
    weights: {
      100: 'PeydaWeb-Thin',
      200: 'peydaWeb-extralight',
      300: 'peydaWeb-light',
      400: 'PeydaWeb-Regular',
      500: 'PeydaWeb-Medium',
      600: 'PeydaWeb-SemiBold',
      700: 'PeydaWeb-Bold',
      800: 'PeydaWeb-ExtraBold',
      900: 'PeydaWeb-Black'
    }
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
    }
  }
};

function validateFonts() {
  console.log('🔍 Validating font files...\n');
  
  let totalFonts = 0;
  let validFonts = 0;
  let missingFonts = [];
  
  Object.entries(fontConfigs).forEach(([fontName, config]) => {
    console.log(`📁 Checking ${config.family} (${fontName}):`);
    
    const fontDir = `fonts/${fontName}`;
    
    if (!fs.existsSync(fontDir)) {
      console.log(`  ❌ Font directory not found: ${fontDir}`);
      return;
    }
    
    Object.entries(config.weights).forEach(([weight, variant]) => {
      totalFonts++;
      const fontFile = `${fontDir}/${variant}.woff2`;
      
      if (fs.existsSync(fontFile)) {
        const stats = fs.statSync(fontFile);
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`  ✅ ${variant} (${weight}) - ${sizeKB}KB`);
        validFonts++;
      } else {
        console.log(`  ❌ Missing: ${variant} (${weight}) - ${fontFile}`);
        missingFonts.push({
          font: config.family,
          variant: variant,
          weight: weight,
          path: fontFile
        });
      }
    });
    
    console.log('');
  });
  
  // Summary
  console.log('📊 Validation Summary:');
  console.log(`  Total font files: ${totalFonts}`);
  console.log(`  Valid files: ${validFonts}`);
  console.log(`  Missing files: ${missingFonts.length}`);
  
  if (missingFonts.length > 0) {
    console.log('\n❌ Missing font files:');
    missingFonts.forEach(missing => {
      console.log(`  • ${missing.font} ${missing.variant} (${missing.weight})`);
    });
    console.log('\n⚠️  Please add missing font files before building CSS.');
    return false;
  }
  
  console.log('\n✅ All font files are present and valid!');
  return true;
}

function validateCSS() {
  console.log('\n🎨 Validating CSS files...\n');
  
  const cssFiles = [
    'css/iran-yekan.css',
    'css/dana.css',
    'css/kalameh.css',
    'css/peyda.css',
    'css/yekan-bakh.css',
    'css/all-fonts.css'
  ];
  
  let validCSS = 0;
  
  cssFiles.forEach(cssFile => {
    if (fs.existsSync(cssFile)) {
      const content = fs.readFileSync(cssFile, 'utf8');
      const sizeKB = Math.round(content.length / 1024);
      console.log(`  ✅ ${cssFile} - ${sizeKB}KB`);
      validCSS++;
    } else {
      console.log(`  ❌ Missing: ${cssFile}`);
    }
  });
  
  console.log(`\n📊 CSS Validation: ${validCSS}/${cssFiles.length} files present`);
  
  if (validCSS === cssFiles.length) {
    console.log('✅ All CSS files are present!');
    return true;
  } else {
    console.log('⚠️  Some CSS files are missing. Run "npm run generate-css" first.');
    return false;
  }
}

function validateCDNLinks() {
  console.log('\n🌐 Validating CDN links...\n');
  
  const baseURL = 'https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main';
  
  console.log('CDN Links:');
  Object.entries(fontConfigs).forEach(([fontName, config]) => {
    console.log(`  • ${config.family}: ${baseURL}/css/${fontName}.css`);
  });
  console.log(`  • All Fonts: ${baseURL}/css/all-fonts.css`);
  
  console.log('\n📝 Usage examples:');
  console.log('  <link rel="stylesheet" href="' + baseURL + '/css/all-fonts.css">');
  console.log('  <link rel="stylesheet" href="' + baseURL + '/css/iran-yekan.css">');
  console.log('  <link rel="stylesheet" href="' + baseURL + '/css/dana.css">');
}

// Run validation
console.log('🚀 Persian Fonts CDN Validator\n');

const fontsValid = validateFonts();
const cssValid = validateCSS();
validateCDNLinks();

if (fontsValid && cssValid) {
  console.log('\n🎉 All validations passed! Your Persian Fonts CDN is ready to use.');
} else {
  console.log('\n⚠️  Some validations failed. Please fix the issues above.');
  process.exit(1);
}
