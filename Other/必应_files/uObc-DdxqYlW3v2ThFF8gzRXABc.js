var Identity = Identity || {},
    ham_id_js_downloaded = !1;
(function(n, t, i, r, u, f, e) {
    e.wlProfile = function() {
        var r = sj_cook.get,
            u = "WLS",
            t = r(u, "N"),
            i = r(u, "C");
        return i && e.wlImgSm && e.wlImgLg ? { displayName: t ? t.replace(/\+/g, " ") : "", name: n(t.replace(/\+/g, " ")), img: e.wlImgSm.replace(/\{0\}/g, f(i)), imgL: e.wlImgLg.replace(/\{0\}/g, f(i)), idp: "WL" } : null
    };
    e.headerLoginMode = 0;
    e.popupAuthenticate = function(n, i, r) {
        var o, u, h, c, v = sb_gt(),
            l = Math.floor(v / 1e3).toString(),
            s = "ct",
            a = new RegExp("([?&])" + s + "=.*?(&|$)", "i");
        return n.toString() === "WindowsLiveId" && (o = e.popupLoginUrls, u = o[n], u = u.match(a) ? u.replace(a, "$1" + s + "=" + l + "$2") : u + "?" + s + "=" + l, e.popupLoginUrls.WindowsLiveId = u), (o = e.popupLoginUrls) && (u = o[n] + (i ? "&perms=" + f(i) : "") + (r ? "&src=" + f(r) : "")) && (h = e.pop(u)) && (c = setInterval(function() { h.closed && (t.fire("id:popup:close"), clearInterval(c)) }, 100))
    };
    e.pop = function(n) { return r.open(n, "idl", "location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=no,toolbar=no,width=1000,height=620") };
    var o = u("id_h"),
        s = u("id_l"),
        h = "click";
    e.js_download = function() {
        if (!ham_id_js_downloaded) {
            var n = document.createElement("script");
            n.src = "/sj_jb/BlueIdentityDropdownRedirect_c.js";
            n.type = "text/javascript";
            document.head.appendChild(n);
            ham_id_js_downloaded = !0
        }
    };
    t.bind("onP1Lazy", function() {
        setTimeout(function() {
            o && s && (i(o, "mouseover", e.js_download), i(s, "focus", e.js_download), i(s, h, function(n) {
                e.hdrClk = n;
                e.js_download()
            }));
            o && t.fire("identityHeaderShown")
        }, 50)
    }, 1)
})(decodeURIComponent, sj_evt, sj_be, _w, _ge, encodeURIComponent, Identity, _G.RTL)