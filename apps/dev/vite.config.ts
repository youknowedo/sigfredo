import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), basicSsl()],
	server: {
		https: process.env.NODE_ENV === 'production',
		proxy: {}
	}
});
