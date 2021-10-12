<template>
  <table class="table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Total Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataTable" :key="index">
        <td>{{ item.type }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.totalPrice }} ฿</td>
        <td><a href="">Edit</a> <a href="">Delete</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ReportTable',

  data() {
    return {
      ticketItems: [
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
        { type: 'A', amount: '100' },
        { type: 'B', amount: '250' },
        { type: 'C', amount: '300' },
        { type: 'D', amount: '400' },
      ],
      ticketDetails: {
        A: {
          price: 5000,
          limitPerDay: 10,
          minimumBuying: 1,
        },
        B: {
          price: 2500,
          limitPerDay: 20,
          minimumBuying: 2,
        },
        C: {
          price: 1000,
          limitPerDay: 30,
          minimumBuying: 2,
        },
        D: {
          price: 500,
          limitPerDay: 40,
          minimumBuying: 3,
        },
      },
    }
  },

  computed: {
    dataTable() {
      return this.ticketItems.map(item => ({
        ...item,
        totalPrice: (Number(item.amount) * this.ticketDetails[item.type].price).toLocaleString('en-US'),
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
  .table {
    width: 100%;
    margin-bottom: 48px;
    border-collapse: separate;
    border-spacing: 0;

    th {
      z-index: 1;
      position: sticky;
      top: 0;
      border-bottom: 1px solid #e0e0e0;
      text-align-last: left;
      background-color: #fff;
    }

    th,td {
      padding: 8px;
    }

    td {
      border-bottom: 1px solid #eee;
    }
  }
</style>