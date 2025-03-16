<template>
  <div class="home">
    <button @click="showModal = true" class="open-modal-btn">
      Select Customer
    </button>

    <!-- Modal only appears when showModal is true -->
    <CustomerModal v-if="showModal" @close="showModal = false">
      <SearchBar
        @search="setSearchQuery"
        :filteredCount="filteredCustomers.length"
        :totalCustomers="customers.length"
      />
      <CustomerList :customers="filteredCustomers" :searchQuery="searchQuery" />
    </CustomerModal>
  </div>
</template>

<script>
import { fetchCustomers } from '../mock/api';
import CustomerModal from '../components/CustomerModal.vue';
import SearchBar from '../components/SearchBar.vue';
import CustomerList from '../components/CustomerList.vue';

export default {
  name: 'CustomerHome',
  components: { CustomerModal, SearchBar, CustomerList },
  data() {
    return {
      customers: [],
      searchQuery: '',
      showModal: false, // Modal is hidden initially
    };
  },
  computed: {
    filteredCustomers() {
      if (!this.searchQuery) return this.customers;
      const filteredCustomers = this.customers.filter(
        (customer) =>
          customer.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          customer?.id?.toLowerCase().includes(this.searchQuery.toLowerCase()) // Ensure ID is a string
      );
      console.log(filteredCustomers, 'customer')
      return filteredCustomers;
    },
  },
  mounted() {
    fetchCustomers().then((data) => (this.customers = data));
  },
  methods: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.open-modal-btn {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
