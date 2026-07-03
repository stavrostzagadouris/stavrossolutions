// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let post;
	try {
		post = await import(`../${params.slug}.md`);
	} catch {
		throw error(404, 'Article not found');
	}
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
