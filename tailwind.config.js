module.exports = {
    content: [
        "/index.html",
        "/src/styles.css",
        "/src/components/projectCard.js",
        "/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    safelist: [
        'bg-javascipt',
        'bg-cpp',
        'bg-csharp',
        'bg-dart',
        'bg-godot',
        'bg-game',
        {pattern: /bg-.+/},
    ],
    plugins: [],
};