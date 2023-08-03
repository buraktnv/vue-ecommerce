<template>
    <div>
        <template v-for="order in orderList">
            <order-info :order="order" :key="order.id" />
        </template>
    </div>
</template>

<script>
import { ORDER_LIST } from "@/utils/data";
import OrderInfo from "@/components/order/OrderInfo.vue";
export default {
    name: "OrdersView",
    components: {
        OrderInfo,
    },
    data() {
        return {
            orderList: ORDER_LIST,
        }
    },
}
</script>

<style lang="scss" scoped></style>