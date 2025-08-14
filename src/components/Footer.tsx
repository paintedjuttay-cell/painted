
import React from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Painted Juttay</h3>
            <p className="text-muted-foreground">
              Authentic handcrafted Punjabi juttis painted with traditional artistry. 
              Each pair tells a story of heritage and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#collections" className="block text-muted-foreground hover:text-primary transition-colors">Collections</a>
              <a href="#custom" className="block text-muted-foreground hover:text-primary transition-colors">Custom Order</a>
              <a href="#artists" className="block text-muted-foreground hover:text-primary transition-colors">Artists</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Shipping Info</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Return Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Size Guide</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Care Instructions</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>123 Heritage Street</div>
                  <div>Amritsar, Punjab 143001</div>
                  <div>India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">hello@paintedjuttay.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Painted Juttay. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
