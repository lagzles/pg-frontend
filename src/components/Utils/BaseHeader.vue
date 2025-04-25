<template>
    <header class="base-header">
      <div class="left">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <span class="app-name">Meu Sisteminha maroto</span>
      </div>
  
      <div class="right">
          <p class="user-name">Fulano de tal</p>
          <img src="@/assets/user-placeholder.png" alt="Usuário" class="user-avatar" />
          <BaseButton type="text-only" @click="handleLogoff"> Log off </BaseButton>
      </div>

      <BaseModal
        :show="showModal"
        ref="logoffModal"
        title="Fazer logoff"
        :message="`Deseja realizar seu logoff? Fulano de tal?`"
        @confirm="confirmLogoff"
        @cancel="cancelLogoff"
      />
    </header>
  </template>
  
  <script>

import BaseButton from './BaseButton.vue';
import BaseModal from './BaseModal.vue';

  export default {
    name: 'BaseHeader',
    components: {
      BaseButton,
      BaseModal
    },
    methods:{
        handleLogoff() {
            this.$refs.logoffModal.show = true;
        },
        confirmLogoff() {
            this.$emit('logoff');
        }
    }
  };
  </script>
  
  <style scoped>
  .base-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 12px 24px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .left, .right {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  
  .app-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .user-name {
    font-size: 16px;
    color: #333;
  }
  </style>
  