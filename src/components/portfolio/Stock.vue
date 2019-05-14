<template>
    <b-col sm="6" md="4" class="float-left mt-4">
        <b-card
            border-variant="info">
            <div slot="header">{{ stock.name }}
                <small>(Price : {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
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
                        variant="info"
                        class="float-right"
                        @click="sellStock"
                        :disabled="quantity <= 0 || Number.isInteger(quantity)">Sell</b-button>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>

    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    quantity: this.quantity,
                    stockPrice: this.stock.price
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

