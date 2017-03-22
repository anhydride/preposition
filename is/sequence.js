export default function isSequence(that) {
	return 'object' === typeof that && (
		null === that ? false : 'number' === typeof that.length
	)
}
