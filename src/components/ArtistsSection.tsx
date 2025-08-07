import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Instagram, Award, Palette } from 'lucide-react';

const ArtistsSection = () => {
  // Artist profiles will be populated with your real Painted Juttay artists
  const artists = [
    {
      id: 1,
      name: "Rabail Ali Zaidi",
      specialty: "Multidisciplinary Artist & Wearable Art",
      bio: "A multidisciplinary artist with a background in fine arts and architectural design. Her work explores the relationship between surface, form, and narrative — often blending visual art with functional design. Currently focused on creating wearable art, using everyday objects as expressive canvases.",
      location: "Pakistan",
      image: "/lovable-uploads/44585051-d82c-4467-8d29-6618d6a3d1be.png",
      featured: true,
      piecesCount: 12,
      instagram: "@rabailalizaidi"
    },
    {
      id: 2,
      name: "Sarah Maqsood",
      specialty: "Black & White Ink Illustrations",
      bio: "Sarah Maqsood specializes in creating black and white ink illustrations, often with a tinge of color to them. Her goal is to not only limit her art to pen and paper, but to let it be worn, carried, and made a beautiful part of everyday life. To achieve this, she's currently into customizing shoes with her unique illustrations, transforming them into wearable, beautiful pieces of art.",
      location: "Pakistan"
    },
    {
      id: 3,
      name: "The Kharazmi Sisters",
      specialty: "Handicrafts & Digital Design",
      bio: "The Kharazmi Sisters are 2 sisters (not by blood) with a passion for artistic expressions ranging across handicrafts, Epoxy products, hand-woven articles, paintings, custom artwork and digital design. They aim to establish themselves as a Work-from-Home Art Studio, with a strong religious background they wish to advertise the freedom of operating remotely all while freely expressing art through any available canvas.",
      location: "Pakistan"
    }
  ];

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

        {/* Artist Information */}
        <div className="max-w-6xl mx-auto">
          {artists.length > 0 ? (
            <div className="space-y-8">
              {artists.map((artist) => (
                <div key={artist.id} className="bg-card rounded-lg border p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{artist.name}</h3>
                  <p className="text-lg text-primary mb-4 font-medium">
                    {artist.specialty}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">{artist.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {artist.bio}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Meet Our Artists</h3>
              <p className="text-muted-foreground">Our talented Painted Juttay artists will be featured here.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ArtistsSection;