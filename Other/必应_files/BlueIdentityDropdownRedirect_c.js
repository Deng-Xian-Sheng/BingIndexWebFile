var Identity = Identity || {};
Identity.headerAuthenticate = function(n, t) { Identity.headerLoginMode != 0 && Identity.popupAuthenticate(n, "", "EXPLICIT_P") || (_w.location.href = t) },
    function() {
        function h(n, t, i) {
            if (n && t) {
                var r = n.className;
                i ? r.indexOf(t) == -1 && (r = r.concat(" ", t)) : r = r.replace(t, "");
                n.className = r
            }
        }

        function g(n) {
            for (var i, r, u, e, o = n.getElementsByTagName("script"), f = [], t = 0; t < o.length; t++) f.push(o[t]);
            for (t = 0; t < f.length; t++) {
                for (i = f[t], r = document.createElement("script"), u = 0; u < i.attributes.length; u++) e = i.attributes[u], r.setAttribute(e.name, e.value);
                r.appendChild(document.createTextNode(i.innerHTML));
                i.parentNode.replaceChild(r, i)
            }
        }

        function ut(n) { n[1] !== "login" && w(!1) }
        var u = _ge("id_h"),
            f = _ge("id_l"),
            t = _ge("id_d"),
            e, r = !1,
            c = !1,
            l = Identity.hdrClk,
            i = sj_gx(),
            a = !1,
            b = "keyup",
            o = "click",
            s = "touchstart",
            v = "focusChange",
            y = function() {
                var u, s, f, h;
                if (!r) {
                    r = !0;
                    var v = t.getAttribute("_iid"),
                        o = "",
                        n = "testhooks=1";
                    location.href.indexOf(n) > 0 && (o = "&" + n);
                    u = "";
                    s = "loginmode=1";
                    Identity.headerLoginMode == 1 && (u = "&" + s);
                    f = "";
                    n = "idtest=windows_live_id";
                    location.href.indexOf(n) > 0 && (f = "&" + n);
                    h = "/Identity/Dropdown?n=1&IID=" + v + "&IG=" + _G.IG + o + f + u + "&ru=" + encodeURIComponent(location.href);
                    i.open("GET", h, !0);
                    i.onreadystatechange = function() { i.readyState == 4 && i.status == 200 && i.responseText ? (t.innerHTML = i.responseText, g(t), e = _ge("b_modal"), c = !0, a = !1, l != null && k(l), sj_evt.fire("id:refreshed")) : i.readyState == 4 && (r = !1, c = !1) };
                    i.send(null)
                }
            };
        y();
        var k = function(n) {
                if (!r || !c) {
                    l = n;
                    y(n);
                    return
                }
                var t = u.className.indexOf("b_idOpen") < 0;
                w(t);
                sj_sp(n)
            },
            nt = function() {
                var n = t.getElementsByTagName("a"),
                    r, u, i;
                if (n != null && n.length === 1) { if (it()) return !1; if (r = n[0].getAttribute("data-a"), u = n[0].getAttribute("data-p"), r === "false" && u === "W" && (i = n[0].href, i != null)) return tt() ? _w.open(i, "_blank") : document.location.href = i, !0 }
                return !1
            },
            p = function(n) { sj_sp(n) },
            w = function(t) {
                f.setAttribute("aria-expanded", t);
                t ? nt() || (h(u, "b_idOpen", t), rt(), sj_evt.fire(v, u), sj_evt.fire("onPopTR", "login"), e && (e.style.display = "none"), sj_be(_d, o, n), sj_be(_d, s, n), sj_be(_d, b, d, !0), sj_evt.bind(v, n)) : (h(u, "b_idOpen", t), sj_ue(_d, o, n), sj_ue(_d, s, n), h(e, "b_idOpen", t), e && (e.style.display = "none"), sj_ue(_d, b, d), sj_evt.unbind(v, n))
            },
            tt = function() { return _ge("b_frame") !== null && _ge("b_frame").className === "b_pub_frame" || _d.URL.indexOf("pubexp") >= 0 },
            it = function() { return _d.URL.search(/browserextension/i) > -1 },
            rt = function() {
                var h, e, r, u, f, i, n, t, s;
                if (!a && (a = !0, h = _ge("b_idProviders"), h)) {
                    for (e = h.children, r = 0, u = 0; u < e.length; u++) {
                        if (f = 0, document.getElementsByClassName) n = e[u].getElementsByClassName("id_name"), n && n.length > 0 && (f += n[0].clientWidth), t = e[u].getElementsByClassName("id_link_text"), t && t.length > 0 && (f += t[0].clientWidth);
                        else {
                            var n = [],
                                t = [],
                                o = e[u].getElementsByTagName("span");
                            for (i = 0; i < o.length; i++) o[i].className == "id_name" ? n.push(o[i]) : o[i].className == "id_link_text" && t.push(o[i]);
                            n && n.length > 0 && (f += n[0].getBoundingClientRect().right - n[0].getBoundingClientRect().left);
                            t && t.length > 0 && (f += t[0].getBoundingClientRect().right - t[0].getBoundingClientRect().left)
                        }
                        r = Math.max(r, f)
                    }
                    r += 84;
                    s = _ge("id_d");
                    s && r > s.clientWidth && (s.style.width = r + "px")
                }
            },
            d = function(i) {
                var r = i.which || i.keyCode;
                if (r == 27) {
                    n();
                    f.focus();
                    return
                }
                if (r == 9 && !t.contains(sj_et(i))) { n(); return }
            },
            n = function() { w(!1) };
        u && sj_be(u, "mouseover", y);
        f && sj_be(f, o, k);
        t && sj_be(t, o, p);
        f && sj_be(f, s, p);
        t && sj_be(t, s, p);
        sj_evt.bind("Identity.SignoutNotifCancelClick", function() { n() });
        sj_evt.bind("Identity.SignoutNotifBackgroundClick", function() { n() });
        sj_evt.bind("wl:auth", function() { r = !1 }, 1);
        sj_evt.bind("aad:signedin", function() { r = !1 }, 1);
        sj_evt.bind("aad:signedout", function() { r = !1 }, 1);
        sj_evt.bind("onPopTR", ut)
    }()