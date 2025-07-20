
import React, { useState, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-red-900/20 to-black">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7079cb8a-d812-456f-baaa-c741c04a8c4d.png')] bg-cover bg-center opacity-60" />
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full paint-drip"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Logo/Title */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Painted
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 inline-block transform hover:scale-105 transition-transform duration-300">
                Juttay
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2 font-light">
              Where Art Meets Street
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
              Hand-painted sneakers that tell stories. Each pair is a canvas, each step is a statement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-none border-2 border-red-600 transition-all duration-300 hover:scale-105"
              >
                Explore Collections
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-none transition-all duration-300 hover:scale-105"
              >
                Custom Order
              </Button>
            </div>
          </div>

          {/* Sound Toggle */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={scrollToCollections}
            className="flex flex-col items-center text-white hover:text-red-500 transition-colors duration-200 group"
          >
            <span className="text-sm mb-2 font-light">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-red-500" />
          </button>
        </div>
      </div>

      {/* Brush stroke decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;
