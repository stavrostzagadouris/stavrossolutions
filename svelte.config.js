import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extension: '.md',
			layout: {
				blog: 'src/routes/articles/post.svelte'
			},
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({ 
						themes: ['github-dark', 'github-light'],
						langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'shell', 'json']
					});
					await highlighter.loadLanguage(lang);
					const html = highlighter.codeToHtml(code, { lang, theme: 'github-dark' });
					return '{@html `' + html + '` }';
				}
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;