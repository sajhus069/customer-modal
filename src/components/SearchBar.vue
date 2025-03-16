<template>
    <div class="search-bar">
      <div class="search-container">
        <img src="@/assets/searchIcon.svg" alt="Search" class="search-icon" />
        <input
          type="text"
          v-model="search"
          @input="$emit('search', search)"
          placeholder="Search for ID or name"
        />
      </div>
      <div class="customer-count">{{ filteredCount }} of {{ totalCustomers }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    filteredCount: Number,
    totalCustomers: Number,
  },
    data() {
      return {
        search: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid #ddd;
    padding-left: 0 !important;
    align-items: center;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    background: #f0f0f0;
    border-radius: 24px;
    padding: 10px 16px 10px 10px;
    width: 304px;
    max-width: 400px;
    height: 24px;
  }
  
  .search-icon {
    margin-right: 8px;
    color: #999;
  }
  .search-bar input::placeholder{
    color: #62717E;
    font-weight: 600;
    font-size: 14px;
  }
  .search-bar input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: #333;
  }
  .customer-count {
    font-size: 12px;
    color: #010A1F;
    font-weight: 600;
    white-space: nowrap;
  }
  
  </style>
  