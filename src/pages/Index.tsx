
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EnhancedCollections from '@/components/EnhancedCollections';
import CustomOrder from '@/components/CustomOrder';
import TheVault from '@/components/TheVault';
import FeaturedProduct from '@/components/FeaturedProduct';
import Footer from '@/components/Footer';
import AmbientSound from '@/components/AmbientSound';
import CustomerSupport from '@/components/CustomerSupport';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <EnhancedCollections />
      <CustomOrder />
      <TheVault />
      <FeaturedProduct />
      <Footer />
      <AmbientSound />
      <CustomerSupport />
    </div>
  );
};

export default Index;
