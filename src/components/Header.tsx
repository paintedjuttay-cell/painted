import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pr-4 sm:pr-6 lg:pr-8 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between h-16 lg:h-20 w-full">
        {/* Left - Sidebar trigger */}
        <div className="flex items-center">
          <SidebarTrigger className="mr-4" />
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
        <div className="flex items-center gap-4 ml-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
          >
            <Bell className="h-6 w-6 group-hover:animate-pulse" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
          >
            <ShoppingBag className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
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
    </header>
  );
};

export default Header;
