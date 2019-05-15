<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Stock Trader</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/stocks">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item href="#" @click="endDay" class="mr-3">End Day</b-nav-item>

          <b-nav-item-dropdown class="mr-3">
            <!-- Using 'button-content' slot -->
            <template slot="button-content" >Save & Load</template>
            <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
            <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <!-- Show the funds on the header -->
          <b-nav-text><strong>Funds: {{ funds | currency }}</strong></b-nav-text>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';
  import axios from 'axios';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        axios.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>
