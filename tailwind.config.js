/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

