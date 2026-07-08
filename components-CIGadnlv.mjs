import { l as e, s as t, u as n } from "./info-OALuZHSF.mjs";
import { r } from "./data-string-odsYn-HJ.mjs";
import { a as i, c as a, i as o, l as s, o as c, s as l, t as u, u as d } from "./toast-DXA6f6N_.mjs";
import { l as f, o as p } from "./utils-Cf6rSCt8.mjs";
import { _ as m, a as h, d as g, h as _, l as v, p as y, r as b, s as ee, t as te, y as x } from "./caret-right-MRGOidtG.mjs";
import { n as ne } from "./use-components-DaYeb9Vo.mjs";
import { Comment as re, Fragment as S, Teleport as ie, Text as ae, Transition as oe, cloneVNode as se, computed as C, createBlock as w, createCommentVNode as T, createElementBlock as E, createElementVNode as D, createSlots as ce, createTextVNode as O, createVNode as k, defineComponent as le, h as A, inject as j, mergeModels as M, mergeProps as N, nextTick as ue, normalizeClass as P, normalizeProps as F, normalizeStyle as I, onUnmounted as de, openBlock as L, provide as R, reactive as fe, ref as z, renderList as B, renderSlot as V, resolveComponent as H, resolveDynamicComponent as pe, toDisplayString as U, toRef as me, unref as W, useModel as G, useSlots as he, useTemplateRef as K, vModelDynamic as ge, vModelText as _e, vShow as ve, watch as q, watchEffect as ye, withCtx as J, withDirectives as Y, withKeys as be, withModifiers as X } from "vue";
import { onClickOutside as xe, useElementBounding as Se, useElementHover as Ce, useEventListener as Z, useFocus as we, useImage as Te, useIntersectionObserver as Ee, useStorage as De, useVirtualList as Oe, useWindowSize as ke } from "@vueuse/core";
import { createPopper as Ae } from "@popperjs/core";
//#region packages/components/button/composables/index.js
var je = {
	type: {
		type: String,
		default: "default"
	},
	circle: {
		type: Boolean,
		default: !1
	},
	loading: {
		type: Boolean,
		default: !1
	},
	icon: c.props.icon,
	iconProps: c.props,
	size: {
		type: String,
		default: "medium"
	},
	inline: {
		type: Boolean,
		default: !0
	},
	block: {
		type: Boolean,
		default: !1
	},
	href: {
		type: String,
		default: void 0
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	radius: {
		type: [String, Number],
		default: void 0
	}
}, Me = ({ props: e }) => ({
	rootTag: C(() => e.href ? "a" : "button"),
	rootAttrs: C(() => {
		let t = e.type === "link";
		return {
			type: e.href ? null : "button",
			disabled: t ? null : e.disabled || e.loading,
			href: e.href,
			class: {
				[`vui-btn--${e.type}`]: !!e.type,
				[`vui-btn--${e.size}`]: !t,
				"vui-btn--block": e.block || !e.inline,
				"is-circle": e.circle,
				"is-disabled": e.disabled || e.loading
			},
			style: { "--vui-btn-radius": a(e.radius, "px") }
		};
	})
}), Ne = {
	__name: "button",
	props: je,
	setup(e) {
		let t = e, { rootTag: n, rootAttrs: r } = Me({ props: t }), i = C(() => s(t.icon, t.iconProps));
		return (e, t) => (L(), w(pe(W(n)), N({ class: "vui-btn" }, W(r)), {
			default: J(() => [
				e.loading ? (L(), w(W(c), {
					key: 0,
					icon: x,
					spin: !0
				})) : T("", !0),
				i.value ? (L(), w(W(c), F(N({ key: 1 }, i.value)), null, 16)) : T("", !0),
				V(e.$slots, "default")
			]),
			_: 3
		}, 16));
	}
}, Pe = /* @__PURE__ */ n({ VButton: () => Ne }), Fe = ["change"], Ie = { checked: {
	type: Boolean,
	default: !1
} }, Le = {
	label: {
		type: [Number, String],
		default: void 0
	},
	type: {
		type: String,
		default: void 0
	},
	inline: {
		type: Boolean,
		default: !0
	},
	block: {
		type: Boolean,
		default: !1
	},
	formattedOption: {
		type: Object,
		default: void 0
	}
}, Re = {
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	}
}, ze = (e) => {
	let t = j("vuiFormRoot", null), n = j("vuiCheckboxType", "checkbox"), r = j("vuiCheckboxGroup", null), i = n === "checkbox", a = C(() => e.props.type === "button" || r?.props.optionType === "button"), o = C(() => e.props.disabled || r?.props?.disabled || t?.props?.disabled), s = C(() => e.props.readonly || r?.props?.readonly || t?.props?.readonly), c = C(() => e.props.label || e.props.formattedOption?.label || ""), l = C(() => e.props.formattedOption.value), u = C(() => {
		if (!r) return e.modelChecked.value;
		let t = r.modelValue.value;
		return i ? t?.includes(l.value) : t === l.value;
	});
	function d(e) {
		if (!r) {
			f(e);
			return;
		}
		i ? p() : m();
	}
	function f(t) {
		let n = !u.value;
		e.modelChecked.value = n, e.emits("change", {
			event: t,
			checked: n
		});
	}
	function p() {
		let e = r.modelValue.value || [], t = e.findIndex((e) => e === l.value);
		t === -1 ? e.push(l.value) : e.splice(t, 1), h(e);
	}
	function m() {
		let e = l.value;
		h(e);
	}
	function h(t) {
		r.modelValue.value = t, r.emits("change", {
			option: e.props.formattedOption.__vuiCheckboxOptionRawData__,
			value: l.value,
			checkedValue: t
		});
	}
	let g = C(() => a.value ? !1 : r ? r.props.optionBlock && !r.props.optionInline : e.props.block || !e.props.inline);
	return {
		isBtn: a,
		isDisabled: o,
		isReadonly: s,
		isChecked: u,
		optionLabel: c,
		rootClasses: C(() => [a.value ? `vui-${n}-btn` : `vui-${n}`, {
			[`vui-${n}--block`]: g.value,
			"is-checked": u.value,
			"is-disabled": o.value
		}]),
		onCheckedChange: d
	};
}, Be = [
	"type",
	"checked",
	"disabled"
], Ve = {
	__name: "checkbox",
	props: /* @__PURE__ */ M({
		...Le,
		...Re
	}, {
		checked: Ie.checked,
		checkedModifiers: {}
	}),
	emits: /* @__PURE__ */ M(Fe, ["update:checked"]),
	setup(e, { emit: t }) {
		let n = j("vuiCheckboxType", "checkbox"), { isBtn: r, isDisabled: i, isReadonly: a, isChecked: o, optionLabel: s, rootClasses: c, onCheckedChange: l } = ze({
			modelChecked: G(e, "checked", Ie.checked),
			props: e,
			emits: t
		});
		return (e, t) => (L(), E("label", { class: P(W(c)) }, [D("input", {
			class: P(`vui-${W(n)}-input`),
			type: W(n),
			checked: W(o),
			disabled: W(i) || W(a),
			onChange: t[0] ||= (...e) => W(l) && W(l)(...e)
		}, null, 42, Be), W(r) ? (L(), E(S, { key: 0 }, [e.$slots?.default?.()[0].children.length ? V(e.$slots, "default", { key: 0 }) : (L(), E(S, { key: 1 }, [O(U(W(s)), 1)], 64))], 64)) : (L(), E(S, { key: 1 }, [D("div", { class: P(`vui-${W(n)}-icon`) }, null, 2), e.$slots?.default?.()[0].children.length ? (L(), E("div", {
			key: 0,
			class: P(`vui-${W(n)}-label`)
		}, [V(e.$slots, "default")], 2)) : W(s) ? (L(), E("div", {
			key: 1,
			class: P(`vui-${W(n)}-label`)
		}, U(W(s)), 3)) : T("", !0)], 64))], 2));
	}
}, He = ["change"], Ue = { value: {
	type: [
		Array,
		Number,
		String
	],
	default: void 0
} }, We = {
	options: {
		type: Array,
		required: !0
	},
	optionType: {
		type: String,
		default: void 0
	},
	optionInline: {
		type: Boolean,
		default: !1
	},
	optionBlock: {
		type: Boolean,
		default: !0
	}
}, Ge = ({ props: e }) => ({ formattedOptions: C(() => e.options.map((e) => typeof e == "object" ? {
	__vuiCheckboxOptionRawData__: e,
	...e,
	label: e.label || e.value
} : {
	__vuiCheckboxOptionRawData__: e,
	label: e,
	value: e
})) }), Ke = {
	__name: "checkbox-group",
	props: /* @__PURE__ */ M({
		...We,
		...Re
	}, {
		value: Ue.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ M(He, ["update:value"]),
	setup(e, { emit: t }) {
		let n = j("vuiCheckboxType", "checkbox"), r = G(e, "value", Ue.value), i = e, a = t, { formattedOptions: o } = Ge({ props: i });
		return R("vuiCheckboxGroup", {
			modelValue: r,
			props: i,
			emits: a
		}), (e, t) => {
			let r = H("VCheckbox");
			return L(), E("div", { class: P(`vui-${W(n)}-group`) }, [(L(!0), E(S, null, B(W(o), (t, n) => (L(), w(r, {
				key: n,
				"formatted-option": t,
				disabled: t.disabled
			}, {
				default: J(() => [V(e.$slots, "default", { option: t.__vuiCheckboxOptionRawData__ })]),
				_: 2
			}, 1032, ["formatted-option", "disabled"]))), 128))], 2);
		};
	}
}, qe = /* @__PURE__ */ n({
	VCheckbox: () => Ve,
	VCheckboxGroup: () => Ke
}), Je = [
	"open",
	"opened",
	"close",
	"closed"
], Ye = { visible: {
	type: Boolean,
	default: !1
} }, Xe = {
	placement: {
		type: String,
		default: "right"
	},
	title: {
		type: String,
		default: void 0
	},
	showClose: {
		type: Boolean,
		default: !0
	},
	showCloseBtn: {
		type: Boolean,
		default: !0
	},
	closeOnClickModal: {
		type: Boolean,
		default: !0
	},
	closeOnPressEscape: {
		type: Boolean,
		default: !0
	},
	renderType: {
		type: String,
		default: "v-if"
	},
	dialogClass: {
		type: String,
		default: void 0
	},
	drawerClass: {
		type: String,
		default: void 0
	},
	headerClass: {
		type: String,
		default: void 0
	},
	bodyClass: {
		type: String,
		default: void 0
	},
	footerClass: {
		type: String,
		default: void 0
	},
	width: {
		type: [String, Number],
		default: void 0
	}
}, Ze = ({ dialogType: e, modelVisible: t, props: n, emits: r }) => {
	let i = e === "dialog", o = C(() => i ? [n.dialogClass] : [n.drawerClass, `vui-drawer--${n.placement}`]), s = C(() => {
		let t = a(n.width, "px");
		return { [`--vui-${e}-width`]: t };
	}), c = C(() => n.showCloseBtn && n.showClose);
	function l() {
		n.closeOnClickModal && u();
	}
	Z("keydown", (e) => {
		n.closeOnPressEscape && t.value && e.key === "Escape" && u();
	});
	function u() {
		t.value = !1;
	}
	return q(t, (e) => {
		r(e ? "open" : "close");
	}), {
		dialogClasses: o,
		dialogStyles: s,
		isShowCloseBtn: c,
		onOverlayClick: l,
		closeDialog: u
	};
}, Qe = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "dialog",
	props: /* @__PURE__ */ M(Xe, {
		visible: Ye.visible,
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ M(Je, ["update:visible"]),
	setup(e, { emit: t }) {
		let n = j("vuiDialogType", "dialog"), r = G(e, "visible", Ye.visible), i = e, a = t, { dialogClasses: o, dialogStyles: s, isShowCloseBtn: l, onOverlayClick: u, closeDialog: d } = Ze({
			dialogType: n,
			modelVisible: r,
			props: i,
			emits: a
		});
		return (e, t) => {
			let i = H("VOverlay");
			return L(), w(ie, { to: "body" }, [k(oe, {
				name: `vui-${W(n)}`,
				onAfterEnter: t[0] ||= (e) => a("opened"),
				onAfterLeave: t[1] ||= (e) => a("closed")
			}, {
				default: J(() => [r.value || e.renderType === "v-show" ? Y((L(), w(i, {
					key: 0,
					class: P(`vui-${W(n)}-overlay`),
					onClick: X(W(u), ["self"])
				}, {
					default: J(() => [D("div", N(e.$attrs, {
						class: [`vui-${W(n)}`, W(o)],
						style: W(s)
					}), [
						W(l) ? (L(), w(W(c), {
							key: 0,
							class: P(`vui-${W(n)}-close`),
							icon: m,
							onClick: W(d)
						}, null, 8, ["class", "onClick"])) : T("", !0),
						e.$slots.header || e.title ? (L(), E("div", {
							key: 1,
							class: P([`vui-${W(n)}-header`, e.headerClass])
						}, [e.$slots.header ? V(e.$slots, "header", { key: 0 }) : e.title ? (L(), E("span", {
							key: 1,
							class: P(`vui-${W(n)}-title`)
						}, U(e.title), 3)) : T("", !0)], 2)) : T("", !0),
						e.$slots.default ? (L(), E("div", {
							key: 2,
							class: P([`vui-${W(n)}-body`, e.bodyClass])
						}, [V(e.$slots, "default")], 2)) : T("", !0),
						e.$slots.footer ? (L(), E("div", {
							key: 3,
							class: P([`vui-${W(n)}-footer`, e.footerClass])
						}, [V(e.$slots, "footer")], 2)) : T("", !0)
					], 16)]),
					_: 3
				}, 8, ["class", "onClick"])), [[ve, r.value]]) : T("", !0)]),
				_: 3
			}, 8, ["name"])]);
		};
	}
}), $e = /* @__PURE__ */ n({ VDialog: () => Qe }), Q = {
	type: Number,
	default: void 0
}, et = {
	enabled: {
		type: Boolean,
		default: !0
	},
	movable: {
		type: Boolean,
		default: !1
	},
	moveHandle: {
		type: [Object],
		default: void 0
	},
	moveBoundary: {
		type: String,
		default: "mouse"
	},
	resizable: {
		type: Boolean,
		default: !1
	},
	resizeHandles: {
		type: Array,
		default: () => [
			"left",
			"right",
			"top",
			"bottom"
		]
	},
	minWidth: {
		type: Number,
		default: 0
	},
	minHeight: {
		type: Number,
		default: 0
	}
}, tt = ({ boxElRef: e, dragFlagRef: t, props: n, modelLeft: r, modelTop: i }) => {
	let a = C(() => n.movable && n.enabled), { width: o, height: s } = ke(), c = {
		x: 0,
		y: 0,
		minX: 0,
		minY: 0,
		maxX: 0,
		maxY: 0
	}, l = {
		x: 0,
		y: 0
	}, u = null, d = null;
	Z(C(() => n.moveHandle || e.value), "mousedown", (r) => {
		if (!a.value || t.value) return;
		t.value = "move";
		let i = n.moveBoundary === "box", m = e.value.getBoundingClientRect();
		c = {
			x: r.clientX,
			y: r.clientY,
			minX: i ? r.clientX - m.left : 0,
			minY: i ? r.clientY - m.top : 0,
			maxX: i ? o.value - (m.right - r.clientX) : o.value,
			maxY: i ? s.value - (m.bottom - r.clientY) : s.value
		}, l = {
			x: m.left,
			y: m.top
		}, u = Z("mousemove", f), d = Z("mouseup", p);
	});
	function f(e) {
		if (t.value !== "move") return;
		let n = {
			x: Math.max(c.minX, Math.min(e.clientX, c.maxX)),
			y: Math.max(c.minY, Math.min(e.clientY, c.maxY))
		}, a = n.x - c.x, o = n.y - c.y;
		r.value = l.x + a, i.value = l.y + o;
	}
	function p() {
		t.value === "move" && (t.value = null, u(), d());
	}
	return {
		moveClasses: C(() => ({ "is-movable": a.value })),
		moveStyles: C(() => n.enabled ? {
			cursor: n.movable && !n.moveHandle ? "move" : null,
			left: `${r.value}px`,
			top: `${i.value}px`
		} : null)
	};
}, nt = ({ boxElRef: e, dragFlagRef: t, props: n, modelLeft: r, modelTop: i, modelWidth: a, modelHeight: o }) => {
	let s = C(() => n.resizable && n.enabled), c = z(null), l = {
		x: 0,
		y: 0
	}, u = {
		width: 0,
		height: 0
	}, d = !1, f = null, p = null;
	function m(n, r) {
		if (!s.value || t.value) return;
		t.value = "resize", c.value = r;
		let { offsetWidth: i, offsetHeight: a } = e.value, { position: o } = window.getComputedStyle(e.value);
		l = {
			x: n.clientX,
			y: n.clientY
		}, u = {
			width: i,
			height: a
		}, d = o === "fixed", f = Z("mousemove", h), p = Z("mouseup", g);
	}
	function h(e) {
		if (t.value !== "resize") return;
		let s = ["right", "bottom"].includes(c.value) ? 2 : 0;
		if (["left", "right"].includes(c.value)) {
			let t = document.documentElement.clientWidth - s, i = Math.max(0, Math.min(e.clientX, t)), o = i - l.x, f = c.value === "left", p = f ? u.width - o : u.width + o;
			a.value = Math.max(p, n.minWidth), d && f && p >= n.minWidth && (r.value = i);
			return;
		}
		let f = document.documentElement.clientHeight - s, p = Math.max(0, Math.min(e.clientY, f)), m = p - l.y, h = c.value === "top", g = h ? u.height - m : u.height + m;
		o.value = Math.max(g, n.minHeight), d && h && g >= n.minHeight && (i.value = p);
	}
	function g() {
		t.value === "resize" && (t.value = null, c.value = null, f(), p());
	}
	return {
		isResizable: s,
		resizeClasses: C(() => ({ "is-resizable": s.value })),
		resizeStyles: C(() => n.enabled ? {
			left: `${r.value}px`,
			top: `${i.value}px`,
			width: `${a.value}px`,
			height: `${o.value}px`
		} : null),
		activeHandleName: c,
		onResizeStart: m
	};
}, rt = ["onMousedown"], it = {
	__name: "dragbox",
	props: /* @__PURE__ */ M(et, {
		left: Q,
		leftModifiers: {},
		top: Q,
		topModifiers: {},
		width: Q,
		widthModifiers: {},
		height: Q,
		heightModifiers: {}
	}),
	emits: [
		"update:left",
		"update:top",
		"update:width",
		"update:height"
	],
	setup(e) {
		let t = K("boxElRef"), n = e, r = G(e, "left", Q), i = G(e, "top", Q), a = G(e, "width", Q), o = G(e, "height", Q), s = z(null), { moveClasses: c, moveStyles: l } = tt({
			boxElRef: t,
			dragFlagRef: s,
			props: n,
			modelLeft: r,
			modelTop: i
		}), { isResizable: u, resizeClasses: d, resizeStyles: f, activeHandleName: p, onResizeStart: m } = nt({
			boxElRef: t,
			dragFlagRef: s,
			props: n,
			modelLeft: r,
			modelTop: i,
			modelWidth: a,
			modelHeight: o
		});
		return (e, n) => (L(), E("div", {
			ref_key: "boxElRef",
			ref: t,
			class: P(["vui-dragbox", {
				...W(c),
				...W(d),
				"is-dragging": !!s.value
			}]),
			style: I({
				...W(l),
				...W(f)
			})
		}, [V(e.$slots, "default"), W(u) ? (L(!0), E(S, { key: 0 }, B(e.resizeHandles, (e) => (L(), E("div", {
			key: e,
			class: P([
				"vui-dragbox-handle",
				`vui-dragbox-handle-${e}`,
				{ "is-active": e === W(p) }
			]),
			onMousedown: X((t) => W(m)(t, e), [
				"left",
				"prevent",
				"stop"
			])
		}, null, 42, rt))), 128)) : T("", !0)], 6));
	}
}, at = /* @__PURE__ */ n({ VDragbox: () => it }), ot = { setup(e, { slots: t }) {
	return R("vuiDialogType", "drawer"), () => A(Qe, null, t);
} }, st = /* @__PURE__ */ n({ VDrawer: () => ot }), ct = ["click", "select"], lt = { selectedKey: {
	type: [String, Number],
	default: void 0
} }, ut = {
	items: {
		type: Array,
		default: void 0
	},
	options: {
		type: Array,
		default: void 0
	},
	loading: {
		type: Boolean,
		default: !1
	},
	showEmpty: {
		type: Boolean,
		default: !1
	},
	selectable: {
		type: Boolean,
		default: !1
	},
	closeOnClickItem: {
		type: Boolean,
		default: !0
	},
	placement: {
		type: String,
		default: "bottom"
	}
}, dt = ({ props: e }) => ({ formattedItems: C(() => (e.options || e.items || []).map((e) => typeof e == "object" ? {
	__vuiDropdownItemRawData__: e,
	...e,
	label: e.label || e.title
} : {
	__vuiDropdownItemRawData__: e,
	label: e
})) }), ft = ({ formattedItem: e }) => {
	let t = j("vuiDropdownRoot", null), n = C(() => t.props.selectable ? e.key === t.modelSelectedKey.value : !1);
	return {
		formattedItem: e,
		isSelected: n,
		itemClasses: C(() => [{ "is-active": n.value }, e.className]),
		onItemClick: () => {
			t.props.closeOnClickItem && t.close();
			let n = e.key, r = {
				item: e.__vuiDropdownItemRawData__,
				key: n
			};
			t.emits("click", r), t.props.selectable && n !== t.modelSelectedKey.value && (t.modelSelectedKey.value = n, t.emits("select", {
				...r,
				selectedKey: n
			}));
		}
	};
}, pt = () => {
	let e = null, t = null;
	function n(n) {
		let r = n?.referenceElement === t?.referenceElement;
		e && r ? e.update() : (t = n, i());
	}
	function r() {
		a(!1), e?.destroy(), e = null;
	}
	function i() {
		r(), e = Ae(t.referenceElement, t.contentElement, {
			placement: t.placement,
			strategy: "fixed",
			modifiers: [
				{
					name: "offset",
					options: { offset: [0, 8] }
				},
				{
					name: "preventOverflow",
					options: { padding: 8 }
				},
				{
					name: "arrow",
					options: { element: t.arrowElement }
				}
			]
		}), a(!0);
	}
	function a(t) {
		e?.setOptions((e) => ({
			...e,
			modifiers: [...e.modifiers, {
				name: "eventListeners",
				enabled: t
			}]
		}));
	}
	return {
		onOpen: n,
		onClose: r
	};
}, mt = [
	"open",
	"opened",
	"close",
	"closed"
], ht = { visible: {
	type: Boolean,
	default: !1
} }, gt = {
	content: {
		type: [String, Number],
		default: void 0
	},
	triggerElement: {
		type: Object,
		default: void 0
	},
	trigger: {
		type: String,
		default: "hover"
	},
	ignoreElement: {
		type: Object,
		default: void 0
	},
	placement: {
		type: String,
		default: "top"
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	popoverClass: {
		type: String,
		default: void 0
	},
	width: {
		type: [String, Number],
		default: void 0
	},
	maxHeight: {
		type: [String, Number],
		default: void 0
	}
}, _t = ({ triggerRef: e, contentElRef: t, arrowElRef: n, modelVisible: r, props: i, emits: o }) => {
	let s = C(() => i.triggerElement || e.value), c = C(() => ({
		"--vui-popover-width": a(i.width, "px"),
		"--vui-popover-max-height": a(i.maxHeight, "px")
	})), l = null, u = null, d = pt();
	Z(s, "mouseenter", f), Z(s, "mouseleave", f), Z(t, "mouseenter", f), Z(t, "mouseleave", f);
	function f(e) {
		i.trigger === "hover" && h({
			source: "hover",
			newState: e.type === "mouseenter",
			refEl: s.value,
			delay: 150
		});
	}
	Z(s, "click", () => {
		i.trigger === "click" ? h({
			source: "click",
			newState: !r.value,
			refEl: s.value
		}) : i.trigger === "contextmenu" && r.value && h({
			source: "click",
			newState: !1
		});
	}), Z(s, "contextmenu", (e) => {
		i.trigger === "contextmenu" && (e.preventDefault(), h({
			source: "contextmenu",
			newState: !r.value,
			refEl: s.value
		}));
	}), xe(t, () => {
		i.trigger !== "manual" && r.value && h({
			source: "clickOutside",
			newState: !1,
			delay: 10
		});
	}, { ignore: [s, me(i, "ignoreElement")] });
	function p(e = {}) {
		let { el: t, event: n, toggle: i = !1 } = e;
		if (r.value && i) {
			m();
			return;
		}
		let a;
		a = t || (n ? { getBoundingClientRect: () => ({
			width: 0,
			height: 0,
			top: n.clientY,
			right: n.clientX,
			bottom: n.clientY,
			left: n.clientX
		}) } : s.value), h({
			source: "method",
			newState: !0,
			refEl: a
		});
	}
	function m() {
		h({
			source: "method",
			newState: !1
		});
	}
	q(r, (e) => {
		(!u || u === "prop") && h({
			source: "prop",
			newState: e,
			refEl: s.value
		});
	}, { immediate: !0 });
	function h(e) {
		if (i.disabled) return;
		let { source: t, newState: n, refEl: r, delay: a = 0 } = e;
		clearTimeout(l), l = setTimeout(() => {
			u = t, n ? g(r) : _();
		}, a);
	}
	async function g(e) {
		await ue();
		let a = W(e), s = a?.$el || a;
		s && (r.value || (r.value = !0, o("open")), await ue(), u = null, d.onOpen({
			referenceElement: s,
			contentElement: t.value,
			arrowElement: n.value,
			placement: i.placement
		}));
	}
	async function _() {
		r.value && (r.value = !1, o("close")), await ue(), u = null;
	}
	function v() {
		d.onClose(), o("closed");
	}
	return de(() => _()), {
		popoverStyles: c,
		openByMethod: p,
		closeByMethod: m,
		onAfterLeave: v
	};
}, vt = le({ setup(e, { slots: t, attrs: n }) {
	return () => {
		let e = t.default?.(n);
		if (!e || e.length > 1) return null;
		let r = yt(e);
		return r ? se(r, n) : null;
	};
} });
function yt(e) {
	if (!e) return null;
	let t = e;
	for (let e of t) {
		if (typeof e == "object") switch (e.type) {
			case re: continue;
			case ae:
			case "svg": return bt(e);
			case S: return yt(e.children);
			default: return e;
		}
		return bt(e);
	}
	return null;
}
function bt(e) {
	return `<span>${e}</span>`;
}
//#endregion
//#region packages/components/popover/popover.vue
var xt = { class: "vui-popover-content" }, St = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "popover",
	props: /* @__PURE__ */ M(gt, {
		visible: ht.visible,
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ M(mt, ["update:visible"]),
	setup(e, { expose: t, emit: n }) {
		let r = K("triggerRef"), i = K("contentElRef"), a = K("arrowElRef"), o = G(e, "visible", ht.visible), s = e, c = n, { popoverStyles: l, openByMethod: u, closeByMethod: d, onAfterLeave: f } = _t({
			triggerRef: r,
			contentElRef: i,
			arrowElRef: a,
			modelVisible: o,
			props: s,
			emits: c
		});
		return t({
			open: u,
			close: d,
			contentEl: i
		}), (e, t) => (L(), E(S, null, [e.$slots.default ? (L(), w(W(vt), {
			key: 0,
			ref_key: "triggerRef",
			ref: r
		}, {
			default: J(() => [V(e.$slots, "default", { visible: o.value })]),
			_: 3
		}, 512)) : T("", !0), (L(), w(ie, { to: "body" }, [k(oe, {
			name: "vui-popover",
			onAfterEnter: t[0] ||= (e) => c("opened"),
			onAfterLeave: W(f)
		}, {
			default: J(() => [o.value ? (L(), E("div", N({
				key: 0,
				ref_key: "contentElRef",
				ref: i
			}, e.$attrs, {
				class: ["vui-popover", e.popoverClass],
				style: W(l)
			}), [D("div", xt, [e.$slots.content ? V(e.$slots, "content", {
				key: 0,
				visible: o.value
			}) : (L(), E(S, { key: 1 }, [O(U(e.content), 1)], 64))]), D("span", {
				ref_key: "arrowElRef",
				ref: a,
				class: "vui-popover-arrow",
				"data-popper-arrow": ""
			}, null, 512)], 16)) : T("", !0)]),
			_: 3
		}, 8, ["onAfterLeave"])]))], 64));
	}
}), Ct = ["title"], wt = ["src"], Tt = { class: "vui-dropdown-label" }, Et = {
	key: 0,
	class: "vui-dropdown-divider"
}, Dt = {
	__name: "dropdown-item",
	props: { formattedItem: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = e, { isSelected: n, itemClasses: r, onItemClick: i } = ft({ formattedItem: t.formattedItem }), a = C(() => s(t.formattedItem.icon, t.formattedItem.iconProps));
		return (t, o) => (L(), E(S, null, [D("div", {
			class: P(["vui-dropdown-item", W(r)]),
			title: e.formattedItem.label,
			onClick: o[0] ||= (...e) => W(i) && W(i)(...e)
		}, [
			e.formattedItem.image ? (L(), E("img", N({
				key: 0,
				src: e.formattedItem.image
			}, e.formattedItem.imageProps), null, 16, wt)) : T("", !0),
			a.value ? (L(), w(W(c), F(N({ key: 1 }, a.value)), null, 16)) : T("", !0),
			D("span", Tt, U(e.formattedItem.label), 1),
			W(n) ? (L(), w(W(c), {
				key: 2,
				icon: _,
				size: 12
			})) : T("", !0)
		], 10, Ct), e.formattedItem.divider ? (L(), E("div", Et)) : T("", !0)], 64));
	}
}, Ot = {
	key: 0,
	class: "vui-dropdown-header"
}, kt = {
	key: 1,
	class: "vui-dropdown-placeholder"
}, At = {
	key: 2,
	class: "vui-dropdown-content"
}, jt = {
	key: 3,
	class: "vui-dropdown-placeholder"
}, Mt = {
	key: 4,
	class: "vui-dropdown-footer"
}, Nt = {
	__name: "dropdown",
	props: /* @__PURE__ */ M(ut, {
		selectedKey: lt.selectedKey,
		selectedKeyModifiers: {}
	}),
	emits: /* @__PURE__ */ M(ct, ["update:selectedKey"]),
	setup(e, { expose: t, emit: n }) {
		let r = z(null), i = G(e, "selectedKey", lt.selectedKey), a = e, o = n, { formattedItems: s } = dt({ props: a }), c = (e) => r.value.open(e), l = (e) => r.value.close(e), u = C(() => r.value?.contentEl);
		return R("vuiDropdownRoot", {
			modelSelectedKey: i,
			props: a,
			emits: o,
			open: c,
			close: l
		}), t({
			open: c,
			close: l,
			contentEl: u
		}), (e, t) => (L(), w(St, {
			ref_key: "popoverRef",
			ref: r,
			class: "vui-dropdown",
			placement: e.placement
		}, ce({
			content: J(() => [
				e.$slots.header ? (L(), E("div", Ot, [V(e.$slots, "header")])) : T("", !0),
				e.loading ? (L(), E("div", kt, " Loading... ")) : W(s)?.length ? (L(), E("div", At, [(L(!0), E(S, null, B(W(s), (e, t) => (L(), w(Dt, {
					key: t,
					"formatted-item": e
				}, null, 8, ["formatted-item"]))), 128))])) : e.showEmpty ? (L(), E("div", jt, " No Data ")) : T("", !0),
				e.$slots.footer ? (L(), E("div", Mt, [V(e.$slots, "footer")])) : T("", !0)
			]),
			_: 2
		}, [e.$slots.default ? {
			name: "default",
			fn: J(({ visible: t }) => [V(e.$slots, "default", { visible: t })]),
			key: "0"
		} : void 0]), 1032, ["placement"]));
	}
}, Pt = /* @__PURE__ */ n({ VDropdown: () => Nt }), Ft = {
	icon: {
		type: [
			Boolean,
			Object,
			String,
			Number
		],
		default: !0
	},
	iconProps: c.props,
	image: {
		type: String,
		default: void 0
	},
	imageStyles: {
		type: Object,
		default: void 0
	},
	description: {
		type: [Boolean, String],
		default: !0
	},
	direction: {
		type: String,
		default: "vertical"
	},
	padding: {
		type: [String, Number],
		default: void 0
	}
}, It = ({ props: e, stateType: t }) => {
	let n = t === "loading";
	return {
		rootProps: C(() => ({
			class: { [`vui-${t}--${e.direction}`]: e.direction },
			style: { [`--vui-${t}-padding`]: a(e.padding, "px") }
		})),
		computedIconProps: C(() => {
			if (e.image || e.icon === !1 || e.icon === null) return null;
			let t = n ? x : y;
			return s(e.icon === !0 ? t : e.icon, {
				spin: n,
				...e.iconProps || {}
			});
		}),
		descText: C(() => e.description === !1 || e.description === null ? "" : e.description === !0 ? p.isZh ? n ? "加载中..." : "暂无数据" : n ? "Loading..." : "No Data" : e.description)
	};
}, Lt = ["alt", "src"], $ = {
	__name: "empty",
	props: Ft,
	setup(e) {
		let t = j("vuiStateType", "empty"), { rootProps: n, computedIconProps: r, descText: i } = It({
			props: e,
			stateType: t
		});
		return (e, a) => (L(), E("div", N({ class: `vui-${W(t)}` }, W(n)), [
			e.image ? (L(), E("img", {
				key: 0,
				class: P(`vui-${W(t)}-img`),
				alt: W(t),
				src: e.image,
				style: I(e.imageStyles)
			}, null, 14, Lt)) : W(r) ? (L(), w(W(c), N({
				key: 1,
				class: `vui-${W(t)}-icon`
			}, W(r)), null, 16, ["class"])) : T("", !0),
			W(i) ? (L(), E("div", {
				key: 2,
				class: P(`vui-${W(t)}-desc`)
			}, U(W(i)), 3)) : T("", !0),
			V(e.$slots, "default")
		], 16));
	}
}, Rt = /* @__PURE__ */ n({ VEmpty: () => $ }), zt = {
	filedInline: {
		type: Boolean,
		default: !1
	},
	filedBlock: {
		type: Boolean,
		default: !0
	}
}, Bt = {
	labelPosition: {
		type: String,
		default: void 0
	},
	labelAlign: {
		type: String,
		default: void 0
	},
	labelWidth: {
		type: [String, Number],
		default: void 0
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	}
}, Vt = ({ formElRef: e, props: t }) => {
	let n = z(!1), { stop: r } = Ee(e, async ([e]) => {
		e?.isIntersecting && (n.value = !0, r());
	}), i = C(() => t.filedInline || !t.filedBlock), o = z(null);
	return ye(() => {
		if (i.value) {
			o.value = "fit-content";
			return;
		}
		if (t.labelPosition === "top" || t.labelPosition === "bottom") {
			o.value = "100%";
			return;
		}
		if (t.labelWidth) {
			o.value = t.labelWidth;
			return;
		}
		if (!n.value) return;
		let r = e.value.querySelectorAll(".vui-form-label"), a = Array.from(r).map((e) => e.offsetWidth);
		o.value = Math.max(...a);
	}), {
		rootClasses: C(() => ({ "vui-form--filed-inline": i.value })),
		rootStyles: C(() => ({ "--vui-form-label-width": a(o.value, "px") }))
	};
}, Ht = {
	model: {
		type: Object,
		default: void 0
	},
	rules: {
		type: Object,
		default: void 0
	}
}, Ut = { prop: {
	type: String,
	default: void 0
} };
async function Wt({ value: e, rules: t, trigger: n }) {
	let r = !0, i = "";
	for (let a of t) if (!(a.trigger === "submit" && n !== "submit")) {
		if (a.required) {
			let t = typeof e;
			if (r = t === "undefined" || e === null ? !1 : t === "string" ? !!e.trim() : Array.isArray(e) ? !!e.length : !0, i = a.message, !r) break;
		}
		if (a.pattern && (r = a.pattern.test(e), i = a.message, !r)) break;
		if (a.validator) {
			let t = await a.validator(e);
			if (r = t === !0, i = t || a.message, !r) break;
		}
	}
	return {
		valid: r,
		message: r ? null : i
	};
}
var Gt = ({ props: e }) => {
	let t = z({});
	async function n() {
		let n = e.rules || {}, r = Object.keys(n);
		if (!r.length) return !0;
		let i = e.model || {};
		for (let e of r) {
			let r = i[e], a = n[e];
			t.value[e] = await Wt({
				value: r,
				rules: a,
				trigger: "submit"
			});
		}
		return { valid: r.every((e) => t.value[e].valid) };
	}
	return R("vuiFormValidateRes", t), { validate: n };
}, Kt = (e) => {
	let t = j("vuiFormRoot", {}), n = C(() => e.props.prop), r = C(() => t.props.model?.[n.value]), i = C(() => t.props.rules?.[n.value]), a = C(() => i.value?.some((e) => e.required)), o = j("vuiFormValidateRes", {}), s = C(() => o.value[n.value]), c = C(() => s.value?.message), l = C(() => ({
		"is-required": a.value,
		"is-error": s.value ? !s.value.valid : !1
	}));
	return q(r, async (e) => {
		i.value && (o.value[n.value] = await Wt({
			value: e,
			rules: i.value,
			trigger: "input"
		}));
	}, { deep: !0 }), {
		errorMessage: c,
		validClasses: l
	};
}, qt = {
	__name: "form",
	props: {
		...zt,
		...Bt,
		...Ht
	},
	setup(e, { expose: t }) {
		let n = K("formElRef"), r = e, { rootClasses: i, rootStyles: a } = Vt({
			formElRef: n,
			props: r
		}), { validate: o } = Gt({ props: r });
		return R("vuiFormRoot", { props: r }), t({ validate: o }), (e, t) => (L(), E("form", {
			ref_key: "formElRef",
			ref: n,
			class: P(["vui-form", W(i)]),
			style: I(W(a)),
			onSubmit: t[0] ||= X(() => {}, ["prevent"])
		}, [V(e.$slots, "default")], 38));
	}
}, Jt = { label: {
	type: String,
	default: void 0
} };
function Yt(e) {
	let t = j("vuiFormRoot", {});
	return {
		itemClasses: C(() => {
			let n = e.props.labelPosition || t.props.labelPosition || "left", r = e.props.labelAlign || t.props.labelAlign || (n === "left" ? "right" : "left");
			return {
				[`vui-form--label-position-${n}`]: n !== "left",
				[`vui-form--label-align-${r}`]: r !== "left"
			};
		}),
		itemStyles: C(() => ({ "--vui-form-label-width": a(e.props.labelWidth, "px") }))
	};
}
//#endregion
//#region packages/components/form/form-item.vue
var Xt = {
	key: 0,
	class: "vui-form-label"
}, Zt = { class: "vui-form-control" }, Qt = {
	key: 0,
	class: "vui-form-error"
}, $t = {
	__name: "form-item",
	props: {
		...Jt,
		...Bt,
		...Ut
	},
	setup(e) {
		let t = e, { itemClasses: n, itemStyles: r } = Yt({ props: t }), { validClasses: i, errorMessage: a } = Kt({ props: t });
		return (e, t) => (L(), E("div", {
			class: P([
				"vui-form-item",
				W(n),
				W(i)
			]),
			style: I(W(r))
		}, [e.$slots.label || e.label ? (L(), E("label", Xt, [e.$slots.label ? V(e.$slots, "label", { key: 0 }) : (L(), E(S, { key: 1 }, [O(U(e.label), 1)], 64))])) : T("", !0), D("div", Zt, [V(e.$slots, "default"), k(oe, { name: "vui-form-error" }, {
			default: J(() => [W(a) ? (L(), E("div", Qt, U(W(a)), 1)) : T("", !0)]),
			_: 1
		})])], 6));
	}
}, en = /* @__PURE__ */ n({
	VForm: () => qt,
	VFormItem: () => $t
}), tn = {
	src: {
		type: String,
		default: void 0
	},
	errorImage: {
		type: [String, Object],
		default: void 0
	},
	width: {
		type: [String, Number],
		default: void 0
	},
	aspectRatio: {
		type: String,
		default: void 0
	},
	radius: {
		type: [String, Number],
		default: void 0
	}
}, nn = ({ props: e }) => {
	let { isLoading: t, error: n } = Te({ src: e.src }), r = C(() => t.value || n.value ? e.aspectRatio || "16/9" : e.aspectRatio);
	return {
		isLoading: t,
		error: n,
		aspectRatio: r,
		rootProps: C(() => ({
			style: {
				"--vui-image-width": a(e.width, "px"),
				"--vui-image-aspect-ratio": r.value,
				"--vui-image-radius": a(e.radius, "px")
			},
			"data-src": n.value ? e.src : null
		}))
	};
}, rn = {}, an = { class: "vui-skeleton" };
function on(e, t) {
	return L(), E("div", an, [V(e.$slots, "default")]);
}
var sn = /* @__PURE__ */ e(rn, [["render", on]]), cn = {
	width: {
		type: [String, Number],
		default: void 0
	},
	height: {
		type: [String, Number],
		default: 20
	},
	aspectRatio: {
		type: String,
		default: void 0
	},
	center: {
		type: Boolean,
		default: !1
	},
	devider: {
		type: Boolean,
		default: !1
	},
	rows: {
		type: Number,
		default: 1
	}
}, ln = ({ props: e }) => {
	let t = (t) => {
		if (e.width) return e.width;
		if (!(e.rows <= 1)) {
			if (t === 0) return "40%";
			if (t === e.rows - 1) return "60%";
		}
	};
	return { formattedRows: C(() => Array.from({ length: e.rows }, (n, r) => ({
		class: { "vui-skeleton--center": e.center },
		style: {
			width: a(t(r), "px"),
			height: e.aspectRatio ? void 0 : a(e.height, "px"),
			aspectRatio: e.aspectRatio
		}
	}))) };
}, un = {
	key: 0,
	class: "vui-skeleton-devider"
}, dn = {
	__name: "skeleton-item",
	props: cn,
	setup(e) {
		let { formattedRows: t } = ln({ props: e });
		return (e, n) => (L(), E(S, null, [(L(!0), E(S, null, B(W(t), (e, t) => (L(), E("div", N({
			key: t,
			class: "vui-skeleton-item"
		}, { ref_for: !0 }, e), null, 16))), 128)), e.devider ? (L(), E("div", un)) : T("", !0)], 64));
	}
}, fn = /* @__PURE__ */ n({
	VSkeleton: () => sn,
	VSkeletonItem: () => dn
}), pn = {
	key: 1,
	class: "vui-image-error"
}, mn = ["src"], hn = ["src"], gn = {
	__name: "image",
	props: tn,
	setup(e) {
		let { isLoading: t, error: n, rootProps: r } = nn({ props: e });
		return (e, i) => (L(), E("div", N({ class: "vui-image" }, W(r)), [W(t) ? (L(), w(W(dn), { key: 0 })) : W(n) ? (L(), E("div", pn, [e.errorImage ? (L(), E("img", {
			key: 0,
			src: e.errorImage,
			class: "vui-image-inner"
		}, null, 8, mn)) : (L(), w(W(c), {
			key: 1,
			icon: g
		}))])) : (L(), E("img", {
			key: 2,
			class: "vui-image-inner",
			src: e.src
		}, null, 8, hn))], 16));
	}
}, _n = /* @__PURE__ */ n({ VImage: () => gn }), vn = [
	"focus",
	"blur",
	"input",
	"change",
	"enter",
	"clear"
], yn = { value: {
	type: String,
	default: void 0
} }, bn = {
	common: {
		clearable: {
			type: Boolean,
			default: !1
		},
		showWordLimit: {
			type: Boolean,
			default: !1
		},
		prefixIcon: c.props.icon,
		prefixIconProps: c.props,
		suffixIcon: c.props.icon,
		suffixIconProps: c.props,
		autofocus: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		maxlength: {
			type: [String, Number],
			default: void 0
		},
		placeholder: {
			type: String,
			default: void 0
		}
	},
	input: {
		showPasswordToggle: {
			type: Boolean,
			default: !1
		},
		prefix: {
			type: [String, Number],
			default: void 0
		},
		suffix: {
			type: [String, Number],
			default: void 0
		},
		prepend: {
			type: [String, Number],
			default: void 0
		},
		append: {
			type: [String, Number],
			default: void 0
		},
		size: {
			type: String,
			default: "medium"
		},
		type: {
			type: String,
			default: "text"
		}
	},
	textarea: {
		resize: {
			type: String,
			default: void 0
		},
		rows: {
			type: [String, Number],
			default: "2"
		}
	}
}, xn = ({ type: e, wrapperElRef: t, inputElRef: n, modelValue: r, props: i, emits: a }) => {
	let o = j("vuiFormRoot", null), s = e === "input", c = C(() => i.disabled || o?.props?.disabled), l = C(() => i.readonly || o?.props?.readonly), u = Ce(t), { focused: d } = we(n);
	Z(t, "click", () => d.value = !c.value);
	let f = C(() => `vui-input--${i.size}`), p = C(() => ({
		"is-disabled": c.value,
		"is-focus": d.value && !c.value
	})), m = C(() => s && i.type === "password" && i.showPasswordToggle && r.value && !c.value), h = z(!1), g = () => h.value = !h.value, _ = C(() => {
		let e = !c.value && !l.value;
		return i.clearable && r.value && e && (u.value || d.value);
	}), v = (e) => {
		r.value = "", d.value = !0, a("clear", {
			event: e,
			value: ""
		});
	}, y = C(() => i.maxlength && i.showWordLimit ? `${r.value?.length || 0}/${i.maxlength}` : null), b = C(() => {
		let e = {
			readonly: l.value,
			disabled: c.value,
			autofocus: i.autofocus,
			placeholder: i.placeholder,
			maxlength: i.maxlength
		};
		return s ? {
			...e,
			type: h.value ? "text" : i.type
		} : {
			...e,
			rows: i.rows,
			style: { resize: i.resize }
		};
	});
	function ee(e, t) {
		a(e, {
			event: t,
			value: r.value
		});
	}
	return {
		sizeClasses: f,
		statusClasses: p,
		isShowPasswordToggle: m,
		isShowClearIcon: _,
		innerProps: b,
		countText: y,
		onClickPasswordIcon: g,
		onClickClearIcon: v,
		onEvent: ee
	};
}, Sn = {
	key: 0,
	class: "vui-input-prepend"
}, Cn = {
	key: 1,
	class: "vui-input-count"
}, wn = {
	key: 1,
	class: "vui-input-append"
}, Tn = {
	__name: "input",
	props: /* @__PURE__ */ M({
		...bn.common,
		...bn.input
	}, {
		value: yn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ M(vn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = K("wrapperElRef"), i = K("inputElRef"), a = G(e, "value", yn.value), o = e, { sizeClasses: l, statusClasses: u, isShowPasswordToggle: d, isShowClearIcon: f, innerProps: p, countText: m, onClickPasswordIcon: h, onClickClearIcon: g, onEvent: _ } = xn({
			type: "input",
			wrapperElRef: r,
			inputElRef: i,
			modelValue: a,
			props: o,
			emits: n
		}), y = C(() => s(o.prefixIcon, o.prefixIconProps)), b = C(() => s(o.suffixIcon, o.suffixIconProps));
		return (e, n) => (L(), E("div", { class: P([
			"vui-input",
			W(l),
			{
				"vui-input--prepend": e.$slots.prepend || e.prepend,
				"vui-input--append": e.$slots.append || e.append
			}
		]) }, [
			e.$slots.prepend || e.prepend ? (L(), E("div", Sn, [V(e.$slots, "prepend"), O(" " + U(e.prepend), 1)])) : T("", !0),
			D("div", {
				ref_key: "wrapperElRef",
				ref: r,
				class: P(["vui-input-wrapper", W(u)])
			}, [
				y.value ? (L(), w(W(c), F(N({ key: 0 }, y.value)), null, 16)) : T("", !0),
				V(e.$slots, "prefix"),
				O(" " + U(e.prefix) + " ", 1),
				Y(D("input", N({
					ref_key: "inputElRef",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e
				}, W(p), {
					class: "vui-input-inner",
					onFocus: n[1] ||= (e) => W(_)("focus", e),
					onBlur: n[2] ||= (e) => W(_)("blur", e),
					onInput: n[3] ||= (e) => W(_)("input", e),
					onChange: n[4] ||= (e) => W(_)("change", e),
					onKeyup: n[5] ||= be((e) => W(_)("enter", e), ["enter"])
				}), null, 16), [[ge, a.value]]),
				W(m) ? (L(), E("div", Cn, U(W(m)), 1)) : T("", !0),
				W(f) ? (L(), w(W(c), {
					key: 2,
					class: "vui-input-icon--clear",
					icon: t,
					onClick: X(W(g), ["stop"])
				}, null, 8, ["onClick"])) : T("", !0),
				W(d) ? (L(), w(W(c), {
					key: 3,
					class: "vui-input-icon--password",
					icon: W(p).type === "password" ? ee : v,
					onClick: X(W(h), ["stop"])
				}, null, 8, ["icon", "onClick"])) : T("", !0),
				O(" " + U(e.suffix) + " ", 1),
				V(e.$slots, "suffix"),
				b.value ? (L(), w(W(c), F(N({ key: 4 }, b.value)), null, 16)) : T("", !0)
			], 2),
			e.$slots.append || e.append ? (L(), E("div", wn, [O(U(e.append) + " ", 1), V(e.$slots, "append")])) : T("", !0)
		], 2));
	}
}, En = /* @__PURE__ */ n({ VInput: () => Tn }), Dn = { setup(e, { slots: t }) {
	return R("vuiStateType", "loading"), () => A($, null, t);
} }, On = /* @__PURE__ */ n({ VLoading: () => Dn }), kn = {}, An = { class: "vui-overlay" };
function jn(e, t) {
	return L(), E("div", An, [V(e.$slots, "default")]);
}
var Mn = /* @__PURE__ */ e(kn, [["render", jn]]), Nn = /* @__PURE__ */ n({ VOverlay: () => Mn }), Pn = /* @__PURE__ */ n({ VPopover: () => St }), Fn = {
	percentage: {
		type: Number,
		default: 0
	},
	suffix: {
		type: [
			Boolean,
			Function,
			String,
			Number
		],
		default: !0
	},
	height: {
		type: [Number, String],
		default: void 0
	},
	radius: {
		type: [Number, String],
		default: void 0
	}
}, In = ({ props: e }) => ({
	railStyles: C(() => ({
		"--vui-progress-height": a(e.height, "px"),
		"--vui-progress-radius": a(e.radius, "px")
	})),
	trackStyles: C(() => ({ width: `${e.percentage}%` })),
	suffixText: C(() => d(e.percentage, e.suffix, "%"))
}), Ln = { class: "vui-progress" }, Rn = {
	key: 0,
	class: "vui-progress-suffix"
}, zn = {
	__name: "progress",
	props: Fn,
	setup(e) {
		let { railStyles: t, trackStyles: n, suffixText: r } = In({ props: e });
		return (e, i) => (L(), E("div", Ln, [D("div", {
			class: "vui-progress-rail",
			style: I(W(t))
		}, [D("div", {
			class: "vui-progress-track",
			style: I(W(n))
		}, null, 4)], 4), W(r) ? (L(), E("div", Rn, U(W(r)), 1)) : T("", !0)]));
	}
}, Bn = /* @__PURE__ */ n({ VProgress: () => zn }), Vn = { setup(e, { slots: t }) {
	return R("vuiCheckboxType", "radio"), () => A(Ve, null, t);
} }, Hn = { setup(e, { slots: t }) {
	return R("vuiCheckboxType", "radio"), () => A(Ke, null, t);
} }, Un = /* @__PURE__ */ n({
	VRadio: () => Vn,
	VRadioGroup: () => Hn
}), Wn = {
	tag: {
		type: String,
		default: "div"
	},
	center: {
		type: Boolean,
		default: !1
	},
	ellipsis: {
		type: Boolean,
		default: !1
	}
}, Gn = ({ props: e }) => ({ rootClasses: C(() => ["vui-row", {
	"is-center": e.center,
	"is-ellipsis": e.ellipsis
}]) }), Kn = {
	__name: "row",
	props: Wn,
	setup(e) {
		let { rootClasses: t } = Gn({ props: e });
		return (e, n) => (L(), w(pe(e.tag), { class: P(W(t)) }, {
			default: J(() => [V(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}, qn = /* @__PURE__ */ n({ VRow: () => Kn }), Jn = ["change", "clear"], Yn = { value: {
	type: [String, Number],
	default: void 0
} }, Xn = {
	options: {
		type: Array,
		default: void 0
	},
	clearable: {
		type: Boolean,
		default: !1
	},
	size: {
		type: String,
		default: "medium"
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	},
	placeholder: {
		type: String,
		default: void 0
	}
}, Zn = ({ triggerElRef: e, modelValue: t, props: n, emits: r }) => {
	let i = j("vuiFormRoot", null), a = C(() => n.disabled || i?.props?.disabled), o = C(() => n.readonly || i?.props?.readonly), s = C(() => a.value || o.value), { focused: c } = we(e), l = Ce(e), u = C(() => [`vui-select--${n.size}`, {
		"vui-select--placeholder": !g.value,
		"is-disabled": a.value,
		"is-focus": c.value && !s.value
	}]), d = C(() => n.clearable && t.value && !s.value && (c.value || l.value));
	function f(e) {
		t.value = void 0, c.value = !0, r("clear", {
			event: e,
			value: void 0
		});
	}
	let { width: p } = Se(e), m = C(() => ({ width: `${p.value}px` })), h = C(() => n.options?.map((e) => typeof e == "object" ? {
		__vuiSelectOptionRawData__: e,
		...e,
		label: e.label || e.value,
		key: e.key || e.value
	} : {
		__vuiSelectOptionRawData__: e,
		label: e,
		value: e,
		key: e
	})), g = C(() => h.value?.find((e) => e.value === t.value)?.label);
	function _({ item: e }) {
		let n = e.value;
		t.value = n, c.value = !0, r("change", {
			option: e.__vuiSelectOptionRawData__,
			value: n,
			selectedValue: n
		});
	}
	return {
		triggerClasses: u,
		popoverDisabled: s,
		isShowClearIcon: d,
		dropdownStyles: m,
		formattedOptions: h,
		selectedOptionLabel: g,
		onClickClearIcon: f,
		onSelectOption: _
	};
}, Qn = { class: "vui-select-inner" }, $n = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "select",
	props: /* @__PURE__ */ M(Xn, {
		value: Yn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ M(Jn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = K("triggerElRef"), i = G(e, "value", Yn.value), { triggerClasses: a, popoverDisabled: o, isShowClearIcon: s, dropdownStyles: l, formattedOptions: u, selectedOptionLabel: d, onClickClearIcon: f, onSelectOption: p } = Zn({
			triggerElRef: r,
			modelValue: i,
			props: e,
			emits: n
		});
		return (e, n) => (L(), w(W(Nt), {
			"selected-key": i.value,
			"onUpdate:selectedKey": n[0] ||= (e) => i.value = e,
			items: W(u),
			selectable: "",
			trigger: "click",
			placement: "bottom",
			"close-on-click-item": "",
			disabled: W(o),
			class: "vui-select-dropdown",
			style: I(W(l)),
			onSelect: W(p)
		}, {
			default: J(({ visible: n }) => [D("div", N({
				ref_key: "triggerElRef",
				ref: r,
				class: ["vui-select", W(a)],
				tabindex: "-1"
			}, e.$attrs), [D("span", Qn, U(W(d) || e.placeholder), 1), W(s) ? (L(), w(W(c), {
				key: 0,
				class: "vui-select-icon--clear",
				icon: t,
				onClick: X(W(f), ["stop"])
			}, null, 8, ["onClick"])) : (L(), w(W(c), {
				key: 1,
				class: "vui-select-icon--arrow",
				icon: h,
				rotate: n ? "180deg" : void 0
			}, null, 8, ["rotate"]))], 16)]),
			_: 1
		}, 8, [
			"selected-key",
			"items",
			"disabled",
			"style",
			"onSelect"
		]));
	}
}), er = /* @__PURE__ */ n({ VSelect: () => $n }), tr = { value: {
	type: Number,
	default: void 0
} }, nr = {
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	tooltip: {
		type: [
			Boolean,
			Function,
			String,
			Number
		],
		default: !0
	},
	suffix: {
		type: [
			Boolean,
			Function,
			String,
			Number
		],
		default: !1
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	}
}, rr = ({ railElRef: e, handleElRef: t, tooltipRef: n, modelValue: r, props: i }) => {
	let a = j("vuiFormRoot", null), o = C(() => i.disabled || a?.props?.disabled), s = C(() => i.readonly || a?.props?.readonly), c = C(() => !o.value && !s.value), l = z(!1), u = null, f = null, p = null;
	function m(t) {
		c.value && (l.value || (l.value = !0, u = e.value.getBoundingClientRect(), f = Z("mousemove", h), p = Z("mouseup", g)));
	}
	function h(e) {
		c.value && l.value && v(e);
	}
	function g(e) {
		c.value && l.value && (l.value = !1, f?.(), p?.());
	}
	function _(e) {
		c.value && (l.value || v(e));
	}
	function v(e) {
		let t = (e.clientX - u.x) / u.width, n = (i.max - i.min) * t + i.min, a = Math.max(i.min, Math.min(i.max, n));
		r.value = Math.round(a);
	}
	let y = C(() => {
		let e = (r.value - i.min) / (i.max - i.min) * 100;
		return `${Math.round(Math.max(0, Math.min(100, e)))}%`;
	}), b = Ce(t), ee = C(() => ({
		class: { "is-dragging": l.value },
		style: { left: y.value }
	})), te = C(() => d(r.value, i.tooltip));
	q([C(() => te.value && (l.value || b.value)), r], ([e]) => {
		e ? n.value.open({ el: t }) : n.value.close();
	});
	let x = C(() => d(r.value, i.suffix)), ne = C(() => ({ width: y.value }));
	return {
		rootClasses: C(() => ({ "is-disabled": o.value })),
		trackStyles: ne,
		handleProps: ee,
		tooltipText: te,
		suffixText: x,
		onRailClick: _,
		onDragStart: m
	};
}, ir = { setup(e, { slots: t, expose: n }) {
	let r = z(null);
	return n({
		open: (e) => r.value?.open?.(e),
		close: (e) => r.value?.close?.(e),
		contentEl: C(() => r.value?.contentEl)
	}), () => A(St, {
		ref: r,
		class: "vui-tooltip"
	}, t);
} }, ar = { class: "vui-slider-inner" }, or = {
	key: 0,
	class: "vui-slider-suffix"
}, sr = {
	__name: "slider",
	props: /* @__PURE__ */ M(nr, {
		value: tr.value,
		valueModifiers: {}
	}),
	emits: ["update:value"],
	setup(e) {
		let t = K("railElRef"), n = K("handleElRef"), r = z(null), i = G(e, "value", tr.value), { rootClasses: a, trackStyles: o, handleProps: s, tooltipText: c, suffixText: l, onRailClick: u, onDragStart: d } = rr({
			railElRef: t,
			handleElRef: n,
			tooltipRef: r,
			modelValue: i,
			props: e
		});
		return (e, f) => (L(), E("div", { class: P(["vui-slider", W(a)]) }, [D("div", ar, [
			D("div", {
				ref_key: "railElRef",
				ref: t,
				class: "vui-slider-rail",
				onClick: f[0] ||= X((...e) => W(u) && W(u)(...e), ["stop"])
			}, null, 512),
			D("div", {
				class: "vui-slider-track",
				style: I(W(o)),
				onClick: f[1] ||= X((...e) => W(u) && W(u)(...e), ["stop"])
			}, null, 4),
			D("div", N({
				ref_key: "handleElRef",
				ref: n,
				class: "vui-slider-handle"
			}, W(s), { onMousedown: f[2] ||= X((...e) => W(d) && W(d)(...e), ["left", "stop"]) }), null, 16),
			k(ir, {
				ref_key: "tooltipRef",
				ref: r,
				trigger: "manual",
				content: W(c)
			}, null, 8, ["content"])
		]), e.$slots.suffix || W(l) ? (L(), E("div", or, [O(U(W(l)) + " ", 1), V(e.$slots, "suffix", {
			value: i.value,
			tooltip: W(c)
		})])) : T("", !0)], 2));
	}
}, cr = /* @__PURE__ */ n({ VSlider: () => sr }), lr = ["change"], ur = { checked: {
	type: Boolean,
	default: !1
} }, dr = {
	activeText: {
		type: String,
		default: void 0
	},
	inactiveText: {
		type: String,
		default: void 0
	},
	beforeChange: {
		type: Function,
		default: void 0
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	readonly: {
		type: Boolean,
		default: !1
	}
}, fr = ({ modelChecked: e, props: t, emits: n }) => {
	let r = j("vuiFormRoot", null), i = C(() => t.disabled || r?.props?.disabled), a = C(() => t.readonly || r?.props?.readonly), o = C(() => ({
		"is-disabled": i.value,
		"is-checked": e.value,
		"is-loading": l.value
	})), s = C(() => ({ "is-active": e.value })), c = C(() => ({ "is-active": !e.value })), l = z(!1);
	async function u() {
		if (i.value || a.value || l.value) return;
		if (!t.beforeChange) {
			d();
			return;
		}
		l.value = !0;
		let n = await t.beforeChange(e.value);
		l.value = !1, n && d();
	}
	function d() {
		let t = !e.value;
		e.value = t, n("change", { checked: t });
	}
	return {
		rootClasses: o,
		activeClasses: s,
		inactiveClasses: c,
		isLoading: l,
		onClick: u
	};
}, pr = { class: "vui-switch-action" }, mr = {
	__name: "switch",
	props: /* @__PURE__ */ M(dr, {
		checked: ur.checked,
		checkedModifiers: {}
	}),
	emits: /* @__PURE__ */ M(lr, ["update:checked"]),
	setup(e, { emit: t }) {
		let { rootClasses: n, activeClasses: r, inactiveClasses: i, isLoading: a, onClick: o } = fr({
			modelChecked: G(e, "checked", ur.checked),
			props: e,
			emits: t
		});
		return (e, t) => (L(), E("div", { class: P(["vui-switch", W(n)]) }, [
			e.inactiveText ? (L(), E("span", {
				key: 0,
				class: P(["vui-switch-label", W(i)])
			}, U(e.inactiveText), 3)) : T("", !0),
			D("div", {
				class: "vui-switch-inner",
				onClick: t[0] ||= (...e) => W(o) && W(o)(...e)
			}, [D("span", pr, [W(a) ? (L(), w(W(c), {
				key: 0,
				class: "vui-switch-loading",
				icon: x,
				spin: !0
			})) : T("", !0)])]),
			e.activeText ? (L(), E("span", {
				key: 1,
				class: P(["vui-switch-label", W(r)])
			}, U(e.activeText), 3)) : T("", !0)
		], 2));
	}
}, hr = /* @__PURE__ */ n({ VSwitch: () => mr }), gr = ["row-click", "row-contextmenu"], _r = {
	rowItems: {
		type: Array,
		default: void 0
	},
	colItems: {
		type: Array,
		required: !0
	},
	tableHeight: {
		type: [String, Number],
		default: void 0
	},
	stripe: {
		type: Boolean,
		default: !1
	},
	rowHeight: {
		type: Number,
		default: 35
	},
	rowIdKey: {
		type: String,
		default: "id"
	},
	currentRowId: {
		type: [String, Number],
		default: void 0
	},
	customRow: {
		type: Function,
		default: void 0
	},
	colResizable: {
		type: Boolean,
		default: !1
	},
	colResizeStorageKey: {
		type: String,
		default: void 0
	}
}, vr = ({ tableElRef: e, tbodyElRef: t, props: n }) => {
	let r = z(!1), { stop: i } = Ee(e, ([e]) => {
		e?.isIntersecting && (r.value = !0, i());
	}), o = C(() => ({ "vui-table--striped": n.stripe })), s = C(() => ({
		height: a(n.tableHeight, "px"),
		"--vui-table-row-height": `${n.rowHeight}px`
	})), c = z({ transform: null });
	Z(t, "scroll", (e) => {
		let t = Math.floor(e.target.scrollLeft);
		c.value.transform = `translateX(-${t}px)`;
	});
	let l = n.colResizeStorageKey ? De(n.colResizeStorageKey, {}) : z({});
	return ye(() => {
		if (!r.value) return;
		let t = e.value.offsetWidth - 20, i = n.colItems?.length || 0;
		n.colItems.forEach((e) => {
			e.width && (t -= e.width, --i);
		}), (e.value?.querySelectorAll(".vui-table-header .vui-table-row-action")).forEach((e) => {
			t -= e.offsetWidth;
		});
		let a = Math.floor(t / i);
		l.value = n.colItems.reduce((e, t) => {
			let n = l.value[t.key] || t.width || a, r = t.minWidth || 50;
			return e[t.key] = Math.max(n, r), e;
		}, {});
	}), {
		rootClasses: o,
		rootStyles: s,
		headerStyles: c,
		colWidthsRef: l
	};
}, yr = {
	loading: {
		type: Boolean,
		default: !1
	},
	loadingProps: Dn.props,
	emptyProps: $.props
}, br = ({ type: e, props: t, dataRef: n }) => {
	let r = he(), i = (e, t) => le({ render() {
		return A(e, t);
	} }), a = C(() => t.loading ? r.loading ? A("div", { class: `vui-${e}-loading` }, r.loading()) : i(Dn, t.loadingProps) : null), o = C(() => t.loading || n.value?.length ? null : r.empty ? A("div", { class: `vui-${e}-empty` }, r.empty()) : i($, {
		icon: null,
		...t.emptyProps
	}));
	return { renderState: C(() => a.value || o.value) };
}, xr = ["selection-change"], Sr = { selectedRowIds: {
	type: Array,
	default: void 0
} }, Cr = {
	selectable: {
		type: Boolean,
		default: !1
	},
	dragSelectable: {
		type: Boolean,
		default: !1
	},
	dragSelectAreaWidth: {
		type: Number,
		default: 0
	},
	ctrlASelectable: {
		type: Boolean,
		default: !1
	}
}, wr = ({ props: e, dragFlagRef: t, modelSelectedRowIds: n, emits: r }) => {
	function i(t = [], i = []) {
		e.selectable && JSON.stringify(i) !== JSON.stringify(n.value || "[]") && (n.value = i, r("selection-change", {
			selectedItems: t,
			selectedIds: i
		}));
	}
	return q(() => e.rowItems, () => {
		e.selectable && i();
	}), R("vuiOnSelectionChange", i), {
		selectionRootClasses: C(() => ({ "is-dragging": t.value === "select" })),
		selectionRootStyles: C(() => ({ marginLeft: `-${e.dragSelectAreaWidth}px` })),
		selectionInnerStyles: C(() => ({ paddingLeft: `${e.dragSelectAreaWidth}px` }))
	};
}, Tr = ({ selectable: e, ctrlASelectable: t, modelSelectedRowIds: n, rowItemsRef: r, rowIdKey: i }) => {
	let a = j("vuiOnSelectionChange", null), o = C(() => !e || !r.value?.length ? !1 : n.value?.length === r.value?.length), s = () => {
		if (e && r.value?.length) if (o.value) a();
		else {
			let e = r.value?.map((e) => e?.[i]);
			a(r.value, e);
		}
	};
	return Z("keydown", (n) => {
		e && t && r.value?.length && n.key === "a" && n.ctrlKey && (n.preventDefault(), s());
	}), {
		isSelectedAll: o,
		toggleAllSelection: s,
		allSelectionClasses: C(() => ({ "is-selected": o.value }))
	};
}, Er = ({ selectable: e, modelSelectedRowIds: t, rowItemsRef: n, rowItem: r, rowIdKey: i }) => {
	let a = j("vuiOnSelectionChange", null), o = C(() => e ? t.value?.includes(r?.[i]) : !1);
	return {
		isSelectedRow: o,
		toggleRowSelection: () => {
			if (!e) return;
			let s = !o.value, c = [...t.value || []];
			s ? c.push(r?.[i]) : c = c.filter((e) => e !== r?.[i]), a(n.value.filter((e) => c.includes(e?.[i])), c);
		},
		rowSelectionClasses: C(() => ({ "is-selected": o.value }))
	};
}, Dr = {
	sortKey: {
		type: String,
		default: void 0
	},
	sortOrder: {
		type: String,
		default: void 0
	}
}, Or = ({ props: e }) => {
	let t = z(e.sortKey), n = z(e.sortOrder);
	return R("vuiTableSort", {
		sortKeyRef: t,
		sortOrderRef: n
	}), { sortedRows: C(() => !e.rowItems?.length || !e.colItems.find((e) => e.key === t.value)?.sortable ? null : f({
		items: e.rowItems || [],
		key: t.value,
		order: n.value
	})) };
}, kr = ({ rowItemsRef: e, colDataRef: t }) => {
	let { sortKeyRef: n, sortOrderRef: r } = j("vuiTableSort", {}), i = C(() => e.value.length && t.value.sortable), a = C(() => i.value && n.value && n.value === t.value.key), o = C(() => a.value && r.value === "asc"), s = C(() => a.value && r.value === "desc");
	function c() {
		i.value && (o.value ? r.value = "desc" : s.value ? (n.value = null, r.value = null) : (n.value = t.value.key, r.value = "asc"));
	}
	function l(e) {
		i.value && (a.value && e === r.value ? (n.value = null, r.value = null) : (n.value = t.value.key, r.value = e));
	}
	return {
		isSortable: i,
		isAsc: o,
		isDesc: s,
		onSortKeyClick: c,
		onSortOrderClick: l
	};
}, Ar = ["drag-sort-end"], jr = {
	dragSortable: {
		type: Boolean,
		default: !1
	},
	dragSortGroup: {
		type: String,
		default: void 0
	},
	canDropInto: {
		type: Function,
		default: void 0
	}
}, Mr = ({ dragFlagRef: e, dragSortGroup: t }) => {
	let n = j("vuiDragSortContext", {
		sourceRef: z({}),
		targetRef: z({})
	});
	return R("vuiDragSort", {
		groupId: t || r(),
		componetId: r(),
		...n
	}), { dragSortRootClasses: C(() => ({ "is-dragging": e.value === "dragSort" })) };
}, Nr = ({ dragFlagRef: e, dragSortable: t, canDropInto: n, rawItem: r, rawItemsRef: i, idKey: a, selectedItemsRef: o, emits: s }) => {
	let c = j("vuiDragSort", null), l = c.groupId, u = c.componetId, d = (e) => c.sourceRef.value = e, f = (e) => c.targetRef.value = e, p = () => c.sourceRef.value = {}, m = () => c.targetRef.value = {}, h = () => {
		p(), m();
	}, g = C(() => t && !!c.sourceRef.value.dragItemIds), _ = C(() => {
		let { dragComponetId: e, dragItemIds: t } = c.sourceRef.value;
		return g.value && e === u && t.includes(r?.[a]);
	}), v = C(() => {
		let { targetComponetId: e, targetItemId: t } = c.targetRef.value;
		return g.value && e === u && t === r?.[a];
	}), y = C(() => {
		let { dragGroupId: e, dragItemIds: t } = c.sourceRef.value;
		return g.value && e === l && !t.includes(r?.[a]);
	}), b = null;
	function ee() {
		if (!t || e.value) return;
		e.value = "dragSort";
		let n = o.value || [r];
		d({
			dragGroupId: l,
			dragComponetId: u,
			dragItem: r,
			dragItems: n,
			dragItemIds: n.map((e) => e?.[a])
		}), b = Z("dragenter", m);
	}
	function te() {
		let { dragItem: t, dragItems: n, dragItemIds: r } = c.sourceRef.value, { targetItem: i, targetItemId: a, dropPos: o } = c.targetRef.value;
		a && s("drag-sort-end", {
			dragItem: t,
			dragItems: n,
			dragItemIds: r,
			targetItem: i,
			targetItemId: a,
			dropPos: o
		}), e.value = null, h(), b();
	}
	function x(e) {
		if (!v.value) {
			if (!y.value) {
				m();
				return;
			}
			f({
				targetComponetId: u,
				targetItem: r,
				targetItemId: r?.[a],
				targetRect: e.target.getBoundingClientRect(),
				dropPos: null,
				canDropInto: n?.(r)
			}), S(e);
		}
	}
	function ne(e) {
		if (v.value) {
			if (!y.value) {
				m();
				return;
			}
			S(e);
		}
	}
	function re() {
		let { targetItemId: e } = c.targetRef.value;
		(!v.value || !y.value || !e) && h();
	}
	function S(e) {
		let { targetRect: t, canDropInto: n } = c.targetRef.value, r = e.clientY - t.top, i = t.height / (n ? 3 : 2);
		if (n && r >= i && r <= i * 2) {
			c.targetRef.value.dropPos = "center";
			return;
		}
		c.targetRef.value.dropPos = r <= i ? "top" : "bottom";
	}
	return {
		dragClasses: C(() => {
			let { dropPos: e } = c.targetRef.value;
			return _.value ? "is-draging" : v.value ? `is-${e}` : null;
		}),
		onDragStart: ee,
		onDragEnd: te,
		onDragEnter: x,
		onDragOver: ne,
		onDrop: re
	};
}, Pr = ["title"], Fr = {
	key: 0,
	class: "vui-table-cell-sort"
}, Ir = {
	__name: "thead-cell",
	props: { colData: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = j("vuiTableRoot", null), n = e, { isSortable: r, isAsc: i, isDesc: a, onSortKeyClick: o, onSortOrderClick: s } = kr({
			rowItemsRef: t.rowItemsRef,
			colDataRef: C(() => n.colData)
		});
		return (n, c) => {
			let l = H("VDragbox");
			return L(), w(l, {
				width: W(t).colWidthsRef.value[e.colData.key],
				"onUpdate:width": c[2] ||= (n) => W(t).colWidthsRef.value[e.colData.key] = n,
				class: P(["vui-table-cell", { "is-sortable": W(r) }]),
				resizable: W(t).props.colResizable,
				"resize-handles": ["right"],
				"min-width": e.colData.minWidth || 50,
				onClick: W(o)
			}, {
				default: J(() => [D("div", {
					class: "vui-table-cell-inner",
					title: e.colData.title
				}, U(e.colData.title), 9, Pr), W(r) ? (L(), E("div", Fr, [D("span", {
					class: P([
						"vui-table-cell-sorter",
						"is-asc",
						{ "is-active": W(i) }
					]),
					onClick: c[0] ||= X((e) => W(s)("asc"), ["stop"])
				}, null, 2), D("span", {
					class: P([
						"vui-table-cell-sorter",
						"is-desc",
						{ "is-active": W(a) }
					]),
					onClick: c[1] ||= X((e) => W(s)("desc"), ["stop"])
				}, null, 2)])) : T("", !0)]),
				_: 1
			}, 8, [
				"width",
				"class",
				"resizable",
				"min-width",
				"onClick"
			]);
		};
	}
}, Lr = {
	key: 0,
	class: "vui-table-row-action"
}, Rr = {
	key: 1,
	class: "vui-table-row-action"
}, zr = {
	__name: "thead-row",
	setup(e) {
		let t = j("vuiTableRoot", null), { isSelectedAll: n, toggleAllSelection: r, allSelectionClasses: i } = Tr({
			selectable: t.props.selectable,
			ctrlASelectable: t.props.ctrlASelectable,
			modelSelectedRowIds: t.modelSelectedRowIds,
			rowItemsRef: t.rowItemsRef,
			rowIdKey: t.props.rowIdKey
		});
		return (e, a) => {
			let o = H("VCheckbox");
			return L(), E("div", { class: P(["vui-table-row", W(i)]) }, [
				W(t).props.dragSortable ? (L(), E("div", Lr)) : T("", !0),
				W(t).props.selectable ? (L(), E("div", Rr, [k(o, {
					checked: W(n),
					disabled: !W(t).rowItemsRef.value?.length,
					onChange: W(r)
				}, null, 8, [
					"checked",
					"disabled",
					"onChange"
				])])) : T("", !0),
				(L(!0), E(S, null, B(W(t).props.colItems, (e) => (L(), w(Ir, {
					key: e.key,
					"col-data": e
				}, null, 8, ["col-data"]))), 128))
			], 2);
		};
	}
}, Br = {
	rowData: {
		type: Object,
		required: !0
	},
	colData: {
		type: Object,
		default: void 0
	}
}, Vr = ({ tableRoot: e, tbodyRow: t }) => {
	let n = C(() => ({ "is-current": t.props.rowData?.[e.props.rowIdKey] === e.props.currentRowId })), r = C(() => e.props.customRow?.({
		row: t.props.rowData,
		col: t.props.colData
	}));
	function i(n) {
		e.emits("row-click", {
			event: n,
			row: t.props.rowData
		});
	}
	function a(n) {
		e.emits("row-contextmenu", {
			event: n,
			row: t.props.rowData
		});
	}
	return {
		rowClasses: n,
		customRowAttrs: r,
		onRowClick: i,
		onRowContextmenu: a
	};
}, Hr = {
	rowData: {
		type: Object,
		required: !0
	},
	colData: {
		type: Object,
		required: !0
	}
}, Ur = ({ tableRoot: e, tbodyCell: t }) => ({ cellStyles: C(() => ({ width: `${e.colWidthsRef.value[t.props.colData.key]}px` })) }), Wr = ["title"], Gr = {
	__name: "tbody-cell",
	props: Hr,
	setup(e) {
		let { cellStyles: t } = Ur({
			tableRoot: j("vuiTableRoot", null),
			tbodyCell: { props: e }
		});
		return (e, n) => (L(), E("div", {
			class: P(["vui-table-cell", e.colData.cellClass]),
			style: I(W(t))
		}, [e.$slots.default()[0].children.length ? V(e.$slots, "default", { key: 0 }) : (L(), E("span", {
			key: 1,
			class: "vui-table-cell-inner",
			title: e.rowData[e.colData.key]
		}, U(e.rowData[e.colData.key]), 9, Wr))], 6));
	}
}, Kr = ["draggable"], qr = {
	key: 0,
	class: "vui-table-row-action"
}, Jr = {
	key: 1,
	class: "vui-table-row-action"
}, Yr = {
	__name: "tbody-row",
	props: Br,
	setup(e) {
		let t = j("vuiTableRoot", null), n = e, { rowClasses: r, customRowAttrs: i, onRowClick: a, onRowContextmenu: o } = Vr({
			tableRoot: t,
			tbodyRow: { props: n }
		}), { isSelectedRow: s, toggleRowSelection: l, rowSelectionClasses: u } = Er({
			selectable: t.props.selectable,
			modelSelectedRowIds: t.modelSelectedRowIds,
			rowItemsRef: t.rowItemsRef,
			rowItem: n.rowData,
			rowIdKey: t.props.rowIdKey
		}), { dragClasses: d, onDragStart: f, onDragEnter: p, onDragOver: m, onDrop: h, onDragEnd: g } = Nr({
			dragFlagRef: t.dragFlagRef,
			dragSortable: t.props.dragSortable,
			canDropInto: t.props.canDropInto,
			idKey: t.props.rowIdKey,
			rawItem: n.rowData,
			selectedItemsRef: C(() => s.value ? t.rowItemsRef.value.filter((e) => t.modelSelectedRowIds.value?.includes(e?.[t.props.rowIdKey])) : null),
			emits: t.emits
		});
		return (e, n) => {
			let _ = H("VCheckbox");
			return L(), E("div", N({
				class: [
					"vui-table-row",
					W(r),
					W(u),
					W(d)
				],
				draggable: W(t).props.dragSortable ? !0 : null
			}, W(i), {
				onDragstart: n[0] ||= X((...e) => W(f) && W(f)(...e), ["stop"]),
				onDragend: n[1] ||= X((...e) => W(g) && W(g)(...e), ["stop"]),
				onDragenter: n[2] ||= X((...e) => W(p) && W(p)(...e), ["stop"]),
				onDragover: n[3] ||= X((...e) => W(m) && W(m)(...e), ["stop", "prevent"]),
				onDrop: n[4] ||= X((...e) => W(h) && W(h)(...e), ["stop"]),
				onClick: n[5] ||= (...e) => W(a) && W(a)(...e),
				onContextmenu: n[6] ||= X((...e) => W(o) && W(o)(...e), ["prevent"])
			}), [
				W(t).props.dragSortable ? (L(), E("div", qr, [k(W(c), {
					icon: b,
					class: "vui-table-row-drag-handle"
				})])) : T("", !0),
				W(t).props.selectable ? (L(), E("div", Jr, [k(_, {
					checked: W(s),
					onChange: W(l)
				}, null, 8, ["checked", "onChange"])])) : T("", !0),
				(L(!0), E(S, null, B(W(t).props.colItems, (t) => (L(), w(Gr, {
					key: t.key,
					"row-data": e.rowData,
					"col-data": t
				}, {
					default: J(() => [V(e.$slots, "default", { col: t })]),
					_: 2
				}, 1032, ["row-data", "col-data"]))), 128))
			], 16, Kr);
		};
	}
}, Xr = ({ dragFlagRef: e, dragSelectAreaWidth: t, parentElRef: n, rowItemsRef: r, rowHeight: i, rowIdKey: a }) => {
	let o = j("vuiOnSelectionChange", null), s = C(() => e.value === "select"), c = null, l = z({
		x: 0,
		y: 0
	}), u = z({
		x: 0,
		y: 0
	}), d = C(() => ({
		x1: Math.min(l.value.x, u.value.x),
		x2: Math.max(l.value.x, u.value.x),
		y1: Math.min(l.value.y, u.value.y),
		y2: Math.max(l.value.y, u.value.y)
	})), f = C(() => ({
		left: `${d.value.x1}px`,
		top: `${d.value.y1}px`,
		width: `${d.value.x2 - d.value.x1}px`,
		height: `${d.value.y2 - d.value.y1}px`
	})), p = null, m = null;
	Z(n, "mousedown", (t) => {
		e.value || t.button === 0 && t.target === t.currentTarget && (e.value = "select", c = n.value.getBoundingClientRect(), l.value = {
			x: t.clientX - c.x,
			y: t.clientY - c.y + n.value.scrollTop
		}, u.value = { ...l.value }, p = Z("mousemove", h), m = Z("mouseup", g));
	});
	function h(t) {
		if (e.value !== "select") return;
		let { scrollTop: r } = n.value;
		u.value = {
			x: Math.max(0, Math.min(t.clientX - c.x, c.width)),
			y: Math.max(0, Math.min(t.clientY - c.y + r, c.height + r))
		}, _();
	}
	function g() {
		e.value === "select" && (e.value = null, p(), m());
	}
	function _() {
		let e = r.value.filter((e, n) => {
			let r = {
				x1: t,
				x2: c?.width - t,
				y1: i * n,
				y2: i * (n + 1)
			}, a = r.x1 < d.value.x2 && r.x2 > d.value.x1, o = r.y1 < d.value.y2 && r.y2 > d.value.y1;
			return a && o;
		});
		o(e, e.map((e) => e?.[a]));
	}
	return {
		isShowBox: s,
		boxStyles: f
	};
}, Zr = {
	__name: "drag-select",
	setup(e) {
		let t = j("vuiTableRoot", null), { isShowBox: n, boxStyles: r } = Xr({
			dragFlagRef: t.dragFlagRef,
			dragSelectAreaWidth: t.props.dragSelectAreaWidth,
			parentElRef: t.tbodyElRef,
			rowItemsRef: t.rowItemsRef,
			rowHeight: t.props.rowHeight,
			rowIdKey: t.props.rowIdKey
		});
		return (e, t) => W(n) ? (L(), E("div", {
			key: 0,
			class: "vui-table-select-rect",
			style: I(W(r))
		}, null, 4)) : T("", !0);
	}
}, Qr = {
	__name: "table",
	props: /* @__PURE__ */ M({
		..._r,
		...yr,
		...Cr,
		...Dr,
		...jr
	}, {
		selectedRowIds: Sr.selectedRowIds,
		selectedRowIdsModifiers: {}
	}),
	emits: /* @__PURE__ */ M([
		...gr,
		...xr,
		...Ar
	], ["update:selectedRowIds"]),
	setup(e, { emit: t }) {
		let n = K("tableElRef"), r = G(e, "selectedRowIds", Sr.selectedRowIds), i = e, a = t, o = z(null), s = z(null), { list: c, containerProps: l, wrapperProps: u } = Oe(o, {
			itemHeight: i.rowHeight,
			overscan: 20
		}), { rootClasses: d, rootStyles: f, headerStyles: p, colWidthsRef: m } = vr({
			tableElRef: n,
			tbodyElRef: l.ref,
			props: i
		}), { renderState: h } = br({
			type: "table",
			props: i,
			dataRef: o
		}), { selectionRootClasses: g, selectionRootStyles: _, selectionInnerStyles: v } = wr({
			props: i,
			dragFlagRef: s,
			modelSelectedRowIds: r,
			emits: a
		}), { sortedRows: y } = Or({ props: i }), { dragSortRootClasses: b } = Mr({
			dragFlagRef: s,
			dragSortGroup: i.dragSortGroup
		});
		return ye(() => {
			o.value = y.value || i.rowItems || [];
		}), R("vuiTableRoot", {
			tbodyElRef: l.ref,
			modelSelectedRowIds: r,
			props: i,
			emits: a,
			rowItemsRef: o,
			dragFlagRef: s,
			colWidthsRef: m
		}), (e, t) => (L(), E("div", {
			ref_key: "tableElRef",
			ref: n,
			class: P([
				"vui-table",
				W(d),
				W(g),
				W(b)
			]),
			style: I({
				...W(f),
				...W(_)
			})
		}, [D("div", {
			class: "vui-table-header",
			style: I({
				...W(p),
				...W(v)
			})
		}, [k(zr)], 4), W(h) ? (L(), w(pe(W(h)), { key: 0 })) : (L(), E("div", N({
			key: 1,
			class: "vui-table-body"
		}, W(l), { style: W(v) }), [e.selectable && e.dragSelectable ? (L(), w(Zr, { key: 0 })) : T("", !0), D("div", N({ class: "vui-table-view" }, W(u)), [(L(!0), E(S, null, B(W(c), ({ data: t }) => (L(), w(Yr, {
			key: t[e.rowIdKey],
			"row-data": t
		}, {
			default: J(({ col: n }) => [V(e.$slots, "default", {
				row: t,
				col: n
			})]),
			_: 2
		}, 1032, ["row-data"]))), 128))], 16)], 16))], 6));
	}
}, $r = /* @__PURE__ */ n({ VTable: () => Qr }), ei = { class: "vui-tabs" }, ti = { class: "vui-tabs-header" }, ni = { class: "vui-tabs-nav" }, ri = ["onClick"], ii = { class: "vui-tabs-content" }, ai = {
	__name: "tabs",
	props: /* @__PURE__ */ M({ items: {
		type: Array,
		default: null
	} }, {
		name: {
			type: [String, Number],
			default: ""
		},
		nameModifiers: {}
	}),
	emits: /* @__PURE__ */ M(["change"], ["update:name"]),
	setup(e, { emit: t }) {
		let n = t, r = G(e, "name"), i = e, a = z(null), o = (e) => {
			a.value ||= [], a.value.some((t) => t.name === e.name) || a.value.push(e), r.value ||= e.name;
		}, s = C(() => a.value || i.items || []);
		q(r, (e, t) => {
			n("change", { name: e });
		});
		let c = (e) => {
			r.value = e;
		}, l = K("navItemEls"), u = C(() => {
			let e = s.value.findIndex((e) => e.name === r.value);
			if (e === -1) return null;
			let t = l.value?.[e];
			return t ? {
				left: `${t.offsetLeft}px`,
				width: `${t.offsetWidth}px`
			} : null;
		});
		return R("vuiTabsRoot", {
			activeName: r,
			registerPane: o
		}), (e, t) => (L(), E("div", ei, [D("div", ti, [D("div", ni, [(L(!0), E(S, null, B(s.value, (e) => (L(), E("div", {
			ref_for: !0,
			ref_key: "navItemEls",
			ref: l,
			key: e.name,
			class: P(["vui-tabs-nav-item", { "is-active": r.value === e.name }]),
			onClick: (t) => c(e.name)
		}, U(e.label), 11, ri))), 128))]), u.value ? (L(), E("div", {
			key: 0,
			class: "vui-tabs-bar",
			style: I(u.value)
		}, null, 4)) : T("", !0)]), D("div", ii, [V(e.$slots, "default")])]));
	}
}, oi = { class: "vui-tab-pane" }, si = {
	__name: "tab-pane",
	props: {
		name: {
			type: [String, Number],
			required: !0
		},
		label: {
			type: String,
			required: !0
		}
	},
	setup(e) {
		let t = j("vuiTabsRoot"), n = e;
		return t.registerPane(n), (n, r) => Y((L(), E("div", oi, [V(n.$slots, "default")], 512)), [[ve, W(t).activeName.value === e.name]]);
	}
}, ci = /* @__PURE__ */ n({
	VTabPane: () => si,
	VTabs: () => ai
}), li = {
	key: 3,
	class: "vui-textarea-count"
}, ui = {
	__name: "textarea",
	props: /* @__PURE__ */ M({
		...bn.common,
		...bn.textarea
	}, {
		value: yn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ M(vn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = K("wrapperElRef"), i = K("inputElRef"), a = G(e, "value", yn.value), o = e, { statusClasses: l, isShowClearIcon: u, innerProps: d, countText: f, onClickClearIcon: p, onEvent: m } = xn({
			type: "textarea",
			wrapperElRef: r,
			inputElRef: i,
			modelValue: a,
			props: o,
			emits: n
		}), h = C(() => s(o.prefixIcon, o.prefixIconProps)), g = C(() => s(o.suffixIcon, o.suffixIconProps));
		return (e, n) => (L(), E("div", {
			ref_key: "wrapperElRef",
			ref: r,
			class: P([
				"vui-textarea",
				W(l),
				{
					"vui-textarea--prefix": h.value,
					"vui-textarea--suffix": g.value || e.clearable
				}
			])
		}, [
			h.value ? (L(), w(W(c), N({ key: 0 }, h.value, { class: "vui-textarea-prefix" }), null, 16)) : T("", !0),
			Y(D("textarea", N({
				ref_key: "inputElRef",
				ref: i,
				"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
				class: "vui-textarea-inner"
			}, W(d), {
				onFocus: n[1] ||= (e) => W(m)("focus", e),
				onBlur: n[2] ||= (e) => W(m)("blur", e),
				onInput: n[3] ||= (e) => W(m)("input", e),
				onChange: n[4] ||= (e) => W(m)("change", e),
				onKeyup: n[5] ||= be((e) => W(m)("enter", e), ["enter"])
			}), null, 16), [[_e, a.value]]),
			W(u) ? (L(), w(W(c), {
				key: 1,
				class: "vui-textarea-suffix vui-textarea-icon--clear",
				icon: t,
				onClick: X(W(p), ["stop"])
			}, null, 8, ["onClick"])) : g.value ? (L(), w(W(c), N({
				key: 2,
				class: "vui-textarea-suffix"
			}, g.value), null, 16)) : T("", !0),
			W(f) ? (L(), E("div", li, U(W(f)), 1)) : T("", !0)
		], 2));
	}
}, di = /* @__PURE__ */ n({ VTextarea: () => ui }), fi = /* @__PURE__ */ n({ VToast: () => o }), pi = /* @__PURE__ */ n({ VTooltip: () => ir }), mi = ["node-click", "node-contextmenu"], hi = {
	data: {
		type: Array,
		default: void 0
	},
	treeHeight: {
		type: [String, Number],
		default: void 0
	},
	treeIndent: {
		type: Number,
		default: 0
	},
	nodeHeight: {
		type: Number,
		default: 30
	},
	nodeIndent: {
		type: Number,
		default: 15
	},
	currentNodeId: {
		type: [String, Number],
		default: void 0
	},
	expandedNodeIds: {
		type: Array,
		default: void 0
	},
	customNode: {
		type: Function,
		default: void 0
	},
	isLeaf: {
		type: Function,
		default: void 0
	},
	loadData: {
		type: Function,
		default: void 0
	},
	filterMethod: {
		type: Function,
		default: () => !0
	}
}, gi = ({ props: e, treeDataRef: t }) => {
	let n = fe(/* @__PURE__ */ new Map()), r = C(() => i());
	function i() {
		let r = [];
		i(t.value);
		function i(t, o = 0) {
			t?.forEach((t) => {
				if (!e.filterMethod({ item: t })) return;
				let s = n.get(t.id), c = {
					data: t,
					level: o,
					isExpanded: s ? s.isExpanded : e.expandedNodeIds?.includes(t.id),
					isLeaf: e.isLeaf?.(t) || !1,
					isLoading: s?.isLoading || !1,
					isLoaded: s?.isLoaded || !1
				};
				r.push(c), n.set(t.id, c), c.isExpanded && (e.isLeaf ? c.isLeaf && (c.isLoaded ? i(t.children, o + 1) : a(c)) : t.children && i(t.children, o + 1));
			});
		}
		return r;
	}
	async function a(t) {
		let { data: r, isLoading: i, isLoaded: a } = t;
		if (i || a) return;
		n.set(r.id, {
			...t,
			isLoading: !0
		});
		let o = await e.loadData?.({
			node: t,
			item: t.data
		});
		n.set(r.id, {
			...t,
			isExpanded: o,
			isLoading: !1,
			isLoaded: o
		});
	}
	return {
		nodeMap: n,
		flattenedNodes: r,
		loadChildren: a,
		treeRootStyles: C(() => ({
			height: `${e.treeHeight}px`,
			"--vui-tree-node-height": `${e.nodeHeight}px`
		}))
	};
}, _i = {
	nodeData: {
		type: Object,
		required: !0
	},
	itemData: {
		type: Object,
		required: !0
	}
}, vi = ({ treeRoot: e, treeNode: t }) => {
	let n = C(() => t.props.nodeData), r = C(() => t.props.itemData), i = C(() => r.value.id === e.props.currentNodeId), a = C(() => {
		let t = !!r.value.children?.filter((t) => e.props.filterMethod({ item: t }))?.length;
		return e.props.isLeaf ? n.value.isLeaf ? n.value.isLoaded ? t : !0 : !1 : t;
	}), o = C(() => n.value.isExpanded ? 90 : null);
	async function s() {
		if (!a.value) return;
		let { isExpanded: t, isLeaf: i, isLoaded: o } = n.value;
		!t && i && !o ? e.loadChildren(n.value) : e.nodeMap.set(r.value.id, {
			...n.value,
			isExpanded: !t
		});
	}
	function c(t) {
		e.emits("node-click", {
			event: t,
			node: n.value,
			item: r.value
		}), s();
	}
	function l(t) {
		e.emits("node-contextmenu", {
			event: t,
			node: n.value,
			item: r.value
		});
	}
	return {
		isShowExpand: a,
		expandIconRotate: o,
		toggleChildren: s,
		onNodeClick: c,
		onNodeContextmenu: l,
		nodeClasses: C(() => ({ "is-current": i.value })),
		nodeStyles: C(() => ({ paddingLeft: `${e.props.treeIndent + e.props.nodeIndent * n.value.level}px` })),
		customNodeAttrs: C(() => e.props.customNode?.({
			node: n.value,
			item: r.value
		}))
	};
}, yi = ["draggable"], bi = { class: "vui-tree-node-placeholder" }, xi = ["title"], Si = {
	key: 2,
	class: "vui-tree-node-action"
}, Ci = {
	__name: "tree-node",
	props: _i,
	setup(e) {
		let t = j("vuiTreeRoot", null), n = e, { isShowExpand: r, expandIconRotate: i, toggleChildren: a, onNodeClick: o, onNodeContextmenu: s, nodeClasses: l, nodeStyles: u, customNodeAttrs: d } = vi({
			treeRoot: t,
			treeNode: { props: n }
		}), { dragClasses: f, onDragStart: p, onDragEnter: m, onDragOver: h, onDrop: g, onDragEnd: _ } = Nr({
			dragFlagRef: t.dragFlagRef,
			dragSortable: t.props.dragSortable,
			canDropInto: t.props.canDropInto,
			idKey: "id",
			rawItem: n.itemData,
			selectedItemsRef: C(() => null),
			emits: t.emits
		});
		return (e, n) => (L(), E("div", N({
			class: [
				"vui-tree-node",
				W(l),
				W(f)
			],
			style: W(u),
			draggable: W(t).props.dragSortable
		}, W(d), {
			onDragstart: n[0] ||= X((...e) => W(p) && W(p)(...e), ["stop"]),
			onDragend: n[1] ||= X((...e) => W(_) && W(_)(...e), ["stop"]),
			onDragenter: n[2] ||= X((...e) => W(m) && W(m)(...e), ["stop"]),
			onDragover: n[3] ||= X((...e) => W(h) && W(h)(...e), ["stop", "prevent"]),
			onDrop: n[4] ||= X((...e) => W(g) && W(g)(...e), ["stop"]),
			onClick: n[5] ||= (...e) => W(o) && W(o)(...e),
			onContextmenu: n[6] ||= X((...e) => W(s) && W(s)(...e), ["prevent"])
		}), [
			D("div", bi, [e.nodeData.isLoading ? (L(), w(W(c), {
				key: 0,
				class: "vui-tree-node-loading",
				icon: x,
				spin: !0
			})) : W(r) ? (L(), w(W(c), {
				key: 1,
				class: "vui-tree-node-expand",
				icon: te,
				rotate: W(i),
				onClick: X(W(a), ["stop"])
			}, null, 8, ["rotate", "onClick"])) : T("", !0)]),
			e.$slots.default ? V(e.$slots, "default", { key: 0 }) : (L(), E("div", {
				key: 1,
				class: "vui-tree-node-inner",
				title: e.nodeData.data.title
			}, U(e.nodeData.data.title), 9, xi)),
			W(t).props.dragSortable ? (L(), E("div", Si, [k(W(c), {
				icon: b,
				class: "vui-tree-node-drag-handle"
			})])) : T("", !0)
		], 16, yi));
	}
}, wi = {
	__name: "tree",
	props: {
		...hi,
		...yr,
		...jr
	},
	emits: [...mi, ...Ar],
	setup(e, { emit: t }) {
		let n = e, r = t, i = z(null), a = z(n.data);
		q(() => n.data, (e) => a.value = e);
		let { nodeMap: o, flattenedNodes: s, loadChildren: c, treeRootStyles: l } = gi({
			props: n,
			treeDataRef: a
		}), { list: u, containerProps: d, wrapperProps: f } = Oe(s, {
			itemHeight: n.nodeHeight,
			overscan: 20
		}), { renderState: p } = br({
			type: "tree",
			props: n,
			dataRef: a
		}), { dragSortRootClasses: m } = Mr({
			dragFlagRef: i,
			dragSortGroup: n.dragSortGroup
		});
		return R("vuiTreeRoot", {
			props: n,
			emits: r,
			nodeMap: o,
			loadChildren: c,
			dragFlagRef: i
		}), (e, t) => (L(), E("div", N({
			class: ["vui-tree", W(m)],
			style: W(l)
		}, W(d)), [W(p) ? (L(), w(pe(W(p)), { key: 0 })) : (L(), E("div", N({
			key: 1,
			class: "vui-tree-view"
		}, W(f)), [(L(!0), E(S, null, B(W(u), ({ data: t }) => (L(), w(Ci, {
			key: t.data.id,
			"node-data": t,
			"item-data": t.data
		}, ce({ _: 2 }, [e.$slots.default ? {
			name: "default",
			fn: J(() => [V(e.$slots, "default", {
				node: t,
				item: t.data
			})]),
			key: "0"
		} : void 0]), 1032, ["node-data", "item-data"]))), 128))], 16))], 16));
	}
}, Ti = /* @__PURE__ */ Object.assign({
	"./@common/index.js": l,
	"./button/index.js": Pe,
	"./checkbox/index.js": qe,
	"./dialog/index.js": $e,
	"./dragbox/index.js": at,
	"./drawer/index.js": st,
	"./dropdown/index.js": Pt,
	"./empty/index.js": Rt,
	"./form/index.js": en,
	"./icon/index.js": i,
	"./image/index.js": _n,
	"./input/index.js": En,
	"./loading/index.js": On,
	"./overlay/index.js": Nn,
	"./popover/index.js": Pn,
	"./progress/index.js": Bn,
	"./radio/index.js": Un,
	"./row/index.js": qn,
	"./select/index.js": er,
	"./skeleton/index.js": fn,
	"./slider/index.js": cr,
	"./switch/index.js": hr,
	"./table/index.js": $r,
	"./tabs/index.js": ci,
	"./textarea/index.js": di,
	"./toast/index.js": fi,
	"./tooltip/index.js": pi,
	"./tree/index.js": /* @__PURE__ */ n({ VTree: () => wi })
}), Ei = { install: (e) => {
	ne(e, Ti), u(e);
} };
//#endregion
export { Ve as A, $ as C, it as D, ot as E, Qe as O, qt as S, St as T, Tn as _, ai as a, sn as b, sr as c, Kn as d, Hn as f, Dn as g, Mn as h, si as i, Ne as j, Ke as k, ir as l, zn as m, wi as n, Qr as o, Vn as p, ui as r, mr as s, Ei as t, $n as u, gn as v, Nt as w, $t as x, dn as y };
