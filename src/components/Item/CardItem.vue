<template>
    <div class="card">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p>R$ {{ item.value }}</p>
  
      <div class="button-group">
        <BaseButton type="edit" @click="$emit('edit', item)">Editar</BaseButton>
        <BaseButton type="delete" @click="$emit('delete', item)">Excluir</BaseButton>
      </div>
    </div>
  </template>
  
  <script>
  import BaseButton from '../Utils/BaseButton.vue';
  
  export default {
    name: 'CardItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    components: {
      BaseButton,
    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card:hover {
    transform: scale(1.02);
  }
  
  .button-group {
    margin-top: 12px;
    display: flex;
    gap: 8px;
  }
  </style>
  