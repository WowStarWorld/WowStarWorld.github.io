<template>
	<a-button @click="gotoToolBox" type="primary">
		<i class="fa fa-toolbox"/>
		&nbsp;工具箱
	</a-button>
</template>

<script setup lang="ts">
function gotoToolBox() {
	location.href = "https://WowStarWorld.github.io/starworld-toolbox-plus";
}
</script>

<style scoped>

</style>
