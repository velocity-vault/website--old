<script>
	const { VV_API_BASE_URL } = process.env;

	$: document.documentElement.style.setProperty('--hue-rotate', '0deg');
</script>

{#each {length: 15} as _}
	<h1>Hello, world!</h1>
	<p>
		API is located at: {VV_API_BASE_URL}
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
		dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<hr>
{/each}