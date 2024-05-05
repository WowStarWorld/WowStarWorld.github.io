<template>
	<el-button @click="gotoToolBox">
		<i class="fa fa-toolbox"/>
		&nbsp;
		Toolbox
	</el-button>
</template>

<script setup lang="ts">
function gotoToolBox() {
	location.href = "https://WowStarWorld.github.io/StarWorldToolBox-Plus";
}
</script>

<style scoped>

</style>
