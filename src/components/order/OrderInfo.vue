<template>
    <div class="card">
        <p class="title">Order no : {{ order.no }}</p>
        <div class="card-info">
            <div class="row">
                <p class="subtitle">Order Date : <span class="desc">{{ formattedOrderDate }}</span></p>
                <p class="subtitle">Order Status : <span class="desc">{{ order.status }}</span></p>
            </div>
            <div class="row">
                <p class="subtitle">Estimated Delivery Date : <span class="desc">{{ formattedDeliveryDate }}</span></p>
                <p class="subtitle">Payment Method : <span class="desc">{{ order.payment }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "OrderInfo",
    components: {
    },
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    computed: {
        formattedOrderDate() {
            return moment(this.order.date).format('D MMMM YYYY h:mm A');
        },
        formattedDeliveryDate() {
            return moment(this.order.deliveryDate).format('D MMMM YYYY');
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    margin: 30px 25%;
    border-radius: 8px;
    background: $wildSand;
    padding: 28px 47px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: $secondary-font;

    .title {
        font-size: $fs-sm;
        font-weight: $font-semibold;
        color: $capeCod;
    }

    &-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .row {
            display: flex;
            justify-content: space-between;

            .subtitle {
                font-size: $fs-xs;
                font-weight: $font-semibold;
                color: $empress;

                .desc {
                    font-weight: $font-regular;
                    color: $paleSlate;
                }
            }
        }
    }
}
</style>