import classof
	from 'classof'

export default function isFunction(that) {
	return 'function' == typeof that || 'Function' == classof(that)
}
