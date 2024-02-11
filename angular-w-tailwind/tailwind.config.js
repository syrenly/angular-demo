/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
};
