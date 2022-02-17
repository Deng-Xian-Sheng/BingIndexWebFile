var Feedback;
(function(n) {
    var t;
    (function() {
        function r(i, r, u, f, e, o) {
            i = typeof i === t ? !1 : i;
            i && scrollTo(0, 0);
            u = typeof u === t ? !0 : u;
            n.PackageLoad.Load(r, u, f, e, o)
        }

        function e(n, t) {
            for (var r = 0, i = null; n && n.getAttribute && (!(t >= 1) || r < t);) {
                if (i = n.getAttribute("data-fbhlsel"), i != null) break;
                r++;
                n = n.parentNode
            }
            return i
        }
        var u = "feedbackformrequested",
            c = "feedbackInitialized",
            i, f = "",
            o = "feedback-binded",
            s = "clicked",
            t = "undefined",
            h;
        n.Bootstrap.InitializeFeedback = function(l, a, v, y, p, w, b, k) {
            function tt(t) {
                var r = null,
                    i;
                return t && (i = new h, n.fel("ajax.feedback.collectsettings", "gsf", i), r = i.findSettings(t)), r
            }
            var d = _ge(a),
                g, nt;
            d && d.classList && d.classList.contains(o) || (p = typeof p === t ? !1 : p, g = e(d, 3), f !== "sb_feedback" && (f = a, typeof sj_evt !== t && (i && sj_evt.unbind(u, i), i = function(n) {
                var u = null,
                    t = null,
                    f = null,
                    o, i, s;
                n && n.length > 1 && (i = n[1], i.tagName !== undefined && i.nodeType !== undefined ? (u = i, t = tt(u)) : t = i, o = t && t.elementToHighlight || u, f = e(o));
                s = t && t.linkId || a;
                r(y, l, v, s, f, t)
            }, sj_evt.bind(u, i, 1)), typeof SearchAppWrapper !== t && SearchAppWrapper.CortanaApp && SearchAppWrapper.CortanaApp.addEventListener && SearchAppWrapper.CortanaApp.addEventListener(u, function(n) {
                (typeof n !== t && n !== null && (n.isHandled = !0), a === f) && _ge("fbpgdg") === null && r(y, l, v, a)
            })), d !== null ? (nt = function(n) {
                if (!(n instanceof KeyboardEvent) || n.keyCode === 13) {
                    var i = null,
                        t = null,
                        u = null,
                        f;
                    if (p && d.classList) {
                        if (d.classList.contains(s)) return !1;
                        d.classList.add(s)
                    }
                    sj_pd(n);
                    sj_sp(n);
                    i = sj_et(n);
                    t = tt(i);
                    f = t && t.elementToHighlight || i;
                    u = e(f);
                    r(y, l, v, a, u || g, t || k)
                }
            }, sj_be(d, "click", nt), sj_be(d, "keydown", nt), d.classList && d.classList.add(o)) : (b = typeof b === t ? !1 : b, b && r(y, l, v, a, g)), typeof sj_evt !== t && sj_evt.fire(c))
        };
        n.le = function(n, t) { SharedLogHelper && SharedLogHelper.LogError && SharedLogHelper.LogError("Feedback: " + n, null, t) };
        n.leh = function(t, i, r) { n.le("Feedback: " + t + " handler failed in " + i, r) };
        n.fel = function(t, i) {
            for (var u = [], r = 2; r < arguments.length; r++) u[r - 2] = arguments[r];
            try {
                u.unshift(t);
                sj_evt.fire.apply(null, u)
            } catch (f) { n.leh(t, i, f); throw f; }
        };
        h = function() {
            function n() { this.settingsList = [] }
            return n.prototype.setStartSettings = function(n, t) { n && t && this.settingsList.push({ c: n, s: t }) }, n.prototype.findSettings = function(n) { var t = null; return this.settingsList.forEach(function(i) { sj_we(n, i.c) && (t = i.s) }), t }, n
        }()
    })(t = n.Bootstrap || (n.Bootstrap = {}))
})(Feedback || (Feedback = {})),
function(n) {
    var t;
    (function(t) {
        "use strict";

        function f(f, e, o, s) {
            var k = _G.IG,
                d = typeof _G.V === i ? _G.P : _G.V,
                h, y, c, a, w, v;
            n.fel("onFeedbackStarting", "lp");
            t.staticConfig = { linkId: e, activeElement: _d.activeElement };
            var l = "?ig=" + k + "&p=" + d,
                b = n.RouteProvider.Provide(f),
                p = encodeURIComponent;
            if (s) {
                if (s.formConfig && (b = f === "page" ? "sdk/form" : f, l += "&formconfig=" + s.formConfig), s.service && (t.staticConfig.service = s.service), s.scenario && (t.staticConfig.scenario = s.scenario), c = s.context, c)
                    for (a in c) c.hasOwnProperty(a) && (l += "&" + p(a) + "=" + p(c[a]));
                s.pos && (t.staticConfig.pos = s.pos, l += "&pos=1")
            }
            for (h = "/feedback/" + b + l, typeof fbsrc !== i && (h += "&src=" + p(fbsrc)), typeof fbpkgiid !== i && fbpkgiid[f] && (h += "&iid=" + fbpkgiid[f]), w = ["addloginsource", "client", "corpnet", "features", "hose", "hoseassistant", "logjserror", "msamock", "setvar", "testhooks", "theme", "uncrunched"], v = 0; v < w.length; v++)(y = location.href.match(new RegExp("[?&]" + w[v] + "=[^?&#]*", "i"))) && y[0] && (h += "&" + y[0].substring(1));
            sj_ajax(h, {
                callback: function(t, i) {
                    if (t && i) try {
                        r && r.removeAttribute("clicked");
                        var f = s && _ge(s.feedbackContainerId);
                        i.appendTo(f || _d.body);
                        n.fel("onFeedbackShow", "lp");
                        n.fel("clarity.trigger", "lp", "BingFeedback");
                        n.Highlight && o && n.Highlight.HighlightElements(o)
                    } catch (u) { n.le("Package load callback failed", u); throw u; }
                }
            });
            u[f] = !0
        }
        var u = {},
            i = "undefined",
            r;
        t.staticConfig = {};
        n.PackageLoad.GetHTML = function() { return _d.documentElement.outerHTML };
        n.PackageLoad.Load = function(n, t, e, o, s) {
            var h, c;
            t = typeof t === i ? !0 : t;
            e = typeof e === i ? "" : e;
            c = typeof s != i && s && s.feedbackContainerId;
            r = _ge(e);
            for (h in n) n.hasOwnProperty(h) && (!t || c || typeof u[h] === i) && f(h, e, o, s)
        }
    })(t = n.PackageLoad || (n.PackageLoad = {}))
}(Feedback || (Feedback = {})),
function(n) {
    var t;
    (function() {
        "use strict";
        n.RouteProvider.Provide = function(n) { return n === "page" ? "sdk/form" : n }
    })(t = n.RouteProvider || (n.RouteProvider = {}))
}(Feedback || (Feedback = {}))