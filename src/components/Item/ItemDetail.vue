<template>
    <div class="item-detail">
      <h1>Detalhes do Item</h1>
      <p><strong>ID:</strong> {{ id }}</p>
      <!-- Aqui depois podemos buscar dados reais pelo id -->
      <BaseButton type="close" @click="goBack">Voltar</BaseButton>
    </div>
  </template>
  
  <script>
  import BaseButton from '../Utils/BaseButton.vue';
  
  export default {
    name: 'ItemDetail',
    props: ['id'],
    components: {
      BaseButton,
    },
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .item-detail {
    padding: 30px;
  }
  </style>
  