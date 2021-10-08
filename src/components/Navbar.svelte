<script>
	import { authStore } from '../stores/auth';
</script>

<div class="navbar">
	<div class="container">
		<div class="brand">
			<a href="https://kit.svelte.dev">
				<img
					width="32"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png"
					alt="svelte logo"
				/>
			</a>
			<span class="brand__logo">Svelte</span>
		</div>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/settings">Settings</a>
		</nav>
		{authStore.isAuthenticated}
	</div>
</div>

<style>
	.navbar {
		display: flex;
		background-color: #fff;
	}
	.container {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.brand {
		display: flex;
		align-items: center;
	}
	.brand__logo {
		margin-left: 5px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
