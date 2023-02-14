<script setup lang="ts">
import { router } from '@/router';
function goAbout() {
	router.push('/about')
}
</script>

<template>
	<div>index</div>
	<div @click="goAbout">go about</div>
</template>

<style scoped></style>
