
import React, { useState } from 'react';
import { Upload, Palette, User, DollarSign, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CustomOrder = () => {
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [customText, setCustomText] = useState('');
  const [basePrice] = useState(299);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  // Single shoe base option
  const shoeBase = [
    {
      id: "1",
      name: "Air Force 1",
      price: 0
    }
  ];

  const themes = [
    { id: 'blood', name: 'Bloody Series', price: 50, description: 'Bold crimson flows with black accents' },
    { id: 'anime', name: 'Anime Dreams', price: 75, description: 'Vibrant characters and scenes' },
    { id: 'floral', name: 'Garden Canvas', price: 60, description: 'Delicate flowers and vines' },
    { id: 'abstract', name: 'Abstract Chaos', price: 65, description: 'Free-form artistic expression' },
    { id: 'custom', name: 'Your Vision', price: 100, description: 'Completely custom design' },
  ];

  const artists = [
    { id: 'rabail', name: 'Rabail Ali Zaidi', fee: 0 },
    { id: 'sarah', name: 'Sarah Maqsood', fee: 25 },
    { id: 'kharazmi', name: 'The Kharazmi Sisters', fee: 50 },
    { id: 'random', name: 'Surprise Me!', fee: 0 },
  ];

  const updatePrice = () => {
    let price = basePrice;
    
    const base = shoeBase.find(s => s.id === selectedBase);
    if (base) price += base.price;
    
    const theme = themes.find(t => t.id === selectedTheme);
    if (theme) price += theme.price;
    
    const artist = artists.find(a => a.id === selectedArtist);
    if (artist) price += artist.fee;
    
    if (customText.length > 10) price += 20;
    
    setTotalPrice(price);
  };

  React.useEffect(() => {
    updatePrice();
  }, [selectedBase, selectedTheme, selectedArtist, customText]);

  return (
    <section id="customizer" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 canvas-enter">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-card-foreground mb-4 signature-text">
            Build Your <span className="text-primary">Masterpiece</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Create a one-of-a-kind painted sneaker that tells your story. Our artists will bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Choose Base */}
            <Card className="gallery-card bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold pulse-glow">1</div>
                  <h3 className="text-xl font-bold text-foreground">Choose Your Canvas</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div
                    onClick={() => setSelectedBase(shoeBase[0].id)}
                    className={`relative cursor-pointer border-2 rounded-lg p-4 transition-all duration-200 ${
                      selectedBase === shoeBase[0].id ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="text-foreground font-semibold text-lg">{shoeBase[0].name}</h4>
                      <p className="text-muted-foreground text-sm">Classic silhouette for custom painting</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Choose Theme */}
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-bold text-white">Select Your Theme</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <div
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedTheme === theme.id ? 'border-red-500 bg-red-500/10' : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-semibold">{theme.name}</h4>
                        <span className="text-red-500 font-bold">+${theme.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{theme.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Choose Artist */}
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-bold text-white">Choose Your Artist</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {artists.map((artist) => (
                    <div
                      key={artist.id}
                      onClick={() => setSelectedArtist(artist.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedArtist === artist.id ? 'border-red-500 bg-red-500/10' : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">{artist.name}</h4>
                        <span className="text-red-500 font-bold">
                          {artist.fee > 0 ? `+$${artist.fee}` : 'Free'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Customization */}
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-bold text-white">Personal Touches</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="custom-text" className="text-white mb-2 block">
                      Custom Text or Quote {customText.length > 10 && <span className="text-red-500">(+$20)</span>}
                    </Label>
                    <Input
                      id="custom-text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Add your name, quote, or message..."
                      className="bg-gray-800 border-gray-600 text-white"
                      maxLength={50}
                    />
                    <p className="text-gray-400 text-sm mt-1">{customText.length}/50 characters</p>
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Upload Inspiration</Label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-400">Drop your inspiration images here</p>
                      <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary & Checkout */}
          <div className="lg:col-span-1">
            <Card className="bg-black border-gray-800 sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Base Price</span>
                    <span>${basePrice}</span>
                  </div>
                  
                  {selectedBase && (
                    <div className="flex justify-between text-gray-300">
                      <span>{shoeBase.find(s => s.id === selectedBase)?.name}</span>
                      <span>+${shoeBase.find(s => s.id === selectedBase)?.price}</span>
                    </div>
                  )}
                  
                  {selectedTheme && (
                    <div className="flex justify-between text-gray-300">
                      <span>{themes.find(t => t.id === selectedTheme)?.name}</span>
                      <span>+${themes.find(t => t.id === selectedTheme)?.price}</span>
                    </div>
                  )}
                  
                  {selectedArtist && artists.find(a => a.id === selectedArtist)?.fee > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Artist Fee</span>
                      <span>+${artists.find(a => a.id === selectedArtist)?.fee}</span>
                    </div>
                  )}
                  
                  {customText.length > 10 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Custom Text</span>
                      <span>+$20</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                    disabled={!selectedBase || !selectedTheme || !selectedArtist}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Submit Custom Order
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Estimated delivery: 2-3 weeks
                    </p>
                    <p className="text-gray-400 text-sm">
                      Artist will contact you within 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
