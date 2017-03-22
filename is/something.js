import isNothing
	from './nothing'

export default function isSomething(that) {
	return ! isNothing(that)
}
