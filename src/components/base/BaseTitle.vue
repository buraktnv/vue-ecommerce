<template>
    <p class="title" :class="[typical]">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: "BaseTitle",
    props: {
        typical: {
            type: String,
            required: false,
            default: "title"
        },
    },
}
</script>

<style lang="scss" scoped>
.title {
    font-family: $secondary-font;
    font-weight: $font-bold;
    position: relative;
    font-size: $fs-xl;

    &.-psuedo {
        margin-left: 15px;
        &::before {
            position: absolute;
            content: "";
            top: 3px;
            left: -15px;
            width: 6px;
            height: 28px;
            border-radius: 10px;
            background-color: $electricViolet;
        }
    }

    &.-fsmall{
        font-size: $fs-lg;
    }
}
</style>