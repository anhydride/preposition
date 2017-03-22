import classof
	from 'classof'

export default function isArray(that) {
	return 'Array' == classof(that)
}
