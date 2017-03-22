import isNumber
	from './number'

export default function isInteger(that) {
	return isNumber(that) && that === Math.round(that)
}
