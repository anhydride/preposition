import isObject
	from './object'

export default function isObjectInstance(w) {
	return isObject(w) && Object === w.constructor
}
