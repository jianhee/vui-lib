//#region packages/composables/use-components.js
var e = (e) => {
	let t = {};
	Object.entries(e).forEach(([e, r]) => {
		Object.entries(r).forEach(([r, i]) => {
			let a = n(e, r);
			t[a] = i;
		});
	});
	function n(e, t) {
		return t === "default" ? e.split("/").pop().replace(/\.vue$/, "").replace(/-(\w)/g, (e, t) => t.toUpperCase()) : t;
	}
	return t;
}, t = (t, n, r = {}) => {
	let i = e(n), { includes: a = [], excludes: o = [] } = r;
	Object.entries(i).forEach(([e, n]) => {
		let r = a.length === 0 || a.includes(e), i = o.includes(e);
		r && !i && t.component(e, n);
	});
};
//#endregion
export { t as n, e as t };
