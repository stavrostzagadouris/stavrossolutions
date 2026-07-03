import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Skeleton's tw-plugin emits WebKit-only selectors like
		// ::file-selector-button:hover that lightningcss rejects
		cssMinify: 'esbuild'
	}
});
