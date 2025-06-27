<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

		// use it in the svelte fragment below 
	import Header from '$lib/components/Header.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
</script>

<svelte:head>
  <title>Stavros Solutions</title>
  <meta name="description" content="Random guides and fixes I've needed of late. Maybe they'll help you too!" />
</svelte:head>

<style lang="postcss">
	a {
		&:hover {
			@apply text-purple-500;
		}
	}
</style>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a class="lg:ml-20 text-xl" href="/"><strong>Stavros Solutions</strong></a>
				
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
			<nav class="flex flex-wrap lg:mr-20 space-x-2">
				<p class="text-teal-200">|</p>
				<a href="https://github.com/stavrostzagadouris/">GitHub</a>
				<!-- <a href="https://discordapp.com/users/250087569520328724">Discord</a> -->
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
	<div class="prose prose-lg prose-neutral prose-invert mx-auto px-4 py-8" style="max-width: 1000px;">
		<slot />
	</div>
	<footer>
		<div class="container mx-auto flex justify-center items-center flex-col text-xs">
			<p>_______</p>
			<p><a href="https://github.com/stavrostzagadouris/stavrossolutions">stavrossolutions.com</a></p>
		</div>
	</footer>
</AppShell>