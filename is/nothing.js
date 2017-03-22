export default function isNothing(that) {
	if (null == that) return true
	switch (typeof that) {
		case 'object': case 'string': return 0 === that.length
		default: return false
	}
}
