var x = ({prefix: e = "theme", modes: j = ["light", "dark"]} = {}) => {
	var q, r = e, a = window.localStorage, l = j, o = new Set, c = a => {
		l = a, o.forEach(b => b(a))
	}, x = new Set, u = matchMedia("(prefers-color-scheme: dark)"), n = ({matches: a}) => {
		q = a ? "dark" : "light", x.forEach(a => a(q))
	};
	u.addEventListener ? u.addEventListener("change", n) : u.addListener(n), n(u);
	var m = {
		subscribe(a) {
			return a(q), x.add(a), () => x.delete(a)
		}
	}, z = a => a && l.includes(a) ? a : void 0, w = new Set, p = z(a.getItem(r)), A = (b, c = !0) => {
		b === p || (c && (void 0 === b ? a.removeItem(r) : a.setItem(r, b)), w.forEach(a => a(b)), p = b)
	};
	window.addEventListener("storage", a => a.key === r && A(a.newValue || void 0, !1));
	var f, B, C, D = {
		subscribe(a) {
			return a(p), w.add(a), () => w.delete(a)
		}, set: A, update(a) {
			A(a(p))
		}
	}, i = new Set, E = () => {
		var a = f || B;
		a !== C && (C = a, i.forEach(a => a(C)))
	};
	D.subscribe(a => {
		f = a, E()
	}), m.subscribe(a => {
		B = a, E()
	});
	var y, F = {
		subscribe(a) {
			return a(C), i.add(a), () => i.delete(a)
		}, set: D.set, update(a) {
			var b = l.indexOf(C);
			b = -1 === b ? 0 : b, D.set(a(C, l, b))
		}
	}, G = document.documentElement.classList;
	return F.subscribe(a => {
		y && G.remove(`${y}`), G.add(`${a}`), y = a
	}), G.add(e), {
		mode: F, modes: {
			subscribe(a) {
				return a(l), o.add(a), () => o.delete(a)
			}, set: c, update(a) {
				c(a(l))
			}
		}, modeOS: m, modeSaved: D
	}
};
window.__theme__ = x({modes: document.documentElement.dataset.theme?.split(" ")});
