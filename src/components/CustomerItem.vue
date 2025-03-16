<template>
    <div class="customer-item">
      <div class="avatar">
        {{ customer.initials }}
        <img src="@/assets/greenCheck.svg" alt="Search" class="green-check" />
      </div>
      <div class="details">
        <div class="top-row">
          <span class="customer-id">{{ customer.id }}</span>
          <span class="name">{{ customer.name }}</span>
        </div>
        <div class="bottom-row">
          <span class="info">Lorem • Ipsum</span> <!-- Placeholder for additional details -->
        </div>
      </div>
      <span class="city">{{ customer.city }}</span>
      <button class="return-btn">Start return →</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["customer"],
  };
  </script>
  
  <style scoped>
  .customer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  font-family: Arial, sans-serif;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 20%;
  background: linear-gradient(133.53deg, #00FFA3 2.44%, rgba(0, 194, 255, 0.17) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
  position: relative;
}

.details {
  flex: 1;
  min-width: 0;
  margin-left: 12px;
  overflow: hidden;
  flex-shrink: 0; /* Prevents resizing */
}

.green-check {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background-color: #2DC579;
  color: white;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid white;
}

.top-row {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
}

.customer-id {
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.name {
  font-size: 14px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bottom-row {
  font-size: 14px;
  color: #000;
  margin-top: 2px;
  text-align: left;
}

.city {
  white-space: nowrap; /* Ensures city names don't wrap */
  text-align: left; /* Aligns text to the left */
  min-width: 100px; /* Adjust as needed */
}

.return-btn {
  background-color: #f0f0f0;
  color: #005eff;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 12px;
}

.return-btn:hover {
  background-color: #e0e0e0;
}

  </style>
  