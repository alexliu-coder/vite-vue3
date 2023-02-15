<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
function goAbout() {
	router.push('/about')
}
</script>

<template>
	<div>index</div>
	<div @click="goAbout">go about</div>
</template>

<style scoped></style>
