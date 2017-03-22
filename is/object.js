import classof
	from 'classof'

export default function isObject(that) {
	return 'Object' == classof(that)
}
