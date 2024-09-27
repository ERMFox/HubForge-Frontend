import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // This allows external access
		port: 5173,      // Ensure the port is correct if needed
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
