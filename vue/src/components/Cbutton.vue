<template>
    <button :class="{cbutton: true, activeBtn: $props.active, inactiveBtn: !$props.active}" :disabled="!$props.active">
        Создать
    </button>
</template>

<script>
    export default {
        props: {
            active: {
                required: false,
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .cbutton {
        border-radius: 3px;
        padding: 5px;
        min-width: 65px;
        border: none;
    }
    .cbutton:hover, .cbutton:focus, .cbutton:active {
        opacity: .75;
    }
    .cbutton:focus {
        outline: none;
    }
    .inactiveBtn {
        cursor: not-allowed;
        color: black;
        border: 1px solid #9d9d9d;
    }
    .activeBtn {
        background-color: dodgerblue;
        color: #fff;
    }

</style>