<template>
    <b-col sm="6" md="4" class="float-left mt-4">
        <b-card
            border-variant="success">
            <div slot="header">{{ stock.name }}
                <small>(Price : {{ stock.price }})</small>
            </div>
            <b-row>
                <b-col md="6">
                    <b-form-input 
                        type="number" 
                        placeholder="Quantity"
                        class="float-left"
                        v-model="quantity"
                        :class="{danger: insufficientFunds}"></b-form-input>
                </b-col>
                <b-col>
                    <b-button 
                        variant="success"
                        class="float-right"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)">
                        {{ insufficientFunds? 'Insufficient Funds' : 'Buy' }}</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

