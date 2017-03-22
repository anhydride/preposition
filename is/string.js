import classof
	from 'classof'

export default function isString(that) {
	return 'string' == typeof that || 'String' == classof(that)
}
