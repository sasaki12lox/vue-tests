<template>
    <div class="three-quarters-loader"></div>
</template>

<script>
    export default {
        name: 'Loader'
    }
</script>

<style scoped>
    :root {
        --loader-size: 2vh;
    }

    @-moz-keyframes three-quarters-loader {
        0% {
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        100% {
        -moz-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
    @-webkit-keyframes three-quarters-loader {
        0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
    @keyframes three-quarters-loader {
        0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        }
        100% {
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
    .three-quarters-loader:not(:required) {
        -moz-animation: three-quarters-loader 1250ms infinite linear;
        -webkit-animation: three-quarters-loader 1250ms infinite linear;
        animation: three-quarters-loader 1250ms infinite linear;
        border: calc(var(--loader-size)*0.25) solid #38e;
        border-right-color: transparent;
        border-radius: calc(var(--loader-size)*0.5);
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        overflow: hidden;
        text-indent: -9999px;
        width: var(--loader-size);
        height: var(--loader-size);
    }
</style>