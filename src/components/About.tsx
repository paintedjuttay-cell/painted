
import React from 'react'
import { Heart, Shield, Truck, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every pair is made with passion and attention to detail by skilled artisans"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our products with a satisfaction guarantee and quality promise"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and secure delivery to your doorstep with tracking and insurance"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local artisans and preserving traditional craftsmanship"
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Painted Juttay was born from a passion to preserve and celebrate the rich tradition 
              of Punjabi footwear craftsmanship. Founded in 2018, we started as a small workshop 
              in Punjab with a mission to bring authentic, handcrafted juttis to the world.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we work with over 50 skilled artisans across Punjab, creating beautiful, 
              comfortable, and durable juttis that honor traditional techniques while embracing 
              contemporary design sensibilities.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Skilled Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/30 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">🎨</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
