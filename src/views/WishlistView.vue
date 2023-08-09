<template>
    <div class="wish">   
        <base-title class="wish-title">Wishlist</base-title>
        <template v-for="wish in wishlist">
            <order-detail typical="wishlist" :detail="wish" :key="wish.id" />
        </template>
    </div>
</template>

<script>
import BaseTitle from '@/components/base/BaseTitle.vue';
import { WISHLIST } from "@/utils/data";
import OrderDetail from "@/components/order/OrderDetail.vue";

export default {
    name: "WishlistView",
    components: {
        BaseTitle,
        OrderDetail
    },
    data() {
        return {
            wishlist: WISHLIST,
        }
    }
}
</script>

<style lang="scss" scoped>
.wish {
    padding: 30px 20%;

    &-title{
        margin-bottom: 50px;
    }
}
</style>