<template>
    <b-col sm="6" md="4" class="float-left mt-4">
        <b-card
            border-variant="success">
            <div slot="header">{{ stock.name }}
                <small>(Price : {{ stock.price }})</small>
            </div>
            <b-row>
                <b-col md="8">
                    <b-form-input 
                        type="number" 
                        placeholder="Quantity"
                        class="float-left"
                        v-model="quantity"></b-form-input>
                </b-col>
                <b-col>
                    <b-button 
                        variant="success"
                        class="float-right"
                        @click="buyStock"
                        :disabled="quantity <= 0 || Number.isInteger(quantity)">Buy</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log(order);
                this.quantity = 0;
            }
        }
    }
</script>

