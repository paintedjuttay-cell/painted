
import React from 'react';
import { 
  Home,
  Palette, 
  ShoppingBag, 
  Gavel, 
  Star, 
  Users, 
  Info, 
  MessageCircle,
  HelpCircle
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
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import paintedJuttayLogo from '@/assets/painted-juttay-logo.png';

const navigationItems = [
  {
    title: "Main",
    items: [
      { title: "Home", icon: Home, href: "#hero" },
      { title: "Gallery", icon: Palette, href: "#collections" },
      { title: "Custom Order", icon: ShoppingBag, href: "#custom-order" },
      { title: "The Vault", icon: Gavel, href: "#vault", badge: "Live" },
    ]
  },
  {
    title: "Explore",
    items: [
      { title: "Artists", icon: Users, href: "#artists" },
      { title: "About", icon: Info, href: "#about" },
      { title: "Featured", icon: Star, href: "#featured" },
    ]
  },
  {
    title: "Support",
    items: [
      { title: "Help / FAQ", icon: HelpCircle, href: "#support" },
      { title: "Contact", icon: MessageCircle, href: "#contact" },
    ]
  }
];

export function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  
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
      variant="sidebar"
    >
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <img src={paintedJuttayLogo} alt="Painted Juttay" className="h-10 w-10" />
          </Button>
          {open && (
            <div className="text-center ml-3">
              <span className="text-foreground font-bold text-xl tracking-wider cinematic-title">
                Painted Juttay
              </span>
            </div>
          )}
        </div>
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
                      className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer group relative"
                      tooltip={!open ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                      {open && (
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{item.title}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full animate-pulse">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <div className="space-y-2">
          {open && (
            <div className="text-xs text-muted-foreground text-center">
              © 2024 Painted Juttay
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
