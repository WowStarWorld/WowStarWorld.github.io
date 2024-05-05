<script setup lang="ts">

import MenuBar from "./components/MenuBar.vue";
import MyAvatar from "./components/MyAvatar.vue";
import MyTools from "./components/MyTools.vue";
</script>

<template>
	<div style="width: 100%;">
		<MenuBar/>
		<div style="display: flex; justify-content: center; margin-top: 4rem;">
			<MyAvatar :size="250"/>
		</div>
		<div style="display: flex; justify-content: center;">
			<h1 style="background-clip: text; color: transparent; background-image: linear-gradient(#eeaa50, #eeee50);">StarWorld</h1>
		</div>
		<div style="display: flex; justify-content: center;">
			<MyTools/>
		</div>
	</div>
</template>

<style scoped lang="scss">
</style>
