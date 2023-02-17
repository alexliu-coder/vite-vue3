<template>
	<router-link to="/base/home">Home</router-link> |
	<router-link to="/base/goods">About</router-link>
	<div>base's index {{ name }}</div>
	<button @click="changeName">click</button>
	<router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store';
const userStore = useUserStore();
const { setName } = userStore;
const { name } = storeToRefs(userStore);

function changeName() {
	setName(name.value + 'a');
}
</script>

<route>
{
	redirect: "/base/home"
}
</route>