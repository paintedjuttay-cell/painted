
import React from 'react'
import { MapPin, Award } from 'lucide-react'

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: "Rajinder Kaur",
      location: "Amritsar, Punjab",
      experience: "25+ years",
      specialty: "Traditional Phulkari designs",
      image: "👩‍🎨",
      description: "Master of traditional Punjabi motifs and patterns"
    },
    {
      id: 2,
      name: "Harpreet Singh",
      location: "Jalandhar, Punjab",
      experience: "18+ years",
      specialty: "Modern fusion artwork",
      image: "👨‍🎨",
      description: "Blends contemporary art with traditional techniques"
    },
    {
      id: 3,
      name: "Simran Dhillon",
      location: "Patiala, Punjab",
      experience: "15+ years",
      specialty: "Bridal collection designs",
      image: "👩‍🎨",
      description: "Specializes in intricate wedding and ceremonial pieces"
    }
  ]

  return (
    <section id="artists" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Artists</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skilled artisans who bring life to each pair of juttis with their expertise and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl">{artist.image}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{artist.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{artist.experience}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Specialty</h4>
                  <p className="text-sm">{artist.specialty}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">About</h4>
                  <p className="text-sm text-muted-foreground">{artist.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Become an Artist Partner</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of talented artists and showcase your skills to a global audience
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Artists
