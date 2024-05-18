<template>
	<canvas id="star-canvas" class="background"/>
	<div style="width: 100%;" class="unselectable">
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

<script lang="ts" setup>
import "./scripts/index.ts";

import MenuBar from "./components/MenuBar.vue";
import MyAvatar from "./components/MyAvatar.vue";
import MyTools from "./components/MyTools.vue";
import { onMounted } from "vue";

onMounted(
	() => {
		function resize () {
			const canvas = document.getElementById("star-canvas");
			canvas.setAttribute("height", String(document.documentElement.clientHeight));
			canvas.setAttribute("width", String(document.documentElement.clientWidth));
		}
		
		document.addEventListener("resize", resize);
		resize();
	}
);
</script>


<style scoped lang="scss">
.background {
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-image: linear-gradient(180deg, black, #5889f8);
}
.unselectable {
	user-select: none;
}

</style>

