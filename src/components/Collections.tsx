
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Collections = () => {
  // Collections data will be populated with your Painted Juttay shoes
  const collections = [];

  return (
    <section id="collections" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-red-500">Collections</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Each collection tells a different story, crafted by passionate artists who transform ordinary shoes into extraordinary art pieces.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.length > 0 ? (
            collections.map((collection, index) => (
              <Card 
                key={collection.id} 
                className={`shoe-card bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer ${
                  collection.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {collection.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3" fill="currentColor" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white w-full">
                      View Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-200">
                      {collection.name}
                    </h3>
                    <span className="text-red-500 font-semibold text-sm">
                      {collection.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      by {collection.artist}
                    </span>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 p-0">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">Collections Coming Soon</h3>
              <p className="text-gray-400">Our beautiful Painted Juttay collections will be displayed here.</p>
            </div>
          )}
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

export default Collections;
