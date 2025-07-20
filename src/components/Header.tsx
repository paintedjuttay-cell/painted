import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left side - Hamburger menu and action icons */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Search and Cart Icons - Enlarged */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
            >
              <Search className="h-7 w-7" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
            >
              <ShoppingBag className="h-7 w-7" />
            </Button>
          </div>

          {/* Right side - Keep empty for clean layout */}
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
