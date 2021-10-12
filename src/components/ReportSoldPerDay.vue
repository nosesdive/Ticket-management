<template>
  <div class="sold">
    <div
      v-for="soldItem in soldTickets"
      :key="soldItem.type"
      class="sold-item"
    >
      <p>Type: {{ soldItem.type }}</p>
      <div class="sold-number">{{ soldItem.total }}</div>
      <small>Ticket(s) sold</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportSoldPerDay',

  data() {
    return {
      soldTickets: [
        {
          type: 'A',
          total: '1,298',
        },
        {
          type: 'B',
          total: '234',
        },
        {
          type: 'C',
          total: '32,328',
        },
        {
          type: 'D',
          total: '832',
        },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
  .sold {
    display: flex;

    &-item {
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 16px;
      box-shadow: 0 2px 8px #f0f1f2;;
      text-align: center;

      p {
        margin: 0;
      }
    }

    &-number {
      font-size: 48px;
      font-weight: 600;
    }
  }


</style>