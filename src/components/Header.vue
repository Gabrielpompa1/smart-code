<template>
	<header class="flex flex-col justify-center items-center bg-stone-900">
		<div class="py-5">
			<h1 class="text-neon-green text-xl font-medium tracking-wider font-mono">
				{smartCode}
			</h1>
		</div>
		<Navbar />
	</header>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
	components: {
		Navbar,
	},
};
</script>

<style></style>
