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
        sans: ['JetBrains Mono', 'monospace'],
        serif: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "rgba(0, 255, 65, 0.3)", // Hacker green border
        input: "rgba(0, 255, 65, 0.1)",
        ring: "#00FF41",
        background: "#020202", // Deep terminal black
        foreground: "#E0E0E0", // Light grey text
        surface: "#0A0A0A", // Slightly lighter black
        primary: {
          DEFAULT: "#00FF41", // Matrix green
          foreground: "#020202",
        },
        secondary: {
          DEFAULT: "#00FFFF", // Cyan accent
          foreground: "#020202",
        },
        muted: {
          DEFAULT: "#666666",
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "rgba(0,255,65,0.1)",
          foreground: "#00FF41",
        },
        glow: "rgba(0, 255, 65, 0.4)",
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #00FF41 0%, #00FFFF 100%)',
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
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 20s linear infinite",
        "blink": "blink 1s step-end infinite",
        "glitch": "glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite"
      },
    },
  },
  plugins: [],
}
