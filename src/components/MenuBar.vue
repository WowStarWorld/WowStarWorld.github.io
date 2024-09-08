<template>
	<a-menu mode="horizontal" :default-selected-keys="['1']" @menu-item-click="onSelect">
		<a-menu-item key="-" :style="{ padding: 0, marginRight: '38px', 'pointer-events': 'none' }" >
			<MyAvatar/>
			&nbsp;StarWorldの站点
		</a-menu-item>
		<a-space size="large"/>
		<a-menu-item key="github">
			<i class="fab fa-github"/>
		</a-menu-item>
	</a-menu>
</template>

<style scoped lang="scss">
.arco-menu {
	opacity: 85%;
}
</style>

<script lang="ts" setup>
import MyAvatar from "./MyAvatar.vue";

const onSelect = (key: string) => {
	if (key == "github") location.href = "https://github.com/WowStarWorld";
};

</script>
