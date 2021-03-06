export default {
  state: {
    count: 0,
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
  },
  getters: {
    count2x: (state) => {
      return 2 * state.count;
    },
  },
};
