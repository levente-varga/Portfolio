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
        "cpp",
        "csharp",
        "javascript",
        "java",
        "godot",
        "game",
    ],
    plugins: [],
};