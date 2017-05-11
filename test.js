const test  = require('tape');
const store = require('./');

test('it should create a store', (t) => {
  t.plan(1);
  var s = store();
  t.equals(typeof s, 'object');
});

test('it should have method on', (t) => {
  t.plan(2);
  var s = store();
  t.equals(s.hasOwnProperty('on'), true);
  t.equals(typeof s.on, 'function');
});

test('it should have method off', (t) => {
  t.plan(2);
  var s = store();
  t.equals(s.hasOwnProperty('off'), true);
  t.equals(typeof s.off, 'function');
});

test('it should have method emit', (t) => {
  t.plan(2);
  var s = store();
  t.equals(s.hasOwnProperty('emit'), true);
  t.equals(typeof s.emit, 'function');
});

test('it should have method get', (t) => {
  t.plan(2);
  var s = store();
  t.equals(s.hasOwnProperty('get'), true);
  t.equals(typeof s.get, 'function');
});

test('it should have method set', (t) => {
  t.plan(2);
  var s = store();
  t.equals(s.hasOwnProperty('set'), true);
  t.equals(typeof s.set, 'function');
});

test("it should return latest value if given get(key)", (t)=> {
  t.plan(1);
  var s = store();
  s.set('v', 1);
  t.equals(s.get('v'), 1);
});

test("it should return latest value if given get(key)", (t)=> {
  t.plan(1);
  var s = store();
  s.set('v', 1);
  s.set('v', 2);
  t.equals(s.get('v'), 2);
});

test("it should return latest value if given get(key)", (t)=> {
  t.plan(1);
  var s = store();
  s.set('v', 1);
  s.set('v', 2);
  t.equals(JSON.stringify(s.getHistory()), JSON.stringify({ v: [1, 2] }));
});

test("it should return latest value if given get(key)", (t)=> {
  t.plan(1);
  var s = store();
  s.set('v', 1);
  t.equals(JSON.stringify(s.getState('v')), JSON.stringify({ v: 1 }));
});