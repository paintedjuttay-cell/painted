
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import FeaturedProduct from '@/components/FeaturedProduct';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Collections />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};

export default Index;
