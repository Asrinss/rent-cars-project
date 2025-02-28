import type { Config } from "tailwindcss";
 
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1440px'
  		}
  	},
  	extend: {
  		borderRadius: {
  			'4xl': '3.5rem'
  		},
  		colors: {
  			myprimary: '#cc0000',
  			mysecondary: '#424242',
  			myLight: {
  				'100': '#fff8f6',
  				bg: '#ffffff'
  			},
  			myDark: {
  				'100': '#303030',
  				'200': '#fff8f6',
  				bg: '#000000'
  			}
  		},
  		backgroundImage: {
  			'section-bg': "url('/section-bg.jpg')",
  		},
  		keyframes: {
  			accordion: {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			accordion: 'accordion 0.3s ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
