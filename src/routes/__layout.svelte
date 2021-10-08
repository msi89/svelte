<script>
	import BaseLayout from '../components/layouts/BaseLayout.svelte';
</script>

<BaseLayout>
	<div class="container"><slot /></div>
</BaseLayout>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	:global(body) {
		background-color: #f5f5f5;
	}
	.container {
		width: 80%;
		margin: 20px auto;
		background: #fff;
		height: 100vh;
	}
</style>
