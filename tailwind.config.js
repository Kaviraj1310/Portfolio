/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "#5DAEFF",
        background: "#040404",
        foreground: "#FFFFFF",
        surface: "#0B0B0B",
        primary: {
          DEFAULT: "#5DAEFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A3A3A3",
          foreground: "#040404",
        },
        muted: {
          DEFAULT: "#707070",
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "#FFFFFF",
        },
        glow: "rgba(93, 174, 255, 0.25)",
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #89AACC 0%, #4E85BF 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
}
