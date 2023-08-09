<template>
    <div>
        <div class="detail-card">
            <base-title class="detail-card__title">Order Detail</base-title>
            <div class="detail-card__list">
                <template v-for="orderDetail in orderDetailList">
                    <order-detail typical="detail" :detail="orderDetail" :key="orderDetail.id" />
                </template>
            </div>
        </div>

    </div>
</template>

<script>
import BaseTitle from '@/components/base/BaseTitle.vue';
import { ORDER_LIST } from "@/utils/data";
import OrderDetail from "@/components/order/OrderDetail.vue";

export default {
    name: "OrderDetailView",
    components: {
        BaseTitle,
        OrderDetail
    },
    data() {
        return {
            orderDetailList: ORDER_LIST[0].details,
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-card {
    padding: 30px 25%;

    &__title {
        margin-bottom: 50px;
    }

    &__list {
        padding: 50px 43px 20px 43px;
        background: $wildSand;
        border-radius: 8px;
    }

    
}
</style>