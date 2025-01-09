// @ts-check
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu Condensed", "serif"],
        raleway: ["Raleway", "serif"],
        poppins: ["Poppins", "serif"],
        openSans: ["Open Sans", "serif"],
        mukta: ["Mukta", "serif"],
        kanit: ["Kanit", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },   
  presets: [createPreset()],
};
