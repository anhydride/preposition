import isString
	from '../is/string'

import hasProperty
	from './property'

export default function hasString(k) {
	return hasProperty.call(this, k) && isString(this[k])
}
