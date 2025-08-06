
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Collections = () => {
  // Collections with your painted shoes
  const collections = [
    {
      id: 1,
      image: "/lovable-uploads/7cb5a7bd-0394-4824-ba62-fc52889f76b4.png"
    },
    {
      id: 2,
      image: "/lovable-uploads/cfd57b00-3b18-428c-a15b-c6b9f06f42ca.png"
    },
    {
      id: 3,
      image: "/lovable-uploads/62cf5f4d-1cba-4fe6-b457-4a47dca26fb2.png"
    },
    {
      id: 4,
      image: "/lovable-uploads/883b383a-b197-4edf-bcff-2b364bdbb171.png"
    },
    {
      id: 5,
      image: "/lovable-uploads/9651a011-b4ae-4b0f-9e9a-e3be58e91ad6.png"
    },
    {
      id: 6,
      image: "/lovable-uploads/16b42d76-346a-470d-8d41-c7159474a7a6.png"
    },
    {
      id: 7,
      image: "/lovable-uploads/2770e58f-d5ea-455f-93a5-ef7adcec50e9.png"
    },
    {
      id: 8,
      image: "/lovable-uploads/add0f869-c969-4a51-997a-1961779353e4.png"
    },
    {
      id: 9,
      image: "/lovable-uploads/44585051-d82c-4467-8d29-6618d6a3d1be.png"
    },
    {
      id: 10,
      image: "/lovable-uploads/0cb4fd7a-434f-4ae6-9bcd-ea003961c405.png"
    }
  ];

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
            collections.map((collection) => (
              <Card 
                key={collection.id} 
                className="shoe-card bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={`Painted Juttay ${collection.id}`}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
