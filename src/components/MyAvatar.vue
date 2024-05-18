<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
	size: string | number
}>();

</script>

<template>
	<a-avatar :style="{ 'pointer-events': 'none' }" :size="size" image-url="https://avatars.githubusercontent.com/u/98941734?s=48&v=4" class="logo"/>
</template>

<style scoped lang="scss">
.center {
	text-align: center;
}

.logo {
	& {
		background-color: #eaeaeaea;
		transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	
	&:hover {
		transform: rotate(360deg);
	}
	
}
</style>
