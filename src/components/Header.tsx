import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [notifications, setNotifications] = useState(2);

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
          {/* Left side - Quick actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <Search className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>

          {/* Center - Brand name when scrolled */}
          {isScrolled && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-foreground font-bold text-lg tracking-wider cinematic-title">
                Painted Juttay
              </span>
            </div>
          )}

          {/* Right side - User actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              <Bell className="h-6 w-6 group-hover:animate-pulse" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              <ShoppingBag className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <User className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
