import { n as e, r as t, t as n } from "./toast-DXA6f6N_.mjs";
//#region packages/plugins/xhr.js
var r = {
	defaults: {
		baseURL: "",
		timeout: 1e4,
		headers: { "Content-Type": "application/json;charset=UTF-8" }
	},
	request(e = {}) {
		let t = { ...this.defaults };
		Object.keys(e).forEach((n) => {
			n === "headers" ? t.headers = {
				...t.headers,
				...e.headers
			} : t[n] = e[n];
		});
		let { method: n, baseURL: r, url: i, params: a, data: o, timeout: s, headers: c } = t, l = r ? `${r}${i}` : i;
		if (a) {
			let e = new URLSearchParams();
			Object.keys(a).forEach((t) => {
				e.append(t, a[t]);
			});
			let t = e.toString(), n = l.includes("?") ? "&" : "?";
			l = `${l}${n}${t}`;
		}
		return new Promise((e, r) => {
			let i = new XMLHttpRequest();
			i.open(n.toUpperCase(), l, !0), i.timeout = s, Object.keys(c).forEach((e) => {
				i.setRequestHeader(e, c[e]);
			}), i.onload = () => {
				let n;
				try {
					n = i.responseText ? JSON.parse(i.responseText) : null;
				} catch {
					n = i.responseText;
				}
				let a = {
					data: n,
					status: i.status,
					statusText: i.statusText,
					headers: i.getAllResponseHeaders(),
					config: t
				};
				i.readyState === 4 && i.status >= 200 && i.status < 300 ? e(a) : r(Error(`Request failed with status code ${i.status}`, { cause: a }));
			}, i.onerror = () => {
				r(Error("Network Error", { cause: { config: t } }));
			}, i.ontimeout = () => {
				r(Error(`Timeout of ${s}ms exceeded`, { cause: { config: t } }));
			}, [
				"post",
				"put",
				"patch",
				"patch"
			].includes(n) && o ? o instanceof FormData ? i.send(o) : i.send(JSON.stringify(o)) : i.send();
		});
	},
	get(e, t = {}) {
		return this.request({
			...t,
			method: "get",
			url: e
		});
	},
	post(e, t, n = {}) {
		return this.request({
			...n,
			method: "post",
			url: e,
			data: t
		});
	}
};
//#endregion
export { n as setupToast, e as toast, t as toastPlugin, r as xhr };
