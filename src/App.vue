<template>
  <div id="app">
    <BaseHeader />
    <router-view />
  </div>
</template>

<script>
import BaseHeader from './components/Utils/BaseHeader.vue';

export default {
  name: 'App',
  components: {
    BaseHeader,
  },
}
</script>
