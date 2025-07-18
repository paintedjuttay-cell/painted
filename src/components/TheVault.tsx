import React, { useState, useEffect } from 'react';
import { Timer, Gavel, Crown, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const TheVault = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds
  const [currentBid, setCurrentBid] = useState(850);
  const [newBid, setNewBid] = useState('');
  const [totalBidders, setTotalBidders] = useState(12);

  const auctionItems = [
    {
      id: 1,
      name: "Midnight Crimson",
      artist: "Zara Khan",
      currentBid: 850,
      minBid: 900,
      timeLeft: 86400,
      bidders: 12,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      description: "One-of-a-kind blood series masterpiece with hand-applied gold accents",
      featured: true
    },
    {
      id: 2,
      name: "Digital Dreams",
      artist: "Ahmed Ali",
      currentBid: 650,
      minBid: 700,
      timeLeft: 172800,
      bidders: 8,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      description: "Cyber-punk inspired design with holographic elements"
    },
    {
      id: 3,
      name: "Garden of Souls",
      artist: "Fatima Sheikh",
      currentBid: 720,
      minBid: 750,
      timeLeft: 259200,
      bidders: 15,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      description: "Delicate florals with hidden spiritual symbols"
    }
  ];

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else {
      return `${minutes}m ${secs}s`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBid = () => {
    const bidAmount = parseInt(newBid);
    if (bidAmount >= currentBid + 50) {
      setCurrentBid(bidAmount);
      setTotalBidders(prev => prev + 1);
      setNewBid('');
    }
  };

  return (
    <section id="vault" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4">
            The <span className="text-red-500">Vault</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Exclusive one-of-a-kind pieces available through live bidding. These masterpieces will never be recreated.
          </p>
        </div>

        {/* Featured Auction */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={auctionItems[0].image}
                alt={auctionItems[0].name}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Crown className="h-3 w-3" fill="currentColor" />
                FEATURED
              </div>
              <div className="absolute top-4 right-4 space-y-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  <Heart className="h-4 w-4" />
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

            {/* Bidding Panel */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  {auctionItems[0].name}
                </h3>
                <p className="text-gray-400 mb-4">by {auctionItems[0].artist}</p>
                <p className="text-gray-300">{auctionItems[0].description}</p>
              </div>

              {/* Timer */}
              <Card className="bg-red-600/20 border-red-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center space-x-4">
                    <Timer className="h-6 w-6 text-red-500" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {formatTime(timeLeft)}
                      </div>
                      <div className="text-red-400 text-sm">Time Remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Bid */}
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white">${currentBid}</div>
                <div className="text-gray-400">Current Highest Bid</div>
                <div className="text-red-500 text-sm">{totalBidders} bidders</div>
              </div>

              {/* Bidding Form */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <label className="text-white text-sm font-semibold block mb-2">
                      Your Bid (Minimum: ${currentBid + 50})
                    </label>
                    <Input
                      type="number"
                      value={newBid}
                      onChange={(e) => setNewBid(e.target.value)}
                      placeholder={`${currentBid + 50}`}
                      min={currentBid + 50}
                      className="bg-black border-gray-600 text-white text-lg text-center"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleBid}
                    disabled={!newBid || parseInt(newBid) < currentBid + 50}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg"
                  >
                    <Gavel className="mr-2 h-5 w-5" />
                    Place Bid
                  </Button>
                  
                  <p className="text-gray-400 text-xs text-center">
                    By bidding, you agree to our auction terms. Pre-authorization required.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Bid Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {[50, 100, 200].map(amount => (
                  <Button
                    key={amount}
                    onClick={() => setNewBid((currentBid + amount).toString())}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500"
                  >
                    +${amount}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Auctions */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Other Live Auctions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auctionItems.slice(1).map((item) => (
              <Card key={item.id} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-red-500 transition-colors duration-200">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                    {formatTime(item.timeLeft)}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-gray-400 mb-3">by {item.artist}</p>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-xl font-bold text-white">${item.currentBid}</div>
                      <div className="text-gray-400 text-sm">{item.bidders} bidders</div>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      View Auction
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVault;
