
import React from 'react'
import { Star } from 'lucide-react'

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Traditional Punjabi",
      image: "👠",
      price: "₹2,999",
      rating: 4.8,
      description: "Classic handpainted designs with traditional motifs"
    },
    {
      id: 2,
      name: "Modern Fusion",
      image: "👠",
      price: "₹3,499",
      rating: 4.9,
      description: "Contemporary patterns with traditional craftsmanship"
    },
    {
      id: 3,
      name: "Bridal Collection",
      image: "👠",
      price: "₹4,999",
      rating: 5.0,
      description: "Elegant designs perfect for special occasions"
    },
    {
      id: 4,
      name: "Casual Wear",
      image: "👠",
      price: "₹2,499",
      rating: 4.7,
      description: "Comfortable everyday juttis with beautiful artwork"
    }
  ]

  return (
    <section id="collections" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Collections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of handcrafted juttis, each piece uniquely painted by skilled artisans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <div key={item.id} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-6xl">{item.image}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{item.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
