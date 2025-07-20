
import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    name: "Crimson Dreams",
    artist: "Zara Khan",
    price: 349,
    originalPrice: 399,
    description: "A haunting masterpiece featuring flowing crimson brushstrokes that seem to drip with emotion. This piece represents the passion and intensity of street art culture.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    ],
    features: [
      "Hand-painted with premium acrylic paints",
      "Waterproof protective coating",
      "Limited edition (1 of 10)",
      "Signed by the artist",
      "Includes authenticity certificate"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    inStock: true
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center canvas-enter">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 space-y-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-1 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImage === index 
                      ? 'border-red-500 scale-105' 
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-primary text-sm font-semibold mb-2 fade-in-up">FEATURED ARTWORK</p>
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground mb-2 signature-text">
                {product.name}
              </h1>
              <p className="text-muted-foreground">by {product.artist}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-white">${product.price}</span>
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                SAVE ${product.originalPrice - product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3">What makes this special:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Select Size:</h3>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500 rounded-none"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-none transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart - ${product.price}
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-none"
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500 rounded-none"
                >
                  Customize
                </Button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-green-500 text-sm font-semibold">In Stock - Limited Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
