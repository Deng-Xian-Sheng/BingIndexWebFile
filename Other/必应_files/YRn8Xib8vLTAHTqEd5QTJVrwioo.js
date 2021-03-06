var __spreadArrays = this && this.__spreadArrays || function() {
    for (var i = 0, n = 0, r = arguments.length; n < r; n++) i += arguments[n].length;
    for (var u = Array(i), f = 0, n = 0; n < r; n++)
        for (var e = arguments[n], t = 0, o = e.length; t < o; t++, f++) u[f] = e[t];
    return u
};
define("clientinst", ["require", "exports"], function(n, t) {
    function it() {
        a = 0;
        u()
    }

    function u() {
        var n, s, t, o;
        e && clearTimeout(e);
        for (n in i)
            if (i.hasOwnProperty(n)) {
                s = n != _G.IG ? _G.lsUrl.replace(_G.IG, n) : _G.lsUrl;
                for (t in i[n]) i[n].hasOwnProperty(t) && (o = b + s + "&TYPE=Event." + t + "&DATA=" + f("[") + i[n][t] + f("]"), ut(o) || (g().src = o));
                delete i[n]
            }
        typeof r != "undefined" && r.setTimeout && (e = r.setTimeout(u, w))
    }

    function rt() { return _G !== undefined && _G.EF !== undefined && _G.EF.logsb !== undefined && _G.EF.logsb === 1 }

    function ut(n) { return rt() ? ft(n, "") : !1 }

    function ft(n, t) {
        var i = "sendBeacon",
            r = !1;
        if (navigator && navigator[i]) try {
            navigator[i](n, t);
            r = !0
        } catch (u) {}
        return r
    }
    var y, d, i, g, o, p;
    t.__esModule = !0;
    t.Wrap = t.Log2 = t.LogInstrumented = t.Log = t.LogCustomEvent = void 0;
    var r = n("env"),
        s = n("event.native"),
        h = n("event.custom"),
        f = encodeURIComponent,
        c = "length",
        l = "apply",
        w = 2e3,
        nt = 2e3,
        a = 0,
        e, b = "",
        tt = _G.lsUrl + "&TYPE=Event.ClientInst&DATA=",
        v = location.hostname,
        k = v.match(/([^.]+\.[^.]*)$/);
    k && (y = location.protocol, d = y == "https:" ? v.substring(0, v.indexOf(".")) : "a4", b = y + "//" + d + "." + k[0]);
    i = {};
    g = function() { return new Image };
    t.LogCustomEvent = function(n, t, i, r) {
        for (var f = [], u = 4; u < arguments.length; u++) f[u - 4] = arguments[u];
        o(n, t, i, n, r, f)
    };
    t.Log = function(n, t, i, r) {
        for (var f = [], u = 4; u < arguments.length; u++) f[u - 4] = arguments[u];
        o(n, t, i, "ClientInst", r, f)
    };
    t.LogInstrumented = function(n, i, r, u, f, e, o) { t.Log2(n, i !== null && i !== void 0 ? i : r, null, null, u, f, o) };
    t.Log2 = function(n, t, i, r, u, f, e) {
        var s = Object.keys(e).reduce(function(n, t) { return __spreadArrays(n, [t, e[t]]) }, []);
        i && s.push("service", i);
        r && s.push("scenario", r);
        u && s.push("appNS", u);
        f && s.push("kValue", f);
        o(n, null, t, "ClientInst", !1, s)
    };
    o = function(n, t, i, f, o, c) {
        a || (p("Init", "CI", "Base", "ClientInst", !1), typeof r != "undefined" && r.setTimeout && (e = r.setTimeout(u, w)), a = 1, typeof s != "undefined" && s.bind && s.bind(window, "beforeunload", u, !1), typeof h != "undefined" && h.bind && h.bind("unload", function() { it() }, !1));
        p(n, t, i, f, o, c)
    };
    p = function(n, t, r, e, o, s) {
        var k, y = _G.IG,
            h = {},
            p, w, l, a, d, b, v;
        if (s && s.length > 0 && s.length % 2 == 0)
            for (p = 0; p < s.length; p += 2)(w = s[p], w) && (l = w.toLowerCase(), a = s[p + 1], l === "impressionguid" ? y = a : l === "service" ? h.Service = a : l === "scenario" ? h.Scenario = a : l === "appns" ? h.AppNS = a : l === "k" || l === "kvalue" ? h.K = a : l === "pos" ? h.Pos = a : h[w] = a);
        d = (new Date).getTime();
        h.T = "CI." + n;
        h.TS = d;
        h.Name = r !== null && r !== void 0 ? r : "";
        h.FID = typeof t != "number" ? t !== null && t !== void 0 ? t : "" : "";
        h.hasOwnProperty("K") || typeof t != "number" || (h.K = t);
        b = f(JSON.stringify(h));
        v = i[y] && i[y][e] || "";
        tt[c] + v[c] + b[c] >= nt && (u(), v = "");
        i.hasOwnProperty(y) ? i[y][e] = v + f(v ? "," : "") + b : i[y] = (k = {}, k[e] = v + f(v ? "," : "") + b, k);
        o && u()
    };
    t.Wrap = function(n, t, i, r) {
        var u = n[t];
        n[t] = function() {
            var n = arguments,
                e, t, f;
            if (r && i[l](this, n), e = u[l](this, n), !r) {
                for (t = [], f = 0; f < n.length; f++) t.push(n[f]);
                t.push(e);
                i[l](this, t)
            }
            return e
        }
    };
    window.Log = { LogCustomEvent: t.LogCustomEvent, Log: t.Log, Wrap: t.Wrap };
    window.Shared2 = window.Shared2 || {};
    window.Shared2.Log = { LogCustomEvent: t.LogCustomEvent, Log: t.Log, Wrap: t.Wrap, LogInstrumented: t.LogInstrumented };
    window.sj_log2 = t.Log2
})