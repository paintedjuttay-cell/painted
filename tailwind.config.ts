
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
				roboto: ['Roboto', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Painted Juttay Design System Colors
				'teal-cta': 'hsl(var(--teal-cta))',
				'teal-hover': 'hsl(var(--teal-hover))',
				'red-accent': 'hsl(var(--red-accent))',
				'red-hover': 'hsl(var(--red-hover))',
				'charcoal-deep': 'hsl(var(--charcoal-deep))',
				'charcoal-medium': 'hsl(var(--charcoal-medium))',
				'white-soft': 'hsl(var(--white-soft))',
				'grey-muted': 'hsl(var(--grey-muted))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'paint-drip': {
					'0%': { transform: 'translateY(-100%) scaleY(0)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh) scaleY(1)', opacity: '0' }
				},
				'brush-stroke': {
					'0%': { clipPath: 'inset(0 100% 0 0)' },
					'100%': { clipPath: 'inset(0 0 0 0)' }
				},
				'canvas-reveal': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.95) rotateX(5deg)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotateX(0deg)',
						filter: 'blur(0px)'
					}
				},
				'artwork-float': {
					'0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
					'50%': { transform: 'translateY(-10px) rotateY(2deg)' }
				},
				'signature-draw': {
					'0%': { strokeDashoffset: '100', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { strokeDashoffset: '0', opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'splatter-fade': {
					'0%': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
					'50%': { opacity: '0.8', transform: 'scale(1.1) rotate(2deg)' },
					'100%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'paint-drip': 'paint-drip 3s ease-in-out infinite',
				'brush-stroke': 'brush-stroke 0.8s ease-out',
				'canvas-reveal': 'canvas-reveal 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
				'artwork-float': 'artwork-float 6s ease-in-out infinite',
				'signature-draw': 'signature-draw 2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'splatter-fade': 'splatter-fade 0.6s ease-out'
			},
			backgroundImage: {
				'gradient-blood': 'linear-gradient(135deg, hsl(180 100 35) 0%, hsl(0 50 60) 100%)',
				'gradient-canvas': 'linear-gradient(135deg, hsl(0 0 95) 0%, hsl(210 9 25) 100%)',
				'gradient-splatter': 'radial-gradient(circle, hsl(180 100 35 / 0.8) 0%, hsl(180 100 35 / 0.2) 70%)',
			},
			boxShadow: {
				'gallery': '0 25px 50px -12px hsl(210 11 12 / 0.8)',
				'artwork': '0 10px 40px -10px hsl(180 100 35 / 0.3)',
				'canvas': 'inset 0 0 40px hsl(0 0 95 / 0.05)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
