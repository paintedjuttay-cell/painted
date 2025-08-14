
import React, { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Painted Juttay
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#collections" className="text-foreground hover:text-primary transition-colors">Collections</a>
            <a href="#custom" className="text-foreground hover:text-primary transition-colors">Custom Order</a>
            <a href="#artists" className="text-foreground hover:text-primary transition-colors">Artists</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#collections" className="text-foreground hover:text-primary transition-colors">Collections</a>
              <a href="#custom" className="text-foreground hover:text-primary transition-colors">Custom Order</a>
              <a href="#artists" className="text-foreground hover:text-primary transition-colors">Artists</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
