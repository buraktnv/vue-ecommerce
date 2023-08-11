<template>
    <div class="card " :class="typical">
        <img v-if="isWishlist" src="@/assets/icons/close-icon.svg" alt="close icon">
        <img class="close-icon" :src="require(`@/assets/images/${detail.img}`)">
        <div class="card-info">
            <p class="info">{{ detail.name }}</p>
            <p class="info">Color : <span>{{ detail.colour }}</span></p>
            <p class="info">{{ quantityText }} : <span>{{ detail.quantity }}</span></p>
            <p class="price"><span>${{ detail.total }}</span></p>
            <div v-if="!isDetail" class="button-container">
                <base-button type="primary" size="md">{{ buttonText }}</base-button>
            </div>
            <div v-if="isDetail" class="icon-container">
                <img class="close-icon" src="@/assets/icons/close-icon.svg" alt="close icon">
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
    name: "OrderDetail",
    components: {
        BaseButton
    },
    props: {
        typical: {
            type: String,
            validator: (value) =>
                ["wishlist", "active", "detail"].includes(value),
        },
        detail: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isWishlist() {
            return this.typical === "wishlist";
        },
        isDetail() {
            return this.typical === "detail";
        },
        buttonText() {
            return this.typical === "wishlist" ? "Add to Cart" : "View Detail";
        },
        quantityText() {
            return this.typical === "detail" ? "Qty" : "Quantity";
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    max-height: 110px;
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    font-family: $secondary-font;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 140px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $athensGray;
    }

    span {
        color: $empress;
    }

    .card-info {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        .info,
        .price {
            font-size: $fs-sm;
            font-weight: 700;
            letter-spacing: 0.44px;

            span {
                font-weight: 500;
            }
        }

        .info {
            color: $capeCod;
        }

        .price {
            color: $empress;
        }
    }

    &.wishlist {
        gap: 36px;

        .card-info {
            width: 100%;
            grid-template-rows: 3;
            align-items: center;

            .info:nth-child(1) {
                grid-column: 1/13;
                grid-row: 1;
            }

            .info:nth-child(2) {
                grid-column: 1/5;
                grid-row: 2;
            }

            .info:nth-child(3) {
                grid-column: 1/13;
                grid-row: 3;
            }

            .price {
                grid-column: 8/10;
                grid-row: 2;
            }

            .button-container {
                width: 100%;
                grid-column: 10/13;
                grid-row: 2;
                display: flex;
                justify-content: flex-end;
            }
        }
    }

    &.active {
        gap: 20px;

        span {
            color: $paleSlate;
        }

        .card-info {
            width: 100%;
            grid-template-rows: 4;
            align-items: center;
            gap: 5px;

            .info {
                font-size: $fs-xs;
                font-weight: 600;
            }

            .info:nth-child(1) {
                grid-column: 1/5;
                grid-row: 1;
                margin-bottom: 5px;
                font-size: 16px;
            }

            .info:nth-child(2) {
                grid-column: 1/5;
                grid-row: 2;
            }

            .info:nth-child(3) {
                grid-column: 1/5;
                grid-row: 3;
            }

            .price {
                grid-column: 1/5;
                grid-row: 4;

                span {
                    color: $empress;
                }
            }

            .button-container {
                width: 100%;
                grid-column: 10/13;
                grid-row: 2/4;
                display: flex;
                justify-content: flex-end;
            }
        }
    }

    &.detail {
        width: 100%;
        gap: 33px;

        .card-info {
            width: 100%;
            grid-template-rows: 2;
            align-self: start;

            .info:nth-child(1) {
                grid-column: 1/5;
                grid-row: 1;
            }

            .info:nth-child(2) {
                grid-column: 1/5;
                grid-row: 2;
            }

            .info:nth-child(3) {
                grid-column: 8/10;
                grid-row: 1;
            }

            .price {
                grid-column: 10/12;
                grid-row: 1;
            }

            .icon-container {
                width: 100%;
                grid-column: 12/13;
                grid-row: 1;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}</style>