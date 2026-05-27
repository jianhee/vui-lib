import { a as e, r as t, s as n, t as r, u as i } from "./info-OALuZHSF.mjs";
import { o as a, r as o } from "./data-string-odsYn-HJ.mjs";
import { Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createVNode as p, normalizeClass as m, normalizeStyle as h, openBlock as g, ref as _, render as v, renderSlot as y, resolveDynamicComponent as b, toDisplayString as x, unref as S, useTemplateRef as C, vShow as w, watch as T, withCtx as E, withDirectives as D } from "vue";
import { useElementHover as O } from "@vueuse/core";
//#region packages/components/@common/index.js
var k = /* @__PURE__ */ i({
	completeCSSUnit: () => M,
	getFormattedIconProps: () => j,
	getFormattedText: () => A
}), A = (e, t, n = "") => t === !1 || t === null ? "" : t === !0 ? `${e}${n}` : typeof t == "function" ? t(e) : t, j = (e, t = {}) => {
	let n = t?.icon || t?.name || t?.component || e;
	return n ? {
		...t,
		icon: n
	} : null;
}, M = (e, t) => a(e) ? `${e}${t}` : e, N = {
	icon: {
		type: [String, Object],
		default: void 0
	},
	name: {
		type: String,
		default: void 0
	},
	component: {
		type: Object,
		default: void 0
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	spin: {
		type: Boolean,
		default: !1
	},
	cursor: {
		type: String,
		default: void 0
	},
	color: {
		type: String,
		default: void 0
	},
	twoToneColor: {
		type: String,
		default: void 0
	},
	size: {
		type: [String, Number],
		default: void 0
	},
	rotate: {
		type: [String, Number],
		default: void 0
	}
}, P = ({ props: e }) => ({
	rootClasses: c(() => ({
		"is-disabled": e.disabled,
		"is-spin": e.spin
	})),
	rootStyles: c(() => ({
		"--vui-icon-cursor": e.cursor,
		"--vui-icon-color": e.color,
		"--vui-icon-two-tone-color": e.twoToneColor,
		"--vui-icon-size": M(e.size, "px"),
		"--vui-icon-transform": e.rotate ? `rotate(${M(e.rotate, "deg")})` : null
	})),
	computedIconProps: c(() => {
		let t = typeof e.icon == "string";
		return {
			name: e.name || (t ? e.icon : null),
			component: e.component || (t ? null : e.icon)
		};
	})
}), F = { key: 2 }, I = ["href"], L = {
	__name: "icon",
	props: N,
	setup(e) {
		let { rootClasses: t, rootStyles: n, computedIconProps: r } = P({ props: e });
		return (e, i) => (g(), d("i", {
			class: m(["vui-icon", S(t)]),
			style: h(S(n))
		}, [e.$slots.default ? y(e.$slots, "default", { key: 0 }) : S(r).component ? (g(), l(b(S(r).component), { key: 1 })) : S(r).name ? (g(), d("svg", F, [f("use", { href: `#icon-${S(r).name}` }, null, 8, I)])) : u("", !0)], 6));
	}
}, R = /* @__PURE__ */ i({ VIcon: () => L }), z = ["closed"], B = {
	message: {
		type: String,
		default: void 0
	},
	type: {
		type: String,
		default: "info"
	},
	duration: {
		type: Number,
		default: void 0
	},
	visible: {
		type: Boolean,
		default: !0
	}
}, V = ({ toastElRef: i, props: a }) => {
	let o = c(() => `vui-toast--${a.type}`), s = {
		primary: r,
		success: e,
		warning: t,
		error: n,
		info: r
	}, l = c(() => s[a.type] || ""), u = _(a.visible), d = null, f = () => {
		u.value = !0, p();
	}, p = () => {
		a.duration && (d = setTimeout(() => {
			clearTimeout(d), u.value = !1;
		}, a.duration));
	};
	return T(O(i), (e) => {
		e ? clearTimeout(d) : p();
	}), {
		rootClasses: o,
		iconComponent: l,
		isVisible: u,
		open: f
	};
}, H = { class: "vui-toast-message" }, U = {
	__name: "toast",
	props: B,
	emits: z,
	setup(e, { expose: t, emit: n }) {
		let r = C("toastElRef"), i = e, a = n, { rootClasses: o, iconComponent: c, isVisible: d, open: p } = V({
			toastElRef: r,
			props: i
		});
		return t({ open: p }), (e, t) => (g(), l(s, {
			name: "vui-toast",
			onAfterLeave: t[0] ||= (e) => a("closed")
		}, {
			default: E(() => [D(f("div", {
				ref_key: "toastElRef",
				ref: r,
				class: m(["vui-toast", S(o)])
			}, [S(c) ? (g(), l(S(L), {
				key: 0,
				icon: S(c),
				class: "vui-toast-icon"
			}, null, 8, ["icon"])) : u("", !0), f("span", H, x(e.message), 1)], 2), [[w, S(d)]])]),
			_: 1
		}));
	}
}, W = [], G, K = async (e) => {
	G || (G = document.createElement("div"), G.className = "vui-toast-wrapper", document.body.appendChild(G));
	let t = o(), n = {
		type: "info",
		duration: 3e3
	}, r = typeof e == "string" ? { message: e } : e, i = p(U, {
		...n,
		...r,
		visible: !1,
		onClosed: () => q(t)
	}), a = document.createElement("div");
	v(i, a), G.appendChild(i.el), W.push({
		id: t,
		vnode: i,
		currentToastContainer: a
	}), i.component?.exposed?.open();
};
function q(e) {
	let t = W.findIndex((t) => t.id === e);
	if (t === -1) return;
	let { currentToastContainer: n } = W[t];
	v(null, n), W.splice(t, 1), W.length === 0 && (G.parentNode.removeChild(G), G = null);
}
var J = (e) => K(e), Y = (e) => (t) => K(typeof t == "string" ? {
	message: t,
	type: e
} : {
	...t,
	type: e
});
J.primary = Y("primary"), J.success = Y("success"), J.warning = Y("warning"), J.error = Y("error"), J.info = Y("info");
var X = (e) => {
	e.config.globalProperties.$toast = J;
}, Z = { install: X };
//#endregion
export { R as a, M as c, U as i, j as l, J as n, L as o, Z as r, k as s, X as t, A as u };
