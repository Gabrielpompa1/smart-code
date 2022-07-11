<template>
	<!-- Form -->
	<form
		action=""
		class="bg-red-100 p-2 flex items-center justify-evenly space-x-4"
		@submit.prevent="handleCompute()"
	>
		<!-- Methods -->
		<div id="methods" class="flex flex-col">
			<label for="codeInput">Search methods</label>
			<select
				class="font-mono text-sm h-full rounded"
				name=""
				id="methodDropdown"
			>
				<option value="">.split()</option>
			</select>
		</div>
		<!-- Value -->
		<div id="value" class="flex flex-col">
			<label for="valueInput">Value</label>
			<input
				id="valueInput"
				type="text"
				class="border rounded"
				v-model="value"
			/>
		</div>
		<!-- Submit -->
		<input
			type="submit"
			value="Submit"
			class="bg-white px-2 rounded self-end"
		/>
	</form>
	<div id="output">
		<p class="text-black">Output</p>
		<p class="font-mono text-xs my-5">{{ result }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			result: '',
		};
	},
	methods: {
		handleCompute() {
			this.result = this.value.split('');
		},
	},
};
</script>

<style></style>
