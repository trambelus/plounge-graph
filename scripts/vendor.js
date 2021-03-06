! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return it.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function a(e) {
        var t = bt[e] = {};
        return it.each(e.match(xt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (o(), it.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, a, o = it.expando,
                s = e.nodeType,
                l = s ? it.cache : e,
                u = s ? e[o] : e[o] && o;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = Z.pop() || it.guid++ : o), l[u] || (l[u] = s ? {} : {
                toJSON: it.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)), a = l[u], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[it.camelCase(t)] = n), "string" == typeof t ? (i = a[t], null == i && (i = a[it.camelCase(t)])) : i = a, i
        }
    }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, a = e.nodeType,
                o = a ? it.cache : e,
                s = a ? e[it.expando] : it.expando;
            if (o[s]) {
                if (t && (r = n ? o[s] : o[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !it.isEmptyObject(r)) return
                }(n || (delete o[s].data, u(o[s]))) && (a ? it.cleanData([e], !0) : nt.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (e) {}
    }

    function v(e) {
        var t = It.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            a = typeof e.getElementsByTagName !== Et ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Et ? e.querySelectorAll(t || "*") : void 0;
        if (!a)
            for (a = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? a.push(r) : it.merge(a, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], a) : a
    }

    function y(e) {
        Pt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = $t.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }

    function _(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, a = it._data(e),
                o = it._data(t, a),
                s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
            }
            o.data && (o.data = it.extend({}, o.data))
        }
    }

    function E(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events) it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (x(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body),
            a = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), a
    }

    function C(e) {
        var t = ft,
            n = Qt[e];
        return n || (n = S(e, t), "none" !== n && n || (Jt = (Jt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Jt.detach()), Qt[e] = n), n
    }

    function T(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--;)
            if (t = hn[i] + n, t in e) return t;
        return r
    }

    function N(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (a[o] = it._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Nt(r) && (a[o] = it._data(r, "olddisplay", C(r.nodeName)))) : (i = Nt(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (o = 0; s > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var r = un.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function P(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += it.css(e, n + kt[a], !0, i)), r ? ("content" === n && (o -= it.css(e, "padding" + kt[a], !0, i)), "margin" !== n && (o -= it.css(e, "border" + kt[a] + "Width", !0, i))) : (o += it.css(e, "padding" + kt[a], !0, i), "padding" !== n && (o += it.css(e, "border" + kt[a] + "Width", !0, i)));
        return o
    }

    function M(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = en(e),
            o = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, a);
        if (0 >= i || null == i) {
            if (i = tn(e, t, a), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
            r = o && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }

    function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }

    function L() {
        return setTimeout(function() {
            fn = void 0
        }), fn = it.now()
    }

    function A(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function z(e, t, n) {
        for (var r, i = (bn[t] || []).concat(bn["*"]), a = 0, o = i.length; o > a; a++)
            if (r = i[a].call(n, t, e)) return r
    }

    function I(e, t, n) {
        var r, i, a, o, s, l, u, c, d = this,
            p = {},
            h = e.style,
            f = e.nodeType && Nt(e),
            v = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = it.css(e, "display"), c = "none" === u ? it._data(e, "olddisplay") || C(e.nodeName) : u, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], a = a || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    f = !0
                }
                p[r] = v && v[r] || it.style(e, r)
            } else u = void 0;
        if (it.isEmptyObject(p)) "inline" === ("none" === u ? C(e.nodeName) : u) && (h.display = u);
        else {
            v ? "hidden" in v && (f = v.hidden) : v = it._data(e, "fxshow", {}), a && (v.hidden = !f), f ? it(e).show() : d.done(function() {
                it(e).hide()
            }), d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in p) it.style(e, t, p[t])
            });
            for (r in p) o = z(f ? v[r] : 0, r, d), r in v || (v[r] = o.start, f && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, a, o;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], a = e[n], it.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = it.cssHooks[r], o && "expand" in o) {
                a = o.expand(a), delete e[r];
                for (n in a) n in e || (e[n] = a[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, t, n) {
        var r, i, a = 0,
            o = xn.length,
            s = it.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = fn || L(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: it.extend({}, t),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: fn || L(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (O(c, u.opts.specialEasing); o > a; a++)
            if (r = xn[a].call(u, e, c, u.opts)) return r;
        return it.map(c, z, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                a = t.toLowerCase().match(xt) || [];
            if (it.isFunction(n))
                for (; r = a[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function j(e, t, n, r) {
        function i(s) {
            var l;
            return a[s] = !0, it.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var a = {},
            o = e === Yn;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }

    function q(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }

    function V(e, t, n) {
        for (var r, i, a, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) a = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                r || (r = o)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function F(e, t, n, r) {
        var i, a, o, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)
                for (i in u)
                    if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        o === !0 ? o = u[i] : u[i] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: o ? d : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function(t, i) {
            n || Zn.test(e) ? r(e, i) : Y(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== it.type(t)) r(e, t);
        else
            for (i in t) Y(e + "[" + i + "]", t[i], n, r)
    }

    function H() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function W() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Z = [],
        U = Z.slice,
        G = Z.concat,
        K = Z.push,
        J = Z.indexOf,
        Q = {},
        et = Q.toString,
        tt = Q.hasOwnProperty,
        nt = {},
        rt = "1.11.1",
        it = function(e, t) {
            return new it.fn.init(e, t)
        },
        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ot = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return it.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Z.sort,
        splice: Z.splice
    }, it.extend = it.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || it.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = o[r], n = i[r], o !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, a = e && it.isArray(e) ? e : []) : a = e && it.isPlainObject(e) ? e : {}, o[r] = it.extend(u, a, n)) : void 0 !== n && (o[r] = n));
        return o
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === it.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !it.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && it.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ot, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, a = 0,
                o = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; o > a && (i = t.apply(e[a], r), i !== !1); a++);
                else
                    for (a in e)
                        if (i = t.apply(e[a], r), i === !1) break
            } else if (s)
                for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
            else
                for (a in e)
                    if (i = t.call(e[a], a, e[a]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(at, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (J) return J.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
            return i
        },
        map: function(e, t, r) {
            var i, a = 0,
                o = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; o > a; a++) i = t(e[a], a, r), null != i && l.push(i);
            else
                for (a in e) i = t(e[a], a, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = U.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(U.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, r) {
            var i, a, o, s, l, u, d, h, f, v;
            if ((t ? t.ownerDocument || t : j) !== B && M(t), t = t || B, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (A && !r) {
                if (i = mt.exec(e))
                    if (o = i[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(o), !a || !a.parentNode) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                    }
                if (w.qsa && (!z || !z.test(e))) {
                    if (h = d = X, f = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = C(e), (d = t.getAttribute("id")) ? h = d.replace(bt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + p(u[l]);
                        f = xt.test(e) && c(t.parentNode) || t, v = u.join(",")
                    }
                    if (v) try {
                        return Q.apply(n, f.querySelectorAll(v)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(lt, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[X] = !0, e
        }

        function i(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) _.attrHandle[n[r]] = t
        }

        function o(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== $ && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                a = V++;
            return t.first ? function(t, n, a) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, a)
            } : function(t, n, o) {
                var s, l, u = [q, a];
                if (o) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[X] || (t[X] = {}), (s = l[r]) && s[0] === q && s[1] === a) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, o)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, r) {
            for (var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), u && t.push(s));
            return o
        }

        function y(e, t, n, i, a, o) {
            return i && !i[X] && (i = y(i)), a && !a[X] && (a = y(a, o)), r(function(r, o, s, l) {
                var u, c, d, p = [],
                    h = [],
                    f = o.length,
                    y = r || v(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? y : g(y, p, e, s, l),
                    x = n ? a || (r ? e : f || i) ? [] : o : m;
                if (n && n(m, x, s, l), i)
                    for (u = g(x, h), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (x[h[c]] = !(m[h[c]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = x.length; c--;)(d = x[c]) && u.push(m[c] = d);
                            a(null, x = [], u, l)
                        }
                        for (c = x.length; c--;)(d = x[c]) && (u = a ? tt.call(r, d) : p[c]) > -1 && (r[u] = !(o[u] = d))
                    }
                } else x = g(x === o ? x.splice(f, x.length) : x), a ? a(null, o, x, l) : Q.apply(o, x)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, a = _.relative[e[0].type], o = a || _.relative[" "], s = a ? 1 : 0, l = h(function(e) {
                    return e === t
                }, o, !0), u = h(function(e) {
                    return tt.call(t, e) > -1
                }, o, !0), c = [function(e, n, r) {
                    return !a && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                }]; i > s; s++)
                if (n = _.relative[e[s].type]) c = [h(f(c), n)];
                else {
                    if (n = _.filter[e[s].type].apply(null, e[s].matches), n[X]) {
                        for (r = ++s; i > r && !_.relative[e[r].type]; r++);
                        return y(s > 1 && f(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > s && m(e.slice(s, r)), i > r && m(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return f(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                a = e.length > 0,
                o = function(r, o, s, l, u) {
                    var c, d, p, h = 0,
                        f = "0",
                        v = r && [],
                        y = [],
                        m = N,
                        x = r || a && _.find.TAG("*", u),
                        b = q += null == m ? 1 : Math.random() || .1,
                        w = x.length;
                    for (u && (N = o !== B && o); f !== w && null != (c = x[f]); f++) {
                        if (a && c) {
                            for (d = 0; p = e[d++];)
                                if (p(c, o, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (q = b)
                        }
                        i && ((c = !p && c) && h--, r && v.push(c))
                    }
                    if (h += f, i && f !== h) {
                        for (d = 0; p = n[d++];) p(v, y, o, s);
                        if (r) {
                            if (h > 0)
                                for (; f--;) v[f] || y[f] || (y[f] = K.call(l));
                            y = g(y)
                        }
                        Q.apply(l, y), u && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (q = b, N = m), v
                };
            return i ? r(o) : o
        }
        var b, w, _, E, S, C, T, k, N, D, P, M, B, L, A, z, I, O, R, X = "sizzle" + -new Date,
            j = e.document,
            q = 0,
            V = 0,
            F = n(),
            Y = n(),
            H = n(),
            W = function(e, t) {
                return e === t && (P = !0), 0
            },
            $ = "undefined",
            Z = 1 << 31,
            U = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            J = G.push,
            Q = G.push,
            et = G.slice,
            tt = G.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = it.replace("w", "w#"),
            ot = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + rt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            lt = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ut = new RegExp("^" + rt + "*," + rt + "*"),
            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            pt = new RegExp(st),
            ht = new RegExp("^" + at + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            _t = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Q.apply(G = et.call(j.childNodes), j.childNodes), G[j.childNodes.length].nodeType
        } catch (Et) {
            Q = {
                apply: G.length ? function(e, t) {
                    J.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : j,
                r = n.defaultView;
            return n !== B && 9 === n.nodeType && n.documentElement ? (B = n, L = n.documentElement, A = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                M()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                M()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = yt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return L.appendChild(e).id = X, !n.getElementsByName || !n.getElementsByName(X).length
            }), w.getById ? (_.find.ID = function(e, t) {
                if (typeof t.getElementById !== $ && A) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(wt, _t);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(wt, _t);
                return function(e) {
                    var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return a
            }, _.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== $ && A ? t.getElementsByClassName(e) : void 0
            }, I = [], z = [], (w.qsa = yt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && z.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || z.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
            })), (w.matchesSelector = yt.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), I.push("!=", st)
            }), z = z.length && new RegExp(z.join("|")), I = I.length && new RegExp(I.join("|")), t = yt.test(L.compareDocumentPosition), R = t || yt.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, W = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === j && R(j, e) ? -1 : t === n || t.ownerDocument === j && R(j, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var r, i = 0,
                    a = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (a === s) return o(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? o(l[i], u[i]) : l[i] === j ? -1 : u[i] === j ? 1 : 0
            }, n) : B
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== B && M(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !A || I && I.test(n) || z && z.test(n))) try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, B, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== B && M(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== B && M(e);
            var n = _.attrHandle[t.toLowerCase()],
                r = n && U.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== r ? r : w.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (P = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(W), P) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, E = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += E(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, _t), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, _t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, _t).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, p, h, f, v = a !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !l && !s;
                        if (g) {
                            if (a) {
                                for (; v;) {
                                    for (d = t; d = d[v];)
                                        if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    f = v = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && m) {
                                for (c = g[X] || (g[X] = {}), u = c[e] || [], h = u[0] === q && u[1], p = u[0] === q && u[2], d = h && g.childNodes[h]; d = ++h && d && d[v] || (p = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        c[e] = [q, h, p];
                                        break
                                    }
                            } else if (m && (u = (t[X] || (t[X] = {}))[e]) && u[0] === q) p = u[1];
                            else
                                for (;
                                    (d = ++h && d && d[v] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++p || (m && ((d[X] || (d[X] = {}))[e] = [q, p]), d !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[X] ? a(n) : a.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = a(e, n), o = i.length; o--;) r = tt.call(e, i[o]), e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return a(e, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = T(e.replace(lt, "$1"));
                    return i[X] ? r(function(e, t, n, r) {
                        for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e, i(t, null, a, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, _t).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return vt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) _.pseudos[b] = l(b);
        return d.prototype = _.filters = _.pseudos, _.setFilters = new d, C = t.tokenize = function(e, n) {
            var r, i, a, o, s, l, u, c = Y[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = _.preFilter; s;) {
                (!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), a.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (o in _.filter) !(i = ft[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
                    value: r,
                    type: o,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : Y(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                a = H[e + " "];
            if (!a) {
                for (t || (t = C(e)), n = t.length; n--;) a = m(t[n]), a[X] ? r.push(a) : i.push(a);
                a = H(e, x(i, r)), a.selector = e
            }
            return a
        }, k = t.select = function(e, t, n, r) {
            var i, a, o, s, l, u = "function" == typeof e && e,
                d = !r && C(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && A && _.relative[a[1].type]) {
                    if (t = (_.find.ID(o.matches[0].replace(wt, _t), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (i = ft.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !_.relative[s = o.type]);)
                    if ((l = _.find[s]) && (r = l(o.matches[0].replace(wt, _t), xt.test(a[0].type) && c(t.parentNode) || t))) {
                        if (a.splice(i, 1), e = r.length && p(a), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (u || T(e, d))(r, t, !A, n, xt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = X.split("").sort(W).join("") === X, w.detectDuplicates = !!P, M(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(B.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (it.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var ht, ft = e.document,
        vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = it.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : vt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ft, !0)), dt.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = ft.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return ht.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ft, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
        };
    gt.prototype = it.fn, ht = it(ft);
    var yt = /^(?:parents|prev(?:Until|All))/,
        mt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function(e) {
            var t, n = it(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, a = [], o = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? it.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return it.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return it.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return it.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return it.sibling(e.firstChild)
        },
        contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function(e, t) {
        it.fn[e] = function(n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (mt[e] || (i = it.unique(i)), yt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var xt = /\S+/g,
        bt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? bt[e] || a(e) : it.extend({}, e);
        var t, n, r, i, o, s, l = [],
            u = !e.once && [],
            c = function(a) {
                for (n = e.memory && a, r = !0, o = s || 0, s = 0, i = l.length, t = !0; l && i > o; o++)
                    if (l[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var r = l.length;
                        ! function a(t) {
                            it.each(t, function(t, n) {
                                var r = it.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && a(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && it.each(arguments, function(e, n) {
                        for (var r;
                            (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, o >= r && o--)
                    }), this
                },
                has: function(e) {
                    return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], i = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, it.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", it.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return it.Deferred(function(n) {
                            it.each(t, function(t, a) {
                                var o = it.isFunction(e[t]) && e[t];
                                i[a[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? it.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, it.each(t, function(e, a) {
                var o = a[2],
                    s = a[3];
                r[a[1]] = o.add, s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
                    return i[a[0] + "With"](this === i ? r : this, arguments), this
                }, i[a[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                a = U.call(arguments),
                o = a.length,
                s = 1 !== o || e && it.isFunction(e.promise) ? o : 0,
                l = 1 === s ? e : it.Deferred(),
                u = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? U.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && it.isFunction(a[i].promise) ? a[i].promise().done(u(i, r, a)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, a), l.promise()
        }
    });
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ft.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ft, [it]), it.fn.triggerHandler && (it(ft).triggerHandler("ready"), it(ft).off("ready")))
            }
        }
    }), it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ft.readyState) setTimeout(it.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ft.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ft.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    o(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var _t, Et = "undefined";
    for (_t in it(nt)) break;
    nt.ownLast = "0" !== _t, nt.inlineBlockNeedsLayout = !1, it(function() {
            var e, t, n, r;
            n = ft.getElementsByTagName("body")[0], n && n.style && (t = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), it.acceptData = function(e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), it.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(a), 1 === a.nodeType && !it._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(a, r, i[r])));
                    it._data(a, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                it.data(this, e, t)
            }) : a ? l(a, e, it.data(a, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t),
                r = n.length,
                i = n.shift(),
                a = it._queueHooks(e, t),
                o = function() {
                    it.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = it.Deferred(),
                a = this,
                o = this.length,
                s = function() {
                    --r || i.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = it._data(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = ["Top", "Right", "Bottom", "Left"],
        Nt = function(e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        },
        Dt = it.access = function(e, t, n, r, i, a, o) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, a, o)
            } else if (void 0 !== r && (i = !0, it.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(it(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
        },
        Pt = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ft.createElement("input"),
            t = ft.createElement("div"),
            n = ft.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = ft.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Mt = /^(?:input|select|textarea)$/i,
        Bt = /^key/,
        Lt = /^(?:mouse|pointer|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        zt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, l, u, c, d, p, h, f, v, g = it._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof it === Et || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(xt) || [""], s = t.length; s--;) a = zt.exec(t[s]) || [], h = v = a[1], f = (a[2] || "").split(".").sort(), h && (u = it.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = it.event.special[h] || {}, d = it.extend({
                    type: h,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: f.join(".")
                }, l), (p = o[h]) || (p = o[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, r, f, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), it.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, l, u, c, d, p, h, f, v, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(xt) || [""], u = t.length; u--;)
                    if (s = zt.exec(t[u]) || [], h = v = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (d = it.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, p = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) o = p[a], !i && v !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                        l && !p.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || it.removeEvent(e, h, g.handle), delete c[h])
                    } else
                        for (h in c) it.event.remove(e, h + t[u], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var a, o, s, l, u, c, d, p = [r || ft],
                h = tt.call(t, "type") ? t.type : t,
                f = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ft, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(h + it.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), o = h.indexOf(":") < 0 && "on" + h, t = t[it.expando] ? t : new it.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[h] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(r)) {
                    for (l = u.delegateType || h, At.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (r.ownerDocument || ft) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || h, a = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), a && a.apply(s, n), a = o && s[o], a && a.apply && it.acceptData(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && it.acceptData(r) && o && r[h] && !it.isWindow(r)) {
                    c = r[o], c && (r[o] = null), it.event.triggered = h;
                    try {
                        r[h]()
                    } catch (v) {}
                    it.event.triggered = void 0, c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, r, i, a, o = [],
                s = U.call(arguments),
                l = (it._data(this, "events") || {})[e.type] || [],
                u = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = it.event.handlers.call(this, e, l), t = 0;
                    (i = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, a = 0;
                        (r = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], a = 0; s > a; a++) r = t[a], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o
        },
        fix: function(e) {
            if (e[it.expando]) return e;
            var t, n, r, i = e.type,
                a = e,
                o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Lt.test(i) ? this.mouseHooks : Bt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new it.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || ft), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, a = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ft, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ft.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Et && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    a = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function() {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Mt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return it.event.remove(this, "._change"), !Mt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }
        }
    }), it.fn.extend({
        on: function(e, t, n, r, i) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = h;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return it().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = it.guid++)), this.each(function() {
                it.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                it.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ot = / jQuery\d+="(?:null|\d+)"/g,
        Rt = new RegExp("<(?:" + It + ")[\\s/>]", "i"),
        Xt = /^\s+/,
        jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qt = /<([\w:]+)/,
        Vt = /<tbody/i,
        Ft = /<|&#?\w+;/,
        Yt = /<(?:script|style|link)/i,
        Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Wt = /^$|\/(?:java|ecma)script/i,
        $t = /^true\/(.*)/,
        Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ut = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = v(ft),
        Kt = Gt.appendChild(ft.createElement("div"));
    Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td, it.extend({
        clone: function(e, t, n) {
            var r, i, a, o, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Rt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Kt.innerHTML = e.outerHTML, Kt.removeChild(a = Kt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = g(a), s = g(e), o = 0; null != (i = s[o]); ++o) r[o] && E(i, r[o]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(a), o = 0; null != (i = s[o]); o++) _(i, r[o]);
                else _(e, a);
            return r = g(a, "script"), r.length > 0 && w(r, !l && g(e, "script")), r = s = i = null, a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, a, o, s, l, u, c, d = e.length, p = v(t), h = [], f = 0; d > f; f++)
                if (a = e[f], a || 0 === a)
                    if ("object" === it.type(a)) it.merge(h, a.nodeType ? [a] : a);
                    else if (Ft.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (qt.exec(a) || ["", ""])[1].toLowerCase(), c = Ut[l] || Ut._default, s.innerHTML = c[1] + a.replace(jt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Xt.test(a) && h.push(t.createTextNode(Xt.exec(a)[0])), !nt.tbody)
                    for (a = "table" !== l || Vt.test(a) ? "<table>" !== c[1] || Vt.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--;) it.nodeName(u = a.childNodes[i], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (it.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(a));
            for (s && p.removeChild(s), nt.appendChecked || it.grep(g(h, "input"), y), f = 0; a = h[f++];)
                if ((!r || -1 === it.inArray(a, r)) && (o = it.contains(a.ownerDocument, a), s = g(p.appendChild(a), "script"), o && w(s), n))
                    for (i = 0; a = s[i++];) Wt.test(a.type || "") && n.push(a);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, a, o = 0, s = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = e[o]); o++)
                if ((t || it.acceptData(n)) && (i = n[s], a = i && l[i])) {
                    if (a.events)
                        for (r in a.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, a.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Et ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                }
        }
    }), it.fn.extend({
        text: function(e) {
            return Dt(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t)
            })
        },
        html: function(e) {
            return Dt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ot, "") : void 0;
                if (!("string" != typeof e || Yt.test(e) || !nt.htmlSerialize && Rt.test(e) || !nt.leadingWhitespace && Xt.test(e) || Ut[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(jt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, a, o, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                p = e[0],
                h = it.isFunction(p);
            if (h || u > 1 && "string" == typeof p && !nt.checkClone && Ht.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                h && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (a = it.map(g(s, "script"), x), i = a.length; u > l; l++) r = s, l !== d && (r = it.clone(r, !0, !0), i && it.merge(a, g(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (o = a[a.length - 1].ownerDocument, it.map(a, b), l = 0; i > l; l++) r = a[l], Wt.test(r.type || "") && !it._data(r, "globalEval") && it.contains(o, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Zt, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, r = 0, i = [], a = it(e), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), it(a[r])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Jt, Qt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ft.getElementsByTagName("body")[0], n && n.style ? (t = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ft.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        rn = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        an = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tn = function(e, t, n) {
            var r, i, a, o, s = e.style;
            return n = n || en(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || it.contains(e.ownerDocument, e) || (o = it.style(e, t)), rn.test(o) && nn.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 === o ? o : o + ""
        }) : ft.documentElement.currentStyle && (en = function(e) {
            return e.currentStyle
        }, tn = function(e, t, n) {
            var r, i, a, o, s = e.style;
            return n = n || en(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), rn.test(o) && !an.test(t) && (r = s.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = r, a && (i.left = a)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r, i;
                n = ft.getElementsByTagName("body")[0], n && n.style && (t = ft.createElement("div"), r = ft.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(ft.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, a, o, s, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), it.swap = function(e, t, n, r) {
            var i, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            i = n.apply(e, r || []);
            for (a in t) e.style[a] = o[a];
            return i
        };
    var on = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + Tt + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + Tt + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        hn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = it.camelCase(t),
                    l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = k(l, s)), o = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t];
                if (a = typeof n, "string" === a && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = k(e.style, s)), o = it.cssHooks[t] || it.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = tn(e, t, r)), "normal" === a && t in pn && (a = pn[t]), "" === n || n ? (i = parseFloat(a), n === !0 || it.isNumeric(i) ? i || 0 : a) : a
        }
    }), it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return M(e, t, r)
                }) : M(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && en(e);
                return D(e, n, r ? P(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(a.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = on.test(a) ? a.replace(on, i) : a + " " + i)
        }
    }), it.cssHooks.marginRight = T(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kt[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = D)
    }), it.fn.extend({
        css: function(e, t) {
            return Dt(this, function(e, t, n) {
                var r, i, a = {},
                    o = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > o; o++) a[t[o]] = it.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Nt(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = B.prototype.init, it.fx.step = {};
    var fn, vn, gn = /^(?:toggle|show|hide)$/,
        yn = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        mn = /queueHooks$/,
        xn = [I],
        bn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = yn.exec(t),
                    a = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    o = (it.cssNumber[e] || "px" !== a && +r) && yn.exec(it.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (o && o[3] !== a) {
                    a = a || o[3], i = i || [], o = +r || 1;
                    do s = s || ".5", o /= s, it.style(n.elem, e, o + a); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(R, {
            tweener: function(e, t) {
                it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bn[n] = bn[n] || [], bn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? xn.unshift(e) : xn.push(e)
            }
        }), it.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? it.extend({}, e) : {
                complete: n || !n && t || it.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !it.isFunction(t) && t
            };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
            }, r
        }, it.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Nt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = it.isEmptyObject(e),
                    a = it.speed(t, n, r),
                    o = function() {
                        var t = R(this, it.extend({}, e), a);
                        (i || it._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        a = it.timers,
                        o = it._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && mn.test(i) && r(o[i]);
                    for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                    (t || !n) && it.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = it._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        a = it.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function(e, t) {
            var n = it.fn[t];
            it.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), it.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            it.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), it.timers = [], it.fx.tick = function() {
            var e, t = it.timers,
                n = 0;
            for (fn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), fn = void 0
        }, it.fx.timer = function(e) {
            it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function() {
            vn || (vn = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function() {
            clearInterval(vn), vn = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function(e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = ft.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ft.createElement("select"), i = n.appendChild(ft.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ft.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var wn = /\r/g;
    it.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = it.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, a = it.makeArray(t), o = i.length; o--;)
                        if (r = i[o], it.inArray(it.valHooks.option.get(r), a) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var _n, En, Sn = it.expr.attrHandle,
        Cn = /^(?:checked|selected)$/i,
        Tn = nt.getSetAttribute,
        kn = nt.input;
    it.fn.extend({
        attr: function(e, t) {
            return Dt(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Et ? it.prop(e, t, n) : (1 === a && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? En : _n)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                a = t && t.match(xt);
            if (a && 1 === e.nodeType)
                for (; n = a[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? kn && Tn || !Cn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(Tn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), En = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : kn && Tn || !Cn.test(n) ? e.setAttribute(!Tn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Sn[t] || it.find.attr;
        Sn[t] = kn && Tn || !Cn.test(t) ? function(e, t, r) {
            var i, a;
            return r || (a = Sn[t], Sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Sn[t] = a), i
        } : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), kn && Tn || (it.attrHooks.value = {
        set: function(e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : _n && _n.set(e, t, n)
        }
    }), Tn || (_n = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Sn.id = Sn.name = Sn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: _n.set
    }, it.attrHooks.contenteditable = {
        set: function(e, t, n) {
            _n.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function(e, t) {
        it.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nn = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(e, t) {
            return Dt(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = it.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !it.isXMLDoc(e), a && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nn.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
        it.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var Pn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(xt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : " ")) {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = it.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(xt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : "")) {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        o = e ? it.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), a = e.match(xt) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Et || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn = it.now(),
        Bn = /\?/,
        Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = it.trim(t + "");
        return i && !it.trim(i.replace(Ln, function(e, t, i, a) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !a - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var An, zn, In = /#.*$/,
        On = /([?&])_=[^&]*/,
        Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        jn = /^(?:GET|HEAD)$/,
        qn = /^\/\//,
        Vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Fn = {},
        Yn = {},
        Hn = "*/".concat("*");
    try {
        zn = location.href
    } catch (Wn) {
        zn = ft.createElement("a"), zn.href = "", zn = zn.href
    }
    An = Vn.exec(zn.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zn,
            type: "GET",
            isLocal: Xn.test(An[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, it.ajaxSettings), t) : q(it.ajaxSettings, e)
        },
        ajaxPrefilter: X(Fn),
        ajaxTransport: X(Yn),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, y, m, b, _ = t;
                2 !== x && (x = 2, s && clearTimeout(s), u = void 0, o = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (m = V(d, w, n)), m = F(d, m, w, i), i ? (d.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (it.lastModified[a] = b), b = w.getResponseHeader("etag"), b && (it.etag[a] = b)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = m.state, c = m.data, y = m.error, i = !y)) : (y = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || _) + "", i ? f.resolveWith(p, [c, _, w]) : f.rejectWith(p, [w, _, y]), w.statusCode(g), g = void 0, l && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : y]), v.fireWith(p, [w, _]), l && (h.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, a, o, s, l, u, c, d = it.ajaxSetup({}, t),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? it(p) : it.event,
                f = it.Deferred(),
                v = it.Callbacks("once memory"),
                g = d.statusCode || {},
                y = {},
                m = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!c)
                                for (c = {}; t = Rn.exec(o);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = m[n] = m[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (f.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || zn) + "").replace(In, "").replace(qn, An[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(xt) || [""], null == d.crossDomain && (r = Vn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === An[1] && r[2] === An[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (An[3] || ("http:" === An[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), j(Fn, d, t, w), 2 === x) return w;
            l = d.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !jn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Bn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = On.test(a) ? a.replace(On, "$1_=" + Mn++) : a + (Bn.test(a) ? "&" : "?") + "_=" + Mn++)), d.ifModified && (it.lastModified[a] && w.setRequestHeader("If-Modified-Since", it.lastModified[a]), it.etag[a] && w.setRequestHeader("If-None-Match", it.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Hn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (u = j(Yn, d, t, w)) {
                w.readyState = 1, l && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, u.send(y, n)
                } catch (_) {
                    if (!(2 > x)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), it._evalUrl = function(e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function(e) {
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(it.isFunction(e) ? function(t) {
                it(this).wrapInner(e.call(this, t))
            } : function() {
                var t = it(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e)
    };
    var $n = /%20/g,
        Zn = /\[\]$/,
        Un = /\r?\n/g,
        Gn = /^(?:submit|button|image|reset|file)$/i,
        Kn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Y(n, e[n], t, i);
        return r.join("&").replace($n, "+")
    }, it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Kn.test(this.nodeName) && !Gn.test(e) && (this.checked || !Pt.test(e))
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Un, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Un, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && H() || W()
    } : H;
    var Jn = 0,
        Qn = {},
        er = it.ajaxSettings.xhr();
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Qn) Qn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, a = e.xhr(),
                        o = ++Jn;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) a[i] = e.xhrFields[i];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && a.setRequestHeader(i, n[i] + "");
                    a.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, l, u;
                        if (t && (i || 4 === a.readyState))
                            if (delete Qn[o], t = void 0, a.onreadystatechange = it.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, l, u, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ft.head || it("head")[0] || ft.documentElement;
            return {
                send: function(r, i) {
                    t = ft.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || it.expando + "_" + Mn++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, a, o, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Bn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || it.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && it.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ft;
        var r = dt.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, a, o = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && it.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, l, u, c = it.css(e, "position"),
                d = it(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = it.css(e, "top"), l = it.css(e, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [a, l]) > -1, u ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, it.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                a = i && i.ownerDocument;
            if (a) return t = a.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Et && (r = i.getBoundingClientRect()), n = $(a), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(r, "marginTop", !0),
                    left: t.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || ir
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(r) {
            return Dt(this, function(e, r, i) {
                var a = $(e);
                return void 0 === i ? a ? t in a ? a[t] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(n ? it(a).scrollLeft() : i, n ? i : it(a).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = T(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            it.fn[r] = function(r, i) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return Dt(this, function(t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, o) : it.style(t, n, r, o)
                }, t, a ? r : void 0, a, null)
            }
        })
    }), it.fn.size = function() {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var ar = e.jQuery,
        or = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = or), t && e.jQuery === it && (e.jQuery = ar), it
    }, typeof t === Et && (e.jQuery = e.$ = it), it
});
var cytoscape;
! function(e) {
    "use strict";
    var t = cytoscape = function() {
        return cytoscape.init.apply(cytoscape, arguments)
    };
    t.version = "2.3.3", t.init = function(e) {
        return void 0 === e && (e = {}), t.is.plainObject(e) ? new t.Core(e) : t.is.string(e) ? t.extension.apply(t.extension, arguments) : void 0
    }, t.fn = {}, "undefined" != typeof module && module.exports && (module.exports = cytoscape), "undefined" != typeof define && define.amd && define("cytoscape", function() {
        return cytoscape
    }), e && (e.cytoscape = cytoscape)
}("undefined" == typeof window ? null : window),
function(e, t) {
    "use strict";
    e.is = {
        defined: function(e) {
            return null != e
        },
        string: function(e) {
            return null != e && "string" == typeof e
        },
        fn: function(e) {
            return null != e && "function" == typeof e
        },
        array: function(e) {
            return Array.isArray ? Array.isArray(e) : null != e && e instanceof Array
        },
        plainObject: function(t) {
            return null != t && typeof t == typeof {} && !e.is.array(t) && t.constructor === Object
        },
        number: function(e) {
            return null != e && "number" == typeof e && !isNaN(e)
        },
        integer: function(t) {
            return e.is.number(t) && Math.floor(t) === t
        },
        color: function(e) {
            return null != e && "string" == typeof e && "" !== $.Color(e).toString()
        },
        bool: function(e) {
            return null != e && typeof e == typeof !0
        },
        elementOrCollection: function(t) {
            return e.is.element(t) || e.is.collection(t)
        },
        element: function(t) {
            return t instanceof e.Element && t._private.single
        },
        collection: function(t) {
            return t instanceof e.Collection && !t._private.single
        },
        core: function(t) {
            return t instanceof e.Core
        },
        style: function(t) {
            return t instanceof e.Style
        },
        stylesheet: function(t) {
            return t instanceof e.Stylesheet
        },
        event: function(t) {
            return t instanceof e.Event
        },
        emptyString: function(t) {
            return t ? e.is.string(t) && ("" === t || t.match(/^\s+$/)) ? !0 : !1 : !0
        },
        nonemptyString: function(t) {
            return t && e.is.string(t) && "" !== t && !t.match(/^\s+$/) ? !0 : !1
        },
        domElement: function(e) {
            return "undefined" == typeof HTMLElement ? !1 : e instanceof HTMLElement
        },
        touch: function() {
            return t && ("ontouchstart" in t || t.DocumentTouch && document instanceof DocumentTouch)
        },
        boundingBox: function(t) {
            return e.is.plainObject(t) && e.is.number(t.x1) && e.is.number(t.x2) && e.is.number(t.y1) && e.is.number(t.y2)
        }
    }
}(cytoscape, "undefined" == typeof window ? null : window),
function(e, t) {
    "use strict";
    e.util = {
        extend: function() {
            var t, n, r, i, a, o, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || e.is.fn(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
                if (null != (t = arguments[l]))
                    for (n in t) r = s[n], i = t[n], s !== i && (c && i && (e.is.plainObject(i) || (a = e.is.array(i))) ? (a ? (a = !1, o = r && e.is.array(r) ? r : []) : o = r && e.is.plainObject(r) ? r : {}, s[n] = e.util.extend(c, o, i)) : void 0 !== i && (s[n] = i));
            return s
        },
        require: function(n, r, i) {
            var a;
            i = e.util.extend({
                msgIfNotFound: !0
            }, i);
            var o = !1,
                s = function(e) {
                    o = !0, r(e)
                },
                l = function(e) {
                    t && (a = t[n]), void 0 !== a && s(a), e && e()
                },
                u = function() {
                    o || c(d)
                },
                c = function(e) {
                    "undefined" != typeof module && module.exports && require && (a = require(n)), void 0 !== a && s(a), e && e()
                },
                d = function() {
                    o || p(h)
                },
                p = function(e) {
                    "undefined" != typeof define && define.amd && require && require([n], function(t) {
                        a = t, void 0 !== a && s(a), e && e()
                    })
                },
                h = function() {
                    !o && i.msgIfNotFound && e.util.error("Cytoscape.js tried to pull in dependency `" + n + "` but no module (i.e. CommonJS, AMD, or window) was found")
                };
            l(u)
        },
        requires: function(t, n) {
            for (var r = [], i = [], a = function() {
                    for (var e = 0; e < t.length; e++)
                        if (!i[e]) return;
                    n.apply(n, r)
                }, o = 0; o < t.length; o++) ! function() {
                var n = t[o],
                    s = o;
                e.util.require(n, function(e) {
                    r[s] = e, i[s] = !0, a()
                })
            }()
        },
        throttle: function(t, n, r) {
            var i = !0,
                a = !0;
            return r === !1 ? i = !1 : e.is.plainObject(r) && (i = "leading" in r ? r.leading : i, a = "trailing" in r ? r.trailing : a), r = r || {}, r.leading = i, r.maxWait = n, r.trailing = a, e.util.debounce(t, n, r)
        },
        now: function() {
            return +new Date
        },
        debounce: function(t, n, r) {
            var i, a, o, s, l, u, c, d = 0,
                p = !1,
                h = !0;
            if (e.is.fn(t)) {
                if (n = Math.max(0, n) || 0, r === !0) {
                    var f = !0;
                    h = !1
                } else e.is.plainObject(r) && (f = r.leading, p = "maxWait" in r && (Math.max(n, r.maxWait) || 0), h = "trailing" in r ? r.trailing : h);
                var v = function() {
                        var r = n - (e.util.now() - s);
                        if (0 >= r) {
                            a && clearTimeout(a);
                            var p = c;
                            a = u = c = void 0, p && (d = e.util.now(), o = t.apply(l, i), u || a || (i = l = null))
                        } else u = setTimeout(v, r)
                    },
                    g = function() {
                        u && clearTimeout(u), a = u = c = void 0, (h || p !== n) && (d = e.util.now(), o = t.apply(l, i), u || a || (i = l = null))
                    };
                return function() {
                    if (i = arguments, s = e.util.now(), l = this, c = h && (u || !f), p === !1) var r = f && !u;
                    else {
                        a || f || (d = s);
                        var y = p - (s - d),
                            m = 0 >= y;
                        m ? (a && (a = clearTimeout(a)), d = s, o = t.apply(l, i)) : a || (a = setTimeout(g, y))
                    }
                    return m && u ? u = clearTimeout(u) : u || n === p || (u = setTimeout(v, n)), r && (m = !0, o = t.apply(l, i)), !m || u || a || (i = l = null), o
                }
            }
        },
        error: function(e) {
            if (!console) throw e;
            if (console.error) console.error.apply(console, arguments);
            else {
                if (!console.log) throw e;
                console.log.apply(console, arguments)
            }
        },
        clone: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        },
        copy: function(t) {
            return null == t ? t : e.is.array(t) ? t.slice() : e.is.plainObject(t) ? e.util.clone(t) : t
        },
        makeBoundingBox: function(e) {
            if (null != e.x1 && null != e.y1) {
                if (null != e.x2 && null != e.y2 && e.x2 >= e.x1 && e.y2 >= e.y1) return {
                    x1: e.x1,
                    y1: e.y1,
                    x2: e.x2,
                    y2: e.y2,
                    w: e.x2 - e.x1,
                    h: e.y2 - e.y1
                };
                if (null != e.w && null != e.h && e.w >= 0 && e.h >= 0) return {
                    x1: e.x1,
                    y1: e.y1,
                    x2: e.x1 + e.w,
                    y2: e.y1 + e.h,
                    w: e.w,
                    h: e.h
                }
            }
        },
        mapEmpty: function(e) {
            var t = !0;
            if (null != e)
                for (var n in e) {
                    t = !1;
                    break
                }
            return t
        },
        pushMap: function(t) {
            var n = e.util.getMap(t);
            null == n ? e.util.setMap($.extend({}, t, {
                value: [t.value]
            })) : n.push(t.value)
        },
        setMap: function(t) {
            for (var n, r = t.map, i = t.keys, a = i.length, o = 0; a > o; o++) {
                var n = i[o];
                e.is.plainObject(n) && e.util.error("Tried to set map with object key"), o < i.length - 1 ? (null == r[n] && (r[n] = {}), r = r[n]) : r[n] = t.value
            }
        },
        getMap: function(t) {
            for (var n = t.map, r = t.keys, i = r.length, a = 0; i > a; a++) {
                var o = r[a];
                if (e.is.plainObject(o) && e.util.error("Tried to get map with object key"), n = n[o], null == n) return n
            }
            return n
        },
        deleteMap: function(t) {
            for (var n = t.map, r = t.keys, i = r.length, a = t.keepChildren, o = 0; i > o; o++) {
                var s = r[o];
                e.is.plainObject(s) && e.util.error("Tried to delete map with object key");
                var l = o === t.keys.length - 1;
                if (l)
                    if (a)
                        for (var u in n) a[u] || (n[u] = void 0);
                    else n[s] = void 0;
                else n = n[s]
            }
        },
        capitalize: function(t) {
            return e.is.emptyString(t) ? t : t.charAt(0).toUpperCase() + t.substring(1)
        },
        camel2dash: function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.toLowerCase(),
                    a = r !== i;
                a ? (t.push("-"), t.push(i)) : t.push(r)
            }
            var o = t.length === e.length;
            return o ? e : t.join("")
        },
        dash2camel: function(e) {
            for (var t = [], n = !1, r = 0; r < e.length; r++) {
                var i = e[r],
                    a = "-" === i;
                a ? n = !0 : (t.push(n ? i.toUpperCase() : i), n = !1)
            }
            return t.join("")
        },
        trim: function(e) {
            var t, n;
            for (t = 0; t < e.length && " " === e[t]; t++);
            for (n = e.length - 1; n > t && " " === e[n]; n--);
            return e.substring(t, n + 1)
        },
        hex2tuple: function(e) {
            if ((4 === e.length || 7 === e.length) && "#" === e[0]) {
                var t, n, r, i = 4 === e.length,
                    a = 16;
                return i ? (t = parseInt(e[1] + e[1], a), n = parseInt(e[2] + e[2], a), r = parseInt(e[3] + e[3], a)) : (t = parseInt(e[1] + e[2], a), n = parseInt(e[3] + e[4], a), r = parseInt(e[5] + e[6], a)), [t, n, r]
            }
        },
        hsl2tuple: function(t) {
            function n(e, t, n) {
                return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var r, i, a, o, s, l, u, c, d = new RegExp("^" + e.util.regex.hsla + "$").exec(t);
            if (d) {
                if (i = parseInt(d[1]), 0 > i ? i = (360 - -1 * i % 360) % 360 : i > 360 && (i %= 360), i /= 360, a = parseFloat(d[2]), 0 > a || a > 100) return;
                if (a /= 100, o = parseFloat(d[3]), 0 > o || o > 100) return;
                if (o /= 100, s = d[4], void 0 !== s && (s = parseFloat(s), 0 > s || s > 1)) return;
                if (0 === a) l = u = c = Math.round(255 * o);
                else {
                    var p = .5 > o ? o * (1 + a) : o + a - o * a,
                        h = 2 * o - p;
                    l = Math.round(255 * n(h, p, i + 1 / 3)), u = Math.round(255 * n(h, p, i)), c = Math.round(255 * n(h, p, i - 1 / 3))
                }
                r = [l, u, c, s]
            }
            return r
        },
        rgb2tuple: function(t) {
            var n, r = new RegExp("^" + e.util.regex.rgba + "$").exec(t);
            if (r) {
                n = [];
                for (var i = [], a = 1; 3 >= a; a++) {
                    var o = r[a];
                    if ("%" === o[o.length - 1] && (i[a] = !0), o = parseFloat(o), i[a] && (o = o / 100 * 255), 0 > o || o > 255) return;
                    n.push(Math.floor(o))
                }
                var s = i[1] || i[2] || i[3],
                    l = i[1] && i[2] && i[3];
                if (s && !l) return;
                var u = r[4];
                if (void 0 !== u) {
                    if (u = parseFloat(u), 0 > u || u > 1) return;
                    n.push(u)
                }
            }
            return n
        },
        colorname2tuple: function(t) {
            return e.util.colors[t.toLowerCase()]
        },
        color2tuple: function(t) {
            return (e.is.array(t) ? t : null) || e.util.colorname2tuple(t) || e.util.hex2tuple(t) || e.util.rgb2tuple(t) || e.util.hsl2tuple(t)
        },
        tuple2hex: function(e) {
            function t(e) {
                var t = e.toString(16);
                return 1 === t.length && (t = "0" + t), t
            }
            var n = e[0],
                r = e[1],
                i = e[2];
            return "#" + t(n) + t(r) + t(i)
        },
        colors: {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            grey: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, e.util.regex = {}, e.util.regex.number = "(?:[-]?\\d*\\.\\d+|[-]?\\d+|[-]?\\d*\\.\\d+[eE]\\d+)", e.util.regex.rgba = "rgb[a]?\\((" + e.util.regex.number + "[%]?)\\s*,\\s*(" + e.util.regex.number + "[%]?)\\s*,\\s*(" + e.util.regex.number + "[%]?)(?:\\s*,\\s*(" + e.util.regex.number + "))?\\)", e.util.regex.rgbaNoBackRefs = "rgb[a]?\\((?:" + e.util.regex.number + "[%]?)\\s*,\\s*(?:" + e.util.regex.number + "[%]?)\\s*,\\s*(?:" + e.util.regex.number + "[%]?)(?:\\s*,\\s*(?:" + e.util.regex.number + "))?\\)", e.util.regex.hsla = "hsl[a]?\\((" + e.util.regex.number + ")\\s*,\\s*(" + e.util.regex.number + "[%])\\s*,\\s*(" + e.util.regex.number + "[%])(?:\\s*,\\s*(" + e.util.regex.number + "))?\\)", e.util.regex.hslaNoBackRefs = "hsl[a]?\\((?:" + e.util.regex.number + ")\\s*,\\s*(?:" + e.util.regex.number + "[%])\\s*,\\s*(?:" + e.util.regex.number + "[%])(?:\\s*,\\s*(?:" + e.util.regex.number + "))?\\)", e.util.regex.hex3 = "\\#[0-9a-fA-F]{3}", e.util.regex.hex6 = "\\#[0-9a-fA-F]{6}";
    var n = t ? t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame : null;
    n = n || function(e) {
        e && setTimeout(e, 1e3 / 60)
    }, e.util.requestAnimationFrame = function(e) {
        n(e)
    }
}(cytoscape, "undefined" == typeof window ? null : window),
function(e) {
    "use strict";
    e.math = {}, e.math.signum = function(e) {
        return e > 0 ? 1 : 0 > e ? -1 : 0
    }, e.math.distance = function(e, t) {
        var n = t.x - e.x,
            r = t.y - e.y;
        return Math.sqrt(n * n + r * r)
    }, e.math.qbezierAt = function(e, t, n, r) {
        return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n
    }, e.math.qbezierPtAt = function(t, n, r, i) {
        return {
            x: e.math.qbezierAt(t.x, n.x, r.x, i),
            y: e.math.qbezierAt(t.y, n.y, r.y, i)
        }
    }, e.math.boundingBoxesIntersect = function(e, t) {
        return e.x1 > t.x2 ? !1 : t.x1 > e.x2 ? !1 : e.x2 < t.x1 ? !1 : t.x2 < e.x1 ? !1 : e.y2 < t.y1 ? !1 : t.y2 < e.y1 ? !1 : e.y1 > t.y2 ? !1 : t.y1 > e.y2 ? !1 : !0
    }, e.math.inBoundingBox = function(e, t, n) {
        return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2
    }, e.math.pointInBoundingBox = function(e, t) {
        return this.inBoundingBox(e, t.x, t.y)
    }, e.math.roundRectangleIntersectLine = function(e, t, n, r, i, a, o) {
        var s, l = this.getRoundRectangleRadius(i, a),
            u = i / 2,
            c = a / 2,
            d = n - u + l - o,
            p = r - c - o,
            h = n + u - l + o,
            f = p;
        if (s = this.finiteLinesIntersect(e, t, n, r, d, p, h, f, !1), s.length > 0) return s;
        var v = n + u + o,
            g = r - c + l - o,
            y = v,
            m = r + c - l + o;
        if (s = this.finiteLinesIntersect(e, t, n, r, v, g, y, m, !1), s.length > 0) return s;
        var x = n - u + l - o,
            b = r + c + o,
            w = n + u - l + o,
            _ = b;
        if (s = this.finiteLinesIntersect(e, t, n, r, x, b, w, _, !1), s.length > 0) return s;
        var E = n - u - o,
            S = r - c + l - o,
            C = E,
            T = r + c - l + o;
        if (s = this.finiteLinesIntersect(e, t, n, r, E, S, C, T, !1), s.length > 0) return s;
        var k, N = n - u + l,
            D = r - c + l;
        if (k = this.intersectLineCircle(e, t, n, r, N, D, l + o), k.length > 0 && k[0] <= N && k[1] <= D) return [k[0], k[1]];
        var P = n + u - l,
            M = r - c + l;
        if (k = this.intersectLineCircle(e, t, n, r, P, M, l + o), k.length > 0 && k[0] >= P && k[1] <= M) return [k[0], k[1]];
        var B = n + u - l,
            L = r + c - l;
        if (k = this.intersectLineCircle(e, t, n, r, B, L, l + o), k.length > 0 && k[0] >= B && k[1] >= L) return [k[0], k[1]];
        var A = n - u + l,
            z = r + c - l;
        return k = this.intersectLineCircle(e, t, n, r, A, z, l + o), k.length > 0 && k[0] <= A && k[1] >= z ? [k[0], k[1]] : []
    }, e.math.roundRectangleIntersectBox = function(e, t, n, r, i, a, o, s, l) {
        var u = this.getRoundRectangleRadius(i, a),
            c = o - i / 2 - l,
            d = s - a / 2 + u - l,
            p = o + i / 2 + l,
            h = s + a / 2 - u + l,
            f = o - i / 2 + u - l,
            v = s - a / 2 - l,
            g = o + i / 2 - u + l,
            y = s + a / 2 + l,
            m = Math.min(e, n),
            x = Math.max(e, n),
            b = Math.min(t, r),
            w = Math.max(t, r);
        return c > x ? !1 : m > p ? !1 : v > w ? !1 : b > y ? !1 : c >= m && x >= c && d >= b && w >= d ? !0 : p >= m && x >= p && d >= b && w >= d ? !0 : p >= m && x >= p && h >= b && w >= h ? !0 : c >= m && x >= c && h >= b && w >= h ? !0 : m >= c && p >= m && b >= d && h >= b ? !0 : x >= c && p >= x && b >= d && h >= b ? !0 : x >= c && p >= x && w >= d && h >= w ? !0 : m >= c && p >= m && w >= d && h >= w ? !0 : f >= m && x >= f && v >= b && w >= v ? !0 : g >= m && x >= g && v >= b && w >= v ? !0 : g >= m && x >= g && y >= b && w >= y ? !0 : f >= m && x >= f && y >= b && w >= y ? !0 : m >= f && g >= m && b >= v && y >= b ? !0 : x >= f && g >= x && b >= v && y >= b ? !0 : x >= f && g >= x && w >= v && y >= w ? !0 : m >= f && g >= m && w >= v && y >= w ? !0 : this.boxIntersectEllipse(m, b, x, w, l, 2 * u, 2 * u, f + l, d + l) ? !0 : this.boxIntersectEllipse(m, b, x, w, l, 2 * u, 2 * u, g - l, d + l) ? !0 : this.boxIntersectEllipse(m, b, x, w, l, 2 * u, 2 * u, g - l, h - l) ? !0 : this.boxIntersectEllipse(m, b, x, w, l, 2 * u, 2 * u, f + l, h - l) ? !0 : !1
    }, e.math.checkInBoundingCircle = function(e, t, n, r, i, a, o, s) {
        return e = (e - o) / (i + r), t = (t - s) / (a + r), n >= e * e + t * t
    }, e.math.boxInBezierVicinity = function(e, t, n, r, i, a, o, s, l, u, c) {
        var d = .25 * i + .5 * o + .25 * l,
            p = .25 * a + .5 * s + .25 * u,
            h = Math.min(e, n) - c,
            f = Math.min(t, r) - c,
            v = Math.max(e, n) + c,
            g = Math.max(t, r) + c;
        if (i >= h && v >= i && a >= f && g >= a) return 1;
        if (l >= h && v >= l && u >= f && g >= u) return 1;
        if (d >= h && v >= d && p >= f && g >= p) return 1;
        if (o >= h && v >= o && s >= f && g >= s) return 1;
        var y = Math.min(i, d, l),
            m = Math.min(a, p, u),
            x = Math.max(i, d, l),
            b = Math.max(a, p, u);
        return y > v || h > x || m > g || f > b ? 0 : 1
    }, e.math.checkBezierInBox = function(t, n, r, i, a, o, s, l, u, c) {
        function d(d) {
            var p = e.math.qbezierAt(a, s, u, d),
                h = e.math.qbezierAt(o, l, c, d);
            return p >= t && r >= p && h >= n && i >= h
        }
        for (var p = 0; 1 >= p; p += .25)
            if (!d(p)) return !1;
        return !0
    }, e.math.checkStraightEdgeInBox = function(e, t, n, r, i, a, o, s) {
        return i >= e && n >= i && o >= e && n >= o && a >= t && r >= a && s >= t && r >= s
    }, e.math.checkStraightEdgeCrossesBox = function(e, t, n, r, i, a, o, s, l) {
        var u, c, d = Math.min(e, n) - l,
            p = Math.min(t, r) - l,
            h = Math.max(e, n) + l,
            f = Math.max(t, r) + l,
            v = o - i,
            g = i,
            y = s - a,
            m = a;
        if (Math.abs(v) < 1e-4) return i >= d && h >= i && Math.min(a, s) <= p && Math.max(a, s) >= f;
        var x = (d - g) / v;
        if (x > 0 && 1 >= x && (u = y * x + m, u >= p && f >= u)) return !0;
        var b = (h - g) / v;
        if (b > 0 && 1 >= b && (u = y * b + m, u >= p && f >= u)) return !0;
        var w = (p - m) / y;
        if (w > 0 && 1 >= w && (c = v * w + g, c >= d && h >= c)) return !0;
        var _ = (f - m) / y;
        return _ > 0 && 1 >= _ && (c = v * _ + g, c >= d && h >= c) ? !0 : !1
    }, e.math.checkBezierCrossesBox = function(e, t, n, r, i, a, o, s, l, u, c) {
        var d = Math.min(e, n) - c,
            p = Math.min(t, r) - c,
            h = Math.max(e, n) + c,
            f = Math.max(t, r) + c;
        if (i >= d && h >= i && a >= p && f >= a) return !0;
        if (l >= d && h >= l && u >= p && f >= u) return !0;
        var v = i - 2 * o + l,
            g = -2 * i + 2 * o,
            y = i,
            m = [];
        if (Math.abs(v) < 1e-4) {
            var x = (d - i) / g,
                b = (h - i) / g;
            m.push(x, b)
        } else {
            var w, _, E = g * g - 4 * v * (y - d);
            if (E > 0) {
                var S = Math.sqrt(E);
                w = (-g + S) / (2 * v), _ = (-g - S) / (2 * v), m.push(w, _)
            }
            var C, T, k = g * g - 4 * v * (y - h);
            if (k > 0) {
                var S = Math.sqrt(k);
                C = (-g + S) / (2 * v), T = (-g - S) / (2 * v), m.push(C, T)
            }
        }
        m.sort(function(e, t) {
            return e - t
        });
        var N = a - 2 * s + u,
            D = -2 * a + 2 * s,
            P = a,
            M = [];
        if (Math.abs(N) < 1e-4) {
            var B = (p - a) / D,
                L = (f - a) / D;
            M.push(B, L)
        } else {
            var A, z, I = D * D - 4 * N * (P - p);
            if (I > 0) {
                var S = Math.sqrt(I);
                A = (-D + S) / (2 * N), z = (-D - S) / (2 * N), M.push(A, z)
            }
            var O, R, X = D * D - 4 * N * (P - f);
            if (X > 0) {
                var S = Math.sqrt(X);
                O = (-D + S) / (2 * N), R = (-D - S) / (2 * N), M.push(O, R)
            }
        }
        M.sort(function(e, t) {
            return e - t
        });
        for (var j = 0; j < m.length; j += 2)
            for (var q = 1; q < M.length; q += 2)
                if (m[j] < M[q] && M[q] >= 0 && m[j] <= 1 && m[j + 1] > M[q - 1] && M[q - 1] <= 1 && m[j + 1] >= 0) return !0;
        return !1
    }, e.math.inLineVicinity = function(e, t, n, r, i, a, o) {
        var s = o,
            l = Math.min(n, i),
            u = Math.max(n, i),
            c = Math.min(r, a),
            d = Math.max(r, a);
        return e >= l - s && u + s >= e && t >= c - s && d + s >= t
    }, e.math.inBezierVicinity = function(e, t, n, r, i, a, o, s) {
        var l = {
            x1: Math.min(n, o, i),
            x2: Math.max(n, o, i),
            y1: Math.min(r, s, a),
            y2: Math.max(r, s, a)
        };
        return e < l.x1 || e > l.x2 || t < l.y1 || t > l.y2 ? !1 : !0
    }, e.math.solveCubic = function(e, t, n, r, i) {
        t /= e, n /= e, r /= e;
        var a, o, s, l, u, c, d, p;
        return o = (3 * n - t * t) / 9, s = -(27 * r) + t * (9 * n - 2 * t * t), s /= 54, a = o * o * o + s * s, i[1] = 0, d = t / 3, a > 0 ? (u = s + Math.sqrt(a), u = 0 > u ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), c = s - Math.sqrt(a), c = 0 > c ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -d + u + c, d += (u + c) / 2, i[4] = i[2] = -d, d = Math.sqrt(3) * (-c + u) / 2, i[3] = d, void(i[5] = -d)) : (i[5] = i[3] = 0, 0 === a ? (p = 0 > s ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3), i[0] = -d + 2 * p, void(i[4] = i[2] = -(p + d))) : (o = -o, l = o * o * o, l = Math.acos(s / Math.sqrt(l)), p = 2 * Math.sqrt(o), i[0] = -d + p * Math.cos(l / 3), i[2] = -d + p * Math.cos((l + 2 * Math.PI) / 3), void(i[4] = -d + p * Math.cos((l + 4 * Math.PI) / 3))))
    }, e.math.sqDistanceToQuadraticBezier = function(e, t, n, r, i, a, o, s) {
        var l = 1 * n * n - 4 * n * i + 2 * n * o + 4 * i * i - 4 * i * o + o * o + r * r - 4 * r * a + 2 * r * s + 4 * a * a - 4 * a * s + s * s,
            u = 9 * n * i - 3 * n * n - 3 * n * o - 6 * i * i + 3 * i * o + 9 * r * a - 3 * r * r - 3 * r * s - 6 * a * a + 3 * a * s,
            c = 3 * n * n - 6 * n * i + n * o - n * e + 2 * i * i + 2 * i * e - o * e + 3 * r * r - 6 * r * a + r * s - r * t + 2 * a * a + 2 * a * t - s * t,
            d = 1 * n * i - n * n + n * e - i * e + r * a - r * r + r * t - a * t,
            p = [];
        this.solveCubic(l, u, c, d, p);
        for (var h = 1e-7, f = [], v = 0; 6 > v; v += 2) Math.abs(p[v + 1]) < h && p[v] >= 0 && p[v] <= 1 && f.push(p[v]);
        f.push(1), f.push(0);
        for (var g, y, m, x, b = -1, w = 0; w < f.length; w++) y = Math.pow(1 - f[w], 2) * n + 2 * (1 - f[w]) * f[w] * i + f[w] * f[w] * o, m = Math.pow(1 - f[w], 2) * r + 2 * (1 - f[w]) * f[w] * a + f[w] * f[w] * s, x = Math.pow(y - e, 2) + Math.pow(m - t, 2), b >= 0 ? b > x && (b = x, g = f[w]) : (b = x, g = f[w]);
        return b
    }, e.math.sqDistanceToFiniteLine = function(e, t, n, r, i, a) {
        var o = [e - n, t - r],
            s = [i - n, a - r],
            l = s[0] * s[0] + s[1] * s[1],
            u = o[0] * o[0] + o[1] * o[1],
            c = o[0] * s[0] + o[1] * s[1],
            d = c * c / l;
        return 0 > c ? u : d > l ? (e - i) * (e - i) + (t - a) * (t - a) : u - d
    }, e.math.pointInsidePolygon = function(e, t, n, r, i, a, o, s, l) {
        var u = new Array(n.length),
            c = Math.asin(s[1] / Math.sqrt(s[0] * s[0] + s[1] * s[1]));
        s[0] < 0 ? c += Math.PI / 2 : c = -c - Math.PI / 2;
        for (var d = Math.cos(-c), p = Math.sin(-c), h = 0; h < u.length / 2; h++) u[2 * h] = a / 2 * (n[2 * h] * d - n[2 * h + 1] * p), u[2 * h + 1] = o / 2 * (n[2 * h + 1] * d + n[2 * h] * p), u[2 * h] += r, u[2 * h + 1] += i;
        var f;
        if (l > 0) {
            var v = this.expandPolygon(u, -l);
            f = this.joinLines(v)
        } else f = u;
        for (var g, y, m, x, b, w = 0, _ = 0, h = 0; h < f.length / 2; h++)
            if (g = f[2 * h], y = f[2 * h + 1], h + 1 < f.length / 2 ? (m = f[2 * (h + 1)], x = f[2 * (h + 1) + 1]) : (m = f[2 * (h + 1 - f.length / 2)], x = f[2 * (h + 1 - f.length / 2) + 1]), g == e && m == e);
            else {
                if (!(g >= e && e >= m || e >= g && m >= e)) continue;
                b = (e - g) / (m - g) * (x - y) + y, b > t && w++, t > b && _++
            }
        return w % 2 === 0 ? !1 : !0
    }, e.math.joinLines = function(e) {
        for (var t, n, r, i, a, o, s, l, u = new Array(e.length / 2), c = 0; c < e.length / 4; c++) {
            t = e[4 * c], n = e[4 * c + 1], r = e[4 * c + 2], i = e[4 * c + 3], c < e.length / 4 - 1 ? (a = e[4 * (c + 1)], o = e[4 * (c + 1) + 1], s = e[4 * (c + 1) + 2], l = e[4 * (c + 1) + 3]) : (a = e[0], o = e[1], s = e[2], l = e[3]);
            var d = this.finiteLinesIntersect(t, n, r, i, a, o, s, l, !0);
            u[2 * c] = d[0], u[2 * c + 1] = d[1]
        }
        return u
    }, e.math.expandPolygon = function(e, t) {
        for (var n, r, i, a, o = new Array(2 * e.length), s = 0; s < e.length / 2; s++) {
            n = e[2 * s], r = e[2 * s + 1], s < e.length / 2 - 1 ? (i = e[2 * (s + 1)], a = e[2 * (s + 1) + 1]) : (i = e[0], a = e[1]);
            var l = a - r,
                u = -(i - n),
                c = Math.sqrt(l * l + u * u),
                d = l / c,
                p = u / c;
            o[4 * s] = n + d * t, o[4 * s + 1] = r + p * t, o[4 * s + 2] = i + d * t, o[4 * s + 3] = a + p * t
        }
        return o
    }, e.math.intersectLineEllipse = function(e, t, n, r, i, a) {
        var o = n - e,
            s = r - t;
        o /= i, s /= a;
        var l = Math.sqrt(o * o + s * s),
            u = l - 1;
        if (0 > u) return [];
        var c = u / l;
        return [(n - e) * c + e, (r - t) * c + t]
    }, e.math.dotProduct = function(e, t) {
        if (2 != e.length || 2 != t.length) throw "dot product: arguments are not vectors";
        return e[0] * t[0] + e[1] * t[1]
    }, e.math.intersectLineCircle = function(e, t, n, r, i, a, o) {
        var s = [n - e, r - t],
            l = [i, a],
            u = [e - i, t - a],
            c = s[0] * s[0] + s[1] * s[1],
            d = 2 * (u[0] * s[0] + u[1] * s[1]),
            l = u[0] * u[0] + u[1] * u[1] - o * o,
            p = d * d - 4 * c * l;
        if (0 > p) return [];
        var h = (-d + Math.sqrt(p)) / (2 * c),
            f = (-d - Math.sqrt(p)) / (2 * c),
            v = Math.min(h, f),
            g = Math.max(h, f),
            y = [];
        if (v >= 0 && 1 >= v && y.push(v), g >= 0 && 1 >= g && y.push(g), 0 === y.length) return [];
        var m = y[0] * s[0] + e,
            x = y[0] * s[1] + t;
        if (y.length > 1) {
            if (y[0] == y[1]) return [m, x];
            var b = y[1] * s[0] + e,
                w = y[1] * s[1] + t;
            return [m, x, b, w]
        }
        return [m, x]
    }, e.math.findCircleNearPoint = function(e, t, n, r, i) {
        var a = r - e,
            o = i - t,
            s = Math.sqrt(a * a + o * o),
            l = a / s,
            u = o / s;
        return [e + l * n, t + u * n]
    }, e.math.findMaxSqDistanceToOrigin = function(e) {
        for (var t, n = 1e-6, r = 0; r < e.length / 2; r++) t = e[2 * r] * e[2 * r] + e[2 * r + 1] * e[2 * r + 1], t > n && (n = t);
        return n
    }, e.math.finiteLinesIntersect = function(e, t, n, r, i, a, o, s, l) {
        var u = (o - i) * (t - a) - (s - a) * (e - i),
            c = (n - e) * (t - a) - (r - t) * (e - i),
            d = (s - a) * (n - e) - (o - i) * (r - t);
        if (0 !== d) {
            var p = u / d,
                h = c / d;
            return p >= 0 && 1 >= p && h >= 0 && 1 >= h ? [e + p * (n - e), t + p * (r - t)] : l ? [e + p * (n - e), t + p * (r - t)] : []
        }
        return 0 === u || 0 === c ? [e, n, o].sort()[1] === o ? [o, s] : [e, n, i].sort()[1] === i ? [i, a] : [i, o, n].sort()[1] === n ? [n, r] : [] : []
    }, e.math.boxIntersectEllipse = function(e, t, n, r, i, a, o, s, l) {
        if (e > n) {
            var u = e;
            e = n, n = u
        }
        if (t > r) {
            var c = t;
            t = r, r = c
        }
        var d = [s - a / 2 - i, l],
            p = [s + a / 2 + i, l],
            h = [s, l - o / 2 - i],
            f = [s, l + o / 2 + i];
        return n < d[0] ? !1 : e > p[0] ? !1 : t > f[1] ? !1 : r < h[1] ? !1 : e <= p[0] && p[0] <= n && t <= p[1] && p[1] <= r ? !0 : e <= d[0] && d[0] <= n && t <= d[1] && d[1] <= r ? !0 : e <= h[0] && h[0] <= n && t <= h[1] && h[1] <= r ? !0 : e <= f[0] && f[0] <= n && t <= f[1] && f[1] <= r ? !0 : (e = (e - s) / (a / 2 + i), n = (n - s) / (a / 2 + i), t = (t - l) / (o / 2 + i), r = (r - l) / (o / 2 + i), 1 >= e * e + t * t ? !0 : 1 >= n * n + t * t ? !0 : 1 >= n * n + r * r ? !0 : 1 >= e * e + r * r ? !0 : !1)
    }, e.math.boxIntersectPolygon = function(t, n, r, i, a, o, s, l, u, c, d) {
        if (t > r) {
            var p = t;
            t = r, r = p
        }
        if (n > i) {
            var h = n;
            n = i, i = h
        }
        var f = new Array(a.length),
            v = Math.asin(c[1] / Math.sqrt(c[0] * c[0] + c[1] * c[1]));
        c[0] < 0 ? v += Math.PI / 2 : v = -v - Math.PI / 2;
        for (var g = Math.cos(-v), y = Math.sin(-v), m = 0; m < f.length / 2; m++) f[2 * m] = o / 2 * (a[2 * m] * g - a[2 * m + 1] * y), f[2 * m + 1] = s / 2 * (a[2 * m + 1] * g + a[2 * m] * y), f[2 * m] += l, f[2 * m + 1] += u;
        for (var x = f[0], b = f[0], w = f[1], _ = f[1], m = 1; m < f.length / 2; m++) f[2 * m] > b && (b = f[2 * m]), f[2 * m] < x && (x = f[2 * m]), f[2 * m + 1] > _ && (_ = f[2 * m + 1]), f[2 * m + 1] < w && (w = f[2 * m + 1]);
        if (x - d > r) return !1;
        if (t > b + d) return !1;
        if (w - d > i) return !1;
        if (n > _ + d) return !1;
        var E;
        if (d > 0) {
            var S = e.math.expandPolygon(f, -d);
            E = e.math.joinLines(S)
        } else E = f;
        for (var m = 0; m < f.length / 2; m++)
            if (t <= f[2 * m] && f[2 * m] <= r && n <= f[2 * m + 1] && f[2 * m + 1] <= i) return !0;
        for (var m = 0; m < E.length / 2; m++) {
            var C, T, k = E[2 * m],
                N = E[2 * m + 1];
            if (m < E.length / 2 - 1 ? (C = E[2 * (m + 1)], T = E[2 * (m + 1) + 1]) : (C = E[0], T = E[1]), e.math.finiteLinesIntersect(k, N, C, T, t, n, r, n, !1).length > 0) return !0;
            if (e.math.finiteLinesIntersect(k, N, C, T, t, i, r, i, !1).length > 0) return !0;
            if (e.math.finiteLinesIntersect(k, N, C, T, t, n, t, i, !1).length > 0) return !0;
            if (e.math.finiteLinesIntersect(k, N, C, T, r, n, r, i, !1).length > 0) return !0
        }
        return !1
    }, e.math.polygonIntersectLine = function(t, n, r, i, a, o, s, l) {
        for (var u, c = [], d = new Array(r.length), p = 0; p < d.length / 2; p++) d[2 * p] = r[2 * p] * o + i, d[2 * p + 1] = r[2 * p + 1] * s + a;
        var h;
        if (l > 0) {
            var f = e.math.expandPolygon(d, -l);
            h = e.math.joinLines(f)
        } else h = d;
        for (var v, g, y, m, p = 0; p < h.length / 2; p++) v = h[2 * p], g = h[2 * p + 1], p < h.length / 2 - 1 ? (y = h[2 * (p + 1)], m = h[2 * (p + 1) + 1]) : (y = h[0], m = h[1]), u = this.finiteLinesIntersect(t, n, i, a, v, g, y, m), 0 !== u.length && c.push(u[0], u[1]);
        return c
    }, e.math.shortenIntersection = function(e, t, n) {
        var r = [e[0] - t[0], e[1] - t[1]],
            i = Math.sqrt(r[0] * r[0] + r[1] * r[1]),
            a = (i - n) / i;
        return 0 > a && (a = 1e-5), [t[0] + a * r[0], t[1] + a * r[1]]
    }, e.math.generateUnitNgonPointsFitToSquare = function(t, n) {
        var r = e.math.generateUnitNgonPoints(t, n);
        return r = e.math.fitPolygonToSquare(r)
    }, e.math.fitPolygonToSquare = function(e) {
        for (var t, n, r = e.length / 2, i = 1 / 0, a = 1 / 0, o = -1 / 0, s = -1 / 0, l = 0; r > l; l++) t = e[2 * l], n = e[2 * l + 1], i = Math.min(i, t), o = Math.max(o, t), a = Math.min(a, n), s = Math.max(s, n);
        for (var u = 2 / (o - i), c = 2 / (s - a), l = 0; r > l; l++) t = e[2 * l] = e[2 * l] * u, n = e[2 * l + 1] = e[2 * l + 1] * c, i = Math.min(i, t), o = Math.max(o, t), a = Math.min(a, n), s = Math.max(s, n);
        if (-1 > a)
            for (var l = 0; r > l; l++) n = e[2 * l + 1] = e[2 * l + 1] + (-1 - a);
        return e
    }, e.math.generateUnitNgonPoints = function(e, t) {
        var n = 1 / e * 2 * Math.PI,
            r = e % 2 === 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
        r += t;
        for (var i, a, o, s = new Array(2 * e), l = 0; e > l; l++) i = l * n + r, a = s[2 * l] = Math.cos(i), o = s[2 * l + 1] = Math.sin(-i);
        return s
    }, e.math.getRoundRectangleRadius = function(e, t) {
        return Math.min(e / 4, t / 4, 8)
    }
}(cytoscape),
function(e) {
    "use strict";

    function t(t, n, r) {
        var i = {};
        switch (i[n] = r, t) {
            case "core":
            case "collection":
                e.fn[t](i)
        }
        if ("layout" === t) {
            for (var o = r.prototype, s = ["stop"], l = 0; l < s.length; l++) {
                var u = s[l];
                o[u] = o[u] || function() {
                    return this
                }
            }
            o.start && !o.run ? o.run = function() {
                return this.start(), this
            } : !o.start && o.run && (o.start = function() {
                return this.run(), this
            }), o.on = e.define.on({
                layout: !0
            }), o.one = e.define.on({
                layout: !0,
                unbindSelfOnTrigger: !0
            }), o.once = e.define.on({
                layout: !0,
                unbindAllBindersOnTrigger: !0
            }), o.off = e.define.off({
                layout: !0
            }), o.trigger = e.define.trigger({
                layout: !0
            }), o.bind = o.on, o.unbind = o.off
        }
        return e.util.setMap({
            map: a,
            keys: [t, n],
            value: r
        })
    }

    function n(t, n) {
        return e.util.getMap({
            map: a,
            keys: [t, n]
        })
    }

    function r(t, n, r, i, a) {
        return e.util.setMap({
            map: o,
            keys: [t, n, r, i],
            value: a
        })
    }

    function i(t, n, r, i) {
        return e.util.getMap({
            map: o,
            keys: [t, n, r, i]
        })
    }
    var a = {};
    e.extensions = a;
    var o = {};
    e.modules = o, e.extension = function() {
        return 2 == arguments.length ? n.apply(this, arguments) : 3 == arguments.length ? t.apply(this, arguments) : 4 == arguments.length ? i.apply(this, arguments) : 5 == arguments.length ? r.apply(this, arguments) : void e.util.error("Invalid extension access syntax")
    }
}(cytoscape),
function(e, t) {
    "use strict";
    if (e) {
        var n = function(e) {
            var t = e[0]._cyreg = e[0]._cyreg || {};
            return t
        };
        e.fn.cytoscape = function(r) {
            var i = e(this);
            if ("get" === r) return n(i).cy;
            if (t.is.fn(r)) {
                var a = r,
                    o = n(i).cy;
                if (o && o.isReady()) o.trigger("ready", [], a);
                else {
                    var s = n(i),
                        l = s.readies = s.readies || [];
                    l.push(a)
                }
            } else if (t.is.plainObject(r)) return i.each(function() {
                var t = e.extend({}, r, {
                    container: e(this)[0]
                });
                cytoscape(t)
            })
        }, e.cytoscape = cytoscape, null == e.fn.cy && null == e.cy && (e.fn.cy = e.fn.cytoscape, e.cy = e.cytoscape)
    }
}("undefined" != typeof jQuery ? jQuery : null, cytoscape),
function(e) {
    "use strict";

    function t() {
        return !1
    }

    function n() {
        return !0
    }
    e.Event = function(r, i) {
        return this instanceof e.Event ? (r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.getPreventDefault && r.getPreventDefault() ? n : t) : this.type = r, i && (this.type = void 0 !== i.type ? i.type : this.type, this.cy = i.cy, this.cyTarget = i.cyTarget, this.cyPosition = i.cyPosition, this.cyRenderedPosition = i.cyRenderedPosition, this.namespace = i.namespace, this.layout = i.layout, this.data = i.data), void(this.timeStamp = r && r.timeStamp || +new Date)) : new e.Event(r, i)
    }, e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = n;
            var e = this.originalEvent;
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            this.isPropagationStopped = n;
            var e = this.originalEvent;
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = n, this.stopPropagation()
        },
        isDefaultPrevented: t,
        isPropagationStopped: t,
        isImmediatePropagationStopped: t
    }
}(cytoscape),
function(e) {
    "use strict";
    e.define = {
        data: function(t) {
            var n = {
                field: "data",
                bindingEvent: "data",
                allowBinding: !1,
                allowSetting: !1,
                allowGetting: !1,
                settingEvent: "data",
                settingTriggersEvent: !1,
                triggerFnName: "trigger",
                immutableKeys: {},
                updateStyle: !1,
                onSet: function() {},
                canSet: function() {
                    return !0
                }
            };
            return t = e.util.extend({}, n, t),
                function(n, r) {
                    var i = t,
                        a = this,
                        o = void 0 !== a.length,
                        s = o ? a : [a],
                        l = o ? a[0] : a;
                    if (e.is.string(n)) {
                        if (i.allowGetting && void 0 === r) {
                            var u;
                            return l && (u = l._private[i.field][n]), u
                        }
                        if (i.allowSetting && void 0 !== r) {
                            var c = !i.immutableKeys[n];
                            if (c) {
                                for (var d = 0, p = s.length; p > d; d++) i.canSet(s[d]) && (s[d]._private[i.field][n] = r);
                                i.updateStyle && a.updateStyle(), i.onSet(a), i.settingTriggersEvent && a[i.triggerFnName](i.settingEvent)
                            }
                        }
                    } else if (i.allowSetting && e.is.plainObject(n)) {
                        var h, f, v = n;
                        for (h in v) {
                            f = v[h];
                            var c = !i.immutableKeys[h];
                            if (c)
                                for (var d = 0, p = s.length; p > d; d++) i.canSet(s[d]) && (s[d]._private[i.field][h] = f)
                        }
                        i.updateStyle && a.updateStyle(), i.onSet(a), i.settingTriggersEvent && a[i.triggerFnName](i.settingEvent)
                    } else if (i.allowBinding && e.is.fn(n)) {
                        var g = n;
                        a.bind(i.bindingEvent, g)
                    } else if (i.allowGetting && void 0 === n) {
                        var u;
                        return l && (u = l._private[i.field]), u
                    }
                    return a
                }
        },
        removeData: function(t) {
            var n = {
                field: "data",
                event: "data",
                triggerFnName: "trigger",
                triggerEvent: !1,
                immutableKeys: {}
            };
            return t = e.util.extend({}, n, t),
                function(n) {
                    var r = t,
                        i = this,
                        a = void 0 !== i.length,
                        o = a ? i : [i];
                    if (e.is.string(n)) {
                        for (var s = n.split(/\s+/), l = s.length, u = 0; l > u; u++) {
                            var c = s[u];
                            if (!e.is.emptyString(c)) {
                                var d = !r.immutableKeys[c];
                                if (d)
                                    for (var p = 0, h = o.length; h > p; p++) o[p]._private[r.field][c] = void 0
                            }
                        }
                        r.triggerEvent && i[r.triggerFnName](r.event)
                    } else if (void 0 === n) {
                        for (var p = 0, h = o.length; h > p; p++) {
                            var f = o[p]._private[r.field];
                            for (var c in f) {
                                var v = !r.immutableKeys[c];
                                v && (f[c] = void 0)
                            }
                        }
                        r.triggerEvent && i[r.triggerFnName](r.event)
                    }
                    return i
                }
        },
        event: {
            regex: /(\w+)(\.\w+)?/,
            optionalTypeRegex: /(\w+)?(\.\w+)?/,
            falseCallback: function() {
                return !1
            }
        },
        on: function(t) {
            var n = {
                unbindSelfOnTrigger: !1,
                unbindAllBindersOnTrigger: !1
            };
            return t = e.util.extend({}, n, t),
                function(n, r, i, a) {
                    var o = this,
                        s = void 0 !== o.length,
                        l = s ? o : [o],
                        u = e.is.string(n),
                        c = t;
                    if (e.is.plainObject(r) ? (a = i, i = r, r = void 0) : (e.is.fn(r) || r === !1) && (a = r, i = void 0, r = void 0), (e.is.fn(i) || i === !1) && (a = i, i = void 0), !e.is.fn(a) && a !== !1 && u) return o;
                    if (u) {
                        var d = {};
                        d[n] = a, n = d
                    }
                    for (var p in n)
                        if (a = n[p], a === !1 && (a = e.define.event.falseCallback), e.is.fn(a)) {
                            p = p.split(/\s+/);
                            for (var h = 0; h < p.length; h++) {
                                var f = p[h];
                                if (!e.is.emptyString(f)) {
                                    var v = f.match(e.define.event.regex);
                                    if (v)
                                        for (var g = v[1], y = v[2] ? v[2] : void 0, m = {
                                                callback: a,
                                                data: i,
                                                delegated: r ? !0 : !1,
                                                selector: r,
                                                selObj: new e.Selector(r),
                                                type: g,
                                                namespace: y,
                                                unbindSelfOnTrigger: c.unbindSelfOnTrigger,
                                                unbindAllBindersOnTrigger: c.unbindAllBindersOnTrigger,
                                                binders: l
                                            }, x = 0; x < l.length; x++) l[x]._private.listeners.push(m)
                                }
                            }
                        }
                    return o
                }
        },
        off: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function(t, n, r) {
                    var i = this,
                        a = void 0 !== i.length,
                        o = a ? i : [i],
                        s = e.is.string(t);
                    if (0 === arguments.length) {
                        for (var l = 0; l < o.length; l++) o[l]._private.listeners = [];
                        return i
                    }
                    if ((e.is.fn(n) || n === !1) && (r = n, n = void 0), s) {
                        var u = {};
                        u[t] = r, t = u
                    }
                    for (var c in t) {
                        r = t[c], r === !1 && (r = e.define.event.falseCallback), c = c.split(/\s+/);
                        for (var d = 0; d < c.length; d++) {
                            var p = c[d];
                            if (!e.is.emptyString(p)) {
                                var h = p.match(e.define.event.optionalTypeRegex);
                                if (h)
                                    for (var f = h[1] ? h[1] : void 0, v = h[2] ? h[2] : void 0, l = 0; l < o.length; l++)
                                        for (var g = o[l]._private.listeners, y = 0; y < g.length; y++) {
                                            var m = g[y],
                                                x = !v || v === m.namespace,
                                                b = !f || m.type === f,
                                                w = !r || r === m.callback,
                                                _ = x && b && w;
                                            _ && (g.splice(y, 1), y--)
                                        }
                            }
                        }
                    }
                    return i
                }
        },
        trigger: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function(n, r, i) {
                    var a = this,
                        o = void 0 !== a.length,
                        s = o ? a : [a],
                        l = e.is.string(n),
                        u = e.is.plainObject(n),
                        c = e.is.event(n),
                        d = this._private.cy || this,
                        p = d.hasCompoundNodes();
                    if (l) {
                        var h = n.split(/\s+/);
                        n = [];
                        for (var f = 0; f < h.length; f++) {
                            var v = h[f];
                            if (!e.is.emptyString(v)) {
                                var g = v.match(e.define.event.regex),
                                    y = g[1],
                                    m = g[2] ? g[2] : void 0;
                                n.push({
                                    type: y,
                                    namespace: m
                                })
                            }
                        }
                    } else if (u) {
                        var x = n;
                        n = [x]
                    }
                    r ? e.is.array(r) || (r = [r]) : r = [];
                    for (var f = 0; f < n.length; f++)
                        for (var b = n[f], w = 0; w < s.length; w++) {
                            var v, _ = s[w],
                                E = _._private.listeners,
                                S = e.is.element(_),
                                C = S || t.layout;
                            if (c ? (v = b, v.cyTarget = v.cyTarget || _, v.cy = v.cy || d) : v = new e.Event(b, {
                                    cyTarget: _,
                                    cy: d,
                                    namespace: b.namespace
                                }), b.layout && (v.layout = b.layout), t.layout && (v.layout = _), v.cyPosition) {
                                var T = v.cyPosition,
                                    k = d.zoom(),
                                    N = d.pan();
                                v.cyRenderedPosition = {
                                    x: T.x * k + N.x,
                                    y: T.y * k + N.y
                                }
                            }
                            i && (E = [{
                                namespace: v.namespace,
                                type: v.type,
                                callback: i
                            }]);
                            for (var D = 0; D < E.length; D++) {
                                var P = E[D],
                                    M = !P.namespace || P.namespace === v.namespace,
                                    B = P.type === v.type,
                                    L = P.delegated ? _ !== v.cyTarget && e.is.element(v.cyTarget) && P.selObj.matches(v.cyTarget) : !0,
                                    A = M && B && L;
                                if (A) {
                                    var z = [v];
                                    if (z = z.concat(r), v.data = P.data ? P.data : void 0, (P.unbindSelfOnTrigger || P.unbindAllBindersOnTrigger) && (E.splice(D, 1), D--), P.unbindAllBindersOnTrigger)
                                        for (var I = P.binders, O = 0; O < I.length; O++) {
                                            var R = I[O];
                                            if (R && R !== _)
                                                for (var X = R._private.listeners, j = 0; j < X.length; j++) {
                                                    var q = X[j];
                                                    q === P && (X.splice(j, 1), j--)
                                                }
                                        }
                                    var V = P.delegated ? v.cyTarget : _,
                                        F = P.callback.apply(V, z);
                                    (F === !1 || v.isPropagationStopped()) && (C = !1, F === !1 && (v.stopPropagation(), v.preventDefault()))
                                }
                            }
                            if (C) {
                                var Y = p ? _._private.parent : null,
                                    H = null != Y && 0 !== Y.length;
                                H ? (Y = Y[0], Y.trigger(v)) : d.trigger(v)
                            }
                        }
                    return a
                }
        },
        animated: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function() {
                    var e = this,
                        t = void 0 !== e.length,
                        n = t ? e : [e],
                        r = this._private.cy || this;
                    if (!r.styleEnabled()) return !1;
                    var i = n[0];
                    return i ? i._private.animation.current.length > 0 : void 0
                }
        },
        clearQueue: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function() {
                    var e = this,
                        t = void 0 !== e.length,
                        n = t ? e : [e],
                        r = this._private.cy || this;
                    if (!r.styleEnabled()) return this;
                    for (var i = 0; i < n.length; i++) {
                        var a = n[i];
                        a._private.animation.queue = []
                    }
                    return this
                }
        },
        delay: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function(e, t) {
                    var n = this._private.cy || this;
                    return n.styleEnabled() ? (this.animate({
                        delay: e
                    }, {
                        duration: e,
                        complete: t
                    }), this) : this
                }
        },
        animate: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function(e, t) {
                    var n = this,
                        r = void 0 !== n.length,
                        i = r ? n : [n],
                        a = this._private.cy || this,
                        o = !r,
                        s = !o;
                    if (!a.styleEnabled()) return this;
                    var l, u = +new Date,
                        c = a.style();
                    switch (void 0 === t && (t = {}), void 0 === t.duration && (t.duration = 400), t.duration) {
                        case "slow":
                            t.duration = 600;
                            break;
                        case "fast":
                            t.duration = 200
                    }
                    var d = !0;
                    if (e)
                        for (var p in e) {
                            d = !1;
                            break
                        }
                    if (d) return this;
                    if (e.css && s && (e.css = c.getValueStyle(e.css, {
                            array: !0
                        })), e.renderedPosition && s) {
                        var h = e.renderedPosition,
                            f = a.pan(),
                            v = a.zoom();
                        e.position = {
                            x: (h.x - f.x) / v,
                            y: (h.y - f.y) / v
                        }
                    }
                    if (e.panBy && o) {
                        var g = e.panBy,
                            y = a.pan();
                        e.pan = {
                            x: y.x + g.x,
                            y: y.y + g.y
                        }
                    }
                    var m = e.center || e.centre;
                    if (m && o) {
                        var x = a.getCenterPan(m.eles);
                        x && (e.pan = x)
                    }
                    if (e.fit && o) {
                        var b = e.fit,
                            w = a.getFitViewport(b.eles || b.boundingBox, b.padding);
                        w && (e.pan = w.pan, e.zoom = w.zoom)
                    }
                    for (var p = 0; p < i.length; p++) {
                        var _ = i[p];
                        l = _.animated() && (void 0 === t.queue || t.queue) ? _._private.animation.queue : _._private.animation.current, l.push({
                            properties: e,
                            duration: t.duration,
                            params: t,
                            callTime: u
                        })
                    }
                    return s && a.addToAnimationPool(this), this
                }
        },
        stop: function(t) {
            var n = {};
            return t = e.util.extend({}, n, t),
                function(e, t) {
                    var n = this,
                        r = void 0 !== n.length,
                        i = r ? n : [n],
                        a = this._private.cy || this;
                    if (!a.styleEnabled()) return this;
                    for (var o = 0; o < i.length; o++) {
                        for (var s = i[o], l = s._private.animation.current, u = 0; u < l.length; u++) {
                            var c = l[u];
                            t && (c.duration = 0)
                        }
                        e && (s._private.animation.queue = []), t || (s._private.animation.current = [])
                    }
                    return a.notify({
                        collection: this,
                        type: "draw"
                    }), this
                }
        }
    }
}(cytoscape),
function(e) {
    "use strict";
    e.fn.selector = function(t) {
        for (var n in t) {
            var r = t[n];
            e.Selector.prototype[n] = r
        }
    }, e.Selector = function(t, n) {
        if (!(this instanceof e.Selector)) return new e.Selector(t, n);
        void 0 === n && void 0 !== t && (n = t, t = void 0);
        var r = this;
        if (r._private = {
                selectorText: null,
                invalid: !0
            }, !n || e.is.string(n) && n.match(/^\s*$/)) null == t ? r.length = 0 : (r[0] = o(), r[0].group = t, r.length = 1);
        else if (e.is.element(n)) {
            var i = new e.Collection(r.cy(), [n]);
            r[0] = o(), r[0].collection = i, r.length = 1
        } else if (e.is.collection(n)) r[0] = o(), r[0].collection = n, r.length = 1;
        else if (e.is.fn(n)) r[0] = o(), r[0].filter = n, r.length = 1;
        else {
            if (!e.is.string(n)) return void e.util.error("A selector must be created from a string; found " + n);
            var a = null,
                o = function() {
                    return {
                        classes: [],
                        colonSelectors: [],
                        data: [],
                        group: null,
                        ids: [],
                        meta: [],
                        collection: null,
                        filter: null,
                        parent: null,
                        ancestor: null,
                        subject: null,
                        child: null,
                        descendant: null
                    }
                },
                s = {
                    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
                    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
                    boolOp: "\\?|\\!|\\^",
                    string: '"(?:\\\\"|[^"])+"|' + "'(?:\\\\'|[^'])+'",
                    number: e.util.regex.number,
                    meta: "degree|indegree|outdegree",
                    separator: "\\s*,\\s*",
                    descendant: "\\s+",
                    child: "\\s+>\\s+",
                    subject: "\\$"
                };
            s.variable = "(?:[\\w-]|(?:\\\\" + s.metaChar + "))+", s.value = s.string + "|" + s.number, s.className = s.variable, s.id = s.variable;
            for (var l = function(e) {
                    return e.replace(new RegExp("\\\\(" + s.metaChar + ")", "g"), function(e, t) {
                        return t
                    })
                }, u = s.comparatorOp.split("|"), c = 0; c < u.length; c++) {
                var d = u[c];
                s.comparatorOp += "|@" + d
            }
            for (var u = s.comparatorOp.split("|"), c = 0; c < u.length; c++) {
                var d = u[c];
                d.indexOf("!") >= 0 || "=" !== d && (s.comparatorOp += "|\\!" + d)
            }
            var p = {
                    group: {
                        query: !0,
                        regex: "(node|edge|\\*)",
                        populate: function(e) {
                            this.group = "*" == e ? e : e + "s"
                        }
                    },
                    state: {
                        query: !0,
                        regex: "(:selected|:unselected|:locked|:unlocked|:visible|:hidden|:transparent|:grabbed|:free|:removed|:inside|:grabbable|:ungrabbable|:animated|:unanimated|:selectable|:unselectable|:orphan|:nonorphan|:parent|:child|:loop|:simple|:active|:inactive|:touch)",
                        populate: function(e) {
                            this.colonSelectors.push(e)
                        }
                    },
                    id: {
                        query: !0,
                        regex: "\\#(" + s.id + ")",
                        populate: function(e) {
                            this.ids.push(l(e))
                        }
                    },
                    className: {
                        query: !0,
                        regex: "\\.(" + s.className + ")",
                        populate: function(e) {
                            this.classes.push(l(e))
                        }
                    },
                    dataExists: {
                        query: !0,
                        regex: "\\[\\s*(" + s.variable + ")\\s*\\]",
                        populate: function(e) {
                            this.data.push({
                                field: l(e)
                            })
                        }
                    },
                    dataCompare: {
                        query: !0,
                        regex: "\\[\\s*(" + s.variable + ")\\s*(" + s.comparatorOp + ")\\s*(" + s.value + ")\\s*\\]",
                        populate: function(e, t, n) {
                            var r = null != new RegExp("^" + s.string + "$").exec(n);
                            n = r ? n.substring(1, n.length - 1) : parseFloat(n), this.data.push({
                                field: l(e),
                                operator: t,
                                value: n
                            })
                        }
                    },
                    dataBool: {
                        query: !0,
                        regex: "\\[\\s*(" + s.boolOp + ")\\s*(" + s.variable + ")\\s*\\]",
                        populate: function(e, t) {
                            this.data.push({
                                field: l(t),
                                operator: e
                            })
                        }
                    },
                    metaCompare: {
                        query: !0,
                        regex: "\\[\\[\\s*(" + s.meta + ")\\s*(" + s.comparatorOp + ")\\s*(" + s.number + ")\\s*\\]\\]",
                        populate: function(e, t, n) {
                            this.meta.push({
                                field: l(e),
                                operator: t,
                                value: parseFloat(n)
                            })
                        }
                    },
                    nextQuery: {
                        separator: !0,
                        regex: s.separator,
                        populate: function() {
                            r[++c] = o(), a = null
                        }
                    },
                    child: {
                        separator: !0,
                        regex: s.child,
                        populate: function() {
                            var e = o();
                            e.parent = this, e.subject = a, r[c] = e
                        }
                    },
                    descendant: {
                        separator: !0,
                        regex: s.descendant,
                        populate: function() {
                            var e = o();
                            e.ancestor = this, e.subject = a, r[c] = e
                        }
                    },
                    subject: {
                        modifier: !0,
                        regex: s.subject,
                        populate: function() {
                            return null != a && this.subject != this ? (e.util.error("Redefinition of subject in selector `" + n + "`"), !1) : (a = this, void(this.subject = this))
                        }
                    }
                },
                h = 0;
            for (var f in p) p[h] = p[f], p[h].name = f, h++;
            p.length = h, r._private.selectorText = n;
            var v = n,
                c = 0,
                g = function(t) {
                    for (var n, r, i, a = 0; a < p.length; a++) {
                        var o = p[a],
                            s = o.name;
                        if (!e.is.fn(t) || t(s, o)) {
                            var l = v.match(new RegExp("^" + o.regex));
                            if (null != l) {
                                r = l, n = o, i = s;
                                var u = l[0];
                                v = v.substring(u.length);
                                break
                            }
                        }
                    }
                    return {
                        expr: n,
                        match: r,
                        name: i
                    }
                },
                y = function() {
                    var e = v.match(/^\s+/);
                    if (e) {
                        var t = e[0];
                        v = v.substring(t.length)
                    }
                };
            for (r[0] = o(), y();;) {
                var m = g();
                if (null == m.expr) return void e.util.error("The selector `" + n + "`is invalid");
                for (var x = [], h = 1; h < m.match.length; h++) x.push(m.match[h]);
                var b = m.expr.populate.apply(r[c], x);
                if (b === !1) return;
                if (v.match(/^\s*$/)) break
            }
            for (r.length = c + 1, h = 0; h < r.length; h++) {
                var w = r[h];
                if (null != w.subject) {
                    for (; w.subject != w;)
                        if (null != w.parent) {
                            var _ = w.parent,
                                E = w;
                            E.parent = null, _.child = E, w = _
                        } else {
                            if (null == w.ancestor) {
                                e.util.error("When adjusting references for the selector `" + w + "`, neither parent nor ancestor was found");
                                break
                            }
                            var S = w.ancestor,
                                C = w;
                            C.ancestor = null, S.descendant = C, w = S
                        }
                    r[h] = w.subject
                }
            }
            if (null != t)
                for (var h = 0; h < r.length; h++) {
                    if (null != r[h].group && r[h].group != t) return void e.util.error("Group `" + r[h].group + "` conflicts with implicit group `" + t + "` in selector `" + n + "`");
                    r[h].group = t
                }
        }
        r._private.invalid = !1
    }, e.selfn = e.Selector.prototype, e.selfn.size = function() {
        return this.length
    }, e.selfn.eq = function(e) {
        return this[e]
    }, e.selfn.find = function() {};
    var t = function(n, r) {
        if (null != n.group && "*" != n.group && n.group != r._private.group) return !1;
        for (var i = r.cy(), a = !0, o = 0; o < n.colonSelectors.length; o++) {
            var s = n.colonSelectors[o];
            switch (s) {
                case ":selected":
                    a = r.selected();
                    break;
                case ":unselected":
                    a = !r.selected();
                    break;
                case ":selectable":
                    a = r.selectable();
                    break;
                case ":unselectable":
                    a = !r.selectable();
                    break;
                case ":locked":
                    a = r.locked();
                    break;
                case ":unlocked":
                    a = !r.locked();
                    break;
                case ":visible":
                    a = r.visible();
                    break;
                case ":hidden":
                    a = !r.visible();
                    break;
                case ":transparent":
                    a = r.transparent();
                    break;
                case ":grabbed":
                    a = r.grabbed();
                    break;
                case ":free":
                    a = !r.grabbed();
                    break;
                case ":removed":
                    a = r.removed();
                    break;
                case ":inside":
                    a = !r.removed();
                    break;
                case ":grabbable":
                    a = r.grabbable();
                    break;
                case ":ungrabbable":
                    a = !r.grabbable();
                    break;
                case ":animated":
                    a = r.animated();
                    break;
                case ":unanimated":
                    a = !r.animated();
                    break;
                case ":parent":
                    a = r.isNode() && r.children().nonempty();
                    break;
                case ":child":
                case ":nonorphan":
                    a = r.isNode() && r.parent().nonempty();
                    break;
                case ":orphan":
                    a = r.isNode() && r.parent().empty();
                    break;
                case ":loop":
                    a = r.isEdge() && r.data("source") === r.data("target");
                    break;
                case ":simple":
                    a = r.isEdge() && r.data("source") !== r.data("target");
                    break;
                case ":active":
                    a = r.active();
                    break;
                case ":inactive":
                    a = !r.active();
                    break;
                case ":touch":
                    a = e.is.touch()
            }
            if (!a) break
        }
        if (!a) return !1;
        for (var l = !0, o = 0; o < n.ids.length; o++) {
            var u = n.ids[o],
                c = r._private.data.id;
            if (l = l && u == c, !l) break
        }
        if (!l) return !1;
        for (var d = !0, o = 0; o < n.classes.length; o++) {
            var p = n.classes[o];
            if (d = d && r.hasClass(p), !d) break
        }
        if (!d) return !1;
        var h = function(t) {
                for (var r = !0, i = 0; i < n[t.name].length; i++) {
                    var a, o = n[t.name][i],
                        s = o.operator,
                        l = o.value,
                        u = o.field;
                    if (null != s && null != l) {
                        var c = t.fieldValue(u),
                            d = e.is.string(c) || e.is.number(c) ? "" + c : "",
                            p = "" + l,
                            h = !1;
                        s.indexOf("@") >= 0 && (d = d.toLowerCase(), p = p.toLowerCase(), s = s.replace("@", ""), h = !0);
                        var f = !1,
                            v = !1;
                        switch (s.indexOf("!") >= 0 && (s = s.replace("!", ""), f = !0), h && (l = p.toLowerCase(), c = d.toLowerCase()), s) {
                            case "*=":
                                a = d.search(p) >= 0;
                                break;
                            case "$=":
                                a = null != new RegExp(p + "$").exec(d);
                                break;
                            case "^=":
                                a = null != new RegExp("^" + p).exec(d);
                                break;
                            case "=":
                                a = c === l;
                                break;
                            case "!=":
                                a = c !== l;
                                break;
                            case ">":
                                a = f ? l >= c : c > l, v = !0;
                                break;
                            case ">=":
                                a = f ? l > c : c >= l, v = !0;
                                break;
                            case "<":
                                a = f ? c >= l : l > c, v = !0;
                                break;
                            case "<=":
                                a = f ? c > l : l >= c, v = !0;
                                break;
                            default:
                                a = !1
                        }
                    } else if (null != s) switch (s) {
                        case "?":
                            a = t.fieldTruthy(u);
                            break;
                        case "!":
                            a = !t.fieldTruthy(u);
                            break;
                        case "^":
                            a = t.fieldUndefined(u)
                    } else a = !t.fieldUndefined(u);
                    if (f && !v && (a = !a, v = !0), !a) {
                        r = !1;
                        break
                    }
                }
                return r
            },
            f = h({
                name: "data",
                fieldValue: function(e) {
                    return r._private.data[e]
                },
                fieldRef: function(e) {
                    return "element._private.data." + e
                },
                fieldUndefined: function(e) {
                    return void 0 === r._private.data[e]
                },
                fieldTruthy: function(e) {
                    return r._private.data[e] ? !0 : !1
                }
            });
        if (!f) return !1;
        var v = h({
            name: "meta",
            fieldValue: function(e) {
                return r[e]()
            },
            fieldRef: function(e) {
                return "element." + e + "()"
            },
            fieldUndefined: function(e) {
                return null == r[e]()
            },
            fieldTruthy: function(e) {
                return r[e]() ? !0 : !1
            }
        });
        if (!v) return !1;
        if (null != n.collection) {
            var g = null != n.collection._private.ids[r.id()];
            if (!g) return !1
        }
        if (null != n.filter && 0 === r.collection().filter(n.filter).size()) return !1;
        var y = function(e, n) {
            if (null != e) {
                var r = !1;
                if (!i.hasCompoundNodes()) return !1;
                n = n();
                for (var a = 0; a < n.length; a++)
                    if (t(e, n[a])) {
                        r = !0;
                        break
                    }
                return r
            }
            return !0
        };
        return y(n.parent, function() {
            return r.parent()
        }) && y(n.ancestor, function() {
            return r.parents()
        }) && y(n.child, function() {
            return r.children()
        }) && y(n.descendant, function() {
            return r.descendants()
        }) ? !0 : !1
    };
    e.selfn.filter = function(n) {
        var r = this,
            i = n.cy();
        if (r._private.invalid) return new e.Collection(i);
        var a = function(e, n) {
            for (var i = 0; i < r.length; i++) {
                var a = r[i];
                if (t(a, n)) return !0
            }
            return !1
        };
        null == r._private.selectorText && (a = function() {
            return !0
        });
        var o = n.filter(a);
        return o
    }, e.selfn.matches = function(e) {
        var n = this;
        if (n._private.invalid) return !1;
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            if (t(i, e)) return !0
        }
        return !1
    }, e.selfn.toString = e.selfn.selector = function() {
        for (var t = "", n = function(t) {
                return e.is.string(t) ? t : ""
            }, r = function(e) {
                var t = "",
                    a = n(e.group);
                t += a.substring(0, a.length - 1);
                for (var o = 0; o < e.data.length; o++) {
                    var s = e.data[o];
                    t += s.value ? "[" + s.field + n(s.operator) + n(s.value) + "]" : "[" + n(s.operator) + s.field + "]"
                }
                for (var o = 0; o < e.meta.length; o++) {
                    var l = e.meta[o];
                    t += "[[" + l.field + n(l.operator) + n(l.value) + "]]"
                }
                for (var o = 0; o < e.colonSelectors.length; o++) {
                    var u = e.colonSelectors[i];
                    t += u
                }
                for (var o = 0; o < e.ids.length; o++) {
                    var u = "#" + e.ids[i];
                    t += u
                }
                for (var o = 0; o < e.classes.length; o++) {
                    var u = "." + e.classes[i];
                    t += u
                }
                return null != e.parent && (t = r(e.parent) + " > " + t), null != e.ancestor && (t = r(e.ancestor) + " " + t), null != e.child && (t += " > " + r(e.child)), null != e.descendant && (t += " " + r(e.descendant)), t
            }, i = 0; i < this.length; i++) {
            var a = this[i];
            t += r(a), this.length > 1 && i < this.length - 1 && (t += ", ")
        }
        return t
    }
}(cytoscape),
function(e) {
    "use strict";
    e.Style = function(t) {
            return this instanceof e.Style ? e.is.core(t) ? (this._private = {
                cy: t,
                coreStyle: {},
                newStyle: !0
            }, this.length = 0, void this.addDefaultStylesheet()) : void e.util.error("A style must have a core reference") : new e.Style(t)
        }, e.style = e.Style, e.styfn = e.Style.prototype, e.fn.style = function(t) {
            for (var n in t) {
                var r = t[n];
                e.Style.prototype = r
            }
        },
        function() {
            var t = e.util.regex.number,
                n = e.util.regex.rgbaNoBackRefs,
                r = e.util.regex.hslaNoBackRefs,
                i = e.util.regex.hex3,
                a = e.util.regex.hex6,
                o = function(e) {
                    return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"
                },
                s = function(e) {
                    return "^" + e + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + t + "|\\w+|" + n + "|" + r + "|" + i + "|" + a + ")\\s*\\,\\s*(" + t + "|\\w+|" + n + "|" + r + "|" + i + "|" + a + ")\\)$"
                };
            e.style.types = {
                time: {
                    number: !0,
                    min: 0,
                    units: "s|ms",
                    implicitUnits: "ms"
                },
                percent: {
                    number: !0,
                    min: 0,
                    max: 100,
                    units: "%"
                },
                zeroOneNumber: {
                    number: !0,
                    min: 0,
                    max: 1,
                    unitless: !0
                },
                nOneOneNumber: {
                    number: !0,
                    min: -1,
                    max: 1,
                    unitless: !0
                },
                nonNegativeInt: {
                    number: !0,
                    min: 0,
                    integer: !0,
                    unitless: !0
                },
                position: {
                    enums: ["parent", "origin"]
                },
                autoSize: {
                    number: !0,
                    min: 0,
                    enums: ["auto"]
                },
                number: {
                    number: !0
                },
                size: {
                    number: !0,
                    min: 0
                },
                bgSize: {
                    number: !0,
                    min: 0,
                    allowPercent: !0
                },
                bgPos: {
                    number: !0,
                    allowPercent: !0
                },
                bgRepeat: {
                    enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"]
                },
                bgFit: {
                    enums: ["none", "contain", "cover"]
                },
                bgClip: {
                    enums: ["none", "node"]
                },
                color: {
                    color: !0
                },
                lineStyle: {
                    enums: ["solid", "dotted", "dashed"]
                },
                borderStyle: {
                    enums: ["solid", "dotted", "dashed", "double"]
                },
                curveStyle: {
                    enums: ["bezier", "unbundled-bezier", "haystack"]
                },
                fontFamily: {
                    regex: "^([\\w- ]+(?:\\s*,\\s*[\\w- ]+)*)$"
                },
                fontVariant: {
                    enums: ["small-caps", "normal"]
                },
                fontStyle: {
                    enums: ["italic", "normal", "oblique"]
                },
                fontWeight: {
                    enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
                },
                textDecoration: {
                    enums: ["none", "underline", "overline", "line-through"]
                },
                textTransform: {
                    enums: ["none", "uppercase", "lowercase"]
                },
                nodeShape: {
                    enums: ["rectangle", "roundrectangle", "ellipse", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "star"]
                },
                arrowShape: {
                    enums: ["tee", "triangle", "triangle-tee", "triangle-backcurve", "half-triangle-overshot", "square", "circle", "diamond", "none"]
                },
                arrowFill: {
                    enums: ["filled", "hollow"]
                },
                display: {
                    enums: ["element", "none"]
                },
                visibility: {
                    enums: ["hidden", "visible"]
                },
                valign: {
                    enums: ["top", "center", "bottom"]
                },
                halign: {
                    enums: ["left", "center", "right"]
                },
                text: {
                    string: !0
                },
                data: {
                    mapping: !0,
                    regex: o("data")
                },
                layoutData: {
                    mapping: !0,
                    regex: o("layoutData")
                },
                mapData: {
                    mapping: !0,
                    regex: s("mapData")
                },
                mapLayoutData: {
                    mapping: !0,
                    regex: s("mapLayoutData")
                },
                url: {
                    regex: "^url\\s*\\(\\s*([^\\s]+)\\s*\\s*\\)|none|(.+)$"
                },
                propList: {
                    propList: !0
                },
                angle: {
                    number: !0,
                    units: "deg|rad"
                }
            };
            var l = e.style.types,
                u = e.style.properties = [{
                    name: "text-valign",
                    type: l.valign
                }, {
                    name: "text-halign",
                    type: l.halign
                }, {
                    name: "color",
                    type: l.color
                }, {
                    name: "content",
                    type: l.text
                }, {
                    name: "text-outline-color",
                    type: l.color
                }, {
                    name: "text-outline-width",
                    type: l.size
                }, {
                    name: "text-outline-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "text-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "text-transform",
                    type: l.textTransform
                }, {
                    name: "font-family",
                    type: l.fontFamily
                }, {
                    name: "font-style",
                    type: l.fontStyle
                }, {
                    name: "font-weight",
                    type: l.fontWeight
                }, {
                    name: "font-size",
                    type: l.size
                }, {
                    name: "min-zoomed-font-size",
                    type: l.size
                }, {
                    name: "display",
                    type: l.display
                }, {
                    name: "visibility",
                    type: l.visibility
                }, {
                    name: "opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "z-index",
                    type: l.nonNegativeInt
                }, {
                    name: "overlay-padding",
                    type: l.size
                }, {
                    name: "overlay-color",
                    type: l.color
                }, {
                    name: "overlay-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "transition-property",
                    type: l.propList
                }, {
                    name: "transition-duration",
                    type: l.time
                }, {
                    name: "transition-delay",
                    type: l.time
                }, {
                    name: "height",
                    type: l.autoSize
                }, {
                    name: "width",
                    type: l.autoSize
                }, {
                    name: "shape",
                    type: l.nodeShape
                }, {
                    name: "background-color",
                    type: l.color
                }, {
                    name: "background-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "background-blacken",
                    type: l.nOneOneNumber
                }, {
                    name: "border-color",
                    type: l.color
                }, {
                    name: "border-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "border-width",
                    type: l.size
                }, {
                    name: "border-style",
                    type: l.borderStyle
                }, {
                    name: "background-image",
                    type: l.url
                }, {
                    name: "background-image-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "background-position-x",
                    type: l.bgPos
                }, {
                    name: "background-position-y",
                    type: l.bgPos
                }, {
                    name: "background-repeat",
                    type: l.bgRepeat
                }, {
                    name: "background-fit",
                    type: l.bgFit
                }, {
                    name: "background-clip",
                    type: l.bgClip
                }, {
                    name: "padding-left",
                    type: l.size
                }, {
                    name: "padding-right",
                    type: l.size
                }, {
                    name: "padding-top",
                    type: l.size
                }, {
                    name: "padding-bottom",
                    type: l.size
                }, {
                    name: "position",
                    type: l.position
                }, {
                    name: "line-style",
                    type: l.lineStyle
                }, {
                    name: "line-color",
                    type: l.color
                }, {
                    name: "control-point-step-size",
                    type: l.size
                }, {
                    name: "control-point-distance",
                    type: l.number
                }, {
                    name: "control-point-weight",
                    type: l.zeroOneNumber
                }, {
                    name: "curve-style",
                    type: l.curveStyle
                }, {
                    name: "haystack-radius",
                    type: l.zeroOneNumber
                }, {
                    name: "source-arrow-shape",
                    type: l.arrowShape
                }, {
                    name: "target-arrow-shape",
                    type: l.arrowShape
                }, {
                    name: "mid-source-arrow-shape",
                    type: l.arrowShape
                }, {
                    name: "mid-target-arrow-shape",
                    type: l.arrowShape
                }, {
                    name: "source-arrow-color",
                    type: l.color
                }, {
                    name: "target-arrow-color",
                    type: l.color
                }, {
                    name: "mid-source-arrow-color",
                    type: l.color
                }, {
                    name: "mid-target-arrow-color",
                    type: l.color
                }, {
                    name: "source-arrow-fill",
                    type: l.arrowFill
                }, {
                    name: "target-arrow-fill",
                    type: l.arrowFill
                }, {
                    name: "mid-source-arrow-fill",
                    type: l.arrowFill
                }, {
                    name: "mid-target-arrow-fill",
                    type: l.arrowFill
                }, {
                    name: "selection-box-color",
                    type: l.color
                }, {
                    name: "selection-box-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "selection-box-border-color",
                    type: l.color
                }, {
                    name: "selection-box-border-width",
                    type: l.size
                }, {
                    name: "active-bg-color",
                    type: l.color
                }, {
                    name: "active-bg-opacity",
                    type: l.zeroOneNumber
                }, {
                    name: "active-bg-size",
                    type: l.size
                }, {
                    name: "outside-texture-bg-color",
                    type: l.color
                }, {
                    name: "outside-texture-bg-opacity",
                    type: l.zeroOneNumber
                }];
            e.style.pieBackgroundN = 16, u.push({
                name: "pie-size",
                type: l.bgSize
            });
            for (var c = 1; c <= e.style.pieBackgroundN; c++) u.push({
                name: "pie-" + c + "-background-color",
                type: l.color
            }), u.push({
                name: "pie-" + c + "-background-size",
                type: l.percent
            }), u.push({
                name: "pie-" + c + "-background-opacity",
                type: l.zeroOneNumber
            });
            for (var c = 0; c < u.length; c++) {
                var d = u[c];
                u[d.name] = d
            }
        }(), e.styfn.addDefaultStylesheet = function() {
            var t = "Helvetica",
                n = "normal",
                r = "normal",
                i = "#000",
                a = "none",
                o = 16;
            this.selector("node, edge").css({
                "text-valign": "top",
                "text-halign": "center",
                color: i,
                "text-outline-color": "#000",
                "text-outline-width": 0,
                "text-outline-opacity": 1,
                "text-opacity": 1,
                "text-decoration": "none",
                "text-transform": a,
                "font-family": t,
                "font-style": n,
                "font-weight": r,
                "font-size": o,
                "min-zoomed-font-size": 0,
                visibility: "visible",
                display: "element",
                opacity: 1,
                "z-index": 0,
                content: "",
                "overlay-opacity": 0,
                "overlay-color": "#000",
                "overlay-padding": 10,
                "transition-property": "none",
                "transition-duration": 0,
                "transition-delay": 0,
                "background-blacken": 0,
                "background-color": "#888",
                "background-opacity": 1,
                "background-image": "none",
                "background-image-opacity": 1,
                "background-position-x": "50%",
                "background-position-y": "50%",
                "background-repeat": "no-repeat",
                "background-fit": "none",
                "background-clip": "node",
                "border-color": "#000",
                "border-opacity": 1,
                "border-width": 0,
                "border-style": "solid",
                height: 30,
                width: 30,
                shape: "ellipse",
                "padding-top": 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                position: "origin",
                "pie-size": "100%",
                "pie-1-background-color": "black",
                "pie-2-background-color": "black",
                "pie-3-background-color": "black",
                "pie-4-background-color": "black",
                "pie-5-background-color": "black",
                "pie-6-background-color": "black",
                "pie-7-background-color": "black",
                "pie-8-background-color": "black",
                "pie-9-background-color": "black",
                "pie-10-background-color": "black",
                "pie-11-background-color": "black",
                "pie-12-background-color": "black",
                "pie-13-background-color": "black",
                "pie-14-background-color": "black",
                "pie-15-background-color": "black",
                "pie-16-background-color": "black",
                "pie-1-background-size": "0%",
                "pie-2-background-size": "0%",
                "pie-3-background-size": "0%",
                "pie-4-background-size": "0%",
                "pie-5-background-size": "0%",
                "pie-6-background-size": "0%",
                "pie-7-background-size": "0%",
                "pie-8-background-size": "0%",
                "pie-9-background-size": "0%",
                "pie-10-background-size": "0%",
                "pie-11-background-size": "0%",
                "pie-12-background-size": "0%",
                "pie-13-background-size": "0%",
                "pie-14-background-size": "0%",
                "pie-15-background-size": "0%",
                "pie-16-background-size": "0%",
                "pie-1-background-opacity": 1,
                "pie-2-background-opacity": 1,
                "pie-3-background-opacity": 1,
                "pie-4-background-opacity": 1,
                "pie-5-background-opacity": 1,
                "pie-6-background-opacity": 1,
                "pie-7-background-opacity": 1,
                "pie-8-background-opacity": 1,
                "pie-9-background-opacity": 1,
                "pie-10-background-opacity": 1,
                "pie-11-background-opacity": 1,
                "pie-12-background-opacity": 1,
                "pie-13-background-opacity": 1,
                "pie-14-background-opacity": 1,
                "pie-15-background-opacity": 1,
                "pie-16-background-opacity": 1,
                "source-arrow-shape": "none",
                "mid-source-arrow-shape": "none",
                "target-arrow-shape": "none",
                "mid-target-arrow-shape": "none",
                "source-arrow-color": "#ddd",
                "mid-source-arrow-color": "#ddd",
                "target-arrow-color": "#ddd",
                "mid-target-arrow-color": "#ddd",
                "source-arrow-fill": "filled",
                "mid-source-arrow-fill": "filled",
                "target-arrow-fill": "filled",
                "mid-target-arrow-fill": "filled",
                "line-style": "solid",
                "line-color": "#ddd",
                "control-point-step-size": 40,
                "control-point-weight": .5,
                "curve-style": "bezier",
                "haystack-radius": .8
            }).selector("$node > node").css({
                width: "auto",
                height: "auto",
                shape: "rectangle",
                "background-opacity": .5,
                "padding-top": 10,
                "padding-right": 10,
                "padding-left": 10,
                "padding-bottom": 10
            }).selector("edge").css({
                width: 1
            }).selector(":active").css({
                "overlay-color": "black",
                "overlay-padding": 10,
                "overlay-opacity": .25
            }).selector("core").css({
                "selection-box-color": "#ddd",
                "selection-box-opacity": .65,
                "selection-box-border-color": "#aaa",
                "selection-box-border-width": 1,
                "active-bg-color": "black",
                "active-bg-opacity": .15,
                "active-bg-size": e.is.touch() ? 40 : 15,
                "outside-texture-bg-color": "#000",
                "outside-texture-bg-opacity": .125
            })
        }, e.styfn.clear = function() {
            for (var e = 0; e < this.length; e++) this[e] = void 0;
            return this.length = 0, this._private.newStyle = !0, this
        }, e.styfn.resetToDefault = function() {
            return this.clear(), this.addDefaultStylesheet(), this
        }, e.styfn.core = function() {
            return this._private.coreStyle
        }, e.styfn.parse = function(t, n, r, i) {
            t = e.util.camel2dash(t);
            var a = e.style.properties[t],
                o = n;
            if (!a) return null;
            if (void 0 === n || null === n) return null;
            var s = e.is.string(n);
            s && (n = e.util.trim(n));
            var l = a.type;
            if (!l) return null;
            if (r && ("" === n || null === n)) return {
                name: t,
                value: n,
                bypass: !0,
                deleteBypass: !0
            };
            var u, c, d, p;
            if (!s || i);
            else {
                if ((u = new RegExp(e.style.types.data.regex).exec(n)) || (d = new RegExp(e.style.types.layoutData.regex).exec(n))) {
                    if (r) return !1;
                    var h = void 0 !== d;
                    return u = u || d, {
                        name: t,
                        value: u,
                        strValue: "" + n,
                        mapped: h ? e.style.types.layoutData : e.style.types.data,
                        field: u[1],
                        bypass: r,
                        hasPie: t.match(/pie-(\d+)-background-size/)
                    }
                }
                if ((c = new RegExp(e.style.types.mapData.regex).exec(n)) || (p = new RegExp(e.style.types.mapLayoutData.regex).exec(n))) {
                    if (r) return !1;
                    var h = void 0 !== p;
                    if (c = c || p, !l.color && !l.number) return !1;
                    var f = this.parse(t, c[4]);
                    if (!f || f.mapped) return !1;
                    var v = this.parse(t, c[5]);
                    if (!v || v.mapped) return !1;
                    if (f.value === v.value) return !1;
                    if (l.color) {
                        var g = f.value,
                            y = v.value,
                            m = !(g[0] !== y[0] || g[1] !== y[1] || g[2] !== y[2] || g[3] !== y[3] && (null != g[3] && 1 !== g[3] || null != y[3] && 1 !== y[3]));
                        if (m) return !1
                    }
                    return {
                        name: t,
                        value: c,
                        strValue: "" + n,
                        mapped: h ? e.style.types.mapLayoutData : e.style.types.mapData,
                        field: c[1],
                        fieldMin: parseFloat(c[2]),
                        fieldMax: parseFloat(c[3]),
                        valueMin: f.value,
                        valueMax: v.value,
                        bypass: r,
                        hasPie: t.match(/pie-(\d+)-background-size/)
                    }
                }
            }
            if (l.number) {
                var x, b = "px";
                if (l.units && (x = l.units), l.implicitUnits && (b = l.implicitUnits), !l.unitless)
                    if (s) {
                        var w = "px|em" + (l.allowPercent ? "|\\%" : "");
                        x && (w = x);
                        var _ = n.match("^(" + e.util.regex.number + ")(" + w + ")?$");
                        _ && (n = _[1], x = _[2] || b)
                    } else(!x || l.implicitUnits) && (x = b);
                if (n = parseFloat(n), isNaN(n) && void 0 === l.enums) return null;
                if (isNaN(n) && void 0 !== l.enums) {
                    n = o;
                    for (var E = 0; E < l.enums.length; E++) {
                        var S = l.enums[E];
                        if (S === n) return {
                            name: t,
                            value: n,
                            strValue: "" + n,
                            bypass: r
                        }
                    }
                    return null
                }
                if (l.integer && !e.is.integer(n)) return null;
                if (void 0 !== l.min && n < l.min || void 0 !== l.max && n > l.max) return null;
                var C = {
                    name: t,
                    value: n,
                    strValue: "" + n + (x ? x : ""),
                    units: x,
                    bypass: r,
                    hasPie: t.match(/pie-(\d+)-background-size/) && null != n && 0 !== n && "" !== n
                };
                return l.unitless || "px" !== x && "em" !== x || (C.pxValue = "px" !== x && x ? this.getEmSizeInPixels() * n : n), ("ms" === x || "s" === x) && (C.msValue = "ms" === x ? n : 1e3 * n), C
            }
            if (l.propList) {
                var T = [],
                    k = "" + n;
                if ("none" === k);
                else {
                    for (var N = k.split(","), E = 0; E < N.length; E++) {
                        var D = e.util.trim(N[E]);
                        e.style.properties[D] && T.push(D)
                    }
                    if (0 === T.length) return null
                }
                return {
                    name: t,
                    value: T,
                    strValue: 0 === T.length ? "none" : T.join(", "),
                    bypass: r
                }
            }
            if (l.color) {
                var P = e.util.color2tuple(n);
                return P ? {
                    name: t,
                    value: P,
                    strValue: "" + n,
                    bypass: r
                } : null
            }
            if (l.enums) {
                for (var E = 0; E < l.enums.length; E++) {
                    var S = l.enums[E];
                    if (S === n) return {
                        name: t,
                        value: n,
                        strValue: "" + n,
                        bypass: r
                    }
                }
                return null
            }
            if (l.regex) {
                var M = new RegExp(l.regex),
                    B = M.exec(n);
                return B ? {
                    name: t,
                    value: B,
                    strValue: "" + n,
                    bypass: r
                } : null
            }
            return l.string ? {
                name: t,
                value: n,
                strValue: "" + n,
                bypass: r
            } : null
        }, e.styfn.selector = function(t) {
            var n = "core" === t ? null : new e.Selector(t),
                r = this.length++;
            return this[r] = {
                selector: n,
                properties: [],
                mappedProperties: [],
                index: r
            }, this
        }, e.styfn.css = function() {
            var t = arguments;
            switch (t.length) {
                case 1:
                    for (var n = t[0], r = 0; r < e.style.properties.length; r++) {
                        var i = e.style.properties[r],
                            a = n[i.name];
                        void 0 === a && (a = n[e.util.dash2camel(i.name)]), void 0 !== a && this.cssRule(i.name, a)
                    }
                    break;
                case 2:
                    this.cssRule(t[0], t[1])
            }
            return this
        }, e.styfn.cssRule = function(e, t) {
            var n = this.parse(e, t);
            if (n) {
                var r = this.length - 1;
                this[r].properties.push(n), this[r].properties[n.name] = n, n.hasPie && (this._private.hasPie = !0), n.mapped && this[r].mappedProperties.push(n);
                var i = !this[r].selector;
                i && (this._private.coreStyle[n.name] = n)
            }
            return this
        }
}(cytoscape),
function(e) {
    "use strict";
    e.styfn.apply = function(e) {
        var t = this;
        t._private.newStyle && (this._private.contextStyles = {}, this._private.propDiffs = {});
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t.getContextMeta(r),
                a = t.getContextStyle(i),
                o = t.applyContextStyle(i, a, r);
            t.updateTransitions(r, o.diffProps), t.updateStyleHints(r)
        }
        t._private.newStyle = !1
    }, e.styfn.getPropertiesDiff = function(e, t) {
        var n = this,
            r = n._private.propDiffs = n._private.propDiffs || {},
            i = e + "-" + t,
            a = r[i];
        if (a) return a;
        for (var o = [], s = {}, l = 0; l < n.length; l++) {
            var u = n[l],
                c = "t" === e[l],
                d = "t" === t[l],
                p = c !== d,
                h = u.mappedProperties.length > 0;
            if (p || h) {
                var f;
                p && h ? f = u.properties : p ? f = u.properties : h && (f = u.mappedProperties);
                for (var v = 0; v < f.length; v++) {
                    for (var g = f[v], y = g.name, m = !1, x = l + 1; x < n.length; x++) {
                        var b = n[x],
                            w = "t" === t[x];
                        if (w && (m = null != b.properties[g.name])) break
                    }
                    s[y] || m || (s[y] = !0, o.push(y))
                }
            }
        }
        return r[i] = o, o
    }, e.styfn.getContextMeta = function(e) {
        var t, n = this,
            r = "",
            i = e._private.styleCxtKey || "";
        n._private.newStyle && (i = "");
        for (var a = 0; a < n.length; a++) {
            var o = n[a],
                s = o.selector && o.selector.matches(e);
            r += s ? "t" : "f"
        }
        return t = n.getPropertiesDiff(i, r), e._private.styleCxtKey = r, {
            key: r,
            diffPropNames: t
        }
    }, e.styfn.getContextStyle = function(e) {
        var t = e.key,
            n = this,
            r = this._private.contextStyles = this._private.contextStyles || {};
        if (r[t]) return r[t];
        for (var i = {
                _private: {
                    key: t
                }
            }, a = 0; a < n.length; a++) {
            var o = n[a],
                s = "t" === t[a];
            if (s)
                for (var l = 0; l < o.properties.length; l++) {
                    var u = o.properties[l],
                        c = i[u.name] = u;
                    c.context = o
                }
        }
        return r[t] = i, i
    }, e.styfn.applyContextStyle = function(e, t, n) {
        for (var r = this, i = e.diffPropNames, a = {}, o = 0; o < i.length; o++) {
            var s = i[o],
                l = t[s],
                u = n._private.style[s];
            if (l && u !== l) {
                var c = a[s] = {
                    prev: u
                };
                r.applyParsedProperty(n, l), c.next = n._private.style[s], c.next.bypass && (c.next = c.next.bypassed)
            }
        }
        return {
            diffProps: a
        }
    }, e.styfn.updateStyleHints = function(t) {
        var n = t._private,
            r = this,
            i = n.style,
            a = !1;
        if ("nodes" === n.group && r._private.hasPie)
            for (var o = 1; o <= e.style.pieBackgroundN; o++) {
                var s = n.style["pie-" + o + "-background-size"].value;
                if (s > 0) {
                    a = !0;
                    break
                }
            }
        n.hasPie = a;
        var l = i["text-transform"].strValue,
            u = i.content.strValue,
            c = i["font-style"].strValue,
            s = i["font-size"].pxValue + "px",
            d = i["font-family"].strValue,
            p = i["font-weight"].strValue,
            h = i["text-valign"].strValue,
            f = i["text-valign"].strValue,
            v = i["text-outline-width"].pxValue;
        n.labelKey = c + "$" + s + "$" + d + "$" + p + "$" + u + "$" + l + "$" + h + "$" + f + "$" + v, n.fontKey = c + "$" + p + "$" + s + "$" + d;
        var g = i.width.pxValue,
            y = i.height.pxValue,
            m = i["border-width"].pxValue;
        if (n.boundingBoxKey = g + "$" + y + "$" + m, "edges" === t._private.group) {
            var x = i["control-point-step-size"].pxValue,
                b = i["control-point-distance"] ? i["control-point-distance"].pxValue : void 0,
                w = i["control-point-weight"].value,
                _ = i["curve-style"].strValue;
            n.boundingBoxKey += "$" + x + "$" + b + "$" + w + "$" + _
        }
        n.styleKey = Date.now()
    }, e.styfn.applyParsedProperty = function(t, n) {
        var r, i, a = n,
            o = t._private.style,
            s = e.style.properties[a.name].type,
            l = a.bypass,
            u = o[a.name],
            c = u && u.bypass;
        if (("height" === n.name || "width" === n.name) && "auto" === n.value && t.isNode() && !t.isParent()) return !1;
        if (l && a.deleteBypass) {
            var d = o[a.name];
            return d ? d.bypass && d.bypassed ? (o[a.name] = d.bypassed, !0) : !1 : !0
        }
        switch (a.mapped) {
            case e.style.types.mapData:
            case e.style.types.mapLayoutData:
                for (var p = a.mapped === e.style.types.mapLayoutData, h = a.field.split("."), r = p ? t._private.layoutData : t._private.data, f = 0; f < h.length && r; f++) {
                    var v = h[f];
                    r = r[v]
                }
                var g;
                if (g = e.is.number(r) ? (r - a.fieldMin) / (a.fieldMax - a.fieldMin) : 0, 0 > g ? g = 0 : g > 1 && (g = 1), s.color) {
                    var y = a.valueMin[0],
                        m = a.valueMax[0],
                        x = a.valueMin[1],
                        b = a.valueMax[1],
                        w = a.valueMin[2],
                        _ = a.valueMax[2],
                        E = null == a.valueMin[3] ? 1 : a.valueMin[3],
                        S = null == a.valueMax[3] ? 1 : a.valueMax[3],
                        C = [Math.round(y + (m - y) * g), Math.round(x + (b - x) * g), Math.round(w + (_ - w) * g), Math.round(E + (S - E) * g)];
                    i = {
                        bypass: a.bypass,
                        name: a.name,
                        value: C,
                        strValue: "rgb(" + C[0] + ", " + C[1] + ", " + C[2] + ")"
                    }
                } else {
                    if (!s.number) return !1;
                    var T = a.valueMin + (a.valueMax - a.valueMin) * g;
                    i = this.parse(a.name, T, a.bypass, !0)
                }
                i || (i = this.parse(a.name, u.strValue, a.bypass, !0)), i.mapping = a, a = i;
                break;
            case e.style.types.data:
            case e.style.types.layoutData:
                for (var p = a.mapped === e.style.types.layoutData, h = a.field.split("."), r = p ? t._private.layoutData : t._private.data, f = 0; f < h.length && r; f++) {
                    var v = h[f];
                    r = r[v]
                }
                if (i = this.parse(a.name, r, a.bypass, !0), !i) {
                    var k = u ? u.strValue : "";
                    i = this.parse(a.name, k, a.bypass, !0)
                }
                i.mapping = a, a = i;
                break;
            case void 0:
                break;
            default:
                return !1
        }
        return l ? (a.bypassed = c ? u.bypassed : u, o[a.name] = a) : c ? u.bypassed = a : o[a.name] = a, !0
    }, e.styfn.update = function() {
        var e = this._private.cy,
            t = e.elements();
        t.updateStyle()
    }, e.styfn.updateMappers = function(t) {
        for (var n = 0; n < t.length; n++) {
            for (var r = t[n], i = r._private.style, a = 0; a < e.style.properties.length; a++) {
                var o = e.style.properties[a],
                    s = i[o.name];
                if (s && s.mapping) {
                    var l = s.mapping;
                    this.applyParsedProperty(r, l)
                }
            }
            this.updateStyleHints(r)
        }
    }, e.styfn.updateTransitions = function(t, n, r) {
        var i = this,
            a = t._private.style,
            o = a["transition-property"].value,
            s = a["transition-duration"].msValue,
            l = a["transition-delay"].msValue,
            u = {};
        if (o.length > 0 && s > 0) {
            for (var c = !1, d = 0; d < o.length; d++) {
                var p = o[d],
                    h = a[p],
                    f = n[p];
                if (f) {
                    var v = f.prev,
                        g = v,
                        y = null != f.next ? f.next : h,
                        m = !1;
                    g && (e.is.number(g.pxValue) && e.is.number(y.pxValue) ? m = g.pxValue !== y.pxValue : e.is.number(g.value) && e.is.number(y.value) ? m = g.value !== y.value : e.is.array(g.value) && e.is.array(y.value) && (m = g.value[0] !== y.value[0] || g.value[1] !== y.value[1] || g.value[2] !== y.value[2]), m && (u[p] = y.strValue, this.applyBypass(t, p, g.strValue), c = !0))
                }
            }
            if (!c) return;
            t._private.transitioning = !0, t.stop(), l > 0 && t.delay(l), t.animate({
                css: u
            }, {
                duration: s,
                queue: !1,
                complete: function() {
                    r || i.removeBypasses(t, o), t._private.transitioning = !1
                }
            })
        } else t._private.transitioning && (t.stop(), this.removeBypasses(t, o), t._private.transitioning = !1)
    }
}(cytoscape),
function(e) {
    "use strict";
    e.styfn.applyBypass = function(t, n, r, i) {
        var a = [],
            o = !0;
        if ("*" === n || "**" === n) {
            if (void 0 !== r)
                for (var s = 0; s < e.style.properties.length; s++) {
                    var l = e.style.properties[s],
                        n = l.name,
                        u = this.parse(n, r, !0);
                    u && a.push(u)
                }
        } else if (e.is.string(n)) {
            var u = this.parse(n, r, !0);
            u && a.push(u)
        } else {
            if (!e.is.plainObject(n)) return !1;
            var c = n;
            i = r;
            for (var s = 0; s < e.style.properties.length; s++) {
                var l = e.style.properties[s],
                    n = l.name,
                    r = c[n];
                if (void 0 === r && (r = c[e.util.dash2camel(n)]), void 0 !== r) {
                    var u = this.parse(n, r, !0);
                    u && a.push(u)
                }
            }
        }
        if (0 === a.length) return !1;
        for (var d = !1, s = 0; s < t.length; s++) {
            for (var p, h = t[s], f = h._private.style, v = {}, g = 0; g < a.length; g++) {
                var l = a[g];
                if (i) {
                    var y = f[l.name];
                    p = v[l.name] = {
                        prev: y
                    }
                }
                d = this.applyParsedProperty(h, l) || d, i && (p.next = f[l.name])
            }
            i && this.updateTransitions(h, v, o)
        }
        return d
    }, e.styfn.overrideBypass = function(t, n, r) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i],
                o = a._private.style[e.util.camel2dash(n)];
            o.bypass ? (o.value = r, o.pxValue = r) : this.applyBypass(a, n, r)
        }
    }, e.styfn.removeAllBypasses = function(t, n) {
        for (var r = !0, i = 0; i < t.length; i++) {
            for (var a = t[i], o = {}, s = a._private.style, l = 0; l < e.style.properties.length; l++) {
                var u = e.style.properties[l],
                    c = u.name,
                    d = "",
                    p = this.parse(c, d, !0),
                    h = s[u.name],
                    f = o[u.name] = {
                        prev: h
                    };
                this.applyParsedProperty(a, p), f.next = s[u.name]
            }
            n && this.updateTransitions(a, o, r)
        }
    }, e.styfn.removeBypasses = function(t, n, r) {
        for (var i = !0, a = 0; a < t.length; a++) {
            for (var o = t[a], s = {}, l = o._private.style, u = 0; u < n.length; u++) {
                var c = n[u],
                    d = e.style.properties[c],
                    p = "",
                    h = this.parse(c, p, !0),
                    f = l[d.name],
                    v = s[d.name] = {
                        prev: f
                    };
                this.applyParsedProperty(o, h), v.next = l[d.name]
            }
            r && this.updateTransitions(o, s, i)
        }
    }
}(cytoscape),
function(e, t) {
    "use strict";
    e.styfn.getEmSizeInPixels = function() {
        var e = this._private.cy,
            n = e.container();
        if (t && n && t.getComputedStyle) {
            var r = t.getComputedStyle(n).getPropertyValue("font-size"),
                i = parseFloat(r);
            return i
        }
        return 1
    }, e.styfn.containerCss = function(e) {
        var n = this._private.cy,
            r = n.container();
        return t && r && t.getComputedStyle ? t.getComputedStyle(r).getPropertyValue(e) : void 0
    }, e.styfn.containerProperty = function(e) {
        var t = this.containerCss(e),
            n = this.parse(e, t);
        return n
    }, e.styfn.containerPropertyAsString = function(e) {
        var t = this.containerProperty(e);
        return t ? t.strValue : void 0
    }
}(cytoscape, "undefined" == typeof window ? null : window),
function(e) {
    "use strict";
    e.styfn.getRenderedStyle = function(t) {
        var t = t[0];
        if (t) {
            for (var n = {}, r = t._private.style, i = this._private.cy, a = i.zoom(), o = 0; o < e.style.properties.length; o++) {
                var s = e.style.properties[o],
                    l = r[s.name];
                if (l) {
                    var u = l.unitless ? l.strValue : l.pxValue * a + "px";
                    n[s.name] = u, n[e.util.dash2camel(s.name)] = u
                }
            }
            return n
        }
    }, e.styfn.getRawStyle = function(t) {
        var t = t[0];
        if (t) {
            for (var n = {}, r = t._private.style, i = 0; i < e.style.properties.length; i++) {
                var a = e.style.properties[i],
                    o = r[a.name];
                o && (n[a.name] = o.strValue, n[e.util.dash2camel(a.name)] = o.strValue)
            }
            return n
        }
    }, e.styfn.getValueStyle = function(t, n) {
        n = n || {};
        var r, i = n.array ? [] : {};
        if (r = e.is.element(t) ? t._private.style : t)
            for (var a = 0; a < e.style.properties.length; a++) {
                var o = e.style.properties[a],
                    s = r[o.name] || r[e.util.dash2camel(o.name)];
                void 0 === s || e.is.plainObject(s) || (s = this.parse(o.name, s)), s && (n.array ? i.push(s) : (i[o.name] = s, i[e.util.dash2camel(o.name)] = s))
            }
        return i
    }
}(cytoscape),
function(e) {
    "use strict";
    e.style.applyFromJson = function(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                i = r.selector,
                a = r.css;
            e.selector(i);
            for (var o in a) {
                var s = a[o];
                e.css(o, s)
            }
        }
        return e
    }, e.style.fromJson = function(t, n) {
        var r = new e.Style(t);
        return e.style.applyFromJson(r, n), r
    }, e.styfn.fromJson = function(t) {
        var n = this;
        return n.resetToDefault(), e.style.applyFromJson(n, t), n
    }, e.styfn.json = function() {
        for (var e = [], t = 0; t < this.length; t++) {
            for (var n = this[t], r = n.selector, i = n.properties, a = {}, o = 0; o < i.length; o++) {
                var s = i[o];
                a[s.name] = s.strValue
            }
            e.push({
                selector: r ? r.toString() : "core",
                css: a
            })
        }
        return e
    }
}(cytoscape),
function(e) {
    "use strict";
    e.style.applyFromString = function(t, n) {
        function r() {
            l = l.length > a.length ? l.substr(a.length) : ""
        }

        function i() {
            o = o.length > s.length ? o.substr(s.length) : ""
        }
        var a, o, s, l = "" + n;
        for (l = l.replace(/[/][*](\s|.)+?[*][/]/g, "");;) {
            var u = l.match(/^\s*$/);
            if (u) break;
            var c = l.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
            if (!c) {
                e.util.error("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + l);
                break
            }
            a = c[0];
            var d = c[1],
                p = new e.Selector(d);
            if (p._private.invalid) e.util.error("Skipping parsing of block: Invalid selector found in string stylesheet: " + d), r();
            else {
                var h = c[2],
                    f = !1;
                o = h;
                for (var v = [];;) {
                    var u = o.match(/^\s*$/);
                    if (u) break;
                    var g = o.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);
                    if (!g) {
                        e.util.error("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h), f = !0;
                        break
                    }
                    s = g[0];
                    var y = g[1],
                        m = g[2],
                        x = e.style.properties[y];
                    if (x) {
                        var b = t.parse(y, m);
                        b ? (v.push({
                            name: y,
                            val: m
                        }), i()) : (e.util.error("Skipping property: Invalid property definition in: " + s), i())
                    } else e.util.error("Skipping property: Invalid property name in: " + s), i()
                }
                if (f) {
                    r();
                    break
                }
                t.selector(d);
                for (var w = 0; w < v.length; w++) {
                    var x = v[w];
                    t.css(x.name, x.val)
                }
                r()
            }
        }
        return t
    }, e.style.fromString = function(t, n) {
        var r = new e.Style(t);
        return e.style.applyFromString(r, n), r
    }, e.styfn.fromString = function(t) {
        var n = this;
        return n.resetToDefault(), e.style.applyFromString(n, t), n
    }
}(cytoscape),
function(e) {
    "use strict";
    e.stylesheet = e.Stylesheet = function() {
        return this instanceof e.Stylesheet ? void(this.length = 0) : new e.Stylesheet
    }, e.Stylesheet.prototype.selector = function(e) {
        var t = this.length++;
        return this[t] = {
            selector: e,
            properties: []
        }, this
    }, e.Stylesheet.prototype.css = function(t, n) {
        var r = this.length - 1;
        if (e.is.string(t)) this[r].properties.push({
            name: t,
            value: n
        });
        else if (e.is.plainObject(t))
            for (var i = t, a = 0; a < e.style.properties.length; a++) {
                var o = e.style.properties[a],
                    s = i[o.name];
                if (void 0 === s && (s = i[e.util.dash2camel(o.name)]), void 0 !== s) {
                    var t = o.name,
                        n = s;
                    this[r].properties.push({
                        name: t,
                        value: n
                    })
                }
            }
        return this
    }, e.Stylesheet.prototype.generateStyle = function(t) {
        for (var n = new e.Style(t), r = 0; r < this.length; r++) {
            var i = this[r],
                a = i.selector,
                o = i.properties;
            n.selector(a);
            for (var s = 0; s < o.length; s++) {
                var l = o[s];
                n.css(l.name, l.value)
            }
        }
        return n
    }
}(cytoscape),
function(e, t) {
    "use strict";
    var n = e.is.touch(),
        r = {},
        i = e.util.copy(r);
    e.defaults = function(t) {
        r = e.util.extend({}, i, t)
    }, e.fn.core = function(t) {
        for (var n in t) {
            var r = t[n];
            e.Core.prototype[n] = r
        }
    }, e.Core = function(i) {
        if (!(this instanceof e.Core)) return new e.Core(i);
        var a = this;
        i = e.util.extend({}, r, i);
        var o = i.container,
            s = o ? o._cyreg : null;
        if (s = s || {}, s && s.cy) {
            if (o)
                for (; o.firstChild;) o.removeChild(o.firstChild);
            s.cy.notify({
                type: "destroy"
            }), s = {}
        }
        var l = s.readies = s.readies || [];
        o && (o._cyreg = s), s.cy = a;
        var u = void 0 !== t && void 0 !== o && !i.headless,
            c = i;
        c.layout = e.util.extend({
            name: u ? "grid" : "null"
        }, c.layout), c.renderer = e.util.extend({
            name: u ? "canvas" : "null"
        }, c.renderer);
        var d = function(e, t, n) {
                return void 0 !== t ? t : void 0 !== n ? n : e
            },
            p = this._private = {
                container: c.container,
                ready: !1,
                initrender: !1,
                options: c,
                elements: [],
                id2index: {},
                listeners: [],
                aniEles: e.Collection(this),
                scratch: {},
                layout: null,
                renderer: null,
                notificationsEnabled: !0,
                minZoom: 1e-50,
                maxZoom: 1e50,
                zoomingEnabled: d(!0, c.zoomingEnabled),
                userZoomingEnabled: d(!0, c.userZoomingEnabled),
                panningEnabled: d(!0, c.panningEnabled),
                userPanningEnabled: d(!0, c.userPanningEnabled),
                boxSelectionEnabled: d(!0, c.boxSelectionEnabled),
                autolock: d(!1, c.autolock, c.autolockNodes),
                autoungrabify: d(!1, c.autoungrabify, c.autoungrabifyNodes),
                autounselectify: d(!1, c.autounselectify),
                styleEnabled: void 0 === c.styleEnabled ? u : c.styleEnabled,
                zoom: e.is.number(c.zoom) ? c.zoom : 1,
                pan: {
                    x: e.is.plainObject(c.pan) && e.is.number(c.pan.x) ? c.pan.x : 0,
                    y: e.is.plainObject(c.pan) && e.is.number(c.pan.y) ? c.pan.y : 0
                },
                animation: {
                    current: [],
                    queue: []
                },
                hasCompoundNodes: !1,
                deferredExecQueue: []
            },
            h = c.selectionType;
        p.selectionType = void 0 === h || "additive" !== h && "single" !== h ? n ? "additive" : "single" : h, e.is.number(c.minZoom) && e.is.number(c.maxZoom) && c.minZoom < c.maxZoom ? (p.minZoom = c.minZoom, p.maxZoom = c.maxZoom) : e.is.number(c.minZoom) && void 0 === c.maxZoom ? p.minZoom = c.minZoom : e.is.number(c.maxZoom) && void 0 === c.minZoom && (p.maxZoom = c.maxZoom), p.styleEnabled && this.setStyle(c.style), a.initRenderer(e.util.extend({
            hideEdgesOnViewport: c.hideEdgesOnViewport,
            hideLabelsOnViewport: c.hideLabelsOnViewport,
            textureOnViewport: c.textureOnViewport,
            wheelSensitivity: e.is.number(c.wheelSensitivity) && c.wheelSensitivity > 0 ? c.wheelSensitivity : 1,
            motionBlur: c.motionBlur,
            pixelRatio: e.is.number(c.pixelRatio) && c.pixelRatio > 0 ? c.pixelRatio : "auto" === c.pixelRatio ? void 0 : 1
        }, c.renderer)), c.initrender && (a.on("initrender", c.initrender), a.on("initrender", function() {
            a._private.initrender = !0
        })), a.load(c.elements, function() {
            a.startAnimationLoop(), a._private.ready = !0, e.is.fn(c.ready) && a.on("ready", c.ready);
            for (var t = 0; t < l.length; t++) {
                var n = l[t];
                a.on("ready", n)
            }
            s && (s.readies = []), a.trigger("ready")
        }, c.done)
    }, e.corefn = e.Core.prototype, e.fn.core({
        isReady: function() {
            return this._private.ready
        },
        ready: function(e) {
            this.isReady() ? this.trigger("ready", [], e) : this.on("ready", e)
        },
        initrender: function() {
            return this._private.initrender
        },
        destroy: function() {
            this.notify({
                type: "destroy"
            });
            var e = this.container(),
                t = e.parentNode;
            return t && t.removeChild(e), this
        },
        getElementById: function(t) {
            var n = this._private.id2index[t];
            return void 0 !== n ? this._private.elements[n] : new e.Collection(this)
        },
        selectionType: function() {
            return this._private.selectionType
        },
        hasCompoundNodes: function() {
            return this._private.hasCompoundNodes
        },
        styleEnabled: function() {
            return this._private.styleEnabled
        },
        addToPool: function(e) {
            for (var t = this._private.elements, n = this._private.id2index, r = 0; r < e.length; r++) {
                var i = e[r],
                    a = i._private.data.id,
                    o = n[a],
                    s = void 0 !== o;
                s || (o = t.length, t.push(i), n[a] = o, i._private.index = o)
            }
            return this
        },
        removeFromPool: function(e) {
            for (var t = this._private.elements, n = this._private.id2index, r = 0; r < e.length; r++) {
                var i = e[r],
                    a = i._private.data.id,
                    o = n[a],
                    s = void 0 !== o;
                if (s) {
                    this._private.id2index[a] = void 0, t.splice(o, 1);
                    for (var l = o; l < t.length; l++) {
                        var u = t[l]._private.data.id;
                        n[u]--
                    }
                }
            }
        },
        container: function() {
            return this._private.container
        },
        options: function() {
            return e.util.copy(this._private.options)
        },
        json: function() {
            var e = {},
                t = this;
            return e.elements = {}, t.elements().each(function(t, n) {
                var r = n.group();
                e.elements[r] || (e.elements[r] = []), e.elements[r].push(n.json())
            }), this._private.styleEnabled && (e.style = t.style().json()), e.zoomingEnabled = t._private.zoomingEnabled, e.userZoomingEnabled = t._private.userZoomingEnabled, e.zoom = t._private.zoom, e.minZoom = t._private.minZoom, e.maxZoom = t._private.maxZoom, e.panningEnabled = t._private.panningEnabled, e.userPanningEnabled = t._private.userPanningEnabled, e.pan = t._private.pan, e.boxSelectionEnabled = t._private.boxSelectionEnabled, e.layout = t._private.options.layout, e.renderer = t._private.options.renderer, e.hideEdgesOnViewport = t._private.options.hideEdgesOnViewport, e.hideLabelsOnViewport = t._private.options.hideLabelsOnViewport, e.textureOnViewport = t._private.options.textureOnViewport, e.wheelSensitivity = t._private.options.wheelSensitivity, e.motionBlur = t._private.options.motionBlur, e
        },
        defer: function(e) {
            var t = this,
                n = t._private,
                r = n.deferredExecQueue;
            r.push(e), n.deferredTimeout || (n.deferredTimeout = setTimeout(function() {
                for (; r.length > 0;) r.shift()();
                n.deferredTimeout = null
            }, 0))
        }
    })
}(cytoscape, "undefined" == typeof window ? null : window),
function(e, t) {
    "use strict";

    function n(e) {
        var t = !document || "interactive" !== document.readyState && "complete" !== document.readyState ? n : e;
        setTimeout(t, 9, e)
    }
    e.fn.core({
        add: function(t) {
            var n, r = this;
            if (e.is.elementOrCollection(t)) {
                var i = t;
                if (i._private.cy === r) n = i.restore();
                else {
                    for (var a = [], o = 0; o < i.length; o++) {
                        var s = i[o];
                        a.push(s.json())
                    }
                    n = new e.Collection(r, a)
                }
            } else if (e.is.array(t)) {
                var a = t;
                n = new e.Collection(r, a)
            } else if (e.is.plainObject(t) && (e.is.array(t.nodes) || e.is.array(t.edges))) {
                for (var l = t, a = [], u = ["nodes", "edges"], o = 0, c = u.length; c > o; o++) {
                    var d = u[o],
                        p = l[d];
                    if (e.is.array(p))
                        for (var h = 0, f = p.length; f > h; h++) {
                            var v = p[h];
                            v.group = d, a.push(v)
                        }
                }
                n = new e.Collection(r, a)
            } else {
                var v = t;
                n = new e.Element(r, v).collection()
            }
            return n
        },
        remove: function(t) {
            if (e.is.elementOrCollection(t)) t = t;
            else if (e.is.string(t)) {
                var n = t;
                t = this.$(n)
            }
            return t.remove()
        },
        load: function(r, i, a) {
            function o() {
                s.one("layoutready", function(e) {
                    s.notifications(!0), s.trigger(e), s.notify({
                        type: "load",
                        collection: s.elements()
                    }), s.one("load", i), s.trigger("load")
                }).one("layoutstop", function() {
                    s.one("done", a), s.trigger("done")
                });
                var t = e.util.extend({}, s._private.options.layout);
                t.eles = s.$(), s.layout(t)
            }
            var s = this,
                l = s.elements();
            return l.length > 0 && l.remove(), s.notifications(!1), null != r && (e.is.plainObject(r) || e.is.array(r)) && s.add(r), t ? n(o) : o(), this
        }
    })
}(cytoscape, "undefined" == typeof window ? null : window),
function(e, t) {
    "use strict";
    e.fn.core({
        animated: e.define.animated(),
        clearQueue: e.define.clearQueue(),
        delay: e.define.delay(),
        animate: e.define.animate(),
        stop: e.define.stop(),
        addToAnimationPool: function(e) {
            var t = this;
            t.styleEnabled() && t._private.aniEles.merge(e)
        },
        startAnimationLoop: function() {
            function n() {
                e.util.requestAnimationFrame(function(e) {
                    r(e), n()
                })
            }

            function r(t) {
                function n(n, r) {
                    var s = n._private.animation.current,
                        l = n._private.animation.queue,
                        u = !1;
                    if (0 === s.length) {
                        var c = l.length > 0 ? l.shift() : null;
                        c && (c.callTime = t, s.push(c))
                    }
                    for (var d = [], p = s.length - 1; p >= 0; p--) {
                        var h = s[p];
                        h.started || i(n, h), a(n, h, t, r), h.done && (d.push(h), s.splice(p, 1)), u = !0
                    }
                    for (var p = 0; p < d.length; p++) {
                        var h = d[p],
                            f = h.params.complete;
                        e.is.fn(f) && f.apply(n, [t])
                    }
                    return r || 0 !== s.length || 0 !== l.length || o.push(n), u
                }
                t = +new Date;
                for (var r = l._private.aniEles, o = [], s = 0; s < r.length; s++) {
                    var u = r[s];
                    n(u)
                }
                var c = n(l, !0);
                if (r.length > 0 || c) {
                    var d;
                    if (r.length > 0) {
                        var p = r.updateCompoundBounds();
                        d = p.length > 0 ? r.add(p) : r
                    }
                    l.notify({
                        type: "draw",
                        collection: d
                    })
                }
                r.unmerge(o)
            }

            function i(t, n) {
                var r = e.is.core(t),
                    i = !r,
                    a = t,
                    o = l._private.style;
                if (i) var s = a._private.position,
                    u = {
                        x: s.x,
                        y: s.y
                    },
                    c = o.getValueStyle(a);
                if (r) var d = l._private.pan,
                    p = {
                        x: d.x,
                        y: d.y
                    },
                    h = l._private.zoom;
                n.started = !0, n.startTime = Date.now(), n.startPosition = u, n.startStyle = c, n.startPan = p, n.startZoom = h
            }

            function a(t, n, r, i) {
                var a, u = l._private.style,
                    c = n.properties,
                    d = n.params,
                    p = n.startTime,
                    h = !i;
                if (a = 0 === n.duration ? 1 : Math.min(1, (r - p) / n.duration), 0 > a ? a = 0 : a > 1 && (a = 1), null == c.delay) {
                    var f = n.startPosition,
                        v = c.position,
                        g = t._private.position;
                    v && h && (o(f.x, v.x) && (g.x = s(f.x, v.x, a)), o(f.y, v.y) && (g.y = s(f.y, v.y, a)));
                    var y = n.startPan,
                        m = c.pan,
                        x = t._private.pan,
                        b = null != m && i;
                    b && (o(y.x, m.x) && (x.x = s(y.x, m.x, a)), o(y.y, m.y) && (x.y = s(y.y, m.y, a)), t.trigger("pan"));
                    var w = n.startZoom,
                        _ = c.zoom,
                        E = null != _ && i;
                    if (E && (o(w, _) && (t._private.zoom = s(w, _, a)), t.trigger("zoom")), (b || E) && t.trigger("viewport"), c.css && h)
                        for (var S = c.css, C = 0; C < S.length; C++) {
                            var T = S[C].name,
                                k = S[C],
                                N = k,
                                D = n.startStyle[T],
                                P = s(D, N, a);
                            u.overrideBypass(t, T, P)
                        }
                }
                return e.is.fn(d.step) && d.step.apply(t, [r]), a >= 1 && (n.done = !0), a
            }

            function o(t, n) {
                return null == t || null == n ? !1 : e.is.number(t) && e.is.number(n) ? !0 : t && n ? !0 : !1
            }

            function s(t, n, r) {
                0 > r ? r = 0 : r > 1 && (r = 1);
                var i, a;
                if (i = null != t.pxValue || null != t.value ? null != t.pxValue ? t.pxValue : t.value : t, a = null != n.pxValue || null != n.value ? null != n.pxValue ? n.pxValue : n.value : n, e.is.number(i) && e.is.number(a)) return i + (a - i) * r;
                if (e.is.number(i[0]) && e.is.number(a[0])) {
                    var o = i,
                        s = a,
                        l = function(e, t) {
                            var n = t - e,
                                i = e;
                            return Math.round(r * n + i)
                        },
                        u = l(o[0], s[0]),
                        c = l(o[1], s[1]),
                        d = l(o[2], s[2]);
                    return [u, c, d]
                }
                return void 0
            }
            var l = this;
            l.styleEnabled() && t && n()
        }
    })
}(cytoscape, "undefined" == typeof window ? null : window),
function(e) {
    "use strict";
    e.fn.core({
        data: e.define.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "data",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0
        }),
        removeData: e.define.removeData({
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: !0
        }),
        scratch: e.define.data({
            field: "scratch",
            allowBinding: !1,
            allowSetting: !0,
            settingTriggersEvent: !1,
            allowGetting: !0
        }),
        removeScratch: e.define.removeData({
            field: "scratch",
            triggerEvent: !1
        })
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        on: e.define.on(),
        one: e.define.on({
            unbindSelfOnTrigger: !0
        }),
        once: e.define.on({
            unbindAllBindersOnTrigger: !0
        }),
        off: e.define.off(),
        trigger: e.define.trigger()
    }), e.corefn.bind = e.corefn.on, e.corefn.unbind = e.corefn.off
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        png: function(e) {
            var t = this._private.renderer;
            return e = e || {}, t.png(e)
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        layout: function(e) {
            var t = this._private.prevLayout = null == e ? this._private.prevLayout : this.initLayout(e);
            return t.run(), this
        },
        makeLayout: function(e) {
            return this.initLayout(e)
        },
        initLayout: function(t) {
            if (null == t) return void e.util.error("Layout options must be specified to make a layout");
            if (null == t.name) return void e.util.error("A `name` must be specified to make a layout");
            var n = t.name,
                r = e.extension("layout", n);
            if (null == r) return void e.util.error("Can not apply layout: No such layout `" + n + "` found; did you include its JS file?");
            t.eles = null != t.eles ? t.eles : this.$(), e.is.string(t.eles) && (t.eles = this.$(t.eles));
            var i = new r(e.util.extend({}, t, {
                cy: this
            }));
            return e.is.plainObject(i._private) || (i._private = {}), i._private.cy = this, i._private.listeners = [], i
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        notify: function(e) {
            if (this._private.batchingNotify) {
                var t = this._private.batchNotifyEles,
                    n = this._private.batchNotifyTypes;
                if (e.collection)
                    for (var r = 0; r < e.collection.length; r++) {
                        var i = e.collection[r];
                        t.ids[i._private.id] || t.push(i)
                    }
                return void(n.ids[e.type] || n.push(e.type))
            }
            if (this._private.notificationsEnabled) {
                var a = this.renderer();
                a.notify(e)
            }
        },
        notifications: function(e) {
            var t = this._private;
            return void 0 === e ? t.notificationsEnabled : void(t.notificationsEnabled = e ? !0 : !1)
        },
        noNotifications: function(e) {
            this.notifications(!1), e(), this.notifications(!0)
        },
        startBatch: function() {
            var e = this._private;
            return e.batchingStyle = e.batchingNotify = !0, e.batchStyleEles = [], e.batchNotifyEles = [], e.batchNotifyTypes = [], e.batchStyleEles.ids = {}, e.batchNotifyEles.ids = {}, e.batchNotifyTypes.ids = {}, this
        },
        endBatch: function() {
            var t = this._private;
            return t.batchingStyle = !1, new e.Collection(this, t.batchStyleEles).updateStyle(), t.batchingNotify = !1, this.notify({
                type: t.batchNotifyTypes,
                collection: t.batchNotifyEles
            }), this
        },
        batch: function(e) {
            return this.startBatch(), e(), this.endBatch(), this
        },
        batchData: function(e) {
            var t = this;
            return this.batch(function() {
                for (var n in e) {
                    var r = e[n],
                        i = t.getElementById(n);
                    i.data(r)
                }
            })
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        renderTo: function(e, t, n, r) {
            var i = this._private.renderer;
            return i.renderTo(e, t, n, r), this
        },
        renderer: function() {
            return this._private.renderer
        },
        forceRender: function() {
            return this.notify({
                type: "draw"
            }), this
        },
        resize: function() {
            return this.notify({
                type: "resize"
            }), this.trigger("resize"), this
        },
        initRenderer: function(t) {
            var n = this,
                r = e.extension("renderer", t.name);
            return null == r ? void e.util.error("Can not initialise: No such renderer `%s` found; did you include its JS file?", t.name) : void(this._private.renderer = new r(e.util.extend({}, t, {
                cy: n,
                style: n._private.style
            })))
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        collection: function(t) {
            return e.is.string(t) ? this.$(t) : e.is.elementOrCollection(t) ? t.collection() : e.is.array(t) ? new e.Collection(this, t) : new e.Collection(this)
        },
        nodes: function(e) {
            var t = this.$(function() {
                return this.isNode()
            });
            return e ? t.filter(e) : t
        },
        edges: function(e) {
            var t = this.$(function() {
                return this.isEdge()
            });
            return e ? t.filter(e) : t
        },
        $: function(t) {
            var n = new e.Collection(this, this._private.elements);
            return t ? n.filter(t) : n
        }
    }), e.corefn.elements = e.corefn.filter = e.corefn.$
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        style: function(e) {
            if (e) {
                var t = this.setStyle(e);
                t.update()
            }
            return this._private.style
        },
        setStyle: function(t) {
            var n = this._private;
            return n.style = e.is.stylesheet(t) ? t.generateStyle(this) : e.is.array(t) ? e.style.fromJson(this, t) : e.is.string(t) ? e.style.fromString(this, t) : new e.Style(this), n.style
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.core({
        autolock: function(e) {
            return void 0 === e ? this._private.autolock : (this._private.autolock = e ? !0 : !1, this)
        },
        autoungrabify: function(e) {
            return void 0 === e ? this._private.autoungrabify : (this._private.autoungrabify = e ? !0 : !1, this)
        },
        autounselectify: function(e) {
            return void 0 === e ? this._private.autounselectify : (this._private.autounselectify = e ? !0 : !1, this)
        },
        panningEnabled: function(e) {
            return void 0 === e ? this._private.panningEnabled : (this._private.panningEnabled = e ? !0 : !1, this)
        },
        userPanningEnabled: function(e) {
            return void 0 === e ? this._private.userPanningEnabled : (this._private.userPanningEnabled = e ? !0 : !1, this)
        },
        zoomingEnabled: function(e) {
            return void 0 === e ? this._private.zoomingEnabled : (this._private.zoomingEnabled = e ? !0 : !1, this)
        },
        userZoomingEnabled: function(e) {
            return void 0 === e ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = e ? !0 : !1, this)
        },
        boxSelectionEnabled: function(e) {
            return void 0 === e ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = e ? !0 : !1, this)
        },
        pan: function() {
            var t, n, r, i, a, o = arguments,
                s = this._private.pan;
            switch (o.length) {
                case 0:
                    return s;
                case 1:
                    if (e.is.string(o[0])) return t = o[0], s[t];
                    if (e.is.plainObject(o[0])) {
                        if (!this._private.panningEnabled) return this;
                        r = o[0], i = r.x, a = r.y, e.is.number(i) && (s.x = i), e.is.number(a) && (s.y = a), this.trigger("pan viewport")
                    }
                    break;
                case 2:
                    if (!this._private.panningEnabled) return this;
                    t = o[0], n = o[1], "x" !== t && "y" !== t || !e.is.number(n) || (s[t] = n), this.trigger("pan viewport")
            }
            return this.notify({
                type: "viewport"
            }), this
        },
        panBy: function() {
            var t, n, r, i, a, o = arguments,
                s = this._private.pan;
            if (!this._private.panningEnabled) return this;
            switch (o.length) {
                case 1:
                    e.is.plainObject(o[0]) && (r = o[0], i = r.x, a = r.y, e.is.number(i) && (s.x += i), e.is.number(a) && (s.y += a), this.trigger("pan viewport"));
                    break;
                case 2:
                    t = o[0], n = o[1], "x" !== t && "y" !== t || !e.is.number(n) || (s[t] += n), this.trigger("pan viewport")
            }
            return this.notify({
                type: "viewport"
            }), this
        },
        fit: function(e, t) {
            var n = this.getFitViewport(e, t);
            if (n) {
                var r = this._private;
                r.zoom = n.zoom, r.pan = n.pan, this.trigger("pan zoom viewport"), this.notify({
                    type: "viewport"
                })
            }
            return this
        },
        getFitViewport: function(t, n) {
            if (e.is.number(t) && void 0 === n && (n = t, t = void 0), this._private.panningEnabled && this._private.zoomingEnabled) {
                var r;
                if (e.is.string(t)) {
                    var i = t;
                    t = this.$(i)
                } else if (e.is.boundingBox(t)) {
                    var a = t;
                    r = {
                        x1: a.x1,
                        y1: a.y1,
                        x2: a.x2,
                        y2: a.y2
                    }, r.w = r.x2 - r.x1, r.h = r.y2 - r.y1
                } else e.is.elementOrCollection(t) || (t = this.elements());
                r = r || t.boundingBox();
                var o, s = this.width(),
                    l = this.height();
                if (n = e.is.number(n) ? n : 0, !isNaN(s) && !isNaN(l) && s > 0 && l > 0 && !isNaN(r.w) && !isNaN(r.h) && r.w > 0 && r.h > 0) {
                    o = Math.min((s - 2 * n) / r.w, (l - 2 * n) / r.h), o = o > this._private.maxZoom ? this._private.maxZoom : o, o = o < this._private.minZoom ? this._private.minZoom : o;
                    var u = {
                        x: (s - o * (r.x1 + r.x2)) / 2,
                        y: (l - o * (r.y1 + r.y2)) / 2
                    };
                    return {
                        zoom: o,
                        pan: u
                    }
                }
            }
        },
        minZoom: function(t) {
            return void 0 === t ? this._private.minZoom : (e.is.number(t) && (this._private.minZoom = t), this)
        },
        maxZoom: function(t) {
            return void 0 === t ? this._private.maxZoom : (e.is.number(t) && (this._private.maxZoom = t), this)
        },
        zoom: function(t) {
            var n, r;
            if (void 0 === t) return this._private.zoom;
            if (e.is.number(t)) r = t;
            else if (e.is.plainObject(t)) {
                if (r = t.level, t.position) {
                    var i = t.position,
                        a = this._private.pan,
                        o = this._private.zoom;
                    n = {
                        x: i.x * o + a.x,
                        y: i.y * o + a.y
                    }
                } else t.renderedPosition && (n = t.renderedPosition);
                if (n && !this._private.panningEnabled) return this
            }
            if (!this._private.zoomingEnabled) return this;
            if (!e.is.number(r) || n && (!e.is.number(n.x) || !e.is.number(n.y))) return this;
            if (r = r > this._private.maxZoom ? this._private.maxZoom : r, r = r < this._private.minZoom ? this._private.minZoom : r, n) {
                var s = this._private.pan,
                    l = this._private.zoom,
                    u = r,
                    c = {
                        x: -u / l * (n.x - s.x) + n.x,
                        y: -u / l * (n.y - s.y) + n.y
                    };
                this._private.zoom = r, this._private.pan = c;
                var d = s.x !== c.x || s.y !== c.y;
                this.trigger(" zoom " + (d ? " pan " : "") + " viewport ")
            } else this._private.zoom = r, this.trigger("zoom viewport");
            return this.notify({
                type: "viewport"
            }), this
        },
        viewport: function(t) {
            var n = this._private,
                r = !0,
                i = !0,
                a = [],
                o = !1,
                s = !1;
            if (!t) return this;
            if (e.is.number(t.zoom) || (r = !1), e.is.plainObject(t.pan) || (i = !1), !r && !i) return this;
            if (r) {
                var l = t.zoom;
                l < n.minZoom || l > n.maxZoom || !n.zoomingEnabled ? o = !0 : (n.zoom = l, a.push("zoom"))
            }
            if (i && (!o || !t.cancelOnFailedZoom) && n.panningEnabled) {
                var u = t.pan;
                e.is.number(u.x) && (n.pan.x = u.x, s = !1), e.is.number(u.y) && (n.pan.y = u.y, s = !1), s || a.push("pan")
            }
            return a.length > 0 && (a.push("viewport"), this.trigger(a.join(" ")), this.notify({
                type: "viewport"
            })), this
        },
        center: function(e) {
            var t = this.getCenterPan(e);
            return t && (this._private.pan = t, this.trigger("pan viewport"), this.notify({
                type: "viewport"
            })), this
        },
        getCenterPan: function(t) {
            if (this._private.panningEnabled) {
                if (e.is.string(t)) {
                    var n = t;
                    t = this.elements(n)
                } else e.is.elementOrCollection(t) || (t = this.elements());
                var r = t.boundingBox(),
                    i = this.width(),
                    a = this.height(),
                    o = this._private.zoom,
                    s = {
                        x: (i - o * (r.x1 + r.x2)) / 2,
                        y: (a - o * (r.y1 + r.y2)) / 2
                    };
                return s
            }
        },
        reset: function() {
            return this._private.panningEnabled && this._private.zoomingEnabled ? (this.viewport({
                pan: {
                    x: 0,
                    y: 0
                },
                zoom: 1
            }), this) : this
        },
        width: function() {
            var e = this._private.container;
            return e ? e.clientWidth : 1
        },
        height: function() {
            var e = this._private.container;
            return e ? e.clientHeight : 1
        },
        extent: function() {
            var e = this._private.pan,
                t = this._private.zoom,
                n = this.renderedExtent(),
                r = {
                    x1: (n.x1 - e.x) / t,
                    x2: (n.x2 - e.x) / t,
                    y1: (n.y1 - e.y) / t,
                    y2: (n.y2 - e.y) / t
                };
            return r.w = r.x2 - r.x1, r.h = r.y2 - r.y1, r
        },
        renderedExtent: function() {
            var e = this.width(),
                t = this.height();
            return {
                x1: 0,
                y1: 0,
                x2: e,
                y2: t,
                w: e,
                h: t
            }
        }
    }), e.corefn.centre = e.corefn.center, e.corefn.autolockNodes = e.corefn.autolock, e.corefn.autoungrabifyNodes = e.corefn.autoungrabifyNodes
}(cytoscape),
function(e) {
    "use strict";
    e.fn.collection = e.fn.eles = function(t) {
        for (var n in t) {
            var r = t[n];
            e.Collection.prototype[n] = r
        }
    };
    var t = {
        prefix: {
            nodes: "n",
            edges: "e"
        },
        id: {
            nodes: 0,
            edges: 0
        },
        generate: function(t, n, r) {
            var i = e.is.element(n) ? n._private : n,
                a = i.group,
                o = null != r ? r : this.prefix[a] + this.id[a];
            if (t.getElementById(o).empty()) this.id[a]++;
            else
                for (; !t.getElementById(o).empty();) o = this.prefix[a] + ++this.id[a];
            return o
        }
    };
    e.Element = function(t, n, r) {
        if (!(this instanceof e.Element)) return new e.Element(t, n, r);
        var i = this;
        if (r = void 0 === r || r ? !0 : !1, void 0 === t || void 0 === n || !e.is.core(t)) return void e.util.error("An element must have a core reference and parameters set");
        if ("nodes" !== n.group && "edges" !== n.group) return void e.util.error("An element must be of type `nodes` or `edges`; you specified `" + n.group + "`");
        if (this.length = 1, this[0] = this, this._private = {
                cy: t,
                single: !0,
                data: n.data || {},
                layoutData: {},
                position: n.position || {},
                autoWidth: void 0,
                autoHeight: void 0,
                listeners: [],
                group: n.group,
                style: {},
                rstyle: {},
                styleCxts: [],
                removed: !0,
                selected: n.selected ? !0 : !1,
                selectable: void 0 === n.selectable ? !0 : n.selectable ? !0 : !1,
                locked: n.locked ? !0 : !1,
                grabbed: !1,
                grabbable: void 0 === n.grabbable ? !0 : n.grabbable ? !0 : !1,
                active: !1,
                classes: {},
                animation: {
                    current: [],
                    queue: []
                },
                rscratch: {},
                scratch: {},
                edges: [],
                children: []
            }, n.renderedPosition) {
            var a = n.renderedPosition,
                o = t.pan(),
                s = t.zoom();
            this._private.position = {
                x: (a.x - o.x) / s,
                y: (a.y - o.y) / s
            }
        }
        if (e.is.string(n.classes))
            for (var l = n.classes.split(/\s+/), u = 0, c = l.length; c > u; u++) {
                var d = l[u];
                d && "" !== d && (i._private.classes[d] = !0)
            }
        n.css && t.style().applyBypass(this, n.css), (void 0 === r || r) && this.restore()
    }, e.Collection = function(n, r, i) {
        if (!(this instanceof e.Collection)) return new e.Collection(n, r);
        if (void 0 === n || !e.is.core(n)) return void e.util.error("A collection must have a reference to the core");
        var a = {},
            o = {},
            s = !1;
        if (r) {
            if (r.length > 0 && e.is.plainObject(r[0]) && !e.is.element(r[0])) {
                s = !0;
                for (var l = [], u = {}, c = 0, d = r.length; d > c; c++) {
                    var p = r[c];
                    null == p.data && (p.data = {});
                    var h = p.data;
                    if (null == h.id) h.id = t.generate(n, p);
                    else if (0 !== n.getElementById(h.id).length || u[h.id]) continue;
                    var f = new e.Element(n, p, !1);
                    l.push(f), u[h.id] = !0
                }
                r = l
            }
        } else r = [];
        this.length = 0;
        for (var c = 0, d = r.length; d > c; c++) {
            var v = r[c];
            if (v) {
                var g = v._private.data.id;
                (!i || i.unique && !a[g]) && (a[g] = v, o[g] = this.length, this[this.length] = v, this.length++)
            }
        }
        this._private = {
            cy: n,
            ids: a,
            indexes: o
        }, s && this.restore()
    }, e.elefn = e.elesfn = e.Element.prototype = e.Collection.prototype, e.elesfn.cy = function() {
        return this._private.cy
    }, e.elesfn.element = function() {
        return this[0]
    }, e.elesfn.collection = function() {
        return e.is.collection(this) ? this : new e.Collection(this._private.cy, [this])
    }, e.elesfn.unique = function() {
        return new e.Collection(this._private.cy, this, {
            unique: !0
        })
    }, e.elesfn.getElementById = function(t) {
        var n = this._private.cy,
            r = this._private.ids[t];
        return r ? r : e.Collection(n)
    }, e.elesfn.json = function() {
        var t = this.element();
        if (null == t) return void 0;
        var n = t._private,
            r = e.util.copy({
                data: n.data,
                position: n.position,
                group: n.group,
                bypass: n.bypass,
                removed: n.removed,
                selected: n.selected,
                selectable: n.selectable,
                locked: n.locked,
                grabbed: n.grabbed,
                grabbable: n.grabbable,
                classes: ""
            }),
            i = [];
        for (var a in n.classes) n.classes[a] && i.push(a);
        for (var o = 0; o < i.length; o++) {
            var a = i[o];
            r.classes += a + (o < i.length - 1 ? " " : "")
        }
        return r
    }, e.elesfn.jsons = function() {
        for (var e = [], t = 0; t < this.length; t++) {
            var n = this[t],
                r = n.json();
            e.push(r)
        }
        return e
    }, e.elesfn.clone = function() {
        for (var t = this.cy(), n = [], r = 0; r < this.length; r++) {
            var i = this[r],
                a = i.json(),
                o = new e.Element(t, a, !1);
            n.push(o)
        }
        return new e.Collection(t, n)
    }, e.elesfn.restore = function(n) {
        var r = this,
            i = [],
            a = r.cy();
        void 0 === n && (n = !0);
        for (var o = [], s = [], l = [], u = 0, c = 0, d = 0, p = r.length; p > d; d++) {
            var h = r[d];
            h.isNode() ? (s.push(h), u++) : (l.push(h), c++)
        }
        o = s.concat(l);
        for (var d = 0, p = o.length; p > d; d++) {
            var h = o[d];
            if (h.removed()) {
                var f = h._private,
                    v = f.data;
                if (void 0 === v.id) v.id = t.generate(a, h);
                else {
                    if (e.is.emptyString(v.id) || !e.is.string(v.id)) {
                        e.util.error("Can not create element with invalid string ID `" + v.id + "`");
                        continue
                    }
                    if (0 !== a.getElementById(v.id).length) {
                        e.util.error("Can not create second element with ID `" + v.id + "`");
                        continue
                    }
                }
                var g = v.id;
                if (h.isEdge()) {
                    for (var y = h, m = ["source", "target"], x = m.length, b = !1, w = 0; x > w; w++) {
                        var _ = m[w],
                            E = v[_];
                        null == E || "" === E ? (e.util.error("Can not create edge `" + g + "` with unspecified " + _), b = !0) : a.getElementById(E).empty() && (e.util.error("Can not create edge `" + g + "` with nonexistant " + _ + " `" + E + "`"), b = !0)
                    }
                    if (b) continue;
                    var S = a.getElementById(v.source),
                        C = a.getElementById(v.target);
                    S._private.edges.push(y), C._private.edges.push(y), y._private.source = S, y._private.target = C
                }
                f.ids = {}, f.ids[g] = h, f.removed = !1, a.addToPool(h), i.push(h)
            }
        }
        for (var d = 0; u > d; d++) {
            var T = o[d],
                v = T._private.data,
                k = T._private.data.parent,
                N = null != k;
            if (N) {
                var D = a.getElementById(k);
                if (D.empty()) v.parent = void 0;
                else {
                    for (var P = !1, M = D; !M.empty();) {
                        if (T.same(M)) {
                            P = !0, v.parent = void 0;
                            break
                        }
                        M = M.parent()
                    }
                    P || (D[0]._private.children.push(T), T._private.parent = D[0], a._private.hasCompoundNodes = !0)
                }
            }
        }
        if (i = new e.Collection(a, i), i.length > 0) {
            var B = i.add(i.connectedNodes()).add(i.parent());
            B.updateStyle(n), n ? i.rtrigger("add") : i.trigger("add")
        }
        return r
    }, e.elesfn.removed = function() {
        var e = this[0];
        return e && e._private.removed
    }, e.elesfn.inside = function() {
        var e = this[0];
        return e && !e._private.removed
    }, e.elesfn.remove = function(t) {
        function n(e) {
            for (var t = e._private.edges, n = 0; n < t.length; n++) i(t[n])
        }

        function r(e) {
            for (var t = e._private.children, n = 0; n < t.length; n++) i(t[n])
        }

        function i(e) {
            var t = c[e.id()];
            t || (c[e.id()] = !0, e.isNode() ? (u.push(e), n(e), r(e)) : u.unshift(e))
        }

        function a(e, t) {
            for (var n = e._private.edges, r = 0; r < n.length; r++) {
                var i = n[r];
                if (t === i) {
                    n.splice(r, 1);
                    break
                }
            }
        }

        function o(e, t) {
            t = t[0], e = e[0];
            for (var n = e._private.children, r = 0; r < n.length; r++)
                if (n[r][0] === t[0]) {
                    n.splice(r, 1);
                    break
                }
        }
        var s = this,
            l = [],
            u = [],
            c = {},
            d = s._private.cy;
        void 0 === t && (t = !0);
        for (var p = 0, h = s.length; h > p; p++) {
            var f = s[p];
            i(f)
        }
        for (var p = 0; p < u.length; p++) {
            var f = u[p];
            if (f._private.removed = !0, d.removeFromPool(f), l.push(f), f.isEdge()) {
                var v = f.source()[0],
                    g = f.target()[0];
                a(v, f), a(g, f)
            } else {
                var y = f.parent();
                0 !== y.length && o(y, f)
            }
        }
        var m = d._private.elements;
        d._private.hasCompoundNodes = !1;
        for (var p = 0; p < m.length; p++) {
            var f = m[p];
            if (f.isParent()) {
                d._private.hasCompoundNodes = !0;
                break
            }
        }
        var x = new e.Collection(this.cy(), l);
        x.size() > 0 && (t && this.cy().notify({
            type: "remove",
            collection: x
        }), x.trigger("remove"));
        for (var b = {}, p = 0; p < u.length; p++) {
            var f = u[p],
                w = "nodes" === f._private.group,
                _ = f._private.data.parent;
            if (w && void 0 !== _ && !b[_]) {
                b[_] = !0;
                var y = d.getElementById(_);
                y && 0 !== y.length && !y._private.removed && 0 === y.children().length && y.updateStyle()
            }
        }
        return this
    }, e.elesfn.move = function(e) {
        var t = this._private.cy;
        if (void 0 !== e.source || void 0 !== e.target) {
            var n = e.source,
                r = e.target,
                i = t.getElementById(n).length > 0,
                a = t.getElementById(r).length > 0;
            if (i || a) {
                var o = this.jsons();
                this.remove();
                for (var s = 0; s < o.length; s++) {
                    var l = o[s];
                    "edges" === l.group && (i && (l.data.source = n), a && (l.data.target = r))
                }
                return t.add(o)
            }
        } else if (void 0 !== e.parent) {
            var u = e.parent,
                c = null === e.parent || t.getElementById(u).length > 0;
            if (c) {
                var o = this.jsons();
                this.remove();
                for (var s = 0; s < this.length; s++) {
                    var l = o[s];
                    "nodes" === l.group && (l.data.parent = null === u ? void 0 : u)
                }
            }
            return t.add(o)
        }
        return this
    }
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        stdBreadthFirstSearch: function(t) {
            return t = e.util.extend({}, t, {
                std: !0
            }), this.breadthFirstSearch(t)
        },
        breadthFirstSearch: function(t, n, r) {
            var i, a, o;
            e.is.plainObject(t) && !e.is.elementOrCollection(t) && (i = t, t = i.roots, n = i.visit, r = i.directed, a = i.std, o = i.thisArg), r = 2 !== arguments.length || e.is.fn(n) ? r : n, n = e.is.fn(n) ? n : function() {};
            for (var s, l = this._private.cy, u = e.is.string(t) ? this.filter(t) : t, c = [], d = [], p = {}, h = {}, f = {}, v = 0, g = this.nodes(), y = this.edges(), m = 0; m < u.length; m++) u[m].isNode() && (c.unshift(u[m]), f[u[m].id()] = !0, d.push(u[m]), h[u[m].id()] = 0);
            for (; 0 !== c.length;) {
                var x, u = c.shift(),
                    b = h[u.id()],
                    w = p[u.id()],
                    _ = null == w ? void 0 : w.connectedNodes().not(u)[0];
                if (x = a ? n.call(o, u, w, _, v++, b) : n.call(u, v++, b, u, w, _), x === !0) {
                    s = u;
                    break
                }
                if (x === !1) break;
                for (var E = u.connectedEdges(r ? function() {
                        return this.data("source") === u.id()
                    } : void 0).intersect(y), m = 0; m < E.length; m++) {
                    var S = E[m],
                        C = S.connectedNodes(function() {
                            return this.id() !== u.id()
                        }).intersect(g);
                    0 === C.length || f[C.id()] || (C = C[0], c.push(C), f[C.id()] = !0, h[C.id()] = h[u.id()] + 1, d.push(C), p[C.id()] = S)
                }
            }
            for (var T = [], m = 0; m < d.length; m++) {
                var k = d[m],
                    N = p[k.id()];
                N && T.push(N), T.push(k)
            }
            return {
                path: new e.Collection(l, T, {
                    unique: !0
                }),
                found: new e.Collection(l, s, {
                    unique: !0
                })
            }
        },
        stdDepthFirstSearch: function(t) {
            return t = e.util.extend({}, t, {
                std: !0
            }), this.depthFirstSearch(t)
        },
        depthFirstSearch: function(t, n, r) {
            var i, a, o;
            e.is.plainObject(t) && !e.is.elementOrCollection(t) && (i = t, t = i.roots, n = i.visit, r = i.directed, a = i.std, o = i.thisArg), r = 2 !== arguments.length || e.is.fn(n) ? r : n, n = e.is.fn(n) ? n : function() {};
            for (var s, l = this._private.cy, u = e.is.string(t) ? this.filter(t) : t, c = [], d = [], p = {}, h = {}, f = {}, v = 0, g = this.edges(), y = this.nodes(), m = 0; m < u.length; m++) u[m].isNode() && (c.push(u[m]), d.push(u[m]), h[u[m].id()] = 0);
            for (; 0 !== c.length;) {
                var u = c.pop();
                if (!f[u.id()]) {
                    f[u.id()] = !0;
                    var x, b = h[u.id()],
                        w = p[u.id()],
                        _ = null == w ? void 0 : w.connectedNodes().not(u)[0];
                    if (x = a ? n.call(o, u, w, _, v++, b) : n.call(u, v++, b, u, w, _), x === !0) {
                        s = u;
                        break
                    }
                    if (x === !1) break;
                    for (var E = u.connectedEdges(r ? function() {
                            return this.data("source") === u.id()
                        } : void 0).intersect(g), m = 0; m < E.length; m++) {
                        var S = E[m],
                            C = S.connectedNodes(function() {
                                return this.id() !== u.id()
                            }).intersect(y);
                        0 === C.length || f[C.id()] || (C = C[0], c.push(C), h[C.id()] = h[u.id()] + 1, d.push(C), p[C.id()] = S)
                    }
                }
            }
            for (var T = [], m = 0; m < d.length; m++) {
                var k = d[m],
                    N = p[k.id()];
                N && T.push(N), T.push(k)
            }
            return {
                path: new e.Collection(l, T, {
                    unique: !0
                }),
                found: new e.Collection(l, s, {
                    unique: !0
                })
            }
        },
        kruskal: function(t) {
            function n(e) {
                for (var t = 0; t < i.length; t++) {
                    var n = i[t];
                    if (n.anySame(e)) return {
                        eles: n,
                        index: t
                    }
                }
            }
            t = e.is.fn(t) ? t : function() {
                return 1
            };
            for (var r = new e.Collection(this._private.cy, []), i = [], a = this.nodes(), o = 0; o < a.length; o++) i.push(a[o].collection());
            for (var s = this.edges(), l = s.toArray().sort(function(e, n) {
                    var r = t.call(e, e),
                        i = t.call(n, n);
                    return r - i
                }), o = 0; o < l.length; o++) {
                var u = l[o],
                    c = u.source()[0],
                    d = u.target()[0],
                    p = n(c),
                    h = n(d);
                p.index !== h.index && (r = r.add(u), i[p.index] = p.eles.add(h.eles), i.splice(h.index, 1))
            }
            return a.add(r)
        },
        dijkstra: function(t, n, r) {
            var i;
            e.is.plainObject(t) && !e.is.elementOrCollection(t) && (i = t, t = i.root, n = i.weight, r = i.directed);
            var a = this._private.cy;
            r = e.is.fn(n) ? r : n, n = e.is.fn(n) ? n : function() {
                return 1
            };
            for (var o = e.is.string(t) ? this.filter(t).eq(0) : t.eq(0), s = {}, l = {}, u = {}, c = this.edges().filter(function() {
                    return !this.isLoop()
                }), d = this.nodes(), p = [], h = 0; h < d.length; h++) s[d[h].id()] = d[h].same(o) ? 0 : 1 / 0, p.push(d[h]);
            var f = function(e) {
                return s[e.id()]
            };
            p = new e.Collection(a, p);
            for (var v = e.Minheap(a, p, f), g = function(e, t) {
                    for (var i, a = (r ? e.edgesTo(t) : e.edgesWith(t)).intersect(c), o = 1 / 0, s = 0; s < a.length; s++) {
                        var l = a[s],
                            u = n.apply(l, [l]);
                        (o > u || !i) && (o = u, i = l)
                    }
                    return {
                        edge: i,
                        dist: o
                    }
                }; v.size() > 0;) {
                var y = v.pop(),
                    m = y.value,
                    x = y.id,
                    b = a.getElementById(x);
                if (u[x] = m, m === Math.Infinite) break;
                for (var w = b.neighborhood().intersect(d), h = 0; h < w.length; h++) {
                    var _ = w[h],
                        E = _.id(),
                        S = g(b, _),
                        C = m + S.dist;
                    C < v.getValueById(E) && (v.edit(E, C), l[E] = {
                        node: b,
                        edge: S.edge
                    })
                }
            }
            return {
                distanceTo: function(t) {
                    var n = e.is.string(t) ? d.filter(t).eq(0) : t.eq(0);
                    return u[n.id()]
                },
                pathTo: function(t) {
                    var n = e.is.string(t) ? d.filter(t).eq(0) : t.eq(0),
                        r = [],
                        i = n;
                    if (n.length > 0)
                        for (r.unshift(n); l[i.id()];) {
                            var o = l[i.id()];
                            r.unshift(o.edge), r.unshift(o.node), i = o.node
                        }
                    return new e.Collection(a, r)
                }
            }
        }
    }), e.elesfn.bfs = e.elesfn.breadthFirstSearch, e.elesfn.dfs = e.elesfn.depthFirstSearch, e.elesfn.stdBfs = e.elesfn.stdBreadthFirstSearch, e.elesfn.stdDfs = e.elesfn.stdDepthFirstSearch
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        aStar: function(t) {
            t = t || {};
            var n = function() {
                    a && console.log.apply(console, arguments)
                },
                r = function(e, t, n, i) {
                    if (e == t) return i.push(o.getElementById(t)), i;
                    if (t in n) {
                        var a = n[t],
                            s = v[t];
                        return i.push(o.getElementById(t)), i.push(o.getElementById(s)), r(e, a, n, i)
                    }
                    return void 0
                },
                i = function(e, t) {
                    if (0 === e.length) return void 0;
                    for (var n = 0, r = t[e[0]], i = 1; i < e.length; i++) {
                        var a = t[e[i]];
                        r > a && (r = a, n = i)
                    }
                    return n
                };
            if (null != t.debug) var a = t.debug;
            else var a = !1;
            n("Starting aStar...");
            var o = this._private.cy;
            if (null == t || null == t.root) return void 0;
            var s = e.is.string(t.root) ? this.filter(t.root)[0] : t.root[0];
            if (n("Source node: %s", s.id()), null == t.goal) return void 0;
            var l = e.is.string(t.goal) ? this.filter(t.goal)[0] : t.goal[0];
            if (n("Target node: %s", l.id()), null != t.heuristic && e.is.fn(t.heuristic)) var u = t.heuristic;
            else var u = function() {
                return 0
            };
            if (null != t.weight && e.is.fn(t.weight)) var c = t.weight;
            else var c = function() {
                return 1
            };
            if (null != t.directed) var d = t.directed;
            else var d = !1;
            var p = [],
                h = [s.id()],
                f = {},
                v = {},
                g = {},
                y = {};
            g[s.id()] = 0, y[s.id()] = u(s);
            for (var m = this.edges().not(":loop"), x = this.nodes(), b = 0; h.length > 0;) {
                var w = i(h, y),
                    _ = this.filter("#" + h[w])[0];
                if (b++, n("\nStep: %s", b), n("Processing node: %s, fScore = %s", _.id(), y[_.id()]), _.id() == l.id()) {
                    n("Found goal node!");
                    var E = r(s.id(), l.id(), f, []);
                    return E.reverse(), n("Path: %s", E), {
                        found: !0,
                        distance: g[_.id()],
                        path: new e.Collection(o, E),
                        steps: b
                    }
                }
                p.push(_.id()), h.splice(w, 1), n("Added node to closedSet, removed from openSet."), n("Processing neighbors...");
                for (var S = _.connectedEdges(d ? '[source = "' + _.id() + '"]' : void 0).intersect(m), C = 0; C < S.length; C++) {
                    var T = S[C],
                        k = T.connectedNodes('[id != "' + _.id() + '"]').intersect(x);
                    if (n("   processing neighbor: %s", k.id()), -1 == p.indexOf(k.id())) {
                        var N = g[_.id()] + c.apply(T, [T]);
                        n("   tentative gScore: %d", N), -1 != h.indexOf(k.id()) ? N < g[k.id()] && (g[k.id()] = N, y[k.id()] = N + u(k), f[k.id()] = _.id(), n("   better score, replacing gScore. "), n("   fScore(%s) = %s", k.id(), N)) : (g[k.id()] = N, y[k.id()] = N + u(k), h.push(k.id()), f[k.id()] = _.id(), v[k.id()] = T.id(), n("   not in openSet, adding it. "), n("   fScore(%s) = %s", k.id(), N))
                    } else n("   already in closedSet, ignoring it.")
                }
            }
            return n("Reached end of computation without finding our goal"), {
                found: !1,
                distance: void 0,
                path: void 0,
                steps: b
            }
        },
        floydWarshall: function(t) {
            t = t || {};
            var n = function() {
                r && console.log.apply(console, arguments)
            };
            if (null != t.debug) var r = t.debug;
            else var r = !1;
            n("Starting floydWarshall...");
            var i = this._private.cy;
            if (null != t.weight && e.is.fn(t.weight)) var a = t.weight;
            else var a = function() {
                return 1
            };
            if (null != t.directed) var o = t.directed;
            else var o = !1;
            for (var s = this.edges().not(":loop"), l = this.nodes(), u = l.length, c = {}, d = 0; u > d; d++) c[l[d].id()] = d;
            for (var p = [], d = 0; u > d; d++) {
                for (var h = new Array(u), f = 0; u > f; f++) h[f] = d == f ? 0 : 1 / 0;
                p.push(h)
            }
            var v = [],
                g = [],
                y = function(e) {
                    for (var t = 0; u > t; t++) {
                        for (var n = new Array(u), r = 0; u > r; r++) n[r] = void 0;
                        e.push(n)
                    }
                };
            y(v), y(g);
            for (var d = 0; d < s.length; d++) {
                var m = c[s[d].source().id()],
                    x = c[s[d].target().id()],
                    b = a.apply(s[d], [s[d]]);
                p[m][x] > b && (p[m][x] = b, v[m][x] = x, g[m][x] = s[d])
            }
            if (!o)
                for (var d = 0; d < s.length; d++) {
                    var m = c[s[d].target().id()],
                        x = c[s[d].source().id()],
                        b = a.apply(s[d], [s[d]]);
                    p[m][x] > b && (p[m][x] = b, v[m][x] = x, g[m][x] = s[d])
                }
            for (var w = 0; u > w; w++)
                for (var d = 0; u > d; d++)
                    for (var f = 0; u > f; f++) p[d][w] + p[w][f] < p[d][f] && (p[d][f] = p[d][w] + p[w][f], v[d][f] = v[d][w]);
            for (var _ = [], d = 0; u > d; d++) _.push(l[d].id());
            var E = {
                distance: function(t, n) {
                    if (e.is.string(t)) var r = i.filter(t)[0].id();
                    else var r = t.id();
                    if (e.is.string(n)) var a = i.filter(n)[0].id();
                    else var a = n.id();
                    return p[c[r]][c[a]]
                },
                path: function(t, n) {
                    var r = function(e, t, n, r, a) {
                        if (e === t) return i.getElementById(r[e]);
                        if (void 0 === n[e][t]) return void 0;
                        for (var o = [i.getElementById(r[e])], s = e; e !== t;) {
                            s = e, e = n[e][t];
                            var l = a[s][e];
                            o.push(l), o.push(i.getElementById(r[e]))
                        }
                        return o
                    };
                    if (e.is.string(t)) var a = i.filter(t)[0].id();
                    else var a = t.id();
                    if (e.is.string(n)) var o = i.filter(n)[0].id();
                    else var o = n.id();
                    var s = r(c[a], c[o], v, _, g);
                    return new e.Collection(i, s)
                }
            };
            return E
        },
        bellmanFord: function(t) {
            t = t || {};
            var n = function() {
                r && console.log.apply(console, arguments)
            };
            if (null != t.debug) var r = t.debug;
            else var r = !1;
            if (n("Starting bellmanFord..."), null != t.weight && e.is.fn(t.weight)) var i = t.weight;
            else var i = function() {
                return 1
            };
            if (null != t.directed) var a = t.directed;
            else var a = !1;
            if (null == t.root) return void e.util.error("options.root required");
            if (e.is.string(t.root)) var o = this.filter(t.root)[0];
            else var o = t.root[0];
            n("Source node: %s", o.id());
            for (var s = this._private.cy, l = this.edges().not(":loop"), u = this.nodes(), c = u.length, d = {}, p = 0; c > p; p++) d[u[p].id()] = p;
            for (var h = [], f = [], v = [], p = 0; c > p; p++) h[p] = u[p].id() === o.id() ? 0 : 1 / 0, f[p] = void 0;
            for (var g = !1, p = 1; c > p; p++) {
                g = !1;
                for (var y = 0; y < l.length; y++) {
                    var m = d[l[y].source().id()],
                        x = d[l[y].target().id()],
                        b = i.apply(l[y], [l[y]]),
                        w = h[m] + b;
                    if (w < h[x] && (h[x] = w, f[x] = m, v[x] = l[y], g = !0), !a) {
                        var w = h[x] + b;
                        w < h[m] && (h[m] = w, f[m] = x, v[m] = l[y], g = !0)
                    }
                }
                if (!g) break
            }
            if (g)
                for (var y = 0; y < l.length; y++) {
                    var m = d[l[y].source().id()],
                        x = d[l[y].target().id()],
                        b = i.apply(l[y], [l[y]]);
                    if (h[m] + b < h[x]) return e.util.error("Error: graph contains a negative weigth cycle!"), {
                        pathTo: void 0,
                        distanceTo: void 0,
                        hasNegativeWeightCycle: !0
                    }
                }
            for (var _ = [], p = 0; c > p; p++) _.push(u[p].id());
            var E = {
                distanceTo: function(t) {
                    if (e.is.string(t)) var n = s.filter(t)[0].id();
                    else var n = t.id();
                    return h[d[n]]
                },
                pathTo: function(t) {
                    var n = function(e, t, n, r, i, a) {
                        for (;;) {
                            if (i.push(s.getElementById(r[n])), i.push(a[n]), t === n) return i;
                            var o = e[n];
                            if ("undefined" == typeof o) return void 0;
                            n = o
                        }
                    };
                    if (e.is.string(t)) var r = s.filter(t)[0].id();
                    else var r = t.id();
                    var i = [],
                        a = n(f, d[o.id()], d[r], _, i, v);
                    return null != a && a.reverse(), new e.Collection(s, a)
                },
                hasNegativeWeightCycle: !1
            };
            return E
        },
        kargerStein: function(t) {
            t = t || {};
            var n = function() {
                    a && console.log.apply(console, arguments)
                },
                r = function(e, t, n) {
                    for (var r = n[e], i = r[1], a = r[2], o = t[i], s = t[a], l = n.filter(function(e) {
                            return t[e[1]] === o && t[e[2]] === s ? !1 : t[e[1]] === s && t[e[2]] === o ? !1 : !0
                        }), u = 0; u < l.length; u++) {
                        var c = l[u];
                        c[1] === s ? (l[u] = c.slice(0), l[u][1] = o) : c[2] === s && (l[u] = c.slice(0), l[u][2] = o)
                    }
                    for (var u = 0; u < t.length; u++) t[u] === s && (t[u] = o);
                    return l
                },
                i = function(e, t, n, a) {
                    if (a >= n) return t;
                    var o = Math.floor(Math.random() * t.length),
                        s = r(o, e, t);
                    return i(e, s, n - 1, a)
                };
            if (null != t && null != t.debug) var a = t.debug;
            else var a = !1;
            n("Starting kargerStein...");
            var o = this._private.cy,
                s = this.edges().not(":loop"),
                l = this.nodes(),
                u = l.length,
                c = s.length,
                d = Math.ceil(Math.pow(Math.log(u) / Math.LN2, 2)),
                p = Math.floor(u / Math.sqrt(2));
            if (2 > u) return void e.util.error("At least 2 nodes are required for KargerSteing algorithm!");
            for (var h = {}, f = 0; u > f; f++) h[l[f].id()] = f;
            for (var v = [], f = 0; c > f; f++) {
                var g = s[f];
                v.push([f, h[g.source().id()], h[g.target().id()]])
            }
            for (var y, m = 1 / 0, x = [], f = 0; u > f; f++) x.push(f);
            for (var b = 0; d >= b; b++) {
                var w = x.slice(0),
                    _ = i(w, v, u, p),
                    E = w.slice(0),
                    S = i(w, _, p, 2),
                    C = i(E, _, p, 2);
                S.length <= C.length && S.length < m ? (m = S.length, y = [S, w]) : C.length <= S.length && C.length < m && (m = C.length, y = [C, E])
            }
            for (var T = y[0].map(function(e) {
                    return s[e[0]]
                }), k = [], N = [], D = y[1][0], f = 0; f < y[1].length; f++) {
                var P = y[1][f];
                P === D ? k.push(l[f]) : N.push(l[f])
            }
            var M = {
                cut: new e.Collection(o, T),
                partition1: new e.Collection(o, k),
                partition2: new e.Collection(o, N)
            };
            return M
        },
        pageRank: function(t) {
            t = t || {};
            var n = function(e) {
                    for (var t = e.length, n = 0, r = 0; t > r; r++) n += e[r];
                    for (var r = 0; t > r; r++) e[r] = e[r] / n
                },
                r = function() {
                    i && console.log.apply(console, arguments)
                };
            if (null != t && null != t.debug) var i = t.debug;
            else var i = !1;
            if (r("Starting pageRank..."), null != t && null != t.dampingfactor) var a = t.dampingFactor;
            else var a = .8;
            if (null != t && null != t.precision) var o = t.precision;
            else var o = 1e-6;
            if (null != t && null != t.iterations) var s = t.iterations;
            else var s = 200;
            if (null != t && null != t.weight && e.is.fn(t.weight)) var l = t.weight;
            else var l = function() {
                return 1
            };
            for (var u = this._private.cy, c = this.edges().not(":loop"), d = this.nodes(), p = d.length, h = c.length, f = {}, v = 0; p > v; v++) f[d[v].id()] = v;
            for (var g = [], y = [], m = (1 - a) / p, v = 0; p > v; v++) {
                for (var x = [], b = 0; p > b; b++) x.push(0);
                g.push(x), y.push(0)
            }
            for (var v = 0; h > v; v++) {
                var w = c[v],
                    _ = f[w.source().id()],
                    E = f[w.target().id()],
                    S = l.apply(w, [w]);
                g[E][_] += S, y[_] += S
            }
            for (var C = 1 / p + m, b = 0; p > b; b++)
                if (0 === y[b])
                    for (var v = 0; p > v; v++) g[v][b] = C;
                else
                    for (var v = 0; p > v; v++) g[v][b] = g[v][b] / y[b] + m;
            for (var T, k = [], N = [], v = 0; p > v; v++) k.push(1), N.push(0);
            for (var D = 0; s > D; D++) {
                for (var P = N.slice(0), v = 0; p > v; v++)
                    for (var b = 0; p > b; b++) P[v] += g[v][b] * k[b];
                n(P), T = k, k = P;
                for (var M = 0, v = 0; p > v; v++) M += Math.pow(T[v] - k[v], 2);
                if (o > M) {
                    r("Stoped at iteration %s", D);
                    break
                }
            }
            r("Result:\n" + k);
            var B = {
                rank: function(t) {
                    if (e.is.string(t)) var n = u.filter(t)[0].id();
                    else var n = t.id();
                    return k[f[n]]
                }
            };
            return B
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        animated: e.define.animated(),
        clearQueue: e.define.clearQueue(),
        delay: e.define.delay(),
        animate: e.define.animate(),
        stop: e.define.stop()
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        classes: function(t) {
            var n, r = this,
                i = [];
            if (e.is.fn(t)) n = t;
            else if (!e.is.plainObject(t)) return this;
            for (var a = 0; a < r.length; a++) {
                var o = r[a],
                    s = !1;
                if (t = n ? n.apply(o, [a, o]) : t, t.add)
                    for (var l = 0; l < t.add.length; l++) {
                        var u = t.add[l],
                            c = o._private.classes[u];
                        o._private.classes[u] = !0, c || s || (i.push(o), s = !0)
                    }
                if (t.remove)
                    for (var l = 0; l < t.remove.length; l++) {
                        var u = t.remove[l],
                            c = o._private.classes[u];
                        o._private.classes[u] = !1, c && !s && (i.push(o), s = !0)
                    }
                if (t.toggle)
                    for (var l = 0; l < t.toggle.length; l++) {
                        var u = t.toggle[l],
                            c = o._private.classes[u];
                        o._private.classes[u] = !c, s || (i.push(o), s = !0)
                    }
            }
            return i.length > 0 && new e.Collection(this.cy(), i).updateStyle().trigger("class"), this
        },
        addClass: function(t) {
            t = t.split(/\s+/);
            for (var n = this, r = [], i = 0; i < t.length; i++) {
                var a = t[i];
                if (!e.is.emptyString(a))
                    for (var o = 0; o < n.length; o++) {
                        var s = n[o],
                            l = s._private.classes[a];
                        s._private.classes[a] = !0, l || r.push(s)
                    }
            }
            return r.length > 0 && new e.Collection(this._private.cy, r).updateStyle().trigger("class"), n
        },
        hasClass: function(e) {
            var t = this[0];
            return null != t && t._private.classes[e] ? !0 : !1
        },
        toggleClass: function(t, n) {
            for (var r = t.split(/\s+/), i = this, a = [], o = 0, s = i.length; s > o; o++)
                for (var l = i[o], u = 0; u < r.length; u++) {
                    var c = r[u];
                    if (!e.is.emptyString(c)) {
                        var d = l._private.classes[c],
                            p = n || void 0 === n && !d;
                        p ? (l._private.classes[c] = !0, d || a.push(l)) : (l._private.classes[c] = !1, d && a.push(l))
                    }
                }
            return a.length > 0 && new e.Collection(this._private.cy, a).updateStyle().trigger("class"), i
        },
        removeClass: function(t) {
            t = t.split(/\s+/);
            for (var n = this, r = [], i = 0; i < n.length; i++)
                for (var a = n[i], o = 0; o < t.length; o++) {
                    var s = t[o];
                    if (s && "" !== s) {
                        var l = a._private.classes[s];
                        a._private.classes[s] = void 0, l && r.push(a)
                    }
                }
            return r.length > 0 && new e.Collection(n._private.cy, r).updateStyle(), n.trigger("class"), n
        },
        flashClass: function(e, t) {
            var n = this;
            if (null == t) t = 250;
            else if (0 === t) return n;
            return n.addClass(e), setTimeout(function() {
                n.removeClass(e)
            }, t), n
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        allAre: function(e) {
            return this.filter(e).length === this.length
        },
        is: function(e) {
            return this.filter(e).length > 0
        },
        some: function(e, t) {
            for (var n = 0; n < this.length; n++) {
                var r = e.apply(t, [this[n], n, this]);
                if (r) return !0
            }
            return !1
        },
        every: function(e, t) {
            for (var n = 0; n < this.length; n++) {
                var r = e.apply(t, [this[n], n, this]);
                if (!r) return !1
            }
            return !0
        },
        same: function(e) {
            return e = this.cy().collection(e), this.length !== e.length ? !1 : this.intersect(e).length === this.length
        },
        anySame: function(e) {
            return e = this.cy().collection(e), this.intersect(e).length > 0
        },
        allAreNeighbors: function(e) {
            return e = this.cy().collection(e), this.neighborhood().intersect(e).length === e.length
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        parent: function(t) {
            for (var n = [], r = this._private.cy, i = 0; i < this.length; i++) {
                var a = this[i],
                    o = r.getElementById(a._private.data.parent);
                o.size() > 0 && n.push(o)
            }
            return new e.Collection(r, n, {
                unique: !0
            }).filter(t)
        },
        parents: function(t) {
            for (var n = [], r = this.parent(); r.nonempty();) {
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    n.push(a)
                }
                r = r.parent()
            }
            return new e.Collection(this.cy(), n, {
                unique: !0
            }).filter(t)
        },
        commonAncestors: function(e) {
            for (var t, n = 0; n < this.length; n++) {
                var r = this[n],
                    i = r.parents();
                t = t || i, t = t.intersect(i)
            }
            return t.filter(e)
        },
        orphans: function(e) {
            return this.stdFilter(function(e) {
                return e.isNode() && e.parent().empty()
            }).filter(e)
        },
        nonorphans: function(e) {
            return this.stdFilter(function(e) {
                return e.isNode() && e.parent().nonempty()
            }).filter(e)
        },
        children: function(t) {
            for (var n = [], r = 0; r < this.length; r++) {
                var i = this[r];
                n = n.concat(i._private.children)
            }
            return new e.Collection(this.cy(), n, {
                unique: !0
            }).filter(t)
        },
        siblings: function(e) {
            return this.parent().children().not(this).filter(e)
        },
        isParent: function() {
            var e = this[0];
            return e ? 0 !== e._private.children.length : void 0
        },
        isChild: function() {
            var e = this[0];
            return e ? void 0 !== e._private.data.parent && 0 !== e.parent().length : void 0
        },
        descendants: function(t) {
            function n(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    r.push(i), i.children().nonempty() && n(i.children())
                }
            }
            var r = [];
            return n(this.children()), new e.Collection(this.cy(), r, {
                unique: !0
            }).filter(t)
        }
    }), e.elesfn.ancestors = e.elesfn.parents
}(cytoscape),
function(e) {
    "use strict";
    var t = 1,
        n = 0;
    e.fn.eles({
        data: e.define.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "data",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0,
            immutableKeys: {
                id: !0,
                source: !0,
                target: !0,
                parent: !0
            },
            updateStyle: !0
        }),
        removeData: e.define.removeData({
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: !0,
            immutableKeys: {
                id: !0,
                source: !0,
                target: !0,
                parent: !0
            },
            updateStyle: !0
        }),
        scratch: e.define.data({
            field: "scratch",
            allowBinding: !1,
            allowSetting: !0,
            settingTriggersEvent: !1,
            allowGetting: !0
        }),
        removeScratch: e.define.removeData({
            field: "scratch",
            triggerEvent: !1
        }),
        rscratch: e.define.data({
            field: "rscratch",
            allowBinding: !1,
            allowSetting: !0,
            settingTriggersEvent: !1,
            allowGetting: !0
        }),
        removeRscratch: e.define.removeData({
            field: "rscratch",
            triggerEvent: !1
        }),
        id: function() {
            var e = this[0];
            return e ? e._private.data.id : void 0
        },
        position: e.define.data({
            field: "position",
            bindingEvent: "position",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "position",
            settingTriggersEvent: !0,
            triggerFnName: "rtrigger",
            allowGetting: !0,
            validKeys: ["x", "y"],
            onSet: function(e) {
                var t = e.updateCompoundBounds();
                t.rtrigger("position")
            },
            canSet: function(e) {
                return !e.locked()
            }
        }),
        silentPosition: e.define.data({
            field: "position",
            bindingEvent: "position",
            allowBinding: !1,
            allowSetting: !0,
            settingEvent: "position",
            settingTriggersEvent: !1,
            triggerFnName: "trigger",
            allowGetting: !0,
            validKeys: ["x", "y"],
            onSet: function(e) {
                e.updateCompoundBounds()
            },
            canSet: function(e) {
                return !e.locked()
            }
        }),
        positions: function(t, n) {
            if (e.is.plainObject(t)) this.position(t);
            else if (e.is.fn(t)) {
                for (var r = t, i = 0; i < this.length; i++) {
                    var a = this[i],
                        t = r.apply(a, [i, a]);
                    if (t && !a.locked()) {
                        var o = a._private.position;
                        o.x = t.x, o.y = t.y
                    }
                }
                var s = this.updateCompoundBounds(),
                    l = s.length > 0 ? this.add(s) : this;
                n ? l.trigger("position") : l.rtrigger("position")
            }
            return this
        },
        silentPositions: function(e) {
            return this.positions(e, !0)
        },
        updateCompoundBounds: function() {
            function t(e) {
                var t = e.children(),
                    n = e._private.style,
                    i = t.boundingBox({
                        includeLabels: !1,
                        includeEdges: !1
                    }),
                    a = {
                        top: n["padding-top"].pxValue,
                        bottom: n["padding-bottom"].pxValue,
                        left: n["padding-left"].pxValue,
                        right: n["padding-right"].pxValue
                    },
                    o = e._private.position,
                    s = !1;
                "auto" === n.width.value && (e._private.autoWidth = i.w + a.left + a.right, o.x = (i.x1 + i.x2 - a.left + a.right) / 2, s = !0), "auto" === n.height.value && (e._private.autoHeight = i.h + a.top + a.bottom, o.y = (i.y1 + i.y2 - a.top + a.bottom) / 2, s = !0), s && r.push(e)
            }
            var n = this.cy();
            if (!n.styleEnabled() || !n.hasCompoundNodes()) return n.collection();
            for (var r = [], i = this.parent(); i.nonempty();) {
                for (var a = 0; a < i.length; a++) {
                    var o = i[a];
                    t(o)
                }
                i = i.parent()
            }
            return new e.Collection(n, r)
        },
        renderedPosition: function(t, n) {
            var r = this[0],
                i = this.cy(),
                a = i.zoom(),
                o = i.pan(),
                s = e.is.plainObject(t) ? t : void 0,
                l = void 0 !== s || void 0 !== n && e.is.string(t);
            if (r && r.isNode()) {
                if (!l) {
                    var u = r._private.position;
                    return s = {
                        x: u.x * a + o.x,
                        y: u.y * a + o.y
                    }, void 0 === t ? s : s[t]
                }
                for (var c = 0; c < this.length; c++) {
                    var r = this[c];
                    void 0 !== n ? r._private.position[t] = (n - o[t]) / a : void 0 !== s && (r._private.position = {
                        x: (s.x - o.x) / a,
                        y: (s.y - o.y) / a
                    })
                }
                this.rtrigger("position")
            } else if (!l) return void 0;
            return this
        },
        parentPosition: function(t, n) {
            var r = this[0],
                i = this.cy(),
                a = e.is.plainObject(t) ? t : void 0,
                o = void 0 !== a || void 0 !== n && e.is.string(t),
                s = i.hasCompoundNodes();
            if (r && r.isNode()) {
                if (!o) {
                    var l = r._private.position,
                        u = s ? r.parent() : null,
                        c = u && u.length > 0,
                        d = c;
                    c && (u = u[0]);
                    var p = d ? u._private.position : {
                        x: 0,
                        y: 0
                    };
                    return a = {
                        x: l.x - p.x,
                        y: l.y - p.y
                    }, void 0 === t ? a : a[t]
                }
                for (var h = 0; h < this.length; h++) {
                    var r = this[h],
                        u = s ? r.parent() : null,
                        c = u && u.length > 0,
                        d = c;
                    c && (u = u[0]);
                    var p = d ? u._private.position : {
                        x: 0,
                        y: 0
                    };
                    void 0 !== n ? r._private.position[t] = n + p[t] : void 0 !== a && (r._private.position = {
                        x: a.x + p.x,
                        y: a.y + p.y
                    })
                }
                this.rtrigger("position")
            } else if (!o) return void 0;
            return this
        },
        width: function() {
            var e = this[0],
                t = e._private.cy,
                n = t._private.styleEnabled;
            if (e) {
                if (n) {
                    var r = e._private.style.width;
                    return "auto" === r.strValue ? e._private.autoWidth : r.pxValue
                }
                return 1
            }
        },
        outerWidth: function() {
            var e = this[0],
                r = e._private.cy,
                i = r._private.styleEnabled;
            if (e) {
                if (i) {
                    var a = e._private.style,
                        o = "auto" === a.width.strValue ? e._private.autoWidth : a.width.pxValue,
                        s = a["border-width"] ? a["border-width"].pxValue * t + n : 0;
                    return o + s
                }
                return 1
            }
        },
        renderedWidth: function() {
            var e = this[0];
            if (e) {
                var t = e.width();
                return t * this.cy().zoom()
            }
        },
        renderedOuterWidth: function() {
            var e = this[0];
            if (e) {
                var t = e.outerWidth();
                return t * this.cy().zoom()
            }
        },
        height: function() {
            var e = this[0],
                t = e._private.cy,
                n = t._private.styleEnabled;
            if (e && "nodes" === e._private.group) {
                if (n) {
                    var r = e._private.style.height;
                    return "auto" === r.strValue ? e._private.autoHeight : r.pxValue
                }
                return 1
            }
        },
        outerHeight: function() {
            var e = this[0],
                r = e._private.cy,
                i = r._private.styleEnabled;
            if (e && "nodes" === e._private.group) {
                if (!i) return 1;
                var a = e._private.style,
                    o = "auto" === a.height.strValue ? e._private.autoHeight : a.height.pxValue,
                    s = a["border-width"] ? a["border-width"].pxValue * t + n : 0;
                return o + s
            }
        },
        renderedHeight: function() {
            var e = this[0];
            if (e && "nodes" === e._private.group) {
                var t = e.height();
                return t * this.cy().zoom()
            }
        },
        renderedOuterHeight: function() {
            var e = this[0];
            if (e && "nodes" === e._private.group) {
                var t = e.outerHeight();
                return t * this.cy().zoom()
            }
        },
        renderedBoundingBox: function(e) {
            var t = this.boundingBox(e),
                n = this.cy(),
                r = n.zoom(),
                i = n.pan(),
                a = t.x1 * r + i.x,
                o = t.x2 * r + i.x,
                s = t.y1 * r + i.y,
                l = t.y2 * r + i.y;
            return {
                x1: a,
                x2: o,
                y1: s,
                y2: l,
                w: o - a,
                h: l - s
            }
        },
        boundingBox: function(e) {
            var t = this,
                n = t._private.cy,
                r = n._private,
                i = r.styleEnabled;
            e = e || {};
            var a = void 0 === e.includeNodes ? !0 : e.includeNodes,
                o = void 0 === e.includeEdges ? !0 : e.includeEdges,
                s = void 0 === e.includeLabels ? !0 : e.includeLabels;
            i && r.renderer.recalculateRenderedStyle(this);
            for (var l = 1 / 0, u = -1 / 0, c = 1 / 0, d = -1 / 0, p = 0; p < t.length; p++) {
                var h, f, v, g, y, m, x = t[p],
                    b = x._private,
                    w = i ? b.style.display.value : "element",
                    _ = "nodes" === b.group,
                    E = !1;
                if ("none" !== w) {
                    if (_ && a) {
                        E = !0;
                        var S = b.position;
                        y = S.x, m = S.y;
                        var C = x.outerWidth(),
                            T = C / 2,
                            k = x.outerHeight(),
                            N = k / 2;
                        h = y - T, f = y + T, v = m - N, g = m + N, l = l > h ? h : l, u = f > u ? f : u, c = c > v ? v : c, d = g > d ? g : d
                    } else if (x.isEdge() && o) {
                        E = !0;
                        var D = x._private.source._private.position,
                            P = x._private.target._private.position,
                            M = x._private.rstyle || {};
                        if (h = D.x, f = P.x, v = D.y, g = P.y, h > f) {
                            var B = h;
                            h = f, f = B
                        }
                        if (v > g) {
                            var B = v;
                            v = g, g = B
                        }
                        if (l = l > h ? h : l, u = f > u ? f : u, c = c > v ? v : c, d = g > d ? g : d, i)
                            for (var L = M.bezierPts || [], C = x._private.style.width.pxValue, A = C / 2, z = 0; z < L.length; z++) {
                                var I = L[z];
                                h = I.x - A, f = I.x + A, v = I.y - A, g = I.y + A, l = l > h ? h : l, u = f > u ? f : u, c = c > v ? v : c, d = g > d ? g : d
                            }
                    }
                    if (i) {
                        var O = x._private.style,
                            M = x._private.rstyle,
                            R = O.content.strValue,
                            X = O["font-size"],
                            j = O["text-halign"],
                            q = O["text-valign"],
                            V = M.labelWidth,
                            F = M.labelHeight,
                            Y = M.labelX,
                            H = M.labelY;
                        if (E && s && R && X && null != F && null != V && null != Y && null != H && j && q) {
                            var W, $, Z, U, G = F,
                                K = V;
                            if (x.isEdge()) W = Y - K / 2, $ = Y + K / 2, Z = H - G / 2, U = H + G / 2;
                            else {
                                switch (j.value) {
                                    case "left":
                                        W = Y - K, $ = Y;
                                        break;
                                    case "center":
                                        W = Y - K / 2, $ = Y + K / 2;
                                        break;
                                    case "right":
                                        W = Y, $ = Y + K
                                }
                                switch (q.value) {
                                    case "top":
                                        Z = H - G, U = H;
                                        break;
                                    case "center":
                                        Z = H - G / 2, U = H + G / 2;
                                        break;
                                    case "bottom":
                                        Z = H, U = H + G
                                }
                            }
                            l = l > W ? W : l, u = $ > u ? $ : u, c = c > Z ? Z : c, d = U > d ? U : d
                        }
                    }
                }
            }
            return {
                x1: l,
                x2: u,
                y1: c,
                y2: d,
                w: u - l,
                h: d - c
            }
        }
    }), e.elesfn.modelPosition = e.elesfn.position, e.elesfn.modelPositions = e.elesfn.positions
}(cytoscape),
function(e) {
    "use strict";

    function t(e) {
        return function(t) {
            var n = this;
            if (void 0 === t && (t = !0), 0 !== n.length && n.isNode() && !n.removed()) {
                for (var r = 0, i = n[0], a = i._private.edges, o = 0; o < a.length; o++) {
                    var s = a[o];
                    (t || !s.isLoop()) && (r += e(i, s))
                }
                return r
            }
        }
    }

    function n(e, t) {
        return function(n) {
            for (var r, i = this.nodes(), a = 0; a < i.length; a++) {
                var o = i[a],
                    s = o[e](n);
                void 0 === s || void 0 !== r && !t(s, r) || (r = s)
            }
            return r
        }
    }
    e.fn.eles({
        degree: t(function(e, t) {
            return t.source().same(t.target()) ? 2 : 1
        }),
        indegree: t(function(e, t) {
            return t.target().same(e) ? 1 : 0
        }),
        outdegree: t(function(e, t) {
            return t.source().same(e) ? 1 : 0
        })
    }), e.fn.eles({
        minDegree: n("degree", function(e, t) {
            return t > e
        }),
        maxDegree: n("degree", function(e, t) {
            return e > t
        }),
        minIndegree: n("indegree", function(e, t) {
            return t > e
        }),
        maxIndegree: n("indegree", function(e, t) {
            return e > t
        }),
        minOutdegree: n("outdegree", function(e, t) {
            return t > e
        }),
        maxOutdegree: n("outdegree", function(e, t) {
            return e > t
        })
    }), e.fn.eles({
        totalDegree: function(e) {
            for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++) t += n[r].degree(e);
            return t
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        on: e.define.on(),
        one: e.define.on({
            unbindSelfOnTrigger: !0
        }),
        once: e.define.on({
            unbindAllBindersOnTrigger: !0
        }),
        off: e.define.off(),
        trigger: e.define.trigger(),
        rtrigger: function(e, t) {
            return 0 !== this.length ? (this.cy().notify({
                type: e,
                collection: this
            }), this.trigger(e, t), this) : void 0
        }
    }), e.elesfn.bind = e.elesfn.on, e.elesfn.unbind = e.elesfn.off
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        nodes: function(e) {
            return this.filter(function(e, t) {
                return t.isNode()
            }).filter(e)
        },
        edges: function(e) {
            return this.filter(function(e, t) {
                return t.isEdge()
            }).filter(e)
        },
        filter: function(t) {
            var n = this._private.cy;
            if (e.is.fn(t)) {
                for (var r = [], i = 0; i < this.length; i++) {
                    var a = this[i];
                    t.apply(a, [i, a]) && r.push(a)
                }
                return new e.Collection(n, r)
            }
            return e.is.string(t) || e.is.elementOrCollection(t) ? new e.Selector(t).filter(this) : void 0 === t ? this : new e.Collection(n)
        },
        not: function(t) {
            var n = this._private.cy;
            if (t) {
                e.is.string(t) && (t = this.filter(t));
                for (var r = [], i = 0; i < this.length; i++) {
                    var a = this[i],
                        o = t._private.ids[a.id()];
                    o || r.push(a)
                }
                return new e.Collection(n, r)
            }
            return this
        },
        intersect: function(t) {
            var n = this._private.cy;
            if (e.is.string(t)) {
                var r = t;
                return this.filter(r)
            }
            for (var i = [], a = this, o = t, s = this.length < t.length, l = s ? o._private.ids : a._private.ids, u = s ? a : o, c = 0; c < u.length; c++) {
                var d = u[c]._private.data.id,
                    p = l[d];
                p && i.push(p)
            }
            return new e.Collection(n, i)
        },
        add: function(t) {
            var n = this._private.cy;
            if (!t) return this;
            if (e.is.string(t)) {
                var r = t;
                t = n.elements(r)
            }
            for (var i = [], a = 0; a < this.length; a++) i.push(this[a]);
            for (var a = 0; a < t.length; a++) {
                var o = !this._private.ids[t[a].id()];
                o && i.push(t[a])
            }
            return new e.Collection(n, i)
        },
        merge: function(t) {
            var n = this._private,
                r = n.cy;
            if (!t) return this;
            if (e.is.string(t)) {
                var i = t;
                t = r.elements(i)
            }
            for (var a = 0; a < t.length; a++) {
                var o = t[a],
                    s = o.id(),
                    l = !n.ids[s];
                if (l) {
                    var u = this.length++;
                    this[u] = o, n.ids[s] = o, n.indexes[s] = u
                }
            }
            return this
        },
        unmergeOne: function(e) {
            e = e[0];
            var t = this._private,
                n = e.id(),
                r = t.indexes[n];
            if (null == r) return this;
            this[r] = void 0, t.ids[n] = void 0, t.indexes[n] = void 0;
            var i = r === this.length - 1;
            if (this.length > 1 && !i) {
                var a = this.length - 1,
                    o = this[a];
                this[a] = void 0, this[r] = o, t.indexes[o.id()] = r
            }
            return this.length--, this
        },
        unmerge: function(t) {
            var n = this._private.cy;
            if (!t) return this;
            if (e.is.string(t)) {
                var r = t;
                t = n.elements(r)
            }
            for (var i = 0; i < t.length; i++) this.unmergeOne(t[i]);
            return this
        },
        map: function(e, t) {
            for (var n = [], r = this, i = 0; i < r.length; i++) {
                var a = r[i],
                    o = e.apply(t, [a, i, r]);
                n.push(o)
            }
            return n
        },
        stdFilter: function(t, n) {
            for (var r = [], i = this, a = this._private.cy, o = 0; o < i.length; o++) {
                var s = i[o],
                    l = t.apply(n, [s, o, i]);
                l && r.push(s)
            }
            return new e.Collection(a, r)
        },
        max: function(e, t) {
            for (var n, r = -1 / 0, i = this, a = 0; a < i.length; a++) {
                var o = i[a],
                    s = e.apply(t, [o, a, i]);
                s > r && (r = s, n = o)
            }
            return {
                value: r,
                ele: n
            }
        },
        min: function(e, t) {
            for (var n, r = 1 / 0, i = this, a = 0; a < i.length; a++) {
                var o = i[a],
                    s = e.apply(t, [o, a, i]);
                r > s && (r = s, n = o)
            }
            return {
                value: r,
                ele: n
            }
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        isNode: function() {
            return "nodes" === this.group()
        },
        isEdge: function() {
            return "edges" === this.group()
        },
        isLoop: function() {
            return this.isEdge() && this.source().id() === this.target().id()
        },
        isSimple: function() {
            return this.isEdge() && this.source().id() !== this.target().id()
        },
        group: function() {
            var e = this[0];
            return e ? e._private.group : void 0
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        each: function(t) {
            if (e.is.fn(t))
                for (var n = 0; n < this.length; n++) {
                    var r = this[n],
                        i = t.apply(r, [n, r]);
                    if (i === !1) break
                }
            return this
        },
        forEach: function(t, n) {
            if (e.is.fn(t))
                for (var r = 0; r < this.length; r++) {
                    var i = this[r],
                        a = t.apply(n, [i, r, this]);
                    if (a === !1) break
                }
            return this
        },
        toArray: function() {
            for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
            return e
        },
        slice: function(t, n) {
            var r = [],
                i = this.length;
            null == n && (n = i), null == t && (t = 0), 0 > t && (t = i + t), 0 > n && (n = i + n);
            for (var a = t; a >= 0 && n > a && i > a; a++) r.push(this[a]);
            return new e.Collection(this.cy(), r)
        },
        size: function() {
            return this.length
        },
        eq: function(t) {
            return this[t] || new e.Collection(this.cy())
        },
        first: function() {
            return this[0] || new e.Collection(this.cy())
        },
        last: function() {
            return this[this.length - 1] || new e.Collection(this.cy())
        },
        empty: function() {
            return 0 === this.length
        },
        nonempty: function() {
            return !this.empty()
        },
        sort: function(t) {
            if (!e.is.fn(t)) return this;
            var n = this.cy(),
                r = this.toArray().sort(t);
            return new e.Collection(n, r)
        },
        sortByZIndex: function() {
            return this.sort(e.Collection.zIndexSort)
        },
        zDepth: function() {
            var e = this[0];
            if (!e) return void 0;
            var t = e._private,
                n = t.group;
            if ("nodes" === n) return t.data.parent ? e.parents().size() : 0;
            var r = t.source,
                i = t.target,
                a = r._private.data.parent ? r.parents().size() : 0,
                o = i._private.data.parent ? i.parents().size() : 0;
            return Math.max(a - 1, o - 1, 0) + .5
        }
    }), e.Collection.zIndexSort = function(e, t) {
        var n = e.cy(),
            r = e._private,
            i = t._private,
            a = r.style["z-index"].value - i.style["z-index"].value,
            o = 0,
            s = 0,
            l = n.hasCompoundNodes(),
            u = "nodes" === r.group,
            c = "edges" === r.group,
            d = "nodes" === i.group,
            p = "edges" === i.group;
        l && (o = e.zDepth(), s = t.zDepth());
        var h = o - s,
            f = 0 === h;
        return f ? u && p ? 1 : c && d ? -1 : 0 === a ? r.index - i.index : a : h
    }
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        layoutPositions: function(t, n, r) {
            var i = this.nodes(),
                a = this.cy();
            if (t.trigger({
                    type: "layoutstart",
                    layout: t
                }), n.animate)
                for (var o = 0; o < i.length; o++) {
                    var s = i[o],
                        l = o === i.length - 1,
                        u = r.call(s, o, s),
                        c = s.position();
                    e.is.number(c.x) && e.is.number(c.y) || s.silentPosition({
                        x: 0,
                        y: 0
                    }), t.one("layoutready", n.ready), t.trigger({
                        type: "layoutready",
                        layout: t
                    }), s.animate({
                        position: u
                    }, {
                        duration: n.animationDuration,
                        step: l ? void 0 : function() {
                            n.fit && a.fit(n.padding)
                        },
                        complete: l ? void 0 : function() {
                            null != n.zoom && a.zoom(n.zoom), n.pan && a.pan(n.pan), n.fit && a.fit(n.padding), t.one("layoutstop", n.stop), t.trigger({
                                type: "layoutstop",
                                layout: t
                            })
                        }
                    })
                } else i.positions(r), n.fit && a.fit(n.padding), null != n.zoom && a.zoom(n.zoom), n.pan && a.pan(n.pan), t.one("layoutready", n.ready), t.trigger({
                    type: "layoutready",
                    layout: t
                }), t.one("layoutstop", n.stop), t.trigger({
                    type: "layoutstop",
                    layout: t
                });
            return this
        },
        layout: function(t) {
            var n = this.cy();
            return n.layout(e.util.extend({}, t, {
                eles: this
            })), this
        },
        makeLayout: function(t) {
            var n = this.cy();
            return n.makeLayout(e.util.extend({}, t, {
                eles: this
            }))
        }
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        updateStyle: function(e) {
            var t = this._private.cy;
            if (!t.styleEnabled()) return this;
            if (t._private.batchingStyle) {
                for (var n = t._private.batchStyleEles, r = 0; r < this.length; r++) {
                    var i = this[r];
                    n.ids[i._private.id] || n.push(i)
                }
                return this
            }
            var a = t.style();
            e = e || void 0 === e ? !0 : !1, a.apply(this);
            var o = this.updateCompoundBounds(),
                s = o.length > 0 ? this.add(o) : this;
            return e ? s.rtrigger("style") : s.trigger("style"), this
        },
        updateMappers: function(e) {
            var t = this._private.cy,
                n = t.style();
            if (e = e || void 0 === e ? !0 : !1, !t.styleEnabled()) return this;
            n.updateMappers(this);
            var r = this.updateCompoundBounds(),
                i = r.length > 0 ? this.add(r) : this;
            return e ? i.rtrigger("style") : i.trigger("style"), this
        },
        renderedCss: function(e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = this[0];
            if (n) {
                var r = n.cy().style().getRenderedStyle(n);
                return void 0 === e ? r : r[e]
            }
        },
        css: function(t, n) {
            var r = this.cy();
            if (!r.styleEnabled()) return this;
            var i = !1,
                a = r.style();
            if (e.is.plainObject(t)) {
                var o = t;
                a.applyBypass(this, o, i);
                var s = this.updateCompoundBounds(),
                    l = s.length > 0 ? this.add(s) : this;
                l.rtrigger("style")
            } else if (e.is.string(t)) {
                if (void 0 === n) {
                    var u = this[0];
                    return u ? u._private.style[t].strValue : void 0
                }
                a.applyBypass(this, t, n, i);
                var s = this.updateCompoundBounds(),
                    l = s.length > 0 ? this.add(s) : this;
                l.rtrigger("style")
            } else if (void 0 === t) {
                var u = this[0];
                return u ? a.getRawStyle(u) : void 0
            }
            return this
        },
        removeCss: function(e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = !1,
                r = t.style(),
                i = this;
            if (void 0 === e)
                for (var a = 0; a < i.length; a++) {
                    var o = i[a];
                    r.removeAllBypasses(o, n)
                } else {
                    e = e.split(/\s+/);
                    for (var a = 0; a < i.length; a++) {
                        var o = i[a];
                        r.removeBypasses(o, e, n)
                    }
                }
            var s = this.updateCompoundBounds(),
                l = s.length > 0 ? this.add(s) : this;
            return l.rtrigger("style"), this
        },
        show: function() {
            return this.css("display", "element"), this
        },
        hide: function() {
            return this.css("display", "none"), this
        },
        visible: function() {
            var e = this.cy();
            if (!e.styleEnabled()) return !0;
            var t = this[0],
                n = e.hasCompoundNodes();
            if (t) {
                var r = t._private.style;
                if ("visible" !== r.visibility.value || "element" !== r.display.value) return !1;
                if ("nodes" === t._private.group) {
                    if (!n) return !0;
                    var i = t._private.data.parent ? t.parents() : null;
                    if (i)
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a],
                                s = o._private.style,
                                l = s.visibility.value,
                                u = s.display.value;
                            if ("visible" !== l || "element" !== u) return !1
                        }
                    return !0
                }
                var c = t._private.source,
                    d = t._private.target;
                return c.visible() && d.visible()
            }
        },
        hidden: function() {
            var e = this[0];
            return e ? !e.visible() : void 0
        },
        effectiveOpacity: function() {
            var e = this.cy();
            if (!e.styleEnabled()) return 1;
            var t = e.hasCompoundNodes(),
                n = this[0];
            if (n) {
                var r = n._private,
                    i = r.style.opacity.value;
                if (!t) return i;
                var a = r.data.parent ? n.parents() : null;
                if (a)
                    for (var o = 0; o < a.length; o++) {
                        var s = a[o],
                            l = s._private.style.opacity.value;
                        i = l * i
                    }
                return i
            }
        },
        transparent: function() {
            var e = this[0],
                t = e.cy().hasCompoundNodes();
            return e ? t ? 0 === e.effectiveOpacity() : 0 === e._private.style.opacity : void 0
        },
        isFullAutoParent: function() {
            var e = this.cy();
            if (!e.styleEnabled()) return !1;
            var t = this[0];
            if (t) {
                var n = "auto" === t._private.style.width.value,
                    r = "auto" === t._private.style.height.value;
                return t.isParent() && n && r
            }
        }
    }), e.elesfn.style = e.elesfn.css, e.elesfn.renderedStyle = e.elesfn.renderedCss, e.elesfn.removeStyle = e.elesfn.removeCss
}(cytoscape),
function(e) {
    "use strict";

    function t(e) {
        return function() {
            var t = arguments;
            if (2 === t.length) {
                var n = t[0],
                    r = t[1];
                this.bind(e.event, n, r)
            } else if (1 === t.length) {
                var r = t[0];
                this.bind(e.event, r)
            } else if (0 === t.length) {
                for (var i = 0; i < this.length; i++) {
                    var a = this[i],
                        o = !e.ableField || a._private[e.ableField];
                    if (e.overrideAble) {
                        var s = e.overrideAble(a);
                        if (void 0 !== s && (o = s, !s)) return this
                    }
                    o && (a._private[e.field] = e.value)
                }
                this.updateStyle(), this.trigger(e.event)
            }
            return this
        }
    }

    function n(n) {
        e.elesfn[n.field] = function() {
            var e = this[0];
            if (e) {
                if (n.overrideField) {
                    var t = n.overrideField(e);
                    if (void 0 !== t) return t
                }
                return e._private[n.field]
            }
        }, e.elesfn[n.on] = t({
            event: n.on,
            field: n.field,
            ableField: n.ableField,
            overrideAble: n.overrideAble,
            value: !0
        }), e.elesfn[n.off] = t({
            event: n.off,
            field: n.field,
            ableField: n.ableField,
            overrideAble: n.overrideAble,
            value: !1
        })
    }
    n({
        field: "locked",
        overrideField: function(e) {
            return e.cy().autolock() ? !0 : void 0
        },
        on: "lock",
        off: "unlock"
    }), n({
        field: "grabbable",
        overrideField: function(e) {
            return e.cy().autoungrabify() ? !1 : void 0
        },
        on: "grabify",
        off: "ungrabify"
    }), n({
        field: "selected",
        ableField: "selectable",
        overrideAble: function(e) {
            return e.cy().autounselectify() ? !1 : void 0
        },
        on: "select",
        off: "unselect"
    }), n({
        field: "selectable",
        overrideField: function(e) {
            return e.cy().autounselectify() ? !1 : void 0
        },
        on: "selectify",
        off: "unselectify"
    }), e.elesfn.grabbed = function() {
        var e = this[0];
        return e ? e._private.grabbed : void 0
    }, n({
        field: "active",
        on: "activate",
        off: "unactivate"
    }), e.elesfn.inactive = function() {
        var e = this[0];
        return e ? !e._private.active : void 0
    }
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        return function(n) {
            for (var r = [], i = this._private.cy, a = 0; a < this.length; a++) {
                var o = this[a],
                    s = o._private[t.attr];
                s && r.push(s)
            }
            return new e.Collection(i, r, {
                unique: !0
            }).filter(n)
        }
    }

    function n(t) {
        return function(n) {
            var r = [],
                i = this._private.cy,
                a = t || {};
            e.is.string(n) && (n = i.$(n));
            for (var o = n.connectedEdges(), s = this._private.ids, l = 0; l < o.length; l++) {
                var u, c = o[l],
                    d = c._private.data;
                if (a.thisIs) {
                    var p = d[a.thisIs];
                    u = s[p]
                } else u = s[d.source] || s[d.target];
                u && r.push(c)
            }
            return new e.Collection(i, r, {
                unique: !0
            })
        }
    }

    function r(t) {
        var n = {
            codirected: !1
        };
        return t = e.util.extend({}, n, t),
            function(n) {
                for (var r = this._private.cy, i = [], a = this.edges(), o = t, s = 0; s < a.length; s++)
                    for (var l = a[s], u = l.source()[0], c = u.id(), d = l.target()[0], p = d.id(), h = u._private.edges, f = 0; f < h.length; f++) {
                        var v = h[f],
                            g = v._private.data,
                            y = g.target,
                            m = g.source,
                            x = y === p && m === c,
                            b = c === y && p === m;
                        (o.codirected && x || !o.codirected && (x || b)) && i.push(v)
                    }
                return new e.Collection(r, i, {
                    unique: !0
                }).filter(n)
            }
    }
    e.fn.eles({
        roots: function(t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                if (a.isNode()) {
                    var o = a.connectedEdges(function() {
                        return this.data("target") === a.id() && this.data("source") !== a.id()
                    }).length > 0;
                    o || r.push(a)
                }
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        },
        leaves: function(t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                if (a.isNode()) {
                    var o = a.connectedEdges(function() {
                        return this.data("source") === a.id() && this.data("target") !== a.id()
                    }).length > 0;
                    o || r.push(a)
                }
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        },
        outgoers: function(t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
                var a = n[i],
                    o = a.id();
                if (a.isNode())
                    for (var s = a._private.edges, l = 0; l < s.length; l++) {
                        var u = s[l],
                            c = u._private.data.source,
                            d = u._private.data.target;
                        c === o && d !== o && (r.push(u), r.push(u.target()[0]))
                    }
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        },
        successors: function(t) {
            for (var n = this, r = [], i = {};;) {
                var a = n.outgoers();
                if (0 === a.length) break;
                for (var o = !1, s = 0; s < a.length; s++) {
                    var l = a[s],
                        u = l.id();
                    i[u] || (i[u] = !0, r.push(l), o = !0)
                }
                if (!o) break;
                n = a
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        },
        incomers: function(t) {
            for (var n = this, r = [], i = 0; i < n.length; i++) {
                var a = n[i],
                    o = a.id();
                if (a.isNode())
                    for (var s = a._private.edges, l = 0; l < s.length; l++) {
                        var u = s[l],
                            c = u._private.data.source,
                            d = u._private.data.target;
                        d === o && c !== o && (r.push(u), r.push(u.source()[0]))
                    }
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        },
        predecessors: function(t) {
            for (var n = this, r = [], i = {};;) {
                var a = n.incomers();
                if (0 === a.length) break;
                for (var o = !1, s = 0; s < a.length; s++) {
                    var l = a[s],
                        u = l.id();
                    i[u] || (i[u] = !0, r.push(l), o = !0)
                }
                if (!o) break;
                n = a
            }
            return new e.Collection(this._private.cy, r, {
                unique: !0
            }).filter(t)
        }
    }), e.fn.eles({
        neighborhood: function(t) {
            for (var n = [], r = this._private.cy, i = this.nodes(), a = 0; a < i.length; a++)
                for (var o = i[a], s = o.connectedEdges(), l = 0; l < s.length; l++) {
                    var u = s[l],
                        c = u.connectedNodes().not(o);
                    c.length > 0 && n.push(c[0]), n.push(u[0])
                }
            return new e.Collection(r, n, {
                unique: !0
            }).filter(t)
        },
        closedNeighborhood: function(e) {
            return this.neighborhood().add(this).filter(e)
        },
        openNeighborhood: function(e) {
            return this.neighborhood(e)
        }
    }), e.fn.eles({
        source: function(e) {
            var t, n = this[0];
            return n && (t = n._private.source), t && e ? t.filter(e) : t
        },
        target: function(e) {
            var t, n = this[0];
            return n && (t = n._private.target), t && e ? t.filter(e) : t
        },
        sources: t({
            attr: "source"
        }),
        targets: t({
            attr: "target"
        })
    }), e.fn.eles({
        edgesWith: n(),
        edgesTo: n({
            thisIs: "source"
        })
    }), e.fn.eles({
        connectedEdges: function(t) {
            for (var n = [], r = this._private.cy, i = this, a = 0; a < i.length; a++) {
                var o = i[a];
                if (o.isNode())
                    for (var s = o._private.edges, l = 0; l < s.length; l++) {
                        var u = s[l];
                        n.push(u)
                    }
            }
            return new e.Collection(r, n, {
                unique: !0
            }).filter(t)
        },
        connectedNodes: function(t) {
            for (var n = [], r = this._private.cy, i = this, a = 0; a < i.length; a++) {
                var o = i[a];
                o.isEdge() && (n.push(o.source()[0]), n.push(o.target()[0]))
            }
            return new e.Collection(r, n, {
                unique: !0
            }).filter(t)
        },
        parallelEdges: r(),
        codirectedEdges: r({
            codirected: !0
        })
    })
}(cytoscape),
function(e) {
    "use strict";
    e.fn.eles({
        fit: function() {},
        center: function() {}
    })
}(cytoscape),
function(e) {
    "use strict";
    e.Minheap = function(t, n, r) {
        return new e.Heap(t, n, e.Heap.minHeapComparator, r)
    }, e.Maxheap = function(t, n, r) {
        return new e.Heap(t, n, e.Heap.maxHeapComparator, r)
    }, e.Heap = function(t, n, r, i) {
        if ("undefined" != typeof r && "undefined" != typeof n) {
            "undefined" == typeof i && (i = e.Heap.idFn);
            var a, o, s, l = [],
                u = {},
                c = [],
                d = 0;
            for (n = this.getArgumentAsCollection(n, t), s = n.length, d = 0; s > d; d += 1) {
                if (l.push(i.call(t, n[d], d, n)), a = n[d].id(), u.hasOwnProperty(a)) throw "ERROR: Multiple items with the same id found: " + a;
                u[a] = d, c.push(a)
            }
            for (this._private = {
                    cy: t,
                    heap: l,
                    pointers: u,
                    elements: c,
                    comparator: r,
                    extractor: i,
                    length: s
                }, d = Math.floor(s / 2); d >= 0; d -= 1) o = this.heapify(d);
            return o
        }
    }, e.Heap.idFn = function(e) {
        return e.id()
    }, e.Heap.minHeapComparator = function(e, t) {
        return e >= t
    }, e.Heap.maxHeapComparator = function(e, t) {
        return t >= e
    }, e.fn.heap = function(t) {
        for (var n in t) {
            var r = t[n];
            e.Heap.prototype[n] = r
        }
    }, e.heapfn = e.Heap.prototype, e.heapfn.size = function() {
        return this._private.length
    }, e.heapfn.getArgumentAsCollection = function(t, n) {
        var r;
        if ("undefined" == typeof n && (n = this._private.cy), e.is.elementOrCollection(t)) r = t;
        else {
            for (var i = [], a = [].concat.apply([], [t]), o = 0; o < a.length; o++) {
                var s = a[o],
                    l = n.getElementById(s);
                l.length > 0 && i.push(l)
            }
            r = new e.Collection(n, i)
        }
        return r
    }, e.heapfn.isHeap = function() {
        var e, t, n, r, i, a = this._private.heap,
            o = a.length,
            s = this._private.comparator;
        for (e = 0; o > e; e += 1)
            if (t = 2 * e + 1, n = t + 1, r = o > t ? s(a[t], a[e]) : !0, i = o > n ? s(a[n], a[e]) : !0, !r || !i) return !1;
        return !0
    }, e.heapfn.heapSwap = function(e, t) {
        var n = this._private.heap,
            r = this._private.pointers,
            i = this._private.elements,
            a = n[e],
            o = i[e],
            s = i[e],
            l = i[t];
        n[e] = n[t], i[e] = i[t], r[s] = t, r[l] = e, n[t] = a, i[t] = o
    }, e.heapfn.heapify = function(e, t) {
        var n, r, i, a, o, s, l, u = 0,
            c = !1;
        for ("undefined" == typeof t && (t = !0), n = this._private.heap, u = n.length, s = this._private.comparator, r = e; !c;) t ? (i = 2 * r + 1, a = i + 1, o = r, u > i && !s(n[i], n[o]) && (o = i), u > a && !s(n[a], n[o]) && (o = a), c = o === r, c || (this.heapSwap(o, r), r = o)) : (l = Math.floor((r - 1) / 2), o = r, c = 0 > l || s(n[o], n[l]), c || (this.heapSwap(o, l), r = l))
    }, e.heapfn.insert = function(e) {
        var t, n, r, i, a, o = this.getArgumentAsCollection(e),
            s = o.length;
        for (a = 0; s > a; a += 1) {
            if (t = o[a], n = this._private.heap.length, r = this._private.extractor(t), i = t.id(), this._private.pointers.hasOwnProperty(i)) throw "ERROR: Multiple items with the same id found: " + i;
            this._private.heap.push(r), this._private.elements.push(i), this._private.pointers[i] = n, this.heapify(n, !1)
        }
        this._private.length = this._private.heap.length
    }, e.heapfn.getValueById = function(e) {
        if (this._private.pointers.hasOwnProperty(e)) {
            var t = this._private.pointers[e];
            return this._private.heap[t]
        }
    }, e.heapfn.contains = function(e) {
        for (var t = this.getArgumentAsCollection(e), n = 0; n < t.length; n += 1) {
            var r = t[n].id();
            if (!this._private.pointers.hasOwnProperty(r)) return !1
        }
        return !0
    }, e.heapfn.top = function() {
        return this._private.length > 0 ? {
            value: this._private.heap[0],
            id: this._private.elements[0]
        } : void 0
    }, e.heapfn.pop = function() {
        if (this._private.length > 0) {
            var e, t, n, r = this.top(),
                i = this._private.length - 1;
            return this.heapSwap(0, i), e = this._private.elements[i], t = this._private.heap[i], n = e, this._private.heap.pop(), this._private.elements.pop(), this._private.length = this._private.heap.length, this._private.pointers[n] = void 0, this.heapify(0), r
        }
    }, e.heapfn.findDirectionHeapify = function(e) {
        var t = Math.floor((e - 1) / 2),
            n = this._private.heap,
            r = 0 > t || this._private.comparator(n[e], n[t]);
        this.heapify(e, r)
    }, e.heapfn.edit = function(t, n) {
        for (var r = this.getArgumentAsCollection(t), i = 0; i < r.length; i += 1) {
            var a = r[i].id(),
                o = this._private.pointers[a],
                s = this._private.heap[o];
            e.is.number(n) ? this._private.heap[o] = n : e.is.fn(n) && (this._private.heap[o] = n.call(this._private.cy, s, o)), this.findDirectionHeapify(o)
        }
    }, e.heapfn.delete = function(e) {
        for (var t = this.getArgumentAsCollection(e), n = 0; n < t.length; n += 1) {
            var r, i, a, o = t[n].id(),
                s = this._private.pointers[o],
                l = this._private.length - 1;
            s !== l && this.heapSwap(s, l), r = this._private.elements[l], i = this._private.heap[l], a = r, this._private.heap.pop(), this._private.elements.pop(), this._private.length = this._private.heap.length, this._private.pointers[a] = void 0, this.findDirectionHeapify(s)
        }
        return i
    }
}(cytoscape),
function(e) {
    "use strict";

    function t(e) {
        t.CANVAS_LAYERS = 5, t.SELECT_BOX = 0, t.DRAG = 2, t.NODE = 4, t.TEXTURE_BUFFER = 0, t.BUFFER_COUNT = 2, this.options = e, this.data = {
            select: [void 0, void 0, void 0, void 0, 0],
            renderer: this,
            cy: e.cy,
            container: e.cy.container(),
            canvases: new Array(t.CANVAS_LAYERS),
            contexts: new Array(t.CANVAS_LAYERS),
            canvasNeedsRedraw: new Array(t.CANVAS_LAYERS),
            bufferCanvases: new Array(t.BUFFER_COUNT),
            bufferContexts: new Array(t.CANVAS_LAYERS)
        }, this.hoverData = {
            down: null,
            last: null,
            downTime: null,
            triggerMode: null,
            dragging: !1,
            initialPan: [null, null],
            capture: !1
        }, this.timeoutData = {
            panTimeout: null
        }, this.dragData = {
            possibleDragElements: []
        }, this.touchData = {
            start: null,
            capture: !1,
            startPosition: [null, null, null, null, null, null],
            singleTouchStartTime: null,
            singleTouchMoved: !0,
            now: [null, null, null, null, null, null],
            earlier: [null, null, null, null, null, null]
        }, this.zoomData = {
            freeToZoom: !1,
            lastPointerX: null
        }, this.redraws = 0, this.showFps = e.showFps, this.bindings = [], this.data.canvasContainer = document.createElement("div");
        var n = this.data.canvasContainer.style;
        n.position = "absolute", n.zIndex = "0", n.overflow = "hidden", this.data.container.appendChild(this.data.canvasContainer);
        for (var r = 0; r < t.CANVAS_LAYERS; r++) this.data.canvases[r] = document.createElement("canvas"), this.data.contexts[r] = this.data.canvases[r].getContext("2d"), this.data.canvases[r].style.position = "absolute", this.data.canvases[r].setAttribute("data-id", "layer" + r), this.data.canvases[r].style.zIndex = String(t.CANVAS_LAYERS - r), this.data.canvasContainer.appendChild(this.data.canvases[r]), this.data.canvasNeedsRedraw[r] = !1;
        this.data.topCanvas = this.data.canvases[0], this.data.canvases[t.NODE].setAttribute("data-id", "layer" + t.NODE + "-node"), this.data.canvases[t.SELECT_BOX].setAttribute("data-id", "layer" + t.SELECT_BOX + "-selectbox"), this.data.canvases[t.DRAG].setAttribute("data-id", "layer" + t.DRAG + "-drag");
        for (var r = 0; r < t.BUFFER_COUNT; r++) this.data.bufferCanvases[r] = document.createElement("canvas"), this.data.bufferContexts[r] = this.data.bufferCanvases[r].getContext("2d"), this.data.bufferCanvases[r].style.position = "absolute", this.data.bufferCanvases[r].setAttribute("data-id", "buffer" + r), this.data.bufferCanvases[r].style.zIndex = String(-r - 1), this.data.bufferCanvases[r].style.visibility = "hidden";
        this.hideEdgesOnViewport = e.hideEdgesOnViewport, this.hideLabelsOnViewport = e.hideLabelsOnViewport, this.textureOnViewport = e.textureOnViewport, this.wheelSensitivity = e.wheelSensitivity, this.motionBlurEnabled = e.motionBlur, this.forcedPixelRatio = e.pixelRatio, this.motionBlur = !0, this.load()
    }
    t.panOrBoxSelectDelay = 400, t.isTouch = e.is.touch();
    var n = "undefined" != typeof Path2D;
    t.usePaths = function() {
        return n
    }, t.prototype.notify = function(n) {
        var r;
        r = e.is.array(n.type) ? n.type : [n.type];
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            switch (a) {
                case "destroy":
                    return void this.destroy();
                case "add":
                case "remove":
                case "load":
                    this.updateNodesCache(), this.updateEdgesCache();
                    break;
                case "viewport":
                    this.data.canvasNeedsRedraw[t.SELECT_BOX] = !0;
                    break;
                case "style":
                    this.updateCachedZSortedEles()
            }("load" === a || "resize" === a) && (this.invalidateContainerClientCoordsCache(), this.matchCanvasSize(this.data.container))
        }
        this.data.canvasNeedsRedraw[t.NODE] = !0, this.data.canvasNeedsRedraw[t.DRAG] = !0, this.redraw()
    }, t.prototype.destroy = function() {
        this.destroyed = !0;
        for (var e = 0; e < this.bindings.length; e++) {
            var t = this.bindings[e],
                n = t;
            n.target.removeEventListener(n.event, n.handler, n.useCapture)
        }
    };
    for (var r in e.math) t.prototype[r] = e.math[r];
    e("renderer", "canvas", t)
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas"),
        n = t.prototype,
        r = t.arrowShapes = {};
    t.arrowShapeHeight = .3;
    var i = function(e, t, n, r, i, a) {
            var o = n - i / 2,
                s = n + i / 2,
                l = r - a / 2,
                u = r + a / 2;
            return e >= o && s >= e && t >= l && u >= t
        },
        a = function(e, t, n, r, i) {
            r = -r;
            var a = e * Math.cos(r) - t * Math.sin(r),
                o = e * Math.sin(r) + t * Math.cos(r),
                s = a * n,
                l = o * n,
                u = s + i.x,
                c = l + i.y;
            return {
                x: u,
                y: c
            }
        };
    r.arrow = {
        _points: [-.15, -.3, 0, 0, .15, -.3],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r.arrow._points;
            return e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o = r.arrow._points, s = 0; s < o.length / 2; s++) {
                var l = a(o[2 * s], o[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r.triangle = r.arrow, r["triangle-backcurve"] = {
        _ctrlPt: [0, -.15],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r.triangle._points;
            return e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o, s = r.triangle._points, l = 0; l < s.length / 2; l++) {
                var u = a(s[2 * l], s[2 * l + 1], t, n, i);
                0 === l && (o = u), e.lineTo(u.x, u.y)
            }
            var c = this._ctrlPt,
                d = a(c[0], c[1], t, n, i);
            e.quadraticCurveTo(d.x, d.y, o.x, o.y)
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r["triangle-tee"] = {
        _points: [-.15, -.3, 0, 0, .15, -.3, -.15, -.3],
        _pointsTee: [-.15, -.4, -.15, -.5, .15, -.5, .15, -.4],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r["triangle-tee"]._points,
                d = r["triangle-tee"]._pointsTee,
                p = e.math.pointInsidePolygon(t, n, d, i, a, o, s, l, u) || e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u);
            return p
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o = r["triangle-tee"]._points, s = 0; s < o.length / 2; s++) {
                var l = a(o[2 * s], o[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
            var u = r["triangle-tee"]._pointsTee,
                c = a(u[0], u[1], t, n, i);
            e.moveTo(c.x, c.y);
            for (var s = 0; s < u.length / 2; s++) {
                var l = a(u[2 * s], u[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r["half-triangle-overshot"] = {
        _points: [0, -.25, -.5, -.25, .5, .25],
        leavePathOpen: !0,
        matchEdgeWidth: !0,
        collide: function(t, n, r, i, a, o, s, l) {
            var u = this._points;
            return e.math.pointInsidePolygon(t, n, u, r, i, a, o, s, l)
        },
        roughCollide: i,
        draw: function(e, t, n, r) {
            for (var i = this._points, o = 0; o < i.length / 2; o++) {
                var s = a(i[2 * o], i[2 * o + 1], t, n, r);
                e.lineTo(s.x, s.y)
            }
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r.none = {
        collide: function() {
            return !1
        },
        roughCollide: function() {
            return !1
        },
        draw: function() {},
        spacing: function() {
            return 0
        },
        gap: function() {
            return 0
        }
    }, r.circle = {
        _baseRadius: .15,
        collide: function(e, t, n, i, a, o, s, l) {
            if (a != o) {
                var u = (o + l) / (a + l);
                return t /= u, i /= u, Math.pow(n - e, 2) + Math.pow(i - t, 2) <= Math.pow((a + l) * r.circle._baseRadius, 2)
            }
            return Math.pow(n - e, 2) + Math.pow(i - t, 2) <= Math.pow((a + l) * r.circle._baseRadius, 2)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            e.arc(i.x, i.y, r.circle._baseRadius * t, 0, 2 * Math.PI, !1)
        },
        spacing: function(e) {
            return n.getArrowWidth(e._private.style.width.pxValue) * r.circle._baseRadius
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r.inhibitor = {
        _points: [-.25, 0, -.25, -.1, .25, -.1, .25, 0],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r.inhibitor._points;
            return e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o = r.inhibitor._points, s = 0; s < o.length / 2; s++) {
                var l = a(o[2 * s], o[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
        },
        spacing: function() {
            return 1
        },
        gap: function() {
            return 1
        }
    }, r.tee = r.inhibitor, r.square = {
        _points: [-.15, 0, .15, 0, .15, -.3, -.15, -.3],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r.square._points;
            return e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o = r.square._points, s = 0; s < o.length / 2; s++) {
                var l = a(o[2 * s], o[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return 2 * e._private.style.width.pxValue
        }
    }, r.diamond = {
        _points: [-.15, -.15, 0, -.3, .15, -.15, 0, 0],
        collide: function(t, n, i, a, o, s, l, u) {
            var c = r.diamond._points;
            return e.math.pointInsidePolygon(t, n, c, i, a, o, s, l, u)
        },
        roughCollide: i,
        draw: function(e, t, n, i) {
            for (var o = r.diamond._points, s = 0; s < o.length / 2; s++) {
                var l = a(o[2 * s], o[2 * s + 1], t, n, i);
                e.lineTo(l.x, l.y)
            }
        },
        spacing: function() {
            return 0
        },
        gap: function(e) {
            return e._private.style.width.pxValue
        }
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.getCachedNodes = function() {
        var e = this.data,
            t = this.data.cy;
        return null == e.cache && (e.cache = {}), null == e.cache.cachedNodes && (e.cache.cachedNodes = t.nodes()), e.cache.cachedNodes
    }, t.prototype.updateNodesCache = function() {
        var e = this.data,
            t = this.data.cy;
        null == e.cache && (e.cache = {}), e.cache.cachedNodes = t.nodes()
    }, t.prototype.getCachedEdges = function() {
        var e = this.data,
            t = this.data.cy;
        return null == e.cache && (e.cache = {}), null == e.cache.cachedEdges && (e.cache.cachedEdges = t.edges()), e.cache.cachedEdges
    }, t.prototype.updateEdgesCache = function() {
        var e = this.data,
            t = this.data.cy;
        null == e.cache && (e.cache = {}), e.cache.cachedEdges = t.edges()
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.projectIntoViewport = function(e, t) {
        var n = this.findContainerClientCoords(),
            r = n[0],
            i = n[1],
            a = e - r,
            o = t - i;
        return a -= this.data.cy.pan().x, o -= this.data.cy.pan().y, a /= this.data.cy.zoom(), o /= this.data.cy.zoom(), [a, o]
    }, t.prototype.findContainerClientCoords = function() {
        var e = this.data.container,
            t = this.containerBB = this.containerBB || e.getBoundingClientRect();
        return [t.left, t.top, t.right - t.left, t.bottom - t.top]
    }, t.prototype.invalidateContainerClientCoordsCache = function() {
        this.containerBB = null
    }, t.prototype.findNearestElement = function(n, r, i) {
        function a(e) {
            var a = e.outerWidth(),
                o = e.outerHeight(),
                l = a / 2,
                c = o / 2,
                d = e._private.position;
            if (d.x - l <= n && n <= d.x + l && d.y - c <= r && r <= d.y + c) {
                var p = !i || e.visible() && !e.transparent();
                if (i && !p) return;
                var h = t.nodeShapes[s.getNodeShape(e)],
                    v = e._private.style["border-width"].pxValue / 2;
                h.checkPoint(n, r, v, a + f, o + f, d.x, d.y) && u.push(e)
            }
        }

        function o(o) {
            var l, c = o._private.rscratch,
                d = o._private.style,
                f = d.width.pxValue,
                v = f * f,
                g = 2 * f,
                y = o._private.source,
                m = o._private.target,
                x = !1,
                b = function() {
                    if (void 0 !== l) return l;
                    if (!i) return l = !0, !0;
                    var e = o.visible() && !o.transparent();
                    return e ? (l = !0, !0) : (l = !1, !1)
                };
            if ("self" === c.edgeType)((x = e.math.inBezierVicinity(n, r, c.startX, c.startY, c.cp2ax, c.cp2ay, c.selfEdgeMidX, c.selfEdgeMidY, v)) && b() && v + h > e.math.sqDistanceToQuadraticBezier(n, r, c.startX, c.startY, c.cp2ax, c.cp2ay, c.selfEdgeMidX, c.selfEdgeMidY) || (x = e.math.inBezierVicinity(n, r, c.selfEdgeMidX, c.selfEdgeMidY, c.cp2cx, c.cp2cy, c.endX, c.endY, v)) && b() && v + h > e.math.sqDistanceToQuadraticBezier(n, r, c.selfEdgeMidX, c.selfEdgeMidY, c.cp2cx, c.cp2cy, c.endX, c.endY)) && u.push(o);
            else if ("haystack" === c.edgeType) {
                var w = d["haystack-radius"].value,
                    _ = w / 2,
                    E = m._private.position,
                    S = m.width(),
                    C = m.height(),
                    T = y._private.position,
                    k = y.width(),
                    N = y.height(),
                    D = T.x + c.source.x * k * _,
                    P = T.y + c.source.y * N * _,
                    M = E.x + c.target.x * S * _,
                    B = E.y + c.target.y * C * _;
                (x = e.math.inLineVicinity(n, r, D, P, M, B, g)) && b() && v + h > e.math.sqDistanceToFiniteLine(n, r, D, P, M, B) && u.push(o)
            } else "straight" === c.edgeType ? (x = e.math.inLineVicinity(n, r, c.startX, c.startY, c.endX, c.endY, g)) && b() && v + h > e.math.sqDistanceToFiniteLine(n, r, c.startX, c.startY, c.endX, c.endY) && u.push(o) : "bezier" === c.edgeType && (x = e.math.inBezierVicinity(n, r, c.startX, c.startY, c.cp2x, c.cp2y, c.endX, c.endY, v)) && b() && v + h > e.math.sqDistanceToQuadraticBezier(n, r, c.startX, c.startY, c.cp2x, c.cp2y, c.endX, c.endY) && u.push(o);
            if (x && b() && 0 === u.length || u[u.length - 1] !== o) {
                var L = t.arrowShapes[d["source-arrow-shape"].value],
                    A = t.arrowShapes[d["target-arrow-shape"].value],
                    y = y || o._private.source,
                    m = m || o._private.target,
                    E = m._private.position,
                    T = y._private.position,
                    z = s.getArrowWidth(d.width.pxValue),
                    I = s.getArrowHeight(d.width.pxValue),
                    O = z,
                    R = I;
                (L.roughCollide(n, r, c.arrowStartX, c.arrowStartY, z, I, [c.arrowStartX - T.x, c.arrowStartY - T.y], 0) && L.collide(n, r, c.arrowStartX, c.arrowStartY, z, I, [c.arrowStartX - T.x, c.arrowStartY - T.y], 0) || A.roughCollide(n, r, c.arrowEndX, c.arrowEndY, O, R, [c.arrowEndX - E.x, c.arrowEndY - E.y], 0) && A.collide(n, r, c.arrowEndX, c.arrowEndY, O, R, [c.arrowEndX - E.x, c.arrowEndY - E.y], 0)) && u.push(o)
            }
            p && u.length > 0 && u[u.length - 1] === o && (a(y), a(m))
        }
        for (var s = this, l = this.getCachedZSortedEles(), u = [], c = t.isTouch, d = this.data.cy.zoom(), p = this.data.cy.hasCompoundNodes(), h = (c ? 256 : 32) / d, f = (c ? 16 : 0) / d, v = l.length - 1; v >= 0; v--) {
            var g = l[v];
            if (u.length > 0) break;
            "nodes" === g._private.group ? a(l[v]) : o(l[v])
        }
        return u.length > 0 ? u[u.length - 1] : null
    }, t.prototype.getAllInBox = function(n, r, i, a) {
        var o = this.getCachedNodes(),
            s = this.getCachedEdges(),
            l = [],
            u = Math.min(n, i),
            c = Math.max(n, i),
            d = Math.min(r, a),
            p = Math.max(r, a);
        n = u, i = c, r = d, a = p;
        for (var h, f = 0; f < o.length; f++) {
            var v = o[f]._private.position,
                g = this.getNodeShape(o[f]),
                y = this.getNodeWidth(o[f]),
                m = this.getNodeHeight(o[f]),
                x = o[f]._private.style["border-width"].pxValue / 2,
                b = t.nodeShapes[g];
            b.intersectBox(n, r, i, a, y, m, v.x, v.y, x) && l.push(o[f])
        }
        for (var f = 0; f < s.length; f++) {
            var w = s[f]._private.rscratch;
            if ("self" == s[f]._private.rscratch.edgeType && ((h = e.math.boxInBezierVicinity(n, r, i, a, w.startX, w.startY, w.cp2ax, w.cp2ay, w.endX, w.endY, s[f]._private.style.width.pxValue)) && (2 == h || 1 == h && e.math.checkBezierInBox(n, r, i, a, w.startX, w.startY, w.cp2ax, w.cp2ay, w.endX, w.endY, s[f]._private.style.width.pxValue)) || (h = e.math.boxInBezierVicinity(n, r, i, a, w.startX, w.startY, w.cp2cx, w.cp2cy, w.endX, w.endY, s[f]._private.style.width.pxValue)) && (2 == h || 1 == h && e.math.checkBezierInBox(n, r, i, a, w.startX, w.startY, w.cp2cx, w.cp2cy, w.endX, w.endY, s[f]._private.style.width.pxValue))) && l.push(s[f]), "bezier" == w.edgeType && (h = e.math.boxInBezierVicinity(n, r, i, a, w.startX, w.startY, w.cp2x, w.cp2y, w.endX, w.endY, s[f]._private.style.width.pxValue)) && (2 == h || 1 == h && e.math.checkBezierInBox(n, r, i, a, w.startX, w.startY, w.cp2x, w.cp2y, w.endX, w.endY, s[f]._private.style.width.pxValue)) && l.push(s[f]), "straight" == w.edgeType && (h = e.math.boxInBezierVicinity(n, r, i, a, w.startX, w.startY, .5 * w.startX + .5 * w.endX, .5 * w.startY + .5 * w.endY, w.endX, w.endY, s[f]._private.style.width.pxValue)) && (2 == h || 1 == h && e.math.checkStraightEdgeInBox(n, r, i, a, w.startX, w.startY, w.endX, w.endY, s[f]._private.style.width.pxValue)) && l.push(s[f]), "haystack" == w.edgeType) {
                var _ = s[f].target()[0],
                    E = _.position(),
                    S = s[f].source()[0],
                    C = S.position(),
                    T = C.x + w.source.x,
                    k = C.y + w.source.y,
                    N = E.x + w.target.x,
                    D = E.y + w.target.y,
                    P = T >= n && i >= T && k >= r && a >= k,
                    M = N >= n && i >= N && D >= r && a >= D;
                P && M && l.push(s[f])
            }
        }
        return l
    }, t.prototype.getNodeWidth = function(e) {
        return e.width()
    }, t.prototype.getNodeHeight = function(e) {
        return e.height()
    }, t.prototype.getNodeShape = function(e) {
        var t = e._private.style.shape.value;
        return e.isParent() ? "rectangle" === t || "roundrectangle" === t ? t : "rectangle" : t
    }, t.prototype.getNodePadding = function(e) {
        var t = e._private.style["padding-left"].pxValue,
            n = e._private.style["padding-right"].pxValue,
            r = e._private.style["padding-top"].pxValue,
            i = e._private.style["padding-bottom"].pxValue;
        return isNaN(t) && (t = 0), isNaN(n) && (n = 0), isNaN(r) && (r = 0), isNaN(i) && (i = 0), {
            left: t,
            right: n,
            top: r,
            bottom: i
        }
    }, t.prototype.zOrderSort = e.Collection.zIndexSort, t.prototype.updateCachedZSortedEles = function() {
        this.getCachedZSortedEles(!0)
    }, t.prototype.getCachedZSortedEles = function(e) {
        var t = this.lastZOrderCachedNodes,
            n = this.lastZOrderCachedEdges,
            r = this.getCachedNodes(),
            i = this.getCachedEdges(),
            a = [];
        if (!e && t && n && t === r && n === i) a = this.cachedZSortedEles;
        else {
            for (var o = 0; o < r.length; o++) r[o].visible() && !r[o].transparent() && a.push(r[o]);
            for (var o = 0; o < i.length; o++) i[o].visible() && !i[o].transparent() && a.push(i[o]);
            a.sort(this.zOrderSort), this.cachedZSortedEles = a
        }
        return this.lastZOrderCachedNodes = r, this.lastZOrderCachedEdges = i, a
    }, t.prototype.projectBezier = function(t) {
        function n(e) {
            a.push({
                x: r(e[0], e[2], e[4], .05),
                y: r(e[1], e[3], e[5], .05)
            }), a.push({
                x: r(e[0], e[2], e[4], .25),
                y: r(e[1], e[3], e[5], .25)
            }), a.push({
                x: r(e[0], e[2], e[4], .4),
                y: r(e[1], e[3], e[5], .4)
            });
            var t = {
                x: r(e[0], e[2], e[4], .5),
                y: r(e[1], e[3], e[5], .5)
            };
            a.push(t), "self" === i.edgeType ? (i.midX = i.selfEdgeMidX, i.midY = i.selfEdgeMidY) : (i.midX = t.x, i.midY = t.y), a.push({
                x: r(e[0], e[2], e[4], .6),
                y: r(e[1], e[3], e[5], .6)
            }), a.push({
                x: r(e[0], e[2], e[4], .75),
                y: r(e[1], e[3], e[5], .75)
            }), a.push({
                x: r(e[0], e[2], e[4], .95),
                y: r(e[1], e[3], e[5], .95)
            })
        }
        var r = e.math.qbezierAt,
            i = t._private.rscratch,
            a = t._private.rstyle.bezierPts = [];
        "self" === i.edgeType ? (n([i.startX, i.startY, i.cp2ax, i.cp2ay, i.selfEdgeMidX, i.selfEdgeMidY]), n([i.selfEdgeMidX, i.selfEdgeMidY, i.cp2cx, i.cp2cy, i.endX, i.endY])) : "bezier" === i.edgeType && n([i.startX, i.startY, i.cp2x, i.cp2y, i.endX, i.endY])
    }, t.prototype.recalculateNodeLabelProjection = function(e) {
        var t = e._private.style.content.strValue;
        if (t && !t.match(/^\s+$/)) {
            var n, r, i = e.outerWidth(),
                a = e.outerHeight(),
                o = e._private.position,
                s = e._private.style["text-halign"].strValue,
                l = e._private.style["text-valign"].strValue,
                u = e._private.rscratch,
                c = e._private.rstyle;
            switch (s) {
                case "left":
                    n = o.x - i / 2;
                    break;
                case "right":
                    n = o.x + i / 2;
                    break;
                default:
                    n = o.x
            }
            switch (l) {
                case "top":
                    r = o.y - a / 2;
                    break;
                case "bottom":
                    r = o.y + a / 2;
                    break;
                default:
                    r = o.y
            }
            u.labelX = n, u.labelY = r, c.labelX = n, c.labelY = r, this.applyLabelDimensions(e)
        }
    }, t.prototype.recalculateEdgeLabelProjection = function(t) {
        var n = t._private.style.content.strValue;
        if (n && !n.match(/^\s+$/)) {
            var r, i, a, o, s = t._private.rscratch,
                l = t._private.rstyle;
            if ("self" == s.edgeType) a = s.selfEdgeMidX, o = s.selfEdgeMidY;
            else if ("straight" == s.edgeType) a = (s.startX + s.endX) / 2, o = (s.startY + s.endY) / 2;
            else if ("bezier" == s.edgeType) a = e.math.qbezierAt(s.startX, s.cp2x, s.endX, .5), o = e.math.qbezierAt(s.startY, s.cp2y, s.endY, .5);
            else if ("haystack" == s.edgeType) {
                var u = t._private.source._private.position,
                    c = t._private.target._private.position;
                a = (u.x + s.source.x + c.x + s.target.x) / 2, o = (u.y + s.source.y + c.y + s.target.y) / 2
            }
            r = a, i = o, s.labelX = r, s.labelY = i, l.labelX = r, l.labelY = i, this.applyLabelDimensions(t)
        }
    }, t.prototype.applyLabelDimensions = function(e) {
        var t = e._private.rscratch,
            n = e._private.rstyle,
            r = this.getLabelText(e),
            i = this.calculateLabelDimensions(e, r);
        n.labelWidth = i.width, t.labelWidth = i.width, n.labelHeight = i.height, t.labelHeight = i.height
    }, t.prototype.getLabelText = function(e) {
        var t = e._private.style,
            n = e._private.style.content.strValue,
            r = t["text-transform"].value;
        return "none" == r || ("uppercase" == r ? n = n.toUpperCase() : "lowercase" == r && (n = n.toLowerCase())), n
    }, t.prototype.calculateLabelDimensions = function(e, t) {
        var n = this,
            r = e._private.style,
            i = r["font-style"].strValue,
            a = r["font-size"].pxValue + "px",
            o = r["font-family"].strValue,
            s = r["font-weight"].strValue,
            l = e._private.labelKey,
            u = n.labelDimCache || (n.labelDimCache = {});
        if (u[l]) return u[l];
        var c = this.labelCalcDiv;
        c || (c = this.labelCalcDiv = document.createElement("div"), document.body.appendChild(c));
        var d = c.style;
        return d.fontFamily = o, d.fontStyle = i, d.fontSize = a, d.fontWeight = s, d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.padding = "0", d.lineHeight = "1", c.innerText = t, u[l] = {
            width: c.clientWidth,
            height: c.clientHeight
        }, u[l]
    }, t.prototype.recalculateRenderedStyle = function(e) {
        for (var t = [], n = [], r = {}, i = 0; i < e.length; i++) {
            var a = e[i],
                o = a._private,
                s = o.rscratch,
                l = o.rstyle,
                u = o.data.id,
                c = null != s.boundingBoxKey && o.boundingBoxKey === s.boundingBoxKey,
                d = null != s.labelKey && o.labelKey === s.labelKey,
                p = c && d;
            if ("nodes" === a._private.group) {
                var h = o.position,
                    f = null != l.nodeX && null != l.nodeY && h.x === l.nodeX && h.y === l.nodeY;
                f && p || n.push(a), l.nodeX = h.x, l.nodeY = h.y
            } else {
                var v = a._private.source._private.position,
                    g = a._private.target._private.position,
                    y = null != l.srcX && null != l.srcY && v.x === l.srcX && v.y === l.srcY,
                    m = null != l.tgtX && null != l.tgtY && g.x === l.tgtX && g.y === l.tgtY,
                    x = y && m;
                if (!x || !p) {
                    var b = o.style["curve-style"].value;
                    if ("bezier" === b) {
                        if (!r[u]) {
                            t.push(a), r[u] = !0;
                            for (var w = a.parallelEdges(), i = 0; i < w.length; i++) {
                                var _ = w[i],
                                    E = _._private.data.id;
                                r[E] || (t.push(_), r[E] = !0)
                            }
                        }
                    } else t.push(a)
                }
                l.srcX = v.x, l.srcY = v.y, l.tgtX = g.x, l.tgtY = g.y
            }
            s.boundingBoxKey = o.boundingBoxKey, s.labelKey = o.labelKey
        }
        this.recalculateEdgeProjections(t), this.recalculateLabelProjections(n, t)
    }, t.prototype.recalculateLabelProjections = function(e, t) {
        for (var n = 0; n < e.length; n++) this.recalculateNodeLabelProjection(e[n]);
        for (var n = 0; n < t.length; n++) this.recalculateEdgeLabelProjection(t[n])
    }, t.prototype.recalculateEdgeProjections = function(e) {
        this.findEdgeControlPoints(e)
    }, t.prototype.findEdgeControlPoints = function(n) {
        if (n && 0 !== n.length) {
            for (var r, i = {}, a = [], o = [], s = 0; s < n.length; s++) {
                var l = n[s],
                    u = l._private.style,
                    c = "unbundled-bezier" === u["curve-style"].value;
                if ("none" !== u.display.value)
                    if ("haystack" !== u["curve-style"].value) {
                        var d = l._private.data.source,
                            p = l._private.data.target;
                        r = d > p ? p + "-" + d : d + "-" + p, c && (r = "unbundled" + l._private.data.id), null == i[r] && (i[r] = [], a.push(r)), i[r].push(l), c && (i[r].hasUnbundled = !0)
                    } else o.push(l)
            }
            for (var h, f, v, g, y, m, x, b, w, _, E, S, C, T, k = 0; k < a.length; k++) {
                r = a[k];
                var N = i[r];
                if (N.sort(function(e, t) {
                        return e._private.index - t._private.index
                    }), h = N[0]._private.source, f = N[0]._private.target, h._private.data.id > f._private.data.id) {
                    var D = h;
                    h = f, f = D
                }
                if (v = h._private.position, g = f._private.position, y = this.getNodeWidth(h), m = this.getNodeHeight(h), x = this.getNodeWidth(f), b = this.getNodeHeight(f), w = t.nodeShapes[this.getNodeShape(h)], _ = t.nodeShapes[this.getNodeShape(f)], E = h._private.style["border-width"].pxValue, S = f._private.style["border-width"].pxValue, T = !1, N.length > 1 && h !== f || N.hasUnbundled) {
                    var P = w.intersectLine(v.x, v.y, y, m, g.x, g.y, E / 2),
                        M = _.intersectLine(g.x, g.y, x, b, v.x, v.y, S / 2),
                        B = {
                            x1: P[0],
                            x2: M[0],
                            y1: P[1],
                            y2: M[1]
                        },
                        L = M[1] - P[1],
                        A = M[0] - P[0],
                        z = Math.sqrt(A * A + L * L),
                        I = {
                            x: A,
                            y: L
                        },
                        O = {
                            x: I.x / z,
                            y: I.y / z
                        };
                    C = {
                        x: -O.y,
                        y: O.x
                    }, (_.checkPoint(P[0], P[1], S / 2, x, b, g.x, g.y) || w.checkPoint(M[0], M[1], E / 2, y, m, v.x, v.y)) && (C = {}, T = !0)
                }
                for (var l, R, s = 0; s < N.length; s++) {
                    l = N[s], R = l._private.rscratch;
                    var X = R.lastEdgeIndex,
                        j = s,
                        q = R.lastNumEdges,
                        V = N.length,
                        F = l._private.style,
                        Y = F["control-point-step-size"].pxValue,
                        H = void 0 !== F["control-point-distance"] ? F["control-point-distance"].pxValue : void 0,
                        W = F["control-point-weight"].value,
                        c = "unbundled-bezier" === F["curve-style"].value,
                        $ = R.lastSrcCtlPtX,
                        Z = v.x,
                        U = R.lastSrcCtlPtY,
                        G = v.y,
                        K = R.lastSrcCtlPtW,
                        J = h.outerWidth(),
                        Q = R.lastSrcCtlPtH,
                        et = h.outerHeight(),
                        tt = R.lastTgtCtlPtX,
                        nt = g.x,
                        rt = R.lastTgtCtlPtY,
                        it = g.y,
                        at = R.lastTgtCtlPtW,
                        ot = f.outerWidth(),
                        st = R.lastTgtCtlPtH,
                        lt = f.outerHeight();
                    if (R.badBezier = T ? !0 : !1, $ !== Z || U !== G || K !== J || Q !== et || tt !== nt || rt !== it || at !== ot || st !== lt || !(X === j && q === V || c)) {
                        if (R.lastSrcCtlPtX = Z, R.lastSrcCtlPtY = G, R.lastSrcCtlPtW = J, R.lastSrcCtlPtH = et, R.lastTgtCtlPtX = nt, R.lastTgtCtlPtY = it, R.lastTgtCtlPtW = ot, R.lastTgtCtlPtH = lt, R.lastEdgeIndex = j, R.lastNumEdges = V, h === f) {
                            R.edgeType = "self";
                            var ut = s,
                                ct = Y;
                            c && (ut = 0, ct = H), R.cp2ax = v.x, R.cp2ay = v.y - (1 + Math.pow(m, 1.12) / 100) * ct * (ut / 3 + 1), R.cp2cx = h._private.position.x - (1 + Math.pow(y, 1.12) / 100) * ct * (ut / 3 + 1), R.cp2cy = v.y, R.selfEdgeMidX = (R.cp2ax + R.cp2cx) / 2, R.selfEdgeMidY = (R.cp2ay + R.cp2cy) / 2
                        } else if (N.length % 2 !== 1 || s !== Math.floor(N.length / 2) || c) {
                            var dt, pt = (.5 - N.length / 2 + s) * Y,
                                ht = e.math.signum(pt);
                            dt = c ? H : void 0 !== H ? ht * H : void 0;
                            var ft = void 0 !== dt ? dt : pt,
                                vt = 1 - W,
                                gt = W,
                                yt = l._private.source !== h;
                            yt && (vt = W, gt = 1 - W);
                            var mt = {
                                x: B.x1 * vt + B.x2 * gt,
                                y: B.y1 * vt + B.y2 * gt
                            };
                            R.edgeType = "bezier", R.cp2x = mt.x + C.x * ft, R.cp2y = mt.y + C.y * ft
                        } else R.edgeType = "straight";
                        this.findEndpoints(l);
                        var xt = !e.is.number(R.startX) || !e.is.number(R.startY),
                            bt = !e.is.number(R.arrowStartX) || !e.is.number(R.arrowStartY),
                            wt = !e.is.number(R.endX) || !e.is.number(R.endY),
                            _t = !e.is.number(R.arrowEndX) || !e.is.number(R.arrowEndY),
                            Et = 3,
                            St = this.getArrowWidth(l._private.style.width.pxValue) * t.arrowShapeHeight,
                            Ct = Et * St,
                            Tt = e.math.distance({
                                x: R.cp2x,
                                y: R.cp2y
                            }, {
                                x: R.startX,
                                y: R.startY
                            }),
                            kt = Ct > Tt,
                            Nt = e.math.distance({
                                x: R.cp2x,
                                y: R.cp2y
                            }, {
                                x: R.endX,
                                y: R.endY
                            }),
                            Dt = Ct > Nt;
                        if ("bezier" === R.edgeType) {
                            var Pt = !1;
                            if (xt || bt || kt) {
                                Pt = !0;
                                var Mt = {
                                        x: R.cp2x - v.x,
                                        y: R.cp2y - v.y
                                    },
                                    Bt = Math.sqrt(Mt.x * Mt.x + Mt.y * Mt.y),
                                    Lt = {
                                        x: Mt.x / Bt,
                                        y: Mt.y / Bt
                                    },
                                    At = Math.max(y, m),
                                    zt = {
                                        x: R.cp2x + 2 * Lt.x * At,
                                        y: R.cp2y + 2 * Lt.y * At
                                    },
                                    It = w.intersectLine(v.x, v.y, y, m, zt.x, zt.y, E / 2);
                                kt ? (R.cp2x = R.cp2x + Lt.x * (Ct - Tt), R.cp2y = R.cp2y + Lt.y * (Ct - Tt)) : (R.cp2x = It[0] + Lt.x * Ct, R.cp2y = It[1] + Lt.y * Ct)
                            }
                            if (wt || _t || Dt) {
                                Pt = !0;
                                var Mt = {
                                        x: R.cp2x - g.x,
                                        y: R.cp2y - g.y
                                    },
                                    Bt = Math.sqrt(Mt.x * Mt.x + Mt.y * Mt.y),
                                    Lt = {
                                        x: Mt.x / Bt,
                                        y: Mt.y / Bt
                                    },
                                    At = Math.max(y, m),
                                    zt = {
                                        x: R.cp2x + 2 * Lt.x * At,
                                        y: R.cp2y + 2 * Lt.y * At
                                    },
                                    Ot = _.intersectLine(g.x, g.y, x, b, zt.x, zt.y, S / 2);
                                Dt ? (R.cp2x = R.cp2x + Lt.x * (Ct - Nt), R.cp2y = R.cp2y + Lt.y * (Ct - Nt)) : (R.cp2x = Ot[0] + Lt.x * Ct, R.cp2y = Ot[1] + Lt.y * Ct)
                            }
                            Pt && this.findEndpoints(l)
                        } else "straight" === R.edgeType && (R.midX = (Z + nt) / 2, R.midY = (G + it) / 2);
                        this.projectBezier(l)
                    }
                }
            }
            for (var s = 0; s < o.length; s++) {
                var l = o[s],
                    Rt = l._private.rscratch;
                if (!Rt.haystack) {
                    var Xt = 2 * Math.random() * Math.PI;
                    Rt.source = {
                        x: Math.cos(Xt),
                        y: Math.sin(Xt)
                    };
                    var Xt = 2 * Math.random() * Math.PI;
                    Rt.target = {
                        x: Math.cos(Xt),
                        y: Math.sin(Xt)
                    }, Rt.edgeType = "haystack", Rt.haystack = !0
                }
            }
            return i
        }
    }, t.prototype.findEndpoints = function(n) {
        var r, i = n.source()[0],
            a = n.target()[0],
            o = n._private.style["target-arrow-shape"].value,
            s = n._private.style["source-arrow-shape"].value,
            l = a._private.style["border-width"].pxValue,
            u = i._private.style["border-width"].pxValue,
            c = n._private.rscratch;
        if ("self" == n._private.rscratch.edgeType) {
            var d = [c.cp2cx, c.cp2cy];
            r = t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x, a._private.position.y, this.getNodeWidth(a), this.getNodeHeight(a), d[0], d[1], l / 2);
            var p = e.math.shortenIntersection(r, d, t.arrowShapes[o].spacing(n)),
                h = e.math.shortenIntersection(r, d, t.arrowShapes[o].gap(n));
            c.endX = h[0], c.endY = h[1], c.arrowEndX = p[0], c.arrowEndY = p[1];
            var d = [c.cp2ax, c.cp2ay];
            r = t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x, i._private.position.y, this.getNodeWidth(i), this.getNodeHeight(i), d[0], d[1], u / 2);
            var f = e.math.shortenIntersection(r, d, t.arrowShapes[s].spacing(n)),
                v = e.math.shortenIntersection(r, d, t.arrowShapes[s].gap(n));
            c.startX = v[0], c.startY = v[1], c.arrowStartX = f[0], c.arrowStartY = f[1]
        } else if ("straight" == c.edgeType) {
            r = t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x, a._private.position.y, this.getNodeWidth(a), this.getNodeHeight(a), i.position().x, i.position().y, l / 2), c.noArrowPlacement = 0 === r.length ? !0 : !1;
            var p = e.math.shortenIntersection(r, [i.position().x, i.position().y], t.arrowShapes[o].spacing(n)),
                h = e.math.shortenIntersection(r, [i.position().x, i.position().y], t.arrowShapes[o].gap(n));
            c.endX = h[0], c.endY = h[1], c.arrowEndX = p[0], c.arrowEndY = p[1], r = t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x, i._private.position.y, this.getNodeWidth(i), this.getNodeHeight(i), a.position().x, a.position().y, u / 2), c.noArrowPlacement = 0 === r.length ? !0 : !1;
            var f = e.math.shortenIntersection(r, [a.position().x, a.position().y], t.arrowShapes[s].spacing(n)),
                v = e.math.shortenIntersection(r, [a.position().x, a.position().y], t.arrowShapes[s].gap(n));
            c.startX = v[0], c.startY = v[1], c.arrowStartX = f[0], c.arrowStartY = f[1]
        } else if ("bezier" == c.edgeType) {
            var d = [c.cp2x, c.cp2y];
            r = t.nodeShapes[this.getNodeShape(a)].intersectLine(a._private.position.x, a._private.position.y, this.getNodeWidth(a), this.getNodeHeight(a), d[0], d[1], l / 2);
            var p = e.math.shortenIntersection(r, d, t.arrowShapes[o].spacing(n)),
                h = e.math.shortenIntersection(r, d, t.arrowShapes[o].gap(n));
            c.endX = h[0], c.endY = h[1], c.arrowEndX = p[0], c.arrowEndY = p[1], r = t.nodeShapes[this.getNodeShape(i)].intersectLine(i._private.position.x, i._private.position.y, this.getNodeWidth(i), this.getNodeHeight(i), d[0], d[1], u / 2);
            var f = e.math.shortenIntersection(r, d, t.arrowShapes[s].spacing(n)),
                v = e.math.shortenIntersection(r, d, t.arrowShapes[s].gap(n));
            c.startX = v[0], c.startY = v[1], c.arrowStartX = f[0], c.arrowStartY = f[1]
        } else if (c.isArcEdge) return
    }, t.prototype.findEdges = function(e) {
        for (var t = this.getCachedEdges(), n = {}, r = [], i = 0; i < e.length; i++) n[e[i]._private.data.id] = e[i];
        for (var i = 0; i < t.length; i++)(n[t[i]._private.data.source] || n[t[i]._private.data.target]) && r.push(t[i]);
        return r
    }, t.prototype.getArrowWidth = t.prototype.getArrowHeight = function(e) {
        var t = this.arrowWidthCache = this.arrowWidthCache || {},
            n = t[e];
        return n ? n : (n = Math.max(Math.pow(13.37 * e, .9), 29), t[e] = n, n)
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.drawEdge = function(e, n, r) {
        var i = n._private.rscratch,
            a = t.usePaths();
        if (!i.badBezier) {
            var o = n._private.style;
            if (!(o.width.pxValue <= 0)) {
                var s = o["overlay-padding"].pxValue,
                    l = o["overlay-opacity"].value,
                    u = o["overlay-color"].value;
                if (r) {
                    if (0 === l) return;
                    this.strokeStyle(e, u[0], u[1], u[2], l), e.lineCap = "round", "self" != n._private.rscratch.edgeType || a || (e.lineCap = "butt")
                } else {
                    var c = o["line-color"].value;
                    this.strokeStyle(e, c[0], c[1], c[2], o.opacity.value), e.lineCap = "butt"
                }
                var d, p, h, f;
                h = d = n._private.source, f = p = n._private.target;
                var v = f._private.position,
                    g = f.width(),
                    y = f.height(),
                    m = h._private.position,
                    x = h.width(),
                    b = h.height(),
                    w = o.width.pxValue + (r ? 2 * s : 0),
                    _ = r ? "solid" : o["line-style"].value;
                if (e.lineWidth = w, "haystack" !== i.edgeType, "haystack" === i.edgeType) {
                    var E = o["haystack-radius"].value,
                        S = E / 2;
                    this.drawStyledEdge(n, e, i.haystackPts = [i.source.x * x * S + m.x, i.source.y * b * S + m.y, i.target.x * g * S + v.x, i.target.y * y * S + v.y], _, w)
                } else if ("self" === i.edgeType) {
                    var C = n._private.rscratch,
                        T = [C.startX, C.startY, C.cp2ax, C.cp2ay, C.selfEdgeMidX, C.selfEdgeMidY, C.selfEdgeMidX, C.selfEdgeMidY, C.cp2cx, C.cp2cy, C.endX, C.endY],
                        C = n._private.rscratch;
                    this.drawStyledEdge(n, e, T, _, w)
                } else if ("straight" === i.edgeType) {
                    var k = p._private.position.x - d._private.position.x,
                        N = p._private.position.y - d._private.position.y,
                        D = i.endX - i.startX,
                        P = i.endY - i.startY;
                    if (0 > k * D + N * P) i.straightEdgeTooShort = !0;
                    else {
                        var C = i;
                        this.drawStyledEdge(n, e, [C.startX, C.startY, C.endX, C.endY], _, w), i.straightEdgeTooShort = !1
                    }
                } else {
                    var C = i;
                    this.drawStyledEdge(n, e, [C.startX, C.startY, C.cp2x, C.cp2y, C.endX, C.endY], _, w)
                }
                "haystack" === i.edgeType ? this.drawArrowheads(e, n, r) : i.noArrowPlacement !== !0 && void 0 !== i.startX && this.drawArrowheads(e, n, r)
            }
        }
    }, t.prototype.drawStyledEdge = function(e, n, r, i) {
        var a, o = e._private.rscratch,
            s = n,
            l = !1,
            u = t.usePaths();
        if (u) {
            for (var c = r, d = o.pathCacheKey && c.length === o.pathCacheKey.length, p = d, h = 0; p && h < c.length; h++) o.pathCacheKey[h] !== c[h] && (p = !1);
            p ? (a = n = o.pathCache, l = !0) : (a = n = new Path2D, o.pathCacheKey = c, o.pathCache = a)
        }
        switch (i) {
            case "dotted":
                s.setLineDash([1, 1]);
                break;
            case "dashed":
                s.setLineDash([6, 3]);
                break;
            case "solid":
                s.setLineDash([])
        }
        l || (n.beginPath && n.beginPath(), n.moveTo(r[0], r[1]), 6 === r.length ? n.quadraticCurveTo(r[2], r[3], r[4], r[5]) : 12 === r.length ? (n.quadraticCurveTo(r[2], r[3], r[4], r[5]), n.quadraticCurveTo(r[8], r[9], r[10], r[11])) : n.lineTo(r[2], r[3])), n = s, u ? n.stroke(a) : n.stroke(), n.setLineDash([])
    }, t.prototype.drawArrowheads = function(e, t, n) {
        function r(n, r, i, a, o) {
            var s = v[n + "-arrow-shape"].value;
            if ("none" !== s) {
                var l = e.globalCompositeOperation;
                e.globalCompositeOperation = "destination-out", d.fillStyle(e, 255, 255, 255, 1);
                var u = "hollow" === v[n + "-arrow-fill"].value ? "both" : "filled",
                    c = v[n + "-arrow-fill"].value;
                "half-triangle-overshot" === s && (c = "hollow", u = "hollow"), d.drawArrowShape(t, n, e, u, v.width.pxValue, v[n + "-arrow-shape"].value, r, i, a, o), e.globalCompositeOperation = l;
                var p = v[n + "-arrow-color"].value;
                d.fillStyle(e, p[0], p[1], p[2], v.opacity.value), d.drawArrowShape(t, n, e, c, v.width.pxValue, v[n + "-arrow-shape"].value, r, i, a, o)
            }
        }
        if (!n) {
            var i, a, o, s, l, u, c = t._private.rscratch,
                d = this,
                p = "haystack" === c.edgeType,
                h = t.source().position(),
                f = t.target().position();
            p ? (o = c.haystackPts[0], s = c.haystackPts[1], l = c.haystackPts[2], u = c.haystackPts[3]) : (o = c.arrowStartX, s = c.arrowStartY, l = c.arrowEndX, u = c.arrowEndY);
            var v = t._private.style;
            i = o - h.x, a = s - h.y, p || isNaN(o) || isNaN(s) || isNaN(i) || isNaN(a) || r("source", o, s, i, a);
            var g = c.midX,
                y = c.midY;
            p && (g = (o + l) / 2, y = (s + u) / 2), i = o - l, a = s - u, "self" === c.edgeType && (i = 1, a = -1), isNaN(g) || isNaN(y) || r("mid-target", g, y, i, a), i *= -1, a *= -1, isNaN(g) || isNaN(y) || r("mid-source", g, y, i, a), i = l - f.x, a = u - f.y, p || isNaN(l) || isNaN(u) || isNaN(i) || isNaN(a) || r("target", l, u, i, a)
        }
    }, t.prototype.drawArrowShape = function(e, n, r, i, a, o, s, l, u, c) {
        var d, p = t.usePaths(),
            h = e._private.rscratch,
            f = !1,
            v = r,
            g = {
                x: s,
                y: l
            },
            y = Math.asin(c / Math.sqrt(u * u + c * c));
        0 > u ? y += Math.PI / 2 : y = -(Math.PI / 2 + y);
        var m = this.getArrowWidth(a),
            x = t.arrowShapes[o];
        if (p) {
            var b = m + "$" + o + "$" + y + "$" + s + "$" + l;
            h.arrowPathCacheKey = h.arrowPathCacheKey || {}, h.arrowPathCache = h.arrowPathCache || {};
            var w = h.arrowPathCacheKey[n] === b;
            w ? (d = r = h.arrowPathCache[n], f = !0) : (d = r = new Path2D, h.arrowPathCacheKey[n] = b, h.arrowPathCache[n] = d)
        }
        r.beginPath && r.beginPath(), f || x.draw(r, m, y, g), !x.leavePathOpen && r.closePath && r.closePath(), r = v, ("filled" === i || "both" === i) && (p ? r.fill(d) : r.fill()), ("hollow" === i || "both" === i) && (r.lineWidth = x.matchEdgeWidth ? a : 1, r.lineJoin = "miter", p ? r.stroke(d) : r.stroke())
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.getCachedImage = function(e, t) {
        var n = this,
            r = n.imageCache = n.imageCache || {};
        if (r[e] && r[e].image) return r[e].image;
        var i = r[e] = r[e] || {},
            a = i.image = new Image;
        return a.addEventListener("load", t), a.src = e, a
    }, t.prototype.drawInscribedImage = function(e, n, r) {
        var i = this,
            a = r._private.position.x,
            o = r._private.position.y,
            s = r._private.style,
            l = s["background-fit"].value,
            u = s["background-position-x"],
            c = s["background-position-y"],
            d = s["background-repeat"].value,
            p = r.width(),
            h = r.height(),
            f = r._private.rscratch,
            v = s["background-clip"].value,
            g = "node" === v,
            y = s["background-image-opacity"].value,
            m = n.width,
            x = n.height;
        if ("contain" === l) {
            var b = Math.min(p / m, h / x);
            m *= b, x *= b
        } else if ("cover" === l) {
            var b = Math.max(p / m, h / x);
            m *= b, x *= b
        }
        var w = a - p / 2;
        w += "%" === u.units ? (p - m) * u.value / 100 : u.pxValue;
        var _ = o - h / 2;
        _ += "%" === c.units ? (h - x) * c.value / 100 : c.pxValue, f.pathCache && (w -= a, _ -= o, a = 0, o = 0);
        var E = e.globalAlpha;
        if (e.globalAlpha = y, "no-repeat" === d) g && (e.save(), f.pathCache ? e.clip(f.pathCache) : (t.nodeShapes[i.getNodeShape(r)].drawPath(e, a, o, p, h), e.clip())), e.drawImage(n, 0, 0, n.width, n.height, w, _, m, x), g && e.restore();
        else {
            var S = e.createPattern(n, d);
            e.fillStyle = S, t.nodeShapes[i.getNodeShape(r)].drawPath(e, a, o, p, h), e.translate(w, _), e.fill(), e.translate(-w, -_)
        }
        e.globalAlpha = E
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.drawEdgeText = function(e, t) {
        var n = t._private.style.content.strValue;
        if (!(!n || n.match(/^\s+$/) || this.hideEdgesOnViewport && (this.dragData.didDrag || this.pinching || this.hoverData.dragging || this.data.wheel || this.swipePanning))) {
            var r = t._private.style["font-size"].pxValue * t.cy().zoom(),
                i = t._private.style["min-zoomed-font-size"].pxValue;
            if (!(i > r)) {
                e.textAlign = "center", e.textBaseline = "middle";
                var a = t._private.rscratch;
                this.drawText(e, t, a.labelX, a.labelY)
            }
        }
    }, t.prototype.drawNodeText = function(e, t) {
        var n = t._private.style.content.strValue;
        if (n && !n.match(/^\s+$/)) {
            var r = t._private.style["font-size"].pxValue * t.cy().zoom(),
                i = t._private.style["min-zoomed-font-size"].pxValue;
            if (!(i > r)) {
                var a = t._private.style["text-halign"].strValue,
                    o = t._private.style["text-valign"].strValue,
                    s = t._private.rscratch;
                switch (a) {
                    case "left":
                        e.textAlign = "right";
                        break;
                    case "right":
                        e.textAlign = "left";
                        break;
                    default:
                        e.textAlign = "center"
                }
                switch (o) {
                    case "top":
                        e.textBaseline = "bottom";
                        break;
                    case "bottom":
                        e.textBaseline = "top";
                        break;
                    default:
                        e.textBaseline = "middle"
                }
                this.drawText(e, t, s.labelX, s.labelY)
            }
        }
    }, t.prototype.getFontCache = function(e) {
        var t;
        this.fontCaches = this.fontCaches || [];
        for (var n = 0; n < this.fontCaches.length; n++)
            if (t = this.fontCaches[n], t.context === e) return t;
        return t = {
            context: e
        }, this.fontCaches.push(t), t
    }, t.prototype.setupTextStyle = function(e, t) {
        var n = t.effectiveOpacity(),
            r = t._private.style,
            i = r["font-style"].strValue,
            a = r["font-size"].pxValue + "px",
            o = r["font-family"].strValue,
            s = r["font-weight"].strValue,
            l = r["text-opacity"].value * r.opacity.value * n,
            u = r.color.value,
            c = r["text-outline-color"].value,
            d = t._private.fontKey,
            p = this.getFontCache(e);
        p.key !== d && (e.font = i + " " + s + " " + a + " " + o, p.key = d);
        var h = String(r.content.value),
            f = r["text-transform"].value;
        return "none" == f || ("uppercase" == f ? h = h.toUpperCase() : "lowercase" == f && (h = h.toLowerCase())), e.lineJoin = "round", this.fillStyle(e, u[0], u[1], u[2], l), this.strokeStyle(e, c[0], c[1], c[2], l), h
    }, t.prototype.drawText = function(e, t, n, r) {
        var i = t._private.style,
            a = t.effectiveOpacity();
        if (0 !== a) {
            var o = this.setupTextStyle(e, t);
            if (null != o && !isNaN(n) && !isNaN(r)) {
                var s = 2 * i["text-outline-width"].value;
                s > 0 && (e.lineWidth = s, e.strokeText(o, n, r)), e.fillText(o, n, r)
            }
        }
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.drawNode = function(e, n, r) {
        var i, a, o, s = this,
            l = n._private.style,
            u = n._private.rscratch,
            c = t.usePaths(),
            d = e,
            p = !1,
            h = l["overlay-padding"].pxValue,
            f = l["overlay-opacity"].value,
            v = l["overlay-color"].value;
        if (!r || 0 !== f) {
            var g = n.effectiveOpacity();
            if (0 !== g)
                if (i = this.getNodeWidth(n), a = this.getNodeHeight(n), e.lineWidth = l["border-width"].pxValue, void 0 !== r && r) f > 0 && (this.fillStyle(e, v[0], v[1], v[2], f), t.nodeShapes.roundrectangle.drawPath(e, n._private.position.x, n._private.position.y, i + 2 * h, a + 2 * h), e.fill());
                else {
                    var y = l["background-color"].value,
                        m = l["border-color"].value,
                        x = l["border-style"].value;
                    switch (this.fillStyle(e, y[0], y[1], y[2], l["background-opacity"].value * l.opacity.value * g), this.strokeStyle(e, m[0], m[1], m[2], l["border-opacity"].value * l.opacity.value * g), e.lineJoin = "miter", x) {
                        case "dotted":
                            e.setLineDash([1, 1]);
                            break;
                        case "dashed":
                            e.setLineDash([4, 2]);
                            break;
                        case "solid":
                        case "double":
                            e.setLineDash([])
                    }
                    var b = l["background-image"].value[2] || l["background-image"].value[1],
                        w = l.shape.strValue,
                        _ = n._private.position;
                    if (c) {
                        var E = w + "$" + i + "$" + a;
                        e.translate(_.x, _.y), u.pathCacheKey === E ? (o = e = u.pathCache, p = !0) : (o = e = new Path2D, u.pathCacheKey = E, u.pathCache = o)
                    }
                    if (!p) {
                        var S = _;
                        c && (S = {
                            x: 0,
                            y: 0
                        }), t.nodeShapes[this.getNodeShape(n)].drawPath(e, S.x, S.y, i, a)
                    }
                    if (e = d, c ? e.fill(o) : e.fill(), void 0 !== b) {
                        var C = this.getCachedImage(b, function() {
                            s.data.canvasNeedsRedraw[t.NODE] = !0, s.data.canvasNeedsRedraw[t.DRAG] = !0, s.redraw()
                        });
                        C.complete && this.drawInscribedImage(e, C, n)
                    }
                    var T = l["background-blacken"].value,
                        k = l["border-width"].pxValue;
                    if (this.hasPie(n) && (this.drawPie(e, n), (0 !== T || 0 !== k) && (c || t.nodeShapes[this.getNodeShape(n)].drawPath(e, _.x, _.y, i, a))), T > 0 ? (this.fillStyle(e, 0, 0, 0, T), c ? e.fill(o) : e.fill()) : 0 > T && (this.fillStyle(e, 255, 255, 255, -T), c ? e.fill(o) : e.fill()), k > 0 && (c ? e.stroke(o) : e.stroke(), "double" === x)) {
                        e.lineWidth = l["border-width"].pxValue / 3;
                        var N = e.globalCompositeOperation;
                        e.globalCompositeOperation = "destination-out", c ? e.stroke(o) : e.stroke(), e.globalCompositeOperation = N
                    }
                    c && e.translate(-_.x, -_.y), e.setLineDash([])
                }
        }
    }, t.prototype.hasPie = function(e) {
        return e = e[0], e._private.hasPie
    }, t.prototype.drawPie = function(n, r) {
        r = r[0];
        var i = r._private.style["pie-size"],
            a = this.getNodeWidth(r),
            o = this.getNodeHeight(r),
            s = r._private.position.x,
            l = r._private.position.y,
            u = Math.min(a, o) / 2,
            c = 0,
            d = t.usePaths();
        d && (s = 0, l = 0), "%" === i.units ? u = u * i.value / 100 : void 0 !== i.pxValue && (u = i.pxValue / 2);
        for (var p = 1; p <= e.style.pieBackgroundN; p++) {
            var h = r._private.style["pie-" + p + "-background-size"].value,
                f = r._private.style["pie-" + p + "-background-color"].value,
                v = r._private.style["pie-" + p + "-background-opacity"].value,
                g = h / 100,
                y = 1.5 * Math.PI + 2 * Math.PI * c,
                m = 2 * Math.PI * g,
                x = y + m;
            0 === h || c >= 1 || c + g > 1 || (n.beginPath(), n.moveTo(s, l), n.arc(s, l, u, y, x), n.closePath(), this.fillStyle(n, f[0], f[1], f[2], v), n.fill(), c += g)
        }
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.getPixelRatio = function() {
        var e = this.data.contexts[0];
        if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
        var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / t
    }, t.prototype.paintCache = function(e) {
        for (var t, n = this.paintCaches = this.paintCaches || [], r = !0, i = 0; i < n.length; i++)
            if (t = n[i], t.context === e) {
                r = !1;
                break
            }
        return r && (t = {
            context: e
        }, n.push(t)), t
    }, t.prototype.fillStyle = function(e, t, n, r, i) {
        e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")"
    }, t.prototype.strokeStyle = function(e, t, n, r, i) {
        e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + i + ")"
    }, t.prototype.matchCanvasSize = function(e) {
        var n, r = this.data,
            i = e.clientWidth,
            a = e.clientHeight,
            o = this.getPixelRatio(),
            s = i * o,
            l = a * o;
        if (s !== this.canvasWidth || l !== this.canvasHeight) {
            this.fontCaches = null;
            var u = r.canvasContainer;
            u.style.width = i + "px", u.style.height = a + "px";
            for (var c = 0; c < t.CANVAS_LAYERS; c++) n = r.canvases[c], (n.width !== s || n.height !== l) && (n.width = s, n.height = l, n.style.width = i + "px", n.style.height = a + "px");
            for (var c = 0; c < t.BUFFER_COUNT; c++) n = r.bufferCanvases[c], (n.width !== s || n.height !== l) && (n.width = s, n.height = l, n.style.width = i + "px", n.style.height = a + "px");
            this.textureMult = 1, 1 >= o && (n = r.bufferCanvases[t.TEXTURE_BUFFER], this.textureMult = 2, n.width = s * this.textureMult, n.height = l * this.textureMult), this.canvasWidth = s, this.canvasHeight = l
        }
    }, t.prototype.renderTo = function(e, t, n, r) {
        this.redraw({
            forcedContext: e,
            forcedZoom: t,
            forcedPan: n,
            drawAllLayers: !0,
            forcedPxRatio: r
        })
    }, t.prototype.timeToRender = function() {
        return this.redrawTotalTime / this.redrawCount
    }, t.minRedrawLimit = 1e3 / 60, t.maxRedrawLimit = 1e3, t.motionBlurDelay = 100, t.prototype.redraw = function(n) {
        function r() {
            function n(e, t) {
                if (e.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === t) {
                    var n = e.globalCompositeOperation;
                    e.globalCompositeOperation = "destination-out", u.fillStyle(e, 255, 255, 255, .666), e.fillRect(0, 0, u.canvasWidth, u.canvasHeight), e.globalCompositeOperation = n
                } else i || void 0 !== t && !t || e.clearRect(0, 0, u.canvasWidth, u.canvasHeight);
                a || (e.translate(b.x, b.y), e.scale(m, m)), l && e.translate(l.x, l.y), s && e.scale(s, s)
            }

            function r(e, t) {
                for (var n = e.eles, r = 0; r < n.length; r++) {
                    var i = n[r];
                    i.isNode() ? (u.drawNode(t, i), L || u.drawNodeText(t, i), u.drawNode(t, i, !0)) : B || (u.drawEdge(t, i), L || u.drawEdgeText(t, i), u.drawEdge(t, i, !0))
                }
            }
            var v = u.getCachedEdges(),
                g = d.style()._private.coreStyle,
                y = d.zoom(),
                m = void 0 !== s ? s : y,
                x = d.pan(),
                b = {
                    x: x.x,
                    y: x.y
                };
            l && (b = l), m *= c, b.x *= c, b.y *= c;
            var _ = {
                    drag: {
                        nodes: [],
                        edges: [],
                        eles: []
                    },
                    nondrag: {
                        nodes: [],
                        edges: [],
                        eles: []
                    }
                },
                E = u.textureOnViewport && !i && (u.pinching || u.hoverData.dragging || u.swipePanning || u.data.wheelZooming);
            if (E) {
                var S;
                if (!u.textureCache) {
                    u.textureCache = {}, S = u.textureCache.bb = d.elements().boundingBox(), u.textureCache.texture = u.data.bufferCanvases[t.TEXTURE_BUFFER];
                    var C = u.data.bufferContexts[t.TEXTURE_BUFFER];
                    C.setTransform(1, 0, 0, 1, 0, 0), C.clearRect(0, 0, u.canvasWidth * u.textureMult, u.canvasHeight * u.textureMult), u.redraw({
                        forcedContext: C,
                        drawOnlyNodeLayer: !0,
                        forcedPxRatio: c * u.textureMult
                    });
                    var T = u.textureCache.viewport = {
                        zoom: d.zoom(),
                        pan: d.pan(),
                        width: u.canvasWidth,
                        height: u.canvasHeight
                    };
                    T.mpan = {
                        x: (0 - T.pan.x) / T.zoom,
                        y: (0 - T.pan.y) / T.zoom
                    }
                }
                h[t.DRAG] = !1, h[t.NODE] = !1;
                var k = p.contexts[t.NODE],
                    N = u.textureCache.texture,
                    T = u.textureCache.viewport;
                S = u.textureCache.bb, k.setTransform(1, 0, 0, 1, 0, 0), k.clearRect(0, 0, T.width, T.height);
                var D = g["outside-texture-bg-color"].value,
                    P = g["outside-texture-bg-opacity"].value;
                u.fillStyle(k, D[0], D[1], D[2], P), k.fillRect(0, 0, T.width, T.height);
                var y = d.zoom();
                n(k, !1), k.clearRect(T.mpan.x, T.mpan.y, T.width / T.zoom / c, T.height / T.zoom / c), k.drawImage(N, T.mpan.x, T.mpan.y, T.width / T.zoom / c, T.height / T.zoom / c)
            } else u.textureOnViewport && !i && (u.textureCache = null);
            var M = u.pinching || u.hoverData.dragging || u.swipePanning || u.data.wheelZooming || u.hoverData.draggingEles,
                B = u.hideEdgesOnViewport && M,
                L = u.hideLabelsOnViewport && M;
            if (h[t.DRAG] || h[t.NODE] || a || o) {
                B || u.findEdgeControlPoints(v);
                for (var A = u.getCachedZSortedEles(), z = d.extent(), I = 0; I < A.length; I++) {
                    var O, R = A[I],
                        S = i ? null : R.boundingBox(),
                        X = i ? !0 : e.math.boundingBoxesIntersect(z, S);
                    X && (O = R._private.rscratch.inDragLayer ? _.drag : _.nondrag, O.eles.push(R))
                }
            }
            var j = h[t.DRAG] && !h[t.NODE] && f && !u.clearedNodeLayerForMotionBlur;
            if (j && (u.clearedNodeLayerForMotionBlur = !0), h[t.NODE] || a || o || j) {
                var k = i || p.contexts[t.NODE];
                n(k, f && !j ? "motionBlur" : void 0), r(_.nondrag, k), a || (h[t.NODE] = !1)
            }
            if (!o && (h[t.DRAG] || a)) {
                var k = i || p.contexts[t.DRAG];
                n(k, f ? "motionBlur" : void 0), r(_.drag, k), a || (h[t.DRAG] = !1)
            }
            if (u.showFps || !o && h[t.SELECT_BOX] && !a) {
                var k = i || p.contexts[t.SELECT_BOX];
                if (n(k), 1 == p.select[4]) {
                    var y = p.cy.zoom(),
                        q = g["selection-box-border-width"].value / y;
                    k.lineWidth = q, k.fillStyle = "rgba(" + g["selection-box-color"].value[0] + "," + g["selection-box-color"].value[1] + "," + g["selection-box-color"].value[2] + "," + g["selection-box-opacity"].value + ")", k.fillRect(p.select[0], p.select[1], p.select[2] - p.select[0], p.select[3] - p.select[1]), q > 0 && (k.strokeStyle = "rgba(" + g["selection-box-border-color"].value[0] + "," + g["selection-box-border-color"].value[1] + "," + g["selection-box-border-color"].value[2] + "," + g["selection-box-opacity"].value + ")", k.strokeRect(p.select[0], p.select[1], p.select[2] - p.select[0], p.select[3] - p.select[1]))
                }
                if (p.bgActivePosistion) {
                    var y = p.cy.zoom(),
                        V = p.bgActivePosistion;
                    k.fillStyle = "rgba(" + g["active-bg-color"].value[0] + "," + g["active-bg-color"].value[1] + "," + g["active-bg-color"].value[2] + "," + g["active-bg-opacity"].value + ")", k.beginPath(), k.arc(V.x, V.y, g["active-bg-size"].pxValue / y, 0, 2 * Math.PI), k.fill()
                }
                var F = u.averageRedrawTime;
                if (u.showFps && F) {
                    F = Math.round(F);
                    var Y = Math.round(1e3 / F);
                    k.setTransform(1, 0, 0, 1, 0, 0), k.fillStyle = "rgba(255, 0, 0, 0.75)", k.strokeStyle = "rgba(255, 0, 0, 0.75)", k.lineWidth = 1, k.fillText("1 frame = " + F + " ms = " + Y + " fps", 0, 20);
                    var H = 60;
                    k.strokeRect(0, 30, 250, 20), k.fillRect(0, 30, 250 * Math.min(Y / H, 1), 20)
                }
                a || (h[t.SELECT_BOX] = !1)
            }
            var W = +new Date;
            void 0 === u.averageRedrawTime && (u.averageRedrawTime = W - w), void 0 === u.redrawCount && (u.redrawCount = 0), u.redrawCount++, void 0 === u.redrawTotalTime && (u.redrawTotalTime = 0), u.redrawTotalTime += W - w, u.lastRedrawTime = W - w, u.averageRedrawTime = u.averageRedrawTime / 2 + (W - w) / 2, u.currentlyDrawing = !1, u.clearingMotionBlur && (u.clearingMotionBlur = !1, u.motionBlurCleared = !0, u.motionBlur = !0), f && (u.motionBlurTimeout = setTimeout(function() {
                u.motionBlurTimeout = null, u.clearedNodeLayerForMotionBlur = !1, u.motionBlur = !1, u.clearingMotionBlur = !0, h[t.NODE] = !0, h[t.DRAG] = !0, u.redraw()
            }, t.motionBlurDelay))
        }
        n = n || {};
        var i = n.forcedContext,
            a = n.drawAllLayers,
            o = n.drawOnlyNodeLayer,
            s = n.forcedZoom,
            l = n.forcedPan,
            u = this,
            c = void 0 === n.forcedPxRatio ? this.getPixelRatio() : n.forcedPxRatio,
            d = u.data.cy,
            p = u.data,
            h = p.canvasNeedsRedraw,
            f = void 0 !== n.motionBlur ? n.motionBlur : u.motionBlur;
        f = f && !i && u.motionBlurEnabled, u.motionBlurTimeout && clearTimeout(u.motionBlurTimeout), this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = null, void 0 === this.averageRedrawTime && (this.averageRedrawTime = 0);
        var v = t.minRedrawLimit,
            g = t.maxRedrawLimit,
            y = this.averageRedrawTime;
        y = v > y ? v : y, y = g > y ? y : g, void 0 === this.lastDrawTime && (this.lastDrawTime = 0);
        var m = +new Date,
            x = m - this.lastDrawTime,
            b = x >= y;
        if (!i) {
            if (!b || this.currentlyDrawing) return void(this.redrawTimeout = setTimeout(function() {
                u.redraw()
            }, y));
            this.lastDrawTime = m, this.currentlyDrawing = !0
        }
        var w = +new Date;
        i ? r() : e.util.requestAnimationFrame(r), i || u.initrender || (u.initrender = !0, d.trigger("initrender"))
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.drawPolygonPath = function(e, t, n, r, i, a) {
        var o = r / 2,
            s = i / 2;
        e.beginPath && e.beginPath(), e.moveTo(t + o * a[0], n + s * a[1]);
        for (var l = 1; l < a.length / 2; l++) e.lineTo(t + o * a[2 * l], n + s * a[2 * l + 1]);
        e.closePath()
    }, t.prototype.drawPolygon = function(e, t, n, r, i, a) {
        this.drawPolygonPath(e, t, n, r, i, a), e.fill()
    }, t.prototype.drawRoundRectanglePath = function(t, n, r, i, a) {
        var o = i / 2,
            s = a / 2,
            l = e.math.getRoundRectangleRadius(i, a);
        t.beginPath && t.beginPath(), t.moveTo(n, r - s), t.arcTo(n + o, r - s, n + o, r, l), t.arcTo(n + o, r + s, n, r + s, l), t.arcTo(n - o, r + s, n - o, r, l), t.arcTo(n - o, r - s, n, r - s, l), t.lineTo(n, r - s), t.closePath()
    }, t.prototype.drawRoundRectangle = function(e, t, n, r, i, a) {
        this.drawRoundRectanglePath(e, t, n, r, i, a), e.fill()
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.createBuffer = function(e, t) {
        var n = document.createElement("canvas");
        return n.width = e, n.height = t, [n, n.getContext("2d")]
    }, t.prototype.bufferCanvasImage = function(e) {
        var t = this.data,
            n = t.cy,
            r = n.elements().boundingBox(),
            i = e.full ? Math.ceil(r.w) : this.data.container.clientWidth,
            a = e.full ? Math.ceil(r.h) : this.data.container.clientHeight,
            o = 1;
        void 0 !== e.scale && (i *= e.scale, a *= e.scale, o = e.scale);
        var s = document.createElement("canvas");
        s.width = i, s.height = a, s.style.width = i + "px", s.style.height = a + "px";
        var l = s.getContext("2d");
        if (i > 0 && a > 0)
            if (l.clearRect(0, 0, i, a), e.bg && (l.fillStyle = e.bg, l.rect(0, 0, i, a), l.fill()), l.globalCompositeOperation = "source-over", e.full) this.redraw({
                forcedContext: l,
                drawAllLayers: !0,
                forcedZoom: o,
                forcedPan: {
                    x: -r.x1 * o,
                    y: -r.y1 * o
                },
                forcedPxRatio: 1
            });
            else {
                var u = n.pan(),
                    c = {
                        x: u.x * o,
                        y: u.y * o
                    },
                    d = n.zoom() * o;
                this.redraw({
                    forcedContext: l,
                    drawAllLayers: !0,
                    forcedZoom: d,
                    forcedPan: c,
                    forcedPxRatio: 1
                })
            }
        return s
    }, t.prototype.png = function(e) {
        return this.bufferCanvasImage(e).toDataURL("image/png")
    }
}(cytoscape),
function(e) {
    "use strict";
    var t = e("renderer", "canvas");
    t.prototype.registerBinding = function(e, t, n, r) {
        this.bindings.push({
            target: e,
            event: t,
            handler: n,
            useCapture: r
        }), e.addEventListener(t, n, r)
    }, t.prototype.nodeIsDraggable = function(e) {
        return 0 !== e._private.style.opacity.value && "visible" == e._private.style.visibility.value && "element" == e._private.style.display.value && !e.locked() && e.grabbable() ? !0 : !1
    }, t.prototype.load = function() {
        var n = this,
            r = function(e) {
                var t;
                if (e.addToList && n.data.cy.hasCompoundNodes()) {
                    if (!e.addToList.hasId) {
                        e.addToList.hasId = {};
                        for (var r = 0; r < e.addToList.length; r++) {
                            var i = e.addToList[r];
                            e.addToList.hasId[i.id()] = !0
                        }
                    }
                    t = e.addToList.hasId
                }
                return t || {}
            },
            i = function(e, t) {
                if (e._private.cy.hasCompoundNodes())
                    for (var n = r(t), i = e.descendants(), a = 0; a < i.size(); a++) {
                        var o = i[a],
                            s = o._private;
                        t.inDragLayer && (s.rscratch.inDragLayer = !0), t.addToList && !n[o.id()] && (t.addToList.push(o), n[o.id()] = !0, s.grabbed = !0);
                        for (var l = s.edges, u = 0; t.inDragLayer && u < l.length; u++) l[u]._private.rscratch.inDragLayer = !0
                    }
            },
            a = function(e, t) {
                var n = e._private,
                    a = r(t);
                t.inDragLayer && (n.rscratch.inDragLayer = !0), t.addToList && !a[e.id()] && (t.addToList.push(e), a[e.id()] = !0, n.grabbed = !0);
                for (var s = n.edges, l = 0; t.inDragLayer && l < s.length; l++) s[l]._private.rscratch.inDragLayer = !0;
                i(e, t), o(e, {
                    inDragLayer: !0
                })
            },
            o = function(e, t) {
                var n = e;
                if (e._private.cy.hasCompoundNodes()) {
                    for (; n.parent().nonempty();) n = n.parent()[0];
                    if (n != e) {
                        for (var i = n.descendants().add(n).not(e).not(e.descendants()), a = i.connectedEdges(), o = r(t), s = 0; s < i.size(); s++) void 0 !== t.inDragLayer && (i[s]._private.rscratch.inDragLayer = t.inDragLayer), t.addToList && !o[i[s].id()] && (t.addToList.push(i[s]), o[i[s].id()] = !0, i[s]._private.grabbed = !0);
                        for (var l = 0; void 0 !== t.inDragLayer && l < a.length; l++) a[l]._private.rscratch.inDragLayer = t.inDragLayer
                    }
                }
            };
        n.registerBinding(n.data.container, "DOMNodeRemoved", function() {
            n.destroy()
        }), n.registerBinding(window, "resize", e.util.debounce(function() {
            n.invalidateContainerClientCoordsCache(), n.matchCanvasSize(n.data.container), n.data.canvasNeedsRedraw[t.NODE] = !0, n.redraw()
        }, 100));
        for (var s = function(e) {
                n.registerBinding(e, "scroll", function() {
                    n.invalidateContainerClientCoordsCache()
                })
            }, l = n.data.cy.container(); s(l), l.parentNode;) l = l.parentNode;
        n.registerBinding(n.data.container, "contextmenu", function(e) {
            e.preventDefault()
        });
        var u = function() {
            return 0 !== n.data.select[4]
        };
        n.registerBinding(n.data.container, "mousedown", function(r) {
            r.preventDefault(), n.hoverData.capture = !0, n.hoverData.which = r.which;
            var i = n.data.cy,
                o = n.projectIntoViewport(r.clientX, r.clientY),
                s = n.data.select,
                l = n.findNearestElement(o[0], o[1], !0),
                u = n.dragData.possibleDragElements,
                c = new e.Event("grab");
            if (3 == r.which) {
                n.hoverData.cxtStarted = !0;
                var d = new e.Event(r, {
                    type: "cxttapstart",
                    cyPosition: {
                        x: o[0],
                        y: o[1]
                    }
                });
                l ? (l.activate(), l.trigger(d), n.hoverData.down = l) : i.trigger(d), n.hoverData.downTime = (new Date).getTime(), n.hoverData.cxtDragged = !1
            } else if (1 == r.which) {
                if (l && l.activate(), null != l) {
                    if (n.nodeIsDraggable(l)) {
                        if (l.isNode() && !l.selected()) u = n.dragData.possibleDragElements = [], a(l, {
                            addToList: u
                        }), l.trigger(c);
                        else if (l.isNode() && l.selected()) {
                            u = n.dragData.possibleDragElements = [];
                            for (var p = i.$(function() {
                                    return this.isNode() && this.selected()
                                }), h = 0; h < p.length; h++) n.nodeIsDraggable(p[h]) && a(p[h], {
                                addToList: u
                            });
                            l.trigger(c)
                        }
                        n.data.canvasNeedsRedraw[t.NODE] = !0, n.data.canvasNeedsRedraw[t.DRAG] = !0
                    }
                    l.trigger(new e.Event(r, {
                        type: "mousedown",
                        cyPosition: {
                            x: o[0],
                            y: o[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "tapstart",
                        cyPosition: {
                            x: o[0],
                            y: o[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "vmousedown",
                        cyPosition: {
                            x: o[0],
                            y: o[1]
                        }
                    }))
                } else null == l && i.trigger(new e.Event(r, {
                    type: "mousedown",
                    cyPosition: {
                        x: o[0],
                        y: o[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "tapstart",
                    cyPosition: {
                        x: o[0],
                        y: o[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "vmousedown",
                    cyPosition: {
                        x: o[0],
                        y: o[1]
                    }
                }));
                if (n.hoverData.down = l, n.hoverData.downTime = (new Date).getTime(), null == l || l.isEdge()) {
                    s[4] = 1;
                    var f = Math.max(0, t.panOrBoxSelectDelay - (+new Date - n.hoverData.downTime));
                    clearTimeout(n.bgActiveTimeout), n.bgActiveTimeout = setTimeout(function() {
                        l && l.unactivate(), n.data.bgActivePosistion = {
                            x: o[0],
                            y: o[1]
                        }, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.redraw()
                    }, f)
                }
            }
            s[0] = s[2] = o[0], s[1] = s[3] = o[1]
        }, !1), n.registerBinding(window, "mousemove", e.util.throttle(function(r) {
            var i = !1,
                o = n.hoverData.capture;
            if (!o) {
                var s = n.findContainerClientCoords();
                if (!(r.clientX > s[0] && r.clientX < s[0] + n.canvasWidth && r.clientY > s[1] && r.clientY < s[1] + n.canvasHeight)) return;
                for (var l = n.data.container, u = r.target, c = u.parentNode, d = !1; c;) {
                    if (c === l) {
                        d = !0;
                        break
                    }
                    c = c.parentNode
                }
                if (!d) return
            }
            var p = n.data.cy,
                h = n.projectIntoViewport(r.clientX, r.clientY),
                f = n.data.select,
                v = null;
            n.hoverData.draggingEles || (v = n.findNearestElement(h[0], h[1], !0));
            var g = n.hoverData.last,
                y = n.hoverData.down,
                m = [h[0] - f[2], h[1] - f[3]],
                x = n.dragData.possibleDragElements;
            if (i = !0, null != v ? v.trigger(new e.Event(r, {
                    type: "mousemove",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "vmousemove",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "tapdrag",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })) : null == v && p.trigger(new e.Event(r, {
                    type: "mousemove",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "vmousemove",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "tapdrag",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })), 3 === n.hoverData.which) {
                var b = new e.Event(r, {
                    type: "cxtdrag",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                });
                y ? y.trigger(b) : p.trigger(b), n.hoverData.cxtDragged = !0, n.hoverData.cxtOver && v === n.hoverData.cxtOver || (n.hoverData.cxtOver && n.hoverData.cxtOver.trigger(new e.Event(r, {
                    type: "cxtdragout",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })), n.hoverData.cxtOver = v, v && v.trigger(new e.Event(r, {
                    type: "cxtdragover",
                    cyPosition: {
                        x: h[0],
                        y: h[1]
                    }
                })))
            } else if (n.hoverData.dragging) {
                if (i = !0, p.panningEnabled() && p.userPanningEnabled()) {
                    var w = {
                        x: m[0] * p.zoom(),
                        y: m[1] * p.zoom()
                    };
                    p.panBy(w)
                }
                h = n.projectIntoViewport(r.clientX, r.clientY)
            } else if (1 == f[4] && (null == y || y.isEdge()) && (!p.boxSelectionEnabled() || +new Date - n.hoverData.downTime >= t.panOrBoxSelectDelay) && Math.abs(f[3] - f[1]) + Math.abs(f[2] - f[0]) < 4 && p.panningEnabled() && p.userPanningEnabled()) n.hoverData.dragging = !0, f[4] = 0;
            else {
                if (p.boxSelectionEnabled() && Math.pow(f[2] - f[0], 2) + Math.pow(f[3] - f[1], 2) > 7 && f[4] && (clearTimeout(n.bgActiveTimeout), n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.redraw()), y && y.isEdge() && y.active() && y.unactivate(), v != g && (g && (g.trigger(new e.Event(r, {
                        type: "mouseout",
                        cyPosition: {
                            x: h[0],
                            y: h[1]
                        }
                    })), g.trigger(new e.Event(r, {
                        type: "tapdragout",
                        cyPosition: {
                            x: h[0],
                            y: h[1]
                        }
                    }))), v && (v.trigger(new e.Event(r, {
                        type: "mouseover",
                        cyPosition: {
                            x: h[0],
                            y: h[1]
                        }
                    })), v.trigger(new e.Event(r, {
                        type: "tapdragover",
                        cyPosition: {
                            x: h[0],
                            y: h[1]
                        }
                    }))), n.hoverData.last = v), y && y.isNode() && n.nodeIsDraggable(y)) {
                    n.dragData.didDrag || (n.data.canvasNeedsRedraw[t.NODE] = !0), n.dragData.didDrag = !0;
                    for (var _ = [], E = 0; E < x.length; E++) {
                        var S = x[E];
                        if (n.hoverData.draggingEles || a(S, {
                                inDragLayer: !0
                            }), S.isNode() && n.nodeIsDraggable(S) && S.grabbed()) {
                            var C = S._private.position;
                            _.push(S), e.is.number(m[0]) && e.is.number(m[1]) && (C.x += m[0], C.y += m[1])
                        }
                    }
                    n.hoverData.draggingEles = !0;
                    var T = new e.Collection(p, _);
                    T.updateCompoundBounds(), T.trigger("position drag"), n.data.canvasNeedsRedraw[t.DRAG] = !0, n.redraw()
                }
                i = !0
            }
            return f[2] = h[0], f[3] = h[1], i ? (r.stopPropagation && r.stopPropagation(), r.preventDefault && r.preventDefault(), !1) : void 0
        }, 1e3 / 30), !1), n.registerBinding(window, "mouseup", function(r) {
            var i = n.hoverData.capture;
            if (i) {
                n.hoverData.capture = !1;
                var a = n.data.cy,
                    s = n.projectIntoViewport(r.clientX, r.clientY),
                    l = n.data.select,
                    u = n.findNearestElement(s[0], s[1], !0),
                    c = n.dragData.possibleDragElements,
                    d = n.hoverData.down,
                    p = r.shiftKey;
                if (n.data.bgActivePosistion && (n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.redraw()), n.data.bgActivePosistion = void 0, clearTimeout(n.bgActiveTimeout), n.hoverData.cxtStarted = !1, n.hoverData.draggingEles = !1, d && d.unactivate(), 3 === n.hoverData.which) {
                    var h = new e.Event(r, {
                        type: "cxttapend",
                        cyPosition: {
                            x: s[0],
                            y: s[1]
                        }
                    });
                    if (d ? d.trigger(h) : a.trigger(h), !n.hoverData.cxtDragged) {
                        var f = new e.Event(r, {
                            type: "cxttap",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        });
                        d ? d.trigger(f) : a.trigger(f)
                    }
                    n.hoverData.cxtDragged = !1, n.hoverData.which = null
                } else {
                    if (null != d || n.dragData.didDrag || Math.pow(l[2] - l[0], 2) + Math.pow(l[3] - l[1], 2) > 7 && l[4] || n.hoverData.dragging || (a.$(function() {
                            return this.selected()
                        }).unselect(), c.length > 0 && (n.data.canvasNeedsRedraw[t.NODE] = !0), n.dragData.possibleDragElements = c = []), null != u ? u.trigger(new e.Event(r, {
                            type: "mouseup",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tapend",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vmouseup",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })) : null == u && a.trigger(new e.Event(r, {
                            type: "mouseup",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tapend",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vmouseup",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })), Math.pow(l[2] - l[0], 2) + Math.pow(l[3] - l[1], 2) === 0 && (null != u ? u.trigger(new e.Event(r, {
                            type: "click",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tap",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vclick",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })) : null == u && a.trigger(new e.Event(r, {
                            type: "click",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tap",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vclick",
                            cyPosition: {
                                x: s[0],
                                y: s[1]
                            }
                        }))), u != d || n.dragData.didDrag || null != u && u._private.selectable && ("additive" === a.selectionType() || p ? u.selected() ? u.unselect() : u.select() : p || (a.$(":selected").not(u).unselect(), u.select()), n.data.canvasNeedsRedraw[t.NODE] = !0), a.boxSelectionEnabled() && Math.pow(l[2] - l[0], 2) + Math.pow(l[3] - l[1], 2) > 7 && l[4]) {
                        var v = [],
                            g = n.getAllInBox(l[0], l[1], l[2], l[3]);
                        n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, g.length > 0 && (n.data.canvasNeedsRedraw[t.NODE] = !0);
                        for (var y = 0; y < g.length; y++) g[y]._private.selectable && v.push(g[y]);
                        var m = new e.Collection(a, v);
                        "additive" === a.selectionType() ? m.select() : (p || a.$(":selected").not(m).unselect(), m.select()), n.redraw()
                    }
                    if (n.hoverData.dragging && (n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.redraw()), n.hoverData.dragging = !1, !l[4]) {
                        n.data.canvasNeedsRedraw[t.DRAG] = !0, n.data.canvasNeedsRedraw[t.NODE] = !0;
                        for (var y = 0; y < c.length; y++)
                            if ("nodes" === c[y]._private.group) {
                                c[y]._private.rscratch.inDragLayer = !1, c[y]._private.grabbed = !1;
                                for (var x = c[y]._private.edges, b = 0; b < x.length; b++) x[b]._private.rscratch.inDragLayer = !1;
                                o(c[y], {
                                    inDragLayer: !1
                                })
                            } else "edges" === c[y]._private.group && (c[y]._private.rscratch.inDragLayer = !1);
                        d && d.trigger("free")
                    }
                }
                l[4] = 0, n.hoverData.down = null, n.dragData.didDrag = !1
            }
        }, !1);
        var c = function(e) {
            var r = n.data.cy,
                i = n.projectIntoViewport(e.clientX, e.clientY),
                a = [i[0] * r.zoom() + r.pan().x, i[1] * r.zoom() + r.pan().y];
            if (n.hoverData.draggingEles || n.hoverData.dragging || n.hoverData.cxtStarted || u()) return void e.preventDefault();
            if (r.panningEnabled() && r.userPanningEnabled() && r.zoomingEnabled() && r.userZoomingEnabled()) {
                e.preventDefault(), n.data.wheelZooming = !0, clearTimeout(n.data.wheelTimeout), n.data.wheelTimeout = setTimeout(function() {
                    n.data.wheelZooming = !1, n.data.canvasNeedsRedraw[t.NODE] = !0, n.redraw()
                }, 150);
                var o = e.wheelDeltaY / 1e3 || e.wheelDelta / 1e3 || e.detail / -32 || -e.deltaY / 500;
                o *= n.wheelSensitivity, r.zoom({
                    level: r.zoom() * Math.pow(10, o),
                    renderedPosition: {
                        x: a[0],
                        y: a[1]
                    }
                })
            }
        };
        n.registerBinding(n.data.container, "wheel", c, !0), n.registerBinding(n.data.container, "mousewheel", c, !0), n.registerBinding(n.data.container, "DOMMouseScroll", c, !0), n.registerBinding(n.data.container, "MozMousePixelScroll", function() {}, !1), n.registerBinding(n.data.container, "mouseout", function(t) {
            var r = n.projectIntoViewport(t.clientX, t.clientY);
            n.data.cy.trigger(new e.Event(t, {
                type: "mouseout",
                cyPosition: {
                    x: r[0],
                    y: r[1]
                }
            }))
        }, !1), n.registerBinding(n.data.container, "mouseover", function(t) {
            var r = n.projectIntoViewport(t.clientX, t.clientY);
            n.data.cy.trigger(new e.Event(t, {
                type: "mouseover",
                cyPosition: {
                    x: r[0],
                    y: r[1]
                }
            }))
        }, !1);
        var d, p, h, f, v, g, y, m, x, b, w, _, E = function(e, t, n, r) {
            return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t))
        };
        n.registerBinding(n.data.container, "touchstart", function(r) {
            clearTimeout(this.threeFingerSelectTimeout), r.target !== n.data.link && r.preventDefault(), n.touchData.capture = !0, n.data.bgActivePosistion = void 0;
            var i = n.data.cy,
                o = n.getCachedNodes(),
                s = n.getCachedEdges(),
                l = n.touchData.now,
                u = n.touchData.earlier;
            if (r.touches[0]) {
                var c = n.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                l[0] = c[0], l[1] = c[1]
            }
            if (r.touches[1]) {
                var c = n.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                l[2] = c[0], l[3] = c[1]
            }
            if (r.touches[2]) {
                var c = n.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                l[4] = c[0], l[5] = c[1]
            }
            if (r.touches[1]) {
                var S = function(e) {
                    for (var t = 0; t < e.length; t++) e[t]._private.grabbed = !1, e[t]._private.rscratch.inDragLayer = !1, e[t].active() && e[t].unactivate()
                };
                S(o), S(s);
                var C = n.findContainerClientCoords();
                m = C[0], x = C[1], b = C[2], w = C[3], d = r.touches[0].clientX - m, p = r.touches[0].clientY - x, h = r.touches[1].clientX - m, f = r.touches[1].clientY - x, _ = d >= 0 && b >= d && h >= 0 && b >= h && p >= 0 && w >= p && f >= 0 && w >= f;
                var T = i.pan(),
                    k = i.zoom();
                if (v = E(d, p, h, f), g = [(d + h) / 2, (p + f) / 2], y = [(g[0] - T.x) / k, (g[1] - T.y) / k], 200 > v && !r.touches[2]) {
                    var N = n.findNearestElement(l[0], l[1], !0),
                        D = n.findNearestElement(l[2], l[3], !0);
                    return N && N.isNode() ? (N.activate().trigger(new e.Event(r, {
                        type: "cxttapstart",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })), n.touchData.start = N) : D && D.isNode() ? (D.activate().trigger(new e.Event(r, {
                        type: "cxttapstart",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })), n.touchData.start = D) : (i.trigger(new e.Event(r, {
                        type: "cxttapstart",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })), n.touchData.start = null), n.touchData.start && (n.touchData.start._private.grabbed = !1), n.touchData.cxt = !0, n.touchData.cxtDragged = !1, n.data.bgActivePosistion = void 0, void n.redraw()
                }
            }
            if (r.touches[2]);
            else if (r.touches[1]);
            else if (r.touches[0]) {
                var P = n.findNearestElement(l[0], l[1], !0);
                if (null != P) {
                    if (P.activate(), n.touchData.start = P, P.isNode() && n.nodeIsDraggable(P)) {
                        var M = n.dragData.touchDragEles = [];
                        if (n.data.canvasNeedsRedraw[t.NODE] = !0, n.data.canvasNeedsRedraw[t.DRAG] = !0, P.selected())
                            for (var B = i.$(function() {
                                    return this.isNode() && this.selected()
                                }), L = 0; L < B.length; L++) {
                                var A = B[L];
                                n.nodeIsDraggable(A) && a(A, {
                                    addToList: M
                                })
                            } else a(P, {
                                addToList: M
                            });
                        P.trigger("grab")
                    }
                    P.trigger(new e.Event(r, {
                        type: "touchstart",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "tapstart",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "vmousdown",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    }))
                }
                null == P && (i.trigger(new e.Event(r, {
                    type: "touchstart",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "tapstart",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })).trigger(new e.Event(r, {
                    type: "vmousedown",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), n.data.bgActivePosistion = {
                    x: c[0],
                    y: c[1]
                }, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.redraw());
                for (var z = 0; z < l.length; z++) u[z] = l[z], n.touchData.startPosition[z] = l[z];
                n.touchData.singleTouchMoved = !1, n.touchData.singleTouchStartTime = +new Date, setTimeout(function() {
                    n.touchData.singleTouchMoved === !1 && +new Date - n.touchData.singleTouchStartTime > 250 && (n.touchData.start ? n.touchData.start.trigger(new e.Event(r, {
                        type: "taphold",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })) : (n.data.cy.trigger(new e.Event(r, {
                        type: "taphold",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    })), i.$(":selected").unselect()))
                }, 1e3)
            }
        }, !1), n.registerBinding(window, "touchmove", e.util.throttle(function(r) {
            var i = n.data.select,
                o = n.touchData.capture;
            o && r.preventDefault();
            var s = n.data.cy,
                l = n.touchData.now,
                u = n.touchData.earlier;
            if (r.touches[0]) {
                var c = n.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                l[0] = c[0], l[1] = c[1]
            }
            if (r.touches[1]) {
                var c = n.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                l[2] = c[0], l[3] = c[1]
            }
            if (r.touches[2]) {
                var c = n.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                l[4] = c[0], l[5] = c[1]
            }
            for (var g = [], b = 0; b < l.length; b++) g[b] = l[b] - u[b];
            if (o && n.touchData.cxt) {
                var w = r.touches[0].clientX - m,
                    S = r.touches[0].clientY - x,
                    C = r.touches[1].clientX - m,
                    T = r.touches[1].clientY - x,
                    k = E(w, S, C, T),
                    N = k / v;
                if (N >= 1.5 || k >= 150) {
                    n.touchData.cxt = !1, n.touchData.start && (n.touchData.start.unactivate(), n.touchData.start = null), n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0;
                    var D = new e.Event(r, {
                        type: "cxttapend",
                        cyPosition: {
                            x: l[0],
                            y: l[1]
                        }
                    });
                    n.touchData.start ? n.touchData.start.trigger(D) : s.trigger(D)
                }
            }
            if (o && n.touchData.cxt) {
                var D = new e.Event(r, {
                    type: "cxtdrag",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                });
                n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.touchData.start ? n.touchData.start.trigger(D) : s.trigger(D), n.touchData.start && (n.touchData.start._private.grabbed = !1), n.touchData.cxtDragged = !0;
                var P = n.findNearestElement(l[0], l[1], !0);
                n.touchData.cxtOver && P === n.touchData.cxtOver || (n.touchData.cxtOver && n.touchData.cxtOver.trigger(new e.Event(r, {
                    type: "cxtdragout",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), n.touchData.cxtOver = P, P && P.trigger(new e.Event(r, {
                    type: "cxtdragover",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })))
            } else if (o && r.touches[2] && s.boxSelectionEnabled()) n.data.bgActivePosistion = void 0, clearTimeout(this.threeFingerSelectTimeout), this.lastThreeTouch = +new Date, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, i && 0 !== i.length && void 0 !== i[0] ? (i[2] = (l[0] + l[2] + l[4]) / 3, i[3] = (l[1] + l[3] + l[5]) / 3) : (i[0] = (l[0] + l[2] + l[4]) / 3, i[1] = (l[1] + l[3] + l[5]) / 3, i[2] = (l[0] + l[2] + l[4]) / 3 + 1, i[3] = (l[1] + l[3] + l[5]) / 3 + 1), i[4] = 1, n.redraw();
            else if (o && r.touches[1] && s.zoomingEnabled() && s.panningEnabled() && s.userZoomingEnabled() && s.userPanningEnabled()) {
                n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0;
                var M = n.dragData.touchDragEles;
                if (M) {
                    n.data.canvasNeedsRedraw[t.DRAG] = !0;
                    for (var B = 0; B < M.length; B++) M[B]._private.grabbed = !1, M[B]._private.rscratch.inDragLayer = !1
                }
                var w = r.touches[0].clientX - m,
                    S = r.touches[0].clientY - x,
                    C = r.touches[1].clientX - m,
                    T = r.touches[1].clientY - x,
                    k = E(w, S, C, T),
                    N = k / v;
                if (1 != N && _) {
                    var L = w - d,
                        A = S - p,
                        z = C - h,
                        I = T - f,
                        O = (L + z) / 2,
                        R = (A + I) / 2,
                        X = s.zoom(),
                        j = X * N,
                        q = s.pan(),
                        V = y[0] * X + q.x,
                        F = y[1] * X + q.y,
                        Y = {
                            x: -j / X * (V - q.x - O) + V,
                            y: -j / X * (F - q.y - R) + F
                        };
                    if (n.touchData.start) {
                        var M = n.dragData.touchDragEles;
                        if (M)
                            for (var B = 0; B < M.length; B++) M[B]._private.grabbed = !1, M[B]._private.rscratch.inDragLayer = !1;
                        n.touchData.start._private.active = !1, n.touchData.start._private.grabbed = !1, n.touchData.start._private.rscratch.inDragLayer = !1, n.data.canvasNeedsRedraw[t.DRAG] = !0, n.touchData.start.trigger("free").trigger("unactivate")
                    }
                    s.viewport({
                        zoom: j,
                        pan: Y,
                        cancelOnFailedZoom: !0
                    }), v = k, d = w, p = S, h = C, f = T, n.pinching = !0
                }
                if (r.touches[0]) {
                    var c = n.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                    l[0] = c[0], l[1] = c[1]
                }
                if (r.touches[1]) {
                    var c = n.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                    l[2] = c[0], l[3] = c[1]
                }
                if (r.touches[2]) {
                    var c = n.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                    l[4] = c[0], l[5] = c[1]
                }
            } else if (r.touches[0]) {
                var H = n.touchData.start,
                    W = n.touchData.last,
                    P = P || n.findNearestElement(l[0], l[1], !0);
                if (null != H && "nodes" == H._private.group && n.nodeIsDraggable(H)) {
                    for (var M = n.dragData.touchDragEles, $ = 0; $ < M.length; $++) {
                        var Z = M[$];
                        if (n.nodeIsDraggable(Z) && Z.isNode() && Z.grabbed()) {
                            n.dragData.didDrag = !0;
                            var U = Z._private.position;
                            U.x += g[0], U.y += g[1], n.hoverData.draggingEles || a(Z, {
                                inDragLayer: !0
                            })
                        }
                    }
                    var G = new e.Collection(s, Z);
                    G.updateCompoundBounds(), G.trigger("position drag"), n.hoverData.draggingEles = !0, n.data.canvasNeedsRedraw[t.DRAG] = !0, n.touchData.startPosition[0] == u[0] && n.touchData.startPosition[1] == u[1] && (n.data.canvasNeedsRedraw[t.NODE] = !0), n.redraw()
                }
                null != H && (H.trigger(new e.Event(r, {
                    type: "touchmove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), H.trigger(new e.Event(r, {
                    type: "tapdrag",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), H.trigger(new e.Event(r, {
                    type: "vmousemove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                }))), null == H && (null != P && (P.trigger(new e.Event(r, {
                    type: "touchmove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), P.trigger(new e.Event(r, {
                    type: "tapdrag",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), P.trigger(new e.Event(r, {
                    type: "vmousemove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                }))), null == P && (s.trigger(new e.Event(r, {
                    type: "touchmove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), s.trigger(new e.Event(r, {
                    type: "tapdrag",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), s.trigger(new e.Event(r, {
                    type: "vmousemove",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })))), P != W && (W && W.trigger(new e.Event(r, {
                    type: "tapdragout",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                })), P && P.trigger(new e.Event(r, {
                    type: "tapdragover",
                    cyPosition: {
                        x: l[0],
                        y: l[1]
                    }
                }))), n.touchData.last = P;
                for (var B = 0; B < l.length; B++) l[B] && n.touchData.startPosition[B] && Math.abs(l[B] - n.touchData.startPosition[B]) > 4 && (n.touchData.singleTouchMoved = !0);
                if (o && (null == H || H.isEdge()) && s.panningEnabled() && s.userPanningEnabled()) {
                    H && (H.unactivate(), n.data.bgActivePosistion || (n.data.bgActivePosistion = {
                        x: l[0],
                        y: l[1]
                    }), n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, n.touchData.start = null), s.panBy({
                        x: g[0] * s.zoom(),
                        y: g[1] * s.zoom()
                    }), n.swipePanning = !0;
                    var c = n.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                    l[0] = c[0], l[1] = c[1]
                }
            }
            for (var b = 0; b < l.length; b++) u[b] = l[b]
        }, 1e3 / 30), !1), n.registerBinding(window, "touchcancel", function() {
            var e = n.touchData.start;
            n.touchData.capture = !1, e && e.unactivate()
        }), n.registerBinding(window, "touchend", function(r) {
            var i = n.touchData.start,
                a = n.touchData.capture;
            if (a) {
                n.touchData.capture = !1, r.preventDefault();
                var s = n.data.select;
                n.swipePanning = !1, n.hoverData.draggingEles = !1;
                var l = n.data.cy,
                    u = n.touchData.now,
                    c = n.touchData.earlier;
                if (r.touches[0]) {
                    var d = n.projectIntoViewport(r.touches[0].clientX, r.touches[0].clientY);
                    u[0] = d[0], u[1] = d[1]
                }
                if (r.touches[1]) {
                    var d = n.projectIntoViewport(r.touches[1].clientX, r.touches[1].clientY);
                    u[2] = d[0], u[3] = d[1]
                }
                if (r.touches[2]) {
                    var d = n.projectIntoViewport(r.touches[2].clientX, r.touches[2].clientY);
                    u[4] = d[0], u[5] = d[1]
                }
                i && i.unactivate();
                var p;
                if (n.touchData.cxt) {
                    if (p = new e.Event(r, {
                            type: "cxttapend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        }), i ? i.trigger(p) : l.trigger(p), !n.touchData.cxtDragged) {
                        var h = new e.Event(r, {
                            type: "cxttap",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        });
                        i ? i.trigger(h) : l.trigger(h)
                    }
                    return n.touchData.start && (n.touchData.start._private.grabbed = !1), n.touchData.cxt = !1, n.touchData.start = null, void n.redraw()
                }
                if (!r.touches[2] && l.boxSelectionEnabled()) {
                    clearTimeout(this.threeFingerSelectTimeout);
                    var f = [],
                        v = n.getAllInBox(s[0], s[1], s[2], s[3]);
                    s[0] = void 0, s[1] = void 0, s[2] = void 0, s[3] = void 0, s[4] = 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0;
                    for (var g = 0; g < v.length; g++) v[g]._private.selectable && f.push(v[g]);
                    var y = new e.Collection(l, f);
                    "single" === l.selectionType() && l.$(":selected").not(y).unselect(), y.select(), y.length > 0 ? n.data.canvasNeedsRedraw[t.NODE] = !0 : n.redraw()
                }
                r.touches.length < 2 && (n.pinching = !1, n.data.canvasNeedsRedraw[t.NODE] = !0, n.redraw());
                var m = !1;
                if (null != i && (i._private.active = !1, m = !0, i.unactivate()), r.touches[2]) n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0;
                else if (r.touches[1]);
                else if (r.touches[0]);
                else if (!r.touches[0]) {
                    if (n.data.bgActivePosistion = void 0, n.data.canvasNeedsRedraw[t.SELECT_BOX] = !0, null != i) {
                        i._private.grabbed && (i._private.grabbed = !1, i.trigger("free"), i._private.rscratch.inDragLayer = !1);
                        for (var x = i._private.edges, b = 0; b < x.length; b++) x[b]._private.rscratch.inDragLayer = !1;
                        if (o(i, !1), i.selected())
                            for (var w = l.$("node:selected"), _ = 0; _ < w.length; _++) {
                                var E = w[_];
                                E._private.rscratch.inDragLayer = !1, E._private.grabbed = !1;
                                for (var x = E._private.edges, b = 0; b < x.length; b++) x[b]._private.rscratch.inDragLayer = !1;
                                o(E, !1)
                            }
                        n.data.canvasNeedsRedraw[t.DRAG] = !0, n.data.canvasNeedsRedraw[t.NODE] = !0, i.trigger(new e.Event(r, {
                            type: "touchend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tapend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vmouseup",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })), i.unactivate(), n.touchData.start = null
                    } else {
                        var S = n.findNearestElement(u[0], u[1], !0);
                        null != S && S.trigger(new e.Event(r, {
                            type: "touchend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tapend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vmouseup",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })), null == S && l.trigger(new e.Event(r, {
                            type: "touchend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "tapend",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        })).trigger(new e.Event(r, {
                            type: "vmouseup",
                            cyPosition: {
                                x: u[0],
                                y: u[1]
                            }
                        }))
                    }
                    null != i && !n.dragData.didDrag && i._private.selectable && Math.sqrt(Math.pow(n.touchData.startPosition[0] - u[0], 2) + Math.pow(n.touchData.startPosition[1] - u[1], 2)) < 6 && ("single" === l.selectionType() ? (l.$(":selected").not(i).unselect(), i.select()) : i.selected() ? i.unselect() : i.select(), m = !0, n.data.canvasNeedsRedraw[t.NODE] = !0), n.touchData.singleTouchMoved === !1 && (i ? i.trigger(new e.Event(r, {
                        type: "tap",
                        cyPosition: {
                            x: u[0],
                            y: u[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "vclick",
                        cyPosition: {
                            x: u[0],
                            y: u[1]
                        }
                    })) : l.trigger(new e.Event(r, {
                        type: "tap",
                        cyPosition: {
                            x: u[0],
                            y: u[1]
                        }
                    })).trigger(new e.Event(r, {
                        type: "vclick",
                        cyPosition: {
                            x: u[0],
                            y: u[1]
                        }
                    }))), n.touchData.singleTouchMoved = !0
                }
                for (var b = 0; b < u.length; b++) c[b] = u[b];
                n.dragData.didDrag = !1, m && i && i.updateStyle(!1)
            }
        }, !1)
    }
}(cytoscape),
function(e) {
    "use strict";
    for (var t = e("renderer", "canvas"), n = t.prototype, r = t.usePaths(), i = t.nodeShapes = {}, a = Math.sin(0), o = Math.cos(0), s = {}, l = {}, u = .1, c = 0 * Math.PI; c < 2 * Math.PI; c += u) s[c] = Math.sin(c), l[c] = Math.cos(c);
    i.ellipse = {
        draw: function(e, t, n, r, a) {
            i.ellipse.drawPath(e, t, n, r, a), e.fill()
        },
        drawPath: function(e, t, n, i, c) {
            if (r) {
                e.beginPath && e.beginPath();
                for (var d, p, h = i / 2, f = c / 2, v = 0 * Math.PI; v < 2 * Math.PI; v += u) d = t - h * s[v] * a + h * l[v] * o, p = n + f * l[v] * a + f * s[v] * o, 0 === v ? e.moveTo(d, p) : e.lineTo(d, p);
                e.closePath()
            } else e.beginPath && e.beginPath(), e.translate(t, n), e.scale(i / 2, c / 2), e.arc(0, 0, 1, 0, 2 * Math.PI * .999, !1), e.closePath(), e.scale(2 / i, 2 / c), e.translate(-t, -n)
        },
        intersectLine: function(t, n, r, i, a, o, s) {
            var l = e.math.intersectLineEllipse(a, o, t, n, r / 2 + s, i / 2 + s);
            return l
        },
        intersectBox: function(t, n, r, i, a, o, s, l, u) {
            return e.math.boxIntersectEllipse(t, n, r, i, u, a, o, s, l)
        },
        checkPoint: function(e, t, n, r, i, a, o) {
            return e -= a, t -= o, e /= r / 2 + n, t /= i / 2 + n, Math.pow(e, 2) + Math.pow(t, 2) <= 1
        }
    }, i.triangle = {
        points: e.math.generateUnitNgonPointsFitToSquare(3, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.triangle.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.triangle.points)
        },
        intersectLine: function(t, n, r, a, o, s, l) {
            return e.math.polygonIntersectLine(o, s, i.triangle.points, t, n, r / 2, a / 2, l)
        },
        intersectBox: function(t, n, r, a, o, s, l, u, c) {
            var d = i.triangle.points;
            return e.math.boxIntersectPolygon(t, n, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.triangle.points, s, l, a, o, [0, -1], r)
        }
    }, i.square = {
        points: e.math.generateUnitNgonPointsFitToSquare(4, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.square.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.square.points)
        },
        intersectLine: function(t, n, r, a, o, s, l) {
            return e.math.polygonIntersectLine(o, s, i.square.points, t, n, r / 2, a / 2, l)
        },
        intersectBox: function(t, n, r, a, o, s, l, u, c) {
            var d = i.square.points;
            return e.math.boxIntersectPolygon(t, n, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.square.points, s, l, a, o, [0, -1], r)
        }
    }, i.rectangle = i.square, i.octogon = {}, i.roundrectangle = {
        points: e.math.generateUnitNgonPointsFitToSquare(4, 0),
        draw: function(e, t, r, i, a) {
            n.drawRoundRectangle(e, t, r, i, a, 10)
        },
        drawPath: function(e, t, r, i, a) {
            n.drawRoundRectanglePath(e, t, r, i, a, 10)
        },
        intersectLine: function(t, n, r, i, a, o, s) {
            return e.math.roundRectangleIntersectLine(a, o, t, n, r, i, s)
        },
        intersectBox: function(t, n, r, i, a, o, s, l, u) {
            return e.math.roundRectangleIntersectBox(t, n, r, i, a, o, s, l, u)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            var u = e.math.getRoundRectangleRadius(a, o);
            if (e.math.pointInsidePolygon(t, n, i.roundrectangle.points, s, l, a, o - 2 * u, [0, -1], r)) return !0;
            if (e.math.pointInsidePolygon(t, n, i.roundrectangle.points, s, l, a - 2 * u, o, [0, -1], r)) return !0;
            var c = function(e, t, n, r, i, a, o) {
                return e -= n, t -= r, e /= i / 2 + o, t /= a / 2 + o, Math.pow(e, 2) + Math.pow(t, 2) <= 1
            };
            return c(t, n, s - a / 2 + u, l - o / 2 + u, 2 * u, 2 * u, r) ? !0 : c(t, n, s + a / 2 - u, l - o / 2 + u, 2 * u, 2 * u, r) ? !0 : c(t, n, s + a / 2 - u, l + o / 2 - u, 2 * u, 2 * u, r) ? !0 : c(t, n, s - a / 2 + u, l + o / 2 - u, 2 * u, 2 * u, r) ? !0 : !1
        }
    }, i.pentagon = {
        points: e.math.generateUnitNgonPointsFitToSquare(5, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.pentagon.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.pentagon.points)
        },
        intersectLine: function(e, t, r, a, o, s, l) {
            return n.polygonIntersectLine(o, s, i.pentagon.points, e, t, r / 2, a / 2, l)
        },
        intersectBox: function(t, n, r, a, o, s, l, u, c) {
            var d = i.pentagon.points;
            return e.math.boxIntersectPolygon(t, n, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.pentagon.points, s, l, a, o, [0, -1], r)
        }
    }, i.hexagon = {
        points: e.math.generateUnitNgonPointsFitToSquare(6, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.hexagon.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.hexagon.points)
        },
        intersectLine: function(t, n, r, a, o, s, l) {
            return e.math.polygonIntersectLine(o, s, i.hexagon.points, t, n, r / 2, a / 2, l)
        },
        intersectBox: function(t, n, r, a, o, s, l, u, c) {
            var d = i.hexagon.points;
            return e.math.boxIntersectPolygon(t, n, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.hexagon.points, s, l, a, o, [0, -1], r)
        }
    }, i.heptagon = {
        points: e.math.generateUnitNgonPointsFitToSquare(7, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.heptagon.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.heptagon.points)
        },
        intersectLine: function(e, t, r, a, o, s, l) {
            return n.polygonIntersectLine(o, s, i.heptagon.points, e, t, r / 2, a / 2, l)
        },
        intersectBox: function(e, t, r, a, o, s, l, u, c) {
            var d = i.heptagon.points;
            return n.boxIntersectPolygon(e, t, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.heptagon.points, s, l, a, o, [0, -1], r)
        }
    }, i.octagon = {
        points: e.math.generateUnitNgonPointsFitToSquare(8, 0),
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.octagon.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.octagon.points)
        },
        intersectLine: function(e, t, r, a, o, s, l) {
            return n.polygonIntersectLine(o, s, i.octagon.points, e, t, r / 2, a / 2, l)
        },
        intersectBox: function(e, t, r, a, o, s, l, u, c) {
            var d = i.octagon.points;
            return n.boxIntersectPolygon(e, t, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.octagon.points, s, l, a, o, [0, -1], r)
        }
    };
    var d = new Array(20),
        p = e.math.generateUnitNgonPoints(5, 0),
        h = e.math.generateUnitNgonPoints(5, Math.PI / 5),
        f = .5 * (3 - Math.sqrt(5));
    f *= 1.57;
    for (var c = 0; c < h.length / 2; c++) h[2 * c] *= f, h[2 * c + 1] *= f;
    for (var c = 0; 5 > c; c++) d[4 * c] = p[2 * c], d[4 * c + 1] = p[2 * c + 1], d[4 * c + 2] = h[2 * c], d[4 * c + 3] = h[2 * c + 1];
    d = e.math.fitPolygonToSquare(d), i.star5 = i.star = {
        points: d,
        draw: function(e, t, r, a, o) {
            n.drawPolygon(e, t, r, a, o, i.star5.points)
        },
        drawPath: function(e, t, r, a, o) {
            n.drawPolygonPath(e, t, r, a, o, i.star5.points)
        },
        intersectLine: function(e, t, r, a, o, s, l) {
            return n.polygonIntersectLine(o, s, i.star5.points, e, t, r / 2, a / 2, l)
        },
        intersectBox: function(e, t, r, a, o, s, l, u, c) {
            var d = i.star5.points;
            return n.boxIntersectPolygon(e, t, r, a, d, o, s, l, u, [0, -1], c)
        },
        checkPoint: function(t, n, r, a, o, s, l) {
            return e.math.pointInsidePolygon(t, n, i.star5.points, s, l, a, o, [0, -1], r)
        }
    }
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this._private = {}, this._private.options = e.util.extend({}, n, t)
    }
    var n = {
        animate: !0,
        maxSimulationTime: 4e3,
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        ungrabifyWhileSimulating: !1,
        ready: void 0,
        stop: void 0,
        repulsion: void 0,
        stiffness: void 0,
        friction: void 0,
        gravity: !0,
        fps: void 0,
        precision: void 0,
        nodeMass: void 0,
        edgeLength: void 0,
        stepSize: .1,
        stableEnergy: function(e) {
            var t = e;
            return t.max <= .5 || t.mean <= .3
        },
        infinite: !1
    };
    t.prototype.run = function() {
        var t = this,
            n = this._private.options;
        return e.util.require("arbor", function(r) {
            function i(e, t) {
                return null == t ? void 0 : "function" == typeof t ? t.apply(e, [e._private.data, {
                    nodes: u.length,
                    edges: c.length,
                    element: e
                }]) : t
            }

            function a(e) {
                if (!e.isFullAutoParent()) {
                    var t = e._private.data.id,
                        r = i(e, n.nodeMass),
                        a = e._private.locked,
                        o = e.position(),
                        s = h.fromScreen({
                            x: o.x,
                            y: o.y
                        });
                    e.scratch().arbor = h.addNode(t, {
                        element: e,
                        mass: r,
                        fixed: a,
                        x: a ? s.x : void 0,
                        y: a ? s.y : void 0
                    })
                }
            }

            function o(e) {
                var t = e.source().id(),
                    r = e.target().id(),
                    a = i(e, n.edgeLength);
                e.scratch().arbor = h.addEdge(t, r, {
                    length: a
                })
            }
            var s = n.cy,
                l = n.eles,
                u = l.nodes().not(":parent"),
                c = l.edges(),
                d = e.util.makeBoundingBox(n.boundingBox ? n.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: s.width(),
                    h: s.height()
                }),
                p = !1;
            if (t.trigger({
                    type: "layoutstart",
                    layout: t
                }), void 0 !== n.liveUpdate && (n.animate = n.liveUpdate), s.nodes().size() <= 1) return n.fit && s.reset(), s.nodes().position({
                x: Math.round((d.x1 + d.x2) / 2),
                y: Math.round((d.y1 + d.y2) / 2)
            }), t.one("layoutready", n.ready), t.trigger({
                type: "layoutready",
                layout: t
            }), t.one("layoutstop", n.stop), void t.trigger({
                type: "layoutstop",
                layout: t
            });
            var h = t._private.system = r.ParticleSystem();
            h.parameters({
                repulsion: n.repulsion,
                stiffness: n.stiffness,
                friction: n.friction,
                gravity: n.gravity,
                fps: n.fps,
                dt: n.dt,
                precision: n.precision
            }), n.animate && n.fit && s.fit(d, n.padding);
            var f, v = 250,
                g = !1,
                y = +new Date,
                m = {
                    init: function() {},
                    redraw: function() {
                        var e = h.energy();
                        if (!n.infinite && null != n.stableEnergy && null != e && e.n > 0 && n.stableEnergy(e)) return void t.stop();
                        n.infinite || 1 / 0 == v || (clearTimeout(f), f = setTimeout(C, v));
                        var r = s.collection();
                        h.eachNode(function(e, t) {
                            var n = e.data,
                                i = n.element;
                            null != i && (i.locked() || i.grabbed() || (i.silentPosition({
                                x: d.x1 + t.x,
                                y: d.y1 + t.y
                            }), r.merge(i)))
                        }), n.animate && r.length > 0 && (p = !0, r.rtrigger("position"), n.fit && s.fit(n.padding), y = +new Date, p = !1), g || (g = !0, t.one("layoutready", n.ready), t.trigger({
                            type: "layoutready",
                            layout: t
                        }))
                    }
                };
            h.renderer = m, h.screenSize(d.w, d.h), h.screenPadding(n.padding, n.padding, n.padding, n.padding), h.screenStep(n.stepSize);
            var x;
            u.on("grab free position", x = function(e) {
                if (!p) {
                    var t = this.position(),
                        i = h.fromScreen(t);
                    if (i) {
                        var a = r.Point(i.x, i.y),
                            o = n.padding;
                        switch (d.x1 + o <= t.x && t.x <= d.x2 - o && d.y1 + o <= t.y && t.y <= d.y2 - o && (this.scratch().arbor.p = a), e.type) {
                            case "grab":
                                this.scratch().arbor.fixed = !0;
                                break;
                            case "free":
                                this.scratch().arbor.fixed = !1
                        }
                    }
                }
            });
            var b;
            u.on("lock unlock", b = function() {
                node.scratch().arbor.fixed = node.locked()
            });
            var w;
            l.on("remove", w = function() {});
            var _;
            s.on("add", "*", _ = function() {});
            var E;
            s.on("resize", E = function() {
                if (null == n.boundingBox && null != t._private.system) {
                    var e = s.width(),
                        r = s.height();
                    h.screenSize(e, r)
                }
            }), u.each(function(e, t) {
                a(t)
            }), c.each(function(e, t) {
                o(t)
            });
            var S = u.filter(":grabbable");
            n.ungrabifyWhileSimulating && S.ungrabify();
            var C = t._private.doneHandler = function() {
                t._private.doneHandler = null, n.animate || (n.fit && s.reset(), u.rtrigger("position")), u.off("grab free position", x), u.off("lock unlock", b), l.off("remove", w), s.off("add", "*", _), s.off("resize", E), n.ungrabifyWhileSimulating && S.grabify(), t.one("layoutstop", n.stop), t.trigger({
                    type: "layoutstop",
                    layout: t
                })
            };
            h.start(), !n.infinite && null != n.maxSimulationTime && n.maxSimulationTime > 0 && 1 / 0 !== n.maxSimulationTime && setTimeout(function() {
                t.stop()
            }, n.maxSimulationTime)
        }), this
    }, t.prototype.stop = function() {
        return null != this._private.system && this._private.system.stop(), this._private.doneHandler && this._private.doneHandler(), this
    }, e("layout", "arbor", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend({}, n, t)
    }
    var n = {
        fit: !0,
        directed: !1,
        padding: 30,
        circle: !1,
        boundingBox: void 0,
        avoidOverlap: !0,
        roots: void 0,
        maximalAdjustments: 0,
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        var t, n = this.options,
            r = n,
            i = n.cy,
            a = r.eles,
            o = a.nodes().not(":parent"),
            s = a,
            l = e.util.makeBoundingBox(r.boundingBox ? r.boundingBox : {
                x1: 0,
                y1: 0,
                w: i.width(),
                h: i.height()
            });
        if (e.is.elementOrCollection(r.roots)) t = r.roots;
        else if (e.is.array(r.roots)) {
            for (var u = [], c = 0; c < r.roots.length; c++) {
                var d = r.roots[c],
                    p = i.getElementById(d);
                u.push(p)
            }
            t = new e.Collection(i, u)
        } else if (e.is.string(r.roots)) t = i.$(r.roots);
        else if (r.directed) t = o.roots();
        else {
            for (var h = [], f = o; f.length > 0;) {
                var v = i.collection();
                a.bfs({
                    roots: f[0],
                    visit: function(e, t, n) {
                        v = v.add(n)
                    },
                    directed: !1
                }), f = f.not(v), h.push(v)
            }
            t = i.collection();
            for (var c = 0; c < h.length; c++) {
                var g = h[c],
                    y = g.maxDegree(!1),
                    m = g.filter(function() {
                        return this.degree(!1) === y
                    });
                t = t.add(m)
            }
        }
        var x = [],
            b = {},
            w = {},
            _ = {},
            E = {},
            S = {};
        s.bfs({
            roots: t,
            directed: r.directed,
            visit: function(e, t, n, r, i) {
                var a = this[0],
                    o = a.id();
                if (x[t] || (x[t] = []), x[t].push(a), b[o] = !0, w[o] = t, _[o] = i, E[o] = r, i) {
                    var s = i.id(),
                        l = S[s] = S[s] || [];
                    l.push(n)
                }
            }
        });
        for (var C = [], c = 0; c < o.length; c++) {
            var p = o[c];
            b[p.id()] || C.push(p)
        }
        for (var T = 3 * C.length, k = 0; 0 !== C.length && T > k;) {
            for (var N = C.shift(), D = N.neighborhood().nodes(), P = !1, c = 0; c < D.length; c++) {
                var M = w[D[c].id()];
                if (void 0 !== M) {
                    x[M].push(N), P = !0;
                    break
                }
            }
            P || C.push(N), k++
        }
        for (; 0 !== C.length;) {
            var N = C.shift(),
                P = !1;
            P || (0 === x.length && x.push([]), x[0].push(N))
        }
        var B = function() {
            for (var e = 0; e < x.length; e++)
                for (var t = x[e], n = 0; n < t.length; n++) {
                    var r = t[n];
                    r._private.scratch.breadthfirst = {
                        depth: e,
                        index: n
                    }
                }
        };
        B();
        for (var L = function(e) {
                for (var t, n = e.connectedEdges(function() {
                        return this.data("target") === e.id()
                    }), r = e._private.scratch.breadthfirst, i = 0, a = 0; a < n.length; a++) {
                    var o = n[a],
                        s = o.source()[0],
                        l = s._private.scratch.breadthfirst;
                    r.depth <= l.depth && i < l.depth && (i = l.depth, t = s)
                }
                return t
            }, A = 0; A < r.maximalAdjustments; A++) {
            for (var z = x.length, I = [], c = 0; z > c; c++)
                for (var M = x[c], O = M.length, R = 0; O > R; R++) {
                    var p = M[R],
                        X = p._private.scratch.breadthfirst,
                        j = L(p);
                    j && (X.intEle = j, I.push(p))
                }
            for (var c = 0; c < I.length; c++) {
                var p = I[c],
                    X = p._private.scratch.breadthfirst,
                    j = X.intEle,
                    q = j._private.scratch.breadthfirst;
                x[X.depth].splice(X.index, 1);
                for (var V = q.depth + 1; V > x.length - 1;) x.push([]);
                x[V].push(p), X.depth = V, X.index = x[V].length - 1
            }
            B()
        }
        var F = 0;
        if (r.avoidOverlap) {
            for (var c = 0; c < o.length; c++) {
                var Y = o[c].outerWidth(),
                    H = o[c].outerHeight();
                F = Math.max(F, Y, H)
            }
            F *= 1.75
        }
        for (var W = {}, $ = function(e) {
                if (W[e.id()]) return W[e.id()];
                for (var t = e._private.scratch.breadthfirst.depth, n = e.neighborhood().nodes(), r = 0, i = 0, a = 0; a < n.length; a++) {
                    var o = n[a],
                        s = o._private.scratch.breadthfirst.index,
                        l = o._private.scratch.breadthfirst.depth,
                        u = x[l].length;
                    (t > l || 0 === t) && (r += s / u, i++)
                }
                return i = Math.max(1, i), r /= i, 0 === i && (r = void 0), W[e.id()] = r, r
            }, Z = function(e, t) {
                var n = $(e),
                    r = $(t);
                return n - r
            }, U = 0; 3 > U; U++) {
            for (var c = 0; c < x.length; c++) x[c] = x[c].sort(Z);
            B()
        }
        for (var G = 0, c = 0; c < x.length; c++) G = Math.max(x[c].length, G);
        for (var K = {
                x: l.x1 + l.w / 2,
                y: l.x1 + l.h / 2
            }, J = function(e, t) {
                var n = e._private.scratch.breadthfirst,
                    i = n.depth,
                    a = n.index,
                    o = x[i].length;
                r.strictHierarchy && (o = G);
                var s = Math.max(l.w / (o + 1), F),
                    u = Math.max(l.h / (x.length + 1), F),
                    c = Math.min(l.w / 2 / x.length, l.h / 2 / x.length);
                if (c = Math.max(c, F), r.strictHierarchy && !r.circle) {
                    var d = {
                        x: K.x + (a + 1 - (o + 1) / 2) * s,
                        y: (i + 1) * u
                    };
                    if (t) return d;
                    var p = S[e.id()];
                    if (p) {
                        d.x = 0;
                        for (var h = 0; h < p.length; h++) {
                            var f = Q[p[h].id()];
                            d.x += f.x
                        }
                        d.x /= p.length
                    }
                    return d
                }
                if (r.circle) {
                    var v = c * i + c - (x.length > 0 && x[0].length <= 3 ? c / 2 : 0),
                        g = 2 * Math.PI / x[i].length * a;
                    return 0 === i && 1 === x[0].length && (v = 1), {
                        x: K.x + v * Math.cos(g),
                        y: K.y + v * Math.sin(g)
                    }
                }
                return {
                    x: K.x + (a + 1 - (o + 1) / 2) * s,
                    y: (i + 1) * u
                }
            }, Q = {}, c = x.length - 1; c >= 0; c--)
            for (var M = x[c], R = 0; R < M.length; R++) {
                var N = M[R];
                Q[N.id()] = J(N, c === x.length - 1)
            }
        return o.layoutPositions(this, r, function() {
            return Q[this.id()]
        }), this
    }, e("layout", "breadthfirst", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend({}, n, t)
    }
    var n = {
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        avoidOverlap: !0,
        radius: void 0,
        startAngle: 1.5 * Math.PI,
        counterclockwise: !1,
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        for (var t, n = this.options, r = n, i = n.cy, a = r.eles, o = a.nodes().not(":parent"), s = e.util.makeBoundingBox(r.boundingBox ? r.boundingBox : {
                x1: 0,
                y1: 0,
                w: i.width(),
                h: i.height()
            }), l = {
                x: s.x1 + s.w / 2,
                y: s.y1 + s.h / 2
            }, u = r.startAngle, c = 2 * Math.PI / o.length, d = 0, p = 0; p < o.length; p++) {
            var h = o[p].outerWidth(),
                f = o[p].outerHeight();
            d = Math.max(d, h, f)
        }
        if (t = e.is.number(r.radius) ? r.radius : o.length <= 1 ? 0 : Math.min(s.h, s.w) / 2 - d, o.length > 1 && r.avoidOverlap) {
            d *= 1.75;
            var c = 2 * Math.PI / o.length,
                v = Math.cos(c) - Math.cos(0),
                g = Math.sin(c) - Math.sin(0),
                y = Math.sqrt(d * d / (v * v + g * g));
            t = Math.max(y, t)
        }
        var m = function() {
            var e = t * Math.cos(u),
                n = t * Math.sin(u),
                i = {
                    x: l.x + e,
                    y: l.y + n
                };
            return u = r.counterclockwise ? u - c : u + c, i
        };
        return o.layoutPositions(this, r, m), this
    }, e("layout", "circle", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        animate: !0,
        refresh: 1,
        maxSimulationTime: 4e3,
        ungrabifyWhileSimulating: !1,
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        ready: function() {},
        stop: function() {},
        randomize: !1,
        avoidOverlap: !0,
        handleDisconnected: !0,
        nodeSpacing: function() {
            return 10
        },
        flow: void 0,
        alignment: void 0,
        edgeLength: void 0,
        edgeSymDiffLength: void 0,
        edgeJaccardLength: void 0,
        unconstrIter: void 0,
        userConstIter: void 0,
        allConstIter: void 0,
        infinite: !1
    };
    t.prototype.run = function() {
        var t = this,
            n = this.options;
        return e.util.require("cola", function(r) {
            var i = n.cy,
                a = n.eles,
                o = a.nodes(),
                s = a.edges(),
                l = !1,
                u = e.util.makeBoundingBox(n.boundingBox ? n.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: i.width(),
                    h: i.height()
                }),
                c = function(t, n) {
                    if (e.is.fn(t)) {
                        var r = t;
                        return r.apply(n, [n])
                    }
                    return t
                },
                d = function() {
                    for (var e = {
                            min: 1 / 0,
                            max: -1 / 0
                        }, t = {
                            min: 1 / 0,
                            max: -1 / 0
                        }, r = 0; r < o.length; r++) {
                        var a = o[r],
                            s = a._private.scratch.cola;
                        e.min = Math.min(e.min, s.x), e.max = Math.max(e.max, s.x), t.min = Math.min(t.min, s.y), t.max = Math.max(t.max, s.y)
                    }
                    o.positions(function(n, r) {
                        var i = r._private.position,
                            a = r._private.scratch.cola;
                        r.grabbed() || (i.x = u.x1 + a.x - e.min, i.y = u.y1 + a.y - t.min)
                    }), l || (h(), l = !0), n.fit && i.fit(n.padding)
                },
                p = function() {
                    t.manuallyStopped = !1, n.ungrabifyWhileSimulating && y.grabify(), o.off("grab free position", m), o.off("lock unlock", x), t.one("layoutstop", n.stop), t.trigger({
                        type: "layoutstop",
                        layout: t
                    })
                },
                h = function() {
                    t.one("layoutready", n.ready), t.trigger({
                        type: "layoutready",
                        layout: t
                    })
                },
                f = n.refresh,
                v = 1;
            n.refresh < 0 ? (v = Math.abs(n.refresh), f = 1) : f = Math.max(1, f);
            var g = r.adaptor({
                trigger: function(e) {
                    switch (e.type) {
                        case "tick":
                            n.animate && d();
                            break;
                        case "end":
                            d(), (!n.infinite || t.manuallyStopped) && p()
                    }
                },
                kick: function(t) {
                    var r = 0,
                        i = function() {
                            var e = t();
                            return e && n.infinite && g.resume(), e
                        },
                        a = function() {
                            var e, t = r;
                            if (r = (r + 1) % v, 0 !== t) return !1;
                            for (var n = 0; f > n && !e; n++) e = e || i();
                            return e
                        };
                    if (n.animate) {
                        var o = function() {
                            a() || e.util.requestAnimationFrame(o)
                        };
                        e.util.requestAnimationFrame(o)
                    } else
                        for (; !i(););
                },
                on: function() {},
                drag: function() {}
            });
            t.adaptor = g;
            var y = o.filter(":grabbable");
            n.ungrabifyWhileSimulating && y.ungrabify();
            var m;
            o.on("grab free position", m = function(t) {
                var n = this,
                    r = n._private.scratch.cola,
                    i = n._private.position;
                switch (n.grabbed() ? (r.x = i.x - u.x1, r.y = i.y - u.y1, g.dragstart(r)) : e.is.number(r.x) && e.is.number(r.y) && (i.x = r.x + u.x1, i.y = r.y + u.y1), t.type) {
                    case "grab":
                        g.dragstart(r), g.resume();
                        break;
                    case "free":
                        g.dragend(r)
                }
            });
            var x;
            o.on("lock unlock", x = function() {
                var e = this,
                    t = e._private.scratch.cola;
                e.locked() ? g.dragstart(t) : g.dragend(t)
            });
            var b = o.stdFilter(function(e) {
                return !e.isParent()
            });
            if (g.nodes(b.map(function(e, t) {
                    var r = c(n.nodeSpacing, e),
                        i = e.position(),
                        a = e._private.scratch.cola = {
                            x: n.randomize ? Math.round(Math.random() * u.w) : i.x,
                            y: n.randomize ? Math.round(Math.random() * u.h) : i.y,
                            width: e.outerWidth() + 2 * r,
                            height: e.outerHeight() + 2 * r,
                            index: t
                        };
                    return a
                })), n.alignment) {
                var w = [],
                    _ = [];
                b.forEach(function(e) {
                    var t = c(n.alignment, e),
                        r = e._private.scratch.cola,
                        i = r.index;
                    t && (null != t.x && w.push({
                        node: i,
                        offset: t.x
                    }), null != t.y && _.push({
                        node: i,
                        offset: t.y
                    }))
                });
                var E = [];
                w.length > 0 && E.push({
                    type: "alignment",
                    axis: "x",
                    offsets: w
                }), _.length > 0 && E.push({
                    type: "alignment",
                    axis: "y",
                    offsets: _
                }), g.constraints(E)
            }
            g.groups(o.stdFilter(function(e) {
                return e.isParent()
            }).map(function(e, t) {
                return e._private.scratch.cola = {
                    index: t,
                    leaves: e.children().stdFilter(function(e) {
                        return !e.isParent()
                    }).map(function(e) {
                        return e[0]._private.scratch.cola.index
                    })
                }, e
            }).map(function(e) {
                return e._private.scratch.cola.groups = e.children().stdFilter(function(e) {
                    return e.isParent()
                }).map(function(e) {
                    return e._private.scratch.cola.index
                }), e._private.scratch.cola
            }));
            var S, C;
            null != n.edgeLength ? (S = n.edgeLength, C = "linkDistance") : null != n.edgeSymDiffLength ? (S = n.edgeSymDiffLength, C = "symmetricDiffLinkLengths") : null != n.edgeJaccardLength ? (S = n.edgeJaccardLength, C = "jaccardLinkLengths") : (S = 100, C = "linkDistance");
            var T = function(e) {
                return e.calcLength
            };
            if (g.links(s.stdFilter(function(e) {
                    return !e.source().isParent() && !e.target().isParent()
                }).map(function(e) {
                    var t = e._private.scratch.cola = {
                        source: e.source()[0]._private.scratch.cola.index,
                        target: e.target()[0]._private.scratch.cola.index
                    };
                    return null != S && (t.calcLength = c(S, e)), t
                })), g.size([u.w, u.h]), null != S && g[C](T), n.flow) {
                var k, N = "y",
                    D = 50;
                e.is.string(n.flow) ? k = {
                    axis: n.flow,
                    minSeparation: D
                } : e.is.number(n.flow) ? k = {
                    axis: N,
                    minSeparation: n.flow
                } : e.is.plainObject(n.flow) ? (k = n.flow, k.axis = k.axis || N, k.minSeparation = null != k.minSeparation ? k.minSeparation : D) : k = {
                    axis: N,
                    minSeparation: D
                }, g.flowLayout(k.axis, k.minSeparation)
            }
            g.avoidOverlaps(n.avoidOverlap).handleDisconnected(n.handleDisconnected).start(n.unconstrIter, n.userConstIter, n.allConstIter), t.trigger({
                type: "layoutstart",
                layout: t
            }), n.infinite || setTimeout(function() {
                g.stop()
            }, n.maxSimulationTime)
        }), this
    }, t.prototype.stop = function() {
        return this.adaptor && (this.manuallyStopped = !0, this.adaptor.stop()), this
    }, e("layout", "cola", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend({}, n, t)
    }
    var n = {
        fit: !0,
        padding: 30,
        startAngle: 1.5 * Math.PI,
        counterclockwise: !1,
        minNodeSpacing: 10,
        boundingBox: void 0,
        avoidOverlap: !0,
        height: void 0,
        width: void 0,
        concentric: function() {
            return this.degree()
        },
        levelWidth: function(e) {
            return e.maxDegree() / 4
        },
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        for (var t = this.options, n = t, r = t.cy, i = n.eles, a = i.nodes().not(":parent"), o = e.util.makeBoundingBox(n.boundingBox ? n.boundingBox : {
                x1: 0,
                y1: 0,
                w: r.width(),
                h: r.height()
            }), s = {
                x: o.x1 + o.w / 2,
                y: o.y1 + o.h / 2
            }, l = [], u = n.startAngle, c = 0, d = 0; d < a.length; d++) {
            var p, h = a[d];
            p = n.concentric.call(h), l.push({
                value: p,
                node: h
            }), h._private.layoutData.concentric = p
        }
        a.updateStyle();
        for (var d = 0; d < a.length; d++) {
            var h = a[d];
            c = Math.max(c, h.outerWidth(), h.outerHeight())
        }
        l.sort(function(e, t) {
            return t.value - e.value
        });
        for (var f = n.levelWidth(a), v = [
                []
            ], g = v[0], d = 0; d < l.length; d++) {
            var y = l[d];
            if (g.length > 0) {
                var m = Math.abs(g[0].value - y.value);
                m >= f && (g = [], v.push(g))
            }
            g.push(y)
        }
        var x = {},
            b = 0,
            w = c + n.minNodeSpacing;
        if (!n.avoidOverlap) {
            var _ = v.length > 0 && v[0].length > 1,
                E = Math.min(o.w, o.h) / 2 - w,
                S = E / (v.length + _ ? 1 : 0);
            w = Math.min(w, S)
        }
        for (var d = 0; d < v.length; d++) {
            var C = v[d],
                T = 2 * Math.PI / C.length;
            if (C.length > 1 && n.avoidOverlap) {
                var k = Math.cos(T) - Math.cos(0),
                    N = Math.sin(T) - Math.sin(0),
                    D = Math.sqrt(w * w / (k * k + N * N));
                b = Math.max(D, b)
            }
            for (var P = 0; P < C.length; P++) {
                var y = C[P],
                    u = n.startAngle + (n.counterclockwise ? 1 : -1) * T * P,
                    M = {
                        x: s.x + b * Math.cos(u),
                        y: s.y + b * Math.sin(u)
                    };
                x[y.node.id()] = M
            }
            b += w
        }
        return a.layoutPositions(this, n, function() {
            var e = this.id();
            return x[e]
        }), this
    }, e("layout", "concentric", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend({}, r, t)
    }
    var n, r = {
        ready: function() {},
        stop: function() {},
        animate: !0,
        refresh: 4,
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        randomize: !0,
        debug: !1,
        nodeRepulsion: 4e5,
        nodeOverlap: 10,
        idealEdgeLength: 10,
        edgeElasticity: 100,
        nestingFactor: 5,
        gravity: 250,
        numIter: 100,
        initialTemp: 200,
        coolingFactor: .95,
        minTemp: 1
    };
    t.prototype.run = function() {
        var t = this.options,
            r = t.cy,
            a = this;
        a.stopped = !1, a.trigger({
            type: "layoutstart",
            layout: a
        }), n = !0 === t.debug ? !0 : !1;
        var o = new Date,
            d = i(r, a, t);
        n && s(d), !0 === t.randomize && l(d, r), m(d, r, t);
        var p = function(e) {
                return a.stopped ? (w("Layout manually stopped. Stopping computation in step " + e), !1) : (c(d, r, t, e), d.temperature = d.temperature * t.coolingFactor, w("New temperature: " + d.temperature), d.temperature < t.minTemp ? (w("Temperature drop below minimum threshold. Stopping computation in step " + e), !1) : !0)
            },
            h = function() {
                u(d, r, t), !0 === t.fit && r.fit(t.padding);
                var e = new Date;
                console.info("Layout took " + (e - o) + " ms"), a.one("layoutstop", t.stop), a.trigger({
                    type: "layoutstop",
                    layout: a
                })
            };
        if (t.animate) {
            var f = 0,
                v = function() {
                    for (var n, i = 0; i < t.refresh && f < t.numIter;) {
                        var n = p(f);
                        if (n === !1) break;
                        i++, f++
                    }
                    u(d, r, t), t.fit && r.fit(t.padding), n !== !1 && f + 1 < t.numIter ? e.util.requestAnimationFrame(v) : h()
                };
            e.util.requestAnimationFrame(v)
        } else {
            for (var f = 0; f < t.numIter && p(f) !== !1; f++);
            h()
        }
        return this
    }, t.prototype.stop = function() {
        return this.stopped = !0, this
    };
    var i = function(t, n, r) {
            for (var i = r.eles.edges(), o = r.eles.nodes(), s = {
                    layout: n,
                    layoutNodes: [],
                    idToIndex: {},
                    nodeSize: o.size(),
                    graphSet: [],
                    indexToGraph: [],
                    layoutEdges: [],
                    edgeSize: i.size(),
                    temperature: r.initialTemp,
                    clientWidth: t.width(),
                    clientHeight: t.width(),
                    boundingBox: e.util.makeBoundingBox(r.boundingBox ? r.boundingBox : {
                        x1: 0,
                        y1: 0,
                        w: t.width(),
                        h: t.height()
                    })
                }, l = 0; l < s.nodeSize; l++) {
                var u = {};
                u.id = o[l].data("id"), u.parentId = o[l].data("parent"), u.children = [], u.positionX = o[l].position("x"), u.positionY = o[l].position("y"), u.offsetX = 0, u.offsetY = 0, u.height = o[l].height(), u.width = o[l].width(), u.maxX = u.positionX + u.width / 2, u.minX = u.positionX - u.width / 2, u.maxY = u.positionY + u.height / 2, u.minY = u.positionY - u.height / 2, u.padLeft = o[l]._private.style["padding-left"].pxValue, u.padRight = o[l]._private.style["padding-right"].pxValue, u.padTop = o[l]._private.style["padding-top"].pxValue, u.padBottom = o[l]._private.style["padding-bottom"].pxValue, s.layoutNodes.push(u), s.idToIndex[u.id] = l
            }
            for (var c = [], d = 0, p = -1, h = [], l = 0; l < s.nodeSize; l++) {
                var f = s.layoutNodes[l],
                    v = f.parentId;
                null != v ? s.layoutNodes[s.idToIndex[v]].children.push(f.id) : (c[++p] = f.id, h.push(f.id))
            }
            for (s.graphSet.push(h); p >= d;) {
                var g = c[d++],
                    y = s.idToIndex[g],
                    m = s.layoutNodes[y],
                    x = m.children;
                if (x.length > 0) {
                    s.graphSet.push(x);
                    for (var l = 0; l < x.length; l++) c[++p] = x[l]
                }
            }
            for (var l = 0; l < s.graphSet.length; l++)
                for (var b = s.graphSet[l], _ = 0; _ < b.length; _++) {
                    var E = s.idToIndex[b[_]];
                    s.indexToGraph[E] = l
                }
            for (var l = 0; l < s.edgeSize; l++) {
                var S = i[l],
                    C = {};
                C.id = S.data("id"), C.sourceId = S.data("source"), C.targetId = S.data("target");
                var T = r.idealEdgeLength,
                    k = s.idToIndex[C.sourceId],
                    N = s.idToIndex[C.targetId],
                    D = s.indexToGraph[k],
                    P = s.indexToGraph[N];
                if (D != P) {
                    for (var M = a(C.sourceId, C.targetId, s), B = s.graphSet[M], L = 0, u = s.layoutNodes[k]; - 1 === $.inArray(u.id, B);) u = s.layoutNodes[s.idToIndex[u.parentId]], L++;
                    for (u = s.layoutNodes[N]; - 1 === $.inArray(u.id, B);) u = s.layoutNodes[s.idToIndex[u.parentId]], L++;
                    w("LCA of nodes " + C.sourceId + " and " + C.targetId + ". Index: " + M + " Contents: " + B.toString() + ". Depth: " + L), T *= L * r.nestingFactor
                }
                C.idealLength = T, s.layoutEdges.push(C)
            }
            return s
        },
        a = function(e, t, n) {
            var r = o(e, t, 0, n);
            return 2 > r.count ? 0 : r.graph
        },
        o = function(e, t, n, r) {
            var i = r.graphSet[n];
            if (-1 < $.inArray(e, i) && -1 < $.inArray(t, i)) return {
                count: 2,
                graph: n
            };
            for (var a = 0, s = 0; s < i.length; s++) {
                var l = i[s],
                    u = r.idToIndex[l],
                    c = r.layoutNodes[u].children;
                if (0 !== c.length) {
                    var d = r.indexToGraph[r.idToIndex[c[0]]],
                        p = o(e, t, d, r);
                    if (0 !== p.count) {
                        if (1 !== p.count) return p;
                        if (a++, 2 === a) break
                    }
                }
            }
            return {
                count: a,
                graph: n
            }
        },
        s = function(e) {
            if (n) {
                console.debug("layoutNodes:");
                for (var t = 0; t < e.nodeSize; t++) {
                    var r = e.layoutNodes[t],
                        i = "\nindex: " + t + "\nId: " + r.id + "\nChildren: " + r.children.toString() + "\nparentId: " + r.parentId + "\npositionX: " + r.positionX + "\npositionY: " + r.positionY + "\nOffsetX: " + r.offsetX + "\nOffsetY: " + r.offsetY + "\npadLeft: " + r.padLeft + "\npadRight: " + r.padRight + "\npadTop: " + r.padTop + "\npadBottom: " + r.padBottom;
                    console.debug(i)
                }
                console.debug("idToIndex");
                for (var t in e.idToIndex) console.debug("Id: " + t + "\nIndex: " + e.idToIndex[t]);
                console.debug("Graph Set");
                for (var a = e.graphSet, t = 0; t < a.length; t++) console.debug("Set : " + t + ": " + a[t].toString());
                for (var i = "IndexToGraph", t = 0; t < e.indexToGraph.length; t++) i += "\nIndex : " + t + " Graph: " + e.indexToGraph[t];
                console.debug(i), i = "Layout Edges";
                for (var t = 0; t < e.layoutEdges.length; t++) {
                    var o = e.layoutEdges[t];
                    i += "\nEdge Index: " + t + " ID: " + o.id + " SouceID: " + o.sourceId + " TargetId: " + o.targetId + " Ideal Length: " + o.idealLength
                }
                console.debug(i), i = "nodeSize: " + e.nodeSize, i += "\nedgeSize: " + e.edgeSize, i += "\ntemperature: " + e.temperature, console.debug(i)
            }
        },
        l = function(e) {
            for (var t = e.clientWidth, n = e.clientHeight, r = 0; r < e.nodeSize; r++) {
                var i = e.layoutNodes[r];
                i.positionX = Math.random() * t, i.positionY = Math.random() * n
            }
        },
        u = function(e, t, n) {
            var r = "Refreshing positions";
            w(r);
            var i = e.layout,
                a = n.eles.nodes(),
                o = e.boundingBox,
                s = {
                    x1: 1 / 0,
                    x2: -1 / 0,
                    y1: 1 / 0,
                    y2: -1 / 0
                };
            n.boundingBox && (a.forEach(function(t) {
                var n = e.layoutNodes[e.idToIndex[t.data("id")]];
                s.x1 = Math.min(s.x1, n.positionX), s.x2 = Math.max(s.x2, n.positionX), s.y1 = Math.min(s.y1, n.positionY), s.y2 = Math.max(s.y2, n.positionY)
            }), s.w = s.x2 - s.x1, s.h = s.y2 - s.y1), a.positions(function(t, i) {
                var a = e.layoutNodes[e.idToIndex[i.data("id")]];
                if (r = "Node: " + a.id + ". Refreshed position: (" + a.positionX + ", " + a.positionY + ").", w(r), n.boundingBox) {
                    var l = (a.positionX - s.x1) / s.w,
                        u = (a.positionY - s.y1) / s.h;
                    return {
                        x: o.x1 + l * o.w,
                        y: o.y1 + u * o.h
                    }
                }
                return {
                    x: a.positionX,
                    y: a.positionY
                }
            }), !0 !== e.ready && (r = "Triggering layoutready", w(r), e.ready = !0, i.one("layoutready", n.ready), i.trigger({
                type: "layoutready",
                layout: this
            }))
        },
        c = function(e, t, n, r) {
            var i = "\n\n###############################";
            i += "\nSTEP: " + r, i += "\n###############################\n", w(i), d(e, t, n), v(e, t, n), g(e, t, n), y(e, t, n), m(e, t, n)
        },
        d = function(e, t, n) {
            var r = "calculateNodeForces";
            w(r);
            for (var i = 0; i < e.graphSet.length; i++) {
                var a = e.graphSet[i],
                    o = a.length;
                r = "Set: " + a.toString(), w(r);
                for (var s = 0; o > s; s++)
                    for (var l = e.layoutNodes[e.idToIndex[a[s]]], u = s + 1; o > u; u++) {
                        var c = e.layoutNodes[e.idToIndex[a[u]]];
                        p(l, c, e, t, n)
                    }
            }
        },
        p = function(e, t, n, r, i) {
            var a = "Node repulsion. Node1: " + e.id + " Node2: " + t.id,
                o = t.positionX - e.positionX,
                s = t.positionY - e.positionY;
            if (a += "\ndirectionX: " + o + ", directionY: " + s, 0 === o && 0 === s) return void(a += "\nNodes have the same position.");
            var l = f(e, t, o, s);
            if (l > 0) {
                a += "\nNodes DO overlap.", a += "\nOverlap: " + l;
                var u = i.nodeOverlap * l,
                    c = Math.sqrt(o * o + s * s);
                a += "\nDistance: " + c;
                var d = u * o / c,
                    p = u * s / c
            } else {
                a += "\nNodes do NOT overlap.";
                var v = h(e, o, s),
                    g = h(t, -1 * o, -1 * s),
                    y = g.x - v.x,
                    m = g.y - v.y,
                    x = y * y + m * m,
                    c = Math.sqrt(x);
                a += "\nDistance: " + c;
                var u = i.nodeRepulsion / x,
                    d = u * y / c,
                    p = u * m / c
            }
            e.offsetX -= d, e.offsetY -= p, t.offsetX += d, t.offsetY += p, a += "\nForceX: " + d + " ForceY: " + p, w(a)
        },
        h = function(e, t, n) {
            var r = e.positionX,
                i = e.positionY,
                a = e.height,
                o = e.width,
                s = n / t,
                l = a / o,
                u = "Computing clipping point of node " + e.id + " . Height:  " + a + ", Width: " + o + "\nDirection " + t + ", " + n,
                c = {};
            do {
                if (0 === t && n > 0) {
                    c.x = r, u += "\nUp direction", c.y = i + a / 2;
                    break
                }
                if (0 === t && 0 > n) {
                    c.x = r, c.y = i + a / 2, u += "\nDown direction";
                    break
                }
                if (t > 0 && s >= -1 * l && l >= s) {
                    c.x = r + o / 2, c.y = i + o * n / 2 / t, u += "\nRightborder";
                    break
                }
                if (0 > t && s >= -1 * l && l >= s) {
                    c.x = r - o / 2, c.y = i - o * n / 2 / t, u += "\nLeftborder";
                    break
                }
                if (n > 0 && (-1 * l >= s || s >= l)) {
                    c.x = r + a * t / 2 / n, c.y = i + a / 2, u += "\nTop border";
                    break
                }
                if (0 > n && (-1 * l >= s || s >= l)) {
                    c.x = r - a * t / 2 / n, c.y = i - a / 2, u += "\nBottom border";
                    break
                }
            } while (!1);
            return u += "\nClipping point found at " + c.x + ", " + c.y, w(u), c
        },
        f = function(e, t, n, r) {
            if (n > 0) var i = e.maxX - t.minX;
            else var i = t.maxX - e.minX;
            if (r > 0) var a = e.maxY - t.minY;
            else var a = t.maxY - e.minY;
            return i >= 0 && a >= 0 ? Math.sqrt(i * i + a * a) : 0
        },
        v = function(e, t, n) {
            for (var r = 0; r < e.edgeSize; r++) {
                var i = e.layoutEdges[r],
                    a = e.idToIndex[i.sourceId],
                    o = e.layoutNodes[a],
                    s = e.idToIndex[i.targetId],
                    l = e.layoutNodes[s],
                    u = l.positionX - o.positionX,
                    c = l.positionY - o.positionY;
                if (0 === u && 0 === c) return;
                var d = h(o, u, c),
                    p = h(l, -1 * u, -1 * c),
                    f = p.x - d.x,
                    v = p.y - d.y,
                    g = Math.sqrt(f * f + v * v),
                    y = Math.pow(i.idealLength - g, 2) / n.edgeElasticity;
                if (0 !== g) var m = y * f / g,
                    x = y * v / g;
                else var m = 0,
                    x = 0;
                o.offsetX += m, o.offsetY += x, l.offsetX -= m, l.offsetY -= x;
                var b = "Edge force between nodes " + o.id + " and " + l.id;
                b += "\nDistance: " + g + " Force: (" + m + ", " + x + ")", w(b)
            }
        },
        g = function(e, t, n) {
            var r = "calculateGravityForces";
            w(r);
            for (var i = 0; i < e.graphSet.length; i++) {
                var a = e.graphSet[i],
                    o = a.length;
                if (r = "Set: " + a.toString(), w(r), 0 === i) var s = e.clientHeight / 2,
                    l = e.clientWidth / 2;
                else var u = e.layoutNodes[e.idToIndex[a[0]]],
                    c = e.layoutNodes[e.idToIndex[u.parentId]],
                    s = c.positionX,
                    l = c.positionY;
                r = "Center found at: " + s + ", " + l, w(r);
                for (var d = 0; o > d; d++) {
                    var p = e.layoutNodes[e.idToIndex[a[d]]];
                    r = "Node: " + p.id;
                    var h = s - p.positionX,
                        f = l - p.positionY,
                        v = Math.sqrt(h * h + f * f);
                    if (v > 1) {
                        var g = n.gravity * h / v,
                            y = n.gravity * f / v;
                        p.offsetX += g, p.offsetY += y, r += ": Applied force: " + g + ", " + y
                    } else r += ": skypped since it's too close to center";
                    w(r)
                }
            }
        },
        y = function(e) {
            var t = [],
                n = 0,
                r = -1;
            for (w("propagateForces"), t.push.apply(t, e.graphSet[0]), r += e.graphSet[0].length; r >= n;) {
                var i = t[n++],
                    a = e.idToIndex[i],
                    o = e.layoutNodes[a],
                    s = o.children;
                if (0 < s.length) {
                    var l = o.offsetX,
                        u = o.offsetY,
                        c = "Propagating offset from parent node : " + o.id + ". OffsetX: " + l + ". OffsetY: " + u;
                    c += "\n Children: " + s.toString(), w(c);
                    for (var d = 0; d < s.length; d++) {
                        var p = e.layoutNodes[e.idToIndex[s[d]]];
                        p.offsetX += l, p.offsetY += u, t[++r] = s[d]
                    }
                    o.offsetX = 0, o.offsetY = 0
                }
            }
        },
        m = function(e) {
            var t = "Updating positions";
            w(t);
            for (var n = 0; n < e.nodeSize; n++) {
                var r = e.layoutNodes[n];
                0 < r.children.length && (w("Resetting boundaries of compound node: " + r.id), r.maxX = void 0, r.minX = void 0, r.maxY = void 0, r.minY = void 0)
            }
            for (var n = 0; n < e.nodeSize; n++) {
                var r = e.layoutNodes[n];
                if (0 < r.children.length) w("Skipping position update of node: " + r.id);
                else {
                    t = "Node: " + r.id + " Previous position: (" + r.positionX + ", " + r.positionY + ").";
                    var i = x(r.offsetX, r.offsetY, e.temperature);
                    r.positionX += i.x, r.positionY += i.y, r.offsetX = 0, r.offsetY = 0, r.minX = r.positionX - r.width, r.maxX = r.positionX + r.width, r.minY = r.positionY - r.height, r.maxY = r.positionY + r.height, t += " New Position: (" + r.positionX + ", " + r.positionY + ").", w(t), b(r, e)
                }
            }
            for (var n = 0; n < e.nodeSize; n++) {
                var r = e.layoutNodes[n];
                0 < r.children.length && (r.positionX = (r.maxX + r.minX) / 2, r.positionY = (r.maxY + r.minY) / 2, r.width = r.maxX - r.minX, r.height = r.maxY - r.minY, t = "Updating position, size of compound node " + r.id, t += "\nPositionX: " + r.positionX + ", PositionY: " + r.positionY, t += "\nWidth: " + r.width + ", Height: " + r.height, w(t))
            }
        },
        x = function(e, t, n) {
            var r = "Limiting force: (" + e + ", " + t + "). Max: " + n,
                i = Math.sqrt(e * e + t * t);
            if (i > n) var a = {
                x: n * e / i,
                y: n * t / i
            };
            else var a = {
                x: e,
                y: t
            };
            return r += ".\nResult: (" + a.x + ", " + a.y + ")", w(r), a
        },
        b = function(e, t) {
            var n = "Propagating new position/size of node " + e.id,
                r = e.parentId;
            if (null == r) return n += ". No parent node.", void w(n);
            var i = t.layoutNodes[t.idToIndex[r]],
                a = !1;
            return (null == i.maxX || e.maxX + i.padRight > i.maxX) && (i.maxX = e.maxX + i.padRight, a = !0, n += "\nNew maxX for parent node " + i.id + ": " + i.maxX), (null == i.minX || e.minX - i.padLeft < i.minX) && (i.minX = e.minX - i.padLeft, a = !0, n += "\nNew minX for parent node " + i.id + ": " + i.minX), (null == i.maxY || e.maxY + i.padBottom > i.maxY) && (i.maxY = e.maxY + i.padBottom, a = !0, n += "\nNew maxY for parent node " + i.id + ": " + i.maxY), (null == i.minY || e.minY - i.padTop < i.minY) && (i.minY = e.minY - i.padTop, a = !0, n += "\nNew minY for parent node " + i.id + ": " + i.minY), a ? (w(n), b(i, t)) : (n += ". No changes in boundaries/position of parent node " + i.id, void w(n))
        },
        w = function(e) {
            n && console.debug(e)
        };
    e("layout", "cose", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        nodeSep: void 0,
        edgeSep: void 0,
        rankSep: void 0,
        rankDir: void 0,
        minLen: function() {
            return 1
        },
        fit: !0,
        padding: 30,
        animate: !1,
        animationDuration: 500,
        boundingBox: void 0,
        ready: function() {},
        stop: function() {}
    };
    t.prototype.run = function() {
        var t = this.options,
            n = this;
        return e.util.require("dagre", function(r) {
            for (var i = t.cy, a = t.eles, o = e.util.makeBoundingBox(t.boundingBox ? t.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: i.width(),
                    h: i.height()
                }), s = new r.Digraph, l = a.nodes().not(":parent"), u = 0; u < l.length; u++) {
                var c = l[u];
                s.addNode(c.id(), {
                    width: c.width(),
                    height: c.height()
                })
            }
            for (var d = a.edges(), u = 0; u < d.length; u++) {
                var p = d[u];
                s.addEdge(p.id(), p.source().id(), p.target().id(), {
                    minLen: e.is.fn(t.minLen) ? t.minLen.apply(p, [p]) : t.minLen
                })
            }
            var h = r.layout();
            t.nodeSep && h.nodeSep(t.nodeSep), t.edgeSep && h.edgeSep(t.edgeSep), t.rankSep && h.rankSep(t.rankSep), h = h.run(s), h.eachNode(function(e, t) {
                i.getElementById(e).scratch().dagre = t
            });
            var f;
            t.boundingBox ? (f = {
                x1: 1 / 0,
                x2: -1 / 0,
                y1: 1 / 0,
                y2: -1 / 0
            }, l.forEach(function(e) {
                var t = e.scratch().dagre;
                f.x1 = Math.min(f.x1, t.x), f.x2 = Math.max(f.x2, t.x), f.y1 = Math.min(f.y1, t.y), f.y2 = Math.max(f.y2, t.y)
            }), f.w = f.x2 - f.x1, f.h = f.y2 - f.y1) : f = o;
            var v = function(e) {
                if (t.boundingBox) {
                    var n = (e.x - f.x1) / f.w,
                        r = (e.y - f.y1) / f.h;
                    return {
                        x: o.x1 + n * o.w,
                        y: o.y1 + r * o.h
                    }
                }
                return e
            };
            l.layoutPositions(n, t, function() {
                var e = this.scratch().dagre;
                return v({
                    x: e.x,
                    y: e.y
                })
            })
        }), this
    }, e("layout", "dagre", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend({}, n, t)
    }
    var n = {
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        avoidOverlap: !0,
        rows: void 0,
        columns: void 0,
        position: function() {},
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        var t = this.options,
            n = t,
            r = t.cy,
            i = n.eles,
            a = i.nodes().not(":parent"),
            o = e.util.makeBoundingBox(n.boundingBox ? n.boundingBox : {
                x1: 0,
                y1: 0,
                w: r.width(),
                h: r.height()
            });
        if (0 === o.h || 0 === o.w) a.layoutPositions(this, n, function() {
            return {
                x: o.x1,
                y: o.y1
            }
        });
        else {
            var s = a.size(),
                l = Math.sqrt(s * o.h / o.w),
                u = Math.round(l),
                c = Math.round(o.w / o.h * l),
                d = function(e) {
                    if (null == e) return Math.min(u, c);
                    var t = Math.min(u, c);
                    t == u ? u = e : c = e
                },
                p = function(e) {
                    if (null == e) return Math.max(u, c);
                    var t = Math.max(u, c);
                    t == u ? u = e : c = e
                };
            if (null != n.rows && null != n.columns) u = n.rows, c = n.columns;
            else if (null != n.rows && null == n.columns) u = n.rows, c = Math.ceil(s / u);
            else if (null == n.rows && null != n.columns) c = n.columns, u = Math.ceil(s / c);
            else if (c * u > s) {
                var h = d(),
                    f = p();
                (h - 1) * f >= s ? d(h - 1) : (f - 1) * h >= s && p(f - 1)
            } else
                for (; s > c * u;) {
                    var h = d(),
                        f = p();
                    (f + 1) * h >= s ? p(f + 1) : d(h + 1)
                }
            var v = o.w / c,
                g = o.h / u;
            if (n.avoidOverlap)
                for (var y = 0; y < a.length; y++) {
                    var m = a[y],
                        x = m.outerWidth(),
                        b = m.outerHeight();
                    v = Math.max(v, x), g = Math.max(g, b)
                }
            for (var w = {}, _ = function(e, t) {
                    return w["c-" + e + "-" + t] ? !0 : !1
                }, E = function(e, t) {
                    w["c-" + e + "-" + t] = !0
                }, S = 0, C = 0, T = function() {
                    C++, C >= c && (C = 0, S++)
                }, k = {}, y = 0; y < a.length; y++) {
                var m = a[y],
                    N = n.position(m);
                if (N && (void 0 !== N.row || void 0 !== N.col)) {
                    var D = {
                        row: N.row,
                        col: N.col
                    };
                    if (void 0 === D.col)
                        for (D.col = 0; _(D.row, D.col);) D.col++;
                    else if (void 0 === D.row)
                        for (D.row = 0; _(D.row, D.col);) D.row++;
                    k[m.id()] = D, E(D.row, D.col)
                }
            }
            var P = function(e, t) {
                var n, r;
                if (t.locked() || t.isFullAutoParent()) return !1;
                var i = k[t.id()];
                if (i) n = i.col * v + v / 2 + o.x1, r = i.row * g + g / 2 + o.y1;
                else {
                    for (; _(S, C);) T();
                    n = C * v + v / 2 + o.x1, r = S * g + g / 2 + o.y1, E(S, C), T()
                }
                return {
                    x: n,
                    y: r
                }
            };
            a.layoutPositions(this, n, P)
        }
        return this
    }, e("layout", "grid", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        ready: function() {},
        stop: function() {}
    };
    t.prototype.run = function() {
        {
            var e = this.options,
                t = e.eles,
                n = this;
            e.cy
        }
        return n.trigger("layoutstart"), t.nodes().positions(function() {
            return {
                x: 0,
                y: 0
            }
        }), n.one("layoutready", e.ready), n.trigger("layoutready"), n.one("layoutstop", e.stop), n.trigger("layoutstop"), this
    }, t.prototype.stop = function() {
        return this
    }, e("layout", "null", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        positions: void 0,
        zoom: void 0,
        pan: void 0,
        fit: !0,
        padding: 30,
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        function t(e) {
            if (null == n.positions) return null;
            if (a) return n.positions.apply(e, [e]);
            var t = n.positions[e._private.data.id];
            return null == t ? null : t
        }
        var n = this.options,
            r = n.eles,
            i = r.nodes(),
            a = e.is.fn(n.positions);
        return i.layoutPositions(this, n, function(e, n) {
            var r = t(n);
            return n.locked() || null == r ? !1 : r
        }), this
    }, e("layout", "preset", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        animate: !1,
        animationDuration: 500,
        ready: void 0,
        stop: void 0
    };
    t.prototype.run = function() {
        var t = this.options,
            n = t.cy,
            r = t.eles,
            i = r.nodes().not(":parent"),
            a = e.util.makeBoundingBox(t.boundingBox ? t.boundingBox : {
                x1: 0,
                y1: 0,
                w: n.width(),
                h: n.height()
            }),
            o = function() {
                return {
                    x: a.x1 + Math.round(Math.random() * a.w),
                    y: a.y1 + Math.round(Math.random() * a.h)
                }
            };
        return i.layoutPositions(this, t, o), this
    }, e("layout", "random", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(t) {
        this.options = e.util.extend(!0, {}, n, t)
    }
    var n = {
        animate: !0,
        maxSimulationTime: 4e3,
        ungrabifyWhileSimulating: !1,
        fit: !0,
        padding: 30,
        boundingBox: void 0,
        random: !1,
        infinite: !1,
        ready: void 0,
        stop: void 0,
        stiffness: 400,
        repulsion: 400,
        damping: .5
    };
    t.prototype.run = function() {
        var t = this,
            n = this,
            r = this.options;
        return e.util.require("Springy", function(i) {
            function a(e) {
                var t = e.scratch("springy").model.id,
                    n = w.layout.nodePoints[t].p,
                    r = e.position(),
                    i = null != r.x && null != r.y ? y(e.position()) : {
                        x: 4 * Math.random() - 2,
                        y: 4 * Math.random() - 2
                    };
                n.x = i.x, n.y = i.y
            }

            function o() {
                r.ungrabifyWhileSimulating && E.ungrabify(), w.start()
            }
            var s = !1,
                l = r.cy;
            t.trigger({
                type: "layoutstart",
                layout: t
            });
            var u = r.eles,
                c = u.nodes().not(":parent"),
                d = u.edges(),
                p = e.util.makeBoundingBox(r.boundingBox ? r.boundingBox : {
                    x1: 0,
                    y1: 0,
                    w: l.width(),
                    h: l.height()
                }),
                h = new i.Graph;
            c.each(function(e, t) {
                t.scratch("springy", {
                    model: h.newNode({
                        element: t
                    })
                })
            }), d.each(function(e, t) {
                var n = t.source().scratch("springy").model,
                    r = t.target().scratch("springy").model;
                t.scratch("springy", {
                    model: h.newEdge(n, r, {
                        element: t
                    })
                })
            });
            var f = window.sim = new i.Layout.ForceDirected(h, r.stiffness, r.repulsion, r.damping);
            r.infinite && (f.minEnergyThreshold = -1 / 0);
            var v = f.getBoundingBox(),
                g = function(e) {
                    v = f.getBoundingBox();
                    var t = v.topright.subtract(v.bottomleft),
                        n = e.subtract(v.bottomleft).divide(t.x).x * p.w + p.x1,
                        r = e.subtract(v.bottomleft).divide(t.y).y * p.h + p.x1;
                    return new i.Vector(n, r)
                },
                y = function(e) {
                    v = f.getBoundingBox();
                    var t = v.topright.subtract(v.bottomleft),
                        n = (e.x - p.x1) / p.w * t.x + v.bottomleft.x,
                        r = (e.y - p.y1) / p.h * t.y + v.bottomleft.y;
                    return new i.Vector(n, r)
                },
                m = l.collection(),
                x = l.nodes().size(),
                b = 1,
                w = new i.Renderer(f, function() {
                    m.length > 0 && r.animate && (s = !0, m.rtrigger("position"), r.fit && l.fit(r.padding), m = l.collection(), s = !1)
                }, function() {}, function(e, n) {
                    var i = g(n),
                        a = e.data.element;
                    a.locked() || a.grabbed() || (a._private.position = {
                        x: i.x,
                        y: i.y
                    }, m.merge(a)), b == x && (t.one("layoutready", r.ready), t.trigger({
                        type: "layoutready",
                        layout: t
                    })), b++
                });
            c.each(function(e, t) {
                r.random || a(t)
            });
            var _;
            c.on("position", _ = function() {
                s || a(this)
            });
            var E = c.filter(":grabbable");
            n.stopSystem = function() {
                h.filterNodes(function() {
                    return !1
                }), r.ungrabifyWhileSimulating && E.grabify(), r.fit && l.fit(r.padding), c.off("drag position", _), t.one("layoutstop", r.stop), t.trigger({
                    type: "layoutstop",
                    layout: t
                }), n.stopSystem = null
            }, o(), r.infinite || setTimeout(function() {
                n.stop()
            }, r.maxSimulationTime)
        }), this
    }, t.prototype.stop = function() {
        return null != this.stopSystem && this.stopSystem(), this
    }, e("layout", "springy", t)
}(cytoscape),
function(e) {
    "use strict";

    function t(e) {
        this.options = e
    }
    t.prototype.recalculateRenderedStyle = function() {}, t.prototype.notify = function() {}, e("renderer", "null", t)
}(cytoscape);