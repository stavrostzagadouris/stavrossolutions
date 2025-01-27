<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	// import the header file you have in lib components here but you need to 
	
	//trying shiki

	// use it in the svelte fragment below 
	import Header from '$lib/components/Header.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
</script>

<style lang="postcss">
	a {
		&:hover {
			@apply text-purple-500;
		}
	}


  /* Target inline code */
  .prose code {
    @apply font-mono text-sm px-1 py-0.5 rounded bg-gray-100; /* Tailwind classes */
    color: #333; /* Custom color */
  }

  /* Target code blocks */
  .prose pre {
    @apply bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto; /* Tailwind classes */
    border: 1px solid #ddd; /* Custom border */
  }

  .prose pre code {
    @apply font-mono text-sm; /* Tailwind classes */
    color: #333; /* Custom color */
    display: block; /* Important for proper code block formatting */
    white-space: pre; /* Preserve whitespace */
  }
</style>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="lg:ml-10 text-xl"><a href="/">Stavros Solutions</a></strong>
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
			<nav class="flex flex-wrap lg:mr-10 space-x-2">
				<p class="text-teal-200">|</p>
				<a href="https://github.com/jiberwabish/">GitHub</a>
				<a href="https://discordapp.com/users/250087569520328724">Discord</a>
				<a href="https://www.linkedin.com/in/stavrostz/">LinkedIn</a>
			</nav>

			<!-- <nav class="flex mr-10 space-x-4">
				<a href="/">Home</a>
				<a href="/articles">Articles</a>
				<a href="/about">about</a>
				<p class=text-teal-200>|</p>
				<a href="https://github.com/jiberwabish/">GitHub</a>
				<a href="https://discordapp.com/users/250087569520328724">Discord</a>
				<a href="https://www.linkedin.com/in/stavrostz/">LinkedIn</a>
			</nav> -->
			
			</svelte:fragment>
		</AppBar>
	<!-- after importing header, you need to say where you want to keep it -->
	<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<!-- putting each article in this div ensures markdown is rendered correctly -->
	<div class="prose prose-lg prose-neutral prose-invert max-w-1200 mx-auto px-4 py-8">
		<slot />
	</div>
	<footer>
		<div class="container mx-auto flex justify-center items-center flex-col text-xs">
			<p>_______</p>
			<p><a href="https://github.com/jiberwabish/stavrossolutions">stavrossolutions.com</a></p>
		</div>
	</footer>
</AppShell>