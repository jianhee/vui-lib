import { l as e, s as t, u as n } from "./info-OALuZHSF.mjs";
import { r } from "./data-string-odsYn-HJ.mjs";
import { a as i, c as a, i as o, l as s, o as c, s as l, t as u, u as d } from "./toast-DXA6f6N_.mjs";
import { l as f, o as p } from "./utils-Cf6rSCt8.mjs";
import { _ as m, a as h, d as g, h as _, l as v, p as y, r as b, s as x, t as S, y as C } from "./caret-right-MRGOidtG.mjs";
import { n as ee } from "./use-components-DaYeb9Vo.mjs";
import { Comment as te, Fragment as w, Teleport as ne, Text as re, Transition as ie, cloneVNode as ae, computed as T, createBlock as E, createCommentVNode as D, createElementBlock as O, createElementVNode as k, createSlots as oe, createTextVNode as A, createVNode as j, defineComponent as se, h as M, inject as N, mergeModels as P, mergeProps as F, nextTick as ce, normalizeClass as I, normalizeProps as L, normalizeStyle as R, onUnmounted as le, openBlock as z, provide as B, reactive as ue, ref as V, renderList as H, renderSlot as U, resolveComponent as W, resolveDynamicComponent as de, toDisplayString as G, toRef as fe, unref as K, useModel as q, useSlots as pe, useTemplateRef as J, vModelDynamic as me, vModelText as he, vShow as ge, watch as Y, watchEffect as _e, withCtx as X, withDirectives as ve, withKeys as ye, withModifiers as Z } from "vue";
import { onClickOutside as be, useElementBounding as xe, useElementHover as Se, useElementSize as Ce, useEventListener as Q, useFocus as we, useImage as Te, useIntersectionObserver as Ee, useStorage as De, useVirtualList as Oe, useWindowSize as ke } from "@vueuse/core";
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
	rootTag: T(() => e.href ? "a" : "button"),
	rootAttrs: T(() => {
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
		let t = e, { rootTag: n, rootAttrs: r } = Me({ props: t }), i = T(() => s(t.icon, t.iconProps));
		return (e, t) => (z(), E(de(K(n)), F({ class: "vui-btn" }, K(r)), {
			default: X(() => [
				e.loading ? (z(), E(K(c), {
					key: 0,
					icon: C,
					spin: !0
				})) : D("", !0),
				i.value ? (z(), E(K(c), L(F({ key: 1 }, i.value)), null, 16)) : D("", !0),
				U(e.$slots, "default")
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
	let t = N("vuiFormRoot", null), n = N("vuiCheckboxType", "checkbox"), r = N("vuiCheckboxGroup", null), i = n === "checkbox", a = T(() => e.props.type === "button" || r?.props.optionType === "button"), o = T(() => e.props.disabled || r?.props?.disabled || t?.props?.disabled), s = T(() => e.props.readonly || r?.props?.readonly || t?.props?.readonly), c = T(() => e.props.label || e.props.formattedOption?.label || ""), l = T(() => e.props.formattedOption.value), u = T(() => {
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
	let g = T(() => a.value ? !1 : r ? r.props.optionBlock && !r.props.optionInline : e.props.block || !e.props.inline);
	return {
		isBtn: a,
		isDisabled: o,
		isReadonly: s,
		isChecked: u,
		optionLabel: c,
		rootClasses: T(() => [a.value ? `vui-${n}-btn` : `vui-${n}`, {
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
	props: /* @__PURE__ */ P({
		...Le,
		...Re
	}, {
		checked: Ie.checked,
		checkedModifiers: {}
	}),
	emits: /* @__PURE__ */ P(Fe, ["update:checked"]),
	setup(e, { emit: t }) {
		let n = N("vuiCheckboxType", "checkbox"), { isBtn: r, isDisabled: i, isReadonly: a, isChecked: o, optionLabel: s, rootClasses: c, onCheckedChange: l } = ze({
			modelChecked: q(e, "checked", Ie.checked),
			props: e,
			emits: t
		});
		return (e, t) => (z(), O("label", { class: I(K(c)) }, [k("input", {
			class: I(`vui-${K(n)}-input`),
			type: K(n),
			checked: K(o),
			disabled: K(i) || K(a),
			onChange: t[0] ||= (...e) => K(l) && K(l)(...e)
		}, null, 42, Be), K(r) ? (z(), O(w, { key: 0 }, [e.$slots?.default?.()[0].children.length ? U(e.$slots, "default", { key: 0 }) : (z(), O(w, { key: 1 }, [A(G(K(s)), 1)], 64))], 64)) : (z(), O(w, { key: 1 }, [k("div", { class: I(`vui-${K(n)}-icon`) }, null, 2), e.$slots?.default?.()[0].children.length ? (z(), O("div", {
			key: 0,
			class: I(`vui-${K(n)}-label`)
		}, [U(e.$slots, "default")], 2)) : K(s) ? (z(), O("div", {
			key: 1,
			class: I(`vui-${K(n)}-label`)
		}, G(K(s)), 3)) : D("", !0)], 64))], 2));
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
}, Ge = ({ props: e }) => ({ formattedOptions: T(() => e.options.map((e) => typeof e == "object" ? {
	__vuiCheckboxOptionRawData__: e,
	...e,
	label: e.label || e.value
} : {
	__vuiCheckboxOptionRawData__: e,
	label: e,
	value: e
})) }), Ke = {
	__name: "checkbox-group",
	props: /* @__PURE__ */ P({
		...We,
		...Re
	}, {
		value: Ue.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ P(He, ["update:value"]),
	setup(e, { emit: t }) {
		let n = N("vuiCheckboxType", "checkbox"), r = q(e, "value", Ue.value), i = e, a = t, { formattedOptions: o } = Ge({ props: i });
		return B("vuiCheckboxGroup", {
			modelValue: r,
			props: i,
			emits: a
		}), (e, t) => {
			let r = W("VCheckbox");
			return z(), O("div", { class: I(`vui-${K(n)}-group`) }, [(z(!0), O(w, null, H(K(o), (t, n) => (z(), E(r, {
				key: n,
				"formatted-option": t,
				disabled: t.disabled
			}, {
				default: X(() => [U(e.$slots, "default", { option: t.__vuiCheckboxOptionRawData__ })]),
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
	let i = e === "dialog", o = T(() => i ? [n.dialogClass] : [n.drawerClass, `vui-drawer--${n.placement}`]), s = T(() => {
		let t = a(n.width, "px");
		return { [`--vui-${e}-width`]: t };
	}), c = T(() => n.showCloseBtn && n.showClose);
	function l() {
		n.closeOnClickModal && u();
	}
	Q("keydown", (e) => {
		n.closeOnPressEscape && t.value && e.key === "Escape" && u();
	});
	function u() {
		t.value = !1;
	}
	return Y(t, (e) => {
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
	props: /* @__PURE__ */ P(Xe, {
		visible: Ye.visible,
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ P(Je, ["update:visible"]),
	setup(e, { emit: t }) {
		let n = N("vuiDialogType", "dialog"), r = q(e, "visible", Ye.visible), i = e, a = t, { dialogClasses: o, dialogStyles: s, isShowCloseBtn: l, onOverlayClick: u, closeDialog: d } = Ze({
			dialogType: n,
			modelVisible: r,
			props: i,
			emits: a
		});
		return (e, t) => {
			let i = W("VOverlay");
			return z(), E(ne, { to: "body" }, [j(ie, {
				name: `vui-${K(n)}`,
				onAfterEnter: t[0] ||= (e) => a("opened"),
				onAfterLeave: t[1] ||= (e) => a("closed")
			}, {
				default: X(() => [r.value || e.renderType === "v-show" ? ve((z(), E(i, {
					key: 0,
					class: I(`vui-${K(n)}-overlay`),
					onClick: Z(K(u), ["self"])
				}, {
					default: X(() => [k("div", F(e.$attrs, {
						class: [`vui-${K(n)}`, K(o)],
						style: K(s)
					}), [
						K(l) ? (z(), E(K(c), {
							key: 0,
							class: I(`vui-${K(n)}-close`),
							icon: m,
							onClick: K(d)
						}, null, 8, ["class", "onClick"])) : D("", !0),
						e.$slots.header || e.title ? (z(), O("div", {
							key: 1,
							class: I([`vui-${K(n)}-header`, e.headerClass])
						}, [e.$slots.header ? U(e.$slots, "header", { key: 0 }) : e.title ? (z(), O("span", {
							key: 1,
							class: I(`vui-${K(n)}-title`)
						}, G(e.title), 3)) : D("", !0)], 2)) : D("", !0),
						e.$slots.default ? (z(), O("div", {
							key: 2,
							class: I([`vui-${K(n)}-body`, e.bodyClass])
						}, [U(e.$slots, "default")], 2)) : D("", !0),
						e.$slots.footer ? (z(), O("div", {
							key: 3,
							class: I([`vui-${K(n)}-footer`, e.footerClass])
						}, [U(e.$slots, "footer")], 2)) : D("", !0)
					], 16)]),
					_: 3
				}, 8, ["class", "onClick"])), [[ge, r.value]]) : D("", !0)]),
				_: 3
			}, 8, ["name"])]);
		};
	}
}), $e = /* @__PURE__ */ n({ VDialog: () => Qe }), $ = {
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
	let a = T(() => n.movable && n.enabled), { width: o, height: s } = ke(), c = {
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
	Q(T(() => n.moveHandle || e.value), "mousedown", (r) => {
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
		}, u = Q("mousemove", f), d = Q("mouseup", p);
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
		moveClasses: T(() => ({ "is-movable": a.value })),
		moveStyles: T(() => n.enabled ? {
			cursor: n.movable && !n.moveHandle ? "move" : null,
			left: `${r.value}px`,
			top: `${i.value}px`
		} : null)
	};
}, nt = ({ boxElRef: e, dragFlagRef: t, props: n, modelLeft: r, modelTop: i, modelWidth: a, modelHeight: o }) => {
	let s = T(() => n.resizable && n.enabled), c = V(null), l = {
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
		}, d = o === "fixed", f = Q("mousemove", h), p = Q("mouseup", g);
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
		resizeClasses: T(() => ({ "is-resizable": s.value })),
		resizeStyles: T(() => n.enabled ? {
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
	props: /* @__PURE__ */ P(et, {
		left: $,
		leftModifiers: {},
		top: $,
		topModifiers: {},
		width: $,
		widthModifiers: {},
		height: $,
		heightModifiers: {}
	}),
	emits: [
		"update:left",
		"update:top",
		"update:width",
		"update:height"
	],
	setup(e) {
		let t = J("boxElRef"), n = e, r = q(e, "left", $), i = q(e, "top", $), a = q(e, "width", $), o = q(e, "height", $), s = V(null), { moveClasses: c, moveStyles: l } = tt({
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
		return (e, n) => (z(), O("div", {
			ref_key: "boxElRef",
			ref: t,
			class: I(["vui-dragbox", {
				...K(c),
				...K(d),
				"is-dragging": !!s.value
			}]),
			style: R({
				...K(l),
				...K(f)
			})
		}, [U(e.$slots, "default"), K(u) ? (z(!0), O(w, { key: 0 }, H(e.resizeHandles, (e) => (z(), O("div", {
			key: e,
			class: I([
				"vui-dragbox-handle",
				`vui-dragbox-handle-${e}`,
				{ "is-active": e === K(p) }
			]),
			onMousedown: Z((t) => K(m)(t, e), [
				"left",
				"prevent",
				"stop"
			])
		}, null, 42, rt))), 128)) : D("", !0)], 6));
	}
}, at = /* @__PURE__ */ n({ VDragbox: () => it }), ot = { setup(e, { slots: t }) {
	return B("vuiDialogType", "drawer"), () => M(Qe, null, t);
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
}, dt = ({ props: e }) => ({ formattedItems: T(() => (e.options || e.items || []).map((e) => typeof e == "object" ? {
	__vuiDropdownItemRawData__: e,
	...e,
	label: e.label || e.title
} : {
	__vuiDropdownItemRawData__: e,
	label: e
})) }), ft = ({ formattedItem: e }) => {
	let t = N("vuiDropdownRoot", null), n = T(() => t.props.selectable ? e.key === t.modelSelectedKey.value : !1);
	return {
		formattedItem: e,
		isSelected: n,
		itemClasses: T(() => [{ "is-active": n.value }, e.className]),
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
	let s = T(() => i.triggerElement || e.value), c = T(() => ({
		"--vui-popover-width": a(i.width, "px"),
		"--vui-popover-max-height": a(i.maxHeight, "px")
	})), l = null, u = null, d = pt();
	Q(s, "mouseenter", f), Q(s, "mouseleave", f), Q(t, "mouseenter", f), Q(t, "mouseleave", f);
	function f(e) {
		i.trigger === "hover" && h({
			source: "hover",
			newState: e.type === "mouseenter",
			refEl: s.value,
			delay: 150
		});
	}
	Q(s, "click", () => {
		i.trigger === "click" ? h({
			source: "click",
			newState: !r.value,
			refEl: s.value
		}) : i.trigger === "contextmenu" && r.value && h({
			source: "click",
			newState: !1
		});
	}), Q(s, "contextmenu", (e) => {
		i.trigger === "contextmenu" && (e.preventDefault(), h({
			source: "contextmenu",
			newState: !r.value,
			refEl: s.value
		}));
	}), be(t, () => {
		i.trigger !== "manual" && r.value && h({
			source: "clickOutside",
			newState: !1,
			delay: 10
		});
	}, { ignore: [s, fe(i, "ignoreElement")] });
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
	Y(r, (e) => {
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
		await ce();
		let a = K(e), s = a?.$el || a;
		s && (r.value || (r.value = !0, o("open")), await ce(), u = null, d.onOpen({
			referenceElement: s,
			contentElement: t.value,
			arrowElement: n.value,
			placement: i.placement
		}));
	}
	async function _() {
		r.value && (r.value = !1, o("close")), await ce(), u = null;
	}
	function v() {
		d.onClose(), o("closed");
	}
	return le(() => _()), {
		popoverStyles: c,
		openByMethod: p,
		closeByMethod: m,
		onAfterLeave: v
	};
}, vt = se({ setup(e, { slots: t, attrs: n }) {
	return () => {
		let e = t.default?.(n);
		if (!e || e.length > 1) return null;
		let r = yt(e);
		return r ? ae(r, n) : null;
	};
} });
function yt(e) {
	if (!e) return null;
	let t = e;
	for (let e of t) {
		if (typeof e == "object") switch (e.type) {
			case te: continue;
			case re:
			case "svg": return bt(e);
			case w: return yt(e.children);
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
	props: /* @__PURE__ */ P(gt, {
		visible: ht.visible,
		visibleModifiers: {}
	}),
	emits: /* @__PURE__ */ P(mt, ["update:visible"]),
	setup(e, { expose: t, emit: n }) {
		let r = J("triggerRef"), i = J("contentElRef"), a = J("arrowElRef"), o = q(e, "visible", ht.visible), s = e, c = n, { popoverStyles: l, openByMethod: u, closeByMethod: d, onAfterLeave: f } = _t({
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
		}), (e, t) => (z(), O(w, null, [e.$slots.default ? (z(), E(K(vt), {
			key: 0,
			ref_key: "triggerRef",
			ref: r
		}, {
			default: X(() => [U(e.$slots, "default", { visible: o.value })]),
			_: 3
		}, 512)) : D("", !0), (z(), E(ne, { to: "body" }, [j(ie, {
			name: "vui-popover",
			onAfterEnter: t[0] ||= (e) => c("opened"),
			onAfterLeave: K(f)
		}, {
			default: X(() => [o.value ? (z(), O("div", F({
				key: 0,
				ref_key: "contentElRef",
				ref: i
			}, e.$attrs, {
				class: ["vui-popover", e.popoverClass],
				style: K(l)
			}), [k("div", xt, [e.$slots.content ? U(e.$slots, "content", {
				key: 0,
				visible: o.value
			}) : (z(), O(w, { key: 1 }, [A(G(e.content), 1)], 64))]), k("span", {
				ref_key: "arrowElRef",
				ref: a,
				class: "vui-popover-arrow",
				"data-popper-arrow": ""
			}, null, 512)], 16)) : D("", !0)]),
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
		let t = e, { isSelected: n, itemClasses: r, onItemClick: i } = ft({ formattedItem: t.formattedItem }), a = T(() => s(t.formattedItem.icon, t.formattedItem.iconProps));
		return (t, o) => (z(), O(w, null, [k("div", {
			class: I(["vui-dropdown-item", K(r)]),
			title: e.formattedItem.label,
			onClick: o[0] ||= (...e) => K(i) && K(i)(...e)
		}, [
			e.formattedItem.image ? (z(), O("img", F({
				key: 0,
				src: e.formattedItem.image
			}, e.formattedItem.imageProps), null, 16, wt)) : D("", !0),
			a.value ? (z(), E(K(c), L(F({ key: 1 }, a.value)), null, 16)) : D("", !0),
			k("span", Tt, G(e.formattedItem.label), 1),
			K(n) ? (z(), E(K(c), {
				key: 2,
				icon: _,
				size: 12
			})) : D("", !0)
		], 10, Ct), e.formattedItem.divider ? (z(), O("div", Et)) : D("", !0)], 64));
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
	props: /* @__PURE__ */ P(ut, {
		selectedKey: lt.selectedKey,
		selectedKeyModifiers: {}
	}),
	emits: /* @__PURE__ */ P(ct, ["update:selectedKey"]),
	setup(e, { expose: t, emit: n }) {
		let r = V(null), i = q(e, "selectedKey", lt.selectedKey), a = e, o = n, { formattedItems: s } = dt({ props: a }), c = (e) => r.value.open(e), l = (e) => r.value.close(e), u = T(() => r.value?.contentEl);
		return B("vuiDropdownRoot", {
			modelSelectedKey: i,
			props: a,
			emits: o,
			open: c,
			close: l
		}), t({
			open: c,
			close: l,
			contentEl: u
		}), (e, t) => (z(), E(St, {
			ref_key: "popoverRef",
			ref: r,
			class: "vui-dropdown",
			placement: e.placement
		}, oe({
			content: X(() => [
				e.$slots.header ? (z(), O("div", Ot, [U(e.$slots, "header")])) : D("", !0),
				e.loading ? (z(), O("div", kt, " Loading... ")) : K(s)?.length ? (z(), O("div", At, [(z(!0), O(w, null, H(K(s), (e, t) => (z(), E(Dt, {
					key: t,
					"formatted-item": e
				}, null, 8, ["formatted-item"]))), 128))])) : e.showEmpty ? (z(), O("div", jt, " No Data ")) : D("", !0),
				e.$slots.footer ? (z(), O("div", Mt, [U(e.$slots, "footer")])) : D("", !0)
			]),
			_: 2
		}, [e.$slots.default ? {
			name: "default",
			fn: X(({ visible: t }) => [U(e.$slots, "default", { visible: t })]),
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
		rootProps: T(() => ({
			class: { [`vui-${t}--${e.direction}`]: e.direction },
			style: { [`--vui-${t}-padding`]: a(e.padding, "px") }
		})),
		computedIconProps: T(() => {
			if (e.image || e.icon === !1 || e.icon === null) return null;
			let t = n ? C : y;
			return s(e.icon === !0 ? t : e.icon, {
				spin: n,
				...e.iconProps || {}
			});
		}),
		descText: T(() => e.description === !1 || e.description === null ? "" : e.description === !0 ? p.isZh ? n ? "加载中..." : "暂无数据" : n ? "Loading..." : "No Data" : e.description)
	};
}, Lt = ["alt", "src"], Rt = {
	__name: "empty",
	props: Ft,
	setup(e) {
		let t = N("vuiStateType", "empty"), { rootProps: n, computedIconProps: r, descText: i } = It({
			props: e,
			stateType: t
		});
		return (e, a) => (z(), O("div", F({ class: `vui-${K(t)}` }, K(n)), [
			e.image ? (z(), O("img", {
				key: 0,
				class: I(`vui-${K(t)}-img`),
				alt: K(t),
				src: e.image,
				style: R(e.imageStyles)
			}, null, 14, Lt)) : K(r) ? (z(), E(K(c), F({
				key: 1,
				class: `vui-${K(t)}-icon`
			}, K(r)), null, 16, ["class"])) : D("", !0),
			K(i) ? (z(), O("div", {
				key: 2,
				class: I(`vui-${K(t)}-desc`)
			}, G(K(i)), 3)) : D("", !0),
			U(e.$slots, "default")
		], 16));
	}
}, zt = /* @__PURE__ */ n({ VEmpty: () => Rt }), Bt = {
	filedInline: {
		type: Boolean,
		default: !1
	},
	filedBlock: {
		type: Boolean,
		default: !0
	}
}, Vt = {
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
}, Ht = ({ formElRef: e, props: t }) => {
	let n = V(!1), { stop: r } = Ee(e, async ([e]) => {
		e?.isIntersecting && (n.value = !0, r());
	}), i = T(() => t.filedInline || !t.filedBlock), o = V(null);
	return _e(() => {
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
		rootClasses: T(() => ({ "vui-form--filed-inline": i.value })),
		rootStyles: T(() => ({ "--vui-form-label-width": a(o.value, "px") }))
	};
}, Ut = {
	model: {
		type: Object,
		default: void 0
	},
	rules: {
		type: Object,
		default: void 0
	}
}, Wt = { prop: {
	type: String,
	default: void 0
} };
async function Gt({ value: e, rules: t, trigger: n }) {
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
var Kt = ({ props: e }) => {
	let t = V({});
	async function n() {
		let n = e.rules || {}, r = Object.keys(n);
		if (!r.length) return !0;
		let i = e.model || {};
		for (let e of r) {
			let r = i[e], a = n[e];
			t.value[e] = await Gt({
				value: r,
				rules: a,
				trigger: "submit"
			});
		}
		return { valid: r.every((e) => t.value[e].valid) };
	}
	return B("vuiFormValidateRes", t), { validate: n };
}, qt = (e) => {
	let t = N("vuiFormRoot", {}), n = T(() => e.props.prop), r = T(() => t.props.model?.[n.value]), i = T(() => t.props.rules?.[n.value]), a = T(() => i.value?.some((e) => e.required)), o = N("vuiFormValidateRes", {}), s = T(() => o.value[n.value]), c = T(() => s.value?.message), l = T(() => ({
		"is-required": a.value,
		"is-error": s.value ? !s.value.valid : !1
	}));
	return Y(r, async (e) => {
		i.value && (o.value[n.value] = await Gt({
			value: e,
			rules: i.value,
			trigger: "input"
		}));
	}, { deep: !0 }), {
		errorMessage: c,
		validClasses: l
	};
}, Jt = {
	__name: "form",
	props: {
		...Bt,
		...Vt,
		...Ut
	},
	setup(e, { expose: t }) {
		let n = J("formElRef"), r = e, { rootClasses: i, rootStyles: a } = Ht({
			formElRef: n,
			props: r
		}), { validate: o } = Kt({ props: r });
		return B("vuiFormRoot", { props: r }), t({ validate: o }), (e, t) => (z(), O("form", {
			ref_key: "formElRef",
			ref: n,
			class: I(["vui-form", K(i)]),
			style: R(K(a)),
			onSubmit: t[0] ||= Z(() => {}, ["prevent"])
		}, [U(e.$slots, "default")], 38));
	}
}, Yt = { label: {
	type: String,
	default: void 0
} };
function Xt(e) {
	let t = N("vuiFormRoot", {});
	return {
		itemClasses: T(() => {
			let n = e.props.labelPosition || t.props.labelPosition || "left", r = e.props.labelAlign || t.props.labelAlign || (n === "left" ? "right" : "left");
			return {
				[`vui-form--label-position-${n}`]: n !== "left",
				[`vui-form--label-align-${r}`]: r !== "left"
			};
		}),
		itemStyles: T(() => ({ "--vui-form-label-width": a(e.props.labelWidth, "px") }))
	};
}
//#endregion
//#region packages/components/form/form-item.vue
var Zt = {
	key: 0,
	class: "vui-form-label"
}, Qt = { class: "vui-form-control" }, $t = {
	key: 0,
	class: "vui-form-error"
}, en = {
	__name: "form-item",
	props: {
		...Yt,
		...Vt,
		...Wt
	},
	setup(e) {
		let t = e, { itemClasses: n, itemStyles: r } = Xt({ props: t }), { validClasses: i, errorMessage: a } = qt({ props: t });
		return (e, t) => (z(), O("div", {
			class: I([
				"vui-form-item",
				K(n),
				K(i)
			]),
			style: R(K(r))
		}, [e.$slots.label || e.label ? (z(), O("label", Zt, [e.$slots.label ? U(e.$slots, "label", { key: 0 }) : (z(), O(w, { key: 1 }, [A(G(e.label), 1)], 64))])) : D("", !0), k("div", Qt, [U(e.$slots, "default"), j(ie, { name: "vui-form-error" }, {
			default: X(() => [K(a) ? (z(), O("div", $t, G(K(a)), 1)) : D("", !0)]),
			_: 1
		})])], 6));
	}
}, tn = /* @__PURE__ */ n({
	VForm: () => Jt,
	VFormItem: () => en
}), nn = {
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
}, rn = ({ props: e }) => {
	let { isLoading: t, error: n } = Te({ src: e.src }), r = T(() => t.value || n.value ? e.aspectRatio || "16/9" : e.aspectRatio);
	return {
		isLoading: t,
		error: n,
		aspectRatio: r,
		rootProps: T(() => ({
			style: {
				"--vui-image-width": a(e.width, "px"),
				"--vui-image-aspect-ratio": r.value,
				"--vui-image-radius": a(e.radius, "px")
			},
			"data-src": n.value ? e.src : null
		}))
	};
}, an = {}, on = { class: "vui-skeleton" };
function sn(e, t) {
	return z(), O("div", on, [U(e.$slots, "default")]);
}
var cn = /* @__PURE__ */ e(an, [["render", sn]]), ln = {
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
}, un = ({ props: e }) => {
	let t = (t) => {
		if (e.width) return e.width;
		if (!(e.rows <= 1)) {
			if (t === 0) return "40%";
			if (t === e.rows - 1) return "60%";
		}
	};
	return { formattedRows: T(() => Array.from({ length: e.rows }, (n, r) => ({
		class: { "vui-skeleton--center": e.center },
		style: {
			width: a(t(r), "px"),
			height: e.aspectRatio ? void 0 : a(e.height, "px"),
			aspectRatio: e.aspectRatio
		}
	}))) };
}, dn = {
	key: 0,
	class: "vui-skeleton-devider"
}, fn = {
	__name: "skeleton-item",
	props: ln,
	setup(e) {
		let { formattedRows: t } = un({ props: e });
		return (e, n) => (z(), O(w, null, [(z(!0), O(w, null, H(K(t), (e, t) => (z(), O("div", F({
			key: t,
			class: "vui-skeleton-item"
		}, { ref_for: !0 }, e), null, 16))), 128)), e.devider ? (z(), O("div", dn)) : D("", !0)], 64));
	}
}, pn = /* @__PURE__ */ n({
	VSkeleton: () => cn,
	VSkeletonItem: () => fn
}), mn = {
	key: 1,
	class: "vui-image-error"
}, hn = ["src"], gn = ["src"], _n = {
	__name: "image",
	props: nn,
	setup(e) {
		let { isLoading: t, error: n, rootProps: r } = rn({ props: e });
		return (e, i) => (z(), O("div", F({ class: "vui-image" }, K(r)), [K(t) ? (z(), E(K(fn), { key: 0 })) : K(n) ? (z(), O("div", mn, [e.errorImage ? (z(), O("img", {
			key: 0,
			src: e.errorImage,
			class: "vui-image-inner"
		}, null, 8, hn)) : (z(), E(K(c), {
			key: 1,
			icon: g
		}))])) : (z(), O("img", {
			key: 2,
			class: "vui-image-inner",
			src: e.src
		}, null, 8, gn))], 16));
	}
}, vn = /* @__PURE__ */ n({ VImage: () => _n }), yn = [
	"focus",
	"blur",
	"input",
	"change",
	"enter",
	"clear"
], bn = { value: {
	type: String,
	default: void 0
} }, xn = {
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
		prefix: {
			type: [String, Number],
			default: void 0
		},
		suffix: {
			type: [String, Number],
			default: void 0
		},
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
		},
		suffixPosition: {
			type: String,
			default: "top"
		}
	}
}, Sn = ({ type: e, wrapperElRef: t, inputElRef: n, modelValue: r, props: i, emits: a }) => {
	let o = N("vuiFormRoot", null), s = e === "input", c = T(() => i.disabled || o?.props?.disabled), l = T(() => i.readonly || o?.props?.readonly), u = Se(t), { focused: d } = we(n);
	Q(t, "click", () => d.value = !c.value);
	let f = T(() => `vui-input--${i.size}`), p = T(() => ({
		"is-disabled": c.value,
		"is-focus": d.value && !c.value
	})), m = T(() => s && i.type === "password" && i.showPasswordToggle && r.value && !c.value), h = V(!1), g = () => h.value = !h.value, _ = T(() => {
		let e = !c.value && !l.value;
		return i.clearable && r.value && e && (u.value || d.value);
	}), v = (e) => {
		r.value = "", d.value = !0, a("clear", {
			event: e,
			value: ""
		});
	}, y = T(() => i.maxlength && i.showWordLimit ? `${r.value?.length || 0}/${i.maxlength}` : null), b = T(() => {
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
	function x(e, t) {
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
		onEvent: x
	};
}, Cn = {
	key: 0,
	class: "vui-input-prepend"
}, wn = {
	key: 1,
	class: "vui-input-count"
}, Tn = {
	key: 1,
	class: "vui-input-append"
}, En = {
	__name: "input",
	props: /* @__PURE__ */ P({
		...xn.common,
		...xn.input
	}, {
		value: bn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ P(yn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = J("wrapperElRef"), i = J("inputElRef"), a = q(e, "value", bn.value), o = e, { sizeClasses: l, statusClasses: u, isShowPasswordToggle: d, isShowClearIcon: f, innerProps: p, countText: m, onClickPasswordIcon: h, onClickClearIcon: g, onEvent: _ } = Sn({
			type: "input",
			wrapperElRef: r,
			inputElRef: i,
			modelValue: a,
			props: o,
			emits: n
		}), y = T(() => s(o.prefixIcon, o.prefixIconProps)), b = T(() => s(o.suffixIcon, o.suffixIconProps));
		return (e, n) => (z(), O("div", { class: I([
			"vui-input",
			K(l),
			{
				"vui-input--prepend": e.$slots.prepend || e.prepend,
				"vui-input--append": e.$slots.append || e.append
			}
		]) }, [
			e.$slots.prepend || e.prepend ? (z(), O("div", Cn, [U(e.$slots, "prepend"), A(" " + G(e.prepend), 1)])) : D("", !0),
			k("div", {
				ref_key: "wrapperElRef",
				ref: r,
				class: I(["vui-input-wrapper", K(u)])
			}, [
				y.value ? (z(), E(K(c), L(F({ key: 0 }, y.value)), null, 16)) : D("", !0),
				U(e.$slots, "prefix"),
				A(" " + G(e.prefix) + " ", 1),
				ve(k("input", F({
					ref_key: "inputElRef",
					ref: i,
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e
				}, K(p), {
					class: "vui-input-inner",
					onFocus: n[1] ||= (e) => K(_)("focus", e),
					onBlur: n[2] ||= (e) => K(_)("blur", e),
					onInput: n[3] ||= (e) => K(_)("input", e),
					onChange: n[4] ||= (e) => K(_)("change", e),
					onKeyup: n[5] ||= ye((e) => K(_)("enter", e), ["enter"])
				}), null, 16), [[me, a.value]]),
				K(m) ? (z(), O("div", wn, G(K(m)), 1)) : D("", !0),
				K(f) ? (z(), E(K(c), {
					key: 2,
					class: "vui-input-icon--clear",
					icon: t,
					onClick: Z(K(g), ["stop"])
				}, null, 8, ["onClick"])) : D("", !0),
				K(d) ? (z(), E(K(c), {
					key: 3,
					class: "vui-input-icon--password",
					icon: K(p).type === "password" ? x : v,
					onClick: Z(K(h), ["stop"])
				}, null, 8, ["icon", "onClick"])) : D("", !0),
				A(" " + G(e.suffix) + " ", 1),
				U(e.$slots, "suffix"),
				b.value ? (z(), E(K(c), L(F({ key: 4 }, b.value)), null, 16)) : D("", !0)
			], 2),
			e.$slots.append || e.append ? (z(), O("div", Tn, [A(G(e.append) + " ", 1), U(e.$slots, "append")])) : D("", !0)
		], 2));
	}
}, Dn = /* @__PURE__ */ n({ VInput: () => En }), On = { setup(e, { slots: t }) {
	return B("vuiStateType", "loading"), () => M(Rt, null, t);
} }, kn = /* @__PURE__ */ n({ VLoading: () => On }), An = {}, jn = { class: "vui-overlay" };
function Mn(e, t) {
	return z(), O("div", jn, [U(e.$slots, "default")]);
}
var Nn = /* @__PURE__ */ e(An, [["render", Mn]]), Pn = /* @__PURE__ */ n({ VOverlay: () => Nn }), Fn = /* @__PURE__ */ n({ VPopover: () => St }), In = {
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
}, Ln = ({ props: e }) => ({
	railStyles: T(() => ({
		"--vui-progress-height": a(e.height, "px"),
		"--vui-progress-radius": a(e.radius, "px")
	})),
	trackStyles: T(() => ({ width: `${e.percentage}%` })),
	suffixText: T(() => d(e.percentage, e.suffix, "%"))
}), Rn = { class: "vui-progress" }, zn = {
	key: 0,
	class: "vui-progress-suffix"
}, Bn = {
	__name: "progress",
	props: In,
	setup(e) {
		let { railStyles: t, trackStyles: n, suffixText: r } = Ln({ props: e });
		return (e, i) => (z(), O("div", Rn, [k("div", {
			class: "vui-progress-rail",
			style: R(K(t))
		}, [k("div", {
			class: "vui-progress-track",
			style: R(K(n))
		}, null, 4)], 4), K(r) ? (z(), O("div", zn, G(K(r)), 1)) : D("", !0)]));
	}
}, Vn = /* @__PURE__ */ n({ VProgress: () => Bn }), Hn = { setup(e, { slots: t }) {
	return B("vuiCheckboxType", "radio"), () => M(Ve, null, t);
} }, Un = { setup(e, { slots: t }) {
	return B("vuiCheckboxType", "radio"), () => M(Ke, null, t);
} }, Wn = /* @__PURE__ */ n({
	VRadio: () => Hn,
	VRadioGroup: () => Un
}), Gn = {
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
}, Kn = ({ props: e }) => ({ rootClasses: T(() => ["vui-row", {
	"is-center": e.center,
	"is-ellipsis": e.ellipsis
}]) }), qn = {
	__name: "row",
	props: Gn,
	setup(e) {
		let { rootClasses: t } = Kn({ props: e });
		return (e, n) => (z(), E(de(e.tag), { class: I(K(t)) }, {
			default: X(() => [U(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}, Jn = /* @__PURE__ */ n({ VRow: () => qn }), Yn = ["change", "clear"], Xn = { value: {
	type: [String, Number],
	default: void 0
} }, Zn = {
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
}, Qn = ({ triggerElRef: e, modelValue: t, props: n, emits: r }) => {
	let i = N("vuiFormRoot", null), a = T(() => n.disabled || i?.props?.disabled), o = T(() => n.readonly || i?.props?.readonly), s = T(() => a.value || o.value), { focused: c } = we(e), l = Se(e), u = T(() => [`vui-select--${n.size}`, {
		"vui-select--placeholder": !g.value,
		"is-disabled": a.value,
		"is-focus": c.value
	}]), d = T(() => n.clearable && t.value && !s.value && (c.value || l.value));
	function f(e) {
		t.value = void 0, c.value = !0, r("clear", {
			event: e,
			value: void 0
		});
	}
	let { width: p } = xe(e), m = T(() => ({ width: `${p.value}px` })), h = T(() => n.options?.map((e) => typeof e == "object" ? {
		__vuiSelectOptionRawData__: e,
		...e,
		label: e.label || e.value,
		key: e.key || e.value
	} : {
		__vuiSelectOptionRawData__: e,
		label: e,
		value: e,
		key: e
	})), g = T(() => h.value?.find((e) => e.value === t.value)?.label);
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
}, $n = { class: "vui-select-inner" }, er = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "select",
	props: /* @__PURE__ */ P(Zn, {
		value: Xn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ P(Yn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = J("triggerElRef"), i = q(e, "value", Xn.value), { triggerClasses: a, popoverDisabled: o, isShowClearIcon: s, dropdownStyles: l, formattedOptions: u, selectedOptionLabel: d, onClickClearIcon: f, onSelectOption: p } = Qn({
			triggerElRef: r,
			modelValue: i,
			props: e,
			emits: n
		});
		return (e, n) => (z(), E(K(Nt), {
			"selected-key": i.value,
			"onUpdate:selectedKey": n[0] ||= (e) => i.value = e,
			items: K(u),
			selectable: "",
			trigger: "click",
			placement: "bottom",
			"close-on-click-item": "",
			disabled: K(o),
			class: "vui-select-dropdown",
			style: R(K(l)),
			onSelect: K(p)
		}, {
			default: X(({ visible: n }) => [k("div", F({
				ref_key: "triggerElRef",
				ref: r,
				class: ["vui-select", K(a)],
				tabindex: "-1"
			}, e.$attrs), [k("span", $n, G(K(d) || e.placeholder), 1), K(s) ? (z(), E(K(c), {
				key: 0,
				class: "vui-select-icon--clear",
				icon: t,
				onClick: Z(K(f), ["stop"])
			}, null, 8, ["onClick"])) : (z(), E(K(c), {
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
}), tr = /* @__PURE__ */ n({ VSelect: () => er }), nr = { value: {
	type: Number,
	default: void 0
} }, rr = {
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
}, ir = ({ railElRef: e, handleElRef: t, tooltipRef: n, modelValue: r, props: i }) => {
	let a = N("vuiFormRoot", null), o = T(() => i.disabled || a?.props?.disabled), s = T(() => i.readonly || a?.props?.readonly), c = T(() => !o.value && !s.value), l = V(!1), u = null, f = null, p = null;
	function m(t) {
		c.value && (l.value || (l.value = !0, u = e.value.getBoundingClientRect(), f = Q("mousemove", h), p = Q("mouseup", g)));
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
	let y = T(() => {
		let e = (r.value - i.min) / (i.max - i.min) * 100;
		return `${Math.round(Math.max(0, Math.min(100, e)))}%`;
	}), b = Se(t), x = T(() => ({
		class: { "is-dragging": l.value },
		style: { left: y.value }
	})), S = T(() => d(r.value, i.tooltip));
	Y([T(() => S.value && (l.value || b.value)), r], ([e]) => {
		e ? n.value.open({ el: t }) : n.value.close();
	});
	let C = T(() => d(r.value, i.suffix)), ee = T(() => ({ width: y.value }));
	return {
		rootClasses: T(() => ({ "is-disabled": o.value })),
		trackStyles: ee,
		handleProps: x,
		tooltipText: S,
		suffixText: C,
		onRailClick: _,
		onDragStart: m
	};
}, ar = { setup(e, { slots: t, expose: n }) {
	let r = V(null);
	return n({
		open: (e) => r.value?.open?.(e),
		close: (e) => r.value?.close?.(e),
		contentEl: T(() => r.value?.contentEl)
	}), () => M(St, {
		ref: r,
		class: "vui-tooltip"
	}, t);
} }, or = { class: "vui-slider-inner" }, sr = {
	key: 0,
	class: "vui-slider-suffix"
}, cr = {
	__name: "slider",
	props: /* @__PURE__ */ P(rr, {
		value: nr.value,
		valueModifiers: {}
	}),
	emits: ["update:value"],
	setup(e) {
		let t = J("railElRef"), n = J("handleElRef"), r = V(null), i = q(e, "value", nr.value), { rootClasses: a, trackStyles: o, handleProps: s, tooltipText: c, suffixText: l, onRailClick: u, onDragStart: d } = ir({
			railElRef: t,
			handleElRef: n,
			tooltipRef: r,
			modelValue: i,
			props: e
		});
		return (e, f) => (z(), O("div", { class: I(["vui-slider", K(a)]) }, [k("div", or, [
			k("div", {
				ref_key: "railElRef",
				ref: t,
				class: "vui-slider-rail",
				onClick: f[0] ||= Z((...e) => K(u) && K(u)(...e), ["stop"])
			}, null, 512),
			k("div", {
				class: "vui-slider-track",
				style: R(K(o)),
				onClick: f[1] ||= Z((...e) => K(u) && K(u)(...e), ["stop"])
			}, null, 4),
			k("div", F({
				ref_key: "handleElRef",
				ref: n,
				class: "vui-slider-handle"
			}, K(s), { onMousedown: f[2] ||= Z((...e) => K(d) && K(d)(...e), ["left", "stop"]) }), null, 16),
			j(ar, {
				ref_key: "tooltipRef",
				ref: r,
				trigger: "manual",
				content: K(c)
			}, null, 8, ["content"])
		]), e.$slots.suffix || K(l) ? (z(), O("div", sr, [A(G(K(l)) + " ", 1), U(e.$slots, "suffix", {
			value: i.value,
			tooltip: K(c)
		})])) : D("", !0)], 2));
	}
}, lr = /* @__PURE__ */ n({ VSlider: () => cr }), ur = ["change"], dr = { checked: {
	type: Boolean,
	default: !1
} }, fr = {
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
}, pr = ({ modelChecked: e, props: t, emits: n }) => {
	let r = N("vuiFormRoot", null), i = T(() => t.disabled || r?.props?.disabled), a = T(() => t.readonly || r?.props?.readonly), o = T(() => ({
		"is-disabled": i.value,
		"is-checked": e.value,
		"is-loading": l.value
	})), s = T(() => ({ "is-active": e.value })), c = T(() => ({ "is-active": !e.value })), l = V(!1);
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
}, mr = { class: "vui-switch-action" }, hr = {
	__name: "switch",
	props: /* @__PURE__ */ P(fr, {
		checked: dr.checked,
		checkedModifiers: {}
	}),
	emits: /* @__PURE__ */ P(ur, ["update:checked"]),
	setup(e, { emit: t }) {
		let { rootClasses: n, activeClasses: r, inactiveClasses: i, isLoading: a, onClick: o } = pr({
			modelChecked: q(e, "checked", dr.checked),
			props: e,
			emits: t
		});
		return (e, t) => (z(), O("div", { class: I(["vui-switch", K(n)]) }, [
			e.inactiveText ? (z(), O("span", {
				key: 0,
				class: I(["vui-switch-label", K(i)])
			}, G(e.inactiveText), 3)) : D("", !0),
			k("div", {
				class: "vui-switch-inner",
				onClick: t[0] ||= (...e) => K(o) && K(o)(...e)
			}, [k("span", mr, [K(a) ? (z(), E(K(c), {
				key: 0,
				class: "vui-switch-loading",
				icon: C,
				spin: !0
			})) : D("", !0)])]),
			e.activeText ? (z(), O("span", {
				key: 1,
				class: I(["vui-switch-label", K(r)])
			}, G(e.activeText), 3)) : D("", !0)
		], 2));
	}
}, gr = /* @__PURE__ */ n({ VSwitch: () => hr }), _r = ["row-click", "row-contextmenu"], vr = {
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
}, yr = ({ tableElRef: e, tbodyElRef: t, props: n }) => {
	let r = V(!1), { stop: i } = Ee(e, ([e]) => {
		e?.isIntersecting && (r.value = !0, i());
	}), o = T(() => ({ "vui-table--striped": n.stripe })), s = T(() => ({
		height: a(n.tableHeight, "px"),
		"--vui-table-row-height": `${n.rowHeight}px`
	})), c = V({ transform: null });
	Q(t, "scroll", (e) => {
		let t = Math.floor(e.target.scrollLeft);
		c.value.transform = `translateX(-${t}px)`;
	});
	let l = n.colResizeStorageKey ? De(n.colResizeStorageKey, {}) : V({});
	return _e(() => {
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
}, br = {
	loading: {
		type: Boolean,
		default: !1
	},
	loadingProps: On.props,
	emptyProps: Rt.props
}, xr = ({ type: e, props: t, dataRef: n }) => {
	let r = pe(), i = (e, t) => se({ render() {
		return M(e, t);
	} }), a = T(() => t.loading ? r.loading ? M("div", { class: `vui-${e}-loading` }, r.loading()) : i(On, t.loadingProps) : null), o = T(() => t.loading || n.value?.length ? null : r.empty ? M("div", { class: `vui-${e}-empty` }, r.empty()) : i(Rt, {
		icon: null,
		...t.emptyProps
	}));
	return { renderState: T(() => a.value || o.value) };
}, Sr = ["selection-change"], Cr = { selectedRowIds: {
	type: Array,
	default: void 0
} }, wr = {
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
}, Tr = ({ props: e, dragFlagRef: t, modelSelectedRowIds: n, emits: r }) => {
	function i(t = [], i = []) {
		e.selectable && JSON.stringify(i) !== JSON.stringify(n.value || "[]") && (n.value = i, r("selection-change", {
			selectedItems: t,
			selectedIds: i
		}));
	}
	return Y(() => e.rowItems, () => {
		e.selectable && i();
	}), B("vuiOnSelectionChange", i), {
		selectionRootClasses: T(() => ({ "is-dragging": t.value === "select" })),
		selectionRootStyles: T(() => ({ marginLeft: `-${e.dragSelectAreaWidth}px` })),
		selectionInnerStyles: T(() => ({ paddingLeft: `${e.dragSelectAreaWidth}px` }))
	};
}, Er = ({ selectable: e, ctrlASelectable: t, modelSelectedRowIds: n, rowItemsRef: r, rowIdKey: i }) => {
	let a = N("vuiOnSelectionChange", null), o = T(() => !e || !r.value?.length ? !1 : n.value?.length === r.value?.length), s = () => {
		if (e && r.value?.length) if (o.value) a();
		else {
			let e = r.value?.map((e) => e?.[i]);
			a(r.value, e);
		}
	};
	return Q("keydown", (n) => {
		e && t && r.value?.length && n.key === "a" && n.ctrlKey && (n.preventDefault(), s());
	}), {
		isSelectedAll: o,
		toggleAllSelection: s,
		allSelectionClasses: T(() => ({ "is-selected": o.value }))
	};
}, Dr = ({ selectable: e, modelSelectedRowIds: t, rowItemsRef: n, rowItem: r, rowIdKey: i }) => {
	let a = N("vuiOnSelectionChange", null), o = T(() => e ? t.value?.includes(r?.[i]) : !1);
	return {
		isSelectedRow: o,
		toggleRowSelection: () => {
			if (!e) return;
			let s = !o.value, c = [...t.value || []];
			s ? c.push(r?.[i]) : c = c.filter((e) => e !== r?.[i]), a(n.value.filter((e) => c.includes(e?.[i])), c);
		},
		rowSelectionClasses: T(() => ({ "is-selected": o.value }))
	};
}, Or = {
	sortKey: {
		type: String,
		default: void 0
	},
	sortOrder: {
		type: String,
		default: void 0
	}
}, kr = ({ props: e }) => {
	let t = V(e.sortKey), n = V(e.sortOrder);
	return B("vuiTableSort", {
		sortKeyRef: t,
		sortOrderRef: n
	}), { sortedRows: T(() => !e.rowItems?.length || !e.colItems.find((e) => e.key === t.value)?.sortable ? null : f({
		items: e.rowItems || [],
		key: t.value,
		order: n.value
	})) };
}, Ar = ({ rowItemsRef: e, colDataRef: t }) => {
	let { sortKeyRef: n, sortOrderRef: r } = N("vuiTableSort", {}), i = T(() => e.value.length && t.value.sortable), a = T(() => i.value && n.value && n.value === t.value.key), o = T(() => a.value && r.value === "asc"), s = T(() => a.value && r.value === "desc");
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
}, jr = ["drag-sort-end"], Mr = {
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
}, Nr = ({ dragFlagRef: e, dragSortGroup: t }) => {
	let n = N("vuiDragSortContext", {
		sourceRef: V({}),
		targetRef: V({})
	});
	return B("vuiDragSort", {
		groupId: t || r(),
		componetId: r(),
		...n
	}), { dragSortRootClasses: T(() => ({ "is-dragging": e.value === "dragSort" })) };
}, Pr = ({ dragFlagRef: e, dragSortable: t, canDropInto: n, rawItem: r, rawItemsRef: i, idKey: a, selectedItemsRef: o, emits: s }) => {
	let c = N("vuiDragSort", null), l = c.groupId, u = c.componetId, d = (e) => c.sourceRef.value = e, f = (e) => c.targetRef.value = e, p = () => c.sourceRef.value = {}, m = () => c.targetRef.value = {}, h = () => {
		p(), m();
	}, g = T(() => t && !!c.sourceRef.value.dragItemIds), _ = T(() => {
		let { dragComponetId: e, dragItemIds: t } = c.sourceRef.value;
		return g.value && e === u && t.includes(r?.[a]);
	}), v = T(() => {
		let { targetComponetId: e, targetItemId: t } = c.targetRef.value;
		return g.value && e === u && t === r?.[a];
	}), y = T(() => {
		let { dragGroupId: e, dragItemIds: t } = c.sourceRef.value;
		return g.value && e === l && !t.includes(r?.[a]);
	}), b = null;
	function x() {
		if (!t || e.value) return;
		e.value = "dragSort";
		let n = o.value || [r];
		d({
			dragGroupId: l,
			dragComponetId: u,
			dragItem: r,
			dragItems: n,
			dragItemIds: n.map((e) => e?.[a])
		}), b = Q("dragenter", m);
	}
	function S() {
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
	function C(e) {
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
			}), w(e);
		}
	}
	function ee(e) {
		if (v.value) {
			if (!y.value) {
				m();
				return;
			}
			w(e);
		}
	}
	function te() {
		let { targetItemId: e } = c.targetRef.value;
		(!v.value || !y.value || !e) && h();
	}
	function w(e) {
		let { targetRect: t, canDropInto: n } = c.targetRef.value, r = e.clientY - t.top, i = t.height / (n ? 3 : 2);
		if (n && r >= i && r <= i * 2) {
			c.targetRef.value.dropPos = "center";
			return;
		}
		c.targetRef.value.dropPos = r <= i ? "top" : "bottom";
	}
	return {
		dragClasses: T(() => {
			let { dropPos: e } = c.targetRef.value;
			return _.value ? "is-draging" : v.value ? `is-${e}` : null;
		}),
		onDragStart: x,
		onDragEnd: S,
		onDragEnter: C,
		onDragOver: ee,
		onDrop: te
	};
}, Fr = ["title"], Ir = {
	key: 0,
	class: "vui-table-cell-sort"
}, Lr = {
	__name: "thead-cell",
	props: { colData: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = N("vuiTableRoot", null), n = e, { isSortable: r, isAsc: i, isDesc: a, onSortKeyClick: o, onSortOrderClick: s } = Ar({
			rowItemsRef: t.rowItemsRef,
			colDataRef: T(() => n.colData)
		});
		return (n, c) => {
			let l = W("VDragbox");
			return z(), E(l, {
				width: K(t).colWidthsRef.value[e.colData.key],
				"onUpdate:width": c[2] ||= (n) => K(t).colWidthsRef.value[e.colData.key] = n,
				class: I(["vui-table-cell", { "is-sortable": K(r) }]),
				resizable: K(t).props.colResizable,
				"resize-handles": ["right"],
				"min-width": e.colData.minWidth || 50,
				onClick: K(o)
			}, {
				default: X(() => [k("div", {
					class: "vui-table-cell-inner",
					title: e.colData.title
				}, G(e.colData.title), 9, Fr), K(r) ? (z(), O("div", Ir, [k("span", {
					class: I([
						"vui-table-cell-sorter",
						"is-asc",
						{ "is-active": K(i) }
					]),
					onClick: c[0] ||= Z((e) => K(s)("asc"), ["stop"])
				}, null, 2), k("span", {
					class: I([
						"vui-table-cell-sorter",
						"is-desc",
						{ "is-active": K(a) }
					]),
					onClick: c[1] ||= Z((e) => K(s)("desc"), ["stop"])
				}, null, 2)])) : D("", !0)]),
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
}, Rr = {
	key: 0,
	class: "vui-table-row-action"
}, zr = {
	key: 1,
	class: "vui-table-row-action"
}, Br = {
	__name: "thead-row",
	setup(e) {
		let t = N("vuiTableRoot", null), { isSelectedAll: n, toggleAllSelection: r, allSelectionClasses: i } = Er({
			selectable: t.props.selectable,
			ctrlASelectable: t.props.ctrlASelectable,
			modelSelectedRowIds: t.modelSelectedRowIds,
			rowItemsRef: t.rowItemsRef,
			rowIdKey: t.props.rowIdKey
		});
		return (e, a) => {
			let o = W("VCheckbox");
			return z(), O("div", { class: I(["vui-table-row", K(i)]) }, [
				K(t).props.dragSortable ? (z(), O("div", Rr)) : D("", !0),
				K(t).props.selectable ? (z(), O("div", zr, [j(o, {
					checked: K(n),
					disabled: !K(t).rowItemsRef.value?.length,
					onChange: K(r)
				}, null, 8, [
					"checked",
					"disabled",
					"onChange"
				])])) : D("", !0),
				(z(!0), O(w, null, H(K(t).props.colItems, (e) => (z(), E(Lr, {
					key: e.key,
					"col-data": e
				}, null, 8, ["col-data"]))), 128))
			], 2);
		};
	}
}, Vr = {
	rowData: {
		type: Object,
		required: !0
	},
	colData: {
		type: Object,
		default: void 0
	}
}, Hr = ({ tableRoot: e, tbodyRow: t }) => {
	let n = T(() => ({ "is-current": t.props.rowData?.[e.props.rowIdKey] === e.props.currentRowId })), r = T(() => e.props.customRow?.({
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
}, Ur = {
	rowData: {
		type: Object,
		required: !0
	},
	colData: {
		type: Object,
		required: !0
	}
}, Wr = ({ tableRoot: e, tbodyCell: t }) => ({ cellStyles: T(() => ({ width: `${e.colWidthsRef.value[t.props.colData.key]}px` })) }), Gr = ["title"], Kr = {
	__name: "tbody-cell",
	props: Ur,
	setup(e) {
		let { cellStyles: t } = Wr({
			tableRoot: N("vuiTableRoot", null),
			tbodyCell: { props: e }
		});
		return (e, n) => (z(), O("div", {
			class: I(["vui-table-cell", e.colData.cellClass]),
			style: R(K(t))
		}, [e.$slots.default()[0].children.length ? U(e.$slots, "default", { key: 0 }) : (z(), O("span", {
			key: 1,
			class: "vui-table-cell-inner",
			title: e.rowData[e.colData.key]
		}, G(e.rowData[e.colData.key]), 9, Gr))], 6));
	}
}, qr = ["draggable"], Jr = {
	key: 0,
	class: "vui-table-row-action"
}, Yr = {
	key: 1,
	class: "vui-table-row-action"
}, Xr = {
	__name: "tbody-row",
	props: Vr,
	setup(e) {
		let t = N("vuiTableRoot", null), n = e, { rowClasses: r, customRowAttrs: i, onRowClick: a, onRowContextmenu: o } = Hr({
			tableRoot: t,
			tbodyRow: { props: n }
		}), { isSelectedRow: s, toggleRowSelection: l, rowSelectionClasses: u } = Dr({
			selectable: t.props.selectable,
			modelSelectedRowIds: t.modelSelectedRowIds,
			rowItemsRef: t.rowItemsRef,
			rowItem: n.rowData,
			rowIdKey: t.props.rowIdKey
		}), { dragClasses: d, onDragStart: f, onDragEnter: p, onDragOver: m, onDrop: h, onDragEnd: g } = Pr({
			dragFlagRef: t.dragFlagRef,
			dragSortable: t.props.dragSortable,
			canDropInto: t.props.canDropInto,
			idKey: t.props.rowIdKey,
			rawItem: n.rowData,
			selectedItemsRef: T(() => s.value ? t.rowItemsRef.value.filter((e) => t.modelSelectedRowIds.value?.includes(e?.[t.props.rowIdKey])) : null),
			emits: t.emits
		});
		return (e, n) => {
			let _ = W("VCheckbox");
			return z(), O("div", F({
				class: [
					"vui-table-row",
					K(r),
					K(u),
					K(d)
				],
				draggable: K(t).props.dragSortable ? !0 : null
			}, K(i), {
				onDragstart: n[0] ||= Z((...e) => K(f) && K(f)(...e), ["stop"]),
				onDragend: n[1] ||= Z((...e) => K(g) && K(g)(...e), ["stop"]),
				onDragenter: n[2] ||= Z((...e) => K(p) && K(p)(...e), ["stop"]),
				onDragover: n[3] ||= Z((...e) => K(m) && K(m)(...e), ["stop", "prevent"]),
				onDrop: n[4] ||= Z((...e) => K(h) && K(h)(...e), ["stop"]),
				onClick: n[5] ||= (...e) => K(a) && K(a)(...e),
				onContextmenu: n[6] ||= Z((...e) => K(o) && K(o)(...e), ["prevent"])
			}), [
				K(t).props.dragSortable ? (z(), O("div", Jr, [j(K(c), {
					icon: b,
					class: "vui-table-row-drag-handle"
				})])) : D("", !0),
				K(t).props.selectable ? (z(), O("div", Yr, [j(_, {
					checked: K(s),
					onChange: K(l)
				}, null, 8, ["checked", "onChange"])])) : D("", !0),
				(z(!0), O(w, null, H(K(t).props.colItems, (t) => (z(), E(Kr, {
					key: t.key,
					"row-data": e.rowData,
					"col-data": t
				}, {
					default: X(() => [U(e.$slots, "default", { col: t })]),
					_: 2
				}, 1032, ["row-data", "col-data"]))), 128))
			], 16, qr);
		};
	}
}, Zr = ({ dragFlagRef: e, dragSelectAreaWidth: t, parentElRef: n, rowItemsRef: r, rowHeight: i, rowIdKey: a }) => {
	let o = N("vuiOnSelectionChange", null), s = T(() => e.value === "select"), c = null, l = V({
		x: 0,
		y: 0
	}), u = V({
		x: 0,
		y: 0
	}), d = T(() => ({
		x1: Math.min(l.value.x, u.value.x),
		x2: Math.max(l.value.x, u.value.x),
		y1: Math.min(l.value.y, u.value.y),
		y2: Math.max(l.value.y, u.value.y)
	})), f = T(() => ({
		left: `${d.value.x1}px`,
		top: `${d.value.y1}px`,
		width: `${d.value.x2 - d.value.x1}px`,
		height: `${d.value.y2 - d.value.y1}px`
	})), p = null, m = null;
	Q(n, "mousedown", (t) => {
		e.value || t.button === 0 && t.target === t.currentTarget && (e.value = "select", c = n.value.getBoundingClientRect(), l.value = {
			x: t.clientX - c.x,
			y: t.clientY - c.y + n.value.scrollTop
		}, u.value = { ...l.value }, p = Q("mousemove", h), m = Q("mouseup", g));
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
}, Qr = {
	__name: "drag-select",
	setup(e) {
		let t = N("vuiTableRoot", null), { isShowBox: n, boxStyles: r } = Zr({
			dragFlagRef: t.dragFlagRef,
			dragSelectAreaWidth: t.props.dragSelectAreaWidth,
			parentElRef: t.tbodyElRef,
			rowItemsRef: t.rowItemsRef,
			rowHeight: t.props.rowHeight,
			rowIdKey: t.props.rowIdKey
		});
		return (e, t) => K(n) ? (z(), O("div", {
			key: 0,
			class: "vui-table-select-rect",
			style: R(K(r))
		}, null, 4)) : D("", !0);
	}
}, $r = {
	__name: "table",
	props: /* @__PURE__ */ P({
		...vr,
		...br,
		...wr,
		...Or,
		...Mr
	}, {
		selectedRowIds: Cr.selectedRowIds,
		selectedRowIdsModifiers: {}
	}),
	emits: /* @__PURE__ */ P([
		..._r,
		...Sr,
		...jr
	], ["update:selectedRowIds"]),
	setup(e, { emit: t }) {
		let n = J("tableElRef"), r = q(e, "selectedRowIds", Cr.selectedRowIds), i = e, a = t, o = V(null), s = V(null), { list: c, containerProps: l, wrapperProps: u } = Oe(o, {
			itemHeight: i.rowHeight,
			overscan: 20
		}), { rootClasses: d, rootStyles: f, headerStyles: p, colWidthsRef: m } = yr({
			tableElRef: n,
			tbodyElRef: l.ref,
			props: i
		}), { renderState: h } = xr({
			type: "table",
			props: i,
			dataRef: o
		}), { selectionRootClasses: g, selectionRootStyles: _, selectionInnerStyles: v } = Tr({
			props: i,
			dragFlagRef: s,
			modelSelectedRowIds: r,
			emits: a
		}), { sortedRows: y } = kr({ props: i }), { dragSortRootClasses: b } = Nr({
			dragFlagRef: s,
			dragSortGroup: i.dragSortGroup
		});
		return _e(() => {
			o.value = y.value || i.rowItems || [];
		}), B("vuiTableRoot", {
			tbodyElRef: l.ref,
			modelSelectedRowIds: r,
			props: i,
			emits: a,
			rowItemsRef: o,
			dragFlagRef: s,
			colWidthsRef: m
		}), (e, t) => (z(), O("div", {
			ref_key: "tableElRef",
			ref: n,
			class: I([
				"vui-table",
				K(d),
				K(g),
				K(b)
			]),
			style: R({
				...K(f),
				...K(_)
			})
		}, [k("div", {
			class: "vui-table-header",
			style: R({
				...K(p),
				...K(v)
			})
		}, [j(Br)], 4), K(h) ? (z(), E(de(K(h)), { key: 0 })) : (z(), O("div", F({
			key: 1,
			class: "vui-table-body"
		}, K(l), { style: K(v) }), [e.selectable && e.dragSelectable ? (z(), E(Qr, { key: 0 })) : D("", !0), k("div", F({ class: "vui-table-view" }, K(u)), [(z(!0), O(w, null, H(K(c), ({ data: t }) => (z(), E(Xr, {
			key: t[e.rowIdKey],
			"row-data": t
		}, {
			default: X(({ col: n }) => [U(e.$slots, "default", {
				row: t,
				col: n
			})]),
			_: 2
		}, 1032, ["row-data"]))), 128))], 16)], 16))], 6));
	}
}, ei = /* @__PURE__ */ n({ VTable: () => $r }), ti = { class: "vui-tabs" }, ni = { class: "vui-tabs-header" }, ri = { class: "vui-tabs-nav" }, ii = ["onClick"], ai = { class: "vui-tabs-content" }, oi = {
	__name: "tabs",
	props: /* @__PURE__ */ P({ items: {
		type: Array,
		default: null
	} }, {
		name: {
			type: [String, Number],
			default: ""
		},
		nameModifiers: {}
	}),
	emits: /* @__PURE__ */ P(["change"], ["update:name"]),
	setup(e, { emit: t }) {
		let n = t, r = q(e, "name"), i = e, a = V(null), o = (e) => {
			a.value ||= [], a.value.some((t) => t.name === e.name) || a.value.push(e), r.value ||= e.name;
		}, s = T(() => a.value || i.items || []);
		Y(r, (e, t) => {
			n("change", { name: e });
		});
		let c = (e) => {
			r.value = e;
		}, l = J("navItemEls"), u = T(() => {
			let e = s.value.findIndex((e) => e.name === r.value);
			if (e === -1) return null;
			let t = l.value?.[e];
			return t ? {
				left: `${t.offsetLeft}px`,
				width: `${t.offsetWidth}px`
			} : null;
		});
		return B("vuiTabsRoot", {
			activeName: r,
			registerPane: o
		}), (e, t) => (z(), O("div", ti, [k("div", ni, [k("div", ri, [(z(!0), O(w, null, H(s.value, (e) => (z(), O("div", {
			ref_for: !0,
			ref_key: "navItemEls",
			ref: l,
			key: e.name,
			class: I(["vui-tabs-nav-item", { "is-active": r.value === e.name }]),
			onClick: (t) => c(e.name)
		}, G(e.label), 11, ii))), 128))]), u.value ? (z(), O("div", {
			key: 0,
			class: "vui-tabs-bar",
			style: R(u.value)
		}, null, 4)) : D("", !0)]), k("div", ai, [U(e.$slots, "default")])]));
	}
}, si = { class: "vui-tab-pane" }, ci = {
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
		let t = N("vuiTabsRoot"), n = e;
		return t.registerPane(n), (n, r) => ve((z(), O("div", si, [U(n.$slots, "default")], 512)), [[ge, K(t).activeName.value === e.name]]);
	}
}, li = /* @__PURE__ */ n({
	VTabPane: () => ci,
	VTabs: () => oi
}), ui = {
	key: 3,
	class: "vui-textarea-count"
}, di = {
	__name: "textarea",
	props: /* @__PURE__ */ P({
		...xn.common,
		...xn.textarea
	}, {
		value: bn.value,
		valueModifiers: {}
	}),
	emits: /* @__PURE__ */ P(yn, ["update:value"]),
	setup(e, { emit: n }) {
		let r = J("wrapperElRef"), i = J("inputElRef"), a = q(e, "value", bn.value), o = e, l = n, u = pe(), { statusClasses: d, isShowClearIcon: f, innerProps: p, countText: m, onClickClearIcon: h, onEvent: g } = Sn({
			type: "textarea",
			wrapperElRef: r,
			inputElRef: i,
			modelValue: a,
			props: o,
			emits: l
		}), _ = T(() => s(o.prefixIcon, o.prefixIconProps)), v = T(() => s(o.suffixIcon, o.suffixIconProps)), y = T(() => _.value || o.prefix || u.prefix), b = T(() => v.value || o.suffix || u.suffix), x = J("prefixEl"), S = J("suffixEl"), C = J("cleariconEl"), { width: ee } = Ce(x), { width: te } = Ce(S), { width: w } = Ce(C), ne = T(() => ({
			"--vui-textarea-prefix-width": y.value ? `${ee.value}px` : void 0,
			"--vui-textarea-suffix-width": b.value || o.clearable ? `${Math.max(te.value, w.value)}px` : void 0
		}));
		return (e, n) => (z(), O("div", {
			ref_key: "wrapperElRef",
			ref: r,
			class: I([
				"vui-textarea",
				K(d),
				{
					"vui-textarea--prefix": y.value,
					"vui-textarea--suffix": b.value || e.clearable
				}
			]),
			style: R(ne.value)
		}, [
			y.value ? (z(), O("div", {
				key: 0,
				ref_key: "prefixEl",
				ref: x,
				class: "vui-textarea-prefix"
			}, [
				_.value ? (z(), E(K(c), L(F({ key: 0 }, _.value)), null, 16)) : D("", !0),
				U(e.$slots, "prefix"),
				A(" " + G(e.prefix), 1)
			], 512)) : D("", !0),
			ve(k("textarea", F({
				ref_key: "inputElRef",
				ref: i,
				"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
				class: "vui-textarea-inner"
			}, K(p), {
				onFocus: n[1] ||= (e) => K(g)("focus", e),
				onBlur: n[2] ||= (e) => K(g)("blur", e),
				onInput: n[3] ||= (e) => K(g)("input", e),
				onChange: n[4] ||= (e) => K(g)("change", e),
				onKeyup: n[5] ||= ye((e) => K(g)("enter", e), ["enter"])
			}), null, 16), [[he, a.value]]),
			K(f) ? (z(), E(K(c), {
				key: 1,
				ref_key: "cleariconEl",
				ref: C,
				class: "vui-textarea-suffix vui-textarea-icon--clear",
				icon: t,
				onClick: Z(K(h), ["stop"])
			}, null, 8, ["onClick"])) : D("", !0),
			b.value ? (z(), O("div", {
				key: 2,
				ref_key: "suffixEl",
				ref: S,
				class: I(["vui-textarea-suffix", `is-${e.suffixPosition}`])
			}, [
				A(G(e.suffix) + " ", 1),
				U(e.$slots, "suffix"),
				v.value ? (z(), E(K(c), L(F({ key: 0 }, v.value)), null, 16)) : D("", !0)
			], 2)) : D("", !0),
			K(m) ? (z(), O("div", ui, G(K(m)), 1)) : D("", !0)
		], 6));
	}
}, fi = /* @__PURE__ */ n({ VTextarea: () => di }), pi = /* @__PURE__ */ n({ VToast: () => o }), mi = /* @__PURE__ */ n({ VTooltip: () => ar }), hi = ["node-click", "node-contextmenu"], gi = {
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
}, _i = ({ props: e, treeDataRef: t }) => {
	let n = ue(/* @__PURE__ */ new Map()), r = T(() => i());
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
		treeRootStyles: T(() => ({
			height: `${e.treeHeight}px`,
			"--vui-tree-node-height": `${e.nodeHeight}px`
		}))
	};
}, vi = {
	nodeData: {
		type: Object,
		required: !0
	},
	itemData: {
		type: Object,
		required: !0
	}
}, yi = ({ treeRoot: e, treeNode: t }) => {
	let n = T(() => t.props.nodeData), r = T(() => t.props.itemData), i = T(() => r.value.id === e.props.currentNodeId), a = T(() => {
		let t = !!r.value.children?.filter((t) => e.props.filterMethod({ item: t }))?.length;
		return e.props.isLeaf ? n.value.isLeaf ? n.value.isLoaded ? t : !0 : !1 : t;
	}), o = T(() => n.value.isExpanded ? 90 : null);
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
		nodeClasses: T(() => ({ "is-current": i.value })),
		nodeStyles: T(() => ({ paddingLeft: `${e.props.treeIndent + e.props.nodeIndent * n.value.level}px` })),
		customNodeAttrs: T(() => e.props.customNode?.({
			node: n.value,
			item: r.value
		}))
	};
}, bi = ["draggable"], xi = { class: "vui-tree-node-placeholder" }, Si = ["title"], Ci = {
	key: 2,
	class: "vui-tree-node-action"
}, wi = {
	__name: "tree-node",
	props: vi,
	setup(e) {
		let t = N("vuiTreeRoot", null), n = e, { isShowExpand: r, expandIconRotate: i, toggleChildren: a, onNodeClick: o, onNodeContextmenu: s, nodeClasses: l, nodeStyles: u, customNodeAttrs: d } = yi({
			treeRoot: t,
			treeNode: { props: n }
		}), { dragClasses: f, onDragStart: p, onDragEnter: m, onDragOver: h, onDrop: g, onDragEnd: _ } = Pr({
			dragFlagRef: t.dragFlagRef,
			dragSortable: t.props.dragSortable,
			canDropInto: t.props.canDropInto,
			idKey: "id",
			rawItem: n.itemData,
			selectedItemsRef: T(() => null),
			emits: t.emits
		});
		return (e, n) => (z(), O("div", F({
			class: [
				"vui-tree-node",
				K(l),
				K(f)
			],
			style: K(u),
			draggable: K(t).props.dragSortable
		}, K(d), {
			onDragstart: n[0] ||= Z((...e) => K(p) && K(p)(...e), ["stop"]),
			onDragend: n[1] ||= Z((...e) => K(_) && K(_)(...e), ["stop"]),
			onDragenter: n[2] ||= Z((...e) => K(m) && K(m)(...e), ["stop"]),
			onDragover: n[3] ||= Z((...e) => K(h) && K(h)(...e), ["stop", "prevent"]),
			onDrop: n[4] ||= Z((...e) => K(g) && K(g)(...e), ["stop"]),
			onClick: n[5] ||= (...e) => K(o) && K(o)(...e),
			onContextmenu: n[6] ||= Z((...e) => K(s) && K(s)(...e), ["prevent"])
		}), [
			k("div", xi, [e.nodeData.isLoading ? (z(), E(K(c), {
				key: 0,
				class: "vui-tree-node-loading",
				icon: C,
				spin: !0
			})) : K(r) ? (z(), E(K(c), {
				key: 1,
				class: "vui-tree-node-expand",
				icon: S,
				rotate: K(i),
				onClick: Z(K(a), ["stop"])
			}, null, 8, ["rotate", "onClick"])) : D("", !0)]),
			e.$slots.default ? U(e.$slots, "default", { key: 0 }) : (z(), O("div", {
				key: 1,
				class: "vui-tree-node-inner",
				title: e.nodeData.data.title
			}, G(e.nodeData.data.title), 9, Si)),
			K(t).props.dragSortable ? (z(), O("div", Ci, [j(K(c), {
				icon: b,
				class: "vui-tree-node-drag-handle"
			})])) : D("", !0)
		], 16, bi));
	}
}, Ti = {
	__name: "tree",
	props: {
		...gi,
		...br,
		...Mr
	},
	emits: [...hi, ...jr],
	setup(e, { emit: t }) {
		let n = e, r = t, i = V(null), a = V(n.data);
		Y(() => n.data, (e) => a.value = e);
		let { nodeMap: o, flattenedNodes: s, loadChildren: c, treeRootStyles: l } = _i({
			props: n,
			treeDataRef: a
		}), { list: u, containerProps: d, wrapperProps: f } = Oe(s, {
			itemHeight: n.nodeHeight,
			overscan: 20
		}), { renderState: p } = xr({
			type: "tree",
			props: n,
			dataRef: a
		}), { dragSortRootClasses: m } = Nr({
			dragFlagRef: i,
			dragSortGroup: n.dragSortGroup
		});
		return B("vuiTreeRoot", {
			props: n,
			emits: r,
			nodeMap: o,
			loadChildren: c,
			dragFlagRef: i
		}), (e, t) => (z(), O("div", F({
			class: ["vui-tree", K(m)],
			style: K(l)
		}, K(d)), [K(p) ? (z(), E(de(K(p)), { key: 0 })) : (z(), O("div", F({
			key: 1,
			class: "vui-tree-view"
		}, K(f)), [(z(!0), O(w, null, H(K(u), ({ data: t }) => (z(), E(wi, {
			key: t.data.id,
			"node-data": t,
			"item-data": t.data
		}, oe({ _: 2 }, [e.$slots.default ? {
			name: "default",
			fn: X(() => [U(e.$slots, "default", {
				node: t,
				item: t.data
			})]),
			key: "0"
		} : void 0]), 1032, ["node-data", "item-data"]))), 128))], 16))], 16));
	}
}, Ei = /* @__PURE__ */ Object.assign({
	"./@common/index.js": l,
	"./button/index.js": Pe,
	"./checkbox/index.js": qe,
	"./dialog/index.js": $e,
	"./dragbox/index.js": at,
	"./drawer/index.js": st,
	"./dropdown/index.js": Pt,
	"./empty/index.js": zt,
	"./form/index.js": tn,
	"./icon/index.js": i,
	"./image/index.js": vn,
	"./input/index.js": Dn,
	"./loading/index.js": kn,
	"./overlay/index.js": Pn,
	"./popover/index.js": Fn,
	"./progress/index.js": Vn,
	"./radio/index.js": Wn,
	"./row/index.js": Jn,
	"./select/index.js": tr,
	"./skeleton/index.js": pn,
	"./slider/index.js": lr,
	"./switch/index.js": gr,
	"./table/index.js": ei,
	"./tabs/index.js": li,
	"./textarea/index.js": fi,
	"./toast/index.js": pi,
	"./tooltip/index.js": mi,
	"./tree/index.js": /* @__PURE__ */ n({ VTree: () => Ti })
}), Di = { install: (e) => {
	ee(e, Ei), u(e);
} };
//#endregion
export { Ve as A, Rt as C, it as D, ot as E, Qe as O, Jt as S, St as T, En as _, oi as a, cn as b, cr as c, qn as d, Un as f, On as g, Nn as h, ci as i, Ne as j, Ke as k, ar as l, Bn as m, Ti as n, $r as o, Hn as p, di as r, hr as s, Di as t, er as u, _n as v, Nt as w, en as x, fn as y };
