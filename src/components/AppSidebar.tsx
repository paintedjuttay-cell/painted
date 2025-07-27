
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
    <TooltipProvider>
      <motion.div
        initial={false}
        animate={{
          width: open ? 240 : 64,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative"
      >
        <Sidebar 
          className="border-r border-border bg-background/95 backdrop-blur-md w-full"
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
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-center ml-3"
                  >
                    <span className="text-foreground font-bold text-xl tracking-wider cinematic-title">
                      Painted Juttay
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: open ? 0.1 : 0 }}
            >
              {navigationItems.map((section, sectionIndex) => (
                <SidebarGroup key={section.title}>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SidebarGroupLabel className="text-accent font-semibold text-sm uppercase tracking-wider">
                          {section.title}
                        </SidebarGroupLabel>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item, itemIndex) => (
                        <SidebarMenuItem key={item.title}>
                          {!open ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton 
                                  onClick={() => scrollToSection(item.href)}
                                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer group relative"
                                >
                                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent side="right" className="ml-2">
                                <p>{item.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                            >
                              <SidebarMenuButton 
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer group relative"
                              >
                                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                                <div className="flex items-center justify-between w-full">
                                  <span className="font-medium">{item.title}</span>
                                  {item.badge && (
                                    <span className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full animate-pulse">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                              </SidebarMenuButton>
                            </motion.div>
                          )}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </motion.div>
          </SidebarContent>

          <SidebarFooter className="border-t border-border p-4">
            <div className="space-y-2">
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-xs text-muted-foreground text-center"
                  >
                    © 2024 Painted Juttay
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SidebarFooter>
        </Sidebar>
      </motion.div>
    </TooltipProvider>
  );
}
