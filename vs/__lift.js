export default function __lift(is) {
	return function (x/**...**/) {
		const b = is.apply(this, arguments)
		if (! b) throw new TypeError(x)
		return true
	}
}
