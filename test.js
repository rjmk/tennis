var test = require('tape');
var curry = require('./curry');
var compose = require('./compose');

// ---------- CURRY ----------
function sum (a, b) {
  return a + b;
}

function sumThree (a, b, c) {
  return a + b + c;
}

test('curry is a function', function (t) {

  t.equals(typeof curry, 'function');
  t.end();
});

test('curry returns a function when called on sum', function (t) {

  t.equals(typeof curry(sum), 'function');
  t.end();
});

test('curry(sum)(2) returns a function', function (t) {

  t.equals(typeof curry(sum)(2), 'function');
  t.end();
});

test('curried sum called on 2 and then on 3 returns 5', function (t) {

  t.equals(curry(sum)(2)(3), 5);
  t.end();
});

test('curried sum returns correct val when called in two stages on random nums', function (t) {

  var x = Math.random();
  var y = Math.random();
  t.equals(curry(sum)(x, y), x + y);
  t.end();
});

test('curried sumThree function  must be invoked at lest three times to get the result', function (t) {

  var x = Math.random();
  var y = Math.random();
  var z = Math.random();
  t.equals(curry(sumThree)(x)(y)(z), x + y + z);
  t.end();
});

// ---------- COMPOSE ----------

function id (x) { return x; }

function trace (tag, x) {

  console.log('tag');
  return x;
}

test('compose is a function', function (t) {

  t.equals(typeof compose, 'function');
  t.end();
});

test('compose should return a function when called with 2 functions', function (t) {

  t.equals(typeof compose(trace, id), 'function');
  t.end();
});
