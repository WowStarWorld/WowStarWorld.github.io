<template>
	<canvas id="star-canvas" class="background"/>
	<div style="width: 100%;" class="unselectable">
		<a-layout>
			<a-layout-header>
				<MenuBar/>
			</a-layout-header>
			<a-layout-content>
				<div style="display: flex; justify-content: center; margin-top: 4rem;">
					<MyAvatar :size="250"/>
				</div>
				<div style="display: flex; justify-content: center;">
					<h1 style="background-clip: text; color: transparent; background-image: linear-gradient(#eeaa50, #eeee50);">StarWorld</h1>
				</div>
				<div style="display: flex; justify-content: center;">
					<MyTools/>
				</div>
			</a-layout-content>
			<a-layout-footer >
				<PageFooter/>
			</a-layout-footer>
		</a-layout>
	</div>
</template>

<script lang="ts" setup>
import "./scripts/index.ts";

import MenuBar from "./components/MenuBar.vue";
import MyAvatar from "./components/MyAvatar.vue";
import MyTools from "./components/MyTools.vue";
import { onMounted } from "vue";
import PageFooter from "./components/PageFooter.vue";

onMounted(
	() => {
		function resize () {
			const canvas = document.getElementById("star-canvas");
			if (!canvas) return;
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
	position: fixed;
	left: 0;
	top: 0;
	z-index: -1;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(180deg, black, #5889f8);
}
.unselectable {
	user-select: none;
}

</style>

