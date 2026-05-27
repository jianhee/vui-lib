//#region packages/utils/data-number.js
var e = (e = 0, t = 1e4) => Math.floor(Math.random() * (t - e + 1)) + e, t = (e) => typeof e == "number" ? !0 : typeof e == "string" ? !isNaN(e) : !1, n = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
	let t = Math.random() * 16 | 0;
	return (e === "x" ? t : t & 3 | 8).toString(16);
}), r = (e = 4) => {
	let t = "";
	for (let n = 0; n < e; n++) {
		let e = Math.floor(Math.random() * 62);
		t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[e];
	}
	return t;
}, i = (e) => {
	let t = e.length, n = e.replace(/\s/g, "").length, r = e.match(/[\u4E00-\u9FA5]|[\u9FA6-\u9fcb]/g) || [], i = e.match(/\b[a-zA-Z]+\b/g) || [];
	return {
		charCount: t,
		charCountWithoutSpace: n,
		wordCount: r.length + i.length
	};
};
function a(e) {
	return e ? (e = e.trim(), !e.startsWith("http://") && !e.startsWith("https://") && (e = `https://${e}`), !e.endsWith("/") && !e.includes("?") && !e.includes("#") && (e = `${e}/`), e) : "";
}
function o(e) {
	if (!e) return "0 B";
	let t = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB",
		"PB",
		"EB",
		"ZB",
		"YB"
	], n = 1024, r = 0, i = e;
	for (; i >= n && r < t.length - 1;) i /= n, r++;
	return `${i.toFixed(2)} ${t[r]}`;
}
//#endregion
export { r as a, a as i, o as n, t as o, n as r, e as s, i as t };
