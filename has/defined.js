import isDefined
	from '../is/defined'

import hasProperty
	from './property'

export default function hasDefined(k) {
	return hasProperty.call(this, k) && isDefined(this[k])
}
