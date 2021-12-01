/*! For license information please see bundle.2161.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        n: t => {
            var n = t && t.__esModule ? () => t.default : () => t;
            return e.d(n, {a: n}), n
        }, d: (t, n) => {
            for (var a in n) e.o(n, a) && !e.o(t, a) && Object.defineProperty(t, a, {enumerable: !0, get: n[a]})
        }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    const t = React;
    var n = e.n(t);

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

    function u(e) {
        e.preventDefault(), e.returnValue = ""
    }

    function o() {
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

    function c(e) {
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

    const h = (0, t.createContext)(null), p = (0, t.createContext)(null),
        f = (0, t.createContext)({outlet: null, matches: []});

    function m(e) {
        return (0, t.useContext)(f).outlet
    }

    function d(e) {
        s(!1)
    }

    function v(e) {
        let {
            basename: n = "/",
            children: a = null,
            location: l,
            navigationType: u = r.Pop,
            navigator: o,
            static: c = !1
        } = e;
        E() && s(!1);
        let f = B(n), m = (0, t.useMemo)((() => ({basename: f, navigator: o, static: c})), [f, o, c]);
        "string" == typeof l && (l = i(l));
        let {pathname: d = "/", search: v = "", hash: g = "", state: y = null, key: b = "default"} = l,
            P = (0, t.useMemo)((() => {
                let e = R(d, f);
                return null == e ? null : {pathname: e, search: v, hash: g, state: y, key: b}
            }), [f, d, v, g, y, b]);
        return null == P ? null : (0, t.createElement)(h.Provider, {value: m}, (0, t.createElement)(p.Provider, {
            children: a,
            value: {location: P, navigationType: u}
        }))
    }

    function g(e) {
        let {children: n, location: a} = e;
        return function (e, n) {
            E() || s(!1);
            let {matches: a} = (0, t.useContext)(f), r = a[a.length - 1], l = r ? r.params : {},
                u = (r && r.pathname, r ? r.pathnameBase : "/");
            r && r.route;
            let o, c = y();
            if (n) {
                var h;
                let e = "string" == typeof n ? i(n) : n;
                "/" === u || (null == (h = e.pathname) ? void 0 : h.startsWith(u)) || s(!1), o = e
            } else o = c;
            let p = o.pathname || "/", d = function (e, t, n) {
                void 0 === n && (n = "/");
                let a = R(("string" == typeof t ? i(t) : t).pathname || "/", n);
                if (null == a) return null;
                let r = x(e);
                !function (e) {
                    e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) {
                        return e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n])) ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                }(r);
                let l = null;
                for (let t = 0; null == l && t < r.length; ++t) l = S(r[t], e, a);
                return l
            }(e, {pathname: "/" === u ? p : p.slice(u.length) || "/"});
            return function (e, n) {
                return void 0 === n && (n = []), null == e ? null : e.reduceRight(((a, r, l) => (0, t.createElement)(f.Provider, {
                    children: void 0 !== r.route.element ? r.route.element : (0, t.createElement)(m, null),
                    value: {outlet: a, matches: n.concat(e.slice(0, l + 1))}
                })), null)
            }(d && d.map((e => Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: $([u, e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? u : $([u, e.pathnameBase])
            }))), a)
        }(P(n), a)
    }

    function E() {
        return null != (0, t.useContext)(p)
    }

    function y() {
        return E() || s(!1), (0, t.useContext)(p).location
    }

    function b(e) {
        let {matches: n} = (0, t.useContext)(f), {pathname: a} = y(), r = JSON.stringify(n.map((e => e.pathnameBase)));
        return (0, t.useMemo)((() => j(e, JSON.parse(r), a)), [e, r, a])
    }

    function P(e) {
        let n = [];
        return t.Children.forEach(e, (e => {
            if (!(0, t.isValidElement)(e)) return;
            if (e.type === t.Fragment) return void n.push.apply(n, P(e.props.children));
            e.type !== d && s(!1);
            let a = {
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                index: e.props.index,
                path: e.props.path
            };
            e.props.children && (a.children = P(e.props.children)), n.push(a)
        })), n
    }

    function x(e, t, n, a) {
        return void 0 === t && (t = []), void 0 === n && (n = []), void 0 === a && (a = ""), e.forEach(((e, r) => {
            let l = {relativePath: e.path || "", caseSensitive: !0 === e.caseSensitive, childrenIndex: r};
            l.relativePath.startsWith("/") && (l.relativePath.startsWith(a) || s(!1), l.relativePath = l.relativePath.slice(a.length));
            let u = $([a, l.relativePath]), o = n.concat(l);
            e.children && e.children.length > 0 && (!0 === e.index && s(!1), x(e.children, t, o, u)), (null != e.path || e.index) && t.push({
                path: u,
                score: O(u, e.index),
                routesMeta: o
            })
        })), t
    }

    const w = /^:\w+$/, C = e => "*" === e;

    function O(e, t) {
        let n = e.split("/"), a = n.length;
        return n.some(C) && (a += -2), t && (a += 2), n.filter((e => !C(e))).reduce(((e, t) => e + (w.test(t) ? 3 : "" === t ? 1 : 10)), a)
    }

    function S(e, t, n) {
        let a = t, {routesMeta: r} = e, l = {}, u = "/", o = [];
        for (let e = 0; e < r.length; ++e) {
            let t = r[e], c = e === r.length - 1, i = "/" === u ? n : n.slice(u.length) || "/",
                s = k({path: t.relativePath, caseSensitive: t.caseSensitive, end: c}, i);
            if (!s) return null;
            Object.assign(l, s.params);
            let h = a[t.childrenIndex];
            o.push({
                params: l,
                pathname: $([u, s.pathname]),
                pathnameBase: $([u, s.pathnameBase]),
                route: h
            }), "/" !== s.pathnameBase && (u = $([u, s.pathnameBase])), a = h.children
        }
        return o
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
        let l = r[0], u = l.replace(/(.)\/+$/, "$1"), o = r.slice(1);
        return {
            params: a.reduce(((e, t, n) => {
                if ("*" === t) {
                    let e = o[n] || "";
                    u = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                }
                return e[t] = function (e, t) {
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                }(o[n] || ""), e
            }), {}), pathname: l, pathnameBase: u, pattern: e
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
        let u = function (e, t) {
            void 0 === t && (t = "/");
            let {pathname: n, search: a = "", hash: r = ""} = "string" == typeof e ? i(e) : e,
                l = n ? n.startsWith("/") ? n : function (e, t) {
                    let n = t.replace(/\/+$/, "").split("/");
                    return e.split("/").forEach((e => {
                        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                    })), n.length > 1 ? n.join("/") : "/"
                }(n, t) : t;
            return {pathname: l, search: W(a), hash: M(r)}
        }(r, a);
        return l && "/" !== l && l.endsWith("/") && !u.pathname.endsWith("/") && (u.pathname += "/"), u
    }

    function R(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/"
    }

    const $ = e => e.join("/").replace(/\/\/+/g, "/"), B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        W = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
        M = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";

    function D() {
        return D = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, D.apply(this, arguments)
    }

    const L = ["onClick", "reloadDocument", "replace", "state", "target", "to"];

    function I(e) {
        let {basename: n, children: l, window: s} = e, h = (0, t.useRef)();
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
                return "string" == typeof e ? e : c(e)
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
            var d = r.Pop, v = (e = t())[0], g = e[1], E = o(), y = o();
            return null == v && (v = 0, f.replaceState(a({}, f.state, {idx: v}), "")), {
                get action() {
                    return d
                }, get location() {
                    return g
                }, createHref: n, push: function e(t, a) {
                    var u = r.Push, o = l(t, a);
                    if (!y.length || (y.call({
                        action: u, location: o, retry: function () {
                            e(t, a)
                        }
                    }), 0)) {
                        var c = [{usr: o.state, key: o.key, idx: v + 1}, n(o)];
                        o = c[0], c = c[1];
                        try {
                            f.pushState(o, "", c)
                        } catch (e) {
                            p.location.assign(c)
                        }
                        s(u)
                    }
                }, replace: function e(t, a) {
                    var u = r.Replace, o = l(t, a);
                    y.length && (y.call({
                        action: u, location: o, retry: function () {
                            e(t, a)
                        }
                    }), 1) || (o = [{usr: o.state, key: o.key, idx: v}, n(o)], f.replaceState(o[0], "", o[1]), s(u))
                }, go: h, back: function () {
                    h(-1)
                }, forward: function () {
                    h(1)
                }, listen: function (e) {
                    return E.push(e)
                }, block: function (e) {
                    var t = y.push(e);
                    return 1 === y.length && p.addEventListener("beforeunload", u), function () {
                        t(), y.length || p.removeEventListener("beforeunload", u)
                    }
                }
            }
        }({window: s}));
        let p = h.current, [f, m] = (0, t.useState)({action: p.action, location: p.location});
        return (0, t.useLayoutEffect)((() => p.listen(m)), [p]), (0, t.createElement)(v, {
            basename: n,
            children: l,
            location: f.location,
            navigationType: f.action,
            navigator: p
        })
    }

    const H = (0, t.forwardRef)((function (e, n) {
        let {onClick: a, reloadDocument: r, replace: l = !1, state: u, target: o, to: p} = e, m = function (e, t) {
            if (null == e) return {};
            var n, a, r = {}, l = Object.keys(e);
            for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, L), d = function (e) {
            E() || s(!1);
            let {basename: n, navigator: a} = (0, t.useContext)(h), {hash: r, pathname: l, search: u} = b(e), o = l;
            if ("/" !== n) {
                let t = function (e) {
                    return "" === e || "" === e.pathname ? "/" : "string" == typeof e ? i(e).pathname : e.pathname
                }(e), a = null != t && t.endsWith("/");
                o = "/" === l ? n + (a ? "/" : "") : $([n, l])
            }
            return a.createHref({pathname: o, search: u, hash: r})
        }(p), v = function (e, n) {
            let {target: a, replace: r, state: l} = void 0 === n ? {} : n, u = function () {
                E() || s(!1);
                let {
                        basename: e,
                        navigator: n
                    } = (0, t.useContext)(h), {matches: a} = (0, t.useContext)(f), {pathname: r} = y(),
                    l = JSON.stringify(a.map((e => e.pathnameBase))), u = (0, t.useRef)(!1);
                return (0, t.useEffect)((() => {
                    u.current = !0
                })), (0, t.useCallback)((function (t, a) {
                    if (void 0 === a && (a = {}), !u.current) return;
                    if ("number" == typeof t) return void n.go(t);
                    let o = j(t, JSON.parse(l), r);
                    "/" !== e && (o.pathname = $([e, o.pathname])), (a.replace ? n.replace : n.push)(o, a.state)
                }), [e, n, l, r])
            }(), o = y(), i = b(e);
            return (0, t.useCallback)((t => {
                if (!(0 !== t.button || a && "_self" !== a || function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                }(t))) {
                    t.preventDefault();
                    let n = !!r || c(o) === c(i);
                    u(e, {replace: n, state: l})
                }
            }), [o, u, i, r, l, a, e])
        }(p, {replace: l, state: u, target: o});
        return (0, t.createElement)("a", D({}, m, {
            href: d, onClick: function (e) {
                a && a(e), e.defaultPrevented || r || v(e)
            }, ref: n, target: o
        }))
    })), N = axios;
    var A = e.n(N);
    const J = e => (async (e, t = null) => (t && (e += `?${new URLSearchParams(t).toString()}`), (async (e, t, n = null) => new Promise(((a, r) => {
        A().get(e, {method: t, data: n}).then((e => {
            200 === e.status && (console.log("接口底层", e.data), a(e.data)), r(e.data)
        }))
    })))(e = "http://localhost:3000" + e, "get")))("/api/getData", e), K = function () {
        const [e, n] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
            (async () => {
                const e = await J({home: "home"});
                n(e)
            })()
        }), []), t.createElement("div", null, t.createElement("h2", null, "Home"), t.createElement("p", null, e && e.name))
    }, T = {name: null};

    function F(e, t) {
        const {type: n, newData: a} = t;
        if ("set" === n) return {...e, ...a};
        throw new Error
    }

    const U = function () {
        const [e, n] = (0, t.useReducer)(F, "undefined" == typeof window ? T : window.initialState);
        return (0, t.useEffect)((() => {
            (async () => {
                if (e && e.name) return;
                const t = await J();
                t.name += " 此为请求返回", n({type: "set", newData: t})
            })()
        }), []), t.createElement("div", null, t.createElement("h2", null, "About"), t.createElement("p", null, e.name))
    }, V = (0, t.createContext)(null), _ = (0, t.createContext)({value: 11111, count: 22222}), q = () => {
        const e = (0, t.useContext)(V), {count: n, setCount: a} = e;
        return t.createElement("button", {
            onClick: () => {
                a(n + 1)
            }
        }, "pa==P===", n)
    }, z = () => {
        const {count: e} = (0, t.useContext)(V), {value: n} = (0, t.useContext)(_);
        return t.createElement("ul", null, t.createElement("li", null, "Bb==B===", n), t.createElement("li", null, "Pb--P===", e))
    }, G = () => {
        const {count: e} = (0, t.useContext)(V);
        return t.createElement(t.Fragment, null, t.createElement("div", null, "Pb==P===", e), t.createElement("hr", null), t.createElement(V.Provider, {value: {count: 2222}}, t.createElement(_.Provider, {value: {value: 1111}}, t.createElement(z, null))))
    }, Q = () => {
        const [e, n] = (0, t.useState)(0);
        return t.createElement(V.Provider, {
            value: {
                count: e,
                setCount: n
            }
        }, t.createElement("div", {className: ""}, t.createElement(q, null), t.createElement("hr", null), t.createElement(G, null), t.createElement("hr", null), t.createElement("p", null, t.createElement("a", null, "希望可以吃到烤鱼"))))
    }, X = [{path: "/", element: n().createElement(K, null)}, {
        path: "/about",
        element: n().createElement(U, null),
        loadData: async e => J(e)
    }, {path: "/test", element: n().createElement(Q, null)}];

    function Y() {
        return Y = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, Y.apply(this, arguments)
    }

    function Z() {
        return t.createElement("div", null, t.createElement("nav", null, t.createElement("ul", null, t.createElement("li", null, t.createElement(H, {to: "/"}, "Home")), t.createElement("li", null, t.createElement(H, {to: "/about"}, "About")), t.createElement("li", null, t.createElement(H, {to: "/test"}, "Test")))), t.createElement("hr", null), t.createElement(m, null))
    }

    const ee = () => t.createElement(t.Fragment, null, t.createElement(Z, null), t.createElement(g, null, X.map(((e, n) => t.createElement(d, Y({}, e, {key: n}))))));
    ReactDOM.render(React.createElement(I, null, React.createElement(ee, null)), document.getElementById("app"))
})();
