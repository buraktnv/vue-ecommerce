<template>
    <div>
        <div class="order">
            <base-title>Orders</base-title>
            <template v-for="order in orderList">
                <order-info :order="order" :key="order.id" />
                <order-detail typical="active" :detail="order.details[0]" :key="`${order.id}-${order.details[0].id}`" />
            </template>
        </div>
    </div>
</template>

<script>
import { ORDER_LIST } from "@/utils/data";
import OrderInfo from "@/components/order/OrderInfo.vue";
import OrderDetail from "@/components/order/OrderDetail.vue";
import BaseTitle from '@/components/base/BaseTitle.vue';

export default {
    name: "OrdersView",
    components: {
        OrderInfo,
        OrderDetail,
        BaseTitle
    },
    data() {
        return {
            orderList: ORDER_LIST,
        }
    },
}
</script>

<style lang="scss" scoped>
.order {
    padding: 30px 25%;

    &-list {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>