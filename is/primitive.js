export default function isPrimitive(w) {
	switch (typeof w) {
		case 'object': if (w === null) break
		case 'function': return false
		default: return true
	}
}
