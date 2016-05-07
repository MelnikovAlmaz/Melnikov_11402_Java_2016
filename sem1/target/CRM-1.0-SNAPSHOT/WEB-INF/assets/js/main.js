/**
 * Created by Almaz on 07.04.2016.
 */
/*
 Copyright (c) 2008 Yii Software LLC
 @license http://www.yiiframework.com/license/
 @author Qiang Xue <qiang.xue@gmail.com>
 @since 2.0
 */
(function (b, w) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = b.document ? w(b, !0) : function (b) {
        if (!b.document)throw Error("jQuery requires a window with a document");
        return w(b)
    } : w(b)
})("undefined" !== typeof window ? window : this, function (b, w) {
    function n(a) {
        var c = "length" in a && a.length, d = m.type(a);
        return "function" === d || m.isWindow(a) ? !1 : 1 === a.nodeType && c ? !0 : "array" === d || 0 === c || "number" === typeof c && 0 < c && c - 1 in a
    }

    function t(a, c, d) {
        if (m.isFunction(c))return m.grep(a, function (a, b) {
            return !!c.call(a,
                    b, a) !== d
        });
        if (c.nodeType)return m.grep(a, function (a) {
            return a === c !== d
        });
        if ("string" === typeof c) {
            if (Ja.test(c))return m.filter(c, a, d);
            c = m.filter(c, a)
        }
        return m.grep(a, function (a) {
            return 0 <= ga.call(c, a) !== d
        })
    }

    function p(a, c) {
        for (; (a = a[c]) && 1 !== a.nodeType;);
        return a
    }

    function u(a) {
        var c = Ra[a] = {};
        m.each(a.match(ha) || [], function (a, d) {
            c[d] = !0
        });
        return c
    }

    function h() {
        F.removeEventListener("DOMContentLoaded", h, !1);
        b.removeEventListener("load", h, !1);
        m.ready()
    }

    function l() {
        Object.defineProperty(this.cache = {},
            0, {
                get: function () {
                    return {}
                }
            });
        this.expando = m.expando + l.uid++
    }

    function e(a, c, d) {
        if (void 0 === d && 1 === a.nodeType)if (d = "data-" + c.replace(lb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : mb.test(d) ? m.parseJSON(d) : d
            } catch (b) {
            }
            X.set(a, c, d)
        } else d = void 0;
        return d
    }

    function k() {
        return !0
    }

    function q() {
        return !1
    }

    function z() {
        try {
            return F.activeElement
        } catch (a) {
        }
    }

    function v(a, c) {
        return m.nodeName(a, "table") && m.nodeName(11 !== c.nodeType ?
            c : c.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function y(a) {
        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
        return a
    }

    function J(a) {
        var c = nb.exec(a.type);
        c ? a.type = c[1] : a.removeAttribute("type");
        return a
    }

    function B(a, c) {
        for (var d = 0, b = a.length; d < b; d++)H.set(a[d], "globalEval", !c || H.get(c[d], "globalEval"))
    }

    function a(a, c) {
        var d, b, g, f;
        if (1 === c.nodeType) {
            if (H.hasData(a) && (f = H.access(a), d = H.set(c, f), f = f.events))for (g in delete d.handle,
                d.events = {}, f)for (d = 0, b = f[g].length; d < b; d++)m.event.add(c, g, f[g][d]);
            X.hasData(a) && (g = X.access(a), g = m.extend({}, g), X.set(c, g))
        }
    }

    function c(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return void 0 === c || c && m.nodeName(a, c) ? m.merge([a], d) : d
    }

    function d(a, c) {
        var d, g = m(c.createElement(a)).appendTo(c.body), f = b.getDefaultComputedStyle && (d = b.getDefaultComputedStyle(g[0])) ? d.display : m.css(g[0], "display");
        g.detach();
        return f
    }

    function g(a) {
        var c =
            F, b = Sa[a];
        b || (b = d(a, c), "none" !== b && b || (wa = (wa || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(c.documentElement), c = wa[0].contentDocument, c.write(), c.close(), b = d(a, c), wa.detach()), Sa[a] = b);
        return b
    }

    function f(a, c, d) {
        var b, g, f = a.style;
        (d = d || Ca(a)) && (g = d.getPropertyValue(c) || d[c]);
        d && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, c)), Ka.test(g) && Ta.test(c) && (a = f.width, c = f.minWidth, b = f.maxWidth, f.minWidth = f.maxWidth = f.width = g, g = d.width, f.width = a, f.minWidth = c, f.maxWidth = b));
        return void 0 !==
        g ? g + "" : g
    }

    function r(a, c) {
        return {
            get: function () {
                if (a())delete this.get; else return (this.get = c).apply(this, arguments)
            }
        }
    }

    function C(a, c) {
        if (c in a)return c;
        for (var d = c[0].toUpperCase() + c.slice(1), b = c, g = Ua.length; g--;)if (c = Ua[g] + d, c in a)return c;
        return b
    }

    function E(a, c, d) {
        return (a = ob.exec(c)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : c
    }

    function L(a, c, d, b, g) {
        c = d === (b ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var f = 0; 4 > c; c += 2)"margin" === d && (f += m.css(a, d + oa[c], !0, g)), b ? ("content" === d && (f -= m.css(a, "padding" +
            oa[c], !0, g)), "margin" !== d && (f -= m.css(a, "border" + oa[c] + "Width", !0, g))) : (f += m.css(a, "padding" + oa[c], !0, g), "padding" !== d && (f += m.css(a, "border" + oa[c] + "Width", !0, g)));
        return f
    }

    function R(a, c, d) {
        var b = !0, g = "width" === c ? a.offsetWidth : a.offsetHeight, e = Ca(a), r = "border-box" === m.css(a, "boxSizing", !1, e);
        if (0 >= g || null == g) {
            g = f(a, c, e);
            if (0 > g || null == g)g = a.style[c];
            if (Ka.test(g))return g;
            b = r && (M.boxSizingReliable() || g === a.style[c]);
            g = parseFloat(g) || 0
        }
        return g + L(a, c, d || (r ? "border" : "content"), b, e) + "px"
    }

    function D(a,
               c) {
        for (var d, b, f, e = [], r = 0, k = a.length; r < k; r++)b = a[r], b.style && (e[r] = H.get(b, "olddisplay"), d = b.style.display, c ? (e[r] || "none" !== d || (b.style.display = ""), "" === b.style.display && ka(b) && (e[r] = H.access(b, "olddisplay", g(b.nodeName)))) : (f = ka(b), "none" === d && f || H.set(b, "olddisplay", f ? d : m.css(b, "display"))));
        for (r = 0; r < k; r++)b = a[r], !b.style || c && "none" !== b.style.display && "" !== b.style.display || (b.style.display = c ? e[r] || "" : "none");
        return a
    }

    function N(a, c, d, b, g) {
        return new N.prototype.init(a, c, d, b, g)
    }

    function P() {
        setTimeout(function () {
            ua = void 0
        });
        return ua = m.now()
    }

    function V(a, c) {
        var d, b = 0, g = {height: a};
        for (c = c ? 1 : 0; 4 > b; b += 2 - c)d = oa[b], g["margin" + d] = g["padding" + d] = a;
        c && (g.opacity = g.width = a);
        return g
    }

    function K(a, c, d) {
        for (var b, g = (xa[c] || []).concat(xa["*"]), f = 0, m = g.length; f < m; f++)if (b = g[f].call(d, c, a))return b
    }

    function I(a, c) {
        var d, b, g, f, e;
        for (d in a)if (b = m.camelCase(d), g = c[b], f = a[d], m.isArray(f) && (g = f[1], f = a[d] = f[0]), d !== b && (a[b] = f, delete a[d]), (e = m.cssHooks[b]) && "expand" in e)for (d in f = e.expand(f), delete a[b], f)d in a || (a[d] = f[d], c[d] =
            g); else c[b] = g
    }

    function Z(a, c, d) {
        var b, g = 0, f = Da.length, e = m.Deferred().always(function () {
            delete r.elem
        }), r = function () {
            if (b)return !1;
            for (var c = ua || P(), c = Math.max(0, k.startTime + k.duration - c), d = 1 - (c / k.duration || 0), g = 0, f = k.tweens.length; g < f; g++)k.tweens[g].run(d);
            e.notifyWith(a, [k, d, c]);
            if (1 > d && f)return c;
            e.resolveWith(a, [k]);
            return !1
        }, k = e.promise({
            elem: a,
            props: m.extend({}, c),
            opts: m.extend(!0, {specialEasing: {}}, d),
            originalProperties: c,
            originalOptions: d,
            startTime: ua || P(),
            duration: d.duration,
            tweens: [],
            createTween: function (c,
                                   d) {
                var b = m.Tween(a, k.opts, c, d, k.opts.specialEasing[c] || k.opts.easing);
                k.tweens.push(b);
                return b
            },
            stop: function (c) {
                var d = 0, g = c ? k.tweens.length : 0;
                if (b)return this;
                for (b = !0; d < g; d++)k.tweens[d].run(1);
                c ? e.resolveWith(a, [k, c]) : e.rejectWith(a, [k, c]);
                return this
            }
        });
        d = k.props;
        for (I(d, k.opts.specialEasing); g < f; g++)if (c = Da[g].call(k, a, d, k.opts))return c;
        m.map(d, K, k);
        m.isFunction(k.opts.start) && k.opts.start.call(a, k);
        m.fx.timer(m.extend(r, {elem: a, anim: k, queue: k.opts.queue}));
        return k.progress(k.opts.progress).done(k.opts.done,
            k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function U(a) {
        return function (c, d) {
            "string" !== typeof c && (d = c, c = "*");
            var b, g = 0, f = c.toLowerCase().match(ha) || [];
            if (m.isFunction(d))for (; b = f[g++];)"+" === b[0] ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(d)) : (a[b] = a[b] || []).push(d)
        }
    }

    function x(a, c, d, b) {
        function g(k) {
            var r;
            f[k] = !0;
            m.each(a[k] || [], function (a, A) {
                var m = A(c, d, b);
                if ("string" === typeof m && !e && !f[m])return c.dataTypes.unshift(m), g(m), !1;
                if (e)return !(r = m)
            });
            return r
        }

        var f = {}, e = a === La;
        return g(c.dataTypes[0]) ||
            !f["*"] && g("*")
    }

    function fa(a, c) {
        var d, b, g = m.ajaxSettings.flatOptions || {};
        for (d in c)void 0 !== c[d] && ((g[d] ? a : b || (b = {}))[d] = c[d]);
        b && m.extend(!0, a, b);
        return a
    }

    function G(a, c, d, b) {
        var g;
        if (m.isArray(c))m.each(c, function (c, g) {
            d || pb.test(a) ? b(a, g) : G(a + "[" + ("object" === typeof g ? c : "") + "]", g, d, b)
        }); else if (d || "object" !== m.type(c))b(a, c); else for (g in c)G(a + "[" + g + "]", c[g], d, b)
    }

    function O(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var Y = [], Q = Y.slice, la = Y.concat, ia = Y.push, ga = Y.indexOf, ba = {}, ca =
        ba.toString, da = ba.hasOwnProperty, M = {}, F = b.document, m = function (a, c) {
        return new m.fn.init(a, c)
    }, ya = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ma = /^-ms-/, ja = /-([\da-z])/gi, S = function (a, c) {
        return c.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: "2.1.4", constructor: m, selector: "", length: 0, toArray: function () {
            return Q.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Q.call(this)
        }, pushStack: function (a) {
            a = m.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        }, each: function (a,
                           c) {
            return m.each(this, a, c)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (c, d) {
                return a.call(c, d, c)
            }))
        }, slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var c = this.length;
            a = +a + (0 > a ? c : 0);
            return this.pushStack(0 <= a && a < c ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ia, sort: Y.sort, splice: Y.splice
    };
    m.extend = m.fn.extend = function () {
        var a, c, d, b, g, f = arguments[0] ||
            {}, e = 1, k = arguments.length, r = !1;
        "boolean" === typeof f && (r = f, f = arguments[e] || {}, e++);
        "object" === typeof f || m.isFunction(f) || (f = {});
        e === k && (f = this, e--);
        for (; e < k; e++)if (null != (a = arguments[e]))for (c in a)d = f[c], b = a[c], f !== b && (r && b && (m.isPlainObject(b) || (g = m.isArray(b))) ? (g ? (g = !1, d = d && m.isArray(d) ? d : []) : d = d && m.isPlainObject(d) ? d : {}, f[c] = m.extend(r, d, b)) : void 0 !== b && (f[c] = b));
        return f
    };
    m.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw Error(a);
        }, noop: function () {
        },
        isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && 0 <= a - parseFloat(a) + 1
        }, isPlainObject: function (a) {
            return "object" !== m.type(a) || a.nodeType || m.isWindow(a) || a.constructor && !da.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            for (var c in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? ba[ca.call(a)] || "object" :
                typeof a
        }, globalEval: function (a) {
            var c;
            c = eval;
            if (a = m.trim(a))1 === a.indexOf("use strict") ? (c = F.createElement("script"), c.text = a, F.head.appendChild(c).parentNode.removeChild(c)) : c(a)
        }, camelCase: function (a) {
            return a.replace(ma, "ms-").replace(ja, S)
        }, nodeName: function (a, c) {
            return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase()
        }, each: function (a, c, d) {
            var b, g = 0, f = a.length;
            b = n(a);
            if (d)if (b)for (; g < f && (b = c.apply(a[g], d), !1 !== b); g++); else for (g in a) {
                if (b = c.apply(a[g], d), !1 === b)break
            } else if (b)for (; g <
                                f && (b = c.call(a[g], g, a[g]), !1 !== b); g++); else for (g in a)if (b = c.call(a[g], g, a[g]), !1 === b)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(ya, "")
        }, makeArray: function (a, c) {
            var d = c || [];
            null != a && (n(Object(a)) ? m.merge(d, "string" === typeof a ? [a] : a) : ia.call(d, a));
            return d
        }, inArray: function (a, c, d) {
            return null == c ? -1 : ga.call(c, a, d)
        }, merge: function (a, c) {
            for (var d = +c.length, b = 0, g = a.length; b < d; b++)a[g++] = c[b];
            a.length = g;
            return a
        }, grep: function (a, c, d) {
            for (var b = [], g = 0, f = a.length, m = !d; g < f; g++)d = !c(a[g],
                g), d !== m && b.push(a[g]);
            return b
        }, map: function (a, c, d) {
            var b, g = 0, f = a.length, m = [];
            if (n(a))for (; g < f; g++)b = c(a[g], g, d), null != b && m.push(b); else for (g in a)b = c(a[g], g, d), null != b && m.push(b);
            return la.apply([], m)
        }, guid: 1, proxy: function (a, c) {
            var d, b;
            "string" === typeof c && (d = a[c], c = a, a = d);
            if (m.isFunction(a))return b = Q.call(arguments, 2), d = function () {
                return a.apply(c || this, b.concat(Q.call(arguments)))
            }, d.guid = a.guid = a.guid || m.guid++, d
        }, now: Date.now, support: M
    });
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, c) {
            ba["[object " + c + "]"] = c.toLowerCase()
        });
    var ra = function (a) {
        function c(a, d, b, g) {
            var f, A, m, e, T;
            (d ? d.ownerDocument || d : B) !== P && y(d);
            d = d || P;
            b = b || [];
            e = d.nodeType;
            if ("string" !== typeof a || !a || 1 !== e && 9 !== e && 11 !== e)return b;
            if (!g && fa) {
                if (11 !== e && (f = xa.exec(a)))if (m = f[1])if (9 === e)if ((A = d.getElementById(m)) && A.parentNode) {
                    if (A.id === m)return b.push(A), b
                } else return b; else {
                    if (d.ownerDocument && (A = d.ownerDocument.getElementById(m)) && w(d, A) && A.id === m)return b.push(A), b
                } else {
                    if (f[2])return S.apply(b, d.getElementsByTagName(a)),
                        b;
                    if ((m = f[3]) && u.getElementsByClassName)return S.apply(b, d.getElementsByClassName(m)), b
                }
                if (u.qsa && (!G || !G.test(a))) {
                    A = f = O;
                    m = d;
                    T = 1 !== e && a;
                    if (1 === e && "object" !== d.nodeName.toLowerCase()) {
                        e = v(a);
                        (f = d.getAttribute("id")) ? A = f.replace(Aa, "\\$&") : d.setAttribute("id", A);
                        A = "[id='" + A + "'] ";
                        for (m = e.length; m--;)e[m] = A + q(e[m]);
                        m = ta.test(a) && l(d.parentNode) || d;
                        T = e.join(",")
                    }
                    if (T)try {
                        return S.apply(b, m.querySelectorAll(T)), b
                    } catch (k) {
                    } finally {
                        f || d.removeAttribute("id")
                    }
                }
            }
            return t(a.replace(sa, "$1"), d, b, g)
        }

        function d() {
            function a(d,
                       b) {
                c.push(d + " ") > D.cacheLength && delete a[c.shift()];
                return a[d + " "] = b
            }

            var c = [];
            return a
        }

        function b(a) {
            a[O] = !0;
            return a
        }

        function g(a) {
            var c = P.createElement("div");
            try {
                return !!a(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        }

        function f(a, c) {
            for (var d = a.split("|"), b = a.length; b--;)D.attrHandle[d[b]] = c
        }

        function m(a, c) {
            var d = c && a, b = d && 1 === a.nodeType && 1 === c.nodeType && (~c.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (b)return b;
            if (d)for (; d = d.nextSibling;)if (d === c)return -1;
            return a ? 1 : -1
        }

        function e(a) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === a
            }
        }

        function k(a) {
            return function (c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === a
            }
        }

        function r(a) {
            return b(function (c) {
                c = +c;
                return b(function (d, b) {
                    for (var g, f = a([], d.length, c), A = f.length; A--;)d[g = f[A]] && (d[g] = !(b[g] = d[g]))
                })
            })
        }

        function l(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function C() {
        }

        function q(a) {
            for (var c = 0, d = a.length, b = ""; c < d; c++)b += a[c].value;
            return b
        }

        function h(a, c, d) {
            var b = c.dir, g = d && "parentNode" === b, f = F++;
            return c.first ? function (c, d, f) {
                for (; c = c[b];)if (1 === c.nodeType || g)return a(c, d, f)
            } : function (c, d, A) {
                var m, e, T = [Q, f];
                if (A)for (; c = c[b];) {
                    if ((1 === c.nodeType || g) && a(c, d, A))return !0
                } else for (; c = c[b];)if (1 === c.nodeType || g) {
                    e = c[O] || (c[O] = {});
                    if ((m = e[b]) && m[0] === Q && m[1] === f)return T[2] = m[2];
                    e[b] = T;
                    if (T[2] = a(c, d, A))return !0
                }
            }
        }

        function E(a) {
            return 1 < a.length ? function (c, d, b) {
                for (var g = a.length; g--;)if (!a[g](c, d, b))return !1;
                return !0
            } : a[0]
        }

        function p(a,
                   c, d, b, g) {
            for (var f, A = [], m = 0, e = a.length, T = null != c; m < e; m++)if (f = a[m])if (!d || d(f, b, g))A.push(f), T && c.push(m);
            return A
        }

        function L(a, d, g, f, A, m) {
            f && !f[O] && (f = L(f));
            A && !A[O] && (A = L(A, m));
            return b(function (b, m, e, k) {
                var r, W, l = [], aa = [], C = m.length, q;
                if (!(q = b)) {
                    q = d || "*";
                    for (var h = e.nodeType ? [e] : e, E = [], Ba = 0, L = h.length; Ba < L; Ba++)c(q, h[Ba], E);
                    q = E
                }
                q = !a || !b && d ? q : p(q, l, a, e, k);
                h = g ? A || (b ? a : C || f) ? [] : m : q;
                g && g(q, h, e, k);
                if (f)for (r = p(h, aa), f(r, [], e, k), e = r.length; e--;)if (W = r[e])h[aa[e]] = !(q[aa[e]] = W);
                if (b) {
                    if (A || a) {
                        if (A) {
                            r =
                                [];
                            for (e = h.length; e--;)(W = h[e]) && r.push(q[e] = W);
                            A(null, h = [], r, k)
                        }
                        for (e = h.length; e--;)(W = h[e]) && -1 < (r = A ? ca(b, W) : l[e]) && (b[r] = !(m[r] = W))
                    }
                } else h = p(h === m ? h.splice(C, h.length) : h), A ? A(null, m, h, k) : S.apply(m, h)
            })
        }

        function K(a) {
            var c, d, b, g = a.length, f = D.relative[a[0].type];
            d = f || D.relative[" "];
            for (var A = f ? 1 : 0, m = h(function (a) {
                return a === c
            }, d, !0), e = h(function (a) {
                return -1 < ca(c, a)
            }, d, !0), T = [function (a, d, b) {
                a = !f && (b || d !== Z) || ((c = d).nodeType ? m(a, d, b) : e(a, d, b));
                c = null;
                return a
            }]; A < g; A++)if (d = D.relative[a[A].type])T =
                [h(E(T), d)]; else {
                d = D.filter[a[A].type].apply(null, a[A].matches);
                if (d[O]) {
                    for (b = ++A; b < g && !D.relative[a[b].type]; b++);
                    return L(1 < A && E(T), 1 < A && q(a.slice(0, A - 1).concat({value: " " === a[A - 2].type ? "*" : ""})).replace(sa, "$1"), d, A < b && K(a.slice(A, b)), b < g && K(a = a.slice(b)), b < g && q(a))
                }
                T.push(d)
            }
            return E(T)
        }

        function z(a, d) {
            var g = 0 < d.length, f = 0 < a.length, A = function (b, A, m, e, r) {
                var k, W, l, aa = 0, C = "0", q = b && [], h = [], E = Z, Ba = b || f && D.find.TAG("*", r), L = Q += null == E ? 1 : Math.random() || .1, K = Ba.length;
                for (r && (Z = A !== P && A); C !== K && null !=
                (k = Ba[C]); C++) {
                    if (f && k) {
                        for (W = 0; l = a[W++];)if (l(k, A, m)) {
                            e.push(k);
                            break
                        }
                        r && (Q = L)
                    }
                    g && ((k = !l && k) && aa--, b && q.push(k))
                }
                aa += C;
                if (g && C !== aa) {
                    for (W = 0; l = d[W++];)l(q, h, A, m);
                    if (b) {
                        if (0 < aa)for (; C--;)q[C] || h[C] || (h[C] = ma.call(e));
                        h = p(h)
                    }
                    S.apply(e, h);
                    r && !b && 0 < h.length && 1 < aa + d.length && c.uniqueSort(e)
                }
                r && (Q = L, Z = E);
                return q
            };
            return g ? b(A) : A
        }

        var n, u, D, I, V, v, x, t, Z, R, N, y, P, U, fa, G, J, Y, w, O = "sizzle" + 1 * new Date, B = a.document, Q = 0, F = 0, ia = d(), H = d(), la = d(), M = function (a, c) {
                a === c && (N = !0);
                return 0
            }, ga = {}.hasOwnProperty, ba = [], ma =
                ba.pop, da = ba.push, S = ba.push, X = ba.slice, ca = function (a, c) {
                for (var d = 0, b = a.length; d < b; d++)if (a[d] === c)return d;
                return -1
            }, ja = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ra = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ja + "))|)[\\x20\\t\\r\\n\\f]*\\]", ea = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                ra + ")*)|.*)\\)|)", ha = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), sa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), na = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, oa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ya = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), Ea = new RegExp(ea), ua = new RegExp("^" + ja + "$"), za = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w",
                        "w*") + ")"),
                ATTR: new RegExp("^" + ra),
                PSEUDO: new RegExp("^" + ea),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            va = /^(?:input|select|textarea|button)$/i, Ja = /^h\d$/i, ka = /^[^{]+\{\s*\[native \w/, xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, Aa = /'|\\/g, pa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), qa = function (a, c, d) {
                a = "0x" + c - 65536;
                return a !== a || d ? c : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            }, wa = function () {
                y()
            };
        try {
            S.apply(ba = X.call(B.childNodes), B.childNodes), ba[B.childNodes.length].nodeType
        } catch (Sb) {
            S = {
                apply: ba.length ? function (a, c) {
                    da.apply(a,
                        X.call(c))
                } : function (a, c) {
                    for (var d = a.length, b = 0; a[d++] = c[b++];);
                    a.length = d - 1
                }
            }
        }
        u = c.support = {};
        V = c.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        y = c.setDocument = function (a) {
            var c = a ? a.ownerDocument || a : B;
            if (c === P || 9 !== c.nodeType || !c.documentElement)return P;
            P = c;
            U = c.documentElement;
            (a = c.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", wa, !1) : a.attachEvent && a.attachEvent("onunload", wa));
            fa = !V(c);
            u.attributes = g(function (a) {
                a.className =
                    "i";
                return !a.getAttribute("className")
            });
            u.getElementsByTagName = g(function (a) {
                a.appendChild(c.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            u.getElementsByClassName = ka.test(c.getElementsByClassName);
            u.getById = g(function (a) {
                U.appendChild(a).id = O;
                return !c.getElementsByName || !c.getElementsByName(O).length
            });
            u.getById ? (D.find.ID = function (a, c) {
                if ("undefined" !== typeof c.getElementById && fa) {
                    var d = c.getElementById(a);
                    return d && d.parentNode ? [d] : []
                }
            }, D.filter.ID = function (a) {
                var c = a.replace(pa,
                    qa);
                return function (a) {
                    return a.getAttribute("id") === c
                }
            }) : (delete D.find.ID, D.filter.ID = function (a) {
                var c = a.replace(pa, qa);
                return function (a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === c
                }
            });
            D.find.TAG = u.getElementsByTagName ? function (a, c) {
                if ("undefined" !== typeof c.getElementsByTagName)return c.getElementsByTagName(a);
                if (u.qsa)return c.querySelectorAll(a)
            } : function (a, c) {
                var d, b = [], g = 0, f = c.getElementsByTagName(a);
                if ("*" === a) {
                    for (; d = f[g++];)1 === d.nodeType &&
                    b.push(d);
                    return b
                }
                return f
            };
            D.find.CLASS = u.getElementsByClassName && function (a, c) {
                    if (fa)return c.getElementsByClassName(a)
                };
            J = [];
            G = [];
            if (u.qsa = ka.test(c.querySelectorAll))g(function (a) {
                U.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && G.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || G.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + O + "-]").length || G.push("~=");
                a.querySelectorAll(":checked").length || G.push(":checked");
                a.querySelectorAll("a#" + O + "+*").length || G.push(".#.+[+~]")
            }), g(function (a) {
                var d = c.createElement("input");
                d.setAttribute("type", "hidden");
                a.appendChild(d).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && G.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || G.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                G.push(",.*:")
            });
            (u.matchesSelector =
                ka.test(Y = U.matches || U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && g(function (a) {
                u.disconnectedMatch = Y.call(a, "div");
                Y.call(a, "[s!='']:x");
                J.push("!=", ea)
            });
            G = G.length && new RegExp(G.join("|"));
            J = J.length && new RegExp(J.join("|"));
            w = (a = ka.test(U.compareDocumentPosition)) || ka.test(U.contains) ? function (a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a, b = c && c.parentNode;
                return a === b || !!(b && 1 === b.nodeType && (d.contains ? d.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) &
                    16))
            } : function (a, c) {
                if (c)for (; c = c.parentNode;)if (c === a)return !0;
                return !1
            };
            M = a ? function (a, d) {
                if (a === d)return N = !0, 0;
                var b = !a.compareDocumentPosition - !d.compareDocumentPosition;
                if (b)return b;
                b = (a.ownerDocument || a) === (d.ownerDocument || d) ? a.compareDocumentPosition(d) : 1;
                return b & 1 || !u.sortDetached && d.compareDocumentPosition(a) === b ? a === c || a.ownerDocument === B && w(B, a) ? -1 : d === c || d.ownerDocument === B && w(B, d) ? 1 : R ? ca(R, a) - ca(R, d) : 0 : b & 4 ? -1 : 1
            } : function (a, d) {
                if (a === d)return N = !0, 0;
                var b, g = 0;
                b = a.parentNode;
                var f =
                    d.parentNode, A = [a], e = [d];
                if (!b || !f)return a === c ? -1 : d === c ? 1 : b ? -1 : f ? 1 : R ? ca(R, a) - ca(R, d) : 0;
                if (b === f)return m(a, d);
                for (b = a; b = b.parentNode;)A.unshift(b);
                for (b = d; b = b.parentNode;)e.unshift(b);
                for (; A[g] === e[g];)g++;
                return g ? m(A[g], e[g]) : A[g] === B ? -1 : e[g] === B ? 1 : 0
            };
            return c
        };
        c.matches = function (a, d) {
            return c(a, null, null, d)
        };
        c.matchesSelector = function (a, d) {
            (a.ownerDocument || a) !== P && y(a);
            d = d.replace(ya, "='$1']");
            if (!(!u.matchesSelector || !fa || J && J.test(d) || G && G.test(d)))try {
                var b = Y.call(a, d);
                if (b || u.disconnectedMatch ||
                    a.document && 11 !== a.document.nodeType)return b
            } catch (g) {
            }
            return 0 < c(d, P, null, [a]).length
        };
        c.contains = function (a, c) {
            (a.ownerDocument || a) !== P && y(a);
            return w(a, c)
        };
        c.attr = function (a, c) {
            (a.ownerDocument || a) !== P && y(a);
            var d = D.attrHandle[c.toLowerCase()], d = d && ga.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !fa) : void 0;
            return void 0 !== d ? d : u.attributes || !fa ? a.getAttribute(c) : (d = a.getAttributeNode(c)) && d.specified ? d.value : null
        };
        c.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        c.uniqueSort =
            function (a) {
                var c, d = [], b = 0, g = 0;
                N = !u.detectDuplicates;
                R = !u.sortStable && a.slice(0);
                a.sort(M);
                if (N) {
                    for (; c = a[g++];)c === a[g] && (b = d.push(g));
                    for (; b--;)a.splice(d[b], 1)
                }
                R = null;
                return a
            };
        I = c.getText = function (a) {
            var c, d = "", b = 0;
            c = a.nodeType;
            if (!c)for (; c = a[b++];)d += I(c); else if (1 === c || 9 === c || 11 === c) {
                if ("string" === typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)d += I(a)
            } else if (3 === c || 4 === c)return a.nodeValue;
            return d
        };
        D = c.selectors = {
            cacheLength: 50,
            createPseudo: b,
            match: za,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    a[1] = a[1].replace(pa, qa);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(pa, qa);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                }, CHILD: function (a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]);
                    return a
                }, PSEUDO: function (a) {
                    var c,
                        d = !a[6] && a[2];
                    if (za.CHILD.test(a[0]))return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : d && Ea.test(d) && (c = v(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function (a) {
                    var c = a.replace(pa, qa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === c
                    }
                }, CLASS: function (a) {
                    var c = ia[a + " "];
                    return c || (c = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), ia(a, function (a) {
                            return c.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                        }))
                }, ATTR: function (a, d, b) {
                    return function (g) {
                        g = c.attr(g, a);
                        if (null == g)return "!=" === d;
                        if (!d)return !0;
                        g += "";
                        return "=" === d ? g === b : "!=" === d ? g !== b : "^=" === d ? b && 0 === g.indexOf(b) : "*=" === d ? b && -1 < g.indexOf(b) : "$=" === d ? b && g.slice(-b.length) === b : "~=" === d ? -1 < (" " + g.replace(ha, " ") + " ").indexOf(b) : "|=" === d ? g === b || g.slice(0, b.length + 1) === b + "-" : !1
                    }
                }, CHILD: function (a, c, d, b, g) {
                    var f = "nth" !== a.slice(0, 3), A = "last" !== a.slice(-4),
                        e = "of-type" === c;
                    return 1 === b && 0 === g ? function (a) {
                        return !!a.parentNode
                    } : function (c, d, m) {
                        var T, r, k, W, l;
                        d = f !== A ? "nextSibling" : "previousSibling";
                        var aa = c.parentNode, C = e && c.nodeName.toLowerCase();
                        m = !m && !e;
                        if (aa) {
                            if (f) {
                                for (; d;) {
                                    for (r = c; r = r[d];)if (e ? r.nodeName.toLowerCase() === C : 1 === r.nodeType)return !1;
                                    l = d = "only" === a && !l && "nextSibling"
                                }
                                return !0
                            }
                            l = [A ? aa.firstChild : aa.lastChild];
                            if (A && m)for (m = aa[O] || (aa[O] = {}), T = m[a] || [], W = T[0] === Q && T[1], k = T[0] === Q && T[2], r = W && aa.childNodes[W]; r = ++W && r && r[d] || (k = W = 0) || l.pop();) {
                                if (1 ===
                                    r.nodeType && ++k && r === c) {
                                    m[a] = [Q, W, k];
                                    break
                                }
                            } else if (m && (T = (c[O] || (c[O] = {}))[a]) && T[0] === Q)k = T[1]; else for (; (r = ++W && r && r[d] || (k = W = 0) || l.pop()) && ((e ? r.nodeName.toLowerCase() !== C : 1 !== r.nodeType) || !++k || (m && ((r[O] || (r[O] = {}))[a] = [Q, k]), r !== c)););
                            k -= g;
                            return k === b || 0 === k % b && 0 <= k / b
                        }
                    }
                }, PSEUDO: function (a, d) {
                    var g, f = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[O] ? f(d) : 1 < f.length ? (g = [a, a, "", d], D.setFilters.hasOwnProperty(a.toLowerCase()) ? b(function (a, c) {
                        for (var b,
                                 g = f(a, d), A = g.length; A--;)b = ca(a, g[A]), a[b] = !(c[b] = g[A])
                    }) : function (a) {
                        return f(a, 0, g)
                    }) : f
                }
            },
            pseudos: {
                not: b(function (a) {
                    var c = [], d = [], g = x(a.replace(sa, "$1"));
                    return g[O] ? b(function (a, c, d, b) {
                        b = g(a, null, b, []);
                        for (var f = a.length; f--;)if (d = b[f])a[f] = !(c[f] = d)
                    }) : function (a, b, f) {
                        c[0] = a;
                        g(c, null, f, d);
                        c[0] = null;
                        return !d.pop()
                    }
                }), has: b(function (a) {
                    return function (d) {
                        return 0 < c(a, d).length
                    }
                }), contains: b(function (a) {
                    a = a.replace(pa, qa);
                    return function (c) {
                        return -1 < (c.textContent || c.innerText || I(c)).indexOf(a)
                    }
                }),
                lang: b(function (a) {
                    ua.test(a || "") || c.error("unsupported lang: " + a);
                    a = a.replace(pa, qa).toLowerCase();
                    return function (c) {
                        var d;
                        do if (d = fa ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang"))return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
                }), target: function (c) {
                    var d = a.location && a.location.hash;
                    return d && d.slice(1) === c.id
                }, root: function (a) {
                    return a === U
                }, focus: function (a) {
                    return a === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && !!a.checked || "option" === c && !!a.selected
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
                    return !0
                }, parent: function (a) {
                    return !D.pseudos.empty(a)
                }, header: function (a) {
                    return Ja.test(a.nodeName)
                }, input: function (a) {
                    return va.test(a.nodeName)
                },
                button: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && "button" === a.type || "button" === c
                }, text: function (a) {
                    var c;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (c = a.getAttribute("type")) || "text" === c.toLowerCase())
                }, first: r(function () {
                    return [0]
                }), last: r(function (a, c) {
                    return [c - 1]
                }), eq: r(function (a, c, d) {
                    return [0 > d ? d + c : d]
                }), even: r(function (a, c) {
                    for (var d = 0; d < c; d += 2)a.push(d);
                    return a
                }), odd: r(function (a, c) {
                    for (var d = 1; d < c; d += 2)a.push(d);
                    return a
                }), lt: r(function (a, c, d) {
                    for (c =
                             0 > d ? d + c : d; 0 <= --c;)a.push(c);
                    return a
                }), gt: r(function (a, c, d) {
                    for (d = 0 > d ? d + c : d; ++d < c;)a.push(d);
                    return a
                })
            }
        };
        D.pseudos.nth = D.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})D.pseudos[n] = e(n);
        for (n in{submit: !0, reset: !0})D.pseudos[n] = k(n);
        C.prototype = D.filters = D.pseudos;
        D.setFilters = new C;
        v = c.tokenize = function (a, d) {
            var b, g, f, A, m, e, r;
            if (m = H[a + " "])return d ? 0 : m.slice(0);
            m = a;
            e = [];
            for (r = D.preFilter; m;) {
                if (!b || (g = na.exec(m)))g && (m = m.slice(g[0].length) || m), e.push(f = []);
                b = !1;
                if (g = oa.exec(m))b =
                    g.shift(), f.push({value: b, type: g[0].replace(sa, " ")}), m = m.slice(b.length);
                for (A in D.filter)!(g = za[A].exec(m)) || r[A] && !(g = r[A](g)) || (b = g.shift(), f.push({
                    value: b,
                    type: A,
                    matches: g
                }), m = m.slice(b.length));
                if (!b)break
            }
            return d ? m.length : m ? c.error(a) : H(a, e).slice(0)
        };
        x = c.compile = function (a, c) {
            var d, b = [], g = [], f = la[a + " "];
            if (!f) {
                c || (c = v(a));
                for (d = c.length; d--;)f = K(c[d]), f[O] ? b.push(f) : g.push(f);
                f = la(a, z(g, b));
                f.selector = a
            }
            return f
        };
        t = c.select = function (a, c, d, b) {
            var g, f, A, m, e = "function" === typeof a && a, r = !b &&
                v(a = e.selector || a);
            d = d || [];
            if (1 === r.length) {
                f = r[0] = r[0].slice(0);
                if (2 < f.length && "ID" === (A = f[0]).type && u.getById && 9 === c.nodeType && fa && D.relative[f[1].type]) {
                    c = (D.find.ID(A.matches[0].replace(pa, qa), c) || [])[0];
                    if (!c)return d;
                    e && (c = c.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (g = za.needsContext.test(a) ? 0 : f.length; g--;) {
                    A = f[g];
                    if (D.relative[m = A.type])break;
                    if (m = D.find[m])if (b = m(A.matches[0].replace(pa, qa), ta.test(f[0].type) && l(c.parentNode) || c)) {
                        f.splice(g, 1);
                        a = b.length && q(f);
                        if (!a)return S.apply(d,
                            b), d;
                        break
                    }
                }
            }
            (e || x(a, r))(b, c, !fa, d, ta.test(a) && l(c.parentNode) || c);
            return d
        };
        u.sortStable = O.split("").sort(M).join("") === O;
        u.detectDuplicates = !!N;
        y();
        u.sortDetached = g(function (a) {
            return a.compareDocumentPosition(P.createElement("div")) & 1
        });
        g(function (a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, c, d) {
            if (!d)return a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        });
        u.attributes && g(function (a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value",
                "");
            return "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, c, d) {
            if (!d && "input" === a.nodeName.toLowerCase())return a.defaultValue
        });
        g(function (a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, c, d) {
            var b;
            if (!d)return !0 === a[c] ? c.toLowerCase() : (b = a.getAttributeNode(c)) && b.specified ? b.value : null
        });
        return c
    }(b);
    m.find = ra;
    m.expr = ra.selectors;
    m.expr[":"] = m.expr.pseudos;
    m.unique = ra.uniqueSort;
    m.text = ra.getText;
    m.isXMLDoc = ra.isXML;
    m.contains = ra.contains;
    var za = m.expr.match.needsContext, Ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ja = /^.[^:#\[\.,]*$/;
    m.filter = function (a, c, d) {
        var b = c[0];
        d && (a = ":not(" + a + ")");
        return 1 === c.length && 1 === b.nodeType ? m.find.matchesSelector(b, a) ? [b] : [] : m.find.matches(a, m.grep(c, function (a) {
            return 1 === a.nodeType
        }))
    };
    m.fn.extend({
        find: function (a) {
            var c, d = this.length, b = [], g = this;
            if ("string" !== typeof a)return this.pushStack(m(a).filter(function () {
                for (c = 0; c <
                d; c++)if (m.contains(g[c], this))return !0
            }));
            for (c = 0; c < d; c++)m.find(a, g[c], b);
            b = this.pushStack(1 < d ? m.unique(b) : b);
            b.selector = this.selector ? this.selector + " " + a : a;
            return b
        }, filter: function (a) {
            return this.pushStack(t(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(t(this, a || [], !0))
        }, is: function (a) {
            return !!t(this, "string" === typeof a && za.test(a) ? m(a) : a || [], !1).length
        }
    });
    var sa, rb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (m.fn.init = function (a, c) {
        var d;
        if (!a)return this;
        if ("string" === typeof a) {
            d = "<" ===
            a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : rb.exec(a);
            if (!d || !d[1] && c)return !c || c.jquery ? (c || sa).find(a) : this.constructor(c).find(a);
            if (d[1]) {
                if (c = c instanceof m ? c[0] : c, m.merge(this, m.parseHTML(d[1], c && c.nodeType ? c.ownerDocument || c : F, !0)), Ea.test(d[1]) && m.isPlainObject(c))for (d in c)if (m.isFunction(this[d]))this[d](c[d]); else this.attr(d, c[d])
            } else(d = F.getElementById(d[2])) && d.parentNode && (this.length = 1, this[0] = d), this.context = F, this.selector = a;
            return this
        }
        if (a.nodeType)return this.context =
            this[0] = a, this.length = 1, this;
        if (m.isFunction(a))return "undefined" !== typeof sa.ready ? sa.ready(a) : a(m);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return m.makeArray(a, this)
    }).prototype = m.fn;
    sa = m(F);
    var sb = /^(?:parents|prev(?:Until|All))/, tb = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, c, d) {
            for (var b = [], g = void 0 !== d; (a = a[c]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (g && m(a).is(d))break;
                b.push(a)
            }
            return b
        }, sibling: function (a, c) {
            for (var d = []; a; a = a.nextSibling)1 ===
            a.nodeType && a !== c && d.push(a);
            return d
        }
    });
    m.fn.extend({
        has: function (a) {
            var c = m(a, this), d = c.length;
            return this.filter(function () {
                for (var a = 0; a < d; a++)if (m.contains(this, c[a]))return !0
            })
        }, closest: function (a, c) {
            for (var d, b = 0, g = this.length, f = [], e = za.test(a) || "string" !== typeof a ? m(a, c || this.context) : 0; b < g; b++)for (d = this[b]; d && d !== c; d = d.parentNode)if (11 > d.nodeType && (e ? -1 < e.index(d) : 1 === d.nodeType && m.find.matchesSelector(d, a))) {
                f.push(d);
                break
            }
            return this.pushStack(1 < f.length ? m.unique(f) : f)
        }, index: function (a) {
            return a ?
                "string" === typeof a ? ga.call(m(a), this[0]) : ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, c) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, c))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    m.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, c, d) {
            return m.dir(a, "parentNode", d)
        }, next: function (a) {
            return p(a,
                "nextSibling")
        }, prev: function (a) {
            return p(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, c, d) {
            return m.dir(a, "nextSibling", d)
        }, prevUntil: function (a, c, d) {
            return m.dir(a, "previousSibling", d)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || m.merge([], a.childNodes)
        }
    }, function (a,
                 c) {
        m.fn[a] = function (d, b) {
            var g = m.map(this, c, d);
            "Until" !== a.slice(-5) && (b = d);
            b && "string" === typeof b && (g = m.filter(b, g));
            1 < this.length && (tb[a] || m.unique(g), sb.test(a) && g.reverse());
            return this.pushStack(g)
        }
    });
    var ha = /\S+/g, Ra = {};
    m.Callbacks = function (a) {
        a = "string" === typeof a ? Ra[a] || u(a) : m.extend({}, a);
        var c, d, b, g, f, e, r = [], k = !a.once && [], l = function (m) {
            c = a.memory && m;
            d = !0;
            e = g || 0;
            g = 0;
            f = r.length;
            for (b = !0; r && e < f; e++)if (!1 === r[e].apply(m[0], m[1]) && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1;
            r && (k ? k.length && l(k.shift()) : c ?
                r = [] : C.disable())
        }, C = {
            add: function () {
                if (r) {
                    var d = r.length;
                    (function qb(c) {
                        m.each(c, function (c, d) {
                            var b = m.type(d);
                            "function" === b ? a.unique && C.has(d) || r.push(d) : d && d.length && "string" !== b && qb(d)
                        })
                    })(arguments);
                    b ? f = r.length : c && (g = d, l(c))
                }
                return this
            }, remove: function () {
                r && m.each(arguments, function (a, c) {
                    for (var d; -1 < (d = m.inArray(c, r, d));)r.splice(d, 1), b && (d <= f && f--, d <= e && e--)
                });
                return this
            }, has: function (a) {
                return a ? -1 < m.inArray(a, r) : !(!r || !r.length)
            }, empty: function () {
                r = [];
                f = 0;
                return this
            }, disable: function () {
                r =
                    k = c = void 0;
                return this
            }, disabled: function () {
                return !r
            }, lock: function () {
                k = void 0;
                c || C.disable();
                return this
            }, locked: function () {
                return !k
            }, fireWith: function (a, c) {
                !r || d && !k || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? k.push(c) : l(c));
                return this
            }, fire: function () {
                C.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!d
            }
        };
        return C
    };
    m.extend({
        Deferred: function (a) {
            var c = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress",
                m.Callbacks("memory")]], d = "pending", b = {
                state: function () {
                    return d
                }, always: function () {
                    g.done(arguments).fail(arguments);
                    return this
                }, then: function () {
                    var a = arguments;
                    return m.Deferred(function (d) {
                        m.each(c, function (c, f) {
                            var A = m.isFunction(a[c]) && a[c];
                            g[f[1]](function () {
                                var a = A && A.apply(this, arguments);
                                if (a && m.isFunction(a.promise))a.promise().done(d.resolve).fail(d.reject).progress(d.notify); else d[f[0] + "With"](this === b ? d.promise() : this, A ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                }, promise: function (a) {
                    return null !=
                    a ? m.extend(a, b) : b
                }
            }, g = {};
            b.pipe = b.then;
            m.each(c, function (a, f) {
                var A = f[2], m = f[3];
                b[f[1]] = A.add;
                m && A.add(function () {
                    d = m
                }, c[a ^ 1][2].disable, c[2][2].lock);
                g[f[0]] = function () {
                    g[f[0] + "With"](this === g ? b : this, arguments);
                    return this
                };
                g[f[0] + "With"] = A.fireWith
            });
            b.promise(g);
            a && a.call(g, g);
            return g
        }, when: function (a) {
            var c = 0, d = Q.call(arguments), b = d.length, g = 1 !== b || a && m.isFunction(a.promise) ? b : 0, f = 1 === g ? a : m.Deferred(), e = function (a, c, d) {
                return function (b) {
                    c[a] = this;
                    d[a] = 1 < arguments.length ? Q.call(arguments) : b;
                    d === r ? f.notifyWith(c, d) : --g || f.resolveWith(c, d)
                }
            }, r, k, l;
            if (1 < b)for (r = Array(b), k = Array(b), l = Array(b); c < b; c++)d[c] && m.isFunction(d[c].promise) ? d[c].promise().done(e(c, l, d)).fail(f.reject).progress(e(c, k, r)) : --g;
            g || f.resolveWith(l, d);
            return f.promise()
        }
    });
    var Fa;
    m.fn.ready = function (a) {
        m.ready.promise().done(a);
        return this
    };
    m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            (!0 === a ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== a && 0 < --m.readyWait || (Fa.resolveWith(F,
                [m]), m.fn.triggerHandler && (m(F).triggerHandler("ready"), m(F).off("ready"))))
        }
    });
    m.ready.promise = function (a) {
        Fa || (Fa = m.Deferred(), "complete" === F.readyState ? setTimeout(m.ready) : (F.addEventListener("DOMContentLoaded", h, !1), b.addEventListener("load", h, !1)));
        return Fa.promise(a)
    };
    m.ready.promise();
    var na = m.access = function (a, c, d, b, g, f, e) {
        var r = 0, k = a.length, l = null == d;
        if ("object" === m.type(d))for (r in g = !0, d)m.access(a, c, r, d[r], !0, f, e); else if (void 0 !== b && (g = !0, m.isFunction(b) || (e = !0), l && (e ? (c.call(a, b), c =
                null) : (l = c, c = function (a, c, d) {
                return l.call(m(a), d)
            })), c))for (; r < k; r++)c(a[r], d, e ? b : b.call(a[r], r, c(a[r], d)));
        return g ? a : l ? c.call(a) : k ? c(a[0], d) : f
    };
    m.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    l.uid = 1;
    l.accepts = m.acceptData;
    l.prototype = {
        key: function (a) {
            if (!l.accepts(a))return 0;
            var c = {}, d = a[this.expando];
            if (!d) {
                d = l.uid++;
                try {
                    c[this.expando] = {value: d}, Object.defineProperties(a, c)
                } catch (b) {
                    c[this.expando] = d, m.extend(a, c)
                }
            }
            this.cache[d] || (this.cache[d] = {});
            return d
        }, set: function (a,
                          c, d) {
            var b;
            a = this.key(a);
            var g = this.cache[a];
            if ("string" === typeof c)g[c] = d; else if (m.isEmptyObject(g))m.extend(this.cache[a], c); else for (b in c)g[b] = c[b];
            return g
        }, get: function (a, c) {
            var d = this.cache[this.key(a)];
            return void 0 === c ? d : d[c]
        }, access: function (a, c, d) {
            if (void 0 === c || c && "string" === typeof c && void 0 === d)return d = this.get(a, c), void 0 !== d ? d : this.get(a, m.camelCase(c));
            this.set(a, c, d);
            return void 0 !== d ? d : c
        }, remove: function (a, c) {
            var d, b;
            d = this.key(a);
            var g = this.cache[d];
            if (void 0 === c)this.cache[d] =
            {}; else for (m.isArray(c) ? b = c.concat(c.map(m.camelCase)) : (d = m.camelCase(c), c in g ? b = [c, d] : (b = d, b = b in g ? [b] : b.match(ha) || [])), d = b.length; d--;)delete g[b[d]]
        }, hasData: function (a) {
            return !m.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var H = new l, X = new l, mb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, lb = /([A-Z])/g;
    m.extend({
        hasData: function (a) {
            return X.hasData(a) || H.hasData(a)
        }, data: function (a, c, d) {
            return X.access(a, c, d)
        }, removeData: function (a,
                                 c) {
            X.remove(a, c)
        }, _data: function (a, c, d) {
            return H.access(a, c, d)
        }, _removeData: function (a, c) {
            H.remove(a, c)
        }
    });
    m.fn.extend({
        data: function (a, c) {
            var d, b, g, f = this[0], r = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (g = X.get(f), 1 === f.nodeType && !H.get(f, "hasDataAttrs"))) {
                    for (d = r.length; d--;)r[d] && (b = r[d].name, 0 === b.indexOf("data-") && (b = m.camelCase(b.slice(5)), e(f, b, g[b])));
                    H.set(f, "hasDataAttrs", !0)
                }
                return g
            }
            return "object" === typeof a ? this.each(function () {
                X.set(this, a)
            }) : na(this, function (c) {
                var d, b = m.camelCase(a);
                if (f && void 0 === c) {
                    d = X.get(f, a);
                    if (void 0 !== d)return d;
                    d = X.get(f, b);
                    if (void 0 !== d)return d;
                    d = e(f, b, void 0);
                    if (void 0 !== d)return d
                } else this.each(function () {
                    var d = X.get(this, b);
                    X.set(this, b, c);
                    -1 !== a.indexOf("-") && void 0 !== d && X.set(this, a, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                X.remove(this, a)
            })
        }
    });
    m.extend({
        queue: function (a, c, d) {
            var b;
            if (a)return c = (c || "fx") + "queue", b = H.get(a, c), d && (!b || m.isArray(d) ? b = H.access(a, c, m.makeArray(d)) : b.push(d)), b ||
            []
        }, dequeue: function (a, c) {
            c = c || "fx";
            var d = m.queue(a, c), b = d.length, g = d.shift(), f = m._queueHooks(a, c), e = function () {
                m.dequeue(a, c)
            };
            "inprogress" === g && (g = d.shift(), b--);
            g && ("fx" === c && d.unshift("inprogress"), delete f.stop, g.call(a, e, f));
            !b && f && f.empty.fire()
        }, _queueHooks: function (a, c) {
            var d = c + "queueHooks";
            return H.get(a, d) || H.access(a, d, {
                    empty: m.Callbacks("once memory").add(function () {
                        H.remove(a, [c + "queue", d])
                    })
                })
        }
    });
    m.fn.extend({
        queue: function (a, c) {
            var d = 2;
            "string" !== typeof a && (c = a, a = "fx", d--);
            return arguments.length <
            d ? m.queue(this[0], a) : void 0 === c ? this : this.each(function () {
                var d = m.queue(this, a, c);
                m._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && m.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, b = 1, g = m.Deferred(), f = this, e = this.length, r = function () {
                --b || g.resolveWith(f, [f])
            };
            "string" !== typeof a && (c = a, a = void 0);
            for (a = a || "fx"; e--;)(d = H.get(f[e], a + "queueHooks")) && d.empty && (b++, d.empty.add(r));
            r();
            return g.promise(c)
        }
    });
    var Ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, oa = ["Top", "Right", "Bottom", "Left"], ka = function (a, c) {
        a = c || a;
        return "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, Va = /^(?:checkbox|radio)$/i;
    (function () {
        var a = F.createDocumentFragment().appendChild(F.createElement("div")), c = F.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        a.appendChild(c);
        M.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        M.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    M.focusinBubbles = "onfocusin" in b;
    var ub = /^key/, vb = /^(?:mouse|pointer|contextmenu)|click/, Wa = /^(?:focusinfocus|focusoutblur)$/, Xa = /^([^.]*)(?:\.(.+)|)$/;
    m.event = {
        global: {},
        add: function (a, c, d, b, g) {
            var f, e, r, k, l, C, h, q, E;
            if (l = H.get(a))for (d.handler && (f = d, d = f.handler, g = f.selector), d.guid || (d.guid = m.guid++), (k = l.events) || (k = l.events = {}), (e = l.handle) || (e = l.handle = function (c) {
                return "undefined" !== typeof m && m.event.triggered !==
                c.type ? m.event.dispatch.apply(a, arguments) : void 0
            }), c = (c || "").match(ha) || [""], l = c.length; l--;)r = Xa.exec(c[l]) || [], q = C = r[1], E = (r[2] || "").split(".").sort(), q && (r = m.event.special[q] || {}, q = (g ? r.delegateType : r.bindType) || q, r = m.event.special[q] || {}, C = m.extend({
                type: q,
                origType: C,
                data: b,
                handler: d,
                guid: d.guid,
                selector: g,
                needsContext: g && m.expr.match.needsContext.test(g),
                namespace: E.join(".")
            }, f), (h = k[q]) || (h = k[q] = [], h.delegateCount = 0, r.setup && !1 !== r.setup.call(a, b, E, e) || a.addEventListener && a.addEventListener(q,
                e, !1)), r.add && (r.add.call(a, C), C.handler.guid || (C.handler.guid = d.guid)), g ? h.splice(h.delegateCount++, 0, C) : h.push(C), m.event.global[q] = !0)
        },
        remove: function (a, c, d, b, g) {
            var f, e, r, k, l, C, q, h, E, L, p, K = H.hasData(a) && H.get(a);
            if (K && (k = K.events)) {
                c = (c || "").match(ha) || [""];
                for (l = c.length; l--;)if (r = Xa.exec(c[l]) || [], E = p = r[1], L = (r[2] || "").split(".").sort(), E) {
                    q = m.event.special[E] || {};
                    E = (b ? q.delegateType : q.bindType) || E;
                    h = k[E] || [];
                    r = r[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (e = f = h.length; f--;)C =
                        h[f], !g && p !== C.origType || d && d.guid !== C.guid || r && !r.test(C.namespace) || b && b !== C.selector && ("**" !== b || !C.selector) || (h.splice(f, 1), C.selector && h.delegateCount--, q.remove && q.remove.call(a, C));
                    e && !h.length && (q.teardown && !1 !== q.teardown.call(a, L, K.handle) || m.removeEvent(a, E, K.handle), delete k[E])
                } else for (E in k)m.event.remove(a, E + c[l], d, b, !0);
                m.isEmptyObject(k) && (delete K.handle, H.remove(a, "events"))
            }
        },
        trigger: function (a, c, d, g) {
            var f, e, r, k, l, C, q = [d || F], h = da.call(a, "type") ? a.type : a;
            C = da.call(a, "namespace") ?
                a.namespace.split(".") : [];
            e = f = d = d || F;
            if (3 !== d.nodeType && 8 !== d.nodeType && !Wa.test(h + m.event.triggered) && (0 <= h.indexOf(".") && (C = h.split("."), h = C.shift(), C.sort()), k = 0 > h.indexOf(":") && "on" + h, a = a[m.expando] ? a : new m.Event(h, "object" === typeof a && a), a.isTrigger = g ? 2 : 3, a.namespace = C.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = d), c = null == c ? [a] : m.makeArray(c, [a]), C = m.event.special[h] || {}, g || !C.trigger || !1 !== C.trigger.apply(d,
                    c))) {
                if (!g && !C.noBubble && !m.isWindow(d)) {
                    r = C.delegateType || h;
                    Wa.test(r + h) || (e = e.parentNode);
                    for (; e; e = e.parentNode)q.push(e), f = e;
                    f === (d.ownerDocument || F) && q.push(f.defaultView || f.parentWindow || b)
                }
                for (f = 0; (e = q[f++]) && !a.isPropagationStopped();)a.type = 1 < f ? r : C.bindType || h, (l = (H.get(e, "events") || {})[a.type] && H.get(e, "handle")) && l.apply(e, c), (l = k && e[k]) && l.apply && m.acceptData(e) && (a.result = l.apply(e, c), !1 === a.result && a.preventDefault());
                a.type = h;
                g || a.isDefaultPrevented() || C._default && !1 !== C._default.apply(q.pop(),
                    c) || !m.acceptData(d) || !k || !m.isFunction(d[h]) || m.isWindow(d) || ((f = d[k]) && (d[k] = null), m.event.triggered = h, d[h](), m.event.triggered = void 0, f && (d[k] = f));
                return a.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var c, d, b, g, f = [], e = Q.call(arguments);
            c = (H.get(this, "events") || {})[a.type] || [];
            var r = m.event.special[a.type] || {};
            e[0] = a;
            a.delegateTarget = this;
            if (!r.preDispatch || !1 !== r.preDispatch.call(this, a)) {
                f = m.event.handlers.call(this, a, c);
                for (c = 0; (g = f[c++]) && !a.isPropagationStopped();)for (a.currentTarget = g.elem,
                                                                                d = 0; (b = g.handlers[d++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(b.namespace))a.handleObj = b, a.data = b.data, b = ((m.event.special[b.origType] || {}).handle || b.handler).apply(g.elem, e), void 0 !== b && !1 === (a.result = b) && (a.preventDefault(), a.stopPropagation());
                r.postDispatch && r.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function (a, c) {
            var d, b, g, f, e = [], r = c.delegateCount, k = a.target;
            if (r && k.nodeType && (!a.button || "click" !== a.type))for (; k !== this; k = k.parentNode || this)if (!0 !==
                k.disabled || "click" !== a.type) {
                b = [];
                for (d = 0; d < r; d++)f = c[d], g = f.selector + " ", void 0 === b[g] && (b[g] = f.needsContext ? 0 <= m(g, this).index(k) : m.find(g, this, null, [k]).length), b[g] && b.push(f);
                b.length && e.push({elem: k, handlers: b})
            }
            r < c.length && e.push({elem: this, handlers: c.slice(r)});
            return e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a, c) {
                null ==
                a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, b, g = c.button;
                null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || F, b = d.documentElement, d = d.body, a.pageX = c.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0));
                a.which ||
                void 0 === g || (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[m.expando])return a;
            var c, d, b;
            c = a.type;
            var g = a, f = this.fixHooks[c];
            f || (this.fixHooks[c] = f = vb.test(c) ? this.mouseHooks : ub.test(c) ? this.keyHooks : {});
            b = f.props ? this.props.concat(f.props) : this.props;
            a = new m.Event(g);
            for (c = b.length; c--;)d = b[c], a[d] = g[d];
            a.target || (a.target = F);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return f.filter ? f.filter(a, g) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== z() && this.focus)return this.focus(),
                        !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === z() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && m.nodeName(this, "input"))return this.click(), !1
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, c, d, b) {
            a = m.extend(new m.Event, d, {type: a, isSimulated: !0, originalEvent: {}});
            b ? m.event.trigger(a, null, c) : m.event.dispatch.call(c, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    m.removeEvent = function (a, c, d) {
        a.removeEventListener && a.removeEventListener(c, d, !1)
    };
    m.Event = function (a, c) {
        if (!(this instanceof m.Event))return new m.Event(a, c);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? k : q) : this.type = a;
        c && m.extend(this, c);
        this.timeStamp = a && a.timeStamp || m.now();
        this[m.expando] = !0
    };
    m.Event.prototype =
    {
        isDefaultPrevented: q, isPropagationStopped: q, isImmediatePropagationStopped: q, preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = k;
        a && a.preventDefault && a.preventDefault()
    }, stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped = k;
        a && a.stopPropagation && a.stopPropagation()
    }, stopImmediatePropagation: function () {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = k;
        a && a.stopImmediatePropagation && a.stopImmediatePropagation();
        this.stopPropagation()
    }
    };
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, c) {
        m.event.special[a] = {
            delegateType: c, bindType: c, handle: function (a) {
                var d, b = a.relatedTarget, g = a.handleObj;
                if (!b || b !== this && !m.contains(this, b))a.type = g.origType, d = g.handler.apply(this, arguments), a.type = c;
                return d
            }
        }
    });
    M.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, c) {
        var d = function (a) {
            m.event.simulate(c, a.target, m.event.fix(a), !0)
        };
        m.event.special[c] = {
            setup: function () {
                var b =
                    this.ownerDocument || this, g = H.access(b, c);
                g || b.addEventListener(a, d, !0);
                H.access(b, c, (g || 0) + 1)
            }, teardown: function () {
                var b = this.ownerDocument || this, g = H.access(b, c) - 1;
                g ? H.access(b, c, g) : (b.removeEventListener(a, d, !0), H.remove(b, c))
            }
        }
    });
    m.fn.extend({
        on: function (a, c, d, b, g) {
            var f, e;
            if ("object" === typeof a) {
                "string" !== typeof c && (d = d || c, c = void 0);
                for (e in a)this.on(e, c, d, a[e], g);
                return this
            }
            null == d && null == b ? (b = c, d = c = void 0) : null == b && ("string" === typeof c ? (b = d, d = void 0) : (b = d, d = c, c = void 0));
            if (!1 === b)b = q; else if (!b)return this;
            1 === g && (f = b, b = function (a) {
                m().off(a);
                return f.apply(this, arguments)
            }, b.guid = f.guid || (f.guid = m.guid++));
            return this.each(function () {
                m.event.add(this, a, b, d, c)
            })
        }, one: function (a, c, d, b) {
            return this.on(a, c, d, b, 1)
        }, off: function (a, c, d) {
            var b;
            if (a && a.preventDefault && a.handleObj)return b = a.handleObj, m(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), this;
            if ("object" === typeof a) {
                for (b in a)this.off(b, c, a[b]);
                return this
            }
            if (!1 === c || "function" === typeof c)d = c, c = void 0;
            !1 === d && (d = q);
            return this.each(function () {
                m.event.remove(this, a, d, c)
            })
        }, trigger: function (a, c) {
            return this.each(function () {
                m.event.trigger(a, c, this)
            })
        }, triggerHandler: function (a, c) {
            var d = this[0];
            if (d)return m.event.trigger(a, c, d, !0)
        }
    });
    var Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Za = /<([\w:]+)/, wb = /<|&#?\w+;/, xb = /<(?:script|style|link)/i, yb = /checked\s*(?:[^=]|=\s*.checked.)/i, $a = /^$|\/(?:java|ecma)script/i, nb = /^true\/(.*)/, zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ea = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ea.optgroup = ea.option;
    ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
    ea.th = ea.td;
    m.extend({
        clone: function (d, b, g) {
            var f, e, r, k, l = d.cloneNode(!0), C = m.contains(d.ownerDocument, d);
            if (!(M.noCloneChecked || 1 !== d.nodeType && 11 !== d.nodeType || m.isXMLDoc(d)))for (k =
                                                                                                       c(l), r = c(d), f = 0, e = r.length; f < e; f++) {
                var h = r[f], q = k[f], E = q.nodeName.toLowerCase();
                if ("input" === E && Va.test(h.type))q.checked = h.checked; else if ("input" === E || "textarea" === E)q.defaultValue = h.defaultValue
            }
            if (b)if (g)for (r = r || c(d), k = k || c(l), f = 0, e = r.length; f < e; f++)a(r[f], k[f]); else a(d, l);
            k = c(l, "script");
            0 < k.length && B(k, !C && c(d, "script"));
            return l
        }, buildFragment: function (a, d, b, g) {
            for (var f, e, r, k = d.createDocumentFragment(), l = [], C = 0, h = a.length; C < h; C++)if ((f = a[C]) || 0 === f)if ("object" === m.type(f))m.merge(l, f.nodeType ?
                [f] : f); else if (wb.test(f)) {
                e = e || k.appendChild(d.createElement("div"));
                r = (Za.exec(f) || ["", ""])[1].toLowerCase();
                r = ea[r] || ea._default;
                e.innerHTML = r[1] + f.replace(Ya, "<$1></$2>") + r[2];
                for (r = r[0]; r--;)e = e.lastChild;
                m.merge(l, e.childNodes);
                e = k.firstChild;
                e.textContent = ""
            } else l.push(d.createTextNode(f));
            k.textContent = "";
            for (C = 0; f = l[C++];)if (!g || -1 === m.inArray(f, g))if (a = m.contains(f.ownerDocument, f), e = c(k.appendChild(f), "script"), a && B(e), b)for (r = 0; f = e[r++];)$a.test(f.type || "") && b.push(f);
            return k
        }, cleanData: function (a) {
            for (var c,
                     d, b, g, f = m.event.special, e = 0; void 0 !== (d = a[e]); e++) {
                if (m.acceptData(d) && (g = d[H.expando]) && (c = H.cache[g])) {
                    if (c.events)for (b in c.events)f[b] ? m.event.remove(d, b) : m.removeEvent(d, b, c.handle);
                    H.cache[g] && delete H.cache[g]
                }
                delete X.cache[d[X.expando]]
            }
        }
    });
    m.fn.extend({
        text: function (a) {
            return na(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().each(function () {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)this.textContent = a
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments,
                function (a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || v(this, a).appendChild(a)
                })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = v(this, a);
                    c.insertBefore(a, c.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, d) {
            for (var b, g = a ? m.filter(a, this) : this, f = 0; null != (b = g[f]); f++)d || 1 !== b.nodeType || m.cleanData(c(b)), b.parentNode && (d && m.contains(b.ownerDocument, b) && B(c(b, "script")), b.parentNode.removeChild(b));
            return this
        }, empty: function () {
            for (var a, d = 0; null != (a = this[d]); d++)1 === a.nodeType && (m.cleanData(c(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, c) {
            a = null == a ? !1 : a;
            c = null == c ? a : c;
            return this.map(function () {
                return m.clone(this, a, c)
            })
        }, html: function (a) {
            return na(this, function (a) {
                var d =
                    this[0] || {}, b = 0, g = this.length;
                if (void 0 === a && 1 === d.nodeType)return d.innerHTML;
                if ("string" === typeof a && !xb.test(a) && !ea[(Za.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ya, "<$1></$2>");
                    try {
                        for (; b < g; b++)d = this[b] || {}, 1 === d.nodeType && (m.cleanData(c(d, !1)), d.innerHTML = a);
                        d = 0
                    } catch (f) {
                    }
                }
                d && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            this.domManip(arguments, function (d) {
                a = this.parentNode;
                m.cleanData(c(this));
                a && a.replaceChild(d, this)
            });
            return a && (a.length ||
            a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, d) {
            a = la.apply([], a);
            var b, g, f, e, r = 0, k = this.length, l = this, C = k - 1, h = a[0], q = m.isFunction(h);
            if (q || 1 < k && "string" === typeof h && !M.checkClone && yb.test(h))return this.each(function (c) {
                var b = l.eq(c);
                q && (a[0] = h.call(this, c, b.html()));
                b.domManip(a, d)
            });
            if (k && (b = m.buildFragment(a, this[0].ownerDocument, !1, this), g = b.firstChild, 1 === b.childNodes.length && (b = g), g)) {
                g = m.map(c(b, "script"), y);
                for (f = g.length; r < k; r++)e = b, r !==
                C && (e = m.clone(e, !0, !0), f && m.merge(g, c(e, "script"))), d.call(this[r], e, r);
                if (f)for (b = g[g.length - 1].ownerDocument, m.map(g, J), r = 0; r < f; r++)e = g[r], $a.test(e.type || "") && !H.access(e, "globalEval") && m.contains(b, e) && (e.src ? m._evalUrl && m._evalUrl(e.src) : m.globalEval(e.textContent.replace(zb, "")))
            }
            return this
        }
    });
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, c) {
        m.fn[a] = function (a) {
            for (var d = [], b = m(a), g = b.length - 1, f = 0; f <= g; f++)a = f ===
            g ? this : this.clone(!0), m(b[f])[c](a), ia.apply(d, a.get());
            return this.pushStack(d)
        }
    });
    var wa, Sa = {}, Ta = /^margin/, Ka = new RegExp("^(" + Ga + ")(?!px)[a-z%]+$", "i"), Ca = function (a) {
        return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : b.getComputedStyle(a, null)
    };
    (function () {
        function a() {
            e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            e.innerHTML = "";
            g.appendChild(f);
            var r = b.getComputedStyle(e, null);
            c = "1%" !== r.top;
            d = "4px" === r.width;
            g.removeChild(f)
        }

        var c, d, g = F.documentElement, f = F.createElement("div"), e = F.createElement("div");
        e.style && (e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = "content-box" === e.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(e), b.getComputedStyle && m.extend(M, {
            pixelPosition: function () {
                a();
                return c
            }, boxSizingReliable: function () {
                null == d && a();
                return d
            }, reliableMarginRight: function () {
                var a, c = e.appendChild(F.createElement("div"));
                c.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                c.style.marginRight = c.style.width = "0";
                e.style.width = "1px";
                g.appendChild(f);
                a = !parseFloat(b.getComputedStyle(c, null).marginRight);
                g.removeChild(f);
                e.removeChild(c);
                return a
            }
        }))
    })();
    m.swap = function (a, c, d, b) {
        var g,
            f = {};
        for (g in c)f[g] = a.style[g], a.style[g] = c[g];
        d = d.apply(a, b || []);
        for (g in c)a.style[g] = f[g];
        return d
    };
    var Ab = /^(none|table(?!-c[ea]).+)/, ob = new RegExp("^(" + Ga + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Ga + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ab = {letterSpacing: "0", fontWeight: "400"}, Ua = ["Webkit", "O", "Moz", "ms"];
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, c) {
                    if (c) {
                        var d = f(a, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        }, cssNumber: {
            columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0,
            fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
        }, cssProps: {"float": "cssFloat"}, style: function (a, c, d, b) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var g, f, e, r = m.camelCase(c), k = a.style;
                c = m.cssProps[r] || (m.cssProps[r] = C(k, r));
                e = m.cssHooks[c] || m.cssHooks[r];
                if (void 0 !== d)f = typeof d, "string" === f && (g = Bb.exec(d)) && (d = (g[1] + 1) * g[2] + parseFloat(m.css(a, c)), f = "number"), null != d && d === d && ("number" !== f || m.cssNumber[r] || (d += "px"), M.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") ||
                (k[c] = "inherit"), e && "set" in e && void 0 === (d = e.set(a, d, b)) || (k[c] = d)); else return e && "get" in e && void 0 !== (g = e.get(a, !1, b)) ? g : k[c]
            }
        }, css: function (a, c, d, b) {
            var g, e;
            e = m.camelCase(c);
            c = m.cssProps[e] || (m.cssProps[e] = C(a.style, e));
            (e = m.cssHooks[c] || m.cssHooks[e]) && "get" in e && (g = e.get(a, !0, d));
            void 0 === g && (g = f(a, c, b));
            "normal" === g && c in ab && (g = ab[c]);
            return "" === d || d ? (a = parseFloat(g), !0 === d || m.isNumeric(a) ? a || 0 : g) : g
        }
    });
    m.each(["height", "width"], function (a, c) {
        m.cssHooks[c] = {
            get: function (a, d, b) {
                if (d)return Ab.test(m.css(a,
                    "display")) && 0 === a.offsetWidth ? m.swap(a, Cb, function () {
                    return R(a, c, b)
                }) : R(a, c, b)
            }, set: function (a, d, b) {
                var g = b && Ca(a);
                return E(a, d, b ? L(a, c, b, "border-box" === m.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    m.cssHooks.marginRight = r(M.reliableMarginRight, function (a, c) {
        if (c)return m.swap(a, {display: "inline-block"}, f, [a, "marginRight"])
    });
    m.each({margin: "", padding: "", border: "Width"}, function (a, c) {
        m.cssHooks[a + c] = {
            expand: function (d) {
                var b = 0, g = {};
                for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > b; b++)g[a + oa[b] + c] = d[b] || d[b -
                    2] || d[0];
                return g
            }
        };
        Ta.test(a) || (m.cssHooks[a + c].set = E)
    });
    m.fn.extend({
        css: function (a, c) {
            return na(this, function (a, c, d) {
                var b, g = {}, f = 0;
                if (m.isArray(c)) {
                    d = Ca(a);
                    for (b = c.length; f < b; f++)g[c[f]] = m.css(a, c[f], !1, d);
                    return g
                }
                return void 0 !== d ? m.style(a, c, d) : m.css(a, c)
            }, a, c, 1 < arguments.length)
        }, show: function () {
            return D(this, !0)
        }, hide: function () {
            return D(this)
        }, toggle: function (a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ka(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    m.Tween =
        N;
    N.prototype = {
        constructor: N, init: function (a, c, d, b, g, f) {
            this.elem = a;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = b;
            this.unit = f || (m.cssNumber[d] ? "" : "px")
        }, cur: function () {
            var a = N.propHooks[this.prop];
            return a && a.get ? a.get(this) : N.propHooks._default.get(this)
        }, run: function (a) {
            var c, d = N.propHooks[this.prop];
            this.pos = this.options.duration ? c = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : c = a;
            this.now = (this.end - this.start) * c + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            d && d.set ? d.set(this) : N.propHooks._default.set(this);
            return this
        }
    };
    N.prototype.init.prototype = N.prototype;
    N.propHooks = {
        _default: {
            get: function (a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = m.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            }, set: function (a) {
                if (m.fx.step[a.prop])m.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop,
                    a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    m.fx = N.prototype.init;
    m.fx.step = {};
    var ua, Ha, Db = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + Ga + ")([a-z%]*)$", "i"), Eb = /queueHooks$/, Da = [function (a, c, d) {
        var b, f, e, r, k, l, C = this, h = {}, q = a.style, E = a.nodeType && ka(a), L = H.get(a, "fxshow");
        d.queue ||
        (r = m._queueHooks(a, "fx"), null == r.unqueued && (r.unqueued = 0, k = r.empty.fire, r.empty.fire = function () {
            r.unqueued || k()
        }), r.unqueued++, C.always(function () {
            C.always(function () {
                r.unqueued--;
                m.queue(a, "fx").length || r.empty.fire()
            })
        }));
        1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [q.overflow, q.overflowX, q.overflowY], l = m.css(a, "display"), f = "none" === l ? H.get(a, "olddisplay") || g(a.nodeName) : l, "inline" === f && "none" === m.css(a, "float") && (q.display = "inline-block"));
        d.overflow && (q.overflow = "hidden", C.always(function () {
            q.overflow =
                d.overflow[0];
            q.overflowX = d.overflow[1];
            q.overflowY = d.overflow[2]
        }));
        for (b in c)if (f = c[b], Db.exec(f)) {
            delete c[b];
            e = e || "toggle" === f;
            if (f === (E ? "hide" : "show"))if ("show" === f && L && void 0 !== L[b])E = !0; else continue;
            h[b] = L && L[b] || m.style(a, b)
        } else l = void 0;
        if (m.isEmptyObject(h))"inline" === ("none" === l ? g(a.nodeName) : l) && (q.display = l); else for (b in L ? "hidden" in L && (E = L.hidden) : L = H.access(a, "fxshow", {}), e && (L.hidden = !E), E ? m(a).show() : C.done(function () {
            m(a).hide()
        }), C.done(function () {
            var c;
            H.remove(a, "fxshow");
            for (c in h)m.style(a, c, h[c])
        }), h)c = K(E ? L[b] : 0, b, C), b in L || (L[b] = c.start, E && (c.end = c.start, c.start = "width" === b || "height" === b ? 1 : 0))
    }], xa = {
        "*": [function (a, c) {
            var d = this.createTween(a, c), b = d.cur(), g = bb.exec(c), f = g && g[3] || (m.cssNumber[a] ? "" : "px"), e = (m.cssNumber[a] || "px" !== f && +b) && bb.exec(m.css(d.elem, a)), r = 1, k = 20;
            if (e && e[3] !== f) {
                f = f || e[3];
                g = g || [];
                e = +b || 1;
                do r = r || ".5", e /= r, m.style(d.elem, a, e + f); while (r !== (r = d.cur() / b) && 1 !== r && --k)
            }
            g && (e = d.start = +e || +b || 0, d.unit = f, d.end = g[1] ? e + (g[1] + 1) * g[2] : +g[2]);
            return d
        }]
    };
    m.Animation = m.extend(Z, {
        tweener: function (a, c) {
            m.isFunction(a) ? (c = a, a = ["*"]) : a = a.split(" ");
            for (var d, b = 0, g = a.length; b < g; b++)d = a[b], xa[d] = xa[d] || [], xa[d].unshift(c)
        }, prefilter: function (a, c) {
            c ? Da.unshift(a) : Da.push(a)
        }
    });
    m.speed = function (a, c, d) {
        var b = a && "object" === typeof a ? m.extend({}, a) : {
            complete: d || !d && c || m.isFunction(a) && a,
            duration: a,
            easing: d && c || c && !m.isFunction(c) && c
        };
        b.duration = m.fx.off ? 0 : "number" === typeof b.duration ? b.duration : b.duration in m.fx.speeds ? m.fx.speeds[b.duration] : m.fx.speeds._default;
        if (null == b.queue || !0 === b.queue)b.queue = "fx";
        b.old = b.complete;
        b.complete = function () {
            m.isFunction(b.old) && b.old.call(this);
            b.queue && m.dequeue(this, b.queue)
        };
        return b
    };
    m.fn.extend({
        fadeTo: function (a, c, d, b) {
            return this.filter(ka).css("opacity", 0).show().end().animate({opacity: c}, a, d, b)
        }, animate: function (a, c, d, b) {
            var g = m.isEmptyObject(a), f = m.speed(c, d, b);
            c = function () {
                var c = Z(this, m.extend({}, a), f);
                (g || H.get(this, "finish")) && c.stop(!0)
            };
            c.finish = c;
            return g || !1 === f.queue ? this.each(c) : this.queue(f.queue,
                c)
        }, stop: function (a, c, d) {
            var b = function (a) {
                var c = a.stop;
                delete a.stop;
                c(d)
            };
            "string" !== typeof a && (d = c, c = a, a = void 0);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function () {
                var c = !0, g = null != a && a + "queueHooks", f = m.timers, e = H.get(this);
                if (g)e[g] && e[g].stop && b(e[g]); else for (g in e)e[g] && e[g].stop && Eb.test(g) && b(e[g]);
                for (g = f.length; g--;)f[g].elem !== this || null != a && f[g].queue !== a || (f[g].anim.stop(d), c = !1, f.splice(g, 1));
                !c && d || m.dequeue(this, a)
            })
        }, finish: function (a) {
            !1 !== a && (a = a || "fx");
            return this.each(function () {
                var c,
                    d = H.get(this), b = d[a + "queue"];
                c = d[a + "queueHooks"];
                var g = m.timers, f = b ? b.length : 0;
                d.finish = !0;
                m.queue(this, a, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = g.length; c--;)g[c].elem === this && g[c].queue === a && (g[c].anim.stop(!0), g.splice(c, 1));
                for (c = 0; c < f; c++)b[c] && b[c].finish && b[c].finish.call(this);
                delete d.finish
            })
        }
    });
    m.each(["toggle", "show", "hide"], function (a, c) {
        var d = m.fn[c];
        m.fn[c] = function (a, b, g) {
            return null == a || "boolean" === typeof a ? d.apply(this, arguments) : this.animate(V(c, !0), a, b, g)
        }
    });
    m.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, c) {
        m.fn[a] = function (a, d, b) {
            return this.animate(c, a, d, b)
        }
    });
    m.timers = [];
    m.fx.tick = function () {
        var a, c = 0, d = m.timers;
        for (ua = m.now(); c < d.length; c++)a = d[c], a() || d[c] !== a || d.splice(c--, 1);
        d.length || m.fx.stop();
        ua = void 0
    };
    m.fx.timer = function (a) {
        m.timers.push(a);
        a() ? m.fx.start() : m.timers.pop()
    };
    m.fx.interval = 13;
    m.fx.start = function () {
        Ha || (Ha = setInterval(m.fx.tick, m.fx.interval))
    };
    m.fx.stop = function () {
        clearInterval(Ha);
        Ha = null
    };
    m.fx.speeds = {slow: 600, fast: 200, _default: 400};
    m.fn.delay = function (a, c) {
        a = m.fx ? m.fx.speeds[a] || a : a;
        return this.queue(c || "fx", function (c, d) {
            var b = setTimeout(c, a);
            d.stop = function () {
                clearTimeout(b)
            }
        })
    };
    (function () {
        var a = F.createElement("input"), c = F.createElement("select"), d = c.appendChild(F.createElement("option"));
        a.type = "checkbox";
        M.checkOn = "" !== a.value;
        M.optSelected = d.selected;
        c.disabled = !0;
        M.optDisabled = !d.disabled;
        a = F.createElement("input");
        a.value = "t";
        a.type = "radio";
        M.radioValue = "t" === a.value
    })();
    var cb, ta = m.expr.attrHandle;
    m.fn.extend({
        attr: function (a, c) {
            return na(this, m.attr, a, c, 1 < arguments.length)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    });
    m.extend({
        attr: function (a, c, d) {
            var b, g, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" === typeof a.getAttribute)return m.prop(a, c, d);
                1 === f && m.isXMLDoc(a) || (c = c.toLowerCase(), b = m.attrHooks[c] || (m.expr.match.bool.test(c) ? cb : void 0));
                if (void 0 !== d)if (null === d)m.removeAttr(a,
                    c); else {
                    if (b && "set" in b && void 0 !== (g = b.set(a, d, c)))return g;
                    a.setAttribute(c, d + "");
                    return d
                } else {
                    if (b && "get" in b && null !== (g = b.get(a, c)))return g;
                    g = m.find.attr(a, c);
                    return null == g ? void 0 : g
                }
            }
        }, removeAttr: function (a, c) {
            var d, b, g = 0, f = c && c.match(ha);
            if (f && 1 === a.nodeType)for (; d = f[g++];)b = m.propFix[d] || d, m.expr.match.bool.test(d) && (a[b] = !1), a.removeAttribute(d)
        }, attrHooks: {
            type: {
                set: function (a, c) {
                    if (!M.radioValue && "radio" === c && m.nodeName(a, "input")) {
                        var d = a.value;
                        a.setAttribute("type", c);
                        d && (a.value = d);
                        return c
                    }
                }
            }
        }
    });
    cb = {
        set: function (a, c, d) {
            !1 === c ? m.removeAttr(a, d) : a.setAttribute(d, d);
            return d
        }
    };
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = ta[c] || m.find.attr;
        ta[c] = function (a, c, b) {
            var g, f;
            b || (f = ta[c], ta[c] = g, g = null != d(a, c, b) ? c.toLowerCase() : null, ta[c] = f);
            return g
        }
    });
    var Fb = /^(?:input|select|textarea|button)$/i;
    m.fn.extend({
        prop: function (a, c) {
            return na(this, m.prop, a, c, 1 < arguments.length)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[m.propFix[a] || a]
            })
        }
    });
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }, prop: function (a, c, d) {
            var b, g, f;
            f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if (f = 1 !== f || !m.isXMLDoc(a))c = m.propFix[c] || c, g = m.propHooks[c];
                return void 0 !== d ? g && "set" in g && void 0 !== (b = g.set(a, d, c)) ? b : a[c] = d : g && "get" in g && null !== (b = g.get(a, c)) ? b : a[c]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || Fb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    M.optSelected || (m.propHooks.selected = {
        get: function (a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    m.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        m.propFix[this.toLowerCase()] = this
    });
    var Ma = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var c, d, b, g, f;
            c = "string" === typeof a && a;
            var e = 0, r = this.length;
            if (m.isFunction(a))return this.each(function (c) {
                m(this).addClass(a.call(this, c, this.className))
            });
            if (c)for (c = (a || "").match(ha) || []; e < r; e++)if (d = this[e], b = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ma,
                        " ") : " ")) {
                for (f = 0; g = c[f++];)0 > b.indexOf(" " + g + " ") && (b += g + " ");
                b = m.trim(b);
                d.className !== b && (d.className = b)
            }
            return this
        }, removeClass: function (a) {
            var c, d, b, g, f;
            c = 0 === arguments.length || "string" === typeof a && a;
            var e = 0, r = this.length;
            if (m.isFunction(a))return this.each(function (c) {
                m(this).removeClass(a.call(this, c, this.className))
            });
            if (c)for (c = (a || "").match(ha) || []; e < r; e++)if (d = this[e], b = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ma, " ") : "")) {
                for (f = 0; g = c[f++];)for (; 0 <= b.indexOf(" " + g + " ");)b =
                    b.replace(" " + g + " ", " ");
                b = a ? m.trim(b) : "";
                d.className !== b && (d.className = b)
            }
            return this
        }, toggleClass: function (a, c) {
            var d = typeof a;
            return "boolean" === typeof c && "string" === d ? c ? this.addClass(a) : this.removeClass(a) : m.isFunction(a) ? this.each(function (d) {
                m(this).toggleClass(a.call(this, d, this.className, c), c)
            }) : this.each(function () {
                if ("string" === d)for (var c, b = 0, g = m(this), f = a.match(ha) || []; c = f[b++];)g.hasClass(c) ? g.removeClass(c) : g.addClass(c); else if ("undefined" === d || "boolean" === d)this.className && H.set(this,
                    "__className__", this.className), this.className = this.className || !1 === a ? "" : H.get(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++)if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Ma, " ").indexOf(a))return !0;
            return !1
        }
    });
    var Gb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var c, d, b, g = this[0];
            if (arguments.length)return b = m.isFunction(a), this.each(function (d) {
                1 === this.nodeType && (d = b ? a.call(this, d, m(this).val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" :
                m.isArray(d) && (d = m.map(d, function (a) {
                    return null == a ? "" : a + ""
                })), c = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, d, "value") || (this.value = d))
            });
            if (g) {
                if ((c = m.valHooks[g.type] || m.valHooks[g.nodeName.toLowerCase()]) && "get" in c && void 0 !== (d = c.get(g, "value")))return d;
                d = g.value;
                return "string" === typeof d ? d.replace(Gb, "") : null == d ? "" : d
            }
        }
    });
    m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var c = m.find.attr(a, "value");
                    return null != c ? c : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var c,
                             d = a.options, b = a.selectedIndex, g = (a = "select-one" === a.type || 0 > b) ? null : [], f = a ? b + 1 : d.length, e = 0 > b ? f : a ? b : 0; e < f; e++)if (c = d[e], !(!c.selected && e !== b || (M.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        c = m(c).val();
                        if (a)return c;
                        g.push(c)
                    }
                    return g
                }, set: function (a, c) {
                    for (var d, b, g = a.options, f = m.makeArray(c), e = g.length; e--;)if (b = g[e], b.selected = 0 <= m.inArray(b.value, f))d = !0;
                    d || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    m.each(["radio", "checkbox"],
        function () {
            m.valHooks[this] = {
                set: function (a, c) {
                    if (m.isArray(c))return a.checked = 0 <= m.inArray(m(a).val(), c)
                }
            };
            M.checkOn || (m.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, c) {
        m.fn[c] = function (a, d) {
            return 0 < arguments.length ? this.on(c,
                null, a, d) : this.trigger(c)
        }
    });
    m.fn.extend({
        hover: function (a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }, bind: function (a, c, d) {
            return this.on(a, null, c, d)
        }, unbind: function (a, c) {
            return this.off(a, null, c)
        }, delegate: function (a, c, d, b) {
            return this.on(c, a, d, b)
        }, undelegate: function (a, c, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", d)
        }
    });
    var Na = m.now(), Oa = /\?/;
    m.parseJSON = function (a) {
        return JSON.parse(a + "")
    };
    m.parseXML = function (a) {
        var c, d;
        if (!a || "string" !== typeof a)return null;
        try {
            d = new DOMParser,
                c = d.parseFromString(a, "text/xml")
        } catch (b) {
            c = void 0
        }
        c && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + a);
        return c
    };
    var Hb = /#.*$/, db = /([?&])_=[^&]*/, Ib = /^(.*?):[ \t]*([^\r\n]*)$/mg, Jb = /^(?:GET|HEAD)$/, Kb = /^\/\//, eb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, fb = {}, La = {}, gb = "*/".concat("*"), Pa = b.location.href, va = eb.exec(Pa.toLowerCase()) || [];
    m.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Pa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(va[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": gb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, c) {
            return c ? fa(fa(a,
                m.ajaxSettings), c) : fa(m.ajaxSettings, a)
        }, ajaxPrefilter: U(fb), ajaxTransport: U(La), ajax: function (a, c) {
            function d(a, c, e, k) {
                var C, z, D, u;
                u = c;
                if (2 !== n) {
                    n = 2;
                    r && clearTimeout(r);
                    b = void 0;
                    f = k || "";
                    I.readyState = 0 < a ? 4 : 0;
                    k = 200 <= a && 300 > a || 304 === a;
                    if (e) {
                        D = h;
                        for (var V = I, A, v, x, t, Z = D.contents, R = D.dataTypes; "*" === R[0];)R.shift(), void 0 === A && (A = D.mimeType || V.getResponseHeader("Content-Type"));
                        if (A)for (v in Z)if (Z[v] && Z[v].test(A)) {
                            R.unshift(v);
                            break
                        }
                        if (R[0] in e)x = R[0]; else {
                            for (v in e) {
                                if (!R[0] || D.converters[v + " " + R[0]]) {
                                    x =
                                        v;
                                    break
                                }
                                t || (t = v)
                            }
                            x = x || t
                        }
                        x ? (x !== R[0] && R.unshift(x), D = e[x]) : D = void 0
                    }
                    a:{
                        e = h;
                        A = D;
                        v = I;
                        x = k;
                        var N, y, P, V = {}, Z = e.dataTypes.slice();
                        if (Z[1])for (y in e.converters)V[y.toLowerCase()] = e.converters[y];
                        for (t = Z.shift(); t;)if (e.responseFields[t] && (v[e.responseFields[t]] = A), !P && x && e.dataFilter && (A = e.dataFilter(A, e.dataType)), P = t, t = Z.shift())if ("*" === t)t = P; else if ("*" !== P && P !== t) {
                            y = V[P + " " + t] || V["* " + t];
                            if (!y)for (N in V)if (D = N.split(" "), D[1] === t && (y = V[P + " " + D[0]] || V["* " + D[0]])) {
                                !0 === y ? y = V[N] : !0 !== V[N] && (t = D[0], Z.unshift(D[1]));
                                break
                            }
                            if (!0 !== y)if (y && e["throws"])A = y(A); else try {
                                A = y(A)
                            } catch (G) {
                                D = {state: "parsererror", error: y ? G : "No conversion from " + P + " to " + t};
                                break a
                            }
                        }
                        D = {state: "success", data: A}
                    }
                    if (k)h.ifModified && ((u = I.getResponseHeader("Last-Modified")) && (m.lastModified[g] = u), (u = I.getResponseHeader("etag")) && (m.etag[g] = u)), 204 === a || "HEAD" === h.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = D.state, C = D.data, z = D.error, k = !z); else if (z = u, a || !u)u = "error", 0 > a && (a = 0);
                    I.status = a;
                    I.statusText = (c || u) + "";
                    k ? L.resolveWith(q, [C, u, I]) : L.rejectWith(q,
                        [I, u, z]);
                    I.statusCode(K);
                    K = void 0;
                    l && E.trigger(k ? "ajaxSuccess" : "ajaxError", [I, h, k ? C : z]);
                    p.fireWith(q, [I, u]);
                    l && (E.trigger("ajaxComplete", [I, h]), --m.active || m.event.trigger("ajaxStop"))
                }
            }

            "object" === typeof a && (c = a, a = void 0);
            c = c || {};
            var b, g, f, e, r, k, l, C, h = m.ajaxSetup({}, c), q = h.context || h, E = h.context && (q.nodeType || q.jquery) ? m(q) : m.event, L = m.Deferred(), p = m.Callbacks("once memory"), K = h.statusCode || {}, z = {}, D = {}, n = 0, u = "canceled", I = {
                readyState: 0, getResponseHeader: function (a) {
                    var c;
                    if (2 === n) {
                        if (!e)for (e = {}; c =
                            Ib.exec(f);)e[c[1].toLowerCase()] = c[2];
                        c = e[a.toLowerCase()]
                    }
                    return null == c ? null : c
                }, getAllResponseHeaders: function () {
                    return 2 === n ? f : null
                }, setRequestHeader: function (a, c) {
                    var d = a.toLowerCase();
                    n || (a = D[d] = D[d] || a, z[a] = c);
                    return this
                }, overrideMimeType: function (a) {
                    n || (h.mimeType = a);
                    return this
                }, statusCode: function (a) {
                    var c;
                    if (a)if (2 > n)for (c in a)K[c] = [K[c], a[c]]; else I.always(a[I.status]);
                    return this
                }, abort: function (a) {
                    a = a || u;
                    b && b.abort(a);
                    d(0, a);
                    return this
                }
            };
            L.promise(I).complete = p.add;
            I.success = I.done;
            I.error = I.fail;
            h.url = ((a || h.url || Pa) + "").replace(Hb, "").replace(Kb, va[1] + "//");
            h.type = c.method || c.type || h.method || h.type;
            h.dataTypes = m.trim(h.dataType || "*").toLowerCase().match(ha) || [""];
            null == h.crossDomain && (k = eb.exec(h.url.toLowerCase()), h.crossDomain = !(!k || k[1] === va[1] && k[2] === va[2] && (k[3] || ("http:" === k[1] ? "80" : "443")) === (va[3] || ("http:" === va[1] ? "80" : "443"))));
            h.data && h.processData && "string" !== typeof h.data && (h.data = m.param(h.data, h.traditional));
            x(fb, h, c, I);
            if (2 === n)return I;
            (l = m.event && h.global) &&
            0 === m.active++ && m.event.trigger("ajaxStart");
            h.type = h.type.toUpperCase();
            h.hasContent = !Jb.test(h.type);
            g = h.url;
            h.hasContent || (h.data && (g = h.url += (Oa.test(g) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = db.test(g) ? g.replace(db, "$1_=" + Na++) : g + (Oa.test(g) ? "&" : "?") + "_=" + Na++));
            h.ifModified && (m.lastModified[g] && I.setRequestHeader("If-Modified-Since", m.lastModified[g]), m.etag[g] && I.setRequestHeader("If-None-Match", m.etag[g]));
            (h.data && h.hasContent && !1 !== h.contentType || c.contentType) && I.setRequestHeader("Content-Type",
                h.contentType);
            I.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + gb + "; q=0.01" : "") : h.accepts["*"]);
            for (C in h.headers)I.setRequestHeader(C, h.headers[C]);
            if (h.beforeSend && (!1 === h.beforeSend.call(q, I, h) || 2 === n))return I.abort();
            u = "abort";
            for (C in{success: 1, error: 1, complete: 1})I[C](h[C]);
            if (b = x(La, h, c, I)) {
                I.readyState = 1;
                l && E.trigger("ajaxSend", [I, h]);
                h.async && 0 < h.timeout && (r = setTimeout(function () {
                    I.abort("timeout")
                }, h.timeout));
                try {
                    n = 1, b.send(z, d)
                } catch (V) {
                    if (2 > n)d(-1, V); else throw V;
                }
            } else d(-1, "No Transport");
            return I
        }, getJSON: function (a, c, d) {
            return m.get(a, c, d, "json")
        }, getScript: function (a, c) {
            return m.get(a, void 0, c, "script")
        }
    });
    m.each(["get", "post"], function (a, c) {
        m[c] = function (a, d, b, g) {
            m.isFunction(d) && (g = g || b, b = d, d = void 0);
            return m.ajax({url: a, type: c, dataType: g, data: d, success: b})
        }
    });
    m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    m.fn.extend({
        wrapAll: function (a) {
            var c;
            if (m.isFunction(a))return this.each(function (c) {
                m(this).wrapAll(a.call(this, c))
            });
            this[0] && (c = m(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
                for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                return a
            }).append(this));
            return this
        }, wrapInner: function (a) {
            return m.isFunction(a) ? this.each(function (c) {
                m(this).wrapInner(a.call(this, c))
            }) : this.each(function () {
                var c = m(this), d = c.contents();
                d.length ? d.wrapAll(a) : c.append(a)
            })
        }, wrap: function (a) {
            var c =
                m.isFunction(a);
            return this.each(function (d) {
                m(this).wrapAll(c ? a.call(this, d) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    m.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Lb = /%20/g, pb = /\[\]$/, hb = /\r?\n/g, Mb = /^(?:submit|button|image|reset|file)$/i, Nb = /^(?:input|select|textarea|keygen)/i;
    m.param = function (a, c) {
        var d,
            b = [], g = function (a, c) {
                c = m.isFunction(c) ? c() : null == c ? "" : c;
                b[b.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
            };
        void 0 === c && (c = m.ajaxSettings && m.ajaxSettings.traditional);
        if (m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
            g(this.name, this.value)
        }); else for (d in a)G(d, a[d], c, g);
        return b.join("&").replace(Lb, "+")
    };
    m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) :
                    this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Nb.test(this.nodeName) && !Mb.test(a) && (this.checked || !Va.test(a))
            }).map(function (a, c) {
                var d = m(this).val();
                return null == d ? null : m.isArray(d) ? m.map(d, function (a) {
                    return {name: c.name, value: a.replace(hb, "\r\n")}
                }) : {name: c.name, value: d.replace(hb, "\r\n")}
            }).get()
        }
    });
    m.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Ob = 0, Ia = {}, Pb = {0: 200, 1223: 204}, Aa = m.ajaxSettings.xhr();
    b.attachEvent && b.attachEvent("onunload",
        function () {
            for (var a in Ia)Ia[a]()
        });
    M.cors = !!Aa && "withCredentials" in Aa;
    M.ajax = Aa = !!Aa;
    m.ajaxTransport(function (a) {
        var c;
        if (M.cors || Aa && !a.crossDomain)return {
            send: function (d, b) {
                var g, f = a.xhr(), e = ++Ob;
                f.open(a.type, a.url, a.async, a.username, a.password);
                if (a.xhrFields)for (g in a.xhrFields)f[g] = a.xhrFields[g];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (g in d)f.setRequestHeader(g, d[g]);
                c = function (a) {
                    return function () {
                        c &&
                        (delete Ia[e], c = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? b(f.status, f.statusText) : b(Pb[f.status] || f.status, f.statusText, "string" === typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                };
                f.onload = c();
                f.onerror = c("error");
                c = Ia[e] = c("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (r) {
                    if (c)throw r;
                }
            }, abort: function () {
                c && c()
            }
        }
    });
    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                m.globalEval(a);
                return a
            }
        }
    });
    m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d;
            return {
                send: function (b, g) {
                    c = m("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", d = function (a) {
                        c.remove();
                        d = null;
                        a && g("error" === a.type ? 404 : 200, a.type)
                    });
                    F.head.appendChild(c[0])
                }, abort: function () {
                    d && d()
                }
            }
        }
    });
    var ib = [], Qa = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ib.pop() || m.expando + "_" + Na++;
            this[a] = !0;
            return a
        }
    });
    m.ajaxPrefilter("json jsonp", function (a, c, d) {
        var g, f, e, r = !1 !== a.jsonp && (Qa.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Qa.test(a.data) && "data");
        if (r || "jsonp" === a.dataTypes[0])return g = a.jsonpCallback = m.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, r ? a[r] = a[r].replace(Qa, "$1" + g) : !1 !== a.jsonp && (a.url += (Oa.test(a.url) ? "&" : "?") + a.jsonp + "=" +
            g), a.converters["script json"] = function () {
            e || m.error(g + " was not called");
            return e[0]
        }, a.dataTypes[0] = "json", f = b[g], b[g] = function () {
            e = arguments
        }, d.always(function () {
            b[g] = f;
            a[g] && (a.jsonpCallback = c.jsonpCallback, ib.push(g));
            e && m.isFunction(f) && f(e[0]);
            e = f = void 0
        }), "script"
    });
    m.parseHTML = function (a, c, d) {
        if (!a || "string" !== typeof a)return null;
        "boolean" === typeof c && (d = c, c = !1);
        c = c || F;
        var b = Ea.exec(a);
        d = !d && [];
        if (b)return [c.createElement(b[1])];
        b = m.buildFragment([a], c, d);
        d && d.length && m(d).remove();
        return m.merge([],
            b.childNodes)
    };
    var jb = m.fn.load;
    m.fn.load = function (a, c, d) {
        if ("string" !== typeof a && jb)return jb.apply(this, arguments);
        var b, g, f, e = this, r = a.indexOf(" ");
        0 <= r && (b = m.trim(a.slice(r)), a = a.slice(0, r));
        m.isFunction(c) ? (d = c, c = void 0) : c && "object" === typeof c && (g = "POST");
        0 < e.length && m.ajax({url: a, type: g, dataType: "html", data: c}).done(function (a) {
            f = arguments;
            e.html(b ? m("<div>").append(m.parseHTML(a)).find(b) : a)
        }).complete(d && function (a, c) {
                e.each(d, f || [a.responseText, c, a])
            });
        return this
    };
    m.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, c) {
            m.fn[c] = function (a) {
                return this.on(c, a)
            }
        });
    m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (c) {
            return a === c.elem
        }).length
    };
    var kb = b.document.documentElement;
    m.offset = {
        setOffset: function (a, c, d) {
            var b, g, f, e = m.css(a, "position"), r = m(a), k = {};
            "static" === e && (a.style.position = "relative");
            f = r.offset();
            g = m.css(a, "top");
            b = m.css(a, "left");
            ("absolute" === e || "fixed" === e) && -1 < (g + b).indexOf("auto") ? (b = r.position(), g = b.top, b = b.left) : (g = parseFloat(g) || 0, b = parseFloat(b) || 0);
            m.isFunction(c) &&
            (c = c.call(a, d, f));
            null != c.top && (k.top = c.top - f.top + g);
            null != c.left && (k.left = c.left - f.left + b);
            "using" in c ? c.using.call(a, k) : r.css(k)
        }
    };
    m.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (c) {
                m.offset.setOffset(this, a, c)
            });
            var c, d;
            d = this[0];
            var b = {top: 0, left: 0}, g = d && d.ownerDocument;
            if (g) {
                c = g.documentElement;
                if (!m.contains(c, d))return b;
                "undefined" !== typeof d.getBoundingClientRect && (b = d.getBoundingClientRect());
                d = O(g);
                return {
                    top: b.top + d.pageYOffset - c.clientTop,
                    left: b.left + d.pageXOffset - c.clientLeft
                }
            }
        }, position: function () {
            if (this[0]) {
                var a, c, d = this[0], b = {top: 0, left: 0};
                "fixed" === m.css(d, "position") ? c = d.getBoundingClientRect() : (a = this.offsetParent(), c = this.offset(), m.nodeName(a[0], "html") || (b = a.offset()), b.top += m.css(a[0], "borderTopWidth", !0), b.left += m.css(a[0], "borderLeftWidth", !0));
                return {
                    top: c.top - b.top - m.css(d, "marginTop", !0),
                    left: c.left - b.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent ||
                    kb; a && !m.nodeName(a, "html") && "static" === m.css(a, "position");)a = a.offsetParent;
                return a || kb
            })
        }
    });
    m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = "pageYOffset" === c;
        m.fn[a] = function (g) {
            return na(this, function (a, g, f) {
                var e = O(a);
                if (void 0 === f)return e ? e[c] : a[g];
                e ? e.scrollTo(d ? b.pageXOffset : f, d ? f : b.pageYOffset) : a[g] = f
            }, a, g, arguments.length, null)
        }
    });
    m.each(["top", "left"], function (a, c) {
        m.cssHooks[c] = r(M.pixelPosition, function (a, d) {
            if (d)return d = f(a, c), Ka.test(d) ? m(a).position()[c] +
            "px" : d
        })
    });
    m.each({Height: "height", Width: "width"}, function (a, c) {
        m.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, b) {
            m.fn[b] = function (b, g) {
                var f = arguments.length && (d || "boolean" !== typeof b), e = d || (!0 === b || !0 === g ? "margin" : "border");
                return na(this, function (c, d, b) {
                        return m.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (d = c.documentElement, Math.max(c.body["scroll" + a], d["scroll" + a], c.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === b ? m.css(c, d, e) : m.style(c, d, b, e)
                    }, c,
                    f ? b : void 0, f, null)
            }
        })
    });
    m.fn.size = function () {
        return this.length
    };
    m.fn.andSelf = m.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var Qb = b.jQuery, Rb = b.$;
    m.noConflict = function (a) {
        b.$ === m && (b.$ = Rb);
        a && b.jQuery === m && (b.jQuery = Qb);
        return m
    };
    "undefined" === typeof w && (b.jQuery = b.$ = m);
    return m
});
yii = function (b) {
    function w() {
        b(document).ajaxComplete(function (b, l, e) {
            if (b = l.getResponseHeader("X-Redirect"))window.location = b
        })
    }

    function n() {
        b.ajaxPrefilter(function (b, l, e) {
            !b.crossDomain && u.getCsrfParam() && e.setRequestHeader("X-CSRF-Token", u.getCsrfToken())
        });
        u.refreshCsrfToken()
    }

    function t() {
        var h = function (l) {
            var e = b(this), k = e.data("method"), h = e.data("confirm");
            if (void 0 === k && void 0 === h)return !0;
            void 0 !== h ? u.confirm(h, function () {
                u.handleAction(e)
            }) : u.handleAction(e);
            l.stopImmediatePropagation();
            return !1
        };
        b(document).on("click.yii", u.clickableSelector, h).on("change.yii", u.changeableSelector, h)
    }

    function p() {
        var h = location.protocol + "//" + location.host, l = b("script[src]").map(function () {
            return "/" === this.src.charAt(0) ? h + this.src : this.src
        }).toArray();
        b.ajaxPrefilter("script", function (e, k, q) {
            "jsonp" != e.dataType && (e = "/" === e.url.charAt(0) ? h + e.url : e.url, -1 === b.inArray(e, l) ? l.push(e) : -1 === b.inArray(e, b.map(u.reloadableScripts, function (b) {
                return "/" === b.charAt(0) ? h + b : b
            })) && q.abort())
        });
        b(document).ajaxComplete(function (e,
                                           k, l) {
            var h = [];
            b("link[rel=stylesheet]").each(function () {
                -1 === b.inArray(this.href, u.reloadableScripts) && (-1 == b.inArray(this.href, h) ? h.push(this.href) : b(this).remove())
            })
        })
    }

    var u = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function () {
            return b("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function () {
            return b("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function (h, l) {
            b("meta[name=csrf-param]").attr("content", h);
            b("meta[name=csrf-token]").attr("content", l)
        },
        refreshCsrfToken: function () {
            var h = u.getCsrfToken();
            h && b('form input[name="' + u.getCsrfParam() + '"]').val(h)
        },
        confirm: function (b, l, e) {
            confirm(b) ? !l || l() : !e || e()
        },
        handleAction: function (h) {
            var l = h.data("method"), e = h.closest("form"), k = h.attr("href"), q = h.data("params");
            if (void 0 === l)k && "#" != k ? window.location = k : h.is(":submit") && e.length && e.trigger("submit"); else {
                var p = !e.length;
                if (p) {
                    k && k.match(/(^\/|:\/\/)/) ||
                    (k = window.location.href);
                    e = b('<form method="' + l + '"></form>');
                    e.attr("action", k);
                    var n = h.attr("target");
                    n && e.attr("target", n);
                    l.match(/(get|post)/i) || (e.append('<input name="_method" value="' + l + '" type="hidden">'), l = "POST");
                    l.match(/(get|head|options)/i) || (n = u.getCsrfParam()) && e.append('<input name="' + n + '" value="' + u.getCsrfToken() + '" type="hidden">');
                    e.hide().appendTo("body")
                }
                if (n = e.data("yiiActiveForm"))n.submitObject = h;
                q && b.isPlainObject(q) && b.each(q, function (b, a) {
                    e.append('<input name="' + b + '" value="' +
                        a + '" type="hidden">')
                });
                var t = e.attr("method");
                e.attr("method", l);
                var J = null;
                k && "#" != k && (J = e.attr("action"), e.attr("action", k));
                e.trigger("submit");
                b.when(e.data("yiiSubmitFinalizePromise")).then(function () {
                    null != J && e.attr("action", J);
                    e.attr("method", t);
                    q && b.isPlainObject(q) && b.each(q, function (k, a) {
                        b('input[name="' + k + '"]', e).remove()
                    });
                    p && e.remove()
                })
            }
        },
        getQueryParams: function (b) {
            var l = b.indexOf("?");
            if (0 > l)return {};
            b = b.substring(l + 1).split("&");
            for (var l = 0, e = {}; l < b.length; l++)b[l] = b[l].split("="),
                e[decodeURIComponent(b[l][0])] = decodeURIComponent(b[l][1]);
            return e
        },
        initModule: function (h) {
            if (void 0 === h.isActive || h.isActive)b.isFunction(h.init) && h.init(), b.each(h, function () {
                b.isPlainObject(this) && u.initModule(this)
            })
        },
        init: function () {
            n();
            w();
            p();
            t()
        }
    };
    return u
}(jQuery);
jQuery(document).ready(function () {
    yii.initModule(yii)
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function (b) {
    function w(a, c) {
        var d, g;
        d = a.nodeName.toLowerCase();
        if ("area" === d) {
            d = a.parentNode;
            g = d.name;
            if (!a.href || !g || "map" !== d.nodeName.toLowerCase())return !1;
            d = b("img[usemap='#" + g + "']")[0];
            return !!d && n(d)
        }
        return (/^(input|select|textarea|button|object)$/.test(d) ? !a.disabled : "a" === d ? a.href || c : c) && n(a)
    }

    function n(a) {
        return b.expr.filters.visible(a) && !b(a).parents().addBack().filter(function () {
                return "hidden" === b.css(this,
                        "visibility")
            }).length
    }

    function t(a) {
        for (var c; a.length && a[0] !== document;) {
            c = a.css("position");
            if ("absolute" === c || "relative" === c || "fixed" === c)if (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)return c;
            a = a.parent()
        }
        return 0
    }

    function p() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        b.extend(this._defaults, this.regional[""]);
        this.regional.en = b.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = b.extend(!0, {}, this.regional.en);
        this.dpDiv = u(b("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function u(a) {
        return a.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function () {
            b(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") &&
            b(this).removeClass("ui-datepicker-next-hover")
        }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", h)
    }

    function h() {
        b.datepicker._isDisabledDatepicker(B.inline ? B.dpDiv.parent()[0] : B.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") &&
        b(this).addClass("ui-datepicker-next-hover"))
    }

    function l(a, c) {
        b.extend(a, c);
        for (var d in c)null == c[d] && (a[d] = c[d]);
        return a
    }

    function e(a) {
        return function () {
            var c = this.element.val();
            a.apply(this, arguments);
            this._refresh();
            c !== this.element.val() && this._trigger("change")
        }
    }

    b.ui = b.ui || {};
    b.extend(b.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    b.fn.extend({
        scrollParent: function (a) {
            var c =
                this.css("position"), d = "absolute" === c, g = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            a = this.parents().filter(function () {
                var a = b(this);
                return d && "static" === a.css("position") ? !1 : g.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
            }).eq(0);
            return "fixed" !== c && a.length ? a : b(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var a = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) &&
                b(this).removeAttr("id")
            })
        }
    });
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function (a) {
            return function (c) {
                return !!b.data(c, a)
            }
        }) : function (a, c, d) {
            return !!b.data(a, d[3])
        }, focusable: function (a) {
            return w(a, !isNaN(b.attr(a, "tabindex")))
        }, tabbable: function (a) {
            var c = b.attr(a, "tabindex"), d = isNaN(c);
            return (d || 0 <= c) && w(a, !d)
        }
    });
    b("<a>").outerWidth(1).jquery || b.each(["Width", "Height"], function (a, c) {
        function d(a, c, d, f) {
            b.each(g, function () {
                c -= parseFloat(b.css(a, "padding" + this)) || 0;
                d && (c -=
                    parseFloat(b.css(a, "border" + this + "Width")) || 0);
                f && (c -= parseFloat(b.css(a, "margin" + this)) || 0)
            });
            return c
        }

        var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], f = c.toLowerCase(), e = {
            innerWidth: b.fn.innerWidth,
            innerHeight: b.fn.innerHeight,
            outerWidth: b.fn.outerWidth,
            outerHeight: b.fn.outerHeight
        };
        b.fn["inner" + c] = function (a) {
            return void 0 === a ? e["inner" + c].call(this) : this.each(function () {
                b(this).css(f, d(this, a) + "px")
            })
        };
        b.fn["outer" + c] = function (a, g) {
            return "number" !== typeof a ? e["outer" + c].call(this, a) : this.each(function () {
                b(this).css(f,
                    d(this, a, !0, g) + "px")
            })
        }
    });
    b.fn.addBack || (b.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    b("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (b.fn.removeData = function (a) {
        return function (c) {
            return arguments.length ? a.call(this, b.camelCase(c)) : a.call(this)
        }
    }(b.fn.removeData));
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.fn.extend({
        focus: function (a) {
            return function (c, d) {
                return "number" === typeof c ? this.each(function () {
                    var a = this;
                    setTimeout(function () {
                        b(a).focus();
                        d && d.call(a)
                    }, c)
                }) : a.apply(this, arguments)
            }
        }(b.fn.focus), disableSelection: function () {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(a + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (a) {
            if (void 0 !== a)return this.css("zIndex", a);
            if (this.length) {
                a = b(this[0]);
                for (var c; a.length && a[0] !== document;) {
                    c = a.css("position");
                    if ("absolute" === c || "relative" ===
                        c || "fixed" === c)if (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)return c;
                    a = a.parent()
                }
            }
            return 0
        }
    });
    b.ui.plugin = {
        add: function (a, c, d) {
            var g;
            a = b.ui[a].prototype;
            for (g in d)a.plugins[g] = a.plugins[g] || [], a.plugins[g].push([c, d[g]])
        }, call: function (a, c, d, b) {
            if ((c = a.plugins[c]) && (b || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))for (b = 0; b < c.length; b++)a.options[c[b][0]] && c[b][1].apply(a.element, d)
        }
    };
    var k = 0, q = Array.prototype.slice;
    b.cleanData = function (a) {
        return function (c) {
            var d, g, f;
            for (f =
                     0; null != (g = c[f]); f++)try {
                (d = b._data(g, "events")) && d.remove && b(g).triggerHandler("remove")
            } catch (e) {
            }
            a(c)
        }
    }(b.cleanData);
    b.widget = function (a, c, d) {
        var g, f, e, k, l = {}, h = a.split(".")[0];
        a = a.split(".")[1];
        g = h + "-" + a;
        d || (d = c, c = b.Widget);
        b.expr[":"][g.toLowerCase()] = function (a) {
            return !!b.data(a, g)
        };
        b[h] = b[h] || {};
        f = b[h][a];
        e = b[h][a] = function (a, c) {
            if (!this._createWidget)return new e(a, c);
            arguments.length && this._createWidget(a, c)
        };
        b.extend(e, f, {version: d.version, _proto: b.extend({}, d), _childConstructors: []});
        k =
            new c;
        k.options = b.widget.extend({}, k.options);
        b.each(d, function (a, d) {
            b.isFunction(d) ? l[a] = function () {
                var b = function () {
                    return c.prototype[a].apply(this, arguments)
                }, g = function (d) {
                    return c.prototype[a].apply(this, d)
                };
                return function () {
                    var a = this._super, c = this._superApply, f;
                    this._super = b;
                    this._superApply = g;
                    f = d.apply(this, arguments);
                    this._super = a;
                    this._superApply = c;
                    return f
                }
            }() : l[a] = d
        });
        e.prototype = b.widget.extend(k, {widgetEventPrefix: f ? k.widgetEventPrefix || a : a}, l, {
            constructor: e, namespace: h, widgetName: a,
            widgetFullName: g
        });
        f ? (b.each(f._childConstructors, function (a, c) {
            var d = c.prototype;
            b.widget(d.namespace + "." + d.widgetName, e, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(e);
        b.widget.bridge(a, e);
        return e
    };
    b.widget.extend = function (a) {
        for (var c = q.call(arguments, 1), d = 0, g = c.length, f, e; d < g; d++)for (f in c[d])e = c[d][f], c[d].hasOwnProperty(f) && void 0 !== e && (b.isPlainObject(e) ? a[f] = b.isPlainObject(a[f]) ? b.widget.extend({}, a[f], e) : b.widget.extend({}, e) : a[f] = e);
        return a
    };
    b.widget.bridge = function (a,
                                c) {
        var d = c.prototype.widgetFullName || a;
        b.fn[a] = function (g) {
            var f = "string" === typeof g, e = q.call(arguments, 1), k = this;
            f ? this.each(function () {
                var c, f = b.data(this, d);
                if ("instance" === g)return k = f, !1;
                if (!f)return b.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + g + "'");
                if (!b.isFunction(f[g]) || "_" === g.charAt(0))return b.error("no such method '" + g + "' for " + a + " widget instance");
                c = f[g].apply(f, e);
                if (c !== f && void 0 !== c)return k = c && c.jquery ? k.pushStack(c.get()) : c, !1
            }) : (e.length &&
            (g = b.widget.extend.apply(null, [g].concat(e))), this.each(function () {
                var a = b.data(this, d);
                a ? (a.option(g || {}), a._init && a._init()) : b.data(this, d, new c(g, this))
            }));
            return k
        }
    };
    b.Widget = function () {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (a, c) {
            c = b(c || this.defaultElement || this)[0];
            this.element = b(c);
            this.uuid = k++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings =
                b();
            this.hoverable = b();
            this.focusable = b();
            c !== this && (b.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === c && this.destroy()
                }
            }), this.document = b(c.style ? c.ownerDocument : c.document || c), this.window = b(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), a);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function () {
            return this.element
        },
        option: function (a, c) {
            var d = a, g, f, e;
            if (0 === arguments.length)return b.widget.extend({}, this.options);
            if ("string" === typeof a)if (d = {}, g = a.split("."), a = g.shift(), g.length) {
                f = d[a] = b.widget.extend({}, this.options[a]);
                for (e = 0; e < g.length - 1; e++)f[g[e]] = f[g[e]] || {}, f = f[g[e]];
                a = g.pop();
                if (1 === arguments.length)return void 0 === f[a] ? null : f[a];
                f[a] = c
            } else {
                if (1 === arguments.length)return void 0 === this.options[a] ? null : this.options[a];
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function (a) {
            for (var c in a)this._setOption(c,
                a[c]);
            return this
        },
        _setOption: function (a, c) {
            this.options[a] = c;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!c), c && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")));
            return this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (a, c, d) {
            var g, f = this;
            "boolean" !== typeof a && (d = c, c = a, a = !1);
            d ? (c = g = b(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element,
                g = this.widget());
            b.each(d, function (d, e) {
                function k() {
                    if (a || !0 !== f.options.disabled && !b(this).hasClass("ui-state-disabled"))return ("string" === typeof e ? f[e] : e).apply(f, arguments)
                }

                "string" !== typeof e && (k.guid = e.guid = e.guid || k.guid || b.guid++);
                var l = d.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + f.eventNamespace;
                (l = l[2]) ? g.delegate(l, h, k) : c.bind(h, k)
            })
        },
        _off: function (a, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(c).undelegate(c);
            this.bindings = b(this.bindings.not(a).get());
            this.focusable = b(this.focusable.not(a).get());
            this.hoverable = b(this.hoverable.not(a).get())
        },
        _delay: function (a, c) {
            var d = this;
            return setTimeout(function () {
                return ("string" === typeof a ? d[a] : a).apply(d, arguments)
            }, c || 0)
        },
        _hoverable: function (a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function (a) {
                    b(a.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (a) {
                    b(a.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (a) {
            this.focusable = this.focusable.add(a);
            this._on(a,
                {
                    focusin: function (a) {
                        b(a.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (a) {
                    b(a.currentTarget).removeClass("ui-state-focus")
                }
                })
        },
        _trigger: function (a, c, d) {
            var g, f = this.options[a];
            d = d || {};
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            c.target = this.element[0];
            if (a = c.originalEvent)for (g in a)g in c || (c[g] = a[g]);
            this.element.trigger(c, d);
            return !(b.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (a, c) {
        b.Widget.prototype["_" + a] = function (d, g, f) {
            "string" === typeof g && (g = {effect: g});
            var e, k = g ? !0 === g || "number" === typeof g ? c : g.effect || c : a;
            g = g || {};
            "number" === typeof g && (g = {duration: g});
            e = !b.isEmptyObject(g);
            g.complete = f;
            g.delay && d.delay(g.delay);
            if (e && b.effects && b.effects.effect[k])d[a](g); else if (k !== a && d[k])d[k](g.duration, g.easing, f); else d.queue(function (c) {
                b(this)[a]();
                f && f.call(d[0]);
                c()
            })
        }
    });
    var z = !1;
    b(document).mouseup(function () {
        z = !1
    });
    b.widget("ui.mouse", {
        version: "1.11.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function (c) {
                return a._mouseDown(c)
            }).bind("click." + this.widgetName, function (c) {
                if (!0 === b.data(c.target, a.widgetName + ".preventClickEvent"))return b.removeData(c.target, a.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            });
            this.started = !1
        }, _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." +
                this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        }, _mouseDown: function (a) {
            if (!z) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this, d = 1 === a.which, g = "string" === typeof this.options.cancel && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : !1;
                if (!d || g || !this._mouseCapture(a))return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    c.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a), !this._mouseStarted))return a.preventDefault(), !0;
                !0 === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function (a) {
                    return c._mouseMove(a)
                };
                this._mouseUpDelegate = function (a) {
                    return c._mouseUp(a)
                };
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName,
                    this._mouseUpDelegate);
                a.preventDefault();
                return z = !0
            }
        }, _mouseMove: function (a) {
            if (this._mouseMoved && (b.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button || !a.which))return this._mouseUp(a);
            if (a.which || a.button)this._mouseMoved = !0;
            if (this._mouseStarted)return this._mouseDrag(a), a.preventDefault();
            this._mouseDistanceMet(a) && this._mouseDelayMet(a) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a)) ? this._mouseDrag(a) : this._mouseUp(a));
            return !this._mouseStarted
        }, _mouseUp: function (a) {
            this.document.unbind("mousemove." +
                this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a));
            return z = !1
        }, _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        }, _mouseDelayMet: function () {
            return this.mouseDelayMet
        }, _mouseStart: function () {
        },
        _mouseDrag: function () {
        }, _mouseStop: function () {
        }, _mouseCapture: function () {
            return !0
        }
    });
    (function () {
        function a(a, c, d) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? c / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? d / 100 : 1)]
        }

        function c(a) {
            var c = a[0];
            return 9 === c.nodeType ? {
                width: a.width(),
                height: a.height(),
                offset: {top: 0, left: 0}
            } : b.isWindow(c) ? {
                width: a.width(),
                height: a.height(),
                offset: {top: a.scrollTop(), left: a.scrollLeft()}
            } : c.preventDefault ? {width: 0, height: 0, offset: {top: c.pageY, left: c.pageX}} : {
                width: a.outerWidth(), height: a.outerHeight(),
                offset: a.offset()
            }
        }

        b.ui = b.ui || {};
        var d, g, f = Math.max, e = Math.abs, k = Math.round, l = /left|center|right/, h = /top|center|bottom/, q = /[\+\-]\d+(\.[\d]+)?%?/, p = /^\w+/, n = /%$/, u = b.fn.position;
        b.position = {
            scrollbarWidth: function () {
                if (void 0 !== d)return d;
                var a, c, g = b("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                c = g.children()[0];
                b("body").append(g);
                a = c.offsetWidth;
                g.css("overflow", "scroll");
                c = c.offsetWidth;
                a === c && (c = g[0].clientWidth);
                g.remove();
                return d = a - c
            }, getScrollInfo: function (a) {
                var c = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"), d = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"), c = "scroll" === c || "auto" === c && a.width < a.element[0].scrollWidth;
                return {
                    width: "scroll" === d || "auto" === d && a.height < a.element[0].scrollHeight ? b.position.scrollbarWidth() : 0,
                    height: c ? b.position.scrollbarWidth() : 0
                }
            }, getWithinInfo: function (a) {
                a = b(a || window);
                var c = b.isWindow(a[0]), d = !!a[0] && 9 === a[0].nodeType;
                return {
                    element: a,
                    isWindow: c,
                    isDocument: d,
                    offset: a.offset() || {left: 0, top: 0},
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop(),
                    width: c || d ? a.width() : a.outerWidth(),
                    height: c || d ? a.height() : a.outerHeight()
                }
            }
        };
        b.fn.position = function (d) {
            if (!d || !d.of)return u.apply(this, arguments);
            d = b.extend({}, d);
            var K, n, z, t, v, N, y = b(d.of), J = b.position.getWithinInfo(d.within), Y = b.position.getScrollInfo(J), w = (d.collision || "flip").split(" "), B = {};
            N = c(y);
            y[0].preventDefault && (d.at = "left top");
            n = N.width;
            z = N.height;
            t = N.offset;
            v = b.extend({}, t);
            b.each(["my", "at"], function () {
                var a =
                    (d[this] || "").split(" "), c, b;
                1 === a.length && (a = l.test(a[0]) ? a.concat(["center"]) : h.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = l.test(a[0]) ? a[0] : "center";
                a[1] = h.test(a[1]) ? a[1] : "center";
                c = q.exec(a[0]);
                b = q.exec(a[1]);
                B[this] = [c ? c[0] : 0, b ? b[0] : 0];
                d[this] = [p.exec(a[0])[0], p.exec(a[1])[0]]
            });
            1 === w.length && (w[1] = w[0]);
            "right" === d.at[0] ? v.left += n : "center" === d.at[0] && (v.left += n / 2);
            "bottom" === d.at[1] ? v.top += z : "center" === d.at[1] && (v.top += z / 2);
            K = a(B.at, n, z);
            v.left += K[0];
            v.top += K[1];
            return this.each(function () {
                var c,
                    l, h = b(this), q = h.outerWidth(), E = h.outerHeight(), p = parseInt(b.css(this, "marginLeft"), 10) || 0, L = parseInt(b.css(this, "marginTop"), 10) || 0, m = q + p + (parseInt(b.css(this, "marginRight"), 10) || 0) + Y.width, u = E + L + (parseInt(b.css(this, "marginBottom"), 10) || 0) + Y.height, D = b.extend({}, v), N = a(B.my, h.outerWidth(), h.outerHeight());
                "right" === d.my[0] ? D.left -= q : "center" === d.my[0] && (D.left -= q / 2);
                "bottom" === d.my[1] ? D.top -= E : "center" === d.my[1] && (D.top -= E / 2);
                D.left += N[0];
                D.top += N[1];
                g || (D.left = k(D.left), D.top = k(D.top));
                c = {
                    marginLeft: p,
                    marginTop: L
                };
                b.each(["left", "top"], function (a, g) {
                    if (b.ui.position[w[a]])b.ui.position[w[a]][g](D, {
                        targetWidth: n,
                        targetHeight: z,
                        elemWidth: q,
                        elemHeight: E,
                        collisionPosition: c,
                        collisionWidth: m,
                        collisionHeight: u,
                        offset: [K[0] + N[0], K[1] + N[1]],
                        my: d.my,
                        at: d.at,
                        within: J,
                        elem: h
                    })
                });
                d.using && (l = function (a) {
                    var c = t.left - D.left, b = c + n - q, g = t.top - D.top, k = g + z - E, m = {
                        target: {element: y, left: t.left, top: t.top, width: n, height: z},
                        element: {element: h, left: D.left, top: D.top, width: q, height: E},
                        horizontal: 0 > b ? "left" : 0 < c ? "right" : "center",
                        vertical: 0 > k ? "top" : 0 < g ? "bottom" : "middle"
                    };
                    n < q && e(c + b) < n && (m.horizontal = "center");
                    z < E && e(g + k) < z && (m.vertical = "middle");
                    f(e(c), e(b)) > f(e(g), e(k)) ? m.important = "horizontal" : m.important = "vertical";
                    d.using.call(this, a, m)
                });
                h.offset(b.extend(D, {using: l}))
            })
        };
        b.ui.position = {
            fit: {
                left: function (a, c) {
                    var d = c.within, b = d.isWindow ? d.scrollLeft : d.offset.left, g = d.width, e = a.left - c.collisionPosition.marginLeft, d = b - e, k = e + c.collisionWidth - g - b;
                    c.collisionWidth > g ? 0 < d && 0 >= k ? (b = a.left + d + c.collisionWidth - g - b, a.left += d - b) :
                        a.left = 0 < k && 0 >= d ? b : d > k ? b + g - c.collisionWidth : b : a.left = 0 < d ? a.left + d : 0 < k ? a.left - k : f(a.left - e, a.left)
                }, top: function (a, c) {
                    var d = c.within, b = d.isWindow ? d.scrollTop : d.offset.top, g = c.within.height, e = a.top - c.collisionPosition.marginTop, d = b - e, k = e + c.collisionHeight - g - b;
                    c.collisionHeight > g ? 0 < d && 0 >= k ? (b = a.top + d + c.collisionHeight - g - b, a.top += d - b) : a.top = 0 < k && 0 >= d ? b : d > k ? b + g - c.collisionHeight : b : a.top = 0 < d ? a.top + d : 0 < k ? a.top - k : f(a.top - e, a.top)
                }
            }, flip: {
                left: function (a, c) {
                    var d = c.within, b = d.offset.left + d.scrollLeft, g = d.width,
                        f = d.isWindow ? d.scrollLeft : d.offset.left, k = a.left - c.collisionPosition.marginLeft, d = k - f, l = k + c.collisionWidth - g - f, k = "left" === c.my[0] ? -c.elemWidth : "right" === c.my[0] ? c.elemWidth : 0, h = "left" === c.at[0] ? c.targetWidth : "right" === c.at[0] ? -c.targetWidth : 0, q = -2 * c.offset[0];
                    if (0 > d) {
                        if (b = a.left + k + h + q + c.collisionWidth - g - b, 0 > b || b < e(d))a.left += k + h + q
                    } else 0 < l && (b = a.left - c.collisionPosition.marginLeft + k + h + q - f, 0 < b || e(b) < l) && (a.left += k + h + q)
                }, top: function (a, c) {
                    var d = c.within, b = d.offset.top + d.scrollTop, g = d.height, f = d.isWindow ?
                        d.scrollTop : d.offset.top, k = a.top - c.collisionPosition.marginTop, d = k - f, l = k + c.collisionHeight - g - f, k = "top" === c.my[1] ? -c.elemHeight : "bottom" === c.my[1] ? c.elemHeight : 0, h = "top" === c.at[1] ? c.targetHeight : "bottom" === c.at[1] ? -c.targetHeight : 0, q = -2 * c.offset[1];
                    if (0 > d) {
                        if (b = a.top + k + h + q + c.collisionHeight - g - b, 0 > b || b < e(d))a.top += k + h + q
                    } else 0 < l && (b = a.top - c.collisionPosition.marginTop + k + h + q - f, 0 < b || e(b) < l) && (a.top += k + h + q)
                }
            }, flipfit: {
                left: function () {
                    b.ui.position.flip.left.apply(this, arguments);
                    b.ui.position.fit.left.apply(this,
                        arguments)
                }, top: function () {
                    b.ui.position.flip.top.apply(this, arguments);
                    b.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function () {
            var a, c, d, f, e = document.getElementsByTagName("body")[0];
            d = document.createElement("div");
            a = document.createElement(e ? "div" : "body");
            c = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
            e && b.extend(c, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (f in c)a.style[f] = c[f];
            a.appendChild(d);
            c = e || document.documentElement;
            c.insertBefore(a, c.firstChild);
            d.style.cssText = "position: absolute; left: 10.7432222px;";
            d = b(d).offset().left;
            g = 10 < d && 11 > d;
            a.innerHTML = "";
            c.removeChild(a)
        })()
    })();
    b.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var a = this.options;
            this.prevShow = this.prevHide = b();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            a.collapsible || !1 !== a.active && null != a.active || (a.active = 0);
            this._processPanels();
            0 > a.active && (a.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active, panel: this.active.length ?
                    this.active.next() : b()
            }
        },
        _createIcons: function () {
            var a = this.options.icons;
            a && (b("<span>").addClass("ui-accordion-header-icon ui-icon " + a.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function (a, c) {
            "active" === a ? this._activate(c) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(c)), this._super(a, c), "collapsible" !== a || c || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), c && this._createIcons()), "disabled" === a && (this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",
                !!c)))
        },
        _keydown: function (a) {
            if (!a.altKey && !a.ctrlKey) {
                var c = b.ui.keyCode, d = this.headers.length, g = this.headers.index(a.target), f = !1;
                switch (a.keyCode) {
                    case c.RIGHT:
                    case c.DOWN:
                        f = this.headers[(g + 1) % d];
                        break;
                    case c.LEFT:
                    case c.UP:
                        f = this.headers[(g - 1 + d) % d];
                        break;
                    case c.SPACE:
                    case c.ENTER:
                        this._eventHandler(a);
                        break;
                    case c.HOME:
                        f = this.headers[0];
                        break;
                    case c.END:
                        f = this.headers[d - 1]
                }
                f && (b(a.target).attr("tabIndex", -1), b(f).attr("tabIndex", 0), f.focus(), a.preventDefault())
            }
        },
        _panelKeyDown: function (a) {
            a.keyCode ===
            b.ui.keyCode.UP && a.ctrlKey && b(a.currentTarget).prev().focus()
        },
        refresh: function () {
            var a = this.options;
            this._processPanels();
            !1 === a.active && !0 === a.collapsible || !this.headers.length ? (a.active = !1, this.active = b()) : !1 === a.active ? this._activate(0) : this.active.length && !b.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (a.active = !1, this.active = b()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function () {
            var a = this.headers, c = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
            c && (this._off(a.not(this.headers)), this._off(c.not(this.panels)))
        },
        _refresh: function () {
            var a, c = this.options, d = c.heightStyle, g = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function () {
                var a = b(this), c = a.uniqueId().attr("id"), d = a.next(), g = d.uniqueId().attr("id");
                a.attr("aria-controls", g);
                d.attr("aria-labelledby", c)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(c.event);
            "fill" === d ? (a = g.height(), this.element.siblings(":visible").each(function () {
                var c = b(this), d = c.css("position");
                "absolute" !== d && "fixed" !== d && (a -= c.outerHeight(!0))
            }), this.headers.each(function () {
                a -= b(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                b(this).height(Math.max(0,
                    a - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === d && (a = 0, this.headers.next().each(function () {
                a = Math.max(a, b(this).css("height", "").height())
            }).height(a))
        },
        _activate: function (a) {
            a = this._findActive(a)[0];
            a !== this.active[0] && (a = a || this.active[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        },
        _findActive: function (a) {
            return "number" === typeof a ? this.headers.eq(a) : b()
        },
        _setupEvents: function (a) {
            var c = {keydown: "_keydown"};
            a && b.each(a.split(" "), function (a,
                                                b) {
                c[b] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, c);
            this._on(this.headers.next(), {keydown: "_panelKeyDown"});
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function (a) {
            var c = this.options, d = this.active, g = b(a.currentTarget), f = g[0] === d[0], e = f && c.collapsible, k = e ? b() : g.next(), h = d.next(), k = {
                oldHeader: d,
                oldPanel: h,
                newHeader: e ? b() : g,
                newPanel: k
            };
            a.preventDefault();
            f && !c.collapsible || !1 === this._trigger("beforeActivate", a, k) || (c.active =
                e ? !1 : this.headers.index(g), this.active = f ? b() : g, this._toggle(k), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (g.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && g.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), g.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (a) {
            var c =
                a.newPanel, d = this.prevShow.length ? this.prevShow : a.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = c;
            this.prevHide = d;
            this.options.animate ? this._animate(c, d, a) : (d.hide(), c.show(), this._toggleComplete(a));
            d.attr({"aria-hidden": "true"});
            d.prev().attr({"aria-selected": "false", "aria-expanded": "false"});
            c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function () {
                return 0 === parseInt(b(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1);
            c.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _animate: function (a, c, d) {
            var b, f, e, k = this, h = 0, l = a.css("box-sizing"), q = a.length && (!c.length || a.index() < c.index()), p = this.options.animate || {}, q = q && p.down || p, n = function () {
                k._toggleComplete(d)
            };
            "number" === typeof q && (e = q);
            "string" === typeof q && (f = q);
            f = f || q.easing || p.easing;
            e = e || q.duration || p.duration;
            if (!c.length)return a.animate(this.showProps, e, f, n);
            if (!a.length)return c.animate(this.hideProps, e, f, n);
            b = a.show().outerHeight();
            c.animate(this.hideProps, {
                duration: e, easing: f, step: function (a, c) {
                    c.now = Math.round(a)
                }
            });
            a.hide().animate(this.showProps, {
                duration: e, easing: f, complete: n, step: function (a, d) {
                    d.now = Math.round(a);
                    "height" !== d.prop ? "content-box" === l && (h += d.now) : "content" !== k.options.heightStyle && (d.now = Math.round(b - c.outerHeight() - h), h = 0)
                }
            })
        },
        _toggleComplete: function (a) {
            var c = a.oldPanel;
            c.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            c.length &&
            (c.parent()[0].className = c.parent()[0].className);
            this._trigger("activate", null, a)
        }
    });
    b.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left-1 top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item": function (a) {
                    a.preventDefault()
                }, "click .ui-menu-item": function (a) {
                    var c = b(a.target);
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && b(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus",
                        [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (a) {
                    if (!this.previousFilter) {
                        var c = b(a.currentTarget);
                        c.siblings(".ui-state-active").removeClass("ui-state-active");
                        this.focus(a, c)
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (a, c) {
                    var d = this.active || this.element.find(this.options.items).eq(0);
                    c || this.focus(a, d)
                }, blur: function (a) {
                    this._delay(function () {
                        b.contains(this.element[0], this.document[0].activeElement) ||
                        this.collapseAll(a)
                    })
                }, keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function (a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var a = b(this);
                a.data("ui-menu-submenu-carat") && a.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (a) {
            var c, d, g, f = !0;
            switch (a.keyCode) {
                case b.ui.keyCode.PAGE_UP:
                    this.previousPage(a);
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    this.nextPage(a);
                    break;
                case b.ui.keyCode.HOME:
                    this._move("first", "first", a);
                    break;
                case b.ui.keyCode.END:
                    this._move("last", "last", a);
                    break;
                case b.ui.keyCode.UP:
                    this.previous(a);
                    break;
                case b.ui.keyCode.DOWN:
                    this.next(a);
                    break;
                case b.ui.keyCode.LEFT:
                    this.collapse(a);
                    break;
                case b.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                    break;
                case b.ui.keyCode.ENTER:
                case b.ui.keyCode.SPACE:
                    this._activate(a);
                    break;
                case b.ui.keyCode.ESCAPE:
                    this.collapse(a);
                    break;
                default:
                    f = !1, c = this.previousFilter || "", d = String.fromCharCode(a.keyCode), g = !1, clearTimeout(this.filterTimer), d === c ? g = !0 : d = c + d, c = this._filterMenuItems(d), c = g && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (d = String.fromCharCode(a.keyCode), c = this._filterMenuItems(d)), c.length ? (this.focus(a, c), this.previousFilter = d, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1E3)) : delete this.previousFilter
            }
            f && a.preventDefault()
        },
        _activate: function (a) {
            this.active.is(".ui-state-disabled") ||
            (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
        },
        refresh: function () {
            var a, c = this, d = this.options.icons.submenu;
            a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var a = b(this), c = a.parent(), e = b("<span>").addClass("ui-menu-icon ui-icon " +
                    d).data("ui-menu-submenu-carat", !0);
                c.attr("aria-haspopup", "true").prepend(e);
                a.attr("aria-labelledby", c.attr("id"))
            });
            a = a.add(this.element).find(this.options.items);
            a.not(".ui-menu-item").each(function () {
                var a = b(this);
                c._isDivider(a) && a.addClass("ui-widget-content ui-menu-divider")
            });
            a.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            a.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !b.contains(this.element[0],
                this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (a, c) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu);
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c);
            this._super(a, c)
        },
        focus: function (a, c) {
            var d;
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(c);
            this.active = c.first();
            d = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay);
            d = c.children(".ui-menu");
            d.length && a && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = c.parent();
            this._trigger("focus", a, {item: c})
        },
        _scrollIntoView: function (a) {
            var c, d, g;
            this._hasScroll() && (c = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) ||
                0, d = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0, c = a.offset().top - this.activeMenu.offset().top - c - d, d = this.activeMenu.scrollTop(), g = this.activeMenu.height(), a = a.outerHeight(), 0 > c ? this.activeMenu.scrollTop(d + c) : c + a > g && this.activeMenu.scrollTop(d + c - g + a))
        },
        blur: function (a, c) {
            c || clearTimeout(this.timer);
            this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {item: this.active}))
        },
        _startOpening: function (a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function (a) {
            var c = b.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function (a, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                var d = c ? this.element : b(a && a.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(a);
                this.activeMenu = d
            }, this.delay)
        },
        _close: function (a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function (a) {
            return !b(a.target).closest(".ui-menu").length
        },
        _isDivider: function (a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function (a) {
            var c =
                this.active && this.active.parent().closest(".ui-menu-item", this.element);
            c && c.length && (this._close(), this.focus(a, c))
        },
        expand: function (a) {
            var c = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            c && c.length && (this._open(c.parent()), this._delay(function () {
                this.focus(a, c)
            }))
        },
        next: function (a) {
            this._move("next", "first", a)
        },
        previous: function (a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (a, c, d) {
            var b;
            this.active && (b = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
            b && b.length && this.active || (b = this.activeMenu.find(this.options.items)[c]());
            this.focus(d, b)
        },
        nextPage: function (a) {
            var c, d, g;
            this.active ? this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, g = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                c =
                    b(this);
                return 0 > c.offset().top - d - g
            }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(a)
        },
        previousPage: function (a) {
            var c, d, g;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, g = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                c = b(this);
                return 0 < c.offset().top - d + g
            }), this.focus(a, c)) : this.focus(a, this.activeMenu.find(this.options.items).first())) : this.next(a)
        },
        _hasScroll: function () {
            return this.element.outerHeight() <
                this.element.prop("scrollHeight")
        },
        select: function (a) {
            this.active = this.active || b(a.target).closest(".ui-menu-item");
            var c = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, c)
        },
        _filterMenuItems: function (a) {
            a = a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var c = new RegExp("^" + a, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return c.test(b.trim(b(this).text()))
            })
        }
    });
    b.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var a, c, d, g = this.element[0].nodeName.toLowerCase(), f = "textarea" === g, g = "input" === g;
            this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || g ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete",
                "off");
            this._on(this.element, {
                keydown: function (g) {
                    if (this.element.prop("readOnly"))c = d = a = !0; else {
                        c = d = a = !1;
                        var f = b.ui.keyCode;
                        switch (g.keyCode) {
                            case f.PAGE_UP:
                                a = !0;
                                this._move("previousPage", g);
                                break;
                            case f.PAGE_DOWN:
                                a = !0;
                                this._move("nextPage", g);
                                break;
                            case f.UP:
                                a = !0;
                                this._keyEvent("previous", g);
                                break;
                            case f.DOWN:
                                a = !0;
                                this._keyEvent("next", g);
                                break;
                            case f.ENTER:
                                this.menu.active && (a = !0, g.preventDefault(), this.menu.select(g));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(g);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") &&
                                (this.isMultiLine || this._value(this.term), this.close(g), g.preventDefault());
                                break;
                            default:
                                c = !0, this._searchTimeout(g)
                        }
                    }
                }, keypress: function (d) {
                    if (a)a = !1, this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault(); else if (!c) {
                        var g = b.ui.keyCode;
                        switch (d.keyCode) {
                            case g.PAGE_UP:
                                this._move("previousPage", d);
                                break;
                            case g.PAGE_DOWN:
                                this._move("nextPage", d);
                                break;
                            case g.UP:
                                this._keyEvent("previous", d);
                                break;
                            case g.DOWN:
                                this._keyEvent("next", d)
                        }
                    }
                }, input: function (a) {
                    d ? (d = !1, a.preventDefault()) :
                        this._searchTimeout(a)
                }, focus: function () {
                    this.selectedItem = null;
                    this.previous = this._value()
                }, blur: function (a) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                }
            });
            this._initSource();
            this.menu = b("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function (a) {
                    a.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function () {
                        delete this.cancelBlur
                    });
                    var c = this.menu.element[0];
                    b(a.target).closest(".ui-menu-item").length || this._delay(function () {
                        var a = this;
                        this.document.one("mousedown", function (d) {
                            d.target === a.element[0] || d.target === c || b.contains(c, d.target) || a.close()
                        })
                    })
                }, menufocus: function (a, c) {
                    var d;
                    if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function () {
                            b(a.target).trigger(a.originalEvent)
                        });
                        return
                    }
                    d = c.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", a, {item: d}) &&
                    a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(d.value);
                    (d = c.item.attr("aria-label") || d.value) && b.trim(d).length && (this.liveRegion.children().hide(), b("<div>").text(d).appendTo(this.liveRegion))
                }, menuselect: function (a, c) {
                    var d = c.item.data("ui-autocomplete-item"), b = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = b, this._delay(function () {
                        this.previous = b;
                        this.selectedItem = d
                    }));
                    !1 !== this._trigger("select", a, {item: d}) && this._value(d.value);
                    this.term = this._value();
                    this.close(a);
                    this.selectedItem = d
                }
            });
            this.liveRegion = b("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function (a,
                              c) {
            this._super(a, c);
            "source" === a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && c && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front"));
            a.length || (a = this.document[0].body);
            return a
        },
        _initSource: function () {
            var a, c, d = this;
            b.isArray(this.options.source) ? (a = this.options.source, this.source = function (c, d) {
                d(b.ui.autocomplete.filter(a,
                    c.term))
            }) : "string" === typeof this.options.source ? (c = this.options.source, this.source = function (a, f) {
                d.xhr && d.xhr.abort();
                d.xhr = b.ajax({
                    url: c, data: a, dataType: "json", success: function (a) {
                        f(a)
                    }, error: function () {
                        f([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function () {
                var c = this.term === this._value(), d = this.menu.element.is(":visible"), b = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                if (!c || c && !d && !b)this.selectedItem = null, this.search(null,
                    a)
            }, this.options.delay)
        },
        search: function (a, c) {
            a = null != a ? a : this._value();
            this.term = this._value();
            if (a.length < this.options.minLength)return this.close(c);
            if (!1 !== this._trigger("search", c))return this._search(a)
        },
        _search: function (a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({term: a}, this._response())
        },
        _response: function () {
            var a = ++this.requestIndex;
            return b.proxy(function (c) {
                    a === this.requestIndex && this.__response(c);
                    this.pending--;
                    this.pending || this.element.removeClass("ui-autocomplete-loading")
                },
                this)
        },
        __response: function (a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {content: a});
            !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function (a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function (a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function (a) {
            this.previous !== this._value() && this._trigger("change", a, {item: this.selectedItem})
        },
        _normalize: function (a) {
            return a.length && a[0].label && a[0].value ? a : b.map(a, function (a) {
                return "string" === typeof a ? {label: a, value: a} : b.extend({}, a, {
                    label: a.label || a.value,
                    value: a.value || a.label
                })
            })
        },
        _suggest: function (a) {
            var c = this.menu.element.empty();
            this._renderMenu(c, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            c.show();
            this._resizeMenu();
            c.position(b.extend({of: this.element}, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() +
                1, this.element.outerWidth()))
        },
        _renderMenu: function (a, c) {
            var d = this;
            b.each(c, function (c, b) {
                d._renderItemData(a, b)
            })
        },
        _renderItemData: function (a, c) {
            return this._renderItem(a, c).data("ui-autocomplete-item", c)
        },
        _renderItem: function (a, c) {
            return b("<li>").text(c.label).appendTo(a)
        },
        _move: function (a, c) {
            if (this.menu.element.is(":visible"))if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a))this.isMultiLine || this._value(this.term), this.menu.blur(); else this.menu[a](c);
            else this.search(null, c)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (a, c) {
            if (!this.isMultiLine || this.menu.element.is(":visible"))this._move(a, c), c.preventDefault()
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function (a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (a, c) {
            var d = new RegExp(b.ui.autocomplete.escapeRegex(c), "i");
            return b.grep(a, function (a) {
                return d.test(a.label || a.value ||
                    a)
            })
        }
    });
    b.widget("ui.autocomplete", b.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (a) {
                    return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (a) {
            var c;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (c = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(), b("<div>").text(c).appendTo(this.liveRegion))
        }
    });
    var v, y =
        function () {
            var a = b(this);
            setTimeout(function () {
                a.find(":ui-button").button("refresh")
            }, 1)
        }, J = function (a) {
        var c = a.name, d = a.form, g = b([]);
        c && (c = c.replace(/'/g, "\\'"), g = d ? b(d).find("[name='" + c + "'][type=radio]") : b("[name='" + c + "'][type=radio]", a.ownerDocument).filter(function () {
            return !this.form
        }));
        return g
    };
    b.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" +
                this.eventNamespace).bind("reset" + this.eventNamespace, y);
            "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this, c = this.options, d = "checkbox" === this.type || "radio" === this.type, g = d ? "" : "ui-state-active";
            null === c.label && (c.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                c.disabled || this === v && b(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                c.disabled || b(this).removeClass(g)
            }).bind("click" + this.eventNamespace, function (a) {
                c.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            });
            this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                }, blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            d && this.element.bind("change" + this.eventNamespace, function () {
                a.refresh()
            });
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (c.disabled)return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (c.disabled)return !1;
                b(this).addClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", "true");
                var d = a.element[0];
                J(d).not(d).map(function () {
                    return b(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed",
                    "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (c.disabled)return !1;
                b(this).addClass("ui-state-active");
                v = this;
                a.document.one("mouseup", function () {
                    v = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (c.disabled)return !1;
                b(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (a) {
                if (c.disabled)return !1;
                a.keyCode !== b.ui.keyCode.SPACE && a.keyCode !== b.ui.keyCode.ENTER || b(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace +
                " blur" + this.eventNamespace, function () {
                b(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (a) {
                a.keyCode === b.ui.keyCode.SPACE && b(this).click()
            }));
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            var a, c;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
            "checkbox" === this.type || "radio" === this.type ?
                (a = this.element.parents().last(), c = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(c), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(c), this.buttonElement.length || (this.buttonElement = a.find(c))), this.element.addClass("ui-helper-hidden-accessible"), (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", a)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (a, c) {
            this._super(a,
                c);
            "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!c), this.element.prop("disabled", !!c), c && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"))) : this._resetButton()
        },
        refresh: function () {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            "radio" === this.type ? J(this.element[0]).each(function () {
                b(this).is(":checked") ?
                    b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type)this.options.label && this.element.val(this.options.label); else {
                var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    c = b("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(), d = this.options.icons, g = d.primary && d.secondary, f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (g ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(g ? "ui-button-icons-only" :
                    "ui-button-icon-only"), this.hasTitle || a.attr("title", b.trim(c)))) : f.push("ui-button-text-only");
                a.addClass(f.join(" "))
            }
        }
    });
    b.widget("ui.buttonset", {
        version: "1.11.4",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (a, c) {
            "disabled" === a && this.buttons.button("option", a, c);
            this._super(a, c)
        },
        refresh: function () {
            var a =
                "rtl" === this.element.css("direction"), c = this.element.find(this.options.items), d = c.filter(":ui-button");
            c.not(":ui-button").button();
            d.button("refresh");
            this.buttons = c.map(function () {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    b.extend(b.ui, {datepicker: {version: "1.11.4"}});
    var B;
    b.extend(p.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            l(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function (a, c) {
            var d, g, f;
            d = a.nodeName.toLowerCase();
            g = "div" === d || "span" === d;
            a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            f = this._newInst(b(a), g);
            f.settings = b.extend({}, c || {});
            "input" === d ? this._connectDatepicker(a, f) : g && this._inlineDatepicker(a, f)
        },
        _newInst: function (a,
                            c) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? u(b("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (a, c) {
            var d = b(a);
            c.append = b([]);
            c.trigger = b([]);
            d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                this._autoSize(c), b.data(a, "datepicker", c), c.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function (a, c) {
            var d, g;
            d = this._get(c, "appendText");
            var f = this._get(c, "isRTL");
            c.append && c.append.remove();
            d && (c.append = b("<span class='" + this._appendClass + "'>" + d + "</span>"), a[f ? "before" : "after"](c.append));
            a.unbind("focus", this._showDatepicker);
            c.trigger && c.trigger.remove();
            d = this._get(c, "showOn");
            "focus" !== d && "both" !== d || a.focus(this._showDatepicker);
            if ("button" === d || "both" === d)d = this._get(c,
                "buttonText"), g = this._get(c, "buttonImage"), c.trigger = b(this._get(c, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({
                src: g,
                alt: d,
                title: d
            }) : b("<button type='button'></button>").addClass(this._triggerClass).html(g ? b("<img/>").attr({
                src: g,
                alt: d,
                title: d
            }) : d)), a[f ? "before" : "after"](c.trigger), c.trigger.click(function () {
                b.datepicker._datepickerShowing && b.datepicker._lastInput === a[0] ? b.datepicker._hideDatepicker() : (b.datepicker._datepickerShowing && b.datepicker._lastInput !== a[0] && b.datepicker._hideDatepicker(),
                    b.datepicker._showDatepicker(a[0]));
                return !1
            })
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var c, d, b, f, e = new Date(2009, 11, 20), k = this._get(a, "dateFormat");
                k.match(/[DM]/) && (c = function (a) {
                    for (f = b = d = 0; f < a.length; f++)a[f].length > d && (d = a[f].length, b = f);
                    return b
                }, e.setMonth(c(this._get(a, k.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(c(this._get(a, k.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay()));
                a.input.attr("size", this._formatDate(a, e).length)
            }
        },
        _inlineDatepicker: function (a,
                                     c) {
            var d = b(a);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), b.data(a, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(a), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (a, c, d, g, f) {
            var e;
            a = this._dialogInst;
            a || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = b("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, b.data(this._dialogInput[0], "datepicker", a));
            l(a.settings, g || {});
            c = c && c.constructor === Date ? this._formatDate(a, c) : c;
            this._dialogInput.val(c);
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
            this._pos || (c = document.documentElement.clientWidth, g = document.documentElement.clientHeight, f = document.documentElement.scrollLeft || document.body.scrollLeft, e = document.documentElement.scrollTop ||
                document.body.scrollTop, this._pos = [c / 2 - 100 + f, g / 2 - 150 + e]);
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            a.settings.onSelect = d;
            this._inDialog = !0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            b.blockUI && b.blockUI(this.dpDiv);
            b.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function (a) {
            var c, d = b(a), g = b.data(a, "datepicker");
            d.hasClass(this.markerClassName) && (c = a.nodeName.toLowerCase(), b.removeData(a, "datepicker"),
                "input" === c ? (g.append.remove(), g.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== c && "span" !== c || d.removeClass(this.markerClassName).empty(), B === g && (B = null))
        },
        _enableDatepicker: function (a) {
            var c, d = b(a), g = b.data(a, "datepicker");
            if (d.hasClass(this.markerClassName)) {
                c = a.nodeName.toLowerCase();
                if ("input" === c)a.disabled = !1, g.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                }); else if ("div" === c || "span" === c)c = d.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = b.map(this._disabledInputs, function (c) {
                    return c === a ? null : c
                })
            }
        },
        _disableDatepicker: function (a) {
            var c, d = b(a), g = b.data(a, "datepicker");
            if (d.hasClass(this.markerClassName)) {
                c = a.nodeName.toLowerCase();
                if ("input" === c)a.disabled = !0, g.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                }); else if ("div" === c || "span" === c)c = d.children("." + this._inlineClass), c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = b.map(this._disabledInputs, function (c) {
                    return c === a ? null : c
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function (a) {
            if (!a)return !1;
            for (var c = 0; c < this._disabledInputs.length; c++)if (this._disabledInputs[c] ===
                a)return !0;
            return !1
        },
        _getInst: function (a) {
            try {
                return b.data(a, "datepicker")
            } catch (c) {
                throw"Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (a, c, d) {
            var g, f, e, k, h = this._getInst(a);
            if (2 === arguments.length && "string" === typeof c)return "defaults" === c ? b.extend({}, b.datepicker._defaults) : h ? "all" === c ? b.extend({}, h.settings) : this._get(h, c) : null;
            g = c || {};
            "string" === typeof c && (g = {}, g[c] = d);
            h && (this._curInst === h && this._hideDatepicker(), f = this._getDateDatepicker(a, !0), e = this._getMinMaxDate(h,
                "min"), k = this._getMinMaxDate(h, "max"), l(h.settings, g), null !== e && void 0 !== g.dateFormat && void 0 === g.minDate && (h.settings.minDate = this._formatDate(h, e)), null !== k && void 0 !== g.dateFormat && void 0 === g.maxDate && (h.settings.maxDate = this._formatDate(h, k)), "disabled" in g && (g.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)), this._attachments(b(a), h), this._autoSize(h), this._setDate(h, f), this._updateAlternate(h), this._updateDatepicker(h))
        },
        _changeDatepicker: function (a, c, d) {
            this._optionDatepicker(a,
                c, d)
        },
        _refreshDatepicker: function (a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function (a, c) {
            var d = this._getInst(a);
            d && (this._setDate(d, c), this._updateDatepicker(d), this._updateAlternate(d))
        },
        _getDateDatepicker: function (a, c) {
            var d = this._getInst(a);
            d && !d.inline && this._setDateFromField(d, c);
            return d ? this._getDate(d) : null
        },
        _doKeyDown: function (a) {
            var c, d = b.datepicker._getInst(a.target);
            c = !0;
            var g = d.dpDiv.is(".ui-datepicker-rtl");
            d._keyEvent = !0;
            if (b.datepicker._datepickerShowing)switch (a.keyCode) {
                case 9:
                    b.datepicker._hideDatepicker();
                    c = !1;
                    break;
                case 13:
                    return c = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", d.dpDiv), c[0] && b.datepicker._selectDay(a.target, d.selectedMonth, d.selectedYear, c[0]), (a = b.datepicker._get(d, "onSelect")) ? (c = b.datepicker._formatDate(d), a.apply(d.input ? d.input[0] : null, [c, d])) : b.datepicker._hideDatepicker(), !1;
                case 27:
                    b.datepicker._hideDatepicker();
                    break;
                case 33:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(d, "stepBigMonths") : -b.datepicker._get(d, "stepMonths"), "M");
                    break;
                case 34:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(d, "stepBigMonths") : +b.datepicker._get(d, "stepMonths"), "M");
                    break;
                case 35:
                    (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target);
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target);
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, g ? 1 : -1, "D");
                    c = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ?
                        -b.datepicker._get(d, "stepBigMonths") : -b.datepicker._get(d, "stepMonths"), "M");
                    break;
                case 38:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D");
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, g ? -1 : 1, "D");
                    c = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(d, "stepBigMonths") : +b.datepicker._get(d, "stepMonths"), "M");
                    break;
                case 40:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target,
                        7, "D");
                    c = a.ctrlKey || a.metaKey;
                    break;
                default:
                    c = !1
            } else 36 === a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : c = !1;
            c && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function (a) {
            var c, d;
            c = b.datepicker._getInst(a.target);
            if (b.datepicker._get(c, "constrainInput"))return c = b.datepicker._possibleChars(b.datepicker._get(c, "dateFormat")), d = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), a.ctrlKey || a.metaKey || " " > d || !c || -1 < c.indexOf(d)
        },
        _doKeyUp: function (a) {
            var c;
            a = b.datepicker._getInst(a.target);
            if (a.input.val() !== a.lastVal)try {
                if (c = b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a)))b.datepicker._setDateFromField(a), b.datepicker._updateAlternate(a), b.datepicker._updateDatepicker(a)
            } catch (d) {
            }
            return !0
        },
        _showDatepicker: function (a) {
            a = a.target || a;
            "input" !== a.nodeName.toLowerCase() && (a = b("input", a.parentNode)[0]);
            if (!b.datepicker._isDisabledDatepicker(a) && b.datepicker._lastInput !== a) {
                var c, d, g, f;
                c = b.datepicker._getInst(a);
                b.datepicker._curInst &&
                b.datepicker._curInst !== c && (b.datepicker._curInst.dpDiv.stop(!0, !0), c && b.datepicker._datepickerShowing && b.datepicker._hideDatepicker(b.datepicker._curInst.input[0]));
                d = (d = b.datepicker._get(c, "beforeShow")) ? d.apply(a, [a, c]) : {};
                if (!1 !== d && (l(c.settings, d), c.lastVal = null, b.datepicker._lastInput = a, b.datepicker._setDateFromField(c), b.datepicker._inDialog && (a.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(a), b.datepicker._pos[1] += a.offsetHeight), g = !1, b(a).parents().each(function () {
                        g |=
                            "fixed" === b(this).css("position");
                        return !g
                    }), d = {
                        left: b.datepicker._pos[0],
                        top: b.datepicker._pos[1]
                    }, b.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), b.datepicker._updateDatepicker(c), d = b.datepicker._checkOffset(c, d, g), c.dpDiv.css({
                        position: b.datepicker._inDialog && b.blockUI ? "static" : g ? "fixed" : "absolute",
                        display: "none",
                        left: d.left + "px",
                        top: d.top + "px"
                    }), !c.inline)) {
                    d = b.datepicker._get(c, "showAnim");
                    f = b.datepicker._get(c, "duration");
                    c.dpDiv.css("z-index",
                        t(b(a)) + 1);
                    b.datepicker._datepickerShowing = !0;
                    if (b.effects && b.effects.effect[d])c.dpDiv.show(d, b.datepicker._get(c, "showOptions"), f); else c.dpDiv[d || "show"](d ? f : null);
                    b.datepicker._shouldFocusInput(c) && c.input.focus();
                    b.datepicker._curInst = c
                }
            }
        },
        _updateDatepicker: function (a) {
            this.maxRows = 4;
            B = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            this._attachHandlers(a);
            var c, d = this._getNumberOfMonths(a), g = d[1], f = a.dpDiv.find("." + this._dayOverClass + " a");
            0 < f.length && h.apply(f.get(0));
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < g && a.dpDiv.addClass("ui-datepicker-multi-" + g).css("width", 17 * g + "em");
            a.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a === b.datepicker._curInst && b.datepicker._datepickerShowing && b.datepicker._shouldFocusInput(a) && a.input.focus();
            a.yearshtml && (c = a.yearshtml, setTimeout(function () {
                c === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                c = a.yearshtml =
                    null
            }, 0))
        },
        _shouldFocusInput: function (a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function (a, c, d) {
            var g = a.dpDiv.outerWidth(), f = a.dpDiv.outerHeight(), e = a.input ? a.input.outerWidth() : 0, k = a.input ? a.input.outerHeight() : 0, h = document.documentElement.clientWidth + (d ? 0 : b(document).scrollLeft()), l = document.documentElement.clientHeight + (d ? 0 : b(document).scrollTop());
            c.left -= this._get(a, "isRTL") ? g - e : 0;
            c.left -= d && c.left === a.input.offset().left ? b(document).scrollLeft() :
                0;
            c.top -= d && c.top === a.input.offset().top + k ? b(document).scrollTop() : 0;
            c.left -= Math.min(c.left, c.left + g > h && h > g ? Math.abs(c.left + g - h) : 0);
            c.top -= Math.min(c.top, c.top + f > l && l > f ? Math.abs(f + k) : 0);
            return c
        },
        _findPos: function (a) {
            for (var c = this._getInst(a), c = this._get(c, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || b.expr.filters.hidden(a));)a = a[c ? "previousSibling" : "nextSibling"];
            a = b(a).offset();
            return [a.left, a.top]
        },
        _hideDatepicker: function (a) {
            var c, d, g = this._curInst;
            if (g && (!a || g === b.data(a, "datepicker")) &&
                this._datepickerShowing) {
                a = this._get(g, "showAnim");
                c = this._get(g, "duration");
                d = function () {
                    b.datepicker._tidyDialog(g)
                };
                if (b.effects && (b.effects.effect[a] || b.effects[a]))g.dpDiv.hide(a, b.datepicker._get(g, "showOptions"), c, d); else g.dpDiv["slideDown" === a ? "slideUp" : "fadeIn" === a ? "fadeOut" : "hide"](a ? c : null, d);
                a || d();
                this._datepickerShowing = !1;
                (a = this._get(g, "onClose")) && a.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0", top: "-100px"
                }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (a) {
            if (b.datepicker._curInst) {
                a = b(a.target);
                var c = b.datepicker._getInst(a[0]);
                (!(a[0].id === b.datepicker._mainDivId || 0 !== a.parents("#" + b.datepicker._mainDivId).length || a.hasClass(b.datepicker.markerClassName) || a.closest("." + b.datepicker._triggerClass).length || !b.datepicker._datepickerShowing ||
                b.datepicker._inDialog && b.blockUI) || a.hasClass(b.datepicker.markerClassName) && b.datepicker._curInst !== c) && b.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (a, c, d) {
            a = b(a);
            var g = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(g, c + ("M" === d ? this._get(g, "showCurrentAtPos") : 0), d), this._updateDatepicker(g))
        },
        _gotoToday: function (a) {
            var c = b(a), d = this._getInst(c[0]);
            this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth,
                d.drawYear = d.selectedYear = d.currentYear) : (a = new Date, d.selectedDay = a.getDate(), d.drawMonth = d.selectedMonth = a.getMonth(), d.drawYear = d.selectedYear = a.getFullYear());
            this._notifyChange(d);
            this._adjustDate(c)
        },
        _selectMonthYear: function (a, c, d) {
            a = b(a);
            var g = this._getInst(a[0]);
            g["selected" + ("M" === d ? "Month" : "Year")] = g["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(g);
            this._adjustDate(a)
        },
        _selectDay: function (a, c, d, g) {
            var f;
            f = b(a);
            b(g).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(f[0]) || (f = this._getInst(f[0]), f.selectedDay = f.currentDay = b("a", g).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (a) {
            a = b(a);
            this._selectDate(a, "")
        },
        _selectDate: function (a, c) {
            var d;
            d = b(a);
            var g = this._getInst(d[0]);
            c = null != c ? c : this._formatDate(g);
            g.input && g.input.val(c);
            this._updateAlternate(g);
            (d = this._get(g, "onSelect")) ? d.apply(g.input ? g.input[0] :
                null, [c, g]) : g.input && g.input.trigger("change");
            g.inline ? this._updateDatepicker(g) : (this._hideDatepicker(), this._lastInput = g.input[0], "object" !== typeof g.input[0] && g.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (a) {
            var c, d, g, f = this._get(a, "altField");
            f && (c = this._get(a, "altFormat") || this._get(a, "dateFormat"), d = this._getDate(a), g = this.formatDate(c, d, this._getFormatConfig(a)), b(f).each(function () {
                b(this).val(g)
            }))
        },
        noWeekends: function (a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function (a) {
            var c =
                new Date(a.getTime());
            c.setDate(c.getDate() + 4 - (c.getDay() || 7));
            a = c.getTime();
            c.setMonth(0);
            c.setDate(1);
            return Math.floor(Math.round((a - c) / 864E5) / 7) + 1
        },
        parseDate: function (a, c, d) {
            if (null == a || null == c)throw"Invalid arguments";
            c = "object" === typeof c ? c.toString() : c + "";
            if ("" === c)return null;
            var g, f, e, k = 0;
            f = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            f = "string" !== typeof f ? f : (new Date).getFullYear() % 100 + parseInt(f, 10);
            e = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort;
            var h = (d ? d.dayNames :
                    null) || this._defaults.dayNames, l = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, q = (d ? d.monthNames : null) || this._defaults.monthNames, p = d = -1, n = -1, z = -1, u = !1, K, v = function (c) {
                (c = g + 1 < a.length && a.charAt(g + 1) === c) && g++;
                return c
            }, t = function (a) {
                var d = v(a), d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && d ? 4 : "o" === a ? 3 : 2;
                a = new RegExp("^\\d{" + ("y" === a ? d : 1) + "," + d + "}");
                a = c.substring(k).match(a);
                if (!a)throw"Missing number at position " + k;
                k += a[0].length;
                return parseInt(a[0], 10)
            }, y = function (a, d, g) {
                var f = -1;
                a = b.map(v(a) ?
                    g : d, function (a, c) {
                    return [[c, a]]
                }).sort(function (a, c) {
                    return -(a[1].length - c[1].length)
                });
                b.each(a, function (a, d) {
                    var b = d[1];
                    if (c.substr(k, b.length).toLowerCase() === b.toLowerCase())return f = d[0], k += b.length, !1
                });
                if (-1 !== f)return f + 1;
                throw"Unknown name at position " + k;
            }, x = function () {
                if (c.charAt(k) !== a.charAt(g))throw"Unexpected literal at position " + k;
                k++
            };
            for (g = 0; g < a.length; g++)if (u)"'" !== a.charAt(g) || v("'") ? x() : u = !1; else switch (a.charAt(g)) {
                case "d":
                    n = t("d");
                    break;
                case "D":
                    y("D", e, h);
                    break;
                case "o":
                    z =
                        t("o");
                    break;
                case "m":
                    p = t("m");
                    break;
                case "M":
                    p = y("M", l, q);
                    break;
                case "y":
                    d = t("y");
                    break;
                case "@":
                    K = new Date(t("@"));
                    d = K.getFullYear();
                    p = K.getMonth() + 1;
                    n = K.getDate();
                    break;
                case "!":
                    K = new Date((t("!") - this._ticksTo1970) / 1E4);
                    d = K.getFullYear();
                    p = K.getMonth() + 1;
                    n = K.getDate();
                    break;
                case "'":
                    v("'") ? x() : u = !0;
                    break;
                default:
                    x()
            }
            if (k < c.length && (e = c.substr(k), !/^\s+/.test(e)))throw"Extra/unparsed characters found in date: " + e;
            -1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() %
                100 + (d <= f ? 0 : -100));
            if (-1 < z) {
                p = 1;
                n = z;
                do {
                    f = this._getDaysInMonth(d, p - 1);
                    if (n <= f)break;
                    p++;
                    n -= f
                } while (1)
            }
            K = this._daylightSavingAdjust(new Date(d, p - 1, n));
            if (K.getFullYear() !== d || K.getMonth() + 1 !== p || K.getDate() !== n)throw"Invalid date";
            return K
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) +
        Math.floor(4.925)),
        formatDate: function (a, c, d) {
            if (!c)return "";
            var b, f = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, e = (d ? d.dayNames : null) || this._defaults.dayNames, k = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames : null) || this._defaults.monthNames;
            var h = function (c) {
                (c = b + 1 < a.length && a.charAt(b + 1) === c) && b++;
                return c
            }, l = function (a, c, d) {
                c = "" + c;
                if (h(a))for (; c.length < d;)c = "0" + c;
                return c
            }, q = function (a, c, d, b) {
                return h(a) ? b[c] : d[c]
            }, p = "", n = !1;
            if (c)for (b = 0; b < a.length; b++)if (n)"'" !==
            a.charAt(b) || h("'") ? p += a.charAt(b) : n = !1; else switch (a.charAt(b)) {
                case "d":
                    p += l("d", c.getDate(), 2);
                    break;
                case "D":
                    p += q("D", c.getDay(), f, e);
                    break;
                case "o":
                    p += l("o", Math.round(((new Date(c.getFullYear(), c.getMonth(), c.getDate())).getTime() - (new Date(c.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                    break;
                case "m":
                    p += l("m", c.getMonth() + 1, 2);
                    break;
                case "M":
                    p += q("M", c.getMonth(), k, d);
                    break;
                case "y":
                    p += h("y") ? c.getFullYear() : (10 > c.getYear() % 100 ? "0" : "") + c.getYear() % 100;
                    break;
                case "@":
                    p += c.getTime();
                    break;
                case "!":
                    p +=
                        1E4 * c.getTime() + this._ticksTo1970;
                    break;
                case "'":
                    h("'") ? p += "'" : n = !0;
                    break;
                default:
                    p += a.charAt(b)
            }
            return p
        },
        _possibleChars: function (a) {
            var c, d = "", b = !1, f = function (d) {
                (d = c + 1 < a.length && a.charAt(c + 1) === d) && c++;
                return d
            };
            for (c = 0; c < a.length; c++)if (b)"'" !== a.charAt(c) || f("'") ? d += a.charAt(c) : b = !1; else switch (a.charAt(c)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    d += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    f("'") ? d += "'" : b = !0;
                    break;
                default:
                    d += a.charAt(c)
            }
            return d
        },
        _get: function (a, c) {
            return void 0 !==
            a.settings[c] ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function (a, c) {
            if (a.input.val() !== a.lastVal) {
                var d = this._get(a, "dateFormat"), b = a.lastVal = a.input ? a.input.val() : null, f = this._getDefaultDate(a), e = f, k = this._getFormatConfig(a);
                try {
                    e = this.parseDate(d, b, k) || f
                } catch (h) {
                    b = c ? "" : b
                }
                a.selectedDay = e.getDate();
                a.drawMonth = a.selectedMonth = e.getMonth();
                a.drawYear = a.selectedYear = e.getFullYear();
                a.currentDay = b ? e.getDate() : 0;
                a.currentMonth = b ? e.getMonth() : 0;
                a.currentYear = b ? e.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (a, c, d) {
            var g = function (a) {
                var c = new Date;
                c.setDate(c.getDate() + a);
                return c
            }, f = function (c) {
                try {
                    return b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), c, b.datepicker._getFormatConfig(a))
                } catch (d) {
                }
                for (var g = (c.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date, f = g.getFullYear(), e = g.getMonth(), g = g.getDate(), k = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                         h = k.exec(c); h;) {
                    switch (h[2] || "d") {
                        case "d":
                        case "D":
                            g += parseInt(h[1], 10);
                            break;
                        case "w":
                        case "W":
                            g += 7 * parseInt(h[1], 10);
                            break;
                        case "m":
                        case "M":
                            e += parseInt(h[1], 10);
                            g = Math.min(g, b.datepicker._getDaysInMonth(f, e));
                            break;
                        case "y":
                        case "Y":
                            f += parseInt(h[1], 10), g = Math.min(g, b.datepicker._getDaysInMonth(f, e))
                    }
                    h = k.exec(c)
                }
                return new Date(f, e, g)
            };
            if (c = (c = null == c || "" === c ? d : "string" === typeof c ? f(c) : "number" === typeof c ? isNaN(c) ? d : g(c) : new Date(c.getTime())) && "Invalid Date" === c.toString() ? d : c)c.setHours(0),
                c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0);
            return this._daylightSavingAdjust(c)
        },
        _daylightSavingAdjust: function (a) {
            if (!a)return null;
            a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function (a, c, d) {
            var b = !c, f = a.selectedMonth, e = a.selectedYear;
            c = this._restrictMinMax(a, this._determineDate(a, c, new Date));
            a.selectedDay = a.currentDay = c.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = c.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = c.getFullYear();
            f === a.selectedMonth && e ===
            a.selectedYear || d || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(b ? "" : this._formatDate(a))
        },
        _getDate: function (a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _attachHandlers: function (a) {
            var c = this._get(a, "stepMonths"), d = "#" + a.id.replace(/\\\\/g, "\\");
            a.dpDiv.find("[data-handler]").map(function () {
                b(this).bind(this.getAttribute("data-event"), {
                    prev: function () {
                        b.datepicker._adjustDate(d, -c,
                            "M")
                    }, next: function () {
                        b.datepicker._adjustDate(d, +c, "M")
                    }, hide: function () {
                        b.datepicker._hideDatepicker()
                    }, today: function () {
                        b.datepicker._gotoToday(d)
                    }, selectDay: function () {
                        b.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return !1
                    }, selectMonth: function () {
                        b.datepicker._selectMonthYear(d, this, "M");
                        return !1
                    }, selectYear: function () {
                        b.datepicker._selectMonthYear(d, this, "Y");
                        return !1
                    }
                }[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (a) {
            var c, d,
                b, f, e, k, h, l, q, p, n, z, u, t, v, y, U, x, J, G, w, B, Q, la, ia, ga, ba, ca = new Date, ca = this._daylightSavingAdjust(new Date(ca.getFullYear(), ca.getMonth(), ca.getDate())), da = this._get(a, "isRTL");
            k = this._get(a, "showButtonPanel");
            b = this._get(a, "hideIfNoPrevNext");
            e = this._get(a, "navigationAsDateFormat");
            var M = this._getNumberOfMonths(a), F = this._get(a, "showCurrentAtPos");
            f = this._get(a, "stepMonths");
            var m = 1 !== M[0] || 1 !== M[1], ya = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999,
                9, 9)), ma = this._getMinMaxDate(a, "min"), ja = this._getMinMaxDate(a, "max"), F = a.drawMonth - F, S = a.drawYear;
            0 > F && (F += 12, S--);
            if (ja)for (c = this._daylightSavingAdjust(new Date(ja.getFullYear(), ja.getMonth() - M[0] * M[1] + 1, ja.getDate())), c = ma && c < ma ? ma : c; this._daylightSavingAdjust(new Date(S, F, 1)) > c;)F--, 0 > F && (F = 11, S--);
            a.drawMonth = F;
            a.drawYear = S;
            c = this._get(a, "prevText");
            c = e ? this.formatDate(c, this._daylightSavingAdjust(new Date(S, F - f, 1)), this._getFormatConfig(a)) : c;
            c = this._canAdjustMonth(a, -1, S, F) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
            c + "'><span class='ui-icon ui-icon-circle-triangle-" + (da ? "e" : "w") + "'>" + c + "</span></a>" : b ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (da ? "e" : "w") + "'>" + c + "</span></a>";
            d = this._get(a, "nextText");
            d = e ? this.formatDate(d, this._daylightSavingAdjust(new Date(S, F + f, 1)), this._getFormatConfig(a)) : d;
            b = this._canAdjustMonth(a, 1, S, F) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + d + "'><span class='ui-icon ui-icon-circle-triangle-" +
            (da ? "w" : "e") + "'>" + d + "</span></a>" : b ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + d + "'><span class='ui-icon ui-icon-circle-triangle-" + (da ? "w" : "e") + "'>" + d + "</span></a>";
            f = this._get(a, "currentText");
            d = this._get(a, "gotoCurrent") && a.currentDay ? ya : ca;
            f = e ? this.formatDate(f, d, this._getFormatConfig(a)) : f;
            e = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") +
            "</button>";
            k = k ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (da ? e : "") + (this._isInRange(a, d) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + f + "</button>" : "") + (da ? "" : e) + "</div>" : "";
            e = parseInt(this._get(a, "firstDay"), 10);
            e = isNaN(e) ? 0 : e;
            f = this._get(a, "showWeek");
            d = this._get(a, "dayNames");
            h = this._get(a, "dayNamesMin");
            l = this._get(a, "monthNames");
            q = this._get(a, "monthNamesShort");
            p = this._get(a,
                "beforeShowDay");
            n = this._get(a, "showOtherMonths");
            z = this._get(a, "selectOtherMonths");
            u = this._getDefaultDate(a);
            t = "";
            v;
            for (y = 0; y < M[0]; y++) {
                U = "";
                this.maxRows = 4;
                for (x = 0; x < M[1]; x++) {
                    J = this._daylightSavingAdjust(new Date(S, F, a.selectedDay));
                    v = " ui-corner-all";
                    G = "";
                    if (m) {
                        G += "<div class='ui-datepicker-group";
                        if (1 < M[1])switch (x) {
                            case 0:
                                G += " ui-datepicker-group-first";
                                v = " ui-corner-" + (da ? "right" : "left");
                                break;
                            case M[1] - 1:
                                G += " ui-datepicker-group-last";
                                v = " ui-corner-" + (da ? "left" : "right");
                                break;
                            default:
                                G += " ui-datepicker-group-middle",
                                    v = ""
                        }
                        G += "'>"
                    }
                    G += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + v + "'>" + (/all|left/.test(v) && 0 === y ? da ? b : c : "") + (/all|right/.test(v) && 0 === y ? da ? c : b : "") + this._generateMonthYearHeader(a, F, S, ma, ja, 0 < y || 0 < x, l, q) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    w = f ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (v = 0; 7 > v; v++)B = (v + e) % 7, w += "<th scope='col'" + (5 <= (v + e + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[B] + "'>" + h[B] + "</span></th>";
                    G += w + "</tr></thead><tbody>";
                    w = this._getDaysInMonth(S, F);
                    S === a.selectedYear && F === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, w));
                    v = (this._getFirstDayOfMonth(S, F) - e + 7) % 7;
                    w = Math.ceil((v + w) / 7);
                    this.maxRows = w = m ? this.maxRows > w ? this.maxRows : w : w;
                    B = this._daylightSavingAdjust(new Date(S, F, 1 - v));
                    for (Q = 0; Q < w; Q++) {
                        G += "<tr>";
                        la = f ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(B) + "</td>" : "";
                        for (v = 0; 7 > v; v++)ia = p ? p.apply(a.input ? a.input[0] : null, [B]) : [!0, ""], ba = (ga = B.getMonth() !== F) && !z || !ia[0] || ma && B < ma || ja && B > ja, la += "<td class='" + (5 <= (v + e + 6) % 7 ? " ui-datepicker-week-end" : "") + (ga ? " ui-datepicker-other-month" : "") + (B.getTime() === J.getTime() && F === a.selectedMonth && a._keyEvent || u.getTime() === B.getTime() && u.getTime() === J.getTime() ? " " + this._dayOverClass : "") + (ba ? " " + this._unselectableClass + " ui-state-disabled" : "") + (ga && !n ? "" : " " + ia[1] + (B.getTime() === ya.getTime() ? " " + this._currentClass : "") + (B.getTime() === ca.getTime() ? " ui-datepicker-today" : "")) + "'" + (ga && !n || !ia[2] ? "" : " title='" + ia[2].replace(/'/g,
                                "&#39;") + "'") + (ba ? "" : " data-handler='selectDay' data-event='click' data-month='" + B.getMonth() + "' data-year='" + B.getFullYear() + "'") + ">" + (ga && !n ? "&#xa0;" : ba ? "<span class='ui-state-default'>" + B.getDate() + "</span>" : "<a class='ui-state-default" + (B.getTime() === ca.getTime() ? " ui-state-highlight" : "") + (B.getTime() === ya.getTime() ? " ui-state-active" : "") + (ga ? " ui-priority-secondary" : "") + "' href='#'>" + B.getDate() + "</a>") + "</td>", B.setDate(B.getDate() + 1), B = this._daylightSavingAdjust(B);
                        G += la + "</tr>"
                    }
                    F++;
                    11 < F &&
                    (F = 0, S++);
                    G += "</tbody></table>" + (m ? "</div>" + (0 < M[0] && x === M[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    U += G
                }
                t += U
            }
            a._keyEvent = !1;
            return t + k
        },
        _generateMonthYearHeader: function (a, c, d, b, f, e, k, h) {
            var l, q, p, n = this._get(a, "changeMonth"), z = this._get(a, "changeYear"), u = this._get(a, "showMonthAfterYear"), v = "<div class='ui-datepicker-title'>", t = "";
            if (e || !n)t += "<span class='ui-datepicker-month'>" + k[c] + "</span>"; else {
                k = b && b.getFullYear() === d;
                l = f && f.getFullYear() === d;
                t += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (q = 0; 12 > q; q++)(!k || q >= b.getMonth()) && (!l || q <= f.getMonth()) && (t += "<option value='" + q + "'" + (q === c ? " selected='selected'" : "") + ">" + h[q] + "</option>");
                t += "</select>"
            }
            u || (v += t + (!e && n && z ? "" : "&#xa0;"));
            if (!a.yearshtml)if (a.yearshtml = "", e || !z)v += "<span class='ui-datepicker-year'>" + d + "</span>"; else {
                h = this._get(a, "yearRange").split(":");
                p = (new Date).getFullYear();
                k = function (a) {
                    a = a.match(/c[+\-].*/) ? d + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? p + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(a) ? p : a
                };
                c = k(h[0]);
                h = Math.max(c, k(h[1] || ""));
                c = b ? Math.max(c, b.getFullYear()) : c;
                h = f ? Math.min(h, f.getFullYear()) : h;
                for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; c <= h; c++)a.yearshtml += "<option value='" + c + "'" + (c === d ? " selected='selected'" : "") + ">" + c + "</option>";
                a.yearshtml += "</select>";
                v += a.yearshtml;
                a.yearshtml = null
            }
            v += this._get(a, "yearSuffix");
            u && (v += (!e && n && z ? "" : "&#xa0;") + t);
            return v + "</div>"
        },
        _adjustInstDate: function (a, c, d) {
            var b = a.drawYear + ("Y" === d ? c : 0), f = a.drawMonth +
                ("M" === d ? c : 0);
            c = Math.min(a.selectedDay, this._getDaysInMonth(b, f)) + ("D" === d ? c : 0);
            b = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(b, f, c)));
            a.selectedDay = b.getDate();
            a.drawMonth = a.selectedMonth = b.getMonth();
            a.drawYear = a.selectedYear = b.getFullYear();
            "M" !== d && "Y" !== d || this._notifyChange(a)
        },
        _restrictMinMax: function (a, c) {
            var d = this._getMinMaxDate(a, "min"), b = this._getMinMaxDate(a, "max"), d = d && c < d ? d : c;
            return b && d > b ? b : d
        },
        _notifyChange: function (a) {
            var c = this._get(a, "onChangeMonthYear");
            c && c.apply(a.input ?
                a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
        },
        _getMinMaxDate: function (a, c) {
            return this._determineDate(a, this._get(a, c + "Date"), null)
        },
        _getDaysInMonth: function (a, c) {
            return 32 - this._daylightSavingAdjust(new Date(a, c, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, c) {
            return (new Date(a, c, 1)).getDay()
        },
        _canAdjustMonth: function (a, c, d, b) {
            var f = this._getNumberOfMonths(a);
            d = this._daylightSavingAdjust(new Date(d,
                b + (0 > c ? c : f[0] * f[1]), 1));
            0 > c && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth()));
            return this._isInRange(a, d)
        },
        _isInRange: function (a, c) {
            var d, b, f = this._getMinMaxDate(a, "min"), e = this._getMinMaxDate(a, "max"), k = null, h = null;
            if (d = this._get(a, "yearRange"))d = d.split(":"), b = (new Date).getFullYear(), k = parseInt(d[0], 10), h = parseInt(d[1], 10), d[0].match(/[+\-].*/) && (k += b), d[1].match(/[+\-].*/) && (h += b);
            return (!f || c.getTime() >= f.getTime()) && (!e || c.getTime() <= e.getTime()) && (!k || c.getFullYear() >= k) && (!h ||
                c.getFullYear() <= h)
        },
        _getFormatConfig: function (a) {
            var c = this._get(a, "shortYearCutoff"), c = "string" !== typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10);
            return {
                shortYearCutoff: c,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a, c, d, b) {
            c || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            c = c ? "object" === typeof c ? c : this._daylightSavingAdjust(new Date(b,
                d, c)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), c, this._getFormatConfig(a))
        }
    });
    b.fn.datepicker = function (a) {
        if (!this.length)return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick), b.datepicker.initialized = !0);
        0 === b("#" + b.datepicker._mainDivId).length && b("body").append(b.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" === typeof a && ("isDisabled" ===
        a || "getDate" === a || "widget" === a) || "option" === a && 2 === arguments.length && "string" === typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function () {
            "string" === typeof a ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
        })
    };
    b.datepicker = new p;
    b.datepicker.initialized = !1;
    b.datepicker.uuid = (new Date).getTime();
    b.datepicker.version = "1.11.4";
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.11.4", widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        }, _create: function () {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        }, _setOption: function (a, c) {
            this._super(a, c);
            "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        }, _destroy: function () {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy())
        }, _mouseCapture: function (a) {
            var c =
                this.options;
            this._blurActiveElement(a);
            if (this.helper || c.disabled || 0 < b(a.target).closest(".ui-resizable-handle").length)return !1;
            this.handle = this._getHandle(a);
            if (!this.handle)return !1;
            this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix);
            return !0
        }, _blockFrames: function (a) {
            this.iframeBlocks = this.document.find(a).map(function () {
                var a = b(this);
                return b("<div>").css("position", "absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]
            })
        }, _unblockFrames: function () {
            this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks)
        }, _blurActiveElement: function (a) {
            var c = this.document[0];
            if (this.handleElement.is(a.target))try {
                c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && b(c.activeElement).blur()
            } catch (d) {
            }
        }, _mouseStart: function (a) {
            var c = this.options;
            this.helper = this._createHelper(a);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            b.ui.ddmanager && (b.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(!0);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
                    return "fixed" === b(this).css("position")
                }).length;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(a);
            this.originalPosition = this.position = this._generatePosition(a, !1);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
            this._setContainment();
            if (!1 === this._trigger("start", a))return this._clear(),
                !1;
            this._cacheHelperProportions();
            b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
            this._normalizeRightBottom();
            this._mouseDrag(a, !0);
            b.ui.ddmanager && b.ui.ddmanager.dragStart(this, a);
            return !0
        }, _refreshOffsets: function (a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {left: a.pageX - this.offset.left, top: a.pageY - this.offset.top}
        }, _mouseDrag: function (a,
                                 c) {
            this.hasFixedAncestor && (this.offset.parent = this._getParentOffset());
            this.position = this._generatePosition(a, !0);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!c) {
                var d = this._uiHash();
                if (!1 === this._trigger("drag", a, d))return this._mouseUp({}), !1;
                this.position = d.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
            return !1
        }, _mouseStop: function (a) {
            var c = this, d = !1;
            b.ui.ddmanager && !this.options.dropBehaviour &&
            (d = b.ui.ddmanager.drop(this, a));
            this.dropped && (d = this.dropped, this.dropped = !1);
            "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || b.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                !1 !== c._trigger("stop", a) && c._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear();
            return !1
        }, _mouseUp: function (a) {
            this._unblockFrames();
            b.ui.ddmanager &&
            b.ui.ddmanager.dragStop(this, a);
            this.handleElement.is(a.target) && this.element.focus();
            return b.ui.mouse.prototype._mouseUp.call(this, a)
        }, cancel: function () {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        }, _getHandle: function (a) {
            return this.options.handle ? !!b(a.target).closest(this.element.find(this.options.handle)).length : !0
        }, _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        }, _createHelper: function (a) {
            var c = this.options, d = b.isFunction(c.helper);
            a = d ? b(c.helper.apply(this.element[0], [a])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo);
            d && a[0] === this.element[0] && this._setPositionRelative();
            a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position",
                "absolute");
            return a
        }, _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        }, _adjustOffsetFromHelper: function (a) {
            "string" === typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {left: +a[0], top: +a[1] || 0});
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top =
                this.helperProportions.height - a.bottom + this.margins.top)
        }, _isRootNode: function (a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        }, _getParentOffset: function () {
            var a = this.offsetParent.offset(), c = this.document[0];
            "absolute" === this.cssPosition && this.scrollParent[0] !== c && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
            this._isRootNode(this.offsetParent[0]) && (a = {top: 0, left: 0});
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"),
                    10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        }, _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition)return {top: 0, left: 0};
            var a = this.element.position(), c = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (c ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (c ? 0 : this.scrollParent.scrollLeft())
            }
        }, _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"),
                    10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        }, _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        }, _setContainment: function () {
            var a, c, d;
            a = this.options;
            c = this.document[0];
            this.relativeContainer = null;
            if (a.containment)if ("window" === a.containment)this.containment = [b(window).scrollLeft() - this.offset.relative.left -
            this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width - this.margins.left, b(window).scrollTop() + (b(window).height() || c.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; else if ("document" === a.containment)this.containment = [0, 0, b(c).width() - this.helperProportions.width - this.margins.left, (b(c).height() || c.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            else if (a.containment.constructor === Array)this.containment = a.containment; else {
                if ("parent" === a.containment && (a.containment = this.helper[0].parentNode), c = b(a.containment), d = c[0])a = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (a ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"),
                    10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c
            } else this.containment = null
        }, _convertPositionTo: function (a, c) {
            c || (c = this.position);
            var d = "absolute" === a ? 1 : -1, b = this._isRootNode(this.scrollParent[0]);
            return {
                top: c.top + this.offset.relative.top *
                d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.offset.scroll.top : b ? 0 : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.offset.scroll.left : b ? 0 : this.offset.scroll.left) * d
            }
        }, _generatePosition: function (a, c) {
            var d, b, f, e = this.options, k = this._isRootNode(this.scrollParent[0]);
            f = a.pageX;
            b = a.pageY;
            k && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            });
            c && (this.containment &&
            (this.relativeContainer ? (d = this.relativeContainer.offset(), d = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : d = this.containment, a.pageX - this.offset.click.left < d[0] && (f = d[0] + this.offset.click.left), a.pageY - this.offset.click.top < d[1] && (b = d[1] + this.offset.click.top), a.pageX - this.offset.click.left > d[2] && (f = d[2] + this.offset.click.left), a.pageY - this.offset.click.top > d[3] && (b = d[3] + this.offset.click.top)), e.grid && (b = e.grid[1] ? this.originalPageY +
            Math.round((b - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY, b = d ? b - this.offset.click.top >= d[1] || b - this.offset.click.top > d[3] ? b : b - this.offset.click.top >= d[1] ? b - e.grid[1] : b + e.grid[1] : b, f = e.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX, f = d ? f - this.offset.click.left >= d[0] || f - this.offset.click.left > d[2] ? f : f - this.offset.click.left >= d[0] ? f - e.grid[0] : f + e.grid[0] : f), "y" === e.axis && (f = this.originalPageX), "x" === e.axis && (b = this.originalPageY));
            return {
                top: b - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : k ? 0 : this.offset.scroll.top),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : k ? 0 : this.offset.scroll.left)
            }
        }, _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        }, _normalizeRightBottom: function () {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        }, _trigger: function (a, c, d) {
            d = d || this._uiHash();
            b.ui.plugin.call(this, a, [c, d, this], !0);
            /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"),
                d.offset = this.positionAbs);
            return b.Widget.prototype._trigger.call(this, a, c, d)
        }, plugins: {}, _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function (a, c, d) {
            var g = b.extend({}, c, {item: d.element});
            d.sortables = [];
            b(d.options.connectToSortable).each(function () {
                var c = b(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate",
                    a, g))
            })
        }, stop: function (a, c, d) {
            var g = b.extend({}, c, {item: d.element});
            d.cancelHelperRemoval = !1;
            b.each(d.sortables, function () {
                this.isOver ? (this.isOver = 0, d.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                }, this._mouseStop(a), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", a, g))
            })
        }, drag: function (a, c, d) {
            b.each(d.sortables, function () {
                var g =
                    !1, f = this;
                f.positionAbs = d.positionAbs;
                f.helperProportions = d.helperProportions;
                f.offset.click = d.offset.click;
                f._intersectsWith(f.containerCache) && (g = !0, b.each(d.sortables, function () {
                    this.positionAbs = d.positionAbs;
                    this.helperProportions = d.helperProportions;
                    this.offset.click = d.offset.click;
                    this !== f && this._intersectsWith(this.containerCache) && b.contains(f.element[0], this.element[0]) && (g = !1);
                    return g
                }));
                g ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item",
                    !0), f.options._helper = f.options.helper, f.options.helper = function () {
                    return c.helper[0]
                }, a.target = f.currentItem[0], f._mouseCapture(a, !0), f._mouseStart(a, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", a), d.dropped = f.element, b.each(d.sortables, function () {
                    this.refreshPositions()
                }), d.currentItem = d.element, f.fromOutside =
                    d), f.currentItem && (f._mouseDrag(a), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", a, f._uiHash(f)), f._mouseStop(a, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(a), c.position = d._generatePosition(a, !0), d._trigger("fromSortable", a), d.dropped = !1, b.each(d.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function (a, c, d) {
            a = b("body");
            d = d.options;
            a.css("cursor") && (d._cursor = a.css("cursor"));
            a.css("cursor", d.cursor)
        }, stop: function (a, c, d) {
            a = d.options;
            a._cursor && b("body").css("cursor", a._cursor)
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function (a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("opacity") && (d._opacity = a.css("opacity"));
            a.css("opacity", d.opacity)
        }, stop: function (a, c, d) {
            a = d.options;
            a._opacity && b(c.helper).css("opacity", a._opacity)
        }
    });
    b.ui.plugin.add("draggable",
        "scroll", {
            start: function (a, c, d) {
                d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
                d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
            }, drag: function (a, c, d) {
                c = d.options;
                var g = !1, f = d.scrollParentNotHidden[0], e = d.document[0];
                f !== e && "HTML" !== f.tagName ? (c.axis && "x" === c.axis || (d.overflowOffset.top + f.offsetHeight - a.pageY < c.scrollSensitivity ? f.scrollTop = g = f.scrollTop + c.scrollSpeed : a.pageY - d.overflowOffset.top <
                c.scrollSensitivity && (f.scrollTop = g = f.scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (d.overflowOffset.left + f.offsetWidth - a.pageX < c.scrollSensitivity ? f.scrollLeft = g = f.scrollLeft + c.scrollSpeed : a.pageX - d.overflowOffset.left < c.scrollSensitivity && (f.scrollLeft = g = f.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (a.pageY - b(e).scrollTop() < c.scrollSensitivity ? g = b(e).scrollTop(b(e).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(e).scrollTop()) < c.scrollSensitivity && (g = b(e).scrollTop(b(e).scrollTop() +
                    c.scrollSpeed))), c.axis && "y" === c.axis || (a.pageX - b(e).scrollLeft() < c.scrollSensitivity ? g = b(e).scrollLeft(b(e).scrollLeft() - c.scrollSpeed) : b(window).width() - (a.pageX - b(e).scrollLeft()) < c.scrollSensitivity && (g = b(e).scrollLeft(b(e).scrollLeft() + c.scrollSpeed))));
                !1 !== g && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(d, a)
            }
        });
    b.ui.plugin.add("draggable", "snap", {
        start: function (a, c, d) {
            a = d.options;
            d.snapElements = [];
            b(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)" : a.snap).each(function () {
                var a =
                    b(this), c = a.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        }, drag: function (a, c, d) {
            var g, f, e, k, h, l, q, p, n, z, u = d.options, v = u.snapTolerance, t = c.offset.left, y = t + d.helperProportions.width, J = c.offset.top, x = J + d.helperProportions.height;
            for (n = d.snapElements.length - 1; 0 <= n; n--)h = d.snapElements[n].left - d.margins.left, l = h + d.snapElements[n].width, q = d.snapElements[n].top - d.margins.top, p = q + d.snapElements[n].height, y < h - v || t > l + v || x <
            q - v || J > p + v || !b.contains(d.snapElements[n].item.ownerDocument, d.snapElements[n].item) ? (d.snapElements[n].snapping && d.options.snap.release && d.options.snap.release.call(d.element, a, b.extend(d._uiHash(), {snapItem: d.snapElements[n].item})), d.snapElements[n].snapping = !1) : ("inner" !== u.snapMode && (g = Math.abs(q - x) <= v, f = Math.abs(p - J) <= v, e = Math.abs(h - y) <= v, k = Math.abs(l - t) <= v, g && (c.position.top = d._convertPositionTo("relative", {
                top: q - d.helperProportions.height,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative",
                {top: p, left: 0}).top), e && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: h - d.helperProportions.width
            }).left), k && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), z = g || f || e || k, "outer" !== u.snapMode && (g = Math.abs(q - J) <= v, f = Math.abs(p - x) <= v, e = Math.abs(h - t) <= v, k = Math.abs(l - y) <= v, g && (c.position.top = d._convertPositionTo("relative", {
                top: q,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: p - d.helperProportions.height,
                left: 0
            }).top), e && (c.position.left = d._convertPositionTo("relative",
                {top: 0, left: h}).left), k && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l - d.helperProportions.width
            }).left)), !d.snapElements[n].snapping && (g || f || e || k || z) && d.options.snap.snap && d.options.snap.snap.call(d.element, a, b.extend(d._uiHash(), {snapItem: d.snapElements[n].item})), d.snapElements[n].snapping = g || f || e || k || z)
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function (a, c, d) {
            var g;
            a = b.makeArray(b(d.options.stack)).sort(function (a, c) {
                return (parseInt(b(a).css("zIndex"), 10) || 0) - (parseInt(b(c).css("zIndex"),
                        10) || 0)
            });
            a.length && (g = parseInt(b(a[0]).css("zIndex"), 10) || 0, b(a).each(function (a) {
                b(this).css("zIndex", g + a)
            }), this.css("zIndex", g + a.length))
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function (a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("zIndex") && (d._zIndex = a.css("zIndex"));
            a.css("zIndex", d.zIndex)
        }, stop: function (a, c, d) {
            a = d.options;
            a._zIndex && b(c.helper).css("zIndex", a._zIndex)
        }
    });
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.11.4", widgetEventPrefix: "resize", options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        }, _num: function (a) {
            return parseInt(a, 10) || 0
        }, _isNumber: function (a) {
            return !isNaN(parseInt(a, 10))
        }, _hasScroll: function (a, c) {
            if ("hidden" === b(a).css("overflow"))return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", g = !1;
            if (0 < a[d])return !0;
            a[d] = 1;
            g = 0 < a[d];
            a[d] = 0;
            return g
        }, _create: function () {
            var a, c, d,
                g, f, e = this, k = this.options;
            this.element.addClass("ui-resizable");
            b.extend(this, {
                _aspectRatio: !!k.aspectRatio,
                aspectRatio: k.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null
            });
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"), width: this.element.outerWidth(),
                height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}),
                this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize());
            this.handles = k.handles || (b(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se");
            this._handles = b();
            if (this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), a = this.handles.split(","), this.handles = {}, c = 0; c < a.length; c++)d = b.trim(a[c]), f = "ui-resizable-" + d, g = b("<div class='ui-resizable-handle " + f + "'></div>"), g.css({zIndex: k.zIndex}), "se" === d && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(g);
            this._renderAxis = function (a) {
                var c,
                    d, g;
                a = a || this.element;
                for (c in this.handles) {
                    if (this.handles[c].constructor === String)this.handles[c] = this.element.children(this.handles[c]).first().show(); else if (this.handles[c].jquery || this.handles[c].nodeType)this.handles[c] = b(this.handles[c]), this._on(this.handles[c], {mousedown: e._mouseDown});
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = b(this.handles[c], this.element), g = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), d = ["padding",
                        /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), a.css(d, g), this._proportionallyResize());
                    this._handles = this._handles.add(this.handles[c])
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.mouseover(function () {
                e.resizing || (this.className && (g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), e.axis = g && g[1] ? g[1] : "se")
            });
            k.autoHide && (this._handles.hide(),
                b(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    k.disabled || (b(this).removeClass("ui-resizable-autohide"), e._handles.show())
                }).mouseleave(function () {
                    k.disabled || e.resizing || (b(this).addClass("ui-resizable-autohide"), e._handles.hide())
                }));
            this._mouseInit()
        }, _destroy: function () {
            this._mouseDestroy();
            var a, c = function (a) {
                b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            this.elementIsWrapper && (c(this.element), a = this.element, this.originalElement.css({
                position: a.css("position"),
                width: a.outerWidth(),
                height: a.outerHeight(),
                top: a.css("top"),
                left: a.css("left")
            }).insertAfter(a), a.remove());
            this.originalElement.css("resize", this.originalResizeStyle);
            c(this.originalElement);
            return this
        }, _mouseCapture: function (a) {
            var c, d, g = !1;
            for (c in this.handles)if (d = b(this.handles[c])[0], d === a.target || b.contains(d, a.target))g = !0;
            return !this.options.disabled && g
        }, _mouseStart: function (a) {
            var c,
                d, g = this.options, f = this.element;
            this.resizing = !0;
            this._renderProxy();
            c = this._num(this.helper.css("left"));
            d = this._num(this.helper.css("top"));
            g.containment && (c += b(g.containment).scrollLeft() || 0, d += b(g.containment).scrollTop() || 0);
            this.offset = this.helper.offset();
            this.position = {left: c, top: d};
            this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {
                width: f.width(),
                height: f.height()
            };
            this.originalSize = this._helper ? {width: f.outerWidth(), height: f.outerHeight()} : {
                width: f.width(),
                height: f.height()
            };
            this.sizeDiff = {width: f.outerWidth() - f.width(), height: f.outerHeight() - f.height()};
            this.originalPosition = {left: c, top: d};
            this.originalMousePosition = {left: a.pageX, top: a.pageY};
            this.aspectRatio = "number" === typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            c = b(".ui-resizable-" + this.axis).css("cursor");
            b("body").css("cursor", "auto" === c ? this.axis + "-resize" : c);
            f.addClass("ui-resizable-resizing");
            this._propagate("start", a);
            return !0
        }, _mouseDrag: function (a) {
            var c,
                d = this.originalMousePosition;
            c = a.pageX - d.left || 0;
            var d = a.pageY - d.top || 0, g = this._change[this.axis];
            this._updatePrevProperties();
            if (!g)return !1;
            c = g.apply(this, [a, c, d]);
            this._updateVirtualBoundaries(a.shiftKey);
            if (this._aspectRatio || a.shiftKey)c = this._updateRatio(c, a);
            c = this._respectSize(c, a);
            this._updateCache(c);
            this._propagate("resize", a);
            c = this._applyChanges();
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            b.isEmptyObject(c) || (this._updatePrevProperties(), this._trigger("resize",
                a, this.ui()), this._applyChanges());
            return !1
        }, _mouseStop: function (a) {
            this.resizing = !1;
            var c, d, g, f = this.options;
            this._helper && (c = this._proportionallyResizeElements, c = (d = c.length && /textarea/i.test(c[0].nodeName)) && this._hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, d = d ? 0 : this.sizeDiff.width, d = {
                width: this.helper.width() - d,
                height: this.helper.height() - c
            }, c = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, g = parseInt(this.element.css("top"), 10) + (this.position.top -
                this.originalPosition.top) || null, f.animate || this.element.css(b.extend(d, {
                top: g,
                left: c
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !f.animate && this._proportionallyResize());
            b("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", a);
            this._helper && this.helper.remove();
            return !1
        }, _updatePrevProperties: function () {
            this.prevPosition = {top: this.position.top, left: this.position.left};
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        }, _applyChanges: function () {
            var a = {};
            this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px");
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px");
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px");
            this.size.height !== this.prevSize.height && (a.height = this.size.height + "px");
            this.helper.css(a);
            return a
        }, _updateVirtualBoundaries: function (a) {
            var c, d, b, f;
            f = this.options;
            f = {
                minWidth: this._isNumber(f.minWidth) ? f.minWidth : 0,
                maxWidth: this._isNumber(f.maxWidth) ? f.maxWidth : Infinity,
                minHeight: this._isNumber(f.minHeight) ? f.minHeight : 0,
                maxHeight: this._isNumber(f.maxHeight) ? f.maxHeight : Infinity
            };
            if (this._aspectRatio || a)a = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, b = f.maxWidth / this.aspectRatio, a > f.minWidth && (f.minWidth = a), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), b < f.maxHeight && (f.maxHeight = b);
            this._vBoundaries = f
        }, _updateCache: function (a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) && (this.size.width = a.width)
        }, _updateRatio: function (a) {
            var c = this.position, d = this.size, b = this.axis;
            this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio);
            "sw" === b && (a.left = c.left + (d.width - a.width), a.top = null);
            "nw" === b && (a.top = c.top + (d.height - a.height), a.left =
                c.left + (d.width - a.width));
            return a
        }, _respectSize: function (a) {
            var c = this._vBoundaries, d = this.axis, b = this._isNumber(a.width) && c.maxWidth && c.maxWidth < a.width, f = this._isNumber(a.height) && c.maxHeight && c.maxHeight < a.height, e = this._isNumber(a.width) && c.minWidth && c.minWidth > a.width, k = this._isNumber(a.height) && c.minHeight && c.minHeight > a.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, q = /sw|nw|w/.test(d), d = /nw|ne|n/.test(d);
            e && (a.width = c.minWidth);
            k && (a.height =
                c.minHeight);
            b && (a.width = c.maxWidth);
            f && (a.height = c.maxHeight);
            e && q && (a.left = h - c.minWidth);
            b && q && (a.left = h - c.maxWidth);
            k && d && (a.top = l - c.minHeight);
            f && d && (a.top = l - c.maxHeight);
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null;
            return a
        }, _getPaddingPlusBorderDimensions: function (a) {
            var c = 0, d = [], b = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"),
                a.css("paddingLeft")]; 4 > c; c++)d[c] = parseInt(b[c], 10) || 0, d[c] += parseInt(a[c], 10) || 0;
            return {height: d[0] + d[2], width: d[1] + d[3]}
        }, _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)for (var a, c = 0, d = this.helper || this.element; c < this._proportionallyResizeElements.length; c++)a = this._proportionallyResizeElements[c], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                height: d.height() - this.outerDimensions.height || 0, width: d.width() - this.outerDimensions.width ||
                0
            })
        }, _renderProxy: function () {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || b("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        }, _change: {
            e: function (a, c) {
                return {
                    width: this.originalSize.width +
                    c
                }
            }, w: function (a, c) {
                return {left: this.originalPosition.left + c, width: this.originalSize.width - c}
            }, n: function (a, c, d) {
                return {top: this.originalPosition.top + d, height: this.originalSize.height - d}
            }, s: function (a, c, d) {
                return {height: this.originalSize.height + d}
            }, se: function (a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            }, sw: function (a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            }, ne: function (a, c, d) {
                return b.extend(this._change.n.apply(this,
                    arguments), this._change.e.apply(this, [a, c, d]))
            }, nw: function (a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            }
        }, _propagate: function (a, c) {
            b.ui.plugin.call(this, a, [c, this.ui()]);
            "resize" !== a && this._trigger(a, c, this.ui())
        }, plugins: {}, ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    b.ui.plugin.add("resizable",
        "animate", {
            stop: function (a) {
                var c = b(this).resizable("instance"), d = c.options, g = c._proportionallyResizeElements, f = g.length && /textarea/i.test(g[0].nodeName), e = f && c._hasScroll(g[0], "left") ? 0 : c.sizeDiff.height, f = {
                    width: c.size.width - (f ? 0 : c.sizeDiff.width),
                    height: c.size.height - e
                }, e = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(b.extend(f, k && e ? {top: k, left: e} : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing, step: function () {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        g && g.length && b(g[0]).css({width: d.width, height: d.height});
                        c._updateCache(d);
                        c._propagate("resize", a)
                    }
                })
            }
        });
    b.ui.plugin.add("resizable", "containment", {
        start: function () {
            var a, c, d, g, f, e = b(this).resizable("instance"), k = e.element;
            d = e.options.containment;
            if (k = d instanceof b ? d.get(0) : /parent/.test(d) ?
                    k.parent().get(0) : d)e.containerElement = b(k), /document/.test(d) || d === document ? (e.containerOffset = {
                left: 0,
                top: 0
            }, e.containerPosition = {left: 0, top: 0}, e.parentData = {
                element: b(document),
                left: 0,
                top: 0,
                width: b(document).width(),
                height: b(document).height() || document.body.parentNode.scrollHeight
            }) : (a = b(k), c = [], b(["Top", "Right", "Left", "Bottom"]).each(function (d, b) {
                c[d] = e._num(a.css("padding" + b))
            }), e.containerOffset = a.offset(), e.containerPosition = a.position(), e.containerSize = {
                height: a.innerHeight() - c[3], width: a.innerWidth() -
                c[1]
            }, d = e.containerOffset, g = e.containerSize.height, f = e.containerSize.width, f = e._hasScroll(k, "left") ? k.scrollWidth : f, g = e._hasScroll(k) ? k.scrollHeight : g, e.parentData = {
                element: k,
                left: d.left,
                top: d.top,
                width: f,
                height: g
            })
        }, resize: function (a) {
            var c, d, g, f = b(this).resizable("instance");
            c = f.options;
            d = f.containerOffset;
            g = f.position;
            a = f._aspectRatio || a.shiftKey;
            var e = {top: 0, left: 0}, k = f.containerElement, h = !0;
            k[0] !== document && /static/.test(k.css("position")) && (e = d);
            g.left < (f._helper ? d.left : 0) && (f.size.width += f._helper ?
            f.position.left - d.left : f.position.left - e.left, a && (f.size.height = f.size.width / f.aspectRatio, h = !1), f.position.left = c.helper ? d.left : 0);
            g.top < (f._helper ? d.top : 0) && (f.size.height += f._helper ? f.position.top - d.top : f.position.top, a && (f.size.width = f.size.height * f.aspectRatio, h = !1), f.position.top = f._helper ? d.top : 0);
            c = f.containerElement.get(0) === f.element.parent().get(0);
            g = /relative|absolute/.test(f.containerElement.css("position"));
            c && g ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top +
                f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top);
            c = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - e.left : f.offset.left - d.left));
            d = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - e.top : f.offset.top - d.top));
            c + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - c, a && (f.size.height = f.size.width / f.aspectRatio, h = !1));
            d + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - d, a && (f.size.width = f.size.height * f.aspectRatio, h = !1));
            h || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height)
        }, stop: function () {
            var a = b(this).resizable("instance"), c = a.options, d = a.containerOffset, g = a.containerPosition, f = a.containerElement, e = b(a.helper), k = e.offset(), h = e.outerWidth() - a.sizeDiff.width, e = e.outerHeight() - a.sizeDiff.height;
            a._helper && !c.animate && /relative/.test(f.css("position")) && b(this).css({
                left: k.left - g.left - d.left,
                width: h,
                height: e
            });
            a._helper && !c.animate &&
            /static/.test(f.css("position")) && b(this).css({left: k.left - g.left - d.left, width: h, height: e})
        }
    });
    b.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var a = b(this).resizable("instance").options;
            b(a.alsoResize).each(function () {
                var a = b(this);
                a.data("ui-resizable-alsoresize", {
                    width: parseInt(a.width(), 10),
                    height: parseInt(a.height(), 10),
                    left: parseInt(a.css("left"), 10),
                    top: parseInt(a.css("top"), 10)
                })
            })
        }, resize: function (a, c) {
            var d = b(this).resizable("instance"), g = d.originalSize, f = d.originalPosition, e =
            {
                height: d.size.height - g.height || 0,
                width: d.size.width - g.width || 0,
                top: d.position.top - f.top || 0,
                left: d.position.left - f.left || 0
            };
            b(d.options.alsoResize).each(function () {
                var a = b(this), d = b(this).data("ui-resizable-alsoresize"), g = {}, f = a.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                b.each(f, function (a, c) {
                    var b = (d[c] || 0) + (e[c] || 0);
                    b && 0 <= b && (g[c] = b || null)
                });
                a.css(g)
            })
        }, stop: function () {
            b(this).removeData("resizable-alsoresize")
        }
    });
    b.ui.plugin.add("resizable", "ghost",
        {
            start: function () {
                var a = b(this).resizable("instance"), c = a.options, d = a.size;
                a.ghost = a.originalElement.clone();
                a.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" === typeof c.ghost ? c.ghost : "");
                a.ghost.appendTo(a.helper)
            }, resize: function () {
            var a = b(this).resizable("instance");
            a.ghost && a.ghost.css({position: "relative", height: a.size.height, width: a.size.width})
        }, stop: function () {
            var a = b(this).resizable("instance");
            a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
        }
        });
    b.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var a, c = b(this).resizable("instance"), d = c.options, g = c.size, f = c.originalSize, e = c.originalPosition, k = c.axis, h = "number" === typeof d.grid ? [d.grid, d.grid] : d.grid, l = h[0] || 1, q = h[1] || 1, p = Math.round((g.width - f.width) / l) * l, g = Math.round((g.height - f.height) / q) * q, n = f.width + p, z = f.height + g, u = d.maxWidth && d.maxWidth < n, v = d.maxHeight && d.maxHeight < z, t = d.minWidth && d.minWidth > n, y = d.minHeight && d.minHeight >
                z;
            d.grid = h;
            t && (n += l);
            y && (z += q);
            u && (n -= l);
            v && (z -= q);
            if (/^(se|s|e)$/.test(k))c.size.width = n, c.size.height = z; else if (/^(ne)$/.test(k))c.size.width = n, c.size.height = z, c.position.top = e.top - g; else if (/^(sw)$/.test(k))c.size.width = n, c.size.height = z, c.position.left = e.left - p; else {
                if (0 >= z - q || 0 >= n - l)a = c._getPaddingPlusBorderDimensions(this);
                0 < z - q ? (c.size.height = z, c.position.top = e.top - g) : (z = q - a.height, c.size.height = z, c.position.top = e.top + f.height - z);
                0 < n - l ? (c.size.width = n, c.position.left = e.left - p) : (n = l - a.width,
                    c.size.width = n, c.position.left = e.left + f.width - n)
            }
        }
    });
    b.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (a) {
                    var c = b(this).css(a).offset().top;
                    0 > c && b(this).css("top", a.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && b.fn.draggable && this._makeDraggable();
            this.options.resizable && b.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? b(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function () {
            var a, c = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title",
                this.originalTitle);
            a = c.parent.children().eq(c.index);
            a.length && a[0] !== this.element[0] ? a.before(this.element) : c.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: b.noop,
        enable: b.noop,
        close: function (a) {
            var c, d = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", a)) {
                this._isOpen = !1;
                this._focusedElement = null;
                this._destroyOverlay();
                this._untrackInstance();
                if (!this.opener.filter(":focusable").focus().length)try {
                    (c = this.document[0].activeElement) && "body" !== c.nodeName.toLowerCase() &&
                    b(c).blur()
                } catch (g) {
                }
                this._hide(this.uiDialog, this.options.hide, function () {
                    d._trigger("close", a)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (a, c) {
            var d = !1, g = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +b(this).css("z-index")
            }).get(), g = Math.max.apply(null, g);
            g >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", g + 1), d = !0);
            d && !c && this._trigger("focus", a);
            return d
        },
        open: function () {
            var a = this;
            this._isOpen ? this._moveToTop() &&
            this._focusTabbable() : (this._isOpen = !0, this.opener = b(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                a._focusTabbable();
                a._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"))
        },
        _focusTabbable: function () {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length || (a = this.uiDialog);
            a.eq(0).focus()
        },
        _keepFocus: function (a) {
            function c() {
                var a = this.document[0].activeElement;
                this.uiDialog[0] === a || b.contains(this.uiDialog[0], a) || this._focusTabbable()
            }

            a.preventDefault();
            c.call(this);
            this._delay(c)
        },
        _createWrapper: function () {
            this.uiDialog = b("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function (a) {
                    if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === b.ui.keyCode.ESCAPE)a.preventDefault(), this.close(a); else if (a.keyCode === b.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), g = c.filter(":last");
                        a.target !== g[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== d[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function () {
                            g.focus()
                        }),
                            a.preventDefault()) : (this._delay(function () {
                            d.focus()
                        }), a.preventDefault())
                    }
                }, mousedown: function (a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var a;
            this.uiDialogTitlebar = b("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function (a) {
                    b(a.target).closest(".ui-dialog-titlebar-close") ||
                    this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = b("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function (a) {
                    a.preventDefault();
                    this.close(a)
                }
            });
            a = b("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(a);
            this.uiDialog.attr({"aria-labelledby": a.attr("id")})
        },
        _title: function (a) {
            this.options.title ||
            a.html("&#160;");
            a.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = b("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = b("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function () {
            var a = this, c = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            b.isEmptyObject(c) || b.isArray(c) && !c.length ? this.uiDialog.removeClass("ui-dialog-buttons") :
                (b.each(c, function (c, g) {
                    var f, e;
                    g = b.isFunction(g) ? {click: g, text: c} : g;
                    g = b.extend({type: "button"}, g);
                    f = g.click;
                    g.click = function () {
                        f.apply(a.element[0], arguments)
                    };
                    e = {icons: g.icons, text: g.showText};
                    delete g.icons;
                    delete g.showText;
                    b("<button></button>", g).button(e).appendTo(a.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function a(a) {
                return {position: a.position, offset: a.offset}
            }

            var c = this, d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar", containment: "document", start: function (d, f) {
                    b(this).addClass("ui-dialog-dragging");
                    c._blockFrames();
                    c._trigger("dragStart", d, a(f))
                }, drag: function (d, b) {
                    c._trigger("drag", d, a(b))
                }, stop: function (g, f) {
                    var e = f.offset.left - c.document.scrollLeft(), k = f.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= e ? "+" : "") + e + " top" + (0 <= k ? "+" : "") + k,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-dragging");
                    c._unblockFrames();
                    c._trigger("dragStop", g, a(f))
                }
            })
        },
        _makeResizable: function () {
            function a(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize, position: a.position, size: a.size
                }
            }

            var c = this, d = this.options, g = d.resizable, f = this.uiDialog.css("position"), g = "string" === typeof g ? g : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function (d, g) {
                    b(this).addClass("ui-dialog-resizing");
                    c._blockFrames();
                    c._trigger("resizeStart", d, a(g))
                },
                resize: function (d,
                                  b) {
                    c._trigger("resize", d, a(b))
                },
                stop: function (g, f) {
                    var e = c.uiDialog.offset(), k = e.left - c.document.scrollLeft(), e = e.top - c.document.scrollTop();
                    d.height = c.uiDialog.height();
                    d.width = c.uiDialog.width();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= k ? "+" : "") + k + " top" + (0 <= e ? "+" : "") + e,
                        of: c.window
                    };
                    b(this).removeClass("ui-dialog-resizing");
                    c._unblockFrames();
                    c._trigger("resizeStop", g, a(f))
                }
            }).css("position", f)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (a) {
                    this._makeFocusTarget();
                    this._focusedElement =
                        b(a.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var a = this._trackingInstances(), c = b.inArray(this, a);
            -1 !== c && a.splice(c, 1)
        },
        _trackingInstances: function () {
            var a = this.document.data("ui-dialog-instances");
            a || (a = [], this.document.data("ui-dialog-instances", a));
            return a
        },
        _minHeight: function () {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function () {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function (a) {
            var c = this, d = !1, g = {};
            b.each(a, function (a, b) {
                c._setOption(a, b);
                a in c.sizeRelatedOptions && (d = !0);
                a in c.resizableRelatedOptions && (g[a] = b)
            });
            d && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
        },
        _setOption: function (a, c) {
            var d, b = this.uiDialog;
            "dialogClass" === a && b.removeClass(this.options.dialogClass).addClass(c);
            "disabled" !==
            a && (this._super(a, c), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({label: "" + c}), "draggable" === a && ((d = b.is(":data(ui-draggable)")) && !c && b.draggable("destroy"), !d && c && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && ((d = b.is(":data(ui-resizable)")) && !c && b.resizable("destroy"), d && "string" === typeof c && b.resizable("option", "handles", c), d || !1 === c || this._makeResizable()), "title" ===
            a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var a, c, d, b = this.options;
            this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0});
            b.minWidth > b.width && (b.width = b.minWidth);
            a = this.uiDialog.css({height: "auto", width: b.width}).outerHeight();
            c = Math.max(0, b.minHeight - a);
            d = "number" === typeof b.maxHeight ? Math.max(0, b.maxHeight - a) : "none";
            "auto" === b.height ? this.element.css({
                minHeight: c,
                maxHeight: d,
                height: "auto"
            }) : this.element.height(Math.max(0, b.height - a));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var a = b(this);
                return b("<div>").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (a) {
            return b(a.target).closest(".ui-dialog").length ?
                !0 : !!b(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var a = !0;
                this._delay(function () {
                    a = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (c) {
                        a || this._allowInteraction(c) || (c.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = b("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {mousedown: "_keepFocus"});
                this.document.data("ui-dialog-overlays",
                    (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    b.widget("ui.droppable", {
        version: "1.11.4", widgetEventPrefix: "drop", options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        }, _create: function () {
            var a, c = this.options, d = c.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = b.isFunction(d) ? d : function (a) {
                return a.is(d)
            };
            this.proportions = function () {
                if (arguments.length)a = arguments[0]; else return a ? a : a = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(c.scope);
            c.addClasses && this.element.addClass("ui-droppable")
        }, _addToManager: function (a) {
            b.ui.ddmanager.droppables[a] = b.ui.ddmanager.droppables[a] ||
                [];
            b.ui.ddmanager.droppables[a].push(this)
        }, _splice: function (a) {
            for (var c = 0; c < a.length; c++)a[c] === this && a.splice(c, 1)
        }, _destroy: function () {
            this._splice(b.ui.ddmanager.droppables[this.options.scope]);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        }, _setOption: function (a, c) {
            "accept" === a ? this.accept = b.isFunction(c) ? c : function (a) {
                return a.is(c)
            } : "scope" === a && (this._splice(b.ui.ddmanager.droppables[this.options.scope]), this._addToManager(c));
            this._super(a, c)
        }, _activate: function (a) {
            var c =
                b.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            c && this._trigger("activate", a, this.ui(c))
        }, _deactivate: function (a) {
            var c = b.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            c && this._trigger("deactivate", a, this.ui(c))
        }, _over: function (a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
                this._trigger("over", a, this.ui(c)))
        }, _out: function (a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(c)))
        }, _drop: function (a, c) {
            var d = c || b.ui.ddmanager.current, g = !1;
            if (!d || (d.currentItem || d.element)[0] === this.element[0])return !1;
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var c =
                    b(this).droppable("instance");
                if (c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && b.ui.intersect(d, b.extend(c, {offset: c.element.offset()}), c.options.tolerance, a))return g = !0, !1
            });
            return g ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop",
                a, this.ui(d)), this.element) : !1
        }, ui: function (a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    b.ui.intersect = function () {
        return function (a, c, d, b) {
            if (!c.offset)return !1;
            var f = (a.positionAbs || a.position.absolute).left + a.margins.left, e = (a.positionAbs || a.position.absolute).top + a.margins.top, k = f + a.helperProportions.width, h = e + a.helperProportions.height, l = c.offset.left, q = c.offset.top, p = l + c.proportions().width, n = q + c.proportions().height;
            switch (d) {
                case "fit":
                    return l <=
                        f && k <= p && q <= e && h <= n;
                case "intersect":
                    return l < f + a.helperProportions.width / 2 && k - a.helperProportions.width / 2 < p && q < e + a.helperProportions.height / 2 && h - a.helperProportions.height / 2 < n;
                case "pointer":
                    a = b.pageY;
                    d = c.proportions().height;
                    if (q = a >= q && a < q + d)b = b.pageX, c = c.proportions().width, q = b >= l && b < l + c;
                    return q;
                case "touch":
                    return (e >= q && e <= n || h >= q && h <= n || e < q && h > n) && (f >= l && f <= p || k >= l && k <= p || f < l && k > p);
                default:
                    return !1
            }
        }
    }();
    b.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (a, c) {
            var d,
                g, f = b.ui.ddmanager.droppables[a.options.scope] || [], e = c ? c.type : null, k = (a.currentItem || a.element).find(":data(ui-droppable)").addBack();
            d = 0;
            a:for (; d < f.length; d++)if (!(f[d].options.disabled || a && !f[d].accept.call(f[d].element[0], a.currentItem || a.element))) {
                for (g = 0; g < k.length; g++)if (k[g] === f[d].element[0]) {
                    f[d].proportions().height = 0;
                    continue a
                }
                f[d].visible = "none" !== f[d].element.css("display");
                f[d].visible && ("mousedown" === e && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                }))
            }
        }, drop: function (a, c) {
            var d = !1;
            b.each((b.ui.ddmanager.droppables[a.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && b.ui.intersect(a, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            });
            return d
        }, dragStart: function (a, c) {
            a.element.parentsUntil("body").bind("scroll.droppable",
                function () {
                    a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
                })
        }, drag: function (a, c) {
            a.options.refreshPositions && b.ui.ddmanager.prepareOffsets(a, c);
            b.each(b.ui.ddmanager.droppables[a.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, g, f;
                    f = b.ui.intersect(a, this, this.options.tolerance, c);
                    var e = !f && this.isover ? "isout" : f && !this.isover ? "isover" : null;
                    e && (this.options.greedy && (g = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                        return b(this).droppable("instance").options.scope ===
                            g
                    }), f.length && (d = b(f[0]).droppable("instance"), d.greedyChild = "isover" === e)), d && "isover" === e && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[e] = !0, this["isout" === e ? "isover" : "isout"] = !1, this["isover" === e ? "_over" : "_out"].call(this, c), d && "isout" === e && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        }, dragStop: function (a, c) {
            a.element.parentsUntil("body").unbind("scroll.droppable");
            a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
        }
    };
    b.effects = {effect: {}};
    (function (a, c) {
        function d(a, c, d) {
            var b =
                q[c.type] || {};
            if (null == a)return d || !c.def ? null : c.def;
            a = b.floor ? ~~a : parseFloat(a);
            return isNaN(a) ? c.def : b.mod ? (a + b.mod) % b.mod : 0 > a ? 0 : b.max < a ? b.max : a
        }

        function b(c) {
            var d = h(), g = d._rgba = [];
            c = c.toLowerCase();
            u(k, function (a, b) {
                var f, e = b.re.exec(c);
                f = e && b.parse(e);
                e = b.space || "rgba";
                if (f)return f = d[e](f), d[l[e].cache] = f[l[e].cache], g = d._rgba = f._rgba, !1
            });
            return g.length ? ("0,0,0,0" === g.join() && a.extend(g, z.transparent), d) : z[c]
        }

        function f(a, c, d) {
            d = (d + 1) % 1;
            return 1 > 6 * d ? a + (c - a) * d * 6 : 1 > 2 * d ? c : 2 > 3 * d ? a + (c - a) * (2 / 3 -
            d) * 6 : a
        }

        var e = /^([\-+])=\s*(\d+\.?\d*)/, k = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (a) {
                return [a[1], a[2] / 100, a[3] / 100, a[4]]
            }
        }], h = a.Color = function (c, d, b, g) {
            return new a.Color.fn.parse(c, d, b, g)
        }, l = {
            rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, q = {
            "byte": {floor: !0, max: 255},
            percent: {max: 1},
            degrees: {mod: 360, floor: !0}
        }, p = h.support = {}, n = a("<p>")[0], z, u = a.each;
        n.style.cssText = "background-color:rgba(1,1,1,.5)";
        p.rgba = -1 < n.style.backgroundColor.indexOf("rgba");
        u(l, function (a, c) {
            c.cache = "_" + a;
            c.props.alpha = {idx: 3, type: "percent", def: 1}
        });
        h.fn = a.extend(h.prototype, {
            parse: function (f, e, k, q) {
                if (f === c)return this._rgba = [null, null, null, null], this;
                if (f.jquery || f.nodeType)f = a(f).css(e), e = c;
                var r = this, p = a.type(f), n = this._rgba =
                    [];
                e !== c && (f = [f, e, k, q], p = "array");
                if ("string" === p)return this.parse(b(f) || z._default);
                if ("array" === p)return u(l.rgba.props, function (a, c) {
                    n[c.idx] = d(f[c.idx], c)
                }), this;
                if ("object" === p)return f instanceof h ? u(l, function (a, c) {
                    f[c.cache] && (r[c.cache] = f[c.cache].slice())
                }) : u(l, function (c, b) {
                    var g = b.cache;
                    u(b.props, function (a, c) {
                        if (!r[g] && b.to) {
                            if ("alpha" === a || null == f[a])return;
                            r[g] = b.to(r._rgba)
                        }
                        r[g][c.idx] = d(f[a], c, !0)
                    });
                    r[g] && 0 > a.inArray(null, r[g].slice(0, 3)) && (r[g][3] = 1, b.from && (r._rgba = b.from(r[g])))
                }),
                    this
            }, is: function (a) {
                var c = h(a), d = !0, b = this;
                u(l, function (a, g) {
                    var f, e = c[g.cache];
                    e && (f = b[g.cache] || g.to && g.to(b._rgba) || [], u(g.props, function (a, c) {
                        if (null != e[c.idx])return d = e[c.idx] === f[c.idx]
                    }));
                    return d
                });
                return d
            }, _space: function () {
                var a = [], c = this;
                u(l, function (d, b) {
                    c[b.cache] && a.push(d)
                });
                return a.pop()
            }, transition: function (a, c) {
                var b = h(a), g = b._space(), f = l[g], e = 0 === this.alpha() ? h("transparent") : this, k = e[f.cache] || f.to(e._rgba), r = k.slice(), b = b[f.cache];
                u(f.props, function (a, g) {
                    var f = g.idx, e = k[f],
                        h = b[f], l = q[g.type] || {};
                    null !== h && (null === e ? r[f] = h : (l.mod && (h - e > l.mod / 2 ? e += l.mod : e - h > l.mod / 2 && (e -= l.mod)), r[f] = d((h - e) * c + e, g)))
                });
                return this[g](r)
            }, blend: function (c) {
                if (1 === this._rgba[3])return this;
                var d = this._rgba.slice(), b = d.pop(), g = h(c)._rgba;
                return h(a.map(d, function (a, c) {
                    return (1 - b) * g[c] + b * a
                }))
            }, toRgbaString: function () {
                var c = "rgba(", d = a.map(this._rgba, function (a, c) {
                    return null == a ? 2 < c ? 1 : 0 : a
                });
                1 === d[3] && (d.pop(), c = "rgb(");
                return c + d.join() + ")"
            }, toHslaString: function () {
                var c = "hsla(", d = a.map(this.hsla(),
                    function (a, c) {
                        null == a && (a = 2 < c ? 1 : 0);
                        c && 3 > c && (a = Math.round(100 * a) + "%");
                        return a
                    });
                1 === d[3] && (d.pop(), c = "hsl(");
                return c + d.join() + ")"
            }, toHexString: function (c) {
                var d = this._rgba.slice(), b = d.pop();
                c && d.push(~~(255 * b));
                return "#" + a.map(d, function (a) {
                        a = (a || 0).toString(16);
                        return 1 === a.length ? "0" + a : a
                    }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        h.fn.parse.prototype = h.fn;
        l.hsla.to = function (a) {
            if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
            var c =
                a[0] / 255, d = a[1] / 255, b = a[2] / 255;
            a = a[3];
            var g = Math.max(c, d, b), f = Math.min(c, d, b), e = g - f, k = g + f, h = .5 * k;
            return [Math.round(f === g ? 0 : c === g ? 60 * (d - b) / e + 360 : d === g ? 60 * (b - c) / e + 120 : 60 * (c - d) / e + 240) % 360, 0 === e ? 0 : .5 >= h ? e / k : e / (2 - k), h, null == a ? 1 : a]
        };
        l.hsla.from = function (a) {
            if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
            var c = a[0] / 360, d = a[1], b = a[2];
            a = a[3];
            d = .5 >= b ? b * (1 + d) : b + d - b * d;
            b = 2 * b - d;
            return [Math.round(255 * f(b, d, c + 1 / 3)), Math.round(255 * f(b, d, c)), Math.round(255 * f(b, d, c - 1 / 3)), a]
        };
        u(l, function (b, g) {
            var f =
                g.props, k = g.cache, l = g.to, q = g.from;
            h.fn[b] = function (b) {
                l && !this[k] && (this[k] = l(this._rgba));
                if (b === c)return this[k].slice();
                var g, e = a.type(b), r = "array" === e || "object" === e ? b : arguments, p = this[k].slice();
                u(f, function (a, c) {
                    var b = r["object" === e ? a : c.idx];
                    null == b && (b = p[c.idx]);
                    p[c.idx] = d(b, c)
                });
                return q ? (g = h(q(p)), g[k] = p, g) : h(p)
            };
            u(f, function (c, d) {
                h.fn[c] || (h.fn[c] = function (g) {
                    var f = a.type(g), k = "alpha" === c ? this._hsla ? "hsla" : "rgba" : b, h = this[k](), l = h[d.idx];
                    if ("undefined" === f)return l;
                    "function" === f && (g = g.call(this,
                        l), f = a.type(g));
                    if (null == g && d.empty)return this;
                    "string" === f && (f = e.exec(g)) && (g = l + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1));
                    h[d.idx] = g;
                    return this[k](h)
                })
            })
        });
        h.hook = function (c) {
            c = c.split(" ");
            u(c, function (c, d) {
                a.cssHooks[d] = {
                    set: function (c, f) {
                        var e, k = "";
                        if ("transparent" !== f && ("string" !== a.type(f) || (e = b(f)))) {
                            f = h(e || f);
                            if (!p.rgba && 1 !== f._rgba[3]) {
                                for (e = "backgroundColor" === d ? c.parentNode : c; ("" === k || "transparent" === k) && e && e.style;)try {
                                    k = a.css(e, "backgroundColor"), e = e.parentNode
                                } catch (l) {
                                }
                                f = f.blend(k && "transparent" !==
                                k ? k : "_default")
                            }
                            f = f.toRgbaString()
                        }
                        try {
                            c.style[d] = f
                        } catch (l) {
                        }
                    }
                };
                a.fx.step[d] = function (c) {
                    c.colorInit || (c.start = h(c.elem, d), c.end = h(c.end), c.colorInit = !0);
                    a.cssHooks[d].set(c.elem, c.start.transition(c.end, c.pos))
                }
            })
        };
        h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        a.cssHooks.borderColor = {
            expand: function (a) {
                var c = {};
                u(["Top", "Right", "Bottom", "Left"], function (d, b) {
                    c["border" + b + "Color"] =
                        a
                });
                return c
            }
        };
        z = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(b);
    (function () {
        function a(a) {
            var c, d = a.ownerDocument.defaultView ? a.ownerDocument.defaultView.getComputedStyle(a, null) : a.currentStyle, e = {};
            if (d && d.length && d[0] && d[d[0]])for (a =
                                                          d.length; a--;)c = d[a], "string" === typeof d[c] && (e[b.camelCase(c)] = d[c]); else for (c in d)"string" === typeof d[c] && (e[c] = d[c]);
            return e
        }

        var c = ["add", "remove", "toggle"], d = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (a, c) {
            b.fx.step[c] = function (a) {
                if ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr)b.style(a.elem, c, a.end), a.setAttr = !0
            }
        });
        b.fn.addBack ||
        (b.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        });
        b.effects.animateClass = function (g, f, e, k) {
            var h = b.speed(f, e, k);
            return this.queue(function () {
                var f = b(this), e = f.attr("class") || "", k, l = h.children ? f.find("*").addBack() : f, l = l.map(function () {
                    return {el: b(this), start: a(this)}
                });
                k = function () {
                    b.each(c, function (a, c) {
                        if (g[c])f[c + "Class"](g[c])
                    })
                };
                k();
                l = l.map(function () {
                    this.end = a(this.el[0]);
                    var c = this.start, g = this.end, f = {}, e, k;
                    for (e in g)k = g[e], c[e] === k || d[e] || !b.fx.step[e] &&
                    isNaN(parseFloat(k)) || (f[e] = k);
                    this.diff = f;
                    return this
                });
                f.attr("class", e);
                l = l.map(function () {
                    var a = this, c = b.Deferred(), d = b.extend({}, h, {
                        queue: !1, complete: function () {
                            c.resolve(a)
                        }
                    });
                    this.el.animate(this.diff, d);
                    return c.promise()
                });
                b.when.apply(b, l.get()).done(function () {
                    k();
                    b.each(arguments, function () {
                        var a = this.el;
                        b.each(this.diff, function (c) {
                            a.css(c, "")
                        })
                    });
                    h.complete.call(f[0])
                })
            })
        };
        b.fn.extend({
            addClass: function (a) {
                return function (c, d, e, k) {
                    return d ? b.effects.animateClass.call(this, {add: c}, d,
                        e, k) : a.apply(this, arguments)
                }
            }(b.fn.addClass), removeClass: function (a) {
                return function (c, d, e, k) {
                    return 1 < arguments.length ? b.effects.animateClass.call(this, {remove: c}, d, e, k) : a.apply(this, arguments)
                }
            }(b.fn.removeClass), toggleClass: function (a) {
                return function (c, d, e, k, h) {
                    return "boolean" === typeof d || void 0 === d ? e ? b.effects.animateClass.call(this, d ? {add: c} : {remove: c}, e, k, h) : a.apply(this, arguments) : b.effects.animateClass.call(this, {toggle: c}, d, e, k)
                }
            }(b.fn.toggleClass), switchClass: function (a, c, d, e, k) {
                return b.effects.animateClass.call(this,
                    {add: c, remove: a}, d, e, k)
            }
        })
    })();
    (function () {
        function a(a, c, f, e) {
            b.isPlainObject(a) && (c = a, a = a.effect);
            a = {effect: a};
            null == c && (c = {});
            b.isFunction(c) && (e = c, f = null, c = {});
            if ("number" === typeof c || b.fx.speeds[c])e = f, f = c, c = {};
            b.isFunction(f) && (e = f, f = null);
            c && b.extend(a, c);
            f = f || c.duration;
            a.duration = b.fx.off ? 0 : "number" === typeof f ? f : f in b.fx.speeds ? b.fx.speeds[f] : b.fx.speeds._default;
            a.complete = e || c.complete;
            return a
        }

        function c(a) {
            return !a || "number" === typeof a || b.fx.speeds[a] || "string" === typeof a && !b.effects.effect[a] ||
            b.isFunction(a) || "object" === typeof a && !a.effect ? !0 : !1
        }

        b.extend(b.effects, {
            version: "1.11.4", save: function (a, c) {
                for (var b = 0; b < c.length; b++)null !== c[b] && a.data("ui-effects-" + c[b], a[0].style[c[b]])
            }, restore: function (a, c) {
                var b, e;
                for (e = 0; e < c.length; e++)null !== c[e] && (b = a.data("ui-effects-" + c[e]), void 0 === b && (b = ""), a.css(c[e], b))
            }, setMode: function (a, c) {
                "toggle" === c && (c = a.is(":hidden") ? "show" : "hide");
                return c
            }, getBaseline: function (a, c) {
                var b, e;
                switch (a[0]) {
                    case "top":
                        b = 0;
                        break;
                    case "middle":
                        b = .5;
                        break;
                    case "bottom":
                        b =
                            1;
                        break;
                    default:
                        b = a[0] / c.height
                }
                switch (a[1]) {
                    case "left":
                        e = 0;
                        break;
                    case "center":
                        e = .5;
                        break;
                    case "right":
                        e = 1;
                        break;
                    default:
                        e = a[1] / c.width
                }
                return {x: e, y: b}
            }, createWrapper: function (a) {
                if (a.parent().is(".ui-effects-wrapper"))return a.parent();
                var c = {
                    width: a.outerWidth(!0),
                    height: a.outerHeight(!0),
                    "float": a.css("float")
                }, f = b("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {width: a.width(), height: a.height()}, k = document.activeElement;
                try {
                    k.id
                } catch (h) {
                    k = document.body
                }
                a.wrap(f);
                (a[0] === k || b.contains(a[0], k)) && b(k).focus();
                f = a.parent();
                "static" === a.css("position") ? (f.css({position: "relative"}), a.css({position: "relative"})) : (b.extend(c, {
                    position: a.css("position"),
                    zIndex: a.css("z-index")
                }), b.each(["top", "left", "bottom", "right"], function (b, f) {
                    c[f] = a.css(f);
                    isNaN(parseInt(c[f], 10)) && (c[f] = "auto")
                }), a.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"}));
                a.css(e);
                return f.css(c).show()
            }, removeWrapper: function (a) {
                var c =
                    document.activeElement;
                a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === c || b.contains(a[0], c)) && b(c).focus());
                return a
            }, setTransition: function (a, c, f, e) {
                e = e || {};
                b.each(c, function (c, b) {
                    var g = a.cssUnit(b);
                    0 < g[0] && (e[b] = g[0] * f + g[1])
                });
                return e
            }
        });
        b.fn.extend({
            effect: function () {
                function c(a) {
                    function d() {
                        b.isFunction(e) && e.call(f[0]);
                        b.isFunction(a) && a()
                    }

                    var f = b(this), e = g.complete, h = g.mode;
                    (f.is(":hidden") ? "hide" === h : "show" === h) ? (f[h](), d()) : k.call(f[0], g, d)
                }

                var g = a.apply(this,
                    arguments), f = g.mode, e = g.queue, k = b.effects.effect[g.effect];
                return b.fx.off || !k ? f ? this[f](g.duration, g.complete) : this.each(function () {
                    g.complete && g.complete.call(this)
                }) : !1 === e ? this.each(c) : this.queue(e || "fx", c)
            }, show: function (d) {
                return function (b) {
                    if (c(b))return d.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    f.mode = "show";
                    return this.effect.call(this, f)
                }
            }(b.fn.show), hide: function (d) {
                return function (b) {
                    if (c(b))return d.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    f.mode = "hide";
                    return this.effect.call(this,
                        f)
                }
            }(b.fn.hide), toggle: function (d) {
                return function (b) {
                    if (c(b) || "boolean" === typeof b)return d.apply(this, arguments);
                    var f = a.apply(this, arguments);
                    f.mode = "toggle";
                    return this.effect.call(this, f)
                }
            }(b.fn.toggle), cssUnit: function (a) {
                var c = this.css(a), f = [];
                b.each(["em", "px", "%", "pt"], function (a, d) {
                    0 < c.indexOf(d) && (f = [parseFloat(c), d])
                });
                return f
            }
        })
    })();
    (function () {
        var a = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (c, d) {
            a[d] = function (a) {
                return Math.pow(a, c + 2)
            }
        });
        b.extend(a, {
            Sine: function (a) {
                return 1 -
                    Math.cos(a * Math.PI / 2)
            }, Circ: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            }, Elastic: function (a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            }, Back: function (a) {
                return a * a * (3 * a - 2)
            }, Bounce: function (a) {
                for (var d, b = 4; a < ((d = Math.pow(2, --b)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((3 * d - 2) / 22 - a, 2)
            }
        });
        b.each(a, function (a, d) {
            b.easing["easeIn" + a] = d;
            b.easing["easeOut" + a] = function (a) {
                return 1 - d(1 - a)
            };
            b.easing["easeInOut" + a] = function (a) {
                return .5 > a ? d(2 * a) / 2 : 1 - d(-2 * a + 2) / 2
            }
        })
    })();
    b.effects.effect.blind = function (a, c) {
        var d = b(this), g = "position top bottom left right height width".split(" "), f = b.effects.setMode(d, a.mode || "hide"), e = a.direction || "up", k = /up|down|vertical/.test(e), h = k ? "height" : "width", l = k ? "top" : "left", e = /up|left|vertical|horizontal/.test(e), q = {}, p = "show" === f, n, z, u;
        d.parent().is(".ui-effects-wrapper") ? b.effects.save(d.parent(), g) : b.effects.save(d, g);
        d.show();
        n = b.effects.createWrapper(d).css({overflow: "hidden"});
        z = n[h]();
        u = parseFloat(n.css(l)) || 0;
        q[h] = p ? z : 0;
        e || (d.css(k ?
            "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({position: "absolute"}), q[l] = p ? u : z + u);
        p && (n.css(h, 0), e || n.css(l, u + z));
        n.animate(q, {
            duration: a.duration, easing: a.easing, queue: !1, complete: function () {
                "hide" === f && d.hide();
                b.effects.restore(d, g);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.bounce = function (a, c) {
        var d = b(this), g = "position top bottom left right height width".split(" "), f = b.effects.setMode(d, a.mode || "effect"), e = "hide" === f, k = "show" === f, h = a.direction || "up", f = a.distance, l = a.times || 5, q =
            2 * l + (k || e ? 1 : 0), p = a.duration / q, n = a.easing, z = "up" === h || "down" === h ? "top" : "left", h = "up" === h || "left" === h, u, v, t = d.queue(), y = t.length;
        (k || e) && g.push("opacity");
        b.effects.save(d, g);
        d.show();
        b.effects.createWrapper(d);
        f || (f = d["top" === z ? "outerHeight" : "outerWidth"]() / 3);
        k && (v = {opacity: 1}, v[z] = 0, d.css("opacity", 0).css(z, h ? 2 * -f : 2 * f).animate(v, p, n));
        e && (f /= Math.pow(2, l - 1));
        v = {};
        for (k = v[z] = 0; k < l; k++)u = {}, u[z] = (h ? "-=" : "+=") + f, d.animate(u, p, n).animate(v, p, n), f = e ? 2 * f : f / 2;
        e && (u = {opacity: 0}, u[z] = (h ? "-=" : "+=") + f, d.animate(u,
            p, n));
        d.queue(function () {
            e && d.hide();
            b.effects.restore(d, g);
            b.effects.removeWrapper(d);
            c()
        });
        1 < y && t.splice.apply(t, [1, 0].concat(t.splice(y, q + 1)));
        d.dequeue()
    };
    b.effects.effect.clip = function (a, c) {
        var d = b(this), g = "position top bottom left right height width".split(" "), f = "show" === b.effects.setMode(d, a.mode || "hide"), e = "vertical" === (a.direction || "vertical"), k = e ? "height" : "width", e = e ? "top" : "left", h = {}, l, q;
        b.effects.save(d, g);
        d.show();
        l = b.effects.createWrapper(d).css({overflow: "hidden"});
        l = "IMG" === d[0].tagName ?
            l : d;
        q = l[k]();
        f && (l.css(k, 0), l.css(e, q / 2));
        h[k] = f ? q : 0;
        h[e] = f ? 0 : q / 2;
        l.animate(h, {
            queue: !1, duration: a.duration, easing: a.easing, complete: function () {
                f || d.hide();
                b.effects.restore(d, g);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.drop = function (a, c) {
        var d = b(this), g = "position top bottom left right opacity height width".split(" "), f = b.effects.setMode(d, a.mode || "hide"), e = "show" === f, k = a.direction || "left", h = "up" === k || "down" === k ? "top" : "left", k = "up" === k || "left" === k ? "pos" : "neg", l = {opacity: e ? 1 : 0}, q;
        b.effects.save(d,
            g);
        d.show();
        b.effects.createWrapper(d);
        q = a.distance || d["top" === h ? "outerHeight" : "outerWidth"](!0) / 2;
        e && d.css("opacity", 0).css(h, "pos" === k ? -q : q);
        l[h] = (e ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + q;
        d.animate(l, {
            queue: !1, duration: a.duration, easing: a.easing, complete: function () {
                "hide" === f && d.hide();
                b.effects.restore(d, g);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.explode = function (a, c) {
        function d() {
            p.push(this);
            p.length === g * f && (e.css({visibility: "visible"}), b(p).remove(), k || e.hide(), c())
        }

        var g = a.pieces ?
            Math.round(Math.sqrt(a.pieces)) : 3, f = g, e = b(this), k = "show" === b.effects.setMode(e, a.mode || "hide"), h = e.show().css("visibility", "hidden").offset(), l = Math.ceil(e.outerWidth() / f), q = Math.ceil(e.outerHeight() / g), p = [], n, z, u, v, t, y;
        for (n = 0; n < g; n++)for (v = h.top + n * q, y = n - (g - 1) / 2, z = 0; z < f; z++)u = h.left + z * l, t = z - (f - 1) / 2, e.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -z * l,
            top: -n * q
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute", overflow: "hidden", width: l,
            height: q, left: u + (k ? t * l : 0), top: v + (k ? y * q : 0), opacity: k ? 0 : 1
        }).animate({
            left: u + (k ? 0 : t * l),
            top: v + (k ? 0 : y * q),
            opacity: k ? 1 : 0
        }, a.duration || 500, a.easing, d)
    };
    b.effects.effect.fade = function (a, c) {
        var d = b(this), g = b.effects.setMode(d, a.mode || "toggle");
        d.animate({opacity: g}, {queue: !1, duration: a.duration, easing: a.easing, complete: c})
    };
    b.effects.effect.fold = function (a, c) {
        var d = b(this), g = "position top bottom left right height width".split(" "), f = b.effects.setMode(d, a.mode || "hide"), e = "show" === f, k = "hide" === f, f = a.size || 15,
            h = /([0-9]+)%/.exec(f), l = !!a.horizFirst, q = e !== l, p = q ? ["width", "height"] : ["height", "width"], n = a.duration / 2, z, u = {}, v = {};
        b.effects.save(d, g);
        d.show();
        z = b.effects.createWrapper(d).css({overflow: "hidden"});
        q = q ? [z.width(), z.height()] : [z.height(), z.width()];
        h && (f = parseInt(h[1], 10) / 100 * q[k ? 0 : 1]);
        e && z.css(l ? {height: 0, width: f} : {height: f, width: 0});
        u[p[0]] = e ? q[0] : f;
        v[p[1]] = e ? q[1] : 0;
        z.animate(u, n, a.easing).animate(v, n, a.easing, function () {
            k && d.hide();
            b.effects.restore(d, g);
            b.effects.removeWrapper(d);
            c()
        })
    };
    b.effects.effect.highlight =
        function (a, c) {
            var d = b(this), g = ["backgroundImage", "backgroundColor", "opacity"], f = b.effects.setMode(d, a.mode || "show"), e = {backgroundColor: d.css("backgroundColor")};
            "hide" === f && (e.opacity = 0);
            b.effects.save(d, g);
            d.show().css({backgroundImage: "none", backgroundColor: a.color || "#ffff99"}).animate(e, {
                queue: !1,
                duration: a.duration,
                easing: a.easing,
                complete: function () {
                    "hide" === f && d.hide();
                    b.effects.restore(d, g);
                    c()
                }
            })
        };
    b.effects.effect.size = function (a, c) {
        var d, g, f, e, k, h, l = b(this), q = "position top bottom left right width height overflow opacity".split(" ");
        k = "position top bottom left right overflow opacity".split(" ");
        var p = ["width", "height", "overflow"], n = ["fontSize"], z = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], v = b.effects.setMode(l, a.mode || "effect"), t = a.restore || "effect" !== v, y = a.scale || "both";
        h = a.origin || ["middle", "center"];
        var J = l.css("position"), x = t ? q : k, B = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === v && l.show();
        k = {
            height: l.height(), width: l.width(),
            outerHeight: l.outerHeight(), outerWidth: l.outerWidth()
        };
        "toggle" === a.mode && "show" === v ? (l.from = a.to || B, l.to = a.from || k) : (l.from = a.from || ("show" === v ? B : k), l.to = a.to || ("hide" === v ? B : k));
        f = l.from.height / k.height;
        e = l.from.width / k.width;
        d = l.to.height / k.height;
        g = l.to.width / k.width;
        if ("box" === y || "both" === y)f !== d && (x = x.concat(z), l.from = b.effects.setTransition(l, z, f, l.from), l.to = b.effects.setTransition(l, z, d, l.to)), e !== g && (x = x.concat(u), l.from = b.effects.setTransition(l, u, e, l.from), l.to = b.effects.setTransition(l,
            u, g, l.to));
        "content" !== y && "both" !== y || f === d || (x = x.concat(n).concat(p), l.from = b.effects.setTransition(l, n, f, l.from), l.to = b.effects.setTransition(l, n, d, l.to));
        b.effects.save(l, x);
        l.show();
        b.effects.createWrapper(l);
        l.css("overflow", "hidden").css(l.from);
        h && (h = b.effects.getBaseline(h, k), l.from.top = (k.outerHeight - l.outerHeight()) * h.y, l.from.left = (k.outerWidth - l.outerWidth()) * h.x, l.to.top = (k.outerHeight - l.to.outerHeight) * h.y, l.to.left = (k.outerWidth - l.to.outerWidth) * h.x);
        l.css(l.from);
        if ("content" === y ||
            "both" === y)z = z.concat(["marginTop", "marginBottom"]).concat(n), u = u.concat(["marginLeft", "marginRight"]), p = q.concat(z).concat(u), l.find("*[width]").each(function () {
            var c = b(this), k = c.height(), h = c.width(), l = c.outerHeight(), q = c.outerWidth();
            t && b.effects.save(c, p);
            c.from = {height: k * f, width: h * e, outerHeight: l * f, outerWidth: q * e};
            c.to = {height: k * d, width: h * g, outerHeight: k * d, outerWidth: h * g};
            f !== d && (c.from = b.effects.setTransition(c, z, f, c.from), c.to = b.effects.setTransition(c, z, d, c.to));
            e !== g && (c.from = b.effects.setTransition(c,
                u, e, c.from), c.to = b.effects.setTransition(c, u, g, c.to));
            c.css(c.from);
            c.animate(c.to, a.duration, a.easing, function () {
                t && b.effects.restore(c, p)
            })
        });
        l.animate(l.to, {
            queue: !1, duration: a.duration, easing: a.easing, complete: function () {
                0 === l.to.opacity && l.css("opacity", l.from.opacity);
                "hide" === v && l.hide();
                b.effects.restore(l, x);
                t || ("static" === J ? l.css({
                    position: "relative",
                    top: l.to.top,
                    left: l.to.left
                }) : b.each(["top", "left"], function (a, c) {
                    l.css(c, function (c, d) {
                        var b = parseInt(d, 10), g = a ? l.to.left : l.to.top;
                        return "auto" ===
                        d ? g + "px" : b + g + "px"
                    })
                }));
                b.effects.removeWrapper(l);
                c()
            }
        })
    };
    b.effects.effect.scale = function (a, c) {
        var d = b(this), g = b.extend(!0, {}, a), f = b.effects.setMode(d, a.mode || "effect"), e = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "hide" === f ? 0 : 100), k = a.direction || "both", h = a.origin, l = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        }, q = "horizontal" !== k ? e / 100 : 1, e = "vertical" !== k ? e / 100 : 1;
        g.effect = "size";
        g.queue = !1;
        g.complete = c;
        "effect" !== f && (g.origin = h || ["middle", "center"],
            g.restore = !0);
        g.from = a.from || ("show" === f ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : l);
        g.to = {height: l.height * q, width: l.width * e, outerHeight: l.outerHeight * q, outerWidth: l.outerWidth * e};
        g.fade && ("show" === f && (g.from.opacity = 0, g.to.opacity = 1), "hide" === f && (g.from.opacity = 1, g.to.opacity = 0));
        d.effect(g)
    };
    b.effects.effect.puff = function (a, c) {
        var d = b(this), g = b.effects.setMode(d, a.mode || "hide"), f = "hide" === g, e = parseInt(a.percent, 10) || 150, k = e / 100, h = {
            height: d.height(), width: d.width(), outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        b.extend(a, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: g,
            complete: c,
            percent: f ? e : 100,
            from: f ? h : {
                height: h.height * k,
                width: h.width * k,
                outerHeight: h.outerHeight * k,
                outerWidth: h.outerWidth * k
            }
        });
        d.effect(a)
    };
    b.effects.effect.pulsate = function (a, c) {
        var d = b(this), g = b.effects.setMode(d, a.mode || "show"), f = "show" === g, e = "hide" === g, g = 2 * (a.times || 5) + (f || "hide" === g ? 1 : 0), k = a.duration / g, h = 0, l = d.queue(), q = l.length;
        if (f || !d.is(":visible"))d.css("opacity", 0).show(), h = 1;
        for (f = 1; f < g; f++)d.animate({opacity: h},
            k, a.easing), h = 1 - h;
        d.animate({opacity: h}, k, a.easing);
        d.queue(function () {
            e && d.hide();
            c()
        });
        1 < q && l.splice.apply(l, [1, 0].concat(l.splice(q, g + 1)));
        d.dequeue()
    };
    b.effects.effect.shake = function (a, c) {
        var d = b(this), g = "position top bottom left right height width".split(" "), f = b.effects.setMode(d, a.mode || "effect"), e = a.direction || "left", k = a.distance || 20, h = a.times || 3, l = 2 * h + 1, q = Math.round(a.duration / l), p = "up" === e || "down" === e ? "top" : "left", n = "up" === e || "left" === e, e = {}, z = {}, u = {}, v = d.queue(), t = v.length;
        b.effects.save(d,
            g);
        d.show();
        b.effects.createWrapper(d);
        e[p] = (n ? "-=" : "+=") + k;
        z[p] = (n ? "+=" : "-=") + 2 * k;
        u[p] = (n ? "-=" : "+=") + 2 * k;
        d.animate(e, q, a.easing);
        for (k = 1; k < h; k++)d.animate(z, q, a.easing).animate(u, q, a.easing);
        d.animate(z, q, a.easing).animate(e, q / 2, a.easing).queue(function () {
            "hide" === f && d.hide();
            b.effects.restore(d, g);
            b.effects.removeWrapper(d);
            c()
        });
        1 < t && v.splice.apply(v, [1, 0].concat(v.splice(t, l + 1)));
        d.dequeue()
    };
    b.effects.effect.slide = function (a, c) {
        var d = b(this), g = "position top bottom left right width height".split(" "),
            f = b.effects.setMode(d, a.mode || "show"), e = "show" === f, k = a.direction || "left", h = "up" === k || "down" === k ? "top" : "left", k = "up" === k || "left" === k, l, q = {};
        b.effects.save(d, g);
        d.show();
        l = a.distance || d["top" === h ? "outerHeight" : "outerWidth"](!0);
        b.effects.createWrapper(d).css({overflow: "hidden"});
        e && d.css(h, k ? isNaN(l) ? "-" + l : -l : l);
        q[h] = (e ? k ? "+=" : "-=" : k ? "-=" : "+=") + l;
        d.animate(q, {
            queue: !1, duration: a.duration, easing: a.easing, complete: function () {
                "hide" === f && d.hide();
                b.effects.restore(d, g);
                b.effects.removeWrapper(d);
                c()
            }
        })
    };
    b.effects.effect.transfer = function (a, c) {
        var d = b(this), g = b(a.to), f = "fixed" === g.css("position"), e = b("body"), k = f ? e.scrollTop() : 0, e = f ? e.scrollLeft() : 0, h = g.offset(), g = {
            top: h.top - k,
            left: h.left - e,
            height: g.innerHeight(),
            width: g.innerWidth()
        }, h = d.offset(), l = b("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(a.className).css({
            top: h.top - k,
            left: h.left - e,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: f ? "fixed" : "absolute"
        }).animate(g, a.duration, a.easing, function () {
            l.remove();
            c()
        })
    };
    b.widget("ui.progressbar", {
        version: "1.11.4", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        }, _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        }, value: function (a) {
            if (void 0 === a)return this.options.value;
            this.options.value = this._constrainedValue(a);
            this._refreshValue()
        }, _constrainedValue: function (a) {
            void 0 === a && (a = this.options.value);
            this.indeterminate = !1 === a;
            "number" !== typeof a && (a = 0);
            return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        }, _setOptions: function (a) {
            var c = a.value;
            delete a.value;
            this._super(a);
            this.options.value = this._constrainedValue(c);
            this._refreshValue()
        }, _setOption: function (a,
                                 c) {
            "max" === a && (c = Math.max(this.min, c));
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c).attr("aria-disabled", c);
            this._super(a, c)
        }, _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        }, _refreshValue: function () {
            var a = this.options.value, c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate",
                this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = b("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": a
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== a && (this.oldValue = a, this._trigger("change"));
            a === this.options.max && this._trigger("complete")
        }
    });
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.11.4", options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        }, _create: function () {
            var a, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function () {
                a = b(c.options.filter, c.element[0]);
                a.addClass("ui-selectee");
                a.each(function () {
                    var a = b(this), c = a.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: a,
                        left: c.left,
                        top: c.top,
                        right: c.left + a.outerWidth(),
                        bottom: c.top + a.outerHeight(),
                        startselected: !1,
                        selected: a.hasClass("ui-selected"),
                        selecting: a.hasClass("ui-selecting"),
                        unselecting: a.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = a.addClass("ui-selectee");
            this._mouseInit();
            this.helper = b("<div class='ui-selectable-helper'></div>")
        }, _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        }, _mouseStart: function (a) {
            var c = this, d = this.options;
            this.opos = [a.pageX, a.pageY];
            this.options.disabled || (this.selectees = b(d.filter, this.element[0]), this._trigger("start", a), b(d.appendTo).append(this.helper), this.helper.css({
                left: a.pageX,
                top: a.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var d = b.data(this, "selectable-item");
                d.startselected = !0;
                a.metaKey || a.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", a, {unselecting: d.element}))
            }),
                b(a.target).parents().addBack().each(function () {
                    var d, f = b.data(this, "selectable-item");
                    if (f)return d = !a.metaKey && !a.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), f.unselecting = !d, f.selecting = d, (f.selected = d) ? c._trigger("selecting", a, {selecting: f.element}) : c._trigger("unselecting", a, {unselecting: f.element}), !1
                }))
        }, _mouseDrag: function (a) {
            this.dragged = !0;
            if (!this.options.disabled) {
                var c, d = this, g = this.options,
                    f = this.opos[0], e = this.opos[1], k = a.pageX, h = a.pageY;
                f > k && (c = k, k = f, f = c);
                e > h && (c = h, h = e, e = c);
                this.helper.css({left: f, top: e, width: k - f, height: h - e});
                this.selectees.each(function () {
                    var c = b.data(this, "selectable-item"), l = !1;
                    c && c.element !== d.element[0] && ("touch" === g.tolerance ? l = !(c.left > k || c.right < f || c.top > h || c.bottom < e) : "fit" === g.tolerance && (l = c.left > f && c.right < k && c.top > e && c.bottom < h), l ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"),
                        c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", a, {selecting: c.element}))) : (c.selecting && ((a.metaKey || a.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", a, {unselecting: c.element}))), !c.selected || a.metaKey || a.ctrlKey ||
                    c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", a, {unselecting: c.element}))))
                });
                return !1
            }
        }, _mouseStop: function (a) {
            var c = this;
            this.dragged = !1;
            b(".ui-unselecting", this.element[0]).each(function () {
                var d = b.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting");
                d.unselecting = !1;
                d.startselected = !1;
                c._trigger("unselected", a, {unselected: d.element})
            });
            b(".ui-selecting", this.element[0]).each(function () {
                var d =
                    b.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected");
                d.selecting = !1;
                d.selected = !0;
                d.startselected = !0;
                c._trigger("selected", a, {selected: d.element})
            });
            this._trigger("stop", a);
            this.helper.remove();
            return !1
        }
    });
    b.widget("ui.selectmenu", {
        version: "1.11.4", defaultElement: "<select>", options: {
            appendTo: null,
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        }, _create: function () {
            var a = this.element.uniqueId().attr("id");
            this.ids = {element: a, button: a + "-button", menu: a + "-menu"};
            this._drawButton();
            this._drawMenu();
            this.options.disabled && this.disable()
        }, _drawButton: function () {
            var a = this;
            this.label = b("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
            this._on(this.label, {
                click: function (a) {
                    this.button.focus();
                    a.preventDefault()
                }
            });
            this.element.hide();
            this.button = b("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element);
            b("<span>", {"class": "ui-icon " + this.options.icons.button}).prependTo(this.button);
            this.buttonText = b("<span>", {"class": "ui-selectmenu-text"}).appendTo(this.button);
            this._setText(this.buttonText, this.element.find("option:selected").text());
            this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin",
                function () {
                    a.menuItems || a._refreshMenu()
                });
            this._hoverable(this.button);
            this._focusable(this.button)
        }, _drawMenu: function () {
            var a = this;
            this.menu = b("<ul>", {"aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu});
            this.menuWrap = b("<div>", {"class": "ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                role: "listbox", select: function (c, d) {
                    c.preventDefault();
                    a._setSelection();
                    a._select(d.item.data("ui-selectmenu-item"), c)
                }, focus: function (c,
                                    d) {
                    var b = d.item.data("ui-selectmenu-item");
                    null != a.focusIndex && b.index !== a.focusIndex && (a._trigger("focus", c, {item: b}), a.isOpen || a._select(b, c));
                    a.focusIndex = b.index;
                    a.button.attr("aria-activedescendant", a.menuItems.eq(b.index).attr("id"))
                }
            }).menu("instance");
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function () {
                return !1
            };
            this.menuInstance._isDivider = function () {
                return !1
            }
        }, refresh: function () {
            this._refreshMenu();
            this._setText(this.buttonText, this._getSelectedItem().text());
            this.options.width || this._resizeButton()
        }, _refreshMenu: function () {
            this.menu.empty();
            var a;
            a = this.element.find("option");
            a.length && (this._parseOptions(a), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (a) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a))
        }, _position: function () {
            this.menuWrap.position(b.extend({of: this.button}, this.options.position))
        }, close: function (a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range =
                null, this._off(this.document), this._trigger("close", a))
        }, widget: function () {
            return this.button
        }, menuWidget: function () {
            return this.menu
        }, _renderMenu: function (a, c) {
            var d = this, g = "";
            b.each(c, function (c, e) {
                e.optgroup !== g && (b("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: e.optgroup
                }).appendTo(a), g = e.optgroup);
                d._renderItemData(a, e)
            })
        }, _renderItemData: function (a, c) {
            return this._renderItem(a, c).data("ui-selectmenu-item",
                c)
        }, _renderItem: function (a, c) {
            var d = b("<li>");
            c.disabled && d.addClass("ui-state-disabled");
            this._setText(d, c.label);
            return d.appendTo(a)
        }, _setText: function (a, c) {
            c ? a.text(c) : a.html("&#160;")
        }, _move: function (a, c) {
            var d, b = ".ui-menu-item";
            this.isOpen ? d = this.menuItems.eq(this.focusIndex) : (d = this.menuItems.eq(this.element[0].selectedIndex), b += ":not(.ui-state-disabled)");
            d = "first" === a || "last" === a ? d["first" === a ? "prevAll" : "nextAll"](b).eq(-1) : d[a + "All"](b).eq(0);
            d.length && this.menuInstance.focus(c, d)
        }, _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function (a) {
            this[this.isOpen ? "close" : "open"](a)
        }, _setSelection: function () {
            var a;
            this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
        }, _documentClick: {
            mousedown: function (a) {
                this.isOpen && (b(a.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(a))
            }
        }, _buttonEvents: {
            mousedown: function () {
                var a;
                window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) :
                    this.range = document.selection.createRange()
            }, click: function (a) {
                this._setSelection();
                this._toggle(a)
            }, keydown: function (a) {
                var c = !0;
                switch (a.keyCode) {
                    case b.ui.keyCode.TAB:
                    case b.ui.keyCode.ESCAPE:
                        this.close(a);
                        c = !1;
                        break;
                    case b.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(a);
                        break;
                    case b.ui.keyCode.UP:
                        a.altKey ? this._toggle(a) : this._move("prev", a);
                        break;
                    case b.ui.keyCode.DOWN:
                        a.altKey ? this._toggle(a) : this._move("next", a);
                        break;
                    case b.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(a) :
                            this._toggle(a);
                        break;
                    case b.ui.keyCode.LEFT:
                        this._move("prev", a);
                        break;
                    case b.ui.keyCode.RIGHT:
                        this._move("next", a);
                        break;
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.PAGE_UP:
                        this._move("first", a);
                        break;
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_DOWN:
                        this._move("last", a);
                        break;
                    default:
                        this.menu.trigger(a), c = !1
                }
                c && a.preventDefault()
            }
        }, _selectFocusedItem: function (a) {
            var c = this.menuItems.eq(this.focusIndex);
            c.hasClass("ui-state-disabled") || this._select(c.data("ui-selectmenu-item"), a)
        }, _select: function (a,
                              c) {
            var d = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index;
            this._setText(this.buttonText, a.label);
            this._setAria(a);
            this._trigger("select", c, {item: a});
            a.index !== d && this._trigger("change", c, {item: a});
            this.close(c)
        }, _setAria: function (a) {
            a = this.menuItems.eq(a.index).attr("id");
            this.button.attr({"aria-labelledby": a, "aria-activedescendant": a});
            this.menu.attr("aria-activedescendant", a)
        }, _setOption: function (a, c) {
            "icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(c.button);
            this._super(a, c);
            "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
            "disabled" === a && (this.menuInstance.option("disabled", c), this.button.toggleClass("ui-state-disabled", c).attr("aria-disabled", c), this.element.prop("disabled", c), c ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
            "width" === a && this._resizeButton()
        }, _appendTo: function () {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front"));
            a.length || (a = this.document[0].body);
            return a
        }, _toggleAttr: function () {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        }, _resizeButton: function () {
            var a = this.options.width;
            a || (a = this.element.show().outerWidth(), this.element.hide());
            this.button.outerWidth(a)
        }, _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(),
                this.menu.width("").outerWidth() + 1))
        }, _getCreateOptions: function () {
            return {disabled: this.element.prop("disabled")}
        }, _parseOptions: function (a) {
            var c = [];
            a.each(function (a, g) {
                var f = b(g), e = f.parent("optgroup");
                c.push({
                    element: f,
                    index: a,
                    value: f.val(),
                    label: f.text(),
                    optgroup: e.attr("label") || "",
                    disabled: e.prop("disabled") || f.prop("disabled")
                })
            });
            this.items = c
        }, _destroy: function () {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr("for", this.ids.element)
        }
    });
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function () {
            var a, c;
            a = this.options;
            var d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), g = [];
            c = a.values && a.values.length || 1;
            d.length > c && (d.slice(c).remove(), d = d.slice(0, c));
            for (a = d.length; a < c; a++)g.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = d.add(b(g.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function (a) {
                b(this).data("ui-slider-handle-index", a)
            })
        },
        _createRange: function () {
            var a = this.options, c = "";
            a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : b.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = b("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function (a) {
            var c, d, g, f, e, k = this, h = this.options;
            if (h.disabled)return !1;
            this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()};
            this.elementOffset = this.element.offset();
            c = this._normValueFromMouse({x: a.pageX, y: a.pageY});
            d = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function (a) {
                var e = Math.abs(c - k.values(a));
                if (d > e || d === e && (a === k._lastChangedValue || k.values(a) === h.min))d = e, g = b(this), f = a
            });
            if (!1 === this._start(a, f))return !1;
            this._mouseSliding = !0;
            this._handleIndex = f;
            g.addClass("ui-state-active").focus();
            e = g.offset();
            this._clickOffset = b(a.target).parents().addBack().is(".ui-slider-handle") ? {
                left: a.pageX - e.left - g.width() / 2,
                top: a.pageY - e.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
            } : {left: 0, top: 0};
            this.handles.hasClass("ui-state-hover") || this._slide(a, f, c);
            return this._animateOff = !0
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (a) {
            var c =
                this._normValueFromMouse({x: a.pageX, y: a.pageY});
            this._slide(a, this._handleIndex, c);
            return !1
        },
        _mouseStop: function (a) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = !1;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (a) {
            var c;
            "horizontal" === this.orientation ? (c = this.elementSize.width,
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
            c = a / c;
            1 < c && (c = 1);
            0 > c && (c = 0);
            "vertical" === this.orientation && (c = 1 - c);
            a = this._valueMax() - this._valueMin();
            c = this._valueMin() + c * a;
            return this._trimAlignValue(c)
        },
        _start: function (a, c) {
            var d = {handle: this.handles[c], value: this.value()};
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
            return this._trigger("start", a, d)
        },
        _slide: function (a, c, d) {
            var b;
            this.options.values && this.options.values.length ? (b = this.values(c ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === c && d > b || 1 === c && d < b) && (d = b), d !== this.values(c) && (b = this.values(), b[c] = d, a = this._trigger("slide", a, {
                handle: this.handles[c],
                value: d,
                values: b
            }), this.values(c ? 0 : 1), !1 !== a && this.values(c, d))) : d !== this.value() && (a = this._trigger("slide", a, {
                handle: this.handles[c],
                value: d
            }), !1 !== a && this.value(d))
        },
        _stop: function (a,
                         c) {
            var d = {handle: this.handles[c], value: this.value()};
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
            this._trigger("stop", a, d)
        },
        _change: function (a, c) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {handle: this.handles[c], value: this.value()};
                this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
                this._lastChangedValue = c;
                this._trigger("change", a, d)
            }
        },
        value: function (a) {
            if (arguments.length)this.options.value =
                this._trimAlignValue(a), this._refreshValue(), this._change(null, 0); else return this._value()
        },
        values: function (a, c) {
            var d, g, f;
            if (1 < arguments.length)this.options.values[a] = this._trimAlignValue(c), this._refreshValue(), this._change(null, a); else if (arguments.length)if (b.isArray(arguments[0])) {
                d = this.options.values;
                g = arguments[0];
                for (f = 0; f < d.length; f += 1)d[f] = this._trimAlignValue(g[f]), this._change(null, f);
                this._refreshValue()
            } else return this.options.values && this.options.values.length ? this._values(a) : this.value();
            else return this._values()
        },
        _setOption: function (a, c) {
            var d, g = 0;
            "range" === a && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            b.isArray(this.options.values) && (g = this.options.values.length);
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!c);
            this._super(a, c);
            switch (a) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" +
                        this.orientation);
                    this._refreshValue();
                    this.handles.css("horizontal" === c ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (d = 0; d < g; d += 1)this._change(null, d);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function (a) {
            var c, d;
            if (arguments.length)return c = this.options.values[a], c = this._trimAlignValue(c);
            if (this.options.values && this.options.values.length) {
                c = this.options.values.slice();
                for (d = 0; d < c.length; d += 1)c[d] = this._trimAlignValue(c[d]);
                return c
            }
            return []
        },
        _trimAlignValue: function (a) {
            if (a <= this._valueMin())return this._valueMin();
            if (a >= this._valueMax())return this._valueMax();
            var c = 0 < this.options.step ? this.options.step :
                1, d = (a - this._valueMin()) % c;
            a -= d;
            2 * Math.abs(d) >= c && (a += 0 < d ? c : -c);
            return parseFloat(a.toFixed(5))
        },
        _calculateNewMax: function () {
            var a = this.options.max, c = this._valueMin(), d = this.options.step, a = Math.floor(+(a - c).toFixed(this._precision()) / d) * d;
            this.max = parseFloat((a + c).toFixed(this._precision()))
        },
        _precision: function () {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function (a) {
            a = a.toString();
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshValue: function () {
            var a, c, d, g, f, e = this.options.range, k = this.options, h = this, l = this._animateOff ? !1 : k.animate, q = {};
            if (this.options.values && this.options.values.length)this.handles.each(function (d) {
                c = (h.values(d) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100;
                q["horizontal" === h.orientation ? "left" : "bottom"] = c + "%";
                b(this).stop(1, 1)[l ? "animate" : "css"](q, k.animate);
                if (!0 === h.options.range)if ("horizontal" ===
                    h.orientation) {
                    if (0 === d)h.range.stop(1, 1)[l ? "animate" : "css"]({left: c + "%"}, k.animate);
                    if (1 === d)h.range[l ? "animate" : "css"]({width: c - a + "%"}, {queue: !1, duration: k.animate})
                } else {
                    if (0 === d)h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: c + "%"}, k.animate);
                    if (1 === d)h.range[l ? "animate" : "css"]({height: c - a + "%"}, {queue: !1, duration: k.animate})
                }
                a = c
            }); else {
                d = this.value();
                g = this._valueMin();
                f = this._valueMax();
                c = f !== g ? (d - g) / (f - g) * 100 : 0;
                q["horizontal" === this.orientation ? "left" : "bottom"] = c + "%";
                this.handle.stop(1, 1)[l ? "animate" :
                    "css"](q, k.animate);
                if ("min" === e && "horizontal" === this.orientation)this.range.stop(1, 1)[l ? "animate" : "css"]({width: c + "%"}, k.animate);
                if ("max" === e && "horizontal" === this.orientation)this.range[l ? "animate" : "css"]({width: 100 - c + "%"}, {
                    queue: !1,
                    duration: k.animate
                });
                if ("min" === e && "vertical" === this.orientation)this.range.stop(1, 1)[l ? "animate" : "css"]({height: c + "%"}, k.animate);
                if ("max" === e && "vertical" === this.orientation)this.range[l ? "animate" : "css"]({height: 100 - c + "%"}, {
                    queue: !1,
                    duration: k.animate
                })
            }
        },
        _handleEvents: {
            keydown: function (a) {
                var c,
                    d, g, f = b(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (a.preventDefault(), !this._keySliding && (this._keySliding = !0, b(a.target).addClass("ui-state-active"), c = this._start(a, f), !1 === c))return
                }
                g = this.options.step;
                c = this.options.values && this.options.values.length ? d = this.values(f) : d = this.value();
                switch (a.keyCode) {
                    case b.ui.keyCode.HOME:
                        d =
                            this._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        d = this._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (c === this._valueMax())return;
                        d = this._trimAlignValue(c + g);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (c === this._valueMin())return;
                        d = this._trimAlignValue(c - g)
                }
                this._slide(a,
                    f, d)
            }, keyup: function (a) {
                var c = b(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(a, c), this._change(a, c), b(a.target).removeClass("ui-state-active"))
            }
        }
    });
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.11.4", widgetEventPrefix: "sort", ready: !1, options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        }, _isOverAxis: function (a, c, d) {
            return a >= c && a < c + d
        }, _isFloating: function (a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }, _create: function () {
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        }, _setOption: function (a, c) {
            this._super(a, c);
            "handle" === a && this._setHandleClassName()
        }, _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            b.each(this.items, function () {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        }, _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--)this.items[a].item.removeData(this.widgetName + "-item");
            return this
        }, _mouseCapture: function (a, c) {
            var d = null, g = !1, f = this;
            if (this.reverting || this.options.disabled || "static" === this.options.type)return !1;
            this._refreshItems(a);
            b(a.target).parents().each(function () {
                if (b.data(this, f.widgetName + "-item") === f)return d = b(this), !1
            });
            b.data(a.target, f.widgetName + "-item") === f && (d = b(a.target));
            if (!d || this.options.handle && !c && (b(this.options.handle, d).find("*").addBack().each(function () {
                    this ===
                    a.target && (g = !0)
                }), !g))return !1;
            this.currentItem = d;
            this._removeCurrentsFromItems();
            return !0
        }, _mouseStart: function (a, c, d) {
            var g;
            c = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
            b.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
            this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]};
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            c.containment && this._setContainment();
            c.cursor && "auto" !== c.cursor && (g = this.document.find("body"), this.storedCursor = g.css("cursor"), g.css("cursor", c.cursor), this.storedStylesheet = b("<style>*{ cursor: " + c.cursor + " !important; }</style>").appendTo(g));
            c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity));
            c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex));
            this.scrollParent[0] !==
            this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!d)for (d = this.containers.length - 1; 0 <= d; d--)this.containers[d]._trigger("activate", a, this._uiHash(this));
            b.ui.ddmanager && (b.ui.ddmanager.current = this);
            b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = !0;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(a);
            return !0
        }, _mouseDrag: function (a) {
            var c, d, g, f;
            c = this.options;
            d = !1;
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : a.pageY - this.overflowOffset.top <
            c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : a.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (a.pageY - this.document.scrollTop() < c.scrollSensitivity ? d = this.document.scrollTop(this.document.scrollTop() -
                c.scrollSpeed) : this.window.height() - (a.pageY - this.document.scrollTop()) < c.scrollSensitivity && (d = this.document.scrollTop(this.document.scrollTop() + c.scrollSpeed)), a.pageX - this.document.scrollLeft() < c.scrollSensitivity ? d = this.document.scrollLeft(this.document.scrollLeft() - c.scrollSpeed) : this.window.width() - (a.pageX - this.document.scrollLeft()) < c.scrollSensitivity && (d = this.document.scrollLeft(this.document.scrollLeft() + c.scrollSpeed))), !1 !== d && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this,
                a));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (c = this.items.length - 1; 0 <= c; c--)if (d = this.items[c], g = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && g !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== g && !b.contains(this.placeholder[0], g) && ("semi-dynamic" ===
                this.options.type ? !b.contains(this.element[0], g) : 1)) {
                this.direction = 1 === f ? "down" : "up";
                if ("pointer" === this.options.tolerance || this._intersectsWithSides(d))this._rearrange(a, d); else break;
                this._trigger("change", a, this._uiHash());
                break
            }
            this._contactContainers(a);
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return !1
        }, _mouseStop: function (a, c) {
            if (a) {
                b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var d =
                        this, g = this.placeholder.offset(), f = this.options.axis, e = {};
                    f && "x" !== f || (e.left = g.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    f && "y" !== f || (e.top = g.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    b(this.helper).animate(e, parseInt(this.options.revert, 10) || 500, function () {
                        d._clear(a)
                    })
                } else this._clear(a, c);
                return !1
            }
        }, cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null});
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var a = this.containers.length - 1; 0 <= a; a--)this.containers[a]._trigger("deactivate", null, this._uiHash(this)), this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)), this.containers[a].containerCache.over = 0)
            }
            this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !==
            this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem));
            return this
        }, serialize: function (a) {
            var c = this._getItemsAsjQuery(a && a.connected), d = [];
            a = a || {};
            b(c).each(function () {
                var c = (b(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[\-=_](.+)/);
                c && d.push((a.key ||
                    c[1] + "[]") + "=" + (a.key && a.expression ? c[1] : c[2]))
            });
            !d.length && a.key && d.push(a.key + "=");
            return d.join("&")
        }, toArray: function (a) {
            var c = this._getItemsAsjQuery(a && a.connected), d = [];
            a = a || {};
            c.each(function () {
                d.push(b(a.item || this).attr(a.attribute || "id") || "")
            });
            return d
        }, _intersectsWith: function (a) {
            var c = this.positionAbs.left, d = c + this.helperProportions.width, b = this.positionAbs.top, e = b + this.helperProportions.height, k = a.left, h = k + a.width, l = a.top, q = l + a.height, p = this.offset.click.top, n = this.offset.click.left,
                p = "x" === this.options.axis || b + p > l && b + p < q, n = "y" === this.options.axis || c + n > k && c + n < h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? p && n : k < c + this.helperProportions.width / 2 && d - this.helperProportions.width / 2 < h && l < b + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < q
        }, _intersectsWithPointer: function (a) {
            var c = "x" === this.options.axis ||
                this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            c = c && a;
            a = this._getDragVerticalDirection();
            var d = this._getDragHorizontalDirection();
            return c ? this.floating ? d && "right" === d || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        }, _intersectsWithSides: function (a) {
            var c = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = this._isOverAxis(this.positionAbs.left +
                this.offset.click.left, a.left + a.width / 2, a.width);
            var d = this._getDragVerticalDirection(), b = this._getDragHorizontalDirection();
            return this.floating && b ? "right" === b && a || "left" === b && !a : d && ("down" === d && c || "up" === d && !c)
        }, _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down" : "up")
        }, _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right" : "left")
        }, refresh: function (a) {
            this._refreshItems(a);
            this._setHandleClassName();
            this.refreshPositions();
            return this
        }, _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        }, _getItemsAsjQuery: function (a) {
            function c() {
                k.push(this)
            }

            var d, g, e, k = [], h = [], l = this._connectWith();
            if (l && a)for (a = l.length - 1; 0 <= a; a--)for (g = b(l[a], this.document[0]), d = g.length - 1; 0 <= d; d--)(e = b.data(g[d], this.widgetFullName)) && e !== this && !e.options.disabled && h.push([b.isFunction(e.options.items) ? e.options.items.call(e.element) :
                b(e.options.items, e.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), e]);
            h.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = h.length - 1; 0 <= a; a--)h[a][0].each(c);
            return b(k)
        }, _removeCurrentsFromItems: function () {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items,
                function (c) {
                    for (var d = 0; d < a.length; d++)if (a[d] === c.item[0])return !1;
                    return !0
                })
        }, _refreshItems: function (a) {
            this.items = [];
            this.containers = [this];
            var c, d, g, e, k, h = this.items, l = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {item: this.currentItem}) : b(this.options.items, this.element), this]];
            if ((k = this._connectWith()) && this.ready)for (c = k.length - 1; 0 <= c; c--)for (g = b(k[c], this.document[0]), d = g.length - 1; 0 <= d; d--)(e = b.data(g[d], this.widgetFullName)) && e !== this && !e.options.disabled &&
            (l.push([b.isFunction(e.options.items) ? e.options.items.call(e.element[0], a, {item: this.currentItem}) : b(e.options.items, e.element), e]), this.containers.push(e));
            for (c = l.length - 1; 0 <= c; c--)for (a = l[c][1], g = l[c][0], d = 0, k = g.length; d < k; d++)e = b(g[d]), e.data(this.widgetName + "-item", a), h.push({
                item: e,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        }, refreshPositions: function (a) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent =
                this._getParentOffset());
            var c, d, g;
            for (c = this.items.length - 1; 0 <= c; c--)d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (g = this.options.toleranceElement ? b(this.options.toleranceElement, d.item) : d.item, a || (d.width = g.outerWidth(), d.height = g.outerHeight()), g = g.offset(), d.left = g.left, d.top = g.top);
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; 0 <=
            c; c--)g = this.containers[c].element.offset(), this.containers[c].containerCache.left = g.left, this.containers[c].containerCache.top = g.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        }, _createPlaceholder: function (a) {
            a = a || this;
            var c, d = a.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function () {
                    var d = a.currentItem[0].nodeName.toLowerCase(),
                        e = b("<" + d + ">", a.document[0]).addClass(c || a.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    "tbody" === d ? a._createTrPlaceholder(a.currentItem.find("tr").eq(0), b("<tr>", a.document[0]).appendTo(e)) : "tr" === d ? a._createTrPlaceholder(a.currentItem, e) : "img" === d && e.attr("src", a.currentItem.attr("src"));
                    c || e.css("visibility", "hidden");
                    return e
                }, update: function (b, e) {
                    if (!c || d.forcePlaceholderSize)e.height() || e.height(a.currentItem.innerHeight() - parseInt(a.currentItem.css("paddingTop") ||
                            0, 10) - parseInt(a.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(a.currentItem.innerWidth() - parseInt(a.currentItem.css("paddingLeft") || 0, 10) - parseInt(a.currentItem.css("paddingRight") || 0, 10))
                }
            });
            a.placeholder = b(d.placeholder.element.call(a.element, a.currentItem));
            a.currentItem.after(a.placeholder);
            d.placeholder.update(a, a.placeholder)
        }, _createTrPlaceholder: function (a, c) {
            var d = this;
            a.children().each(function () {
                b("<td>&#160;</td>", d.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(c)
            })
        },
        _contactContainers: function (a) {
            var c, d, e, f, k, h, l, q, p = f = null;
            for (c = this.containers.length - 1; 0 <= c; c--)b.contains(this.currentItem[0], this.containers[c].element[0]) || (this._intersectsWith(this.containers[c].containerCache) ? f && b.contains(this.containers[c].element[0], f.element[0]) || (f = this.containers[c], p = c) : this.containers[c].containerCache.over && (this.containers[c]._trigger("out", a, this._uiHash(this)), this.containers[c].containerCache.over = 0));
            if (f)if (1 === this.containers.length)this.containers[p].containerCache.over ||
            (this.containers[p]._trigger("over", a, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                c = 1E4;
                e = null;
                f = (d = f.floating || this._isFloating(this.currentItem)) ? "left" : "top";
                k = d ? "width" : "height";
                q = d ? "clientX" : "clientY";
                for (d = this.items.length - 1; 0 <= d; d--)b.contains(this.containers[p].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (h = this.items[d].item.offset()[f], l = !1, a[q] - h > this.items[d][k] / 2 && (l = !0), Math.abs(a[q] - h) < c && (c = Math.abs(a[q] - h), e = this.items[d],
                    this.direction = l ? "up" : "down"));
                if (e || this.options.dropOnEmpty)this.currentContainer === this.containers[p] ? this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", a, this._uiHash()), this.currentContainer.containerCache.over = 1) : (e ? this._rearrange(a, e, null, !0) : this._rearrange(a, null, this.containers[p].element, !0), this._trigger("change", a, this._uiHash()), this.containers[p]._trigger("change", a, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer,
                    this.placeholder), this.containers[p]._trigger("over", a, this._uiHash(this)), this.containers[p].containerCache.over = 1)
            }
        }, _createHelper: function (a) {
            var c = this.options;
            a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || b("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
            a[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            });
            a[0].style.width && !c.forceHelperSize || a.width(this.currentItem.width());
            a[0].style.height && !c.forceHelperSize || a.height(this.currentItem.height());
            return a
        }, _adjustOffsetFromHelper: function (a) {
            "string" === typeof a && (a = a.split(" "));
            b.isArray(a) && (a = {left: +a[0], top: +a[1] || 0});
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left =
                this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        }, _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie)a = {
                top: 0,
                left: 0
            };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        }, _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left -
                    (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        }, _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        }, _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        }, _setContainment: function () {
            var a, c, d;
            c = this.options;
            "parent" === c.containment && (c.containment = this.helper[0].parentNode);
            if ("document" ===
                c.containment || "window" === c.containment)this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === c.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === c.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            /^(document|window|parent)$/.test(c.containment) || (a = b(c.containment)[0],
                c = b(c.containment).offset(), d = "hidden" !== b(a).css("overflow"), this.containment = [c.left + (parseInt(b(a).css("borderLeftWidth"), 10) || 0) + (parseInt(b(a).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(b(a).css("borderTopWidth"), 10) || 0) + (parseInt(b(a).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(b(a).css("borderLeftWidth"), 10) || 0) - (parseInt(b(a).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
                c.top + (d ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(b(a).css("borderTopWidth"), 10) || 0) - (parseInt(b(a).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        }, _convertPositionTo: function (a, c) {
            c || (c = this.position);
            var d = "absolute" === a ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top +
                this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        }, _generatePosition: function (a) {
            var c, d, e = this.options;
            d = a.pageX;
            c = a.pageY;
            var f = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent :
                this.offsetParent, k = /(html|body)/i.test(f[0].tagName);
            "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left), a.pageY - this.offset.click.top < this.containment[1] && (c = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] &&
            (d = this.containment[2] + this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (c = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((c - this.originalPageY) / e.grid[1]) * e.grid[1], c = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((d - this.originalPageX) / e.grid[0]) * e.grid[0], d = this.containment ?
                d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d));
            return {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : k ? 0 : f.scrollTop()),
                left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : k ? 0 : f.scrollLeft())
            }
        }, _rearrange: function (a,
                                 c, d, b) {
            d ? d[0].appendChild(this.placeholder[0]) : c.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? c.item[0] : c.item[0].nextSibling);
            var e = this.counter = this.counter ? ++this.counter : 1;
            this._delay(function () {
                e === this.counter && this.refreshPositions(!b)
            })
        }, _clear: function (a, c) {
            function d(a, c, d) {
                return function (b) {
                    d._trigger(a, b, c._uiHash(c))
                }
            }

            this.reverting = !1;
            var b, e = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort =
                null;
            if (this.helper[0] === this.currentItem[0]) {
                for (b in this._storedCSS)if ("auto" === this._storedCSS[b] || "static" === this._storedCSS[b])this._storedCSS[b] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && e.push(function (a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] ||
            c || e.push(function (a) {
                this._trigger("update", a, this._uiHash())
            });
            this === this.currentContainer || c || (e.push(function (a) {
                this._trigger("remove", a, this._uiHash())
            }), e.push(function (a) {
                return function (c) {
                    a._trigger("receive", c, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), e.push(function (a) {
                return function (c) {
                    a._trigger("update", c, this._uiHash(this))
                }
            }.call(this, this.currentContainer)));
            for (b = this.containers.length - 1; 0 <= b; b--)c || e.push(d("deactivate", this, this.containers[b])), this.containers[b].containerCache.over &&
            (e.push(d("out", this, this.containers[b])), this.containers[b].containerCache.over = 0);
            this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove());
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
            this.dragging = !1;
            c || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null);
            if (!c) {
                for (b = 0; b < e.length; b++)e[b].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = !1;
            return !this.cancelHelperRemoval
        }, _trigger: function () {
            !1 === b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        }, _uiHash: function (a) {
            var c = a || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || b([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: a ?
                    a.element : null
            }
        }
    });
    b.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var a = {}, c = this.element;
            b.each(["min", "max", "step"], function (d, b) {
                var e = c.attr(b);
                void 0 !== e && e.length && (a[b] = e)
            });
            return a
        },
        _events: {
            keydown: function (a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (a) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(),
                    this._refresh(), this.previous !== this.element.val() && this._trigger("change", a))
            }, mousewheel: function (a, c) {
                if (c) {
                    if (!this.spinning && !this._start(a))return !1;
                    this._spin((0 < c ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(a)
                    }, 100);
                    a.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (a) {
                function c() {
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function () {
                        this.previous =
                            d
                    }))
                }

                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                a.preventDefault();
                c.call(this);
                this.cancelBlur = !0;
                this._delay(function () {
                    delete this.cancelBlur;
                    c.call(this)
                });
                !1 !== this._start(a) && this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (a) {
                if (b(a.currentTarget).hasClass("ui-state-active")) {
                    if (!1 === this._start(a))return !1;
                    this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ?
                        1 : -1, a)
                }
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(.5 * a.height()) && 0 < a.height() && a.height(a.height());
            this.options.disabled && this.disable()
        },
        _keydown: function (a) {
            var c =
                this.options, d = b.ui.keyCode;
            switch (a.keyCode) {
                case d.UP:
                    return this._repeat(null, 1, a), !0;
                case d.DOWN:
                    return this._repeat(null, -1, a), !0;
                case d.PAGE_UP:
                    return this._repeat(null, c.page, a), !0;
                case d.PAGE_DOWN:
                    return this._repeat(null, -c.page, a), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
                this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function (a) {
            if (!this.spinning && !1 === this._trigger("start", a))return !1;
            this.counter || (this.counter = 1);
            return this.spinning = !0
        },
        _repeat: function (a, c, d) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                this._repeat(40, c, d)
            }, a);
            this._spin(c * this.options.step, d)
        },
        _spin: function (a, c) {
            var d = this.value() || 0;
            this.counter || (this.counter = 1);
            d = this._adjustValue(d + a * this._increment(this.counter));
            this.spinning && !1 === this._trigger("spin",
                c, {value: d}) || (this._value(d), this.counter++)
        },
        _increment: function (a) {
            var c = this.options.incremental;
            return c ? b.isFunction(c) ? c(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function () {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function (a) {
            a = a.toString();
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _adjustValue: function (a) {
            var c, d = this.options;
            c = null !== d.min ? d.min : 0;
            a = c + Math.round((a -
                    c) / d.step) * d.step;
            a = parseFloat(a.toFixed(this._precision()));
            return null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
        },
        _stop: function (a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function (a, c) {
            if ("culture" === a || "numberFormat" === a) {
                var d = this._parse(this.element.val());
                this.options[a] = c;
                this.element.val(this._format(d))
            } else"max" !== a && "min" !== a && "step" !== a || "string" !== typeof c || (c = this._parse(c)),
            "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(c.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(c.down)), this._super(a, c), "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!c), this.element.prop("disabled", !!c), this.buttons.button(c ? "disable" : "enable"))
        },
        _setOptions: e(function (a) {
            this._super(a)
        }),
        _parse: function (a) {
            "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a,
                10, this.options.culture) : +a);
            return "" === a || isNaN(a) ? null : a
        },
        _format: function (a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function (a, c) {
            var d;
            "" !== a && (d = this._parse(a),
            null !== d && (c || (d = this._adjustValue(d)), a = this._format(d)));
            this.element.val(a);
            this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (a) {
            this._stepUp(a)
        }),
        _stepUp: function (a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (a) {
            this._stepDown(a)
        }),
        _stepDown: function (a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: e(function (a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function (a) {
            if (!arguments.length)return this._parse(this.element.val());
            e(this._value).call(this, a)
        },
        widget: function () {
            return this.uiSpinner
        }
    });
    b.widget("ui.tabs", {
        version: "1.11.4", delay: 300, options: {
            active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null,
            activate: null, beforeActivate: null, beforeLoad: null, load: null
        }, _isLocal: function () {
            var a = /#.*$/;
            return function (c) {
                var d, b;
                c = c.cloneNode(!1);
                d = c.href.replace(a, "");
                b = location.href.replace(a, "");
                try {
                    d = decodeURIComponent(d)
                } catch (e) {
                }
                try {
                    b = decodeURIComponent(b)
                } catch (e) {
                }
                return 1 < c.hash.length && d === b
            }
        }(), _create: function () {
            var a = this, c = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible);
            this._processTabs();
            c.active = this._initialActive();
            b.isArray(c.disabled) && (c.disabled = b.unique(c.disabled.concat(b.map(this.tabs.filter(".ui-state-disabled"), function (c) {
                return a.tabs.index(c)
            }))).sort());
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : b();
            this._refresh();
            this.active.length && this.load(c.active)
        }, _initialActive: function () {
            var a = this.options.active, c = this.options.collapsible, d = location.hash.substring(1);
            null === a && (d && this.tabs.each(function (c, e) {
                if (b(e).attr("aria-controls") ===
                    d)return a = c, !1
            }), null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null === a || -1 === a) && (a = this.tabs.length ? 0 : !1);
            !1 !== a && (a = this.tabs.index(this.tabs.eq(a)), -1 === a && (a = c ? !1 : 0));
            !c && !1 === a && this.anchors.length && (a = 0);
            return a
        }, _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : b()}
        }, _tabKeydown: function (a) {
            var c = b(this.document[0].activeElement).closest("li"), d = this.tabs.index(c), e = !0;
            if (!this._handlePageNav(a)) {
                switch (a.keyCode) {
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                        d++;
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.LEFT:
                        e = !1;
                        d--;
                        break;
                    case b.ui.keyCode.END:
                        d = this.anchors.length - 1;
                        break;
                    case b.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case b.ui.keyCode.SPACE:
                        a.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(d);
                        return;
                    case b.ui.keyCode.ENTER:
                        a.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(d === this.options.active ? !1 : d);
                        return;
                    default:
                        return
                }
                a.preventDefault();
                clearTimeout(this.activating);
                d = this._focusNextTab(d, e);
                a.ctrlKey || a.metaKey || (c.attr("aria-selected",
                    "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", d)
                }, this.delay))
            }
        }, _panelKeydown: function (a) {
            !this._handlePageNav(a) && a.ctrlKey && a.keyCode === b.ui.keyCode.UP && (a.preventDefault(), this.active.focus())
        }, _handlePageNav: function (a) {
            if (a.altKey && a.keyCode === b.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (a.altKey && a.keyCode === b.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active +
                1, !0)), !0
        }, _findNextTab: function (a, c) {
            function d() {
                a > e && (a = 0);
                0 > a && (a = e);
                return a
            }

            for (var e = this.tabs.length - 1; -1 !== b.inArray(d(), this.options.disabled);)a = c ? a + 1 : a - 1;
            return a
        }, _focusNextTab: function (a, c) {
            a = this._findNextTab(a, c);
            this.tabs.eq(a).focus();
            return a
        }, _setOption: function (a, c) {
            "active" === a ? this._activate(c) : "disabled" === a ? this._setupDisabled(c) : (this._super(a, c), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", c), c || !1 !== this.options.active || this._activate(0)), "event" ===
            a && this._setupEvents(c), "heightStyle" === a && this._setupHeightStyle(c))
        }, _sanitizeSelector: function (a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        }, refresh: function () {
            var a = this.options, c = this.tablist.children(":has(a[href])");
            a.disabled = b.map(c.filter(".ui-state-disabled"), function (a) {
                return c.index(a)
            });
            this._processTabs();
            !1 !== a.active && this.anchors.length ? this.active.length && !b.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1, this.active =
                b()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) : a.active = this.tabs.index(this.active) : (a.active = !1, this.active = b());
            this._refresh()
        }, _refresh: function () {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1});
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"});
            this.active.length ?
                (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        }, _processTabs: function () {
            var a = this, c = this.tabs, d = this.anchors, e = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (a) {
                b(this).is(".ui-state-disabled") &&
                a.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                b(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function () {
                return b("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1});
            this.panels = b();
            this.anchors.each(function (c, d) {
                var e, g, k = b(d).uniqueId().attr("id"), h = b(d).closest("li"),
                    l = h.attr("aria-controls");
                a._isLocal(d) ? (e = d.hash, g = e.substring(1), e = a.element.find(a._sanitizeSelector(e))) : (g = h.attr("aria-controls") || b({}).uniqueId()[0].id, e = a.element.find("#" + g), e.length || (e = a._createPanel(g), e.insertAfter(a.panels[c - 1] || a.tablist)), e.attr("aria-live", "polite"));
                e.length && (a.panels = a.panels.add(e));
                l && h.data("ui-tabs-aria-controls", l);
                h.attr({"aria-controls": g, "aria-labelledby": k});
                e.attr("aria-labelledby", k)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role",
                "tabpanel");
            c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
        }, _getList: function () {
            return this.tablist || this.element.find("ol,ul").eq(0)
        }, _createPanel: function (a) {
            return b("<div>").attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }, _setupDisabled: function (a) {
            b.isArray(a) && (a.length ? a.length === this.anchors.length && (a = !0) : a = !1);
            for (var c = 0, d; d = this.tabs[c]; c++)!0 === a || -1 !== b.inArray(c, a) ? b(d).addClass("ui-state-disabled").attr("aria-disabled",
                "true") : b(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = a
        }, _setupEvents: function (a) {
            var c = {};
            a && b.each(a.split(" "), function (a, b) {
                c[b] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function (a) {
                    a.preventDefault()
                }
            });
            this._on(this.anchors, c);
            this._on(this.tabs, {keydown: "_tabKeydown"});
            this._on(this.panels, {keydown: "_panelKeydown"});
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        }, _setupHeightStyle: function (a) {
            var c,
                d = this.element.parent();
            "fill" === a ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var a = b(this), d = a.css("position");
                "absolute" !== d && "fixed" !== d && (c -= a.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                c -= b(this).outerHeight(!0)
            }), this.panels.each(function () {
                b(this).height(Math.max(0, c - b(this).innerHeight() + b(this).height()))
            }).css("overflow", "auto")) : "auto" === a && (c = 0, this.panels.each(function () {
                c = Math.max(c,
                    b(this).height("").height())
            }).height(c))
        }, _eventHandler: function (a) {
            var c = this.options, d = this.active, e = b(a.currentTarget).closest("li"), f = e[0] === d[0], k = f && c.collapsible, h = k ? b() : this._getPanelForTab(e), l = d.length ? this._getPanelForTab(d) : b(), d = {
                oldTab: d,
                oldPanel: l,
                newTab: k ? b() : e,
                newPanel: h
            };
            a.preventDefault();
            e.hasClass("ui-state-disabled") || e.hasClass("ui-tabs-loading") || this.running || f && !c.collapsible || !1 === this._trigger("beforeActivate", a, d) || (c.active = k ? !1 : this.tabs.index(e), this.active = f ? b() :
                e, this.xhr && this.xhr.abort(), l.length || h.length || b.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(e), a), this._toggle(a, d))
        }, _toggle: function (a, c) {
            function d() {
                f.running = !1;
                f._trigger("activate", a, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                k.length && f.options.show ? f._show(k, f.options.show, d) : (k.show(), d())
            }

            var f = this, k = c.newPanel, h = c.oldPanel;
            this.running = !0;
            h.length && this.options.hide ? this._hide(h, this.options.hide,
                function () {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e());
            h.attr("aria-hidden", "true");
            c.oldTab.attr({"aria-selected": "false", "aria-expanded": "false"});
            k.length && h.length ? c.oldTab.attr("tabIndex", -1) : k.length && this.tabs.filter(function () {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            k.attr("aria-hidden", "false");
            c.newTab.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _activate: function (a) {
            a = this._findActive(a);
            a[0] !== this.active[0] && (a.length || (a = this.active), a = a.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        }, _findActive: function (a) {
            return !1 === a ? b() : this.tabs.eq(a)
        }, _getIndex: function (a) {
            "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']")));
            return a
        }, _destroy: function () {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tablist.unbind(this.eventNamespace);
            this.tabs.add(this.panels).each(function () {
                b.data(this, "ui-tabs-destroy") ? b(this).remove() : b(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function () {
                var a = b(this), c = a.data("ui-tabs-aria-controls");
                c ? a.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        }, enable: function (a) {
            var c = this.options.disabled;
            !1 !== c && (void 0 === a ? c = !1 : (a = this._getIndex(a), c = b.isArray(c) ? b.map(c, function (c) {
                return c !== a ? c : null
            }) : b.map(this.tabs, function (c, b) {
                return b !== a ? b : null
            })), this._setupDisabled(c))
        }, disable: function (a) {
            var c =
                this.options.disabled;
            if (!0 !== c) {
                if (void 0 === a)c = !0; else {
                    a = this._getIndex(a);
                    if (-1 !== b.inArray(a, c))return;
                    c = b.isArray(c) ? b.merge([a], c).sort() : [a]
                }
                this._setupDisabled(c)
            }
        }, load: function (a, c) {
            a = this._getIndex(a);
            var d = this, e = this.tabs.eq(a), f = e.find(".ui-tabs-anchor"), k = this._getPanelForTab(e), h = {
                tab: e,
                panel: k
            }, l = function (a, c) {
                "abort" === c && d.panels.stop(!1, !0);
                e.removeClass("ui-tabs-loading");
                k.removeAttr("aria-busy");
                a === d.xhr && delete d.xhr
            };
            this._isLocal(f[0]) || (this.xhr = b.ajax(this._ajaxSettings(f,
                c, h))) && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), k.attr("aria-busy", "true"), this.xhr.done(function (a, b, e) {
                setTimeout(function () {
                    k.html(a);
                    d._trigger("load", c, h);
                    l(e, b)
                }, 1)
            }).fail(function (a, c) {
                setTimeout(function () {
                    l(a, c)
                }, 1)
            }))
        }, _ajaxSettings: function (a, c, d) {
            var e = this;
            return {
                url: a.attr("href"), beforeSend: function (a, k) {
                    return e._trigger("beforeLoad", c, b.extend({jqXHR: a, ajaxSettings: k}, d))
                }
            }
        }, _getPanelForTab: function (a) {
            a = b(a).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" +
                a))
        }
    });
    b.widget("ui.tooltip", {
        version: "1.11.4", options: {
            content: function () {
                var a = b(this).attr("title") || "";
                return b("<a>").text(a).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (a, c) {
            var d = (a.attr("aria-describedby") || "").split(/\s+/);
            d.push(c);
            a.data("ui-tooltip-id", c).attr("aria-describedby", b.trim(d.join(" ")))
        }, _removeDescribedBy: function (a) {
            var c =
                a.data("ui-tooltip-id"), d = (a.attr("aria-describedby") || "").split(/\s+/), c = b.inArray(c, d);
            -1 !== c && d.splice(c, 1);
            a.removeData("ui-tooltip-id");
            (d = b.trim(d.join(" "))) ? a.attr("aria-describedby", d) : a.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({mouseover: "open", focusin: "open"});
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable();
            this.liveRegion = b("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function (a, c) {
            var d = this;
            "disabled" === a ? (this[c ? "_disable" : "_enable"](), this.options[a] = c) : (this._super(a, c), "content" === a && b.each(this.tooltips, function (a, c) {
                d._updateContent(c.element)
            }))
        }, _disable: function () {
            var a = this;
            b.each(this.tooltips, function (c, d) {
                var e = b.Event("blur");
                e.target = e.currentTarget = d.element[0];
                a.close(e, !0)
            });
            this.element.find(this.options.items).addBack().each(function () {
                var a = b(this);
                a.is("[title]") && a.data("ui-tooltip-title", a.attr("title")).removeAttr("title")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var a = b(this);
                a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title"))
            })
        }, open: function (a) {
            var c = this, d = b(a ? a.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), a && "mouseover" === a.type && d.parents().each(function () {
                var a = b(this), d;
                a.data("ui-tooltip-open") && (d = b.Event("blur"), d.target =
                    d.currentTarget = this, c.close(d, !0));
                a.attr("title") && (a.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: a.attr("title")
                }, a.attr("title", ""))
            }), this._registerCloseHandlers(a, d), this._updateContent(d, a))
        }, _updateContent: function (a, c) {
            var d;
            d = this.options.content;
            var b = this, e = c ? c.type : null;
            if ("string" === typeof d)return this._open(c, a, d);
            (d = d.call(a[0], function (d) {
                b._delay(function () {
                    a.data("ui-tooltip-open") && (c && (c.type = e), this._open(c, a, d))
                })
            })) && this._open(c, a, d)
        }, _open: function (a, c, d) {
            function e(a) {
                l.of =
                    a;
                k.is(":hidden") || k.position(l)
            }

            var f, k, h, l = b.extend({}, this.options.position);
            d && ((f = this._find(c)) ? f.tooltip.find(".ui-tooltip-content").html(d) : (c.is("[title]") && (a && "mouseover" === a.type ? c.attr("title", "") : c.removeAttr("title")), f = this._tooltip(c), k = f.tooltip, this._addDescribedBy(c, k.attr("id")), k.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), d.clone && (d = d.clone(), d.removeAttr("id").find("[id]").removeAttr("id")), b("<div>").html(d).appendTo(this.liveRegion), this.options.track &&
            a && /^mouse/.test(a.type) ? (this._on(this.document, {mousemove: e}), e(a)) : k.position(b.extend({of: c}, this.options.position)), k.hide(), this._show(k, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                k.is(":visible") && (e(l.of), clearInterval(h))
            }, b.fx.interval)), this._trigger("open", a, {tooltip: k})))
        }, _registerCloseHandlers: function (a, c) {
            var d = {
                keyup: function (a) {
                    a.keyCode === b.ui.keyCode.ESCAPE && (a = b.Event(a), a.currentTarget = c[0], this.close(a, !0))
                }
            };
            c[0] !==
            this.element[0] && (d.remove = function () {
                this._removeTooltip(this._find(c).tooltip)
            });
            a && "mouseover" !== a.type || (d.mouseleave = "close");
            a && "focusin" !== a.type || (d.focusout = "close");
            this._on(!0, c, d)
        }, close: function (a) {
            var c, d = this, e = b(a ? a.currentTarget : this.element), f = this._find(e);
            f ? (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide,
                function () {
                    d._removeTooltip(b(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), a && "mouseleave" === a.type && b.each(this.parents, function (a, c) {
                b(c.element).attr("title", c.title);
                delete d.parents[a]
            }), f.closing = !0, this._trigger("close", a, {tooltip: c}), f.hiding || (f.closing = !1))) : e.removeData("ui-tooltip-open")
        }, _tooltip: function (a) {
            var c = b("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                (this.options.tooltipClass || "")), d = c.uniqueId().attr("id");
            b("<div>").addClass("ui-tooltip-content").appendTo(c);
            c.appendTo(this.document[0].body);
            return this.tooltips[d] = {element: a, tooltip: c}
        }, _find: function (a) {
            return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null
        }, _removeTooltip: function (a) {
            a.remove();
            delete this.tooltips[a.attr("id")]
        }, _destroy: function () {
            var a = this;
            b.each(this.tooltips, function (c, d) {
                var e = b.Event("blur"), f = d.element;
                e.target = e.currentTarget = f[0];
                a.close(e, !0);
                b("#" + c).remove();
                f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    })
});
!function (b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (w) {
        b(w)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = b(require("jquery")) : b(window.jQuery)
}(function (b) {
    function w(b) {
        void 0 === b && (b = window.navigator.userAgent);
        b = b.toLowerCase();
        var t = /(edge)\/([\w.]+)/.exec(b) || /(opr)[\/]([\w.]+)/.exec(b) || /(chrome)[ \/]([\w.]+)/.exec(b) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(b) ||
            /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 <= b.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [], p = /(ipad)/.exec(b) || /(ipod)/.exec(b) || /(iphone)/.exec(b) || /(kindle)/.exec(b) || /(silk)/.exec(b) || /(android)/.exec(b) || /(windows phone)/.exec(b) || /(win)/.exec(b) || /(mac)/.exec(b) || /(linux)/.exec(b) || /(cros)/.exec(b) || /(playbook)/.exec(b) || /(bb)/.exec(b) || /(blackberry)/.exec(b) ||
            [];
        b = {};
        var u = t[5] || t[3] || t[1] || "", h = t[2] || t[4] || "0", t = t[4] || t[2] || "0", p = p[0] || "";
        if (u && (b[u] = !0, b.version = h, b.versionNumber = parseInt(t, 10)), p && (b[p] = !0), (b.android || b.bb || b.blackberry || b.ipad || b.iphone || b.ipod || b.kindle || b.playbook || b.silk || b["windows phone"]) && (b.mobile = !0), (b.cros || b.mac || b.linux || b.win) && (b.desktop = !0), (b.chrome || b.opr || b.safari) && (b.webkit = !0), b.rv || b.edge)u = "msie", b.msie = !0;
        b.safari && b.blackberry && (u = "blackberry", b.blackberry = !0);
        b.safari && b.playbook && (u = "playbook", b.playbook = !0);
        b.bb && (u = "blackberry", b.blackberry = !0);
        b.opr && (u = "opera", b.opera = !0);
        b.safari && b.android && (u = "android", b.android = !0);
        b.safari && b.kindle && (u = "kindle", b.kindle = !0);
        b.safari && b.silk && (u = "silk", b.silk = !0);
        return b.name = u, b.platform = p, b
    }

    return window.jQBrowser = w(window.navigator.userAgent), window.jQBrowser.uaMatch = w, b && (b.browser = window.jQBrowser), window.jQBrowser
});
(function (b) {
    "$:nomunge";
    var w, n, t = 1, p, u = this, h, l = u.postMessage && !b.browser.opera;
    b.postMessage = function (e, k, h) {
        k && (e = "string" === typeof e ? e : b.param(e), h = h || parent, l ? h.postMessage(e, k.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : k && (h.location = k.replace(/#.*$/, "") + "#" + +new Date + t++ + "&" + e))
    };
    b.receiveMessage = h = function (e, k, q) {
        if (l)if (e && (p && h(), p = function (h) {
                if ("string" === typeof k && h.origin !== k || b.isFunction(k) && !1 === k(h.origin))return !1;
                e(h)
            }), u.addEventListener)u[e ? "addEventListener" : "removeEventListener"]("message",
            p, !1); else u[e ? "attachEvent" : "detachEvent"]("onmessage", p); else w && clearInterval(w), w = null, e && (w = setInterval(function () {
            var b = document.location.hash, k = /^#?\d+&/;
            b !== n && k.test(b) && (n = b, e({data: b.replace(k, "")}))
        }, "number" === typeof k ? k : "number" === typeof q ? q : 100))
    }
})(jQuery);
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "undefined" !== typeof module && module.exports ? module.exports = b(require("jquery")) : b(jQuery)
})(function (b) {
    function w(p) {
        return !p.nodeName || -1 !== b.inArray(p.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function n(p) {
        return b.isFunction(p) || b.isPlainObject(p) ? p : {top: p, left: p}
    }

    var t = b.scrollTo = function (p, u, h) {
        return b(window).scrollTo(p, u, h)
    };
    t.defaults = {axis: "xy", duration: 0, limit: !0};
    b.fn.scrollTo = function (p, u, h) {
        "object" === typeof u && (h = u, u = 0);
        "function" === typeof h && (h = {onAfter: h});
        "max" === p && (p = 9E9);
        h = b.extend({}, t.defaults, h);
        u = u || h.duration;
        var l = h.queue && 1 < h.axis.length;
        l && (u /= 2);
        h.offset = n(h.offset);
        h.over = n(h.over);
        return this.each(function () {
            function e(a) {
                var c = b.extend({}, h, {
                    queue: !0, duration: u, complete: a && function () {
                        a.call(q, v, h)
                    }
                });
                z.animate(y, c)
            }

            if (null !== p) {
                var k = w(this), q = k ? this.contentWindow || window : this, z = b(q), v = p, y = {}, J;
                switch (typeof v) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(v)) {
                            v =
                                n(v);
                            break
                        }
                        v = k ? b(v) : b(v, q);
                        if (!v.length)return;
                    case "object":
                        if (v.is || v.style)J = (v = b(v)).offset()
                }
                var B = b.isFunction(h.offset) && h.offset(q, v) || h.offset;
                b.each(h.axis.split(""), function (a, c) {
                    var d = "x" === c ? "Left" : "Top", b = d.toLowerCase(), f = "scroll" + d, p = z[f](), u = t.max(q, c);
                    J ? (y[f] = J[b] + (k ? 0 : p - z.offset()[b]), h.margin && (y[f] -= parseInt(v.css("margin" + d), 10) || 0, y[f] -= parseInt(v.css("border" + d + "Width"), 10) || 0), y[f] += B[b] || 0, h.over[b] && (y[f] += v["x" === c ? "width" : "height"]() * h.over[b])) : (d = v[b], y[f] = d.slice &&
                    "%" === d.slice(-1) ? parseFloat(d) / 100 * u : d);
                    h.limit && /^\d+$/.test(y[f]) && (y[f] = 0 >= y[f] ? 0 : Math.min(y[f], u));
                    !a && 1 < h.axis.length && (p === y[f] ? y = {} : l && (e(h.onAfterFirst), y = {}))
                });
                e(h.onAfter)
            }
        })
    };
    t.max = function (p, u) {
        var h = "x" === u ? "Width" : "Height", l = "scroll" + h;
        if (!w(p))return p[l] - b(p)[h.toLowerCase()]();
        var h = "client" + h, e = p.ownerDocument || p.document, k = e.documentElement, e = e.body;
        return Math.max(k[l], e[l]) - Math.min(k[h], e[h])
    };
    b.Tween.propHooks.scrollLeft = b.Tween.propHooks.scrollTop = {
        get: function (p) {
            return b(p.elem)[p.prop]()
        },
        set: function (p) {
            var u = this.get(p);
            if (p.options.interrupt && p._last && p._last !== u)return b(p.elem).stop();
            var h = Math.round(p.now);
            u !== h && (b(p.elem)[p.prop](h), p._last = this.get(p))
        }
    };
    return t
});
!function (b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : jQuery)
}(function (b) {
    var w = function () {
        if (b && b.fn && b.fn.select2 && b.fn.select2.amd)var n = b.fn.select2.amd;
        return function () {
            if (!n || !n.requirejs) {
                n ? u = n : n = {};
                var b, u, h;
                !function (l) {
                    function e(a, c) {
                        var d, b, e, f, g, k, h, l, q, p = c && c.split("/"), n = r.map, z = n && n["*"] || {};
                        if (a && "." === a.charAt(0))if (c) {
                            a = a.split("/");
                            g = a.length - 1;
                            r.nodeIdCompat && R.test(a[g]) && (a[g] = a[g].replace(R, ""));
                            a = p.slice(0, p.length -
                                1).concat(a);
                            for (g = 0; g < a.length; g += 1)if (d = a[g], "." === d)a.splice(g, 1), --g; else if (".." === d) {
                                if (1 === g && (".." === a[2] || ".." === a[0]))break;
                                0 < g && (a.splice(g - 1, 2), g -= 2)
                            }
                            a = a.join("/")
                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                        if ((p || z) && n) {
                            d = a.split("/");
                            for (g = d.length; 0 < g; --g) {
                                if (b = d.slice(0, g).join("/"), p)for (q = p.length; 0 < q; --q)if (e = n[p.slice(0, q).join("/")], e && (e = e[b])) {
                                    f = e;
                                    k = g;
                                    break
                                }
                                if (f)break;
                                !h && z && z[b] && (h = z[b], l = g)
                            }
                            !f && h && (f = h, k = l);
                            f && (d.splice(0, k, f), a = d.join("/"))
                        }
                        return a
                    }

                    function k(c, d) {
                        return function () {
                            var b =
                                L.call(arguments, 0);
                            return "string" != typeof b[0] && 1 === b.length && b.push(null), a.apply(l, b.concat([c, d]))
                        }
                    }

                    function q(a) {
                        return function (c) {
                            return e(c, a)
                        }
                    }

                    function n(a) {
                        return function (c) {
                            g[a] = c
                        }
                    }

                    function v(a) {
                        if (E.call(f, a)) {
                            var c = f[a];
                            delete f[a];
                            w[a] = !0;
                            B.apply(l, c)
                        }
                        if (!E.call(g, a) && !E.call(w, a))throw Error("No " + a);
                        return g[a]
                    }

                    function t(a) {
                        var c, d = a ? a.indexOf("!") : -1;
                        return -1 < d && (c = a.substring(0, d), a = a.substring(d + 1, a.length)), [c, a]
                    }

                    function J(a) {
                        return function () {
                            return r && r.config && r.config[a] ||
                                {}
                        }
                    }

                    var B, a, c, d, g = {}, f = {}, r = {}, w = {}, E = Object.prototype.hasOwnProperty, L = [].slice, R = /\.js$/;
                    c = function (a, c) {
                        var d, b = t(a), f = b[0];
                        return a = b[1], f && (f = e(f, c), d = v(f)), f ? a = d && d.normalize ? d.normalize(a, q(c)) : e(a, c) : (a = e(a, c), b = t(a), f = b[0], a = b[1], f && (d = v(f))), {
                            f: f ? f + "!" + a : a,
                            n: a,
                            pr: f,
                            p: d
                        }
                    };
                    d = {
                        require: function (a) {
                            return k(a)
                        }, exports: function (a) {
                            var c = g[a];
                            return "undefined" != typeof c ? c : g[a] = {}
                        }, module: function (a) {
                            return {id: a, uri: "", exports: g[a], config: J(a)}
                        }
                    };
                    B = function (a, b, e, h) {
                        var q, p, u, r, t, y = [];
                        r = typeof e;
                        if (h = h || a, "undefined" === r || "function" === r) {
                            b = !b.length && e.length ? ["require", "exports", "module"] : b;
                            for (r = 0; r < b.length; r += 1)if (u = c(b[r], h), p = u.f, "require" === p)y[r] = d.require(a); else if ("exports" === p)y[r] = d.exports(a), t = !0; else if ("module" === p)q = y[r] = d.module(a); else if (E.call(g, p) || E.call(f, p) || E.call(w, p))y[r] = v(p); else {
                                if (!u.p)throw Error(a + " missing " + p);
                                u.p.load(u.n, k(h, !0), n(p), {});
                                y[r] = g[p]
                            }
                            b = e ? e.apply(g[a], y) : void 0;
                            a && (q && q.exports !== l && q.exports !== g[a] ? g[a] = q.exports : b === l && t || (g[a] = b))
                        } else a &&
                        (g[a] = e)
                    };
                    b = u = a = function (b, e, f, g, k) {
                        if ("string" == typeof b)return d[b] ? d[b](e) : v(c(b, e).f);
                        if (!b.splice) {
                            if (r = b, r.deps && a(r.deps, r.callback), !e)return;
                            e.splice ? (b = e, e = f, f = null) : b = l
                        }
                        return e = e || function () {
                            }, "function" == typeof f && (f = g, g = k), g ? B(l, b, e, f) : setTimeout(function () {
                            B(l, b, e, f)
                        }, 4), a
                    };
                    a.config = function (c) {
                        return a(c)
                    };
                    b._defined = g;
                    h = function (a, c, d) {
                        if ("string" != typeof a)throw Error("See almond README: incorrect module build, no module name");
                        c.splice || (d = c, c = []);
                        E.call(g, a) || E.call(f, a) || (f[a] =
                            [a, c, d])
                    };
                    h.amd = {jQuery: !0}
                }();
                n.requirejs = b;
                n.require = u;
                n.define = h
            }
        }(), n.define("almond", function () {
        }), n.define("jquery", [], function () {
            var p = b || $;
            return null == p && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your webapp page."), p
        }), n.define("select2/utils", ["jquery"], function (b) {
            function n(b) {
                b = b.prototype;
                var k = [], h;
                for (h in b)"function" == typeof b[h] && "constructor" !== h && k.push(h);
                return k
            }

            var h = {
                Extend: function (b, k) {
                    function h() {
                        this.constructor = b
                    }

                    var l = {}.hasOwnProperty, p;
                    for (p in k)l.call(k, p) && (b[p] = k[p]);
                    return h.prototype = k.prototype, b.prototype = new h, b.__super__ = k.prototype, b
                }, Decorate: function (b, k) {
                    function h() {
                        var l = Array.prototype.unshift, a = b.prototype.constructor;
                        0 < k.prototype.constructor.length && (l.call(arguments, b.prototype.constructor), a = k.prototype.constructor);
                        a.apply(this, arguments)
                    }

                    var l = n(k), p = n(b);
                    k.displayName = b.displayName;
                    h.prototype = new function () {
                        this.constructor =
                            h
                    };
                    for (var t = 0; t < p.length; t++) {
                        var J = p[t];
                        h.prototype[J] = b.prototype[J]
                    }
                    p = function (b) {
                        var a = function () {
                        };
                        b in h.prototype && (a = h.prototype[b]);
                        var c = k.prototype[b];
                        return function () {
                            return Array.prototype.unshift.call(arguments, a), c.apply(this, arguments)
                        }
                    };
                    for (t = 0; t < l.length; t++)J = l[t], h.prototype[J] = p(J);
                    return h
                }
            }, l = function () {
                this.listeners = {}
            };
            return l.prototype.on = function (b, k) {
                this.listeners = this.listeners || {};
                b in this.listeners ? this.listeners[b].push(k) : this.listeners[b] = [k]
            }, l.prototype.trigger =
                function (b) {
                    var k = Array.prototype.slice;
                    this.listeners = this.listeners || {};
                    b in this.listeners && this.invoke(this.listeners[b], k.call(arguments, 1));
                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, l.prototype.invoke = function (b, k) {
                for (var h = 0, l = b.length; l > h; h++)b[h].apply(this, k)
            }, h.Observable = l, h.generateChars = function (b) {
                for (var k = "", h = 0; b > h; h++)k += Math.floor(36 * Math.random()).toString(36);
                return k
            }, h.bind = function (b, k) {
                return function () {
                    b.apply(k, arguments)
                }
            }, h._convertData = function (b) {
                for (var k in b) {
                    var h =
                        k.split("-"), l = b;
                    if (1 !== h.length) {
                        for (var p = 0; p < h.length; p++) {
                            var n = h[p], n = n.substring(0, 1).toLowerCase() + n.substring(1);
                            n in l || (l[n] = {});
                            p == h.length - 1 && (l[n] = b[k]);
                            l = l[n]
                        }
                        delete b[k]
                    }
                }
                return b
            }, h.hasScroll = function (e, k) {
                var h = b(k), l = k.style.overflowX, n = k.style.overflowY;
                return l !== n || "hidden" !== n && "visible" !== n ? "scroll" === l || "scroll" === n ? !0 : h.innerHeight() < k.scrollHeight || h.innerWidth() < k.scrollWidth : !1
            }, h.escapeMarkup = function (b) {
                var k = {
                    "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
                    "'": "&#39;", "/": "&#47;"
                };
                return "string" != typeof b ? b : String(b).replace(/[&<>"'\/\\]/g, function (b) {
                    return k[b]
                })
            }, h.appendMany = function (e, k) {
                if ("1.7" === b.fn.jquery.substr(0, 3)) {
                    var h = b();
                    b.map(k, function (b) {
                        h = h.add(b)
                    });
                    k = h
                }
                e.append(k)
            }, h
        }), n.define("select2/results", ["jquery", "./utils"], function (b, n) {
            function h(b, e, k) {
                this.$element = b;
                this.data = k;
                this.options = e;
                h.__super__.constructor.call(this)
            }

            return n.Extend(h, n.Observable), h.prototype.render = function () {
                var h = b('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && h.attr("aria-multiselectable", "true"), this.$results = h, h
            }, h.prototype.clear = function () {
                this.$results.empty()
            }, h.prototype.displayMessage = function (h) {
                var e = this.options.get("escapeMarkup");
                this.clear();
                this.hideLoading();
                var k = b('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), q = this.options.get("translations").get(h.message);
                k.append(e(q(h.args)));
                k[0].className += " select2-results__message";
                this.$results.append(k)
            }, h.prototype.hideMessages =
                function () {
                    this.$results.find(".select2-results__message").remove()
                }, h.prototype.append = function (b) {
                this.hideLoading();
                var e = [];
                if (null == b.results || 0 === b.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                b.results = this.sort(b.results);
                for (var k = 0; k < b.results.length; k++) {
                    var h = this.option(b.results[k]);
                    e.push(h)
                }
                this.$results.append(e)
            }, h.prototype.position = function (b, e) {
                e.find(".select2-results").append(b)
            }, h.prototype.sort = function (b) {
                return this.options.get("sorter")(b)
            },
                h.prototype.setClasses = function () {
                    var h = this;
                    this.data.current(function (e) {
                        var k = b.map(e, function (b) {
                            return b.id.toString()
                        });
                        e = h.$results.find(".select2-results__option[aria-selected]");
                        e.each(function () {
                            var e = b(this), h = b.data(this, "data"), l = "" + h.id;
                            null != h.element && h.element.selected || null == h.element && -1 < b.inArray(l, k) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                        });
                        var q = e.filter("[aria-selected=true]");
                        0 < q.length ? q.first().trigger("mouseenter") : e.first().trigger("mouseenter")
                    })
                },
                h.prototype.showLoading = function (b) {
                    this.hideLoading();
                    b = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(b)};
                    b = this.option(b);
                    b.className += " loading-results";
                    this.$results.prepend(b)
                }, h.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, h.prototype.option = function (h) {
                var e = document.createElement("li");
                e.className = "select2-results__option";
                var k = {role: "treeitem", "aria-selected": "false"};
                h.disabled && (delete k["aria-selected"], k["aria-disabled"] =
                    "true");
                null == h.id && delete k["aria-selected"];
                null != h._resultId && (e.id = h._resultId);
                h.title && (e.title = h.title);
                h.children && (k.role = "group", k["aria-label"] = h.text, delete k["aria-selected"]);
                for (var q in k)e.setAttribute(q, k[q]);
                if (h.children) {
                    k = b(e);
                    q = document.createElement("strong");
                    q.className = "select2-results__group";
                    b(q);
                    this.template(h, q);
                    for (var n = [], u = 0; u < h.children.length; u++) {
                        var t = this.option(h.children[u]);
                        n.push(t)
                    }
                    u = b("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    u.append(n);
                    k.append(q);
                    k.append(u)
                } else this.template(h, e);
                return b.data(e, "data", h), e
            }, h.prototype.bind = function (h, e) {
                var k = this;
                this.$results.attr("id", h.id + "-results");
                h.on("results:all", function (b) {
                    k.clear();
                    k.append(b.data);
                    h.isOpen() && k.setClasses()
                });
                h.on("results:append", function (b) {
                    k.append(b.data);
                    h.isOpen() && k.setClasses()
                });
                h.on("query", function (b) {
                    k.hideMessages();
                    k.showLoading(b)
                });
                h.on("select", function () {
                    h.isOpen() && k.setClasses()
                });
                h.on("unselect", function () {
                    h.isOpen() && k.setClasses()
                });
                h.on("open", function () {
                    k.$results.attr("aria-expanded", "true");
                    k.$results.attr("aria-hidden", "false");
                    k.setClasses();
                    k.ensureHighlightVisible()
                });
                h.on("close", function () {
                    k.$results.attr("aria-expanded", "false");
                    k.$results.attr("aria-hidden", "true");
                    k.$results.removeAttr("aria-activedescendant")
                });
                h.on("results:toggle", function () {
                    var b = k.getHighlightedResults();
                    0 !== b.length && b.trigger("mouseup")
                });
                h.on("results:select", function () {
                    var b = k.getHighlightedResults();
                    if (0 !== b.length) {
                        var e = b.data("data");
                        "true" == b.attr("aria-selected") ? k.trigger("close", {}) : k.trigger("select", {data: e})
                    }
                });
                h.on("results:previous", function () {
                    var b = k.getHighlightedResults(), e = k.$results.find("[aria-selected]"), h = e.index(b);
                    if (0 !== h) {
                        --h;
                        0 === b.length && (h = 0);
                        e = e.eq(h);
                        e.trigger("mouseenter");
                        var b = k.$results.offset().top, e = e.offset().top, l = k.$results.scrollTop() + (e - b);
                        0 === h ? k.$results.scrollTop(0) : 0 > e - b && k.$results.scrollTop(l)
                    }
                });
                h.on("results:next", function () {
                    var b = k.getHighlightedResults(), e = k.$results.find("[aria-selected]"),
                        b = e.index(b) + 1;
                    if (!(b >= e.length)) {
                        var h = e.eq(b);
                        h.trigger("mouseenter");
                        var e = k.$results.offset().top + k.$results.outerHeight(!1), h = h.offset().top + h.outerHeight(!1), l = k.$results.scrollTop() + h - e;
                        0 === b ? k.$results.scrollTop(0) : h > e && k.$results.scrollTop(l)
                    }
                });
                h.on("results:focus", function (b) {
                    b.element.addClass("select2-results__option--highlighted")
                });
                h.on("results:message", function (b) {
                    k.displayMessage(b)
                });
                b.fn.mousewheel && this.$results.on("mousewheel", function (b) {
                    var e = k.$results.scrollTop(), h = k.$results.get(0).scrollHeight -
                        k.$results.scrollTop() + b.deltaY, e = 0 < b.deltaY && 0 >= e - b.deltaY, h = 0 > b.deltaY && h <= k.$results.height();
                    e ? (k.$results.scrollTop(0), b.preventDefault(), b.stopPropagation()) : h && (k.$results.scrollTop(k.$results.get(0).scrollHeight - k.$results.height()), b.preventDefault(), b.stopPropagation())
                });
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                    var h = b(this), l = h.data("data");
                    return "true" === h.attr("aria-selected") ? void(k.options.get("multiple") ? k.trigger("unselect", {
                        originalEvent: e,
                        data: l
                    }) : k.trigger("close", {})) : void k.trigger("select", {originalEvent: e, data: l})
                });
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                    e = b(this).data("data");
                    k.getHighlightedResults().removeClass("select2-results__option--highlighted");
                    k.trigger("results:focus", {data: e, element: b(this)})
                })
            }, h.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted")
            }, h.prototype.destroy = function () {
                this.$results.remove()
            }, h.prototype.ensureHighlightVisible =
                function () {
                    var b = this.getHighlightedResults();
                    if (0 !== b.length) {
                        var e = this.$results.find("[aria-selected]").index(b), k = this.$results.offset().top, h = b.offset().top, p = this.$results.scrollTop() + (h - k), k = h - k, p = p - 2 * b.outerHeight(!1);
                        2 >= e ? this.$results.scrollTop(0) : (k > this.$results.outerHeight() || 0 > k) && this.$results.scrollTop(p)
                    }
                }, h.prototype.template = function (h, e) {
                var k = this.options.get("templateResult"), q = this.options.get("escapeMarkup"), k = k(h, e);
                null == k ? e.style.display = "none" : "string" == typeof k ? e.innerHTML =
                    q(k) : b(e).append(k)
            }, h
        }), n.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), n.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (b, n, h) {
            function l(b, k) {
                this.$element = b;
                this.options = k;
                l.__super__.constructor.call(this)
            }

            return n.Extend(l, n.Observable), l.prototype.render = function () {
                var e = b('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
            }, l.prototype.bind = function (b, k) {
                var l = this, p = (b.id + "-container", b.id + "-results");
                this.container = b;
                this.$selection.on("focus", function (b) {
                    l.trigger("focus", b)
                });
                this.$selection.on("blur", function (b) {
                    l._handleBlur(b)
                });
                this.$selection.on("keydown", function (b) {
                    l.trigger("keypress", b);
                    b.which === h.SPACE && b.preventDefault()
                });
                b.on("results:focus", function (b) {
                    l.$selection.attr("aria-activedescendant", b.data._resultId)
                });
                b.on("selection:update", function (b) {
                    l.update(b.data)
                });
                b.on("open", function () {
                    l.$selection.attr("aria-expanded", "true");
                    l.$selection.attr("aria-owns", p);
                    l._attachCloseHandler(b)
                });
                b.on("close", function () {
                    l.$selection.attr("aria-expanded", "false");
                    l.$selection.removeAttr("aria-activedescendant");
                    l.$selection.removeAttr("aria-owns");
                    l.$selection.focus();
                    l._detachCloseHandler(b)
                });
                b.on("enable", function () {
                    l.$selection.attr("tabindex", l._tabindex)
                });
                b.on("disable", function () {
                    l.$selection.attr("tabindex", "-1")
                })
            }, l.prototype._handleBlur = function (e) {
                var k = this;
                window.setTimeout(function () {
                    document.activeElement == k.$selection[0] || b.contains(k.$selection[0], document.activeElement) || k.trigger("blur", e)
                }, 1)
            }, l.prototype._attachCloseHandler = function (e) {
                b(document.body).on("mousedown.select2." + e.id, function (e) {
                    var h = b(e.target).closest(".select2");
                    b(".select2.select2-container--open").each(function () {
                        var e = b(this);
                        this != h[0] && e.data("element").select2("close")
                    })
                })
            }, l.prototype._detachCloseHandler = function (e) {
                b(document.body).off("mousedown.select2." + e.id)
            }, l.prototype.position = function (b, k) {
                k.find(".selection").append(b)
            }, l.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, l.prototype.update = function (b) {
                throw Error("The `update` method must be defined in child classes.");
            }, l
        }), n.define("select2/selection/single", ["jquery",
            "./base", "../utils", "../keys"], function (b, n, h, l) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }

            return h.Extend(e, n), e.prototype.render = function () {
                var b = e.__super__.render.call(this);
                return b.addClass("select2-selection--single"), b.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), b
            }, e.prototype.bind = function (b, h) {
                var l = this;
                e.__super__.bind.apply(this, arguments);
                var p = b.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", p);
                this.$selection.attr("aria-labelledby", p);
                this.$selection.on("mousedown", function (b) {
                    1 === b.which && l.trigger("toggle", {originalEvent: b})
                });
                this.$selection.on("focus", function (b) {
                });
                this.$selection.on("blur", function (b) {
                });
                b.on("selection:update", function (b) {
                    l.update(b.data)
                })
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, e.prototype.display = function (b, e) {
                var h = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(h(b, e))
            }, e.prototype.selectionContainer = function () {
                return b("<span></span>")
            }, e.prototype.update = function (b) {
                if (0 === b.length)return void this.clear();
                b = b[0];
                var e = this.$selection.find(".select2-selection__rendered"), h = this.display(b, e);
                e.empty().append(h);
                e.prop("title", b.title || b.text)
            }, e
        }), n.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (b, n, h) {
            function l(b, k) {
                l.__super__.constructor.apply(this, arguments)
            }

            return h.Extend(l, n),
                l.prototype.render = function () {
                    var b = l.__super__.render.call(this);
                    return b.addClass("select2-selection--multiple"), b.html('<ul class="select2-selection__rendered"></ul>'), b
                }, l.prototype.bind = function (e, k) {
                var h = this;
                l.__super__.bind.apply(this, arguments);
                this.$selection.on("click", function (b) {
                    h.trigger("toggle", {originalEvent: b})
                });
                this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                    if (!h.options.get("disabled")) {
                        var k = b(this).parent().data("data");
                        h.trigger("unselect", {
                            originalEvent: e,
                            data: k
                        })
                    }
                })
            }, l.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, l.prototype.display = function (b, k) {
                var h = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(h(b, k))
            }, l.prototype.selectionContainer = function () {
                return b('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, l.prototype.update = function (b) {
                if (this.clear(), 0 !== b.length) {
                    for (var k = [], l = 0; l < b.length; l++) {
                        var p =
                            b[l], n = this.selectionContainer(), u = this.display(p, n);
                        n.append(u);
                        n.prop("title", p.title || p.text);
                        n.data("data", p);
                        k.push(n)
                    }
                    b = this.$selection.find(".select2-selection__rendered");
                    h.appendMany(b, k)
                }
            }, l
        }), n.define("select2/selection/placeholder", ["../utils"], function (b) {
            function n(b, l, e) {
                this.placeholder = this.normalizePlaceholder(e.get("placeholder"));
                b.call(this, l, e)
            }

            return n.prototype.normalizePlaceholder = function (b, l) {
                return "string" == typeof l && (l = {id: "", text: l}), l
            }, n.prototype.createPlaceholder =
                function (b, l) {
                    var e = this.selectionContainer();
                    return e.html(this.display(l)), e.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), e
                }, n.prototype.update = function (b, l) {
                var e = 1 == l.length && l[0].id != this.placeholder.id;
                if (1 < l.length || e)return b.call(this, l);
                this.clear();
                e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e)
            }, n
        }), n.define("select2/selection/allowClear", ["jquery", "../keys"], function (b, n) {
            function h() {
            }

            return h.prototype.bind =
                function (b, e, k) {
                    var h = this;
                    b.call(this, e, k);
                    null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                    this.$selection.on("mousedown", ".select2-selection__clear", function (b) {
                        h._handleClear(b)
                    });
                    e.on("keypress", function (b) {
                        h._handleKeyboardClear(b, e)
                    })
                }, h.prototype._handleClear = function (b, e) {
                if (!this.options.get("disabled")) {
                    var k = this.$selection.find(".select2-selection__clear");
                    if (0 !== k.length) {
                        e.stopPropagation();
                        for (var k = k.data("data"), h = 0; h < k.length; h++) {
                            var p = {data: k[h]};
                            if (this.trigger("unselect", p), p.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change");
                        this.trigger("toggle", {})
                    }
                }
            }, h.prototype._handleKeyboardClear = function (b, e, k) {
                k.isOpen() || (e.which == n.DELETE || e.which == n.BACKSPACE) && this._handleClear(e)
            }, h.prototype.update = function (h, e) {
                if (h.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) {
                    var k =
                        b('<span class="select2-selection__clear">&times;</span>');
                    k.data("data", e);
                    this.$selection.find(".select2-selection__rendered").prepend(k)
                }
            }, h
        }), n.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (b, n, h) {
            function l(b, k, h) {
                b.call(this, k, h)
            }

            return l.prototype.render = function (e) {
                var k = b('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = k;
                this.$search = k.find("input");
                e = e.call(this);
                return this._transferTabIndex(), e
            }, l.prototype.bind = function (b, k, l) {
                var p = this;
                b.call(this, k, l);
                k.on("open", function () {
                    p.$search.trigger("focus")
                });
                k.on("close", function () {
                    p.$search.val("");
                    p.$search.removeAttr("aria-activedescendant");
                    p.$search.trigger("focus")
                });
                k.on("enable", function () {
                    p.$search.prop("disabled", !1);
                    p._transferTabIndex()
                });
                k.on("disable", function () {
                    p.$search.prop("disabled", !0)
                });
                k.on("focus", function (b) {
                    p.$search.trigger("focus")
                });
                k.on("results:focus", function (b) {
                    p.$search.attr("aria-activedescendant", b.id)
                });
                this.$selection.on("focusin", ".select2-search--inline", function (b) {
                    p.trigger("focus", b)
                });
                this.$selection.on("focusout", ".select2-search--inline", function (b) {
                    p._handleBlur(b)
                });
                this.$selection.on("keydown", ".select2-search--inline", function (b) {
                    b.stopPropagation();
                    p.trigger("keypress", b);
                    p._keyUpPrevented = b.isDefaultPrevented();
                    if (b.which === h.BACKSPACE && "" === p.$search.val()) {
                        var e = p.$searchContainer.prev(".select2-selection__choice");
                        0 < e.length && (e = e.data("data"), p.searchRemoveChoice(e), b.preventDefault())
                    }
                });
                var n = (b = document.documentMode) && 11 >= b;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (b) {
                    return n ? void p.$selection.off("input.search input.searchcheck") : void p.$selection.off("keyup.search")
                });
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function (b) {
                    if (n && "input" === b.type)return void p.$selection.off("input.search input.searchcheck");
                    var e = b.which;
                    e != h.SHIFT && e != h.CTRL &&
                    e != h.ALT && e != h.TAB && p.handleSearch(b)
                })
            }, l.prototype._transferTabIndex = function (b) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                this.$selection.attr("tabindex", "-1")
            }, l.prototype.createPlaceholder = function (b, k) {
                this.$search.attr("placeholder", k.text)
            }, l.prototype.update = function (b, k) {
                var h = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", "");
                b.call(this, k);
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                this.resizeSearch();
                h && this.$search.focus()
            }, l.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {term: b})
                }
                this._keyUpPrevented = !1
            }, l.prototype.searchRemoveChoice = function (b, k) {
                this.trigger("unselect", {data: k});
                this.$search.val(k.text);
                this.handleSearch()
            }, l.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var b = "", b = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 *
                (this.$search.val().length + 1) + "em";
                this.$search.css("width", b)
            }, l
        }), n.define("select2/selection/eventRelay", ["jquery"], function (b) {
            function n() {
            }

            return n.prototype.bind = function (h, l, e) {
                var k = this, q = "open opening close closing select selecting unselect unselecting".split(" "), n = ["opening", "closing", "selecting", "unselecting"];
                h.call(this, l, e);
                l.on("*", function (e, h) {
                    if (-1 !== b.inArray(e, q)) {
                        h = h || {};
                        var l = b.Event("select2:" + e, {params: h});
                        k.$element.trigger(l);
                        -1 !== b.inArray(e, n) && (h.prevented = l.isDefaultPrevented())
                    }
                })
            },
                n
        }), n.define("select2/translation", ["jquery", "require"], function (b, n) {
            function h(b) {
                this.dict = b || {}
            }

            return h.prototype.all = function () {
                return this.dict
            }, h.prototype.get = function (b) {
                return this.dict[b]
            }, h.prototype.extend = function (h) {
                this.dict = b.extend({}, h.all(), this.dict)
            }, h._cache = {}, h.loadPath = function (b) {
                if (!(b in h._cache)) {
                    var e = n(b);
                    h._cache[b] = e
                }
                return new h(h._cache[b])
            }, h
        }), n.define("select2/diacritics", [], function () {
            return {
                "\u24b6": "A",
                "\uff21": "A",
                "\u00c0": "A",
                "\u00c1": "A",
                "\u00c2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\u00c3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\u00c4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\u00c5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\u00c6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\u00c7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\u00c8": "E",
                "\u00c9": "E",
                "\u00ca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\u00cb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\u00cc": "I",
                "\u00cd": "I",
                "\u00ce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\u00cf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\u00d1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\u00d2": "O",
                "\u00d3": "O",
                "\u00d4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\u00d5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\u00d6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\u00d8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\u00d9": "U",
                "\u00da": "U",
                "\u00db": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\u00dc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\u00dd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\u00e0": "a",
                "\u00e1": "a",
                "\u00e2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\u00e3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\u00e4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\u00e5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\u00e6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\u00e7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\u00e8": "e",
                "\u00e9": "e",
                "\u00ea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\u00eb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\u00ec": "i",
                "\u00ed": "i",
                "\u00ee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\u00ef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\u00f1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\u00f2": "o",
                "\u00f3": "o",
                "\u00f4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\u00f5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\u00f6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\u00f8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\u00df": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\u00f9": "u",
                "\u00fa": "u",
                "\u00fb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\u00fc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\u00fd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\u00ff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03c9": "\u03c9",
                "\u03c2": "\u03c3"
            }
        }), n.define("select2/data/base", ["../utils"], function (b) {
            function n(b, l) {
                n.__super__.constructor.call(this)
            }

            return b.Extend(n, b.Observable), n.prototype.current = function (b) {
                throw Error("The `current` method must be defined in child classes.");
            }, n.prototype.query = function (b, l) {
                throw Error("The `query` method must be defined in child classes.");
            }, n.prototype.bind = function (b, l) {
            }, n.prototype.destroy = function () {
            }, n.prototype.generateResultId = function (h, l) {
                var e = h.id + "-result-";
                return e += b.generateChars(4), e + (null != l.id ? "-" + l.id.toString() : "-" + b.generateChars(4))
            }, n
        }), n.define("select2/data/select", ["./base", "../utils", "jquery"], function (b, n, h) {
            function l(b, k) {
                this.$element = b;
                this.options = k;
                l.__super__.constructor.call(this)
            }

            return n.Extend(l,
                b), l.prototype.current = function (b) {
                var k = [], l = this;
                this.$element.find(":selected").each(function () {
                    var b = h(this), b = l.item(b);
                    k.push(b)
                });
                b(k)
            }, l.prototype.select = function (b) {
                var k = this;
                if (b.selected = !0, h(b.element).is("option"))return b.element.selected = !0, void this.$element.trigger("change");
                this.$element.prop("multiple") ? this.current(function (l) {
                    var p = [];
                    b = [b];
                    b.push.apply(b, l);
                    for (l = 0; l < b.length; l++) {
                        var n = b[l].id;
                        -1 === h.inArray(n, p) && p.push(n)
                    }
                    k.$element.val(p);
                    k.$element.trigger("change")
                }) :
                    (this.$element.val(b.id), this.$element.trigger("change"))
            }, l.prototype.unselect = function (b) {
                var k = this;
                if (this.$element.prop("multiple"))return b.selected = !1, h(b.element).is("option") ? (b.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (l) {
                    for (var p = [], n = 0; n < l.length; n++) {
                        var u = l[n].id;
                        u !== b.id && -1 === h.inArray(u, p) && p.push(u)
                    }
                    k.$element.val(p);
                    k.$element.trigger("change")
                })
            }, l.prototype.bind = function (b, k) {
                var h = this;
                this.container = b;
                b.on("select", function (b) {
                    h.select(b.data)
                });
                b.on("unselect", function (b) {
                    h.unselect(b.data)
                })
            }, l.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    h.removeData(this, "data")
                })
            }, l.prototype.query = function (b, k) {
                var l = [], p = this;
                this.$element.children().each(function () {
                    var k = h(this);
                    if (k.is("option") || k.is("optgroup"))k = p.item(k), k = p.matches(b, k), null !== k && l.push(k)
                });
                k({results: l})
            }, l.prototype.addOptions = function (b) {
                n.appendMany(this.$element, b)
            }, l.prototype.option = function (b) {
                var k;
                b.children ? (k = document.createElement("optgroup"),
                    k.label = b.text) : (k = document.createElement("option"), void 0 !== k.textContent ? k.textContent = b.text : k.innerText = b.text);
                b.id && (k.value = b.id);
                b.disabled && (k.disabled = !0);
                b.selected && (k.selected = !0);
                b.title && (k.title = b.title);
                var l = h(k);
                b = this._normalizeItem(b);
                return b.element = k, h.data(k, "data", b), l
            }, l.prototype.item = function (b) {
                var k = {};
                if (k = h.data(b[0], "data"), null != k)return k;
                if (b.is("option"))k = {
                    id: b.val(),
                    text: b.text(),
                    disabled: b.prop("disabled"),
                    selected: b.prop("selected"),
                    title: b.prop("title")
                };
                else if (b.is("optgroup")) {
                    for (var k = {
                        text: b.prop("label"),
                        children: [],
                        title: b.prop("title")
                    }, l = b.children("option"), p = [], n = 0; n < l.length; n++) {
                        var u = h(l[n]), u = this.item(u);
                        p.push(u)
                    }
                    k.children = p
                }
                return k = this._normalizeItem(k), k.element = b[0], h.data(b[0], "data", k), k
            }, l.prototype._normalizeItem = function (b) {
                h.isPlainObject(b) || (b = {id: b, text: b});
                b = h.extend({}, {text: ""}, b);
                return null != b.id && (b.id = b.id.toString()), null != b.text && (b.text = b.text.toString()), null == b._resultId && b.id && null != this.container && (b._resultId =
                    this.generateResultId(this.container, b)), h.extend({}, {selected: !1, disabled: !1}, b)
            }, l.prototype.matches = function (b, k) {
                return this.options.get("matcher")(b, k)
            }, l
        }), n.define("select2/data/array", ["./select", "../utils", "jquery"], function (b, n, h) {
            function l(b, k) {
                var h = k.get("data") || [];
                l.__super__.constructor.call(this, b, k);
                this.addOptions(this.convertToOptions(h))
            }

            return n.Extend(l, b), l.prototype.select = function (b) {
                var k = this.$element.find("option").filter(function (k, h) {
                    return h.value == b.id.toString()
                });
                0 === k.length && (k = this.option(b), this.addOptions(k));
                l.__super__.select.call(this, b)
            }, l.prototype.convertToOptions = function (b) {
                function k(a) {
                    return function () {
                        return h(this).val() == a.id
                    }
                }

                for (var l = this, p = this.$element.find("option"), t = p.map(function () {
                    return l.item(h(this)).id
                }).get(), y = [], w = 0; w < b.length; w++) {
                    var B = this._normalizeItem(b[w]);
                    if (0 <= h.inArray(B.id, t)) {
                        var a = p.filter(k(B)), c = this.item(a), B = h.extend(!0, {}, c, B), B = this.option(B);
                        a.replaceWith(B)
                    } else a = this.option(B), B.children && (B = this.convertToOptions(B.children),
                        n.appendMany(a, B)), y.push(a)
                }
                return y
            }, l
        }), n.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (b, n, h) {
            function l(b, k) {
                this.ajaxOptions = this._applyDefaults(k.get("ajax"));
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                l.__super__.constructor.call(this, b, k)
            }

            return n.Extend(l, b), l.prototype._applyDefaults = function (b) {
                return h.extend({}, {
                    data: function (b) {
                        return h.extend({}, b, {q: b.term})
                    }, transport: function (b, e, l) {
                        b = h.ajax(b);
                        return b.then(e),
                            b.fail(l), b
                    }
                }, b, !0)
            }, l.prototype.processResults = function (b) {
                return b
            }, l.prototype.query = function (b, k) {
                function l() {
                    var q = n.transport(n, function (l) {
                        l = p.processResults(l, b);
                        p.options.get("debug") && window.console && console.error && (l && l.results && h.isArray(l.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                        k(l)
                    }, function () {
                    });
                    p._request = q
                }

                var p = this;
                null != this._request && (h.isFunction(this._request.abort) && this._request.abort(), this._request =
                    null);
                var n = h.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof n.url && (n.url = n.url.call(this.$element, b));
                "function" == typeof n.data && (n.data = n.data.call(this.$element, b));
                this.ajaxOptions.delay && "" !== b.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(l, this.ajaxOptions.delay)) : l()
            }, l
        }), n.define("select2/data/tags", ["jquery"], function (b) {
            function n(h, l, e) {
                var k = e.get("tags"), q = e.get("createTag");
                if (void 0 !== q && (this.createTag = q), h.call(this,
                        l, e), b.isArray(k))for (h = 0; h < k.length; h++)l = this._normalizeItem(k[h]), l = this.option(l), this.$element.append(l)
            }

            return n.prototype.query = function (b, l, e) {
                function k(b, h) {
                    for (var n = b.results, u = 0; u < n.length; u++) {
                        var t = n[u], a = null != t.children && !k({results: t.children}, !0);
                        if (t.text === l.term || a)return h ? !1 : (b.data = n, void e(b))
                    }
                    if (h)return !0;
                    u = p.createTag(l);
                    null != u && (t = p.option(u), t.attr("data-select2-tag", !0), p.addOptions([t]), p.insertTag(n, u));
                    b.results = n;
                    e(b)
                }

                var p = this;
                return this._removeOldTags(), null ==
                l.term || null != l.page ? void b.call(this, l, e) : void b.call(this, l, k)
            }, n.prototype.createTag = function (h, l) {
                var e = b.trim(l.term);
                return "" === e ? null : {id: e, text: e}
            }, n.prototype.insertTag = function (b, l, e) {
                l.unshift(e)
            }, n.prototype._removeOldTags = function (h) {
                (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function () {
                    this.selected || b(this).remove()
                })
            }, n
        }), n.define("select2/data/tokenizer", ["jquery"], function (b) {
            function n(b, l, e) {
                var k = e.get("tokenizer");
                void 0 !== k && (this.tokenizer = k);
                b.call(this,
                    l, e)
            }

            return n.prototype.bind = function (b, l, e) {
                b.call(this, l, e);
                this.$search = l.dropdown.$search || l.selection.$search || e.find(".select2-search__field")
            }, n.prototype.query = function (b, l, e) {
                var k = this;
                l.term = l.term || "";
                var p = this.tokenizer(l, this.options, function (b) {
                    k.trigger("select", {data: b})
                });
                p.term !== l.term && (this.$search.length && (this.$search.val(p.term), this.$search.focus()), l.term = p.term);
                b.call(this, l, e)
            }, n.prototype.tokenizer = function (h, l, e, k) {
                h = e.get("tokenSeparators") || [];
                e = l.term;
                for (var n =
                    0, u = this.createTag || function (b) {
                        return {id: b.term, text: b.term}
                    }; n < e.length;)if (-1 !== b.inArray(e[n], h)) {
                    var t = e.substr(0, n), t = b.extend({}, l, {term: t}), t = u(t);
                    null != t ? (k(t), e = e.substr(n + 1) || "", n = 0) : n++
                } else n++;
                return {term: e}
            }, n
        }), n.define("select2/data/minimumInputLength", [], function () {
            function b(n, h, l) {
                this.minimumInputLength = l.get("minimumInputLength");
                n.call(this, h, l)
            }

            return b.prototype.query = function (b, h, l) {
                return h.term = h.term || "", h.term.length < this.minimumInputLength ? void this.trigger("results:message",
                    {
                        message: "inputTooShort",
                        args: {minimum: this.minimumInputLength, input: h.term, params: h}
                    }) : void b.call(this, h, l)
            }, b
        }), n.define("select2/data/maximumInputLength", [], function () {
            function b(n, h, l) {
                this.maximumInputLength = l.get("maximumInputLength");
                n.call(this, h, l)
            }

            return b.prototype.query = function (b, h, l) {
                return h.term = h.term || "", 0 < this.maximumInputLength && h.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong", args: {
                        maximum: this.maximumInputLength, input: h.term,
                        params: h
                    }
                }) : void b.call(this, h, l)
            }, b
        }), n.define("select2/data/maximumSelectionLength", [], function () {
            function b(n, h, l) {
                this.maximumSelectionLength = l.get("maximumSelectionLength");
                n.call(this, h, l)
            }

            return b.prototype.query = function (b, h, l) {
                var e = this;
                this.current(function (k) {
                    k = null != k ? k.length : 0;
                    return 0 < e.maximumSelectionLength && k >= e.maximumSelectionLength ? void e.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: e.maximumSelectionLength}
                    }) : void b.call(e, h, l)
                })
            }, b
        }), n.define("select2/dropdown",
            ["jquery", "./utils"], function (b, n) {
                function h(b, e) {
                    this.$element = b;
                    this.options = e;
                    h.__super__.constructor.call(this)
                }

                return n.Extend(h, n.Observable), h.prototype.render = function () {
                    var h = b('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return h.attr("dir", this.options.get("dir")), this.$dropdown = h, h
                }, h.prototype.bind = function () {
                }, h.prototype.position = function (b, e) {
                }, h.prototype.destroy = function () {
                    this.$dropdown.remove()
                }, h
            }), n.define("select2/dropdown/search", ["jquery",
            "../utils"], function (b, n) {
            function h() {
            }

            return h.prototype.render = function (h) {
                h = h.call(this);
                var e = b('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = e, this.$search = e.find("input"), h.prepend(e), h
            }, h.prototype.bind = function (h, e, k) {
                var n = this;
                h.call(this, e, k);
                this.$search.on("keydown", function (b) {
                    n.trigger("keypress",
                        b);
                    n._keyUpPrevented = b.isDefaultPrevented()
                });
                this.$search.on("input", function (e) {
                    b(this).off("keyup")
                });
                this.$search.on("keyup input", function (b) {
                    n.handleSearch(b)
                });
                e.on("open", function () {
                    n.$search.attr("tabindex", 0);
                    n.$search.focus();
                    window.setTimeout(function () {
                        n.$search.focus()
                    }, 0)
                });
                e.on("close", function () {
                    n.$search.attr("tabindex", -1);
                    n.$search.val("")
                });
                e.on("results:all", function (b) {
                    if (null == b.query.term || "" === b.query.term)n.showSearch(b) ? n.$searchContainer.removeClass("select2-search--hide") :
                        n.$searchContainer.addClass("select2-search--hide")
                })
            }, h.prototype.handleSearch = function (b) {
                this._keyUpPrevented || (b = this.$search.val(), this.trigger("query", {term: b}));
                this._keyUpPrevented = !1
            }, h.prototype.showSearch = function (b, e) {
                return !0
            }, h
        }), n.define("select2/dropdown/hidePlaceholder", [], function () {
            function b(n, h, l, e) {
                this.placeholder = this.normalizePlaceholder(l.get("placeholder"));
                n.call(this, h, l, e)
            }

            return b.prototype.append = function (b, h) {
                h.results = this.removePlaceholder(h.results);
                b.call(this,
                    h)
            }, b.prototype.normalizePlaceholder = function (b, h) {
                return "string" == typeof h && (h = {id: "", text: h}), h
            }, b.prototype.removePlaceholder = function (b, h) {
                for (var l = h.slice(0), e = h.length - 1; 0 <= e; e--)this.placeholder.id === h[e].id && l.splice(e, 1);
                return l
            }, b
        }), n.define("select2/dropdown/infiniteScroll", ["jquery"], function (b) {
            function n(b, l, e, k) {
                this.lastParams = {};
                b.call(this, l, e, k);
                this.$loadingMore = this.createLoadingMore();
                this.loading = !1
            }

            return n.prototype.append = function (b, l) {
                this.$loadingMore.remove();
                this.loading = !1;
                b.call(this, l);
                this.showLoadingMore(l) && this.$results.append(this.$loadingMore)
            }, n.prototype.bind = function (h, l, e) {
                var k = this;
                h.call(this, l, e);
                l.on("query", function (b) {
                    k.lastParams = b;
                    k.loading = !0
                });
                l.on("query:append", function (b) {
                    k.lastParams = b;
                    k.loading = !0
                });
                this.$results.on("scroll", function () {
                    var e = b.contains(document.documentElement, k.$loadingMore[0]);
                    if (!k.loading && e) {
                        var e = k.$results.offset().top + k.$results.outerHeight(!1), h = k.$loadingMore.offset().top + k.$loadingMore.outerHeight(!1);
                        e + 50 >=
                        h && k.loadMore()
                    }
                })
            }, n.prototype.loadMore = function () {
                this.loading = !0;
                var h = b.extend({}, {page: 1}, this.lastParams);
                h.page++;
                this.trigger("query:append", h)
            }, n.prototype.showLoadingMore = function (b, l) {
                return l.pagination && l.pagination.more
            }, n.prototype.createLoadingMore = function () {
                var h = b('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), l = this.options.get("translations").get("loadingMore");
                return h.html(l(this.lastParams)), h
            }, n
        }), n.define("select2/dropdown/attachBody",
            ["jquery", "../utils"], function (b, n) {
                function h(h, e, k) {
                    this.$dropdownParent = k.get("dropdownParent") || b(document.body);
                    h.call(this, e, k)
                }

                return h.prototype.bind = function (b, e, k) {
                    var h = this, n = !1;
                    b.call(this, e, k);
                    e.on("open", function () {
                        h._showDropdown();
                        h._attachPositioningHandler(e);
                        n || (n = !0, e.on("results:all", function () {
                            h._positionDropdown();
                            h._resizeDropdown()
                        }), e.on("results:append", function () {
                            h._positionDropdown();
                            h._resizeDropdown()
                        }))
                    });
                    e.on("close", function () {
                        h._hideDropdown();
                        h._detachPositioningHandler(e)
                    });
                    this.$dropdownContainer.on("mousedown", function (b) {
                        b.stopPropagation()
                    })
                }, h.prototype.destroy = function (b) {
                    b.call(this);
                    this.$dropdownContainer.remove()
                }, h.prototype.position = function (b, e, k) {
                    e.attr("class", k.attr("class"));
                    e.removeClass("select2");
                    e.addClass("select2-container--open");
                    e.css({position: "absolute", top: -999999});
                    this.$container = k
                }, h.prototype.render = function (h) {
                    var e = b("<span></span>");
                    h = h.call(this);
                    return e.append(h), this.$dropdownContainer = e, e
                }, h.prototype._hideDropdown = function (b) {
                    this.$dropdownContainer.detach()
                },
                    h.prototype._attachPositioningHandler = function (h, e) {
                        var k = this, q = "scroll.select2." + e.id, t = "resize.select2." + e.id, v = "orientationchange.select2." + e.id, y = this.$container.parents().filter(n.hasScroll);
                        y.each(function () {
                            b(this).data("select2-scroll-position", {x: b(this).scrollLeft(), y: b(this).scrollTop()})
                        });
                        y.on(q, function (e) {
                            e = b(this).data("select2-scroll-position");
                            b(this).scrollTop(e.y)
                        });
                        b(window).on(q + " " + t + " " + v, function (b) {
                            k._positionDropdown();
                            k._resizeDropdown()
                        })
                    }, h.prototype._detachPositioningHandler =
                    function (h, e) {
                        var k = "scroll.select2." + e.id, q = "resize.select2." + e.id, t = "orientationchange.select2." + e.id;
                        this.$container.parents().filter(n.hasScroll).off(k);
                        b(window).off(k + " " + q + " " + t)
                    }, h.prototype._positionDropdown = function () {
                    var h = b(window), e = this.$dropdown.hasClass("select2-dropdown--above"), k = this.$dropdown.hasClass("select2-dropdown--below"), n = null, u = (this.$container.position(), this.$container.offset());
                    u.bottom = u.top + this.$container.outerHeight(!1);
                    var t = this.$container.outerHeight(!1), y, w;
                    y = u.top;
                    w = u.top + t;
                    var t = this.$dropdown.outerHeight(!1), B = h.scrollTop(), a = h.scrollTop() + h.height(), h = B < u.top - t, B = a > u.bottom + t, u = {
                        left: u.left,
                        top: w
                    };
                    "static" !== this.$dropdownParent[0].style.position && (w = this.$dropdownParent.offset(), u.top -= w.top, u.left -= w.left);
                    e || k || (n = "below");
                    B || !h || e ? !h && B && e && (n = "below") : n = "above";
                    ("above" == n || e && "below" !== n) && (u.top = y - t);
                    null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" +
                        n));
                    this.$dropdownContainer.css(u)
                }, h.prototype._resizeDropdown = function () {
                    var b = {width: this.$container.outerWidth(!1) + "px"};
                    this.options.get("dropdownAutoWidth") && (b.minWidth = b.width, b.width = "auto");
                    this.$dropdown.css(b)
                }, h.prototype._showDropdown = function (b) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);
                    this._positionDropdown();
                    this._resizeDropdown()
                }, h
            }), n.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function b(h) {
                for (var l = 0, e = 0; e < h.length; e++) {
                    var k = h[e];
                    k.children ?
                        l += b(k.children) : l++
                }
                return l
            }

            function n(b, l, e, k) {
                this.minimumResultsForSearch = e.get("minimumResultsForSearch");
                0 > this.minimumResultsForSearch && (this.minimumResultsForSearch = 1 / 0);
                b.call(this, l, e, k)
            }

            return n.prototype.showSearch = function (h, l) {
                return b(l.data.results) < this.minimumResultsForSearch ? !1 : h.call(this, l)
            }, n
        }), n.define("select2/dropdown/selectOnClose", [], function () {
            function b() {
            }

            return b.prototype.bind = function (b, h, l) {
                var e = this;
                b.call(this, h, l);
                h.on("close", function () {
                    e._handleSelectOnClose()
                })
            },
                b.prototype._handleSelectOnClose = function () {
                    var b = this.getHighlightedResults();
                    1 > b.length || (b = b.data("data"), null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", {data: b}))
                }, b
        }), n.define("select2/dropdown/closeOnSelect", [], function () {
            function b() {
            }

            return b.prototype.bind = function (b, h, l) {
                var e = this;
                b.call(this, h, l);
                h.on("select", function (b) {
                    e._selectTriggered(b)
                });
                h.on("unselect", function (b) {
                    e._selectTriggered(b)
                })
            }, b.prototype._selectTriggered = function (b, h) {
                var l =
                    h.originalEvent;
                l && l.ctrlKey || this.trigger("close", {})
            }, b
        }), n.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (b) {
                    b = b.input.length - b.maximum;
                    var n = "Please delete " + b + " character";
                    return 1 != b && (n += "s"), n
                }, inputTooShort: function (b) {
                    return "Please enter " + (b.minimum - b.input.length) + " or more characters"
                }, loadingMore: function () {
                    return "Loading more results\u2026"
                }, maximumSelected: function (b) {
                    var n = "You can only select " +
                        b.maximum + " item";
                    return 1 != b.maximum && (n += "s"), n
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching\u2026"
                }
            }
        }), n.define("select2/defaults", "jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en".split(" "),
            function (b, n, h, l, e, k, q, t, v, y, w, B, a, c, d, g, f, r, C, E, L, R, D, N, P, V, K, I, Z) {
                function U() {
                    this.reset()
                }

                U.prototype.apply = function (x) {
                    if (x = b.extend({}, this.defaults, x), null == x.dataAdapter) {
                        if (null != x.ajax ? x.dataAdapter = d : null != x.data ? x.dataAdapter = c : x.dataAdapter = a, 0 < x.minimumInputLength && (x.dataAdapter = y.Decorate(x.dataAdapter, r)), 0 < x.maximumInputLength && (x.dataAdapter = y.Decorate(x.dataAdapter, C)), 0 < x.maximumSelectionLength && (x.dataAdapter = y.Decorate(x.dataAdapter, E)), x.tags && (x.dataAdapter = y.Decorate(x.dataAdapter,
                                g)), (null != x.tokenSeparators || null != x.tokenizer) && (x.dataAdapter = y.Decorate(x.dataAdapter, f)), null != x.query) {
                            var B = n(x.amdBase + "compat/query");
                            x.dataAdapter = y.Decorate(x.dataAdapter, B)
                        }
                        null != x.initSelection && (B = n(x.amdBase + "compat/initSelection"), x.dataAdapter = y.Decorate(x.dataAdapter, B))
                    }
                    if (null == x.resultsAdapter && (x.resultsAdapter = h, null != x.ajax && (x.resultsAdapter = y.Decorate(x.resultsAdapter, N)), null != x.placeholder && (x.resultsAdapter = y.Decorate(x.resultsAdapter, D)), x.selectOnClose && (x.resultsAdapter =
                            y.Decorate(x.resultsAdapter, K))), null == x.dropdownAdapter) {
                        x.multiple ? x.dropdownAdapter = L : (B = y.Decorate(L, R), x.dropdownAdapter = B);
                        if (0 !== x.minimumResultsForSearch && (x.dropdownAdapter = y.Decorate(x.dropdownAdapter, V)), x.closeOnSelect && (x.dropdownAdapter = y.Decorate(x.dropdownAdapter, I)), null != x.dropdownCssClass || null != x.dropdownCss || null != x.adaptDropdownCssClass)B = n(x.amdBase + "compat/dropdownCss"), x.dropdownAdapter = y.Decorate(x.dropdownAdapter, B);
                        x.dropdownAdapter = y.Decorate(x.dropdownAdapter, P)
                    }
                    if (null ==
                        x.selectionAdapter) {
                        if (x.multiple ? x.selectionAdapter = e : x.selectionAdapter = l, null != x.placeholder && (x.selectionAdapter = y.Decorate(x.selectionAdapter, k)), x.allowClear && (x.selectionAdapter = y.Decorate(x.selectionAdapter, q)), x.multiple && (x.selectionAdapter = y.Decorate(x.selectionAdapter, t)), null != x.containerCssClass || null != x.containerCss || null != x.adaptContainerCssClass)B = n(x.amdBase + "compat/containerCss"), x.selectionAdapter = y.Decorate(x.selectionAdapter, B);
                        x.selectionAdapter = y.Decorate(x.selectionAdapter,
                            v)
                    }
                    "string" == typeof x.language && (0 < x.language.indexOf("-") ? (B = x.language.split("-")[0], x.language = [x.language, B]) : x.language = [x.language]);
                    if (b.isArray(x.language)) {
                        B = new w;
                        x.language.push("en");
                        for (var G = x.language, O = 0; O < G.length; O++) {
                            var Y = G[O], Q = {};
                            try {
                                Q = w.loadPath(Y)
                            } catch (U) {
                                try {
                                    Y = this.defaults.amdLanguageBase + Y, Q = w.loadPath(Y)
                                } catch (Z) {
                                    x.debug && window.console && console.warn && console.warn('Select2: The language file for "' + Y + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            B.extend(Q)
                        }
                        x.translations = B
                    } else B = w.loadPath(this.defaults.amdLanguageBase + "en"), G = new w(x.language), G.extend(B), x.translations = G;
                    return x
                };
                U.prototype.reset = function () {
                    function a(c) {
                        return c.replace(/[^\u0000-\u007E]/g, function (a) {
                            return B[a] || a
                        })
                    }

                    function c(d, e) {
                        if ("" === b.trim(d.term))return e;
                        if (e.children && 0 < e.children.length) {
                            for (var f = b.extend(!0, {}, e), g = e.children.length - 1; 0 <= g; g--)null == c(d, e.children[g]) && f.children.splice(g, 1);
                            return 0 < f.children.length ? f : c(d, f)
                        }
                        f = a(e.text).toUpperCase();
                        g = a(d.term).toUpperCase();
                        return -1 < f.indexOf(g) ? e : null
                    }

                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: y.escapeMarkup,
                        language: Z,
                        matcher: c,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function (a) {
                            return a
                        },
                        templateResult: function (a) {
                            return a.text
                        },
                        templateSelection: function (a) {
                            return a.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                };
                U.prototype.set = function (a, c) {
                    var d =
                        b.camelCase(a), e = {};
                    e[d] = c;
                    d = y._convertData(e);
                    b.extend(this.defaults, d)
                };
                return new U
            }), n.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (b, n, h, l) {
            function e(e, n) {
                if (this.options = e, null != n && this.fromElement(n), this.options = h.apply(this.options), n && n.is("input")) {
                    var u = b(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = l.Decorate(this.options.dataAdapter, u)
                }
            }

            return e.prototype.fromElement = function (b) {
                var e = ["select2"];
                null == this.options.multiple && (this.options.multiple =
                    b.prop("multiple"));
                null == this.options.disabled && (this.options.disabled = b.prop("disabled"));
                null == this.options.language && (b.prop("lang") ? this.options.language = b.prop("lang").toLowerCase() : b.closest("[lang]").prop("lang") && (this.options.language = b.closest("[lang]").prop("lang")));
                null == this.options.dir && (b.prop("dir") ? this.options.dir = b.prop("dir") : b.closest("[dir]").prop("dir") ? this.options.dir = b.closest("[dir]").prop("dir") : this.options.dir = "ltr");
                b.prop("disabled", this.options.disabled);
                b.prop("multiple",
                    this.options.multiple);
                b.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), b.data("data", b.data("select2Tags")), b.data("tags", !0));
                b.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                    b.attr("ajax--url", b.data("ajaxUrl")), b.data("ajax--url", b.data("ajaxUrl")));
                var h = {}, h = n.fn.jquery && "1." == n.fn.jquery.substr(0, 2) && b[0].dataset ? n.extend(!0, {}, b[0].dataset, b.data()) : b.data();
                b = n.extend(!0, {}, h);
                b = l._convertData(b);
                for (var p in b)-1 < n.inArray(p, e) || (n.isPlainObject(this.options[p]) ? n.extend(this.options[p], b[p]) : this.options[p] = b[p]);
                return this
            }, e.prototype.get = function (b) {
                return this.options[b]
            }, e.prototype.set = function (b, e) {
                this.options[b] = e
            }, e
        }), n.define("select2/core", ["jquery",
            "./options", "./utils", "./keys"], function (b, n, h, l) {
            var e = function (b, h) {
                null != b.data("select2") && b.data("select2").destroy();
                this.$element = b;
                this.id = this._generateId(b);
                h = h || {};
                this.options = new n(h, b);
                e.__super__.constructor.call(this);
                var l = b.attr("tabindex") || 0;
                b.data("old-tabindex", l);
                b.attr("tabindex", "-1");
                this.dataAdapter = new (this.options.get("dataAdapter"))(b, this.options);
                l = this.render();
                this._placeContainer(l);
                this.selection = new (this.options.get("selectionAdapter"))(b, this.options);
                this.$selection =
                    this.selection.render();
                this.selection.position(this.$selection, l);
                this.dropdown = new (this.options.get("dropdownAdapter"))(b, this.options);
                this.$dropdown = this.dropdown.render();
                this.dropdown.position(this.$dropdown, l);
                this.results = new (this.options.get("resultsAdapter"))(b, this.options, this.dataAdapter);
                this.$results = this.results.render();
                this.results.position(this.$results, this.$dropdown);
                var p = this;
                this._bindAdapters();
                this._registerDomEvents();
                this._registerDataEvents();
                this._registerSelectionEvents();
                this._registerDropdownEvents();
                this._registerResultsEvents();
                this._registerEvents();
                this.dataAdapter.current(function (b) {
                    p.trigger("selection:update", {data: b})
                });
                b.addClass("select2-hidden-accessible");
                b.attr("aria-hidden", "true");
                this._syncAttributes();
                b.data("select2", this)
            };
            return h.Extend(e, h.Observable), e.prototype._generateId = function (b) {
                var e = "";
                return e = null != b.attr("id") ? b.attr("id") : null != b.attr("name") ? b.attr("name") + "-" + h.generateChars(2) : h.generateChars(4), "select2-" + e
            }, e.prototype._placeContainer =
                function (b) {
                    b.insertAfter(this.$element);
                    var e = this._resolveWidth(this.$element, this.options.get("width"));
                    null != e && b.css("width", e)
                }, e.prototype._resolveWidth = function (b, e) {
                var h = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e)return h = this._resolveWidth(b, "style"), null != h ? h : this._resolveWidth(b, "element");
                if ("element" == e)return h = b.outerWidth(!1), 0 >= h ? "auto" : h + "px";
                if ("style" == e) {
                    var l = b.attr("style");
                    if ("string" != typeof l)return null;
                    for (var l = l.split(";"), n = 0, p =
                        l.length; p > n; n += 1) {
                        var u = l[n].replace(/\s/g, "").match(h);
                        if (null !== u && 1 <= u.length)return u[1]
                    }
                    return null
                }
                return e
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container);
                this.selection.bind(this, this.$container);
                this.dropdown.bind(this, this.$container);
                this.results.bind(this, this.$container)
            }, e.prototype._registerDomEvents = function () {
                var e = this;
                this.$element.on("change.select2", function () {
                    e.dataAdapter.current(function (b) {
                        e.trigger("selection:update", {data: b})
                    })
                });
                this._sync =
                    h.bind(this._syncAttributes, this);
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != l ? (this._observer = new l(function (h) {
                    b.each(h, e._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", e._sync, !1)
            }, e.prototype._registerDataEvents = function () {
                var b = this;
                this.dataAdapter.on("*",
                    function (e, h) {
                        b.trigger(e, h)
                    })
            }, e.prototype._registerSelectionEvents = function () {
                var e = this, h = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    e.toggleDropdown()
                });
                this.selection.on("focus", function (b) {
                    e.focus(b)
                });
                this.selection.on("*", function (l, n) {
                    -1 === b.inArray(l, h) && e.trigger(l, n)
                })
            }, e.prototype._registerDropdownEvents = function () {
                var b = this;
                this.dropdown.on("*", function (e, h) {
                    b.trigger(e, h)
                })
            }, e.prototype._registerResultsEvents = function () {
                var b = this;
                this.results.on("*", function (e, h) {
                    b.trigger(e,
                        h)
                })
            }, e.prototype._registerEvents = function () {
                var b = this;
                this.on("open", function () {
                    b.$container.addClass("select2-container--open")
                });
                this.on("close", function () {
                    b.$container.removeClass("select2-container--open")
                });
                this.on("enable", function () {
                    b.$container.removeClass("select2-container--disabled")
                });
                this.on("disable", function () {
                    b.$container.addClass("select2-container--disabled")
                });
                this.on("blur", function () {
                    b.$container.removeClass("select2-container--focus")
                });
                this.on("query", function (e) {
                    b.isOpen() ||
                    b.trigger("open", {});
                    this.dataAdapter.query(e, function (h) {
                        b.trigger("results:all", {data: h, query: e})
                    })
                });
                this.on("query:append", function (e) {
                    this.dataAdapter.query(e, function (h) {
                        b.trigger("results:append", {data: h, query: e})
                    })
                });
                this.on("keypress", function (e) {
                    var h = e.which;
                    b.isOpen() ? h === l.ESC || h === l.TAB || h === l.UP && e.altKey ? (b.close(), e.preventDefault()) : h === l.ENTER ? (b.trigger("results:select", {}), e.preventDefault()) : h === l.SPACE && e.ctrlKey ? (b.trigger("results:toggle", {}), e.preventDefault()) : h === l.UP ?
                        (b.trigger("results:previous", {}), e.preventDefault()) : h === l.DOWN && (b.trigger("results:next", {}), e.preventDefault()) : (h === l.ENTER || h === l.SPACE || h === l.DOWN && e.altKey) && (b.open(), e.preventDefault())
                })
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled"));
                this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, e.prototype.trigger = function (b, h) {
                var l = e.__super__.trigger, n = {
                    open: "opening", close: "closing",
                    select: "selecting", unselect: "unselecting"
                };
                if (void 0 === h && (h = {}), b in n) {
                    var p = {prevented: !1, name: b, args: h};
                    if (l.call(this, n[b], p), p.prevented)return void(h.prevented = !0)
                }
                l.call(this, b, h)
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            },
                e.prototype.hasFocus = function () {
                    return this.$container.hasClass("select2-container--focus")
                }, e.prototype.focus = function (b) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, e.prototype.enable = function (b) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                null != b && 0 !== b.length || (b = [!0]);
                this.$element.prop("disabled", !b[0])
            }, e.prototype.data = function () {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var b = [];
                return this.dataAdapter.current(function (e) {
                    b = e
                }), b
            }, e.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                    null == e || 0 === e.length)return this.$element.val();
                e = e[0];
                b.isArray(e) && (e = b.map(e, function (b) {
                    return b.toString()
                }));
                this.$element.val(e).trigger("change")
            }, e.prototype.destroy = function () {
                this.$container.remove();
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync);
                null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1);
                this._sync = null;
                this.$element.off(".select2");
                this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                this.$element.removeClass("select2-hidden-accessible");
                this.$element.attr("aria-hidden", "false");
                this.$element.removeData("select2");
                this.dataAdapter.destroy();
                this.selection.destroy();
                this.dropdown.destroy();
                this.results.destroy();
                this.results = this.dropdown = this.selection = this.dataAdapter = null
            }, e.prototype.render = function () {
                var e = b('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
            }, e
        }), n.define("select2/compat/utils", ["jquery"], function (b) {
            return {
                syncCssClasses: function (n, h, l) {
                    var e, k, q = [];
                    (e = b.trim(n.attr("class"))) && (e = "" + e, b(e.split(/\s+/)).each(function () {
                        0 === this.indexOf("select2-") && q.push(this)
                    }));
                    (e = b.trim(h.attr("class"))) && (e = "" + e, b(e.split(/\s+/)).each(function () {
                        0 !== this.indexOf("select2-") && (k =
                            l(this), null != k && q.push(k))
                    }));
                    n.attr("class", q.join(" "))
                }
            }
        }), n.define("select2/compat/containerCss", ["jquery", "./utils"], function (b, n) {
            function h(b) {
                return null
            }

            function l() {
            }

            return l.prototype.render = function (e) {
                e = e.call(this);
                var k = this.options.get("containerCssClass") || "";
                b.isFunction(k) && (k = k(this.$element));
                var l = this.options.get("adaptContainerCssClass");
                if (l = l || h, -1 !== k.indexOf(":all:"))var k = k.replace(":all:", ""), t = l, l = function (b) {
                    var e = t(b);
                    return null != e ? e + " " + b : b
                };
                var v = this.options.get("containerCss") ||
                    {};
                return b.isFunction(v) && (v = v(this.$element)), n.syncCssClasses(e, this.$element, l), e.css(v), e.addClass(k), e
            }, l
        }), n.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (b, n) {
            function h(b) {
                return null
            }

            function l() {
            }

            return l.prototype.render = function (e) {
                e = e.call(this);
                var k = this.options.get("dropdownCssClass") || "";
                b.isFunction(k) && (k = k(this.$element));
                var l = this.options.get("adaptDropdownCssClass");
                if (l = l || h, -1 !== k.indexOf(":all:"))var k = k.replace(":all:", ""), t = l, l = function (b) {
                    var e = t(b);
                    return null != e ? e + " " + b : b
                };
                var v = this.options.get("dropdownCss") || {};
                return b.isFunction(v) && (v = v(this.$element)), n.syncCssClasses(e, this.$element, l), e.css(v), e.addClass(k), e
            }, l
        }), n.define("select2/compat/initSelection", ["jquery"], function (b) {
            function n(b, l, e) {
                e.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                this.initSelection = e.get("initSelection");
                this._isInitialized = !1;
                b.call(this, l, e)
            }

            return n.prototype.current = function (h, l) {
                var e = this;
                return this._isInitialized ? void h.call(this, l) : void this.initSelection.call(null, this.$element, function (h) {
                    e._isInitialized = !0;
                    b.isArray(h) || (h = [h]);
                    l(h)
                })
            }, n
        }), n.define("select2/compat/inputData", ["jquery"], function (b) {
            function n(b, l, e) {
                this._currentData = [];
                this._valueSeparator = e.get("valueSeparator") || ",";
                "hidden" === l.prop("type") && e.get("debug") && console && console.warn &&
                console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                b.call(this, l, e)
            }

            return n.prototype.current = function (h, l) {
                function e(h, k) {
                    var l = [];
                    return h.selected || -1 !== b.inArray(h.id, k) ? (h.selected = !0, l.push(h)) : h.selected = !1, h.children && l.push.apply(l, e(h.children, k)), l
                }

                for (var k = [], n = 0; n < this._currentData.length; n++)k.push.apply(k, e(this._currentData[n], this.$element.val().split(this._valueSeparator)));
                l(k)
            }, n.prototype.select = function (h, l) {
                if (this.options.get("multiple")) {
                    var e = this.$element.val(), e = e + (this._valueSeparator + l.id);
                    this.$element.val(e)
                } else this.current(function (e) {
                    b.map(e, function (b) {
                        b.selected = !1
                    })
                }), this.$element.val(l.id);
                this.$element.trigger("change")
            }, n.prototype.unselect = function (b, l) {
                var e = this;
                l.selected = !1;
                this.current(function (b) {
                    for (var h = [], n = 0; n < b.length; n++) {
                        var p = b[n];
                        l.id != p.id && h.push(p.id)
                    }
                    e.$element.val(h.join(e._valueSeparator));
                    e.$element.trigger("change")
                })
            },
                n.prototype.query = function (b, l, e) {
                    b = [];
                    for (var k = 0; k < this._currentData.length; k++) {
                        var n = this.matches(l, this._currentData[k]);
                        null !== n && b.push(n)
                    }
                    e({results: b})
                }, n.prototype.addOptions = function (h, l) {
                var e = b.map(l, function (e) {
                    return b.data(e[0], "data")
                });
                this._currentData.push.apply(this._currentData, e)
            }, n
        }), n.define("select2/compat/matcher", ["jquery"], function (b) {
            return function (n) {
                return function (h, l) {
                    var e = b.extend(!0, {}, l);
                    if (null == h.term || "" === b.trim(h.term))return e;
                    if (l.children) {
                        for (var k =
                            l.children.length - 1; 0 <= k; k--) {
                            var q = l.children[k];
                            n(h.term, q.text, q) || e.children.splice(k, 1)
                        }
                        if (0 < e.children.length)return e
                    }
                    return n(h.term, l.text, l) ? e : null
                }
            }
        }), n.define("select2/compat/query", [], function () {
            function b(n, h, l) {
                l.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                n.call(this, h, l)
            }

            return b.prototype.query =
                function (b, h, l) {
                    h.callback = l;
                    this.options.get("query").call(null, h)
                }, b
        }), n.define("select2/dropdown/attachContainer", [], function () {
            function b(n, h, l) {
                n.call(this, h, l)
            }

            return b.prototype.position = function (b, h, l) {
                l.find(".dropdown-wrapper").append(h);
                h.addClass("select2-dropdown--below");
                l.addClass("select2-container--below")
            }, b
        }), n.define("select2/dropdown/stopPropagation", [], function () {
            function b() {
            }

            return b.prototype.bind = function (b, h, l) {
                b.call(this, h, l);
                this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart",
                    function (b) {
                        b.stopPropagation()
                    })
            }, b
        }), n.define("select2/selection/stopPropagation", [], function () {
            function b() {
            }

            return b.prototype.bind = function (b, h, l) {
                b.call(this, h, l);
                this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function (b) {
                    b.stopPropagation()
                })
            }, b
        }), function (p) {
            "function" == typeof n.define && n.define.amd ? n.define("jquery-mousewheel", ["jquery"], p) : "object" == typeof exports ? module.exports = p : p(b)
        }(function (b) {
            function n(k) {
                var q = k || window.event, a = t.call(arguments, 1), c = 0, d = 0, g = 0, f = 0, r = 0, u = 0;
                if (k = b.event.fix(q), k.type = "mousewheel", "detail" in q && (g = -1 * q.detail), "wheelDelta" in q && (g = q.wheelDelta), "wheelDeltaY" in q && (g = q.wheelDeltaY), "wheelDeltaX" in q && (d = -1 * q.wheelDeltaX), "axis" in q && q.axis === q.HORIZONTAL_AXIS && (d = -1 * g, g = 0), c = 0 === g ? d : g, "deltaY" in q && (g = -1 * q.deltaY, c = g), "deltaX" in q && (d = q.deltaX, 0 === g && (c = -1 * d)), 0 !== g || 0 !== d) {
                    if (1 === q.deltaMode)var v = b.data(this,
                        "mousewheel-line-height"), c = c * v, g = g * v, d = d * v; else 2 === q.deltaMode && (v = b.data(this, "mousewheel-page-height"), c *= v, g *= v, d *= v);
                    if (f = Math.max(Math.abs(g), Math.abs(d)), (!e || e > f) && (e = f, w.settings.adjustOldDeltas && "mousewheel" === q.type && 0 === f % 120 && (e /= 40)), w.settings.adjustOldDeltas && "mousewheel" === q.type && 0 === f % 120 && (c /= 40, d /= 40, g /= 40), c = Math[1 <= c ? "floor" : "ceil"](c / e), d = Math[1 <= d ? "floor" : "ceil"](d / e), g = Math[1 <= g ? "floor" : "ceil"](g / e), w.settings.normalizeOffset && this.getBoundingClientRect)q = this.getBoundingClientRect(),
                        r = k.clientX - q.left, u = k.clientY - q.top;
                    return k.deltaX = d, k.deltaY = g, k.deltaFactor = e, k.offsetX = r, k.offsetY = u, k.deltaMode = 0, a.unshift(k, c, d, g), l && clearTimeout(l), l = setTimeout(h, 200), (b.event.dispatch || b.event.handle).apply(this, a)
                }
            }

            function h() {
                e = null
            }

            var l, e, k = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], q = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], t = Array.prototype.slice;
            if (b.event.fixHooks)for (var v = k.length; v;)b.event.fixHooks[k[--v]] =
                b.event.mouseHooks;
            var w = b.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener)for (var e = q.length; e;)this.addEventListener(q[--e], n, !1); else this.onmousewheel = n;
                    b.data(this, "mousewheel-line-height", w.getLineHeight(this));
                    b.data(this, "mousewheel-page-height", w.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)for (var e = q.length; e;)this.removeEventListener(q[--e], n, !1); else this.onmousewheel = null;
                    b.removeData(this, "mousewheel-line-height");
                    b.removeData(this,
                        "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    e = b(e);
                    var h = e["offsetParent" in b.fn ? "offsetParent" : "parent"]();
                    return h.length || (h = b("body")), parseInt(h.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return b(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            b.fn.extend({
                mousewheel: function (b) {
                    return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
                }, unmousewheel: function (b) {
                    return this.unbind("mousewheel", b)
                }
            })
        }), n.define("jquery.select2",
            ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (b, n, h, l) {
                if (null == b.fn.select2) {
                    var e = ["open", "close", "destroy"];
                    b.fn.select2 = function (k) {
                        if (k = k || {}, "object" == typeof k)return this.each(function () {
                            var e = b.extend(!0, {}, k);
                            new h(b(this), e)
                        }), this;
                        if ("string" == typeof k) {
                            var l;
                            return this.each(function () {
                                var e = b(this).data("select2");
                                null == e && window.console && console.error && console.error("The select2('" + k + "') method was called on an element that is not using Select2.");
                                var h =
                                    Array.prototype.slice.call(arguments, 1);
                                l = e[k].apply(e, h)
                            }), -1 < b.inArray(k, e) ? this : l
                        }
                        throw Error("Invalid arguments for Select2: " + k);
                    }
                }
                return null == b.fn.select2.defaults && (b.fn.select2.defaults = l), h
            }), {define: n.define, require: n.require}
    }(), n = w.require("jquery.select2");
    return b.fn.select2.amd = w, n
});
yii.app = function (b) {
    var w = {
        isActive: !0, phonesSpeed: 5E3, init: function () {
            w.autocomplete();
            var n;
            b("#frame-order").length && (b(window).on("load resize scroll", function () {
                w.postToFrame()
            }), b.receiveMessage(function (t) {
                t = b.parseJSON(t.data);
                var p = t.orderFrameHeight, u = 0;
                500 > b(window).width() && (u = 55);
                !isNaN(p) && 0 < p && p !== n && (b("#frame-order").height(n = p + u), w.postToFrame());
                "undefined" !== typeof t.tarifInfo && (p = t.tarifInfo, b('div[data-id="tariff-modal"]').find(".m-body").html('<button type="button" class="m-close js-modal-close"><i class="fa fa-times"></i></button><div class="m-body-wrapper">' +
                    decodeURIComponent(p.replace(/%(?![\da-f]{2})/gi, function () {
                        return "%25"
                    })) + "</div>"), yii.app.modals.open("tariff-modal"));
                "undefined" !== typeof t.feedbackFrameHeight && (b("#frame-feedback").css("min-height", 200 > t.feedbackFrameHeight ? 200 : t.feedbackFrameHeight), 200 > t.feedbackFrameHeight && (t = 150 < t.feedbackFrameHeight ? 245 : 210, b(".b-modal[data-id=feedback-form]").find(".m-body").css("height", t).css("top", 300)))
            }, ("https:" == window.location.protocol ? "https:" : "http:") + "//taxsee.ru"));
            w.changeLogo(".b-logo--ka",
                "b-logo--ka-d");
            b(".b-phones-changed .m-phone").removeClass("s-active");
            b(".b-phones-changed .m-phone:first-child").addClass("s-active");
            1 < b(".b-phones-changed").children().length && setTimeout(w.showNextPhone, w.phonesSpeed)
        }, showNextPhone: function () {
            var n = b(".b-phones-changed .m-phone"), t = b(".b-phones-changed .m-phone.s-active"), p = t.next();
            p && p.length || (p = n.first());
            n.removeClass("s-active");
            t.fadeOut(function () {
                p.addClass("s-active").fadeIn().css("display", "block")
            });
            setTimeout(w.showNextPhone, w.phonesSpeed)
        },
        postToFrame: function () {
            var n = b(".b-order-block"), t = b(window).width(), p = b(window).height() + 90, u = n.outerWidth(), h = n.outerHeight(), n = n.offset().top, l = b(document).scrollTop(), t = JSON.stringify({
                w0: t,
                h0: p,
                w: u,
                h: h,
                t: n,
                s: l,
                url: ("https:" == window.location.protocol ? "https://" : "http://") + window.location.host
            }), p = b("#frame-order").attr("src");
            b.postMessage(t, p, document.getElementById("frame-order").contentWindow)
        }, changeLogo: function (n, t) {
            if (0 < b(n).size()) {
                var p = b(n);
                setInterval(function () {
                    p.hasClass(t) ? p.animate({opacity: 0},
                        {
                            duration: 500, complete: function () {
                            p.removeClass(t).animate({opacity: 1}, {queue: !1, duration: 500})
                        }, queue: !1
                        }) : p.animate({opacity: 0}, {
                        duration: 500, complete: function () {
                            p.addClass(t).animate({opacity: 1}, {queue: !1, duration: 500})
                        }, queue: !1
                    })
                }, 15E3)
            }
        }, autocomplete: function () {
            var n = [];
            b("#modal-country-list a").each(function (t) {
                t = {};
                t.url = b(this).attr("href");
                t.label = b(this).text();
                n.push(t)
            });
            b(".js-city-autocomplete").autocomplete({
                source: n, minLength: 2, select: function (b, n) {
                    window.location = n.item.url
                }
            })
        }
    };
    return w
}(jQuery);
yii.app.form = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-address-add").on("click", function () {
                w.addAddress()
            });
            b(".b-order-form").on("click", ".js-address-delete", function () {
                w.deleteAddress(b(this))
            });
            b(".b-order-form").on("change", ".js-form-now-or-delay", function () {
                w.toggleTime(b(this))
            });
            if (b("body").is(".fixed-buttons"))b(window).on("load resize scroll taxi-form-changed", function () {
                w.checkButtonsBlock()
            })
        }, addAddress: function () {
            b(".js-address-block").eq(0).clone().appendTo(".js-address-container").find("input[type=text]").val("");
            2 <
            b(".js-address-block").size() && b(".js-address-container").scrollTop(1E3);
            b(".js-address-block").eq(-1).find("input[type=text]").eq(0).focus();
            this.addressOrder();
            b(window).trigger("taxi-form-changed")
        }, addressOrder: function () {
            var n = 1;
            b(".js-address-block").each(function () {
                b(this).find(".js-address-order").val(n);
                n++
            });
            b(".js-address-container").sortable({items: "> .js-address-block", handle: ".js-drag-n-drop"})
        }, deleteAddress: function (n) {
            n.parents(".js-address-block").remove();
            this.addressOrder();
            b(window).trigger("taxi-form-changed")
        },
        toggleTime: function (n) {
            n = n.attr("data-id");
            b(".js-form-time-block").hide();
            b(".js-form-time-block[data-id=" + n + "]").show()
        }, checkButtonsBlock: function () {
            var n = b(".b-order-block"), t = n.find(".m-footer"), p = b(window).width(), u = n.outerWidth(), h = n.outerHeight(), l = n.offset().top, e = n.offset().left;
            b(document).scrollTop();
            1E3 <= p && l + h > b(window).height() - 50 ? (n.addClass("s-fixed-buttons"), t.css({
                left: e,
                width: u
            })) : (n.removeClass("s-fixed-buttons"), t.attr("style", ""))
        }
    };
    return w
}(jQuery);
yii.app.form = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-tab").on("click", function () {
                w.toggle(b(this))
            })
        }, toggle: function (n) {
            var t = n.attr("data-id");
            n.addClass("s-active");
            n.siblings(".js-tab").removeClass("s-active");
            b(".js-tab-content").hide().filter("[data-id=" + t + "]").show()
        }
    };
    return w
}(jQuery);
yii.app.modals = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-modal-open").on("click", function (n) {
                n.preventDefault();
                w.open(b(this).attr("data-id"), b(this).attr("data-url"));
                return !1
            });
            b(".js-modal-image").on("click", function (n) {
                n.preventDefault();
                var t = b(this).attr("data-id");
                n = b(this).attr("data-url");
                t = b(".b-modal[data-id=" + t + "]");
                t.fadeIn(200);
                800 >= b(window).width() && b("html, body").animate({scrollTop: 0}, 300);
                t.find(".m-body-wrapper div img").attr("src", n);
                return !1
            });
            b("body").on("click",
                function (n) {
                    (!b(".m-body, .m-body *").is(n.target) || b(n.target).hasClass("js-modal-close") || b(n.target).parent().hasClass("js-modal-close")) && w.close(b(".b-modal:visible"))
                });
            b("#confirm-button-yes").click(function () {
                w.close(b("#modal-city-confirm"));
                return !1
            });
            b("#confirm-button-no").click(function () {
                w.close(b("#modal-city-confirm"));
                w.open("city-choose");
                return !1
            })
        }, open: function (n, t) {
            b(".b-modal[data-id=feedback-form]").find(".m-body").css("height", "").css("top", 50);
            b(".b-container").css("overflow-y",
                "auto");
            var p = b(".b-modal[data-id=" + n + "]");
            t ? (p.find(".m-body").html('<i class="fa fa-2x fa-refresh fa-spin"></i>'), p.fadeIn(200), 800 >= b(window).width() && b("html, body").animate({scrollTop: 0}, 300), b.ajax({
                url: t,
                method: "POST"
            }).done(function (b) {
                p.find(".m-body").html(b)
            }).fail(function (b, h) {
                alert("Request failed: " + h)
            })) : (p.fadeIn(200), 800 >= b(window).width() && b("html, body").animate({scrollTop: 0}, 300))
        }, close: function (n) {
            b(".b-container").css("overflow-y", "visible");
            n.fadeOut(200, function () {
                var b =
                    n.find("iframe.youtube").attr("src");
                n.find("iframe.youtube").attr("src", b)
            });
            b("#frame-feedback").attr("src", b("#frame-feedback").attr("src"))
        }
    };
    return w
}(jQuery);
yii.app.orderParams = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-toggle-order-params").on("click", function () {
                w.toggle(b(this))
            })
        }, toggle: function (n) {
            n.toggleClass("s-active");
            b(".js-order-params").toggle();
            b(window).trigger("taxi-form-changed")
        }
    };
    return w
}(jQuery);
yii.app.menuToggle = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-menu-toggle").on("click", function () {
                w.toggle(b(this))
            })
        }, toggle: function (n) {
            w.checkSize();
            b("body").toggleClass("s-show-sidebar");
            b(window).trigger("taxi-form-changed")
        }, checkSize: function () {
            var n = b(window).width(), t = b(document).height();
            b(".b-sidebar, .b-sidebar .m-overlay, .b-sidebar .m-content").css("height", t);
            b(".b-sidebar .m-overlay").css("width", 3 * n)
        }
    };
    return w
}(jQuery);
yii.app.langToggle = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-lang-toggle").on("click", function () {
                w.toggle(b(this))
            });
            b("body").on("click", ".js-country-toggle", function () {
                var n = b("#location-drop-down ul").width();
                b("#location-drop-down .m-list").width(n);
                w.countryToggle(b(this));
                return !1
            });
            b(".modal-select-country").change(function (n) {
                n = b(this).val();
                var t = b(this).attr("data-url");
                b.ajax({url: t, data: {id: n}}).done(function (n) {
                    b("#modal-country-list").html(n);
                    b(".js-city-autocomplete").val("");
                    yii.app.autocomplete()
                })
            })
        }, toggle: function (n) {
            b(".b-langs").toggleClass("s-active")
        }, countryToggle: function (n) {
            b("#location-drop-down .js-country-toggle").toggleClass("active");
            b("#location-drop-down .m-list").toggle()
        }
    };
    return w
}(jQuery);
yii.app.blog = function (b) {
    var w = {
        isActive: !0, init: function () {
            b(".js-blog-toggle-archive span").on("click", function () {
                w.toggle(b(this).closest(".js-blog-toggle-archive"))
            })
        }, toggle: function (b) {
            b.toggleClass("s-open")
        }
    };
    return w
}(jQuery);
yii.app.faq = function (b) {
    var w = {
        isActive: !0, init: function () {
            b("body").on("click", ".js-faq li", function () {
                w.toggle(b(this))
            })
        }, toggle: function (b) {
            b.toggleClass("s-open").siblings("li").removeClass("s-open").find(".m-text").slideUp(200);
            b.find(".m-text").slideToggle(200, function () {
                w.scrollTo(b)
            })
        }, scrollTo: function (n) {
            b(".b-container").scrollTo(n, {duration: "slow"})
        }
    };
    return w
}(jQuery);
yii.app.materials = function (b) {
    var w = {
        isActive: !0, init: function () {
            b("body").on("click", ".js-materials li", function () {
                b(this).find(".m-text").html('<iframe class="youtube" width="470" height="280" src=' + b(this).find(".m-text").attr("data-url") + ' frameborder="0" allowfullscreen="true"></iframe>');
                w.toggle(b(this))
            })
        }, toggle: function (b) {
            b.toggleClass("s-open").siblings("li").removeClass("s-open").find(".m-text").slideUp(200).html("");
            b.find(".m-text").slideToggle(200, function () {
                w.scrollTo(b)
            })
        }, scrollTo: function (n) {
            b(".b-modal[data-id=video-lessons] .m-body-wrapper").scrollTo(n,
                {duration: "slow"})
        }
    };
    return w
}(jQuery);
yii.app.feedback = function (b) {
    return {
        isActive: !0, init: function () {
            b(".m-captcha").on("click", "button.refresh", function (w) {
                w.preventDefault();
                b("#feedback-verifycode-image").yiiCaptcha("refresh")
            })
        }
    }
}(jQuery);
yii.app.questionary = function (b) {
    var w = {
        isActive: !0, smsTimeout: 3E4, init: function () {
            b.each(b(".js-file-upload.loaded"), function () {
                var n = b(this).data("url");
                b(this).prev().val(n)
            });
            w.checkPhone();
            b("body.b-driver-page-questionary").on("click", ".b-main", function (n) {
                var t = b(".call-form");
                n = b(n.target);
                !t.is(":visible") || n.closest("div.call-form").length || n.hasClass("js-confirm-phone-button") || (t.hide(), b(".js-confirm-phone-button").addClass("s-active"))
            });
            b("body").on("keyup", "#anketaform-phone", function () {
                w.checkPhone()
            }).on("click",
                ".js-confirm-phone-button.s-active", function () {
                    w.confirmPhone(b(this))
                });
            b(".js-suggest-conditions").on("change", "input[type=checkbox]", function () {
                var n = b(this), t = n.parents(".js-suggest-conditions"), p = t.find(".fa"), u = p.attr("data-active"), h = p.attr("data-notactive");
                n.is(":checked") ? (p.removeClass(u + " " + h).addClass(u), t.removeClass("s-error")) : p.removeClass(u + " " + h).addClass(h)
            }).find("input[type=checkbox]").trigger("change");
            b(".driver-anketa-step4").on("change", "select[data-ajax=1]", function () {
                var n =
                    b(b(this).attr("data-target")), t = n.attr("data-target-url");
                t && b.post(t, {q: b(this).val()}, function (b) {
                    n.html(b)
                })
            });
            b("body").on("click", ".js-block-file", function (n) {
                "label" != n.target.localName && b(this).parent().find("input[type=file]").trigger("click")
            });
            b(".js-file-upload").each(function () {
                b(this).hasClass("loaded") && (b(this).parent().find(".js-block-file").find(".js-block-file-name").html('<i class="fa fa-check" style="color: green;">'), b(this).parent().find(".js-block-file").addClass("driver-anketa-last__cols-item-file--selected"));
                jQuery(this).fileupload({
                    dataType: "json", add: function (n, t) {
                        b(this).parent().find(".js-block-file").find(".js-block-file-name").html('<i class="fa fa-refresh fa-spin">');
                        t.submit()
                    }
                });
                jQuery(this).on("fileuploaddone", function (n, t) {
                    var p = b(this).parent().find(".js-block-file");
                    p.find(".js-block-file-name").html('<i class="fa fa-check" style="color: green;"> ');
                    p.addClass("driver-anketa-last__cols-item-file--selected");
                    p.removeClass("driver-anketa-last__cols-item-file--error");
                    p.parent().find("input[type=hidden]").val(t.files[0].name);
                    p.parent().find(".m-error").html("")
                });
                jQuery(this).on("fileuploadfail", function (n, t) {
                    var p = b(this).parent().find(".js-block-file");
                    p.find(".js-block-file-name").text("");
                    p.removeClass("driver-anketa-last__cols-item-file--selected");
                    p.addClass("driver-anketa-last__cols-item-file--error")
                })
            });
            b("#anketaform-idbase, #anketaform-carmark, #anketaform-caryear, #anketaform-carcolor, #anketaform-country").prepend("<option/>").val(function () {
                return b("[selected]", this).val()
            })
        }, checkPhone: function () {
            var n =
                b("#anketaform-phone");
            n.val() && 5 < n.val().length ? b(".js-confirm-phone-button").addClass("s-active") : b(".js-confirm-phone-button").removeClass("s-active")
        }, confirmPhone: function (n) {
            var t = n.data("send-sms-url"), p = b("#anketaform-phone").val();
            n.removeClass("s-active").attr("title", n.attr("data-title")).html(n.attr("data-sended"));
            b.post(t, {phone: p}, function (p) {
                b(".result").html(p);
                b(".js-confirm-phone-code").show().focus();
                setTimeout(function () {
                    n.addClass("s-active").attr("title", "").html(n.attr("data-notsend")).off("click").on("click",
                        function () {
                            w.sendPasswordModal(n)
                        })
                }, w.smsTimeout)
            })
        }, confirmByCall: function (n) {
            var t = n.data("call-url"), p = b("#anketaform-phone").val();
            n.html(n.attr("data-called")).addClass("s-active");
            b.post(t, {phone: p}, function (p) {
                b(".result").html(p);
                b(".js-confirm-phone-code").show().focus();
                setTimeout(function () {
                    n.html(n.attr("data-getsms")).addClass("s-active")
                }, 5E3)
            })
        }, sendPasswordModal: function (n) {
            n.removeClass("s-active");
            b(".call-form").show();
            b(".js-call-form-link").off("click").on("click", function () {
                n.html(n.attr("data-called")).removeClass("js-show-call-form").addClass("js-send-password");
                b(".call-form").hide();
                w.confirmByCall(n);
                return !1
            });
            b(".js-send-password-2").off("click").on("click", function () {
                b(".call-form").hide();
                w.confirmPhone(b(".js-confirm-phone-button"))
            })
        }
    };
    return w
}(jQuery);
(function (b, w) {
    "function" === typeof define && define.amd ? define(["jquery"], w) : w(b.jQuery)
})(this, function (b) {
    var w = function (n) {
        this.origHtmlMargin = parseFloat(b("html").css("margin-top"));
        this.options = b.extend({}, b.smartbanner.defaults, n);
        n = navigator.standalone;
        var t = navigator.userAgent;
        this.options.force ? this.type = this.options.force : null !== t.match(/Windows Phone/i) && null !== t.match(/Edge|Touch/i) ? this.type = "windows" : null !== t.match(/iPhone|iPod/i) || t.match(/iPad/) && this.options.iOSUniversalApp ? null !==
        t.match(/Safari/i) && (null !== t.match(/CriOS/i) || 6 > window.Number(t.substr(t.indexOf("OS ") + 3, 3).replace("_", "."))) && (this.type = "ios") : t.match(/\bSilk\/(.*\bMobile Safari\b)?/) || t.match(/\bKF\w/) || t.match("Kindle Fire") ? this.type = "kindle" : null !== t.match(/Android/i) && (this.type = "android");
        if (this.type && !n && !this.getCookie("sb-closed") && !this.getCookie("sb-installed") && (this.scale = "auto" == this.options.scale ? b(window).width() / window.screen.width : this.options.scale, 1 > this.scale && (this.scale = 1), n = b("android" ==
            this.type ? 'meta[name="google-play-app"]' : "ios" == this.type ? 'meta[name="apple-itunes-app"]' : "kindle" == this.type ? 'meta[name="kindle-fire-app"]' : 'meta[name="msApplication-ID"]'), 0 !== n.length)) {
            if ("windows" == this.type)this.appId = b('meta[name="msApplication-PackageFamilyName"]').attr("content"); else if (t = /app-id=([^\s,]+)/.exec(n.attr("content")))this.appId = t[1]; else return;
            this.title = this.options.title ? this.options.title : n.data("title") || b("title").text().replace(/\s*[|\-\u00b7].*$/, "");
            this.author = this.options.author ?
                this.options.author : n.data("author") || (b('meta[name="author"]').length ? b('meta[name="author"]').attr("content") : window.location.hostname);
            this.iconUrl = n.data("icon-url");
            this.price = n.data("price");
            this.options.onInstall = "function" === typeof this.options.onInstall ? this.options.onInstall : function () {
            };
            this.options.onClose = "function" === typeof this.options.onClose ? this.options.onClose : function () {
            };
            this.create();
            this.show();
            this.listen()
        }
    };
    w.prototype = {
        constructor: w, create: function () {
            var n, t = this.options.url ?
                this.options.url : ("windows" == this.type ? "ms-windows-store:navigate?appid=" : "android" == this.type ? "market://details?id=" : "kindle" == this.type ? "amzn://apps/android?asin=" : "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id") + this.appId, p = this.price || this.options.price, u = p ? p + ("android" == this.type ? this.options.inGooglePlay : "kindle" == this.type ? this.options.inAmazonAppStore : "ios" == this.type ? this.options.inAppStore : this.options.inWindowsStore) : "", p = null === this.options.iconGloss ? "ios" == this.type :
                this.options.iconGloss;
            "android" == this.type && this.options.GooglePlayParams && (t = t + "&referrer=" + this.options.GooglePlayParams);
            t = '<div id="smartbanner" class="' + this.type + '"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>' + this.title + '</strong><div class="star-rating"></div><span>' + u + '</span></div><a href="' + t + '" class="sb-button"><span>' + this.options.button + "</span></a></div></div>";
            this.options.layer ? b(this.options.appendToSelector).append(t) :
                b(this.options.appendToSelector).prepend(t);
            this.options.icon ? n = this.options.icon : this.iconUrl ? n = this.iconUrl : 0 < b('link[rel="apple-touch-icon-precomposed"]').length ? (n = b('link[rel="apple-touch-icon-precomposed"]').attr("href"), null === this.options.iconGloss && (p = !1)) : 0 < b('link[rel="apple-touch-icon"]').length ? n = b('link[rel="apple-touch-icon"]').attr("href") : 0 < b('meta[name="msApplication-TileImage"]').length ? n = b('meta[name="msApplication-TileImage"]').attr("content") : 0 < b('meta[name="msapplication-TileImage"]').length &&
            (n = b('meta[name="msapplication-TileImage"]').attr("content"));
            n ? (b("#smartbanner .sb-icon").css("background-image", "url(" + n + ")"), p && b("#smartbanner .sb-icon").addClass("gloss")) : b("#smartbanner").addClass("no-icon");
            this.bannerHeight = b("#smartbanner").outerHeight() + 2;
            1 < this.scale && (b("#smartbanner").css("top", parseFloat(b("#smartbanner").css("top")) * this.scale).css("height", parseFloat(b("#smartbanner").css("height")) * this.scale).hide(), b("#smartbanner .sb-container").css("-webkit-transform", "scale(" +
                this.scale + ")").css("-msie-transform", "scale(" + this.scale + ")").css("-moz-transform", "scale(" + this.scale + ")").css("width", b(window).width() / this.scale));
            b("#smartbanner").css("position", this.options.layer ? "absolute" : "static")
        }, listen: function () {
            b("#smartbanner .sb-close").on("click", b.proxy(this.close, this));
            b("#smartbanner .sb-button").on("click", b.proxy(this.install, this))
        }, show: function (n) {
            var t = b("#smartbanner");
            t.stop();
            this.options.layer ? (t.animate({top: 0, display: "block"}, this.options.speedIn).addClass("shown").show(),
                b(this.pushSelector).animate({paddingTop: this.origHtmlMargin + this.bannerHeight * this.scale}, this.options.speedIn, "swing", n)) : b.support.transition ? (t.animate({top: 0}, this.options.speedIn).addClass("shown"), b(this.pushSelector).addClass("sb-animation").one(b.support.transition.end, function () {
                b("html").removeClass("sb-animation");
                n && n()
            }).emulateTransitionEnd(this.options.speedIn).css("margin-top", this.origHtmlMargin + this.bannerHeight * this.scale)) : t.slideDown(this.options.speedIn).addClass("shown")
        },
        hide: function (n) {
            var t = b("#smartbanner");
            t.stop();
            this.options.layer ? (t.animate({
                top: -1 * this.bannerHeight * this.scale,
                display: "block"
            }, this.options.speedIn).removeClass("shown"), b(this.pushSelector).animate({paddingTop: this.origHtmlMargin}, this.options.speedIn, "swing", n)) : b.support.transition ? ("android" !== this.type ? t.css("top", -1 * this.bannerHeight * this.scale).removeClass("shown") : t.css({display: "none"}).removeClass("shown"), b(this.pushSelector).addClass("sb-animation").one(b.support.transition.end,
                function () {
                    b("html").removeClass("sb-animation");
                    n && n()
                }).emulateTransitionEnd(this.options.speedOut).css("margin-top", this.origHtmlMargin)) : t.slideUp(this.options.speedOut).removeClass("shown")
        }, close: function (b) {
            b.preventDefault();
            this.hide();
            this.setCookie("sb-closed", "true", this.options.daysHidden);
            this.options.onClose(b)
        }, install: function (b) {
            this.options.hideOnInstall && this.hide();
            this.setCookie("sb-installed", "true", this.options.daysReminder);
            this.options.onInstall(b)
        }, setCookie: function (b,
                                t, p) {
            var u = new Date;
            u.setDate(u.getDate() + p);
            t = encodeURI(t) + (null === p ? "" : "; expires=" + u.toUTCString());
            document.cookie = b + "=" + t + "; path=/;"
        }, getCookie: function (b) {
            var t, p, u, h = document.cookie.split(";");
            for (t = 0; t < h.length; t++)if (p = h[t].substr(0, h[t].indexOf("=")), u = h[t].substr(h[t].indexOf("=") + 1), p = p.replace(/^\s+|\s+$/g, ""), p == b)return decodeURI(u);
            return null
        }, switchType: function () {
            var n = this;
            this.hide(function () {
                n.type = "android" == n.type ? "ios" : "android";
                var t = b("android" == n.type ? 'meta[name="google-play-app"]' :
                    'meta[name="apple-itunes-app"]').attr("content");
                n.appId = /app-id=([^\s,]+)/.exec(t)[1];
                b("#smartbanner").detach();
                n.create();
                n.show()
            })
        }
    };
    b.smartbanner = function (n) {
        var t = b(window), p = t.data("smartbanner");
        p || t.data("smartbanner", p = new w("object" == typeof n && n));
        if ("string" == typeof n)p[n]()
    };
    b.smartbanner.defaults = {
        title: null,
        author: null,
        price: "FREE",
        appStoreLanguage: "us",
        inAppStore: "On the App Store",
        inGooglePlay: "In Google Play",
        inAmazonAppStore: "In the Amazon Appstore",
        inWindowsStore: "In the Windows Store",
        GooglePlayParams: null,
        icon: null,
        iconGloss: null,
        button: "VIEW",
        url: null,
        scale: "auto",
        speedIn: 300,
        speedOut: 400,
        daysHidden: 15,
        daysReminder: 90,
        force: null,
        hideOnInstall: !0,
        layer: !1,
        iOSUniversalApp: !0,
        appendToSelector: "body",
        pushSelector: "html"
    };
    b.smartbanner.Constructor = w;
    void 0 === b.support.transition && (b.fn.emulateTransitionEnd = function (n) {
        var t = !1, p = this;
        b(this).one(b.support.transition.end, function () {
            t = !0
        });
        setTimeout(function () {
            t || b(p).trigger(b.support.transition.end)
        }, n);
        return this
    }, b(function () {
        var n =
            b.support, t;
        a:{
            t = document.createElement("smartbanner");
            var p = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }, u;
            for (u in p)if (void 0 !== t.style[u]) {
                t = {end: p[u]};
                break a
            }
            t = !1
        }
        n.transition = t
    }))
});