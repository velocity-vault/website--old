<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	import Header from './components/Header.svelte';
</script>

<Header />

<main>
	<Router {routes} />
</main>

<style>
	main {
		text-align: center;
		max-width: 950px;
		margin: 0 auto;
	}
</style>
