module.exports = {
    content: [
        "/index.html",
        "/src/styles.css",
        "/src/components/projectCard.js",
        "/src/components/timelineRow.js",
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
        'bg-java',
        'bg-javascript',
        'bg-c',
        'bg-cpp',
        'bg-csharp',
        'bg-dart',
        'bg-tailwind',
        'bg-godot',
        'bg-unity',
        {pattern: /bg-.+/},
    ],
    plugins: [],
};