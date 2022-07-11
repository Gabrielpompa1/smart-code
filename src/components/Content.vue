<template>
	<div class="bg-white flex flex-col h-full mx-10 px-5 py-2">
		<ViewTitle />
		<CodeForm />
		<Output />
	</div>
</template>

<script>
import ViewTitle from './ViewTitle.vue';
import CodeForm from './CodeForm.vue';
import Output from './Output.vue';
export default {
	components: {
		ViewTitle,
		CodeForm,
		Output,
	},
};
</script>

<style></style>
