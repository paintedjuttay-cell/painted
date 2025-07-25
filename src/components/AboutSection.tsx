import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Globe, Brush, Trophy, Users, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Artistry",
      description: "Every piece is hand-painted by talented Pakistani artists, ensuring each pair tells a unique story."
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Connecting Pakistani street art with global streetwear culture, one step at a time."
    },
    {
      icon: Brush,
      title: "Custom Craftsmanship",
      description: "From concept to creation, we work with you to bring your vision to life on premium sneakers."
    },
    {
      icon: Trophy,
      title: "Quality Promise",
      description: "Using only the finest materials and techniques to ensure your art lasts as long as your story."
    }
  ];

  const stats = [
    { number: "500+", label: "Custom Pieces Created" },
    { number: "50+", label: "Pakistani Artists" },
    { number: "25+", label: "Countries Shipped" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 cinematic-title">
            Where Art Meets Street
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Painted Juttay began as a vision to transform ordinary sneakers into extraordinary works of art. 
            We believe that every step should tell a story, and every story deserves to be painted with passion.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="premium-card p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                To empower Pakistani artists by providing them with a global platform while creating 
                wearable art that celebrates culture, creativity, and individual expression. We're not just 
                painting shoes—we're painting dreams, stories, and connections across cultures.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="gallery-card text-center p-6 artistic-float">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary cinematic-title">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Process */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto">
                1
              </div>
              <h4 className="text-xl font-bold">Consultation</h4>
              <p className="text-muted-foreground">
                We discuss your vision, style preferences, and the story you want to tell through your custom piece.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto">
                2
              </div>
              <h4 className="text-xl font-bold">Artist Match</h4>
              <p className="text-muted-foreground">
                We pair you with the perfect Pakistani artist whose style and expertise align with your vision.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto">
                3
              </div>
              <h4 className="text-xl font-bold">Creation</h4>
              <p className="text-muted-foreground">
                Your artist hand-paints your custom piece with care, precision, and authentic artistic passion.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="premium-card p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-0">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Become part of a global community that values authentic artistry, cultural expression, 
                and the power of wearing your story. Every purchase supports Pakistani artists and their craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Your Custom Order
                </Button>
                <Button variant="outline">
                  View Artist Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;