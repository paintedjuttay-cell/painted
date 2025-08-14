
# Shopify + React Integration Guide

This project now supports dual-mode operation: your React app for the main experience and Shopify's native templates for e-commerce functionality.

## Project Structure

```
/
├── assets/                 # Shopify assets (CSS, JS, images)
├── config/                 # Shopify theme configuration
├── layout/                 # Shopify layout templates
├── sections/               # Shopify section files
├── templates/              # Shopify page templates
├── src/                    # React application source
└── public/                 # React public assets
```

## How It Works

### React App (Homepage & Custom Pages)
- Your React app loads on the homepage (`/`) and custom pages
- Handles navigation, animations, and interactive features
- Uses Shopify Storefront API for product data and cart operations

### Shopify Templates (E-commerce Pages)
- Product pages (`/products/*`) use Shopify's native templates
- Collection pages (`/collections/*`) use Shopify's native templates
- Cart and checkout pages use Shopify's native functionality

## Development Workflow

### 1. Local Development
```bash
# Run React app in development mode
npm run dev

# Run Shopify theme development (separate terminal)
shopify theme dev
```

### 2. Building for Shopify
```bash
# Build React app for Shopify integration
npm run build:shopify

# This creates optimized bundles in the /assets folder
```

### 3. Deploying to Shopify

```bash
# Push theme to Shopify
shopify theme push

# Or for live theme
shopify theme push --live
```

## Integration Features

### Shopify Data Access
Your React app can access Shopify data via `window.shopifyData`:

```javascript
import { getShopifyData, addToCart, getCart } from '@/utils/shopifyIntegration';

// Get shop information
const shopData = getShopifyData();

// Add product to cart
await addToCart(variantId, quantity);

// Get current cart
const cart = await getCart();
```

### Navigation Between React and Shopify
- React app handles main navigation and homepage
- Links to products/collections redirect to Shopify pages
- Cart icon can show Shopify cart count
- Seamless user experience between both systems

## Configuration

### Shopify Section Files Created
- `sections/featured-product.liquid` - Product showcase section
- `sections/multicolumn.liquid` - Multi-column content section
- `sections/hero.liquid` - Already existed, hero banner section
- `sections/collections.liquid` - Already existed, collections showcase

### Template Configuration
All templates in `/templates` now reference existing sections, eliminating validation errors.

## Testing Checklist

- [ ] React app loads correctly on homepage
- [ ] Navigation works between React and Shopify pages
- [ ] Product pages display properly using Shopify templates
- [ ] Cart functionality works across both systems
- [ ] Theme passes Shopify validation
- [ ] No console errors in browser
- [ ] Mobile responsiveness maintained

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check that build outputs to `/assets` folder correctly
- Verify Shopify CLI is properly configured

### Integration Issues
- Check browser console for JavaScript errors
- Verify `window.shopifyData` is available in React app
- Ensure proper routing between React and Shopify pages

### Shopify Validation
- Run `shopify theme check` to validate theme files
- Ensure all section references in templates exist
- Check that required Shopify files are present

## Next Steps

1. **Test the integration** by running both development servers
2. **Build for production** using `npm run build:shopify`
3. **Deploy to Shopify** using `shopify theme push`
4. **Test e-commerce flow** from product selection to checkout
5. **Optimize performance** by checking bundle sizes and loading times

This setup gives you the best of both worlds: a modern React frontend with full Shopify e-commerce capabilities.
