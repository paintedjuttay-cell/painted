
import React, { useState } from 'react';
import { ArrowRight, Star, Filter, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EnhancedCollections = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Collections', count: 24 },
    { id: 'classics', name: 'Classics', count: 8 },
    { id: 'bloody', name: 'Bloody Series', count: 6 },
    { id: 'collabs', name: 'Artist Collabs', count: 5 },
    { id: 'bids', name: 'Bids Only', count: 3 },
    { id: 'spotlight', name: 'Artist Spotlight', count: 2 }
  ];

  const collections = [
    {
      id: 1,
      name: "Crimson Rebellion",
      category: "bloody",
      description: "Bold statements in crimson and black",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      video: "https://example.com/video1.mp4", // In real app, you'd have actual videos
      featured: true,
      price: "From $299",
      artist: "Zara Khan",
      pieces: 12,
      soldOut: false
    },
    {
      id: 2,
      name: "Canvas Dreams",
      category: "classics",
      description: "Timeless designs on premium canvas",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      video: "https://example.com/video2.mp4",
      featured: false,
      price: "From $249",
      artist: "Ahmed Ali",
      pieces: 8,
      soldOut: false
    },
    {
      id: 3,
      name: "Digital Souls",
      category: "collabs",
      description: "Limited editions by emerging Pakistani artists",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      video: "https://example.com/video3.mp4",
      featured: true,
      price: "From $399",
      artist: "Fatima Sheikh",
      pieces: 5,
      soldOut: false
    },
    {
      id: 4,
      name: "Midnight Garden",
      category: "spotlight",
      description: "Botanical masterpieces under moonlight",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      video: "https://example.com/video4.mp4",
      featured: false,
      price: "From $349",
      artist: "Hassan Malik",
      pieces: 6,
      soldOut: true
    },
    {
      id: 5,
      name: "Golden Hour",
      category: "bids",
      description: "Exclusive auction pieces with gold accents",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      video: "https://example.com/video5.mp4",
      featured: true,
      price: "Auction Only",
      artist: "Sara Ahmed",
      pieces: 3,
      soldOut: false
    },
    {
      id: 6,
      name: "Urban Poetry",
      category: "classics",
      description: "Street art meets classical calligraphy",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      video: "https://example.com/video6.mp4",
      featured: false,
      price: "From $279",
      artist: "Ali Raza",
      pieces: 10,
      soldOut: false
    }
  ];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === activeFilter);

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 canvas-enter">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-4 signature-text">
            Our <span className="text-primary">Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 fade-in-up">
            Each collection tells a different story, crafted by passionate artists who transform ordinary shoes into extraordinary art pieces.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground btn-paint'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary splatter-hover'
                } transition-all duration-200`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className={`gallery-card collection-card bg-card border-border overflow-hidden group cursor-brush transition-all duration-300 ${
                collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${collection.soldOut ? 'opacity-75' : ''}`}
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    collection.featured ? 'h-80 lg:h-96' : 'h-64'
                  }`}
                />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {collection.featured && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 pulse-glow">
                      <Star className="h-3 w-3" fill="currentColor" />
                      Featured
                    </div>
                  )}
                  {collection.soldOut && (
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Sold Out
                    </div>
                  )}
                  {collection.category === 'bids' && (
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shimmer">
                      Auction
                    </div>
                  )}
                </div>

                {/* Play Button for Video Preview */}
                {hoveredCard === collection.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-red-600/80 hover:bg-red-600 text-white rounded-full w-16 h-16 p-0"
                    >
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </Button>
                  </div>
                )}
                
                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white w-full"
                    disabled={collection.soldOut}
                  >
                    {collection.soldOut ? 'Sold Out' : collection.category === 'bids' ? 'View Auction' : 'View Collection'}
                    {!collection.soldOut && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-200">
                    {collection.name}
                  </h3>
                  <span className={`font-semibold text-sm ${
                    collection.category === 'bids' ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {collection.price}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-3">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500">
                      by {collection.artist}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      {collection.pieces} pieces {collection.soldOut ? '(All sold)' : 'available'}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 p-0">
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-none transition-all duration-300"
          >
            View All Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCollections;
