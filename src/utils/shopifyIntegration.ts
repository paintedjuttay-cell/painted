
// Shopify integration utilities
interface ShopifyData {
  shop: {
    name: string;
    domain: string;
    currency: string;
    money_format: string;
  };
  cart: any;
  customer: any;
  template: string;
  page: {
    title: string;
    url: string;
  };
}

// Get Shopify data from window object (injected by Liquid template)
export const getShopifyData = (): ShopifyData | null => {
  if (typeof window !== 'undefined' && (window as any).shopifyData) {
    return (window as any).shopifyData;
  }
  return null;
};

// Check if running in Shopify environment
export const isShopifyEnvironment = (): boolean => {
  return typeof window !== 'undefined' && !!(window as any).shopifyData;
};

// Add item to Shopify cart
export const addToCart = async (variantId: number, quantity = 1) => {
  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: variantId,
      quantity: quantity,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }
  
  return response.json();
};

// Get cart data
export const getCart = async () => {
  const response = await fetch('/cart.js');
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

// Update cart item
export const updateCart = async (variantId: number, quantity: number) => {
  const response = await fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: variantId,
      quantity: quantity,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update cart');
  }
  
  return response.json();
};

// Format money using Shopify's format
export const formatMoney = (cents: number): string => {
  const shopifyData = getShopifyData();
  if (shopifyData?.shop.money_format) {
    // Use Shopify's money format
    const dollars = cents / 100;
    return shopifyData.shop.money_format.replace('{{amount}}', dollars.toFixed(2));
  }
  
  // Fallback format
  return `$${(cents / 100).toFixed(2)}`;
};

// Redirect to Shopify checkout
export const redirectToCheckout = () => {
  window.location.href = '/checkout';
};

// Navigate to Shopify product page
export const navigateToProduct = (handle: string) => {
  window.location.href = `/products/${handle}`;
};

// Navigate to Shopify collection page
export const navigateToCollection = (handle: string) => {
  window.location.href = `/collections/${handle}`;
};
