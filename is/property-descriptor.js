import isObject
	from './object'

import isFunction
	from './function'

export default function isPropertyDescriptor(that) {
	if (! isObject(that)) return false
	for (let key in that) {
		switch (key) {
			case 'value': if (('get' in that) || ('set' in that)) break;continue
			case 'get': if (isFunction(that.get)) continue;break
			case 'set': if (isFunction(that.set)) continue;break
		}
		return false
	}
}
