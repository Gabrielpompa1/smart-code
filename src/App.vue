<template>
	<div class="h-screen overflow-hidden bg-stone-900">
		<Header />
		<Content />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
export default {
	components: {
		Header,
		Content,
	},
};
</script>

<style></style>
