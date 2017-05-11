/**
 * @param  {} 'DataStoreService'
 * @returns {Object}
 */

// based on dt-utils $.events https://github.com/denistsoi/dt-utils/blob/master/index.js#L178
const emitter = {
  off: function(name, callback, ctx){
    this._listeners = this._listeners || {};
    if (name && callback && ctx) {
      var listeners = this._listeners[name];
      if (listeners){
        this._listeners[name] = $.filter(listeners, function(listener){
          return listener.callback !== callback || listener.ctx !== ctx;
        });
      }
    } else if (name && callback) {
      var listeners = this._listeners[name];
      if (listeners){
        this._listeners[name] = $.filter(listeners, function(listener){
          return listener.callback !== callback;
        });
      }
    } else if (name) {
      this._listeners[name] = [];
    } else {
      this._listeners = {};
    }
  },
  on: function(name, callback, ctx) {
  this._listeners = this._listeners || {};
    this._listeners[name] = this._listeners[name] || [];
    this._listeners[name].push({callback: callback, ctx: ctx});
  },
  emit: function() {
    var args  = Array.prototype.slice.call(arguments);
    var name = args.shift();
    this._listeners = this._listeners || {};
    var listeners = this._listeners[name];
    if (listeners) {
      for(var key in listeners) {
        listeners[key].callback.apply(listeners[key].ctx || this, args);
      }
    }
  }
};

function DataStoreService() {
  var state = {};

  function _copyState(copiedState, originalState) {
    for (var key in originalState) {
      if (state.hasOwnProperty(key)) {
        copiedState[key] = originalState[key].slice(-1).unshift()
      }
    }
  }
  // setter method
  function set(key, value) {
    if (!state.hasOwnProperty(key)) {
      state[key] = [];
    }
    state[key].push(value);
  }

  function getHistory() {
    var copiedState = {};
    for (var key in state) {
      if (state.hasOwnProperty(key)) {
        copiedState[key] = state[key].slice();
      }
    }
    return copiedState;
  };

  function getState() {
    var latestState = {};

    _copyState(latestState, state);

    return latestState;
  };

  // get method
  function get(key) {
    if (!key) { 
      return state;
    }
    return state[key].slice(-1).shift();
  }

  return {
    off:  emitter.off,
    on:   emitter.on,
    emit: emitter.emit,
    get:  get,
    set:  set,
    getHistory: getHistory,
    getState: getState
  };
}

exports = module.exports = DataStoreService;