
import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EnhancedCollections from '@/components/EnhancedCollections';
import CustomOrder from '@/components/CustomOrder';

import ArtistsSection from '@/components/ArtistsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import CustomerSupport from '@/components/CustomerSupport';

const Index = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset>
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
          <div id="artists">
            <ArtistsSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="contact">
            <CustomerSupport />
          </div>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
