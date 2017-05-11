# dt-store

A place to store objects. (a data store)

TODO:
- see `tasks.todo`

Examples:

    component.js
    
    var Store = require('dt-store');
    
    Store.on('named event', (data)=> { // some function event
      // do something with the data
    }) 

    somewhere-else.js
    
    var Store = require('dt-store');
    
    Store.emit('named event', data);   // some data, can come from some async action

### example ng pre 1.5  
    
    see `examples/ng-1.5.md`  

### notes

    // react
    // var store = createStore(reducers(actionTypes))
    // store.subscribe()
    // store.dispatch(action)

    // rxjs
    // observer | observerables
    // subscribe(observer, onNext, onErr, onComplete);


### acknowledgements (inspired by)

Rusintez / Vladimir Popov  
Yoshuawuyts / Yoshua Wuyts  

### Author
Denis Tsoi <denistsoi@gmail.com>      