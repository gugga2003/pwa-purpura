import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#851c74",
        secondary: "#a33691",
        "primary-light": "#a83e96",
        "primary-hover": "#6b165d",
        "primary-dark": "#6a165c",
        "background-light": "#f7f7f7",
        "background-dark": "#20121d",
        "card-light": "#FFFFFF",
        "card-dark": "#1F2937",
        "text-main-light": "#1F2937",
        "text-main-dark": "#F9FAFB",
        "text-sub-light": "#6B7280",
        "text-sub-dark": "#9CA3AF",
        "text-light": "#1f2937",
        "text-dark": "#f3f4f6",
        "subtext-light": "#6b7280",
        "subtext-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
        "accent-yellow": "#fbbf24",
        "accent-red": "#ef4444",
        "accent-green": "#10b981",
        "accent-blue": "#3b82f6",
        "severity-critical": "#EF4444",
        "severity-warning": "#F97316",
        "warning-amber": "#F59E0B",
        "error-red": "#CC2B37",
        "info-blue": "#338CDB",
        "active-green": "#4CAF50",
        "deprecated-orange": "#FF9800",
        "draft-grey": "#9E9E9E",
        "branch-blue": "#3F72AF",
        "rama-madre": "#FF6F61",
        "rama-pyme": "#009688",
        "rama-deportes": "#8BC34A",
        "rama-profesional": "#3F51B5",
        "status-green": "#B4E0B4",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        "surface-light": "#FFFFFF",
        "surface-dark": "#27272a", // Zinc 800
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem", // 12px for softer, modern feel
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(133, 28, 116, 0.3)',
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
