<template>
    <div class="discount">
        <img :src="imgURL" alt="backgroung-image">
        <base-text :text="subtitle"></base-text>
        <base-title>{{ title }}</base-title>
        <base-text :text="discount"></base-text>
        <base-text :text="explore"></base-text>
    </div>
</template>

<script>
import BaseText from '../base/BaseText.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseText, BaseTitle },
    name: "DiscountCard",
    props: {
        imgURL: { type: String, required: true},
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

<style lang="scss" scoped></style>