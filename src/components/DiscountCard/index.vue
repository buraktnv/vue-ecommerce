<template>
    <div class="discount" :style="{ backgroundImage: 'url('+ backgroundImage +')'}">
        <base-text>{{ subtitle }}</base-text>
        <base-title>{{ title }}</base-title>
        <base-text>{{ discount }}</base-text>
        <base-text>{{ explore }}</base-text> <!-- make hyperlink component ? -->
    </div>
</template>

<script>
import BaseText from '../base/BaseText.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
  components: { BaseText, BaseTitle },
    name: "DiscountCard",
    props:{
        backgroundImage: String,
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

</style>