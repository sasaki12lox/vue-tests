<template>
    <div class="responses__container">
        <transition-group name="list">
            <div v-for="response of responses" :key="response.id"  class="response" >id: {{ response.id }}</div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: {
            responses: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style scoped>
    .responses__container {

    }
    .response {
        margin: 5px;
        background-color: dodgerblue;
        color: #fff;
        border-radius: 3px;
        padding: 10px;
        min-width: 200px;
    }
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active,
    .list-leave-active {
        transition: all 1s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>