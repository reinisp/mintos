<template>
  <div>
    <div class="row pt-2 selected-containter">
      <div class="col-4 pb-2" v-for="selectedCurrency in selectedCurrencies">
        <input type="checkbox"
               v-bind:id="selectedCurrency.title + '_selected'"
               v-bind:name="selectedCurrency.title + '_selected'"
               class="d-none">
        <label class="selected" v-bind:for="selectedCurrency.title + '_selected'">
          <span>{{ selectedCurrency.title }}</span>
          <span @click="removeCurrency(selectedCurrency)" class="checkmark"></span>
        </label>
      </div>
    </div>

    <div class="row pt-4">
      <div class="col-4 pb-1" v-for="currency in currencies">
        <input type="checkbox"
               v-model="selectedCurrencies"
               v-bind:value="currency"
               v-bind:id="currency.title"
               v-bind:name="currency.title"
               class="d-none">
        <label v-bind:for="currency.title">
          <span class="checkmark"></span>
          <span>{{ currency.title }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import { BehaviorSubject, of } from 'rxjs';

  export default {
    methods: {
      removeCurrency: function (currency) {
        const currencyIndex = this.selectedCurrencies.findIndex(({ title }) => title === currency.title);
        this.selectedCurrencies.splice(currencyIndex, 1);
      },
    },
    subscriptions: function () {
      return {
        currencies: of([
          {
            title: 'EUR',
          },
          {
            title: 'PLN',
          },
          {
            title: 'GEL',
          },
          {
            title: 'DKK',
          },
          {
            title: 'CZK',
          },
          {
            title: 'GBP',
          },
          {
            title: 'SEK',
          },
          {
            title: 'USD',
          },
          {
            title: 'RUB',
          },
        ]),
        selectedCurrencies: new BehaviorSubject([]),
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../styles";

  .selected-containter {
    min-height: 30px;
  }

  input[type="checkbox"] {
    & ~ label {
      font-size: 22px;
      color: $text-color-primary;
      background-color: $checkbox-background;
      border: 1px solid $checkbox-border;
      padding: 5px 0 5px 25px;
      display: inline-block;
      width: 100%;
      font-weight: 100;

      &:hover {
        cursor: pointer;
        background-color: $checkbox-background-hover;
      }

      &.selected {
        text-transform: lowercase;
        text-align: center;
        padding-left: 0;

        &:hover {
          cursor: default;
          background-color: $checkbox-background;
        }

        .checkmark {
          left: 110px;
          top: -6px;
          background: #000000;
          border-radius: 50%;
          width: 17px;
          height: 17px;
          border: 2px solid #FFFFFF;

          &:hover {
            cursor: pointer;
            background: #FFFFFF;
            border: 2px solid #000000;

            &:before,
            &:after {
              background-color: #000000;
            }
          }

          &:before,
          &:after {
            content: ' ';
            background-color: #FFFFFF;
            top: 1px;
            height: 11px;
            width: 1px;
          }
        }
      }

      .checkmark {
        position: absolute;
        left: 20px;
        top: 10px;
        width: 16px;
        height: 17px;
        border: 1px solid #A3A3A3;
        border-radius: 5px;

        &:before,
        &:after {
          position: absolute;
          left: 6px;
          top: 0;
          height: 15px;
          width: 2px;
          background-color: #EB3323;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }

    &:checked ~ label {
      background-color: $checkbox-background-checked;

      &.selected {
        background-color: $checkbox-background;
      }

      .checkmark {
        &:before,
        &:after {
          content: ' ';
        }
      }
    }
  }
</style>
