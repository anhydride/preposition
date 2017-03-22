import classof
	from 'classof'

export default function isNumber(that) {
	return ('number' == typeof that || 'Number' == classof(that)) && that === that
}
