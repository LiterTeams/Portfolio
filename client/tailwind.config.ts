import type { Config } from "tailwindcss";

export default {
  corePlugins: {container: false},
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    fontFamily: {
      MuseoModerno: ["var(--font-museo-moderno)"],
    },
    colors: {
      "dark-primary": "#050505",
      "dark-primary-alternative": "#080808",
      "dark-secondaty": "#101010",
      "grey": "#878787",
      "grey-light": "#595958",
      "white": "#FFFFFF",
      "blue": "#7C71FF",
      "red": "#FE4A4D",
      "green": "#9B945F",
      "orange": "#FF0068",
    },
    extend: {
      backgroundImage: {
        "grid": "url('/grid.png')"
      },
      maxWidth: {"FHD": "1920px"},
      minWidth: {"FHD": "1920px"},
      width: {"FHD": "1920px"},
      screens: {
        "desktop": "1280px",
        "laptop": "1024px",
        "mobile": "640px",
      },
      dropShadow: {
        glow_white: [
          "0 0px 8px rgba(255, 255, 255, .5)",
          "0 0px 8px rgba(255, 255, 255, .5)"
        ],
        glow_blue: [
          "0 0 6px rgba(124, 113, 225, .5)",
          "0 0 6px rgba(124, 113, 225, .5)"
        ],
        glow_red: [
          "0 0px 8px rgba(193, 0, 32, .5)",
          "0 0px 8px rgba(193, 0, 32, .5)"
        ],
        glow_green: [
          "0 0px 8px rgba(50, 205, 50, .5)",
          "0 0px 8px rgba(50, 205, 50, .5)"
        ],
        glow_orange: [
          "0 0px 8px rgba(255, 104, 0, .5)",
          "0 0px 8px rgba(255, 104, 0, .5)"
        ]
      },
    },
  },
  plugins: [],
} satisfies Config;
