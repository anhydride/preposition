import isArray
	from '../is/array'

import hasProperty
	from './property'

export default function hasArray(k) {
	return hasProperty.call(this, k) && isArray(this[k])
}
