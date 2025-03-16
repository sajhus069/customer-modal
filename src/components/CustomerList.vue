<template>
  <div class="customer-list">
    <CustomerItem
      v-for="customer in customers" 
      :key="customer.id"
      :customer="customer"
    />
  </div>
</template>

<script>
import CustomerItem from "./CustomerItem.vue";

export default {
  components: { CustomerItem },
  props: ["customers"], // Remove "searchQuery" as filtering is done in CustomerHome.vue
};
</script>

<style scoped>
.customer-list {
  max-height: 400px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 8px;
  background: white;
}
</style>
