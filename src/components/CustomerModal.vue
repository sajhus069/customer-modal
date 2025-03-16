<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <div class="left-section">
          <button class="return-btn" @click="$emit('close')">←</button>
          <div class="modal-title">
            <span class="return-text">Return items</span>
            <h2 class="modal-heading">Select customer</h2>
          </div>
        </div>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>

      <!-- Slot for modal content -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Content */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 24px;
  width: 90%;
  max-width: 768px;
  position: relative;
}

/* Modal Header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
}

/* Left Section (Return button + Title) */
.left-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Return Button */
.return-btn {
  background: none;
  border: 1px solid #F3F2F2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Modal Title */
.modal-title {
  display: flex;
  flex-direction: column;
}

.return-text {
  font-size: 12px;
  color: #000;
  font-weight: 600;
  margin-bottom: -2px; /* Aligns text with button */
  text-align: left;
}

.modal-heading {
  font-size: 18px;
  font-weight: bold;
  color:#000;
  margin: 0;
}

/* Close Button */
.close-btn {
  background: #F3F2F2;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
