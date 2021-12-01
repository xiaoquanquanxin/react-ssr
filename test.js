/*! For license information please see bundle.1895.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        879: (e, t, n) => {
            n.d(t, {Z: () => c});
            var a = n(81), r = n.n(a), l = n(645), o = n.n(l)()(r());
            o.push([e.id, ".GM8NIV8J7JgsU4uIYwLu a {\n  background-color: lightpink;\n}\n", ""]), o.locals = {test: "GM8NIV8J7JgsU4uIYwLu"};
            const c = o
        }, 645: e => {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = "", a = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), a && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), a && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function (e, n, a, r, l) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var o = {};
                    if (a) for (var c = 0; c < this.length; c++) {
                        var u = this[c][0];
                        null != u && (o[u] = !0)
                    }
                    for (var i = 0; i < e.length; i++) {
                        var s = [].concat(e[i]);
                        a && o[s[0]] || (void 0 !== l && (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")), s[5] = l), n && (s[2] ? (s[1] = "@media ".concat(s[2], " {").concat(s[1], "}"), s[2] = n) : s[2] = n), r && (s[4] ? (s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}"), s[4] = r) : s[4] = "".concat(r)), t.push(s))
                    }
                }, t
            }
        }, 81: e => {
            e.exports = function (e) {
                return e[1]
            }
        }
    }, t = {};

    function n(a) {
        var r = t[a];
        if (void 0 !== r) return r.exports;
        var l = t[a] = {id: a, exports: {}};
        return e[a](l, l.exports, n), l.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {enumerable: !0, get: t[a]})
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        const e = React;
        var t = n.n(e);

        function a() {
            return a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }, a.apply(this, arguments)
        }

        var r, l = r || (r = {});
        l.Pop = "POP", l.Push = "PUSH", l.Replace = "REPLACE";

        function o(e) {
            e.preventDefault(), e.returnValue = ""
        }

        function c() {
            var e = [];
            return {
                get length() {
                    return e.length
                }, push: function (t) {
                    return e.push(t), function () {
                        e = e.filter((function (e) {
                            return e !== t
                        }))
                    }
                }, call: function (t) {
                    e.forEach((function (e) {
                        return e && e(t)
                    }))
                }
            }
        }

        function u(e) {
            var t = e.pathname, n = e.search;
            return (void 0 === t ? "/" : t) + (void 0 === n ? "" : n) + (void 0 === (e = e.hash) ? "" : e)
        }

        function i(e) {
            var t = {};
            if (e) {
                var n = e.indexOf("#");
                0 <= n && (t.hash = e.substr(n), e = e.substr(0, n)), 0 <= (n = e.indexOf("?")) && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
            }
            return t
        }

        function s(e, t) {
            if (!e) throw new Error(t)
        }

        const h = (0, e.createContext)(null), p = (0, e.createContext)(null),
            f = (0, e.createContext)({outlet: null, matches: []});

        function m(t) {
            return (0, e.useContext)(f).outlet
        }

        function d(e) {
            s(!1)
        }

        function v(t) {
            let {
                basename: n = "/",
                children: a = null,
                location: l,
                navigationType: o = r.Pop,
                navigator: c,
                static: u = !1
            } = t;
            E() && s(!1);
            let f = B(n), m = (0, e.useMemo)((() => ({basename: f, navigator: c, static: u})), [f, c, u]);
            "string" == typeof l && (l = i(l));
            let {pathname: d = "/", search: v = "", hash: g = "", state: y = null, key: b = "default"} = l,
                x = (0, e.useMemo)((() => {
                    let e = $(d, f);
                    return null == e ? null : {pathname: e, search: v, hash: g, state: y, key: b}
                }), [f, d, v, g, y, b]);
            return null == x ? null : (0, e.createElement)(h.Provider, {value: m}, (0, e.createElement)(p.Provider, {
                children: a,
                value: {location: x, navigationType: o}
            }))
        }

        function g(t) {
            let {children: n, location: a} = t;
            return function (t, n) {
                E() || s(!1);
                let {matches: a} = (0, e.useContext)(f), r = a[a.length - 1], l = r ? r.params : {},
                    o = (r && r.pathname, r ? r.pathnameBase : "/");
                r && r.route;
                let c, u = y();
                if (n) {
                    var h;
                    let e = "string" == typeof n ? i(n) : n;
                    "/" === o || (null == (h = e.pathname) ? void 0 : h.startsWith(o)) || s(!1), c = e
                } else c = u;
                let p = c.pathname || "/", d = function (e, t, n) {
                    void 0 === n && (n = "/");
                    let a = $(("string" == typeof t ? i(t) : t).pathname || "/", n);
                    if (null == a) return null;
                    let r = P(e);
                    !function (e) {
                        e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) {
                            return e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n])) ? e[e.length - 1] - t[t.length - 1] : 0
                        }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                    }(r);
                    let l = null;
                    for (let t = 0; null == l && t < r.length; ++t) l = S(r[t], e, a);
                    return l
                }(t, {pathname: "/" === o ? p : p.slice(o.length) || "/"});
                return function (t, n) {
                    return void 0 === n && (n = []), null == t ? null : t.reduceRight(((a, r, l) => (0, e.createElement)(f.Provider, {
                        children: void 0 !== r.route.element ? r.route.element : (0, e.createElement)(m, null),
                        value: {outlet: a, matches: n.concat(t.slice(0, l + 1))}
                    })), null)
                }(d && d.map((e => Object.assign({}, e, {
                    params: Object.assign({}, l, e.params),
                    pathname: R([o, e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? o : R([o, e.pathnameBase])
                }))), a)
            }(x(n), a)
        }

        function E() {
            return null != (0, e.useContext)(p)
        }

        function y() {
            return E() || s(!1), (0, e.useContext)(p).location
        }

        function b(t) {
            let {matches: n} = (0, e.useContext)(f), {pathname: a} = y(),
                r = JSON.stringify(n.map((e => e.pathnameBase)));
            return (0, e.useMemo)((() => j(t, JSON.parse(r), a)), [t, r, a])
        }

        function x(t) {
            let n = [];
            return e.Children.forEach(t, (t => {
                if (!(0, e.isValidElement)(t)) return;
                if (t.type === e.Fragment) return void n.push.apply(n, x(t.props.children));
                t.type !== d && s(!1);
                let a = {
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    index: t.props.index,
                    path: t.props.path
                };
                t.props.children && (a.children = x(t.props.children)), n.push(a)
            })), n
        }

        function P(e, t, n, a) {
            return void 0 === t && (t = []), void 0 === n && (n = []), void 0 === a && (a = ""), e.forEach(((e, r) => {
                let l = {relativePath: e.path || "", caseSensitive: !0 === e.caseSensitive, childrenIndex: r};
                l.relativePath.startsWith("/") && (l.relativePath.startsWith(a) || s(!1), l.relativePath = l.relativePath.slice(a.length));
                let o = R([a, l.relativePath]), c = n.concat(l);
                e.children && e.children.length > 0 && (!0 === e.index && s(!1), P(e.children, t, c, o)), (null != e.path || e.index) && t.push({
                    path: o,
                    score: O(o, e.index),
                    routesMeta: c
                })
            })), t
        }

        const w = /^:\w+$/, C = e => "*" === e;

        function O(e, t) {
            let n = e.split("/"), a = n.length;
            return n.some(C) && (a += -2), t && (a += 2), n.filter((e => !C(e))).reduce(((e, t) => e + (w.test(t) ? 3 : "" === t ? 1 : 10)), a)
        }

        function S(e, t, n) {
            let a = t, {routesMeta: r} = e, l = {}, o = "/", c = [];
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], u = e === r.length - 1, i = "/" === o ? n : n.slice(o.length) || "/",
                    s = k({path: t.relativePath, caseSensitive: t.caseSensitive, end: u}, i);
                if (!s) return null;
                Object.assign(l, s.params);
                let h = a[t.childrenIndex];
                c.push({
                    params: l,
                    pathname: R([o, s.pathname]),
                    pathnameBase: R([o, s.pathnameBase]),
                    route: h
                }), "/" !== s.pathnameBase && (o = R([o, s.pathnameBase])), a = h.children
            }
            return c
        }

        function k(e, t) {
            "string" == typeof e && (e = {path: e, caseSensitive: !1, end: !0});
            let [n, a] = function (e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !0);
                let a = [],
                    r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, ((e, t) => (a.push(t), "([^\\/]+)")));
                return e.endsWith("*") ? (a.push("*"), r += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r += n ? "\\/*$" : "(?:\\b|$)", [new RegExp(r, t ? void 0 : "i"), a]
            }(e.path, e.caseSensitive, e.end), r = t.match(n);
            if (!r) return null;
            let l = r[0], o = l.replace(/(.)\/+$/, "$1"), c = r.slice(1);
            return {
                params: a.reduce(((e, t, n) => {
                    if ("*" === t) {
                        let e = c[n] || "";
                        o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function (e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (t) {
                            return e
                        }
                    }(c[n] || ""), e
                }), {}), pathname: l, pathnameBase: o, pattern: e
            }
        }

        function j(e, t, n) {
            let a, r = "string" == typeof e ? i(e) : e, l = "" === e || "" === r.pathname ? "/" : r.pathname;
            if (null == l) a = n; else {
                let e = t.length - 1;
                if (l.startsWith("..")) {
                    let t = l.split("/");
                    for (; ".." === t[0];) t.shift(), e -= 1;
                    r.pathname = t.join("/")
                }
                a = e >= 0 ? t[e] : "/"
            }
            let o = function (e, t) {
                void 0 === t && (t = "/");
                let {pathname: n, search: a = "", hash: r = ""} = "string" == typeof e ? i(e) : e,
                    l = n ? n.startsWith("/") ? n : function (e, t) {
                        let n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((e => {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(n, t) : t;
                return {pathname: l, search: M(a), hash: W(r)}
            }(r, a);
            return l && "/" !== l && l.endsWith("/") && !o.pathname.endsWith("/") && (o.pathname += "/"), o
        }

        function $(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            let n = e.charAt(t.length);
            return n && "/" !== n ? null : e.slice(t.length) || "/"
        }

        const R = e => e.join("/").replace(/\/\/+/g, "/"), B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            M = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            W = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";

        function D() {
            return D = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }, D.apply(this, arguments)
        }

        const I = ["onClick", "reloadDocument", "replace", "state", "target", "to"];

        function L(t) {
            let {basename: n, children: l, window: s} = t, h = (0, e.useRef)();
            null == h.current && (h.current = function (e) {
                function t() {
                    var e = p.location, t = f.state || {};
                    return [t.idx, {
                        pathname: e.pathname,
                        search: e.search,
                        hash: e.hash,
                        state: t.usr || null,
                        key: t.key || "default"
                    }]
                }

                function n(e) {
                    return "string" == typeof e ? e : u(e)
                }

                function l(e, t) {
                    return void 0 === t && (t = null), a({
                        pathname: g.pathname,
                        hash: "",
                        search: ""
                    }, "string" == typeof e ? i(e) : e, {state: t, key: Math.random().toString(36).substr(2, 8)})
                }

                function s(e) {
                    d = e, e = t(), v = e[0], g = e[1], E.call({action: d, location: g})
                }

                function h(e) {
                    f.go(e)
                }

                void 0 === e && (e = {});
                var p = void 0 === (e = e.window) ? document.defaultView : e, f = p.history, m = null;
                p.addEventListener("popstate", (function () {
                    if (m) y.call(m), m = null; else {
                        var e = r.Pop, n = t(), a = n[0];
                        if (n = n[1], y.length) {
                            if (null != a) {
                                var l = v - a;
                                l && (m = {
                                    action: e, location: n, retry: function () {
                                        h(-1 * l)
                                    }
                                }, h(l))
                            }
                        } else s(e)
                    }
                }));
                var d = r.Pop, v = (e = t())[0], g = e[1], E = c(), y = c();
                return null == v && (v = 0, f.replaceState(a({}, f.state, {idx: v}), "")), {
                    get action() {
                        return d
                    }, get location() {
                        return g
                    }, createHref: n, push: function e(t, a) {
                        var o = r.Push, c = l(t, a);
                        if (!y.length || (y.call({
                            action: o, location: c, retry: function () {
                                e(t, a)
                            }
                        }), 0)) {
                            var u = [{usr: c.state, key: c.key, idx: v + 1}, n(c)];
                            c = u[0], u = u[1];
                            try {
                                f.pushState(c, "", u)
                            } catch (e) {
                                p.location.assign(u)
                            }
                            s(o)
                        }
                    }, replace: function e(t, a) {
                        var o = r.Replace, c = l(t, a);
                        y.length && (y.call({
                            action: o, location: c, retry: function () {
                                e(t, a)
                            }
                        }), 1) || (c = [{usr: c.state, key: c.key, idx: v}, n(c)], f.replaceState(c[0], "", c[1]), s(o))
                    }, go: h, back: function () {
                        h(-1)
                    }, forward: function () {
                        h(1)
                    }, listen: function (e) {
                        return E.push(e)
                    }, block: function (e) {
                        var t = y.push(e);
                        return 1 === y.length && p.addEventListener("beforeunload", o), function () {
                            t(), y.length || p.removeEventListener("beforeunload", o)
                        }
                    }
                }
            }({window: s}));
            let p = h.current, [f, m] = (0, e.useState)({action: p.action, location: p.location});
            return (0, e.useLayoutEffect)((() => p.listen(m)), [p]), (0, e.createElement)(v, {
                basename: n,
                children: l,
                location: f.location,
                navigationType: f.action,
                navigator: p
            })
        }

        const J = (0, e.forwardRef)((function (t, n) {
            let {onClick: a, reloadDocument: r, replace: l = !1, state: o, target: c, to: p} = t, m = function (e, t) {
                if (null == e) return {};
                var n, a, r = {}, l = Object.keys(e);
                for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(t, I), d = function (t) {
                E() || s(!1);
                let {basename: n, navigator: a} = (0, e.useContext)(h), {hash: r, pathname: l, search: o} = b(t), c = l;
                if ("/" !== n) {
                    let e = function (e) {
                        return "" === e || "" === e.pathname ? "/" : "string" == typeof e ? i(e).pathname : e.pathname
                    }(t), a = null != e && e.endsWith("/");
                    c = "/" === l ? n + (a ? "/" : "") : R([n, l])
                }
                return a.createHref({pathname: c, search: o, hash: r})
            }(p), v = function (t, n) {
                let {target: a, replace: r, state: l} = void 0 === n ? {} : n, o = function () {
                    E() || s(!1);
                    let {
                            basename: t,
                            navigator: n
                        } = (0, e.useContext)(h), {matches: a} = (0, e.useContext)(f), {pathname: r} = y(),
                        l = JSON.stringify(a.map((e => e.pathnameBase))), o = (0, e.useRef)(!1);
                    return (0, e.useEffect)((() => {
                        o.current = !0
                    })), (0, e.useCallback)((function (e, a) {
                        if (void 0 === a && (a = {}), !o.current) return;
                        if ("number" == typeof e) return void n.go(e);
                        let c = j(e, JSON.parse(l), r);
                        "/" !== t && (c.pathname = R([t, c.pathname])), (a.replace ? n.replace : n.push)(c, a.state)
                    }), [t, n, l, r])
                }(), c = y(), i = b(t);
                return (0, e.useCallback)((e => {
                    if (!(0 !== e.button || a && "_self" !== a || function (e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                    }(e))) {
                        e.preventDefault();
                        let n = !!r || u(c) === u(i);
                        o(t, {replace: n, state: l})
                    }
                }), [c, o, i, r, l, a, t])
            }(p, {replace: l, state: o, target: c});
            return (0, e.createElement)("a", D({}, m, {
                href: d, onClick: function (e) {
                    a && a(e), e.defaultPrevented || r || v(e)
                }, ref: n, target: c
            }))
        })), N = axios;
        var V = n.n(N);
        const H = e => (async (e, t = null) => (t && (e += `?${new URLSearchParams(t).toString()}`), (async (e, t, n = null) => new Promise(((a, r) => {
            V().get(e, {method: t, data: n}).then((e => {
                200 === e.status && (console.log("接口底层", e.data), a(e.data)), r(e.data)
            }))
        })))(e = "http://localhost:3000" + e, "get")))("/api/getData", e), T = function () {
            const [t, n] = (0, e.useState)(null);
            return (0, e.useEffect)((() => {
                (async () => {
                    const e = await H({home: "home"});
                    n(e)
                })()
            }), []), e.createElement("div", null, e.createElement("h2", null, "Home"), e.createElement("p", null, t && t.name))
        }, U = {name: null};

        function A(e, t) {
            const {type: n, newData: a} = t;
            if ("set" === n) return {...e, ...a};
            throw new Error
        }

        const K = function () {
            const [t, n] = (0, e.useReducer)(A, "undefined" == typeof window ? U : window.initialState);
            return (0, e.useEffect)((() => {
                (async () => {
                    if (t && t.name) return;
                    const e = await H();
                    e.name += " 此为请求返回", n({type: "set", newData: e})
                })()
            }), []), e.createElement("div", null, e.createElement("h2", null, "About"), e.createElement("p", null, t.name))
        };
        var F = n(879);
        console.log("lessStyle"), console.log(F.Z);
        const G = (0, e.createContext)(null), Y = (0, e.createContext)({value: 11111, count: 22222}), Z = () => {
            const t = (0, e.useContext)(G), {count: n, setCount: a} = t;
            return e.createElement("button", {
                onClick: () => {
                    a(n + 1)
                }
            }, "pa==P===", n)
        }, _ = () => {
            const {count: t} = (0, e.useContext)(G), {value: n} = (0, e.useContext)(Y);
            return e.createElement("ul", null, e.createElement("li", null, "Bb==B===", n), e.createElement("li", null, "Pb--P===", t))
        }, q = () => {
            const {count: t} = (0, e.useContext)(G);
            return e.createElement(e.Fragment, null, e.createElement("div", null, "Pb==P===", t), e.createElement("hr", null), e.createElement(G.Provider, {value: {count: 2222}}, e.createElement(Y.Provider, {value: {value: 1111}}, e.createElement(_, null))))
        }, Q = () => {
            const [t, n] = (0, e.useState)(0);
            return e.createElement(G.Provider, {
                value: {
                    count: t,
                    setCount: n
                }
            }, e.createElement("div", {className: `klOYE8r3GwDTkEbVqDQN ${F.Z.test}`}, e.createElement(Z, null), e.createElement("hr", null), e.createElement(q, null), e.createElement("hr", null), e.createElement("p", null, e.createElement("a", null, "希望可以吃到烤鱼"))))
        }, z = [{path: "/", element: t().createElement(T, null)}, {
            path: "/about",
            element: t().createElement(K, null),
            loadData: async e => H(e)
        }, {path: "/test", element: t().createElement(Q, null)}];

        function X() {
            return X = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }, X.apply(this, arguments)
        }

        function ee() {
            return e.createElement("div", null, e.createElement("nav", null, e.createElement("ul", null, e.createElement("li", null, e.createElement(J, {to: "/"}, "Home")), e.createElement("li", null, e.createElement(J, {to: "/about"}, "About")), e.createElement("li", null, e.createElement(J, {to: "/test"}, "Test")))), e.createElement("hr", null), e.createElement(m, null))
        }

        const te = () => e.createElement(e.Fragment, null, e.createElement(ee, null), e.createElement(g, null, z.map(((t, n) => e.createElement(d, X({}, t, {key: n}))))));
        ReactDOM.render(React.createElement(L, null, React.createElement(te, null)), document.getElementById("app"))
    })()
})();
