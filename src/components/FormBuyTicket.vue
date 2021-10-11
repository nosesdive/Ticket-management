<template>
  <div class="form-ticket">
    <form
      @submit.prevent="onSubmit"
    >
      <h1 class="form-title">Buy Ticket?</h1>
      <div class="form-group">
        <label>Type:</label>
        <div class="ticket-type">
          <div
            v-for="typeItem in typeOptions"
            :key="typeItem"
            @click="handleClickType(typeItem)"
          >
            <span class="ticket-type-item" :class="{ active: type === typeItem }">{{ typeItem }}</span>
          </div>
        </div>
        <span v-if="isInvalidType" class="invalid-message">Please select ticket type.</span>
      </div>
      <div class="form-group">
        <label>Quantity:</label>
        <input v-model="quantity" type="number" class="form-control">
        <small v-if="type" class="minumum-buying-helper">
          Minimum buying is {{ ticketDetails[type].minimumBuying }}
        </small>
        <span v-if="isInvalidQuantity" class="invalid-message">
          {{ errorMessageQuantity }}
        </span>
      </div>
      <div class="form-group form-submit">
        <div class="summary">
          <label>Total price: </label> {{ totalPrice }}
        </div>
        <button type="submit" class="primary-button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormBuyTicket',

  data() {
    return {
      // This data should fetch by api
      ticketDetails: {
        a: {
          price: 5000,
          limitPerDay: 10,
          minimumBuying: 1,
        },
        b: {
          price: 2500,
          limitPerDay: 20,
          minimumBuying: 2,
        },
        c: {
          price: 1000,
          limitPerDay: 30,
          minimumBuying: 2,
        },
        d: {
          price: 500,
          limitPerDay: 40,
          minimumBuying: 3,
        },
      },
      type: null,
      quantity: null,
      isInvalidType: false,
      isInvalidQuantity: false,
    }
  },

  computed: {
    // Type option will return a-d
    typeOptions() {
      return Object.keys(this.ticketDetails);
    },

    errorMessageQuantity() {
      if (!this.quantity) {
        return 'Please input quantity.';
      } else if (Number(this.quantity) > this.limitPerDay) {
        return `You cannot buy tickets for more than ${this.limitPerDay} ticket per day.`;
      }

      return '';
    },

    limitPerDay() {
      return this.ticketDetails[this.type]?.limitPerDay;
    },

    totalPrice() {
      const price = (this.ticketDetails[this.type]?.price ?? 0) * (this.quantity || 0);

      return price.toLocaleString('en-US');
    },
  },

  methods: {
    handleClickType(type) {
      this.resetForm();
      this.type = type;
      this.quantity = this.ticketDetails[type].minimumBuying;
    },

    resetForm() {
      this.isInvalidType = false;
      this.isInvalidQuantity = false;
    },

    isValidForm() {
      return this.type && (this.quantity && Number(this.quantity) <= this.limitPerDay);
    },

    onSubmit() {
      this.resetForm();

      if (this.isValidForm()) {
        alert('Submit form to API.')
      } else {
        if (!this.type) {
          this.isInvalidType = true
        }

        if (!this.quantity || (Number(this.quantity) > this.limitPerDay)) {
          this.isInvalidQuantity = true
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .primary-button {
    font-size: 16px;
    color: #fff;
    background-color: var(--color-secondary);
    height: 40px;
    border-radius: 4px;
    line-height: 32px;
    padding: 0 32px;
    border: 1px solid #fff;
    cursor: pointer;

    &:hover {
      background-color: var(--color-secondary-hover);
    }
  }

  .form-ticket {
    width: 600px;
    margin: 60px auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px #f0f1f2;
    padding: 16px 24px 24px;
  }

  .form-title {
    margin-top: 8px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 24px;

    label {
      display: inline-block;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .form-control {
      display: block;
      height: 32px;
      padding: 0 18px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #333;
    }

    &.form-submit {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }
  }

  .ticket-type {
    display: flex;

    &-item {
      display: block;
      width: 80px;
      text-align: center;
      margin-right: 8px;
      background-color: #f9f9f9;
      border-radius: 16px;
      border: 1px solid;
      cursor: pointer;
      text-transform: uppercase;

      &.active {
        color: #fff;
        background-color: #199101;
        border-color: #199101;
      }

      &:hover {
        background-color: #eee;
      }
    }
  }

  .minumum-buying-helper {
    color: #999;
  }

  .invalid-message {
    display: block;
    font-size: 14px;
    color: var(--color-error);
    margin-top: 4px;
  }
</style>