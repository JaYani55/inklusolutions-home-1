// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
        "./app/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}",
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
            colors: {
                // Bestehende Farben werden beibehalten
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'var(--background-hex)',
                foreground: 'var(--foreground-hex)',
                primary: {
                    DEFAULT: 'var(--primary-hex)',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'var(--secondary-hex)',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'var(--muted-hex)',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'var(--accent-hex)', // Dein bestehendes var(--accent-hex) wird verwendet
                    foreground: 'hsl(var(--accent-foreground))'
                },
                third: {
                    DEFAULT: 'var(--third-hex)',
                    foreground: 'hsl(var(--third-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                // Deine Theme-spezifischen Farben bleiben wie sie sind
                'theme-primary': 'var(--primary-hex)',
                'theme-secondary': 'var(--secondary-hex)',
                'theme-third': 'var(--third-hex)',
                'theme-accent': 'var(--accent-hex)',
                'theme-text': 'var(--foreground-hex)',
                'theme-title-color': 'var(--primary-hex)',
                'theme-border': 'hsl(var(--theme-border))',
                'theme-bg': 'hsl(var(--theme-bg))',
                'theme-shadow-color': 'hsl(var(--theme-shadow-color))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                // Bestehende Keyframes beibehalten
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.8', transform: 'scale(1)', boxShadow: '0 0 10px hsl(var(--theme-shadow-color))' },
                    '50%': { opacity: '0.4', transform: 'scale(0.98)', boxShadow: '0 0 20px hsl(var(--theme-shadow-color))' }
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInDown: {
                    from: { opacity: '0', transform: 'translateY(-20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInLeft: {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                fadeInRight: {
                    from: { opacity: '0', transform: 'translateX(20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'bounce-slow-y': {
                    '0%, 100%': { transform: 'translateY(0px)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                // NEU: Keyframes für die "Blob"-Hintergrundanimation
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate( calc(var(--blob-offset-x)) , calc(var(--blob-offset-y)) ) scale(1.1)' },
                    '66%': { transform: 'translate( calc(var(--blob-offset-x) / 2) , calc(var(--blob-offset-y) / 2) ) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
            animation: {
                // Bestehende Animationen beibehalten
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                shimmer: 'shimmer 3s infinite linear',
                'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
                'spin-slow': 'spin 5s linear infinite',
                'bounce-slow': 'bounce-slow-y 2.5s infinite',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
                // NEU: Animation für die "Blob"-Hintergrundanimation
                'blob': 'blob 7s infinite ease-in-out', // 7s ist eine gute Standarddauer
            }
        }
    },
    plugins: [
        tailwindcssAnimate,
        // Optional: Wenn du `animation-delay` für die Blobs verwenden willst,
        // brauchst du ein Plugin dafür, z.B. https://www.npmjs.com/package/tailwindcss-animation-delay
        // Ohne Plugin kannst du die delay als inline style setzen: `style={{ animationDelay: '2s' }}`
    ],
} satisfies Config;