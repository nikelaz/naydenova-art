/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'grey-50': '#f4f4f4',
      'grey-100': '#ddd',
      'grey-500': '#666',
      'grey-900': '#222',
      'grey-950': '#111',
      'pink-100': '#fbf0f3',
      'pink-200': '#f7e1e7',
      'pink-300': '#f3d2da',
      'pink-400': '#efc3cf',
      'pink-500': '#eab4c2',
      'pink-600': '#e6a5b6',
      'pink-700': '#e296aa',
      'pink-800': '#de879e',
      'pink-900': '#d66986',
      'pink-950': '#c04f6d',
    },
  },
};
