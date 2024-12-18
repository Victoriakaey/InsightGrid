import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#858882",
        buttonBg: "#161618",
        buttonBorder: "#525252",
        dashboardButtonBg: "#242424",
        dashboardButtonBorder: "#5A5A5A",
        dashboardGraphText: "#AAA",
        drawerBg: "#0E0D0D",
      },
    },
  },
  plugins: [],
} satisfies Config;
