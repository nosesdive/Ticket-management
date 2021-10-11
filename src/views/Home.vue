<template>
  <div class="home-container container">
    <FormBuyTicket />
  </div>
</template>

<script>
import FormBuyTicket from '@/components/FormBuyTicket.vue';
export default {
  name: 'Home',

  components: {
    FormBuyTicket,
  },
}
</script>
