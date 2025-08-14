import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating dots decoration */}
      <div className="floating-dot" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
      <div className="floating-dot" style={{ top: '20%', right: '20%', animationDelay: '1s' }}></div>
      <div className="floating-dot" style={{ top: '60%', left: '10%', animationDelay: '2s' }}></div>
      <div className="floating-dot" style={{ bottom: '30%', right: '15%', animationDelay: '0.5s' }}></div>
      <div className="floating-dot" style={{ top: '45%', left: '5%', animationDelay: '1.5s' }}></div>
      <div className="floating-dot" style={{ top: '75%', right: '25%', animationDelay: '2.5s' }}></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold cinematic-title mb-8">
            Painted<br />
            <span className="inline-block">
              <span className="text-accent">{`{`}</span>
              Juttay
              <span className="text-accent">{`}`}</span>
            </span>
          </h1>
        </header>

        {/* Main content card */}
        <main className="max-w-4xl mx-auto">
          <div className="content-card rounded-2xl p-8 md:p-12 mb-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 text-accent text-2xl">✦</div>
            <div className="absolute top-6 right-6 text-accent text-2xl">✦</div>
            
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-accent text-lg">✦</span>
                <span className="text-accent font-medium tracking-wider text-sm uppercase">
                  Where Art Meets Street
                </span>
                <span className="text-accent text-lg">✦</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                Hand-painted sneakers that tell stories
              </h2>
              
              <p className="text-lg text-card-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
                Each pair is a canvas, each step is a statement. Witness the fusion of{' '}
                <span className="text-destructive font-medium">Pakistani street culture</span>{' '}
                with contemporary art, where every brushstroke carries the soul of the artist and every design tells a 
                story of{' '}
                <span className="text-destructive font-medium">rebellion, beauty, and craftsmanship</span>.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                  <span className="text-lg">✦</span>
                  <span>Explore The Gallery</span>
                </button>
                
                <button className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2">
                  <span className="text-lg">◉</span>
                  <span>Commission Artwork</span>
                </button>
              </div>
            </div>
          </div>

          {/* Features banner */}
          <div className="bg-muted/50 rounded-xl p-6 mb-8 border border-border/50">
            <div className="flex flex-wrap justify-center items-center space-x-8 text-sm md:text-base font-medium text-muted-foreground">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>LIMITED DROPS</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>AUTHENTIC ARTISTRY</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>EXCLUSIVE PIECES</span>
              </span>
            </div>
          </div>

          {/* Enter the vault */}
          <div className="text-center">
            <button className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium tracking-wider">
              Enter The Vault
              <div className="mt-2">
                <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App