/*!DisableJavascriptProfiler*/
var BM = BM || {};
BM.config = { B: { timeout: 7e3, delay: 750, maxUrlLength: 300, sendlimit: 20, maxPayloadSize: 7e3 }, V: { distance: 20 }, N: { maxUrlLength: 300 }, E: { buffer: 30, timeout: 5e3, maxUrlLength: 300 }, C: { distance: 50 } },
    function(n) {
        function vt() {
            if (!document.querySelector || !document.querySelectorAll) { k({ FN: "init", S: "QuerySelector" }); return }
            w = {};
            e = [];
            ft = 1;
            ut = 0;
            rt = 0;
            o = [];
            s = 0;
            h = !1;
            var n = Math.floor(Math.random() * 1e4).toString(36);
            t = { P: { C: 0, N: 0, I: n, S: fi, M: r, T: 0, K: r, F: 0 } };
            vi()
        }

        function ei(n, t) { var r = {}; for (var i in n) i.indexOf("_") !== 0 && (i in t && (n[i] !== t[i] || i === "i") ? (r[i] = t[i], n[i] = t[i]) : r[i] = null); return r }

        function oi(n) { var i = {}; for (var t in n) n.hasOwnProperty(t) && (i[t] = n[t]); return i }

        function b(n, t, r, u) {
            if (!h) { k({ FN: "snapshot", S: n }); return }
            r = r || gt;
            t = t || !1;
            var f = g() + r;
            ot(o, n) === -1 && o.push(n);
            t ? (yt(), pt(t, u)) : f > s && (yt(), rt = sb_st(pt, r), s = f)
        }

        function k(n) {
            var u = { T: "CI.BoxModelError", FID: "CI", Name: ht, SV: ct, P: t && "P" in t ? d(t.P) : r, TS: f(), ST: v },
                i, e;
            for (i in n) u[i] = n[i];
            e = d(u);
            wt(e)
        }

        function yt() { s > 0 && (sb_ct(rt), s = 0) }

        function pt(n, i) { var r, u; if (!h) { k({ FN: "send", S: o.join(l[1]) }); return }(ft <= ti || n) && (t.P.S = o.join(l[1]), t.P.F = n ? 1 : 0, t.P.M = yi(), r = f(), si(), t.P.T = f(), t.P.N = ft++, t.P.C += f() - r, u = ci(t), t.P.C = 0, wt(u, i), o = [], s = 0) }

        function si() { h && st("compute") }

        function wt(n, t) {
            var s, r;
            if (bt(window, "Log2") && Log2.LogEvent && JSON) Log2.LogEvent("ClientInst", JSON.parse(n), null, null, null, null, null, null), t && t.force === !0 && Log2.ForceFlush(!0, t);
            else {
                var f = "/fd/ls/lsp.aspx",
                    e = g(),
                    h = "<E><T>Event.ClientInst<\/T><IG>" + _G.IG + "<\/IG><TS>" + e + "<\/TS><D><![CDATA[[" + n.replace("]\]>", "]]]\]><![CDATA[>") + "]]\]><\/D><\/E>",
                    u = "<ClientInstRequest><Events>" + h + "<\/Events><STS>" + e + "<\/STS><\/ClientInstRequest>",
                    o = !1;
                hi(t, u.length) && (s = new Blob([u], { type: "text/plain" }), o = navigator[lt](f, s));
                o || (r = sj_gx(), r.open("POST", f, !0), r.setRequestHeader("Content-Type", "text/xml"), r.send(u))
            }
            sj_evt.fire("BM", n)
        }

        function hi(n) { return !ri || !n || !n.useSendBeacon ? !1 : !0 }

        function d(n) {
            var i = r,
                u, t;
            for (u in n)
                if (t = n[u], t !== r) {
                    var o = typeof t == "number",
                        f = '"',
                        e = o || t.indexOf("{") === 0 ? r : f;
                    i += f + u + f + ":" + e + t + e + ","
                }
            return "{" + (i.length > 0 ? i.substr(0, i.length - 1) : r) + "}"
        }

        function ci(n) {
            function k(n, t) {
                function v(n) { return n.replace(ui, encodeURIComponent) }
                var h = !0,
                    f = [],
                    u, i, e, s, o, c, a;
                if (t = t || 1, !("_c" in n) || t <= 1) {
                    for (u in n)
                        if (i = n[u], s = u.charCodeAt(0) >= 65 && u.charCodeAt(0) <= 90, s && f.push(u), u.indexOf("_") === 0) continue;
                        else typeof i == "number" ? (e = parseInt(i.toString()).toString(36), f.push(e), g(e)) : typeof i == "string" ? (e = v(i), f.push(e), g(e)) : i == null ? f.push(r) : typeof i == "object" && (o = k(i, t + 1, u), (o && o.length > 0 || s) && f.push(o), h = !1);
                    h && (n._c = !0)
                }
                return c = l[t], a = f.join(p + c + p), a
            }

            function g(n) { n.length > 2 && (n in v && ot(e, n) === -1 ? e.push(n) : v[n] = 1) }
            var nt = f(),
                v = {},
                h = { T: "CI.BoxModel", FID: "CI", Name: ht, SV: ct, P: r },
                u = {},
                s, y, i, o, b, c, a;
            for (i in n) i !== "P" && (s = k(n[i]), s && s.length > 0 && (u[i] = s.split(p)));
            y = e.slice(ut).join(l[1]);
            ut = e.length;
            t.P.K = y;
            for (i in u) {
                if (i !== "M")
                    for (o = 0; o < u[i].length; o++) b = u[i][o], c = ot(e, b), c >= 0 && (u[i][o] = p + c.toString(36));
                a = u[i].join(r);
                i in w && w[i] === a || (h[i] = w[i] = a)
            }
            return t.P.C += f() - nt, h.P = d(t.P), d(h)
        }

        function ot(n, t) {
            for (var i = 0; i < n.length; i++)
                if (n[i] === t) return i;
            return -1
        }

        function f() { return a ? g() - a : tt ? kt(performance.now()) : new Date - window.si_ST }

        function li(n) { return n - a ? a : tt ? 0 : window.si_ST }

        function g() { return tt ? kt(performance.now() + performance.timing.navigationStart) : (new Date).getTime() }

        function bt(n, t) { return typeof n[t] != "undefined" }

        function kt(n) { return n < -1 ? -1 : parseInt(n) }

        function ai() {
            function n() {
                a = t;
                sj_evt.unbind("ajax.load", n)
            }
            var t = g();
            sj_evt.bind("ajax.load", n, !1)
        }

        function vi() {
            v = 1;
            et = f();
            h = !0;
            st("load");
            ii ? b("T", !0, undefined, { force: !0, useSendBeacon: !0 }) : b("T", !1, ni);
            t.P.C += f() - et;
            at = undefined;
            (!it || sb_ie) && sj_be(window, "beforeunload", c, !1);
            sj_evt.bind("unload", c);
            sj_evt.bind("BMU", c);
            v = 2
        }

        function c(n) {
            v = 3;
            (!it || sb_ie) && sj_ue(window, "beforeunload", c, !1);
            sj_evt.unbind("unload", c);
            sj_evt.unbind("BMU", c);
            var t = it ? { force: !0, useSendBeacon: !0, visibilityState: document.visibilityState, eventName: n && typeof n == "string" ? n : n && n.type } : {};
            b("U", !0, undefined, t);
            h = !1;
            st("unload");
            v = 4
        }

        function st(n) { for (var r = 0; r < u.length; r++) u[r][n](t) }

        function yi() { for (var t = [], n = 0; n < u.length; n++) t.push(u[n].id); return t.join(l[1]) }

        function dt(n) {
            for (var t = 0; t < u.length; t++)
                if (u[t].id === n) return !0;
            return !1
        }

        function pi(n) { var t = !1; return dt(n.id) || (u.push(n), t = !0), t }

        function wi(n) { var t = !1; return !dt(n.id) && n.check() && (u.push(n), t = !0), t }

        function bi() {
            sj_evt.bind("onP1", vt, !0);
            sj_evt.bind("ajax.unload", ai, !0);
            sj_evt.bind("ajax.postload", vt, !0)
        }
        if (!_w.BM || !n.register) {
            var i = "boxmodel",
                ht = "v2.8",
                ct = "4",
                r = "",
                nt = n.config["B"],
                gt = nt.delay,
                ni = nt.timeout,
                ti = nt.sendlimit,
                tt = _w.performance && performance.now && performance.timing,
                y = _G && _G.EF,
                it = y && y.bmcov === 1,
                ii = y && y.bmecov === 1,
                lt = "sendBeacon",
                ri = navigator && navigator[lt],
                p = "@",
                l = ["$", "+", "/", ":", ";"],
                ui = /([%$+\/\\:;"])/g,
                e, t, u = [],
                w, o, s, rt, ut, ft, h, fi = "T",
                a, et, at, v = 0;
            sb_st(bi, 0);
            n.extend = pi;
            n.register = wi;
            n.snapshot = b;
            n.delta = ei;
            n.clone = oi;
            n.exists = bt;
            n.time = f;
            n.error = k
        }
    }(BM),
    function(n) {
        function rt(p) {
            var ut, tt, et, g, rt;
            p[t] = [];
            it = p;
            i = {};
            i[t] = {};
            u = [];
            r = document.documentElement;
            a = document.body;
            s = nt + s;
            e = n.exists(window, "getComputedStyle") ? parseInt(window.getComputedStyle(document.body)["font-size"]) : -1;
            e = e > 0 ? e : -1;
            var ot = "innerWidth" in window ? window.innerWidth : r.clientWidth,
                st = "innerHeight" in window ? window.innerHeight : r.clientHeight,
                ht = window.pageXOffset || r.scrollLeft,
                ct = window.pageYOffset || r.scrollTop,
                lt = h in document ? document[h] : v;
            for (s = n.exists(window, "devicePixelRatio") ? window.devicePixelRatio : -1, ut = { t: n.time(), x: ht, y: ct, w: ot, h: st, dw: a.clientWidth, dh: a.clientHeight, d: s, s: e, v: lt, e: v }, tt = n.dequeue("V"), tt.push({ t: ut.t, i: ut }), et = 0; et < tt.length; et++) g = tt[et], rt = { t: g.t, x: g.i.x, y: g.i.y, w: g.i.w, h: g.i.h, dw: g.i.dw, dh: g.i.dh, d: s, s: e, v: g.i.v, e: v }, p[t].length == 0 ? (i[t] = n.clone(rt), p[t].push(rt)) : ft(rt) && p[t].push(n.delta(i[t], rt));
            i[t] = n.clone(ut);
            tt = [];
            y = 0;
            l = !0;
            sj_be(window, "scroll", w);
            sj_be(window, "resize", b);
            sj_be(window, "pageshow", o);
            sj_be(window, "pagehide", o, f);
            h in document && (sj_be(document, "visibilitychange", o, f), sj_evt.bind("visibility", k), sj_evt.bind("peekexpand", d))
        }

        function ut() {
            if (i != null && t in i) return i[t];
            n.error({ FN: "viewport", S: "current" })
        }

        function ft(n) {
            var u = i[t];
            for (var r in u)
                if (r !== "t" && r in n && u[r] !== n[r]) return !0;
            return !1
        }

        function w() { var f = n.clone(i[t]); return f.t = n.time(), f.x = window.pageXOffset || r.scrollLeft, f.y = window.pageYOffset || r.scrollTop, f.e = "scroll", u.push(f), n.snapshot(t), !0 }

        function b() { var f = n.clone(i[t]); return f.t = n.time(), f.w = "innerWidth" in window ? window.innerWidth : r.clientWidth, f.h = "innerHeight" in window ? window.innerHeight : r.clientHeight, f.e = "resize", u.push(f), n.snapshot(t), !0 }

        function o(r) {
            var o, e, s, a, v, y;
            (l || !f) && (o = document[h], e = r ? r.type : "visibility", r.persisted && (e += "-cached"), s = n.clone(i[t]), s.t = n.time(), s.v = o, s.e = e, u.push(s), a = !1, v = {}, f ? (y = e === "visibilitychange" && o === "hidden" || e === "pagehide" || e === "pagehide-cached" || o === "unloaded", y && (a = !0, v = { force: !0, useSendBeacon: !0, visibilityState: o, eventName: e })) : o === "unloaded" && (a = !0), n.snapshot(t, a, undefined, v))
        }

        function k(r) {
            var f, e;
            if (r.length > 1) {
                if (f = r[1] ? "visible" : "hidden", r.length > 2) switch (r[2]) {
                    case 0:
                        f = "apphidden";
                        break;
                    case 1:
                        f = "appvisible";
                        break;
                    case 2:
                        f = "webvisible"
                }
                e = n.clone(i[t]);
                e.t = n.time();
                e.v = f;
                e.e = "cortana";
                u.push(e);
                n.snapshot(t, f === "hidden")
            }
        }

        function d() {
            var f = n.clone(i[t]);
            f.t = n.time();
            f.w = "innerWidth" in window ? window.innerWidth : r.clientWidth;
            f.h = "innerHeight" in window ? window.innerHeight : r.clientHeight;
            f.v = "peekexpand";
            f.e = "cortana";
            u.push(f);
            n.snapshot(t)
        }

        function g(n, t) {
            var i = n.x - t.x,
                r = n.y - t.y;
            return Math.sqrt(i * i + r * r)
        }

        function et(r) {
            for (var f, o, s = u.length, e = 0; e < s; e++) f = u[e], (e === 0 || e === s - 1 || f.e !== "scroll" || g(f, o) > tt) && (e === 0 ? n.metric(1, f.t) : y += g(f, o), r[t].push(n.delta(i[t], f)), o = f);
            n.metric(8, parseInt(y));
            u = []
        }

        function ot() {
            l = !1;
            sj_ue(window, "scroll", w);
            sj_ue(window, "resize", b);
            sj_ue(window, "pageshow", o);
            sj_ue(window, "pagehide", o, f);
            h in document && (sj_ue(document, "visibilitychange", o, f), sj_evt.unbind("visibility", k), sj_evt.unbind("peekexpand", d));
            u = []
        }
        var c = "boxmodel",
            t = "V",
            s, e, a, nt = "",
            v = "default",
            h = "visibilityState",
            i, u = [],
            tt = n.config[t].distance,
            r, it, y, l, p = _G && _G.EF,
            f = p && p.bmcov === 1,
            st = n.extend({ id: t, load: rt, compute: et, unload: ot });
        st && (n.viewport = ut)
    }(BM),
    function(n) {
        function d(r) {
            r[t] = [];
            f = r;
            h = document.body;
            i = {};
            i[t] = [];
            u = n.dequeue("L");
            a(document, n.time());
            u = []
        }

        function g() { return i[t] }

        function a(n, t) {
            var u, f, i, o;
            if (n.querySelectorAll)
                for (u in c) {
                    var e = c[u],
                        s = e[0],
                        h = e[1];
                    for (u += !e[2] ? r : " >*", f = n.querySelectorAll(u), i = 0; i < f.length; i++)(o = f[i], typeof _w.SVGElement != "undefined" && o instanceof SVGElement) || v(f[i], t, "T", s, h)
                }
        }

        function v(r, u, e, s, h) {
            var c = w(r, e, u),
                l;
            if (!(c.x < 0) && !(c.y < 0)) return s && (c._ex = s), h && (c._ey = h), (r.tagName === "IMG" || r.tagName === "IFRAME") && (c._s = it(r)), c.i = i[t].length, r.setAttribute("data-bm", c.i), l = nt(c), l ? o(i[t][c.i], c, c.t) : (f[t].push(c), i[t].push(n.clone(c))), c.i
        }

        function nt(r) {
            for (var a, y, c, s, e, v, l = 0, h = 0; h < u.length; h++)
                for (a = u[h], y = u[h].t, c = 0; c < a.i.length; c++)
                    if (s = a.i[c], s.t = y, s._e === r._e) {
                        e = n.clone(r);
                        for (v in s) e[v] = s[v];
                        l === 0 ? (f[t].push(e), i[t].push(n.clone(e))) : o(i[t][r.i], e, e.t);
                        l++
                    }
            return l > 0
        }

        function y(n) {
            while (n && n.hasAttribute && n !== document.body) {
                if (n.hasAttribute("data-bm")) return parseInt(n.getAttribute("data-bm"));
                n = n.parentElement
            }
            return null
        }

        function tt(n, r, u, f) {
            var o, e;
            if (n) {
                for (o = i[t], e = 0; e < o.length; e++)
                    if (n === o[e]._e) return o[e].i;
                return f && a(n, r), v(n, r, u)
            }
            return null
        }

        function o(i, r, u) {
            for (var o, h, c = ["x", "y", "w", "h", "z"], e = {}, l = !1, s = 0; s < c.length; s++) o = c[s], i[o] !== r[o] && (l = !0, e[o] = r[o]);
            l && (e.i = i.i, e.e = r.e, e.t = u, h = n.delta(i, e), h.e = r.e, f[t].push(h))
        }

        function p(n) { return n.tagName + (n.id ? "#" + n.id : n.className ? "." + n.className : r) }

        function w(t, i, u) {
            var s, c = Number(t.getAttribute("data-bm")),
                e, f, o;
            !isNaN(c) && c > -1 ? (e = n.layout()[c], s = e && e._e === t ? e.p : b(t)) : s = b(t);
            f = { t: u, i: null, s: p(t), k: ut(t), x: 0, y: 0, w: t.offsetWidth, h: t.offsetHeight, z: 0, e: i, p: s, _e: t, _s: r, _ex: -1, _ey: -1 };
            o = t;
            try {
                if (t.offsetParent)
                    do f.x += t.offsetLeft, f.y += t.offsetTop; while (t = t.offsetParent)
            } catch (l) {
                f.x = null;
                f.y = null
            }
            while (o !== h && (o = o.parentElement)) f.z++;
            return f
        }

        function it(t) { try { if (n.exists(t, "src") && t.src.indexOf("data:") !== 0) return t.src ? t.src : r } catch (i) {} return r }

        function b(n) {
            for (var t = Number(n.getAttribute(e + k)) || Number(n.getAttribute(e + l)) || -1;
                (n = n.parentElement) && t === -1;) t = Number(n.getAttribute(e + l)) || t;
            return t
        }

        function rt(n) { if (n) { var t = n.className; if (t) { if (typeof t == "string") return t; if (typeof t == "object" && "baseVal" in t) return t.baseVal } } return "" }

        function ut(n) { var t, u; if (rt(n).split(" ").indexOf("b_ans") > -1 && n.hasAttribute("h")) return s(n.getAttribute("h")); if (n.tagName === "IMG" || p(n).indexOf("rms_img") >= 0) { if (t = y(n), t != null && t < i.L.length) return s(i.L[t].k) } else if (u = n.querySelector("a[h]"), u) return s(u.getAttribute("h")); return r }

        function s(n) { var t = n; return t = t ? t.substr(t.indexOf("=") + 1) : r, t && t.indexOf("javascript") >= 0 ? r : t }

        function ft() { for (var u, s, f = i[t], e = n.time(), r = 0; r < f.length; r++) u = f[r], s = w(u._e, "R", e), o(u, s, e) }

        function et() {}
        var t = "L",
            i, f, h, r = "",
            c = n.rules,
            u, e = "data-",
            l = "priority",
            k = "fixedpriority",
            ot = n.extend({ id: t, load: d, compute: ft, unload: et });
        ot && (n.observe = tt, n.match = y, n.layout = g)
    }(BM),
    function(n) {
        function o(n) {
            n[i] = [];
            f = n;
            u()
        }

        function u(n) { n || (t = []); for (var i = 0; i < 11; i++) t.push(r) }

        function s(r) { r.P.F && (n.metric(3, n.time()), r[i] = t) }

        function h() { e || u(!0) }

        function c(n, i) {
            if (t) switch (n) {
                case 0:
                    t[n] = t[n] !== r ? Math.max(t[n], i) : i;
                    break;
                case 1:
                    t[n] = t[n] !== r ? Math.min(t[n], i) : i;
                    break;
                default:
                    t[n] = i
            }
        }
        var i = "M",
            f, t, r = "",
            e = _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1,
            l = n.extend({ id: i, load: o, compute: s, unload: h });
        l && (n.metric = c)
    }(BM),
    function(n) {
        function e() { return typeof MutationObserver != "undefined" }

        function o(t) {
            f = t;
            var i = new MutationObserver(s);
            u = n.viewport();
            i && i.observe(document.body, { childList: !0, subtree: !0 })
        }

        function s(f) {
            var s, a, e, c, o, v, l;
            if (t !== null) {
                for (s = [], a = n.time(), e = 0; e < f.length; e++)
                    for (c = 0; c < f[e].addedNodes.length; c++) o = f[e].addedNodes[c], v = o.tagName, h(o) && (l = n.observe(o, a, i, !0), l && l.x < u.w && l.y < u.h && n.metric(0, a), s.push(o.parentNode));
                s.length > 0 && (r = s, n.snapshot(i))
            }
        }

        function h(n) {
            if (typeof _w.SVGElement != "undefined" && n instanceof SVGElement) return !1;
            var t = n.offsetWidth >= 20 || n.offsetHeight >= 20,
                i = r.indexOf(n.parentNode) >= 0;
            return t && !i
        }

        function c() {}

        function l() {
            t && t.disconnect();
            t = null;
            r = []
        }
        var i = "MT",
            r = [],
            t, u, f;
        n.register({ id: i, check: e, load: o, compute: c, unload: l })
    }(BM),
    function(n) {
        function tt() { return !0 }

        function it(n) {
            n[u] = [];
            g = n;
            l = 0;
            e = 0;
            s = !0
        }

        function rt(i) {
            for (var k, nt, c, tt, it = n.viewport().w, g = n.layout(), b = 0; b < g.length; b++) {
                var o = g[b],
                    r = o._e,
                    s = o._ex,
                    d = o._ey,
                    v = f;
                o.i === b && (s = _G.RTL && s >= 0 ? it - s - r.offsetWidth : s, s >= 0 && !w(o.x, s) && (v = o.k.length === 0 ? p(r) : v, i[u].push({ t: n.time(), l: o.i, e: "X", v: Math.abs(o.x - s), m: v }), e++), d >= 0 && !w(o.y, d) && (v = o.k.length === 0 ? p(r) : v, i[u].push({ t: n.time(), l: o.i, e: "Y", v: Math.abs(o.y - d), m: v }), e++), r.tagName !== "IMG" || o.i in t || (c = ut(r), c && (k = n.exists(r, k) ? r[k] : !0, nt = n.exists(r, h) ? r[h] > 0 : !0, k ? nt || (t[o.i] = { _e: r, _s: c, _d: !0, _b: !1 }, y(b, c)) : (t[o.i] = { _e: r, _s: c, _d: !1, _b: !0 }, a(r, !0)))), r.tagName !== "DIV" || !r.hasAttribute("data-src") || o.i in t || (c = r.getAttribute("data-src"), tt = r.style.backgroundImage, tt || (t[o.i] = { _e: r, _s: c, _d: !1, _b: !1 }, a(r, !1))))
            }
            n.metric(5, e);
            n.metric(6, l)
        }

        function ut(t) { try { if (n.exists(t, "src")) return t.src ? t.src : f } catch (i) {} return f }

        function a(n, t) {
            t && (sj_be(n, "load", r), sj_be(n, "error", r));
            i || (i = sb_st(v, d))
        }

        function r(n) {
            if (!nt || s) {
                var t = window.event || n,
                    i = sj_et(n);
                return v(t.type, i)
            }
        }

        function v(u, f) {
            var s = 0,
                e, o, h;
            for (e in t)
                if (!t[e]._d && (!f || t[e]._e === f) && (o = t[e]._e, h = o.tagName === "IMG" ? !o[b] || u && u === "error" : !o.style.backgroundImage, t[e]._b && (sj_ue(o, "load", r), sj_ue(o, "error", r)), h && (y(e, t[e]._s), s++), t[e]._d = !0, f)) return;
            s > 0 && n.snapshot("E");
            i = 0
        }

        function y() {}

        function p(n) { var t = n.querySelector("a"); return t && t.href ? t.href.substr(0, k) : f }

        function w(n, t) { return n >= t - c && n <= t + c }

        function ft() {
            var u, n;
            for (u in t) n = t[u], n._b && !n._d && (sj_ue(n._e, "load", r), sj_ue(n._e, "error", r));
            s = !1;
            i && (sb_ct(i), i = 0);
            t = {}
        }
        var u = "E",
            f = "",
            b = "complete",
            h = "naturalWidth",
            o = n.config[u],
            c = o.buffer,
            k = o.maxUrlLength,
            d = o.timeout,
            i = 0,
            l, e, t = {},
            g, s, nt = _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1;
        n.register({ id: u, check: tt, load: it, compute: rt, unload: ft })
    }(BM),
    function(n) {
        function b() { return _w.performance && performance.now && performance.getEntries }

        function k(t) {
            t[r] = [];
            l[r] = [];
            f = performance.timing.loadEventEnd - performance.timing.navigationStart;
            h = n.viewport();
            c = 0;
            g()
        }

        function d(u) {
            var k, it, d, v, tt, rt;
            if (r in l) {
                var ct = u[r],
                    p = l[r],
                    kt = performance.timing,
                    ut = performance.getEntries();
                for (v = 0; v < p.length; v++) k = p[v]._r, p[v].i == v && k && s(k.duration) !== p[v].d && u.N.push(n.delta(p[v], { i: p[v].i, t: n.time(), d: s(k.duration) }));
                for (it = ut.length, d = a; d < it; d++) {
                    var o = ut[d],
                        g = o.name,
                        w = nt(g),
                        ft = !0;
                    for (g.indexOf("format=snrjson") >= 0 && g.indexOf("progrender=1") === -1 && (i = o.startTime, f = o.duration), v = 0; v < y.length; v++)
                        if (w[1].indexOf(y[v]) >= 0 || w[1] === e) { ft = !1; break }
                    ft && c++;
                    var et = t(o.startTime, i),
                        lt = s(o.duration),
                        at = t(o.connectStart, i),
                        vt = o.secureConnectionStart === 0 ? 0 : t(o.secureConnectionStart, i),
                        yt = t(o.connectEnd, i),
                        pt = t(o.requestStart, i),
                        wt = t(o.responseStart, i),
                        bt = t(o.responseEnd, i),
                        ot = null,
                        st = n.layout();
                    for (tt = 0; tt < st.length; tt++) {
                        var b = st[tt],
                            dt = b._e,
                            ht = b._s;
                        if (ht && g === ht) {
                            ot = b.i;
                            b.x < h.w && b.y < h.h && (f = et);
                            break
                        }
                    }
                    rt = { _r: o, t: et, i: p.length, l: ot, h: w[1], p: w[2].length === 0 ? w[3] : w[2], s: o.initiatorType, d: lt, pc: w[0], cs: at, sc: vt, ce: yt, rs: pt, rt: wt, re: bt };
                    ct.push(rt);
                    p.push(n.clone(rt))
                }
                a = it;
                n.metric(0, f);
                n.metric(4, p.length);
                n.metric(7, c)
            }
        }

        function g() {
            var i = -1,
                u = performance.timing.navigationStart,
                r;
            performance.timing && performance.timing.msFirstPaint ? i = t(performance.timing.msFirstPaint, u) : _w.chrome && _w.chrome.loadTimes && (r = _w.chrome.loadTimes(), "firstPaintAfterLoadTime" in r && (i = t(r.firstPaintAfterLoadTime * 1e3, u)));
            n.metric(2, i)
        }

        function nt(n) {
            var r, y, s;
            u.href = n;
            var h, c, i, f = u.protocol,
                l = u.hostname,
                t = u.pathname,
                a = f.indexOf(p);
            return f = a >= 0 ? f.substr(0, a) : f, t = t.indexOf(o) === 0 ? t.substr(1) : t, r = u.search.toLowerCase(), y = l.length > 0 ? t.substr(0, v) : n.substr(0, v), r.length > 0 && (h = r.indexOf("event.")) > 0 && (c = r.indexOf("&data")) > 0 ? (t = r.substr(h, c - h).replace("event.", e), t === "clientinst" && (s = w.exec(r.replace(/%22/g, '"')), s != null && s.length > 1 && (t = s[1]))) : t.indexOf("rms/") === 0 && (i = t.split(o)) && i.length > 1 ? t = i[1].replace("rms%20answers%20", e).replace(".source", e) : (i = t.split(o)) && i.length >= 2 && (t = i[i.length - 2] + o + i[i.length - 1]), [f, l, t, y]
        }

        function t(n, t) { return n && n > 0 ? s(n - t) : -1 }

        function s(n) { return n < -1 ? -1 : parseInt(n) }

        function tt() {}
        var r = "N",
            a = 0,
            i = 0,
            f, h, c, v = n.config[r].maxUrlLength,
            u = document.createElement("A"),
            e = "",
            o = "/",
            p = ":",
            w = /"name":"(.*?)"/,
            l = {},
            y = [location.hostname, "live.com", "virtualearth.net", "bing.net", "msedge.net", "skype.com", "microsofttranslator.com", "footprintdns.com", "testanalytics.net", "footprintpredict.com", "msftstatic.com"];
        n.register({ id: r, check: b, load: k, compute: d, unload: tt })
    }(BM),
    function(n) {
        function w() { return !0 }

        function b(n) {
            r = 1;
            n[t] = [];
            y = n;
            s = document.documentElement;
            u = [];
            o = 0;
            f = {};
            l(sj_be, h);
            k();
            r = 2
        }

        function l(n, t) {
            for (var o, f, r, u = 0; u < e.length; u++)
                if (o = e[u], f = window.navigator.pointerEnabled ? o.replace("mouse", "pointer") : o, n(document, f, t, !1), n === sj_be) i.push(f);
                else if (n === sj_ue)
                for (r = i.length - 1; r >= 0; r--) i[r] === f && i.splice(r, 1)
        }

        function k() { for (var r, i = n.dequeue("EVT"), t = 0; t < i.length; t++) r = i[t].i, d(r.type) && h(r, i[t].t) }

        function d(n) {
            for (var t = 0; t < e.length; t++)
                if (e[t] === n.replace("pointer", "mouse")) return !0
        }

        function h(f, e) {
            f = f || _w.event;
            var o = f.touches && f.touches.length > 0 ? f.touches[0] : null,
                h = f.pointerType || f.type.indexOf("touch") == 0 && "touch" || "mouse",
                l = { _e: f.target, t: e || n.time(), l: null, e: f.type, p: h, b: n.exists(f, "button") ? f.button : null, x: o ? o.pageX : "pageX" in f ? f.pageX : "clientX" in f ? f.clientX + s.scrollLeft : null, y: o ? o.pageY : "pageY" in f ? f.pageY : "clientY" in f ? f.clientY + s.scrollTop : null, s: n.exists(f, "buttons") ? f.buttons : null };
            return u.push(l), r === 2 || r === 1 ? n.snapshot(t) : !c && (!p || i && i.length > 0) && (n.error({ FN: "enqueue", S: "C", ET: f.type, EVTS: i.join("+") }), c = !0), !0
        }

        function a(n, t) {
            var i = n.x - t.x,
                r = n.y - t.y;
            return Math.sqrt(i * i + r * r)
        }

        function g(i) {
            var h = u.length,
                e, s, r;
            if (h > 0) {
                for (e = (t in f) ? f[t] : null, s = 0; s < h; s++) r = u[s], (s === 0 || s === h - 1 || r.e.indexOf("move") < 0 || a(r, e) > v) && (r.l = n.match(r._e), e === null ? (n.metric(1, r.t), e = f[t] = n.clone(r), i[t].push(r)) : (o += a(r, e), i[t].push(n.delta(e, r))));
                u = []
            }
            n.metric(9, parseInt(o))
        }

        function nt() {
            r = 3;
            l(sj_ue, h);
            r = 4
        }
        var t = "C",
            u = [],
            f = {},
            v = n.config[t].distance,
            e = ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"],
            o, s, y, c = !1,
            r = 0,
            i = [],
            p = _G !== undefined && _G.EF !== undefined && _G.EF.bmcov === 1;
        n.register({ id: t, check: w, load: b, compute: g, unload: nt })
    }(BM),
    function(n) {
        function e() { return !0 }

        function o(n) {
            n[t] = [];
            u = n;
            f(sj_be, i);
            s()
        }

        function f(n, t) { for (var u, i = 0; i < r.length; i++) u = r[i], n(document, u, t, !1) }

        function s() { for (var u, r = n.dequeue("EVT"), t = 0; t < r.length; t++) u = r[t].i, u.type === "keydown" && i(u, r[t].t) }

        function i(i, r) { return i = i || _w.event, r = r || n.time(), u[t].push({ t: r, l: n.observe(i.target, r, t), e: i.type, m: i.shiftKey << 1 | i.ctrlKey << 2 | i.altKey << 3 | i.metaKey << 4 | (i.repeat || 0) << 5 | (i.isComposing || 0) << 6 | (i.location || 0) << 16 }), n.snapshot(t), !0 }

        function h() {}

        function c() { f(sj_ue, i) }
        var t = "K",
            r = ["keydown", "keypress"],
            u;
        n.register({ id: t, check: e, load: o, compute: h, unload: c })
    }(BM),
    function(n) {
        function h() { return !0 }

        function c(u) {
            var e, h, c;
            u[t] = [];
            o = u;
            n.metric(10, 0);
            f(sj_be, r);
            i = !0;
            l();
            s && (s = !1, e = sj_cook.get("SRCHHPGUSR", "HV"), e && e.length > 0 && location.href.indexOf("&rdr=1") === -1 && location.href.indexOf("?") > 0 ? (h = location.href + "&rdr=1" + (_G && _G.IG ? "&rdrig=" + _G.IG : ""), typeof sj_lc != "undefined" ? window.sj_lc(h) : location.href = h) : (c = document.getElementById("b_content"), c && (c.style.visibility = "visible")))
        }

        function f(n, t) { for (var r, i = 0; i < e.length; i++) r = e[i], n(r === "resize" ? window : document, window.navigator.pointerEnabled ? r.replace("mouse", "pointer") : r, t, !1) }

        function l() {
            var t = n.dequeue("EVT");
            t.length > 0 && r(t[0].i, t[0].t)
        }

        function r(u, e) {
            if (i) {
                u = u || _w.event;
                var s = "" + Math.round((new Date).getTime() / 1e3);
                o[t].push({ t: e || n.time(), e: u.type, s: s });
                sj_cook.set("SRCHHPGUSR", "HV", s, !0, "/");
                i = !1;
                f(sj_ue, r);
                n.metric(10, 1);
                n.snapshot(t)
            }
            return !0
        }

        function a() {}

        function v() { i && (f(sj_ue, r), i = !1) }
        var t = "BD",
            e = ["click", "mousedown", "mouseup", "touchstart", "touchend", "mousemove", "touchmove", "scroll", "keydown", "resize"],
            o, i = !1,
            u = n.config[t],
            s = u && u.basic ? u.basic : !1;
        n.register({ id: t, check: h, load: c, compute: a, unload: v })
    }(BM);
0