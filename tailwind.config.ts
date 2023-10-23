import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            mebg: "#f4eae1",
            meblue: "#0c2e37",
            meyellow: "#e0ab43",
            meorange: "#cc6a4a",
            megreen: "#416346",
        },
        borderRadius: {
            mexs: "1.125rem",
            mesm: "2.8125rem",
            medefault: "3rem",
            melg: "3.75rem",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                kanit: ["Kanit", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
