<template>
	<router-link to="/base/home">Home</router-link> |
	<router-link to="/base/goods">About</router-link>
	<div>base's index</div>
	<router-view></router-view>
</template>

<route>
{
	redirect: "/base/home"
}
</route>