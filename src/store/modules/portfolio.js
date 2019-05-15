const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {

        // Chech the stock whether exist in personal portfolio
        const record = state.stocks.find( element => element.id == stockId);

        // If the stock is exist in the portfolio
        if (record) {
            // Only update the quantity of this stock
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find( element => element.id == stockId);

        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
}

const actions = {
    sellStock ({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

// ????????????
const getters = {
    stockProtfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}