import classof
	from 'classof'

export default function isBoolean(that) {
	return true === that || false === that || 'Boolean' == classof(that)
}
