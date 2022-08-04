<template>
	<nav class="bg-white border-r w-36">
		<ul class="flex flex-col text-sm pt-2 space-y-1">
			<router-link
				class="mx-2 px-2 py-1 rounded"
				active-class="bg-stone-300"
				v-for="(item, id) in navigation"
				:key="id"
				:to="item.path"
				>{{ item.name }}</router-link
			>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			navigation: [
				{ name: 'Home', path: '/' },
				{ name: 'Code', path: '/code/quick-func' },
			],
		};
	},
};
</script>

<style></style>
