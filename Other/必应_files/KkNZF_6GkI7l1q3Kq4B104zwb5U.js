var EnglishSearchShared;
(function(n) {
    function r(n, i) {
        var e = !1,
            o = _w.location.href.split("?"),
            r, u, f, s, h;
        if (o.length == 1 || o[1] == "") return t(_w.location.href, n, "1");
        if (r = _w.location.search.replace("?", ""), u = r.split("&"), u) {
            for (r = o[0] + "?", f = 0; f < u.length; f++)
                if (s = u[f], s.split("=")[0].toLowerCase() === n) {
                    if (e) continue;
                    r = r + n + "=" + i + "&";
                    e = !0
                } else r = r + s + "&";
            h = r.substring(r.length - 1);
            h == "&" && (r = r.substring(0, r.length - 1))
        }
        return e ? r : t(_w.location.href, n, "1")
    }

    function t(n, t, i) {
        var u = n.substring(n.length - 1),
            r = t + "=" + i;
        return n.indexOf("?") < 0 ? n + "?" + r : u == "?" ? n + r : n + "&" + r
    }

    function u(n) {
        var t = _w.location.search.replace("?", ""),
            r = t.split("&"),
            i, u, f;
        if (r) { for (t = "?", i = 0; i < r.length; i++) u = r[i], u.split("=")[0].toLowerCase() !== n && (t = t + u + "&"); return f = t.substring(t.length - 1), f == "&" && (t = t.substring(0, t.length - 1)), t }
        return ""
    }

    function i(n, t) {
        var f = null,
            e = n.replace("?", ""),
            r = e.split("&"),
            i, u;
        if (r)
            for (i = 0; i < r.length; i++)
                if (u = r[i], u.split("=")[0].toLowerCase() === t.toLowerCase()) { f = u.split("=")[1]; break }
        return f
    }

    function f(n, t, r, u) {
        var e = i(_w.location.search, n),
            f = "";
        e == "1" ? (f = "1", sj_cook.set(t, r, f, u, "/")) : e != null && (f = "0", sj_cook.set(t, r, f, u, "/"))
    }

    function e(n, r) {
        if (_w.location.search.match(/form=/i)) {
            var u = i(_w.location.search, "form"),
                f = new RegExp("form=" + u, "gi");
            return n.replace(f, "FORM=" + r)
        }
        return t(n, "FORM", r)
    }
    n.SetParameter = r;
    n.RemoveParameter = u;
    n.SetCookieByUrlParameter = f;
    n.SetFormCode = e
})(EnglishSearchShared || (EnglishSearchShared = {}))