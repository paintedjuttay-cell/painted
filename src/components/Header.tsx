import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { open } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 px-4 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between h-12 w-full">
        {/* Left - Sidebar trigger */}
        <div className="flex items-center">
          <SidebarTrigger className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105">
            <Menu className="h-4 w-4" />
          </SidebarTrigger>
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
        <div className="flex items-center gap-2 ml-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-foreground hover:text-primary transition-all duration-200 hover:scale-105"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-foreground hover:text-primary transition-all duration-200 hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-foreground hover:text-primary transition-all duration-200 hover:scale-105"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
