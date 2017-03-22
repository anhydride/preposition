import isObject
	from './object'

import isFunction
	from './function'

export default function isPromise(that) {
	return isObject(that) && isFunction(that.then)
}
