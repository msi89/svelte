<script lang="ts">
	import { authStore } from '../stores/auth';

	function login() {
		authStore.setUser({
			id: 1,
			name: 'adas',
			email: 'asda@fsd.cmf'
		});
	}
</script>

<div class="about">
	<p class="text-yellow-600">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perspiciatis sequi labore porro
		blanditiis sunt officiis excepturi commodi repellat id ab cupiditate laudantium qui, ducimus
		maxime! Quisquam soluta totam quia labore porro illo veritatis beatae, suscipit iure tenetur
		reprehenderit neque rem nam, dolore rerum facilis accusantium eos quibusdam, nobis maiores.
		Aperiam iste earum alias numquam nam, quia eveniet sequi nihil debitis qui adipisci a vero ab
		tenetur. Delectus, ipsum rem. Culpa, ab officia vero suscipit ipsam doloribus cumque, magnam ex
		dolor id et. Totam tenetur suscipit minima corrupti odit?
	</p>
	<button on:click={login} class="bg-gray-200 py-2 px-5">Login</button>
</div>

<style>
	.about {
		width: 80%;
		margin: 0 auto;
		background: #fff;
		height: 100vh;
	}
</style>
