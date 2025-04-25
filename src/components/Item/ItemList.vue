<template>
    <div class="item-list">
      <h1>Lista de Itens</h1>
  
      <div v-if="loading" class="loading">Carregando itens...</div>
  
      <div v-else class="card-container">
        <CardItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @edit="handleEdit"
          @delete="openDeleteModal"
        />
      </div>
  
      <BaseModal
        :show="showModal"
        title="Confirmar exclusão"
        :message="`Deseja realmente excluir '${itemToDelete?.name}'?`"
        @confirm="confirmDelete"
        @cancel="cancelDelete"
      />
    </div>
  </template>
  
  <script>
  import CardItem from './CardItem.vue';
  import BaseModal from '../Utils//BaseModal.vue';
  
  export default {
    name: 'ItemList',
    components: {
      CardItem,
      BaseModal,
    },
    data() {
      return {
        items: [],
        loading: true,
        showModal: false,
        itemToDelete: null,
      };
    },
    created() {
      setTimeout(() => {
        this.items = [
          { id: 1, name: 'Item A', description: 'Descrição do item A', value: 15.45 },
          { id: 2, name: 'Item B', description: 'Descrição do item B', value: 25.99 },
          { id: 3, name: 'Item C', description: 'Descrição do item C', value: 10.00 },
          { id: 4, name: 'Item D', description: 'Descrição do item D', value: 30.50 },
          { id: 5, name: 'Item E', description: 'Descrição do item E', value: 45.75 },
          { id: 6, name: 'Item F', description: 'Descrição do item F', value: 60.00 },
        ];
        this.loading = false;
      }, 1500);
    },
    methods: {
      handleEdit(item) {
        this.$router.push({ name: 'ItemDetail', params: { id: item.id } });
      },
      openDeleteModal(item) {
        this.itemToDelete = item;
        this.showModal = true;
      },
      confirmDelete() {
        this.items = this.items.filter(i => i.id !== this.itemToDelete.id);
        this.closeModal();
      },
      cancelDelete() {
        this.closeModal();
      },
      closeModal() {
        this.itemToDelete = null;
        this.showModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .item-list {
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .loading {
    font-style: italic;
    color: #666;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
  }
  </style>
  