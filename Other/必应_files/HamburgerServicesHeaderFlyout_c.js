var sch = sch || {};
(function() {
    function lt() { typeof sj_b != "undefined" && r && n && (rt(), sj_be(r, u, ut, !1)) }

    function rt() {
        var r, u, i, t;
        l || (l = !0, r = [], vt(r), r.push("IID=" + n.getAttribute("_iid")), r.push("IG=" + _G.IG), u = _w.Feedback, u && u.Bootstrap && r.push("fbnb=1"), i = "/hamburger/scfo?ver=" + _G.AppVer + "&" + r.join("&"), i.indexOf("&ru=") < 0 && (i = i + "&ru=" + encodeURIComponent(_w.location.href)), /^\/images\/search$/i.test(_w.location.pathname) ? i += "&mmasync=1&src=img" : _w._H && (_w._H.feature === "cnt" ? i += _w._H.type === "entp" ? "&src=ent" : "&src=cnt" : _w._H.hpqs && (i += "&src=hp")), t = sj_gx(), t.open("GET", i, !0), t.onreadystatechange = function() { t.readyState == 4 && t.status == 200 && t.responseText ? (_w.sj_appHTML ? sj_appHTML(n, t.responseText) : n.innerHTML = t.responseText, p = !0, at(), w != null && ut(w)) : t.readyState == 4 && (l = !1, p = !1) }, t.send(null))
    }

    function at() {
        var t, n, i;
        if (sj_evt.bind("onFeedbackStarting", ft), _d.querySelectorAll)
            for (t = _d.querySelectorAll(".hb_section"), n = 0; n < t.length; n++) i = t[n], i.className.indexOf("hb_top_sec") >= 0 && pt(i)
    }

    function vt(n) { return _w.location.search.length > 1 && n.push(_w.location.search.substring(1)), n }

    function ut(t) {
        if (!l || !p) {
            w = t;
            rt();
            return
        }
        n && (i(n, f), b(n, h) ? yt(t) : v(t))
    }

    function yt(f) {
        var y, v, p, l, e;
        for (sj_evt.fire("focusChange", "services"), sj_evt.fire("hpqsOpened"), f && sj_sp(f), f && sj_pd(f), sj_be(_d, u, a, !0), sj_be(_d, k, a, !0), t(r, g), i(n, h), t(n, d), n.setAttribute(o, "false"), r.setAttribute(s, "true"), et(0), y = _d.querySelectorAll(".hb_value_col"), l = 0; l < y.length; l++) e = y[l], v = e.clientWidth, v > 20 && v < 228 && e.parentNode.childNodes.length > 2 && (e.parentNode.childNodes[1].style.width = 228 - v + "px");
        for (p = _d.querySelectorAll(".hb_titlerow,.hb_detrow"), l = 0; l < p.length; l++) e = p[l], e.scrollHeight > e.clientHeight + 10 && (e.style.height = e.scrollHeight + "px");
        Log && Log.Log && Log.Log("Show", nt, c)
    }

    function a(t) {
        var e = t.which || t.keyCode,
            f, i;
        if (e == 27) {
            v(t);
            r.focus();
            return
        }
        f = sj_ev(t);
        i = sj_et(t);
        f.type != u && e != 9 || n.contains(i) || (f.type == u && i != null && i != r && i.tagName === "A" ? ft(t) : v(t))
    }

    function ft(i) {
        t(n, f);
        v(i)
    }

    function v(f) {
        f && sj_sp(f);
        f && sj_pd(f);
        sj_ue(_d, u, a, !0);
        sj_ue(_d, k, a, !0);
        i(n, d);
        t(n, h);
        i(r, g);
        n.setAttribute(o, "true");
        r.setAttribute(s, "false");
        et(-1);
        Log && Log.Log && Log.Log("Hide", nt, c)
    }

    function et(n) { for (var t, r, f, u = _d.querySelectorAll(".hb_section"), i = 0; i < u.length; i++) t = u[i], t.hasAttribute(ht) && (n == 0 ? (r = t.parentElement, r && (f = r.className, t.tabIndex = f.indexOf(h) >= 0 ? -1 : n)) : t.tabIndex = n) }

    function b(n, t) { if (n && n.className) { var i = e + n.className + e; return i.indexOf(e + t + e) !== -1 } return !1 }

    function pt(n) {
        sj_be(n, u, function(t) { ot(n, t) });
        sj_be(n, "keypress", function(t) { ot(n, t) })
    }

    function ot(n, t) {
        sj_sp(t);
        wt(n, !n.className || n.className.indexOf(y) < 0)
    }

    function wt(r, u) {
        var e = r.parentElement.querySelector(ct),
            h = r.querySelector(".hbic_chevdown"),
            l = r.querySelector(".hbic_chevup"),
            a = r.id == "hbsettings" ? "hb_setexp" : "hb_hpqexp";
        e && h && l && (u ? (t(n, a), i(e, it), t(e, tt), t(h, f), i(l, f), t(r, y), st(e, 0), e.setAttribute(o, "false"), r.setAttribute(s, "true"), Log.Log("Expand", r.getAttribute("id"), c)) : (i(n, a), t(e, it), i(e, tt), t(l, f), i(h, f), i(r, y), st(e, -1), e.setAttribute(o, "true"), r.setAttribute(s, "false"), Log.Log("Collapse", r.getAttribute("id"), c)))
    }

    function st(n, t) { for (var i, u = n.children, r = 0; r < u.length; r++) i = u[r], i && i.hasAttribute("tabindex") && (i.tabIndex = t) }

    function t(n, t) { b(n, t) || (n.className += e + t) }

    function i(n, t) {
        if (b(n, t)) {
            var i = new RegExp("(\\s|^)" + t + "(\\s|$)", "g");
            n.className = n.className.replace(i, e)
        }
    }
    var u = "click",
        k = "keyup",
        f = "b_hide",
        o = "aria-hidden",
        s = "aria-expanded",
        h = "slide_up",
        d = "slide_down",
        ht = "tabindex",
        g = "openfo",
        nt = "Flyout",
        c = "Hamburger",
        e = " ",
        y = "hb_expanded",
        ct = ".hb_expandible",
        tt = "slide_down",
        it = "slide_up",
        bt = _ge("id_h"),
        r = _ge("id_sc"),
        n = _ge("id_hbfo"),
        l = !1,
        p = !1,
        w = sch.clk;
    lt()
})()