'use strict';

module.exports = function curry (fn) {
	return function () {
		return fn.bind.apply(fn, [null].concat([].slice.call(arguments)));
	}
};
