import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-sfpro)']
      // },

      colors: {
        'theme-light-purple': '#CAC2FF',
        'theme-light-purple-50': '#EFECFF',
        'theme-purple': '#B071EC',
        'theme-border-gray': '##F2F2F1',
      },
    },
  },
  plugins: [],
};
export default config;
