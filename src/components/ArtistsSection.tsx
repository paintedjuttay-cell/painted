import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Instagram, Award, Palette } from 'lucide-react';

const ArtistsSection = () => {
  // Artist profiles will be populated with your real Painted Juttay artists
  const artists = [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 cinematic-title">
            Our Artists
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the talented creators from Pakistan who bring each pair to life with their unique vision and artistic mastery.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.length > 0 ? (
            artists.map((artist) => (
              <Card key={artist.id} className="premium-card group cursor-pointer">
                <CardContent className="p-0">
                  {/* Artist Image */}
                  <div className="relative overflow-hidden rounded-t-lg h-64">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    {artist.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        Featured Artist
                      </Badge>
                    )}

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{artist.location}</span>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{artist.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        <Palette className="h-3 w-3 mr-1" />
                        {artist.piecesCount} pieces
                      </Badge>
                    </div>

                    <p className="text-sm text-primary mb-2 font-medium">
                      {artist.specialty}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {artist.bio}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Instagram className="h-3 w-3 mr-1" />
                        {artist.instagram}
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Gallery
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Meet Our Artists</h3>
              <p className="text-muted-foreground">Our talented Painted Juttay artists will be featured here.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Join Our Artist Community</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Are you a Pakistani artist looking to showcase your work on custom sneakers? We'd love to collaborate.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Apply as Artist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;