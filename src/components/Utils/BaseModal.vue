<template>
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
  
        <div class="modal-buttons">
          <BaseButton type="close" @click="$emit('cancel')">
            Cancelar
          </BaseButton>
          <BaseButton type="delete" @click="$emit('confirm')">
            Confirmar
          </BaseButton>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue';
  
  export default {
    name: 'BaseModal',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'Confirmação',
      },
      message: {
        type: String,
        default: '',
      },
    },
    components: {
      BaseButton,
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 24px;
    border-radius: 12px;
    max-width: 400px;
    text-align: center;
  }
  
  .modal-buttons {
    margin-top: 20px;
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  </style>
  