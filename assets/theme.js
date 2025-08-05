// Shopify Theme JavaScript

// Header Scroll Effect
function initHeaderScroll() {
  let isScrolled = false;
  const header = document.querySelector('header');
  const brandName = document.querySelector('.header-brand');

  function handleScroll() {
    const scrollY = window.scrollY;
    const shouldShow = scrollY > 50;

    if (shouldShow !== isScrolled) {
      isScrolled = shouldShow;
      
      if (header) {
        if (isScrolled) {
          header.classList.add('scrolled');
          header.style.backgroundColor = 'hsl(var(--background) / 0.9)';
          header.style.backdropFilter = 'blur(12px)';
          header.style.borderBottom = '1px solid hsl(var(--border))';
        } else {
          header.classList.remove('scrolled');
          header.style.backgroundColor = 'transparent';
          header.style.backdropFilter = 'none';
          header.style.borderBottom = 'none';
        }
      }

      if (brandName) {
        brandName.style.opacity = isScrolled ? '1' : '0';
        brandName.style.transform = isScrolled ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.9)';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call
}

// Sidebar Toggle
function initSidebar() {
  const sidebarTrigger = document.querySelector('.sidebar-trigger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (sidebarTrigger && sidebar) {
    sidebarTrigger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      document.body.classList.toggle('sidebar-open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    });
  }
}

// Hero Animations
function initHeroAnimations() {
  const heroElements = document.querySelectorAll('.hero-animate');
  
  // Trigger animations after a short delay
  setTimeout(() => {
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 200);
    });
  }, 500);
}

// Collection Filtering
function initCollectionFiltering() {
  const filterButtons = document.querySelectorAll('.collection-filter');
  const collectionCards = document.querySelectorAll('.collection-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
      });
      button.classList.add('active');
      button.classList.add('btn-primary');
      button.classList.remove('btn-outline');

      // Filter cards
      collectionCards.forEach(card => {
        const category = card.dataset.category;
        const featured = card.dataset.featured === 'true';
        
        let show = false;
        if (filter === 'all') {
          show = true;
        } else if (filter === 'featured' && featured) {
          show = true;
        } else if (filter === category) {
          show = true;
        }

        if (show) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });
}

// Cart Functions
const Cart = {
  // Add item to cart
  addItem: async function(variantId, quantity = 1, properties = {}) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
          properties: properties
        })
      });

      if (response.ok) {
        const item = await response.json();
        this.updateCartCount();
        this.showNotification('Item added to cart!', 'success');
        return item;
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      this.showNotification('Error adding item to cart', 'error');
      throw error;
    }
  },

  // Update cart count in header
  updateCartCount: async function() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('.cart-count');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        if (cart.item_count > 0) {
          element.style.display = 'block';
        }
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  },

  // Show notification
  showNotification: function(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 6px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
      notification.style.backgroundColor = 'hsl(var(--primary))';
    } else if (type === 'error') {
      notification.style.backgroundColor = 'hsl(var(--destructive))';
    } else {
      notification.style.backgroundColor = 'hsl(var(--secondary))';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
};

// Product Quick View
function initQuickView() {
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  
  quickViewButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const productHandle = button.dataset.handle;
      
      try {
        const response = await fetch(`/products/${productHandle}.js`);
        const product = await response.json();
        showQuickViewModal(product);
      } catch (error) {
        console.error('Error loading product:', error);
      }
    });
  });
}

// Show Quick View Modal
function showQuickViewModal(product) {
  const modal = document.createElement('div');
  modal.className = 'quick-view-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;

  const modalContent = document.createElement('div');
  modalContent.className = 'quick-view-content';
  modalContent.style.cssText = `
    background: hsl(var(--background));
    border-radius: 8px;
    padding: 2rem;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  `;

  modalContent.innerHTML = `
    <button class="close-modal" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <img src="${product.featured_image}" alt="${product.title}" class="w-full rounded">
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
        <p class="text-lg mb-4">${(product.price / 100).toFixed(2)} USD</p>
        <div class="mb-4">${product.description}</div>
        <button class="btn btn-primary w-full add-to-cart-quick" data-variant-id="${product.variants[0].id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close modal handlers
  modal.querySelector('.close-modal').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Add to cart handler
  modal.querySelector('.add-to-cart-quick').addEventListener('click', async () => {
    const variantId = modal.querySelector('.add-to-cart-quick').dataset.variantId;
    await Cart.addItem(variantId);
    document.body.removeChild(modal);
  });
}

// Search Functionality
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  let searchTimeout;

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length > 2) {
        searchTimeout = setTimeout(() => {
          performSearch(query);
        }, 300);
      } else {
        if (searchResults) {
          searchResults.style.display = 'none';
        }
      }
    });
  }
}

// Perform Search
async function performSearch(query) {
  try {
    const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
    const data = await response.json();
    
    displaySearchResults(data.resources.results.products);
  } catch (error) {
    console.error('Search error:', error);
  }
}

// Display Search Results
function displaySearchResults(products) {
  const searchResults = document.querySelector('.search-results');
  
  if (!searchResults) return;

  if (products.length === 0) {
    searchResults.innerHTML = '<div class="p-4">No products found</div>';
  } else {
    searchResults.innerHTML = products.map(product => `
      <a href="${product.url}" class="search-result-item block p-4 hover:bg-gray-100 border-b">
        <div class="flex gap-3">
          <img src="${product.featured_image}" alt="${product.title}" class="w-12 h-12 object-cover rounded">
          <div>
            <div class="font-medium">${product.title}</div>
            <div class="text-sm text-gray-600">${(product.price / 100).toFixed(2)} USD</div>
          </div>
        </div>
      </a>
    `).join('');
  }

  searchResults.style.display = 'block';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initHeaderScroll();
  initSidebar();
  initHeroAnimations();
  initCollectionFiltering();
  initQuickView();
  initSearch();
  Cart.updateCartCount();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add to cart forms
  document.querySelectorAll('.add-to-cart-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const variantId = formData.get('id');
      const quantity = parseInt(formData.get('quantity')) || 1;
      
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      button.textContent = 'Adding...';
      button.disabled = true;
      
      try {
        await Cart.addItem(variantId, quantity);
        button.textContent = 'Added!';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      } catch (error) {
        button.textContent = 'Error';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      }
    });
  });
});

// Export for global access
window.Cart = Cart;