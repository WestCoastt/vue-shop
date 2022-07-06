import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addItem(state, data) {
      state.cart.push(data);
    },
    removeItem(state, data) {
      const idx = state.cart.findIndex((item) => {
        return item.id == data;
      });
      state.cart.splice(idx, 1);
    },
    removeAll(state) {
      state.cart.splice(0, state.cart.length);
    },
    increment(state, data) {
      const idx = state.cart.findIndex((item) => {
        return item.id == data;
      });
      state.cart[idx].count++;
    },
    decrement(state, data) {
      const idx = state.cart.findIndex((item) => {
        return item.id == data;
      });
      state.cart[idx].count--;
    },
  },
});

export default store;
