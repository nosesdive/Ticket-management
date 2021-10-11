<template>
  <div id="app">
    <TheMainHeader />
    <router-view />
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue';

export default {
  name: 'App',

  components: {
    TheMainHeader,
  },
};
</script>

<style lang="scss">
  // Import Main styles for this application
  @import "assets/scss/app";
</style>