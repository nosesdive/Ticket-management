<template>
  <main class="main">
    <section class="report-container">
      <h1>Daily Report</h1>
      <ReportSoldPerDay />
      <ReportFilter />
      <ReportTable />
    </section>
  </main>
</template>

<script>
import ReportFilter from '@/components/ReportFilter.vue';
import ReportTable from '@/components/ReportTable.vue';
import ReportSoldPerDay from '@/components/ReportSoldPerDay.vue';

export default {
  name: 'Report',

  components: {
    ReportFilter,
    ReportTable,
    ReportSoldPerDay,
  },
};
</script>

<style lang="scss" scoped>
  .report-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
  }
</style>