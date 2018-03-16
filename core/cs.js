! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    (function(e) {
        "use strict";
        var t = n(16),
            a = n(121),
            r = n(17);
        if (!window._8o9nzt9e7oh) {
            window._8o9nzt9e7oh = !0;
            var s = function() {
                var n = 0;
                chrome['runtime'].sendMessage({
                    fn: "getSgmtDiff"
                }, function(e) {
                    n = e
                }), chrome['runtime'].onMessage.addListener(function(e) {
                    "setUnreadCount" == e.fn && s.setUnreadCount(e.count)
                });
                var i = function() {
                        return null != document.getElementById("vpv-item")
                    },
                    o = 0;
                return {
                    init: function() {
                        a.Templates.init(function() {
                            s.addMenuItem()
                        })
                    },
                    setUnreadCount: function(e) {
                        var t = document.getElementById("vpv-item").querySelector(".left_count_wrap");
                        e ? (document.getElementById("vpv-item").querySelector(".left_count").textContent = e, t.style.display = "") : t.style.display = "none"
                    },
                    addMenuItem: function() {
                        if (!i()) {
                            o++;
                            var e = document.createElement("div");
                            e.innerHTML = a.Templates.render("item", {
                                itemName: t.L.s.visitors
                            });
                            var n = e.children[0];
                            n.querySelector("a").addEventListener("click", s.showPopup);
                            var r = document.getElementById("l_pr").nextSibling;
                            r.parentNode.insertBefore(n, r), !i() && o < 300 && setTimeout(function() {
                                s.addMenuItem()
                            }, 100), chrome['runtime'].sendMessage({
                                fn: "getUnreadCount"
                            }, s.setUnreadCount)
                        }
                    },
                    showPopup: function() {
                        var s;
                        event.preventDefault(), chrome['runtime'].sendMessage({
                            fn: "resetUnreadCount"
                        }), s = function(s) {
                            var i = "",
                                o = Date.now() - n;
                            s.forEach(function(e) {
                                e.friendlyDate = r(e.date, "X").from(o), i += a.Templates.render("user", e)
                            }), 0 == i.length && (i = a.Templates.render("msg", {
                                msg: t.L.s.nothingToShow
                            }));
                            var d = a.Templates.render("popup", {
                                    list: i,
                                    popupTitle: t.L.s.popupTitle,
                                    removeBtnLabel: t.L.s.removeBtnLabel,
                                    shareBtnLabel: t.L.s.shareBtnLabel
                                }),
                                u = document.createElement("div");
                            u.innerHTML = d, u = u.children[0], e(u).find(".layerCancel, .box_x_button, a").click(function() {
                                u.remove()
                            }), e(u).find(".vpv-share").click(function() {
                                chrome['runtime'].sendMessage({
                                    fn: "App.event",
                                    v1: "click",
                                    v2: "click-share"
                                });
                                var e = screen.width / 2 - 250,
                                    n = screen.height / 2 - 200;
                                window.open("http://vk.com/share.php?url=http://plugtopus.agency/", "name", "width=500,height=400,left=" + e + ",top=" + n)
                            }), document.body.appendChild(u)
                        }, chrome['runtime'].sendMessage({
                            fn: "getUsers"
                        }, function(e) {
                            s(e)
                        })
                    }
                }
            }();
            s.init(), window.Page = s
        }
    }).call(t, n(15))
}, , , , , , , , , , , , , , , function(e, t, n) {
    var a;
    ! function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";

        function s(e, t) {
            var n = (t = t || $).createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = oe.type(e);
            return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Me.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return ee.call(t, e) > -1 !== n && 1 === e.nodeType
            })
        }

        function d(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function u(e) {
            return e
        }

        function _(e) {
            throw e
        }

        function l(e, t, n) {
            var a;
            try {
                e && oe.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && oe.isFunction(a = e.then) ? a.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function m() {
            $.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), oe.ready()
        }

        function c() {
            this.expando = oe.expando + c.uid++
        }

        function h(e, t, n) {
            var a;
            if (void 0 === n && 1 === e.nodeType)
                if (a = "data-" + t.replace(He, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? JSON.parse(n) : n)
                    } catch (e) {}
                    Se.set(e, t, n)
                } else n = void 0;
            return n
        }

        function f(e, t, n, a) {
            var r, s = 1,
                i = 20,
                o = a ? function() {
                    return a.cur()
                } : function() {
                    return oe.css(e, t, "")
                },
                d = o(),
                u = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
                _ = (oe.cssNumber[t] || "px" !== u && +d) && Pe.exec(oe.css(e, t));
            if (_ && _[3] !== u) {
                u = u || _[3], n = n || [], _ = +d || 1;
                do {
                    s = s || ".5", _ /= s, oe.style(e, t, _ + u)
                } while (s !== (s = o() / d) && 1 !== s && --i)
            }
            return n && (_ = +_ || +d || 0, r = n[1] ? _ + (n[1] + 1) * n[2] : +n[2], a && (a.unit = u, a.start = _, a.end = r)), r
        }

        function p(e, t) {
            for (var n, a, r = [], s = 0, i = e.length; s < i; s++) a = e[s], a.style && (n = a.style.display, t ? ("none" === n && (r[s] = be.get(a, "display") || null, r[s] || (a.style.display = "")), "" === a.style.display && Ae(a) && (r[s] = (o = a, d = void 0, u = void 0, void 0, l = void 0, u = o.ownerDocument, _ = o.nodeName, l = Fe[_], l || (d = u.body.appendChild(u.createElement(_)), l = oe.css(d, "display"), d.parentNode.removeChild(d), "none" === l && (l = "block"), Fe[_] = l, l)))) : "none" !== n && (r[s] = "none", be.set(a, "display", n)));
            var o, d, u, _, l;
            for (s = 0; s < i; s++) null != r[s] && (e[s].style.display = r[s]);
            return e
        }

        function M(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
        }

        function y(e, t) {
            for (var n = 0, a = e.length; n < a; n++) be.set(e[n], "globalEval", !t || be.get(t[n], "globalEval"))
        }

        function L(e, t, n, a, r) {
            for (var s, i, o, d, u, _, l = t.createDocumentFragment(), m = [], c = 0, h = e.length; c < h; c++)
                if (s = e[c], s || 0 === s)
                    if ("object" === oe.type(s)) oe.merge(m, s.nodeType ? [s] : s);
                    else if (Ie.test(s)) {
                        for (i = i || l.appendChild(t.createElement("div")), o = (Oe.exec(s) || ["", ""])[1].toLowerCase(), d = ze[o] || ze._default, i.innerHTML = d[1] + oe.htmlPrefilter(s) + d[2], _ = d[0]; _--;) i = i.lastChild;
                        oe.merge(m, i.childNodes), (i = l.firstChild).textContent = ""
                    } else m.push(t.createTextNode(s));
            for (l.textContent = "", c = 0; s = m[c++];)
                if (a && oe.inArray(s, a) > -1) r && r.push(s);
                else if (u = oe.contains(s.ownerDocument, s), i = M(l.appendChild(s), "script"), u && y(i), n)
                    for (_ = 0; s = i[_++];) Ne.test(s.type || "") && n.push(s);
            return l
        }

        function Y() {
            return !0
        }

        function g() {
            return !1
        }

        function v() {
            try {
                return $.activeElement
            } catch (e) {}
        }

        function k(e, t, n, a, r, s) {
            var i, o;
            if ("object" == typeof t) {
                "string" != typeof n && (a = a || n, n = void 0);
                for (o in t) k(e, o, n, a, t[o], s);
                return e
            }
            if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, a = void 0) : (r = a, a = n, n = void 0)), !1 === r) r = g;
            else if (!r) return e;
            return 1 === s && (i = r, (r = function(e) {
                return oe().off(e), i.apply(this, arguments)
            }).guid = i.guid || (i.guid = oe.guid++)), e.each(function() {
                oe.event.add(this, t, r, a, n)
            })
        }

        function D(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
        }

        function T(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function w(e) {
            var t = Ke.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function b(e, t) {
            var n, a, r, s, i, o, d, u;
            if (1 === t.nodeType) {
                if (be.hasData(e) && (s = be.access(e), i = be.set(t, s), u = s.events)) {
                    delete i.handle, i.events = {};
                    for (r in u)
                        for (n = 0, a = u[r].length; n < a; n++) oe.event.add(t, r, u[r][n])
                }
                Se.hasData(e) && (o = Se.access(e), d = oe.extend({}, o), Se.set(t, d))
            }
        }

        function S(e, t, n, a) {
            t = Z.apply([], t);
            var r, i, o, d, u, _, l = 0,
                m = e.length,
                c = m - 1,
                h = t[0],
                f = oe.isFunction(h);
            if (f || m > 1 && "string" == typeof h && !ie.checkClone && Xe.test(h)) return e.each(function(r) {
                var s = e.eq(r);
                f && (t[0] = h.call(this, r, s.html())), S(s, t, n, a)
            });
            if (m && (i = (r = L(t, e[0].ownerDocument, !1, e, a)).firstChild, 1 === r.childNodes.length && (r = i), i || a)) {
                for (d = (o = oe.map(M(r, "script"), T)).length; l < m; l++) u = r, l !== c && (u = oe.clone(u, !0, !0), d && oe.merge(o, M(u, "script"))), n.call(e[l], u, l);
                if (d)
                    for (_ = o[o.length - 1].ownerDocument, oe.map(o, w), l = 0; l < d; l++) u = o[l], Ne.test(u.type || "") && !be.access(u, "globalEval") && oe.contains(_, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : s(u.textContent.replace(Ze, ""), _))
            }
            return e
        }

        function x(e, t, n) {
            for (var a, r = t ? oe.filter(t, e) : e, s = 0; null != (a = r[s]); s++) n || 1 !== a.nodeType || oe.cleanData(M(a)), a.parentNode && (n && oe.contains(a.ownerDocument, a) && y(M(a, "script")), a.parentNode.removeChild(a));
            return e
        }

        function H(e, t, n) {
            var a, r, s, i, o = e.style;
            return (n = n || tt(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || oe.contains(e.ownerDocument, e) || (i = oe.style(e, t)), !ie.pixelMarginRight() && et.test(i) && Qe.test(t) && (a = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = a, o.minWidth = r, o.maxWidth = s)), void 0 !== i ? i + "" : i
        }

        function j(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function P(e) {
            if (e in it) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                if (e = st[n] + t, e in it) return e
        }

        function E(e, t, n) {
            var a = Pe.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
        }

        function A(e, t, n, a, r) {
            for (var s = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; s < 4; s += 2) "margin" === n && (i += oe.css(e, n + Ee[s], !0, r)), a ? ("content" === n && (i -= oe.css(e, "padding" + Ee[s], !0, r)), "margin" !== n && (i -= oe.css(e, "border" + Ee[s] + "Width", !0, r))) : (i += oe.css(e, "padding" + Ee[s], !0, r), "padding" !== n && (i += oe.css(e, "border" + Ee[s] + "Width", !0, r)));
            return i
        }

        function W(e, t, n) {
            var a, r = !0,
                s = tt(e),
                i = "border-box" === oe.css(e, "boxSizing", !1, s);
            if (e.getClientRects().length && (a = e.getBoundingClientRect()[t]), a <= 0 || null == a) {
                if (((a = H(e, t, s)) < 0 || null == a) && (a = e.style[t]), et.test(a)) return a;
                r = i && (ie.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + A(e, t, n || (i ? "border" : "content"), r, s) + "px"
        }

        function F(e, t, n, a, r) {
            return new F.prototype.init(e, t, n, a, r)
        }

        function C() {
            dt && (n.requestAnimationFrame(C), oe.fx.tick())
        }

        function O() {
            return n.setTimeout(function() {
                ot = void 0
            }), ot = oe.now()
        }

        function N(e, t) {
            var n, a = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; a < 4; a += 2 - t) n = Ee[a], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function z(e, t, n) {
            for (var a, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), s = 0, i = r.length; s < i; s++)
                if (a = r[s].call(n, t, e)) return a
        }

        function R(e, t, n) {
            var a, r, s = 0,
                i = R.prefilters.length,
                o = oe.Deferred().always(function() {
                    delete d.elem
                }),
                d = function() {
                    if (r) return !1;
                    for (var t = ot || O(), n = Math.max(0, u.startTime + u.duration - t), a = 1 - (n / u.duration || 0), s = 0, i = u.tweens.length; s < i; s++) u.tweens[s].run(a);
                    return o.notifyWith(e, [u, a, n]), a < 1 && i ? n : (o.resolveWith(e, [u]), !1)
                },
                u = o.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {},
                        easing: oe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var a = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(a), a
                    },
                    stop: function(t) {
                        var n = 0,
                            a = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < a; n++) u.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                    }
                }),
                _ = u.props;
            for (function(e, t) {
                var n, a, r, s, i;
                for (n in e)
                    if (a = oe.camelCase(n), r = t[a], s = e[n], oe.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== a && (e[a] = s, delete e[n]), i = oe.cssHooks[a], i && "expand" in i) {
                        s = i.expand(s), delete e[a];
                        for (n in s) n in e || (e[n] = s[n], t[n] = r)
                    } else t[a] = r
            }(_, u.opts.specialEasing); s < i; s++)
                if (a = R.prefilters[s].call(u, e, _, u.opts)) return oe.isFunction(a.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(a.stop, a)), a;
            return oe.map(_, z, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(d, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function J(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function I(e, t, n, a) {
            var r;
            if (oe.isArray(t)) oe.each(t, function(t, r) {
                n || Dt.test(e) ? a(e, r) : I(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
            });
            else if (n || "object" !== oe.type(t)) a(e, t);
            else
                for (r in t) I(e + "[" + r + "]", t[r], n, a)
        }

        function q(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var a, r = 0,
                    s = t.toLowerCase().match(ve) || [];
                if (oe.isFunction(n))
                    for (; a = s[r++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
            }
        }

        function B(e, t, n, a) {
            function r(o) {
                var d;
                return s[o] = !0, oe.each(e[o] || [], function(e, o) {
                    var u = o(t, n, a);
                    return "string" != typeof u || i || s[u] ? i ? !(d = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), d
            }
            var s = {},
                i = e === Wt;
            return r(t.dataTypes[0]) || !s["*"] && r("*")
        }

        function U(e, t) {
            var n, a, r = oe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
            return a && oe.extend(!0, e, a), e
        }

        function G(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var V = [],
            $ = n.document,
            X = Object.getPrototypeOf,
            K = V.slice,
            Z = V.concat,
            Q = V.push,
            ee = V.indexOf,
            te = {},
            ne = te.toString,
            ae = te.hasOwnProperty,
            re = ae.toString,
            se = re.call(Object),
            ie = {},
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ue = /^-ms-/,
            _e = /-([a-z])/g,
            le = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: "3.1.0",
            constructor: oe,
            length: 0,
            toArray: function() {
                return K.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : K.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return oe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(K.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: Q,
            sort: V.sort,
            splice: V.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, a, r, s, i = arguments[0] || {},
                o = 1,
                d = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[o] || {}, o++), "object" == typeof i || oe.isFunction(i) || (i = {}), o === d && (i = this, o--); o < d; o++)
                if (null != (e = arguments[o]))
                    for (t in e) n = i[t], a = e[t], i !== a && (u && a && (oe.isPlainObject(a) || (r = oe.isArray(a))) ? (r ? (r = !1, s = n && oe.isArray(n) ? n : []) : s = n && oe.isPlainObject(n) ? n : {}, i[t] = oe.extend(u, s, a)) : void 0 !== a && (i[t] = a));
            return i
        }, oe.extend({
            expando: "jQuery" + ("3.1.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = oe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ne.call(e) || (t = X(e)) && (n = ae.call(t, "constructor") && t.constructor, "function" != typeof n || re.call(n) !== se))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                s(e)
            },
            camelCase: function(e) {
                return e.replace(ue, "ms-").replace(_e, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, a = 0;
                if (i(e))
                    for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
                else
                    for (a in e)
                        if (!1 === t.call(e[a], a, e[a])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(de, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ee.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, a = 0, r = e.length; a < n; a++) e[r++] = t[a];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var a, r = [], s = 0, i = e.length, o = !n; s < i; s++) a = !t(e[s], s), a !== o && r.push(e[s]);
                return r
            },
            map: function(e, t, n) {
                var a, r, s = 0,
                    o = [];
                if (i(e))
                    for (a = e.length; s < a; s++) r = t(e[s], s, n), null != r && o.push(r);
                else
                    for (s in e) r = t(e[s], s, n), null != r && o.push(r);
                return Z.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, a, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return a = K.call(arguments, 2), r = function() {
                    return e.apply(t || this, a.concat(K.call(arguments)))
                }, r.guid = e.guid = e.guid || oe.guid++, r
            },
            now: Date.now,
            support: ie
        }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = V[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            te["[object " + t + "]"] = t.toLowerCase()
        });
        var me = function(e) {
            function t(e, t, n, a) {
                var r, s, i, o, d, u, _, m = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!a && ((t ? t.ownerDocument || t : N) !== j && H(t), t = t || j, E)) {
                    if (11 !== h && (d = fe.exec(e)))
                        if (r = d[1]) {
                            if (9 === h) {
                                if (!(i = t.getElementById(r))) return n;
                                if (i.id === r) return n.push(i), n
                            } else if (m && (i = m.getElementById(r)) && C(t, i) && i.id === r) return n.push(i), n
                        } else {
                            if (d[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = d[3]) && Y.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (Y.qsa && !q[e + " "] && (!A || !A.test(e))) {
                        if (1 !== h) m = t, _ = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(Le, Ye) : t.setAttribute("id", o = O), s = (u = D(e)).length; s--;) u[s] = "#" + o + " " + c(u[s]);
                            _ = u.join(","), m = pe.test(e) && l(t.parentNode) || t
                        }
                        if (_) try {
                            return X.apply(n, m.querySelectorAll(_)), n
                        } catch (e) {} finally {
                            o === O && t.removeAttribute("id")
                        }
                    }
                }
                return w(e.replace(se, "$1"), t, n, a)
            }

            function n() {
                var e = [];
                return function t(n, a) {
                    return e.push(n + " ") > g.cacheLength && delete t[e.shift()], t[n + " "] = a
                }
            }

            function a(e) {
                return e[O] = !0, e
            }

            function r(e) {
                var t = j.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t) {
                for (var n = e.split("|"), a = n.length; a--;) g.attrHandle[n[a]] = t
            }

            function i(e, t) {
                var n = t && e,
                    a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (a) return a;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function d(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && !1 === t.disabled && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !ve(t)) !== e)
                }
            }

            function _(e) {
                return a(function(t) {
                    return t = +t, a(function(n, a) {
                        for (var r, s = e([], n.length, t), i = s.length; i--;) n[r = s[i]] && (n[r] = !(a[r] = n[r]))
                    })
                })
            }

            function l(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function m() {}

            function c(e) {
                for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                return a
            }

            function h(e, t, n) {
                var a = t.dir,
                    r = t.next,
                    s = r || a,
                    i = n && "parentNode" === s,
                    o = R++;
                return t.first ? function(t, n, r) {
                    for (; t = t[a];)
                        if (1 === t.nodeType || i) return e(t, n, r)
                } : function(t, n, d) {
                    var u, _, l, m = [z, o];
                    if (d) {
                        for (; t = t[a];)
                            if ((1 === t.nodeType || i) && e(t, n, d)) return !0
                    } else
                        for (; t = t[a];)
                            if (1 === t.nodeType || i)
                                if (l = t[O] || (t[O] = {}), _ = l[t.uniqueID] || (l[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[a] || t;
                                else {
                                    if ((u = _[s]) && u[0] === z && u[1] === o) return m[2] = u[2];
                                    if (_[s] = m, m[2] = e(t, n, d)) return !0
                                }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, a) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, a)) return !1;
                    return !0
                } : e[0]
            }

            function p(e, t, n, a, r) {
                for (var s, i = [], o = 0, d = e.length, u = null != t; o < d; o++)(s = e[o]) && (n && !n(s, a, r) || (i.push(s), u && t.push(o)));
                return i
            }

            function M(e, n, r, s, i, o) {
                return s && !s[O] && (s = M(s)), i && !i[O] && (i = M(i, o)), a(function(a, o, d, u) {
                    var _, l, m, c = [],
                        h = [],
                        f = o.length,
                        M = a || function(e, n, a) {
                            for (var r = 0, s = n.length; r < s; r++) t(e, n[r], a);
                            return a
                        }(n || "*", d.nodeType ? [d] : d, []),
                        y = !e || !a && n ? M : p(M, c, e, d, u),
                        L = r ? i || (a ? e : f || s) ? [] : o : y;
                    if (r && r(y, L, d, u), s)
                        for (_ = p(L, h), s(_, [], d, u), l = _.length; l--;)(m = _[l]) && (L[h[l]] = !(y[h[l]] = m));
                    if (a) {
                        if (i || e) {
                            if (i) {
                                for (_ = [], l = L.length; l--;)(m = L[l]) && _.push(y[l] = m);
                                i(null, L = [], _, u)
                            }
                            for (l = L.length; l--;)(m = L[l]) && (_ = i ? Z(a, m) : c[l]) > -1 && (a[_] = !(o[_] = m))
                        }
                    } else L = p(L === o ? L.splice(f, L.length) : L), i ? i(null, o, L, u) : X.apply(o, L)
                })
            }

            function y(e) {
                for (var t, n, a, r = e.length, s = g.relative[e[0].type], i = s || g.relative[" "], o = s ? 1 : 0, d = h(function(e) {
                    return e === t
                }, i, !0), u = h(function(e) {
                    return Z(t, e) > -1
                }, i, !0), _ = [function(e, n, a) {
                    var r = !s && (a || n !== b) || ((t = n).nodeType ? d(e, n, a) : u(e, n, a));
                    return t = null, r
                }]; o < r; o++)
                    if (n = g.relative[e[o].type]) _ = [h(f(_), n)];
                    else {
                        if ((n = g.filter[e[o].type].apply(null, e[o].matches))[O]) {
                            for (a = ++o; a < r && !g.relative[e[a].type]; a++);
                            return M(o > 1 && f(_), o > 1 && c(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, o < a && y(e.slice(o, a)), a < r && y(e = e.slice(a)), a < r && c(e))
                        }
                        _.push(n)
                    }
                return f(_)
            }
            var L, Y, g, v, k, D, T, w, b, S, x, H, j, P, E, A, W, F, C, O = "sizzle" + 1 * new Date,
                N = e.document,
                z = 0,
                R = 0,
                J = n(),
                I = n(),
                q = n(),
                B = function(e, t) {
                    return e === t && (x = !0), 0
                },
                U = {}.hasOwnProperty,
                G = [],
                V = G.pop,
                $ = G.push,
                X = G.push,
                K = G.slice,
                Z = function(e, t) {
                    for (var n = 0, a = e.length; n < a; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ae = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                re = new RegExp(ee + "+", "g"),
                se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                ie = new RegExp("^" + ee + "*," + ee + "*"),
                oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                de = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                ue = new RegExp(ae),
                _e = new RegExp("^" + te + "$"),
                le = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ne),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Q + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ce = /^h\d$/i,
                he = /^[^{]+\{\s*\[native \w/,
                fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                pe = /[+~]/,
                Me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function(e, t, n) {
                    var a = "0x" + t - 65536;
                    return a != a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                },
                Le = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                Ye = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ge = function() {
                    H()
                },
                ve = h(function(e) {
                    return !0 === e.disabled
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                X.apply(G = K.call(N.childNodes), N.childNodes), G[N.childNodes.length].nodeType
            } catch (e) {
                X = {
                    apply: G.length ? function(e, t) {
                        $.apply(e, K.call(t))
                    } : function(e, t) {
                        for (var n = e.length, a = 0; e[n++] = t[a++];);
                        e.length = n - 1
                    }
                }
            }
            Y = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, H = t.setDocument = function(e) {
                var t, n, a = e ? e.ownerDocument || e : N;
                return a !== j && 9 === a.nodeType && a.documentElement ? (P = (j = a).documentElement, E = !k(j), N !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ge, !1) : n.attachEvent && n.attachEvent("onunload", ge)), Y.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), Y.getElementsByTagName = r(function(e) {
                    return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                }), Y.getElementsByClassName = he.test(j.getElementsByClassName), Y.getById = r(function(e) {
                    return P.appendChild(e).id = O, !j.getElementsByName || !j.getElementsByName(O).length
                }), Y.getById ? (g.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, g.filter.ID = function(e) {
                    var t = e.replace(Me, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete g.find.ID, g.filter.ID = function(e) {
                    var t = e.replace(Me, ye);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), g.find.TAG = Y.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : Y.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, a = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[r++];) 1 === n.nodeType && a.push(n);
                        return a
                    }
                    return s
                }, g.find.CLASS = Y.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, W = [], A = [], (Y.qsa = he.test(j.querySelectorAll)) && (r(function(e) {
                    P.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + ee + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + O + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || A.push(".#.+[+~]")
                }), r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = j.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && A.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
                })), (Y.matchesSelector = he.test(F = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                    Y.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), W.push("!=", ae)
                }), A = A.length && new RegExp(A.join("|")), W = W.length && new RegExp(W.join("|")), t = he.test(P.compareDocumentPosition), C = t || he.test(P.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        a = t && t.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, B = t ? function(e, t) {
                    if (e === t) return x = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Y.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === N && C(N, e) ? -1 : t === j || t.ownerDocument === N && C(N, t) ? 1 : S ? Z(S, e) - Z(S, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return x = !0, 0;
                    var n, a = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        o = [e],
                        d = [t];
                    if (!r || !s) return e === j ? -1 : t === j ? 1 : r ? -1 : s ? 1 : S ? Z(S, e) - Z(S, t) : 0;
                    if (r === s) return i(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) d.unshift(n);
                    for (; o[a] === d[a];) a++;
                    return a ? i(o[a], d[a]) : o[a] === N ? -1 : d[a] === N ? 1 : 0
                }, j) : j
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== j && H(e), n = n.replace(de, "='$1']"), Y.matchesSelector && E && !q[n + " "] && (!W || !W.test(n)) && (!A || !A.test(n))) try {
                    var a = F.call(e, n);
                    if (a || Y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                } catch (e) {}
                return t(n, j, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && H(e), C(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== j && H(e);
                var n = g.attrHandle[t.toLowerCase()],
                    a = n && U.call(g.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== a ? a : Y.attributes || !E ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, t.escape = function(e) {
                return (e + "").replace(Le, Ye)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    a = 0,
                    r = 0;
                if (x = !Y.detectDuplicates, S = !Y.sortStable && e.slice(0), e.sort(B), x) {
                    for (; t = e[r++];) t === e[r] && (a = n.push(r));
                    for (; a--;) e.splice(n[a], 1)
                }
                return S = null, e
            }, v = t.getText = function(e) {
                var t, n = "",
                    a = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += v(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[a++];) n += v(t);
                return n
            }, (g = t.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: le,
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
                        return e[1] = e[1].replace(Me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(Me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return le.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Me, ye).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = J[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && J(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, a) {
                        return function(r) {
                            var s = t.attr(r, e);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === a : "!=" === n ? s !== a : "^=" === n ? a && 0 === s.indexOf(a) : "*=" === n ? a && s.indexOf(a) > -1 : "$=" === n ? a && s.slice(-a.length) === a : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(a) > -1 : "|=" === n && (s === a || s.slice(0, a.length + 1) === a + "-"))
                        }
                    },
                    CHILD: function(e, t, n, a, r) {
                        var s = "nth" !== e.slice(0, 3),
                            i = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === a && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, d) {
                            var u, _, l, m, c, h, f = s !== i ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                M = o && t.nodeName.toLowerCase(),
                                y = !d && !o,
                                L = !1;
                            if (p) {
                                if (s) {
                                    for (; f;) {
                                        for (m = t; m = m[f];)
                                            if (o ? m.nodeName.toLowerCase() === M : 1 === m.nodeType) return !1;
                                        h = f = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [i ? p.firstChild : p.lastChild], i && y) {
                                    for (L = (c = (u = (_ = (l = (m = p)[O] || (m[O] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[e] || [])[0] === z && u[1]) && u[2], m = c && p.childNodes[c]; m = ++c && m && m[f] || (L = c = 0) || h.pop();)
                                        if (1 === m.nodeType && ++L && m === t) {
                                            _[e] = [z, c, L];
                                            break
                                        }
                                } else if (y && (m = t, l = m[O] || (m[O] = {}), _ = l[m.uniqueID] || (l[m.uniqueID] = {}), u = _[e] || [], c = u[0] === z && u[1], L = c), !1 === L)
                                    for (;
                                        (m = ++c && m && m[f] || (L = c = 0) || h.pop()) && ((o ? m.nodeName.toLowerCase() !== M : 1 !== m.nodeType) || !++L || (y && (l = m[O] || (m[O] = {}), _ = l[m.uniqueID] || (l[m.uniqueID] = {}), _[e] = [z, L]), m !== t)););
                                return (L -= r) === a || L % a == 0 && L / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, s = g.pseudos[e] || g.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return s[O] ? s(n) : s.length > 1 ? (r = [e, e, "", n], g.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                            for (var a, r = s(e, n), i = r.length; i--;) a = Z(e, r[i]), e[a] = !(t[a] = r[i])
                        }) : function(e) {
                            return s(e, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: a(function(e) {
                        var t = [],
                            n = [],
                            r = T(e.replace(se, "$1"));
                        return r[O] ? a(function(e, t, n, a) {
                            for (var s, i = r(e, null, a, []), o = e.length; o--;)(s = i[o]) && (e[o] = !(t[o] = s))
                        }) : function(e, a, s) {
                            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: a(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: a(function(e) {
                        return e = e.replace(Me, ye),
                            function(t) {
                                return (t.textContent || t.innerText || v(t)).indexOf(e) > -1
                            }
                    }),
                    lang: a(function(e) {
                        return _e.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Me, ye).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !g.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ce.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: _(function() {
                        return [0]
                    }),
                    last: _(function(e, t) {
                        return [t - 1]
                    }),
                    eq: _(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: _(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: _(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: _(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                        return e
                    }),
                    gt: _(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                        return e
                    })
                }
            }).pseudos.nth = g.pseudos.eq;
            for (L in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) g.pseudos[L] = o(L);
            for (L in {
                submit: !0,
                reset: !0
            }) g.pseudos[L] = d(L);
            return m.prototype = g.filters = g.pseudos, g.setFilters = new m, D = t.tokenize = function(e, n) {
                var a, r, s, i, o, d, u, _ = I[e + " "];
                if (_) return n ? 0 : _.slice(0);
                for (o = e, d = [], u = g.preFilter; o;) {
                    a && !(r = ie.exec(o)) || (r && (o = o.slice(r[0].length) || o), d.push(s = [])), a = !1, (r = oe.exec(o)) && (a = r.shift(), s.push({
                        value: a,
                        type: r[0].replace(se, " ")
                    }), o = o.slice(a.length));
                    for (i in g.filter) !(r = le[i].exec(o)) || u[i] && !(r = u[i](r)) || (a = r.shift(), s.push({
                        value: a,
                        type: i,
                        matches: r
                    }), o = o.slice(a.length));
                    if (!a) break
                }
                return n ? o.length : o ? t.error(e) : I(e, d).slice(0)
            }, T = t.compile = function(e, n) {
                var r, s, i, o, d, u, _ = [],
                    l = [],
                    m = q[e + " "];
                if (!m) {
                    for (n || (n = D(e)), r = n.length; r--;) m = y(n[r]), m[O] ? _.push(m) : l.push(m);
                    (m = q(e, (s = l, o = (i = _).length > 0, d = s.length > 0, u = function(e, n, a, r, u) {
                        var _, l, m, c = 0,
                            h = "0",
                            f = e && [],
                            M = [],
                            y = b,
                            L = e || d && g.find.TAG("*", u),
                            Y = z += null == y ? 1 : Math.random() || .1,
                            v = L.length;
                        for (u && (b = n === j || n || u); h !== v && null != (_ = L[h]); h++) {
                            if (d && _) {
                                for (l = 0, n || _.ownerDocument === j || (H(_), a = !E); m = s[l++];)
                                    if (m(_, n || j, a)) {
                                        r.push(_);
                                        break
                                    }
                                u && (z = Y)
                            }
                            o && ((_ = !m && _) && c--, e && f.push(_))
                        }
                        if (c += h, o && h !== c) {
                            for (l = 0; m = i[l++];) m(f, M, n, a);
                            if (e) {
                                if (c > 0)
                                    for (; h--;) f[h] || M[h] || (M[h] = V.call(r));
                                M = p(M)
                            }
                            X.apply(r, M), u && !e && M.length > 0 && c + i.length > 1 && t.uniqueSort(r)
                        }
                        return u && (z = Y, b = y), f
                    }, o ? a(u) : u))).selector = e
                }
                return m
            }, w = t.select = function(e, t, n, a) {
                var r, s, i, o, d, u = "function" == typeof e && e,
                    _ = !a && D(e = u.selector || e);
                if (n = n || [], 1 === _.length) {
                    if ((s = _[0] = _[0].slice(0)).length > 2 && "ID" === (i = s[0]).type && Y.getById && 9 === t.nodeType && E && g.relative[s[1].type]) {
                        if (!(t = (g.find.ID(i.matches[0].replace(Me, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                    }
                    for (r = le.needsContext.test(e) ? 0 : s.length; r-- && (i = s[r], !g.relative[o = i.type]);)
                        if ((d = g.find[o]) && (a = d(i.matches[0].replace(Me, ye), pe.test(s[0].type) && l(t.parentNode) || t))) {
                            if (s.splice(r, 1), !(e = a.length && c(s))) return X.apply(n, a), n;
                            break
                        }
                }
                return (u || T(e, _))(a, t, !E, n, !t || pe.test(e) && l(t.parentNode) || t), n
            }, Y.sortStable = O.split("").sort(B).join("") === O, Y.detectDuplicates = !!x, H(), Y.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), Y.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || s(Q, function(e, t, n) {
                var a;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }), t
        }(n);
        oe.find = me, oe.expr = me.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = me.uniqueSort, oe.text = me.getText, oe.isXMLDoc = me.isXML, oe.contains = me.contains, oe.escapeSelector = me.escape;
        var ce = function(e, t, n) {
                for (var a = [], r = void 0 !== n;
                     (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && oe(e).is(n)) break;
                        a.push(e)
                    }
                return a
            },
            he = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            fe = oe.expr.match.needsContext,
            pe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Me = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var a = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? oe.find.matchesSelector(a, e) ? [a] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n, a = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; t < a; t++)
                        if (oe.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < a; t++) oe.find(e, r[t], n);
                return a > 1 ? oe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(o(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(o(this, e || [], !0))
            },
            is: function(e) {
                return !!o(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var ye, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (oe.fn.init = function(e, t, n) {
            var a, r;
            if (!e) return this;
            if (n = n || ye, "string" == typeof e) {
                if (!(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Le.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (a[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : $, !0)), pe.test(a[1]) && oe.isPlainObject(t))
                        for (a in t) oe.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return (r = $.getElementById(a[2])) && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : oe.makeArray(e, this)
        }).prototype = oe.fn, ye = oe($);
        var Ye = /^(?:parents|prev(?:Until|All))/,
            ge = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.fn.extend({
            has: function(e) {
                var t = oe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (oe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, a = 0,
                    r = this.length,
                    s = [],
                    i = "string" != typeof e && oe(e);
                if (!fe.test(e))
                    for (; a < r; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? oe.uniqueSort(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ee.call(oe(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ce(e, "parentNode", n)
            },
            next: function(e) {
                return d(e, "nextSibling")
            },
            prev: function(e) {
                return d(e, "previousSibling")
            },
            nextAll: function(e) {
                return ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return he((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return he(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, a) {
                var r = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = oe.filter(a, r)), this.length > 1 && (ge[e] || oe.uniqueSort(r), Ye.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var ve = /\S+/g;
        oe.Callbacks = function(e) {
            var t, n;
            e = "string" == typeof e ? (t = e, n = {}, oe.each(t.match(ve) || [], function(e, t) {
                n[t] = !0
            }), n) : oe.extend({}, e);
            var a, r, s, i, o = [],
                d = [],
                u = -1,
                _ = function() {
                    for (i = e.once, s = a = !0; d.length; u = -1)
                        for (r = d.shift(); ++u < o.length;) !1 === o[u].apply(r[0], r[1]) && e.stopOnFalse && (u = o.length, r = !1);
                    e.memory || (r = !1), a = !1, i && (o = r ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (r && !a && (u = o.length - 1, d.push(r)), function t(n) {
                            oe.each(n, function(n, a) {
                                oe.isFunction(a) ? e.unique && l.has(a) || o.push(a) : a && a.length && "string" !== oe.type(a) && t(a)
                            })
                        }(arguments), r && !a && _()), this
                    },
                    remove: function() {
                        return oe.each(arguments, function(e, t) {
                            for (var n;
                                 (n = oe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = d = [], o = r = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = d = [], r || a || (o = r = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, t) {
                        return i || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), a || _()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!s
                    }
                };
            return l
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", oe.Callbacks("memory"), oe.Callbacks("memory"), 2],
                        ["resolve", "done", oe.Callbacks("once memory"), oe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), oe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    a = "pending",
                    r = {
                        state: function() {
                            return a
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, a) {
                                    var r = oe.isFunction(e[a[4]]) && e[a[4]];
                                    s[a[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, a, r) {
                            function s(e, t, a, r) {
                                return function() {
                                    var o = this,
                                        d = arguments,
                                        l = function() {
                                            var n, l;
                                            if (!(e < i)) {
                                                if ((n = a.apply(o, d)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = n && ("object" == typeof n || "function" == typeof n) && n.then, oe.isFunction(l) ? r ? l.call(n, s(i, t, u, r), s(i, t, _, r)) : (i++, l.call(n, s(i, t, u, r), s(i, t, _, r), s(i, t, u, t.notifyWith))) : (a !== u && (o = void 0, d = [n]), (r || t.resolveWith)(o, d))
                                            }
                                        },
                                        m = r ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                oe.Deferred.exceptionHook && oe.Deferred.exceptionHook(n, m.stackTrace), e + 1 >= i && (a !== _ && (o = void 0, d = [n]), t.rejectWith(o, d))
                                            }
                                        };
                                    e ? m() : (oe.Deferred.getStackHook && (m.stackTrace = oe.Deferred.getStackHook()), n.setTimeout(m))
                                }
                            }
                            var i = 0;
                            return oe.Deferred(function(n) {
                                t[0][3].add(s(0, n, oe.isFunction(r) ? r : u, n.notifyWith)), t[1][3].add(s(0, n, oe.isFunction(e) ? e : u)), t[2][3].add(s(0, n, oe.isFunction(a) ? a : _))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, r) : r
                        }
                    },
                    s = {};
                return oe.each(t, function(e, n) {
                    var i = n[2],
                        o = n[5];
                    r[n[1]] = i.add, o && i.add(function() {
                        a = o
                    }, t[3 - e][2].disable, t[0][2].lock), i.add(n[3].fire), s[n[0]] = function() {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[n[0] + "With"] = i.fireWith
                }), r.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    a = Array(n),
                    r = K.call(arguments),
                    s = oe.Deferred(),
                    i = function(e) {
                        return function(n) {
                            a[e] = this, r[e] = arguments.length > 1 ? K.call(arguments) : n, --t || s.resolveWith(a, r)
                        }
                    };
                if (t <= 1 && (l(e, s.done(i(n)).resolve, s.reject), "pending" === s.state() || oe.isFunction(r[n] && r[n].then))) return s.then();
                for (; n--;) l(r[n], i(n), s.reject);
                return s.promise()
            }
        });
        var ke = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        oe.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && ke.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, oe.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var De = oe.Deferred();
        oe.fn.ready = function(e) {
            return De.then(e).catch(function(e) {
                oe.readyException(e)
            }), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || De.resolveWith($, [oe]))
            }
        }), oe.ready.then = De.then, "complete" === $.readyState || "loading" !== $.readyState && !$.documentElement.doScroll ? n.setTimeout(oe.ready) : ($.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var Te = function(e, t, n, a, r, s, i) {
                var o = 0,
                    d = e.length,
                    u = null == n;
                if ("object" === oe.type(n)) {
                    r = !0;
                    for (o in n) Te(e, t, o, n[o], !0, s, i)
                } else if (void 0 !== a && (r = !0, oe.isFunction(a) || (i = !0), u && (i ? (t.call(e, a), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(oe(e), n)
                    })), t))
                    for (; o < d; o++) t(e[o], n, i ? a : a.call(e[o], o, t(e[o], n)));
                return r ? e : u ? t.call(e) : d ? t(e[0], n) : s
            },
            we = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        c.uid = 1, c.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, we(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var a, r = this.cache(e);
                if ("string" == typeof t) r[oe.camelCase(t)] = n;
                else
                    for (a in t) r[oe.camelCase(a)] = t[a];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, a = e[this.expando];
                if (void 0 !== a) {
                    if (void 0 !== t) {
                        oe.isArray(t) ? t = t.map(oe.camelCase) : t = (t = oe.camelCase(t)) in a ? [t] : t.match(ve) || [], n = t.length;
                        for (; n--;) delete a[t[n]]
                    }(void 0 === t || oe.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !oe.isEmptyObject(t)
            }
        };
        var be = new c,
            Se = new c,
            xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            He = /[A-Z]/g;
        oe.extend({
            hasData: function(e) {
                return Se.hasData(e) || be.hasData(e)
            },
            data: function(e, t, n) {
                return Se.access(e, t, n)
            },
            removeData: function(e, t) {
                Se.remove(e, t)
            },
            _data: function(e, t, n) {
                return be.access(e, t, n)
            },
            _removeData: function(e, t) {
                be.remove(e, t)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, a, r, s = this[0],
                    i = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Se.get(s), 1 === s.nodeType && !be.get(s, "hasDataAttrs"))) {
                        for (n = i.length; n--;) i[n] && (a = i[n].name, 0 === a.indexOf("data-") && (a = oe.camelCase(a.slice(5)), h(s, a, r[a])));
                        be.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Se.set(this, e)
                }) : Te(this, function(t) {
                    var n;
                    if (s && void 0 === t) {
                        if (void 0 !== (n = Se.get(s, e))) return n;
                        if (void 0 !== (n = h(s, e))) return n
                    } else this.each(function() {
                        Se.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Se.remove(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var a;
                if (e) return t = (t || "fx") + "queue", a = be.get(e, t), n && (!a || oe.isArray(n) ? a = be.access(e, t, oe.makeArray(n)) : a.push(n)), a || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    a = n.length,
                    r = n.shift(),
                    s = oe._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function() {
                    oe.dequeue(e, t)
                }, s)), !a && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return be.get(e, n) || be.access(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        be.remove(e, [t + "queue", n])
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, a = 1,
                    r = oe.Deferred(),
                    s = this,
                    i = this.length,
                    o = function() {
                        --a || r.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) n = be.get(s[i], e + "queueHooks"), n && n.empty && (a++, n.empty.add(o));
                return o(), r.promise(t)
            }
        });
        var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
            Ee = ["Top", "Right", "Bottom", "Left"],
            Ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && oe.contains(e.ownerDocument, e) && "none" === oe.css(e, "display")
            },
            We = function(e, t, n, a) {
                var r, s, i = {};
                for (s in t) i[s] = e.style[s], e.style[s] = t[s];
                r = n.apply(e, a || []);
                for (s in t) e.style[s] = i[s];
                return r
            },
            Fe = {};
        oe.fn.extend({
            show: function() {
                return p(this, !0)
            },
            hide: function() {
                return p(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ae(this) ? oe(this).show() : oe(this).hide()
                })
            }
        });
        var Ce = /^(?:checkbox|radio)$/i,
            Oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ne = /^$|\/(?:java|ecma)script/i,
            ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
        var Re, Je, Ie = /<|&#?\w+;/;
        Re = $.createDocumentFragment().appendChild($.createElement("div")), (Je = $.createElement("input")).setAttribute("type", "radio"), Je.setAttribute("checked", "checked"), Je.setAttribute("name", "t"), Re.appendChild(Je), ie.checkClone = Re.cloneNode(!0).cloneNode(!0).lastChild.checked, Re.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!Re.cloneNode(!0).lastChild.defaultValue;
        var qe = $.documentElement,
            Be = /^key/,
            Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ge = /^([^.]*)(?:\.(.+)|)/;
        oe.event = {
            global: {},
            add: function(e, t, n, a, r) {
                var s, i, o, d, u, _, l, m, c, h, f, p = be.get(e);
                if (p)
                    for (n.handler && (s = n, n = s.handler, r = s.selector), r && oe.find.matchesSelector(qe, r), n.guid || (n.guid = oe.guid++), (d = p.events) || (d = p.events = {}), (i = p.handle) || (i = p.handle = function(t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(ve) || [""], u = t.length; u--;) o = Ge.exec(t[u]) || [], c = f = o[1], h = (o[2] || "").split(".").sort(), c && (l = oe.event.special[c] || {}, c = (r ? l.delegateType : l.bindType) || c, l = oe.event.special[c] || {}, _ = oe.extend({
                        type: c,
                        origType: f,
                        data: a,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, s), (m = d[c]) || (m = d[c] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(e, a, h, i) || e.addEventListener && e.addEventListener(c, i)), l.add && (l.add.call(e, _), _.handler.guid || (_.handler.guid = n.guid)), r ? m.splice(m.delegateCount++, 0, _) : m.push(_), oe.event.global[c] = !0)
            },
            remove: function(e, t, n, a, r) {
                var s, i, o, d, u, _, l, m, c, h, f, p = be.hasData(e) && be.get(e);
                if (p && (d = p.events)) {
                    for (u = (t = (t || "").match(ve) || [""]).length; u--;)
                        if (o = Ge.exec(t[u]) || [], c = f = o[1], h = (o[2] || "").split(".").sort(), c) {
                            for (l = oe.event.special[c] || {}, m = d[c = (a ? l.delegateType : l.bindType) || c] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = s = m.length; s--;) _ = m[s], !r && f !== _.origType || n && n.guid !== _.guid || o && !o.test(_.namespace) || a && a !== _.selector && ("**" !== a || !_.selector) || (m.splice(s, 1), _.selector && m.delegateCount--, l.remove && l.remove.call(e, _));
                            i && !m.length && (l.teardown && !1 !== l.teardown.call(e, h, p.handle) || oe.removeEvent(e, c, p.handle), delete d[c])
                        } else
                            for (c in d) oe.event.remove(e, c + t[u], n, a, !0);
                    oe.isEmptyObject(d) && be.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, a, r, s, i, o = oe.event.fix(e),
                    d = new Array(arguments.length),
                    u = (be.get(this, "events") || {})[o.type] || [],
                    _ = oe.event.special[o.type] || {};
                for (d[0] = o, t = 1; t < arguments.length; t++) d[t] = arguments[t];
                if (o.delegateTarget = this, !_.preDispatch || !1 !== _.preDispatch.call(this, o)) {
                    for (i = oe.event.handlers.call(this, o, u), t = 0;
                         (r = i[t++]) && !o.isPropagationStopped();)
                        for (o.currentTarget = r.elem, n = 0;
                             (s = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, a = ((oe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, d), void 0 !== a && !1 === (o.result = a) && (o.preventDefault(), o.stopPropagation()));
                    return _.postDispatch && _.postDispatch.call(this, o), o.result
                }
            },
            handlers: function(e, t) {
                var n, a, r, s, i = [],
                    o = t.delegateCount,
                    d = e.target;
                if (o && d.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && (!0 !== d.disabled || "click" !== e.type)) {
                            for (a = [], n = 0; n < o; n++) s = t[n], r = s.selector + " ", void 0 === a[r] && (a[r] = s.needsContext ? oe(r, this).index(d) > -1 : oe.find(r, this, null, [d]).length), a[r] && a.push(s);
                            a.length && i.push({
                                elem: d,
                                handlers: a
                            })
                        }
                return o < t.length && i.push({
                    elem: this,
                    handlers: t.slice(o)
                }), i
            },
            addProp: function(e, t) {
                Object.defineProperty(oe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: oe.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[oe.expando] ? e : new oe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== v() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === v() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, oe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Y : g, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            constructor: oe.Event,
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Y, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Y, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Y, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ue.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, oe.event.addProp), oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, a = e.relatedTarget,
                        r = e.handleObj;
                    return a && (a === this || oe.contains(this, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, a) {
                return k(this, e, t, n, a)
            },
            one: function(e, t, n, a) {
                return k(this, e, t, n, a, 1)
            },
            off: function(e, t, n) {
                var a, r;
                if (e && e.preventDefault && e.handleObj) return a = e.handleObj, oe(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = g), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            }
        });
        var Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            $e = /<script|<style|<link/i,
            Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ke = /^true\/(.*)/,
            Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oe.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ve, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var a, r, s, i, o, d, u, _ = e.cloneNode(!0),
                    l = oe.contains(e.ownerDocument, e);
                if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (i = M(_), s = M(e), a = 0, r = s.length; a < r; a++) o = s[a], d = i[a], void 0, u = d.nodeName.toLowerCase(), "input" === u && Ce.test(o.type) ? d.checked = o.checked : "input" !== u && "textarea" !== u || (d.defaultValue = o.defaultValue);
                if (t)
                    if (n)
                        for (s = s || M(e), i = i || M(_), a = 0, r = s.length; a < r; a++) b(s[a], i[a]);
                    else b(e, _);
                return (i = M(_, "script")).length > 0 && y(i, !l && M(e, "script")), _
            },
            cleanData: function(e) {
                for (var t, n, a, r = oe.event.special, s = 0; void 0 !== (n = e[s]); s++)
                    if (we(n)) {
                        if (t = n[be.expando]) {
                            if (t.events)
                                for (a in t.events) r[a] ? oe.event.remove(n, a) : oe.removeEvent(n, a, t.handle);
                            n[be.expando] = void 0
                        }
                        n[Se.expando] && (n[Se.expando] = void 0)
                    }
            }
        }), oe.fn.extend({
            detach: function(e) {
                return x(this, e, !0)
            },
            remove: function(e) {
                return x(this, e)
            },
            text: function(e) {
                return Te(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(M(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Te(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        a = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !$e.test(e) && !ze[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = oe.htmlPrefilter(e);
                        try {
                            for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(M(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return S(this, arguments, function(t) {
                    var n = this.parentNode;
                    oe.inArray(this, e) < 0 && (oe.cleanData(M(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, a = [], r = oe(e), s = r.length - 1, i = 0; i <= s; i++) n = i === s ? this : this.clone(!0), oe(r[i])[t](n), Q.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var Qe = /^margin/,
            et = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
            tt = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (o) {
                    o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", qe.appendChild(i);
                    var e = n.getComputedStyle(o);
                    t = "1%" !== e.top, s = "2px" === e.marginLeft, a = "4px" === e.width, o.style.marginRight = "50%", r = "4px" === e.marginRight, qe.removeChild(i), o = null
                }
            }
            var t, a, r, s, i = $.createElement("div"),
                o = $.createElement("div");
            o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.appendChild(o), oe.extend(ie, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return e(), a
                },
                pixelMarginRight: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), s
                }
            }))
        }();
        var nt = /^(none|table(?!-c[ea]).+)/,
            at = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            rt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            st = ["Webkit", "Moz", "ms"],
            it = $.createElement("div").style;
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = H(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                float: "cssFloat"
            },
            style: function(e, t, n, a) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, s, i, o = oe.camelCase(t),
                        d = e.style;
                    return t = oe.cssProps[o] || (oe.cssProps[o] = P(o) || o), i = oe.cssHooks[t] || oe.cssHooks[o], void 0 === n ? i && "get" in i && void 0 !== (r = i.get(e, !1, a)) ? r : d[t] : ("string" === (s = typeof n) && (r = Pe.exec(n)) && r[1] && (n = f(e, t, r), s = "number"), void(null != n && n == n && ("number" === s && (n += r && r[3] || (oe.cssNumber[o] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, a)) || (d[t] = n))))
                }
            },
            css: function(e, t, n, a) {
                var r, s, i, o = oe.camelCase(t);
                return t = oe.cssProps[o] || (oe.cssProps[o] = P(o) || o), (i = oe.cssHooks[t] || oe.cssHooks[o]) && "get" in i && (r = i.get(e, !0, n)), void 0 === r && (r = H(e, t, a)), "normal" === r && t in rt && (r = rt[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, a) {
                    if (n) return !nt.test(oe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, a) : We(e, at, function() {
                        return W(e, t, a)
                    })
                },
                set: function(e, n, a) {
                    var r, s = a && tt(e),
                        i = a && A(e, t, a, "border-box" === oe.css(e, "boxSizing", !1, s), s);
                    return i && (r = Pe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), E(0, n, i)
                }
            }
        }), oe.cssHooks.marginLeft = j(ie.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var a = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) r[e + Ee[a] + t] = s[a] || s[a - 2] || s[0];
                    return r
                }
            }, Qe.test(e) || (oe.cssHooks[e + t].set = E)
        }), oe.fn.extend({
            css: function(e, t) {
                return Te(this, function(e, t, n) {
                    var a, r, s = {},
                        i = 0;
                    if (oe.isArray(t)) {
                        for (a = tt(e), r = t.length; i < r; i++) s[t[i]] = oe.css(e, t[i], !1, a);
                        return s
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), oe.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, a, r, s) {
                this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = s || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, oe.fx = F.prototype.init, oe.fx.step = {};
        var ot, dt, ut, _t, lt = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
        oe.Animation = oe.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Pe.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ve);
                for (var n, a = 0, r = e.length; a < r; a++) n = e[a], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var a, r, s, i, o, d, u, _, l = "width" in t || "height" in t,
                    m = this,
                    c = {},
                    h = e.style,
                    f = e.nodeType && Ae(e),
                    M = be.get(e, "fxshow");
                n.queue || (null == (i = oe._queueHooks(e, "fx")).unqueued && (i.unqueued = 0, o = i.empty.fire, i.empty.fire = function() {
                    i.unqueued || o()
                }), i.unqueued++, m.always(function() {
                    m.always(function() {
                        i.unqueued--, oe.queue(e, "fx").length || i.empty.fire()
                    })
                }));
                for (a in t)
                    if (r = t[a], lt.test(r)) {
                        if (delete t[a], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                            if ("show" !== r || !M || void 0 === M[a]) continue;
                            f = !0
                        }
                        c[a] = M && M[a] || oe.style(e, a)
                    }
                if ((d = !oe.isEmptyObject(t)) || !oe.isEmptyObject(c)) {
                    l && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = M && M.display) && (u = be.get(e, "display")), "none" === (_ = oe.css(e, "display")) && (u ? _ = u : (p([e], !0), u = e.style.display || u, _ = oe.css(e, "display"), p([e]))), ("inline" === _ || "inline-block" === _ && null != u) && "none" === oe.css(e, "float") && (d || (m.done(function() {
                        h.display = u
                    }), null == u && (_ = h.display, u = "none" === _ ? "" : _)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", m.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), d = !1;
                    for (a in c) d || (M ? "hidden" in M && (f = M.hidden) : M = be.access(e, "fxshow", {
                        display: u
                    }), s && (M.hidden = !f), f && p([e], !0), m.done(function() {
                        f || p([e]), be.remove(e, "fxshow");
                        for (a in c) oe.style(e, a, c[a])
                    })), d = z(f ? M[a] : 0, a, m), a in M || (M[a] = d.start, f && (d.end = d.start, d.start = 0))
                }
            }],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var a = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return oe.fx.off || $.hidden ? a.duration = 0 : a.duration = "number" == typeof a.duration ? a.duration : a.duration in oe.fx.speeds ? oe.fx.speeds[a.duration] : oe.fx.speeds._default, null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                oe.isFunction(a.old) && a.old.call(this), a.queue && oe.dequeue(this, a.queue)
            }, a
        }, oe.fn.extend({
            fadeTo: function(e, t, n, a) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, a)
            },
            animate: function(e, t, n, a) {
                var r = oe.isEmptyObject(e),
                    s = oe.speed(t, n, a),
                    i = function() {
                        var t = R(this, oe.extend({}, e), s);
                        (r || be.get(this, "finish")) && t.stop(!0)
                    };
                return i.finish = i, r || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
            },
            stop: function(e, t, n) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        s = oe.timers,
                        i = be.get(this);
                    if (r) i[r] && i[r].stop && a(i[r]);
                    else
                        for (r in i) i[r] && i[r].stop && mt.test(r) && a(i[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                    !t && n || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = be.get(this),
                        a = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        s = oe.timers,
                        i = a ? a.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < i; t++) a[t] && a[t].finish && a[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, a, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, a, r)
            }
        }), oe.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
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
            oe.fn[e] = function(e, n, a) {
                return this.animate(t, e, n, a)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                n = oe.timers;
            for (ot = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), ot = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            dt || (dt = n.requestAnimationFrame ? n.requestAnimationFrame(C) : n.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            n.cancelAnimationFrame ? n.cancelAnimationFrame(dt) : n.clearInterval(dt), dt = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx && oe.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, a) {
                var r = n.setTimeout(t, e);
                a.stop = function() {
                    n.clearTimeout(r)
                }
            })
        }, ut = $.createElement("input"), _t = $.createElement("select").appendChild($.createElement("option")), ut.type = "checkbox", ie.checkOn = "" !== ut.value, ie.optSelected = _t.selected, (ut = $.createElement("input")).value = "t", ut.type = "radio", ie.radioValue = "t" === ut.value;
        var ct, ht = oe.expr.attrHandle;
        oe.fn.extend({
            attr: function(e, t) {
                return Te(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var a, r, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === s && oe.isXMLDoc(e) || (r = oe.attrHooks[t.toLowerCase()] || (oe.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : (a = oe.find.attr(e, t), null == a ? void 0 : a))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, a = 0,
                    r = t && t.match(ve);
                if (r && 1 === e.nodeType)
                    for (; n = r[a++];) e.removeAttribute(n)
            }
        }), ct = {
            set: function(e, t, n) {
                return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ht[t] || oe.find.attr;
            ht[t] = function(e, t, a) {
                var r, s, i = t.toLowerCase();
                return a || (s = ht[i], ht[i] = r, r = null != n(e, t, a) ? i : null, ht[i] = s), r
            }
        });
        var ft = /^(?:input|select|textarea|button)$/i,
            pt = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return Te(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[oe.propFix[e] || e]
                })
            }
        }), oe.extend({
            prop: function(e, t, n) {
                var a, r, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ie.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        });
        var Mt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, a, r, s, i, o, d = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, J(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(ve) || []; n = this[d++];)
                        if (r = J(n), a = 1 === n.nodeType && (" " + r + " ").replace(Mt, " ")) {
                            for (i = 0; s = t[i++];) a.indexOf(" " + s + " ") < 0 && (a += s + " ");
                            r !== (o = oe.trim(a)) && n.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, a, r, s, i, o, d = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(ve) || []; n = this[d++];)
                        if (r = J(n), a = 1 === n.nodeType && (" " + r + " ").replace(Mt, " ")) {
                            for (i = 0; s = t[i++];)
                                for (; a.indexOf(" " + s + " ") > -1;) a = a.replace(" " + s + " ", " ");
                            r !== (o = oe.trim(a)) && n.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                    oe(this).toggleClass(e.call(this, n, J(this), t), t)
                }) : this.each(function() {
                    var t, a, r, s;
                    if ("string" === n)
                        for (a = 0, r = oe(this), s = e.match(ve) || []; t = s[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = J(this), t && be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : be.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, a = 0;
                for (t = " " + e + " "; n = this[a++];)
                    if (1 === n.nodeType && (" " + J(n) + " ").replace(Mt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var yt = /\r/g,
            Lt = /[\x20\t\r\n\f]+/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, a, r = this[0];
                return arguments.length ? (a = oe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = a ? e.call(this, n, oe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.trim(oe.text(e)).replace(Lt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, a = e.options, r = e.selectedIndex, s = "select-one" === e.type, i = s ? null : [], o = s ? r + 1 : a.length, d = r < 0 ? o : s ? r : 0; d < o; d++)
                            if (n = a[d], (n.selected || d === r) && !n.disabled && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), s) return t;
                                i.push(t)
                            }
                        return i
                    },
                    set: function(e, t) {
                        for (var n, a, r = e.options, s = oe.makeArray(t), i = r.length; i--;) a = r[i], (a.selected = oe.inArray(oe.valHooks.option.get(a), s) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), s
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
                }
            }, ie.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Yt = /^(?:focusinfocus|focusoutblur)$/;
        oe.extend(oe.event, {
            trigger: function(e, t, a, r) {
                var s, i, o, d, u, _, l, m = [a || $],
                    c = ae.call(e, "type") ? e.type : e,
                    h = ae.call(e, "namespace") ? e.namespace.split(".") : [];
                if (i = o = a = a || $, 3 !== a.nodeType && 8 !== a.nodeType && !Yt.test(c + oe.event.triggered) && (c.indexOf(".") > -1 && (c = (h = c.split(".")).shift(), h.sort()), u = c.indexOf(":") < 0 && "on" + c, (e = e[oe.expando] ? e : new oe.Event(c, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), t = null == t ? [e] : oe.makeArray(t, [e]), l = oe.event.special[c] || {}, r || !l.trigger || !1 !== l.trigger.apply(a, t))) {
                    if (!r && !l.noBubble && !oe.isWindow(a)) {
                        for (d = l.delegateType || c, Yt.test(d + c) || (i = i.parentNode); i; i = i.parentNode) m.push(i), o = i;
                        o === (a.ownerDocument || $) && m.push(o.defaultView || o.parentWindow || n)
                    }
                    for (s = 0;
                         (i = m[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? d : l.bindType || c, _ = (be.get(i, "events") || {})[e.type] && be.get(i, "handle"), _ && _.apply(i, t), _ = u && i[u], _ && _.apply && we(i) && (e.result = _.apply(i, t), !1 === e.result && e.preventDefault());
                    return e.type = c, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), t) || !we(a) || u && oe.isFunction(a[c]) && !oe.isWindow(a) && ((o = a[u]) && (a[u] = null), oe.event.triggered = c, a[c](), oe.event.triggered = void 0, o && (a[u] = o)), e.result
                }
            },
            simulate: function(e, t, n) {
                var a = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                oe.event.trigger(a, null, t)
            }
        }), oe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return oe.event.trigger(e, t, n, !0)
            }
        }), oe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ie.focusin = "onfocusin" in n, ie.focusin || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e))
            };
            oe.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this,
                        r = be.access(a, t);
                    r || a.addEventListener(e, n, !0), be.access(a, t, (r || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this,
                        r = be.access(a, t) - 1;
                    r ? be.access(a, t, r) : (a.removeEventListener(e, n, !0), be.remove(a, t))
                }
            }
        });
        var gt = n.location,
            vt = oe.now(),
            kt = /\?/;
        oe.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), t
        };
        var Dt = /\[\]$/,
            Tt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            bt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, a = [],
                r = function(e, t) {
                    var n = oe.isFunction(t) ? t() : t;
                    a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) I(n, e[n], t, r);
            return a.join("&")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && bt.test(this.nodeName) && !wt.test(e) && (this.checked || !Ce.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Tt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Tt, "\r\n")
                    }
                }).get()
            }
        });
        var St = /%20/g,
            xt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Et = /^\/\//,
            At = {},
            Wt = {},
            Ft = "*/".concat("*"),
            Ct = $.createElement("a");
        Ct.href = gt.href, oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? U(U(e, oe.ajaxSettings), t) : U(oe.ajaxSettings, e)
            },
            ajaxPrefilter: q(At),
            ajaxTransport: q(Wt),
            ajax: function(e, t) {
                function a(e, t, a, o) {
                    var u, m, c, Y, g, v = t;
                    _ || (_ = !0, d && n.clearTimeout(d), r = void 0, i = o || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, a && (Y = function(e, t, n) {
                        for (var a, r, s, i, o = e.contents, d = e.dataTypes;
                             "*" === d[0];) d.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (a)
                            for (r in o)
                                if (o[r] && o[r].test(a)) {
                                    d.unshift(r);
                                    break
                                }
                        if (d[0] in n) s = d[0];
                        else {
                            for (r in n) {
                                if (!d[0] || e.converters[r + " " + d[0]]) {
                                    s = r;
                                    break
                                }
                                i || (i = r)
                            }
                            s = s || i
                        }
                        if (s) return s !== d[0] && d.unshift(s), n[s]
                    }(h, k, a)), Y = function(e, t, n, a) {
                        var r, s, i, o, d, u = {},
                            _ = e.dataTypes.slice();
                        if (_[1])
                            for (i in e.converters) u[i.toLowerCase()] = e.converters[i];
                        for (s = _.shift(); s;)
                            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = s, s = _.shift())
                                if ("*" === s) s = d;
                                else if ("*" !== d && d !== s) {
                                    if (!(i = u[d + " " + s] || u["* " + s]))
                                        for (r in u)
                                            if (o = r.split(" "), o[1] === s && (i = u[d + " " + o[0]] || u["* " + o[0]])) {
                                                !0 === i ? i = u[r] : !0 !== u[r] && (s = o[0], _.unshift(o[1]));
                                                break
                                            }
                                    if (!0 !== i)
                                        if (i && e.throws) t = i(t);
                                        else try {
                                            t = i(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: i ? e : "No conversion from " + d + " to " + s
                                            }
                                        }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, Y, k, u), u ? (h.ifModified && ((g = k.getResponseHeader("Last-Modified")) && (oe.lastModified[s] = g), (g = k.getResponseHeader("etag")) && (oe.etag[s] = g)), 204 === e || "HEAD" === h.type ? v = "nocontent" : 304 === e ? v = "notmodified" : (v = Y.state, m = Y.data, u = !(c = Y.error))) : (c = v, !e && v || (v = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || v) + "", u ? M.resolveWith(f, [m, v, k]) : M.rejectWith(f, [k, v, c]), k.statusCode(L), L = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? m : c]), y.fireWith(f, [k, v]), l && (p.trigger("ajaxComplete", [k, h]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, s, i, o, d, u, _, l, m, c, h = oe.ajaxSetup({}, t),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                    M = oe.Deferred(),
                    y = oe.Callbacks("once memory"),
                    L = h.statusCode || {},
                    Y = {},
                    g = {},
                    v = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (_) {
                                if (!o)
                                    for (o = {}; t = jt.exec(i);) o[t[1].toLowerCase()] = t[2];
                                t = o[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return _ ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == _ && (e = g[e.toLowerCase()] = g[e.toLowerCase()] || e, Y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == _ && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (_) k.always(e[k.status]);
                                else
                                    for (t in e) L[t] = [L[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || v;
                            return r && r.abort(t), a(0, t), this
                        }
                    };
                if (M.promise(k), h.url = ((e || h.url || gt.href) + "").replace(Et, gt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(ve) || [""], null == h.crossDomain) {
                    u = $.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = Ct.protocol + "//" + Ct.host != u.protocol + "//" + u.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), B(At, h, t, k), _) return k;
                (l = oe.event && h.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), s = h.url.replace(xt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+")) : (c = h.url.slice(s.length), h.data && (s += (kt.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (s = s.replace(Ht, ""), c = (kt.test(s) ? "&" : "?") + "_=" + vt++ + c), h.url = s + c), h.ifModified && (oe.lastModified[s] && k.setRequestHeader("If-Modified-Since", oe.lastModified[s]), oe.etag[s] && k.setRequestHeader("If-None-Match", oe.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
                for (m in h.headers) k.setRequestHeader(m, h.headers[m]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, k, h) || _)) return k.abort();
                if (v = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), r = B(Wt, h, t, k)) {
                    if (k.readyState = 1, l && p.trigger("ajaxSend", [k, h]), _) return k;
                    h.async && h.timeout > 0 && (d = n.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = !1, r.send(Y, a)
                    } catch (e) {
                        if (_) throw e;
                        a(-1, e)
                    }
                } else a(-1, "No Transport");
                return k
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, a, r) {
                return oe.isFunction(n) && (r = r || a, a = n, n = void 0), oe.ajax(oe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: a
                }, oe.isPlainObject(e) && e))
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (oe.isFunction(e) && (e = e.call(this[0])), t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    oe(this).replaceWith(this.childNodes)
                }), this
            }
        }), oe.expr.pseudos.hidden = function(e) {
            return !oe.expr.pseudos.visible(e)
        }, oe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, oe.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Ot = {
                0: 200,
                1223: 204
            },
            Nt = oe.ajaxSettings.xhr();
        ie.cors = !!Nt && "withCredentials" in Nt, ie.ajax = Nt = !!Nt, oe.ajaxTransport(function(e) {
            var t, a;
            if (ie.cors || Nt && !e.crossDomain) return {
                send: function(r, s) {
                    var i, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (i in r) o.setRequestHeader(i, r[i]);
                    t = function(e) {
                        return function() {
                            t && (t = a = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Ot[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), a = o.onerror = t("error"), void 0 !== o.onabort ? o.onabort = a : o.onreadystatechange = function() {
                        4 === o.readyState && n.setTimeout(function() {
                            t && a()
                        })
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), oe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), oe.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(a, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), $.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var zt, Rt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rt.pop() || oe.expando + "_" + vt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(e, t, a) {
            var r, s, i, o = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Jt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return i || oe.error(r + " was not called"), i[0]
            }, e.dataTypes[0] = "json", s = n[r], n[r] = function() {
                i = arguments
            }, a.always(function() {
                void 0 === s ? oe(n).removeProp(r) : n[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), i && oe.isFunction(s) && s(i[0]), i = s = void 0
            }), "script"
        }), ie.createHTMLDocument = ((zt = $.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), oe.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ie.createHTMLDocument ? ((a = (t = $.implementation.createHTMLDocument("")).createElement("base")).href = $.location.href, t.head.appendChild(a)) : t = $), r = pe.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = L([e], t, s), s && s.length && oe(s).remove(), oe.merge([], r.childNodes)));
            var a, r, s
        }, oe.fn.load = function(e, t, n) {
            var a, r, s, i = this,
                o = e.indexOf(" ");
            return o > -1 && (a = oe.trim(e.slice(o)), e = e.slice(0, o)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), i.length > 0 && oe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                s = arguments, i.html(a ? oe("<div>").append(oe.parseHTML(e)).find(a) : e)
            }).always(n && function(e, t) {
                i.each(function() {
                    n.apply(this, s || [e.responseText, t, e])
                })
            }), this
        }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe.expr.pseudos.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        }, oe.offset = {
            setOffset: function(e, t, n) {
                var a, r, s, i, o, d, u = oe.css(e, "position"),
                    _ = oe(e),
                    l = {};
                "static" === u && (e.style.position = "relative"), o = _.offset(), s = oe.css(e, "top"), d = oe.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + d).indexOf("auto") > -1 ? (i = (a = _.position()).top, r = a.left) : (i = parseFloat(s) || 0, r = parseFloat(d) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, o))), null != t.top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + r), "using" in t ? t.using.call(e, l) : _.css(l)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, a, r, s = this[0];
                return s ? s.getClientRects().length ? (a = s.getBoundingClientRect()).width || a.height ? (n = G(r = s.ownerDocument), t = r.documentElement, {
                    top: a.top + n.pageYOffset - t.clientTop,
                    left: a.left + n.pageXOffset - t.clientLeft
                }) : a : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (a = e.offset()), a = {
                        top: a.top + oe.css(e[0], "borderTopWidth", !0),
                        left: a.left + oe.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - a.top - oe.css(n, "marginTop", !0),
                        left: t.left - a.left - oe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || qe
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            oe.fn[e] = function(a) {
                return Te(this, function(e, a, r) {
                    var s = G(e);
                    return void 0 === r ? s ? s[t] : e[a] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[a] = r)
                }, e, a, arguments.length)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = j(ie.pixelPosition, function(e, n) {
                if (n) return n = H(e, t), et.test(n) ? oe(e).position()[t] + "px" : n
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, a) {
                oe.fn[a] = function(r, s) {
                    var i = arguments.length && (n || "boolean" != typeof r),
                        o = n || (!0 === r || !0 === s ? "margin" : "border");
                    return Te(this, function(t, n, r) {
                        var s;
                        return oe.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? oe.css(t, n, o) : oe.style(t, n, r, o)
                    }, t, i ? r : void 0, i)
                }
            })
        }), oe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, a) {
                return this.on(t, e, n, a)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), oe.parseJSON = JSON.parse, void 0 === (a = function() {
            return oe
        }.apply(t, [])) || (e.exports = a);
        var It = n.jQuery,
            qt = n.$;
        return oe.noConflict = function(e) {
            return n.$ === oe && (n.$ = qt), e && n.jQuery === oe && (n.jQuery = It), oe
        }, r || (n.jQuery = n.$ = oe), oe
    })
}, function(e, t, n) {
    "use strict";
    var a = n(17);
    t.L = {
        init: function() {
            var e = document.querySelector("html").getAttribute("lang") || "ru";
            t.L.setActive(e), a.locale(e)
        },
        setActive: function(e) {
            e = void 0 === t.L.data[e] ? "en" : e, t.L.active = e, t.L.s = t.L.data[e]
        },
        active: "ru",
        s: {},
        data: {
            ru: {
                visitors: "Мои Гости",
                nothingToShow: "Пока нет данных для просмотра",
                popupTitle: "Ваши Гости",
                removeBtnLabel: "Удалить эту функцию",
                shareBtnLabel: "Поделиться с друзьями",
                removePrompt: "После этого вы не сможете следить за гостями профиля, вы уверены что хотите удалить расширение?"
            }
        }
    }, t.L.init(), window.L = t.L
}, function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";

            function t() {
                return Ge.apply(null, arguments)
            }

            function a(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function r(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function i(e, t) {
                var n, a = [];
                for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                return a
            }

            function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function d(e, t) {
                for (var n in t) o(t, n) && (e[n] = t[n]);
                return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function u(e, t, n, a) {
                return fe(e, t, n, a, !0).utc()
            }

            function _(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }), e._pf
            }

            function l(e) {
                if (null == e._isValid) {
                    var t = _(e),
                        n = Ve.call(t.parsedDateParts, function(e) {
                            return null != e
                        });
                    e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                }
                return e._isValid
            }

            function m(e) {
                var t = u(NaN);
                return null != e ? d(_(t), e) : _(t).userInvalidated = !0, t
            }

            function c(e) {
                return void 0 === e
            }

            function h(e, t) {
                var n, a, r;
                if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = _(t)), c(t._locale) || (e._locale = t._locale), Xe.length > 0)
                    for (n in Xe) a = Xe[n], r = t[a], c(r) || (e[a] = r);
                return e
            }

            function f(e) {
                h(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !1 === Ke && (Ke = !0, t.updateOffset(this), Ke = !1)
            }

            function p(e) {
                return e instanceof f || null != e && null != e._isAMomentObject
            }

            function M(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function y(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = M(t)), n
            }

            function L(e, t, n) {
                var a, r = Math.min(e.length, t.length),
                    s = Math.abs(e.length - t.length),
                    i = 0;
                for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && y(e[a]) !== y(t[a])) && i++;
                return i + s
            }

            function Y(e) {
                !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
            }

            function g(e, n) {
                var a = !0;
                return d(function() {
                    return null != t.deprecationHandler && t.deprecationHandler(null, e), a && (Y((Array.prototype.slice.call(arguments).join(", "), (new Error).stack)), a = !1), n.apply(this, arguments)
                }, n)
            }

            function v(e, n) {
                null != t.deprecationHandler && t.deprecationHandler(e, n), Ze[e] || (Y(), Ze[e] = !0)
            }

            function k(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function D(e, t) {
                var n, a = d({}, e);
                for (n in t) o(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, d(a[n], e[n]), d(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                for (n in e) o(e, n) && !o(t, n) && r(e[n]) && (a[n] = d({}, a[n]));
                return a
            }

            function T(e) {
                null != e && this.set(e)
            }

            function w(e, t) {
                var n = e.toLowerCase();
                et[n] = et[n + "s"] = et[t] = e
            }

            function b(e) {
                return "string" == typeof e ? et[e] || et[e.toLowerCase()] : void 0
            }

            function S(e) {
                var t, n, a = {};
                for (n in e) o(e, n) && (t = b(n), t && (a[t] = e[n]));
                return a
            }

            function x(e, t) {
                tt[e] = t
            }

            function H(e, n) {
                return function(a) {
                    return null != a ? (P(this, e, a), t.updateOffset(this, n), this) : j(this, e)
                }
            }

            function j(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function P(e, t, n) {
                e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function E(e, t, n) {
                var a = "" + Math.abs(e),
                    r = t - a.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
            }

            function A(e, t, n, a) {
                var r = a;
                "string" == typeof a && (r = function() {
                    return this[a]()
                }), e && (st[e] = r), t && (st[t[0]] = function() {
                    return E(r.apply(this, arguments), t[1], t[2])
                }), n && (st[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), e)
                })
            }

            function W(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function F(e, t) {
                return e.isValid() ? (t = C(t, e.localeData()), rt[t] = rt[t] || function(e) {
                    var t, n, a = e.match(nt);
                    for (t = 0, n = a.length; t < n; t++) st[a[t]] ? a[t] = st[a[t]] : a[t] = W(a[t]);
                    return function(t) {
                        var r, s = "";
                        for (r = 0; r < n; r++) s += a[r] instanceof Function ? a[r].call(t, e) : a[r];
                        return s
                    }
                }(t), rt[t](e)) : e.localeData().invalidDate()
            }

            function C(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                var a = 5;
                for (at.lastIndex = 0; a >= 0 && at.test(e);) e = e.replace(at, n), at.lastIndex = 0, a -= 1;
                return e
            }

            function O(e, t, n) {
                vt[e] = k(t) ? t : function(e, a) {
                    return e && n ? n : t
                }
            }

            function N(e, t) {
                return o(vt, e) ? vt[e](t._strict, t._locale) : new RegExp(z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                    return t || n || a || r
                })))
            }

            function z(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function R(e, t) {
                var n, a = t;
                for ("string" == typeof e && (e = [e]), "number" == typeof t && (a = function(e, n) {
                    n[t] = y(e)
                }), n = 0; n < e.length; n++) kt[e[n]] = a
            }

            function J(e, t) {
                R(e, function(e, n, a, r) {
                    a._w = a._w || {}, t(e, a._w, a, r)
                })
            }

            function I(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }

            function q(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = y(t);
                    else if (t = e.localeData().monthsParse(t), "number" != typeof t) return e;
                return n = Math.min(e.date(), I(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function B(e) {
                return null != e ? (q(this, e), t.updateOffset(this, !0), this) : j(this, "Month")
            }

            function U() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a = [],
                    r = [],
                    s = [];
                for (t = 0; t < 12; t++) n = u([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) a[t] = z(a[t]), r[t] = z(r[t]);
                for (t = 0; t < 24; t++) s[t] = z(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function G(e) {
                return V(e) ? 366 : 365
            }

            function V(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function $(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function X(e, t, n) {
                var a = 7 + t - n;
                return -(7 + $(e, 0, a).getUTCDay() - t) % 7 + a - 1
            }

            function K(e, t, n, a, r) {
                var s, i, o = (7 + n - a) % 7,
                    d = X(e, a, r),
                    u = 1 + 7 * (t - 1) + o + d;
                return u <= 0 ? i = G(s = e - 1) + u : u > G(e) ? (s = e + 1, i = u - G(e)) : (s = e, i = u), {
                    year: s,
                    dayOfYear: i
                }
            }

            function Z(e, t, n) {
                var a, r, s = X(e.year(), t, n),
                    i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                return i < 1 ? (r = e.year() - 1, a = i + Q(r, t, n)) : i > Q(e.year(), t, n) ? (a = i - Q(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = i), {
                    week: a,
                    year: r
                }
            }

            function Q(e, t, n) {
                var a = X(e, t, n),
                    r = X(e + 1, t, n);
                return (G(e) - a + r) / 7
            }

            function ee() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a, r, s, i = [],
                    o = [],
                    d = [],
                    _ = [];
                for (t = 0; t < 7; t++) n = u([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), i.push(a), o.push(r), d.push(s), _.push(a), _.push(r), _.push(s);
                for (i.sort(e), o.sort(e), d.sort(e), _.sort(e), t = 0; t < 7; t++) o[t] = z(o[t]), d[t] = z(d[t]), _[t] = z(_[t]);
                this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function te() {
                return this.hours() % 12 || 12
            }

            function ne(e, t) {
                A(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function ae(e, t) {
                return t._meridiemParse
            }

            function re(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function se(t) {
                var a = null;
                if (!Vt[t] && void 0 !== e && e && e.exports) try {
                    a = Bt._abbr, n(19)("./" + t), ie(a)
                } catch (e) {}
                return Vt[t]
            }

            function ie(e, t) {
                var n;
                return e && (n = c(t) ? de(e) : oe(e, t)) && (Bt = n), Bt._abbr
            }

            function oe(e, t) {
                if (null !== t) {
                    var n = Gt;
                    return t.abbr = e, null != Vt[e] ? (v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Vt[e]._config) : null != t.parentLocale && (null != Vt[t.parentLocale] ? n = Vt[t.parentLocale]._config : v("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Vt[e] = new T(D(n, t)), ie(e), Vt[e]
                }
                return delete Vt[e], null
            }

            function de(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Bt;
                if (!a(e)) {
                    if (t = se(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, a, r, s = 0; s < e.length;) {
                        for (r = re(e[s]).split("-"), t = r.length, n = (n = re(e[s + 1])) ? n.split("-") : null; t > 0;) {
                            if (a = se(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && L(r, n, !0) >= t - 1) break;
                            t--
                        }
                        s++
                    }
                    return null
                }(e)
            }

            function ue(e) {
                var t, n = e._a;
                return n && -2 === _(e).overflow && (t = n[Tt] < 0 || n[Tt] > 11 ? Tt : n[wt] < 1 || n[wt] > I(n[Dt], n[Tt]) ? wt : n[bt] < 0 || n[bt] > 24 || 24 === n[bt] && (0 !== n[St] || 0 !== n[xt] || 0 !== n[Ht]) ? bt : n[St] < 0 || n[St] > 59 ? St : n[xt] < 0 || n[xt] > 59 ? xt : n[Ht] < 0 || n[Ht] > 999 ? Ht : -1, _(e)._overflowDayOfYear && (t < Dt || t > wt) && (t = wt), _(e)._overflowWeeks && -1 === t && (t = jt), _(e)._overflowWeekday && -1 === t && (t = Pt), _(e).overflow = t), e
            }

            function _e(e) {
                var t, n, a, r, s, i, o = e._i,
                    d = $t.exec(o) || Xt.exec(o);
                if (d) {
                    for (_(e).iso = !0, t = 0, n = Zt.length; t < n; t++)
                        if (Zt[t][1].exec(d[1])) {
                            r = Zt[t][0], a = !1 !== Zt[t][2];
                            break
                        }
                    if (null == r) return void(e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, n = Qt.length; t < n; t++)
                            if (Qt[t][1].exec(d[3])) {
                                s = (d[2] || " ") + Qt[t][0];
                                break
                            }
                        if (null == s) return void(e._isValid = !1)
                    }
                    if (!a && null != s) return void(e._isValid = !1);
                    if (d[4]) {
                        if (!Kt.exec(d[4])) return void(e._isValid = !1);
                        i = "Z"
                    }
                    e._f = r + (s || "") + (i || ""), ce(e)
                } else e._isValid = !1
            }

            function le(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function me(e) {
                var n, a, r, s, i, o, d, u, l, m, c, h, f, p, M, y = [];
                if (!e._d) {
                    for (p = e, M = void 0, M = new Date(t.now()), r = p._useUTC ? [M.getUTCFullYear(), M.getUTCMonth(), M.getUTCDate()] : [M.getFullYear(), M.getMonth(), M.getDate()], e._w && null == e._a[wt] && null == e._a[Tt] && (o = void 0, d = void 0, u = void 0, l = void 0, m = void 0, c = void 0, h = void 0, f = void 0, null != (o = (i = e)._w).GG || null != o.W || null != o.E ? (m = 1, c = 4, d = le(o.GG, i._a[Dt], Z(pe(), 1, 4).year), u = le(o.W, 1), ((l = le(o.E, 1)) < 1 || l > 7) && (f = !0)) : (m = i._locale._week.dow, c = i._locale._week.doy, d = le(o.gg, i._a[Dt], Z(pe(), m, c).year), u = le(o.w, 1), null != o.d ? ((l = o.d) < 0 || l > 6) && (f = !0) : null != o.e ? (l = o.e + m, (o.e < 0 || o.e > 6) && (f = !0)) : l = m), u < 1 || u > Q(d, m, c) ? _(i)._overflowWeeks = !0 : null != f ? _(i)._overflowWeekday = !0 : (h = K(d, u, l, m, c), i._a[Dt] = h.year, i._dayOfYear = h.dayOfYear)), e._dayOfYear && (s = le(e._a[Dt], r[Dt]), e._dayOfYear > G(s) && (_(e)._overflowDayOfYear = !0), a = $(s, 0, e._dayOfYear), e._a[Tt] = a.getUTCMonth(), e._a[wt] = a.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = y[n] = r[n];
                    for (; n < 7; n++) e._a[n] = y[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                    24 === e._a[bt] && 0 === e._a[St] && 0 === e._a[xt] && 0 === e._a[Ht] && (e._nextDay = !0, e._a[bt] = 0), e._d = (e._useUTC ? $ : function(e, t, n, a, r, s, i) {
                        var o = new Date(e, t, n, a, r, s, i);
                        return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                    }).apply(null, y), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[bt] = 24)
                }
            }

            function ce(e) {
                if (e._f !== t.ISO_8601) {
                    e._a = [], _(e).empty = !0;
                    var n, a, r, s, i, d, u, l, m, c, h, f, p = "" + e._i,
                        M = p.length,
                        y = 0;
                    for (r = C(e._f, e._locale).match(nt) || [], n = 0; n < r.length; n++) s = r[n], a = (p.match(N(s, e)) || [])[0], a && (i = p.substr(0, p.indexOf(a)), i.length > 0 && _(e).unusedInput.push(i), p = p.slice(p.indexOf(a) + a.length), y += a.length), st[s] ? (a ? _(e).empty = !1 : _(e).unusedTokens.push(s), d = s, u = a, l = e, null != u && o(kt, d) && kt[d](u, l._a, l, d)) : e._strict && !a && _(e).unusedTokens.push(s);
                    _(e).charsLeftOver = M - y, p.length > 0 && _(e).unusedInput.push(p), e._a[bt] <= 12 && !0 === _(e).bigHour && e._a[bt] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[bt] = (m = e._locale, c = e._a[bt], null == (h = e._meridiem) ? c : null != m.meridiemHour ? m.meridiemHour(c, h) : null != m.isPM ? ((f = m.isPM(h)) && c < 12 && (c += 12), f || 12 !== c || (c = 0), c) : c), me(e), ue(e)
                } else _e(e)
            }

            function he(e) {
                var n, r, o, u, c = e._i,
                    M = e._f;
                return e._locale = e._locale || de(e._l), null === c || void 0 === M && "" === c ? m({
                    nullInput: !0
                }) : ("string" == typeof c && (e._i = c = e._locale.preparse(c)), p(c) ? new f(ue(c)) : (a(M) ? function(e) {
                    var t, n, a, r, s;
                    if (0 === e._f.length) return _(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) s = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], ce(t), l(t) && (s += _(t).charsLeftOver, s += 10 * _(t).unusedTokens.length, _(t).score = s, (null == a || s < a) && (a = s, n = t));
                    d(e, n || t)
                }(e) : s(c) ? e._d = c : M ? ce(e) : void 0 === (r = (n = e)._i) ? n._d = new Date(t.now()) : s(r) ? n._d = new Date(r.valueOf()) : "string" == typeof r ? (o = n, null !== (u = en.exec(o._i)) ? o._d = new Date(+u[1]) : (_e(o), !1 === o._isValid && (delete o._isValid, t.createFromInputFallback(o)))) : a(r) ? (n._a = i(r.slice(0), function(e) {
                    return parseInt(e, 10)
                }), me(n)) : "object" == typeof r ? function(e) {
                    if (!e._d) {
                        var t = S(e._i);
                        e._a = i([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }), me(e)
                    }
                }(n) : "number" == typeof r ? n._d = new Date(r) : t.createFromInputFallback(n), l(e) || (e._d = null), e))
            }

            function fe(e, t, n, s, i) {
                var o, d = {};
                return "boolean" == typeof n && (s = n, n = void 0), (r(e) && function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = i, d._l = n, d._i = e, d._f = t, d._strict = s, (o = new f(ue(he(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function pe(e, t, n, a) {
                return fe(e, t, n, a, !1)
            }

            function Me(e, t) {
                var n, r;
                if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return pe();
                for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }

            function ye(e) {
                var t = S(e),
                    n = t.year || 0,
                    a = t.quarter || 0,
                    r = t.month || 0,
                    s = t.week || 0,
                    i = t.day || 0,
                    o = t.hour || 0,
                    d = t.minute || 0,
                    u = t.second || 0,
                    _ = t.millisecond || 0;
                this._milliseconds = +_ + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * s, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = de(), this._bubble()
            }

            function Le(e) {
                return e instanceof ye
            }

            function Ye(e, t) {
                A(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
                })
            }

            function ge(e, t) {
                var n = (t || "").match(e) || [],
                    a = n[n.length - 1] || [],
                    r = (a + "").match(an) || ["-", 0, 0],
                    s = 60 * r[1] + y(r[2]);
                return "+" === r[0] ? s : -s
            }

            function ve(e, n) {
                var a, r;
                return n._isUTC ? (a = n.clone(), r = (p(e) || s(e) ? e.valueOf() : pe(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : pe(e).local()
            }

            function ke(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function De() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            function Te(e, t) {
                var n, a, r, s, i, d, u = e,
                    _ = null;
                return Le(e) ? u = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (_ = rn.exec(e)) ? (n = "-" === _[1] ? -1 : 1, u = {
                    y: 0,
                    d: y(_[wt]) * n,
                    h: y(_[bt]) * n,
                    m: y(_[St]) * n,
                    s: y(_[xt]) * n,
                    ms: y(_[Ht]) * n
                }) : (_ = sn.exec(e)) ? (n = "-" === _[1] ? -1 : 1, u = {
                    y: we(_[2], n),
                    M: we(_[3], n),
                    w: we(_[4], n),
                    d: we(_[5], n),
                    h: we(_[6], n),
                    m: we(_[7], n),
                    s: we(_[8], n)
                }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (s = pe(u.from), i = pe(u.to), r = s.isValid() && i.isValid() ? (i = ve(i, s), s.isBefore(i) ? d = be(s, i) : ((d = be(i, s)).milliseconds = -d.milliseconds, d.months = -d.months), d) : {
                    milliseconds: 0,
                    months: 0
                }, (u = {}).ms = r.milliseconds, u.M = r.months), a = new ye(u), Le(e) && o(e, "_locale") && (a._locale = e._locale), a
            }

            function we(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function be(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Se(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function xe(e, t) {
                return function(n, a) {
                    var r;
                    return null === a || isNaN(+a) || (v(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), He(this, Te(n = "string" == typeof n ? +n : n, a), e), this
                }
            }

            function He(e, n, a, r) {
                var s = n._milliseconds,
                    i = Se(n._days),
                    o = Se(n._months);
                e.isValid() && (r = null == r || r, s && e._d.setTime(e._d.valueOf() + s * a), i && P(e, "Date", j(e, "Date") + i * a), o && q(e, j(e, "Month") + o * a), r && t.updateOffset(e, i || o))
            }

            function je(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = de(e)) && (this._locale = t), this)
            }

            function Pe() {
                return this._locale
            }

            function Ee(e, t) {
                A(0, [e, e.length], 0, t)
            }

            function Ae(e, t, n, a, r) {
                var s;
                return null == e ? Z(this, a, r).year : (s = Q(e, a, r), t > s && (t = s), function(e, t, n, a, r) {
                    var s = K(e, t, n, a, r),
                        i = $(s.year, 0, s.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }.call(this, e, t, n, a, r))
            }

            function We(e, t) {
                t[Ht] = y(1e3 * ("0." + e))
            }

            function Fe(e) {
                return e
            }

            function Ce(e, t, n, a) {
                var r = de(),
                    s = u().set(a, t);
                return r[n](s, e)
            }

            function Oe(e, t, n) {
                if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Ce(e, t, n, "month");
                var a, r = [];
                for (a = 0; a < 12; a++) r[a] = Ce(e, a, n, "month");
                return r
            }

            function Ne(e, t, n, a) {
                "boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
                var r = de(),
                    s = e ? r._week.dow : 0;
                if (null != n) return Ce(t, (n + s) % 7, a, "day");
                var i, o = [];
                for (i = 0; i < 7; i++) o[i] = Ce(t, (i + s) % 7, a, "day");
                return o
            }

            function ze(e, t, n, a) {
                var r = Te(t, n);
                return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
            }

            function Re(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function Je(e) {
                return 4800 * e / 146097
            }

            function Ie(e) {
                return 146097 * e / 4800
            }

            function qe(e) {
                return function() {
                    return this.as(e)
                }
            }

            function Be(e) {
                return function() {
                    return this._data[e]
                }
            }

            function Ue() {
                var e, t, n = Fn(this._milliseconds) / 1e3,
                    a = Fn(this._days),
                    r = Fn(this._months);
                e = M(n / 60), t = M(e / 60), n %= 60, e %= 60;
                var s = M(r / 12),
                    i = r %= 12,
                    o = a,
                    d = t,
                    u = e,
                    _ = n,
                    l = this.asSeconds();
                return l ? (l < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (i ? i + "M" : "") + (o ? o + "D" : "") + (d || u || _ ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (_ ? _ + "S" : "") : "P0D"
            }
            var Ge, Ve;
            Ve = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                    if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1
            };
            var $e, Xe = t.momentProperties = [],
                Ke = !1,
                Ze = {};
            t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, $e = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) o(e, t) && n.push(t);
                return n
            };
            var Qe, et = {},
                tt = {},
                nt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                at = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                rt = {},
                st = {},
                it = /\d/,
                ot = /\d\d/,
                dt = /\d{3}/,
                ut = /\d{4}/,
                _t = /[+-]?\d{6}/,
                lt = /\d\d?/,
                mt = /\d\d\d\d?/,
                ct = /\d\d\d\d\d\d?/,
                ht = /\d{1,3}/,
                ft = /\d{1,4}/,
                pt = /[+-]?\d{1,6}/,
                Mt = /\d+/,
                yt = /[+-]?\d+/,
                Lt = /Z|[+-]\d\d:?\d\d/gi,
                Yt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                gt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                vt = {},
                kt = {},
                Dt = 0,
                Tt = 1,
                wt = 2,
                bt = 3,
                St = 4,
                xt = 5,
                Ht = 6,
                jt = 7,
                Pt = 8;
            Qe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, A("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), A("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), A("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), w("month", "M"), x("month", 8), O("M", lt), O("MM", lt, ot), O("MMM", function(e, t) {
                return t.monthsShortRegex(e)
            }), O("MMMM", function(e, t) {
                return t.monthsRegex(e)
            }), R(["M", "MM"], function(e, t) {
                t[Tt] = y(e) - 1
            }), R(["MMM", "MMMM"], function(e, t, n, a) {
                var r = n._locale.monthsParse(e, a, n._strict);
                null != r ? t[Tt] = r : _(n).invalidMonth = e
            });
            var Et = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Wt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                Ft = gt,
                Ct = gt;
            A("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), A(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), w("year", "y"), x("year", 1), O("Y", yt), O("YY", lt, ot), O("YYYY", ft, ut), O("YYYYY", pt, _t), O("YYYYYY", pt, _t), R(["YYYYY", "YYYYYY"], Dt), R("YYYY", function(e, n) {
                n[Dt] = 2 === e.length ? t.parseTwoDigitYear(e) : y(e)
            }), R("YY", function(e, n) {
                n[Dt] = t.parseTwoDigitYear(e)
            }), R("Y", function(e, t) {
                t[Dt] = parseInt(e, 10)
            }), t.parseTwoDigitYear = function(e) {
                return y(e) + (y(e) > 68 ? 1900 : 2e3)
            };
            var Ot = H("FullYear", !0);
            A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), w("week", "w"), w("isoWeek", "W"), x("week", 5), x("isoWeek", 5), O("w", lt), O("ww", lt, ot), O("W", lt), O("WW", lt, ot), J(["w", "ww", "W", "WW"], function(e, t, n, a) {
                t[a.substr(0, 1)] = y(e)
            }), A("d", 0, "do", "day"), A("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), A("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), A("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), w("day", "d"), w("weekday", "e"), w("isoWeekday", "E"), x("day", 11), x("weekday", 11), x("isoWeekday", 11), O("d", lt), O("e", lt), O("E", lt), O("dd", function(e, t) {
                return t.weekdaysMinRegex(e)
            }), O("ddd", function(e, t) {
                return t.weekdaysShortRegex(e)
            }), O("dddd", function(e, t) {
                return t.weekdaysRegex(e)
            }), J(["dd", "ddd", "dddd"], function(e, t, n, a) {
                var r = n._locale.weekdaysParse(e, a, n._strict);
                null != r ? t.d = r : _(n).invalidWeekday = e
            }), J(["d", "e", "E"], function(e, t, n, a) {
                t[a] = y(e)
            });
            var Nt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Rt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Jt = gt,
                It = gt,
                qt = gt;
            A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, te), A("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), A("hmm", 0, 0, function() {
                return "" + te.apply(this) + E(this.minutes(), 2)
            }), A("hmmss", 0, 0, function() {
                return "" + te.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
            }), A("Hmm", 0, 0, function() {
                return "" + this.hours() + E(this.minutes(), 2)
            }), A("Hmmss", 0, 0, function() {
                return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
            }), ne("a", !0), ne("A", !1), w("hour", "h"), x("hour", 13), O("a", ae), O("A", ae), O("H", lt), O("h", lt), O("HH", lt, ot), O("hh", lt, ot), O("hmm", mt), O("hmmss", ct), O("Hmm", mt), O("Hmmss", ct), R(["H", "HH"], bt), R(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), R(["h", "hh"], function(e, t, n) {
                t[bt] = y(e), _(n).bigHour = !0
            }), R("hmm", function(e, t, n) {
                var a = e.length - 2;
                t[bt] = y(e.substr(0, a)), t[St] = y(e.substr(a)), _(n).bigHour = !0
            }), R("hmmss", function(e, t, n) {
                var a = e.length - 4,
                    r = e.length - 2;
                t[bt] = y(e.substr(0, a)), t[St] = y(e.substr(a, 2)), t[xt] = y(e.substr(r)), _(n).bigHour = !0
            }), R("Hmm", function(e, t, n) {
                var a = e.length - 2;
                t[bt] = y(e.substr(0, a)), t[St] = y(e.substr(a))
            }), R("Hmmss", function(e, t, n) {
                var a = e.length - 4,
                    r = e.length - 2;
                t[bt] = y(e.substr(0, a)), t[St] = y(e.substr(a, 2)), t[xt] = y(e.substr(r))
            });
            var Bt, Ut = H("Hours", !0),
                Gt = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    ordinalParse: /\d{1,2}/,
                    relativeTime: {
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
                    },
                    months: At,
                    monthsShort: Wt,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Nt,
                    weekdaysMin: Rt,
                    weekdaysShort: zt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                Vt = {},
                $t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Xt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Kt = /Z|[+-]\d\d(?::?\d\d)?/,
                Zt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Qt = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                en = /^\/?Date\((\-?\d+)/i;
            t.createFromInputFallback = g("moment construction falls back to core Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/core-date/ for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), t.ISO_8601 = function() {};
            var tn = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = pe.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : m()
                }),
                nn = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var e = pe.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : m()
                });
            Ye("Z", ":"), Ye("ZZ", ""), O("Z", Yt), O("ZZ", Yt), R(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = ge(Yt, e)
            });
            var an = /([\+\-]|\d\d)/gi;
            t.updateOffset = function() {};
            var rn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                sn = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            Te.fn = ye.prototype;
            var on = xe(1, "add"),
                dn = xe(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var un = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            A(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), A(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Ee("gggg", "weekYear"), Ee("ggggg", "weekYear"), Ee("GGGG", "isoWeekYear"), Ee("GGGGG", "isoWeekYear"), w("weekYear", "gg"), w("isoWeekYear", "GG"), x("weekYear", 1), x("isoWeekYear", 1), O("G", yt), O("g", yt), O("GG", lt, ot), O("gg", lt, ot), O("GGGG", ft, ut), O("gggg", ft, ut), O("GGGGG", pt, _t), O("ggggg", pt, _t), J(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                t[a.substr(0, 2)] = y(e)
            }), J(["gg", "GG"], function(e, n, a, r) {
                n[r] = t.parseTwoDigitYear(e)
            }), A("Q", 0, "Qo", "quarter"), w("quarter", "Q"), x("quarter", 7), O("Q", it), R("Q", function(e, t) {
                t[Tt] = 3 * (y(e) - 1)
            }), A("D", ["DD", 2], "Do", "date"), w("date", "D"), x("date", 9), O("D", lt), O("DD", lt, ot), O("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }), R(["D", "DD"], wt), R("Do", function(e, t) {
                t[wt] = y(e.match(lt)[0])
            });
            var _n = H("Date", !0);
            A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), w("dayOfYear", "DDD"), x("dayOfYear", 4), O("DDD", ht), O("DDDD", dt), R(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = y(e)
            }), A("m", ["mm", 2], 0, "minute"), w("minute", "m"), x("minute", 14), O("m", lt), O("mm", lt, ot), R(["m", "mm"], St);
            var ln = H("Minutes", !1);
            A("s", ["ss", 2], 0, "second"), w("second", "s"), x("second", 15), O("s", lt), O("ss", lt, ot), R(["s", "ss"], xt);
            var mn, cn = H("Seconds", !1);
            for (A("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), A(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), A(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), A(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), A(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), A(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), A(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), w("millisecond", "ms"), x("millisecond", 16), O("S", ht, it), O("SS", ht, ot), O("SSS", ht, dt), mn = "SSSS"; mn.length <= 9; mn += "S") O(mn, Mt);
            for (mn = "S"; mn.length <= 9; mn += "S") R(mn, We);
            var hn = H("Milliseconds", !1);
            A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
            var fn = f.prototype;
            fn.add = on, fn.calendar = function(e, n) {
                var a = e || pe(),
                    r = ve(a, this).startOf("day"),
                    s = t.calendarFormat(this, r) || "sameElse",
                    i = n && (k(n[s]) ? n[s].call(this, a) : n[s]);
                return this.format(i || this.localeData().calendar(s, this, pe(a)))
            }, fn.clone = function() {
                return new f(this)
            }, fn.diff = function(e, t, n) {
                var a, r, s, i;
                return this.isValid() && (a = ve(e, this)).isValid() ? (r = 6e4 * (a.utcOffset() - this.utcOffset()), "year" === (t = b(t)) || "month" === t || "quarter" === t ? (i = function(e, t) {
                    var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        s = e.clone().add(r, "months");
                    return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0
                }(this, a), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (s = this - a, i = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - r) / 864e5 : "week" === t ? (s - r) / 6048e5 : s), n ? i : M(i)) : NaN
            }, fn.endOf = function(e) {
                return void 0 === (e = b(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }, fn.format = function(e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var n = F(this, e);
                return this.localeData().postformat(n)
            }, fn.from = function(e, t) {
                return this.isValid() && (p(e) && e.isValid() || pe(e).isValid()) ? Te({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, fn.fromNow = function(e) {
                return this.from(pe(), e)
            }, fn.to = function(e, t) {
                return this.isValid() && (p(e) && e.isValid() || pe(e).isValid()) ? Te({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, fn.toNow = function(e) {
                return this.to(pe(), e)
            }, fn.get = function(e) {
                return k(this[e = b(e)]) ? this[e]() : this
            }, fn.invalidAt = function() {
                return _(this).overflow
            }, fn.isAfter = function(e, t) {
                var n = p(e) ? e : pe(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = b(c(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, fn.isBefore = function(e, t) {
                var n = p(e) ? e : pe(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = b(c(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, fn.isBetween = function(e, t, n, a) {
                return ("(" === (a = a || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }, fn.isSame = function(e, t) {
                var n, a = p(e) ? e : pe(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = b(t || "millisecond")) ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, fn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, fn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, fn.isValid = function() {
                return l(this)
            }, fn.lang = un, fn.locale = je, fn.localeData = Pe, fn.max = nn, fn.min = tn, fn.parsingFlags = function() {
                return d({}, _(this))
            }, fn.set = function(e, t) {
                if ("object" == typeof e)
                    for (var n = function(e) {
                        var t = [];
                        for (var n in e) t.push({
                            unit: n,
                            priority: tt[n]
                        });
                        return t.sort(function(e, t) {
                            return e.priority - t.priority
                        }), t
                    }(e = S(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
                else if (e = b(e), k(this[e])) return this[e](t);
                return this
            }, fn.startOf = function(e) {
                switch (e = b(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }, fn.subtract = dn, fn.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, fn.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, fn.toDate = function() {
                return new Date(this.valueOf())
            }, fn.toISOString = function() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? k(Date.prototype.toISOString) ? this.toDate().toISOString() : F(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }, fn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, fn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, fn.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, fn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, fn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, fn.year = Ot, fn.isLeapYear = function() {
                return V(this.year())
            }, fn.weekYear = function(e) {
                return Ae.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, fn.isoWeekYear = function(e) {
                return Ae.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, fn.quarter = fn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, fn.month = B, fn.daysInMonth = function() {
                return I(this.year(), this.month())
            }, fn.week = fn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, fn.isoWeek = fn.isoWeeks = function(e) {
                var t = Z(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, fn.weeksInYear = function() {
                var e = this.localeData()._week;
                return Q(this.year(), e.dow, e.doy)
            }, fn.isoWeeksInYear = function() {
                return Q(this.year(), 1, 4)
            }, fn.date = _n, fn.day = fn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, fn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, fn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, fn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, fn.hour = fn.hours = Ut, fn.minute = fn.minutes = ln, fn.second = fn.seconds = cn, fn.millisecond = fn.milliseconds = hn, fn.utcOffset = function(e, n) {
                var a, r = this._offset || 0;
                return this.isValid() ? null != e ? ("string" == typeof e ? e = ge(Yt, e) : Math.abs(e) < 16 && (e *= 60), !this._isUTC && n && (a = ke(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!n || this._changeInProgress ? He(this, Te(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : ke(this) : null != e ? this : NaN
            }, fn.utc = function(e) {
                return this.utcOffset(0, e)
            }, fn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ke(this), "m")), this
            }, fn.parseZone = function() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(ge(Lt, this._i)), this
            }, fn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? pe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, fn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, fn.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, fn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, fn.isUtc = De, fn.isUTC = De, fn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, fn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, fn.dates = g("dates accessor is deprecated. Use date instead.", _n), fn.months = g("months accessor is deprecated. Use month instead", B), fn.years = g("years accessor is deprecated. Use year instead", Ot), fn.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }), fn.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!c(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (h(e, this), (e = he(e))._a) {
                    var t = e._isUTC ? u(e._a) : pe(e._a);
                    this._isDSTShifted = this.isValid() && L(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var pn = fn,
                Mn = T.prototype;
            Mn.calendar = function(e, t, n) {
                var a = this._calendar[e] || this._calendar.sameElse;
                return k(a) ? a.call(t, n) : a
            }, Mn.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }, Mn.invalidDate = function() {
                return this._invalidDate
            }, Mn.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, Mn.preparse = Fe, Mn.postformat = Fe, Mn.relativeTime = function(e, t, n, a) {
                var r = this._relativeTime[n];
                return k(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
            }, Mn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return k(n) ? n(t) : n.replace(/%s/i, t)
            }, Mn.set = function(e) {
                var t, n;
                for (n in e) t = e[n], k(t) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }, Mn.months = function(e, t) {
                return a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Et).test(t) ? "format" : "standalone"][e.month()]
            }, Mn.monthsShort = function(e, t) {
                return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Et.test(t) ? "format" : "standalone"][e.month()]
            }, Mn.monthsParse = function(e, t, n) {
                var a, r, s;
                if (this._monthsParseExact) return function(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) s = u([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (r = Qe.call(this._shortMonthsParse, i)) ? r : null : -1 !== (r = Qe.call(this._longMonthsParse, i)) ? r : null : "MMM" === t ? -1 !== (r = Qe.call(this._shortMonthsParse, i)) ? r : -1 !== (r = Qe.call(this._longMonthsParse, i)) ? r : null : -1 !== (r = Qe.call(this._longMonthsParse, i)) ? r : -1 !== (r = Qe.call(this._shortMonthsParse, i)) ? r : null
                }.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                    if (r = u([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                    if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                    if (!n && this._monthsParse[a].test(e)) return a
                }
            }, Mn.monthsRegex = function(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || U.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = Ct), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Mn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || U.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = Ft), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Mn.week = function(e) {
                return Z(e, this._week.dow, this._week.doy).week
            }, Mn.firstDayOfYear = function() {
                return this._week.doy
            }, Mn.firstDayOfWeek = function() {
                return this._week.dow
            }, Mn.weekdays = function(e, t) {
                return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
            }, Mn.weekdaysMin = function(e) {
                return this._weekdaysMin[e.day()]
            }, Mn.weekdaysShort = function(e) {
                return this._weekdaysShort[e.day()]
            }, Mn.weekdaysParse = function(e, t, n) {
                var a, r, s;
                if (this._weekdaysParseExact) return function(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) s = u([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (r = Qe.call(this._weekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Qe.call(this._shortWeekdaysParse, i)) ? r : null : -1 !== (r = Qe.call(this._minWeekdaysParse, i)) ? r : null : "dddd" === t ? -1 !== (r = Qe.call(this._weekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._shortWeekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._minWeekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Qe.call(this._shortWeekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._weekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._minWeekdaysParse, i)) ? r : null : -1 !== (r = Qe.call(this._minWeekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._weekdaysParse, i)) ? r : -1 !== (r = Qe.call(this._shortWeekdaysParse, i)) ? r : null
                }.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                    if (r = u([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                    if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                    if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                    if (!n && this._weekdaysParse[a].test(e)) return a
                }
            }, Mn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Jt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Mn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = It), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Mn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Mn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, Mn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, ie("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), t.lang = g("moment.lang is deprecated. Use moment.locale instead.", ie), t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", de);
            var yn = Math.abs,
                Ln = qe("ms"),
                Yn = qe("s"),
                gn = qe("m"),
                vn = qe("h"),
                kn = qe("d"),
                Dn = qe("w"),
                Tn = qe("M"),
                wn = qe("y"),
                bn = Be("milliseconds"),
                Sn = Be("seconds"),
                xn = Be("minutes"),
                Hn = Be("hours"),
                jn = Be("days"),
                Pn = Be("months"),
                En = Be("years"),
                An = Math.round,
                Wn = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Fn = Math.abs,
                Cn = ye.prototype;
            return Cn.abs = function() {
                var e = this._data;
                return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this
            }, Cn.add = function(e, t) {
                return ze(this, e, t, 1)
            }, Cn.subtract = function(e, t) {
                return ze(this, e, t, -1)
            }, Cn.as = function(e) {
                var t, n, a = this._milliseconds;
                if ("month" === (e = b(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + Je(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Ie(this._months)), e) {
                    case "week":
                        return t / 7 + a / 6048e5;
                    case "day":
                        return t + a / 864e5;
                    case "hour":
                        return 24 * t + a / 36e5;
                    case "minute":
                        return 1440 * t + a / 6e4;
                    case "second":
                        return 86400 * t + a / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + a;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, Cn.asMilliseconds = Ln, Cn.asSeconds = Yn, Cn.asMinutes = gn, Cn.asHours = vn, Cn.asDays = kn, Cn.asWeeks = Dn, Cn.asMonths = Tn, Cn.asYears = wn, Cn.valueOf = function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
            }, Cn._bubble = function() {
                var e, t, n, a, r, s = this._milliseconds,
                    i = this._days,
                    o = this._months,
                    d = this._data;
                return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * Re(Ie(o) + i), i = 0, o = 0), d.milliseconds = s % 1e3, e = M(s / 1e3), d.seconds = e % 60, t = M(e / 60), d.minutes = t % 60, n = M(t / 60), d.hours = n % 24, i += M(n / 24), r = M(Je(i)), o += r, i -= Re(Ie(r)), a = M(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
            }, Cn.get = function(e) {
                return this[(e = b(e)) + "s"]()
            }, Cn.milliseconds = bn, Cn.seconds = Sn, Cn.minutes = xn, Cn.hours = Hn, Cn.days = jn, Cn.weeks = function() {
                return M(this.days() / 7)
            }, Cn.months = Pn, Cn.years = En, Cn.humanize = function(e) {
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var a = Te(e).abs(),
                            r = An(a.as("s")),
                            s = An(a.as("m")),
                            i = An(a.as("h")),
                            o = An(a.as("d")),
                            d = An(a.as("M")),
                            u = An(a.as("y")),
                            _ = r < Wn.s && ["s", r] || s <= 1 && ["m"] || s < Wn.m && ["mm", s] || i <= 1 && ["h"] || i < Wn.h && ["hh", i] || o <= 1 && ["d"] || o < Wn.d && ["dd", o] || d <= 1 && ["M"] || d < Wn.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                        return _[2] = t, _[3] = +e > 0, _[4] = n,
                            function(e, t, n, a, r) {
                                return r.relativeTime(t || 1, !!n, e, a)
                            }.apply(null, _)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, Cn.toISOString = Ue, Cn.toString = Ue, Cn.toJSON = Ue, Cn.locale = je, Cn.localeData = Pe, Cn.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ue), Cn.lang = un, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), O("x", yt), O("X", /[+-]?\d+(\.\d{1,3})?/), R("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), R("x", function(e, t, n) {
                n._d = new Date(y(e))
            }), t.version = "2.14.1", Ge = pe, t.fn = pn, t.min = function() {
                return Me("isBefore", [].slice.call(arguments, 0))
            }, t.max = function() {
                return Me("isAfter", [].slice.call(arguments, 0))
            }, t.now = function() {
                return Date.now ? Date.now() : +new Date
            }, t.utc = u, t.unix = function(e) {
                return pe(1e3 * e)
            }, t.months = function(e, t) {
                return Oe(e, t, "months")
            }, t.isDate = s, t.locale = ie, t.invalid = m, t.duration = Te, t.isMoment = p, t.weekdays = function(e, t, n) {
                return Ne(e, t, n, "weekdays")
            }, t.parseZone = function() {
                return pe.apply(null, arguments).parseZone()
            }, t.localeData = de, t.isDuration = Le, t.monthsShort = function(e, t) {
                return Oe(e, t, "monthsShort")
            }, t.weekdaysMin = function(e, t, n) {
                return Ne(e, t, n, "weekdaysMin")
            }, t.defineLocale = oe, t.updateLocale = function(e, t) {
                if (null != t) {
                    var n, a = Gt;
                    null != Vt[e] && (a = Vt[e]._config), t = D(a, t), (n = new T(t)).parentLocale = Vt[e], Vt[e] = n, ie(e)
                } else null != Vt[e] && (null != Vt[e].parentLocale ? Vt[e] = Vt[e].parentLocale : null != Vt[e] && delete Vt[e]);
                return Vt[e]
            }, t.locales = function() {
                return $e(Vt)
            }, t.weekdaysShort = function(e, t, n) {
                return Ne(e, t, n, "weekdaysShort")
            }, t.normalizeUnits = b, t.relativeTimeRounding = function(e) {
                return void 0 === e ? An : "function" == typeof e && (An = e, !0)
            }, t.relativeTimeThreshold = function(e, t) {
                return void 0 !== Wn[e] && (void 0 === t ? Wn[e] : (Wn[e] = t, !0))
            }, t.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, t.prototype = pn, t
        }()
    }).call(t, n(18)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    function a(e) {
        return n(r(e))
    }

    function r(e) {
        return s[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var s = {
        "./ru": 95,
        "./ru.js": 95
    };
    a.keys = function() {
        return Object.keys(s)
    }, a.resolve = r, e.exports = a, a.id = 19
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            a = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function(e) {
                return function(t, n, s, i) {
                    var o = a(t),
                        d = r[e][a(t)];
                    return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            i = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function(e) {
                return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var n = e % 10,
                    a = e % 100 - n,
                    r = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a, r, s = {
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (a = +e, r = s[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
            weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + (a = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], 2 === e ? void 0 === (s = {
                m: "v",
                b: "v",
                d: "z"
            })[(r = a).charAt(0)] ? r : s[r.charAt(0)] + r.substring(1) : a);
            var a, r, s
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch ((t = e) > 9 ? B2(t % 10) : t) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                    var t
                }
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function n(e, n, a, r) {
            var s = e + " ";
            switch (a) {
                case "s":
                    return n || r ? "pár sekund" : "pár sekundami";
                case "m":
                    return n ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return n || r ? s + (t(e) ? "minuty" : "minut") : s + "minutami";
                case "h":
                    return n ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return n || r ? s + (t(e) ? "hodiny" : "hodin") : s + "hodinami";
                case "d":
                    return n || r ? "den" : "dnem";
                case "dd":
                    return n || r ? s + (t(e) ? "dny" : "dní") : s + "dny";
                case "M":
                    return n || r ? "měsíc" : "měsícem";
                case "MM":
                    return n || r ? s + (t(e) ? "měsíce" : "měsíců") : s + "měsíci";
                case "y":
                    return n || r ? "rok" : "rokem";
                case "yy":
                    return n || r ? s + (t(e) ? "roky" : "let") : s + "lety"
            }
        }
        var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        e.defineLocale("cs", {
            months: a,
            monthsShort: r,
            monthsParse: function(e, t) {
                var n, a = [];
                for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return a
            }(a, r),
            shortMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(r),
            longMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(a),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e,
                    n = "";
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, a = this._calendarEl[e],
                    r = t && t.hours();
                return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", r % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, r, s) {
            var i, o = "";
            switch (r) {
                case "s":
                    return s ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return s ? "minuutin" : "minuutti";
                case "mm":
                    o = s ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return s ? "tunnin" : "tunti";
                case "hh":
                    o = s ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return s ? "päivän" : "päivä";
                case "dd":
                    o = s ? "päivän" : "päivää";
                    break;
                case "M":
                    return s ? "kuukauden" : "kuukausi";
                case "MM":
                    o = s ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return s ? "vuoden" : "vuosi";
                case "yy":
                    o = s ? "vuoden" : "vuotta"
            }
            return o = ((i = e) < 10 ? s ? a[i] : n[i] : i) + " " + o
        }
        var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function(e) {
                return e + (1 === e ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e) {
                return e + (1 === e ? "er" : "e")
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e) {
                return e + (1 === e ? "er" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, a) {
                return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            ordinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return "uns segundos" === e ? "nuns segundos" : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = e;
            switch (n) {
                case "s":
                    return a || t ? "néhány másodperc" : "néhány másodperce";
                case "m":
                    return "egy" + (a || t ? " perc" : " perce");
                case "mm":
                    return r + (a || t ? " perc" : " perce");
                case "h":
                    return "egy" + (a || t ? " óra" : " órája");
                case "hh":
                    return r + (a || t ? " óra" : " órája");
                case "d":
                    return "egy" + (a || t ? " nap" : " napja");
                case "dd":
                    return r + (a || t ? " nap" : " napja");
                case "M":
                    return "egy" + (a || t ? " hónap" : " hónapja");
                case "MM":
                    return r + (a || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (a || t ? " év" : " éve");
                case "yy":
                    return r + (a || t ? " év" : " éve")
            }
            return ""
        }

        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
        }
        var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, a, r) {
            var s = e + " ";
            switch (a) {
                case "s":
                    return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? s + (n || r ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return t(e) ? s + (n || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : r ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? s + "dagar" : s + (r ? "daga" : "dögum") : n ? s + "dagur" : s + (r ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : r ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
                case "y":
                    return n || r ? "ár" : "ári";
                case "yy":
                    return t(e) ? s + (n || r ? "ár" : "árum") : s + (n || r ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "Ah時m分s秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah時m分",
                LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                var n = e % 10,
                    a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h시 m분",
                LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                var n = e % 10,
                    a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? r[n][0] : r[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10,
                    a = e / 10;
                return n(0 === t ? a : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            ordinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, r) {
            return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
        }

        function n(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function a(e) {
            return s[e].split("_")
        }

        function r(e, r, s, i) {
            var o = e + " ";
            return 1 === e ? o + t(0, r, s[0], i) : r ? o + (n(e) ? a(s)[1] : a(s)[0]) : i ? o + a(s)[1] : o + (n(e) ? a(s)[1] : a(s)[2])
        }
        var s = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, n, a) {
                    return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
                },
                m: t,
                mm: r,
                h: t,
                hh: r,
                d: t,
                dd: r,
                M: t,
                MM: r,
                y: t,
                yy: r
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function n(e, n, a) {
            return e + " " + t(r[a], e, n)
        }

        function a(e, n, a) {
            return t(r[a], e, n)
        }
        var r = {
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                m: a,
                mm: n,
                h: a,
                hh: n,
                d: a,
                dd: n,
                M: a,
                MM: n,
                y: a,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = "";
            if (t) switch (n) {
                case "s":
                    r = "काही सेकंद";
                    break;
                case "m":
                    r = "एक मिनिट";
                    break;
                case "mm":
                    r = "%d मिनिटे";
                    break;
                case "h":
                    r = "एक तास";
                    break;
                case "hh":
                    r = "%d तास";
                    break;
                case "d":
                    r = "एक दिवस";
                    break;
                case "dd":
                    r = "%d दिवस";
                    break;
                case "M":
                    r = "एक महिना";
                    break;
                case "MM":
                    r = "%d महिने";
                    break;
                case "y":
                    r = "एक वर्ष";
                    break;
                case "yy":
                    r = "%d वर्षे"
            } else switch (n) {
                case "s":
                    r = "काही सेकंदां";
                    break;
                case "m":
                    r = "एका मिनिटा";
                    break;
                case "mm":
                    r = "%d मिनिटां";
                    break;
                case "h":
                    r = "एका तासा";
                    break;
                case "hh":
                    r = "%d तासां";
                    break;
                case "d":
                    r = "एका दिवसा";
                    break;
                case "dd":
                    r = "%d दिवसां";
                    break;
                case "M":
                    r = "एका महिन्या";
                    break;
                case "MM":
                    r = "%d महिन्यां";
                    break;
                case "y":
                    r = "एका वर्षा";
                    break;
                case "yy":
                    r = "%d वर्षां"
            }
            return r.replace(/%d/i, e)
        }
        var n = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return a[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return n[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
            },
            monthsParseExact: !0,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function n(e, n, a) {
            var r = e + " ";
            switch (a) {
                case "m":
                    return n ? "minuta" : "minutę";
                case "mm":
                    return r + (t(e) ? "minuty" : "minut");
                case "h":
                    return n ? "godzina" : "godzinę";
                case "hh":
                    return r + (t(e) ? "godziny" : "godzin");
                case "MM":
                    return r + (t(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return r + (t(e) ? "lata" : "lat")
            }
        }
        var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        e.defineLocale("pl", {
            months: function(e, t) {
                return "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: n,
                y: "rok",
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a, r, s = {
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? t ? "минута" : "минуту" : e + " " + (a = +e, r = s[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }
        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e > 1 && e < 5
        }

        function n(e, n, a, r) {
            var s = e + " ";
            switch (a) {
                case "s":
                    return n || r ? "pár sekúnd" : "pár sekundami";
                case "m":
                    return n ? "minúta" : r ? "minútu" : "minútou";
                case "mm":
                    return n || r ? s + (t(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return n ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return n || r ? s + (t(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return n || r ? "deň" : "dňom";
                case "dd":
                    return n || r ? s + (t(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return n || r ? "mesiac" : "mesiacom";
                case "MM":
                    return n || r ? s + (t(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return n || r ? "rok" : "rokom";
                case "yy":
                    return n || r ? s + (t(e) ? "roky" : "rokov") : s + "rokmi"
            }
        }
        var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        e.defineLocale("sk", {
            months: a,
            monthsShort: r,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "nekaj sekund" : "nekaj sekundami";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                case "d":
                    return t || a ? "en dan" : "enim dnem";
                case "dd":
                    return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                case "M":
                    return t || a ? "en mesec" : "enim mesecem";
                case "MM":
                    return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                case "y":
                    return t || a ? "eno leto" : "enim letom";
                case "yy":
                    return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            ordinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            ordinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            ordinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                LTS: "H นาฬิกา m นาที s วินาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, a, r) {
            var s, i, o, d, u, _ = (s = e, i = Math.floor(s % 1e3 / 100), o = Math.floor(s % 100 / 10), d = s % 10, u = "", i > 0 && (u += n[i] + "vatlh"), o > 0 && (u += ("" !== u ? " " : "") + n[o] + "maH"), d > 0 && (u += ("" !== u ? " " : "") + n[d]), "" === u ? "pagh" : u);
            switch (a) {
                case "mm":
                    return _ + " tup";
                case "hh":
                    return _ + " rep";
                case "dd":
                    return _ + " jaj";
                case "MM":
                    return _ + " jar";
                case "yy":
                    return _ + " DIS"
            }
        }
        var n = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                m: "wa’ tup",
                mm: t,
                h: "wa’ rep",
                hh: t,
                d: "wa’ jaj",
                dd: t,
                M: "wa’ jar",
                MM: t,
                y: "wa’ DIS",
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function(e) {
                if (0 === e) return e + "'ıncı";
                var n = e % 10,
                    a = e % 100 - n,
                    r = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var r = {
                s: ["viensas secunds", "'iensas secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return a ? r[n][0] : t ? r[n][0] : r[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a, r, s = {
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (a = +e, r = s[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }

        function n(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                return {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                }[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()]
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: n("[Сьогодні "),
                nextDay: n("[Завтра "),
                lastDay: n("[Вчора "),
                nextWeek: n("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm分",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah点mm分",
                LLLL: "YYYY年MMMD日ddddAh点mm分",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah点mm分",
                llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function() {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                },
                nextDay: function() {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                },
                lastDay: function() {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                },
                nextWeek: function() {
                    var t, n;
                    return t = e().startOf("week"), n = this.diff(t, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                lastWeek: function() {
                    var t, n;
                    return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
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
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(17))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(17))
}, function(e, t) {
    "use strict";
    t.Templates = {
        popup: "",
        user: "",
        item: "",
        msg: "<div class='fpv-msg'>{msg}</div>",
        init: function(e) {
            var n = ["popup", "user", "item"];
            n.forEach(function(a, r) {
                var s = new XMLHttpRequest;
                s.open("GET", chrome['extension'].getURL("html/" + a + ".html"), !0), s.onload = function() {
                    s.status >= 200 && s.status < 400 && (t.Templates[a] = s.responseText, n.length == r + 1 && e())
                }, s.send()
            })
        },
        render: function(e, n) {
            var a = t.Templates[e];
            for (var r in n) a = a.replace(new RegExp("{" + r + "}", "g"), n[r]);
            return a
        }
    }, window.Templates = t.Templates
}]);