<template>
    <div class="discount">
        <img class="discount__bg" :src="imgURL" alt="backgroung-image">
        <div class="discount__content">
            <base-text :text="subtitle"></base-text>
            <base-title>{{ title }}</base-title>
            <base-text :text="discount"></base-text>
            <base-text :text="explore"></base-text>
        </div>
    </div>
</template>

<script>
import BaseText from '../base/BaseText.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseText, BaseTitle },
    name: "DiscountCard",
    props: {
        imgURL: { type: String, required: true },
        subtitle: String,
        title: String,
        discount: String,
        explore: String,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.discount {
    position: relative;
    color: $white;

    &__bg {
        position: absolute;
        width: 600px;
        height: 350px;
        border-radius: 12px;
        z-index: -1;
    }

    &__content {
        position: relative;
        padding-left: 30px;
    }
}
</style>