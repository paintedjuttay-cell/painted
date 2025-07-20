
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-black">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div id="hero">
            <Hero />
          </div>
          <div id="collections">
            <EnhancedCollections />
          </div>
          <div id="custom-order">
            <CustomOrder />
          </div>
          <div id="vault">
            <TheVault />
          </div>
          <div id="featured">
            <FeaturedProduct />
          </div>
          <Footer />
          <AmbientSound />
          <CustomerSupport />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
