<template>
    <div class="discount">
        <img class="discount__bg" :src="imgURL" alt="backgroung-image">
        <div class="discount__content">
            <base-text class="discount__content__subtitle" :text="subtitle"></base-text>
            <base-title class="discount__content__title">{{ title }}</base-title>
            <base-text class="discount__content__discount" :text="discount"></base-text>
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
    overflow: hidden;
    width: 600px;
    height: 350px;
    border-radius: 12px;

    &__bg {
        position: absolute;
        width: 150%;
        height: 200%;
        object-fit: cover;

        &.-reverse {
            transform: scaleX(-1);
        }
    }

    &__content {
        position: relative;
        padding-left: 30px;
        padding-top: 50px;

        &__title {
            margin-bottom: 10px;
        }

        &__subtitle {
            margin-bottom: 24px;
        }

        &__discount {
            margin-bottom: 40px;
        }
    }
}
</style>