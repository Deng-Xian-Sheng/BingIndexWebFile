var __assign = this && this.__assign || function() { return __assign = Object.assign || function(n) { for (var t, r, i = 1, u = arguments.length; i < u; i++) { t = arguments[i]; for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]) } return n }, __assign.apply(this, arguments) },
    __rest = this && this.__rest || function(n, t) {
        var u = {},
            r;
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (u[i] = n[i]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (u[i[r]] = n[i[r]]);
        return u
    },
    __spreadArrays = this && this.__spreadArrays || function() {
        for (var i = 0, n = 0, r = arguments.length; n < r; n++) i += arguments[n].length;
        for (var u = Array(i), f = 0, n = 0; n < r; n++)
            for (var e = arguments[n], t = 0, o = e.length; t < o; t++, f++) u[f] = e[t];
        return u
    },
    __awaiter = this && this.__awaiter || function(n, t, i, r) {
        function u(n) { return n instanceof i ? n : new i(function(t) { t(n) }) }
        return new(i || (i = Promise))(function(i, f) {
            function o(n) { try { e(r.next(n)) } catch (t) { f(t) } }

            function s(n) { try { e(r["throw"](n)) } catch (t) { f(t) } }

            function e(n) { n.done ? i(n.value) : u(n.value).then(o, s) }
            e((r = r.apply(n, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(n, t) {
        function o(n) { return function(t) { return s([n, t]) } }

        function s(e) {
            if (f) throw new TypeError("Generator is already executing.");
            while (r) try {
                if (f = 1, u && (i = e[0] & 2 ? u["return"] : e[0] ? u["throw"] || ((i = u["return"]) && i.call(u), 0) : u.next) && !(i = i.call(u, e[1])).done) return i;
                (u = 0, i) && (e = [e[0] & 2, i.value]);
                switch (e[0]) {
                    case 0:
                    case 1:
                        i = e;
                        break;
                    case 4:
                        return r.label++, { value: e[1], done: !1 };
                    case 5:
                        r.label++;
                        u = e[1];
                        e = [0];
                        continue;
                    case 7:
                        e = r.ops.pop();
                        r.trys.pop();
                        continue;
                    default:
                        if (!(i = r.trys, i = i.length > 0 && i[i.length - 1]) && (e[0] === 6 || e[0] === 2)) { r = 0; continue }
                        if (e[0] === 3 && (!i || e[1] > i[0] && e[1] < i[3])) { r.label = e[1]; break }
                        if (e[0] === 6 && r.label < i[1]) {
                            r.label = i[1];
                            i = e;
                            break
                        }
                        if (i && r.label < i[2]) {
                            r.label = i[2];
                            r.ops.push(e);
                            break
                        }
                        i[2] && r.ops.pop();
                        r.trys.pop();
                        continue
                }
                e = t.call(n, r)
            } catch (o) {
                e = [6, o];
                u = 0
            } finally { f = i = 0 }
            if (e[0] & 5) throw e[1];
            return { value: e[0] ? e[1] : void 0, done: !0 }
        }
        var r = { label: 0, sent: function() { if (i[0] & 1) throw i[1]; return i[1] }, trys: [], ops: [] },
            f, u, i, e;
        return e = { next: o(0), "throw": o(1), "return": o(2) }, typeof Symbol == "function" && (e[Symbol.iterator] = function() { return this }), e
    },
    __extends = this && this.__extends || function() {
        var n = function(t, i) {
            return n = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
        };
        return function(t, i) {
            function r() { this.constructor = t }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
define("Components/Core/ModelContextPreact", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ModelContext = void 0;
    t.ModelContext = preact.createContext(null)
});
define("InstrumentPreact", ["require", "exports"], function(n, t) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.InstForm = t.Region = t.InstLinkClient = t.InstLink = t.logWidgetClick = t.logError = t.logTime = t.logHide = t.logShow = t.logHover = t.logHolidayClick = t.logClick = t.logHiddenLink = t.logDataEvent = t.resetInstrumentation = void 0;
    r = {};
    t.resetInstrumentation = function() { r = {} };
    var u = "HpApp",
        e = function(n) { return Array.prototype.slice.apply(n).reduce(function(n, t, i) { return n + (i + 1) * t.charCodeAt(0) }, 0) },
        o = function(n, t) { return n + t },
        f = function(n, t, i) {
            var f = o(n, t),
                s = "",
                h = !1;
            return f in r ? i && i.current && (r[f] = i.current.getAttribute("data-h"), s = r[f].slice(3)) : (s = e((t || "root") + "." + n) + ".1", r[f] = "ID=" + u + "," + s, h = !0), { key: f, h: r[f], id: s, isNew: h }
        },
        i = function(n, t) {
            for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
            setTimeout(function() {
                window && window.performance && window.performance.now && i.push("time", Math.round(performance.now()));
                Log && Log.Log && Log.Log.apply(Log, __spreadArrays([n, "HP", t, !0], i || []))
            }, 0)
        };
    t.logDataEvent = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Data", n], r || []))
    };
    t.logHiddenLink = function(n) {
        var t = document.getElementById(n);
        t && si_T(t.getAttribute("h"))
    };
    t.logClick = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["DHTMLClick", n], r || []))
    };
    t.logHolidayClick = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Click", n], r || []))
    };
    t.logHover = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Hover", n], r || []))
    };
    t.logShow = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Show", n], r || []))
    };
    t.logHide = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Hide", n], r || []))
    };
    t.logTime = function(n) { window && window.performance && window.performance.now && i("Latency", n, "Time", Math.round(performance.now())) };
    t.logError = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Error", n], r || []))
    };
    t.logWidgetClick = function(n) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        i.apply(void 0, __spreadArrays(["Click", n], r || []))
    };
    t.InstLink = function(n) {
        var s = n.children,
            t = n.nodeName,
            i = n.parentNodeName,
            r = n.href,
            h = n.loggingData,
            c = __rest(n, ["children", "nodeName", "parentNodeName", "href", "loggingData"]),
            o = preactHooks.useRef(null),
            e = f(t, i, o),
            l = e.h,
            a = e.id,
            v = e.isNew;
        return typeof ServerSideLayoutInstrumentation != "undefined" && v && (ServerSideLayoutInstrumentation.startLink(u, a, t, i, r), ServerSideLayoutInstrumentation.closeLink()), preact.h("a", __assign({ href: r, "data-h": l, ref: o, onClick: function() { Log && Log.Log && Log.Log.apply(Log, __spreadArrays(["Click", "HP", t, !0, "nodeName", t, "parentNodeName", i, "url", r], h || [])) } }, c), s)
    };
    t.InstLinkClient = function(n) {
        var u = n.children,
            i = n.href,
            t = n.nodeName,
            r = n.parentNodeName,
            e = n.loggingData,
            o = __rest(n, ["children", "href", "nodeName", "parentNodeName", "loggingData"]),
            s = f(t, r).h;
        return preact.h("a", __assign({ href: i, "data-h": s, onClick: function() { Log && Log.Log && Log.Log.apply(Log, __spreadArrays(["Click", "HP", t, !0, "nodeName", t, "parentNodeName", r, "url", i], e || [])) } }, o), u)
    };
    t.Region = function(n) {
        var e = n.children,
            t = n.nodeName,
            i = n.parentNodeName,
            o = n.insertId,
            s = f(t, i).isNew,
            r;
        return typeof ServerSideLayoutInstrumentation != "undefined" && s && (r = { appNS: u, type: "L.Box", insertId: o, displayRegion: t }, ServerSideLayoutInstrumentation.startRegion(r, t, i), ServerSideLayoutInstrumentation.closeRegion()), preact.h(preact.Fragment, null, e)
    };
    t.InstForm = function(n) {
        var h = n.children,
            t = n.nodeName,
            r = n.parentNodeName,
            s = n.loggingData,
            c = __rest(n, ["children", "nodeName", "parentNodeName", "loggingData"]),
            i = preactHooks.useRef(null),
            e = f(t, r, i),
            o = e.h,
            l = e.id,
            a = e.isNew;
        return typeof ServerSideLayoutInstrumentation != "undefined" && a && (ServerSideLayoutInstrumentation.startLink(u, l, t, r), ServerSideLayoutInstrumentation.closeLink()), preactHooks.useEffect(function() {
            i && i.current && (i.current.onsubmit = function() {
                Log.Log.apply(Log, __spreadArrays(["Click", "HP", t, !0, "nodeName", t, "parentNodeName", r, "click_type", "form"], s || []));
                si_T && si_T(o)
            })
        }, [i.current]), preact.h("form", __assign({
            ref: i,
            "data-h": o,
            onSubmit: function() {
                Log.Log.apply(Log, __spreadArrays(["Click", "HP", t, !0, "nodeName", t, "parentNodeName", r, "click_type", "form"], s || []));
                si_T && si_T(o)
            }
        }, c || []), h)
    }
});
define("Components/Core/HooksPreact", ["require", "exports", "InstrumentPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.useGraphQl = t.useAudio = t.useForceUpdate = t.useClientRect = t.useFetch = t.useClientSideRender = t.useClientSettings = t.useScrollPosition = t.useSpeechRecognizer = void 0;
    t.useSpeechRecognizer = function(n, t, i) {
        t === void 0 && (t = null);
        i === void 0 && (i = "");
        var r = preactHooks.useState(null),
            u = r[0],
            f = r[1];
        return preactHooks.useEffect(function() {
            var u = location.protocol == "https:" ? "wss:" : "ws:",
                e = t ? "?" + Object.keys(t).map(function(n) { return n + "=" + t[n] }).join("&") : "",
                o = "" + u + n + e,
                r = SpeechSDK.SpeechConfig.fromEndpoint(new URL(o), "key"),
                s = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
            i && (r.speechRecognitionLanguage = i);
            f(new SpeechSDK.SpeechRecognizer(r, s))
        }, []), [u]
    };
    t.useScrollPosition = function(n, t) {
        var i = preactHooks.useState({ top: 0, left: 0 }),
            u = i[0],
            r = i[1];
        return preactHooks.useEffect(function() {
            if (n) {
                var t = function() { r({ left: n.scrollLeft, top: n.scrollTop }) };
                return n.addEventListener("scroll", t),
                    function() { n && n.removeEventListener && n.removeEventListener("scroll", t) }
            }
        }, [n]), preactHooks.useEffect(function() { n && r({ left: n.scrollLeft, top: n.scrollTop }) }, [t]), u
    };
    t.useClientSettings = function(n) {
        var i = preactHooks.useState(n.ClientSettings),
            t = i[0],
            r = i[1];
        return n.ClientSettings = __assign({}, t), preactHooks.useEffect(function() {
            var i = btoa(JSON.stringify(t)),
                n;
            sj_cook.set("_HPVN", "CS", i, !0, "/");
            n = document.createEvent("CustomEvent");
            n.initCustomEvent("ClientSettingsUpdated", !0, !0, t);
            dispatchEvent(n)
        }, [t]), preactHooks.useEffect(function() { addEventListener("ClientSettingsUpdated", function(n) { n.detail && (r(n.detail), window._model.ClientSettings = n.detail) }) }, []), { clientSettings: t, updateClientSettings: r }
    };
    t.useClientSideRender = function() {
        var n = preactHooks.useState(!1),
            t = n[0],
            i = n[1];
        return preactHooks.useEffect(function() { i(!0) }, []), t
    };
    t.useFetch = function(n, t, r, u, f) {
        t === void 0 && (t = "json");
        r === void 0 && (r = null);
        f === void 0 && (f = "GET");
        var o = preactHooks.useState(r),
            s = o[0],
            e = o[1];
        return preactHooks.useEffect(function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var r, o;
                return __generator(this, function() {
                    return (r = n, !r) ? [2, null] : (r += r.indexOf("?") > 0 ? "&" + location.search.slice(1) : location.search, typeof i.logDataEvent != "undefined" && i.logDataEvent("requested", "func", "useFetch", "url", r, "format", t), o = { method: f, mode: "cors", credentials: "include", body: u, headers: { "Content-type": "application/json" } }, fetch(r, o).then(function(n) { return typeof i.logDataEvent != "undefined" && i.logDataEvent("fetched", "func", "useFetch", "url", r, "format", t, "status", n.status), t == "html" || t == "dom" ? n.text() : n.json() }).then(function(n) {
                        if (typeof i.logDataEvent != "undefined" && i.logDataEvent("parsed", "func", "useFetch", "url", r, "format", t), t == "dom" || t == "html") {
                            var f = new DOMParser,
                                u = f.parseFromString(n, "text/html");
                            t == "html" ? e(u.body.innerHTML) : e(u)
                        } else e(n)
                    }).catch(function(n) {
                        typeof i.logDataEvent != "undefined" && i.logDataEvent("error", "func", "useFetch", "url", r, "format", t, "message", n);
                        e(null)
                    }), [2])
                })
            })
        }, [n]), s
    };
    t.useClientRect = function(n) {
        var t = preactHooks.useState(null),
            i = t[0],
            r = t[1];
        return preactHooks.useEffect(function() { n && r(n.getBoundingClientRect()) }, [n]), i
    };
    t.useForceUpdate = function() {
        var n = preactHooks.useState(0),
            i = n[0],
            t = n[1];
        return function() { return t(function(n) { return ++n }) }
    };
    t.useAudio = function(n) {
        var s = preactHooks.useState(n),
            f = s[0],
            l = s[1],
            h = preactHooks.useState(!1),
            e = h[0],
            r = h[1],
            c = preactHooks.useState(null),
            t = c[0],
            u = c[1],
            o = function() {
                u(null);
                r(!1);
                i.logDataEvent("speech", "audio", "end")
            },
            a = function() { i.logDataEvent("speech", "audio", "onPlay") },
            v = function() { i.logDataEvent("speech", "audio", "onPlaying") },
            y = function() {
                i.logDataEvent("speech", "audio", "onError");
                o()
            },
            p = function() {
                i.logDataEvent("speech", "audio", "onEnded");
                o()
            },
            w = function() {
                i.logDataEvent("speech", "audio", "onPause");
                o()
            };
        return preactHooks.useEffect(function() { f ? u(new Audio(f)) : r(!1) }, [f]), preactHooks.useEffect(function() { t && (t.onpause = w, t.onended = p, t.onerror = y, t.onplay = a, t.onplaying = v, r(!0)) }, [t]), preactHooks.useEffect(function() {
            if (t)
                if (e) {
                    var n = t.play();
                    n !== undefined ? n.catch(function() {
                        u(null);
                        r(!1)
                    }) : typeof i.logDataEvent != "undefined" && i.logDataEvent("speech", "audio", "noPlayPromise")
                } else t && (t.pause(), u(null))
        }, [e]), [e, l]
    };
    t.useGraphQl = function(n, i, r) { var u = { query: i, variables: r }; return t.useFetch(n, "json", null, JSON.stringify(u)) }
});
define("Components/Core/MediaPreact_noscrollbar", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.MediaContainer = void 0;
    t.MediaContainer = function() {
        var t = preactHooks.useContext(i.ModelContext),
            n = t.model,
            h = t.backgroundOpacity,
            c = n.CurrentIndex,
            l = n.MediaContents,
            a = n.ImageCropSize,
            v = n.IsMobile,
            y = l[c].ImageContent,
            p = "url(" + y.Image.Url.replace("1920x1080", a) + ")",
            s = { backgroundImage: p, opacity: h };
        return v ? preact.h("div", { className: "img_cont", style: r.useClientSideRender() ? s : null }, preact.h(o, null), preact.h(f, null), preact.h(e, null), preact.h(u, null)) : preact.h("div", { className: "img_cont", style: s }, preact.h(o, null), preact.h(f, null), preact.h(e, null), preact.h(u, null))
    };
    var u = function() { return preact.h("div", { className: "shaders" }, preact.h("div", { className: "topLeft" }), preact.h("div", { className: "topRight" }), preact.h("div", { className: "bottom" })) },
        f = function() {
            var f = preactHooks.useContext(i.ModelContext),
                e = f.model,
                o = f.clientSettings,
                u = o.Ap,
                l = o.Mute,
                s = preactHooks.useState("none"),
                a = s[0],
                h = s[1],
                t = preactHooks.useRef(null),
                v = e.CurrentIndex,
                y = e.MediaContents,
                n = y[v].VideoContent;
            if (r.useClientSideRender() && n && n.Enabled && n.Url && n.Url != "") {
                var c = n.Url,
                    p = n.HasAudio,
                    w = n.Loop;
                return preactHooks.useEffect(function() { t.current ? (t.current.addEventListener("canplaythrough", function() { h("block") }), u ? t.current.play() : t.current.pause()) : h("none") }, [c, u]), preact.h("video", { className: "bg_video", src: c, ref: t, autoPlay: u, muted: !p || l, playsInline: !0, loop: w, style: { display: a } })
            }
        },
        e = function() {
            var f = preactHooks.useContext(i.ModelContext),
                e = f.model,
                h = f.clientSettings,
                t = h.Mute,
                u = preactHooks.useRef(null),
                c = e.CurrentIndex,
                l = e.MediaContents,
                n = l[c].AudioContent,
                o, s;
            if (r.useClientSideRender() && n && n.Enabled && n.Url && n.Url != "") return o = n.Url, s = n.Loop, preactHooks.useEffect(function() { t ? u.current.pause() : u.current.play() }, [t]), preact.h("audio", { className: "bg_audio", src: o, ref: u, autoPlay: !t, playsInline: !0, loop: s, style: { display: "block" } })
        },
        o = function() {
            var e = function(n) {
                    var t = 3840,
                        i = 2160;
                    return n = n.replace(/w\=\d+/gi, "w=" + t).replace(/h\=\d+/gi, "h=" + i).replace(/1920x1080/gi, "UHD"), n.search("&w=") < 0 && (n += "&w=" + t), n.search("&h=") < 0 && (n += "&h=" + i), n + "&c=8&rs=1&o=3&r=0"
                },
                f;
            if (r.useClientSideRender() && typeof devicePixelRatio != "undefined" && devicePixelRatio >= 1.5) {
                var t = preactHooks.useContext(i.ModelContext).model,
                    o = t.CurrentIndex,
                    s = t.MediaContents,
                    h = t.IsMobile,
                    u = s[o],
                    c = u.ImageContent,
                    n = u.VideoContent,
                    l = n && n.Enabled && n.Url && n.Url != "";
                return l || h ? void 0 : (f = "url(" + e(c.Image.Url) + ")", preact.h("div", { className: "img_uhd", style: { backgroundImage: f, opacity: 1 } }))
            }
        }
});
define("Components/Core/UtilsPreact", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.FormatWorkString = t.formatString = void 0;
    t.formatString = function(n) { for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r]; for (t = 0; t < (i === null || i === void 0 ? void 0 : i.length); t++) n = (n === null || n === void 0 ? void 0 : n.indexOf("{" + t + "}")) >= 0 ? n === null || n === void 0 ? void 0 : n.replace("{" + t + "}", i[t]) : n; return n };
    t.FormatWorkString = function(n, i) {
        var r, u, f = n.LocStrings,
            e = n.IsEdu,
            o = e ? (r = f.LOC_MODULES_BINGATWORK_SCHOOL_TITLE) === null || r === void 0 ? void 0 : r.toLocaleLowerCase() : (u = f.LOC_MODULES_BINGATWORK_TITLE) === null || u === void 0 ? void 0 : u.toLocaleLowerCase();
        return t.formatString(i, o)
    }
});
define("Components/Core/MuseumCard/TriviaPreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "InstrumentPreact", "Components/Core/UtilsPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Trivia = void 0;
    t.Trivia = function() {
        var t = preactHooks.useContext(i.ModelContext).model,
            e = t.IsMobile,
            o = t.CurrentIndex,
            s = t.MediaContents,
            h = t.LocStrings,
            c = s[o].ImageContent,
            l = c.TriviaId,
            n;
        if (!e && (n = r.useFetch("/hp/api/v1/trivia?format=json&id=" + l), n && n.data)) return preact.h("div", { className: "hp_trivia_outer show" }, preact.h("div", { className: "hp_trivia_inner", "data-iid": "Trivia" }, preact.h("div", { className: "trivia", tabIndex: 0 }, preact.h("div", { className: "title" }, preact.h("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRElEQVRYCb2XXUtUQRjH3dANJQUhZaOLCoK0IO+CLiKjNQL7FCoGQQSRQkhvFFEXSULd1OfoqsKtLLqriz5AUdobvZBa+FKn3/+ceXb3bOd4zu62/uHnzJmZ5+XMzpkZM00p5XneRoYegmOwF7Y4PMr38AFewD0oZDKZZcr6ReAc3IIFSKt5Bk5Bd1IGmbgBGGfpuwinoA0kvdU0FGAW9ObyodnYCpqhgyBbaQEm4QozsqKGVCK43voZmN5QGYJNSQ4Y0wGj8A5Mj6l0Jdn6/QzsAzNepj4O+v2rEjatMAErIL2GPWs6YYDe3IJ/pq7prEv4OAxfQVIS0euCjizYtCv4zroilxnjqwcsiSfUbY2URtF4FSRNe91vXvIc1PA5AKsgnQv106CpX1QPGg91/scHfJ/3I3jeD8rST8HDbdeh1V71gkubI77bYM7FmvLtFBBskxlK66zWccQ64RL4QtncxJ+jrmGJMvE7rzWw2RGjE+zTzG+gQ3u7NM1upZ2roSLGNwLMuCCDSqDPPRRcuR6FxdqlBHIuovb29ZLF2qEEdJBIOljWSxYrpwQ8FzX2ZGxgVotKwLKxmWhgvKJr24TmlYBuMpLO87rFJ9abwsk2N2ZWCbx0D7pM1CWCn8TBK8rhBEf9rv+pNqIjIOkQ6kgwjO3Gthd+g/QHIpOgvR206Ul5JZAF3eGk0dgIKTqwHwYFlyKToP203+t5HymDc4eKLpCSLiOtKWLFDsE+Ngn69LJvQbpQdMJDN9gsTBQ7aqzgKzIJ2q+D9BPsSwii0HBJPUgHRb7G2EUzfFQmcZM2WyO6aYdFZws8AknXp57wiOqf8FGehPxK9yF606OjC3RxlJTEQPVhwxb40JuXayw8ouKJkbvBktAdTtco+8ekYnT8IzZacNfApp2qL30dI/GW9DBgMxT84cGfOQrdZDrXNAxs9Z3rU7PVTtV7CGNQ/on6SUT/FoGjFoqzcAbaQVoFXSYKoCNV54gOM63o7dAP+8Gu3b+o6wY8yUVEiWhzuguKK7vkfQcjzcYN+A5ppfVzGf75d4y2EbCZuBM7A2QXEkbNNByAQdAtSqenLjPy8Ql0qD2HBzDDGy9RRkpJ0LEPjv8FY4TA6cLS3Z0AAAAASUVORK5CYII=", role: "presentation" }), preact.h("span", null, "Bing homepage quiz")), preact.h("div", { className: "question" }, n.data.question), preact.h("ul", { className: "options" }, n.data.options.map(function(n) { return preact.h("li", { className: "option" }, preact.h(u.InstLinkClient, { href: n.url, nodeName: "tr_hidden", parentNodeName: "MediaControls", "aria-label": f.formatString(h.LOC_HOMEPAGE_TRIVIA_ANSWER_ARIALABEL, n.bullet, n.text) }, preact.h("span", { className: "bullet" }, n.bullet), preact.h("span", { className: "answer" }, n.text))) })))))
    }
});
define("Components/Core/CNModules/ShareDialogOptionsPreact_cn", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ShareIconSvg = t.DialogOptions = t.ShareOptions = void 0;
    t.ShareOptions = function(n, t, i, r, u, f, e) {
        var o = { eType: 0, url: n !== null && n !== void 0 ? n : "", width: 1920, height: 1080 },
            s = { mkt: "zh-cn", ssd: t, sbin: "museum" },
            c = window.location.protocol + "//" + window.location.hostname,
            h = o.url.length > 0 && o.url[0] == "/" ? c + o.url : o.url;
        return { customShareUrl: "https://www.bing.com/", urlParameters: r ? __assign(__assign({}, s), r) : s, title: u ? u : "", description: f ? f : "", shareHashKey: "n/a", twitter: { text: e ? e : "Check out today's homepage on Bing" }, weibo: { image: h }, qzone: { image: h }, shareElements: [o] }
    };
    t.DialogOptions = function(n, t, i) { var r = { Weibo: "SHDLWE", Qzone: "SHDLQZ", Skype: "HPSHSK" }; return { invokeShare: n, service: "Homepage", scenario: "Sharing", sharemethods: t ? ["Weibo", "Qzone", "Skype", "Sms", "Email", "GetUrl"] : ["Weibo", "Qzone", "Skype"], formcodes: i ? __assign(__assign({}, r), i) : r } };
    t.ShareIconSvg = function(n) { var t = n.network; return t == "wb" ? preact.h(r, null) : t == "qz" ? preact.h(i, null) : t == "skype" ? preact.h(u, null) : void 0 };
    var i = function() { return preact.h("svg", { viewBox: "0 0 32 32", "class": "shareicon", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M15.784,1.499c-0.155,0.063-0.592,0.527-0.592,0.632c0,0.035-0.682,1.483-1.518,3.213c-0.836,1.729-1.554,3.239-1.595,3.359c-0.035,0.111-0.099,0.247-0.126,0.289c-0.035,0.042-0.232,0.421-0.441,0.844c-0.226,0.465-0.465,0.85-0.599,0.956c-0.323,0.274-0.104,0.246-6.579,0.97c-2.924,0.33-3.248,0.379-3.423,0.541c-0.126,0.112-0.177,0.521-0.084,0.76c0.028,0.062,1.286,1.259,2.797,2.656c4.779,4.414,4.47,4.104,4.47,4.436c0,0.162-0.098,0.744-0.211,1.308C7.765,22.023,7.498,23.43,7.28,24.59c-0.219,1.159-0.471,2.488-0.562,2.951c-0.484,2.475-0.492,2.545-0.238,2.812c0.238,0.252,0.513,0.225,1.236-0.142c0.674-0.345,0.738-0.38,2.066-1.159c0.484-0.281,1.117-0.646,1.406-0.81c0.289-0.161,0.822-0.478,1.181-0.695s0.668-0.394,0.688-0.394c0.015,0,0.232-0.127,0.478-0.282c0.246-0.153,0.471-0.28,0.5-0.28c0.028,0,0.282-0.141,0.562-0.314c0.668-0.415,1.244-0.626,1.574-0.562c0.141,0.028,0.479,0.162,0.745,0.311c0.703,0.371,5.132,2.924,6.509,3.746c1.174,0.701,1.52,0.836,1.92,0.729c0.266-0.063,0.344-0.45,0.252-1.216c-0.041-0.346-0.104-0.73-0.141-0.865c-0.057-0.225-0.288-1.469-0.852-4.59c-0.26-1.482-0.26-1.512,0.324-1.729c0.809-0.304,1.188-0.569,1.041-0.719c-0.051-0.05-0.5,0.008-1.435,0.176c-1.735,0.316-2.095,0.365-3.929,0.535c-2.088,0.196-4.014,0.238-6.588,0.147c-2.01-0.07-4.398-0.247-4.533-0.33C9.38,21.84,9.429,21.622,9.591,21.48c0.084-0.076,1.152-0.844,2.368-1.707c3.81-2.698,6.284-4.483,6.488-4.674c0.351-0.33,0.323-0.345-1.14-0.535c-2.312-0.295-2.916-0.344-6.685-0.521c-1.258-0.056-2.397-0.127-2.53-0.147c-1.377-0.231,5.645-0.864,8.61-0.772c1.946,0.056,4.239,0.218,5.588,0.394c1.259,0.168,1.336,0.184,1.336,0.324c0,0.112-0.134,0.211-3.093,2.249c-1.217,0.845-2.51,1.736-2.875,1.989c-0.357,0.253-0.73,0.514-0.814,0.568c-0.395,0.268-1.716,1.188-2.08,1.455c-0.232,0.168-0.416,0.351-0.416,0.408c0,0.133,0.344,0.217,1.406,0.344c2.818,0.33,8.062,0.513,8.295,0.281c0.049-0.05,0.041-0.203-0.035-0.526c-0.058-0.246-0.105-0.479-0.105-0.513c0-0.1,1.193-1.295,2.846-2.841c4.364-4.09,4.465-4.188,4.465-4.513c0-0.281-0.232-0.534-0.578-0.618c-0.168-0.042-1.174-0.155-2.234-0.26c-1.062-0.099-2.235-0.211-2.602-0.246c-0.365-0.042-1.139-0.12-1.722-0.183c-2.228-0.226-2.91-0.311-3.071-0.387c-0.31-0.141-0.598-0.717-2.728-5.511c-1.519-3.43-1.651-3.705-1.863-3.894C16.247,1.486,15.974,1.423,15.784,1.499L15.784,1.499z" })) },
        r = function() { return preact.h("svg", { viewBox: "0 0 32 32", "class": "shareicon", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M30.769,14.215v0.005c-0.197,0.61-0.853,0.945-1.461,0.747c-0.611-0.197-0.945-0.854-0.748-1.465l0,0l-0.002-0.001c0.607-1.88,0.223-4.024-1.191-5.597c-1.414-1.573-3.502-2.176-5.43-1.765c-0.628,0.134-1.244-0.268-1.379-0.896c-0.134-0.629,0.266-1.247,0.895-1.381c2.711-0.58,5.647,0.265,7.64,2.479C31.081,8.555,31.618,11.57,30.769,14.215z" }), preact.h("path", { d: "M22.728,9.863L22.728,9.863c-0.537,0.117-1.068-0.229-1.184-0.77c-0.117-0.541,0.229-1.074,0.768-1.189c1.321-0.281,2.754,0.129,3.721,1.207c0.973,1.078,1.23,2.547,0.816,3.834c-0.17,0.526-0.732,0.815-1.258,0.646c-0.525-0.17-0.812-0.736-0.643-1.262h-0.002c0.203-0.631,0.076-1.35-0.397-1.876C24.075,9.927,23.374,9.729,22.728,9.863zM23.616,15.545c-0.428-0.128-0.721-0.216-0.496-0.779c0.482-1.221,0.533-2.275,0.009-3.025c-0.983-1.411-3.679-1.334-6.763-0.039c0,0-0.969,0.426-0.723-0.346c0.475-1.529,0.403-2.812-0.335-3.552c-1.675-1.681-6.127,0.063-9.944,3.892c-2.86,2.867-4.521,5.906-4.521,8.535c0,5.027,6.43,8.084,12.719,8.084c8.243,0,13.729-4.803,13.729-8.617C27.291,17.395,25.354,16.085,23.616,15.545L23.616,15.545z M13.577,26.513c-5.019,0.498-9.35-1.776-9.676-5.083c-0.328-3.302,3.479-6.385,8.496-6.882c5.021-0.498,9.352,1.778,9.678,5.081C22.401,22.936,18.597,26.015,13.577,26.513z" }), preact.h("path", { d: "M14.079,17.091c-2.389-0.623-5.088,0.57-6.125,2.681c-1.057,2.152-0.035,4.541,2.378,5.322c2.5,0.809,5.444-0.43,6.47-2.754C17.812,20.07,16.551,17.732,14.079,17.091z M12.256,22.587c-0.485,0.776-1.524,1.117-2.308,0.758c-0.771-0.353-1-1.254-0.515-2.011c0.479-0.755,1.483-1.09,2.261-0.764C12.481,20.906,12.731,21.802,12.256,22.587z" })) },
        u = function() { return preact.h("svg", { viewBox: "0 0 32 32", "class": "shareicon", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M30.9 18.96c.2-.96.3-1.95.3-2.96C31.2 7.6 24.4.8 16 .8c-1 0-2 .1-2.96.3C11.8.4 10.34 0 8.8 0 3.94 0 0 3.94 0 8.8c0 1.54.4 3 1.1 4.24C.9 14 .8 15 .8 16c0 8.4 6.8 15.2 15.2 15.2 1 0 2-.1 2.96-.3 1.25.7 2.7 1.1 4.24 1.1 4.86 0 8.8-3.94 8.8-8.8 0-1.54-.4-2.98-1.1-4.24zm-7.48 2.72c-.2.57-.5 1.07-.85 1.5s-.78.8-1.27 1.12-1.02.56-1.6.75-1.15.34-1.78.43-1.24.15-1.86.15c-.62 0-1.27-.05-1.96-.15s-1.34-.25-1.98-.46-1.24-.5-1.8-.88-1.04-.82-1.4-1.37c-.2-.28-.35-.56-.47-.87s-.18-.63-.18-.96c0-.53.18-.96.54-1.27s.8-.47 1.3-.47c.4 0 .7.1.94.25s.47.38.67.64l.64.8s.48.6.8.84.7.47 1.17.63 1.05.25 1.76.25c.37 0 .75-.04 1.16-.14s.78-.26 1.13-.46.62-.48.85-.8.33-.7.33-1.13c0-.3-.05-.53-.15-.74s-.24-.4-.42-.55-.37-.27-.6-.38-.46-.2-.7-.25l-2.38-.6-2.37-.6c-.68-.18-1.3-.4-1.86-.67s-1.03-.6-1.42-1-.7-.87-.9-1.43-.3-1.2-.3-1.95c0-1.03.2-1.9.64-2.6s1-1.27 1.7-1.7 1.47-.76 2.35-.96 1.76-.3 2.63-.3c.38 0 .82.05 1.32.12s1.03.2 1.56.34 1.06.34 1.58.58.98.5 1.38.82.74.67 1 1.07.36.83.36 1.32c0 .27-.05.5-.15.7s-.25.4-.43.52-.38.24-.6.3-.47.1-.72.1c-.33 0-.6-.06-.82-.2s-.42-.3-.6-.5l-.62-.66s-.48-.45-.78-.65-.68-.38-1.12-.5-.98-.2-1.63-.2c-.35 0-.7.02-1.06.1s-.68.2-.96.36-.5.4-.7.66-.26.63-.26 1.04c0 .45.17.8.5 1.07s.73.5 1.26.66 1.12.32 1.8.44 1.36.27 2.06.43 1.4.37 2.07.6 1.28.6 1.8 1 .96.92 1.28 1.54.48 1.4.48 2.3c0 .73-.1 1.37-.3 1.94z" })) }
});
define("Components/Core/SharingPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/CNModules/ShareDialogOptionsPreact_cn"], function(n, t, i, r, u) {
    "use strict";
    var e;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ShareDialogSvg = t.ShareDialogIcon = t.Share = t.ShareSvg = void 0;
    t.ShareSvg = function(n) {
        var f = n.networkId,
            t = n.networkName,
            e = n.ssd,
            s = n.shareImage,
            h = n.nodeName,
            c = n.parentNodeName,
            l = preactHooks.useContext(i.ModelContext).model,
            a = l.Market;
        return preact.h(r.InstLinkClient, { href: "#", nodeName: h, parentNodeName: c, "aria-label": "Share to " + t, onClick: function() { o(t, s, e, a) } }, preact.h(u.ShareIconSvg, { network: f }))
    };
    t.Share = function(n) {
        var u = n.networkName,
            f = n.shareImage,
            e = n.ssd,
            s = n.customFormCodes,
            h = n.customUrlParams,
            c = n.shareTitle,
            l = n.shareDescription,
            a = n.shareText,
            t = __rest(n, ["networkName", "shareImage", "ssd", "customFormCodes", "customUrlParams", "shareTitle", "shareDescription", "shareText"]),
            v = preactHooks.useContext(i.ModelContext).model,
            y = v.Market;
        return preact.h(r.InstLinkClient, __assign({ href: "#" }, t, { onClick: function() { o(u, f, e, y, s, h, c, l, a) } }), t.children)
    };
    t.ShareDialogIcon = function(n) {
        var o = n.parentName,
            s = n.id,
            u = n.more,
            h = u === void 0 ? !1 : u,
            c = n.children,
            r = preactHooks.useContext(i.ModelContext).model,
            l = r.CurrentIndex,
            a = r.MediaContents,
            v = r.LocStrings,
            f = a[l],
            y = f.ImageContent,
            p = f.Ssd,
            w = y.Image,
            b = w.Url;
        return preact.h(t.Share, { title: v.LOC_HOMEPAGE_SHARE_TOOLTIP, shareImage: b, ssd: p, "aria-label": "Share to more networks", nodeName: s, parentNodeName: o, role: "button", "aria-haspopup": "true" }, h ? preact.h(e, null) : preact.h(t.ShareDialogSvg, null), c)
    };
    e = function() { return preact.h("svg", { "class": "shareicon", viewBox: "0 0 32 32", "enable-background": "new 0 0 32 32", "aria-hidden": "true", role: "presentation" }, preact.h("circle", { cx: "4", cy: "16", r: "3" }), preact.h("circle", { cx: "16", cy: "16", r: "3" }), preact.h("circle", { cx: "28", cy: "16", r: "3" })) };
    t.ShareDialogSvg = function() { return preact.h("svg", { className: "icon", viewBox: "0 0 32 32" }, preact.h("path", { d: "M12.391,17.57c1.187-0.516,2.419-0.906,3.695-1.172C17.361,16.133,18.666,16,20,16v6l11-11L20,0v6 c-1.292,0-2.534,0.167-3.726,0.499c-1.194,0.334-2.308,0.805-3.344,1.414c-1.037,0.61-1.979,1.339-2.828,2.188 c-0.85,0.849-1.579,1.792-2.188,2.828c-0.609,1.037-1.081,2.152-1.414,3.344C6.166,17.467,6,18.709,6,20v2 c0.916-0.947,1.914-1.794,2.993-2.539C10.071,18.716,11.204,18.086,12.391,17.57z M9.18,14.789 c0.422-0.869,0.938-1.677,1.547-2.422c0.609-0.744,1.302-1.408,2.078-1.992c0.775-0.584,1.617-1.063,2.523-1.438 c0.594-0.25,1.157-0.439,1.688-0.57c0.531-0.129,1.06-0.22,1.586-0.273c0.525-0.052,1.064-0.08,1.617-0.086 C20.771,8.003,21.364,8,22,8V4.828L28.172,11L22,17.172V14h-2c-2.104,0-4.151,0.297-6.141,0.89 c-1.99,0.594-3.859,1.475-5.609,2.641C8.448,16.573,8.758,15.659,9.18,14.789z M22,26H2V8H0v20h24v-6l-2,2V26z" })) };
    var f = !1,
        s = function() { return typeof ShareDialog == "undefined" || f || (ShareDialog.bootstrap(), f = !0), f },
        o = function(n, t, r, f, e, o, h, c, l) {
            if (s()) {
                var a = preactHooks.useContext(i.ModelContext).model,
                    v = u.DialogOptions(n, a.IsMobile, e),
                    y = u.ShareOptions(t, r, f, o, h, c, l);
                ShareDialog.show(v, y)
            }
        }
});
define("Components/Core/DownloadWallpaperPreact", ["require", "exports", "InstrumentPreact", "Components/Core/ModelContextPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.DownloadIcon = void 0;
    t.DownloadIcon = function(n) {
        var s = n.parentName,
            f = preactHooks.useContext(r.ModelContext).model,
            y = f.CurrentIndex,
            p = f.MediaContents,
            h = f.LocStrings,
            c = f.IsMobile,
            w = p[y].ImageContent,
            l = w.Image,
            t = l.Downloadable,
            e = l.Wallpaper,
            a = "BingWallpaper.jpg",
            o, v;
        if (t || !c) return o = c && e ? e.replace("1920x1200", "1080x1920_logo") : e, v = s + "download", preact.h(i.InstLink, { className: "downloadLink " + (t ? "" : "disabled"), href: t ? o : "#", download: t ? a : null, nodeName: v, parentNodeName: s, title: t ? h.LOC_HOMEPAGE_WALLPAPERDOWNLOAD_TOOLTIP : h.LOC_HOMEPAGE_WALLPAPERNOTAVAILABLE, tabIndex: t ? 0 : -1, role: "button", onClick: function(n) { t && navigator && navigator.msSaveBlob && (n.preventDefault(), fetch(o, { headers: { responseType: "blob" } }).then(function(n) { return n.blob() }).then(function(n) { navigator.msSaveBlob(n, a) })) } }, preact.h(u, null))
    };
    var u = function() { return preact.h("svg", { className: "downloadIcon", x: "0px", y: "0px", viewBox: "0 0 22 22", "enable-background": "new 0 0 22 22", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M17.842 11.483l-6.671 6.725-6.671-6.725.967-.967 5.017 5.049v-15.565h1.375v15.565l5.017-5.049.966.967zm-12.859 10.517v-1.375h12.375v1.375h-12.375z" })) }
});
define("Components/Core/CNModules/ShareNetworkOptionsPreact_cn", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ShareNetworkOptions = void 0;
    t.ShareNetworkOptions = function() { return [{ networkName: "Weibo", networkId: "wb", nodeName: "sh_wb" }, { networkName: "Qzone", networkId: "qz", nodeName: "sh_qz" }, { networkName: "Skype", networkId: "skype", nodeName: "sh_sk" }] }
});
define("Components/Core/MuseumCard/MuseumCardPreact", ["require", "exports", "InstrumentPreact", "Components/Core/MuseumCard/TriviaPreact", "Components/Core/ModelContextPreact", "Components/Core/SharingPreact", "Components/Core/DownloadWallpaperPreact", "Components/Core/CNModules/ShareNetworkOptionsPreact_cn"], function(n, t, i, r, u, f, e, o) {
    "use strict";
    var v;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.AudioButton = t.MuseumCard = void 0;
    t.MuseumCard = function() {
        return preact.h(i.Region, { nodeName: "MediaControls", parentNodeName: "Core" }, preact.h("div", { className: "mc_caro" }, preact.h(r.Trivia, null), preact.h(i.Region, { nodeName: "MuseumCard", parentNodeName: "MediaControls" }, preact.h("div", {
            className: "musCard",
            onMouseEnter: function() {
                var n = document.querySelector("#vs_hidden");
                Log && Log.Log("Show", "MuseumCard", "Show", !0);
                Log && Log.Log("Click", "MuseumCard", "Show", !0);
                si_T && n && si_T(n.getAttribute("data-h"))
            }
        }, preact.h(y, null), preact.h(k, null)))))
    };
    var y = function() { return preact.h("div", { className: "musCardCont" }, preact.h(w, null), preact.h(p, null)) },
        p = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                t = n.IsMobile;
            return t ? preact.h(preact.Fragment, null, preact.h(s, null), preact.h(h, null), preact.h(a, null), preact.h(c, null), preact.h(l, null)) : preact.h(preact.Fragment, null, preact.h(a, null), preact.h(c, null), preact.h(l, null), preact.h(s, null), preact.h(h, null))
        },
        w = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                t = n.IsMobile,
                i = n.LocStrings;
            if (t) return preact.h("h2", { "class": "screen_reader_text" }, i.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD)
        },
        s = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                f = n.CurrentIndex,
                e = n.MediaContents,
                c = n.IsMobile,
                r = e[f].ImageContent,
                o = r.Title,
                t = r.BackstageUrl,
                s = t && t != "#",
                h = s ? "title" : "title no_link";
            return preact.h(i.InstLink, { className: h, href: t, nodeName: "img_title", parentNodeName: "MuseumCard" }, o)
        },
        h = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                t = n.CurrentIndex,
                i = n.MediaContents,
                r = i[t].ImageContent,
                f = r.Copyright;
            return preact.h("div", null, preact.h("div", { className: "copyright", id: "copyright" }, f), preact.h(b, null))
        },
        b = function() {
            var t = preactHooks.useContext(u.ModelContext).model,
                f = t.CurrentIndex,
                e = t.MediaContents,
                n = e[f].AudioContent,
                i, r;
            if (n && n.Enabled) return i = n.Copyright, r = n.Caption, preact.h("div", null, preact.h("div", { "class": "av_cap" }, r), preact.h("div", { "class": "copyright av_copy" }, i))
        },
        c = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                r = n.IsMobile,
                t = n.LocStrings;
            if (!r && n.IsBingWpAppEnabled) return preact.h(i.InstLink, { className: "bingwpapplink", href: t.LOC_BING_WP_APP_LINK, nodeName: "bingwpapptext", parentNodeName: "MuseumCard", target: "_blank", rel: "noopener", tabIndex: 0 }, preact.h("div", { className: "bingwpapptext" }, t.LOC_BING_WP_APP_LINK_TEXT))
        },
        l = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                t = n.IsMobile;
            if (!t) return preact.h("div", { className: "hr" })
        },
        a = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                s = n.CurrentIndex,
                h = n.MediaContents,
                c = n.IsMobile,
                i = h[s],
                l = i.ImageContent,
                a = i.Ssd,
                v = l.Image,
                y = v.Url,
                r, t;
            if (!n.IsChromeNewTab || n.IsCntShareEnabled) return r = o.ShareNetworkOptions(), t = "MuseumCard", preact.h("ul", { className: "share" }, r.map(function(n) {
                var i = n.networkId,
                    r = n.networkName,
                    u = n.nodeName;
                return preact.h("li", null, preact.h(f.ShareSvg, { networkName: r, networkId: i, shareImage: y, ssd: a, nodeName: u, parentNodeName: t }))
            }), c ? preact.h("li", null, preact.h(f.ShareDialogIcon, { parentName: t, id: "ShareMore", more: !0 })) : null, preact.h("li", null, preact.h(e.DownloadIcon, { parentName: t })))
        },
        k = function() {
            var n = preactHooks.useContext(u.ModelContext).model,
                f = n.IsMobile,
                e = n.CurrentIndex,
                o = n.MediaContents,
                s = n.LocStrings,
                r = o[e].ImageContent,
                h = r.Headline ? r.Headline : s.LOC_HOMEPAGE_INFO_TEXT;
            if (!f) return preact.h("div", { className: "headline" }, preact.h("div", { className: "icon_text" }, preact.h(i.InstLink, { href: r.BackstageUrl, nodeName: "mc_backstage", parentNodeName: "MuseumCard" }, preact.h(d, null), preact.h("h1", { className: "text", id: "headline" }, h))), preact.h(g, null), preact.h(t.AudioButton, null), preact.h(v, null))
        },
        d = function() { return preact.h("div", { className: "icon" }, preact.h("svg", { className: "mappin", height: "16", width: "16", viewBox: "0 0 12 12", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M0 0h12v12h-12z", fill: "none" }), preact.h("path", { d: "M6.5 3a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0-3a4.5 4.5 0 0 0-4.5 4.5 5.607 5.607 0 0 0 .087.873c.453 2.892 2.951 5.579 3.706 6.334a1 1 0 0 0 1.414 0c.755-.755 3.253-3.442 3.706-6.334a5.549 5.549 0 0 0 .087-.873 4.5 4.5 0 0 0-4.5-4.5zm3.425 5.218c-.36 2.296-2.293 4.65-3.425 5.782-1.131-1.132-3.065-3.486-3.425-5.782a4.694 4.694 0 0 1-.075-.718 3.5 3.5 0 0 1 7 0 4.634 4.634 0 0 1-.075.718z" }))) },
        g = function() {
            var n = preactHooks.useContext(u.ModelContext),
                t = n.model,
                r = n.clientSettings,
                o = n.updateClientSettings,
                s = t.CurrentIndex,
                h = t.MediaContents,
                f = h[s].VideoContent,
                e = r.Ap;
            if (f && f.Enabled) return preact.h("span", null, preact.h(i.InstLink, { href: "#", id: "video_ctrl", className: "media " + (e ? "on" : ""), nodeName: "video_ctrl", parentNodeName: "MuseumCard", onClick: function() { o(__assign(__assign({}, r), { Ap: !e })) }, role: "button" }, preact.h("svg", { className: "video", viewBox: "0 0 16 16", height: "16", width: "16", "aria-hidden": "true", role: "presentation" }, preact.h("path", { className: "off", d: "M12.682,7.388L4.176,1.436C4.042,1.343,3.894,1.3,3.75,1.3C3.362,1.3,3,1.609,3,2.049V13.95c0,0.442,0.362,0.75,0.75,0.75 c0.145,0,0.292-0.043,0.427-0.136l8.505-5.952C13.106,8.314,13.106,7.686,12.682,7.388z M4.246,12.994V3.006L11.384,8 C11.384,8,4.246,12.994,4.246,12.994z" }), preact.h("path", { className: "on", d: "M10.625,2C10.28,2,10,2.28,10,2.625v10.75C10,13.72,10.28,14,10.625,14s0.625-0.28,0.625-0.625V2.625 C11.25,2.28,10.97,2,10.625,2z M5.375,2C5.03,2,4.75,2.28,4.75,2.625v10.75C4.75,13.72,5.03,14,5.375,14S6,13.72,6,13.375V2.625 C6,2.28,5.72,2,5.375,2z" }))))
        };
    t.AudioButton = function() {
        var n = preactHooks.useContext(u.ModelContext),
            r = n.model,
            f = n.clientSettings,
            h = n.updateClientSettings,
            c = r.CurrentIndex,
            l = r.MediaContents,
            e = l[c],
            o = e.AudioContent,
            t = e.VideoContent,
            s = f.Mute;
        if (o && o.Enabled || t && t.Enabled && t.HasAudio) return preact.h("span", null, preact.h(i.InstLink, { href: "#", id: "audio_ctrl", className: "media " + (s ? "" : "on"), nodeName: "video_ctrl", parentNodeName: "MuseumCard", onClick: function() { h(__assign(__assign({}, f), { Mute: !s })) }, role: "button" }, preact.h("svg", { "class": "audio", viewBox: "0 0 16 16", height: "16", width: "16", "aria-hidden": "true", role: "presentation" }, preact.h("path", { d: "M5.624,1.815c-0.107,0-0.202,0.046-0.271,0.119L2.404,4.878C2.336,4.95,2.24,4.997,2.133,4.997H0.5 c-0.276,0-0.5,0.224-0.5,0.5v5c0,0.276,0.224,0.5,0.5,0.5h1.633c0.102,0,0.195,0.041,0.262,0.108l2.961,2.958 c0.069,0.069,0.164,0.113,0.268,0.113C5.832,14.176,6,14.008,6,13.8V2.191C6,1.983,5.832,1.815,5.624,1.815z M5,12.293l-1.903-1.901 c-0.259-0.255-0.602-0.395-0.964-0.395H1v-4h1.133c0.375,0,0.739-0.158,0.978-0.412L5,3.699C5,3.699,5,12.293,5,12.293z" }), preact.h("path", { "class": "on", d: "M9.096,5.475c-0.069-0.08-0.167-0.132-0.28-0.132c-0.098,0-0.185,0.039-0.251,0.1L8.194,5.811 c-0.068,0.067-0.11,0.16-0.11,0.264c0,0.085,0.033,0.168,0.081,0.231C8.531,6.773,8.75,7.362,8.75,8.001 c0,0.612-0.202,1.177-0.541,1.635L8.207,9.64C8.13,9.709,8.083,9.815,8.083,9.927c0,0.089,0.036,0.168,0.087,0.233l0.406,0.407 c0.065,0.056,0.147,0.093,0.24,0.093c0.133,0,0.254-0.072,0.32-0.176l0.017-0.021C9.684,9.785,10,8.93,10,8.001 c0-0.957-0.336-1.835-0.896-2.523L9.096,5.475z M13.336,1.214L13.336,1.214c-0.07-0.072-0.165-0.119-0.273-0.119 c-0.103,0-0.194,0.042-0.261,0.11l-0.003-0.002l-0.368,0.366l0.003,0.002c-0.063,0.067-0.102,0.156-0.102,0.256 c0,0.096,0.039,0.182,0.098,0.249l-0.001,0.005c1.435,1.559,2.313,3.639,2.313,5.92c0,2.273-0.872,4.346-2.299,5.903l-0.014,0.016 l-0.002,0.004v0.001c-0.06,0.067-0.099,0.152-0.099,0.248c0,0.101,0.04,0.191,0.104,0.257l-0.001,0.002l0.362,0.361l0.003-0.001 c0.067,0.069,0.16,0.114,0.265,0.114c0.109,0,0.204-0.047,0.273-0.12l0.005-0.001c1.646-1.783,2.653-4.165,2.653-6.784 C15.992,5.38,14.984,2.996,13.336,1.214z M11.222,3.339H11.22c-0.069-0.075-0.165-0.125-0.276-0.125 c-0.098,0-0.187,0.039-0.254,0.102l-0.003-0.002l-0.374,0.374l0.002,0.003c-0.063,0.066-0.102,0.156-0.102,0.255 c0,0.088,0.035,0.165,0.085,0.229l0.001,0.011C11.201,5.201,11.75,6.539,11.75,8c0,1.458-0.545,2.792-1.443,3.806l0.001,0.003 c-0.059,0.066-0.097,0.15-0.097,0.245c0,0.101,0.039,0.19,0.103,0.257l-0.002,0.002l0.367,0.366l0.002-0.003 c0.067,0.069,0.159,0.112,0.262,0.112c0.113,0,0.21-0.052,0.28-0.13h0.003C12.329,11.42,13,9.789,13,8 C13,6.209,12.328,4.576,11.222,3.339z" }), preact.h("path", { "class": "off", d: "M15.845,10.908L12.938,8l2.907-2.907c0.206-0.207,0.206-0.543,0-0.75l-0.188-0.188 c-0.207-0.207-0.543-0.207-0.751,0L12,7.062L9.093,4.156c-0.208-0.208-0.543-0.208-0.75,0L8.155,4.344 c-0.207,0.207-0.207,0.542,0,0.75L11.062,8l-2.907,2.907c-0.207,0.207-0.207,0.543,0,0.75l0.188,0.188 c0.207,0.207,0.542,0.207,0.75,0L12,8.937l2.907,2.908c0.208,0.207,0.543,0.207,0.75,0l0.188-0.188 C16.052,11.451,16.052,11.114,15.845,10.908z" }))))
    };
    v = function() {
        var r = preactHooks.useContext(u.ModelContext),
            n = r.model,
            f = r.updateModel,
            s = n.MediaContents,
            t = n.CurrentIndex,
            e = n.LocStrings,
            o = s.length - 1;
        return preact.h("div", { className: "nav" }, preact.h(i.InstLink, { href: "#", nodeName: "left_nav", parentNodeName: "MuseumCard", id: "leftNav", className: "leftNav " + (t >= o ? "disabled" : ""), onClick: function() { f(__assign(__assign({}, n), { CurrentIndex: Math.max(0, t + 1) })) }, role: "button", "aria-label": e.LOC_HOMEPAGE_ARCHIVE_PREV }), preact.h(i.InstLink, { href: "#", nodeName: "right_nav", parentNodeName: "MuseumCard", id: "rightNav", className: "rightNav " + (t <= 0 ? "disabled" : ""), onClick: function() { f(__assign(__assign({}, n), { CurrentIndex: Math.min(o, t - 1) })) }, role: "button", "aria-label": e.LOC_HOMEPAGE_ARCHIVE_NEXT }))
    }
});
define("Components/Core/Modules/ImageGalleryPreact", ["require", "exports", "InstrumentPreact", "Components/Core/ModelContextPreact", "Components/Core/UtilsPreact", "Components/Core/HooksPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ImageGallery = void 0;
    var e;
    (function(n) {
        n.ImageGallery = function() {
            var i = preactHooks.useContext(r.ModelContext).model,
                o = i.IsMobile,
                s = i.CurrentIndex,
                h = i.MediaContents,
                c = i.LocStrings,
                u = h[s].Ssd,
                e = preactHooks.useState(u),
                l = e[0],
                a = e[1],
                n;
            return a(u), !o && (n = f.useFetch("/hp/api/v1/imagegallery?format=json&ssd=" + l), n && n.data) ? preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule", id: "vert_images" }, preact.h("h2", { className: "vs_title" }, c.LOC_HOMEPAGE_GALLERY_CARD_TITLE), preact.h("div", { className: "gallery" }, preact.h("div", { className: "hero" }, preact.h(t, { image: n.data.images[0], isHero: !0 })), preact.h("ul", { className: "other" }, n.data.images.slice(1).map(function(n) { return preact.h("li", { className: "item" }, preact.h(t, { image: n, isHero: !1 })) }))))) : void 0
        };
        var t = function(n) {
            var f = n.image,
                l = n.isHero,
                o = preactHooks.useContext(r.ModelContext).model,
                a = o.ClientSettings,
                v = o.LocStrings,
                s = f.imageUrls,
                y = f.clickUrl,
                h = f.date,
                p = l ? "720" : "360",
                e, t, c;
            if (a && s && (e = s.landscape, e)) return t = e.highDef, c = u.formatString(v.LOC_HOMEPAGE_VERTICAL_SCROLL_GALLERY_IMAGE_ARIALABEL, h), preact.h(i.InstLinkClient, { className: "img", href: y, nodeName: "vs_hidden", loggingData: ["name", "image_gallery"] }, preact.h("img", { src: "" + t + ((t === null || t === void 0 ? void 0 : t.indexOf("?")) > -1 ? "&" : "?") + "w=" + p, alt: "" + c }), preact.h("div", { className: "info" }, h))
        }
    })(e = t.ImageGallery || (t.ImageGallery = {}))
});
define("Components/Core/Modules/ImageOfDayPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/SharingPreact", "Components/Core/DownloadWallpaperPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ImageOfDay = void 0;
    var e;
    (function(n) {
        n.ImageOfDay = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                r = n.IsMobile,
                u = n.LocStrings;
            if (!r) return preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule vert_iotd", id: "vert_iotd" }, preact.h("h2", { className: "vs_title" }, u.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD), preact.h("div", { className: "vs_iotd" }, preact.h("div", { className: "vs_row" }, preact.h(t, null), preact.h(e, null), preact.h(o, null)))))
        };
        var t = function() {
                var n = preactHooks.useContext(i.ModelContext).model,
                    u = n.CurrentIndex,
                    f = n.MediaContents,
                    e = n.LocStrings,
                    t = f[u].ImageContent,
                    o = t.BackstageUrl;
                return preact.h(r.InstLinkClient, { className: "vs_rowitem vs_iotd_img", href: o, nodeName: "vs_hidden", parentNodeName: "HPVSModules" }, preact.h("div", { className: "img", style: { backgroundImage: "url(" + t.Image.Url + ")" }, role: "img", "aria-labelledby": "iotd_title", alt: e.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD }))
            },
            e = function() {
                var t = preactHooks.useContext(i.ModelContext).model,
                    u = t.CurrentIndex,
                    f = t.MediaContents,
                    e = t.LocStrings,
                    n = f[u].ImageContent;
                return preact.h("div", { className: "vs_rowitem vs_iotd_bs" }, preact.h("h3", { className: "vs_bs_title", id: "iotd_title" }, n.Headline), preact.h("div", { className: "vs_bs_credit" }, n.Copyright), preact.h("div", { className: "vs_bs_desc" }, preact.h("span", { className: "text", id: "iotd_desc" }, n.Description)), preact.h(r.InstLink, { href: n.BackstageUrl, className: "learn_more", nodeName: "iotd_learnmore", parentNodeName: "HPVSModules" }, e.LOC_HOMEPAGE_VERTICAL_SCROLL_IOTD_LEARN_MORE), preact.h(l, null))
            },
            o = function() {
                var e = preactHooks.useContext(i.ModelContext).model,
                    v = e.CurrentIndex,
                    y = e.MediaContents,
                    f = y[v].ImageContent,
                    n = f.QuickFact,
                    r = f.MapLink,
                    t = f.SocialGood,
                    u = null,
                    l, a;
                if (n && n.MainText) {
                    var o = n.MainText,
                        p = n.LinkText,
                        w = n.LinkUrl;
                    u = preact.h(s, { text: o, linkText: p, linkUrl: w })
                } else if (r && r.Url) l = r.Link, a = r.Url, u = preact.h(h, { link: l, url: a });
                else if (t && t.MainText) {
                    var o = t.MainText,
                        b = t.ButtonUrl,
                        k = t.IsDonate;
                    u = preact.h(c, { text: o, url: b, hasButton: k })
                }
                return preact.h("div", { className: "vs_rowitem vs_iotd_mod" }, u)
            },
            s = function(n) {
                var f = n.text,
                    t = n.linkText,
                    u = n.linkUrl,
                    e = preactHooks.useContext(i.ModelContext).model,
                    o = e.LocStrings;
                return preact.h("div", { className: "p1" }, preact.h("h3", { className: "p1t" }, o.LOC_HOMEPAGE_VERTICAL_SCROLL_FACT), preact.h("div", { className: "p1mt" }, f), t && u ? preact.h(r.InstLinkClient, { href: u, className: "p1qf show", nodeName: "vs_hidden", parentNodeName: "HPVSModules" }, t) : null)
            },
            h = function(n) {
                var t = n.link,
                    i = n.url,
                    u = { backgroundSize: "cover", height: "100%", width: "100%", backgroundImage: 'url("' + i + '")' };
                return preact.h(r.InstLink, { href: t, style: u, className: "map", target: "_blank", nodeName: "iotd_map", parentNodeName: "HPVSModules" })
            },
            c = function(n) {
                var u = n.text,
                    f = n.url,
                    e = n.hasButton,
                    o = preactHooks.useContext(i.ModelContext).model,
                    t = o.LocStrings;
                return preact.h("div", { className: "p1" }, preact.h("span", { className: "p1t sg show" }, t.LOC_HOMEPAGE_VERTICAL_SCROLL_GET_INVOLVED), preact.h("span", { className: "p1mt" }, u), e ? preact.h(r.InstLinkClient, { href: f, className: "p1l", nodeName: "vs_hidden", parentNodeName: "HPVSModules" }, t.LOC_HOMEPAGE_HOLIDAY_BTN_DONATE) : null)
            },
            l = function() { return preact.h("div", { className: "vs_bs_controls" }, preact.h("ul", null, preact.h("li", { className: "item share" }, preact.h(u.ShareDialogIcon, { parentName: "HPVSModules", id: "iotd_share" })), preact.h("li", { className: "item download" }, preact.h(f.DownloadIcon, { parentName: "HPVSModules" })))) }
    })(e = t.ImageOfDay || (t.ImageOfDay = {}))
});
define("Components/Core/Modules/MakeDefaultPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.MakeBingDefault = void 0;
    var u;
    (function(n) {
        n.MakeBingDefault = function() {
            var t = preactHooks.useContext(i.ModelContext).model,
                u = t.IsMobile,
                n = t.LocStrings;
            if (!u) return preact.h("div", { className: "vert_make_default", id: "vs_default" }, preact.h(r.InstLink, { href: "/set/homepage?PUBL=BINGCOM", nodeName: "make_default", parentNodeName: "HPVSModules" }, preact.h("div", { className: "button" }, n.LOC_HOMEPAGE_SETDEFAULTHPLINK)), preact.h("div", { className: "text" }, preact.h("h1", { className: "title" }, n.LOC_HOMEPAGE_SETDEFAULTHPLINK_DESC_TITLE), preact.h("div", { className: "desc" }, n.LOC_HOMEPAGE_SETDEFAULTHPLINK_DESC_TEXT)))
        }
    })(u = t.MakeBingDefault || (t.MakeBingDefault = {}))
});
define("Components/Core/CNModules/VerticalScrollModulesPreact_cn", ["require", "exports", "Components/Core/Modules/ImageGalleryPreact", "Components/Core/Modules/ImageOfDayPreact", "Components/Core/Modules/MakeDefaultPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.VerticalScrollModules = void 0;
    t.VerticalScrollModules = function() { return preact.h("div", { className: "moduleCont" }, preact.h(r.ImageOfDay.ImageOfDay, null), preact.h(i.ImageGallery.ImageGallery, null), preact.h(u.MakeBingDefault.MakeBingDefault, null)) }
});
define("Components/Core/Modules/WidgetSharedPeregrineNewsFeed", ["require", "exports", "Components/Core/ModelContextPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.WidgetSharedPeregrineNewsFeed = void 0;
    var r = function(n) {
        function t() { return n !== null && n.apply(this, arguments) || this }
        return __extends(t, n), t.prototype.shouldComponentUpdate = function() { return !1 }, t.prototype.componentDidMount = function() { this.props.widgetModule.startWidgetInitializer() }, t.prototype.render = function() {
            var f = preactHooks.useContext(i.ModelContext).model,
                e = f.Market,
                o = f.TrueMarket,
                n = {},
                r, u, s, t, h;
            return n.appType = "bingHomepage", n.pageType = "widgetfeed", r = e ? e.toLowerCase() : "", u = o ? o.toLowerCase() : "", n.cm = r == "en-ww" || r == "en-id" && u == "id-id" ? u : r, n.pcsAdditionalQsp = "", n.cc = this.props.cookieData, s = JSON.stringify(n), t = {}, t.widgetGroup = "widgetGroup-testpage", t.experienceName = "BingHomepageFeed", t.configRef = t.experienceName + "/default", h = JSON.stringify(t), preact.h("div", { "class": "widget_container", id: "widget_container" }, preact.h("div", { id: "widgetGroup-testpage", "class": "peregrine-widgetgroup", "data-widget": s }), preact.h("div", { "class": "peregrine-widgets", "data-widget": h }))
        }, t
    }(preact.Component);
    t.WidgetSharedPeregrineNewsFeed = r
});
define("Components/Core/HooksPreactImportShim", ["require", "exports", "InstrumentPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.useDynamicModules = void 0;
    t.useDynamicModules = function(n) {
        var u = preactHooks.useState(new Map),
            t = u[0],
            f = u[1],
            r = function(n, t, r) { typeof i.logDataEvent != "undefined" && i.logDataEvent(n, "func", "useDynamicModules", "module", t, "error", r ? r : "") };
        return preactHooks.useEffect(function() {
            var u = [],
                i;
            n.forEach(function(n) {
                t.has(n) || (r("Importing", n), u.push(new Promise(function(t, i) {
                    importShim(n).then(function(i) {
                        r("Imported", n);
                        t([n, i])
                    }).catch(function(t) {
                        r("ImportError", n, t.toString());
                        i([n, t])
                    })
                })))
            });
            i = new Map(t);
            Promise.all(u).then(function(n) {
                n.forEach(function(n) { i.set(n[0], n[1]) });
                f(i)
            }).catch(function(n) {
                i.set("error", "Error importing " + n[0] + ": " + n[1]);
                f(i)
            })
        }, [JSON.stringify(n)]), t
    }
});
define("Components/Core/Modules/ImageGalleryPreact_noscrollbar", ["require", "exports", "InstrumentPreact", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "Components/Core/UtilsPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ImageGallery = void 0;
    var e;
    (function(n) {
        n.ImageGallery = function() {
            var f = preactHooks.useContext(r.ModelContext),
                i = f.model,
                s = f.scrolled,
                h = i.IsMobile,
                c = i.CurrentIndex,
                l = i.MediaContents,
                a = i.LocStrings,
                e = l[c].Ssd,
                o = preactHooks.useState(e),
                v = o[0],
                y = o[1],
                n;
            return y(e), !h && s && (n = u.useFetch("/hp/api/v1/imagegallery?format=json&ssd=" + v), n && n.data) ? preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule", id: "vert_images" }, preact.h("h2", { className: "vs_title" }, a.LOC_HOMEPAGE_GALLERY_CARD_TITLE), preact.h("div", { className: "gallery" }, preact.h("div", { className: "hero" }, preact.h(t, { image: n.data.images[0] })), preact.h("ul", { className: "other" }, n.data.images.slice(1).map(function(n) { return preact.h("li", { className: "item" }, preact.h(t, { image: n })) }))))) : void 0
        };
        var t = function(n) {
            var t = n.image,
                c = preactHooks.useContext(r.ModelContext).model,
                l = c.LocStrings,
                e = t.imageUrls,
                a = t.clickUrl,
                o = t.date,
                u, s, h;
            if (e && (u = e.landscape, u)) return s = u.highDef, h = f.formatString(l.LOC_HOMEPAGE_VERTICAL_SCROLL_GALLERY_IMAGE_ARIALABEL, o), preact.h(i.InstLinkClient, { className: "img", href: a, nodeName: "vs_hidden", loggingData: ["name", "image_gallery"] }, preact.h("img", { src: s, alt: "" + h }), preact.h("div", { className: "info" }, o))
        }
    })(e = t.ImageGallery || (t.ImageGallery = {}))
});
define("Components/Core/Modules/MomentsInTimePreact_noscrollbar", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/HooksPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.MomentsInTime = void 0;
    var f;
    (function(n) {
        n.MomentsInTime = function() {
            var e = preactHooks.useContext(i.ModelContext),
                r = e.model,
                s = e.scrolled,
                h = r.IsMobile,
                c = r.CurrentIndex,
                l = r.MediaContents,
                a = l[c].Ssd,
                n, o, f;
            if (!h && s && (n = u.useFetch("/hp/api/v1/momentsintime?format=json&ssd=" + a), n && n.data && n.data.items && (o = n.title, f = n.data.items, f.length > 0))) return preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule", id: "vert_mit" }, preact.h("h2", { className: "vs_title" }, o), preact.h("ul", { className: "mit" }, f.map(function(n) { return preact.h(t, { item: n }) }))))
        };
        var t = function(n) {
            var t = n.item,
                i = t.imageUrl,
                u = t.title,
                f = t.description,
                e = t.url,
                o = t.credit;
            return preact.h("li", { className: "item", style: { backgroundImage: "url(" + i + ")" } }, preact.h(r.InstLinkClient, { href: e, nodeName: "vs_hidden", parentNodeName: "HPVSModules", loggingData: ["module", "mit"], title: o }, preact.h("img", { src: i, style: { visibility: "hidden" } }), preact.h("div", { className: "mask" }), preact.h("div", { className: "info" }, preact.h("div", { className: "title" }, u), preact.h("div", { className: "desc" }, f))))
        }
    })(f = t.MomentsInTime || (t.MomentsInTime = {}))
});
define("Components/Core/Modules/NearByMobilePreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "InstrumentPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Nearby = void 0;
    var f;
    (function(n) {
        n.Nearby = function() {
            var u = preactHooks.useContext(i.ModelContext).model,
                e = u.IsMobile,
                o = u.LocStrings,
                n, f;
            if (e && (n = r.useFetch("/hp/api/v1/nearbycard?format=json"), n && n.data && n.data.items && n.data.items.length)) return f = n.data.items, preact.h("div", { className: "hc_card", id: "hc_nearby" }, preact.h("h2", { "class": "screen_reader_text" }, o.LOC_ZINC_SCOPES_TITLE), preact.h("div", { className: "card_body" }, preact.h("ul", { className: "options" }, f.map(function(n) { return preact.h(t, { item: n }) }))))
        };
        var t = function(n) { var t = n.item; return preact.h("li", { className: "option" }, preact.h(u.InstLinkClient, { href: t.link, nodeName: "nearby", parentNodeName: "HPVSModules" }, preact.h("div", { className: "nearby_circle" }, preact.h("img", { className: "nearby_image", src: "/th?id=" + t.thumbnailId, role: "presentation", alt: t.name })), preact.h("div", { className: "info" }, preact.h("div", { className: "text" }, t.name)))) }
    })(f = t.Nearby || (t.Nearby = {}))
});
define("Components/Core/Modules/OnThisDayPreact_noscrollbar", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "InstrumentPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.OnThisDay = void 0;
    var f;
    (function(n) {
        n.OnThisDay = function() {
            var f = preactHooks.useContext(i.ModelContext),
                u = f.model,
                o = f.scrolled,
                s = u.IsMobile,
                h = u.CurrentIndex,
                c = u.MediaContents,
                l = u.LocStrings,
                a = c[h].Ssd,
                n, v, e;
            if (!s && o && (n = r.useFetch("/hp/api/v1/onthisday?format=json&ssd=" + a), n && n.data && n.data.items)) return v = n.title, e = n.data.items, preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule", id: "vert_otd" }, preact.h("h2", { className: "vs_title" }, l.LOC_HOMEPAGE_ON_THIS_DAY_TITLE), preact.h("ul", { className: "otd" }, e.map(function(n) { return preact.h(t, { item: n }) }))))
        };
        var t = function(n) { var t = n.item; return preact.h("li", { className: "item" }, preact.h(u.InstLinkClient, { href: t.url, nodeName: "vs_hidden", parentNodeName: "HPVSModules", loggingData: ["name", "otd"] }, preact.h("img", { src: t.imageUrl, alt: t.title }), preact.h("div", { className: "info" }, preact.h("div", { className: "title" }, t.title), preact.h("div", { className: "year" }, t.year)))) }
    })(f = t.OnThisDay || (t.OnThisDay = {}))
});
define("Components/Core/Modules/OpalUpsellMobilePreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.OpalUpsell = void 0;
    var u;
    (function(n) {
        n.OpalUpsell = function() {
            var n = preactHooks.useContext(i.ModelContext),
                u = n.model,
                e = n.scrolled,
                f = u.LocStrings,
                o = u.IsMobile;
            if (o && e) return preact.h(r.InstLinkClient, { href: "https://bnc.lt/kDTk/Sj5XGAjTzv?%24deeplink_path=home%3focid%3dopalfooter", role: "presentation", nodeName: "make_default", parentNodeName: "HPVSModules" }, preact.h("div", { id: "hc_opalinst", className: "bnp_hpcard text_small", "aria-describedby": "hc_opalinst_header" }, preact.h("h2", { "class": "screen_reader_text", id: "hc_opalinst_header" }, " ", f.LOC_HOMEPAGE_VERTICAL_SCROLL_OPAL_UPSELL_TITLE, " "), preact.h("div", { className: "app_logo", alt: "Bing app logo", "aria-hidden": "true" }), preact.h("div", { className: "text" }, preact.h("div", { className: "text_inner" }, preact.h("div", { className: "text_main", id: "hc_opalinst_text_main", "aria-label": "Download the Bing App." }, f.LOC_HOMEPAGE_OPALUPSELL_INSTALLCARD_TIP), preact.h("div", { className: "rating_stars", "aria-label": "Rated 4.5 out of 5", role: "presentation" }, preact.h(t, { isFull: !0 }), preact.h(t, { isFull: !0 }), preact.h(t, { isFull: !0 }), preact.h(t, { isFull: !0 }), preact.h(t, { isFull: !1 }))), preact.h("div", { "class": "get_button_cont" }, preact.h("span", { id: "hc_opalinst_cta", "aria-hidden": "true", className: "cta", role: "none" }, "GET")))))
        };
        var t = function(n) {
            var t = n.isFull,
                i = t ? "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNERDQ4MTQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNjEsNi43NEw4Ljk0LDExLDUuNSw4LjM2LDIuMDYsMTEsMy4zOSw2Ljc0LDAsNC4xM0g0LjIxTDUuNSwwLDYuNzksNC4xM0gxMVoiLz48L3N2Zz4=" : "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNERDQ4MTQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcuNjEsNi43NEw4Ljk0LDExLDUuNSw4LjM2LDIuMDYsMTEsMy4zOSw2Ljc0LDAsNC4xM0g0LjIxTDUuNSwwLDYuNzksNC4xM0gxMVptMCwyLjRMNy4yMiw3LjgxLDYuODEsNi40OCw3LjksNS42NSw5LDQuODFINi4yOEw1LjUsMi4zVjcuNDlaIi8+PC9zdmc+";
            return preact.h("img", { className: "rating_star rms_img", src: i, "aria-hidden": "true" })
        }
    })(u = t.OpalUpsell || (t.OpalUpsell = {}))
});
define("Components/Core/Modules/RewardsPreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Rewards = void 0;
    var u;
    (function(n) {
        var t = preact.createContext(null);
        n.Rewards = function() {
            var s = preactHooks.useContext(i.ModelContext),
                c = s.scrolled,
                l = s.model,
                a = l.IsMobile,
                n;
            if (!a && c && (n = r.useFetch("/hp/api/v1/rewards?format=json"), n && n.data)) {
                var h = n.title,
                    f = n.data,
                    v = f.balance,
                    o = f.offersAvailable,
                    y = o[0],
                    p = o[1];
                if (h && f && v > 0 && o) return preact.h(t.Provider, { value: f }, preact.h("div", { className: "module show" }, preact.h("div", { className: "vsmodule", id: "vsrewds" }, preact.h("h2", { className: "vs_title" }, h), preact.h("div", { className: "vs_row_pad vsrewds_cont", id: "vsrewds_cont" }, preact.h("div", { className: "vs_row" }, preact.h(e, null), preact.h(u, { item: y }), preact.h(u, { item: p }))))))
            }
        };
        var u = function(n) {
                var t = n.item;
                if (t) {
                    var i = t.title,
                        r = t.description,
                        u = t.icon,
                        f = t.maxPoints,
                        e = t.url;
                    if (i && r && u && f && e) return preact.h("div", { className: "vs_rowitem vsrewds_module", style: { left: "50%", width: "25%" } }, preact.h("div", { className: "vsrewds_imgcont" }, preact.h("a", { className: "vsrewds_img_link", target: "_blank", href: e }, preact.h("div", { className: "vsrewds_imgtextcont" }, preact.h("div", { className: "vsrewds_img_row" }, preact.h("img", { className: "vsrewds_img rms_img", src: u })), preact.h("div", { className: "vsrewds_offer_title" }, i), preact.h("div", { className: "vsrewds_subtext" }, r), preact.h("div", { className: "vsrewds_img_btn" }, f + " points")))))
                }
            },
            e = function() {
                var i = preactHooks.useContext(t),
                    n = i.offersProgress,
                    r = n[0],
                    u = n[1];
                if (n) return preact.h("div", { className: "vs_rowitem vsrewds_module", style: { left: "0%", width: "50%" } }, preact.h("div", { className: "vsrewds_generalitemcont" }, preact.h(s, null), preact.h(h, null), preact.h(f, { item: r }), preact.h(f, { item: u }), preact.h(o, null)))
            },
            f = function(n) {
                var t = n.item;
                if (t) {
                    var u = t.title,
                        f = t.icon,
                        i = t.maxPoints,
                        r = t.earnedPoints,
                        e = t.description;
                    if (f && i && r && (u || e)) return preact.h("div", { className: "vsrewds_searchcont" }, preact.h("img", { className: "vsrewds_searchimg", src: f }), preact.h("div", { className: "vsrewds_searchtitle" }, e || u), preact.h("div", { className: "vsrewds_searchpoints" }, r + " of " + i), preact.h("div", { className: "vsrewds_progbar" }, preact.h("div", { className: "vsrewds_progbar_total" }), preact.h("div", { className: "vsrewds_progbar_cur", style: { width: r / i * 100 + "%" } })))
                }
            },
            o = function() { return preact.h("div", { className: "vsrewds_dashboard_link_row" }, preact.h("a", { className: "vsrewds_dashboardlink", id: "vsrewds_dashboard_link", target: "_blank", href: "/rewards/dashboard" }, preact.h("span", { className: "vsrewds_dashboard_txt" }, "Go to your Rewards page"), preact.h("img", { className: "vsrewds_chevron rms_img", src: "" }))) },
            s = function() {
                var n = preactHooks.useContext(t),
                    i = n.balance;
                return preact.h("div", { className: "vsrewds_pointrow" }, preact.h("span", { className: "vsrewds_totalpoints", id: "vsrewds_total_points" }, new Intl.NumberFormat(document.documentElement.lang).format(i)), preact.h("span", { className: "vsrewds_pts", id: "vsrewds_pts" }, "PTS"))
            },
            h = function() { return preact.h("div", { className: "vsrewds_desc", id: "vsrewds_desc" }, "You're earning Microsoft Rewards points when you search with Bing.") }
    })(u = t.Rewards || (t.Rewards = {}))
});
define("Components/Core/Modules/SocialMobilePreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Social = void 0;
    var u;
    (function(n) {
        n.Social = function() {
            var n = preactHooks.useContext(i.ModelContext),
                t = n.model,
                u = n.scrolled,
                f = t.IsMobile,
                e = t.LocStrings;
            if (f && u) return preact.h("div", { id: "hc_followus", className: "hc_card" }, preact.h("div", { className: "card_body" }, preact.h("h2", { className: "header" }, e.LOC_HOMEPAGE_FOLLOW_US), preact.h(r.InstLinkClient, { href: "https://www.facebook.com/Bing/", nodeName: "followus", parentNodeName: "HPVSModules" }, preact.h("img", { alt: "Facebook", className: "rms_img", src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0xNy4wMDY4MzU5IDBjLjEzNDc2NjMgMCAuMjYyMjA2NS4wMjYzNjY5Mi4zODIzMjQzLjA3OTEwMTU2LjEyMDExNzcuMDUyNzM0NjQuMjI1NTg1NC4xMjQ1MTEyNy4zMTY0MDYyLjIxNTMzMjAzLjA5MDgyMDguMDkwODIwNzcuMTYyNTk3NC4xOTYyODg0Ny4yMTUzMzIuMzE2NDA2MjUuMDUyNzM0Ny4xMjAxMTc3OS4wNzkxMDE2LjI0NzU1NzkyLjA3OTEwMTYuMzgyMzI0MjJ2MTYuMDEzNjcxODRjMCAuMTM0NzY2My0uMDI2MzY2OS4yNjIyMDY1LS4wNzkxMDE2LjM4MjMyNDMtLjA1MjczNDYuMTIwMTE3Ny0uMTI0NTExMi4yMjU1ODU0LS4yMTUzMzIuMzE2NDA2MnMtLjE5NjI4ODUuMTYyNTk3NC0uMzE2NDA2Mi4yMTUzMzJjLS4xMjAxMTc4LjA1MjczNDctLjI0NzU1OC4wNzkxMDE2LS4zODIzMjQzLjA3OTEwMTZoLTQuNTg3ODkwNnYtNi45Njk3MjY2aDIuMzM3ODkwNmwuMzUxNTYyNS0yLjcxNTgyMDI4aC0yLjY4OTQ1MzF2LTEuNzMxNDQ1MzFjMC0uNDgwNDcxMTUuMTAyNTM4LS44MjE3NzYzMy4zMDc2MTcyLTEuMDIzOTI1NzhzLjU1MDc3ODgtLjMwMzIyMjY1IDEuMDM3MTA5NC0uMzAzMjIyNjVoMS40NDE0MDYydi0yLjQyNTc4MTI2Yy0uMzQ1NzA0OC0uMDQ2ODc1MjMtLjY5NDMzNDItLjA3NzYzNjY0LTEuMDQ1ODk4NC0uMDkyMjg1MTUtLjM1MTU2NDMtLjAxNDY0ODUxLS43MDMxMjMzLS4wMjE5NzI2Ni0xLjA1NDY4NzUtLjAyMTk3MjY2LS41NTY2NDM0IDAtMS4wNTAyOTA4LjA4NDk2MDA5LTEuNDgwOTU3LjI1NDg4MjgxLS40MzA2NjYzLjE2OTkyMjczLS43OTU0MDg3LjQxMTYxOTUzLTEuMDk0MjM4My43MjUwOTc2NnMtLjUyNTg3ODIuNjkxNDA0MDQtLjY4MTE1MjM3IDEuMTMzNzg5MDZjLS4xNTUyNzQyMS40NDIzODUwMy0uMjMyOTEwMTUuOTM2MDMyNDQtLjIzMjkxMDE1IDEuNDgwOTU3MDR2Mi4wMDM5MDYyNGgtMi4zNDY2Nzk2OXYyLjcxNTgyMDI4aDIuMzQ2Njc5Njl2Ni45Njk3MjY2aC04LjYyMjA3MDMyYy0uMTM0NzY2MyAwLS4yNjIyMDY0My0uMDI2MzY2OS0uMzgyMzI0MjItLjA3OTEwMTYtLjEyMDExNzc4LS4wNTI3MzQ2LS4yMjU1ODU0OC0uMTI0NTExMi0uMzE2NDA2MjUtLjIxNTMzMi0uMDkwODIwNzYtLjA5MDgyMDgtLjE2MjU5NzM5LS4xOTYyODg1LS4yMTUzMzIwMy0uMzE2NDA2Mi0uMDUyNzM0NjQtLjEyMDExNzgtLjA3OTEwMTU2LS4yNDc1NTgtLjA3OTEwMTU2LS4zODIzMjQzdi0xNi4wMTM2NzE4NGMwLS4xMzQ3NjYzLjAyNjM2NjkyLS4yNjIyMDY0My4wNzkxMDE1Ni0uMzgyMzI0MjIuMDUyNzM0NjQtLjEyMDExNzc4LjEyNDUxMTI3LS4yMjU1ODU0OC4yMTUzMzIwMy0uMzE2NDA2MjUuMDkwODIwNzctLjA5MDgyMDc2LjE5NjI4ODQ3LS4xNjI1OTczOS4zMTY0MDYyNS0uMjE1MzMyMDMuMTIwMTE3NzktLjA1MjczNDY0LjI0NzU1NzkyLS4wNzkxMDE1Ni4zODIzMjQyMi0uMDc5MTAxNTZ6IiBmaWxsPSIjNzY3Njc2Ii8+PC9nPjwvc3ZnPg==" })), preact.h(r.InstLinkClient, { href: "https://www.instagram.com/bing/", nodeName: "followus", parentNodeName: "HPVSModules" }, preact.h("img", { alt: "Instagram", className: "rms_img", src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0wIDcuMDk1Mjc2MjNjMC0zLjkxODYxMjg2IDMuMTc3NzIzMDctNy4wOTUyNzYyMyA3LjA5NTI3NjIzLTcuMDk1Mjc2MjNoOS44MDk0NDc1N2MzLjkxODYxMjggMCA3LjA5NTI3NjIgMy4xNzc3MjMwNyA3LjA5NTI3NjIgNy4wOTUyNzYyM3Y5LjgwOTQ0NzU3YzAgMy45MTg2MTI4LTMuMTc3NzIzMSA3LjA5NTI3NjItNy4wOTUyNzYyIDcuMDk1Mjc2MmgtOS44MDk0NDc1N2MtMy45MTg2MTI4NiAwLTcuMDk1Mjc2MjMtMy4xNzc3MjMxLTcuMDk1Mjc2MjMtNy4wOTUyNzYyem0yLjA4Njk1NjUyIDB2OS44MDk0NDc1N2MwIDIuNzY1MzczIDIuMjQyNzE1MjYgNS4wMDgzMTk3IDUuMDA4MzE5NzEgNS4wMDgzMTk3aDkuODA5NDQ3NTdjMi43NjUzNzMgMCA1LjAwODMxOTctMi4yNDI3MTUzIDUuMDA4MzE5Ny01LjAwODMxOTd2LTkuODA5NDQ3NTdjMC0yLjc2NTM3MzA4LTIuMjQyNzE1My01LjAwODMxOTcxLTUuMDA4MzE5Ny01LjAwODMxOTcxaC05LjgwOTQ0NzU3Yy0yLjc2NTM3MzA4IDAtNS4wMDgzMTk3MSAyLjI0MjcxNTI2LTUuMDA4MzE5NzEgNS4wMDgzMTk3MXptMy43NTY1MjE3NCA0Ljk1Njg5NzY3YzAtMy40Mjg5Njc5MSAyLjc3ODk3Mzc5LTYuMjA4Njk1NjQgNi4yMDg2OTU2NC02LjIwODY5NTY0IDMuNDI4OTY3OSAwIDYuMjA4Njk1NyAyLjc3ODk3Mzc5IDYuMjA4Njk1NyA2LjIwODY5NTY0IDAgMy40Mjg5Njc5LTIuNzc4OTczOCA2LjIwODY5NTctNi4yMDg2OTU3IDYuMjA4Njk1Ny0zLjQyODk2NzkxIDAtNi4yMDg2OTU2NC0yLjc3ODk3MzgtNi4yMDg2OTU2NC02LjIwODY5NTd6bTIuMDg2OTU2NTIgMGMwIDIuMjc2ODI4IDEuODQ1MDY1ODcgNC4xMjE3MzkxIDQuMTIxNzM5MTIgNC4xMjE3MzkxIDIuMjc2ODI4IDAgNC4xMjE3MzkxLTEuODQ1MDY1OCA0LjEyMTczOTEtNC4xMjE3MzkxIDAtMi4yNzY4MjgwMS0xLjg0NTA2NTgtNC4xMjE3MzkxMi00LjEyMTczOTEtNC4xMjE3MzkxMi0yLjI3NjgyODAxIDAtNC4xMjE3MzkxMiAxLjg0NTA2NTg3LTQuMTIxNzM5MTIgNC4xMjE3MzkxMnptOS4wNzgyNjA5Mi02LjQxNzM5MTI5YzAtLjgwNjgxNTk4LjY0ODQyODYtMS40NjA4Njk1NyAxLjQ2MDg2OTUtMS40NjA4Njk1Ny44MDY4MTYgMCAxLjQ2MDg2OTYuNjQ4NDI4NjEgMS40NjA4Njk2IDEuNDYwODY5NTcgMCAuODA2ODE1OTgtLjY0ODQyODYgMS40NjA4Njk1Ni0xLjQ2MDg2OTYgMS40NjA4Njk1Ni0uODA2ODE2IDAtMS40NjA4Njk1LS42NDg0Mjg2MS0xLjQ2MDg2OTUtMS40NjA4Njk1NnoiIGZpbGw9IiM3Njc2NzYiLz48L2c+PC9zdmc+" })), preact.h(r.InstLinkClient, { href: "https://twitter.com/bing", nodeName: "followus", parentNodeName: "HPVSModules" }, preact.h("img", { alt: "Twitter", className: "rms_img", src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0yNCA0LjU1ODU5Mzc1Yy0uMzI4MTI2Ni40OTIxODk5Ni0uNjk5MjE2Ny45NTExNjk3NS0xLjExMzI4MTIgMS4zNzY5NTMxMy0uNDE0MDY0Ni40MjU3ODMzNy0uODYzMjc4OS44MTQ0NTEzNi0xLjM0NzY1NjMgMS4xNjYwMTU2Mi4wMDc4MTI1LjEwOTM3NTU1LjAxMzY3MTkuMjE2Nzk2MzUuMDE3NTc4MS4zMjIyNjU2Mi4wMDM5MDYzLjEwNTQ2OTI4LjAwNTg1OTQuMjEyODkwMDguMDA1ODU5NC4zMjIyNjU2MyAwIC45ODQzNzk5Mi0uMTA1NDY3NyAxLjk1NzAyNjQ1LS4zMTY0MDYyIDIuOTE3OTY4NzUtLjIxMDkzODYuOTYwOTQyMy0uNTE1NjIzMSAxLjg5MDYyMDUtLjkxNDA2MjYgMi43ODkwNjI1LS41NzgxMjc4IDEuMzA0Njk0LTEuMzAwNzc2OSAyLjQ3MDY5OC0yLjE2Nzk2ODcgMy40OTgwNDY5cy0xLjg0OTYwMzkgMS44OTY0ODA4LTIuOTQ3MjY1NiAyLjYwNzQyMThjLTEuMDk3NjYxOC43MTA5NDExLTIuMjk0OTE1NCAxLjI1MzkwNDQtMy41OTE3OTY5IDEuNjI4OTA2M3MtMi42NTYyNDI4OS41NjI1LTQuMDc4MTI1LjU2MjVjLTEuMzQzNzU2NzIgMC0yLjY1NDI5MDQ5LS4xODU1NDUtMy45MzE2NDA2Mi0uNTU2NjQwNi0xLjI3NzM1MDE0LS4zNzEwOTU2LTIuNDgyNDE2MjItLjkyMzgyNDUtMy42MTUyMzQzOC0xLjY1ODIwMzIuMzgyODE0NDEuMDQ2ODc1My43NzM0MzU1MS4wNzAzMTI1IDEuMTcxODc1LjA3MDMxMjUgMS4xMTcxOTMwOSAwIDIuMTk3MjYwNDEtLjE3OTY4NTcgMy4yNDAyMzQzOC0uNTM5MDYyNSAxLjA0Mjk3Mzk2LS4zNTkzNzY3IDIuMDAxOTQ4NzUtLjg4MjgwOSAyLjg3Njk1MzEyLTEuNTcwMzEyNC0uNTIzNDQwMTItLjAwNzgxMjYtMS4wMjczNDEzMy0uMDk1NzAyMy0xLjUxMTcxODc1LS4yNjM2NzE5cy0uOTI3NzMyMzYtLjQwMjM0MjMtMS4zMzAwNzgxMy0uNzAzMTI1Yy0uNDAyMzQ1NzYtLjMwMDc4MjgtLjc1MzkwNDc0LS42NTgyMDExLTEuMDU0Njg3NS0xLjA3MjI2NTctLjMwMDc4Mjc1LS40MTQwNjQ1LS41MzMyMDIzLS44NzEwOTEyLS42OTcyNjU2Mi0xLjM3MTA5MzcuMTU2MjUwNzguMDIzNDM3Ni4zMTA1NDYxMS4wNDI5Njg3LjQ2Mjg5MDYyLjA1ODU5MzcuMTUyMzQ0NTIuMDE1NjI1MS4zMDY2Mzk4NS4wMjM0Mzc1LjQ2Mjg5MDYzLjAyMzQzNzUuNDM3NTAyMTkgMCAuODY3MTg1MzktLjA1ODU5MzEgMS4yODkwNjI1LS4xNzU3ODEyLS41NzgxMjc4OS0uMTE3MTg4MS0xLjEwNzQxOTQ3LS4zMjQyMTczLTEuNTg3ODkwNjMtLjYyMTA5MzgtLjQ4MDQ3MTE1LS4yOTY4NzY0LS44OTY0ODI2MS0uNjU4MjAwOS0xLjI0ODA0Njg3LTEuMDgzOTg0M3MtLjYyNDk5OTAyLS45MDYyNDczLS44MjAzMTI1LTEuNDQxNDA2M2MtLjE5NTMxMzQ4LS41MzUxNTg5LS4yOTI5Njg3NS0xLjA5NTcwMDE3LS4yOTI5Njg3NS0xLjY4MTY0MDZ2LS4wNTg1OTM3NWMuNjg3NTAzNDQuMzkwNjI2OTUgMS40MzM1ODk3My41OTc2NTYxMyAyLjIzODI4MTI1LjYyMTA5Mzc1LS4zNDM3NTE3Mi0uMjM0Mzc2MTctLjY1MDM4OTI4LS41MDE5NTE2Mi0uOTE5OTIxODctLjgwMjczNDM4LS4yNjk1MzI2LS4zMDA3ODI3NS0uNDk4MDQ1OTQtLjYyNjk1MTM2LS42ODU1NDY4OC0uOTc4NTE1NjJzLS4zMzIwMzA3NC0uNzIyNjU0My0uNDMzNTkzNzUtMS4xMTMyODEyNS0uMTUyMzQzNzUtLjc5Mjk2NjY4LS4xNTIzNDM3NS0xLjIwNzAzMTI1YzAtLjQzNzUwMjE5LjA1NDY4Njk1LS44NjUyMzIyOS4xNjQwNjI1LTEuMjgzMjAzMTIuMTA5Mzc1NTUtLjQxNzk3MDg0LjI3NzM0MjYyLS44MTQ0NTEyNi41MDM5MDYyNS0xLjE4OTQ1MzEzLjYyNTAwMzEzLjc3MzQ0MTM3IDEuMzIwMzA4NjcgMS40NjY3OTM4MSAyLjA4NTkzNzUgMi4wODAwNzgxMy43NjU2Mjg4My42MTMyODQzMSAxLjU4MDA3MzgxIDEuMTM4NjY5NjggMi40NDMzNTkzNyAxLjU3NjE3MTg3Ljg2MzI4NTU3LjQzNzUwMjE5IDEuNzY3NTczNC43ODMyMDE4NiAyLjcxMjg5MDYzIDEuMDM3MTA5MzcuOTQ1MzE3MjMuMjUzOTA3NTIgMS45MTQwNTc1NS40MDQyOTY2NSAyLjkwNjI1MDA1LjQ1MTE3MTg4LS4wNDY4NzUzLS4xNzk2ODg0LS4wODAwNzgxLS4zNjUyMzM0Mi0uMDk5NjA5NC0uNTU2NjQwNjItLjAxOTUzMTQtLjE5MTQwNzIxLS4wMjkyOTY5LS4zODA4NTg0NC0uMDI5Mjk2OS0uNTY4MzU5MzggMC0uNjc5NjkwOS4xMjg5MDUtMS4zMTgzNTYzOS4zODY3MTg3LTEuOTE2MDE1NjMuMjU3ODEzOC0uNTk3NjU5MjMuNjA5MzcyOC0xLjExOTEzODM5IDEuMDU0Njg3Ni0xLjU2NDQ1MzEyLjQ0NTMxNDctLjQ0NTMxNDczLjk2Njc5MzgtLjc5Njg3MzcxIDEuNTY0NDUzMS0xLjA1NDY4NzUuNTk3NjU5Mi0uMjU3ODEzNzkgMS4yMzYzMjQ3LS4zODY3MTg3NSAxLjkxNjAxNTYtLjM4NjcxODc1LjY4NzUwMzQgMCAxLjM0MTc5MzguMTM0NzY0MjggMS45NjI4OTA2LjQwNDI5Njg4LjYyMTA5NjkuMjY5NTMyNTkgMS4xNjYwMTMzLjY1NDI5NDM3IDEuNjM0NzY1NyAxLjE1NDI5Njg3LjU1NDY5MDItLjEwOTM3NTU1IDEuMDkxNzk0Mi0uMjYzNjcwODggMS42MTEzMjgxLS40NjI4OTA2My41MTk1MzM4LS4xOTkyMTk3NCAxLjAyMTQ4MTktLjQ0MzM1NzkyIDEuNTA1ODU5My0uNzMyNDIxODctLjE3OTY4ODMuNTcwMzE1MzUtLjQ1NTA3NjIgMS4wODk4NDE0MS0uODI2MTcxOCAxLjU1ODU5Mzc1cy0uODE0NDUwNi44NTU0NjcyMy0xLjMzMDA3ODIgMS4xNjAxNTYyNWMuOTg0MzgtLjExNzE4ODA5IDEuOTI1Nzc2OC0uMzc0OTk4MDEgMi44MjQyMTg4LS43NzM0Mzc1eiIgZmlsbD0iIzc2NzY3NiIvPjwvZz48L3N2Zz4=" }))))
        }
    })(u = t.Social || (t.Social = {}))
});
define("Components/Core/Modules/VerticalScrollModulesPreact", ["require", "exports", "Components/Core/Modules/ImageGalleryPreact_noscrollbar", "Components/Core/Modules/ImageOfDayPreact", "Components/Core/Modules/MakeDefaultPreact", "Components/Core/Modules/MomentsInTimePreact_noscrollbar", "Components/Core/Modules/NearByMobilePreact", "Components/Core/Modules/OnThisDayPreact_noscrollbar", "Components/Core/Modules/OpalUpsellMobilePreact", "Components/Core/Modules/RewardsPreact", "Components/Core/Modules/SocialMobilePreact"], function(n, t, i, r, u, f, e, o, s, h, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.VerticalScrollModules = void 0;
    t.VerticalScrollModules = function() { return preact.h("div", { className: "moduleCont" }, preact.h(r.ImageOfDay.ImageOfDay, null), preact.h(f.MomentsInTime.MomentsInTime, null), preact.h(i.ImageGallery.ImageGallery, null), preact.h(o.OnThisDay.OnThisDay, null), preact.h(h.Rewards.Rewards, null), preact.h(u.MakeBingDefault.MakeBingDefault, null), preact.h(e.Nearby.Nearby, null), preact.h(c.Social.Social, null), preact.h(s.OpalUpsell.OpalUpsell, null)) }
});
define("Components/Core/Modules/WidgetSharedPeregrineNewsFeedModule", ["require", "exports", "Components/Core/Modules/WidgetSharedPeregrineNewsFeed", "Components/Core/HooksPreactImportShim", "InstrumentPreact", "Components/Core/Modules/VerticalScrollModulesPreact", "Components/Core/ModelContextPreact"], function(n, t, i, r, u, f, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.WidgetSharedPeregrineNewsFeedModule = void 0;
    t.WidgetSharedPeregrineNewsFeedModule = function() {
        var a = "rms-answers-HomepageVNext-PeregrineWidgets",
            t = preactHooks.useRef(null),
            h = r.useDynamicModules([a]),
            n = ["Loading", "Loaded", "Fail"],
            v = preactHooks.useState(n[0]),
            c = v[0],
            o = v[1],
            l = !h.size && !h.get("error") ? null : h.get(a),
            y = preactHooks.useState(!1),
            rt = y[0],
            p = y[1],
            s = preactHooks.useContext(e.ModelContext).model,
            w = s.IsEUCookieConsentEnabled,
            b = s.EnableManagedCookiePreference,
            ut = s.EuCookieName,
            ft = s.HasVerticalScroll,
            k = s.IsNonAadUser,
            d = "widgetHost.cookieConsent",
            g = function() {
                var t = { mscc: sj_cook.get(ut), bcp: sj_cook.get("BCP") },
                    n = {};
                return n.required = w ? 1 : 0, n.required && (b && t.bcp && (n.categories = { AD: parseInt(sj_cook.get("BCP", "AD")), AL: parseInt(sj_cook.get("BCP", "AL")), ES: 1, SM: parseInt(sj_cook.get("BCP", "SM")) }), !b && t.mscc && (n.categories = { AD: 1, AL: 1, ES: 1, SM: 1 })), n
            },
            nt = function() { return sj_cook.get("MUID") != null && sj_cook.get("MUID") != undefined },
            tt, it;
        return (preactHooks.useEffect(function() {
            (h.get("error") && (o(n[2]), u.logError("ImportedWidgetModuleErrorEvent")), l) && o(n[1])
        }, [l]), preactHooks.useEffect(function() {
            var t = !1;
            p(!w || nt());
            sj_evt.bind("aad:signedin", function() { t || o(n[2]) }, 1);
            sj_evt.bind("wl:auth", function() { t = !0 }, 1);
            sj_evt.bind("ConsentUpdated", function() {
                var t = g(),
                    n;
                nt() && p(!0);
                sj_evt.fire(d, t);
                n = document.createEvent("CustomEvent");
                n.initCustomEvent(d, !0, !0, t.categories);
                window.dispatchEvent(n)
            });
            window.addEventListener("CustomWidgetErrorEvent", function() {
                o(n[2]);
                u.logError("CustomWidgetErrorEvent")
            })
        }, []), preactHooks.useEffect(function() {
            if (t.current) {
                t.current.addEventListener("BingHomepageFeedErrorEvent", function() {
                    o(n[2]);
                    u.logError("BingHomepageFeedErrorEvent")
                });
                var i = document.querySelector("#peregrine-widget-inst");
                t.current.querySelector(".peregrine-widgetgroup").addEventListener("PeregrineWidgetEvent", function(n) {
                    var r, f, e, o, s, h, t;
                    (n || n.detail) && (t = n.detail, ((r = t === null || t === void 0 ? void 0 : t.payload) === null || r === void 0 ? void 0 : r.name) === "MS.News.Web.PageAction" && ((e = (f = t === null || t === void 0 ? void 0 : t.payload) === null || f === void 0 ? void 0 : f.data) === null || e === void 0 ? void 0 : e.actionType) == "click" && (((o = t.payload.data.object) === null || o === void 0 ? void 0 : o.destinationUrl) ? (u.logWidgetClick("PeregrineWidgetFeed-NavClick", "nodeName", "PeregrineWidgetFeed", "parentNodeName", "HPVSModules", "url", (s = t.payload.data.object) === null || s === void 0 ? void 0 : s.destinationUrl), si_T && i && si_T(i.getAttribute("data-h"))) : u.logWidgetClick("PeregrineWidgetFeed-NonNavClick", "nodeName", "PeregrineWidgetFeed", "parentNodeName", "HPVSModules")), ((h = t === null || t === void 0 ? void 0 : t.payload) === null || h === void 0 ? void 0 : h.name) == "MS.News.Web.LoadTime" && u.logShow("PeregrineWidgetShow"))
                })
            }
        }, [t.current]), c == n[0]) ? null : (tt = c == n[1] && rt, it = (c == n[2] || !k) && ft, preact.h("div", { className: "moduleCont", style: { backgroundColor: "unset" } }, tt && k ? preact.h("div", { "class": "module show", ref: t, style: { backgroundColor: "unset" } }, preact.h(u.InstLinkClient, { href: "#", nodeName: "PeregrineWidgetFeed", parentNodeName: "HPVSModules", id: "peregrine-widget-inst", tabIndex: -1, "aria-label": "instrument link", "aria-hidden": "true" }), preact.h(i.WidgetSharedPeregrineNewsFeed, { widgetModule: l, cookieData: g() })) : it ? preact.h(f.VerticalScrollModules, null) : null))
    }
});
define("Components/Core/Modules/VerticalScrollModulesWidgetNewsFeedPreact", ["require", "exports", "Components/Core/Modules/WidgetSharedPeregrineNewsFeedModule"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.VerticalScrollModulesMSNFeed = void 0;
    t.VerticalScrollModulesMSNFeed = function() { return preact.h(i.WidgetSharedPeregrineNewsFeedModule, null) }
});
define("Components/Core/Modules/ModulesPreact", ["require", "exports", "InstrumentPreact", "Components/Core/ModelContextPreact", "Components/Core/CNModules/VerticalScrollModulesPreact_cn", "Components/Core/Modules/VerticalScrollModulesWidgetNewsFeedPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Modules = void 0;
    t.Modules = function() {
        var n = preactHooks.useContext(r.ModelContext).model,
            t = n.HasVerticalScroll,
            e = n.IsWidgetCompatible;
        return preact.h(i.Region, { nodeName: "HPVSModules", parentNodeName: "Core" }, preact.h(i.InstLink, { href: "#", id: "vs_hidden", nodeName: "vs_hidden", parentNodeName: "HPVSModules", tabIndex: -1, "aria-label": "instrument link", "aria-hidden": "true" }), e && n.IsBingAtWorkEnabled != !0 ? preact.h(f.VerticalScrollModulesMSNFeed, null) : t ? preact.h(u.VerticalScrollModules, null) : null)
    }
});
define("Components/Core/Modules/FooterPreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Footer = void 0;
    t.Footer = function() {
        if (r.useClientSideRender()) {
            var n = preactHooks.useContext(i.ModelContext).model,
                f = n.Footer,
                t = n.HasVerticalScroll,
                e = n.LocStrings,
                o = n.MediaContents,
                s = o[0].Ssd,
                h = s.match(/(\d{4})/),
                c = e.LOC_HOMEPAGE_COPYRIGHT_FORMAT.replace("{0}", h[1]);
            return preact.h("footer", { className: "footer hc_card" + (t ? "" : " no_mod"), id: "footer", style: t ? null : { position: "fixed" } }, preact.h("div", { className: "card_body" }, preact.h("span", { className: "msft" }, c), preact.h("ul", { className: "items" }, f.map(function(n) { return preact.h("li", { className: "item" }, preact.h(u, { Id: n.Id, BaseUrl: n.BaseUrl, Text: n.Text })) }))))
        }
    };
    var u = function(n) {
        var t = n.Id,
            i = n.BaseUrl,
            r = n.Text;
        return t == "sb_mcp" ? preact.h("div", { "class": "mcp_footer", onClick: function() { mcp_banner !== undefined && mcp_banner(i) } }, preact.h("span", null, r)) : i ? preact.h("a", { id: t, href: i, role: "link" }, r) : preact.h("span", { id: t }, r)
    }
});
define("Components/Core/Carousel/CarouselContextPreact", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.CarouselContext = void 0;
    t.CarouselContext = preact.createContext(null)
});
define("Components/Core/Carousel/NavigationPreact_noscrollbar", ["require", "exports", "Components/Core/Carousel/CarouselContextPreact", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "InstrumentPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.CarouselNavigation = void 0;
    t.CarouselNavigation = function() {
        var t = preactHooks.useContext(i.CarouselContext),
            tt = t.updateUrlParam,
            it = t.updateOffset,
            rt = t.updateCount,
            ut = t.count,
            ft = t.filters,
            n = t.carouselRef,
            et = t.tileGroups,
            ot = t.interestTitlesCount,
            e = preactHooks.useContext(r.ModelContext),
            y = e.clientSettings,
            st = e.updateClientSettings,
            ht = e.scrolled,
            o = e.model,
            l = o.IsMobile,
            s = o.RtlLang,
            a = o.LocStrings,
            ct = o.TOBHasTwoLines,
            p = preactHooks.useState(!1),
            lt = p[0],
            at = p[1],
            h = u.useScrollPosition(n.current, et).left,
            w = 0,
            b = n.current ? n.current.scrollWidth - n.current.clientWidth - 1 : 0,
            k = 194,
            vt = n.current ? Math.floor(n.current.offsetWidth / k) : 0,
            d = n.current ? (vt - 1) * k : 0,
            c = l ? { "aria-hidden": "true", tabindex: "-1" } : { tabindex: "0" },
            yt = function() {
                var n = y.Pn,
                    t = n.St,
                    i = ct ? __assign(__assign({}, n), { St: t == 2 ? 0 : 2 }) : __assign(__assign({}, n), { St: (t + 1) % 3 }),
                    r = __assign(__assign({}, y), { Pn: i });
                st(r)
            },
            g = function(n) {
                var t = preactHooks.useContext(r.ModelContext),
                    u = t.clientSettings,
                    f = t.carouselLoaded,
                    i;
                return f ? (i = u.Pn.St, n[i]) : n[2]
            },
            nt = function() { n.current && n.current.scrollBy({ left: -d, behavior: "smooth" }) },
            v = function() { if (n.current && (n.current.scrollBy({ left: d, behavior: "smooth" }), !lt)) it(ut), rt(50), tt("filters=" + ft), at(!0) };
        return l && ht && v(), preact.h("div", { className: "nav" }, preact.h(f.InstLink, __assign({ className: "down", id: "hideShowCaro", href: "#", onClick: yt, nodeName: "caro_nav_down", parentNodeName: "PopNowModule", role: "button", "aria-label": g(["The taskbar was expanded. Press to collapse taskbar", "The taskbar was collapsed. Press to hide taskbar", "The taskbar was hidden. Press to expand taskbar"]), "aria-expanded": g(["true", "true", "false"]) }, c)), preact.h(f.InstLink, __assign({ className: "edit_interests", id: "editInterets", href: "/profile/interests?FORM=O2HV45", nodeName: "interests", parentNodeName: "PopNowModule", role: "button", "aria-label": a.LOC_MODULES_PROACTIVE_EDIT_TOOLTIP, style: { display: !l && ot > 0 ? "block" : "none" } }, c), preact.h("svg", { viewBox: "0 0 12 12", "enable-background": "new 0 0 12 12", height: "16", width: "16" }, preact.h("path", { d: "M9.724 3.734l-1.459-1.459 1.338-1.336.002-.001v-.001l1.459 1.459-1.34 1.338zm-5.459 5.451c-.108-.325-.273-.662-.534-.923-.262-.262-.602-.425-.931-.529l4.801-4.795 1.46 1.46-4.796 4.787zm-1.01 1.009l-2.089.641.615-2.085.35-.349c.337.106.686.274.954.542.257.257.417.583.523.899l-.353.352zm8.471-8.462l-1.458-1.458c-.182-.182-.422-.274-.663-.274-.241 0-.481.092-.663.274l-7.992 7.981-.888 3.012c-.088.364.193.695.544.695l.142-.018 3.003-.92.05-.052v.012l.663-.663v-.01l5.259-5.251.002.002.663-.663-.001-.002 1.34-1.338c.364-.366.364-.962-.001-1.327z" }))), preact.h(f.InstLink, __assign({ className: "leftNav " + ((s ? h >= b : h <= w) ? "disabled" : ""), id: "leftNavCaro", href: "#", onClick: s ? v : nt, nodeName: "caro_nav_left", parentNodeName: "PopNowModule", role: "button", "aria-label": a.LOC_HOMEPAGE_CAROUSEL_PREV }, c)), preact.h(f.InstLink, __assign({ className: "rightNav " + ((s ? h <= w : h >= b) ? "disabled" : ""), id: "rightNavCaro", href: "#", onClick: s ? nt : v, nodeName: "caro_nav_right", parentNodeName: "PopNowModule", role: "button", "aria-label": a.LOC_HOMEPAGE_CAROUSEL_MORE }, c)))
    }
});
define("Components/Core/Carousel/WeatherPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Weather = void 0;
    t.Weather = function(n) {
        var t = n.items,
            u = preactHooks.useContext(i.ModelContext).model,
            f = u.IsMobile;
        return preactHooks.useEffect(function() { r.logShow("ProactiveWeatherTiles", "Count", (t || []).length) }, []), preact.h(preact.Fragment, null, t.map(function(n) {
            var u = preactHooks.useState(0),
                t = u[0],
                h = u[1],
                c = n.url,
                l = n.description,
                e = n.currentTemp,
                a = n.svgIcon,
                o = n.lowTemp,
                s = n.highTemp,
                v = n.tempUnit,
                i = "°",
                y = t == 1 ? Math.round((e - 32) * 5 / 9) : e,
                p = t == 1 ? Math.round((s - 32) * 5 / 9) : s,
                w = t == 1 ? Math.round((o - 32) * 5 / 9) : o;
            return preact.h("li", { className: "itile" }, preact.h("span", { className: "crs_item crs_wea_item" }, preact.h("div", { "class": "hp_text" }, preact.h(r.InstLinkClient, { href: n.url, nodeName: "tile_click", parentNodeName: "PopNowModule", loggingData: ["tile", "weather"] }, n.title)), preact.h("span", { className: "crs_wea crs_item_ctnt" }, preact.h(r.InstLinkClient, { className: "crs_wea_flex", href: c, nodeName: "tile_click", parentNodeName: "PopNowModule", loggingData: ["tile", "weather"] }, preact.h("span", { className: "crs_wea_icon", dangerouslySetInnerHTML: { __html: a } }), preact.h("span", { className: "crs_weact" }, y, f ? preact.h("sup", null, v) : i), preact.h("span", { className: "crs_weahl_cont" }, preact.h("span", { className: "crs_weahl" }, "" + w + i + " / " + p + i), preact.h("span", { className: "crs_weads" }, l))), preact.h("span", { className: "deg_switch", onClick: function() { h((t + 1) % 2) }, style: { display: "none" } }, preact.h("span", null, t == 1 ? "C" : "F"), preact.h("span", null, t == 0 ? "C" : "F")))))
        }))
    }
});
define("Components/Core/Carousel/FinancePreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Finance = void 0;
    t.Finance = function(n) {
        var r = n.items,
            u = preactHooks.useContext(i.ModelContext).model,
            o = u.IsMobile,
            t = u.LocStrings;
        return !o && r.length >= 3 ? preact.h(e, { items: r, IncreaseStr: t.LOC_HOMEPAGE_ANSWER_FINANCE_INCREASE_ARIALABEL, DecreaseStr: t.LOC_HOMEPAGE_ANSWER_FINANCE_DECREASE_ARIALABEL }) : preact.h(f, { items: r, IsMobile: o, IncreaseStr: t.LOC_HOMEPAGE_ANSWER_FINANCE_INCREASE_ARIALABEL, DecreaseStr: t.LOC_HOMEPAGE_ANSWER_FINANCE_DECREASE_ARIALABEL })
    };
    var u = function(n) {
            var t = n.item,
                i = n.IsMobile,
                o = n.IncreaseStr,
                s = n.DecreaseStr,
                u = t.name,
                h = t.lastValueString,
                c = t.changeString,
                f = t.symbol,
                r = t.change,
                l = i ? f : u,
                e = i ? u : f;
            return preact.h("span", { className: "crs_item crs_stk_item" }, preact.h("div", { "class": "hp_text" }, l, i ? preact.h("span", { className: "crs_stkt" }, e) : null), preact.h("span", { className: "crs_stk crs_item_ctnt" }, preact.h("span", { className: "crs_stkl segoe_light" }, preact.h("span", { className: "arrow " + (r > 0 ? "crs_stk_pos" : "crs_stk_neg") }, preact.h("span", { role: "img", "aria-label": r > 0 ? o : s }, r > 0 ? "▲" : "▼")), h), preact.h("span", { className: "crs_stkc segoe_reg" }, c), i ? null : preact.h("span", { className: "crs_stkt" }, e)))
        },
        f = function(n) {
            var t = n.items,
                i = n.IsMobile,
                f = n.IncreaseStr,
                e = n.DecreaseStr;
            return preactHooks.useEffect(function() { r.logShow("ProactiveFinanceTiles", "Count", (t || []).length) }, []), preact.h(preact.Fragment, null, t.map(function(n) { var t = n.url; return preact.h("li", { className: "itile" }, preact.h(r.InstLinkClient, { href: t, nodeName: "tile_click", parentNodeName: "PopNowModule", loggingData: ["tile", "finance"] }, preact.h(u, { item: n, IsMobile: i, IncreaseStr: f, DecreaseStr: e }))) }))
        },
        e = function(n) {
            var t = n.items,
                i = n.IncreaseStr,
                u = n.DecreaseStr,
                f = "▲",
                e = "▼",
                o = t[0].url;
            return t = t.slice(0, 3), preactHooks.useEffect(function() { r.logShow("ProactiveFinanceTiles", "Count", 1, "IsCombinedTile", !0) }, []), preact.h("li", { className: "itile" }, preact.h(r.InstLinkClient, { href: o, nodeName: "tile_click", parentNodeName: "PopNowModule", loggingData: ["tile", "finance"] }, preact.h("span", { className: "crs_item crs_stk_item" }, preact.h("div", { "class": "hp_text" }, "My watchlist"), preact.h("span", { className: "crs_stktms crs_item_ctnt" }, t.map(function(n) {
                var r = n.lastValueString,
                    o = n.symbol,
                    t = n.change,
                    s = n.percentageChange;
                return preact.h("div", { "class": "crs_stktm" }, preact.h("span", { "class": "crs_stktmt" }, o), preact.h("span", { "class": "crs_stktml" }, r), preact.h("span", { "class": "crs_stktmc " + (t > 0 ? "crs_stk_pos" : "crs_stk_neg") }, Math.abs(Math.round(s * 100) / 100) + "%", preact.h("span", { className: "arrow" }, preact.h("span", { role: "img", "aria-label": t > 0 ? i : u }, t > 0 ? f : e))))
            })))))
        }
});
define("Components/Core/Carousel/NewsInterestPreact", ["require", "exports", "Components/Core/Carousel/CarouselContextPreact", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.NewsInterest = void 0;
    t.NewsInterest = function(n) {
        var t = n.items,
            e = preactHooks.useContext(i.CarouselContext).interestTitlesCount,
            f = preactHooks.useContext(r.ModelContext).model,
            o = f.IsMobile,
            s = f.HasCarouselNewTab;
        return !o && e > 4 && (t = t.slice(0, 1)), preactHooks.useEffect(function() { u.logShow("ProactiveNewsTiles", "Count", (t || []).length) }, []), preact.h(preact.Fragment, null, t.map(function(n) { return preact.h("li", { className: "itile crs_wide" }, preact.h(u.InstLinkClient, { href: n.url, nodeName: "tile_click", parentNodeName: "PopNowModule", loggingData: ["tile", "newsinterest"], target: s ? "_blank" : "" }, preact.h("span", { className: "crs_item crs_news_item" }, preact.h("div", { className: "hp_text" }, n.shortTitle), preact.h("div", { className: "crs_content" }, n.imageUrl ? preact.h("img", { src: n.imageUrl, className: "crs_newsthmb", alt: n.longTitle }) : null, preact.h("span", { className: "crs_news crs_item_ctnt " + (n.imageUrl ? "hasimg" : "") }, preact.h("p", { className: "crs_newsqry" }, n.longTitle), preact.h("span", { className: "crs_newstm" }, n.subtext)))))) }))
    }
});
define("Components/Core/Carousel/TrendingNowBadgePreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/Carousel/CarouselContextPreact", "Components/Core/HooksPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.TrendingNowBadge = void 0;
    t.TrendingNowBadge = function(n) {
        var e = n.item,
            k = e.badge,
            o = e.dataTags,
            d = e.tooltip,
            s = __assign({}, k),
            h = s.color,
            t = s.type;
        if (h && t) {
            var c = preactHooks.useContext(r.CarouselContext),
                g = c.carouselRef,
                nt = c.tileGroups,
                l = u.useScrollPosition(g.current, nt).left,
                a = preactHooks.useState(0),
                st = a[0],
                tt = a[1],
                it = preactHooks.useContext(i.ModelContext).model,
                v = it.LocStrings,
                rt = v.LOC_MODULES_AD_NEWS_TITLE,
                ut = v.LOC_MODULES_BREAKING_NEWS_TITLE,
                y = t == "RtbAd" ? rt : t == "Breaking" ? ut : null,
                p = preactHooks.useRef(null),
                w = preactHooks.useState(o ? o["data-mv"] || null : null),
                b = w[0],
                ft = w[1],
                et = t == "RtbAd" && b != null && f(p.current) ? b : null,
                ot = u.useFetch(et);
            return ot != null && ft(null), preactHooks.useEffect(function() { tt(l) }, [l]), preact.h("div", { className: "badge " + h, "aria-label": "... " + y + "! " + d, ref: t == "RtbAd" ? p : null }, y)
        }
    };
    var f = function(n) {
        if (!n || !n.getBoundingClientRect) return !1;
        var i = function() { return n.getBoundingClientRect() },
            t = function() { return document.querySelector("#crs_pane").getBoundingClientRect() };
        return i().left > t().left && i().left + 186 < t().left + t().width
    }
});
define("Components/Core/Carousel/TrendingNowPreact", ["require", "exports", "InstrumentPreact", "Components/Core/ModelContextPreact", "Components/Core/Carousel/TrendingNowBadgePreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.TrendingNow = void 0;
    t.TrendingNow = function(n) {
        var t = n.items,
            f = preactHooks.useContext(r.ModelContext).model,
            e = f.CarouselTooltipEnabled,
            o = f.TOBHasMsnIcon;
        return preactHooks.useEffect(function() { i.logShow("ProactiveTrendingNowTiles", "Count", (t || []).length) }, []), preact.h(preact.Fragment, null, t.map(function(n) {
            var s = n.badge,
                r = n.imageCredit,
                h = n.url,
                c = n.imageUrl,
                l = n.title,
                a = n.tooltip,
                t = n.linksTarget,
                v = n.additionalMetaData,
                f = __assign({}, s).type;
            return preact.h("li", { className: "pntile" }, preact.h(i.InstLinkClient, { href: "" + h, nodeName: "tile_click", parentNodeName: "PopNowModule", target: t && t.length ? t : null, loggingData: ["tile", "trendingnow"] }, preact.h("span", { className: "crs_item " + (f ? f.toLowerCase() : "") }, preact.h("div", { title: e ? a : "", className: "hp_text" }, l), preact.h("img", { src: c, title: r, role: "presentation", alt: r }), o ? preact.h("a", { href: "" + v.msn.clickThroughUrl, target: "_blank", title: "Read Article" }, preact.h("svg", { "class": "msnicon", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z", fill: "black", "fill-opacity": "0.54" }), preact.h("path", { d: "M7.28571 6.85715C6.57563 6.85715 6 7.43278 6 8.14286V15.8571C6 16.5672 6.57563 17.1429 7.28571 17.1429H10.2857C10.9867 17.1429 11.609 16.8063 12 16.2859C12.391 16.8063 13.0133 17.1429 13.7143 17.1429H16.7143C17.4244 17.1429 18 16.5672 18 15.8571V8.14286C18 7.43278 17.4244 6.85715 16.7143 6.85715H13.7143C13.0133 6.85715 12.391 7.19372 12 7.71408C11.609 7.19372 10.9867 6.85715 10.2857 6.85715H7.28571ZM11.5714 9V15C11.5714 15.7101 10.9958 16.2857 10.2857 16.2857H7.28571C7.04902 16.2857 6.85714 16.0938 6.85714 15.8571V8.14286C6.85714 7.90617 7.04902 7.71429 7.28571 7.71429H10.2857C10.9958 7.71429 11.5714 8.28992 11.5714 9ZM12.4286 15V9C12.4286 8.28992 13.0042 7.71429 13.7143 7.71429H16.7143C16.951 7.71429 17.1429 7.90617 17.1429 8.14286V15.8571C17.1429 16.0938 16.951 16.2857 16.7143 16.2857H13.7143C13.0042 16.2857 12.4286 15.7101 12.4286 15Z", fill: "white" }))) : null, preact.h(u.TrendingNowBadge, { item: n }))))
        }))
    }
});
define("Components/Core/Carousel/MyUpdatesPreact", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/Carousel/CarouselContextPreact", "InstrumentPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.MyUpdatesTile = void 0;
    t.MyUpdatesTile = function() {
        var f = preactHooks.useContext(r.CarouselContext).interestTitlesCount,
            t = preactHooks.useContext(i.ModelContext).model,
            e = t.CurrentIndex,
            o = t.MediaContents,
            s = o[e].Ssd,
            n = s.match(/(\d{4})(\d{2})(\d{2})/),
            h = +n[1],
            c = +n[2] - 1,
            l = +n[3],
            a = new Date(h, c, l).toLocaleString(undefined, { month: "long", day: "numeric" });
        if (f > 4) return preactHooks.useEffect(function() { u.logShow("MyUpdatesTile") }, []), preact.h("li", { "class": "itile", id: "see_more_interests" }, preact.h(u.InstLink, { href: "/updates?FORM=O2HV68", nodeName: "myupdates", parentNodeName: "PopNowModule" }, preact.h("span", { id: "tile_wrapper", "class": "crs_item" }, preact.h("div", { "class": "hp_text" }, "My updates"), preact.h("div", { id: "tile" }, preact.h("div", { "class": "see_more_left" }, preact.h("div", { "class": "content" }, "See more updates"), preact.h("div", { "class": "date" }, a)), preact.h("div", { id: "triangle" }), preact.h("div", { "class": "see_more_right" })))))
    }
});
define("Components/Core/Carousel/CarouselPreact", ["require", "exports", "Components/Core/HooksPreact", "InstrumentPreact", "Components/Core/Carousel/CarouselContextPreact", "Components/Core/Carousel/NavigationPreact_noscrollbar", "Components/Core/ModelContextPreact", "Components/Core/Carousel/WeatherPreact", "Components/Core/Carousel/FinancePreact", "Components/Core/Carousel/NewsInterestPreact", "Components/Core/Carousel/TrendingNowPreact", "Components/Core/Carousel/MyUpdatesPreact"], function(n, t, i, r, u, f, e, o, s, h, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Carousel = void 0;
    t.Carousel = function() {
        var s = preactHooks.useContext(e.ModelContext),
            t = s.model,
            g = s.updateCarouselLoaded,
            nt = s.isTobDisabledOnClient,
            tt = t.CarouselApiUrl,
            it = t.HasCarousel,
            rt = t.IsTobDisabled,
            ut = t.IsEdu,
            h = ut && (rt || nt);
        if (it) {
            var c = preactHooks.useState(""),
                ft = c[0],
                et = c[1],
                l = preactHooks.useState(0),
                ot = l[0],
                st = l[1],
                v = preactHooks.useState(20),
                y = v[0],
                ht = v[1],
                p = preactHooks.useState(""),
                w = p[0],
                ct = p[1],
                b = preactHooks.useState([]),
                n = b[0],
                lt = b[1],
                k = preactHooks.useState(0),
                at = k[0],
                vt = k[1],
                d = preactHooks.useRef(null),
                o = i.useFetch(tt + "&format=json&ecount=" + y + "&efirst=" + ot + "&" + w);
            return preactHooks.useEffect(function() {
                !h && o && o.data && (o.data.map(function(t) {
                    if (t)
                        if (typeof t == "string") et(t);
                        else if (t.typeName && t.items) {
                        var i = t.typeName,
                            r = t.items,
                            u = !1;
                        i != "TrendingNow" && i != "Msn" && vt(function(n) { return n + r.length });
                        n.map(function(n) {
                            var t;
                            n.typeName == i && ((t = n.items).push.apply(t, r), u = !0)
                        });
                        u || n.push(t)
                    }
                }), r.logDataEvent("fetched", "func", "carousel", "count", n && n.length), n && n.length > 0 && (lt(__spreadArrays(n)), g(!0)))
            }, [o]), preact.h(u.CarouselContext.Provider, { value: { urlParam: w, updateUrlParam: ct, updateCount: ht, count: y, updateOffset: st, filters: ft, tileGroups: n, carouselRef: d, interestTitlesCount: at } }, preact.h(r.Region, { nodeName: "HPModules", parentNodeName: "Core" }, preact.h(r.Region, { nodeName: "PopNowModule", parentNodeName: "HPModules" }, preact.h(r.InstLink, { href: "#", nodeName: "tile_click", parentNodeName: "PopNowModule", tabIndex: -1, "aria-label": "instrument link", "aria-hidden": "true" }), preact.h(r.InstLink, { href: "#", nodeName: "caro_hidden", parentNodeName: "PopNowModule", tabIndex: -1, "aria-label": "instrument link", "aria-hidden": "true" }), preact.h("div", { className: "carousel " + (h ? "hide" : "show"), id: "carousel" }, preact.h(f.CarouselNavigation, null), preact.h("ul", { id: "crs_pane", ref: d }, preact.h(a, { tileGroups: n }))))))
        }
    };
    var a = function(n) {
            var t = n.tileGroups,
                f = preactHooks.useContext(u.CarouselContext).interestTitlesCount,
                o = preactHooks.useContext(e.ModelContext).model,
                s = o.IsMobile,
                i, r;
            return !s && f > 0 && (i = t.length, r = { typeName: "MyUpdates", items: [] }, t = __spreadArrays((t || []).slice(0, i - 1), [r, t[i - 1]])), preact.h(preact.Fragment, null, t.map(function(n) { return preact.h(v, { group: n }) }))
        },
        v = function(n) {
            var t = n.group,
                f = preactHooks.useContext(e.ModelContext).model,
                r = f.LocStrings,
                u = f.IsMobile;
            if (i.useFetch(t.items && t.typeName && t.typeName == "TrendingNow" ? y(t.items) : null), t.typeName && t.items) { if (t.typeName == "Weather") return preact.h("li", { className: "tile_grp" }, u ? preact.h("h2", { "class": "screen_reader_text" }, r.LOC_HOMEPAGE_WEATHER_TITLE) : null, preact.h("ul", { id: "weather_tile" }, preact.h(o.Weather, { items: t.items }))); if (t.typeName == "Finance") return preact.h("li", { className: "tile_grp" }, u ? preact.h("h2", { "class": "card_title" }, r.LOC_HOMEPAGE_ANSWER_FINANCE_TITLE) : null, preact.h("ul", { id: "finance_tile" }, preact.h(s.Finance, { items: t.items }))); if (t.typeName == "NewsInterest" || t.typeName == "Msn") return preact.h("li", { className: "tile_grp" }, u ? preact.h("h2", { "class": "screen_reader_text" }, r.LOC_HOMEPAGE_CAROUSEL_SWITCHER_INTERESTS) : null, preact.h("ul", { id: "news_interest_tile" }, preact.h(h.NewsInterest, { items: t.items }))); if (t.typeName == "TrendingNow") return preact.h("li", { className: "tile_grp" }, u ? preact.h("h2", { "class": "card_title" }, r.LOC_HOMEPAGE_VERTICAL_SCROLL_TOB) : null, preact.h("ul", { id: "trending_now_tile" }, preact.h(c.TrendingNow, { items: t.items }))); if (t.typeName = "MyUpdates") return preact.h("li", { className: "tile_grp" }, preact.h("ul", null, preact.h(l.MyUpdatesTile, null))) }
        },
        y = function(n) { var t, i; return n ? (t = n.filter(function(n) { return n && n.dataTags && n.dataTags["data-mi"] }), !(t && t.length && t.length > 0)) ? null : (i = "/api/v1/mediation/tracking/?data=", t.map(function(n) { i += encodeURIComponent(n.dataTags["data-mi"]) + "," }), i += "&rtype=miFeedBackGroup") : null }
});
define("Components/NewTab/ChromePreact", ["require", "exports", "Components/Core/HooksPreact", "Components/Core/ModelContextPreact"], function(n, t, i, r) {
    "use strict";
    var u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.NewTabMostVisitedSites = void 0;
    u = preact.createContext(null);
    t.NewTabMostVisitedSites = function() {
        var t = preactHooks.useContext(r.ModelContext),
            h = t.scrolled,
            e = t.clientSettings,
            n;
        if ((!e || e.Mvs == 0) && i.useClientSideRender() && !h && typeof chrome != "undefined" && chrome.embeddedSearch && (n = chrome.embeddedSearch.newTabPage, n)) {
            var s = preactHooks.useState(null),
                c = s[0],
                l = s[1],
                a = i.useForceUpdate();
            return preactHooks.useEffect(function() { n.onmostvisitedchange = function() { a() } }, []), preact.h(u.Provider, { value: { newTabPage: n, deletedMvs: c, updateDeletedMvs: l } }, preact.h("div", { className: "mvs_cont show" }, preact.h(f, null), preact.h(o, null)))
        }
    };
    var f = function() {
            var n = preactHooks.useContext(u).newTabPage,
                t = n.mostVisited.slice(0, 8);
            return preact.h("ul", { id: "mvs" }, t.map(function(n) { return preact.h(e, { site: n }) }))
        },
        e = function(n) {
            var t = n.site,
                i = preactHooks.useContext(u),
                e = i.newTabPage,
                o = i.deletedMvs,
                s = i.updateDeletedMvs,
                r, f;
            if (t && t.rid && o != t.rid) return r = "chrome-search://most-visited/title.html?rid=" + t.rid + "&c=000000ff&fs=12&f=arial, sans-serif&pos=10&ta=left", f = "chrome-search://most-visited/title.html?rid=" + t.rid + "&fs=0", preact.h("li", { className: "tile" }, preact.h("img", { src: t.faviconUrl }), preact.h("iframe", { className: "title", src: r, style: { height: "14px" } }), preact.h("iframe", { className: "empty_cont", src: f }), preact.h("a", {
                className: "close",
                href: "#",
                onClick: function() {
                    e.deleteMostVisitedItem(t.rid);
                    s(t.rid)
                }
            }, "✖"))
        },
        o = function() {
            var n = preactHooks.useContext(u),
                t = n.newTabPage,
                i = n.deletedMvs,
                r = n.updateDeletedMvs;
            if (i) return preact.h("div", { className: "undo show" }, preact.h("span", { className: "text" }, "Tile removed."), preact.h("a", {
                className: "undo_last",
                href: "#",
                onClick: function() {
                    t.undoMostVisitedDeletion(i);
                    r(null)
                }
            }, "Undo"), preact.h("a", {
                className: "undo_all",
                href: "#",
                onClick: function() {
                    t.undoAllMostVisitedDeletions();
                    r(null)
                }
            }, "Restore all"))
        }
});
define("Components/Core/SpeechPreact", ["require", "exports", "Components/Core/HooksPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    var u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Speech = void 0,
        function(n) {
            n.Waiting = "Waiting...";
            n.Listening = "Listening...";
            n.Blocked = "Microphone permissions denied, check browser settings.";
            n.NoMic = "No microphone device was found"
        }(u || (u = {})),
        function(n) {
            n.None = "";
            n.Error = "There was a problem accessing your microphone.";
            n.NoText = "No speech was detected."
        }(f || (f = {}));
    var e = preact.createContext(null),
        o = typeof _model != "undefined" && _model.IsMobile || typeof _vs != "undefined" && _vs.mobile || !1,
        h = typeof _vs != "undefined" && _vs.reopenmic || !1,
        p = typeof _model != "undefined" && _model.IsChromeNewTab,
        w = typeof _model != "undefined" && _model.FormCode ? _model.FormCode : "QBLH",
        b = typeof _vs != "undefined" && _vs.ttsFromSsmlEnabled || !1,
        c = typeof _vs != "undefined" && _vs.permRequestOverlayEnabled || !1,
        l = typeof _vs != "undefined" && _vs.allowForceQuery || !1,
        k = typeof _vs != "undefined" && _vs.forceHelloQuery || !1,
        a = typeof _vs != "undefined" && _vs.testOverlay || "",
        d = typeof _vs != "undefined" && _vs.enableVoiceSRDomain || !1,
        g = typeof _vs != "undefined" && _vs.spokenResponseTypeLogEnabled || !1,
        nt = typeof _vs != "undefined" && _vs.noSpeechDetectedReopenMic || !1;
    t.Speech = function(n) {
        var t = n.props,
            k = preactHooks.useState(!1),
            s = k[0],
            l = k[1],
            d = preactHooks.useState(null),
            dt = d[0],
            gt = d[1],
            g = preactHooks.useState(null),
            ni = g[0],
            ti = g[1],
            nt = preactHooks.useState(null),
            ii = nt[0],
            ri = nt[1],
            tt = preactHooks.useState(!1),
            ui = tt[0],
            fi = tt[1],
            it = preactHooks.useState(!1),
            v = it[0],
            ei = it[1],
            et = preactHooks.useState(u.Waiting),
            ot = et[0],
            y = et[1],
            st = preactHooks.useState(f.None),
            oi = st[0],
            si = st[1],
            ht = preactHooks.useState(!1),
            hi = ht[0],
            ci = ht[1],
            ct = preactHooks.useState(null),
            li = ct[0],
            ai = ct[1],
            lt = preactHooks.useState(!1),
            at = lt[0],
            w = lt[1],
            vt = i.useAudio(null),
            vi = vt[0],
            yi = vt[1],
            yt = preactHooks.useState(!1),
            pi = yt[0],
            wi = yt[1],
            h = t.loggingName,
            pt = t.textareaId,
            bi = t.handleText,
            ki = t.iconInit,
            di = t.isPartner,
            gi = t.langLocQuery,
            nr = t.langLocProp,
            tr = o ? "Mobile" : p ? "ChromeNewTab" : "Desktop",
            ir = t.clientbuild + tr,
            rr = t.allowReadout,
            ur = t.isAjaxPage,
            wt = preactHooks.useState(!1),
            fr = wt[0],
            er = wt[1],
            bt = preactHooks.useState(!1),
            or = bt[0],
            sr = bt[1],
            kt, b;
        return typeof Promise == "undefined" ? (r.logDataEvent(h, "PromiseUndefined", !0), null) : (kt = function() { return { recording: s, updateRecordingState: l, hypothesisText: ni, updateHypothesisText: ti, detectedText: dt, updateDetectedText: gt, earcons: ii, readoutPlayed: ui, updateReadoutPlayed: fi, readoutEnabled: v, microphoneState: ot, updateMicrophoneState: y, isPartner: di, errorState: oi, updateErrorState: si, shouldReopenMic: hi, updateReopenMic: ci, readoutText: li, updateReadoutText: ai, loggingName: h, textareaId: pt, handleText: bi, iconInit: ki, clientbuild: ir, langLocQuery: gi, langLocProp: nr, showPromptOverlay: at, updateShowOverlay: w, allowReadout: rr, audioPlaying: vi, updateAudioSource: yi, showUpsell: pi, updateShowUpsell: wi, isAjaxPage: ur, showTooltip: fr, updateShowTooltip: er, showLearnOverlay: or, updateShowLearnOverlay: sr } }, a == "micAsk" ? w(!0) : a == "micBlocked" && (l(!1), y(u.Blocked)), preactHooks.useEffect(function() {
            sj_evt.bind("voice.askperms", function() { w(!0) }, !0);
            sj_evt.bind("voice.micblock", function() {
                l(!1);
                y(u.Blocked)
            }, !0)
        }, []), b = function(n) {
            r.logDataEvent(h, "sbox", "typing");
            n.target.removeEventListener("input", b)
        }, preactHooks.useEffect(function() {
            var n = sj_cook.get("SRCHHPGUSR", "VSRO");
            ei(!n || n == "1")
        }, []), preactHooks.useEffect(function() { v && (typeof Audio != "undefined" ? ri({ start: new Audio("/vs/ec/start.mp3"), stop: new Audio("/vs/ec/stop.mp3") }) : r.logDataEvent(h, "AudioUndefined", !0)) }, [v]), preactHooks.useEffect(function() {
            var n = document.querySelector(pt);
            n && n.addEventListener("input", b);
            r.logDataEvent(h, "comp", "loaded")
        }, []), preactHooks.useEffect(function() {
            var n = document.querySelector(".mic_cont"),
                t = document.querySelector(".dimmer"),
                i;
            s ? (n && n.classList.remove("icon"), t && t.classList.add("dim"), i = document.getElementById("b_mic_close"), i && i.focus()) : (n && !n.classList.contains("icon") && n.classList.add("icon"), t && t.classList.remove("dim"))
        }, [s]), preact.h(e.Provider, { value: kt() }, !o && c && (at || !s && ot == u.Blocked) ? preact.h(ft, null) : null, s ? preact.h(rt, null) : preact.h(ut, null)))
    };
    var tt = function() { var n = preactHooks.useContext(e).recording; return preact.h("div", null, n ? preact.h("input", { type: "hidden", name: "uquinputtype", value: "speech" }) : null, preact.h("input", { type: "hidden", name: "uquresponseformat", value: n ? 1 : 0 }), preact.h("input", { type: "hidden", name: "uqubfprlg", value: n ? 1 : 0 }), preact.h("input", { type: "hidden", name: "clientid", value: sj_cook.get("MUID", "MUID") }), preact.h("input", { type: "hidden", name: "input", value: 2 })) },
        it = function() {
            var n = preactHooks.useContext(e),
                r = n.hypothesisText,
                o = n.detectedText,
                s = n.microphoneState,
                t = n.errorState,
                i = r || o,
                c = i ? escape(o) : ht(s),
                h = t != f.None ? ct(t) : c,
                l = t != f.None ? "alert" : "contentinfo",
                a = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.nomicLinkText ? _vs.locstr.nomicLinkText : "Setting up a microphone",
                v = "/search?q=" + (typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.nomicQuery ? _vs.locstr.nomicQuery : "set up microphone");
            return preact.h("div", { className: "b_rec_text " + (i ? "" : "b_placeholder"), tabIndex: 0 }, preact.h("span", { role: l, "aria-label": h }, h), preact.h("span", { className: "b_hyp" }, i ? r : ""), s == u.NoMic ? preact.h("a", { id: "b_noMic", href: v }, a) : null)
        },
        rt = function() {
            var n = preactHooks.useContext(e),
                c = n.earcons,
                y = n.detectedText,
                ut = n.updateDetectedText,
                p = n.hypothesisText,
                b = n.updateHypothesisText,
                wt = n.recording,
                ot = n.updateRecordingState,
                g = n.microphoneState,
                a = n.updateMicrophoneState,
                bt = n.isPartner,
                ft = n.updateErrorState,
                h = n.loggingName,
                kt = n.clientbuild,
                ct = n.langLocQuery,
                et = n.langLocProp,
                dt = n.isAjaxPage,
                lt = "xx-yy",
                rt, at, v, vt, st;
            ct && et && (rt = _d.querySelector(ct), rt && rt[et] && rt[et] !== "" && (lt = rt[et]));
            at = typeof _vs != "undefined" && _vs && _vs.anon;
            v = { clientbuild: kt, referer: encodeURIComponent(document.location.href).substring(0, 1e3), form: bt ? "QBRE" : w };
            dt && (v.isAjaxPage = "1");
            at && (v.preferanonymous = "1");
            URLSearchParams && (vt = new URLSearchParams(window.location.search), st = vt.get("location"), st && (v.location = st));
            (_G === null || _G === void 0 ? void 0 : _G.IG) && (v.uqurequestid = _G.IG);
            var gt = (d ? "//sr" : "//www") + ".bing.com/opaluqu/speech/recognition/interactive/cognitiveservices/v1",
                t = i.useSpeechRecognizer(gt, v, lt)[0],
                ht = function() {
                    t.close();
                    ot(!1);
                    c && c.stop && c.stop.play();
                    ut("");
                    b("");
                    a(u.Waiting);
                    ft(f.None);
                    r.logHiddenLink("link_noop");
                    r.logClick(h, "click", "micx")
                },
                yt = function(n) {
                    var t = _d.querySelector(".b_speech_overlay");
                    wt && t && !t.contains(n.target) && ht()
                },
                pt = function() { t && t.recognizeOnceAsync(function() {}, function(n) { n.indexOf("NotAllowedError") > -1 || n.indexOf("NotReadableError") > -1 ? (a(u.Blocked), r.logDataEvent(h, "blocked", !0), o || ot(!1)) : n.indexOf("NotFoundError") > -1 || n.indexOf("OverconstrainedError") > -1 ? (r.logDataEvent(h, "nomic", !0), a(u.NoMic)) : (ft(f.Error), r.logDataEvent(h, "error", n)) }) },
                ni = function() {
                    ut("");
                    b("");
                    a(u.Waiting);
                    ft(f.None);
                    pt()
                };
            return preactHooks.useEffect(function() {
                if (t) return ut(""), b(""), _d.addEventListener("click", yt), t.sessionStarted = function() {
                        c && c.start && c.start.play();
                        a(u.Listening)
                    }, t.recognized = function(n, t) {
                        var i = t.result.text;
                        b("");
                        ut(i)
                    }, t.recognizing = function(n, t) {
                        var i = t.result.text;
                        b(i)
                    }, t.speechEndDetected = function() {}, t.sessionStopped = function() {
                        var n = preactHooks.useContext(e).detectedText;
                        typeof n == "undefined" ? (ft(f.NoText), a(u.Waiting), r.logDataEvent(h, "empty", !0)) : ot(!1)
                    }, pt(),
                    function() {
                        var n = preactHooks.useContext(e).detectedText;
                        _d.removeEventListener("click", yt);
                        s(n)
                    }
            }, [t]), preact.h("div", { className: "b_speech_overlay", tabIndex: 0 }, o ? preact.h("div", { className: "b_speech_bg", onClick: function() { ht() } }) : null, preact.h("div", { className: "b_speech_cont" }, preact.h(it, null), preact.h("button", {
                className: "b_close",
                id: "b_mic_close",
                role: "button",
                onClick: function() {
                    if (l && y + p != "" && y + p != "undefined") r.logClick(h, "click", "forcequery"), s(y + p);
                    else if (k && (y + p == "undefined" || g == u.Listening)) {
                        r.logClick(h, "click", "forcequeryHello");
                        var n = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.helloQuery ? _vs.locstr.helloQuery : "hello";
                        s(n)
                    } else nt && y + p == "undefined" && g == u.Waiting ? (r.logClick(h, "click", "noSpeechDetectedReopenMic"), ni()) : ht()
                }
            }, preact.h("svg", { width: "102", height: "102", viewBox: "0 0 102 102", fill: "none" }, preact.h("circle", { className: g == u.Listening ? "b_pulse" : "", cx: "51", cy: "51", r: "40", fill: "#007698", "fill-opacity": "0.2" }), preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M51 91C73.0914 91 91 73.0914 91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51C11 73.0914 28.9086 91 51 91Z", fill: "#267596" }), preact.h("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "11", y: "11", width: "80", height: "80" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M51 91C73.0914 91 91 73.0914 91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51C11 73.0914 28.9086 91 51 91Z", fill: "white" })), preact.h("g", { mask: "url(#mask0)" }, preact.h("path", { className: g == u.Listening ? "b_wave" : "", opacity: "0.689286", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M-25 63.7205C65.4167 64.6725 43.2719 38.6305 126.786 26V108.802H-25V63.7205Z", fill: "#4290B8" }), preact.h("path", { className: g == u.Listening ? "b_wave" : "", opacity: "0.689286", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M-28 53.2162C-28 53.2162 14.3477 25.984 45.2093 36.3562C76.0709 46.7284 113.462 88.2649 112.362 88.6179V107.078H-28V53.2162Z", fill: "#42A5B8" })), l ? preact.h("svg", { viewBox: "-15 -15 50 50" }, preact.h("path", { d: "m0 0h20v20h-20z", fill: "none" }), preact.h("path", { className: "icon_path", d: "m16.379 11.694c-.458-.194-.983-.019-1.241.406-.252.416-.553.8-.895 1.142-.544.543-1.191.983-1.908 1.286-.717.304-1.504.472-2.335.472s-1.618-.168-2.335-.471-1.364-.743-1.908-1.286c-.342-.343-.644-.726-.895-1.142-.257-.425-.783-.6-1.24-.407-.552.233-.793.906-.484 1.42.338.563.744 1.081 1.205 1.543.723.722 1.584 1.308 2.542 1.714.664.28 1.375.467 2.115.56v2.069c0 .552.448 1 1 1s1-.448 1-1v-2.069c.74-.093 1.451-.279 2.114-.559h.001c.958-.406 1.819-.991 2.542-1.713l.001-.001c.461-.462.866-.979 1.205-1.542.308-.516.068-1.188-.484-1.422zm-6.379 1.306c2.209 0 4-1.791 4-4v-5c0-2.209-1.791-4-4-4s-4 1.791-4 4v5c0 2.209 1.791 4 4 4zm-2-9c0-1.103.897-2 2-2s2 .897 2 2v5c0 1.103-.897 2-2 2s-2-.897-2-2z", fill: "white" })) : preact.h("path", { d: "M52.8408 51L64 62.1592L62.1592 64L51 52.8408L39.8408 64L38 62.1592L49.1592 51L38 39.8408L39.8408 38L51 49.1592L62.1592 38L64 39.8408L52.8408 51Z", fill: "white" }))), preact.h(tt, null)))
        },
        ut = function() {
            var n = preactHooks.useContext(e),
                nt = n.updateRecordingState,
                y = n.readoutPlayed,
                tt = n.updateReadoutPlayed,
                ft = n.microphoneState,
                i = n.updateMicrophoneState,
                ht = n.recording,
                p = n.readoutEnabled,
                it = n.shouldReopenMic,
                w = n.updateReopenMic,
                rt = n.updateErrorState,
                t = n.loggingName,
                b = n.iconInit,
                ct = n.showPromptOverlay,
                k = n.updateShowOverlay,
                ut = n.allowReadout,
                s = n.audioPlaying,
                d = n.updateAudioSource,
                a, v, l, g;
            return o && (sj_evt.bind("autosuggestHide", function(n) {
                var r = n[0],
                    u = n[1],
                    i = n[2],
                    t = _d.querySelector(".mic_cont");
                i != 0 && t && Lib.CssClass.remove(t, "b_hide")
            }), sj_evt.bind("AS.RequestSent", function() {
                var n = _d.querySelector(".mic_cont");
                n && Lib.CssClass.add(n, "b_hide")
            })), a = function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var o, s, n, e;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                if (!(c && ((n = navigator === null || navigator === void 0 ? void 0 : navigator.permissions) === null || n === void 0 ? void 0 : n.query))) return [3, 4];
                                h.label = 1;
                            case 1:
                                return h.trys.push([1, 3, , 4]), [4, navigator.permissions.query({ name: "microphone" })];
                            case 2:
                                return o = h.sent(), o.state == "prompt" && k(!0), [3, 4];
                            case 3:
                                return s = h.sent(), [3, 4];
                            case 4:
                                return ((e = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || e === void 0 ? void 0 : e.getUserMedia) ? [4, navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function() { i(u.Listening) }).catch(function(n) { n.name == "NotAllowedError" || n.name == "NotReadableError" ? (i(u.Blocked), r.logDataEvent(t, "blocked", !0)) : n.name == "NotFoundError" || n.name == "OverconstrainedError" ? (i(u.NoMic), r.logDataEvent(t, "nomic", !0)) : (rt(f.Error), r.logDataEvent(t, "getUserMediaError", n)) })] : [3, 6];
                            case 5:
                                return h.sent(), [3, 7];
                            case 6:
                                i(u.Waiting);
                                h.label = 7;
                            case 7:
                                return k(!1), nt(!0), [2]
                        }
                    })
                })
            }, v = function() { return __awaiter(void 0, void 0, void 0, function() { return __generator(this, function() { return r.logHiddenLink("link_noop"), s ? (d(null), r.logClick(t, "spokenResponse", "userStopped")) : (a(), r.logClick(t, "click", "mic")), [2] }) }) }, preactHooks.useEffect(function() { b && b() }, []), preactHooks.useEffect(function() {!y && p && ut && (tt(!0), st(w, t).then(function(n) { n != "" && (d(n), r.logDataEvent(t, "spokenResponse", "startPlaying")) })) }, [p]), preactHooks.useEffect(function() { h && it && y && !s && (w(!1), a(), r.logDataEvent(t, "reopenedMic", !0)) }, [s]), l = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.mictt ? _vs.locstr.mictt : "Search using voice", g = 0, preact.h("div", {
                className: "b_icon tooltip",
                role: "button",
                tabIndex: g,
                "aria-label": l,
                "data-sbtipx": l,
                "data-tooltip": l,
                onClick: function() { v() },
                onKeyUp: function(n) {
                    (n.key == "Enter" || n.which == 13) && v()
                }
            }, s ? preact.h(et, null) : preact.h(ot, null))
        },
        ft = function() {
            var t = preactHooks.useContext(e),
                f = t.microphoneState,
                o = t.updateMicrophoneState,
                s = t.recording,
                h = t.showPromptOverlay,
                c = t.updateShowOverlay,
                l = t.loggingName,
                n = !s && f == u.Blocked,
                a = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micAllowTitle ? _vs.locstr.micAllowTitle : "Want to search with your voice?",
                v = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micAllowDesc ? _vs.locstr.micAllowDesc : "Select Allow to let Bing use your microphone",
                y = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micReTitle ? _vs.locstr.micReTitle : "Voice search is turned off",
                p = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micReDesc ? _vs.locstr.micReDesc : "To turn it on",
                w = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micReList1 ? _vs.locstr.micReList1 : "Click the mic button in your browser address bar",
                b = typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.micReList2 ? _vs.locstr.micReList2 : "Select Always Allow to let Bing use your microphone",
                i = function() { n ? (o(u.Waiting), r.logClick(l, "click", "blockedUXClose")) : h && c(!1) },
                k = function(n) {
                    var t = _ge("b_vs_ov");
                    n.target == t && i()
                };
            return preact.h("div", { id: "b_vs_ov", "class": "b_allowOverlay" + (n ? " b_ov_blocked" : ""), onClick: k }, preact.h("div", { "class": "b_overlayCont" }, preact.h("svg", { "class": "b_ov_dots", width: "133", height: "28", viewBox: "0 0 133 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("rect", { x: "53", width: "80", height: "28", rx: "6", fill: "#E8E8E8" }), preact.h("circle", { cx: "4", cy: "7", r: "4", fill: "#E83A3A", onClick: i }), preact.h("circle", { cx: "21", cy: "7", r: "4", fill: "#FFC328" }), preact.h("circle", { cx: "38", cy: "7", r: "4", fill: "#0EB244" })), preact.h("div", { "class": "b_ov_close", onClick: i }, preact.h("img", { "class": "rms_image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABN0lEQVRIS+2TsWoCQRCGjwiBgBqCEJELGFJYpfchhTxHEGxSxCp2kkqTgH0KU6T1Ae4u38Aoe7iju6cQED8YZm9u9p+5ud3kX8jzvJ1l2VNRFDcaioJ9NfYP0OlpqAwvWiQssE/WTQ0HoeJj7Jf1vYa3QbhB0lxM1hreiSO+ZE+qYRvpnuQPsX1FEL8g7zVYfI0IO0W843I6/yHnTsPhIFBns3dc0WOxkO4RKY2r8lgsRFiLzBB/wL9g1cZigdgVohNshX3xfKuvjgfCI76gwE9xlxo+HMTWP/Sbzvv4d8w8XVE44psfio++jF4QN0+LdE886DJ6cTo3T4sIO0XCx+UbiwW55mX0smssFtI9+fvHhfg1SW9Y9CUSYS2yYN3RcBlepBQZ4rsaioJ98iXP+EcNnTldkuQPM36+K+YUoS4AAAAASUVORK5CYII=" })), preact.h("div", { "class": "b_ov_sb" }, preact.h("div", { "class": "b_ov_bar" }, preact.h("svg", { "class": "b_ov_micx", width: "8", height: "10", viewBox: "0 0 8 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M4.52605 2.49992V4.79084C4.3221 4.887 4.13241 5.01421 3.96162 5.16717C3.96939 5.11271 3.97345 5.05684 3.97345 4.99992V2.49992C3.97345 1.92462 3.56109 1.45825 3.05244 1.45825C2.54378 1.45825 2.13143 1.92462 2.13143 2.49992V4.99992C2.13143 5.57521 2.54378 6.04159 3.05244 6.04159C3.15589 6.04159 3.25536 6.02229 3.34819 5.98671C3.24563 6.19729 3.16712 6.425 3.11684 6.665C3.09551 6.66604 3.07403 6.66659 3.05244 6.66659C2.23859 6.66659 1.57883 5.92038 1.57883 4.99992V2.49992C1.57883 1.57944 2.23859 0.833252 3.05244 0.833252C3.86628 0.833252 4.52605 1.57944 4.52605 2.49992Z", fill: "#717171" }), preact.h("path", { d: "M3.05245 7.29159C3.05245 7.74825 3.1524 8.17854 3.32887 8.55596L3.32876 8.85409C3.32876 9.02667 3.20505 9.16659 3.05245 9.16659C2.91257 9.16659 2.79697 9.049 2.77866 8.8965L2.77615 8.85409V7.909C1.5174 7.80475 0.518884 6.64075 0.475128 5.20254L0.473633 5.10409V4.89575C0.473633 4.72317 0.597339 4.58325 0.749935 4.58325C0.889818 4.58325 1.00542 4.70084 1.02371 4.85334L1.02624 4.89575V5.10409C1.02624 6.282 1.84942 7.24246 2.88063 7.28975L2.96035 7.29159H3.05245Z", fill: "#717171" }), preact.h("path", { d: "M7.47327 7.29167C7.47327 8.55733 6.56612 9.58333 5.44705 9.58333C4.32799 9.58333 3.42084 8.55733 3.42084 7.29167C3.42084 6.026 4.32799 5 5.44705 5C6.56612 5 7.47327 6.026 7.47327 7.29167ZM3.97344 7.29167C3.97344 7.63896 4.06738 7.96146 4.22805 8.22842L6.2753 5.91296C6.03926 5.73125 5.75412 5.625 5.44705 5.625C4.63322 5.625 3.97344 6.37121 3.97344 7.29167ZM5.44705 8.95833C6.26089 8.95833 6.92067 8.21212 6.92067 7.29167C6.92067 6.94437 6.82672 6.62187 6.66606 6.35492L4.61881 8.67038C4.85485 8.85208 5.13999 8.95833 5.44705 8.95833Z", fill: "#717171" })), preact.h("svg", { "class": "b_ov_star", width: "10", height: "9", viewBox: "0 0 10 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M4.3366 1.2928C4.54294 0.874729 5.1391 0.874729 5.34544 1.2928L6.32794 3.28352L8.52481 3.60275C8.98619 3.66979 9.17039 4.23679 8.83656 4.5622L7.24685 6.11175L7.62214 8.29979C7.70093 8.75929 7.21864 9.1097 6.80598 8.89275L4.84102 7.8597L2.87607 8.89275C2.46341 9.1097 1.9811 8.75929 2.05991 8.29979L2.43519 6.11175L0.845502 4.5622C0.511648 4.23679 0.695873 3.66979 1.15725 3.60275L3.35414 3.28352L4.3366 1.2928ZM4.84102 1.68297L3.90005 3.58959C3.81812 3.75561 3.65974 3.87068 3.47652 3.8973L1.37244 4.20304L2.89497 5.68712C3.02754 5.81637 3.08804 6.00254 3.05674 6.18504L2.69732 8.28062L4.57927 7.2912C4.74314 7.20504 4.93889 7.20504 5.10277 7.2912L6.98473 8.28062L6.62531 6.18504C6.59402 6.00254 6.65452 5.81637 6.78706 5.68712L8.3096 4.20304L6.20552 3.8973C6.02231 3.87068 5.86393 3.75561 5.78202 3.58959L4.84102 1.68297Z", fill: "#717171" })))), preact.h("div", { "class": "b_ov_body" }, preact.h("div", { "class": "b_ov_perms" }, n ? preact.h("img", { "class": "rms_image", src: "data:image/png;base64,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" }) : preact.h("img", { "class": "rms_image", src: "data:image/png;base64,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" })), preact.h("div", { "class": "b_ov_permZoom" }, n ? preact.h("img", { "class": "rms_image", src: "data:image/png;base64,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" }) : preact.h("img", { "class": "rms_image", src: "data:image/png;base64,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" }), preact.h("div", { "class": "b_ov_click" }, preact.h("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("circle", { cx: "14.977", cy: "14.977", r: "14.977", fill: "#FF0D0D", "fill-opacity": "0.4" })), preact.h("div", { "class": "b_ov_hand" }, preact.h("img", { "class": "rms_image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACY0lEQVR4Ab1Wy3GDQAwVSQ72jRIogQ5MCaQDSnAHpgPsCnAqYHLzjXSAO8Ad2B2QfesVo4i/7cmb0di7iNXbJ4ldojsCY7mxylhpLKF/QGCsNtYo2y5YY0cPkI4RKAiCpqqqJssyGTzo8feNZY4sghWPkk7gnCRJw9hut7xA6QJhodz5dtQB6aIomt1ux3NX994oQjj7vt/UdW0DX69XOxaLdAJJdSTpKIrYL6MZOMI5juN2ASk5AuV5bn8xTtO09UNQkARZAOQFyXAqcMA7K8uyXZQDYXdSCczLQJiTZFSqJpHCGVIxQEKTQQC9a54bSFU0FRjFYAtnv9//yZncIX4xlvLy3ECqappRaLa1+nImd8hKQFIG0oE6kAjDkIOnNANln5SSDCuh06DBBGlme0XOuZMz2TZ4hh1x4Q1BtFdOM7AnVWics7Ed9oGrnhYUWqe9QETmdS646mlJe6FaGZBc5nkuVHslWPx9JPAPnG63m+95Hpnd0mq1srYUeGe9XtPpdGI1v6beiUi116NQu56scMC21yO51RB9PfkNB7PYOS+uaA3RWtHbgLx80KOyC35wOBzoVfhQYwRsbw8mJ2SqmoxEdrzZbOgZnM/n9q+cT8gVEm4Sz8qqge843WWuNCFMdD70rwKf7dRzGbRHIn+fXwnx5aqpB23boOfw8ce5jIMBbQDGqEqcuZifkwqsI24jg20UUveaOmogczweOyohIMgJeTsSeyp4QPfjCyRuxr7pXoFnN8Zz7u0NiXs3Kh9dcLlcrAlg8Emqkp8FCPRd6NH/pXveC49eB6gENS7ORvELebtMMIsEIccAAAAASUVORK5CYII=" }), preact.h("span", null, n ? "2" : "")))), n ? preact.h("div", { "class": "b_ov_click b_ov_click2" }, preact.h("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("circle", { cx: "14.977", cy: "14.977", r: "14.977", fill: "#FF0D0D", "fill-opacity": "0.4" })), preact.h("div", { "class": "b_ov_hand" }, preact.h("img", { "class": "rms_image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACY0lEQVR4Ab1Wy3GDQAwVSQ72jRIogQ5MCaQDSnAHpgPsCnAqYHLzjXSAO8Ad2B2QfesVo4i/7cmb0di7iNXbJ4ldojsCY7mxylhpLKF/QGCsNtYo2y5YY0cPkI4RKAiCpqqqJssyGTzo8feNZY4sghWPkk7gnCRJw9hut7xA6QJhodz5dtQB6aIomt1ux3NX994oQjj7vt/UdW0DX69XOxaLdAJJdSTpKIrYL6MZOMI5juN2ASk5AuV5bn8xTtO09UNQkARZAOQFyXAqcMA7K8uyXZQDYXdSCczLQJiTZFSqJpHCGVIxQEKTQQC9a54bSFU0FRjFYAtnv9//yZncIX4xlvLy3ECqappRaLa1+nImd8hKQFIG0oE6kAjDkIOnNANln5SSDCuh06DBBGlme0XOuZMz2TZ4hh1x4Q1BtFdOM7AnVWics7Ed9oGrnhYUWqe9QETmdS646mlJe6FaGZBc5nkuVHslWPx9JPAPnG63m+95Hpnd0mq1srYUeGe9XtPpdGI1v6beiUi116NQu56scMC21yO51RB9PfkNB7PYOS+uaA3RWtHbgLx80KOyC35wOBzoVfhQYwRsbw8mJ2SqmoxEdrzZbOgZnM/n9q+cT8gVEm4Sz8qqge843WWuNCFMdD70rwKf7dRzGbRHIn+fXwnx5aqpB23boOfw8ce5jIMBbQDGqEqcuZifkwqsI24jg20UUveaOmogczweOyohIMgJeTsSeyp4QPfjCyRuxr7pXoFnN8Zz7u0NiXs3Kh9dcLlcrAlg8Emqkp8FCPRd6NH/pXveC49eB6gENS7ORvELebtMMIsEIccAAAAASUVORK5CYII=" }), preact.h("span", null, "1"))) : null, preact.h("div", { "class": "b_ov_textCont" }, preact.h("div", { "class": "b_ov_mic" }, preact.h("svg", { width: "36", height: "50", viewBox: "0 0 36 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M33.6249 22.5C34.5742 22.5 35.3587 23.2055 35.4829 24.1205L35.4999 24.375V25.625C35.4999 34.5235 28.6124 41.8135 19.8774 42.4543L19.8749 48.125C19.8749 49.1605 19.0354 50 17.9999 50C17.0507 50 16.2662 49.2945 16.1419 48.3795L16.1249 48.125V42.4545C7.58301 41.829 0.807013 34.845 0.510088 26.2158L0.499939 25.625V24.375C0.499939 23.3395 1.33941 22.5 2.37494 22.5C3.32419 22.5 4.10866 23.2055 4.23281 24.1205L4.24994 24.375V25.625C4.24994 32.6925 9.83606 38.4552 16.8339 38.739L17.3749 38.75H18.6249C25.6924 38.75 31.4552 33.164 31.7389 26.166L31.7499 25.625V24.375C31.7499 23.3395 32.5894 22.5 33.6249 22.5ZM17.9999 0C23.5227 0 27.9999 4.47715 27.9999 10V25C27.9999 30.5228 23.5227 35 17.9999 35C12.4771 35 7.99994 30.5228 7.99994 25V10C7.99994 4.47715 12.4771 0 17.9999 0ZM17.9999 3.75C14.5482 3.75 11.7499 6.54822 11.7499 10V25C11.7499 28.4517 14.5482 31.25 17.9999 31.25C21.4517 31.25 24.2499 28.4517 24.2499 25V10C24.2499 6.54822 21.4517 3.75 17.9999 3.75Z", fill: "white" }))), preact.h("div", { "class": "b_ov_title" }, n ? y : a), preact.h("div", { "class": "b_ov_text" }, n ? p : v, n ? preact.h("ol", null, preact.h("li", null, w), preact.h("li", null, b)) : null)))))
        },
        et = function() { return preact.h("svg", { className: "read_icon", width: "40", height: "40", viewBox: "0 0 40 40", fill: "none" }, preact.h("g", { filter: "url(#filter0_d)" }, preact.h("path", { className: "icon_path", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36Z" })), preact.h("line", { className: "b_sl", x1: "12", y1: "19", x2: "12", y2: "21", stroke: "white", "stroke-width": "1.5" }), preact.h("line", { className: "b_ml", x1: "16", y1: "16", x2: "16", y2: "24", stroke: "white", "stroke-width": "1.5" }), preact.h("line", { className: "b_ll", x1: "20", y1: "13", x2: "20", y2: "27", stroke: "white", "stroke-width": "1.5" }), preact.h("line", { className: "b_ml", x1: "24", y1: "16", x2: "24", y2: "24", stroke: "white", "stroke-width": "1.5" }), preact.h("line", { className: "b_sl", x1: "28", y1: "19", x2: "28", y2: "21", stroke: "white", "stroke-width": "1.5" }), preact.h("defs", null, preact.h("filter", { id: "filter0_d", x: "0", y: "0", width: "40", height: "40", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" }, preact.h("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }), preact.h("feColorMatrix", { "in": "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), preact.h("feOffset", null), preact.h("feGaussianBlur", { stdDeviation: "2" }), preact.h("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.2 0" }), preact.h("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }), preact.h("feBlend", { mode: "normal", "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))) },
        ot = function() { return preact.h("svg", { viewBox: "0 0 20 20" }, preact.h("path", { d: "m0 0h20v20h-20z", fill: "none" }), preact.h("path", { className: "icon_path", d: "m16.379 11.694c-.458-.194-.983-.019-1.241.406-.252.416-.553.8-.895 1.142-.544.543-1.191.983-1.908 1.286-.717.304-1.504.472-2.335.472s-1.618-.168-2.335-.471-1.364-.743-1.908-1.286c-.342-.343-.644-.726-.895-1.142-.257-.425-.783-.6-1.24-.407-.552.233-.793.906-.484 1.42.338.563.744 1.081 1.205 1.543.723.722 1.584 1.308 2.542 1.714.664.28 1.375.467 2.115.56v2.069c0 .552.448 1 1 1s1-.448 1-1v-2.069c.74-.093 1.451-.279 2.114-.559h.001c.958-.406 1.819-.991 2.542-1.713l.001-.001c.461-.462.866-.979 1.205-1.542.308-.516.068-1.188-.484-1.422zm-6.379 1.306c2.209 0 4-1.791 4-4v-5c0-2.209-1.791-4-4-4s-4 1.791-4 4v5c0 2.209 1.791 4 4 4zm-2-9c0-1.103.897-2 2-2s2 .897 2 2v5c0 1.103-.897 2-2 2s-2-.897-2-2z" })) },
        s = function(n) {
            var t = preactHooks.useContext(e).handleText;
            n && typeof document != "undefined" && t(n, _vs)
        },
        st = function(n, t) {
            return __awaiter(void 0, void 0, void 0, function() {
                var f, o, s, u, e, i;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return (typeof document != "undefined") ? (f = "", o = location.search.indexOf("?"), s = location.search.slice(o + 1).split("&").indexOf("uqubfprlg=1") >= 0, !s) ? [3, 6] : (h && typeof uquSpokenResponse != "undefined" && uquSpokenResponse.reopenMic && n(uquSpokenResponse.reopenMic), !(typeof uquSpokenResponse != "undefined" && uquSpokenResponse.url)) ? [3, 1] : (f = uquSpokenResponse.url, y(uquSpokenResponse, t), [3, 6]) : [3, 7];
                        case 1:
                            return (typeof uquSpokenResponse != "undefined" && uquSpokenResponse.messageType == "spokenResponse" && uquSpokenResponse.encodedData) ? (f = "data:audio/wav;base64," + uquSpokenResponse.encodedData, y(uquSpokenResponse, t), [3, 6]) : [3, 2];
                        case 2:
                            return b ? (u = document.querySelector(".b_cat3a [data-ssml]"), u || (u = document.querySelector(".b_poleContent [data-ssml]")), u || (u = document.querySelector("[data-ssml]")), !u) ? [3, 4] : (r.logTime("TTSApiStart"), e = u.getAttribute("data-ssml"), [4, v(e)]) : [3, 6];
                        case 3:
                            return i = c.sent(), i && i.audio && (f = "data:audio/wav;base64," + i.audio), r.logTime("TTSApiEnd"), [3, 6];
                        case 4:
                            return r.logTime("TTSApiStart"), e = "", [4, v(e)];
                        case 5:
                            i = c.sent();
                            i && i.audio && (f = "data:audio/wav;base64," + i.audio);
                            r.logTime("TTSApiEnd");
                            c.label = 6;
                        case 6:
                            return [2, f];
                        case 7:
                            return [2]
                    }
                })
            })
        },
        v = function(n) { var t = { headers: { Accept: "application/json", "Content-Type": "application/xml", "X-UQU-TTSOption": "DefaultSSML" }, method: "POST", body: n }; return fetch("/opaluqu/tts/v1", t).then(function(n) { if (n.ok) return n.json() }).catch(function() { return null }) },
        y = function(n, t) {
            n.fallbackSpokenText && r.logDataEvent(t, "spokenText", n.fallbackSpokenText);
            n.isDefaultResponse && r.logDataEvent(t, "isDefaultResponse", n.isDefaultResponse);
            g && n.spokenResponseType && r.logDataEvent(t, "spokenResponseType", n.spokenResponseType)
        },
        ht = function(n) {
            switch (n) {
                case u.Waiting:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.wait ? _vs.locstr.wait : u.Waiting;
                case u.Listening:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.listen ? _vs.locstr.listen : u.Listening;
                case u.Blocked:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.block ? _vs.locstr.block : u.Blocked;
                case u.NoMic:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.nomic ? _vs.locstr.nomic : u.NoMic
            }
        },
        ct = function(n) {
            switch (n) {
                case f.Error:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.error ? _vs.locstr.error : f.Error;
                case f.NoText:
                    return typeof _vs != "undefined" && _vs && _vs.locstr && _vs.locstr.notext ? _vs.locstr.notext : f.NoText
            }
        }
});
define("Components/Core/SpeechPreact_Utils", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.iconInit = t.updateText = void 0;
    t.updateText = function(n, t) {
        var i = document.querySelector("#sb_form_q"),
            e, f, r, u;
        i && (i.value = n, typeof t != "undefined" && t && t.sboxtgt && (i.form.action = t.sboxtgt), URLSearchParams && (e = new URLSearchParams(window.location.search), f = e.get("location"), f && (r = sj_ce("input"), r.type = "hidden", r.name = "location", r.value = f, i.form.appendChild(r))), (_G === null || _G === void 0 ? void 0 : _G.IG) && (u = sj_ce("input"), u.type = "hidden", u.name = "uqurequestid", u.value = _G.IG, i.form.appendChild(u)), i.form.submit())
    };
    t.iconInit = function() {
        var n = document.querySelector("#sb_form");
        n && n.classList.add("hasmic")
    }
});
define("Components/Core/CNModules/SwitchTabPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.SwitchTab = void 0;
    t.SwitchTab = function(n) {
        var o = n.belowSearchBox,
            f = preactHooks.useContext(i.ModelContext).model,
            t = f.IsEnSearch,
            s = f.IsMobile,
            u = f.LocStrings,
            h = "est_common " + (t ? "est_unselected" : "est_selected"),
            c = "est_common " + (t ? "est_selected" : "est_unselected"),
            l = t ? u.LOC_SEARCH_SWITCHTAB_MOBILE_EN : u.LOC_SEARCH_SWITCHTAB_MOBILE_CN,
            a = function() { if (!t) return preact.h("div", { "class": "es_cntip" }, u.LOC_SEARCH_SWITCHTAB_MOBILE_CN_TIP) },
            e = function(n) {
                var r = "ensearch",
                    f = t ? "SwitchToChinese" : "SwitchToEnglish",
                    u, i;
                (!t || n != 1) && (t || n != 0) && (u = t ? "0" : "1", sj_cook.set("ENSEARCH", "BENVER", u, !1, "/"), Log && Log.Log("DHTMLClick", "EnglishSearch_SwitchTab", f, !1), history.pushState("", document.title, window.location.pathname + window.location.search), i = t ? EnglishSearchShared.RemoveParameter(r) : EnglishSearchShared.SetParameter(r, "1"), i = EnglishSearchShared.SetFormCode(i, "BEHPTB"), _w.location.href = i)
            };
        return o && s ? preact.h(r.Region, { nodeName: "SwitchTab", parentNodeName: "Core" }, preact.h("div", { id: "es_switch", "class": "es_switch", onClick: function() { e(-1) } }, preact.h("div", { "class": "es_switchbtn" }, l), preact.h(a, null))) : !o && !s ? preact.h(r.Region, { nodeName: "SwitchTab", parentNodeName: "Core" }, preact.h("div", { id: "est_switch" }, preact.h("div", { id: "est_cn", "class": h, onClick: function() { e(0) } }, u.LOC_SEARCH_SWITCHTAB_DESKTOP_CN), preact.h("div", { id: "est_en", "class": c, onClick: function() { e(1) } }, u.LOC_SEARCH_SWITCHTAB_DESKTOP_EN))) : void 0
    }
});
define("Components/Core/CNModules/SearchPreact_cn", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/HooksPreact", "Components/NewTab/ChromePreact", "Components/Core/SpeechPreact", "Components/Core/SpeechPreact_Utils", "Components/Core/CNModules/SwitchTabPreact"], function(n, t, i, r, u, f, e, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.SearchBox = t.SearchContext = t.searchboxParallaxRatio = void 0;
    t.searchboxParallaxRatio = .7;
    t.SearchContext = preact.createContext(null);
    t.SearchBox = function() {
        var f = preactHooks.useState(""),
            l = f[0],
            v = f[1],
            e = preactHooks.useState(!1),
            y = e[0],
            p = e[1],
            n = preactHooks.useContext(i.ModelContext),
            w = n.model,
            u = n.scrollPosition,
            o = n.searchboxFixed,
            k = n.dimmer,
            h = w.IsMobile,
            d = preactHooks.useRef(null),
            g = "sbox " + (o || h && k ? "fix" : ""),
            c = !h && u && u.top != 0 && !o ? "translate3d(0, " + -(u.top * .15) + "px, 0)" : "",
            nt = c ? { transform: c } : null;
        return preact.h(t.SearchContext.Provider, { value: { searchText: l, updateSearchText: v, hasText: y, updateHasText: p } }, preact.h(r.Region, { nodeName: "Searchbox", parentNodeName: "Core" }, preact.h(b, null), preact.h("div", { className: g, style: nt, ref: d }, preact.h(s.SwitchTab, { belowSearchBox: !1 }), preact.h(a, null))), preact.h(s.SwitchTab, { belowSearchBox: !0 }))
    };
    var h = function() {
            var t = preactHooks.useContext(i.ModelContext).model,
                f = t.LocStrings,
                e = t.InPrivate,
                r = t.IsMobile,
                u = e ? "#111" : "#007DAA",
                n = preactHooks.useRef(null),
                o = function(t) {
                    var i;
                    (t.key == "Enter" || t.which == 13) && ((i = n === null || n === void 0 ? void 0 : n.current) === null || i === void 0 ? void 0 : i.click())
                };
            return preact.h(preact.Fragment, null, preact.h("input", { id: "sb_form_go", type: "submit", "aria-label": "Search", name: "search", value: "", ref: n, tabIndex: r ? -1 : 0 }), preact.h("label", { "for": "sb_form_go", className: "search icon tooltip", id: "search_icon", "aria-label": f.LOC_SEARCH_THE_WEB, onKeyDown: o, tabIndex: r ? 0 : -1 }, preact.h("svg", { viewBox: "0 0 25 25" }, preact.h("path", { stroke: u, "stroke-width": "2.5", "stroke-linecap": "round", "stroke-miterlimit": "10", fill: "none", d: "M23.75 23.75l-9-9" }), preact.h("circle", { stroke: u, "stroke-width": "2.5", "stroke-linecap": "round", "stroke-miterlimit": "10", cx: "9", cy: "9", r: "7.75", fill: "none" }), preact.h("path", { fill: "none", d: "M25 25h-25v-25h25z" }))))
        },
        c = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                t = n.LocStrings,
                r = n.MultiLangKeyboardEnabled,
                u = n.InPrivate,
                f = u ? "#111" : "#007DAA";
            if (r) return preact.h("div", { "class": "icon tooltip", "aria-label": t.LOC_KEYBOARD_ICON_TOOLTIP }, preact.h("div", { id: "vkeyIcon", "class": "vkeyRest" }, preact.h("svg", { viewBox: "0 0 25 24", "enable-background": "new 0 0 25 24" }, preact.h("path", { fill: f, d: "M19 8h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-12.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm4.5 2.5h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1zm8 2.5h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-5 0h-3c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm-7.5 0h-.5c-.552 0-1 .448-1 1v.5c0 .552.448 1 1 1h.5c.552 0 1-.448 1-1v-.5c0-.552-.448-1-1-1zm15.5-11h-19c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h19c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3zm.5 17c0 .276-.225.5-.5.5h-19c-.275 0-.5-.224-.5-.5v-14c0-.276.225-.5.5-.5h19c.275 0 .5.224.5.5v14z" }), preact.h("path", { fill: "none", d: "M0 0h25v24h-25z" }))))
        },
        l = function(n) {
            var s = n.updateContainerBorder,
                r = preactHooks.useRef(null),
                h = preactHooks.useContext(i.ModelContext),
                u = h.updateDimmer,
                v = h.model,
                e = v.IsMobile,
                o = preactHooks.useContext(t.SearchContext),
                f = o.searchText,
                y = o.hasText,
                c = o.updateHasText,
                l, a;
            return preactHooks.useEffect(function() { r.current && r.current.form && f && f != "" && (r.current.focus(), r.current.form.submit()) }, [f]), preactHooks.useEffect(function() {
                addEventListener("keydown", function(n) {!r.current || n.target != document.body && n.target != r.current || n.ctrlKey || n.shiftKey || n.altKey || (n.key && n.key.length) != 1 || (u(!0), r.current.focus()) });
                addEventListener("keyup", function(n) { n.key == "Enter" ? s() : n.key == "Escape" && (s(), u(!1)) });
                r && r.current && (r.current.addEventListener("click", function() { u(!0) }), e || r.current.addEventListener("blur", function() { u(!1) }))
            }, [r.current]), l = function(n) { n.target.value ? c(!0) : c(!1) }, a = e && !y && r.current && r.current.value, a && (r.current.value = ""), preact.h("input", { id: "sb_form_q", className: "sb_form_q", name: "q", type: "search", maxLength: 1e3, autocomplete: "off", spellcheck: !1, "aria-label": "Enter your search term", autofocus: !0, "aria-controls": "sw_as", "aria-autocomplete": "both", "aria-owns": "sw_as", onClick: u.bind(null, !0), onInput: e ? l : null, value: f || r.current && r.current.value, ref: r })
        },
        a = function() {
            var t = preactHooks.useState("/search"),
                g = t[0],
                i = t[1],
                u = preactHooks.useState(!1),
                f = u[0],
                e = u[1],
                o = preactHooks.useState(!1),
                tt = o[0],
                s = o[1],
                a = function() { e(!0) },
                n = function() { e(!1) },
                b = function() { s(!0) },
                d = function() { s(!1) };
            return preactHooks.useEffect(function() {
                var n, t, r, u, f, e = (f = (u = (r = (t = (n = location.search) === null || n === void 0 ? void 0 : n.slice(1)) === null || t === void 0 ? void 0 : t.split("&")) === null || r === void 0 ? void 0 : r.filter(function(n) { return n.indexOf("scope=") == 0 })[0]) === null || u === void 0 ? void 0 : u.split("=")[1]) !== null && f !== void 0 ? f : "";
                switch (e) {
                    case "image":
                    case "images":
                        i("/images/search");
                        break;
                    case "video":
                    case "videos":
                        i("/videos/search")
                }
            }, []), preactHooks.useEffect(function() {
                return sj_evt.bind("AS.Canvas.Show", a), sj_evt.bind("AS.Canvas.Hide", n), sj_evt.bind("ASHide", n), sj_evt.bind("AS.Layout.NextWord.Show", b), sj_evt.bind("AS.Layout.NextWord.Hide", d),
                    function() {
                        sj_evt.unbind("AS.Canvas.Show", a);
                        sj_evt.unbind("AS.Canvas.Hide", n);
                        sj_evt.unbind("ASHide", n);
                        sj_evt.unbind("AS.Layout.NextWord.Show", b);
                        sj_evt.unbind("AS.Layout.NextWord.Hide", d)
                    }
            }, [f]), preact.h(r.InstForm, { className: "sb_form hassbi " + (f ? "as_show" : "") + " " + (tt ? "as_nextword" : ""), id: "sb_form", action: g, nodeName: "Searchform", parentNodeName: "Searchbox" }, preact.h(l, { updateContainerBorder: n }), preact.h(nt, null), preact.h(v, null), preact.h(c, null), preact.h(y, null), preact.h(h, null), preact.h(w, null), preact.h(k, null), preact.h(p, null))
        },
        v = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                t = n.Features,
                r = { isPartner: !1, loggingName: "speech", textareaId: "#sb_form_q", handleText: o.updateText, iconInit: o.iconInit, clientbuild: "bing", allowReadout: !1, isAjaxPage: !1 };
            if (t.MicEnabled == "true" && u.useClientSideRender()) return preact.h("div", { className: "mic_cont icon" }, preact.h(e.Speech, { props: r }))
        },
        y = function() {
            var n = preactHooks.useContext(i.ModelContext),
                o = n.model,
                s = n.dimmer,
                r = preactHooks.useContext(t.SearchContext),
                h = r.hasText,
                u = r.updateHasText,
                c = o.IsMobile,
                f, e;
            if (c) return f = function(n) {
                (n.key == "Enter" || n.which == 13) && u(!1)
            }, e = "clear icon " + (s && h ? "show" : "hidden"), preact.h("div", { className: e, role: "button", "aria-label": "Clear", onClick: u.bind(null, !1), onKeyUp: f, tabIndex: 0 }, "×")
        },
        p = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                t = n.FormCode;
            return preact.h(preact.Fragment, null, preact.h(r.InstLink, { id: "sb_hidden", nodeName: "sb_hidden", parentNodeName: "Searchbox" }), preact.h("input", { type: "hidden", value: t, name: "form" }))
        },
        w = function() { return preact.h("div", { id: "sw_as", style: "display: block; margin-left: 0px; margin-right: -10px;" }, preact.h("div", { className: "sa_as", "data-priority": "2", style: "display: none;" })) },
        b = function() {
            var n = preactHooks.useContext(i.ModelContext),
                t = n.dimmer,
                r = n.updateDimmer;
            return preact.h("div", { className: "dimmer " + (t ? "dim" : ""), onClick: r.bind(null, !1) })
        },
        k = function() { return preact.h("div", { className: "below_sbox" }, preact.h(g, null), preact.h(d, null), preact.h(f.NewTabMostVisitedSites, null)) },
        d = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                t = n.SupportedLanguages,
                u = n.LocStrings;
            if (t.length > 2) return preact.h(r.Region, { nodeName: "LanguageSwitcher", parentNodeName: "Core" }, preact.h("div", { "class": "switch_lang" }, preact.h("span", null, u.LOC_HOMEPAGE_LANGUAGESWITCH_TITLETEXT), t.map(function(n) { return preact.h(r.InstLink, { href: n.Url, nodeName: "Language", parentNodeName: "LanguageSwitcher" }, n.Name) })))
        },
        g = function() {
            var t = preactHooks.useContext(i.ModelContext),
                u = t.scrollPosition,
                f = t.model,
                n = f.SymbolOfSolidarity;
            if (n && n.Message) {
                var e = n.Message,
                    o = n.Url,
                    s = n.UrlText;
                if (!u || u.top == 0) return preact.h("div", { "class": "sos" }, preact.h("span", { "class": "text" }, preact.h("span", null, e), preact.h("span", null, " "), preact.h(r.InstLink, { href: o, nodeName: "SOS", parentNodeName: "Searchbox" }, s)))
            }
        },
        nt = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                t = n.InPrivate,
                r = n.LocStrings;
            if (t) return preact.h("div", { className: "sb_bpr" }, preact.h("span", null, r.InPrivate))
        }
});
define("Components/Core/ScrollPreact_noscrollbar", ["require", "exports", "Components/Core/MuseumCard/MuseumCardPreact", "Components/Core/Modules/ModulesPreact", "Components/Core/Modules/FooterPreact", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "Components/Core/Carousel/CarouselPreact", "Components/Core/CNModules/SearchPreact_cn"], function(n, t, i, r, u, f, e, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ScrollContainer = void 0;
    t.ScrollContainer = function() {
        var n = preactHooks.useRef(null),
            i = preactHooks.useContext(f.ModelContext),
            y = i.updateScrollPosition,
            p = i.updateScrolled,
            w = i.updateSearchboxFixed,
            b = i.updateBackgroundOpacity,
            k = i.scrolled,
            u = preactHooks.useContext(f.ModelContext).model,
            d = u.HasVerticalScroll,
            r = u.IsMobile,
            t = e.useScrollPosition(n.current).top,
            o = preactHooks.useState(-1),
            c = o[0],
            l = o[1],
            a = r && c != -1 ? c + "px" : "",
            g = a ? { height: a } : null;
        preactHooks.useEffect(function() {
            var i, u, f;
            n && n.current && (i = n.current.getBoundingClientRect().height, !k && t > 0 && (u = document.querySelector("#vs_hidden"), Log && Log.Log("Show", "HPVS", "Scroll", !0, "top", t.toString()), si_T && u && si_T(u.getAttribute("data-h"))), y({ top: t, height: i }), p(t > 0), w(t > i * s.searchboxParallaxRatio), f = r ? 0 : .3, b(Math.max(f, 1 - t / window.innerHeight).toString()))
        }, [t]);
        preactHooks.useEffect(function() {
            (document.addEventListener("keydown", tt), r) && (sj_evt && sj_evt.bind("bnp.notif.shown", function(n) { v(n, !0) }), sj_evt && sj_evt.bind("bnp.embed.close", function(n) { v(n, !1) }))
        }, []);
        var nt = function() {
                var t = preactHooks.useContext(f.ModelContext),
                    i = t.clientSettings,
                    r = t.carouselLoaded,
                    n;
                return r ? (n = i.Pn.St, n == 0 ? "show_all" : n == 1 ? "show_title" : "show_none") : "show_none"
            },
            tt = function(n) {
                var r = preactHooks.useContext(f.ModelContext),
                    t = r.model,
                    u = r.updateModel,
                    o = t.MediaContents,
                    e = t.CurrentIndex,
                    s = o.length - 1,
                    i;
                n.target != document.body || n.shiftKey || n.ctrlKey || (n.code == "ArrowLeft" ? (i = __assign(__assign({}, t), { CurrentIndex: Math.min(s, e + 1) }), u(i)) : n.code == "ArrowRight" && (i = __assign(__assign({}, t), { CurrentIndex: Math.max(0, e - 1) }), u(i)))
            },
            v = function(t, i) { var u, f, e; if (r && n && n.current) { if (!i) { l(-1); return }(u = t[1] && document.getElementById(t[1].vid), u && u.offsetTop == 0) && (f = n.current.clientHeight, e = u.clientHeight, f > e && l(f - u.clientHeight)) } };
        return preact.h("div", { className: "bottom_row", style: g }, preact.h("div", { className: "scroll_cont " + nt() + (d ? "" : " no_vs"), id: "scroll_cont", ref: n }, preact.h(h, null)))
    };
    var h = function() { return preact.h("div", { className: "vs_cont", id: "vs_cont" }, preact.h(i.MuseumCard, null), preact.h("div", { className: "vs" }, preact.h(o.Carousel, null), preact.h(r.Modules, null)), preact.h(u.Footer, null)) }
});
define("Components/Core/Header/ScopesPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Scopes = void 0;
    t.Scopes = function() {
        var h = preactHooks.useContext(i.ModelContext),
            t = h.model,
            s = h.clientSettings,
            c = t.Scopes,
            l = t.IsMobile,
            a = t.LocStrings,
            n = preactHooks.useRef(null);
        if (!l) return s && s.Sc && s.Sc.St == 0 ? (preactHooks.useEffect(function() {
            n && n.current && (n.current.addEventListener("mouseenter", function() { f(n.current) }), n.current.addEventListener("mouseleave", function() { n.current.contains(document.activeElement) || u(n.current) }), n.current.addEventListener("focusout", function(t) { n.current.contains(document.activeElement) || n.current.contains(t.relatedTarget) || u(n.current) }), n.current.addEventListener("keydown", function(t) {
                if (t.keyCode === 13) { f(n.current); return }
                if (t.keyCode === 27) {
                    u(n.current);
                    n.current.focus();
                    return
                }
            }))
        }, []), preact.h(r.Region, { nodeName: "ScopeBar", parentNodeName: "Header" }, preact.h("ul", { className: "scopes", role: "application" }, c.map(function(n) { if (!n.Overflow || n.Overflow && n.ExposeIfPossible) return preact.h("li", { className: "scope " + (n.ExposeIfPossible ? "try_exp" : ""), id: n.Id }, preact.h(o, { item: n, hasIcon: !1 })) }), preact.h("li", { className: "scope dots", id: "dots_overflow_menu_container", tabIndex: 0, role: "button", "aria-haspopup": "true", "aria-expanded": "false", "aria-label": a.LOC_OVERFLOWMENU_MORE_ARIALABEL, ref: n }, preact.h(e, { items: c.filter(function(n) { return n.Overflow }), hasIcon: !1 }))))) : void 0
    };
    var e = function(n) {
            var t = n.items,
                i = n.hasIcon;
            return preact.h("ul", { className: "overflow_menu" }, t.map(function(n) {
                var r = n.SubScopes.length > 0,
                    t = preactHooks.useRef(null);
                return preactHooks.useEffect(function() {
                    t && t.current && r && (t.current.addEventListener("mouseenter", function() { f(t.current) }), t.current.addEventListener("mouseleave", function() { t.current.contains(document.activeElement) || u(t.current) }), t.current.addEventListener("focusout", function(n) { t.current.contains(document.activeElement) || t.current.contains(n.relatedTarget) || u(t.current) }), t.current.addEventListener("keydown", function(n) {
                        if (n.keyCode === 13 && !t.current.classList.contains("focusin")) {
                            event.preventDefault();
                            f(t.current);
                            return
                        }
                        if (n.keyCode === 27 && t.current.classList.contains("focusin")) {
                            u(t.current);
                            event.stopPropagation();
                            t.current.getElementsByTagName("a")[0].focus();
                            return
                        }
                    }))
                }, []), preact.h("li", { className: "overflow_item" + (r ? " has_sub" : "") + (n.IsDivider ? " divider" : "") + (n.ExposeIfPossible ? " try_exp" : ""), id: n.Id, role: r ? "button" : "presentation", "aria-haspopup": r ? "true" : "false", "aria-expanded": r ? "false" : "", "aria-label": n.Text, ref: t }, preact.h(o, { item: n, hasIcon: i }), r ? preact.h(preact.Fragment, null, preact.h("span", { className: "scarrow" }), preact.h("div", { className: "overflow_container" }, preact.h("div", { className: "submenu" }, preact.h(e, { items: n.SubScopes, hasIcon: !0 })))) : null)
            }))
        },
        o = function(n) {
            var t = n.item,
                f = n.hasIcon,
                i = t.Text,
                e = t.Id,
                u = t.BaseUrl,
                o = u.indexOf("//") == 0;
            return preact.h(r.InstLink, { href: u, nodeName: e, parentNodeName: "Header", target: o ? "_blank" : "", rel: "noopener" }, f ? [preact.h("div", { className: "icon" }), preact.h("div", { className: "text" }, i)] : i)
        },
        f = function(n) {
            n.classList.add("focusin");
            n.setAttribute("aria-expanded", "true")
        },
        u = function(n) {
            n.classList.remove("focusin");
            n.setAttribute("aria-expanded", "false")
        }
});
define("Components/Notifications/Notifications", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/HooksPreact", "Components/Core/UtilsPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Notifications = void 0;
    t.Notifications = function() {
        var n = preactHooks.useContext(i.ModelContext).model,
            t = n.IsMobile,
            u = n.UserType;
        if (r.useClientSideRender() && !t && u == "msb") return preact.h(f, null)
    };
    var f = function() {
        var o = preactHooks.useContext(i.ModelContext).model,
            n = o.LocStrings,
            t = "BFBHP",
            r = "BFBUSR",
            s = sj_cook.get(r, t),
            h = preactHooks.useState(s ? s : ""),
            f = h[0],
            c = h[1],
            e = function(n) {
                sj_cook.set(r, t, n);
                c(n);
                setTimeout(function() { location.reload() }, 300)
            };
        return preactHooks.useEffect(function() { f !== "0" && f !== "1" && sj_cook.set(r, t, "-1", !0, "/") }, []), f ? void 0 : preact.h("div", { className: "notif msb" }, preact.h("div", { className: "title" }, u.FormatWorkString(o, n.LOC_MSB_OPTIN_TITLE)), preact.h("div", { className: "msg" }, n.LOC_MSB_OPTIN_MESSAGE), preact.h("div", { className: "buttons" }, preact.h("div", { className: "accpt", onClick: e.bind(null, "1") }, n.LOC_MSB_OPTIN_ACCEPT), preact.h("div", { className: "rjct", onClick: e.bind(null, "0") }, n.LOC_MSB_OPTIN_REJECT), preact.h("div", { className: "dismiss", onClick: e.bind(null, "0") }, "✕")))
    }
});
define("Components/Core/Header/LanguageSwitcherPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.LanguageSwitcher = void 0;
    t.LanguageSwitcher = function() {
        var n = preactHooks.useContext(i.ModelContext).model,
            u = n.IsMobile,
            t = n.SupportedLanguages;
        if (!u && t.length <= 2) return preact.h(r.Region, { nodeName: "LanguageSwitcher", parentNodeName: "Core" }, preact.h("span", { "class": "sw_mktsw" }, t.map(function(n) { return preact.h(r.InstLink, { nodeName: n.Name, parentNodeName: "LanguageSwitcher", className: "sw_lang", href: n.Url }, n.Name) })))
    }
});
define("Components/Core/Header/QuickSettingsPreact", ["require", "exports", "Components/Core/UtilsPreact", "Components/Core/HooksPreact"], function(n, t, i, r) {
    "use strict";
    var u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.QuickSettings = void 0;
    u = preact.createContext(null);
    t.QuickSettings = function(n) {
        var t = n.model,
            i = preactHooks.useState(!0),
            r = i[0],
            l = i[1],
            a = t.LocStrings;
        return preact.h(u.Provider, { value: t }, preact.h("div", { className: "hb_sect_container hp_qs " + (r ? "expanded" : "") }, preact.h(f, { id: "qs_hp_expando", title: a.LOC_HOMEPAGE_QS_TITLE, type: "chevron", icon: "hbic_homepage", onToggle: function(n) { l(n) }, enabled: r }), preact.h("div", { className: "hb_expandible" }, preact.h(o, null), preact.h(s, null), preact.h(h, null), preact.h(c, null), preact.h(e, null))))
    };
    var e = function() {
            var r = preactHooks.useContext(u).LocStrings,
                e = preactHooks.useContext(u),
                n = "BFBHP",
                t = "BFBUSR",
                o = sj_cook.get(t, n);
            if (o == "0") return preact.h(f, {
                id: "qs_bfb_ctrl",
                title: i.FormatWorkString(e, r.LOC_MSB_OPTIN_TOGGLE_TITLE),
                type: "toggle",
                enabled: !1,
                onToggle: function() {
                    sj_cook.set(t, n, "1", !0, "/");
                    location.reload()
                }
            })
        },
        o = function() {
            var i = preactHooks.useContext(u),
                t = r.useClientSettings(i),
                n = t.clientSettings,
                e = t.updateClientSettings,
                o = preactHooks.useContext(u).LocStrings;
            return preact.h(f, { id: "qs_menu_ctrl", title: o.LOC_HOMEPAGE_QS_TOGGLENAV, type: "toggle", enabled: n.Sc.St == 0, onToggle: function(t) { e(__assign(__assign({}, n), { Sc: __assign(__assign({}, n.Sc), { St: t ? 0 : 1 }) })) } })
        },
        s = function() {
            var n = preactHooks.useContext(u),
                e = n.HasCarousel,
                o = n.LocStrings,
                i = r.useClientSettings(n),
                t = i.clientSettings,
                s = i.updateClientSettings;
            if (e) return preact.h(f, { id: "qs_carousel_ctrl", title: o.LOC_HOMEPAGE_QS_TOGGLECAROUSEL, type: "toggle", enabled: t.Pn.St < 2, onToggle: function(n) { s(__assign(__assign({}, t), { Pn: __assign(__assign({}, t.Pn), { St: n ? 0 : 2 }) })) } })
        },
        h = function() {
            var n = preactHooks.useContext(u),
                t = r.useClientSettings(n),
                i = t.clientSettings,
                e = t.updateClientSettings,
                o = n.LocStrings;
            return preact.h(f, { id: "qs_iotd_ctrl", title: o.LOC_HOMEPAGE_QS_TOGGLEIOTD, type: "toggle", enabled: i.Iotd == 0, onToggle: function(n) { e(__assign(__assign({}, i), { Iotd: n ? 0 : 1 })) } })
        },
        c = function() {
            if (typeof chrome != "undefined" && chrome.embeddedSearch) {
                var n = preactHooks.useContext(u),
                    t = r.useClientSettings(n),
                    i = t.clientSettings,
                    e = t.updateClientSettings,
                    o = n.LocStrings;
                return preact.h(f, { id: "qs_mvs_ctrl", title: o.LOC_HOMEPAGE_QS_TOGGLEMVS, type: "toggle", enabled: i.Mvs == 0, onToggle: function(n) { e(__assign(__assign({}, i), { Mvs: n ? 0 : 1 })) } })
            }
        },
        l = function(n) { var t = n.enabled; return preact.h("div", { className: "hb_value_col" }, t ? preact.h("span", { className: "hbic_chevup" }) : preact.h("span", { className: "hbic_chevdown" })) },
        a = function(n) { var t = n.enabled; return preact.h("div", { className: "hb_value_col toggle_ctrl", style: { overflow: "visible" } }, preact.h("div", { className: "toggle_img " + (t ? "toggle_on" : ""), style: { top: 0, height: "100%" } }, preact.h("svg", { viewBox: "0 0 36 16", "enable-background": "new 0 0 36 16" }, preact.h("path", { fill: t ? "#00809d" : "#919191", "stroke-miterlimit": "10", d: "M28 15.5h-20c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h20c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z" }), preact.h("circle", { style: { transition: "all .2s" }, fill: "#fff", cx: t ? "28" : "8", cy: "8", r: "5" })))) },
        v = function(n) { var t = n.icon; return preact.h("div", { className: "hbic_col" }, t ? preact.h("span", { className: t }) : null) },
        y = function(n) { var t = n.title; return preact.h("div", { className: "hb_title_col" }, t) },
        p = function(n) {
            var t = n.type,
                i = n.enabled;
            return t == "chevron" ? preact.h(l, { enabled: i }) : t == "toggle" ? preact.h(a, { enabled: i }) : void 0
        },
        f = function(n) {
            var r = n.type,
                u = n.icon,
                f = n.title,
                t = n.enabled,
                i = n.onToggle,
                e = n.id,
                o = r == "toggle" ? { role: "checkbox", "aria-checked": t } : { role: "none", "aria-expanded": t };
            return preact.h("div", __assign({ id: e, className: "hb_section", tabIndex: 0 }, o, { onClick: function() { i && i(!t) }, onKeyPress: function() { i && i(!t) } }), preact.h("div", { className: "hb_titlerow", style: { height: "auto !important" } }, preact.h(v, { icon: u }), preact.h(y, { title: f }), preact.h(p, { type: r, enabled: t })))
        }
});
define("Components/Core/Header/IdentityPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/Header/LanguageSwitcherPreact", "Components/Core/Header/QuickSettingsPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Identity = void 0;
    t.Identity = function() {
        var t = preactHooks.useContext(i.ModelContext).model,
            n = preactHooks.useRef(null),
            e = !1,
            o = function() {
                if (!e) {
                    var n = document.createElement("div"),
                        i = document.querySelector("#HBContent");
                    i && (i.appendChild(n), preact.render(preact.h(f.QuickSettings, { model: t }), n), e = !0)
                }
            };
        return preactHooks.useEffect(function() {
            var t = document.querySelector("#hpapp_id");
            n.current && t && t.children && t.children.length > 0 && (Array.prototype.slice.call(t.children).map(function(t) { n.current.appendChild(t) }), sj_evt && sj_evt.bind("id:refreshed", o), sj_evt && sj_evt.bind("hpqsOpened", o))
        }, []), t.IsSuperApp ? null : preact.h(r.Region, { nodeName: "IdControl", parentNodeName: "Header" }, preact.h("div", { id: "idCont", ref: n }, preact.h(u.LanguageSwitcher, null)))
    }
});
define("Components/Core/LogoPreact", ["require", "exports", "Components/Core/HooksPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.BingLogo = void 0;
    t.BingLogo = function() { return preact.h("h1", { className: "logo_cont", "aria-labelledby": "bLogo" }, i.useClientSideRender() ? preact.h("svg", { id: "bLogo", className: "logo", viewBox: "0 0 154 28", "aria-label": "Bing" }, preact.h("svg", { "class": "squares" }, preact.h("path", { "class": "top_l", d: "M11.35 0H0v11.35h11.35z" }), preact.h("path", { "class": "top_r", d: "M23.88 0H12.53v11.35h11.35z" }), preact.h("path", { "class": "bom_l", d: "M11.35 12.53H0v11.35h11.35z" }), preact.h("path", { "class": "bom_r", d: "M23.88 12.53H12.53v11.35h11.35z" })), preact.h("path", { "class": "ms_text", d: "M46.55 4.77V19.1h-2.48V7.87h-.05L39.59 19.1h-1.65L33.37 7.87h-.03V19.1h-2.3V4.77h3.57l4.11 10.62h.06l4.35-10.62zm2.08 1.1c0-.4.15-.74.44-1.01.29-.27.63-.4 1.03-.4a1.44 1.44 0 011.48 1.4c0 .4-.14.73-.43 1-.28.26-.64.4-1.05.4s-.76-.14-1.04-.41c-.29-.27-.43-.6-.43-.99zm2.67 2.96V19.1h-2.42V8.83zm7.34 8.51c.35 0 .75-.08 1.18-.24.44-.17.84-.39 1.2-.66v2.24c-.38.22-.82.4-1.3.5a7.2 7.2 0 01-1.62.17 4.97 4.97 0 01-3.7-1.43A4.99 4.99 0 0153 14.26c0-1.65.48-3.01 1.45-4.08.96-1.07 2.33-1.6 4.1-1.6a5.62 5.62 0 012.48.58v2.31a5 5 0 00-1.14-.63 3.32 3.32 0 00-1.2-.23c-.95 0-1.72.31-2.3.93s-.89 1.46-.89 2.51c0 1.04.29 1.85.85 2.43.56.58 1.33.86 2.3.86zm9.27-8.68a2.54 2.54 0 01.91.14v2.45a2.56 2.56 0 00-1.44-.4c-.6 0-1.1.26-1.5.76s-.62 1.27-.62 2.3v5.2h-2.42V8.82h2.42v1.62h.04c.22-.56.56-1 1-1.31.45-.32.98-.48 1.6-.48zm1.04 5.46c0-1.7.48-3.05 1.44-4.04s2.3-1.49 4-1.49c1.6 0 2.85.48 3.76 1.43s1.35 2.25 1.35 3.88c0 1.66-.48 2.99-1.44 3.97a5.22 5.22 0 01-3.92 1.48c-1.59 0-2.85-.47-3.79-1.4a5.17 5.17 0 01-1.4-3.83zm2.52-.08c0 1.07.24 1.89.73 2.46s1.18.84 2.09.84c.87 0 1.54-.28 2-.84s.7-1.41.7-2.52c0-1.1-.24-1.94-.72-2.5a2.48 2.48 0 00-2-.85c-.89 0-1.57.3-2.06.88-.5.6-.74 1.44-.74 2.53zm11.63-2.51c0 .35.1.62.33.82.22.2.7.44 1.46.74.96.39 1.64.82 2.03 1.3.39.49.58 1.07.58 1.76 0 .96-.37 1.74-1.11 2.33s-1.75.88-3.01.88a7.25 7.25 0 01-2.73-.56v-2.37c.44.3.91.55 1.42.73.5.18.97.27 1.38.27.55 0 .95-.08 1.21-.23.26-.16.39-.41.39-.77 0-.34-.14-.62-.4-.85-.28-.23-.79-.5-1.54-.8-.89-.37-1.52-.79-1.9-1.26s-.56-1.05-.56-1.77c0-.93.37-1.7 1.1-2.29.75-.6 1.7-.9 2.87-.9a7.06 7.06 0 012.33.44v2.3c-.32-.22-.7-.4-1.12-.56a3.74 3.74 0 00-1.27-.23c-.46 0-.82.1-1.07.27a.86.86 0 00-.4.75zm5.44 2.59c0-1.7.48-3.05 1.44-4.04a5.3 5.3 0 014-1.49c1.6 0 2.86.48 3.76 1.43s1.35 2.25 1.35 3.88c0 1.66-.48 2.99-1.44 3.97a5.22 5.22 0 01-3.91 1.48c-1.6 0-2.86-.47-3.8-1.4a5.17 5.17 0 01-1.4-3.83zm2.52-.08c0 1.07.24 1.89.73 2.46s1.18.84 2.1.84c.87 0 1.54-.28 2-.84s.7-1.41.7-2.52c0-1.1-.25-1.94-.72-2.5a2.48 2.48 0 00-2-.85c-.89 0-1.58.3-2.07.88a3.8 3.8 0 00-.74 2.53zm16.06-3.23h-3.6v8.3h-2.45v-8.3h-1.72V8.83h1.72V7.4a3.56 3.56 0 013.75-3.69c.3 0 .56.02.78.05.23.03.43.08.6.14v2.09a2.42 2.42 0 00-1.1-.27c-.51 0-.9.16-1.18.47-.27.32-.4.78-.4 1.4v1.25h3.6V6.53l2.42-.74v3.05H112v1.97h-2.45v4.8c0 .64.12 1.09.35 1.35.23.26.59.39 1.08.39a2.35 2.35 0 001.02-.34v2c-.15.09-.4.17-.76.24s-.7.1-1.06.1c-1.01 0-1.78-.26-2.29-.8-.5-.55-.76-1.36-.76-2.46v-5.28z" }), preact.h("path", { "class": "b_text", d: "M117.5 19.24V5.07h4.5c1.37 0 2.46.3 3.26.9.8.6 1.2 1.38 1.2 2.34 0 .8-.23 1.5-.68 2.1a3.68 3.68 0 01-1.89 1.26v.04c.98.11 1.75.47 2.33 1.09.59.6.88 1.4.88 2.37 0 1.21-.48 2.2-1.43 2.94s-2.16 1.13-3.62 1.13zm2.35-12.28v4.03h1.52c.82 0 1.46-.2 1.92-.57.47-.4.7-.94.7-1.64 0-1.22-.81-1.82-2.43-1.82zm0 5.92v4.48h2c.88 0 1.56-.2 2.03-.6.48-.41.72-.97.72-1.68 0-1.47-1.01-2.2-3.05-2.2zM129.97 7c-.37 0-.7-.13-.96-.37-.27-.24-.4-.55-.4-.93s.13-.69.4-.94.59-.37.97-.37.71.12.98.37.4.57.4.94c0 .36-.13.66-.4.92-.27.25-.6.38-.99.38zm1.14 12.24h-2.29V9.12h2.3zM142.46 19.24h-2.29v-5.7c0-1.9-.67-2.84-2-2.84-.7 0-1.28.27-1.74.8a2.9 2.9 0 00-.68 1.97v5.77h-2.3V9.12h2.3v1.68h.04a3.6 3.6 0 013.28-1.92c1.1 0 1.94.36 2.52 1.08.58.71.87 1.74.87 3.1zM153.81 18.43c0 3.71-1.86 5.57-5.6 5.57a8.35 8.35 0 01-3.45-.66v-2.1c1.1.64 2.16.95 3.15.95 2.4 0 3.61-1.18 3.61-3.55v-1.1h-.04a3.71 3.71 0 01-3.42 1.93 3.72 3.72 0 01-2.98-1.34 5.49 5.49 0 01-1.13-3.63c0-1.72.4-3.08 1.22-4.1s1.92-1.52 3.34-1.52c1.33 0 2.32.55 2.97 1.64h.04v-1.4h2.3zm-2.27-3.82v-1.32c0-.71-.24-1.32-.71-1.82a2.3 2.3 0 00-1.76-.76c-.87 0-1.55.33-2.04.97a4.34 4.34 0 00-.74 2.69c0 1 .24 1.79.7 2.39.48.6 1.1.89 1.88.89.8 0 1.44-.29 1.93-.85.5-.58.74-1.3.74-2.2z" })) : null) }
});
define("Components/Core/Header/HeaderPreact", ["require", "exports", "InstrumentPreact", "Components/Core/Header/ScopesPreact", "Components/Core/Header/IdentityPreact", "Components/Core/LogoPreact"], function(n, t, i, r, u, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Header = void 0;
    t.Header = function() { return preact.h(i.Region, { nodeName: "Header", parentNodeName: "Core" }, preact.h("header", { className: "header", id: "hdr" }, preact.h("div", { className: "head_cont" }, preact.h(f.BingLogo, null), preact.h("div", { "class": "scope_cont" }, preact.h(r.Scopes, null))), preact.h(u.Identity, null))) }
});
define("Components/Core/SpecialExperiences/FrameEffect", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.FrameEffect = void 0;
    t.FrameEffect = function(n) {
        var t = n.name,
            i = n.show,
            r = "frame fader " + t + (i ? " show" : "");
        return preact.h("div", { className: r }, preact.h("div", { className: "frame_sprite frame_left" }), preact.h("div", { className: "frame_sprite frame_right" }), preact.h("div", { className: "frame_sprite frame_top" }), preact.h("div", { className: "frame_sprite frame_bottom" }))
    }
});
define("Components/Core/SpecialExperiences/ParticleEffect", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ParticleEffect = void 0;
    t.ParticleEffect = function(n) { for (var f, e, t = n.name, r = n.show, o = n.slices, s = t + "_container", h = "fader " + t + (r ? " show" : ""), u = [], i = 0; i < o; i++) f = t + "_slice " + (t + "_" + (i + 1)), e = t + "_drifter " + ("drift_" + (i + 1)), u.push(preact.h("div", { className: f }, preact.h("div", { className: e }))); return preact.h("div", { id: s, className: h }, r ? u : null) }
});
define("Components/Core/SpecialExperiences/ToggleEffectButton", ["require", "exports", "Components/Core/ModelContextPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ToggleEffectButton = void 0;
    t.ToggleEffectButton = function(n) {
        var t = n.type,
            o = n.children,
            s = n.name,
            h = n.on,
            c = n.title,
            l = n.toggle,
            r = preactHooks.useContext(i.ModelContext).model,
            u = r.CustomFields,
            a = r.IsMobile,
            f = u.HasHolidayLights == "true",
            e = u.HasJingle == "true",
            v = !f && !e ? "1 1 35%" : "1 1 25%",
            y = "toggle " + s + (h ? " on" : "") + " " + t;
        return preact.h("div", { style: a && (!f || !e) && t == "btn" ? { flex: v, maxWidth: "unset" } : {}, className: y, title: c, onClick: function() { l() } }, o)
    }
});
define("Components/Core/SpecialExperiences/EffectsTray", ["require", "exports", "InstrumentPreact", "Components/Core/SpecialExperiences/ToggleEffectButton", "Components/Core/ModelContextPreact"], function(n, t, i, r, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.EffectsTray = void 0;
    t.EffectsTray = function(n) {
        var t = n.tray,
            a = n.additionalClasses,
            h = preactHooks.useContext(u.ModelContext).model,
            o = h.CustomFields,
            k = h.LocStrings,
            c = h.IsMobile,
            d = "tray_cont" + (a ? " " + a : ""),
            v = preactHooks.useState(!1),
            l = v[0],
            y = v[1],
            g = "tray" + (t.isOpen ? "" : " collapsed"),
            nt = function() { t.onOpen && t.onOpen() },
            p = function() { t.onClose && t.onClose() },
            w = function() { y(!0) },
            s = function() { y(!1) },
            b = o.HasShoppingIcon == "true",
            tt = o.HasHolidayLights == "true",
            it = o.HasJingle == "true",
            e = 465;
        return b || (e -= 50), tt || (e -= 50), it || (e -= 50), preactHooks.useEffect(function() {
            return sj_evt.bind("AS.Canvas.Show", w), sj_evt.bind("AS.Canvas.Hide", s), sj_evt.bind("ASHide", s),
                function() {
                    sj_evt.unbind("AS.Canvas.Show", w);
                    sj_evt.unbind("AS.Canvas.Hide", s);
                    sj_evt.unbind("ASHide", s)
                }
        }, [l]), preact.h("div", { className: d }, preact.h("div", { className: "tray_outer", style: !c && t.isOpen ? { width: e, zIndex: l ? 1 : 2 } : {} }, preact.h("div", { className: g, style: !c && t.isOpen ? { width: e, zIndex: l ? 1 : 2 } : {} }, preact.h("div", { "class": "open_btn", onClick: function() { nt() } }, t.openIcon), preact.h("div", { className: "tray_toggles" }, t.isCompact ? null : preact.h(f, { toggle: function() { p() } }), t.toggleButtons.map(function(n) { return preact.h(r.ToggleEffectButton, { name: n.name, on: n.on, children: n.attributes.icon, title: n.attributes.title, toggle: function() { n.toggle() }, type: "btn" }) }), b ? preact.h(i.InstLinkClient, { "class": "toggle jingle shopping btn", href: o.ShoppingLink, nodeName: "HolidayShoppingLink", target: "_blank", style: c ? { marginTop: 0 } : null, title: k.LOC_APP_HOLIDAY_TTIP_SHOPGIFTS }, t.openIcon) : null, t.radio.toggleButtons.map(function(n) { return preact.h(r.ToggleEffectButton, { name: n.name, on: t.radio.selected == n.name, children: n.attributes.icon, title: n.attributes.title, toggle: function() { n.toggle() }, type: "radio" }) })), preact.h("div", { className: "tray_more" }, t.moreComponents.map(function(n) { return n }), t.isCompact ? preact.h(f, { toggle: function() { p() } }) : null))))
    };
    var f = function(n) { var t = n.toggle; return preact.h("div", { "class": "close_tray_arrow", onClick: function() { return t() } }, preact.h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "black", xmlns: "http://www.w3.org/2000/svg" }, preact.h("g", null, preact.h("rect", { width: "32", height: "32", rx: "16", "fill-opacity": "0.42" }), preact.h("path", { "fill-opacity": "1", d: "M16 19.709L10.1465 13.8555L10.8555 13.1465L16 18.291L21.1445 13.1465L21.8535 13.8555L16 19.709Z", fill: "white" })))) }
});
define("Components/Core/SpecialExperiences/AudioEffect", ["require", "exports"], function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.AudioEffect = void 0;
    t.AudioEffect = function(n) {
        var r = n.name,
            t = n.play,
            u = n.url,
            f = n.loop,
            e = "effects_audio_" + r,
            i = preactHooks.useRef(null);
        return preactHooks.useEffect(function() {
            var n = i.current;
            n.paused && t ? n.play() : n.paused || t || n.pause()
        }, [t]), preact.h("audio", { className: e, src: u, ref: i, autoPlay: !1, playsInline: !0, preload: "none", loop: f, style: { display: "block" } })
    }
});
define("Components/Core/SpecialExperiences/Holiday", ["require", "exports", "Components/Core/ModelContextPreact", "Components/Core/SpecialExperiences/FrameEffect", "Components/Core/SpecialExperiences/ParticleEffect", "Components/Core/SpecialExperiences/EffectsTray", "Components/Core/SpecialExperiences/AudioEffect", "Components/Core/SharingPreact", "InstrumentPreact", "Components/Core/HooksPreact", "Components/Core/MuseumCard/MuseumCardPreact"], function(n, t, i, r, u, f, e, o, s, h, c) {
    "use strict";
    var p;
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.Holiday = void 0;
    var a = { frost: { title: "LOC_APP_HOL2019_TTIP_FROST", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.5 3C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H21.5C21.7761 4 22 3.77614 22 3.5C22 3.22386 21.7761 3 21.5 3H2.5ZM8.04298 8.27865C7.94004 7.81447 7.52449 7.48696 7.04911 7.49532C6.57372 7.50369 6.16996 7.84562 6.08341 8.31314L4.85737 14.936L3.20223 6L20.7979 6L19.1427 14.9362L18.2067 9.88013C18.1207 9.41548 17.7211 9.07447 17.2488 9.06249C16.7764 9.05051 16.3601 9.37083 16.2506 9.83051L14.1436 18.6785L11.9464 9.42967C11.8388 8.97651 11.4325 8.65768 10.9668 8.66083C10.501 8.66398 10.0991 8.98828 9.99756 9.44286L9.14645 13.2542L8.04298 8.27865ZM19.6343 17.7733C19.5333 18.3186 18.7519 18.3185 18.651 17.7732L17.2234 10.0622L14.6295 20.9551C14.5074 21.4675 13.7783 21.4673 13.6566 20.9549L10.9735 9.66081L9.63275 15.6648C9.51624 16.1866 8.77239 16.1861 8.65663 15.6641L7.0667 8.49517L5.34914 17.7732C5.2482 18.3184 4.46686 18.3185 4.36586 17.7732L2.21896 6.18212C2.10509 5.56734 2.57699 5 3.20223 5H20.7979C21.4231 5 21.8951 5.56734 21.7812 6.18212L19.6343 17.7733Z", fill: "white" })) }, snow: { title: "LOC_APP_HOL2019_TTIP_SNOW", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14.2082 2.35254C14.0134 2.15766 13.6977 2.15706 13.5022 2.3512L12.3926 3.45307L11.2836 2.35133C11.0881 2.15713 10.7723 2.1577 10.5775 2.35261L10.3883 2.54201C10.1931 2.73727 10.1931 3.05372 10.3883 3.24895L11.7558 4.61689V10.8956L6.32333 7.76135L5.82515 5.88653C5.75422 5.61959 5.48028 5.46073 5.21336 5.53174L4.94474 5.60321C4.67833 5.67409 4.51956 5.94723 4.5898 6.21381L4.9897 7.73135L3.48376 8.13065C3.21666 8.20147 3.05766 8.47552 3.12873 8.74256L3.19976 9.00939C3.27077 9.27616 3.54454 9.4349 3.81134 9.36401L5.68652 8.86573L11.119 12L5.68652 15.1343L3.81139 14.636C3.54457 14.5651 3.27078 14.7239 3.1998 14.9907L3.1287 15.2579C3.05764 15.525 3.21672 15.7991 3.48387 15.8698L4.9897 16.2687L4.58982 17.7866C4.51957 18.0532 4.67846 18.3264 4.94497 18.3972L5.21352 18.4685C5.48038 18.5394 5.75419 18.3805 5.8251 18.1137L6.32333 16.2386L11.7558 13.1044V19.3831L10.3883 20.7511C10.1931 20.9463 10.1931 21.2627 10.3883 21.458L10.5775 21.6474C10.7723 21.8423 11.0881 21.8429 11.2836 21.6487L12.3926 20.5469L13.5022 21.6488C13.6977 21.8429 14.0134 21.8423 14.2082 21.6475L14.3975 21.458C14.5926 21.2628 14.5926 20.9463 14.3974 20.7511L13.0294 19.3831V13.1044L18.463 16.2386L18.9613 18.1137C19.0322 18.3805 19.306 18.5394 19.5729 18.4685L19.8413 18.3972C20.1078 18.3264 20.2667 18.0532 20.1964 17.7865L19.7961 16.2687L21.3019 15.8698C21.5691 15.7991 21.7282 15.525 21.6571 15.2579L21.586 14.9907C21.515 14.7239 21.2412 14.5651 20.9744 14.636L19.0999 15.1343L13.6663 12L19.0999 8.86573L20.9744 9.36397C21.2413 9.43488 21.515 9.27614 21.5861 9.00936L21.6571 8.74256C21.7281 8.47552 21.5691 8.20147 21.302 8.13065L19.7961 7.73135L20.1964 6.2139C20.2667 5.94729 20.108 5.67407 19.8415 5.60318L19.573 5.53174C19.3061 5.46073 19.0322 5.61959 18.9612 5.88653L18.463 7.76135L13.0294 10.8956V4.61689L14.3974 3.24895C14.5926 3.05373 14.5926 2.73723 14.3975 2.54195L14.2082 2.35254Z", fill: "white" })) }, lights: { title: "LOC_APP_HOL2019_TTIP_LIGHTS", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.6652 12.0556C16.6652 12.6116 16.4704 13.5208 16.1192 14.6112C15.7729 15.6866 15.2903 16.8908 14.7496 18.0172C14.2074 19.1467 13.6156 20.1798 13.0553 20.9223C12.7744 21.2945 12.5138 21.577 12.2844 21.7618C12.045 21.9546 11.8973 21.9944 11.8326 21.9944C11.7586 21.9944 11.6127 21.9546 11.3881 21.7799C11.1702 21.6104 10.9241 21.3495 10.6599 21.0014C10.1328 20.3067 9.58276 19.3304 9.08209 18.239C8.07279 16.0389 7.32559 13.5085 7.32559 12.0556C7.32559 10.6165 7.8192 9.59244 8.30542 8.92867C8.5498 8.59504 8.79321 8.35148 8.97271 8.19327C9.03811 8.13562 9.09477 8.08953 9.13953 8.05477L14.4373 8.05477C14.4983 8.10655 14.5786 8.17694 14.6726 8.2644C14.8979 8.47399 15.1983 8.77866 15.4979 9.15736C16.1053 9.92532 16.6652 10.9418 16.6652 12.0556ZM15.3827 7.55162L15.3827 5.01669C15.3827 3.90597 14.4823 3.00556 13.3715 3.00556L13.3715 2.50278C13.3715 2.2251 13.1464 2 12.8688 2L10.8576 2C10.58 2 10.3549 2.2251 10.3549 2.50278L10.3549 3.00556C9.24415 3.00556 8.34374 3.90597 8.34374 5.01668L8.34374 7.40754L8.3078 7.43892C8.08342 7.63669 7.78833 7.93292 7.4942 8.33445C6.90341 9.141 6.32002 10.3688 6.32002 12.0556C6.32002 13.7288 7.14093 16.4192 8.16811 18.6583C8.68569 19.7866 9.27104 20.8346 9.85887 21.6092C10.1522 21.9958 10.4585 22.3308 10.7707 22.5737C11.0762 22.8112 11.4382 23 11.8326 23C12.2362 23 12.6066 22.7934 12.9151 22.545C13.2336 22.2885 13.5509 21.9349 13.858 21.528C14.4737 20.712 15.0986 19.6138 15.6561 18.4524C16.2151 17.2879 16.7151 16.0414 17.0764 14.9194C17.4329 13.8124 17.6708 12.7775 17.6708 12.0556C17.6708 10.6139 16.9549 9.37849 16.2866 8.53354C15.9593 8.11975 15.6328 7.78616 15.3827 7.55162ZM14.3771 7.02781L9.3493 7.02781L9.3493 5.01668C9.3493 4.46133 9.79951 4.01112 10.3549 4.01112L13.3715 4.01112C13.9269 4.01112 14.3771 4.46133 14.3771 5.01669L14.3771 7.02781Z", fill: "white" })) }, aurora: { title: "LOC_APP_HOL2019_TTIP_AURORA", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.1623 10.5866C18.4511 10.1036 18.8773 9.75324 19.361 9.55567L13.7823 6.22019C13.7822 6.22011 13.7821 6.22002 13.7819 6.21994L10.7783 4.4241C10.0673 3.99898 9.14625 4.23076 8.72113 4.94179C8.296 5.65282 8.52778 6.57385 9.23881 6.99897L17.8215 12.1305C17.7666 11.6109 17.8735 11.0697 18.1623 10.5866ZM14.2955 5.3619L11.2915 3.56581C10.1064 2.85728 8.57137 3.24357 7.86284 4.42862C7.1543 5.61367 7.54059 7.14873 8.72564 7.85726L19.0251 14.0153L19.5383 13.157C18.8273 12.7318 18.5955 11.8108 19.0206 11.0998C19.4456 10.3889 20.3663 10.1571 21.0772 10.5818C21.0774 10.5819 21.0776 10.582 21.0778 10.5821L22.3652 11.3518C22.6022 11.4936 22.9092 11.4163 23.0509 11.1793C23.1926 10.9423 23.1154 10.6353 22.8784 10.4936L21.5909 9.72381L14.2955 5.3619Z", fill: "white" }), preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14.0968 17.4768C14.3856 16.9937 14.8117 16.6434 15.2955 16.4458L4.52721 10.0075C3.81618 9.58242 2.89515 9.81419 2.47003 10.5252C2.04491 11.2363 2.27715 12.1576 2.98818 12.5827L13.756 19.0207C13.701 18.501 13.8079 17.9598 14.0968 17.4768ZM1.61174 10.0121C0.903203 11.1971 1.2895 12.7322 2.47455 13.4407L7.19408 16.2625C7.19443 16.2627 7.19478 16.2629 7.19514 16.2631L14.9596 20.9054L15.778 21.3948C16.015 21.5365 16.3221 21.4592 16.4638 21.2222C16.6055 20.9852 16.5282 20.6782 16.2912 20.5365L15.8621 20.2799L15.4727 20.0471L15.4709 20.046C14.7613 19.6205 14.5303 18.7004 14.955 17.9899C15.3802 17.2789 16.3012 17.0471 17.0122 17.4723L17.4015 17.705L17.9147 16.8467L5.04038 9.14925C3.85533 8.44071 2.32027 8.82701 1.61174 10.0121Z", fill: "white" }), preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20.8227 13.9249L20.8257 13.9267C22.0108 14.6352 22.397 16.1703 21.6885 17.3553C20.98 18.5404 19.4449 18.9267 18.2599 18.2182L7.10211 11.547L7.61528 10.6887C8.32631 11.1138 9.24734 10.8821 9.67246 10.171C10.0971 9.46084 9.86636 8.54115 9.15732 8.11536C9.15647 8.11485 9.15562 8.11435 9.15478 8.11384L9.66794 7.25555M9.33201 11.7151L18.773 17.3599C19.4841 17.785 20.4051 17.5532 20.8302 16.8422C21.2553 16.1312 21.0236 15.2101 20.3125 14.785L20.3106 14.7838L10.8715 9.14027C10.9265 9.65994 10.8196 10.2011 10.5308 10.6842C10.2419 11.1672 9.8158 11.5176 9.33201 11.7151ZM20.8227 13.9249L10.5262 7.76872L20.8227 13.9249ZM10.5262 7.76872L9.67122 7.25751L10.5262 7.76872Z", fill: "white" }), preact.h("rect", { x: "19", y: "3", width: "2", height: "2", rx: "1", fill: "white" }), preact.h("rect", { x: "2", y: "17", width: "2", height: "2", rx: "1", fill: "white" }), preact.h("rect", { x: "7", y: "20", width: "1", height: "1", rx: "0.5", fill: "white" }), preact.h("rect", { x: "16", y: "2", width: "1", height: "1", rx: "0.5", fill: "white" }), preact.h("rect", { x: "2", y: "6", width: "1", height: "1", rx: "0.5", fill: "white" })) }, jingle: { title: "LOC_APP_HOL2020_TTIP_JINGLE", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.17938 6.50224C3.17938 6.2261 3.40324 6.00224 3.67938 6.00224H4.8007C5.07685 6.00224 5.3007 6.2261 5.3007 6.50224C5.3007 6.77839 5.07684 7.00224 4.8007 7.00224H3.67938C3.40324 7.00224 3.17938 6.77839 3.17938 6.50224ZM4.13146 4.13592C4.32672 3.94066 4.6433 3.94066 4.83856 4.13592L5.54567 4.84303C5.74093 5.03829 5.74093 5.35487 5.54567 5.55014C5.35041 5.7454 5.03382 5.7454 4.83856 5.55014L4.13146 4.84303C3.93619 4.64777 3.93619 4.33119 4.13146 4.13592ZM7.00279 3.67883C7.00279 3.40269 6.77894 3.17883 6.50279 3.17883C6.22665 3.17883 6.00279 3.40269 6.00279 3.67883V4.80015C6.00279 5.0763 6.22665 5.30015 6.50279 5.30015C6.77894 5.30015 7.00279 5.0763 7.00279 4.80015V3.67883ZM21.8407 18.5078C21.8407 18.7839 21.6168 19.0078 21.3407 19.0078H20.2194C19.9432 19.0078 19.7194 18.7839 19.7194 18.5078C19.7194 18.2316 19.9432 18.0078 20.2194 18.0078H21.3407C21.6168 18.0078 21.8407 18.2316 21.8407 18.5078ZM20.8886 20.8741C20.6933 21.0694 20.3768 21.0694 20.1815 20.8741L19.4744 20.167C19.2791 19.9717 19.2791 19.6551 19.4744 19.4599C19.6696 19.2646 19.9862 19.2646 20.1815 19.4599L20.8886 20.167C21.0839 20.3622 21.0839 20.6788 20.8886 20.8741ZM18.0173 21.3312C18.0173 21.6073 18.2411 21.8312 18.5173 21.8312C18.7934 21.8312 19.0173 21.6073 19.0173 21.3312V20.2099C19.0173 19.9337 18.7934 19.7099 18.5173 19.7099C18.2411 19.7099 18.0173 19.9337 18.0173 20.2099V21.3312ZM13.9535 4.23354C13.4201 4.0906 12.8717 4.40718 12.7288 4.94065C12.6777 5.13128 12.6853 5.32382 12.7405 5.49908C10.2882 5.26208 7.9453 6.82641 7.28699 9.28326C6.63411 11.7198 5.97384 12.0962 5.33476 12.46C3.5259 13.4895 4.01908 15.8388 5.71992 16.2945L10.6287 17.6098C10.5664 17.8016 10.5327 18.0063 10.5327 18.2189C10.5327 19.3071 11.4149 20.1893 12.5031 20.1893C13.4509 20.1893 14.2423 19.5202 14.4309 18.6286L15.0627 18.7979C16.7634 19.2536 18.3654 17.465 17.3136 15.6698C16.9421 15.0353 16.5583 14.3792 17.2112 11.9424C17.8703 9.48269 16.6197 6.95345 14.3725 5.93487C14.5073 5.81085 14.6097 5.64833 14.6606 5.45829C14.8036 4.92482 14.487 4.37648 13.9535 4.23354ZM11.7327 18.2189C11.7327 18.1135 11.7539 18.0131 11.7922 17.9216L13.2674 18.3169C13.2193 18.6961 12.8954 18.9893 12.5031 18.9893C12.0776 18.9893 11.7327 18.6444 11.7327 18.2189ZM16.2271 16.2882L16.2348 16.3014C16.4989 16.752 16.4045 17.0924 16.2365 17.3069C16.0424 17.5546 15.7199 17.6799 15.3862 17.5905L6.04345 15.0871C5.70944 14.9976 5.49299 14.7279 5.44878 14.4166C5.4105 14.1472 5.4985 13.8051 5.95315 13.5463L5.96624 13.5389C6.31399 13.341 6.8283 13.0483 7.31278 12.3894C7.77094 11.7663 8.14957 10.8937 8.4944 9.60678C8.98604 7.77194 10.7244 6.59145 12.5561 6.73762L13.9208 7.10325C15.5802 7.89254 16.4954 9.78406 16.0038 11.6189C15.6589 12.9059 15.5506 13.851 15.6358 14.6198C15.726 15.4325 16.025 15.943 16.2271 16.2882Z", fill: "white" })) }, yule: { title: "LOC_APP_HOL2019_TTIP_YULE", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.4592 2C13.2267 1.55735 13.2264 1.55747 13.2264 1.55747L13.4592 2ZM16.376 15.6667C17.1881 14.6246 18.0013 13.1742 18.0013 11.5211C18.0013 9.77264 17.0927 8.19103 16.1548 6.96069C15.681 6.33917 15.1859 5.78974 14.7701 5.33834C14.7028 5.26536 14.6385 5.19576 14.5772 5.12941L14.5771 5.12937C14.2452 4.7703 14.0012 4.50645 13.8648 4.31714C13.614 3.96901 13.5906 3.4845 13.6747 3.00708C13.7149 2.77846 13.7759 2.57534 13.8272 2.42902C13.8526 2.35639 13.8752 2.2991 13.8909 2.26122C13.8987 2.24231 13.9048 2.22834 13.9085 2.21981L13.9124 2.21122L13.9129 2.21011L14.5382 0.868408L13.2264 1.55747L13.2253 1.55807L13.2227 1.55942L13.2141 1.564L13.1834 1.58058C13.1571 1.59487 13.1195 1.61559 13.0721 1.64237C12.9775 1.69588 12.8436 1.77372 12.6835 1.87274C12.3643 2.07014 11.9359 2.35478 11.505 2.70158C11.0765 3.04641 10.6302 3.4648 10.2873 3.93249C9.94726 4.39623 9.67781 4.951 9.67781 5.55788C9.67781 6.49649 9.74626 7.04308 9.91946 7.54514C10.0037 7.78943 10.1088 8.01149 10.2243 8.24535C10.2498 8.29684 10.2758 8.34906 10.3025 8.40268C10.3991 8.59662 10.5049 8.80898 10.6254 9.07191C10.9026 9.67671 10.9578 10.3287 10.7956 10.7921C10.7173 11.0159 10.5917 11.1892 10.4203 11.309C10.249 11.4288 9.99905 11.518 9.63404 11.518C9.07152 11.518 8.62565 11.0192 8.29185 10.2432C8.13703 9.8833 8.0315 9.51815 7.96458 9.23964C7.93135 9.10134 7.90818 8.98668 7.89348 8.90767C7.88614 8.86821 7.88094 8.83779 7.87768 8.81792L7.87421 8.79626L7.87352 8.79175L7.75154 7.95244L7.07625 8.46541L7.07532 8.46612L7.07424 8.46695L7.07166 8.46894L7.06479 8.4743L7.04455 8.49057C7.02826 8.50389 7.0065 8.52219 6.98006 8.54557C6.9272 8.59232 6.8555 8.65949 6.77137 8.74786C6.60321 8.92451 6.38461 9.18672 6.16777 9.54064C5.73213 10.2517 5.30951 11.3237 5.30951 12.7938C5.30951 13.9709 5.97621 14.9344 6.76279 15.6667H5.80952H5.66667C3.64162 15.6667 2 17.3083 2 19.3334C2 21.3584 3.64162 23 5.66667 23H5.80952H18.3333C20.3584 23 22 21.3584 22 19.3334C22 17.3083 20.3584 15.6667 18.3333 15.6667H16.376ZM10.0809 16.6667L10.0872 16.6691H14.3552L14.3584 16.6667H18.3333C19.8061 16.6667 21 17.8606 21 19.3334C21 20.8061 19.8061 22 18.3333 22H8.4242C9.1599 21.3315 9.61905 20.384 9.61905 19.3334C9.61905 18.2827 9.1599 17.3352 8.42419 16.6667H10.0809ZM5.80952 16.6667C4.2215 16.6667 3 17.8963 3 19.3334C3 20.7704 4.2215 22 5.80952 22C7.39755 22 8.61905 20.7704 8.61905 19.3334C8.61905 17.8963 7.39755 16.6667 5.80952 16.6667ZM15.0667 15.6667C15.1946 15.5271 15.326 15.3763 15.4573 15.2151C16.2569 14.2334 17.0013 12.9327 17.0013 11.5211C17.0013 10.1074 16.2581 8.74565 15.3595 7.56693C14.9151 6.98391 14.4459 6.46239 14.0346 6.01585C13.9735 5.94957 13.9129 5.8841 13.8533 5.81971C13.5262 5.46636 13.2291 5.14547 13.0535 4.90173C12.6348 4.32067 12.5929 3.6339 12.653 3.08983C12.4849 3.20779 12.3082 3.33884 12.132 3.48063C11.7401 3.796 11.3661 4.15244 11.0937 4.52381C10.8185 4.89913 10.6778 5.24765 10.6778 5.55788C10.6778 6.45351 10.7448 6.87112 10.8648 7.21902C10.9271 7.39971 11.0081 7.57407 11.1209 7.80254C11.1441 7.84954 11.1687 7.89874 11.1944 7.95039L11.1944 7.95043L11.1944 7.95048C11.2917 8.14573 11.4065 8.37609 11.5344 8.65522C11.8885 9.4277 12.0089 10.3529 11.7395 11.1225C11.602 11.5151 11.3601 11.8722 10.9933 12.1286C10.6264 12.3851 10.1675 12.518 9.63404 12.518C8.39968 12.518 7.71788 11.4396 7.37323 10.6384C7.26638 10.39 7.18069 10.1433 7.11288 9.91891C7.08229 9.96451 7.0514 10.0126 7.02045 10.0631C6.67149 10.6326 6.30951 11.5257 6.30951 12.7938C6.30951 13.8935 7.20175 14.8563 8.27711 15.5964C8.31168 15.6202 8.34627 15.6436 8.38083 15.6667H15.0667Z", fill: "white" })) }, "default": { title: "Image of the Day", icon: preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M18.6428 2.57153C20.1813 2.57153 21.4286 3.81874 21.4286 5.35725V18.643C21.4286 20.1815 20.1813 21.4287 18.6428 21.4287H5.35713C3.81862 21.4287 2.57141 20.1815 2.57141 18.643V5.35725C2.57141 3.81874 3.81862 2.57153 5.35713 2.57153H18.6428ZM19.1422 20.0578L12.4508 13.475C12.2233 13.2513 11.871 13.2309 11.6209 13.414L11.5491 13.475L4.85692 20.0575C5.01337 20.1129 5.18173 20.143 5.35713 20.143H18.6428C18.8179 20.143 18.986 20.113 19.1422 20.0578L12.4508 13.475L19.1422 20.0578ZM18.6428 3.85725H5.35713C4.5287 3.85725 3.85713 4.52882 3.85713 5.35725V18.643C3.85713 18.8213 3.88824 18.9923 3.94533 19.1509L10.6475 12.5584C11.3623 11.8553 12.4883 11.8218 13.2422 12.458L13.3524 12.5585L20.0546 19.1509C20.1117 18.9923 20.1428 18.8213 20.1428 18.643V5.35725C20.1428 4.52882 19.4713 3.85725 18.6428 3.85725ZM15.8571 6.42868C17.0406 6.42868 18 7.38807 18 8.57153C18 9.755 17.0406 10.7144 15.8571 10.7144C14.6737 10.7144 13.7143 9.755 13.7143 8.57153C13.7143 7.38807 14.6737 6.42868 15.8571 6.42868ZM15.8571 7.71439C15.3837 7.71439 15 8.09815 15 8.57153C15 9.04492 15.3837 9.42868 15.8571 9.42868C16.3305 9.42868 16.7143 9.04492 16.7143 8.57153C16.7143 8.09815 16.3305 7.71439 15.8571 7.71439Z", fill: "white" })) } },
        v = function(n, t) {
            var i = a[n],
                r = t[i.title] ? t[i.title] : i.title;
            return __assign(__assign({}, a[n]), { title: r })
        },
        w = function(n) {
            var t = document.getElementById("hdr"),
                i = t.classList.contains("hdr_down"),
                r = n.EffectsToggle.frost || n.EffectsToggle.lights;
            !i && r ? t.classList.add("hdr_down") : i && !r && t.classList.remove("hdr_down")
        },
        b = function(n) {
            var t = document.querySelector(".effects_audio_jingle");
            n.EffectsToggle.jingle && !t.paused ? t.pause() : t.play()
        },
        y = function(n) {
            var t = n.VideoContent,
                i = n.AudioContent,
                r = n.ImageContent,
                u = r.Copyright,
                f = r.Title,
                e = r.Headline,
                o = r.BackstageUrl,
                s = t ? { Enabled: t.Enabled, Url: t.Url, HasAudio: t.HasAudio, Loop: t.Loop } : null,
                h = i ? { Enabled: i.Enabled, Url: i.Url, Loop: i.Loop } : null;
            return { Caption: f, Headline: e, VideoContent: s, AudioContent: h, BackstageUrl: o, Credits: u }
        },
        k = function(n) {
            var t = n.LocStrings,
                i = n.CustomFields,
                r = { Enabled: !0, Url: i.VideoYuleLog, HasAudio: !1, Loop: !0 },
                u = { Enabled: !0, Url: i.AudioYuleLogMp3, Loop: !0 };
            return { Caption: t.LOC_APP_HOL2019_YULE_CARD_CAPTION, Headline: t.LOC_APP_HOL2019_YULE_CARD_HEADLINE, VideoContent: r, AudioContent: u, BackstageUrl: i.YuleLogCardClickUrl, Credits: t.LOC_APP_HOL2019_YULE_CARD_CREDITS }
        },
        d = function(n) {
            var t = n.LocStrings,
                i = n.CustomFields,
                r = { Enabled: !0, Url: i.VideoAurora, HasAudio: !1, Loop: !0 };
            return { Caption: t.LOC_APP_HOL2019_AURORA_CARD_CAPTION, Headline: t.LOC_APP_HOL2019_AURORA_CARD_HEADLINE, VideoContent: r, AudioContent: null, BackstageUrl: i.AuroraCardClickUrl, Credits: t.LOC_APP_HOL2019_AURORA_CARD_CREDITS }
        },
        g = function() {
            var n = preactHooks.useContext(i.ModelContext).model,
                r = n.CurrentIndex,
                u = n.MediaContents,
                t = n.LocStrings,
                f = n.CustomFields,
                e = u[r].Ssd;
            return preact.h(o.Share, { title: t.LOC_APP_HOL2019_TTIP_SHARE, shareImage: f.ImageToShare, ssd: e, "aria-label": "Share to more networks", nodeName: "hol_tray_share", parentNodeName: "Holiday", customFormCodes: { Facebook: "HPHOLS", Twitter: "HPHOLS", Skype: "HPHOLS" }, customUrlParams: { a: "hol" }, shareDescription: t.LOC_APP_HOL2019_FB_SHARE_DESCRIPTION, shareTitle: t.LOC_APP_HOL2019_FB_SHARE_TITLE, shareText: t.LOC_APP_HOL2019_TW_SHARE }, preact.h(o.ShareDialogSvg, null), preact.h("span", null, "Share"))
        },
        l = function(n, t, i) {
            var u = t.MediaContents,
                f = n.CurrentMediaIndex,
                h = n.MediaEffects,
                e = u[f],
                o = e.VideoContent,
                s = e.AudioContent,
                c = e.ImageContent,
                r = h[i],
                l = o && r.VideoContent ? __assign(__assign({}, o), r.VideoContent) : r.VideoContent,
                a = s && r.AudioContent ? __assign(__assign({}, s), r.AudioContent) : r.AudioContent,
                v = { Copyright: r.Credits, Title: r.Caption, Headline: r.Headline, BackstageUrl: r.BackstageUrl },
                y = __assign(__assign({}, c), v);
            return u[f] = __assign(__assign({}, u[f]), { VideoContent: l, AudioContent: a, ImageContent: y }), __assign(__assign({}, t), { MediaContents: u })
        };
    t.Holiday = function() {
        var ut = preactHooks.useContext(i.ModelContext),
            t = ut.model,
            tt = ut.updateModel,
            vt = ut.scrollPosition,
            ft = h.useClientSettings(t).clientSettings,
            a = t.IsMobile,
            et = t.CustomFields,
            yt = t.LocStrings,
            nt = t.CurrentIndex,
            ot = t.MediaContents,
            ei = ot[nt].Ssd,
            st = a || ft.Iotd == 0,
            ht = vt && vt.top != 0,
            it = !a && ht,
            o = document.querySelector(".hp_top_cover_container");
        if (!st) return null;
        var pt = preactHooks.useState({ EffectsToggle: { frost: !1, snow: !1, lights: !1, jingle: !1 }, CurrentMediaEffect: "default", CurrentMediaIndex: nt, MediaEffects: { "default": y(ot[nt]), yule: k(t), aurora: d(t) } }),
            n = pt[0],
            ct = pt[1],
            dt = a || sj_cook.get("HPHOL") == "HPHOL=0",
            wt = preactHooks.useState(!dt),
            gt = wt[0],
            bt = wt[1];
        preactHooks.useEffect(function() { st && o && (it ? (o.classList.remove("hide"), o.classList.add("show"), tt(l(n, t, "default"))) : nt == n.CurrentMediaIndex ? (o.classList.add("hide"), o.classList.remove("show"), tt(l(n, t, n.CurrentMediaEffect))) : nt != n.CurrentMediaIndex && (o.classList.remove("hide"), o.classList.add("show"), tt(l(n, t, "default")), ct(__assign(__assign({}, n), { CurrentMediaEffect: "default", CurrentMediaIndex: nt, MediaEffects: __assign(__assign({}, n.MediaEffects), { "default": y(ot[nt]) }) })))) }, [nt, it]);
        preactHooks.useEffect(function() {
            if (st) {
                var t = document.querySelector(".musCardCont .share");
                t && (n.CurrentMediaEffect == "default" || it ? t.classList.contains("hide") && t.classList.remove("hide") : t.classList.contains("hide") || t.classList.add("hide"))
            }
        }, [n, it]);
        a || w(n);
        var ni = function(t) {
                var i;
                s.logHolidayClick("holiday", "h20t", t);
                t == "jingle" && b(n);
                ct(__assign(__assign({}, n), { EffectsToggle: __assign(__assign({}, n.EffectsToggle), (i = {}, i[t] = !n.EffectsToggle[t], i)) }))
            },
            ti = function(i) {
                s.logHolidayClick("holiday", "h20t", i);
                var r = i == n.CurrentMediaEffect;
                r ? tt(l(n, t, "default")) : tt(l(n, t, i));
                ct(__assign(__assign({}, n), { CurrentMediaEffect: r ? "default" : i }));
                o && (r ? (o.classList.remove("hide"), o.classList.add("show")) : (o.classList.add("hide"), o.classList.remove("show")))
            },
            rt = function(t) { return { name: t, toggle: function() { ni(t) }, on: n.EffectsToggle[t], attributes: v(t, yt) } },
            lt = function(t) { return { name: t, toggle: function() { ti(t) }, on: n.CurrentMediaEffect == t, attributes: v(t, yt) } },
            kt = et.HasJingle == "true",
            at = [rt("snow"), rt("frost")];
        et.HasHolidayLights == "true" && at.push(rt("lights"));
        kt && at.push(rt("jingle"));
        var ii = [lt("default"), lt("yule"), lt("aurora")],
            ri = [preact.h(g, null)],
            ui = {
                toggleButtons: at,
                radio: { selected: n.CurrentMediaEffect, toggleButtons: ii },
                moreComponents: ri,
                isCompact: a,
                openIcon: preact.h(p, null),
                onOpen: function() {
                    bt(!0);
                    s.logHolidayClick("holiday", "h20t", "open");
                    a || sj_cook.setNoCrumbs("HPHOL", "1", !0, "/", 2628e3)
                },
                onClose: function() {
                    bt(!1);
                    s.logHolidayClick("holiday", "h20t", "close");
                    a || sj_cook.setNoCrumbs("HPHOL", "0", !0, "/", 2628e3)
                },
                isOpen: gt
            },
            fi = "" + (ht ? " hide" : "") + (!a && ft.Pn.St != 0 ? ft.Pn.St == 1 ? " down" : " downer" : "");
        return preact.h(preact.Fragment, null, a && !ht ? preact.h(c.AudioButton, null) : null, preact.h(f.EffectsTray, { tray: ui, additionalClasses: fi }), preact.h("div", { "class": "hol_frames_cont" }, preact.h(r.FrameEffect, { name: "frost", show: n.EffectsToggle.frost }), preact.h(r.FrameEffect, { name: "lights", show: n.EffectsToggle.lights }), preact.h(u.ParticleEffect, { name: "snow", show: n.EffectsToggle.snow, slices: 4 })), kt ? preact.h(e.AudioEffect, { name: "jingle", play: n.EffectsToggle.jingle, loop: !0, url: et.BellAudio }) : null)
    };
    p = function() { return preact.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, preact.h("path", { d: "M10.9687 6.75096H13.0312V12.001H20.7187C20.9922 12.001 21.2545 11.8923 21.4479 11.6989C21.6413 11.5055 21.7499 11.2432 21.7499 10.9697V7.78221C21.7499 7.50871 21.6413 7.2464 21.4479 7.05301C21.2545 6.85961 20.9922 6.75096 20.7187 6.75096H17.9146C18.2943 5.9689 18.3828 5.07708 18.164 4.23568C17.9453 3.39428 17.4337 2.65843 16.7212 2.16032C16.0087 1.66221 15.1419 1.43447 14.2766 1.51801C13.4112 1.60156 12.604 1.9909 11.9999 2.61612C11.3948 1.99433 10.5883 1.60799 9.72453 1.52616C8.86077 1.44433 7.99605 1.67233 7.28493 2.16942C6.57381 2.66651 6.06263 3.40029 5.84277 4.23961C5.62291 5.07892 5.70869 5.96907 6.08478 6.75096H3.28119C3.00768 6.75096 2.74538 6.85961 2.55198 7.05301C2.35859 7.2464 2.24994 7.50871 2.24994 7.78221V10.9697C2.24994 11.2432 2.35859 11.5055 2.55198 11.6989C2.64775 11.7947 2.76143 11.8706 2.88655 11.9225C3.01166 11.9743 3.14576 12.001 3.28119 12.001H10.9687V6.75096ZM13.0312 5.15721C13.0312 4.842 13.1247 4.53386 13.2998 4.27177C13.4749 4.00968 13.7238 3.80541 14.015 3.68478C14.3063 3.56415 14.6267 3.53259 14.9359 3.59409C15.245 3.65558 15.529 3.80737 15.7519 4.03026C15.9748 4.25315 16.1266 4.53713 16.1881 4.84629C16.2496 5.15544 16.218 5.47589 16.0974 5.76711C15.9767 6.05833 15.7725 6.30724 15.5104 6.48237C15.2483 6.65749 14.9401 6.75096 14.6249 6.75096H13.0312V5.15721ZM7.78119 5.15721C7.78119 4.73452 7.9491 4.32915 8.24799 4.03026C8.54687 3.73138 8.95225 3.56346 9.37494 3.56346C9.79762 3.56346 10.203 3.73138 10.5019 4.03026C10.8008 4.32915 10.9687 4.73452 10.9687 5.15721V6.75096H9.37494C8.95225 6.75096 8.54687 6.58305 8.24799 6.28416C7.9491 5.98528 7.78119 5.5799 7.78119 5.15721V5.15721Z", fill: "white" }), preact.h("path", { d: "M13.0312 22.5005H19.2187C19.4922 22.5005 19.7545 22.3918 19.9479 22.1984C20.1413 22.005 20.2499 21.7427 20.2499 21.4692V13.5005H13.0312V22.5005Z", fill: "white" }), preact.h("path", { d: "M3.74994 21.4692C3.74994 21.7427 3.85859 22.005 4.05198 22.1984C4.24538 22.3918 4.50768 22.5005 4.78119 22.5005H10.9687V13.5005H3.74994V21.4692Z", fill: "white" })) }
});
define("Components/Core/HolidayExperience", ["require", "exports", "Components/Core/HooksPreact", "Components/Core/SpecialExperiences/Holiday"], function(n, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.SpecialExperience = void 0;
    t.SpecialExperience = function() { return preact.h("div", { className: "hp_special_experience" }, i.useClientSideRender() ? preact.h(r.Holiday, null) : null) }
});
define("MainPreact", ["require", "exports", "Components/Core/ModelContextPreact", "InstrumentPreact", "Components/Core/MediaPreact_noscrollbar", "Components/Core/HooksPreact", "Components/Core/ScrollPreact_noscrollbar", "Components/Core/Header/HeaderPreact", "Components/Core/CNModules/SearchPreact_cn", "Components/Core/HolidayExperience"], function(n, t, i, r, u, f, e, o, s, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.HomepageApp = void 0;
    t.HomepageApp = function(n) {
        var rt = n.__model,
            a = preactHooks.useState(rt),
            t = a[0],
            v = a[1],
            y = preactHooks.useState(!1),
            ut = y[0],
            ft = y[1],
            p = preactHooks.useState(!1),
            w = p[0],
            et = p[1],
            b = preactHooks.useState(!1),
            ot = b[0],
            st = b[1],
            k = preactHooks.useState(null),
            ht = k[0],
            ct = k[1],
            d = preactHooks.useState(!1),
            lt = d[0],
            at = d[1],
            g = preactHooks.useState("1"),
            vt = g[0],
            yt = g[1],
            nt = f.useClientSettings(t),
            tt = nt.clientSettings,
            pt = nt.updateClientSettings,
            l = f.useFetch("/hp/api/model");
        if (preactHooks.useEffect(function() {
                var n = t.CarouselApiUrl,
                    i = t.IsChromeNewTab,
                    r = t.FormCode;
                l && (l.CarouselApiUrl = n, l.IsChromeNewTab = i, l.FormCode = r, v(l), window._model = l)
            }, [l]), t) {
            var it = t.IsMobile,
                wt = it || tt.Iotd == 0,
                bt = it && w;
            return preact.h(i.ModelContext.Provider, { value: { model: t, updateModel: v, dimmer: ut, updateDimmer: ft, clientSettings: tt, updateClientSettings: pt, scrolled: w, updateScrolled: et, scrollPosition: ht, updateScrollPosition: ct, searchboxFixed: ot, updateSearchboxFixed: st, carouselLoaded: lt, updateCarouselLoaded: at, backgroundOpacity: vt, updateBackgroundOpacity: yt } }, preact.h(r.Region, { nodeName: "Core" }, preact.h("div", { className: "hp_body " + (wt ? "" : "no_image") + " " + (bt ? "scrolled" : "") }, preact.h(c, null, preact.h(u.MediaContainer, null)), preact.h(c, null), preact.h(c, { className: "hp_cont", role: "main" }, preact.h(o.Header, null), preact.h(s.SearchBox, null)), preact.h(c, null, preact.h(h.SpecialExperience, null)), preact.h(c, null, preact.h(e.ScrollContainer, null)), preact.h(c, null))))
        }
    };
    var c = function(n) {
        var i = n.children,
            t = n.className,
            r = n.role;
        return preact.h("div", { className: "hpl" + (t ? " " + t : ""), role: r }, i)
    }
});
define("App/holiday_cn_noscrollbar/AppHolidayCN_noscrollbar", ["require", "exports", "MainPreact"], function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    typeof window != "undefined" && preact.hydrate(preact.h(i.HomepageApp, { __model: _model }), document.querySelector(".hpapp"))
})