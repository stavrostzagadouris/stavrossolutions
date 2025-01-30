<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<a class="text-xs" href="/">Back to articles</a>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>