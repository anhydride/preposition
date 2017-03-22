import isFunction
	from '../is/function'

import hasProperty
	from './property'

export default function hasFunction(k) {
	return hasProperty.call(this, k) && isFunction(this[k])
}
