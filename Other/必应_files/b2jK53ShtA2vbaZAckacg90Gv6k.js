var IPv6Tests;
(function(n) {
    function c(t) {
        var r, c, o, l, f, s, i, a, v;
        try {
            if (y(), t == null || t.length == 0) return;
            if (r = sj_cook.get(n.ipv6testcookie, n.ipv6testcrumb), r != null && r == "1" && !u) return;
            if (c = sj_cook.get(n.ipv6testcookie, n.iptypecrumb), r != null && c && u && (o = Number(r), l = (new Date).getTime(), o != NaN && o > l)) return;
            if (f = _d.getElementsByTagName("head")[0], !f) return;
            if (s = "ipV6TestScript" + t, i = sj_ce("script", s), i.type = "text/javascript", i.async = !0, i.onerror = function() { Log.Log("ipv6test", "IPv6Test Dom_ " + t, "IPv6TestError", !1, "Error", "JSONP call resulted in error.") }, a = _ge(s), a && f) return;
            f.insertBefore(i, f.firstChild);
            i.setAttribute("src", _w.location.protocol + "//" + t + ".bing.com/ipv6test/test");
            e && p();
            v = u ? (new Date).getTime() + h : "1";
            sj_cook.set(n.ipv6testcookie, n.ipv6testcrumb, v.toString(), !1)
        } catch (w) { Log.Log("ipv6test", "Dom_ " + t, "IPv6TestError", !1, "Error", "Failed to make JSONP call. Exception - " + w.message) }
    }

    function l(t) {
        if (!t) { Log.Log("ipv6test", "IPv6TestResponseError", "IPv6TestError", !1, "Error", "Got null response from endpoint."); return }
        try {
            var i = JSON.parse(a(t)),
                r = i && i.type ? i.type : "0";
            f == "6" && (r = f);
            sj_cook.set(n.ipv6testcookie, n.iptypecrumb, r, !1)
        } catch (u) { Log.Log("ipv6test", "IPv6ResponseError", "IPv6TestError", !1, "Error", "Failed to parse response. Exception - " + u.message) }
    }

    function a(n) { var t = sj_ce("textarea"); return t.innerHTML = n, t.value }

    function v() { o ? n.PingServer(r) : _d.body.addEventListener && (_d.body.addEventListener("DOMNodeInserted", i), _d.body.addEventListener("DOMNodeRemoved", i)) }

    function y() { _d.body.removeEventListener && (_d.body.removeEventListener("DOMNodeInserted", i), _d.body.removeEventListener("DOMNodeRemoved", i)) }

    function i() {
        try {
            t != null && (clearInterval(t), t = null);
            t = setTimeout(function() { n.PingServer(r) }, 1e3)
        } catch (i) { Log.Log("ipv6test", "IPv6TestPingError", "IPv6TestError", !1, "Error", "Exception initiating ping-" + i.message) }
    }

    function p() {
        var n = new XMLHttpRequest;
        n.open("GET", "/ipv6test/test?FORM=MONITR", !0);
        n.overrideMimeType && n.overrideMimeType("text/plain");
        n.send()
    }

    function w(t, i, u) {
        t != null && t === "6" && (r = s, f = t);
        typeof i == "boolean" && (e = i);
        typeof u == "boolean" && (o = u);
        try { sj_evt.bind("onP1", n.observeDOMChanges, !0) } catch (h) { Log.Log("ipv6test", "IPv6TestBindError", "IPv6TestError", !1, "Error", "Exception binding onP1 - " + h.message) }
    }
    n.ipv6testcookie = "ipv6";
    n.ipv6testcrumb = "hit";
    n.iptypecrumb = "t";
    var t, s = "4",
        r = "www2",
        u = !0,
        h = 36e5,
        f = "4",
        e = !1,
        o = !1;
    n.PingServer = c;
    n.TestIPv6Response = l;
    n.observeDOMChanges = v;
    n.Init = w
})(IPv6Tests || (IPv6Tests = {})),
function() { try { typeof ipd != "undefined" && ipd != null && IPv6Tests.Init(ipd.ipt, ipd.secall, ipd.pd) } catch (n) { Log.Log("ipv6test", "IPv6TestInitError", "IPv6TestError", !1, "Error", "Exception calling init method - " + n.message) } }()