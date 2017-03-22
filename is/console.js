import isObject
	from './object'

import isFunction
	from './function'

export default function isConsole(that) {
	return isObject(that) && isFunction(that.log)
}
