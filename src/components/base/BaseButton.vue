<template>
    <button :class="buttonClasses">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        type: {
            type: String,
            validator: (value) => ["primary", "secondary"].includes(value),
        },
        size: {
            type: String,
            validator: (value) =>
                ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].includes(value),
        },
        bord: {
            type: String,
            validator: (value) => ["sm", "md", "lg"].includes(value),
        },
        color: {
            type: String,
            validator: (value) =>
                ["clr-white", "clr-electricViolet", "clr-capeCod", "clr-empress"].includes(value),
        },
        background: {
            type: String,
            validator: (value) =>
                ["bg-white", "bg-electricViolet", "bg-wildSand", "bg-transparent"].includes(value),
        },
    },
    computed: {
        buttonClasses() {
            return [
                "base-button",
                this.type && `-${this.type}`,
                this.size && `-${this.size}`,
                this.color && `-${this.color}`,
                this.background && `-${this.background}`,
                this.bord && `-${this.bord}`,
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
$colors: (
    "clr-white": $white,
    "clr-electricViolet": $electricViolet,
    "clr-capeCod": $capeCod,
    "clr-empress": $empress,
);

$paddings: (
    "xxs": 16px 8px,
    "xs": 12px 20px,
    "sm": 16px 20px,
    "md": 14px 28px,
    "lg": 12px 40px,
    "xl": 12px 44px,
    "xxl": 12px 48px,
    "xxxl": 16px 72px,
);

$bg-colors: (
    "bg-electricViolet": $electricViolet,
    "bg-white": $white,
    "bg-wildSand": $wildSand,
    "bg-transparent": transparent,
);

$borders: (
    "sm": 1px solid $capeCod,
    "md": 1px solid $paleSlate,
    "lg": 2px solid $capeCod,
);

.base-button {
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;

    &.-primary {
        padding: 12px 48px;
        background: $electricViolet;
        border: none;
        color: $white;
    }

    &.-secondary {
        padding: 12px 48px;
        background: transparent;
        border: 1px solid $capeCod;
        color: $electricViolet;
    }

    @each $name,
    $size in $paddings {
        &.-#{$name} {
            padding: $size;
        }
    }

    @each $name,
    $color in $colors {
        &.-#{$name} {
            color: $color;
        }
    }

    @each $name,
    $borderStyle in $borders {
        &.-#{$name} {
            border: $borderStyle;
        }
    }

    @each $name,
    $background in $bg-colors {
        &.-#{$name} {
            background: $background;
        }
    }
}
</style>