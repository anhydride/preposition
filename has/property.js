export default function hasProperty(k) {
	return 'object' == typeof this && null !== this && k in this
}
