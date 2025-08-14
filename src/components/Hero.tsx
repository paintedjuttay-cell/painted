
import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="cinematic-title">Painted</span>
              <br />
              <span className="text-foreground">Juttay</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover authentic handcrafted Punjabi juttis painted with traditional artistry. 
              Each pair tells a story of heritage and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Shop Collections
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Custom Order
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full flex items-center justify-center">
              <div className="text-8xl">👠</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
