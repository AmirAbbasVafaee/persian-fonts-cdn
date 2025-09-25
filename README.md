# Persian Fonts CDN

A comprehensive collection of beautiful Persian fonts for web applications, hosted on JSDelivr CDN with utility classes.

## 🎨 Available Fonts

| Font | Description | Weights | CDN Link |
|------|-------------|---------|----------|
| **Iran Yekan** | Modern, clean Persian font with excellent readability | 8 weights | [CSS](https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/iran-yekan.css) |
| **Dana** | Elegant, versatile Persian font with extensive weight range | 13 weights | [CSS](https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/dana.css) |
| **Kalameh** | Professional Persian font with clean geometric design | 9 weights | [CSS](https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/kalameh.css) |
| **Peyda** | Friendly, approachable Persian font for modern interfaces | 9 weights | [CSS](https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/peyda.css) |
| **Yekan Bakh** | Contemporary Persian font with excellent digital readability | 9 weights | [CSS](https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/yekan-bakh.css) |

## 🚀 Quick Start

### All Fonts (Recommended for Development)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/all-fonts.css">
```

### Individual Font
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/iran-yekan.css">
```

## 📖 Usage Examples

### Iran Yekan
```css
.persian-text {
  font-family: 'IranYekan', sans-serif;
  direction: rtl;
  text-align: right;
}
```

### Dana
```css
.persian-text {
  font-family: 'Dana', sans-serif;
  direction: rtl;
  text-align: right;
}
```

### Kalameh
```css
.persian-text {
  font-family: 'Kalameh', sans-serif;
  direction: rtl;
  text-align: right;
}
```

### Peyda
```css
.persian-text {
  font-family: 'Peyda', sans-serif;
  direction: rtl;
  text-align: right;
}
```

### Yekan Bakh
```css
.persian-text {
  font-family: 'YekanBakh', sans-serif;
  direction: rtl;
  text-align: right;
}
```

## 🎯 Font Comparison Tool

Visit our [interactive showcase](examples/index.html) to see all fonts side by side.

## 📱 Framework Integration

### React/Next.js
```jsx
import './persian-fonts.css';

function PersianComponent() {
  return (
    <div className="iran-yekan-text">
      <h1 className="iran-yekan-heading">سلام دنیا</h1>
      <p className="dana-text">متن با فونت دانا</p>
    </div>
  );
}
```

### Tailwind CSS
```html
<div class="iran-yekan-text text-right">
  <h1 class="iran-yekan-heading text-2xl">عنوان فارسی</h1>
  <p class="dana-text text-gray-600">متن بدنه فارسی</p>
</div>
```

### Vue.js
```vue
<template>
  <div class="kalameh-text">
    <h1 class="kalameh-heading">عنوان</h1>
    <p class="peyda-text">متن با فونت پیدا</p>
  </div>
</template>
```

## 🎨 Available Classes

### Typography Classes
Each font has its own set of utility classes:

#### Iran Yekan
- `.iran-yekan-text` - General Persian text
- `.iran-yekan-heading` - Persian headings
- `.iran-yekan-body` - Persian body text
- `.iran-yekan-thin` - Thin weight (100)
- `.iran-yekan-light` - Light weight (300)
- `.iran-yekan-medium` - Medium weight (500)
- `.iran-yekan-bold` - Bold weight (700)
- `.iran-yekan-black` - Black weight (900)

#### Dana (13 weights available)
- `.dana-hairline` - Hairline weight (100)
- `.dana-ultra-light` - Ultra Light weight (200)
- `.dana-thin` - Thin weight (300)
- `.dana-light` - Light weight (400)
- `.dana-regular` - Regular weight (500)
- `.dana-medium` - Medium weight (600)
- `.dana-demi-bold` - Demi Bold weight (700)
- `.dana-bold` - Bold weight (800)
- `.dana-extra-bold` - Extra Bold weight (900)
- `.dana-heavy` - Heavy weight (950)
- `.dana-black` - Black weight (1000)
- `.dana-extra-black` - Extra Black weight (1050)
- `.dana-fat` - Fat weight (1100)

#### Kalameh
- `.kalameh-thin` - Thin weight (100)
- `.kalameh-extra-light` - Extra Light weight (200)
- `.kalameh-light` - Light weight (300)
- `.kalameh-text` - Regular weight (400)
- `.kalameh-medium` - Medium weight (500)
- `.kalameh-semi-bold` - Semi Bold weight (600)
- `.kalameh-bold` - Bold weight (700)
- `.kalameh-extra-bold` - Extra Bold weight (800)
- `.kalameh-black` - Black weight (900)

