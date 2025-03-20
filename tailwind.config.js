module.exports = {
    content: [
        "./index.html",
        ".src/styles.css",
        "./src/**/*.{js,ts,jsx,tsx}",
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
    ],
    plugins: [],
};