import tailwindConfig from 'ui/tailwind';

const config: typeof tailwindConfig = {
	...tailwindConfig,
	theme: {
		...tailwindConfig.theme,
		extend: {
			...tailwindConfig.theme?.extend,
			backgroundImage: {
				tex1: "url('/assets/tex1.png')",
				tex2: "url('/assets/tex2.png')",
				tex3: "url('/assets/tex3.png')",
				tex4: "url('/assets/tex4.png')",
				ripsection1: "url('/assets/ripsection1.png')"
			}
		}
	}
};

export default config;
