
import React, { useState, useEffect } from 'react';
import { ChevronDown, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-black text-foreground mb-8">
                <span className="inline-block cinematic-title text-reveal-brush art-hover">
                  Painted
                </span>
                <br />
                <span className="cinematic-title text-glow inline-block artistic-float cursor-artwork">
                  {'{'}Juttay{'}'}
                </span>
              </h1>
              
              {/* Enhanced Artist's Signature */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6">
                <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent brush-reveal opacity-90"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full premium-glow"></div>
              </div>
            </div>
          </div>

          {/* Gallery Description */}
          <div className={`transform transition-all duration-1500 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="premium-card p-10 mb-10 cursor-artwork">
              <div className="flex items-center justify-center mb-6 group">
                <Paintbrush className="h-7 w-7 text-primary mr-4 artistic-float" />
                <span className="text-primary font-serif text-xl tracking-wider font-bold text-glow">Where Art Meets Street</span>
                <Paintbrush className="h-7 w-7 text-primary ml-4 scale-x-[-1] artistic-float" style={{ animationDelay: '2s' }} />
              </div>
              
              <p className="text-2xl sm:text-3xl text-foreground mb-6 font-light leading-relaxed cinematic-title">
                Hand-painted sneakers that tell stories
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Each pair is a canvas, each step is a statement. Witness the fusion of <span className="text-accent font-medium">Pakistani street culture</span> with contemporary art, 
                where every brushstroke carries the soul of the artist and every design tells a story of <span className="text-primary font-medium">rebellion, beauty, and craftsmanship</span>.
              </p>
            </div>
          </div>

          {/* Gallery Action Buttons */}
          <div className={`transform transition-all duration-1500 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Button 
                size="lg" 
                className="btn-paint bg-primary hover:bg-primary/90 text-primary-foreground font-serif font-bold px-12 py-5 text-xl splatter-hover art-hover premium-glow group"
                onClick={scrollToCollections}
              >
                <Paintbrush className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Explore The Gallery
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-serif font-bold px-12 py-5 text-xl art-hover group backdrop-blur-sm"
              >
                <span className="mr-3">🎨</span>
                Commission Artwork
              </Button>
            </div>
          </div>

          {/* Limited Edition Badge */}
          <div className={`transform transition-all duration-1500 delay-900 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 px-8 py-4 backdrop-blur-sm premium-glow group cursor-artwork">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse mr-4 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-primary font-mono text-base tracking-wider font-bold">LIMITED DROPS • AUTHENTIC ARTISTRY • EXCLUSIVE PIECES</span>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse ml-4 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          </div>
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
