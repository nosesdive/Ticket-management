<template>
  <div class="filter-form">
    <form>
      <div class="filter-container">
        <div class="filter-col">
          <div class="form-group">
            <label>Type:</label>
            <select class="form-control">
              <option>All Types</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
        </div>
        <div class="filter-col">
          <div class="form-group">
            <label>Date Period:</label>
            <DatePicker
              mode="range"
              :value="null"
              :input-props="{
                class: 'form-control',
                placeholder: 'All periods',
              }"
              :popover="{ placement: 'bottom', visibility: 'click' }"
              :masks="{ L: 'DD/MM/YYYY' }"
              class="form-control-date"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
  name: 'ReportFilter',

  components: {
		DatePicker,
	},
};
</script>

<style lang="scss" scoped>
  .filter-form {
    margin: 48px 0 16px;
  }

  .filter-container {
    display: flex;
  }

  .filter-col {
    width: 25%;
    padding: 0 12px;
  }
</style>