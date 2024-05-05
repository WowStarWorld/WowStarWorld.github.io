<template>
	<el-menu
		class="el-menu-demo"
		mode="horizontal"
		@select="onSelect"
		:ellipsis="false"
	>
		<el-menu-item index="icon">
			<template #title>
				<MyAvatar :size="'large'"/>
				<span style="padding-left: 1em;"/>
				<span style="color: #000000;">
					StarWorldの
				</span>
				<span style="color: #1fa3ff;">
					空间站
				</span>
			</template>
		</el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="bilibili">
			<i class="fab fa-bilibili fa-2x"/>
		</el-menu-item>
		<el-menu-item index="github">
			<i class="fab fa-github fa-2x"/>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import MyAvatar from "./MyAvatar.vue";

const onSelect = (key: string) => {
	if (key == "bilibili") location.href = "https://space.bilibili.com/588725047";
	else if (key == "github") location.href = "https://github.com/WowStarWorld";
};

</script>

<style scoped lang="scss">
.flex-grow {
	flex-grow: 1;
}
</style>
