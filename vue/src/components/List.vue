<template>
    <select class="selector" @input="e =>
     //@ts-expect-error
     {value = e.target.value; $emit('cinput', e.target.value)}
     ">
        <option v-if="value == undefined" value="none" :selected="!!value">He выбрано</option>
        <option v-for="(value, index) in values" :value="index" :key="index">{{ value }}</option>
    </select>
</template>

<script>
    export default {
        props: {
            values: {
                required: true,
                type: Array
            }
        },
        emits: ['cinput'],
        data: () => ({
            value: undefined
        })
    }
</script>

<style scoped>
    .selector {
        min-width: 140px;
        min-height: 25px;
        border-radius: 3px;
        outline: none;
        margin: 5px;
    }
</style>