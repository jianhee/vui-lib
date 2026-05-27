//#region packages/utils/data-array.js
var e = (e, t, n) => {
	if (n) {
		let r = e.map((e) => e[n]), i = new Set(r);
		return t.filter((e) => i.has(e[n]));
	}
	let r = new Set(e);
	return t.filter((e) => r.has(e));
}, t = (...t) => e(...t).length > 0, n = (e = {}) => {
	let { items: t, key: n, order: r } = e;
	if (!t?.length) return [];
	if (!n || !r) return t;
	let i = [...t];
	return i.sort((e, t) => {
		let i = e[n], a = t[n];
		if (typeof i == "number" && typeof a == "number") return r === "asc" ? i - a : a - i;
		let o = String(i).localeCompare(String(a));
		return r === "asc" ? o : o * -1;
	}), i;
};
//#endregion
//#region packages/utils/data-object.js
function r(...e) {
	let t = e.filter((e) => e != null);
	if (t.length === 0) return {};
	let n = (e) => Object.prototype.toString.call(e) === "[object Object]", r = (e, t) => {
		let i = { ...e };
		return Object.keys(t).forEach((e) => {
			let a = i[e], o = t[e];
			n(a) && n(o) ? i[e] = r(a, o) : i[e] = o;
		}), i;
	};
	return t.reduce((e, t) => r(e, t), {});
}
var i = 3600, a = i * 24, o = a * 7, s = 1e3, c = 60 * s, l = i * s, u = a * s, d = o * s, f = "millisecond", p = "second", m = "minute", h = "hour", g = "week", _ = "month", v = "quarter", y = "year", b = "date", x = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = {
	name: "en",
	weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	ordinal: function(e) {
		var t = [
			"th",
			"st",
			"nd",
			"rd"
		], n = e % 100;
		return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
	}
}, T = function(e, t, n) {
	var r = String(e);
	return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
}, E = {
	s: T,
	z: function(e) {
		var t = -e.utcOffset(), n = Math.abs(t), r = Math.floor(n / 60), i = n % 60;
		return (t <= 0 ? "+" : "-") + T(r, 2, "0") + ":" + T(i, 2, "0");
	},
	m: function e(t, n) {
		if (t.date() < n.date()) return -e(n, t);
		var r = (n.year() - t.year()) * 12 + (n.month() - t.month()), i = t.clone().add(r, _), a = n - i < 0, o = t.clone().add(r + (a ? -1 : 1), _);
		return +(-(r + (n - i) / (a ? i - o : o - i)) || 0);
	},
	a: function(e) {
		return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
	},
	p: function(e) {
		return {
			M: "month",
			y: "year",
			w: "week",
			d: "day",
			D: "date",
			h: "hour",
			m: "minute",
			s: "second",
			ms: "millisecond",
			Q: "quarter"
		}[e] || String(e || "").toLowerCase().replace(/s$/, "");
	},
	u: function(e) {
		return e === void 0;
	}
}, D = "en", O = {};
O[D] = w;
var k = "$isDayjsObject", A = function(e) {
	return e instanceof I || !!(e && e[k]);
}, j = function e(t, n, r) {
	var i;
	if (!t) return D;
	if (typeof t == "string") {
		var a = t.toLowerCase();
		O[a] && (i = a), n && (O[a] = n, i = a);
		var o = t.split("-");
		if (!i && o.length > 1) return e(o[0]);
	} else {
		var s = t.name;
		O[s] = t, i = s;
	}
	return !r && i && (D = i), i || !r && D;
}, M = function(e, t) {
	if (A(e)) return e.clone();
	var n = typeof t == "object" ? t : {};
	return n.date = e, n.args = arguments, new I(n);
}, N = function(e, t) {
	return M(e, {
		locale: t.$L,
		utc: t.$u,
		x: t.$x,
		$offset: t.$offset
	});
}, P = E;
P.l = j, P.i = A, P.w = N;
var F = function(e) {
	var t = e.date, n = e.utc;
	if (t === null) return /* @__PURE__ */ new Date(NaN);
	if (P.u(t)) return /* @__PURE__ */ new Date();
	if (t instanceof Date) return new Date(t);
	if (typeof t == "string" && !/Z$/i.test(t)) {
		var r = t.match(S);
		if (r) {
			var i = r[2] - 1 || 0, a = (r[7] || "0").substring(0, 3);
			return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
		}
	}
	return new Date(t);
}, I = /* @__PURE__ */ function() {
	function e(e) {
		this.$L = j(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[k] = !0;
	}
	var t = e.prototype;
	return t.parse = function(e) {
		this.$d = F(e), this.init();
	}, t.init = function() {
		var e = this.$d;
		this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
	}, t.$utils = function() {
		return P;
	}, t.isValid = function() {
		return this.$d.toString() !== x;
	}, t.isSame = function(e, t) {
		var n = M(e);
		return this.startOf(t) <= n && n <= this.endOf(t);
	}, t.isAfter = function(e, t) {
		return M(e) < this.startOf(t);
	}, t.isBefore = function(e, t) {
		return this.endOf(t) < M(e);
	}, t.$g = function(e, t, n) {
		return P.u(e) ? this[t] : this.set(n, e);
	}, t.unix = function() {
		return Math.floor(this.valueOf() / 1e3);
	}, t.valueOf = function() {
		return this.$d.getTime();
	}, t.startOf = function(e, t) {
		var n = this, r = P.u(t) ? !0 : t, i = P.p(e), a = function(e, t) {
			var i = P.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
			return r ? i : i.endOf("day");
		}, o = function(e, t) {
			return P.w(n.toDate()[e].apply(n.toDate("s"), (r ? [
				0,
				0,
				0,
				0
			] : [
				23,
				59,
				59,
				999
			]).slice(t)), n);
		}, s = this.$W, c = this.$M, l = this.$D, u = "set" + (this.$u ? "UTC" : "");
		switch (i) {
			case y: return r ? a(1, 0) : a(31, 11);
			case _: return r ? a(1, c) : a(0, c + 1);
			case g:
				var d = this.$locale().weekStart || 0, f = (s < d ? s + 7 : s) - d;
				return a(r ? l - f : l + (6 - f), c);
			case "day":
			case b: return o(u + "Hours", 0);
			case h: return o(u + "Minutes", 1);
			case m: return o(u + "Seconds", 2);
			case p: return o(u + "Milliseconds", 3);
			default: return this.clone();
		}
	}, t.endOf = function(e) {
		return this.startOf(e, !1);
	}, t.$set = function(e, t) {
		var n, r = P.p(e), i = "set" + (this.$u ? "UTC" : ""), a = (n = {}, n.day = i + "Date", n[b] = i + "Date", n[_] = i + "Month", n[y] = i + "FullYear", n[h] = i + "Hours", n[m] = i + "Minutes", n[p] = i + "Seconds", n[f] = i + "Milliseconds", n)[r], o = r === "day" ? this.$D + (t - this.$W) : t;
		if (r === "month" || r === "year") {
			var s = this.clone().set(b, 1);
			s.$d[a](o), s.init(), this.$d = s.set(b, Math.min(this.$D, s.daysInMonth())).$d;
		} else a && this.$d[a](o);
		return this.init(), this;
	}, t.set = function(e, t) {
		return this.clone().$set(e, t);
	}, t.get = function(e) {
		return this[P.p(e)]();
	}, t.add = function(e, t) {
		var n = this, r;
		e = Number(e);
		var i = P.p(t), a = function(t) {
			var r = M(n);
			return P.w(r.date(r.date() + Math.round(t * e)), n);
		};
		if (i === "month") return this.set(_, this.$M + e);
		if (i === "year") return this.set(y, this.$y + e);
		if (i === "day") return a(1);
		if (i === "week") return a(7);
		var o = (r = {}, r.minute = 6e4, r.hour = 36e5, r.second = 1e3, r)[i] || 1, s = this.$d.getTime() + e * o;
		return P.w(s, this);
	}, t.subtract = function(e, t) {
		return this.add(e * -1, t);
	}, t.format = function(e) {
		var t = this, n = this.$locale();
		if (!this.isValid()) return n.invalidDate || "Invalid Date";
		var r = e || "YYYY-MM-DDTHH:mm:ssZ", i = P.z(this), a = this.$H, o = this.$m, s = this.$M, c = n.weekdays, l = n.months, u = n.meridiem, d = function(e, n, i, a) {
			return e && (e[n] || e(t, r)) || i[n].slice(0, a);
		}, f = function(e) {
			return P.s(a % 12 || 12, e, "0");
		}, p = u || function(e, t, n) {
			var r = e < 12 ? "AM" : "PM";
			return n ? r.toLowerCase() : r;
		}, m = function(e) {
			switch (e) {
				case "YY": return String(t.$y).slice(-2);
				case "YYYY": return P.s(t.$y, 4, "0");
				case "M": return s + 1;
				case "MM": return P.s(s + 1, 2, "0");
				case "MMM": return d(n.monthsShort, s, l, 3);
				case "MMMM": return d(l, s);
				case "D": return t.$D;
				case "DD": return P.s(t.$D, 2, "0");
				case "d": return String(t.$W);
				case "dd": return d(n.weekdaysMin, t.$W, c, 2);
				case "ddd": return d(n.weekdaysShort, t.$W, c, 3);
				case "dddd": return c[t.$W];
				case "H": return String(a);
				case "HH": return P.s(a, 2, "0");
				case "h": return f(1);
				case "hh": return f(2);
				case "a": return p(a, o, !0);
				case "A": return p(a, o, !1);
				case "m": return String(o);
				case "mm": return P.s(o, 2, "0");
				case "s": return String(t.$s);
				case "ss": return P.s(t.$s, 2, "0");
				case "SSS": return P.s(t.$ms, 3, "0");
				case "Z": return i;
				default: break;
			}
			return null;
		};
		return r.replace(C, function(e, t) {
			return t || m(e) || i.replace(":", "");
		});
	}, t.utcOffset = function() {
		return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
	}, t.diff = function(e, t, n) {
		var r = this, i = P.p(t), a = M(e), o = (a.utcOffset() - this.utcOffset()) * c, f = this - a, b = function() {
			return P.m(r, a);
		}, x;
		switch (i) {
			case y:
				x = b() / 12;
				break;
			case _:
				x = b();
				break;
			case v:
				x = b() / 3;
				break;
			case g:
				x = (f - o) / d;
				break;
			case "day":
				x = (f - o) / u;
				break;
			case h:
				x = f / l;
				break;
			case m:
				x = f / c;
				break;
			case p:
				x = f / s;
				break;
			default:
				x = f;
				break;
		}
		return n ? x : P.a(x);
	}, t.daysInMonth = function() {
		return this.endOf(_).$D;
	}, t.$locale = function() {
		return O[this.$L];
	}, t.locale = function(e, t) {
		if (!e) return this.$L;
		var n = this.clone(), r = j(e, t, !0);
		return r && (n.$L = r), n;
	}, t.clone = function() {
		return P.w(this.$d, this);
	}, t.toDate = function() {
		return new Date(this.valueOf());
	}, t.toJSON = function() {
		return this.isValid() ? this.toISOString() : null;
	}, t.toISOString = function() {
		return this.$d.toISOString();
	}, t.toString = function() {
		return this.$d.toUTCString();
	}, e;
}(), L = I.prototype;
M.prototype = L, [
	["$ms", f],
	["$s", p],
	["$m", m],
	["$H", h],
	["$W", "day"],
	["$M", _],
	["$y", y],
	["$D", b]
].forEach(function(e) {
	L[e[1]] = function(t) {
		return this.$g(t, e[0], e[1]);
	};
}), M.extend = function(e, t) {
	return e.$i ||= (e(t, I, M), !0), M;
}, M.locale = j, M.isDayjs = A, M.unix = function(e) {
	return M(e * 1e3);
}, M.en = O[D], M.Ls = O, M.p = {};
//#endregion
//#region node_modules/dayjs/esm/locale/zh-cn.js
var R = {
	name: "zh-cn",
	weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
	weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
	weekdaysMin: "日_一_二_三_四_五_六".split("_"),
	months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
	monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
	ordinal: function(e, t) {
		switch (t) {
			case "W": return e + "周";
			default: return e + "日";
		}
	},
	weekStart: 1,
	yearStart: 4,
	formats: {
		LT: "HH:mm",
		LTS: "HH:mm:ss",
		L: "YYYY/MM/DD",
		LL: "YYYY年M月D日",
		LLL: "YYYY年M月D日Ah点mm分",
		LLLL: "YYYY年M月D日ddddAh点mm分",
		l: "YYYY/M/D",
		ll: "YYYY年M月D日",
		lll: "YYYY年M月D日 HH:mm",
		llll: "YYYY年M月D日dddd HH:mm"
	},
	relativeTime: {
		future: "%s内",
		past: "%s前",
		s: "几秒",
		m: "1 分钟",
		mm: "%d 分钟",
		h: "1 小时",
		hh: "%d 小时",
		d: "1 天",
		dd: "%d 天",
		M: "1 个月",
		MM: "%d 个月",
		y: "1 年",
		yy: "%d 年"
	},
	meridiem: function(e, t) {
		var n = e * 100 + t;
		return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上";
	}
};
M.locale(R, null, !0);
//#endregion
//#region node_modules/dayjs/esm/plugin/utc/index.js
var z = /[+-]\d\d(?::?\d\d)?/g, B = /([+-]|\d\d)/g;
function V(e) {
	e === void 0 && (e = "");
	var t = e.match(z);
	if (!t) return null;
	var n = ("" + t[0]).match(B) || [
		"-",
		0,
		0
	], r = n[0], i = n[1], a = n[2], o = i * 60 + +a;
	return o === 0 ? 0 : r === "+" ? o : -o;
}
var H = (function(e, t, n) {
	var r = t.prototype;
	n.utc = function(e) {
		return new t({
			date: e,
			utc: !0,
			args: arguments
		});
	}, r.utc = function(e) {
		var t = n(this.toDate(), {
			locale: this.$L,
			utc: !0
		});
		return e ? t.add(this.utcOffset(), m) : t;
	}, r.local = function() {
		return n(this.toDate(), {
			locale: this.$L,
			utc: !1
		});
	};
	var i = r.parse;
	r.parse = function(e) {
		e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), i.call(this, e);
	};
	var a = r.init;
	r.init = function() {
		if (this.$u) {
			var e = this.$d;
			this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds();
		} else a.call(this);
	};
	var o = r.utcOffset;
	r.utcOffset = function(e, t) {
		var n = this.$utils().u;
		if (n(e)) return this.$u ? 0 : n(this.$offset) ? o.call(this) : this.$offset;
		if (typeof e == "string" && (e = V(e), e === null)) return this;
		var r = Math.abs(e) <= 16 ? e * 60 : e;
		if (r === 0) return this.utc(t);
		var i = this.clone();
		if (t) return i.$offset = r, i.$u = !1, i;
		var a = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
		return i = this.local().add(r + a, m), i.$offset = r, i.$x.$localOffset = a, i;
	};
	var s = r.format, l = "YYYY-MM-DDTHH:mm:ss[Z]";
	r.format = function(e) {
		var t = e || (this.$u ? l : "");
		return s.call(this, t);
	}, r.valueOf = function() {
		var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
		return this.$d.valueOf() - e * c;
	}, r.isUTC = function() {
		return !!this.$u;
	}, r.toISOString = function() {
		return this.toDate().toISOString();
	}, r.toString = function() {
		return this.toDate().toUTCString();
	};
	var u = r.toDate;
	r.toDate = function(e) {
		return e === "s" && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : u.call(this);
	};
	var d = r.diff;
	r.diff = function(e, t, r) {
		if (e && this.$u === e.$u) return d.call(this, e, t, r);
		var i = this.local(), a = n(e).local();
		return d.call(i, a, t, r);
	};
}), U = (function(e, t, n) {
	e ||= {};
	var r = t.prototype, i = {
		future: "in %s",
		past: "%s ago",
		s: "a few seconds",
		m: "a minute",
		mm: "%d minutes",
		h: "an hour",
		hh: "%d hours",
		d: "a day",
		dd: "%d days",
		M: "a month",
		MM: "%d months",
		y: "a year",
		yy: "%d years"
	};
	n.en.relativeTime = i, r.fromToBase = function(t, r, a, o, s) {
		for (var c = a.$locale().relativeTime || i, l = e.thresholds || [
			{
				l: "s",
				r: 44,
				d: "second"
			},
			{
				l: "m",
				r: 89
			},
			{
				l: "mm",
				r: 44,
				d: "minute"
			},
			{
				l: "h",
				r: 89
			},
			{
				l: "hh",
				r: 21,
				d: "hour"
			},
			{
				l: "d",
				r: 35
			},
			{
				l: "dd",
				r: 25,
				d: "day"
			},
			{
				l: "M",
				r: 45
			},
			{
				l: "MM",
				r: 10,
				d: "month"
			},
			{
				l: "y",
				r: 17
			},
			{
				l: "yy",
				d: "year"
			}
		], u = l.length, d, f, p, m = 0; m < u; m += 1) {
			var h = l[m];
			h.d && (d = o ? n(t).diff(a, h.d, !0) : a.diff(t, h.d, !0));
			var g = (e.rounding || Math.round)(Math.abs(d));
			if (p = d > 0, g <= h.r || !h.r) {
				g <= 1 && m > 0 && (h = l[m - 1]);
				var _ = c[h.l];
				s && (g = s("" + g)), f = typeof _ == "string" ? _.replace("%d", g) : _(g, r, h.l, p);
				break;
			}
		}
		if (r) return f;
		var v = p ? c.future : c.past;
		return typeof v == "function" ? v(f) : v.replace("%s", f);
	};
	function a(e, t, n, i) {
		return r.fromToBase(e, t, n, i);
	}
	r.to = function(e, t) {
		return a(e, t, this, !0);
	}, r.from = function(e, t) {
		return a(e, t, this);
	};
	var o = function(e) {
		return e.$u ? n.utc() : n();
	};
	r.toNow = function(e) {
		return this.to(o(this), e);
	}, r.fromNow = function(e) {
		return this.from(o(this), e);
	};
}), W = {
	get isBrowser() {
		return typeof window < "u";
	},
	get window() {
		return this.isBrowser ? window : null;
	},
	get langShort() {
		return this.isBrowser ? window.navigator.language.split("-")[0] : "en";
	},
	get langFull() {
		return this.isBrowser ? window.navigator.language : "en-US";
	},
	get isZh() {
		return this.langShort === "zh";
	},
	get deviceType() {
		let e = W.window?.navigator?.userAgent?.toLowerCase();
		return /android/.test(e) ? "android" : /iphone|ipad|ipod/.test(e) ? "ios" : "pc";
	},
	get isPC() {
		return this.deviceType === "pc";
	}
}, G = (e) => {
	try {
		return new URL(e).hostname.replace("www.", "");
	} catch {
		return null;
	}
}, K = (e) => {
	let t = W.window?.location?.href?.split("?")[1];
	return t ? new URLSearchParams(t).get(e) : null;
}, q = async (e) => {
	try {
		return new Promise((t) => {
			W.window?.navigator?.clipboard?.writeText(e).then(() => t(!0)).catch(() => t(!1));
		});
	} catch {
		let t = document.createElement("input");
		return t.value = e, document.body.appendChild(t), t.select(), document.execCommand("Copy"), document.body.removeChild(t), !0;
	}
};
M.locale(W.langFull), M.extend(H), M.extend(U);
var J = {
	format(e, t) {
		return e ? M(Y(e)).format(t) : "";
	},
	formatUTC(e, t) {
		if (!e) return "";
		let n = Y(e);
		return M.utc(n).format(t);
	},
	format2UTC(e, t) {
		return e ? M(Y(e)).utc().format(t) : "";
	},
	format2Local(e, t) {
		if (!e) return "";
		let n = Y(e), r = n ? new Date(n) : /* @__PURE__ */ new Date(), i = X(t);
		return new Intl.DateTimeFormat("default", i).format(r);
	},
	formatRelativeTime(e) {
		if (!e) return "";
		let t = M(), n = Y(e), r = M(n), i = t.diff(r, "day");
		return i < 7 ? r.fromNow() : i < 365 ? this.format2Local(n, "MMM-D") : this.format2Local(n, "YYYY-MMM");
	},
	formatMilliseconds(e, t = 0) {
		let n = {
			zh: [
				"毫秒",
				"秒",
				"分钟",
				"小时",
				"天"
			],
			en: [
				"ms",
				"s",
				"m",
				"h",
				"d"
			]
		}, r = W.isZh ? n.zh : n.en;
		if (!e) return `0${r[1]}`;
		let i = e / 1e3, a = i / 60, o = a / 60, s = o / 24;
		return s >= 1 ? `${s.toFixed(t)}天` : o >= 1 ? `${o.toFixed(t)}小时` : a >= 1 ? `${a.toFixed(t)}分钟` : i >= 1 ? `${i.toFixed(t)}秒` : `${e}毫秒`;
	}
};
function Y(e) {
	if (e !== "now") {
		if (typeof e == "number") {
			let t = e.toString().split(".")[0], n = t.length;
			return n === 10 ? e * 1e3 : n < 13 ? parseInt(t.padEnd(13, "0")) : n > 13 ? parseInt(t.substring(0, 13)) : e;
		}
		return e;
	}
}
function X(e) {
	let t = [
		{
			token: "YYYY",
			option: { year: "numeric" }
		},
		{
			token: "YY",
			option: { year: "2-digit" }
		},
		{
			token: "MMMM",
			option: { month: "long" }
		},
		{
			token: "MMM",
			option: { month: "short" }
		},
		{
			token: "MM",
			option: { month: "2-digit" }
		},
		{
			token: "M",
			option: { month: "numeric" }
		},
		{
			token: "DD",
			option: { day: "2-digit" }
		},
		{
			token: "D",
			option: { day: "numeric" }
		},
		{
			token: "dddd",
			option: { weekday: "long" }
		},
		{
			token: "ddd",
			option: { weekday: "short" }
		},
		{
			token: "dd",
			option: { weekday: "narrow" }
		},
		{
			token: "HH",
			option: {
				hour: "2-digit",
				hour12: !1
			}
		},
		{
			token: "H",
			option: {
				hour: "numeric",
				hour12: !1
			}
		},
		{
			token: "hh",
			option: {
				hour: "2-digit",
				hour12: !0
			}
		},
		{
			token: "h",
			option: {
				hour: "numeric",
				hour12: !0
			}
		},
		{
			token: "mm",
			option: { minute: "2-digit" }
		},
		{
			token: "m",
			option: { minute: "numeric" }
		},
		{
			token: "ss",
			option: { second: "2-digit" }
		},
		{
			token: "s",
			option: { second: "numeric" }
		},
		{
			token: "A",
			option: { hour12: !0 }
		},
		{
			token: "a",
			option: { hour12: !0 }
		},
		{
			token: "Z",
			option: { timeZoneName: "short" }
		}
	], n = {};
	return t.reverse().forEach(({ token: t, option: r }) => {
		e.includes(t) && Object.assign(n, r);
	}), n;
}
//#endregion
//#region packages/utils/valid.js
var Z = (e) => {
	try {
		return new URL(e), !0;
	} catch {
		return !1;
	}
};
//#endregion
export { K as a, e as c, G as i, n as l, J as n, W as o, q as r, r as s, Z as t, t as u };
