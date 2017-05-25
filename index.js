/**
 * @param  {} 'DataStoreService'
 * @returns {Object}
 */

exports = module.exports = function createStore (reducers) {  
  const state = {};

  return {
    get: (key) => key ? state[key] : state,
    dispatch: ({ id, type, data }) => {
      state[type] = state[type] || [];
      const prevState = state[type].slice();
      const reducer = reducers[id];
      reducer(prevState, { type, data });
    }
  }
}