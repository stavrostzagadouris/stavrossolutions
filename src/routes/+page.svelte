
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
	
<div>
	<h3 style="text-align: center" class="mt-10 mb-10">Articles 📑</h3>
	<p>	I wrote these articles primarily for myself to refer back to occasionally.
	I find I keep needing to re-research how to do things I've done before, so I decided to document them here instead.
	I hope you find them useful too.</p>
	<ul>
	<li class="article-item">
		<a href="./articles/gitbasiccommands">Super simple git commit commands</a>
		<span class="article-date">2025-01-30</span>
	</li>
	<li class="article-item">
		<a href="./articles/services">Working with Services cheatsheet (Ubuntu)</a>
		<span class="article-date">2025-01-29</span>
	</li>
	<li class="article-item">
		<a href="./articles/github">Connecting github via terminal (Ubuntu)</a>
		<span class="article-date">2024-09-02</span>
	</li>
	<li class="article-item">
		<a href="./articles/automountNTFS">Automounting NTFS (Ubuntu)</a>
		<span class="article-date">2024-08-28</span>
	</li>
	<li class="article-item">
		<a href="./articles/sambashare">Share folder using Samba (Ubuntu)</a>
		<span class="article-date">2024-08-24</span>
	</li>
	<li class="article-item">
		<a href="./articles/bell2000">Bell HH 2000 delete (OPNSense)</a>
		<span class="article-date">2024-08-22</span>
	</li>
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
		justify-content: space-between; /* Pushes the date to the right */
		align-items: baseline; /* Aligns the date and link by their baselines */
		margin-bottom: 0.5em; /* Space between list items */
		margin-left: -2em; /* Pulls the list items to the left */
  	}
   .article-date {
		margin-left: 1em; /* Space between link and date */
		font-size: 0.9em; /* Make date font slightly smaller */
		color: gray; /* Change the colour of the date */
   }
</style>