#### Peyda
- `.peyda-thin` - Thin weight (100)
- `.peyda-extralight` - Extra Light weight (200)
- `.peyda-light` - Light weight (300)
- `.peyda-text` - Regular weight (400)
- `.peyda-medium` - Medium weight (500)
- `.peyda-semi-bold` - Semi Bold weight (600)
- `.peyda-bold` - Bold weight (700)
- `.peyda-extra-bold` - Extra Bold weight (800)
- `.peyda-black` - Black weight (900)

#### Yekan Bakh
- `.yekan-bakh-thin` - Thin weight (100)
- `.yekan-bakh-light` - Light weight (300)
- `.yekan-bakh-text` - Regular weight (400)
- `.yekan-bakh-medium` - Medium weight (500)
- `.yekan-bakh-semi-bold` - Semi Bold weight (600)
- `.yekan-bakh-bold` - Bold weight (700)
- `.yekan-bakh-extra-bold` - Extra Bold weight (800)
- `.yekan-bakh-black` - Black weight (900)
- `.yekan-bakh-extra-black` - Extra Black weight (950)

### Component Classes
All fonts support these component classes:
- `.{font}-input` - Form inputs
- `.{font}-button` - Buttons
- `.{font}-label` - Labels
- `.{font}-table` - Tables
- `.{font}-nav` - Navigation
- `.{font}-card` - Cards
- `.{font}-modal` - Modals
- `.{font}-search` - Search components
- `.{font}-pagination` - Pagination
- `.{font}-badge` - Badges
- `.{font}-datetime` - Date/time displays
- `.{font}-numbers` - Number displays
- `.{font}-currency` - Currency displays
- `.{font}-list` - Lists
- `.{font}-error` - Error messages
- `.{font}-success` - Success messages
- `.{font}-warning` - Warning messages
- `.{font}-info` - Info messages

## 🌐 Browser Support

- Chrome 6+
- Firefox 3.6+
- Safari 5.1+
- Edge 12+
- IE 9+

## 📱 Responsive Design

The fonts work perfectly with responsive design frameworks:

```css
/* Mobile */
@media (max-width: 768px) {
  .iran-yekan-text {
    font-size: 14px;
    line-height: 1.6;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .iran-yekan-text {
    font-size: 16px;
    line-height: 1.7;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .iran-yekan-text {
    font-size: 18px;
    line-height: 1.8;
  }
}
```

## 🎯 Performance

- **Font Display**: Uses `font-display: swap` for optimal loading
- **Unicode Range**: Optimized for Persian characters only (`U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF`)
- **CDN**: Served via JSDelivr for global performance
- **Compression**: WOFF2 format for smallest file size

### Unicode Range Explanation

The `unicode-range` property tells the browser which characters should use this font. This means:

- **Persian/Arabic text** → Persian font loads
- **English/Latin text** → Default system font (no Persian font loaded)

**Example:**
```html
<p>Hello World - این متن فارسی است</p>
```
- "Hello World" → Uses default font (no Persian font loaded)
- "این متن فارسی است" → Uses Persian font (loaded only for Persian text)

This makes your font CDN more efficient by only loading the Persian font when Persian text is actually present on the page!

## 🔧 Development

```bash
# Install dependencies
npm install

# Generate CSS files from font configurations
npm run generate-css

# Build minified CSS files
npm run build

# Validate all fonts and CSS files
npm run validate

# Run all tests
npm run test
```

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](docs/CONTRIBUTING.md).

## 🆘 Support

If you have any questions or need help:

1. Open an issue on GitHub
2. Check the [examples](examples/) directory
3. Test with the CDN URL directly
4. Visit our [showcase](examples/index.html)

## 🔗 Links

- **CDN URL**: `https://cdn.jsdelivr.net/gh/AmirAbbasVafaee/persian-fonts-cdn@main/css/all-fonts.css`
- **GitHub Repository**: `https://github.com/AmirAbbasVafaee/persian-fonts-cdn`
- **JSDelivr**: `https://www.jsdelivr.com/`
- **Interactive Showcase**: [examples/index.html](examples/index.html)

## 📊 Usage Statistics

- **5 Fonts** available
- **48 Different Weights** across all fonts
- **100+ Utility Classes** for easy integration
- **Optimized for Performance** with unicode-range targeting

---

**Made with ❤️ for the Persian developer community**