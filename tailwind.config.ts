import type { Config } from "tailwindcss";

const config = {
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
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },

    extend: {
      fontFamily: {
        primary: ["var(--font-JetBrainsMono)"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0B1020",
        foreground: "#F8FAFC",

        primary: "#8B5CF6",
        color: "#8B5CF6",

        accent: {
          DEFAULT: "#38BDF8",
          hover: "#60A5FA",
        },

        secondary: {
          DEFAULT: "#151D32",
          foreground: "#F8FAFC",
        },

        muted: {
          DEFAULT: "#151D32",
          foreground: "#94A3B8",
        },

        card: {
          DEFAULT: "#151D32",
          foreground: "#F8FAFC",
        },

        popover: {
          DEFAULT: "#151D32",
          foreground: "#F8FAFC",
        },

        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F8FAFC",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;