<template>
	<div class="h-screen overflow-hidden">
		<Header />
		<div class="flex h-full w-full">
			<Sidebar />
			<PrimaryView />
		</div>
	</div>
</template>

<script>
import Header from './components/layout/Header.vue';
import PrimaryView from './components/layout/PrimaryView.vue';
import Sidebar from './components/layout/Sidebar.vue';
export default {
	components: {
		Header,
		PrimaryView,
		Sidebar,
	},
};
</script>

<style></style>
