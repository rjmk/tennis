'use strict';

module.exports = function curry (fn) {
	return function () {

        if (fn.length === arguments.length) {
            return fn.apply(null, arguments);
        }
		return fn.bind.apply(fn, [null].concat([].slice.call(arguments)));
	}
};
