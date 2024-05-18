<template>
	<div :style="{ 'text-align': 'center', 'padding-top': '10rem' }">
		<a-typography-text id="day-count">站点已运行 {{ dateRef }}</a-typography-text>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const dateRef = ref<String>();

onMounted(
	() => {
		setInterval(
			() => {
				const startTime = 1714492800000;
				const date = new Date(Date.now() - startTime).getTime();
				const totalDays = Math.floor(date / (1000 * 60 * 60 * 24));
				const remainingMilliseconds = date % (1000 * 60 * 60 * 24);
				const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
				const minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);
				let years = Math.floor(totalDays / 365);
				let remainingDays = totalDays % 365;
				if (remainingDays + (new Date(startTime + 31536000000).getMonth() === 1 ? 1 : 0) > 365) {
					years++;
					remainingDays = remainingDays + (new Date(startTime + 31536000000).getMonth() === 1 ? 1 : 0) - 365;
				}
				let months = Math.floor(remainingDays / 30);
				remainingDays = remainingDays % 30;
				let text = "";
				if (years > 0) text += `${years}年 `;
				if (months > 0) text += `${months}月 `;
				if (remainingDays > 0) text += `${remainingDays}天 `;
				if (hours > 0) text += `${hours}时 `;
				if (minutes > 0) text += `${minutes}分 `;
				if (seconds > 0) text += `${seconds}秒 `;
				dateRef.value = text;
			},
			1000
		);
	}
);
</script>

<style scoped lang="scss">
#day-count {
	color: #ffffff;
}
</style>
