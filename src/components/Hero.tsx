
import React, { useState, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Cinematic entrance timing
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background cursor-brush">
      {/* Cinematic Background with Canvas Texture */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-primary/10 to-background">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7079cb8a-d812-456f-baaa-c741c04a8c4d.png')] bg-cover bg-center opacity-70 mix-blend-multiply" />
          {/* Gallery lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
      </div>

      {/* Animated Paint Drips */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-primary/80 paint-drip"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gallery Spotlight Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content - Gallery Style */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Artist Signature Logo */}
          <div className="mb-12 canvas-enter">
            <div className="inline-block relative">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold text-foreground mb-6 signature-text">
                <span className="inline-block transform hover:scale-105 transition-transform duration-500 text-shadow">
                  Painted
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text inline-block transform hover:scale-105 transition-transform duration-500 artwork-float">
                  Juttay
                </span>
              </h1>
              
              {/* Artist's Brush Stroke Underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent brush-reveal opacity-80"></div>
            </div>
          </div>

          {/* Gallery Description */}
          <div className={`transform transition-all duration-1500 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="gallery-card p-8 mb-8 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Paintbrush className="h-6 w-6 text-accent mr-3" />
                <span className="text-accent font-serif text-lg tracking-wider">Where Art Meets Street</span>
                <Paintbrush className="h-6 w-6 text-accent ml-3 scale-x-[-1]" />
              </div>
              
              <p className="text-xl sm:text-2xl text-foreground/90 mb-4 font-light leading-relaxed">
                Hand-painted sneakers that tell stories
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each pair is a canvas, each step is a statement. Witness the fusion of Pakistani street culture with contemporary art, 
                where every brushstroke carries the soul of the artist and every design tells a story of rebellion, beauty, and craftsmanship.
              </p>
            </div>
          </div>

          {/* Gallery Action Buttons */}
          <div className={`transform transition-all duration-1500 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="btn-paint text-foreground font-serif font-semibold px-10 py-4 text-lg splatter-hover hover:scale-105 transition-all duration-300 shadow-artwork"
                onClick={scrollToCollections}
              >
                Explore The Gallery
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground/30 text-foreground hover:bg-foreground hover:text-background font-serif font-semibold px-10 py-4 text-lg transition-all duration-500 hover:scale-105 hover:shadow-canvas"
              >
                Commission Artwork
              </Button>
            </div>
          </div>

          {/* Limited Edition Badge */}
          <div className={`transform transition-all duration-1500 delay-900 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-primary/10 border border-primary/30 px-6 py-3 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
              <span className="text-primary font-mono text-sm tracking-wider font-semibold">LIMITED DROPS • AUTHENTIC ARTISTRY • EXCLUSIVE PIECES</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse ml-3"></div>
            </div>
          </div>
        </div>

        {/* Sound Toggle - Gallery Style */}
        <div className="absolute top-6 right-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-foreground/70 hover:text-primary transition-all duration-300 backdrop-blur-sm bg-background/20 border border-foreground/10"
          >
            {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
        </div>

        {/* Gallery Viewing Invitation */}
        <div className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1100 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button 
            onClick={scrollToCollections}
            className="flex flex-col items-center text-foreground/80 hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-serif mb-3 tracking-wider">Enter The Vault</span>
            <div className="relative">
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-primary transition-colors" />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Gallery Floor Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-15" />
    </section>
  );
};

export default Hero;
