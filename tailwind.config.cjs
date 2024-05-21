module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'2xl': {'max': '1440px'},
			// => @media (max-width: 1535px) { ... }

			'xl': {'max': '1280px'},
			// => @media (max-width: 1279px) { ... }

			'lg': {'max': '1024px'},
			// => @media (max-width: 1023px) { ... }
	
			'md': {'max': '768px'},
			// => @media (max-width: 767px) { ... }
	
			'sm': {'max': '480px'},
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
};
