
import React from 'react';
import { 
  Palette, 
  ShoppingBag, 
  Gavel, 
  Star, 
  Users, 
  Info, 
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
    title: "Support",
    items: [
      { title: "Contact", icon: MessageCircle, href: "#support" },
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
      className="border-r border-border bg-background/95 backdrop-blur-md"
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-border p-4">
        {open && (
          <div className="text-center">
            <span className="text-foreground font-bold text-xl tracking-wider">Navigation</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            {open && (
              <SidebarGroupLabel className="text-accent font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
                      tooltip={!open ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                      {open && <span className="font-medium">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        {open && (
          <div className="text-xs text-muted-foreground text-center">
            Painted Juttay - Where Art Meets Street
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
