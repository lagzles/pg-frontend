<template>
    <button :class="buttonClass" @click="$emit('click')">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'BaseButton',
    props: {
      type: {
        type: String,
        default: 'default', // azul é o padrão
      }
    },
    computed: {
      buttonClass() {
        switch (this.type) {
          case 'confirm':
          case 'continue':
          case 'ok':
          case 'advance':
            return 'btn btn-blue';
          case 'cancel':
          case 'delete':
            return 'btn btn-red';
          case 'edit':
          case 'close':
          case 'create':
            return 'btn btn-black';
          case 'text-only':
            return 'btn btn-text-only';
          default:
            return 'btn btn-blue'; // fallback
        }
      },
    },
  };
  </script>
  
<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;
  font-size: 14px;
}

/* Estilos normais */
.btn-blue {
  background-color: #007bff;
  color: white;
  border: none;
}
.btn-blue:hover {
  background-color: #0056b3;
}

.btn-red {
  background-color: #dc3545;
  color: white;
  border: none;
}
.btn-red:hover {
  background-color: #b02a37;
}

.btn-black {
  background-color: white;
  color: #000;
  border: 2px solid #ccc;
}
.btn-black:hover {
  background-color: #f5f5f5;
}

.btn-text-only {
  background: none;
  border: none;
  padding: 0;
  color: #007bff;
  font-weight: normal;
}
.btn-text-only:hover {
  text-decoration: underline;
}
</style>