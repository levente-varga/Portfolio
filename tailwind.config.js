module.exports = {
  content: [
    './index.html',
    './public/**/*.{html}',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  safelist: [
    'bg-java',
    'bg-javascript',
    'bg-c',
    'bg-cpp',
    'bg-csharp',
    'bg-dart',
    'bg-hlsl',
    'bg-flutter',
    'bg-tailwind',
    'bg-godot',
    'bg-unity',
    {pattern: /bg-.+/},
  ],
  plugins: [],
};