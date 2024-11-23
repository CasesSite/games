<script setup lang="ts">
import ConclusionsCard from "~/components/inventory/conclusions-card.vue";
import inventoryImage from "@/public/assets/img/profile/inventory-item.png";
import inventoryIcon from "assets/img/inventory/success.svg";
</script>

<template>
  <section class="inventory-conclusions">
    <ConclusionsCard
      :imageSrc="inventoryImage"
      :image-icon="inventoryIcon"
      title="Melinor"
      subtitle="Starned Corbem"
      :price="294"
      status="success"
    />
  </section>
</template>

<style scoped lang="scss">
.inventory-conclusions {
  display: flex;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 3rem;
  background-color: #1b205a;
  padding: 4rem;
}
</style>
