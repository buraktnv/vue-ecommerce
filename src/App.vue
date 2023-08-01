<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <DiscountCard :backgroundImage="imgURL" :subtitle="subtitle" :title="title" :discount="discount" :explore="explore"></DiscountCard>
  </div>
</template>

<script>

import DiscountCard from "./components/DiscountCard";

export default {
  name: "app",
  components: { DiscountCard, },
  data() {
    return {
      value1: null,
      subtitle: "Low Price",
      title: "High Coziness",
      discount: "UPTO 50% OFF",
      explore: "Explore Items",
    };
  },
};
</script>

<style></style>
