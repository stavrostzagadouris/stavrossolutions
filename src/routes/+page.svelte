
	<div class="space-y-2 flex-col flex items-center">
		
		<h2>Hello, friend from the future 👋</h2>
						
		<div class="space-y-1">
			<p>Peruse my historic accounts of frustrating fixes, setups and guides to save yourself a headache.</p>
			<!-- <p>Then get a different kind of headache cringing so hard at my AI generated pictures that go with them.</p> -->
		</div>

		
		<!-- <div class="flex justify-center">
			<nav class="flex flex-wrap space-x-4 mt-10">
				<a href="/articles">How To Articles</a>
			</nav>
		</div> -->
	</div>
	
<script lang="ts">
    export let data;
</script>

<div>
	<h3 style="text-align: center" class="mt-10 mb-10">Articles 📑</h3>
	<p>	I wrote these articles primarily for myself to refer back to occasionally.
	I find I keep needing to re-research how to do things I've done before, so I decided to document them here instead.
	I hope you find them useful too.</p>
	<ul>
		{#each data.articles as article}
			<li class="article-item">
				<a href="{article.path}">{article.meta.title}</a>
				<span class="article-date">{article.meta.date}</span>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	a {
		&:hover {
			@apply text-purple-500;
		}
	}
	.article-item {
		display: flex;
		flex-direction: column;
		margin-left: -2em; /* Pulls the list items to the left */
		margin-bottom: -10px;
  	}
   .article-date {
		text-align: right;
		font-size: 0.9em; /* Make date font slightly smaller */
		color: gray; /* Change the colour of the date */
		margin-top: -10px;
   }
</style>
