import React from 'react';
import { 
  Palette, 
  ShoppingBag, 
  Gavel, 
  Star, 
  Users, 
  Info, 
  Headphones,
  MessageCircle,
  Home,
  Sparkles
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  {
    title: "Main",
    items: [
      { title: "Home", icon: Home, href: "#hero" },
      { title: "Collections", icon: Palette, href: "#collections" },
      { title: "Custom Order", icon: ShoppingBag, href: "#custom-order" },
      { title: "The Vault", icon: Gavel, href: "#vault" },
      { title: "Featured", icon: Star, href: "#featured" },
    ]
  },
  {
    title: "Explore",
    items: [
      { title: "Artists", icon: Users, href: "#artists" },
      { title: "About", icon: Info, href: "#about" },
      { title: "Stories", icon: Sparkles, href: "#stories" },
    ]
  },
  {
    title: "Experience",
    items: [
      { title: "Ambient Sound", icon: Headphones, href: "#ambient" },
      { title: "Support", icon: MessageCircle, href: "#support" },
    ]
  }
];

export function AppSidebar() {
  const { open } = useSidebar();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Sidebar 
      className="border-r border-white/10 bg-black/50 backdrop-blur-md"
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bb01e554-f555-42b5-851f-348b4737df17.png" 
              alt="Painted Juttay" 
              className="h-8 w-auto"
            />
            {open && <span className="text-white font-bold text-lg">Painted Juttay</span>}
          </div>
          <SidebarTrigger className="text-white hover:text-red-400" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            {open && (
              <SidebarGroupLabel className="text-red-400 font-semibold">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => scrollToSection(item.href)}
                      className="text-white hover:text-red-400 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                      tooltip={!open ? item.title : undefined}
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 p-4">
        {open && (
          <div className="text-xs text-white/60 text-center">
            Painted Juttay - Where Art Meets Street
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}