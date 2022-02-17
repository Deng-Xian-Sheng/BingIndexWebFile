(function(n) {
    function t(r) { if (i[r]) return i[r].exports; var u = i[r] = { i: r, l: !1, exports: {} }; return n[r].call(u.exports, u, u.exports, t), u.l = !0, u.exports }
    var i = {};
    return t.m = n, t.c = i, t.d = function(n, i, r) { t.o(n, i) || Object.defineProperty(n, i, { enumerable: !0, get: r }) }, t.r = function(n) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
        Object.defineProperty(n, "__esModule", { value: !0 })
    }, t.t = function(n, i) {
        var r, u;
        if ((i & 1 && (n = t(n)), i & 8) || i & 4 && typeof n == "object" && n && n.__esModule) return n;
        if (r = Object.create(null), t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: n }), i & 2 && typeof n != "string")
            for (u in n) t.d(r, u, function(t) { return n[t] }.bind(null, u));
        return r
    }, t.n = function(n) { var i = n && n.__esModule ? function() { return n["default"] } : function() { return n }; return t.d(i, "a", i), i }, t.o = function(n, t) { return Object.prototype.hasOwnProperty.call(n, t) }, t.p = "", t(t.s = 0)
})([function(n, t, i) { window.SpeechSDK = i(1) }, function(n, t, i) {
    "use strict";

    function r(n) { for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i]) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(2),
        f = i(4);
    r(i(30))
}, function(n, t, i) {
    "use strict";

    function r(n) { for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i]) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    r(i(3));
    r(i(23));
    r(i(155));
    r(i(156));
    r(i(157));
    r(i(158));
    r(i(168));
    r(i(169));
    r(i(170))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = function() {
            function n(n) {
                var t = this;
                n === void 0 && (n = r.EventType.Warning);
                this.onEvent = function(n) {
                    if (n.eventType >= t.privLogLevelFilter) {
                        var i = t.toString(n);
                        switch (n.eventType) {
                            case r.EventType.Debug:
                                console.debug(i);
                                break;
                            case r.EventType.Info:
                                console.info(i);
                                break;
                            case r.EventType.Warning:
                                console.warn(i);
                                break;
                            case r.EventType.Error:
                                console.error(i);
                                break;
                            default:
                                console.log(i)
                        }
                    }
                };
                this.toString = function(n) {
                    var u = ["" + n.EventTime, "" + n.Name, ],
                        t, i, r;
                    for (t in n) t && n.hasOwnProperty(t) && t !== "eventTime" && t !== "eventType" && t !== "eventId" && t !== "name" && t !== "constructor" && (i = n[t], r = "<NULL>", i !== undefined && i !== null && (r = typeof i == "number" || typeof i == "string" ? i.toString() : JSON.stringify(i)), u.push(t + ": " + r));
                    return u.join(" | ")
                };
                this.privLogLevelFilter = n
            }
            return n
        }();
    t.ConsoleLoggingListener = u
}, function(n, t, i) {
    "use strict";

    function r(n) { for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i]) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    r(i(5));
    r(i(8));
    r(i(9));
    r(i(11));
    r(i(10));
    r(i(12));
    r(i(13));
    r(i(7));
    r(i(14));
    r(i(15));
    r(i(6));
    r(i(16));
    r(i(17));
    r(i(18));
    r(i(19));
    r(i(20));
    var u = i(21);
    t.TranslationStatus = u.TranslationStatus;
    r(i(22))
}, function(n, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        e, u, o, s, h, c, f, l, a, v, y;
    Object.defineProperty(t, "__esModule", { value: !0 });
    e = i(6);
    u = function(n) {
        function t(t, i, r) { r === void 0 && (r = e.EventType.Info); var u = n.call(this, t, r) || this; return u.privAudioSourceId = i, u }
        return r(t, n), Object.defineProperty(t.prototype, "audioSourceId", { get: function() { return this.privAudioSourceId }, enumerable: !0, configurable: !0 }), t
    }(e.PlatformEvent);
    t.AudioSourceEvent = u;
    o = function(n) {
        function t(t) { return n.call(this, "AudioSourceInitializingEvent", t) || this }
        return r(t, n), t
    }(u);
    t.AudioSourceInitializingEvent = o;
    s = function(n) {
        function t(t) { return n.call(this, "AudioSourceReadyEvent", t) || this }
        return r(t, n), t
    }(u);
    t.AudioSourceReadyEvent = s;
    h = function(n) {
        function t(t) { return n.call(this, "AudioSourceOffEvent", t) || this }
        return r(t, n), t
    }(u);
    t.AudioSourceOffEvent = h;
    c = function(n) {
        function t(t, i) { var r = n.call(this, "AudioSourceErrorEvent", t, e.EventType.Error) || this; return r.privError = i, r }
        return r(t, n), Object.defineProperty(t.prototype, "error", { get: function() { return this.privError }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.AudioSourceErrorEvent = c;
    f = function(n) {
        function t(t, i, r) { var u = n.call(this, t, i) || this; return u.privAudioNodeId = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.AudioStreamNodeEvent = f;
    l = function(n) {
        function t(t, i) { return n.call(this, "AudioStreamNodeAttachingEvent", t, i) || this }
        return r(t, n), t
    }(f);
    t.AudioStreamNodeAttachingEvent = l;
    a = function(n) {
        function t(t, i) { return n.call(this, "AudioStreamNodeAttachedEvent", t, i) || this }
        return r(t, n), t
    }(f);
    t.AudioStreamNodeAttachedEvent = a;
    v = function(n) {
        function t(t, i) { return n.call(this, "AudioStreamNodeDetachedEvent", t, i) || this }
        return r(t, n), t
    }(f);
    t.AudioStreamNodeDetachedEvent = v;
    y = function(n) {
        function t(t, i, r) { var u = n.call(this, "AudioStreamNodeErrorEvent", t, i) || this; return u.privError = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "error", { get: function() { return this.privError }, enumerable: !0, configurable: !0 }), t
    }(f);
    t.AudioStreamNodeErrorEvent = y
}, function(n, t, i) {
    "use strict";
    var r, f, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(7),
        function(n) {
            n[n.Debug = 0] = "Debug";
            n[n.Info = 1] = "Info";
            n[n.Warning = 2] = "Warning";
            n[n.Error = 3] = "Error"
        }(f = t.EventType || (t.EventType = {}));
    u = function() {
        function n(n, t) {
            this.privName = n;
            this.privEventId = r.createNoDashGuid();
            this.privEventTime = (new Date).toISOString();
            this.privEventType = t;
            this.privMetadata = {}
        }
        return Object.defineProperty(n.prototype, "name", { get: function() { return this.privName }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "eventId", { get: function() { return this.privEventId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "eventTime", { get: function() { return this.privEventTime }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "eventType", { get: function() { return this.privEventType }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "metadata", { get: function() { return this.privMetadata }, enumerable: !0, configurable: !0 }), n
    }();
    t.PlatformEvent = u
}, function(n, t) {
    "use strict";
    var i, r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    i = function() { var n = (new Date).getTime(); return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) { var i = (n + Math.random() * 16) % 16 | 0; return n = Math.floor(n / 16), (t === "x" ? i : i & 3 | 8).toString(16) }) };
    t.createGuid = i;
    r = function() { return i().replace(new RegExp("-", "g"), "").toUpperCase() };
    t.createNoDashGuid = r
}, function(n, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f, e, u, o, s, h, c, l, a, v;
    Object.defineProperty(t, "__esModule", { value: !0 });
    f = i(6);
    e = function(n) {
        function t(t, i, r) { r === void 0 && (r = f.EventType.Info); var u = n.call(this, t, r) || this; return u.privJsonResult = i, u }
        return r(t, n), Object.defineProperty(t.prototype, "jsonString", { get: function() { return this.privJsonResult }, enumerable: !0, configurable: !0 }), t
    }(f.PlatformEvent);
    t.ServiceEvent = e;
    u = function(n) {
        function t(t, i, r) { r === void 0 && (r = f.EventType.Info); var u = n.call(this, t, r) || this; return u.privConnectionId = i, u }
        return r(t, n), Object.defineProperty(t.prototype, "connectionId", { get: function() { return this.privConnectionId }, enumerable: !0, configurable: !0 }), t
    }(f.PlatformEvent);
    t.ConnectionEvent = u;
    o = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionStartEvent", t) || this; return u.privUri = i, u.privHeaders = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "uri", { get: function() { return this.privUri }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "headers", { get: function() { return this.privHeaders }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionStartEvent = o;
    s = function(n) {
        function t(t) { return n.call(this, "ConnectionEstablishedEvent", t) || this }
        return r(t, n), t
    }(u);
    t.ConnectionEstablishedEvent = s;
    h = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionClosedEvent", t, f.EventType.Debug) || this; return u.privRreason = r, u.privStatusCode = i, u }
        return r(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privRreason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "statusCode", { get: function() { return this.privStatusCode }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionClosedEvent = h;
    c = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionErrorEvent", t, f.EventType.Debug) || this; return u.privMessage = i, u.privType = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "message", { get: function() { return this.privMessage }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "type", { get: function() { return this.privType }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionErrorEvent = c;
    l = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionEstablishErrorEvent", t, f.EventType.Error) || this; return u.privStatusCode = i, u.privReason = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "statusCode", { get: function() { return this.privStatusCode }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionEstablishErrorEvent = l;
    a = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionMessageReceivedEvent", t) || this; return u.privNetworkReceivedTime = i, u.privMessage = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "networkReceivedTime", { get: function() { return this.privNetworkReceivedTime }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "message", { get: function() { return this.privMessage }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionMessageReceivedEvent = a;
    v = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectionMessageSentEvent", t) || this; return u.privNetworkSentTime = i, u.privMessage = r, u }
        return r(t, n), Object.defineProperty(t.prototype, "networkSentTime", { get: function() { return this.privNetworkSentTime }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "message", { get: function() { return this.privMessage }, enumerable: !0, configurable: !0 }), t
    }(u);
    t.ConnectionMessageSentEvent = v
}, function(n, t, i) {
    "use strict";
    var u, f, r, e;
    Object.defineProperty(t, "__esModule", { value: !0 });
    u = i(10);
    f = i(7),
        function(n) {
            n[n.Text = 0] = "Text";
            n[n.Binary = 1] = "Binary"
        }(r = t.MessageType || (t.MessageType = {}));
    e = function() {
        function n(n, t, i, e) {
            if (this.privBody = null, n === r.Text && t && !(typeof t == "string")) throw new u.InvalidOperationError("Payload must be a string");
            if (n === r.Binary && t && !(t instanceof ArrayBuffer)) throw new u.InvalidOperationError("Payload must be ArrayBuffer");
            this.privMessageType = n;
            this.privBody = t;
            this.privHeaders = i ? i : {};
            this.privId = e ? e : f.createNoDashGuid();
            switch (this.messageType) {
                case r.Binary:
                    this.privSize = this.binaryBody !== null ? this.binaryBody.byteLength : 0;
                    break;
                case r.Text:
                    this.privSize = this.textBody.length
            }
        }
        return Object.defineProperty(n.prototype, "messageType", { get: function() { return this.privMessageType }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "headers", { get: function() { return this.privHeaders }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "body", { get: function() { return this.privBody }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "textBody", { get: function() { if (this.privMessageType === r.Binary) throw new u.InvalidOperationError("Not supported for binary message"); return this.privBody }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "binaryBody", { get: function() { if (this.privMessageType === r.Text) throw new u.InvalidOperationError("Not supported for text message"); return this.privBody }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), n
    }();
    t.ConnectionMessage = e
}, function(n, t) {
    "use strict";
    var i = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = function(n) {
        function t(t) { var i = n.call(this, t) || this; return i.name = "ArgumentNull", i.message = t, i }
        return i(t, n), t
    }(Error);
    t.ArgumentNullError = r;
    u = function(n) {
        function t(t) { var i = n.call(this, t) || this; return i.name = "InvalidOperation", i.message = t, i }
        return i(t, n), t
    }(Error);
    t.InvalidOperationError = u;
    f = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.name = t + "ObjectDisposed", r.message = i, r }
        return i(t, n), t
    }(Error);
    t.ObjectDisposedError = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            this.privStatusCode = n;
            this.privReason = t
        }
        return Object.defineProperty(n.prototype, "statusCode", { get: function() { return this.privStatusCode }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), n
    }();
    t.ConnectionOpenResponse = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        u = i(13),
        f = function() {
            function n() {}
            return Object.defineProperty(n, "instance", { get: function() { return n.privInstance }, enumerable: !0, configurable: !0 }), n.privInstance = new u.EventSource, n.setEventSource = function(t) {
                if (!t) throw new r.ArgumentNullError("eventSource");
                n.privInstance = t
            }, n
        }();
    t.Events = f
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        u = i(7),
        f = function() {
            function n(n) {
                var t = this;
                this.privEventListeners = {};
                this.privIsDisposed = !1;
                this.onEvent = function(n) {
                    var i, u;
                    if (t.isDisposed()) throw new r.ObjectDisposedError("EventSource");
                    if (t.metadata)
                        for (i in t.metadata) i && n.metadata && (n.metadata[i] || (n.metadata[i] = t.metadata[i]));
                    for (u in t.privEventListeners) u && t.privEventListeners[u] && t.privEventListeners[u](n)
                };
                this.attach = function(n) { var i = u.createNoDashGuid(); return t.privEventListeners[i] = n, { detach: function() { delete t.privEventListeners[i] } } };
                this.attachListener = function(n) { return t.attach(n.onEvent) };
                this.isDisposed = function() { return t.privIsDisposed };
                this.dispose = function() {
                    t.privEventListeners = null;
                    t.privIsDisposed = !0
                };
                this.privMetadata = n
            }
            return Object.defineProperty(n.prototype, "metadata", { get: function() { return this.privMetadata }, enumerable: !0, configurable: !0 }), n
        }();
    t.EventSource = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.None = 0] = "None";
        n[n.Connected = 1] = "Connected";
        n[n.Connecting = 2] = "Connecting";
        n[n.Disconnected = 3] = "Disconnected"
    })(i = t.ConnectionState || (t.ConnectionState = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        u = function() {
            function n(t) {
                var i = this,
                    u, f, e;
                if (this.privSubscriptionIdCounter = 0, this.privAddSubscriptions = {}, this.privRemoveSubscriptions = {}, this.privDisposedSubscriptions = {}, this.privDisposeReason = null, this.get = function(n) { return i.throwIfDisposed(), i.privList[n] }, this.first = function() { return i.get(0) }, this.last = function() { return i.get(i.length() - 1) }, this.add = function(n) {
                        i.throwIfDisposed();
                        i.insertAt(i.privList.length, n)
                    }, this.insertAt = function(n, t) {
                        i.throwIfDisposed();
                        n === 0 ? i.privList.unshift(t) : n === i.privList.length ? i.privList.push(t) : i.privList.splice(n, 0, t);
                        i.triggerSubscriptions(i.privAddSubscriptions)
                    }, this.removeFirst = function() { return i.throwIfDisposed(), i.removeAt(0) }, this.removeLast = function() { return i.throwIfDisposed(), i.removeAt(i.length() - 1) }, this.removeAt = function(n) { return i.throwIfDisposed(), i.remove(n, 1)[0] }, this.remove = function(n, t) { i.throwIfDisposed(); var r = i.privList.splice(n, t); return i.triggerSubscriptions(i.privRemoveSubscriptions), r }, this.clear = function() {
                        i.throwIfDisposed();
                        i.remove(0, i.length())
                    }, this.length = function() { return i.throwIfDisposed(), i.privList.length }, this.onAdded = function(n) { i.throwIfDisposed(); var t = i.privSubscriptionIdCounter++; return i.privAddSubscriptions[t] = n, { detach: function() { delete i.privAddSubscriptions[t] } } }, this.onRemoved = function(n) { i.throwIfDisposed(); var t = i.privSubscriptionIdCounter++; return i.privRemoveSubscriptions[t] = n, { detach: function() { delete i.privRemoveSubscriptions[t] } } }, this.onDisposed = function(n) { i.throwIfDisposed(); var t = i.privSubscriptionIdCounter++; return i.privDisposedSubscriptions[t] = n, { detach: function() { delete i.privDisposedSubscriptions[t] } } }, this.join = function(n) { return i.throwIfDisposed(), i.privList.join(n) }, this.toArray = function() { var n = Array(); return i.privList.forEach(function(t) { n.push(t) }), n }, this.any = function(n) { return i.throwIfDisposed(), n ? i.where(n).length() > 0 : i.length() > 0 }, this.all = function(n) { return i.throwIfDisposed(), i.where(n).length() === i.length() }, this.forEach = function(n) { i.throwIfDisposed(); for (var t = 0; t < i.length(); t++) n(i.privList[t], t) }, this.select = function(t) { var u, r; for (i.throwIfDisposed(), u = [], r = 0; r < i.privList.length; r++) u.push(t(i.privList[r], r)); return new n(u) }, this.where = function(t) { var u, r; for (i.throwIfDisposed(), u = new n, r = 0; r < i.privList.length; r++) t(i.privList[r], r) && u.add(i.privList[r]); return u }, this.orderBy = function(t) {
                        i.throwIfDisposed();
                        var r = i.toArray(),
                            u = r.sort(t);
                        return new n(u)
                    }, this.orderByDesc = function(n) { return i.throwIfDisposed(), i.orderBy(function(t, i) { return n(i, t) }) }, this.clone = function() { return i.throwIfDisposed(), new n(i.toArray()) }, this.concat = function(t) { return i.throwIfDisposed(), new n(i.privList.concat(t.toArray())) }, this.concatArray = function(t) { return i.throwIfDisposed(), new n(i.privList.concat(t)) }, this.isDisposed = function() { return i.privList == null }, this.dispose = function(n) { i.isDisposed() || (i.privDisposeReason = n, i.privList = null, i.privAddSubscriptions = null, i.privRemoveSubscriptions = null, i.triggerSubscriptions(i.privDisposedSubscriptions)) }, this.throwIfDisposed = function() { if (i.isDisposed()) throw new r.ObjectDisposedError("List", i.privDisposeReason); }, this.triggerSubscriptions = function(n) {
                        if (n)
                            for (var t in n) t && n[t]()
                    }, this.privList = [], t)
                    for (u = 0, f = t; u < f.length; u++) e = f[u], this.privList.push(e)
            }
            return n
        }();
    t.List = u
}, function(n, t, i) {
    "use strict";
    var r, u, e, o, c, s, f, h;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(10),
        function(n) {
            n[n.None = 0] = "None";
            n[n.Resolved = 1] = "Resolved";
            n[n.Rejected = 2] = "Rejected"
        }(u = t.PromiseState || (t.PromiseState = {}));
    e = function() {
        function n(n) {
            var t = this;
            this.throwIfError = function() { if (t.isError) throw t.error; };
            n.on(function(n) { t.privIsCompleted || (t.privIsCompleted = !0, t.privIsError = !1, t.privResult = n) }, function(n) { t.privIsCompleted || (t.privIsCompleted = !0, t.privIsError = !0, t.privError = n) })
        }
        return Object.defineProperty(n.prototype, "isCompleted", { get: function() { return this.privIsCompleted }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isError", { get: function() { return this.privIsError }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "error", { get: function() { return this.privError }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), n
    }();
    t.PromiseResult = e;
    o = function() {
        function n() {
            var n = this;
            this.setResult = function(t) { n.privOnSetResult(t) };
            this.setError = function(t) { n.privOnSetError(t) };
            this.on = function(t, i) {
                n.privOnSetResult = t;
                n.privOnSetError = i
            }
        }
        return n
    }();
    t.PromiseResultEventSource = o;
    c = function() {
        function n() {}
        return n.whenAll = function(n) {
            var t, e, h;
            if (!n || n.length === 0) throw new r.ArgumentNullError("promises");
            var i = new f,
                u = [],
                o = 0,
                s = function() {
                    o++;
                    o === n.length && (u.length === 0 ? i.resolve(!0) : i.reject(u.join(", ")))
                };
            for (t = 0, e = n; t < e.length; t++) {
                h = e[t];
                h.on(function() { s() }, function(n) {
                    u.push(n);
                    s()
                })
            }
            return i.promise()
        }, n.fromResult = function(n) { var t = new f; return t.resolve(n), t.promise() }, n.fromError = function(n) { var t = new f; return t.reject(n), t.promise() }, n
    }();
    t.PromiseHelper = c;
    s = function() {
        function n(n) {
            var t = this;
            this.result = function() { return t.privSink.result };
            this.continueWith = function(n) {
                if (!n) throw new r.ArgumentNullError("continuationCallback");
                var i = new f;
                t.privSink.on(function() {
                    try {
                        var r = n(t.privSink.result);
                        i.resolve(r)
                    } catch (u) { i.reject(u) }
                }, function(r) {
                    try {
                        var u = n(t.privSink.result);
                        i.resolve(u)
                    } catch (f) { i.reject("'Error handler for error " + r + " threw error " + f + "'") }
                });
                return i.promise()
            };
            this.onSuccessContinueWith = function(n) {
                if (!n) throw new r.ArgumentNullError("continuationCallback");
                var i = new f;
                t.privSink.on(function(t) {
                    try {
                        var r = n(t);
                        i.resolve(r)
                    } catch (u) { i.reject(u) }
                }, function(n) { i.reject(n) });
                return i.promise()
            };
            this.continueWithPromise = function(n) {
                if (!n) throw new r.ArgumentNullError("continuationCallback");
                var i = new f;
                t.privSink.on(function() {
                    try {
                        var r = n(t.privSink.result);
                        if (!r) throw new Error("'Continuation callback did not return promise'");
                        r.on(function(n) { i.resolve(n) }, function(n) { i.reject(n) })
                    } catch (u) { i.reject(u) }
                }, function(r) {
                    try {
                        var u = n(t.privSink.result);
                        if (!u) throw new Error("Continuation callback did not return promise");
                        u.on(function(n) { i.resolve(n) }, function(n) { i.reject(n) })
                    } catch (f) { i.reject("'Error handler for error " + r + " threw error " + f + "'") }
                });
                return i.promise()
            };
            this.onSuccessContinueWithPromise = function(n) {
                if (!n) throw new r.ArgumentNullError("continuationCallback");
                var i = new f;
                t.privSink.on(function(t) {
                    try {
                        var r = n(t);
                        if (!r) throw new Error("Continuation callback did not return promise");
                        r.on(function(n) { i.resolve(n) }, function(n) { i.reject(n) })
                    } catch (u) { i.reject(u) }
                }, function(n) { i.reject(n) });
                return i.promise()
            };
            this.on = function(n, i) {
                if (!n) throw new r.ArgumentNullError("successCallback");
                if (!i) throw new r.ArgumentNullError("errorCallback");
                t.privSink.on(n, i);
                return t
            };
            this.finally = function(n) { if (!n) throw new r.ArgumentNullError("callback"); var i = function() { n() }; return t.on(i, i) };
            this.privSink = n
        }
        return n
    }();
    t.Promise = s;
    f = function() {
        function n() {
            var n = this;
            this.state = function() { return n.privSink.state };
            this.promise = function() { return n.privPromise };
            this.resolve = function(t) { return n.privSink.resolve(t), n };
            this.reject = function(t) { return n.privSink.reject(t), n };
            this.privSink = new h;
            this.privPromise = new s(this.privSink)
        }
        return n
    }();
    t.Deferred = f;
    h = function() {
        function n() {
            var n = this;
            this.privState = u.None;
            this.privPromiseResult = null;
            this.privPromiseResultEvents = null;
            this.privSuccessHandlers = [];
            this.privErrorHandlers = [];
            this.resolve = function(t) {
                if (n.privState !== u.None) throw new Error("'Cannot resolve a completed promise'");
                n.privState = u.Resolved;
                n.privPromiseResultEvents.setResult(t);
                for (var i = 0; i < n.privSuccessHandlers.length; i++) n.executeSuccessCallback(t, n.privSuccessHandlers[i], n.privErrorHandlers[i]);
                n.detachHandlers()
            };
            this.reject = function(t) {
                var i, r, f;
                if (n.privState !== u.None) throw new Error("'Cannot reject a completed promise'");
                for (n.privState = u.Rejected, n.privPromiseResultEvents.setError(t), i = 0, r = n.privErrorHandlers; i < r.length; i++) f = r[i], n.executeErrorCallback(t, f);
                n.detachHandlers()
            };
            this.on = function(t, i) {
                t == null && (t = function() { return });
                n.privState === u.None ? (n.privSuccessHandlers.push(t), n.privErrorHandlers.push(i)) : (n.privState === u.Resolved ? n.executeSuccessCallback(n.privPromiseResult.result, t, i) : n.privState === u.Rejected && n.executeErrorCallback(n.privPromiseResult.error, i), n.detachHandlers())
            };
            this.executeSuccessCallback = function(t, i, r) { try { i(t) } catch (u) { n.executeErrorCallback("'Unhandled callback error: " + u + "'", r) } };
            this.executeErrorCallback = function(n, t) { if (t) try { t(n) } catch (i) { throw new Error("'Unhandled callback error: " + i + ". InnerError: " + n + "'"); } else throw new Error("'Unhandled error: " + n + "'"); };
            this.detachHandlers = function() {
                n.privErrorHandlers = [];
                n.privSuccessHandlers = []
            };
            this.privPromiseResultEvents = new o;
            this.privPromiseResult = new e(this.privPromiseResultEvents)
        }
        return Object.defineProperty(n.prototype, "state", { get: function() { return this.privState }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "result", { get: function() { return this.privPromiseResult }, enumerable: !0, configurable: !0 }), n
    }();
    t.Sink = h
}, function(n, t, i) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(10),
        e = i(15),
        r = i(16),
        u;
    (function(n) {
        n[n.Dequeue = 0] = "Dequeue";
        n[n.Peek = 1] = "Peek"
    })(u || (u = {}));
    o = function() {
        function n(n) {
            var t = this;
            this.privPromiseStore = new e.List;
            this.privIsDrainInProgress = !1;
            this.privIsDisposing = !1;
            this.privDisposeReason = null;
            this.enqueue = function(n) {
                t.throwIfDispose();
                t.enqueueFromPromise(r.PromiseHelper.fromResult(n))
            };
            this.enqueueFromPromise = function(n) {
                t.throwIfDispose();
                t.privPromiseStore.add(n);
                n.finally(function() {
                    while (t.privPromiseStore.length() > 0)
                        if (t.privPromiseStore.first().result().isCompleted) {
                            var n = t.privPromiseStore.removeFirst();
                            n.result().isError || t.privList.add(n.result().result)
                        } else break
                })
            };
            this.dequeue = function() { t.throwIfDispose(); var n = new r.Deferred; return t.privSubscribers && (t.privSubscribers.add({ deferral: n, type: u.Dequeue }), t.drain()), n.promise() };
            this.peek = function() {
                t.throwIfDispose();
                var n = new r.Deferred,
                    i = t.privSubscribers;
                return i && (t.privSubscribers.add({ deferral: n, type: u.Peek }), t.drain()), n.promise()
            };
            this.length = function() { return t.throwIfDispose(), t.privList.length() };
            this.isDisposed = function() { return t.privSubscribers == null };
            this.drainAndDispose = function(n, i) {
                var u, o, f, e, s;
                if (!t.isDisposed() && !t.privIsDisposing) {
                    if (t.privDisposeReason = i, t.privIsDisposing = !0, u = t.privSubscribers, u) {
                        while (u.length() > 0) o = u.removeFirst(), o.deferral.resolve(undefined);
                        t.privSubscribers === u && (t.privSubscribers = u)
                    }
                    for (f = 0, e = t.privDetachables; f < e.length; f++) s = e[f], s.detach();
                    if (t.privPromiseStore.length() > 0 && n) return r.PromiseHelper.whenAll(t.privPromiseStore.toArray()).continueWith(function() { return t.privSubscribers = null, t.privList.forEach(function(t) { n(t) }), t.privList = null, !0 });
                    t.privSubscribers = null;
                    t.privList = null
                }
                return r.PromiseHelper.fromResult(!0)
            };
            this.dispose = function(n) { t.drainAndDispose(null, n) };
            this.drain = function() {
                var i, n, r, f;
                if (!t.privIsDrainInProgress && !t.privIsDisposing) {
                    if (t.privIsDrainInProgress = !0, i = t.privSubscribers, n = t.privList, i && n) {
                        while (n.length() > 0 && i.length() > 0 && !t.privIsDisposing) r = i.removeFirst(), r.type === u.Peek ? r.deferral.resolve(n.first()) : (f = n.removeFirst(), r.deferral.resolve(f));
                        t.privSubscribers === i && (t.privSubscribers = i);
                        t.privList === n && (t.privList = n)
                    }
                    t.privIsDrainInProgress = !1
                }
            };
            this.throwIfDispose = function() { if (t.isDisposed()) { if (t.privDisposeReason) throw new f.InvalidOperationError(t.privDisposeReason); throw new f.ObjectDisposedError("Queue"); } else if (t.privIsDisposing) throw new f.InvalidOperationError("Queue disposing"); };
            this.privList = n ? n : new e.List;
            this.privDetachables = [];
            this.privSubscribers = new e.List;
            this.privDetachables.push(this.privList.onAdded(this.drain))
        }
        return n
    }();
    t.Queue = o
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(9),
        r = i(10),
        f = i(7),
        e = function() {
            function n(n, t, i) {
                if (this.privPayload = null, !t) throw new r.ArgumentNullError("payload");
                if (n === u.MessageType.Binary && !(t instanceof ArrayBuffer)) throw new r.InvalidOperationError("Payload must be ArrayBuffer");
                if (n === u.MessageType.Text && !(typeof t == "string")) throw new r.InvalidOperationError("Payload must be a string");
                this.privMessageType = n;
                this.privPayload = t;
                this.privId = i ? i : f.createNoDashGuid()
            }
            return Object.defineProperty(n.prototype, "messageType", { get: function() { return this.privMessageType }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "payload", { get: function() { return this.privPayload }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "textContent", { get: function() { if (this.privMessageType === u.MessageType.Binary) throw new r.InvalidOperationError("Not supported for binary message"); return this.privPayload }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "binaryContent", { get: function() { if (this.privMessageType === u.MessageType.Text) throw new r.InvalidOperationError("Not supported for text message"); return this.privPayload }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), n
        }();
    t.RawWebsocketMessage = e
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            var i = this;
            this.encode = function(n) {
                var t = i.downSampleAudioFrame(n, i.privActualSampleRate, i.privDesiredSampleRate);
                if (!t) return null;
                var u = t.length * 2,
                    r = new ArrayBuffer(u),
                    f = new DataView(r);
                return i.floatTo16BitPCM(f, 0, t), r
            };
            this.setString = function(n, t, i) { for (var r = 0; r < i.length; r++) n.setUint8(t + r, i.charCodeAt(r)) };
            this.floatTo16BitPCM = function(n, t, i) { for (var u, r = 0; r < i.length; r++, t += 2) u = Math.max(-1, Math.min(1, i[r])), n.setInt16(t, u < 0 ? u * 32768 : u * 32767, !0) };
            this.downSampleAudioFrame = function(n, t, i) {
                if (i === t || i > t) return n;
                for (var f = t / i, e = Math.round(n.length / f), o = new Float32Array(e), r = 0, u = 0; u < e;) {
                    for (var c = Math.round((u + 1) * f), s = 0, h = 0; r < c && r < n.length;) s += n[r++], h++;
                    o[u++] = s / h
                }
                return o
            };
            this.privActualSampleRate = n;
            this.privDesiredSampleRate = t
        }
        return n
    }();
    t.RiffPcmEncoder = i
}, function(n, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(10),
        f = i(7),
        e = i(17),
        o = function() {
            function n(n) {
                var t = this;
                this.privReaderIdCounter = 1;
                this.privIsEnded = !1;
                this.getReader = function() {
                    var u = t.privReaderIdCounter,
                        n, f, i;
                    for (t.privReaderIdCounter++, n = new e.Queue, f = t.privStreambuffer.length, t.privReaderQueues[u] = n, i = 0; i < f; i++) n.enqueue(t.privStreambuffer[i]);
                    return new r(t.privId, n, function() { delete t.privReaderQueues[u] })
                };
                this.throwIfClosed = function() { if (t.privIsEnded) throw new u.InvalidOperationError("Stream closed"); };
                this.privId = n ? n : f.createNoDashGuid();
                this.privStreambuffer = [];
                this.privReaderQueues = {}
            }
            return Object.defineProperty(n.prototype, "isClosed", { get: function() { return this.privIsEnded }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), n.prototype.close = function() { this.privIsEnded || (this.writeStreamChunk({ buffer: null, isEnd: !0, timeReceived: Date.now() }), this.privIsEnded = !0) }, n.prototype.writeStreamChunk = function(n) {
                this.throwIfClosed();
                this.privStreambuffer.push(n);
                for (var t in this.privReaderQueues)
                    if (!this.privReaderQueues[t].isDisposed()) try { this.privReaderQueues[t].enqueue(n) } catch (i) {}
            }, n
        }();
    t.Stream = o;
    r = function() {
        function n(n, t, i) {
            var r = this;
            this.privIsClosed = !1;
            this.read = function() { if (r.isClosed) throw new u.InvalidOperationError("StreamReader closed"); return r.privReaderQueue.dequeue().onSuccessContinueWith(function(n) { return (n === undefined || n.isEnd) && r.privReaderQueue.dispose("End of stream reached"), n }) };
            this.close = function() { r.privIsClosed || (r.privIsClosed = !0, r.privReaderQueue.dispose("StreamReader closed"), r.privOnClose()) };
            this.privReaderQueue = t;
            this.privOnClose = i;
            this.privStreamId = n
        }
        return Object.defineProperty(n.prototype, "isClosed", { get: function() { return this.privIsClosed }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "streamId", { get: function() { return this.privStreamId }, enumerable: !0, configurable: !0 }), n
    }();
    t.StreamReader = r
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.Success = 0] = "Success";
        n[n.Error = 1] = "Error"
    })(i = t.TranslationStatus || (t.TranslationStatus = {}))
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(4);
    u = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privTargetChunkSize = t, r.privNextBufferReadyBytes = 0, r }
        return f(t, n), t.prototype.writeStreamChunk = function(t) {
            var i;
            if (t.isEnd || 0 === this.privNextBufferReadyBytes && t.buffer.byteLength === this.privTargetChunkSize) { n.prototype.writeStreamChunk.call(this, t); return }
            for (i = 0; i < t.buffer.byteLength;) {
                undefined === this.privNextBufferToWrite && (this.privNextBufferToWrite = new ArrayBuffer(this.privTargetChunkSize), this.privNextBufferStartTime = t.timeReceived);
                var r = Math.min(t.buffer.byteLength - i, this.privTargetChunkSize - this.privNextBufferReadyBytes),
                    u = new Uint8Array(this.privNextBufferToWrite),
                    f = new Uint8Array(t.buffer.slice(i, r + i));
                u.set(f, this.privNextBufferReadyBytes);
                this.privNextBufferReadyBytes += r;
                i += r;
                this.privNextBufferReadyBytes === this.privTargetChunkSize && (n.prototype.writeStreamChunk.call(this, { buffer: this.privNextBufferToWrite, isEnd: !1, timeReceived: this.privNextBufferStartTime }), this.privNextBufferReadyBytes = 0, this.privNextBufferToWrite = undefined)
            }
        }, t.prototype.close = function() {
            0 === this.privNextBufferReadyBytes || this.isClosed || n.prototype.writeStreamChunk.call(this, { buffer: this.privNextBufferToWrite.slice(0, this.privNextBufferReadyBytes), isEnd: !1, timeReceived: this.privNextBufferStartTime });
            n.prototype.close.call(this)
        }, t
    }(r.Stream);
    t.ChunkedArrayBufferStream = u
}, function(n, t, i) {
    "use strict";
    var f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(24),
        u = i(25),
        r = i(4);
    t.AudioWorkletSourceURLPropertyName = "MICROPHONE-WorkletSourceUrl";
    f = function() {
        function n(t, i, u) {
            var f = this;
            this.privRecorder = t;
            this.deviceId = i;
            this.privStreams = {};
            this.turnOn = function() {
                var u, n, t, e, o;
                if (f.privInitializeDeferral) return f.privInitializeDeferral.promise();
                f.privInitializeDeferral = new r.Deferred;
                try { f.createAudioContext() } catch (i) { return i instanceof Error ? (u = i, f.privInitializeDeferral.reject(u.name + ": " + u.message)) : f.privInitializeDeferral.reject(i), f.privInitializeDeferral.promise() }
                if (n = window.navigator, t = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia, !n.mediaDevices || (t = function(t, i, r) { n.mediaDevices.getUserMedia(t).then(i).catch(r) }), t) o = function() {
                    f.onEvent(new r.AudioSourceInitializingEvent(f.privId));
                    t({ audio: f.deviceId ? { deviceId: f.deviceId } : !0, video: !1 }, function(n) {
                        f.privMediaStream = n;
                        f.onEvent(new r.AudioSourceReadyEvent(f.privId));
                        f.privInitializeDeferral.resolve(!0)
                    }, function(n) {
                        var t = "Error occurred during microphone initialization: " + n,
                            i = f.privInitializeDeferral;
                        f.privInitializeDeferral = null;
                        i.reject(t);
                        f.onEvent(new r.AudioSourceErrorEvent(f.privId, t))
                    })
                }, f.privContext.state === "suspended" ? f.privContext.resume().then(o, function(n) { f.privInitializeDeferral.reject("Failed to initialize audio context: " + n) }) : o();
                else {
                    e = "Browser does not support getUserMedia.";
                    f.privInitializeDeferral.reject(e);
                    f.onEvent(new r.AudioSourceErrorEvent(e, ""))
                }
                return f.privInitializeDeferral.promise()
            };
            this.id = function() { return f.privId };
            this.attach = function(n) {
                f.onEvent(new r.AudioStreamNodeAttachingEvent(f.privId, n));
                return f.listen(n).onSuccessContinueWith(function(t) {
                    f.onEvent(new r.AudioStreamNodeAttachedEvent(f.privId, n));
                    return {
                        detach: function() {
                            t.close();
                            f.turnOff();
                            delete f.privStreams[n];
                            f.onEvent(new r.AudioStreamNodeDetachedEvent(f.privId, n))
                        },
                        id: function() { return n },
                        read: function() { return t.read() }
                    }
                })
            };
            this.detach = function(n) {
                if (n && f.privStreams[n]) {
                    f.privStreams[n].close();
                    delete f.privStreams[n];
                    f.onEvent(new r.AudioStreamNodeDetachedEvent(f.privId, n))
                }
            };
            this.turnOff = function() {
                var n, t;
                for (n in f.privStreams) n && (t = f.privStreams[n], t && t.close());
                f.onEvent(new r.AudioSourceOffEvent(f.privId));
                return f.privInitializeDeferral = null, f.destroyAudioContext(), r.PromiseHelper.fromResult(!0)
            };
            this.listen = function(n) {
                return f.turnOn().onSuccessContinueWith(function() {
                    var t = new r.ChunkedArrayBufferStream(f.privOutputChunkSize, n);
                    f.privStreams[n] = t;
                    try { f.privRecorder.record(f.privContext, f.privMediaStream, t) } catch (i) { f.onEvent(new r.AudioStreamNodeErrorEvent(f.privId, n, i)); throw i; }
                    return t.getReader()
                })
            };
            this.onEvent = function(n) {
                f.privEvents.onEvent(n);
                r.Events.instance.onEvent(n)
            };
            this.createAudioContext = function() {
                if (!f.privContext) {
                    var n = window.AudioContext || window.webkitAudioContext || !1;
                    if (!n) throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
                    f.privContext = new n
                }
            };
            this.destroyAudioContext = function() {
                if (f.privContext) {
                    f.privRecorder.releaseMediaResources(f.privContext);
                    var n = !1;
                    "close" in f.privContext && (n = !0);
                    n ? (f.privContext.close(), f.privContext = null) : null !== f.privContext && f.privContext.state === "running" && f.privContext.suspend()
                }
            };
            this.privOutputChunkSize = n.AUDIOFORMAT.avgBytesPerSec / 10;
            this.privId = u ? u : r.createNoDashGuid();
            this.privEvents = new r.EventSource
        }
        return Object.defineProperty(n.prototype, "format", { get: function() { return r.PromiseHelper.fromResult(n.AUDIOFORMAT) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "events", { get: function() { return this.privEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "deviceInfo", { get: function() { return this.getMicrophoneLabel().onSuccessContinueWith(function(t) { return { bitspersample: n.AUDIOFORMAT.bitsPerSample, channelcount: n.AUDIOFORMAT.channels, connectivity: u.connectivity.Unknown, manufacturer: "Speech SDK", model: t, samplerate: n.AUDIOFORMAT.samplesPerSec, type: u.type.Microphones } }) }, enumerable: !0, configurable: !0 }), n.prototype.setProperty = function(n, i) {
            if (n === t.AudioWorkletSourceURLPropertyName) this.privRecorder.setWorkletUrl(i);
            else throw new Error("Property '" + n + "' is not supported on Microphone.");
        }, n.prototype.getMicrophoneLabel = function() {
            var t = this,
                u = "microphone",
                i, n;
            return this.privMicrophoneLabel !== undefined ? r.PromiseHelper.fromResult(this.privMicrophoneLabel) : this.privMediaStream === undefined || !this.privMediaStream.active ? r.PromiseHelper.fromResult(u) : (this.privMicrophoneLabel = u, i = this.privMediaStream.getTracks()[0].getSettings().deviceId, undefined === i) ? r.PromiseHelper.fromResult(this.privMicrophoneLabel) : (n = new r.Deferred, navigator.mediaDevices.enumerateDevices().then(function(r) {
                for (var e, u = 0, f = r; u < f.length; u++)
                    if (e = f[u], e.deviceId === i) { t.privMicrophoneLabel = e.label; break }
                n.resolve(t.privMicrophoneLabel)
            }, function() { return n.resolve(t.privMicrophoneLabel) }), n.promise())
        }, n.AUDIOFORMAT = e.AudioStreamFormat.getDefaultInputFormat(), n
    }();
    t.MicAudioSource = f
}, function(n, t) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, i;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = function() {
        function n() {}
        return n.getDefaultInputFormat = function() { return i.getDefaultInputFormat() }, n.getWaveFormatPCM = function(n, t, r) { return new i(n, t, r) }, n
    }();
    t.AudioStreamFormat = r;
    i = function(n) {
        function t(t, i, r) { var u, f; return t === void 0 && (t = 16e3), i === void 0 && (i = 16), r === void 0 && (r = 1), u = n.call(this) || this, u.setString = function(n, t, i) { for (var r = 0; r < i.length; r++) n.setUint8(t + r, i.charCodeAt(r)) }, u.formatTag = 1, u.bitsPerSample = i, u.samplesPerSec = t, u.channels = r, u.avgBytesPerSec = u.samplesPerSec * u.channels * (u.bitsPerSample / 8), u.blockAlign = u.channels * Math.max(u.bitsPerSample, 8), u.privHeader = new ArrayBuffer(44), f = new DataView(u.privHeader), u.setString(f, 0, "RIFF"), f.setUint32(4, 0, !0), u.setString(f, 8, "WAVEfmt "), f.setUint32(16, 16, !0), f.setUint16(20, 1, !0), f.setUint16(22, u.channels, !0), f.setUint32(24, u.samplesPerSec, !0), f.setUint32(28, u.avgBytesPerSec, !0), f.setUint16(32, u.channels * (u.bitsPerSample / 8), !0), f.setUint16(34, u.bitsPerSample, !0), u.setString(f, 36, "data"), f.setUint32(40, 0, !0), u }
        return u(t, n), t.getDefaultInputFormat = function() { return new t }, t.prototype.close = function() { return }, Object.defineProperty(t.prototype, "header", { get: function() { return this.privHeader }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.AudioStreamFormatImpl = i
}, function(n, t, i) {
    "use strict";

    function r(n) { for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i]) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    r(i(26));
    r(i(28));
    r(i(27));
    r(i(29));
    r(i(105));
    r(i(106));
    r(i(108));
    r(i(109));
    r(i(64));
    r(i(110));
    r(i(111));
    r(i(112));
    r(i(113));
    r(i(114));
    r(i(115));
    r(i(116));
    r(i(117));
    r(i(118));
    r(i(119));
    r(i(120));
    r(i(121));
    r(i(122));
    r(i(123));
    r(i(124));
    r(i(125));
    r(i(126));
    r(i(128));
    r(i(129));
    r(i(130));
    r(i(134));
    r(i(135));
    r(i(150));
    r(i(151));
    r(i(152));
    r(i(154));
    t.OutputFormatPropertyName = "OutputFormat";
    t.CancellationErrorCodePropertyName = "CancellationErrorCode";
    t.ServicePropertiesPropertyName = "ServiceProperties";
    t.ForceDictationPropertyName = "ForceDication"
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(27),
        f = "Ocp-Apim-Subscription-Key",
        e = function() {
            function n(n) {
                var t = this;
                if (this.fetch = function() { return r.PromiseHelper.fromResult(t.privAuthInfo) }, this.fetchOnExpiry = function() { return r.PromiseHelper.fromResult(t.privAuthInfo) }, !n) throw new r.ArgumentNullError("subscriptionKey");
                this.privAuthInfo = new u.AuthInfo(f, n)
            }
            return n
        }();
    t.CognitiveSubscriptionKeyAuthentication = e
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            this.privHeaderName = n;
            this.privToken = t
        }
        return Object.defineProperty(n.prototype, "headerName", { get: function() { return this.privHeaderName }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "token", { get: function() { return this.privToken }, enumerable: !0, configurable: !0 }), n
    }();
    t.AuthInfo = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(27),
        f = "Authorization",
        e = function() {
            function n(n, t) {
                var i = this;
                if (this.fetch = function(n) { return i.privFetchCallback(n).onSuccessContinueWith(function(n) { return new u.AuthInfo(f, n) }) }, this.fetchOnExpiry = function(n) { return i.privFetchOnExpiryCallback(n).onSuccessContinueWith(function(n) { return new u.AuthInfo(f, n) }) }, !n) throw new r.ArgumentNullError("fetchCallback");
                if (!t) throw new r.ArgumentNullError("fetchOnExpiryCallback");
                this.privFetchCallback = n;
                this.privFetchOnExpiryCallback = t
            }
            return n
        }();
    t.CognitiveTokenAuthentication = e
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(2),
        r = i(30),
        e = i(65),
        o = i(25),
        s = "X-ConnectionId",
        h = function(n) {
            function t() {
                var t = n !== null && n.apply(this, arguments) || this;
                return t.create = function(n, i, f) {
                    var e = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint),
                        l, h;
                    if (!e) {
                        var c = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_IntentRegion),
                            a = c && c.toLowerCase().startsWith("china") ? ".azure.cn" : ".microsoft.com",
                            v = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Host, "wss://" + c + ".sr.speech" + a);
                        e = v + "/speech/recognition/interactive/cognitiveservices/v1"
                    }
                    return l = { format: "simple", language: n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage) }, t.setCommonUrlParams(n, l, e), h = {}, i.token !== undefined && i.token !== "" && (h[i.headerName] = i.token), h[s] = f, n.parameters.setProperty(r.PropertyId.SpeechServiceConnection_Url, e), new u.WebsocketConnection(e, l, h, new o.WebsocketMessageFormatter, u.ProxyInfo.fromRecognizerConfig(n), f)
                }, t
            }
            return f(t, n), t.prototype.getSpeechRegionFromIntentRegion = function(n) {
                switch (n) {
                    case "West US":
                    case "US West":
                    case "westus":
                        return "uswest";
                    case "West US 2":
                    case "US West 2":
                    case "westus2":
                        return "uswest2";
                    case "South Central US":
                    case "US South Central":
                    case "southcentralus":
                        return "ussouthcentral";
                    case "West Central US":
                    case "US West Central":
                    case "westcentralus":
                        return "uswestcentral";
                    case "East US":
                    case "US East":
                    case "eastus":
                        return "useast";
                    case "East US 2":
                    case "US East 2":
                    case "eastus2":
                        return "useast2";
                    case "West Europe":
                    case "Europe West":
                    case "westeurope":
                        return "europewest";
                    case "North Europe":
                    case "Europe North":
                    case "northeurope":
                        return "europenorth";
                    case "Brazil South":
                    case "South Brazil":
                    case "southbrazil":
                        return "brazilsouth";
                    case "Australia East":
                    case "East Australia":
                    case "eastaustralia":
                        return "australiaeast";
                    case "Southeast Asia":
                    case "Asia Southeast":
                    case "southeastasia":
                        return "asiasoutheast";
                    case "East Asia":
                    case "Asia East":
                    case "eastasia":
                        return "asiaeast";
                    default:
                        return n
                }
            }, t
        }(e.ConnectionFactoryBase);
    t.IntentConnectionFactory = h
}, function(n, t, i) {
    "use strict";
    var o, s, u, f, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, e, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, r, yi, pi, wi, bi, ki;
    Object.defineProperty(t, "__esModule", { value: !0 });
    o = i(31);
    t.AudioConfig = o.AudioConfig;
    s = i(24);
    t.AudioStreamFormat = s.AudioStreamFormat;
    u = i(35);
    t.AudioInputStream = u.AudioInputStream;
    t.PullAudioInputStream = u.PullAudioInputStream;
    t.PushAudioInputStream = u.PushAudioInputStream;
    f = i(36);
    t.AudioOutputStream = f.AudioOutputStream;
    t.PullAudioOutputStream = f.PullAudioOutputStream;
    t.PushAudioOutputStream = f.PushAudioOutputStream;
    h = i(39);
    t.CancellationReason = h.CancellationReason;
    c = i(40);
    t.PullAudioInputStreamCallback = c.PullAudioInputStreamCallback;
    l = i(41);
    t.PushAudioOutputStreamCallback = l.PushAudioOutputStreamCallback;
    a = i(42);
    t.KeywordRecognitionModel = a.KeywordRecognitionModel;
    v = i(43);
    t.SessionEventArgs = v.SessionEventArgs;
    y = i(44);
    t.RecognitionEventArgs = y.RecognitionEventArgs;
    p = i(45);
    t.OutputFormat = p.OutputFormat;
    w = i(46);
    t.IntentRecognitionEventArgs = w.IntentRecognitionEventArgs;
    b = i(47);
    t.RecognitionResult = b.RecognitionResult;
    k = i(48);
    t.SpeechRecognitionResult = k.SpeechRecognitionResult;
    d = i(49);
    t.IntentRecognitionResult = d.IntentRecognitionResult;
    g = i(50);
    t.LanguageUnderstandingModel = g.LanguageUnderstandingModel;
    nt = i(51);
    t.SpeechRecognitionEventArgs = nt.SpeechRecognitionEventArgs;
    tt = i(52);
    t.SpeechRecognitionCanceledEventArgs = tt.SpeechRecognitionCanceledEventArgs;
    it = i(53);
    t.TranslationRecognitionEventArgs = it.TranslationRecognitionEventArgs;
    rt = i(54);
    t.TranslationSynthesisEventArgs = rt.TranslationSynthesisEventArgs;
    ut = i(55);
    t.TranslationRecognitionResult = ut.TranslationRecognitionResult;
    ft = i(56);
    t.TranslationSynthesisResult = ft.TranslationSynthesisResult;
    et = i(57);
    t.ResultReason = et.ResultReason;
    e = i(58);
    t.SpeechConfig = e.SpeechConfig;
    t.SpeechConfigImpl = e.SpeechConfigImpl;
    ot = i(59);
    t.SpeechTranslationConfig = ot.SpeechTranslationConfig;
    st = i(60);
    t.PropertyCollection = st.PropertyCollection;
    ht = i(61);
    t.PropertyId = ht.PropertyId;
    ct = i(62);
    t.Recognizer = ct.Recognizer;
    lt = i(63);
    t.SpeechRecognizer = lt.SpeechRecognizer;
    at = i(67);
    t.IntentRecognizer = at.IntentRecognizer;
    vt = i(68);
    t.TranslationRecognizer = vt.TranslationRecognizer;
    yt = i(69);
    t.Translations = yt.Translations;
    pt = i(70);
    t.NoMatchReason = pt.NoMatchReason;
    wt = i(71);
    t.NoMatchDetails = wt.NoMatchDetails;
    bt = i(72);
    t.TranslationRecognitionCanceledEventArgs = bt.TranslationRecognitionCanceledEventArgs;
    kt = i(73);
    t.IntentRecognitionCanceledEventArgs = kt.IntentRecognitionCanceledEventArgs;
    dt = i(74);
    t.CancellationDetails = dt.CancellationDetails;
    gt = i(75);
    t.CancellationErrorCode = gt.CancellationErrorCode;
    ni = i(76);
    t.ConnectionEventArgs = ni.ConnectionEventArgs;
    ti = i(77);
    t.ServiceEventArgs = ti.ServiceEventArgs;
    ii = i(78);
    t.Connection = ii.Connection;
    ri = i(80);
    t.PhraseListGrammar = ri.PhraseListGrammar;
    ui = i(81);
    t.DialogServiceConfig = ui.DialogServiceConfig;
    fi = i(82);
    t.BotFrameworkConfig = fi.BotFrameworkConfig;
    ei = i(83);
    t.CustomCommandsConfig = ei.CustomCommandsConfig;
    oi = i(84);
    t.DialogServiceConnector = oi.DialogServiceConnector;
    si = i(86);
    t.ActivityReceivedEventArgs = si.ActivityReceivedEventArgs;
    hi = i(87);
    t.ServicePropertyChannel = hi.ServicePropertyChannel;
    ci = i(88);
    t.ProfanityOption = ci.ProfanityOption;
    li = i(89);
    t.BaseAudioPlayer = li.BaseAudioPlayer;
    ai = i(90);
    t.ConnectionMessageEventArgs = ai.ConnectionMessageEventArgs;
    vi = i(79);
    t.ConnectionMessage = vi.ConnectionMessage;
    r = i(91);
    t.Conversation = r.Conversation;
    t.ConversationExpirationEventArgs = r.ConversationExpirationEventArgs;
    t.ConversationParticipantsChangedEventArgs = r.ConversationParticipantsChangedEventArgs;
    t.ConversationTranslationCanceledEventArgs = r.ConversationTranslationCanceledEventArgs;
    t.ConversationTranslationEventArgs = r.ConversationTranslationEventArgs;
    t.ConversationTranslationResult = r.ConversationTranslationResult;
    t.ConversationTranslator = r.ConversationTranslator;
    t.Participant = r.Participant;
    t.ParticipantChangedReason = r.ParticipantChangedReason;
    t.User = r.User;
    yi = i(38);
    t.SpeechSynthesisOutputFormat = yi.SpeechSynthesisOutputFormat;
    pi = i(101);
    t.SpeechSynthesizer = pi.SpeechSynthesizer;
    wi = i(102);
    t.SpeechSynthesisResult = wi.SpeechSynthesisResult;
    bi = i(103);
    t.SpeechSynthesisEventArgs = bi.SpeechSynthesisEventArgs;
    ki = i(104);
    t.SpeechSynthesisWordBoundaryEventArgs = ki.SpeechSynthesisWordBoundaryEventArgs
}, function(n, t, i) {
    "use strict";
    var s = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(2),
        h = i(32),
        e = i(30),
        c = i(33),
        l = i(35),
        a = i(36),
        o = function() {
            function n() {}
            return n.fromDefaultMicrophoneInput = function() { var n = new f.PcmRecorder; return new r(new f.MicAudioSource(n)) }, n.fromMicrophoneInput = function(n) { var t = new f.PcmRecorder; return new r(new f.MicAudioSource(t, n)) }, n.fromWavFileInput = function(n) { return new r(new f.FileAudioSource(n)) }, n.fromStreamInput = function(n) { if (n instanceof e.PullAudioInputStreamCallback) return new r(new l.PullAudioInputStreamImpl(n)); if (n instanceof e.AudioInputStream) return new r(n); throw new Error("Not Supported Type"); }, n.fromDefaultSpeakerOutput = function() { return new u(new f.SpeakerAudioDestination) }, n.fromAudioFileOutput = function(n) { return new u(new c.AudioFileWriter(n)) }, n.fromStreamOutput = function(n) { if (n instanceof e.PushAudioOutputStreamCallback) return new u(new a.PushAudioOutputStreamImpl(n)); if (n instanceof e.PushAudioOutputStream || n instanceof e.PullAudioOutputStream) return new u(n); throw new Error("Not Supported Type"); }, n
        }();
    t.AudioConfig = o;
    r = function(n) {
        function t(t) { var i = n.call(this) || this; return i.privSource = t, i }
        return s(t, n), Object.defineProperty(t.prototype, "format", { get: function() { return this.privSource.format }, enumerable: !0, configurable: !0 }), t.prototype.close = function() { this.privSource.turnOff() }, t.prototype.id = function() { return this.privSource.id() }, t.prototype.turnOn = function() { return this.privSource.turnOn() }, t.prototype.attach = function(n) { return this.privSource.attach(n) }, t.prototype.detach = function(n) { return this.privSource.detach(n) }, t.prototype.turnOff = function() { return this.privSource.turnOff() }, Object.defineProperty(t.prototype, "events", { get: function() { return this.privSource.events }, enumerable: !0, configurable: !0 }), t.prototype.setProperty = function(n, t) {
            if (h.Contracts.throwIfNull(t, "value"), undefined !== this.privSource.setProperty) this.privSource.setProperty(n, t);
            else throw new Error("This AudioConfig instance does not support setting properties.");
        }, t.prototype.getProperty = function(n, t) { if (undefined !== this.privSource.getProperty) return this.privSource.getProperty(n, t); throw new Error("This AudioConfig instance does not support getting properties."); }, Object.defineProperty(t.prototype, "deviceInfo", { get: function() { return this.privSource.deviceInfo }, enumerable: !0, configurable: !0 }), t
    }(o);
    t.AudioConfigImpl = r;
    u = function(n) {
        function t(t) { var i = n.call(this) || this; return i.privDestination = t, i }
        return s(t, n), Object.defineProperty(t.prototype, "format", { set: function(n) { this.privDestination.format = n }, enumerable: !0, configurable: !0 }), t.prototype.write = function(n) { this.privDestination.write(n) }, t.prototype.close = function() { this.privDestination.close() }, t.prototype.id = function() { return this.privDestination.id() }, t.prototype.setProperty = function() { throw new Error("This AudioConfig instance does not support setting properties."); }, t.prototype.getProperty = function() { throw new Error("This AudioConfig instance does not support getting properties."); }, t
    }(o);
    t.AudioOutputConfigImpl = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return n.throwIfNullOrUndefined = function(n, t) { if (n === undefined || n === null) throw new Error("throwIfNullOrUndefined:" + t); }, n.throwIfNull = function(n, t) { if (n === null) throw new Error("throwIfNull:" + t); }, n.throwIfNullOrWhitespace = function(t, i) { if (n.throwIfNullOrUndefined(t, i), ("" + t).trim().length < 1) throw new Error("throwIfNullOrWhitespace:" + i); }, n.throwIfDisposed = function(n) { if (n) throw new Error("the object is already disposed"); }, n.throwIfArrayEmptyOrWhitespace = function(t, i) { var r, u, f; if (n.throwIfNullOrUndefined(t, i), t.length === 0) throw new Error("throwIfArrayEmptyOrWhitespace:" + i); for (r = 0, u = t; r < u.length; r++) f = u[r], n.throwIfNullOrWhitespace(f, i) }, n.throwIfFileDoesNotExist = function(t, i) { n.throwIfNullOrWhitespace(t, i) }, n.throwIfNotUndefined = function(n, t) { if (n !== undefined) throw new Error("throwIfNotUndefined:" + t); }, n
    }();
    t.Contracts = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(34),
        u = i(32),
        f = function() {
            function n(n) {
                var t = this;
                this.id = function() { return t.privId };
                this.privFd = r.openSync(n, "w")
            }
            return Object.defineProperty(n.prototype, "format", {
                set: function(n) {
                    u.Contracts.throwIfNotUndefined(this.privAudioFormat, "format is already set");
                    this.privAudioFormat = n;
                    var t = 0;
                    this.privAudioFormat.hasHeader && (t = this.privAudioFormat.header.byteLength);
                    this.privFd !== undefined && (this.privWriteStream = r.createWriteStream("", { fd: this.privFd, start: t, autoClose: !1 }))
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.write = function(n) {
                u.Contracts.throwIfNullOrUndefined(this.privAudioFormat, "must set format before writing.");
                this.privWriteStream !== undefined && this.privWriteStream.write(new Uint8Array(n.slice(0)))
            }, n.prototype.close = function() {
                var n = this;
                if (this.privFd !== undefined) {
                    this.privWriteStream.on("finish", function() {
                        n.privAudioFormat.hasHeader && (n.privAudioFormat.updateHeader(n.privWriteStream.bytesWritten), r.writeSync(n.privFd, new Int8Array(n.privAudioFormat.header), 0, n.privAudioFormat.header.byteLength, 0));
                        r.closeSync(n.privFd);
                        n.privFd = undefined
                    });
                    this.privWriteStream.end()
                }
            }, n
        }();
    t.AudioFileWriter = f
}, function() {}, function(n, t, i) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        e, h, o, c;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(25),
        r = i(4),
        l = i(7),
        a = i(30),
        v = i(24),
        s = function() {
            function n() {}
            return n.createPushStream = function(n) { return e.create(n) }, n.createPullStream = function(n, t) { return o.create(n, t) }, n
        }();
    t.AudioInputStream = s;
    e = function(n) {
        function t() { return n !== null && n.apply(this, arguments) || this }
        return u(t, n), t.create = function(n) { return new h(n) }, t
    }(s);
    t.PushAudioInputStream = e;
    h = function(n) {
        function t(t) {
            var i = n.call(this) || this;
            return i.onEvent = function(n) {
                i.privEvents.onEvent(n);
                r.Events.instance.onEvent(n)
            }, i.privFormat = t === undefined ? v.AudioStreamFormatImpl.getDefaultInputFormat() : t, i.privEvents = new r.EventSource, i.privId = l.createNoDashGuid(), i.privStream = new r.ChunkedArrayBufferStream(i.privFormat.avgBytesPerSec / 10), i
        }
        return u(t, n), Object.defineProperty(t.prototype, "format", { get: function() { return r.PromiseHelper.fromResult(this.privFormat) }, enumerable: !0, configurable: !0 }), t.prototype.write = function(n) { this.privStream.writeStreamChunk({ buffer: n, isEnd: !1, timeReceived: Date.now() }) }, t.prototype.close = function() { this.privStream.close() }, t.prototype.id = function() { return this.privId }, t.prototype.turnOn = function() {
            this.onEvent(new r.AudioSourceInitializingEvent(this.privId));
            this.onEvent(new r.AudioSourceReadyEvent(this.privId));
            return r.PromiseHelper.fromResult(!0)
        }, t.prototype.attach = function(n) {
            var t = this;
            this.onEvent(new r.AudioStreamNodeAttachingEvent(this.privId, n));
            return this.turnOn().onSuccessContinueWith(function() { return t.privStream.getReader() }).onSuccessContinueWith(function(i) {
                t.onEvent(new r.AudioStreamNodeAttachedEvent(t.privId, n));
                return {
                    detach: function() {
                        i.close();
                        t.onEvent(new r.AudioStreamNodeDetachedEvent(t.privId, n));
                        t.turnOff()
                    },
                    id: function() { return n },
                    read: function() { return i.read() }
                }
            })
        }, t.prototype.detach = function(n) { this.onEvent(new r.AudioStreamNodeDetachedEvent(this.privId, n)) }, t.prototype.turnOff = function() { return r.PromiseHelper.fromResult(!1) }, Object.defineProperty(t.prototype, "events", { get: function() { return this.privEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "deviceInfo", { get: function() { return r.PromiseHelper.fromResult({ bitspersample: this.privFormat.bitsPerSample, channelcount: this.privFormat.channels, connectivity: f.connectivity.Unknown, manufacturer: "Speech SDK", model: "PushStream", samplerate: this.privFormat.samplesPerSec, type: f.type.Stream }) }, enumerable: !0, configurable: !0 }), t
    }(e);
    t.PushAudioInputStreamImpl = h;
    o = function(n) {
        function t() { return n.call(this) || this }
        return u(t, n), t.create = function(n, t) { return new c(n, t) }, t
    }(s);
    t.PullAudioInputStream = o;
    c = function(n) {
        function t(t, i) {
            var u = n.call(this) || this;
            return u.onEvent = function(n) {
                u.privEvents.onEvent(n);
                r.Events.instance.onEvent(n)
            }, u.privFormat = undefined === i ? a.AudioStreamFormat.getDefaultInputFormat() : i, u.privEvents = new r.EventSource, u.privId = l.createNoDashGuid(), u.privCallback = t, u.privIsClosed = !1, u.privBufferSize = u.privFormat.avgBytesPerSec / 10, u
        }
        return u(t, n), Object.defineProperty(t.prototype, "format", { get: function() { return r.PromiseHelper.fromResult(this.privFormat) }, enumerable: !0, configurable: !0 }), t.prototype.close = function() {
            this.privIsClosed = !0;
            this.privCallback.close()
        }, t.prototype.id = function() { return this.privId }, t.prototype.turnOn = function() {
            this.onEvent(new r.AudioSourceInitializingEvent(this.privId));
            this.onEvent(new r.AudioSourceReadyEvent(this.privId));
            return r.PromiseHelper.fromResult(!0)
        }, t.prototype.attach = function(n) {
            var t = this;
            this.onEvent(new r.AudioStreamNodeAttachingEvent(this.privId, n));
            return this.turnOn().onSuccessContinueWith(function() {
                t.onEvent(new r.AudioStreamNodeAttachedEvent(t.privId, n));
                return {
                    detach: function() {
                        t.privCallback.close();
                        t.onEvent(new r.AudioStreamNodeDetachedEvent(t.privId, n));
                        t.turnOff()
                    },
                    id: function() { return n },
                    read: function() {
                        for (var n = 0, i, u, f, e; n < t.privBufferSize;) {
                            if (u = new ArrayBuffer(t.privBufferSize - n), f = t.privCallback.read(u), undefined === i ? i = u : (e = new Int8Array(i), e.set(new Int8Array(u), n)), 0 === f) break;
                            n += f
                        }
                        return r.PromiseHelper.fromResult({ buffer: i.slice(0, n), isEnd: t.privIsClosed || n === 0, timeReceived: Date.now() })
                    }
                }
            })
        }, t.prototype.detach = function(n) { this.onEvent(new r.AudioStreamNodeDetachedEvent(this.privId, n)) }, t.prototype.turnOff = function() { return r.PromiseHelper.fromResult(!1) }, Object.defineProperty(t.prototype, "events", { get: function() { return this.privEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "deviceInfo", { get: function() { return r.PromiseHelper.fromResult({ bitspersample: this.privFormat.bitsPerSample, channelcount: this.privFormat.channels, connectivity: f.connectivity.Unknown, manufacturer: "Speech SDK", model: "PullStream", samplerate: this.privFormat.samplesPerSec, type: f.type.Stream }) }, enumerable: !0, configurable: !0 }), t
    }(o);
    t.PullAudioInputStreamImpl = c
}, function(n, t, i) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f, o, s, h;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        c = i(32),
        l = i(37),
        e = function() {
            function n() {}
            return n.createPullStream = function() { return f.create() }, n
        }();
    t.AudioOutputStream = e;
    f = function(n) {
        function t() { return n !== null && n.apply(this, arguments) || this }
        return u(t, n), t.create = function() { return new o }, t
    }(e);
    t.PullAudioOutputStream = f;
    o = function(n) {
        function t() { var t = n.call(this) || this; return t.privId = r.createNoDashGuid(), t.privStream = new r.Stream, t.streamReader = t.privStream.getReader(), t }
        return u(t, n), Object.defineProperty(t.prototype, "format", {
            get: function() { return this.privFormat },
            set: function(n) {
                (n === undefined || n === null) && (this.privFormat = l.AudioOutputFormatImpl.getDefaultOutputFormat());
                this.privFormat = n
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isClosed", { get: function() { return this.privStream.isClosed }, enumerable: !0, configurable: !0 }), t.prototype.id = function() { return this.privId }, t.prototype.read = function(n) {
            var i = this,
                f = new Int8Array(n),
                t = 0,
                u, e;
            if (this.privLastChunkView !== undefined) {
                if (this.privLastChunkView.length > n.byteLength) return f.set(this.privLastChunkView.slice(0, n.byteLength)), this.privLastChunkView = this.privLastChunkView.slice(n.byteLength), r.PromiseHelper.fromResult(n.byteLength);
                f.set(this.privLastChunkView);
                t = this.privLastChunkView.length;
                this.privLastChunkView = undefined
            }
            return u = new r.Deferred, e = function() {
                if (t < n.byteLength && !i.streamReader.isClosed) i.streamReader.read().onSuccessContinueWith(function(r) {
                    if (r === undefined || r.isEnd) i.streamReader.close(), u.resolve(t);
                    else {
                        var o = void 0;
                        r.buffer.byteLength > n.byteLength - t ? (o = r.buffer.slice(0, n.byteLength - t), i.privLastChunkView = new Int8Array(r.buffer.slice(n.byteLength - t))) : o = r.buffer;
                        f.set(new Int8Array(o), t);
                        t += o.byteLength;
                        e()
                    }
                });
                else u.resolve(t)
            }, e(), u.promise()
        }, t.prototype.write = function(n) {
            c.Contracts.throwIfNullOrUndefined(this.privStream, "must set format before writing");
            this.privStream.writeStreamChunk({ buffer: n, isEnd: !1, timeReceived: Date.now() })
        }, t.prototype.close = function() { this.privStream.close() }, t
    }(f);
    t.PullAudioOutputStreamImpl = o;
    s = function(n) {
        function t() { return n.call(this) || this }
        return u(t, n), t.create = function(n) { return new h(n) }, t
    }(e);
    t.PushAudioOutputStream = s;
    h = function(n) {
        function t(t) { var i = n.call(this) || this; return i.privId = r.createNoDashGuid(), i.privCallback = t, i }
        return u(t, n), Object.defineProperty(t.prototype, "format", { set: function() {}, enumerable: !0, configurable: !0 }), t.prototype.write = function(n) {!this.privCallback.write || this.privCallback.write(n) }, t.prototype.close = function() {!this.privCallback.close || this.privCallback.close() }, t.prototype.id = function() { return this.privId }, t
    }(s);
    t.PushAudioOutputStreamImpl = h
}, function(n, t, i) {
    "use strict";
    var s = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u, e, f, o;
    Object.defineProperty(t, "__esModule", { value: !0 });
    u = i(38);
    e = i(24),
        function(n) {
            n[n.PCM = 1] = "PCM";
            n[n.MuLaw = 2] = "MuLaw";
            n[n.Siren = 3] = "Siren";
            n[n.MP3 = 4] = "MP3";
            n[n.SILKSkype = 5] = "SILKSkype"
        }(f = t.AudioFormatTag || (t.AudioFormatTag = {}));
    o = function(n) {
        function t(t, i, r, u, f, e, o, s, h) { var c = n.call(this, r, e, i) || this; return c.formatTag = t, c.avgBytesPerSec = u, c.blockAlign = f, c.priAudioFormatString = o, c.priRequestAudioFormatString = s, c.priHasHeader = h, c }
        return s(t, n), t.fromSpeechSynthesisOutputFormat = function(n) { return t.fromSpeechSynthesisOutputFormatString(t.SpeechSynthesisOutputFormatToString[n]) }, t.fromSpeechSynthesisOutputFormatString = function(n) {
            switch (n) {
                case "raw-8khz-8bit-mono-mulaw":
                    return new t(f.PCM, 1, 8e3, 8e3, 1, 8, n, n, !1);
                case "riff-16khz-16kbps-mono-siren":
                    return new t(f.Siren, 1, 16e3, 2e3, 40, 0, n, "audio-16khz-16kbps-mono-siren", !0);
                case "audio-16khz-16kbps-mono-siren":
                    return new t(f.Siren, 1, 16e3, 2e3, 40, 0, n, n, !1);
                case "audio-16khz-32kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 4096, 2, 16, n, n, !1);
                case "audio-16khz-128kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 16384, 2, 16, n, n, !1);
                case "audio-16khz-64kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 8192, 2, 16, n, n, !1);
                case "audio-24khz-48kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 6144, 2, 16, n, n, !1);
                case "audio-24khz-96kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 12288, 2, 16, n, n, !1);
                case "audio-24khz-160kbitrate-mono-mp3":
                    return new t(f.MP3, 1, 16e3, 20480, 2, 16, n, n, !1);
                case "raw-16khz-16bit-mono-truesilk":
                    return new t(f.SILKSkype, 1, 16e3, 32e3, 2, 16, n, n, !1);
                case "riff-8khz-16bit-mono-pcm":
                    return new t(f.PCM, 1, 8e3, 16e3, 2, 16, n, "raw-8khz-16bit-mono-pcm", !0);
                case "riff-24khz-16bit-mono-pcm":
                    return new t(f.PCM, 1, 24e3, 48e3, 2, 16, n, "raw-24khz-16bit-mono-pcm", !0);
                case "riff-8khz-8bit-mono-mulaw":
                    return new t(f.MuLaw, 1, 8e3, 8e3, 1, 8, n, "raw-8khz-8bit-mono-mulaw", !0);
                case "raw-16khz-16bit-mono-pcm":
                    return new t(f.PCM, 1, 16e3, 32e3, 2, 16, n, "raw-16khz-16bit-mono-pcm", !1);
                case "raw-24khz-16bit-mono-pcm":
                    return new t(f.PCM, 1, 24e3, 48e3, 2, 16, n, "raw-24khz-16bit-mono-pcm", !1);
                case "raw-8khz-16bit-mono-pcm":
                    return new t(f.PCM, 1, 8e3, 16e3, 2, 16, n, "raw-8khz-16bit-mono-pcm", !1);
                case "riff-16khz-16bit-mono-pcm":
                default:
                    return new t(f.PCM, 1, 16e3, 32e3, 2, 16, "riff-16khz-16bit-mono-pcm", "raw-16khz-16bit-mono-pcm", !0)
            }
        }, t.getDefaultOutputFormat = function() { return t.fromSpeechSynthesisOutputFormatString("") }, Object.defineProperty(t.prototype, "hasHeader", { get: function() { return this.priHasHeader }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "header", { get: function() { return this.hasHeader ? this.privHeader : undefined }, enumerable: !0, configurable: !0 }), t.prototype.updateHeader = function(n) {
            if (this.priHasHeader) {
                var t = new DataView(this.privHeader);
                t.setUint32(40, n, !0)
            }
        }, Object.defineProperty(t.prototype, "requestAudioFormatString", { get: function() { return this.priRequestAudioFormatString }, enumerable: !0, configurable: !0 }), t.SpeechSynthesisOutputFormatToString = (r = {}, r[u.SpeechSynthesisOutputFormat.Raw8Khz8BitMonoMULaw] = "raw-8khz-8bit-mono-mulaw", r[u.SpeechSynthesisOutputFormat.Riff16Khz16KbpsMonoSiren] = "riff-16khz-16kbps-mono-siren", r[u.SpeechSynthesisOutputFormat.Audio16Khz16KbpsMonoSiren] = "audio-16khz-16kbps-mono-siren", r[u.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3] = "audio-16khz-32kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3] = "audio-16khz-128kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Audio16Khz64KBitRateMonoMp3] = "audio-16khz-64kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3] = "audio-24khz-48kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Audio24Khz96KBitRateMonoMp3] = "audio-24khz-96kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3] = "audio-24khz-160kbitrate-mono-mp3", r[u.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoTrueSilk] = "raw-16khz-16bit-mono-truesilk", r[u.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm] = "riff-16khz-16bit-mono-pcm", r[u.SpeechSynthesisOutputFormat.Riff8Khz16BitMonoPcm] = "riff-8khz-16bit-mono-pcm", r[u.SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm] = "riff-24khz-16bit-mono-pcm", r[u.SpeechSynthesisOutputFormat.Riff8Khz8BitMonoMULaw] = "riff-8khz-8bit-mono-mulaw", r[u.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoPcm] = "raw-16khz-16bit-mono-pcm", r[u.SpeechSynthesisOutputFormat.Raw24Khz16BitMonoPcm] = "raw-24khz-16bit-mono-pcm", r[u.SpeechSynthesisOutputFormat.Raw8Khz16BitMonoPcm] = "raw-8khz-16bit-mono-pcm", r), t
    }(e.AudioStreamFormatImpl);
    t.AudioOutputFormatImpl = o
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.Raw8Khz8BitMonoMULaw = 0] = "Raw8Khz8BitMonoMULaw";
        n[n.Riff16Khz16KbpsMonoSiren = 1] = "Riff16Khz16KbpsMonoSiren";
        n[n.Audio16Khz16KbpsMonoSiren = 2] = "Audio16Khz16KbpsMonoSiren";
        n[n.Audio16Khz32KBitRateMonoMp3 = 3] = "Audio16Khz32KBitRateMonoMp3";
        n[n.Audio16Khz128KBitRateMonoMp3 = 4] = "Audio16Khz128KBitRateMonoMp3";
        n[n.Audio16Khz64KBitRateMonoMp3 = 5] = "Audio16Khz64KBitRateMonoMp3";
        n[n.Audio24Khz48KBitRateMonoMp3 = 6] = "Audio24Khz48KBitRateMonoMp3";
        n[n.Audio24Khz96KBitRateMonoMp3 = 7] = "Audio24Khz96KBitRateMonoMp3";
        n[n.Audio24Khz160KBitRateMonoMp3 = 8] = "Audio24Khz160KBitRateMonoMp3";
        n[n.Raw16Khz16BitMonoTrueSilk = 9] = "Raw16Khz16BitMonoTrueSilk";
        n[n.Riff16Khz16BitMonoPcm = 10] = "Riff16Khz16BitMonoPcm";
        n[n.Riff8Khz16BitMonoPcm = 11] = "Riff8Khz16BitMonoPcm";
        n[n.Riff24Khz16BitMonoPcm = 12] = "Riff24Khz16BitMonoPcm";
        n[n.Riff8Khz8BitMonoMULaw = 13] = "Riff8Khz8BitMonoMULaw";
        n[n.Raw16Khz16BitMonoPcm = 14] = "Raw16Khz16BitMonoPcm";
        n[n.Raw24Khz16BitMonoPcm = 15] = "Raw24Khz16BitMonoPcm";
        n[n.Raw8Khz16BitMonoPcm = 16] = "Raw8Khz16BitMonoPcm"
    })(i = t.SpeechSynthesisOutputFormat || (t.SpeechSynthesisOutputFormat = {}))
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.Error = 0] = "Error";
        n[n.EndOfStream = 1] = "EndOfStream"
    })(i = t.CancellationReason || (t.CancellationReason = {}))
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return n
    }();
    t.PullAudioInputStreamCallback = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return n
    }();
    t.PushAudioOutputStreamCallback = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(32),
        u = function() {
            function n() { this.privDisposed = !1 }
            return n.fromFile = function(n) { r.Contracts.throwIfFileDoesNotExist(n, "fileName"); throw new Error("Not yet implemented."); }, n.fromStream = function(n) { r.Contracts.throwIfNull(n, "file"); throw new Error("Not yet implemented."); }, n.prototype.close = function() { this.privDisposed || (this.privDisposed = !0) }, n
        }();
    t.KeywordRecognitionModel = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privSessionId = n }
        return Object.defineProperty(n.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), n
    }();
    t.SessionEventArgs = i
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privOffset = t, r }
        return f(t, n), Object.defineProperty(t.prototype, "offset", { get: function() { return this.privOffset }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.RecognitionEventArgs = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.Simple = 0] = "Simple";
        n[n.Detailed = 1] = "Detailed"
    })(i = t.OutputFormat || (t.OutputFormat = {}))
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, i, r) || this; return u.privResult = t, u }
        return f(t, n), Object.defineProperty(t.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.IntentRecognitionEventArgs = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t, i, r, u, f, e, o) {
            this.privResultId = n;
            this.privReason = t;
            this.privText = i;
            this.privDuration = r;
            this.privOffset = u;
            this.privErrorDetails = f;
            this.privJson = e;
            this.privProperties = o
        }
        return Object.defineProperty(n.prototype, "resultId", { get: function() { return this.privResultId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "text", { get: function() { return this.privText }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "duration", { get: function() { return this.privDuration }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "offset", { get: function() { return this.privOffset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "json", { get: function() { return this.privJson }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), n
    }();
    t.RecognitionResult = i
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f, e, o, s) { return n.call(this, t, i, r, u, f, e, o, s) || this }
        return f(t, n), t
    }(r.RecognitionResult);
    t.SpeechRecognitionResult = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f, e, o, s, h) { var c = n.call(this, i, r, u, f, e, o, s, h) || this; return c.privIntentId = t, c }
        return f(t, n), Object.defineProperty(t.prototype, "intentId", { get: function() { return this.privIntentId }, enumerable: !0, configurable: !0 }), t
    }(r.SpeechRecognitionResult);
    t.IntentRecognitionResult = u
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, f, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(32);
    f = function() {
        function n() {}
        return n.fromEndpoint = function(n) { var t, i, f; if (r.Contracts.throwIfNull(n, "uri"), r.Contracts.throwIfNullOrWhitespace(n.hostname, "uri"), t = new u, i = n.host.indexOf("."), -1 === i) throw new Error("Could not determine region from endpoint"); if (t.region = n.host.substr(0, i), f = n.pathname.lastIndexOf("/") + 1, -1 === f) throw new Error("Could not determine appId from endpoint"); if (t.appId = n.pathname.substr(f), t.subscriptionKey = n.searchParams.get("subscription-key"), undefined === t.subscriptionKey) throw new Error("Could not determine subscription key from endpoint"); return t }, n.fromAppId = function(n) { r.Contracts.throwIfNullOrWhitespace(n, "appId"); var t = new u; return t.appId = n, t }, n.fromSubscription = function(n, t, i) {
            r.Contracts.throwIfNullOrWhitespace(n, "subscriptionKey");
            r.Contracts.throwIfNullOrWhitespace(t, "appId");
            r.Contracts.throwIfNullOrWhitespace(i, "region");
            var f = new u;
            return f.appId = t, f.region = i, f.subscriptionKey = n, f
        }, n
    }();
    t.LanguageUnderstandingModel = f;
    u = function(n) {
        function t() { return n !== null && n.apply(this, arguments) || this }
        return e(t, n), t
    }(f);
    t.LanguageUnderstandingModelImpl = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, i, r) || this; return u.privResult = t, u }
        return f(t, n), Object.defineProperty(t.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.SpeechRecognitionEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f) { var e = n.call(this, u, f) || this; return e.privReason = t, e.privErrorDetails = i, e.privErrorCode = r, e }
        return f(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorCode", { get: function() { return this.privErrorCode }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.SpeechRecognitionCanceledEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, i, r) || this; return u.privResult = t, u }
        return f(t, n), Object.defineProperty(t.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.TranslationRecognitionEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privResult = t, r }
        return f(t, n), Object.defineProperty(t.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.TranslationSynthesisEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f, e, o, s, h) { var c = n.call(this, i, r, u, f, e, o, s, h) || this; return c.privTranslations = t, c }
        return f(t, n), Object.defineProperty(t.prototype, "translations", { get: function() { return this.privTranslations }, enumerable: !0, configurable: !0 }), t
    }(r.SpeechRecognitionResult);
    t.TranslationRecognitionResult = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            this.privReason = n;
            this.privAudio = t
        }
        return Object.defineProperty(n.prototype, "audio", { get: function() { return this.privAudio }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), n
    }();
    t.TranslationSynthesisResult = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.NoMatch = 0] = "NoMatch";
        n[n.Canceled = 1] = "Canceled";
        n[n.RecognizingSpeech = 2] = "RecognizingSpeech";
        n[n.RecognizedSpeech = 3] = "RecognizedSpeech";
        n[n.RecognizingIntent = 4] = "RecognizingIntent";
        n[n.RecognizedIntent = 5] = "RecognizedIntent";
        n[n.TranslatingSpeech = 6] = "TranslatingSpeech";
        n[n.TranslatedSpeech = 7] = "TranslatedSpeech";
        n[n.SynthesizingAudio = 8] = "SynthesizingAudio";
        n[n.SynthesizingAudioCompleted = 9] = "SynthesizingAudioCompleted";
        n[n.SynthesizingAudioStarted = 10] = "SynthesizingAudioStarted"
    })(i = t.ResultReason || (t.ResultReason = {}))
}, function(n, t, i) {
    "use strict";
    var s = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(25),
        u = i(32),
        r = i(30),
        o = function() {
            function n() {}
            return n.fromSubscription = function(n, t) {
                u.Contracts.throwIfNullOrWhitespace(n, "subscriptionKey");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var i = new f;
                return i.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i.setProperty(r.PropertyId.SpeechServiceConnection_IntentRegion, t), i.setProperty(r.PropertyId.SpeechServiceConnection_Key, n), i
            }, n.fromEndpoint = function(n, t) { u.Contracts.throwIfNull(n, "endpoint"); var i = new f; return i.setProperty(r.PropertyId.SpeechServiceConnection_Endpoint, n.href), undefined !== t && i.setProperty(r.PropertyId.SpeechServiceConnection_Key, t), i }, n.fromHost = function(n, t) { u.Contracts.throwIfNull(n, "hostName"); var i = new f; return i.setProperty(r.PropertyId.SpeechServiceConnection_Host, n.protocol + "//" + n.hostname + (n.port === "" ? "" : ":" + n.port)), undefined !== t && i.setProperty(r.PropertyId.SpeechServiceConnection_Key, t), i }, n.fromAuthorizationToken = function(n, t) {
                u.Contracts.throwIfNull(n, "authorizationToken");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var i = new f;
                return i.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i.setProperty(r.PropertyId.SpeechServiceConnection_IntentRegion, t), i.authorizationToken = n, i
            }, n.prototype.close = function() {}, n
        }();
    t.SpeechConfig = o;
    f = function(n) {
        function t() { var t = n.call(this) || this; return t.privProperties = new r.PropertyCollection, t.speechRecognitionLanguage = "en-US", t.outputFormat = r.OutputFormat.Simple, t }
        return s(t, n), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "endPoint", { get: function() { return new URL(this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint)) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "subscriptionKey", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_Key) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "region", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_Region) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authorizationToken", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token) }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage) }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "outputFormat", { get: function() { return r.OutputFormat[this.privProperties.getProperty(e.OutputFormatPropertyName, undefined)] }, set: function(n) { this.privProperties.setProperty(e.OutputFormatPropertyName, r.OutputFormat[n]) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "endpointId", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_EndpointId) }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_EndpointId, n) }, enumerable: !0, configurable: !0 }), t.prototype.setProperty = function(n, t) {
            u.Contracts.throwIfNull(t, "value");
            this.privProperties.setProperty(n, t)
        }, t.prototype.getProperty = function(n, t) { return this.privProperties.getProperty(n, t) }, t.prototype.setProxy = function(n, t, i, u) {
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyHostName], n);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyPort], t);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyUserName], i);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyPassword], u)
        }, t.prototype.setServiceProperty = function(n, t) {
            var i = JSON.parse(this.privProperties.getProperty(e.ServicePropertiesPropertyName, "{}"));
            i[n] = t;
            this.privProperties.setProperty(e.ServicePropertiesPropertyName, JSON.stringify(i))
        }, t.prototype.setProfanity = function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceResponse_ProfanityOption, r.ProfanityOption[n]) }, t.prototype.enableAudioLogging = function() { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true") }, t.prototype.requestWordLevelTimestamps = function() { this.privProperties.setProperty(r.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true") }, t.prototype.enableDictation = function() { this.privProperties.setProperty(e.ForceDictationPropertyName, "true") }, t.prototype.clone = function() { var n = new t; return n.privProperties = this.privProperties.clone(), n }, Object.defineProperty(t.prototype, "speechSynthesisLanguage", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthLanguage) }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthLanguage, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechSynthesisVoiceName", { get: function() { return this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthVoice) }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthVoice, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechSynthesisOutputFormat", { get: function() { return r.SpeechSynthesisOutputFormat[this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)] }, set: function(n) { this.privProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthOutputFormat, r.SpeechSynthesisOutputFormat[n]) }, enumerable: !0, configurable: !0 }), t
    }(o);
    t.SpeechConfigImpl = f
}, function(n, t, i) {
    "use strict";
    var o = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(25),
        u = i(32),
        r = i(30),
        s = function(n) {
            function t() { return n.call(this) || this }
            return o(t, n), t.fromSubscription = function(n, t) {
                u.Contracts.throwIfNullOrWhitespace(n, "subscriptionKey");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var i = new f;
                return i.properties.setProperty(r.PropertyId.SpeechServiceConnection_Key, n), i.properties.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i
            }, t.fromAuthorizationToken = function(n, t) {
                u.Contracts.throwIfNullOrWhitespace(n, "authorizationToken");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var i = new f;
                return i.properties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n), i.properties.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i
            }, t.fromHost = function(n, t) { u.Contracts.throwIfNull(n, "hostName"); var i = new f; return i.setProperty(r.PropertyId.SpeechServiceConnection_Host, n.protocol + "//" + n.hostname + (n.port === "" ? "" : ":" + n.port)), undefined !== t && i.setProperty(r.PropertyId.SpeechServiceConnection_Key, t), i }, t.fromEndpoint = function(n, t) {
                u.Contracts.throwIfNull(n, "endpoint");
                u.Contracts.throwIfNull(t, "subscriptionKey");
                var i = new f;
                return i.properties.setProperty(r.PropertyId.SpeechServiceConnection_Endpoint, n.href), i.properties.setProperty(r.PropertyId.SpeechServiceConnection_Key, t), i
            }, t
        }(r.SpeechConfig);
    t.SpeechTranslationConfig = s;
    f = function(n) {
        function t() { var t = n.call(this) || this; return t.privSpeechProperties = new r.PropertyCollection, t.outputFormat = r.OutputFormat.Simple, t }
        return o(t, n), Object.defineProperty(t.prototype, "authorizationToken", {
            set: function(n) {
                u.Contracts.throwIfNullOrWhitespace(n, "value");
                this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            set: function(n) {
                u.Contracts.throwIfNullOrWhitespace(n, "value");
                this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage, n)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "subscriptionKey", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Key]) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "outputFormat", { get: function() { return r.OutputFormat[this.privSpeechProperties.getProperty(e.OutputFormatPropertyName, undefined)] }, set: function(n) { this.privSpeechProperties.setProperty(e.OutputFormatPropertyName, r.OutputFormat[n]) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "endpointId", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_EndpointId) }, set: function(n) { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_EndpointId, n) }, enumerable: !0, configurable: !0 }), t.prototype.addTargetLanguage = function(n) {
            u.Contracts.throwIfNullOrWhitespace(n, "value");
            var t = this.targetLanguages;
            t.push(n);
            this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages, t.join(","))
        }, Object.defineProperty(t.prototype, "targetLanguages", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages, undefined) !== undefined ? this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",") : [] }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "voiceName", {
            get: function() { return this.getProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_TranslationVoice]) },
            set: function(n) {
                u.Contracts.throwIfNullOrWhitespace(n, "value");
                this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice, n)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "region", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_Region) }, enumerable: !0, configurable: !0 }), t.prototype.setProxy = function(n, t, i, u) {
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyHostName], n);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyPort], t);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyUserName], i);
            this.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_ProxyPassword], u)
        }, t.prototype.getProperty = function(n, t) { return this.privSpeechProperties.getProperty(n, t) }, t.prototype.setProperty = function(n, t) { this.privSpeechProperties.setProperty(n, t) }, Object.defineProperty(t.prototype, "properties", { get: function() { return this.privSpeechProperties }, enumerable: !0, configurable: !0 }), t.prototype.close = function() { return }, t.prototype.setServiceProperty = function(n, t) {
            var i = JSON.parse(this.privSpeechProperties.getProperty(e.ServicePropertiesPropertyName, "{}"));
            i[n] = t;
            this.privSpeechProperties.setProperty(e.ServicePropertiesPropertyName, JSON.stringify(i))
        }, t.prototype.setProfanity = function(n) { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceResponse_ProfanityOption, r.ProfanityOption[n]) }, t.prototype.enableAudioLogging = function() { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true") }, t.prototype.requestWordLevelTimestamps = function() { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true") }, t.prototype.enableDictation = function() { this.privSpeechProperties.setProperty(e.ForceDictationPropertyName, "true") }, Object.defineProperty(t.prototype, "speechSynthesisLanguage", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthLanguage) }, set: function(n) { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthLanguage, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechSynthesisVoiceName", { get: function() { return this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthVoice) }, set: function(n) { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthVoice, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechSynthesisOutputFormat", { get: function() { return r.SpeechSynthesisOutputFormat[this.privSpeechProperties.getProperty(r.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)] }, set: function(n) { this.privSpeechProperties.setProperty(r.PropertyId.SpeechServiceConnection_SynthOutputFormat, r.SpeechSynthesisOutputFormat[n]) }, enumerable: !0, configurable: !0 }), t
    }(s);
    t.SpeechTranslationConfigImpl = f
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(30),
        u = function() {
            function n() {
                this.privKeys = [];
                this.privValues = []
            }
            return n.prototype.getProperty = function(n, t) {
                for (var u = typeof n == "string" ? n : r.PropertyId[n], i = 0; i < this.privKeys.length; i++)
                    if (this.privKeys[i] === u) return this.privValues[i];
                return t
            }, n.prototype.setProperty = function(n, t) {
                for (var u = typeof n == "string" ? n : r.PropertyId[n], i = 0; i < this.privKeys.length; i++)
                    if (this.privKeys[i] === u) { this.privValues[i] = t; return }
                this.privKeys.push(u);
                this.privValues.push(t)
            }, n.prototype.clone = function() { for (var i = new n, t = 0; t < this.privKeys.length; t++) i.privKeys.push(this.privKeys[t]), i.privValues.push(this.privValues[t]); return i }, n
        }();
    t.PropertyCollection = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.SpeechServiceConnection_Key = 0] = "SpeechServiceConnection_Key";
        n[n.SpeechServiceConnection_Endpoint = 1] = "SpeechServiceConnection_Endpoint";
        n[n.SpeechServiceConnection_Region = 2] = "SpeechServiceConnection_Region";
        n[n.SpeechServiceAuthorization_Token = 3] = "SpeechServiceAuthorization_Token";
        n[n.SpeechServiceAuthorization_Type = 4] = "SpeechServiceAuthorization_Type";
        n[n.SpeechServiceConnection_EndpointId = 5] = "SpeechServiceConnection_EndpointId";
        n[n.SpeechServiceConnection_TranslationToLanguages = 6] = "SpeechServiceConnection_TranslationToLanguages";
        n[n.SpeechServiceConnection_TranslationVoice = 7] = "SpeechServiceConnection_TranslationVoice";
        n[n.SpeechServiceConnection_TranslationFeatures = 8] = "SpeechServiceConnection_TranslationFeatures";
        n[n.SpeechServiceConnection_IntentRegion = 9] = "SpeechServiceConnection_IntentRegion";
        n[n.SpeechServiceConnection_ProxyHostName = 10] = "SpeechServiceConnection_ProxyHostName";
        n[n.SpeechServiceConnection_ProxyPort = 11] = "SpeechServiceConnection_ProxyPort";
        n[n.SpeechServiceConnection_ProxyUserName = 12] = "SpeechServiceConnection_ProxyUserName";
        n[n.SpeechServiceConnection_ProxyPassword = 13] = "SpeechServiceConnection_ProxyPassword";
        n[n.SpeechServiceConnection_RecoMode = 14] = "SpeechServiceConnection_RecoMode";
        n[n.SpeechServiceConnection_RecoLanguage = 15] = "SpeechServiceConnection_RecoLanguage";
        n[n.Speech_SessionId = 16] = "Speech_SessionId";
        n[n.SpeechServiceConnection_SynthLanguage = 17] = "SpeechServiceConnection_SynthLanguage";
        n[n.SpeechServiceConnection_SynthVoice = 18] = "SpeechServiceConnection_SynthVoice";
        n[n.SpeechServiceConnection_SynthOutputFormat = 19] = "SpeechServiceConnection_SynthOutputFormat";
        n[n.SpeechServiceResponse_RequestDetailedResultTrueFalse = 20] = "SpeechServiceResponse_RequestDetailedResultTrueFalse";
        n[n.SpeechServiceResponse_RequestProfanityFilterTrueFalse = 21] = "SpeechServiceResponse_RequestProfanityFilterTrueFalse";
        n[n.SpeechServiceResponse_JsonResult = 22] = "SpeechServiceResponse_JsonResult";
        n[n.SpeechServiceResponse_JsonErrorDetails = 23] = "SpeechServiceResponse_JsonErrorDetails";
        n[n.CancellationDetails_Reason = 24] = "CancellationDetails_Reason";
        n[n.CancellationDetails_ReasonText = 25] = "CancellationDetails_ReasonText";
        n[n.CancellationDetails_ReasonDetailedText = 26] = "CancellationDetails_ReasonDetailedText";
        n[n.LanguageUnderstandingServiceResponse_JsonResult = 27] = "LanguageUnderstandingServiceResponse_JsonResult";
        n[n.SpeechServiceConnection_Url = 28] = "SpeechServiceConnection_Url";
        n[n.SpeechServiceConnection_InitialSilenceTimeoutMs = 29] = "SpeechServiceConnection_InitialSilenceTimeoutMs";
        n[n.SpeechServiceConnection_EndSilenceTimeoutMs = 30] = "SpeechServiceConnection_EndSilenceTimeoutMs";
        n[n.SpeechServiceConnection_EnableAudioLogging = 31] = "SpeechServiceConnection_EnableAudioLogging";
        n[n.SpeechServiceResponse_ProfanityOption = 32] = "SpeechServiceResponse_ProfanityOption";
        n[n.SpeechServiceResponse_PostProcessingOption = 33] = "SpeechServiceResponse_PostProcessingOption";
        n[n.SpeechServiceResponse_RequestWordLevelTimestamps = 34] = "SpeechServiceResponse_RequestWordLevelTimestamps";
        n[n.SpeechServiceResponse_StablePartialResultThreshold = 35] = "SpeechServiceResponse_StablePartialResultThreshold";
        n[n.SpeechServiceResponse_OutputFormatOption = 36] = "SpeechServiceResponse_OutputFormatOption";
        n[n.SpeechServiceResponse_TranslationRequestStablePartialResult = 37] = "SpeechServiceResponse_TranslationRequestStablePartialResult";
        n[n.Conversation_ApplicationId = 38] = "Conversation_ApplicationId";
        n[n.Conversation_DialogType = 39] = "Conversation_DialogType";
        n[n.Conversation_Initial_Silence_Timeout = 40] = "Conversation_Initial_Silence_Timeout";
        n[n.Conversation_From_Id = 41] = "Conversation_From_Id";
        n[n.Conversation_Speech_Activity_Template = 42] = "Conversation_Speech_Activity_Template";
        n[n.SpeechServiceConnection_Host = 43] = "SpeechServiceConnection_Host";
        n[n.ConversationTranslator_Host = 44] = "ConversationTranslator_Host";
        n[n.ConversationTranslator_Name = 45] = "ConversationTranslator_Name";
        n[n.ConversationTranslator_CorrelationId = 46] = "ConversationTranslator_CorrelationId";
        n[n.ConversationTranslator_Token = 47] = "ConversationTranslator_Token"
    })(i = t.PropertyId || (t.PropertyId = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        e = i(4),
        u = i(32),
        f = i(30),
        o = function() {
            function n(n, t, i) {
                this.audioConfig = n !== undefined ? n : f.AudioConfig.fromDefaultMicrophoneInput();
                this.privDisposed = !1;
                this.privProperties = t.clone();
                this.privConnectionFactory = i;
                this.implCommonRecognizerSetup()
            }
            return n.prototype.close = function() {
                u.Contracts.throwIfDisposed(this.privDisposed);
                this.dispose(!0)
            }, Object.defineProperty(n.prototype, "internalData", { get: function() { return this.privReco }, enumerable: !0, configurable: !0 }), n.prototype.dispose = function(n) { this.privDisposed || (n && this.privReco && (this.privReco.audioSource.turnOff(), this.privReco.dispose()), this.privDisposed = !0) }, Object.defineProperty(n, "telemetryEnabled", { get: function() { return r.ServiceRecognizerBase.telemetryDataEnabled }, enumerable: !0, configurable: !0 }), n.enableTelemetry = function(n) { r.ServiceRecognizerBase.telemetryDataEnabled = n }, n.prototype.implCommonRecognizerSetup = function() {
                var i = this,
                    n = typeof window != "undefined" ? "Browser" : "Node",
                    u = "unknown",
                    o = "unknown";
                typeof navigator != "undefined" && (n = n + "/" + navigator.platform, u = navigator.userAgent, o = navigator.appVersion);
                var s = this.createRecognizerConfig(new r.SpeechServiceConfig(new r.Context(new r.OS(n, u, o)))),
                    t = this.privProperties.getProperty(f.PropertyId.SpeechServiceConnection_Key, undefined),
                    h = t && t !== "" ? new r.CognitiveSubscriptionKeyAuthentication(t) : new r.CognitiveTokenAuthentication(function() { var n = i.privProperties.getProperty(f.PropertyId.SpeechServiceAuthorization_Token, undefined); return e.PromiseHelper.fromResult(n) }, function() { var n = i.privProperties.getProperty(f.PropertyId.SpeechServiceAuthorization_Token, undefined); return e.PromiseHelper.fromResult(n) });
                this.privReco = this.createServiceRecognizer(h, this.privConnectionFactory, this.audioConfig, s)
            }, n.prototype.recognizeOnceAsyncImpl = function(n, t, i) {
                var r = this,
                    e;
                try {
                    u.Contracts.throwIfDisposed(this.privDisposed);
                    this.implRecognizerStop().on(function() {
                        try { r.privReco.recognize(n, function(n) { r.implRecognizerStop().on(function() {!t || t(n) }, function(n) {!i || i(n) }) }, function(n) { r.implRecognizerStop();!i || i(n) }).on(function() {}, function(n) {!i || i(n) }) } catch (u) {
                            if (!!i)
                                if (u instanceof Error) {
                                    var f = u;
                                    i(f.name + ": " + f.message)
                                } else i(u);
                            r.dispose(!0)
                        }
                    }, function(n) {!i || i(n) })
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, n.prototype.startContinuousRecognitionAsyncImpl = function(n, t, i) {
                var r = this,
                    e;
                try {
                    u.Contracts.throwIfDisposed(this.privDisposed);
                    this.implRecognizerStop().on(function() {
                        r.privReco.recognize(n, undefined, undefined).on(function() {
                            if (!!t) {
                                try { t() } catch (n) {!i || i(n) }
                                t = undefined
                            }
                        }, function(n) {
                            !i || i(n);
                            r.dispose(!0)
                        })
                    }, function(n) {
                        !i || i(n);
                        r.dispose(!0)
                    })
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, n.prototype.stopContinuousRecognitionAsyncImpl = function(n, t) {
                try {
                    u.Contracts.throwIfDisposed(this.privDisposed);
                    this.implRecognizerStop().on(function() { if (!!n) try { n() } catch (i) {!t || t(i) } }, function(n) {!t || t(n) })
                } catch (i) {
                    if (!!t)
                        if (i instanceof Error) {
                            var r = i;
                            t(r.name + ": " + r.message)
                        } else t(i);
                    this.dispose(!0)
                }
            }, n.prototype.implRecognizerStop = function() { return this.privReco ? this.privReco.stopRecognizing() : e.PromiseHelper.fromResult(!0) }, n
        }();
    t.Recognizer = o
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(25),
        o = i(64),
        u = i(32),
        r = i(30),
        s = function(n) {
            function t(t, i) {
                var f = this,
                    e = t;
                return u.Contracts.throwIfNull(e, "speechConfig"), u.Contracts.throwIfNullOrWhitespace(e.properties.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage), r.PropertyId[r.PropertyId.SpeechServiceConnection_RecoLanguage]), f = n.call(this, i, e.properties, new o.SpeechConnectionFactory) || this, f.privDisposedSpeechRecognizer = !1, f
            }
            return e(t, n), Object.defineProperty(t.prototype, "endpointId", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(r.PropertyId.SpeechServiceConnection_EndpointId, "00000000-0000-0000-0000-000000000000") }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authorizationToken", {
                get: function() { return this.properties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token) },
                set: function(n) {
                    u.Contracts.throwIfNullOrWhitespace(n, "token");
                    this.properties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "outputFormat", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(f.OutputFormatPropertyName, r.OutputFormat[r.OutputFormat.Simple]) === r.OutputFormat[r.OutputFormat.Simple] ? r.OutputFormat.Simple : r.OutputFormat.Detailed }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), t.prototype.recognizeOnceAsync = function(n, t) { this.recognizeOnceAsyncImpl(f.RecognitionMode.Interactive, n, t) }, t.prototype.startContinuousRecognitionAsync = function(n, t) { this.startContinuousRecognitionAsyncImpl(f.RecognitionMode.Conversation, n, t) }, t.prototype.stopContinuousRecognitionAsync = function(n, t) { this.stopContinuousRecognitionAsyncImpl(n, t) }, t.prototype.startKeywordRecognitionAsync = function(n, t, i) { u.Contracts.throwIfNull(n, "model");!i || i("Not yet implemented.") }, t.prototype.stopKeywordRecognitionAsync = function(n) {!n || n() }, t.prototype.close = function() {
                u.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer);
                this.dispose(!0)
            }, t.prototype.dispose = function(t) { this.privDisposedSpeechRecognizer || (t && (this.implRecognizerStop(), this.privDisposedSpeechRecognizer = !0), n.prototype.dispose.call(this, t)) }, t.prototype.createRecognizerConfig = function(n) { return new f.RecognizerConfig(n, this.properties) }, t.prototype.createServiceRecognizer = function(n, t, i, r) { var u = i; return new f.SpeechServiceRecognizer(n, t, u, r, this) }, t
        }(r.Recognizer);
    t.SpeechRecognizer = s
}, function(n, t, i) {
    "use strict";
    var s = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(2),
        o = i(25),
        r = i(30),
        h = i(65),
        f = i(25),
        u = i(66),
        c = function(n) {
            function t() {
                var t = n !== null && n.apply(this, arguments) || this;
                return t.interactiveRelativeUri = "/speech/recognition/interactive/cognitiveservices/v1", t.conversationRelativeUri = "/speech/recognition/conversation/cognitiveservices/v1", t.dictationRelativeUri = "/speech/recognition/dictation/cognitiveservices/v1", t.create = function(n, i, s) {
                    var h = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint, undefined),
                        v = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Region, undefined),
                        w = v && v.toLowerCase().startsWith("china") ? ".azure.cn" : ".microsoft.com",
                        l = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Host, "wss://" + v + ".stt.speech" + w),
                        c = {},
                        y = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_EndpointId, undefined),
                        p = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage, undefined),
                        a;
                    if (y ? h && h.search(u.QueryParameterNames.DeploymentIdParamName) !== -1 || (c[u.QueryParameterNames.DeploymentIdParamName] = y) : p && (h && h.search(u.QueryParameterNames.LanguageParamName) !== -1 || (c[u.QueryParameterNames.LanguageParamName] = p)), h && h.search(u.QueryParameterNames.FormatParamName) !== -1 || (c[u.QueryParameterNames.FormatParamName] = n.parameters.getProperty(o.OutputFormatPropertyName, r.OutputFormat[r.OutputFormat.Simple]).toLowerCase()), t.setCommonUrlParams(n, c, h), !h) switch (n.recognitionMode) {
                        case f.RecognitionMode.Conversation:
                            h = n.parameters.getProperty(o.ForceDictationPropertyName, "false") === "true" ? l + t.dictationRelativeUri : l + t.conversationRelativeUri;
                            break;
                        case f.RecognitionMode.Dictation:
                            h = l + t.dictationRelativeUri;
                            break;
                        default:
                            h = l + t.interactiveRelativeUri
                    }
                    return a = {}, i.token !== undefined && i.token !== "" && (a[i.headerName] = i.token), a[u.QueryParameterNames.ConnectionIdHeader] = s, n.parameters.setProperty(r.PropertyId.SpeechServiceConnection_Url, h), new e.WebsocketConnection(h, c, a, new f.WebsocketMessageFormatter, e.ProxyInfo.fromRecognizerConfig(n), s)
                }, t
            }
            return s(t, n), t
        }(h.ConnectionFactoryBase);
    t.SpeechConnectionFactory = c
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(25),
        r = i(30),
        u = i(66),
        e = function() {
            function n() {}
            return n.prototype.setCommonUrlParams = function(n, t, i) {
                this.setUrlParameter(r.PropertyId.SpeechServiceConnection_EnableAudioLogging, u.QueryParameterNames.EnableAudioLogging, n, t, i);
                this.setUrlParameter(r.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, u.QueryParameterNames.EnableWordLevelTimestamps, n, t, i);
                this.setUrlParameter(r.PropertyId.SpeechServiceResponse_ProfanityOption, u.QueryParameterNames.Profanify, n, t, i);
                this.setUrlParameter(r.PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs, u.QueryParameterNames.InitialSilenceTimeoutMs, n, t, i);
                this.setUrlParameter(r.PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs, u.QueryParameterNames.EndSilenceTimeoutMs, n, t, i);
                this.setUrlParameter(r.PropertyId.SpeechServiceResponse_StablePartialResultThreshold, u.QueryParameterNames.StableIntermediateThreshold, n, t, i);
                var e = JSON.parse(n.parameters.getProperty(f.ServicePropertiesPropertyName, "{}"));
                Object.keys(e).forEach(function(n) { t[n] = e[n] })
            }, n.prototype.setUrlParameter = function(n, t, i, r, u) {
                var f = i.parameters.getProperty(n, undefined);
                f && (!u || u.search(t) === -1) && (r[t] = f.toLocaleLowerCase())
            }, n
        }();
    t.ConnectionFactoryBase = e
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return Object.defineProperty(n, "TestHooksParamName", { get: function() { return "testhooks" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "ConnectionIdHeader", { get: function() { return "X-ConnectionId" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "DeploymentIdParamName", { get: function() { return "cid" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "FormatParamName", { get: function() { return "format" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "LanguageParamName", { get: function() { return "language" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "TranslationFromParamName", { get: function() { return "from" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "TranslationToParamName", { get: function() { return "to" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "Profanify", { get: function() { return "profanity" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "EnableAudioLogging", { get: function() { return "storeAudio" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "EnableWordLevelTimestamps", { get: function() { return "wordLevelTimestamps" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "InitialSilenceTimeoutMs", { get: function() { return "initialSilenceTimeoutMs" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "EndSilenceTimeoutMs", { get: function() { return "endSilenceTimeoutMs" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "StableIntermediateThreshold", { get: function() { return "stableIntermediateThreshold" }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "StableTranslation", { get: function() { return "stableTranslation" }, enumerable: !0, configurable: !0 }), n
    }();
    t.QueryParameterNames = i
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(25),
        r = i(32),
        u = i(30),
        o = function(n) {
            function t(t, i) {
                var e = this,
                    o;
                return r.Contracts.throwIfNullOrUndefined(t, "speechConfig"), o = t, r.Contracts.throwIfNullOrUndefined(o, "speechConfig"), e = n.call(this, i, o.properties, new f.IntentConnectionFactory) || this, e.privAddedIntents = [], e.privAddedLmIntents = {}, e.privDisposedIntentRecognizer = !1, e.privProperties = o.properties, r.Contracts.throwIfNullOrWhitespace(e.properties.getProperty(u.PropertyId.SpeechServiceConnection_RecoLanguage), u.PropertyId[u.PropertyId.SpeechServiceConnection_RecoLanguage]), e
            }
            return e(t, n), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return r.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), this.properties.getProperty(u.PropertyId.SpeechServiceConnection_RecoLanguage) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authorizationToken", { get: function() { return this.properties.getProperty(u.PropertyId.SpeechServiceAuthorization_Token) }, set: function(n) { this.properties.setProperty(u.PropertyId.SpeechServiceAuthorization_Token, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), t.prototype.recognizeOnceAsync = function(n, t) {
                var i, u;
                r.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
                (Object.keys(this.privAddedLmIntents).length !== 0 || undefined !== this.privUmbrellaIntent) && (i = this.buildSpeechContext(), this.privReco.speechContext.setSection("intent", i.Intent), this.privReco.dynamicGrammar.addReferenceGrammar(i.ReferenceGrammars), u = this.privReco, u.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent));
                this.recognizeOnceAsyncImpl(f.RecognitionMode.Interactive, n, t)
            }, t.prototype.startContinuousRecognitionAsync = function(n, t) {
                var i, r;
                Object.keys(this.privAddedLmIntents).length !== 0 && (i = this.buildSpeechContext(), this.privReco.speechContext.setSection("intent", i.Intent), this.privReco.dynamicGrammar.addReferenceGrammar(i.ReferenceGrammars), r = this.privReco, r.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent));
                this.startContinuousRecognitionAsyncImpl(f.RecognitionMode.Conversation, n, t)
            }, t.prototype.stopContinuousRecognitionAsync = function(n, t) { this.stopContinuousRecognitionAsyncImpl(n, t) }, t.prototype.startKeywordRecognitionAsync = function(n, t, i) { r.Contracts.throwIfNull(n, "model");!i || i("Not yet implemented.") }, t.prototype.stopKeywordRecognitionAsync = function(n) {!n || n() }, t.prototype.addIntent = function(n, t) {
                r.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
                r.Contracts.throwIfNullOrWhitespace(t, "intentId");
                r.Contracts.throwIfNullOrWhitespace(n, "simplePhrase");
                this.privAddedIntents.push([t, n])
            }, t.prototype.addIntentWithLanguageModel = function(n, t, i) {
                r.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
                r.Contracts.throwIfNullOrWhitespace(n, "intentId");
                r.Contracts.throwIfNull(t, "model");
                var u = t;
                r.Contracts.throwIfNullOrWhitespace(u.appId, "model.appId");
                this.privAddedLmIntents[n] = new f.AddedLmIntent(u, i)
            }, t.prototype.addAllIntents = function(n, t) {
                r.Contracts.throwIfNull(n, "model");
                var i = n;
                r.Contracts.throwIfNullOrWhitespace(i.appId, "model.appId");
                this.privUmbrellaIntent = new f.AddedLmIntent(i, t)
            }, t.prototype.close = function() {
                r.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
                this.dispose(!0)
            }, t.prototype.createRecognizerConfig = function(n) { return new f.RecognizerConfig(n, this.properties) }, t.prototype.createServiceRecognizer = function(n, t, i, r) { var u = i; return new f.IntentServiceRecognizer(n, t, u, r, this) }, t.prototype.dispose = function(t) { this.privDisposedIntentRecognizer || t && (this.privDisposedIntentRecognizer = !0, n.prototype.dispose.call(this, t)) }, t.prototype.buildSpeechContext = function() {
                var n, r, i, s = [],
                    f, e, o, t, h;
                for (undefined !== this.privUmbrellaIntent && (n = this.privUmbrellaIntent.modelImpl.appId, r = this.privUmbrellaIntent.modelImpl.region, i = this.privUmbrellaIntent.modelImpl.subscriptionKey), f = 0, e = Object.keys(this.privAddedLmIntents); f < e.length; f++) {
                    if (o = e[f], t = this.privAddedLmIntents[o], n === undefined) n = t.modelImpl.appId;
                    else if (n !== t.modelImpl.appId) throw new Error("Intents must all be from the same LUIS model");
                    if (r === undefined) r = t.modelImpl.region;
                    else if (r !== t.modelImpl.region) throw new Error("Intents must all be from the same LUIS model in a single region");
                    if (i === undefined) i = t.modelImpl.subscriptionKey;
                    else if (i !== t.modelImpl.subscriptionKey) throw new Error("Intents must all use the same subscription key");
                    h = "luis/" + n + "-PRODUCTION#" + o;
                    s.push(h)
                }
                return { Intent: { id: n, key: i === undefined ? this.privProperties.getProperty(u.PropertyId[u.PropertyId.SpeechServiceConnection_Key]) : i, provider: "LUIS" }, ReferenceGrammars: undefined === this.privUmbrellaIntent ? s : ["luis/" + n + "-PRODUCTION"] }
            }, t
        }(u.Recognizer);
    t.IntentRecognizer = o
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(25),
        u = i(32),
        r = i(30),
        o = function(n) {
            function t(t, i) {
                var e = this,
                    o = t;
                return u.Contracts.throwIfNull(o, "speechConfig"), e = n.call(this, i, o.properties, new f.TranslationConnectionFactory) || this, e.privDisposedTranslationRecognizer = !1, e.privProperties = o.properties.clone(), e.properties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) !== undefined && u.Contracts.throwIfNullOrWhitespace(e.properties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice), r.PropertyId[r.PropertyId.SpeechServiceConnection_TranslationVoice]), u.Contracts.throwIfNullOrWhitespace(e.properties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages), r.PropertyId[r.PropertyId.SpeechServiceConnection_TranslationToLanguages]), u.Contracts.throwIfNullOrWhitespace(e.properties.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage), r.PropertyId[r.PropertyId.SpeechServiceConnection_RecoLanguage]), e
            }
            return e(t, n), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "targetLanguages", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",") }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "voiceName", { get: function() { return u.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authorizationToken", { get: function() { return this.properties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token) }, set: function(n) { this.properties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), t.prototype.recognizeOnceAsync = function(n, t) {
                u.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
                this.recognizeOnceAsyncImpl(f.RecognitionMode.Conversation, n, t)
            }, t.prototype.startContinuousRecognitionAsync = function(n, t) { this.startContinuousRecognitionAsyncImpl(f.RecognitionMode.Conversation, n, t) }, t.prototype.stopContinuousRecognitionAsync = function(n, t) { this.stopContinuousRecognitionAsyncImpl(n, t) }, t.prototype.close = function() {
                u.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
                this.dispose(!0)
            }, t.prototype.dispose = function(t) { this.privDisposedTranslationRecognizer || t && (this.implRecognizerStop(), this.privDisposedTranslationRecognizer = !0, n.prototype.dispose.call(this, t)) }, t.prototype.createRecognizerConfig = function(n) { return new f.RecognizerConfig(n, this.properties) }, t.prototype.createServiceRecognizer = function(n, t, i, r) { var u = i; return new f.TranslationServiceRecognizer(n, t, u, r, this) }, t
        }(r.Recognizer);
    t.TranslationRecognizer = o
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(30),
        u = function() {
            function n() { this.privMap = new r.PropertyCollection }
            return n.prototype.get = function(n, t) { return this.privMap.getProperty(n, t) }, n.prototype.set = function(n, t) { this.privMap.setProperty(n, t) }, n
        }();
    t.Translations = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.NotRecognized = 0] = "NotRecognized";
        n[n.InitialSilenceTimeout = 1] = "InitialSilenceTimeout";
        n[n.InitialBabbleTimeout = 2] = "InitialBabbleTimeout"
    })(i = t.NoMatchReason || (t.NoMatchReason = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(25),
        r = i(30),
        f = function() {
            function n(n) { this.privReason = n }
            return n.fromResult = function(t) {
                var f = u.SimpleSpeechPhrase.fromJSON(t.json),
                    i = r.NoMatchReason.NotRecognized;
                switch (f.RecognitionStatus) {
                    case u.RecognitionStatus.BabbleTimeout:
                        i = r.NoMatchReason.InitialBabbleTimeout;
                        break;
                    case u.RecognitionStatus.InitialSilenceTimeout:
                        i = r.NoMatchReason.InitialSilenceTimeout;
                        break;
                    default:
                        i = r.NoMatchReason.NotRecognized
                }
                return new n(i)
            }, Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), n
        }();
    t.NoMatchDetails = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t, i, r, u) {
            this.privCancelReason = t;
            this.privErrorDetails = i;
            this.privResult = u;
            this.privSessionId = n;
            this.privErrorCode = r
        }
        return Object.defineProperty(n.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "reason", { get: function() { return this.privCancelReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "errorCode", { get: function() { return this.privErrorCode }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), n
    }();
    t.TranslationRecognitionCanceledEventArgs = i
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f, e) { var o = n.call(this, u, f, e) || this; return o.privReason = t, o.privErrorDetails = i, o.privErrorCode = r, o }
        return f(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorCode", { get: function() { return this.privErrorCode }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), t
    }(r.IntentRecognitionEventArgs);
    t.IntentRecognitionCanceledEventArgs = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(25),
        r = i(30),
        f = function() {
            function n(n, t, i) {
                this.privReason = n;
                this.privErrorDetails = t;
                this.privErrorCode = i
            }
            return n.fromResult = function(t) {
                var i = r.CancellationReason.Error,
                    f = r.CancellationErrorCode.NoError,
                    e;
                return t instanceof r.RecognitionResult && !!t.json && (e = u.SimpleSpeechPhrase.fromJSON(t.json), i = u.EnumTranslation.implTranslateCancelResult(e.RecognitionStatus)), !t.properties || (f = r.CancellationErrorCode[t.properties.getProperty(u.CancellationErrorCodePropertyName, r.CancellationErrorCode[r.CancellationErrorCode.NoError])]), new n(i, t.errorDetails, f)
            }, Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "ErrorCode", { get: function() { return this.privErrorCode }, enumerable: !0, configurable: !0 }), n
        }();
    t.CancellationDetails = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.NoError = 0] = "NoError";
        n[n.AuthenticationFailure = 1] = "AuthenticationFailure";
        n[n.BadRequestParameters = 2] = "BadRequestParameters";
        n[n.TooManyRequests = 3] = "TooManyRequests";
        n[n.ConnectionFailure = 4] = "ConnectionFailure";
        n[n.ServiceTimeout = 5] = "ServiceTimeout";
        n[n.ServiceError = 6] = "ServiceError";
        n[n.RuntimeError = 7] = "RuntimeError"
    })(i = t.CancellationErrorCode || (t.CancellationErrorCode = {}))
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t() { return n !== null && n.apply(this, arguments) || this }
        return f(t, n), t
    }(r.SessionEventArgs);
    t.ConnectionEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, r) || this; return u.privJsonResult = t, u.privEventName = i, u }
        return f(t, n), Object.defineProperty(t.prototype, "jsonString", { get: function() { return this.privJsonResult }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "eventName", { get: function() { return this.privEventName }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ServiceEventArgs = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(79),
        r = i(30),
        f = function() {
            function n() {}
            return n.fromRecognizer = function(t) {
                var f = t.internalData,
                    i = new n;
                return i.privServiceRecognizer = f, i.privEventListener = i.privServiceRecognizer.connectionEvents.attach(function(n) { n.name === "ConnectionEstablishedEvent" ? !i.connected || i.connected(new r.ConnectionEventArgs(n.connectionId)) : n.name === "ConnectionClosedEvent" ? !i.disconnected || i.disconnected(new r.ConnectionEventArgs(n.connectionId)) : n.name === "ConnectionMessageSentEvent" ? !i.messageSent || i.messageSent(new r.ConnectionMessageEventArgs(new u.ConnectionMessageImpl(n.message))) : n.name === "ConnectionMessageReceivedEvent" && (!i.messageReceived || i.messageReceived(new r.ConnectionMessageEventArgs(new u.ConnectionMessageImpl(n.message)))) }), i.privServiceEventListener = i.privServiceRecognizer.serviceEvents.attach(function(n) {!i.receivedServiceMessage || i.receivedServiceMessage(new r.ServiceEventArgs(n.jsonString, n.name)) }), i
            }, n.prototype.openConnection = function() { this.privServiceRecognizer.connect() }, n.prototype.closeConnection = function() { this.privServiceRecognizer.disconnect() }, n.prototype.close = function() {}, n
        }();
    t.Connection = f
}, function(n, t, i) {
    "use strict";
    var u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        f = i(60),
        e = function() {
            function n() {}
            return n
        }();
    t.ConnectionMessage = e;
    u = function() {
        function n(n) {
            this.privConnectionMessage = n;
            this.privProperties = new f.PropertyCollection
        }
        return Object.defineProperty(n.prototype, "path", { get: function() { return this.privConnectionMessage.headers[Object.keys(this.privConnectionMessage.headers).find(function(n) { return n.toLowerCase() === "path".toLowerCase() })] }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isTextMessage", { get: function() { return this.privConnectionMessage.messageType === r.MessageType.Text }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isBinaryMessage", { get: function() { return this.privConnectionMessage.messageType === r.MessageType.Binary }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "TextMessage", { get: function() { return this.privConnectionMessage.textBody }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "binaryMessage", { get: function() { return this.privConnectionMessage.binaryBody }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), n.prototype.toString = function() { return "" }, n
    }();
    t.ConnectionMessageImpl = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privGrammerBuilder = n.dynamicGrammar }
        return n.fromRecognizer = function(t) { var i = t.internalData; return new n(i) }, n.prototype.addPhrase = function(n) { this.privGrammerBuilder.addPhrase(n) }, n.prototype.addPhrases = function(n) { this.privGrammerBuilder.addPhrase(n) }, n.prototype.clear = function() { this.privGrammerBuilder.clearPhrases() }, n
    }();
    t.PhraseListGrammar = i
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = i(32),
        r = i(30),
        u = function() {
            function n() {}
            return n
        }();
    t.DialogServiceConfig = u;
    f = function(n) {
        function t() { var t = n.call(this) || this; return t.privSpeechConfig = new r.SpeechConfigImpl, t }
        return e(t, n), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privSpeechConfig.properties }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function() { return this.privSpeechConfig.speechRecognitionLanguage },
            set: function(n) {
                o.Contracts.throwIfNullOrWhitespace(n, "value");
                this.privSpeechConfig.speechRecognitionLanguage = n
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setProperty = function(n, t) { this.privSpeechConfig.setProperty(n, t) }, t.prototype.getProperty = function(n) { return this.privSpeechConfig.getProperty(n) }, t.prototype.setProxy = function(n, t, i, u) {
            this.setProperty(r.PropertyId.SpeechServiceConnection_ProxyHostName, n);
            this.setProperty(r.PropertyId.SpeechServiceConnection_ProxyPort, "" + t);
            i && this.setProperty(r.PropertyId.SpeechServiceConnection_ProxyUserName, i);
            u && this.setProperty(r.PropertyId.SpeechServiceConnection_ProxyPassword, u)
        }, t.prototype.setServiceProperty = function(n, t, i) { this.privSpeechConfig.setServiceProperty(n, t, i) }, t.prototype.close = function() { return }, t
    }(u);
    t.DialogServiceConfigImpl = f
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(32),
        f = i(81),
        r = i(30),
        o = function(n) {
            function t() { return n.call(this) || this }
            return e(t, n), t.fromSubscription = function(n, t, i) {
                u.Contracts.throwIfNullOrWhitespace(n, "subscription");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var e = new f.DialogServiceConfigImpl;
                return e.setProperty(r.PropertyId.Conversation_DialogType, "bot_framework"), e.setProperty(r.PropertyId.SpeechServiceConnection_Key, n), e.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i && e.setProperty(r.PropertyId.Conversation_ApplicationId, i), e
            }, t.fromAuthorizationToken = function(n, t) {
                u.Contracts.throwIfNullOrWhitespace(n, "authorizationToken");
                u.Contracts.throwIfNullOrWhitespace(t, "region");
                var i = new f.DialogServiceConfigImpl;
                return i.setProperty(r.PropertyId.Conversation_DialogType, "bot_framework"), i.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n), i.setProperty(r.PropertyId.SpeechServiceConnection_Region, t), i
            }, t
        }(f.DialogServiceConfigImpl);
    t.BotFrameworkConfig = o
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(32),
        f = i(81),
        r = i(30),
        o = function(n) {
            function t() { return n.call(this) || this }
            return e(t, n), t.fromSubscription = function(n, t, i) {
                u.Contracts.throwIfNullOrWhitespace(n, "applicationId");
                u.Contracts.throwIfNullOrWhitespace(t, "subscription");
                u.Contracts.throwIfNullOrWhitespace(i, "region");
                var e = new f.DialogServiceConfigImpl;
                return e.setProperty(r.PropertyId.Conversation_DialogType, "custom_commands"), e.setProperty(r.PropertyId.Conversation_ApplicationId, n), e.setProperty(r.PropertyId.SpeechServiceConnection_Key, t), e.setProperty(r.PropertyId.SpeechServiceConnection_Region, i), e
            }, t.fromAuthorizationToken = function(n, t, i) {
                u.Contracts.throwIfNullOrWhitespace(n, "applicationId");
                u.Contracts.throwIfNullOrWhitespace(t, "authorizationToken");
                u.Contracts.throwIfNullOrWhitespace(i, "region");
                var e = new f.DialogServiceConfigImpl;
                return e.setProperty(r.PropertyId.Conversation_DialogType, "custom_commands"), e.setProperty(r.PropertyId.Conversation_ApplicationId, n), e.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, t), e.setProperty(r.PropertyId.SpeechServiceConnection_Region, i), e
            }, Object.defineProperty(t.prototype, "applicationId", {
                get: function() { return this.getProperty(r.PropertyId.Conversation_ApplicationId) },
                set: function(n) {
                    u.Contracts.throwIfNullOrWhitespace(n, "value");
                    this.setProperty(r.PropertyId.Conversation_ApplicationId, n)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(f.DialogServiceConfigImpl);
    t.CustomCommandsConfig = o
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = i(85),
        f = i(25),
        u = i(32),
        s = i(30),
        r = i(61),
        h = function(n) {
            function t(t, i) {
                var r = this,
                    f = t,
                    e;
                return u.Contracts.throwIfNull(t, "dialogConfig"), r = n.call(this, i, f.properties, new o.DialogConnectionFactory) || this, r.isTurnComplete = !0, r.privIsDisposed = !1, r.privProperties = f.properties.clone(), e = r.buildAgentConfig(), r.privReco.agentConfig.set(e), r
            }
            return e(t, n), t.prototype.connect = function() { this.privReco.connect() }, t.prototype.disconnect = function() { this.privReco.disconnect() }, Object.defineProperty(t.prototype, "authorizationToken", {
                get: function() { return this.properties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token) },
                set: function(n) {
                    u.Contracts.throwIfNullOrWhitespace(n, "token");
                    this.properties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechActivityTemplate", { get: function() { return this.properties.getProperty(r.PropertyId.Conversation_Speech_Activity_Template) }, set: function(n) { this.properties.setProperty(r.PropertyId.Conversation_Speech_Activity_Template, n) }, enumerable: !0, configurable: !0 }), t.prototype.listenOnceAsync = function(n, t) {
                var i = this,
                    e;
                if (this.isTurnComplete) try {
                    u.Contracts.throwIfDisposed(this.privIsDisposed);
                    this.connect();
                    this.implRecognizerStop();
                    this.isTurnComplete = !1;
                    this.privReco.recognize(f.RecognitionMode.Conversation, function(t) {
                        i.implRecognizerStop();
                        i.isTurnComplete = !0;
                        !n || n(t)
                    }, function(n) {
                        i.implRecognizerStop();
                        i.isTurnComplete = !0;
                        !t || t(n)
                    }).on(function() {}, function(n) {!t || t(n) })
                } catch (r) {
                    !t || (r instanceof Error ? (e = r, t(e.name + ": " + e.message)) : t(r));
                    this.dispose(!0)
                }
            }, t.prototype.sendActivityAsync = function(n) { this.privReco.sendMessage(n) }, t.prototype.close = function() {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                this.dispose(!0)
            }, t.prototype.dispose = function(t) { this.privIsDisposed || t && (this.implRecognizerStop(), this.privIsDisposed = !0, n.prototype.dispose.call(this, t)) }, t.prototype.createRecognizerConfig = function(n) { return new f.RecognizerConfig(n, this.privProperties) }, t.prototype.createServiceRecognizer = function(n, t, i, r) { var u = i; return new f.DialogServiceAdapter(n, t, u, r, this) }, t.prototype.buildAgentConfig = function() { var n = this.properties.getProperty("Conversation_Communication_Type", "Default"); return { botInfo: { commType: n, commandsCulture: undefined, connectionId: this.properties.getProperty(r.PropertyId.Conversation_ApplicationId), conversationId: undefined, fromId: this.properties.getProperty(r.PropertyId.Conversation_From_Id, undefined) }, version: .2 } }, t
        }(s.Recognizer);
    t.DialogServiceConnector = h
}, function(n, t, i) {
    "use strict";

    function y(n) {
        switch (n) {
            case "custom_commands":
                return v;
            case "bot_framework":
                return a
        }
        throw new Error("Invalid dialog type '" + n + "'");
    }
    var h = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        s;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(2),
        r = i(30),
        c = i(65),
        l = i(25),
        u = i(66),
        e = "convai.speech",
        a = { authHeader: "X-DLS-Secret", resourcePath: "", version: "v3" },
        v = { authHeader: "X-CommandsAppId", resourcePath: "commands", version: "v1" },
        o = "api";
    s = function(n) {
        function t() {
            var t = n !== null && n.apply(this, arguments) || this;
            return t.create = function(n, i, s) {
                var p = n.parameters.getProperty(r.PropertyId.Conversation_ApplicationId, ""),
                    d = n.parameters.getProperty(r.PropertyId.Conversation_DialogType),
                    c = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Region),
                    g = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US"),
                    a = {},
                    h, b;
                a[u.QueryParameterNames.LanguageParamName] = g;
                a[u.QueryParameterNames.FormatParamName] = n.parameters.getProperty(r.PropertyId.SpeechServiceResponse_OutputFormatOption, r.OutputFormat[r.OutputFormat.Simple]).toLowerCase();
                var w = y(d),
                    nt = w.resourcePath,
                    k = w.version,
                    tt = w.authHeader,
                    v = {};
                return i.token != null && i.token !== "" && (v[i.headerName] = i.token), v[u.QueryParameterNames.ConnectionIdHeader] = s, p !== "" && (v[tt] = p), h = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint, ""), h === "" && (b = c && c.toLowerCase().startsWith("china") ? ".azure.cn" : ".microsoft.com", h = p === "" ? "wss://" + c + "." + e + b + "/" + o + "/" + k : "wss://" + c + "." + e + b + "/" + nt + "/" + o + "/" + k), t.setCommonUrlParams(n, a, h), new f.WebsocketConnection(h, a, v, new l.WebsocketMessageFormatter, f.ProxyInfo.fromRecognizerConfig(n), s)
            }, t
        }
        return h(t, n), t
    }(c.ConnectionFactoryBase);
    t.DialogConnectionFactory = s
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            this.privActivity = n;
            this.privAudioStream = t
        }
        return Object.defineProperty(n.prototype, "activity", { get: function() { return this.privActivity }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "audioStream", { get: function() { return this.privAudioStream }, enumerable: !0, configurable: !0 }), n
    }();
    t.ActivityReceivedEventArgs = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) { n[n.UriQueryParameter = 0] = "UriQueryParameter" })(i = t.ServicePropertyChannel || (t.ServicePropertyChannel = {}))
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.Masked = 0] = "Masked";
        n[n.Removed = 1] = "Removed";
        n[n.Raw = 2] = "Raw"
    })(i = t.ProfanityOption || (t.ProfanityOption = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        u = function() {
            function n(n) {
                this.audioContext = null;
                this.gainNode = null;
                this.autoUpdateBufferTimer = 0;
                this.init(n)
            }
            return n.prototype.playAudioSample = function(n) {
                this.ensureInitializedContext();
                var i = this.formatAudioData(n),
                    t = new Float32Array(this.samples.length + i.length);
                t.set(this.samples, 0);
                t.set(i, this.samples.length);
                this.samples = t
            }, n.prototype.stopAudio = function() { this.audioContext !== null && (this.samples = new Float32Array, clearInterval(this.autoUpdateBufferTimer), this.audioContext.close(), this.audioContext = null) }, n.prototype.init = function(n) {
                this.audioFormat = n;
                this.samples = new Float32Array
            }, n.prototype.ensureInitializedContext = function() {
                var t = this,
                    n;
                this.audioContext === null && (this.createAudioContext(), n = 200, this.autoUpdateBufferTimer = setInterval(function() { t.updateAudioBuffer() }, n))
            }, n.prototype.createAudioContext = function() {
                this.audioContext = new AudioContext;
                this.gainNode = this.audioContext.createGain();
                this.gainNode.gain.value = 1;
                this.gainNode.connect(this.audioContext.destination);
                this.startTime = this.audioContext.currentTime
            }, n.prototype.formatAudioData = function(n) {
                switch (this.audioFormat.bitsPerSample) {
                    case 8:
                        return this.formatArrayBuffer(new Int8Array(n), 128);
                    case 16:
                        return this.formatArrayBuffer(new Int16Array(n), 32768);
                    case 32:
                        return this.formatArrayBuffer(new Int32Array(n), 2147483648);
                    default:
                        throw new r.InvalidOperationError("Only WAVE_FORMAT_PCM (8/16/32 bps) format supported at this time");
                }
            }, n.prototype.formatArrayBuffer = function(n, t) { for (var r = new Float32Array(n.length), i = 0; i < n.length; i++) r[i] = n[i] / t; return r }, n.prototype.updateAudioBuffer = function() {
                var n, f, e, i;
                if (this.samples.length !== 0) {
                    var t = this.audioFormat.channels,
                        r = this.audioContext.createBufferSource(),
                        o = this.samples.length / t,
                        u = this.audioContext.createBuffer(t, o, this.audioFormat.samplesPerSec);
                    for (n = 0; n < t; n++)
                        for (f = n, e = u.getChannelData(n), i = 0; i < this.samples.length; i++, f += t) e[i] = this.samples[f];
                    this.startTime < this.audioContext.currentTime && (this.startTime = this.audioContext.currentTime);
                    r.buffer = u;
                    r.connect(this.gainNode);
                    r.start(this.startTime);
                    this.startTime += u.duration;
                    this.samples = new Float32Array
                }
            }, n
        }();
    t.BaseAudioPlayer = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privConnectionMessage = n }
        return Object.defineProperty(n.prototype, "message", { get: function() { return this.privConnectionMessage }, enumerable: !0, configurable: !0 }), n.prototype.toString = function() { return "Message: " + this.privConnectionMessage.toString() }, n
    }();
    t.ConnectionMessageEventArgs = i
}, function(n, t, i) {
    "use strict";
    var u, f, e, o, s, h, c, r, l;
    Object.defineProperty(t, "__esModule", { value: !0 });
    u = i(92);
    t.Conversation = u.Conversation;
    f = i(93);
    t.ConversationExpirationEventArgs = f.ConversationExpirationEventArgs;
    e = i(94);
    t.ConversationParticipantsChangedEventArgs = e.ConversationParticipantsChangedEventArgs;
    o = i(95);
    t.ConversationTranslationCanceledEventArgs = o.ConversationTranslationCanceledEventArgs;
    s = i(96);
    t.ConversationTranslationEventArgs = s.ConversationTranslationEventArgs;
    h = i(97);
    t.ConversationTranslationResult = h.ConversationTranslationResult;
    c = i(98);
    t.ConversationTranslator = c.ConversationTranslator;
    r = i(99);
    t.Participant = r.Participant;
    t.User = r.User;
    l = i(100);
    t.ParticipantChangedReason = l.ParticipantChangedReason
}, function(n, t, i) {
    "use strict";
    var s = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        h = this && this.__spreadArrays || function() {
            for (var i = 0, n = 0, r = arguments.length; n < r; n++) i += arguments[n].length;
            for (var u = Array(i), f = 0, n = 0; n < r; n++)
                for (var e = arguments[n], t = 0, o = e.length; t < o; t++, f++) u[f] = e[t];
            return u
        },
        e;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        u = i(32),
        f = i(30),
        o = function() {
            function n() {}
            return n.createConversationAsync = function(n, t, i) {
                u.Contracts.throwIfNullOrUndefined(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "config"));
                u.Contracts.throwIfNullOrUndefined(n.region, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "SpeechServiceConnection_Region"));
                n.subscriptionKey || n.getProperty(f.PropertyId[f.PropertyId.SpeechServiceAuthorization_Token]) || u.Contracts.throwIfNullOrUndefined(n.subscriptionKey, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "SpeechServiceConnection_Key"));
                var o = new e(n);
                return o.createConversationAsync(function() {!t || t() }, function(n) {!i || i(n) }), o
            }, n
        }();
    t.Conversation = o;
    e = function(n) {
        function t(t) {
            var i = n.call(this) || this,
                s, c, e, o;
            return i.privIsDisposed = !1, i.privIsConnected = !1, i.onConnected = function(n) { i.privIsConnected = !0; try {!i.privConversationTranslator.sessionStarted || i.privConversationTranslator.sessionStarted(i.privConversationTranslator, n) } catch (n) {} }, i.onDisconnected = function(n) { i.close(!1); try {!i.privConversationTranslator.sessionStopped || i.privConversationTranslator.sessionStopped(i.privConversationTranslator, n) } catch (n) {} }, i.onCanceled = function(n, t) { i.close(!1); try {!i.privConversationTranslator.canceled || i.privConversationTranslator.canceled(i.privConversationTranslator, t) } catch (t) {} }, i.onParticipantUpdateCommandReceived = function(n, t) {
                var e, o, u;
                try {
                    if (u = i.privParticipants.getParticipant(t.id), u !== undefined) {
                        switch (t.key) {
                            case r.ConversationTranslatorCommandTypes.changeNickname:
                                u.displayName = t.value;
                                break;
                            case r.ConversationTranslatorCommandTypes.setUseTTS:
                                u.useTts = t.value;
                                break;
                            case r.ConversationTranslatorCommandTypes.setProfanityFiltering:
                                u.profanity = t.value;
                                break;
                            case r.ConversationTranslatorCommandTypes.setMute:
                                u.isMuted = t.value;
                                break;
                            case r.ConversationTranslatorCommandTypes.setTranslateToLanguages:
                                u.translateToLanguages = t.value
                        }
                        i.privParticipants.addOrUpdateParticipant(u);
                        !((e = i.privConversationTranslator) === null || e === void 0 ? void 0 : e.participantsChanged) || ((o = i.privConversationTranslator) === null || o === void 0 ? void 0 : o.participantsChanged(i.privConversationTranslator, new f.ConversationParticipantsChangedEventArgs(f.ParticipantChangedReason.Updated, [i.toParticipant(u)], t.sessionId)))
                    }
                } catch (t) {}
            }, i.onLockRoomCommandReceived = function() {}, i.onMuteAllCommandReceived = function(n, t) { var r, u; try { i.privParticipants.participants.forEach(function(n) { return n.isMuted = n.isHost ? !1 : t.isMuted });!((r = i.privConversationTranslator) === null || r === void 0 ? void 0 : r.participantsChanged) || ((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.participantsChanged(i.privConversationTranslator, new f.ConversationParticipantsChangedEventArgs(f.ParticipantChangedReason.Updated, i.toParticipants(!1), t.sessionId))) } catch (t) {} }, i.onParticipantJoinCommandReceived = function(n, t) {
                var r, u, e;
                try {
                    e = i.privParticipants.addOrUpdateParticipant(t.participant);
                    e !== undefined && (!((r = i.privConversationTranslator) === null || r === void 0 ? void 0 : r.participantsChanged) || ((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.participantsChanged(i.privConversationTranslator, new f.ConversationParticipantsChangedEventArgs(f.ParticipantChangedReason.JoinedConversation, [i.toParticipant(e)], t.sessionId))))
                } catch (t) {}
            }, i.onParticipantLeaveCommandReceived = function(n, t) {
                var r, u, e;
                try {
                    e = i.privParticipants.getParticipant(t.participant.id);
                    e !== undefined && (i.privParticipants.deleteParticipant(t.participant.id), !((r = i.privConversationTranslator) === null || r === void 0 ? void 0 : r.participantsChanged) || ((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.participantsChanged(i.privConversationTranslator, new f.ConversationParticipantsChangedEventArgs(f.ParticipantChangedReason.LeftConversation, [i.toParticipant(e)], t.sessionId))))
                } catch (t) {}
            }, i.onTranslationReceived = function(n, t) {
                var u, e, o, s, h, c;
                try {
                    switch (t.command) {
                        case r.ConversationTranslatorMessageTypes.final:
                            !((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.transcribed) || ((e = i.privConversationTranslator) === null || e === void 0 ? void 0 : e.transcribed(i.privConversationTranslator, new f.ConversationTranslationEventArgs(t.payload, undefined, t.sessionId)));
                            break;
                        case r.ConversationTranslatorMessageTypes.partial:
                            !((o = i.privConversationTranslator) === null || o === void 0 ? void 0 : o.transcribing) || ((s = i.privConversationTranslator) === null || s === void 0 ? void 0 : s.transcribing(i.privConversationTranslator, new f.ConversationTranslationEventArgs(t.payload, undefined, t.sessionId)));
                            break;
                        case r.ConversationTranslatorMessageTypes.instantMessage:
                            !((h = i.privConversationTranslator) === null || h === void 0 ? void 0 : h.textMessageReceived) || ((c = i.privConversationTranslator) === null || c === void 0 ? void 0 : c.textMessageReceived(i.privConversationTranslator, new f.ConversationTranslationEventArgs(t.payload, undefined, t.sessionId)))
                    }
                } catch (t) {}
            }, i.onParticipantsListReceived = function(n, t) {
                var u, e, r;
                try {
                    t.sessionToken !== undefined && t.sessionToken !== null && (i.privRoom.token = t.sessionToken);
                    i.privParticipants.participants = h(t.participants);
                    i.privParticipants.me !== undefined && (i.privIsReady = !0);
                    !((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.participantsChanged) || ((e = i.privConversationTranslator) === null || e === void 0 ? void 0 : e.participantsChanged(i.privConversationTranslator, new f.ConversationParticipantsChangedEventArgs(f.ParticipantChangedReason.JoinedConversation, i.toParticipants(!0), t.sessionId)));
                    i.me.isHost && (r = i.privConversationTranslator.properties.getProperty(f.PropertyId.ConversationTranslator_Name), r !== undefined && r.length > 0 && r !== i.me.displayName && i.changeNicknameAsync(r))
                } catch (t) {}
            }, i.onConversationExpiration = function(n, t) { var r, u; try {!((r = i.privConversationTranslator) === null || r === void 0 ? void 0 : r.conversationExpiration) || ((u = i.privConversationTranslator) === null || u === void 0 ? void 0 : u.conversationExpiration(i.privConversationTranslator, t)) } catch (t) {} }, i.privProperties = new f.PropertyCollection, i.privManager = new r.ConversationManager, s = t.getProperty(f.PropertyId[f.PropertyId.SpeechServiceConnection_RecoLanguage]), s || t.setProperty(f.PropertyId[f.PropertyId.SpeechServiceConnection_RecoLanguage], r.ConversationTranslatorConfig.defaultLanguageCode), i.privLanguage = t.getProperty(f.PropertyId[f.PropertyId.SpeechServiceConnection_RecoLanguage]), t.targetLanguages.length === 0 && t.addTargetLanguage(i.privLanguage), c = t.getProperty(f.PropertyId[f.PropertyId.SpeechServiceResponse_ProfanityOption]), c || t.setProfanity(f.ProfanityOption.Masked), e = t.getProperty(f.PropertyId[f.PropertyId.ConversationTranslator_Name]), (e === undefined || e === null || e.length <= 1 || e.length > 50) && (e = "Host"), t.setProperty(f.PropertyId[f.PropertyId.ConversationTranslator_Name], e), i.privConfig = t, o = t, u.Contracts.throwIfNull(o, "speechConfig"), i.privProperties = o.properties.clone(), i.privIsConnected = !1, i.privParticipants = new r.InternalParticipants, i.privIsReady = !1, i
        }
        return s(t, n), Object.defineProperty(t.prototype, "conversationTranslator", { set: function(n) { this.privConversationTranslator = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "room", { get: function() { return this.privRoom }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "connection", { get: function() { return this.privConversationRecognizer }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authorizationToken", {
            get: function() { return this.privToken },
            set: function(n) {
                u.Contracts.throwIfNullOrWhitespace(n, "authorizationToken");
                this.privToken = n
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "config", { get: function() { return this.privConfig }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "conversationId", { get: function() { return this.privRoom ? this.privRoom.roomId : "" }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return this.privLanguage }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isMutedByHost", { get: function() { var n, t; return ((n = this.privParticipants.me) === null || n === void 0 ? void 0 : n.isHost) ? !1 : (t = this.privParticipants.me) === null || t === void 0 ? void 0 : t.isMuted }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isConnected", { get: function() { return this.privIsConnected && this.privIsReady }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "participants", { get: function() { return this.toParticipants(!0) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "me", { get: function() { return this.toParticipant(this.privParticipants.me) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "host", { get: function() { return this.toParticipant(this.privParticipants.host) }, enumerable: !0, configurable: !0 }), t.prototype.createConversationAsync = function(n, t) {
            var i = this;
            try {
                !this.privConversationRecognizer || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedStart), t);
                this.privManager.createOrJoin(this.privProperties, undefined, function(u) {
                    u || i.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedConnect), t);
                    i.privRoom = u;
                    i.handleCallback(n, t)
                }, function(n) { i.handleError(n, t) })
            } catch (u) { this.handleError(u, t) }
        }, t.prototype.startConversationAsync = function(n, t) {
            var i = this;
            try {
                !this.privConversationRecognizer || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedStart), t);
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedConnect);
                this.privParticipants.meId = this.privRoom.participantId;
                this.privConversationRecognizer = new r.ConversationTranslatorRecognizer(this.privConfig);
                this.privConversationRecognizer.conversation = this.privRoom;
                this.privConversationRecognizerConnection = f.Connection.fromRecognizer(this.privConversationRecognizer);
                this.privConversationRecognizerConnection.connected = this.onConnected;
                this.privConversationRecognizerConnection.disconnected = this.onDisconnected;
                this.privConversationRecognizer.canceled = this.onCanceled;
                this.privConversationRecognizer.participantUpdateCommandReceived = this.onParticipantUpdateCommandReceived;
                this.privConversationRecognizer.lockRoomCommandReceived = this.onLockRoomCommandReceived;
                this.privConversationRecognizer.muteAllCommandReceived = this.onMuteAllCommandReceived;
                this.privConversationRecognizer.participantJoinCommandReceived = this.onParticipantJoinCommandReceived;
                this.privConversationRecognizer.participantLeaveCommandReceived = this.onParticipantLeaveCommandReceived;
                this.privConversationRecognizer.translationReceived = this.onTranslationReceived;
                this.privConversationRecognizer.participantsListReceived = this.onParticipantsListReceived;
                this.privConversationRecognizer.conversationExpiration = this.onConversationExpiration;
                this.privConversationRecognizer.connect(this.privRoom.token, function() { i.handleCallback(n, t) }, function(n) { i.handleError(n, t) })
            } catch (e) { this.handleError(e, t) }
        }, t.prototype.joinConversationAsync = function(n, t, i, f, e) {
            var o = this;
            try {
                u.Contracts.throwIfNullOrWhitespace(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversationId"));
                u.Contracts.throwIfNullOrWhitespace(t, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname"));
                u.Contracts.throwIfNullOrWhitespace(i, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "language"));
                this.privManager.createOrJoin(this.privProperties, n, function(n) {
                    u.Contracts.throwIfNullOrUndefined(n, r.ConversationTranslatorConfig.strings.permissionDeniedConnect);
                    o.privRoom = n;
                    o.privConfig.authorizationToken = n.cognitiveSpeechAuthToken;
                    !f || f(n.cognitiveSpeechAuthToken)
                }, function(n) { o.handleError(n, e) })
            } catch (s) { this.handleError(s, e) }
        }, t.prototype.deleteConversationAsync = function(n, t) {
            var i = this;
            try {
                u.Contracts.throwIfNullOrUndefined(this.privProperties, r.ConversationTranslatorConfig.strings.permissionDeniedConnect);
                u.Contracts.throwIfNullOrWhitespace(this.privRoom.token, r.ConversationTranslatorConfig.strings.permissionDeniedConnect);
                this.privManager.leave(this.privProperties, this.privRoom.token, function() { i.handleCallback(n, t) }, function(n) { i.handleError(n, t) });
                this.dispose()
            } catch (f) { this.handleError(f, t) }
        }, t.prototype.endConversationAsync = function(n, t) {
            try {
                this.close(!0);
                this.handleCallback(n, t)
            } catch (i) { this.handleError(i, t) }
        }, t.prototype.lockConversationAsync = function(n, t) {
            var f = this,
                i;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSendAsHost || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "lock")), t);
                (i = this.privConversationRecognizer) === null || i === void 0 ? void 0 : i.sendLockRequest(!0, function() { f.handleCallback(n, t) }, function(n) { f.handleError(n, t) })
            } catch (e) { this.handleError(e, t) }
        }, t.prototype.muteAllParticipantsAsync = function(n, t) {
            var f = this,
                i;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrUndefined(this.privConversationRecognizer, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSendAsHost || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "mute")), t);
                (i = this.privConversationRecognizer) === null || i === void 0 ? void 0 : i.sendMuteAllRequest(!0, function() { f.handleCallback(n, t) }, function(n) { f.handleError(n, t) })
            } catch (e) { this.handleError(e, t) }
        }, t.prototype.muteParticipantAsync = function(n, t, i) {
            var e = this,
                f, o;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrWhitespace(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId"));
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSend || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedSend), i);
                this.me.isHost || this.me.id === n || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "mute")), i);
                o = this.privParticipants.getParticipantIndex(n);
                o === -1 && this.handleError(new Error(r.ConversationTranslatorConfig.strings.invalidParticipantRequest), i);
                (f = this.privConversationRecognizer) === null || f === void 0 ? void 0 : f.sendMuteRequest(n, !0, function() { e.handleCallback(t, i) }, function(n) { e.handleError(n, i) })
            } catch (s) { this.handleError(s, i) }
        }, t.prototype.removeParticipantAsync = function(n, t, i) {
            var o = this,
                e, f, s, h, c;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSendAsHost || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "remove")), i);
                f = "";
                typeof n == "string" ? f = n : n.hasOwnProperty("id") ? (s = n, f = s.id) : n.hasOwnProperty("userId") && (h = n, f = h.userId);
                u.Contracts.throwIfNullOrWhitespace(f, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId"));
                c = this.participants.findIndex(function(n) { return n.id === f });
                c === -1 && this.handleError(new Error(r.ConversationTranslatorConfig.strings.invalidParticipantRequest), i);
                (e = this.privConversationRecognizer) === null || e === void 0 ? void 0 : e.sendEjectRequest(f, function() { o.handleCallback(t, i) }, function(n) { o.handleError(n, i) })
            } catch (l) { this.handleError(l, i) }
        }, t.prototype.unlockConversationAsync = function(n, t) {
            var f = this,
                i;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSendAsHost || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "unlock")), t);
                (i = this.privConversationRecognizer) === null || i === void 0 ? void 0 : i.sendLockRequest(!1, function() { f.handleCallback(n, t) }, function(n) { f.handleError(n, t) })
            } catch (e) { this.handleError(e, t) }
        }, t.prototype.unmuteAllParticipantsAsync = function(n, t) {
            var f = this,
                i;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSendAsHost || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "unmute all")), t);
                (i = this.privConversationRecognizer) === null || i === void 0 ? void 0 : i.sendMuteAllRequest(!1, function() { f.handleCallback(n, t) }, function(n) { f.handleError(n, t) })
            } catch (e) { this.handleError(e, t) }
        }, t.prototype.unmuteParticipantAsync = function(n, t, i) {
            var e = this,
                f, o;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrWhitespace(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId"));
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSend || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedSend), i);
                this.me.isHost || this.me.id === n || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "mute")), i);
                o = this.privParticipants.getParticipantIndex(n);
                o === -1 && this.handleError(new Error(r.ConversationTranslatorConfig.strings.invalidParticipantRequest), i);
                (f = this.privConversationRecognizer) === null || f === void 0 ? void 0 : f.sendMuteRequest(n, !1, function() { e.handleCallback(t, i) }, function(n) { e.handleError(n, i) })
            } catch (s) { this.handleError(s, i) }
        }, t.prototype.sendTextMessageAsync = function(n, t, i) {
            var e = this,
                f;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrWhitespace(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "message"));
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSend || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedSend), i);
                n.length > r.ConversationTranslatorConfig.textMessageMaxLength && this.handleError(new Error(r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "message length")), i);
                (f = this.privConversationRecognizer) === null || f === void 0 ? void 0 : f.sendMessageRequest(n, function() { e.handleCallback(t, i) }, function(n) { e.handleError(n, i) })
            } catch (o) { this.handleError(o, i) }
        }, t.prototype.changeNicknameAsync = function(n, t, i) {
            var e = this,
                f;
            try {
                u.Contracts.throwIfDisposed(this.privIsDisposed);
                u.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed());
                u.Contracts.throwIfNullOrWhitespace(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname"));
                u.Contracts.throwIfNullOrUndefined(this.privRoom, r.ConversationTranslatorConfig.strings.permissionDeniedSend);
                this.canSend || this.handleError(new Error(r.ConversationTranslatorConfig.strings.permissionDeniedSend), i);
                (f = this.privConversationRecognizer) === null || f === void 0 ? void 0 : f.sendChangeNicknameRequest(n, function() { e.handleCallback(t, i) }, function(n) { e.handleError(n, i) })
            } catch (o) { this.handleError(o, i) }
        }, t.prototype.isDisposed = function() { return this.privIsDisposed }, t.prototype.dispose = function() {
            var n;
            this.isDisposed || (this.privIsDisposed = !0, (n = this.config) === null || n === void 0 ? void 0 : n.close(), this.privConversationRecognizerConnection && (this.privConversationRecognizerConnection.closeConnection(), this.privConversationRecognizerConnection.close(), this.privConversationRecognizerConnection = undefined), this.privConfig = undefined, this.privLanguage = undefined, this.privProperties = undefined, this.privRoom = undefined, this.privToken = undefined, this.privManager = undefined, this.privConversationRecognizer = undefined, this.privIsConnected = !1, this.privIsReady = !1, this.privParticipants = undefined, this.privRoom = undefined)
        }, t.prototype.close = function(n) {
            var t, i, r;
            try {
                this.privIsConnected = !1;
                (t = this.privConversationRecognizerConnection) === null || t === void 0 ? void 0 : t.closeConnection();
                (i = this.privConversationRecognizerConnection) === null || i === void 0 ? void 0 : i.close();
                this.privConversationRecognizer.close();
                this.privConversationRecognizerConnection = undefined;
                this.privConversationRecognizer = undefined;
                (r = this.privConversationTranslator) === null || r === void 0 ? void 0 : r.dispose()
            } catch (u) {}
            n && this.dispose()
        }, Object.defineProperty(t.prototype, "canSend", { get: function() { var n; return this.privIsConnected && !((n = this.privParticipants.me) === null || n === void 0 ? void 0 : n.isMuted) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "canSendAsHost", { get: function() { var n; return this.privIsConnected && ((n = this.privParticipants.me) === null || n === void 0 ? void 0 : n.isHost) }, enumerable: !0, configurable: !0 }), t.prototype.handleCallback = function(n, t) {
            if (!!n) {
                try { n() } catch (i) {!t || t(i) }
                n = undefined
            }
        }, t.prototype.handleError = function(n, t) {
            if (!!t)
                if (n instanceof Error) {
                    var i = n;
                    t(i.name + ": " + i.message)
                } else t(n)
        }, t.prototype.toParticipants = function(n) {
            var i = this,
                t = this.privParticipants.participants.map(function(n) { return i.toParticipant(n) });
            return n ? t : t.filter(function(n) { return n.isHost === !1 })
        }, t.prototype.toParticipant = function(n) { return new f.Participant(n.id, n.avatar, n.displayName, n.isHost, n.isMuted, n.isUsingTts, n.preferredLanguage) }, t
    }(o);
    t.ConversationImpl = e
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privExpirationTime = t, r }
        return f(t, n), Object.defineProperty(t.prototype, "expirationTime", { get: function() { return this.privExpirationTime }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ConversationExpirationEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, r) || this; return u.privReason = t, u.privParticipant = i, u }
        return f(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "participants", { get: function() { return this.privParticipant }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ConversationParticipantsChangedEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r, u, f) { var e = n.call(this, u, f) || this; return e.privReason = t, e.privErrorDetails = i, e.privErrorCode = r, e }
        return f(t, n), Object.defineProperty(t.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorCode", { get: function() { return this.privErrorCode }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.ConversationTranslationCanceledEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function(n) {
        function t(t, i, r) { var u = n.call(this, i, r) || this; return u.privResult = t, u }
        return f(t, n), Object.defineProperty(t.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), t
    }(r.RecognitionEventArgs);
    t.ConversationTranslationEventArgs = u
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(55);
    u = function(n) {
        function t(t, i, r, u, f, e, o, s, h, c, l) { var a = n.call(this, i, u, f, e, o, s, h, c, l) || this; return a.privId = t, a.privOrigLang = r, a }
        return f(t, n), Object.defineProperty(t.prototype, "participantId", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "originalLang", { get: function() { return this.privOrigLang }, enumerable: !0, configurable: !0 }), t
    }(r.TranslationRecognitionResult);
    t.ConversationTranslationResult = u
}, function(n, t, i) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(25),
        e = i(32),
        r = i(30),
        s = i(92),
        h = i(91),
        f;
    (function(n) {
        n[n.Inactive = 0] = "Inactive";
        n[n.Connecting = 1] = "Connecting";
        n[n.Connected = 2] = "Connected"
    })(f = t.SpeechState || (t.SpeechState = {}));
    o = function() {
        function n(n) {
            var t = this;
            this.privIsDisposed = !1;
            this.privIsSpeaking = !1;
            this.privSpeechState = f.Inactive;
            this.onSpeechConnected = function() { t.privSpeechState = f.Connected };
            this.onSpeechDisconnected = function() {
                t.privSpeechState = f.Inactive;
                t.cancelSpeech()
            };
            this.onSpeechRecognized = function(n, i) {
                var r;
                ((r = i.result) === null || r === void 0 ? void 0 : r.errorDetails) && (t.cancelSpeech(), t.fireCancelEvent(i.result.errorDetails))
            };
            this.onSpeechRecognizing = function() {};
            this.onSpeechCanceled = function() { if (t.privSpeechState !== f.Inactive) try { t.cancelSpeech() } catch (n) { t.privSpeechState = f.Inactive } };
            this.onSpeechSessionStarted = function() { t.privSpeechState = f.Connected };
            this.onSpeechSessionStopped = function() { t.privSpeechState = f.Inactive };
            this.privProperties = new r.PropertyCollection;
            this.privAudioConfig = n
        }
        return Object.defineProperty(n.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "speechRecognitionLanguage", { get: function() { return this.privSpeechRecognitionLanguage }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participants", { get: function() { var n; if ((n = this.privConversation) !== null && n !== void 0) return n.participants }, enumerable: !0, configurable: !0 }), n.prototype.joinConversationAsync = function(n, t, i, f, o) {
            var c = this,
                h, l, a;
            try {
                typeof n == "string" ? (e.Contracts.throwIfNullOrUndefined(n, u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversation id")), e.Contracts.throwIfNullOrWhitespace(t, u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), !this.privConversation || this.handleError(new Error(u.ConversationTranslatorConfig.strings.permissionDeniedStart), o), h = i, (h === undefined || h === null || h === "") && (h = u.ConversationTranslatorConfig.defaultLanguageCode), this.privSpeechTranslationConfig = r.SpeechTranslationConfig.fromSubscription(u.ConversationTranslatorConfig.auth.placeholderSubscriptionKey, u.ConversationTranslatorConfig.auth.placeholderRegion), this.privSpeechTranslationConfig.setProfanity(r.ProfanityOption.Masked), this.privSpeechTranslationConfig.addTargetLanguage(h), this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_RecoLanguage], h), this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.ConversationTranslator_Name], t), l = this.privProperties.getProperty(r.PropertyId.ConversationTranslator_Host), l && this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.ConversationTranslator_Host], l), a = this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_Host), a && this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Host], a), this.privConversation = new s.ConversationImpl(this.privSpeechTranslationConfig), this.privConversation.conversationTranslator = this, this.privConversation.joinConversationAsync(n, t, h, function(n) {
                    n || c.handleError(new Error(u.ConversationTranslatorConfig.strings.permissionDeniedConnect), o);
                    c.privSpeechTranslationConfig.authorizationToken = n;
                    c.privConversation.startConversationAsync(function() { c.handleCallback(f, o) }, function(n) { c.handleError(n, o) })
                }, function(n) { c.handleError(n, o) })) : typeof n == "object" ? (e.Contracts.throwIfNullOrUndefined(n, u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversation id")), e.Contracts.throwIfNullOrWhitespace(t, u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), this.privProperties.setProperty(r.PropertyId.ConversationTranslator_Name, t), this.privConversation = n, this.privConversation.conversationTranslator = this, e.Contracts.throwIfNullOrUndefined(this.privConversation, u.ConversationTranslatorConfig.strings.permissionDeniedConnect), e.Contracts.throwIfNullOrUndefined(this.privConversation.room.token, u.ConversationTranslatorConfig.strings.permissionDeniedConnect), this.privSpeechTranslationConfig = n.config, this.handleCallback(i, f)) : this.handleError(new Error(u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "invalid conversation type")), f)
            } catch (v) { this.handleError(v, typeof i == "string" ? o : f) }
        }, n.prototype.leaveConversationAsync = function(n, t) {
            var i = this;
            try {
                this.cancelSpeech();
                this.privConversation.endConversationAsync(function() {
                    i.privConversation.deleteConversationAsync(function() {
                        i.handleCallback(n, t);
                        i.dispose()
                    }, function(n) { i.handleError(n, t) })
                }, function(n) { i.handleError(n, t) })
            } catch (r) { this.handleError(r, t) }
        }, n.prototype.sendTextMessageAsync = function(n, t, i) {
            var r;
            try {
                e.Contracts.throwIfNullOrUndefined(this.privConversation, u.ConversationTranslatorConfig.strings.permissionDeniedSend);
                e.Contracts.throwIfNullOrWhitespace(n, u.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", n));
                (r = this.privConversation) === null || r === void 0 ? void 0 : r.sendTextMessageAsync(n, t, i)
            } catch (f) { this.handleError(f, i) }
        }, n.prototype.startTranscribingAsync = function(n, t) {
            var i = this;
            try {
                e.Contracts.throwIfNullOrUndefined(this.privConversation, u.ConversationTranslatorConfig.strings.permissionDeniedSend);
                e.Contracts.throwIfNullOrUndefined(this.privConversation.room.token, u.ConversationTranslatorConfig.strings.permissionDeniedConnect);
                this.canSpeak || this.handleError(new Error(u.ConversationTranslatorConfig.strings.permissionDeniedSend), t);
                this.privTranslationRecognizer === undefined ? this.connectTranslatorRecognizer(function() {
                    i.startContinuousRecognition(function() {
                        i.privIsSpeaking = !0;
                        i.handleCallback(n, t)
                    }, function(n) {
                        i.privIsSpeaking = !1;
                        i.cancelSpeech();
                        i.handleError(n, t)
                    })
                }, function(n) { i.handleError(n, t) }) : this.startContinuousRecognition(function() {
                    i.privIsSpeaking = !0;
                    i.handleCallback(n, t)
                }, function(n) {
                    i.privIsSpeaking = !1;
                    i.cancelSpeech();
                    i.handleError(n, t)
                })
            } catch (r) {
                this.handleError(r, t);
                this.cancelSpeech()
            }
        }, n.prototype.stopTranscribingAsync = function(n, t) {
            var i = this,
                r;
            try {
                if (!this.privIsSpeaking) {
                    this.cancelSpeech();
                    this.handleCallback(n, t);
                    return
                }
                this.privIsSpeaking = !1;
                (r = this.privTranslationRecognizer) === null || r === void 0 ? void 0 : r.stopContinuousRecognitionAsync(function() { i.handleCallback(n, t) }, function(n) {
                    i.handleError(n, t);
                    i.cancelSpeech()
                })
            } catch (u) {
                this.handleError(u, t);
                this.cancelSpeech()
            }
        }, n.prototype.isDisposed = function() { return this.privIsDisposed }, n.prototype.dispose = function() {
            var n, t;
            (!this.isDisposed || this.privIsSpeaking) && (this.cancelSpeech(), this.privIsDisposed = !0, (n = this.privSpeechTranslationConfig) === null || n === void 0 ? void 0 : n.close(), this.privSpeechRecognitionLanguage = undefined, this.privProperties = undefined, this.privAudioConfig = undefined, this.privSpeechTranslationConfig = undefined, (t = this.privConversation) === null || t === void 0 ? void 0 : t.dispose(), this.privConversation = undefined)
        }, n.prototype.connectTranslatorRecognizer = function(n, t) {
            var f, i, e;
            try {
                this.privAudioConfig === undefined && (this.privAudioConfig = r.AudioConfig.fromDefaultMicrophoneInput());
                this.privSpeechTranslationConfig.getProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Key]) === u.ConversationTranslatorConfig.auth.placeholderSubscriptionKey && this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Key], "");
                f = encodeURIComponent(this.privConversation.room.token);
                i = this.privSpeechTranslationConfig.getProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Host], u.ConversationTranslatorConfig.speechHost);
                i = i.replace("{region}", this.privConversation.room.cognitiveSpeechRegion);
                e = "wss://" + i + u.ConversationTranslatorConfig.speechPath + "?" + u.ConversationTranslatorConfig.params.token + "=" + f;
                this.privSpeechTranslationConfig.setProperty(r.PropertyId[r.PropertyId.SpeechServiceConnection_Endpoint], e);
                this.privTranslationRecognizer = new r.TranslationRecognizer(this.privSpeechTranslationConfig, this.privAudioConfig);
                this.privTranslationRecognizerConnection = r.Connection.fromRecognizer(this.privTranslationRecognizer);
                this.privTranslationRecognizerConnection.connected = this.onSpeechConnected;
                this.privTranslationRecognizerConnection.disconnected = this.onSpeechDisconnected;
                this.privTranslationRecognizer.recognized = this.onSpeechRecognized;
                this.privTranslationRecognizer.recognizing = this.onSpeechRecognizing;
                this.privTranslationRecognizer.canceled = this.onSpeechCanceled;
                this.privTranslationRecognizer.sessionStarted = this.onSpeechSessionStarted;
                this.privTranslationRecognizer.sessionStopped = this.onSpeechSessionStopped;
                this.handleCallback(n, t)
            } catch (o) {
                this.handleError(o, t);
                this.cancelSpeech()
            }
        }, n.prototype.startContinuousRecognition = function(n, t) { this.privTranslationRecognizer.startContinuousRecognitionAsync(n, t) }, n.prototype.fireCancelEvent = function(n) { var f, t, e, i, o, u, s, c; try {!this.canceled || (c = new h.ConversationTranslationCanceledEventArgs((t = (f = n) === null || f === void 0 ? void 0 : f.reason, t !== null && t !== void 0 ? t : r.CancellationReason.Error), (i = (e = n) === null || e === void 0 ? void 0 : e.errorDetails, i !== null && i !== void 0 ? i : n), (u = (o = n) === null || o === void 0 ? void 0 : o.errorCode, u !== null && u !== void 0 ? u : r.CancellationErrorCode.RuntimeError), undefined, (s = n) === null || s === void 0 ? void 0 : s.sessionId), this.canceled(this, c)) } catch (l) {} }, n.prototype.cancelSpeech = function() {
            var n, t;
            try {
                this.privIsSpeaking = !1;
                (n = this.privTranslationRecognizer) === null || n === void 0 ? void 0 : n.stopContinuousRecognitionAsync();
                (t = this.privTranslationRecognizerConnection) === null || t === void 0 ? void 0 : t.closeConnection();
                this.privTranslationRecognizerConnection = undefined;
                this.privTranslationRecognizer = undefined;
                this.privSpeechState = f.Inactive
            } catch (i) {}
        }, Object.defineProperty(n.prototype, "canSpeak", { get: function() { return this.privConversation.isConnected ? this.privIsSpeaking || this.privSpeechState === f.Connected || this.privSpeechState === f.Connecting ? !1 : this.privConversation.isMutedByHost ? !1 : !0 : !1 }, enumerable: !0, configurable: !0 }), n.prototype.handleCallback = function(n, t) {
            if (!!n) {
                try { n() } catch (i) {!t || t(i) }
                n = undefined
            }
        }, n.prototype.handleError = function(n, t) {
            if (!!t)
                if (n instanceof Error) {
                    var i = n;
                    t(i.name + ": " + i.message)
                } else t(n)
        }, n
    }();
    t.ConversationTranslator = o
}, function(n, t, i) {
    "use strict";
    var r, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    u = function() {
        function n(n) { this.privUserId = n }
        return Object.defineProperty(n.prototype, "userId", { get: function() { return this.privUserId }, enumerable: !0, configurable: !0 }), n
    }();
    t.User = u;
    f = function() {
        function n(n, t, i, u, f, e, o) {
            this.privId = n;
            this.privAvatar = t;
            this.privDisplayName = i;
            this.privIsHost = u;
            this.privIsMuted = f;
            this.privIsUsingTts = e;
            this.privPreferredLanguage = o;
            this.privPoperties = new r.PropertyCollection
        }
        return Object.defineProperty(n.prototype, "avatar", { get: function() { return this.privAvatar }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "displayName", { get: function() { return this.privDisplayName }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "preferredLanguage", { get: function() { return this.privPreferredLanguage }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isHost", { get: function() { return this.privIsHost }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isMuted", { get: function() { return this.privIsMuted }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isUsingTts", { get: function() { return this.privIsUsingTts }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "properties", { get: function() { return this.privPoperties }, enumerable: !0, configurable: !0 }), n
    }();
    t.Participant = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    (function(n) {
        n[n.JoinedConversation = 0] = "JoinedConversation";
        n[n.LeftConversation = 1] = "LeftConversation";
        n[n.Updated = 2] = "Updated"
    })(i = t.ParticipantChangedReason || (t.ParticipantChangedReason = {}))
}, function(n, t, i) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(25),
        f = i(4),
        s = i(33),
        h = i(37),
        c = i(36),
        e = i(32),
        r = i(30),
        l = function() {
            function n(n, t) {
                var i = n;
                e.Contracts.throwIfNull(i, "speechConfig");
                t !== null && (this.audioConfig = t !== undefined ? t : r.AudioConfig.fromDefaultSpeakerOutput());
                this.privProperties = i.properties.clone();
                this.privDisposed = !1;
                this.privSynthesizing = !1;
                this.privConnectionFactory = new u.SpeechSynthesisConnectionFactory;
                this.synthesisRequestQueue = new f.Queue;
                this.implCommonRSynthesizeSetup()
            }
            return Object.defineProperty(n.prototype, "authorizationToken", {
                get: function() { return this.properties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token) },
                set: function(n) {
                    e.Contracts.throwIfNullOrWhitespace(n, "token");
                    this.properties.setProperty(r.PropertyId.SpeechServiceAuthorization_Token, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), n.buildSsml = function(n, t) {
                var i, f = (i = {}, i["ar-EG"] = "Microsoft Server Speech Text to Speech Voice (ar-EG, Hoda)", i["ar-SA"] = "Microsoft Server Speech Text to Speech Voice (ar-SA, Naayf)", i["bg-BG"] = "Microsoft Server Speech Text to Speech Voice (bg-BG, Ivan)", i["ca-ES"] = "Microsoft Server Speech Text to Speech Voice (ca-ES, HerenaRUS)", i["cs-CZ"] = "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)", i["da-DK"] = "Microsoft Server Speech Text to Speech Voice (da-DK, HelleRUS)", i["de-AT"] = "Microsoft Server Speech Text to Speech Voice (de-AT, Michael)", i["de-CH"] = "Microsoft Server Speech Text to Speech Voice (de-CH, Karsten)", i["de-DE"] = "Microsoft Server Speech Text to Speech Voice (de-DE, HeddaRUS)", i["el-GR"] = "Microsoft Server Speech Text to Speech Voice (el-GR, Stefanos)", i["en-AU"] = "Microsoft Server Speech Text to Speech Voice (en-AU, HayleyRUS)", i["en-CA"] = "Microsoft Server Speech Text to Speech Voice (en-CA, HeatherRUS)", i["en-GB"] = "Microsoft Server Speech Text to Speech Voice (en-GB, HazelRUS)", i["en-IE"] = "Microsoft Server Speech Text to Speech Voice (en-IE, Sean)", i["en-IN"] = "Microsoft Server Speech Text to Speech Voice (en-IN, PriyaRUS)", i["en-US"] = "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)", i["es-ES"] = "Microsoft Server Speech Text to Speech Voice (es-ES, HelenaRUS)", i["es-MX"] = "Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)", i["fi-FI"] = "Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)", i["fr-CA"] = "Microsoft Server Speech Text to Speech Voice (fr-CA, HarmonieRUS)", i["fr-CH"] = "Microsoft Server Speech Text to Speech Voice (fr-CH, Guillaume)", i["fr-FR"] = "Microsoft Server Speech Text to Speech Voice (fr-FR, HortenseRUS)", i["he-IL"] = "Microsoft Server Speech Text to Speech Voice (he-IL, Asaf)", i["hi-IN"] = "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana)", i["hr-HR"] = "Microsoft Server Speech Text to Speech Voice (hr-HR, Matej)", i["hu-HU"] = "Microsoft Server Speech Text to Speech Voice (hu-HU, Szabolcs)", i["id-ID"] = "Microsoft Server Speech Text to Speech Voice (id-ID, Andika)", i["it-IT"] = "Microsoft Server Speech Text to Speech Voice (it-IT, LuciaRUS)", i["ja-JP"] = "Microsoft Server Speech Text to Speech Voice (ja-JP, HarukaRUS)", i["ko-KR"] = "Microsoft Server Speech Text to Speech Voice (ko-KR, HeamiRUS)", i["ms-MY"] = "Microsoft Server Speech Text to Speech Voice (ms-MY, Rizwan)", i["nb-NO"] = "Microsoft Server Speech Text to Speech Voice (nb-NO, HuldaRUS)", i["nl-NL"] = "Microsoft Server Speech Text to Speech Voice (nl-NL, HannaRUS)", i["pl-PL"] = "Microsoft Server Speech Text to Speech Voice (pl-PL, PaulinaRUS)", i["pt-BR"] = "Microsoft Server Speech Text to Speech Voice (pt-BR, HeloisaRUS)", i["pt-PT"] = "Microsoft Server Speech Text to Speech Voice (pt-PT, HeliaRUS)", i["ro-RO"] = "Microsoft Server Speech Text to Speech Voice (ro-RO, Andrei)", i["ru-RU"] = "Microsoft Server Speech Text to Speech Voice (ru-RU, EkaterinaRUS)", i["sk-SK"] = "Microsoft Server Speech Text to Speech Voice (sk-SK, Filip)", i["sl-SI"] = "Microsoft Server Speech Text to Speech Voice (sl-SI, Lado)", i["sv-SE"] = "Microsoft Server Speech Text to Speech Voice (sv-SE, HedvigRUS)", i["ta-IN"] = "Microsoft Server Speech Text to Speech Voice (ta-IN, Valluvar)", i["te-IN"] = "Microsoft Server Speech Text to Speech Voice (te-IN, Chitra)", i["th-TH"] = "Microsoft Server Speech Text to Speech Voice (th-TH, Pattara)", i["tr-TR"] = "Microsoft Server Speech Text to Speech Voice (tr-TR, SedaRUS)", i["vi-VN"] = "Microsoft Server Speech Text to Speech Voice (vi-VN, An)", i["zh-CN"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, HuihuiRUS)", i["zh-HK"] = "Microsoft Server Speech Text to Speech Voice (zh-HK, TracyRUS)", i["zh-TW"] = "Microsoft Server Speech Text to Speech Voice (zh-TW, HanHanRUS)", i),
                    u = t.getProperty(r.PropertyId.SpeechServiceConnection_SynthLanguage, "en-US"),
                    e = t.getProperty(r.PropertyId.SpeechServiceConnection_SynthVoice, f[u]);
                return "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts' xmlns:emo='http://www.w3.org/2009/10/emotionml' xml:lang='" + u + "'><voice name='" + e + "'>" + this.XMLEncode(n) + "<\/voice><\/speak>"
            }, n.prototype.speakTextAsync = function(n, t, i, r) { this.speakImpl(n, !1, t, i, r) }, n.prototype.speakSsmlAsync = function(n, t, i, r) { this.speakImpl(n, !0, t, i, r) }, n.prototype.close = function() {
                e.Contracts.throwIfDisposed(this.privDisposed);
                this.dispose(!0)
            }, Object.defineProperty(n.prototype, "internalData", { get: function() { return this.privAdapter }, enumerable: !0, configurable: !0 }), n.prototype.dispose = function(n) { this.privDisposed || (n && this.privAdapter && this.privAdapter.dispose(), this.privDisposed = !0) }, n.prototype.createSynthesizerConfig = function(n) { return new u.SynthesizerConfig(n, this.privProperties) }, n.prototype.createSynthesisAdapter = function(n, t, i, r) { return new u.SynthesisAdapterBase(n, t, r, this, this.audioConfig) }, n.prototype.implCommonRSynthesizeSetup = function() {
                var i = this,
                    n = typeof window != "undefined" ? "Browser" : "Node",
                    e = "unknown",
                    o = "unknown";
                typeof navigator != "undefined" && (n = n + "/" + navigator.platform, e = navigator.userAgent, o = navigator.appVersion);
                var s = this.createSynthesizerConfig(new u.SpeechServiceConfig(new u.Context(new u.OS(n, e, o)))),
                    t = this.privProperties.getProperty(r.PropertyId.SpeechServiceConnection_Key, undefined),
                    c = t && t !== "" ? new u.CognitiveSubscriptionKeyAuthentication(t) : new u.CognitiveTokenAuthentication(function() { var n = i.privProperties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token, undefined); return f.PromiseHelper.fromResult(n) }, function() { var n = i.privProperties.getProperty(r.PropertyId.SpeechServiceAuthorization_Token, undefined); return f.PromiseHelper.fromResult(n) });
                this.privAdapter = this.createSynthesisAdapter(c, this.privConnectionFactory, this.audioConfig, s);
                this.privAdapter.audioOutputFormat = h.AudioOutputFormatImpl.fromSpeechSynthesisOutputFormat(r.SpeechSynthesisOutputFormat[this.properties.getProperty(r.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)])
            }, n.prototype.speakImpl = function(n, t, i, u, h) {
                var y = this,
                    p, l, v;
                try {
                    e.Contracts.throwIfDisposed(this.privDisposed);
                    p = f.createNoDashGuid();
                    l = void 0;
                    l = h instanceof r.PushAudioOutputStreamCallback ? new c.PushAudioOutputStreamImpl(h) : h instanceof r.PullAudioOutputStream ? h : h !== undefined ? new s.AudioFileWriter(h) : undefined;
                    this.synthesisRequestQueue.enqueue(new o(p, n, t, function(n) {
                        if (y.privSynthesizing = !1, !!i) try { i(n) } catch (n) {!u || u(n) }
                        i = undefined;
                        y.adapterSpeak()
                    }, function(n) {!u || u(n) }, l));
                    this.adapterSpeak()
                } catch (a) {
                    !u || (a instanceof Error ? (v = a, u(v.name + ": " + v.message)) : u(a));
                    this.dispose(!0)
                }
            }, n.prototype.adapterSpeak = function() { var n = this; if (!this.privDisposed && !this.privSynthesizing) { this.privSynthesizing = !0; return this.synthesisRequestQueue.dequeue().onSuccessContinueWithPromise(function(t) { return n.privAdapter.Speak(t.text, t.isSSML, t.requestId, t.cb, t.err, t.dataStream) }) } return f.PromiseHelper.fromResult(!0) }, n.XMLEncode = function(n) { return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") }, n
        }();
    t.SpeechSynthesizer = l;
    o = function() {
        function n(n, t, i, r, u, f) {
            this.requestId = n;
            this.text = t;
            this.isSSML = i;
            this.cb = r;
            this.err = u;
            this.dataStream = f
        }
        return n
    }();
    t.SynthesisRequest = o
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t, i, r, u) {
            this.privResultId = n;
            this.privReason = t;
            this.privAudioData = i;
            this.privErrorDetails = r;
            this.privProperties = u
        }
        return Object.defineProperty(n.prototype, "resultId", { get: function() { return this.privResultId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "reason", { get: function() { return this.privReason }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "audioData", { get: function() { return this.privAudioData }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "errorDetails", { get: function() { return this.privErrorDetails }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechSynthesisResult = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privResult = n }
        return Object.defineProperty(n.prototype, "result", { get: function() { return this.privResult }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechSynthesisEventArgs = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t, i, r) {
            this.privAduioOffset = n;
            this.privText = t;
            this.privWordLength = i;
            this.privTextOffset = r
        }
        return Object.defineProperty(n.prototype, "audioOffset", { get: function() { return this.privAduioOffset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "text", { get: function() { return this.privText }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "wordLength", { get: function() { return this.privWordLength }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "textOffset", { get: function() { return this.privTextOffset }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechSynthesisWordBoundaryEventArgs = i
}, function(n, t, i) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f, r, e, o, s, h, c, l;
    Object.defineProperty(t, "__esModule", { value: !0 });
    f = i(4);
    r = function(n) {
        function t(t, i, r, u) { u === void 0 && (u = f.EventType.Info); var e = n.call(this, t, u) || this; return e.privRequestId = i, e.privSessionId = r, e }
        return u(t, n), Object.defineProperty(t.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), t
    }(f.PlatformEvent);
    t.SpeechRecognitionEvent = r;
    e = function(n) {
        function t(t, i, r, u) { var f = n.call(this, "RecognitionTriggeredEvent", t, i) || this; return f.privAudioSourceId = r, f.privAudioNodeId = u, f }
        return u(t, n), Object.defineProperty(t.prototype, "audioSourceId", { get: function() { return this.privAudioSourceId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.RecognitionTriggeredEvent = e;
    o = function(n) {
        function t(t, i, r, u) { var f = n.call(this, "ListeningStartedEvent", t, i) || this; return f.privAudioSourceId = r, f.privAudioNodeId = u, f }
        return u(t, n), Object.defineProperty(t.prototype, "audioSourceId", { get: function() { return this.privAudioSourceId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.ListeningStartedEvent = o;
    s = function(n) {
        function t(t, i, r) { var u = n.call(this, "ConnectingToServiceEvent", t, r) || this; return u.privAuthFetchEventid = i, u }
        return u(t, n), Object.defineProperty(t.prototype, "authFetchEventid", { get: function() { return this.privAuthFetchEventid }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.ConnectingToServiceEvent = s;
    h = function(n) {
        function t(t, i, r, u, f) { var e = n.call(this, "RecognitionStartedEvent", t, f) || this; return e.privAudioSourceId = i, e.privAudioNodeId = r, e.privAuthFetchEventId = u, e }
        return u(t, n), Object.defineProperty(t.prototype, "audioSourceId", { get: function() { return this.privAudioSourceId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authFetchEventId", { get: function() { return this.privAuthFetchEventId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.RecognitionStartedEvent = h,
        function(n) {
            n[n.Success = 0] = "Success";
            n[n.AudioSourceError = 1] = "AudioSourceError";
            n[n.AudioSourceTimeout = 2] = "AudioSourceTimeout";
            n[n.AuthTokenFetchError = 3] = "AuthTokenFetchError";
            n[n.AuthTokenFetchTimeout = 4] = "AuthTokenFetchTimeout";
            n[n.UnAuthorized = 5] = "UnAuthorized";
            n[n.ConnectTimeout = 6] = "ConnectTimeout";
            n[n.ConnectError = 7] = "ConnectError";
            n[n.ClientRecognitionActivityTimeout = 8] = "ClientRecognitionActivityTimeout";
            n[n.UnknownError = 9] = "UnknownError"
        }(c = t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}));
    l = function(n) {
        function t(t, i, r, u, e, o, s, h) { var l = n.call(this, "RecognitionEndedEvent", t, e, s === c.Success ? f.EventType.Info : f.EventType.Error) || this; return l.privAudioSourceId = i, l.privAudioNodeId = r, l.privAuthFetchEventId = u, l.privStatus = s, l.privError = h, l.privServiceTag = o, l }
        return u(t, n), Object.defineProperty(t.prototype, "audioSourceId", { get: function() { return this.privAudioSourceId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "authFetchEventId", { get: function() { return this.privAuthFetchEventId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "serviceTag", { get: function() { return this.privServiceTag }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "status", { get: function() { return this.privStatus }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "error", { get: function() { return this.privError }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.RecognitionEndedEvent = l
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = i(2),
        r = i(4),
        u = i(30),
        e = i(25),
        f = i(107),
        s = function() {
            function n(t, i, o, s, h) {
                var c = this;
                if (this.recognizeOverride = undefined, this.disconnectOverride = undefined, this.sendTelemetryData = function() {
                        var t = c.privRequestSession.getTelemetry();
                        if (n.telemetryDataEnabled !== !0 || c.privIsDisposed || null === t) return r.PromiseHelper.fromResult(!0);
                        if (!!n.telemetryData) try { n.telemetryData(t) } catch (i) {}
                        return c.fetchConnection().onSuccessContinueWith(function(n) { return n.send(new f.SpeechConnectionMessage(r.MessageType.Text, "telemetry", c.privRequestSession.requestId, "application/json", t)) })
                    }, this.receiveMessageOverride = undefined, this.receiveMessage = function() {
                        return c.fetchConnection().on(function(n) {
                            return n.read().onSuccessContinueWithPromise(function(n) {
                                var t, s, h, i, o, l, a;
                                if (c.receiveMessageOverride !== undefined) return c.receiveMessageOverride();
                                if (c.privIsDisposed) return r.PromiseHelper.fromResult(undefined);
                                if (!n) return c.privRequestSession.isRecognizing ? c.receiveMessage() : r.PromiseHelper.fromResult(!0);
                                if (c.privServiceHasSentMessage = !0, t = f.SpeechConnectionMessage.fromConnectionMessage(n), t.requestId.toLowerCase() === c.privRequestSession.requestId.toLowerCase()) switch (t.path.toLowerCase()) {
                                    case "turn.start":
                                        c.privMustReportEndOfStream = !0;
                                        c.privRequestSession.onServiceTurnStartResponse();
                                        break;
                                    case "speech.startdetected":
                                        s = e.SpeechDetected.fromJSON(t.textBody);
                                        h = new u.RecognitionEventArgs(s.Offset, c.privRequestSession.sessionId);
                                        !c.privRecognizer.speechStartDetected || c.privRecognizer.speechStartDetected(c.privRecognizer, h);
                                        break;
                                    case "speech.enddetected":
                                        if (i = void 0, i = t.textBody.length > 0 ? t.textBody : "{ Offset: 0 }", o = e.SpeechDetected.fromJSON(i), c.privRecognizerConfig.isContinuousRecognition) c.privRequestSession.onServiceRecognized(o.Offset + c.privRequestSession.currentTurnAudioOffset);
                                        l = new u.RecognitionEventArgs(o.Offset + c.privRequestSession.currentTurnAudioOffset, c.privRequestSession.sessionId);
                                        !c.privRecognizer.speechEndDetected || c.privRecognizer.speechEndDetected(c.privRecognizer, l);
                                        break;
                                    case "turn.end":
                                        c.sendTelemetryData();
                                        c.privRequestSession.isSpeechEnded && c.privMustReportEndOfStream && (c.privMustReportEndOfStream = !1, c.cancelRecognitionLocal(u.CancellationReason.EndOfStream, u.CancellationErrorCode.NoError, undefined));
                                        a = new u.SessionEventArgs(c.privRequestSession.sessionId);
                                        c.privRequestSession.onServiceTurnEndResponse(c.privRecognizerConfig.isContinuousRecognition);
                                        if (c.privRecognizerConfig.isContinuousRecognition && !c.privRequestSession.isSpeechEnded && c.privRequestSession.isRecognizing) c.fetchConnection().onSuccessContinueWith(function(n) {
                                            c.sendSpeechContext(n);
                                            c.sendWaveHeader(n)
                                        });
                                        else return !c.privRecognizer.sessionStopped || c.privRecognizer.sessionStopped(c.privRecognizer, a), r.PromiseHelper.fromResult(!0);
                                        break;
                                    default:
                                        if (!c.processTypeSpecificMessages(t) && !!c.privServiceEvents) c.serviceEvents.onEvent(new r.ServiceEvent(t.path.toLowerCase(), t.textBody))
                                }
                                return c.receiveMessage()
                            })
                        }, function() {})
                    }, this.sendSpeechContext = function(n) { var t = c.speechContext.toJSON(); return t ? n.send(new f.SpeechConnectionMessage(r.MessageType.Text, "speech.context", c.privRequestSession.requestId, "application/json", t)) : r.PromiseHelper.fromResult(!0) }, this.connectImplOverride = undefined, this.configConnectionOverride = undefined, this.fetchConnectionOverride = undefined, this.sendSpeechServiceConfig = function(t, i, u) {
                        if (n.telemetryDataEnabled !== !0) {
                            var e = JSON.parse(u),
                                o = { context: { system: e.context.system } };
                            u = JSON.stringify(o)
                        }
                        return u ? t.send(new f.SpeechConnectionMessage(r.MessageType.Text, "speech.config", i.requestId, "application/json", u)) : r.PromiseHelper.fromResult(!0)
                    }, this.sendAudio = function(n) {
                        return c.audioSource.format.onSuccessContinueWithPromise(function(t) {
                            var i = new r.Deferred,
                                u = Date.now(),
                                o = c.privRecognizerConfig.parameters.getProperty("SPEECH-TransmitLengthBeforThrottleMs", "5000"),
                                s = t.avgBytesPerSec / 1e3 * parseInt(o, 10),
                                h = c.privRequestSession.recogNumber,
                                e = function() {
                                    if (!c.privIsDisposed && !c.privRequestSession.isSpeechEnded && c.privRequestSession.isRecognizing && c.privRequestSession.recogNumber === h) c.fetchConnection().on(function(o) {
                                        n.read().on(function(n) {
                                            if (c.privRequestSession.isSpeechEnded) { i.resolve(!0); return }
                                            var h, l;
                                            if (!n || n.isEnd) h = null, l = 0;
                                            else {
                                                h = n.buffer;
                                                c.privRequestSession.onAudioSent(h.byteLength);
                                                l = s >= c.privRequestSession.bytesSent ? 0 : Math.max(0, u - Date.now())
                                            }
                                            setTimeout(function() {
                                                var s, l;
                                                h !== null && (u = Date.now() + h.byteLength * 1e3 / (t.avgBytesPerSec * 2));
                                                l = o.send(new f.SpeechConnectionMessage(r.MessageType.Binary, "audio", c.privRequestSession.requestId, null, h));
                                                ((s = n) === null || s === void 0 ? void 0 : s.isEnd) ? (c.privRequestSession.onSpeechEnded(), i.resolve(!0)) : l.continueWith(function() { e() })
                                            }, l)
                                        }, function(n) { c.privRequestSession.isSpeechEnded ? i.resolve(!0) : i.reject(n) })
                                    }, function(n) { i.reject(n) })
                                };
                            return e(), i.promise()
                        })
                    }, this.fetchConnection = function() { return c.fetchConnectionOverride !== undefined ? c.fetchConnectionOverride() : c.configureConnection() }, !t) throw new r.ArgumentNullError("authentication");
                if (!i) throw new r.ArgumentNullError("connectionFactory");
                if (!o) throw new r.ArgumentNullError("audioSource");
                if (!s) throw new r.ArgumentNullError("recognizerConfig");
                this.privMustReportEndOfStream = !1;
                this.privAuthentication = t;
                this.privConnectionFactory = i;
                this.privAudioSource = o;
                this.privRecognizerConfig = s;
                this.privIsDisposed = !1;
                this.privRecognizer = h;
                this.privRequestSession = new e.RequestSession(this.privAudioSource.id());
                this.privConnectionEvents = new r.EventSource;
                this.privServiceEvents = new r.EventSource;
                this.privDynamicGrammar = new e.DynamicGrammarBuilder;
                this.privSpeechContext = new e.SpeechContext(this.privDynamicGrammar);
                this.privAgentConfig = new e.AgentConfig
            }
            return Object.defineProperty(n.prototype, "audioSource", { get: function() { return this.privAudioSource }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "speechContext", { get: function() { return this.privSpeechContext }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "dynamicGrammar", { get: function() { return this.privDynamicGrammar }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "agentConfig", { get: function() { return this.privAgentConfig }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "conversationTranslatorToken", { set: function(n) { this.privRecognizerConfig.parameters.setProperty(u.PropertyId.ConversationTranslator_Token, n) }, enumerable: !0, configurable: !0 }), n.prototype.isDisposed = function() { return this.privIsDisposed }, n.prototype.dispose = function(n) { if (this.privIsDisposed = !0, this.privConnectionConfigurationPromise) this.privConnectionConfigurationPromise.onSuccessContinueWith(function(t) { t.dispose(n) }) }, Object.defineProperty(n.prototype, "connectionEvents", { get: function() { return this.privConnectionEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "serviceEvents", { get: function() { return this.privServiceEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "recognitionMode", { get: function() { return this.privRecognizerConfig.recognitionMode }, enumerable: !0, configurable: !0 }), n.prototype.recognize = function(n, t, i) {
                var f = this;
                if (this.recognizeOverride !== undefined) return this.recognizeOverride(n, t, i);
                this.privConnectionConfigurationPromise = null;
                this.privRecognizerConfig.recognitionMode = n;
                this.privSuccessCallback = t;
                this.privErrorCallback = i;
                this.privRequestSession.startNewRecognition();
                this.privRequestSession.listenForServiceTelemetry(this.privAudioSource.events);
                this.connectImpl();
                return this.audioSource.attach(this.privRequestSession.audioNodeId).onSuccessContinueWithPromise(function(n) {
                    var t;
                    return f.audioSource.format.onSuccessContinueWithPromise(function(i) {
                        t = new o.ReplayableAudioNode(n, i.avgBytesPerSec);
                        f.privRequestSession.onAudioSourceAttachCompleted(t, !1);
                        return f.audioSource.deviceInfo.onSuccessContinueWithPromise(function(n) {
                            return f.privRecognizerConfig.SpeechServiceConfig.Context.audio = { source: n }, f.configureConnection().continueWithPromise(function(n) {
                                var i, o, e;
                                if (n.isError) return f.cancelRecognitionLocal(u.CancellationReason.Error, u.CancellationErrorCode.ConnectionFailure, n.error), r.PromiseHelper.fromError(n.error);
                                i = new u.SessionEventArgs(f.privRequestSession.sessionId);
                                !f.privRecognizer.sessionStarted || f.privRecognizer.sessionStarted(f.privRecognizer, i);
                                o = f.receiveMessage();
                                e = f.sendAudio(t);
                                e.on(function() {}, function(n) { f.cancelRecognitionLocal(u.CancellationReason.Error, u.CancellationErrorCode.RuntimeError, n) });
                                return r.PromiseHelper.fromResult(!0)
                            })
                        })
                    })
                })
            }, n.prototype.stopRecognizing = function() { var n = this; if (this.privRequestSession.isRecognizing) { this.audioSource.turnOff(); return this.sendFinalAudio().onSuccessContinueWithPromise(function() { n.privRequestSession.onStopRecognizing(); return n.privRequestSession.turnCompletionPromise.onSuccessContinueWith(function() { return n.privRequestSession.onStopRecognizing(), n.privRequestSession.dispose(), !0 }) }) } return r.PromiseHelper.fromResult(!0) }, n.prototype.connect = function() { this.connectImpl().result() }, n.prototype.connectAsync = function(n, t) { this.connectImpl().continueWith(function(i) { try { i.isError ? !t || t(i.error) : i.isCompleted && (!n || n()) } catch (r) {!t || t(r) } }) }, n.prototype.disconnect = function() {
                if (this.disconnectOverride !== undefined) { this.disconnectOverride(); return }
                if (this.cancelRecognitionLocal(u.CancellationReason.Error, u.CancellationErrorCode.NoError, "Disconnecting"), this.privConnectionPromise.result().isCompleted) this.privConnectionPromise.result().isError || (this.privConnectionPromise.result().result.dispose(), this.privConnectionPromise = null);
                else this.privConnectionPromise.onSuccessContinueWith(function(n) { n.dispose() })
            }, n.prototype.disconnectAsync = function(n, t) {
                try {
                    if (this.disconnectOverride !== undefined) { this.disconnectOverride();!n || n(); return }
                    this.cancelRecognitionLocal(u.CancellationReason.Error, u.CancellationErrorCode.NoError, "Disconnecting");
                    this.privConnectionPromise.continueWith(function(i) { try { i.isError ? !t || t(i.error) : i.isCompleted && (i.result.dispose(), !n || n()) } catch (r) {!t || t(r) } })
                } catch (i) {!t || t(i) }
            }, n.prototype.sendMessage = function() {}, Object.defineProperty(n.prototype, "activityTemplate", { get: function() { return this.privActivityTemplate }, set: function(n) { this.privActivityTemplate = n }, enumerable: !0, configurable: !0 }), n.prototype.cancelRecognitionLocal = function(n, t, i) {!this.privRequestSession.isRecognizing || (this.privRequestSession.onStopRecognizing(), this.cancelRecognition(this.privRequestSession.sessionId, this.privRequestSession.requestId, n, t, i)) }, n.prototype.sendWaveHeader = function(n) { var t = this; return this.audioSource.format.onSuccessContinueWithPromise(function(i) { return n.send(new f.SpeechConnectionMessage(r.MessageType.Binary, "audio", t.privRequestSession.requestId, "audio/x-wav", i.header)) }) }, n.prototype.connectImpl = function(n) {
                var t = this,
                    i;
                if (n === void 0 && (n = !1), this.connectImplOverride !== undefined) return this.connectImplOverride(n);
                if (this.privConnectionPromise) return this.privConnectionPromise.result().isCompleted && (this.privConnectionPromise.result().isError || this.privConnectionPromise.result().result.state() === r.ConnectionState.Disconnected) && this.privServiceHasSentMessage === !0 ? (this.privConnectionId = null, this.privConnectionPromise = null, this.privServiceHasSentMessage = !1, this.connectImpl()) : this.privConnectionPromise;
                this.privAuthFetchEventId = r.createNoDashGuid();
                this.privConnectionId = r.createNoDashGuid();
                this.privRequestSession.onPreConnectionStart(this.privAuthFetchEventId, this.privConnectionId);
                return i = n ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId) : this.privAuthentication.fetch(this.privAuthFetchEventId), this.privConnectionPromise = i.continueWithPromise(function(i) {
                    if (i.isError) { t.privRequestSession.onAuthCompleted(!0, i.error); throw new Error(i.error); } else t.privRequestSession.onAuthCompleted(!1);
                    var f = t.privConnectionFactory.create(t.privRecognizerConfig, i.result, t.privConnectionId);
                    t.privRequestSession.listenForServiceTelemetry(f.events);
                    f.events.attach(function(n) { t.connectionEvents.onEvent(n) });
                    return f.open().onSuccessContinueWithPromise(function(i) {
                        if (i.statusCode === 200) {
                            t.privRequestSession.onPreConnectionStart(t.privAuthFetchEventId, t.privConnectionId);
                            t.privRequestSession.onConnectionEstablishCompleted(i.statusCode);
                            return r.PromiseHelper.fromResult(f)
                        }
                        if (i.statusCode !== 403 || n) { t.privRequestSession.onConnectionEstablishCompleted(i.statusCode, i.reason); return r.PromiseHelper.fromError("Unable to contact server. StatusCode: " + i.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(u.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + i.reason) }
                        return t.connectImpl(!0)
                    })
                }), this.privConnectionPromise
            }, n.prototype.writeBufferToConsole = function(n) {
                var t = "Buffer Size: ",
                    r, i;
                if (null === n) t += "null";
                else
                    for (r = new Uint8Array(n), t += n.byteLength + "\r\n", i = 0; i < n.byteLength; i++) t += r[i].toString(16).padStart(2, "0") + " ";
                console.info(t)
            }, n.prototype.sendFinalAudio = function() {
                var t = this,
                    n = new r.Deferred;
                this.fetchConnection().on(function(i) { i.send(new f.SpeechConnectionMessage(r.MessageType.Binary, "audio", t.privRequestSession.requestId, null, null)).on(function() { n.resolve(!0) }, function(t) { n.reject(t) }) }, function(t) { n.reject(t) });
                return n.promise()
            }, n.prototype.configureConnection = function() { var n = this; return this.configConnectionOverride !== undefined ? this.configConnectionOverride() : this.privConnectionConfigurationPromise ? this.privConnectionConfigurationPromise.result().isCompleted && (this.privConnectionConfigurationPromise.result().isError || this.privConnectionConfigurationPromise.result().result.state() === r.ConnectionState.Disconnected) ? (this.privConnectionConfigurationPromise = null, this.configureConnection()) : this.privConnectionConfigurationPromise : (this.privConnectionConfigurationPromise = this.connectImpl().onSuccessContinueWithPromise(function(t) { return n.sendSpeechServiceConfig(t, n.privRequestSession, n.privRecognizerConfig.SpeechServiceConfig.serialize()).onSuccessContinueWithPromise(function() { return n.sendSpeechContext(t).onSuccessContinueWithPromise(function() { return n.sendWaveHeader(t).onSuccessContinueWith(function() { return t }) }) }) }), this.privConnectionConfigurationPromise) }, n.telemetryDataEnabled = !0, n
        }();
    t.ServiceRecognizerBase = s
}, function(n, t, i) {
    "use strict";
    var h = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = "Path",
        f = "Content-Type",
        e = "X-RequestId",
        o = "X-Timestamp",
        s = "x-streamid",
        c = function(n) {
            function t(t, i, h, c, l, a, v, y) {
                var w = this,
                    p, b;
                if (!i) throw new r.ArgumentNullError("path");
                if (!h) throw new r.ArgumentNullError("requestId");
                if (p = {}, p[u] = i, p[e] = h, p[o] = (new Date).toISOString(), c && (p[f] = c), a && (p[s] = a), v)
                    for (b in v) b && (p[b] = v[b]);
                return w = y ? n.call(this, t, l, p, y) || this : n.call(this, t, l, p) || this, w.privPath = i, w.privRequestId = h, w.privContentType = c, w.privStreamId = a, w.privAdditionalHeaders = v, w
            }
            return h(t, n), Object.defineProperty(t.prototype, "path", { get: function() { return this.privPath }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "contentType", { get: function() { return this.privContentType }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "streamId", { get: function() { return this.privStreamId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "additionalHeaders", { get: function() { return this.privAdditionalHeaders }, enumerable: !0, configurable: !0 }), t.fromConnectionMessage = function(n) {
                var r = null,
                    h = null,
                    c = null,
                    v = null,
                    l = null,
                    a = {},
                    i;
                if (n.headers)
                    for (i in n.headers) i && (i.toLowerCase() === u.toLowerCase() ? r = n.headers[i] : i.toLowerCase() === e.toLowerCase() ? h = n.headers[i] : i.toLowerCase() === o.toLowerCase() ? v = n.headers[i] : i.toLowerCase() === f.toLowerCase() ? c = n.headers[i] : i.toLowerCase() === s.toLowerCase() ? l = n.headers[i] : a[i] = n.headers[i]);
                return new t(n.messageType, r, h, c, n.body, l, a, n.id)
            }, t
        }(r.ConnectionMessage);
    t.SpeechConnectionMessage = c
}, function(n, t) {
    "use strict";
    var i, h, e, r, u, f, o, s, c, l;
    Object.defineProperty(t, "__esModule", { value: !0 }),
        function(n) {
            n[n.Interactive = 0] = "Interactive";
            n[n.Conversation = 1] = "Conversation";
            n[n.Dictation = 2] = "Dictation"
        }(i = t.RecognitionMode || (t.RecognitionMode = {})),
        function(n) {
            n[n.Simple = 0] = "Simple";
            n[n.Detailed = 1] = "Detailed"
        }(h = t.SpeechResultFormat || (t.SpeechResultFormat = {}));
    e = function() {
        function n(n, t) {
            this.privRecognitionMode = i.Interactive;
            this.privSpeechServiceConfig = n ? n : new r(new u(null));
            this.privParameters = t
        }
        return Object.defineProperty(n.prototype, "parameters", { get: function() { return this.privParameters }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "recognitionMode", {
            get: function() { return this.privRecognitionMode },
            set: function(n) {
                this.privRecognitionMode = n;
                this.privRecognitionActivityTimeout = n === i.Interactive ? 8e3 : 25e3;
                this.privSpeechServiceConfig.Recognition = i[n]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "SpeechServiceConfig", { get: function() { return this.privSpeechServiceConfig }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "recognitionActivityTimeout", { get: function() { return this.privRecognitionActivityTimeout }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isContinuousRecognition", { get: function() { return this.privRecognitionMode !== i.Interactive }, enumerable: !0, configurable: !0 }), n
    }();
    t.RecognizerConfig = e;
    r = function() {
        function n(n) {
            var t = this;
            this.serialize = function() { return JSON.stringify(t, function(n, t) { var r, i; if (t && typeof t == "object") { r = {}; for (i in t) Object.hasOwnProperty.call(t, i) && (r[i && i.charAt(0).toLowerCase() + i.substring(1)] = t[i]); return r } return t }) };
            this.context = n
        }
        return Object.defineProperty(n.prototype, "Context", { get: function() { return this.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Recognition", { get: function() { return this.recognition }, set: function(n) { this.recognition = n.toLowerCase() }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechServiceConfig = r;
    u = function() {
        function n(n) {
            this.system = new f;
            this.os = n
        }
        return n
    }();
    t.Context = u;
    f = function() {
        function n() {
            this.name = "SpeechSDK";
            this.version = "1.11.0";
            this.build = "JavaScript";
            this.lang = "JavaScript"
        }
        return n
    }();
    t.System = f;
    o = function() {
        function n(n, t, i) {
            this.platform = n;
            this.name = t;
            this.version = i
        }
        return n
    }();
    t.OS = o;
    s = function() {
        function n(n, t, i) {
            this.manufacturer = n;
            this.model = t;
            this.version = i
        }
        return n
    }();
    t.Device = s,
        function(n) {
            n.Bluetooth = "Bluetooth";
            n.Wired = "Wired";
            n.WiFi = "WiFi";
            n.Cellular = "Cellular";
            n.InBuilt = "InBuilt";
            n.Unknown = "Unknown"
        }(c = t.connectivity || (t.connectivity = {})),
        function(n) {
            n.Phone = "Phone";
            n.Speaker = "Speaker";
            n.Car = "Car";
            n.Headset = "Headset";
            n.Thermostat = "Thermostat";
            n.Microphones = "Microphones";
            n.Deskphone = "Deskphone";
            n.RemoteControl = "RemoteControl";
            n.Unknown = "Unknown";
            n.File = "File";
            n.Stream = "Stream"
        }(l = t.type || (t.type = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = "\r\n",
        f = function() {
            function n() {
                var n = this;
                this.toConnectionMessage = function(t) {
                    var e = new r.Deferred,
                        i, c, f, l, h;
                    try {
                        if (t.messageType === r.MessageType.Text) {
                            var a = t.textContent,
                                o = {},
                                s = null;
                            a && (i = a.split("\r\n\r\n"), i && i.length > 0 && (o = n.parseHeaders(i[0]), i.length > 1 && (s = i[1])));
                            e.resolve(new r.ConnectionMessage(t.messageType, s, o, t.id))
                        } else if (t.messageType === r.MessageType.Binary) {
                            var u = t.binaryContent,
                                o = {},
                                s = null;
                            if (!u || u.byteLength < 2) throw new Error("Invalid binary message format. Header length missing.");
                            if (c = new DataView(u), f = c.getInt16(0), u.byteLength < f + 2) throw new Error("Invalid binary message format. Header content missing.");
                            for (l = "", h = 0; h < f; h++) l += String.fromCharCode(c.getInt8(h + 2));
                            o = n.parseHeaders(l);
                            u.byteLength > f + 2 && (s = u.slice(2 + f));
                            e.resolve(new r.ConnectionMessage(t.messageType, s, o, t.id))
                        }
                    } catch (v) { e.reject("Error formatting the message. Error: " + v) }
                    return e.promise()
                };
                this.fromConnectionMessage = function(t) {
                    var e = new r.Deferred,
                        o, c, i;
                    try {
                        if (t.messageType === r.MessageType.Text) o = "" + n.makeHeaders(t) + u + (t.textBody ? t.textBody : ""), e.resolve(new r.RawWebsocketMessage(r.MessageType.Text, o, t.id));
                        else if (t.messageType === r.MessageType.Binary) {
                            var l = n.makeHeaders(t),
                                s = t.binaryBody,
                                f = new Int8Array(n.stringToArrayBuffer(l)),
                                o = new ArrayBuffer(2 + f.byteLength + (s ? s.byteLength : 0)),
                                h = new DataView(o);
                            for (h.setInt16(0, f.length), i = 0; i < f.byteLength; i++) h.setInt8(2 + i, f[i]);
                            if (s)
                                for (c = new Int8Array(s), i = 0; i < c.byteLength; i++) h.setInt8(2 + f.byteLength + i, c[i]);
                            e.resolve(new r.RawWebsocketMessage(r.MessageType.Binary, o, t.id))
                        }
                    } catch (a) { e.reject("Error formatting the message. " + a) }
                    return e.promise()
                };
                this.makeHeaders = function(n) {
                    var i = "",
                        t;
                    if (n.headers)
                        for (t in n.headers) t && (i += t + ": " + n.headers[t] + u);
                    return i
                };
                this.parseHeaders = function(n) {
                    var u = {},
                        e, r, f, t;
                    if (n && (e = n.match(/[^\r\n]+/g), u))
                        for (r = 0, f = e; r < f.length; r++)
                            if (t = f[r], t) {
                                var i = t.indexOf(":"),
                                    o = i > 0 ? t.substr(0, i).trim().toLowerCase() : t,
                                    s = i > 0 && t.length > i + 1 ? t.substr(i + 1).trim() : "";
                                u[o] = s
                            }
                    return u
                };
                this.stringToArrayBuffer = function(n) { for (var i = new ArrayBuffer(n.length), r = new DataView(i), t = 0; t < n.length; t++) r.setUint8(t, n.charCodeAt(t)); return i }
            }
            return n
        }();
    t.WebsocketMessageFormatter = f
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(2),
        r = i(30),
        e = i(65),
        o = i(25),
        s = i(66),
        h = "X-ConnectionId",
        c = function(n) {
            function t() {
                var t = n !== null && n.apply(this, arguments) || this;
                return t.create = function(n, i, f) {
                    var e = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint, undefined),
                        c, v, y, l;
                    if (!e) {
                        var a = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Region, undefined),
                            p = a && a.toLowerCase().startsWith("china") ? ".azure.cn" : ".microsoft.com",
                            w = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Host, "wss://" + a + ".s2s.speech" + p);
                        e = w + "/speech/translation/cognitiveservices/v1"
                    }
                    return c = { from: n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage), to: n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_TranslationToLanguages) }, t.setCommonUrlParams(n, c, e), t.setUrlParameter(r.PropertyId.SpeechServiceResponse_TranslationRequestStablePartialResult, s.QueryParameterNames.StableTranslation, n, c, e), v = "voice", y = "features", n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) !== undefined && (c[v] = n.parameters.getProperty(r.PropertyId.SpeechServiceConnection_TranslationVoice), c[y] = "texttospeech"), l = {}, i.token !== undefined && i.token !== "" && (l[i.headerName] = i.token), l[h] = f, n.parameters.setProperty(r.PropertyId.SpeechServiceConnection_Url, e), new u.WebsocketConnection(e, c, l, new o.WebsocketMessageFormatter, u.ProxyInfo.fromRecognizerConfig(n), f)
                }, t
            }
            return f(t, n), t
        }(e.ConnectionFactoryBase);
    t.TranslationConnectionFactory = c
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(2),
        r = i(30),
        f = i(25),
        e = i(66),
        o = function() {
            function n() {
                var n = this;
                this.synthesisUri = "/cognitiveservices/websocket/v1";
                this.create = function(t, i, o) {
                    var s = t.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint, undefined),
                        c = t.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Region, undefined),
                        l = c && c.toLowerCase().startsWith("china") ? ".azure.cn" : ".microsoft.com",
                        a = t.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Host, "wss://" + c + ".tts.speech" + l),
                        h;
                    return s || (s = a + n.synthesisUri), h = {}, i.token !== undefined && i.token !== "" && (h[i.headerName] = i.token), h[e.QueryParameterNames.ConnectionIdHeader] = o, t.parameters.setProperty(r.PropertyId.SpeechServiceConnection_Url, s), u.WebsocketMessageAdapter.forceNpmWebSocket = !0, new u.WebsocketConnection(s, {}, h, new f.WebsocketMessageFormatter, u.ProxyInfo.fromParameters(t.parameters), o)
                }
            }
            return n
        }();
    t.SpeechSynthesisConnectionFactory = o
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(30),
        r = i(25),
        f = function() {
            function n() {}
            return n.implTranslateRecognitionResult = function(n) {
                var t = u.ResultReason.Canceled;
                switch (n) {
                    case r.RecognitionStatus.Success:
                        t = u.ResultReason.RecognizedSpeech;
                        break;
                    case r.RecognitionStatus.NoMatch:
                    case r.RecognitionStatus.InitialSilenceTimeout:
                    case r.RecognitionStatus.BabbleTimeout:
                    case r.RecognitionStatus.EndOfDictation:
                        t = u.ResultReason.NoMatch;
                        break;
                    case r.RecognitionStatus.Error:
                    default:
                        t = u.ResultReason.Canceled
                }
                return t
            }, n.implTranslateCancelResult = function(n) {
                var t = u.CancellationReason.EndOfStream;
                switch (n) {
                    case r.RecognitionStatus.Success:
                    case r.RecognitionStatus.EndOfDictation:
                    case r.RecognitionStatus.NoMatch:
                        t = u.CancellationReason.EndOfStream;
                        break;
                    case r.RecognitionStatus.InitialSilenceTimeout:
                    case r.RecognitionStatus.BabbleTimeout:
                    case r.RecognitionStatus.Error:
                    default:
                        t = u.CancellationReason.Error
                }
                return t
            }, n.implTranslateCancelErrorCode = function(n) {
                var t = u.CancellationErrorCode.NoError;
                switch (n) {
                    case r.RecognitionStatus.Error:
                        t = u.CancellationErrorCode.ServiceError;
                        break;
                    case r.RecognitionStatus.TooManyRequests:
                        t = u.CancellationErrorCode.TooManyRequests;
                        break;
                    default:
                        t = u.CancellationErrorCode.NoError
                }
                return t
            }, n
        }();
    t.EnumTranslation = f
}, function(n, t) {
    "use strict";
    var i, r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
        function(n) {
            n[n.Success = 0] = "Success";
            n[n.SynthesisEnd = 1] = "SynthesisEnd";
            n[n.Error = 2] = "Error"
        }(i = t.SynthesisStatus || (t.SynthesisStatus = {})),
        function(n) {
            n[n.Success = 0] = "Success";
            n[n.NoMatch = 1] = "NoMatch";
            n[n.InitialSilenceTimeout = 2] = "InitialSilenceTimeout";
            n[n.BabbleTimeout = 3] = "BabbleTimeout";
            n[n.Error = 4] = "Error";
            n[n.EndOfDictation = 5] = "EndOfDictation";
            n[n.TooManyRequests = 6] = "TooManyRequests"
        }(r = t.RecognitionStatus || (t.RecognitionStatus = {}))
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        u = function() {
            function n(n) {
                this.privSynthesisEnd = JSON.parse(n);
                this.privSynthesisEnd.SynthesisStatus = r.SynthesisStatus[this.privSynthesisEnd.SynthesisStatus]
            }
            return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "SynthesisStatus", { get: function() { return this.privSynthesisEnd.SynthesisStatus }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "FailureReason", { get: function() { return this.privSynthesisEnd.FailureReason }, enumerable: !0, configurable: !0 }), n
        }();
    t.TranslationSynthesisEnd = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(21),
        u = function() {
            function n(n) {
                this.privTranslationHypothesis = JSON.parse(n);
                this.privTranslationHypothesis.Translation.TranslationStatus = r.TranslationStatus[this.privTranslationHypothesis.Translation.TranslationStatus]
            }
            return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "Duration", { get: function() { return this.privTranslationHypothesis.Duration }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privTranslationHypothesis.Offset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Text", { get: function() { return this.privTranslationHypothesis.Text }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Translation", { get: function() { return this.privTranslationHypothesis.Translation }, enumerable: !0, configurable: !0 }), n
        }();
    t.TranslationHypothesis = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        u = i(21),
        f = function() {
            function n(n) {
                this.privTranslationPhrase = JSON.parse(n);
                this.privTranslationPhrase.RecognitionStatus = r.RecognitionStatus[this.privTranslationPhrase.RecognitionStatus];
                this.privTranslationPhrase.Translation !== undefined && (this.privTranslationPhrase.Translation.TranslationStatus = u.TranslationStatus[this.privTranslationPhrase.Translation.TranslationStatus])
            }
            return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "RecognitionStatus", { get: function() { return this.privTranslationPhrase.RecognitionStatus }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privTranslationPhrase.Offset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Duration", { get: function() { return this.privTranslationPhrase.Duration }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Text", { get: function() { return this.privTranslationPhrase.Text }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Translation", { get: function() { return this.privTranslationPhrase.Translation }, enumerable: !0, configurable: !0 }), n
        }();
    t.TranslationPhrase = f
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(4),
        r = i(30),
        u = i(25),
        o = function(n) {
            function t(t, i, r, u, f) { var e = n.call(this, t, i, r, u, f) || this; return e.privTranslationRecognizer = f, e }
            return e(t, n), t.prototype.processTypeSpecificMessages = function(n) {
                var e = new r.PropertyCollection,
                    i = !1,
                    h, t, c, o, s, v, y, l, p, w, b;
                n.messageType === f.MessageType.Text && e.setProperty(r.PropertyId.SpeechServiceResponse_JsonResult, n.textBody);
                switch (n.path.toLowerCase()) {
                    case "translation.hypothesis":
                        h = this.fireEventForResult(u.TranslationHypothesis.fromJSON(n.textBody), e);
                        this.privRequestSession.onHypothesis(this.privRequestSession.currentTurnAudioOffset + h.offset);
                        if (!!this.privTranslationRecognizer.recognizing) try { this.privTranslationRecognizer.recognizing(this.privTranslationRecognizer, h) } catch (k) {}
                        i = !0;
                        break;
                    case "translation.phrase":
                        t = u.TranslationPhrase.fromJSON(n.textBody);
                        this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + t.Offset + t.Duration);
                        if (t.RecognitionStatus === u.RecognitionStatus.Success) {
                            if (c = this.fireEventForResult(t, e), !!this.privTranslationRecognizer.recognized) try { this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, c) } catch (k) {}
                            if (!!this.privSuccessCallback) {
                                try { this.privSuccessCallback(c.result) } catch (a) {!this.privErrorCallback || this.privErrorCallback(a) }
                                this.privSuccessCallback = undefined;
                                this.privErrorCallback = undefined
                            }
                            break
                        } else if (o = u.EnumTranslation.implTranslateRecognitionResult(t.RecognitionStatus), s = new r.TranslationRecognitionResult(undefined, this.privRequestSession.requestId, o, t.Text, t.Duration, this.privRequestSession.currentTurnAudioOffset + t.Offset, undefined, n.textBody, e), o === r.ResultReason.Canceled) v = u.EnumTranslation.implTranslateCancelResult(t.RecognitionStatus), this.cancelRecognitionLocal(v, u.EnumTranslation.implTranslateCancelErrorCode(t.RecognitionStatus), undefined);
                        else {
                            if (!(this.privRequestSession.isSpeechEnded && o === r.ResultReason.NoMatch && t.RecognitionStatus !== u.RecognitionStatus.InitialSilenceTimeout) && (y = new r.TranslationRecognitionEventArgs(s, s.offset, this.privRequestSession.sessionId), !!this.privTranslationRecognizer.recognized)) try { this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, y) } catch (k) {}
                            if (!!this.privSuccessCallback) {
                                try { this.privSuccessCallback(s) } catch (a) {!this.privErrorCallback || this.privErrorCallback(a) }
                                this.privSuccessCallback = undefined;
                                this.privErrorCallback = undefined
                            }
                        }
                        i = !0;
                        break;
                    case "translation.synthesis":
                        this.sendSynthesisAudio(n.binaryBody, this.privRequestSession.sessionId);
                        i = !0;
                        break;
                    case "translation.synthesis.end":
                        l = u.TranslationSynthesisEnd.fromJSON(n.textBody);
                        switch (l.SynthesisStatus) {
                            case u.SynthesisStatus.Error:
                                if (!!this.privTranslationRecognizer.synthesizing) {
                                    p = new r.TranslationSynthesisResult(r.ResultReason.Canceled, undefined);
                                    w = new r.TranslationSynthesisEventArgs(p, this.privRequestSession.sessionId);
                                    try { this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, w) } catch (k) {}
                                }
                                if (!!this.privTranslationRecognizer.canceled) { b = new r.TranslationRecognitionCanceledEventArgs(this.privRequestSession.sessionId, r.CancellationReason.Error, l.FailureReason, r.CancellationErrorCode.ServiceError, null); try { this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, b) } catch (k) {} }
                                break;
                            case u.SynthesisStatus.Success:
                                this.sendSynthesisAudio(undefined, this.privRequestSession.sessionId)
                        }
                        i = !0
                }
                return i
            }, t.prototype.cancelRecognition = function(n, t, i, f, e) {
                var o = new r.PropertyCollection,
                    s, h;
                if (o.setProperty(u.CancellationErrorCodePropertyName, r.CancellationErrorCode[f]), !!this.privTranslationRecognizer.canceled) { s = new r.TranslationRecognitionCanceledEventArgs(n, i, e, f, undefined); try { this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, s) } catch (c) {} }
                if (!!this.privSuccessCallback) {
                    h = new r.TranslationRecognitionResult(undefined, t, r.ResultReason.Canceled, undefined, undefined, undefined, e, undefined, o);
                    try {
                        this.privSuccessCallback(h);
                        this.privSuccessCallback = undefined
                    } catch (l) {}
                }
            }, t.prototype.fireEventForResult = function(n, t) {
                var e, i, o, s, h;
                if (undefined !== n.Translation.Translations)
                    for (e = new r.Translations, i = 0, o = n.Translation.Translations; i < o.length; i++) s = o[i], e.set(s.Language, s.Text);
                h = n instanceof u.TranslationPhrase ? n.Translation.TranslationStatus === f.TranslationStatus.Success ? r.ResultReason.TranslatedSpeech : r.ResultReason.RecognizedSpeech : r.ResultReason.TranslatingSpeech;
                var c = n.Offset + this.privRequestSession.currentTurnAudioOffset,
                    l = new r.TranslationRecognitionResult(e, this.privRequestSession.requestId, h, n.Text, n.Duration, c, n.Translation.FailureReason, JSON.stringify(n), t);
                return new r.TranslationRecognitionEventArgs(l, c, this.privRequestSession.sessionId)
            }, t.prototype.sendSynthesisAudio = function(n, t) {
                var i = undefined === n ? r.ResultReason.SynthesizingAudioCompleted : r.ResultReason.SynthesizingAudio,
                    u = new r.TranslationSynthesisResult(i, n),
                    f = new r.TranslationSynthesisEventArgs(u, t);
                if (!!this.privTranslationRecognizer.synthesizing) try { this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, f) } catch (e) {}
            }, t
        }(u.ServiceRecognizerBase);
    t.TranslationServiceRecognizer = o
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privSpeechStartDetected = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privSpeechStartDetected.Offset }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechDetected = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privSpeechHypothesis = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "Text", { get: function() { return this.privSpeechHypothesis.Text }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privSpeechHypothesis.Offset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Duration", { get: function() { return this.privSpeechHypothesis.Duration }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechHypothesis = i
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(30),
        u = i(25),
        e = function(n) {
            function t(t, i, r, u, f) { var e = n.call(this, t, i, r, u, f) || this; return e.privSpeechRecognizer = f, e }
            return f(t, n), t.prototype.processTypeSpecificMessages = function(n) {
                var i, s = new r.PropertyCollection,
                    h, f, c, l, t, e, a, o, v;
                s.setProperty(r.PropertyId.SpeechServiceResponse_JsonResult, n.textBody);
                h = !1;
                switch (n.path.toLowerCase()) {
                    case "speech.hypothesis":
                    case "speech.fragment":
                        f = u.SpeechHypothesis.fromJSON(n.textBody);
                        c = f.Offset + this.privRequestSession.currentTurnAudioOffset;
                        i = new r.SpeechRecognitionResult(this.privRequestSession.requestId, r.ResultReason.RecognizingSpeech, f.Text, f.Duration, c, undefined, n.textBody, s);
                        this.privRequestSession.onHypothesis(c);
                        if (l = new r.SpeechRecognitionEventArgs(i, f.Duration, this.privRequestSession.sessionId), !!this.privSpeechRecognizer.recognizing) try { this.privSpeechRecognizer.recognizing(this.privSpeechRecognizer, l) } catch (p) {}
                        h = !0;
                        break;
                    case "speech.phrase":
                        t = u.SimpleSpeechPhrase.fromJSON(n.textBody);
                        e = u.EnumTranslation.implTranslateRecognitionResult(t.RecognitionStatus);
                        this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + t.Offset + t.Duration);
                        if (r.ResultReason.Canceled === e) a = u.EnumTranslation.implTranslateCancelResult(t.RecognitionStatus), this.cancelRecognitionLocal(a, u.EnumTranslation.implTranslateCancelErrorCode(t.RecognitionStatus), undefined);
                        else {
                            if (!(this.privRequestSession.isSpeechEnded && e === r.ResultReason.NoMatch && t.RecognitionStatus !== u.RecognitionStatus.InitialSilenceTimeout) && (this.privRecognizerConfig.parameters.getProperty(u.OutputFormatPropertyName) === r.OutputFormat[r.OutputFormat.Simple] ? i = new r.SpeechRecognitionResult(this.privRequestSession.requestId, e, t.DisplayText, t.Duration, t.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, n.textBody, s) : (o = u.DetailedSpeechPhrase.fromJSON(n.textBody), i = new r.SpeechRecognitionResult(this.privRequestSession.requestId, e, o.RecognitionStatus === u.RecognitionStatus.Success ? o.NBest[0].Display : undefined, o.Duration, o.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, n.textBody, s)), v = new r.SpeechRecognitionEventArgs(i, i.offset, this.privRequestSession.sessionId), !!this.privSpeechRecognizer.recognized)) try { this.privSpeechRecognizer.recognized(this.privSpeechRecognizer, v) } catch (p) {}
                            if (!!this.privSuccessCallback) {
                                try { this.privSuccessCallback(i) } catch (y) {!this.privErrorCallback || this.privErrorCallback(y) }
                                this.privSuccessCallback = undefined;
                                this.privErrorCallback = undefined
                            }
                        }
                        h = !0
                }
                return h
            }, t.prototype.cancelRecognition = function(n, t, i, f, e) {
                var o = new r.PropertyCollection,
                    s, h;
                if (o.setProperty(u.CancellationErrorCodePropertyName, r.CancellationErrorCode[f]), !!this.privSpeechRecognizer.canceled) { s = new r.SpeechRecognitionCanceledEventArgs(i, e, f, undefined, n); try { this.privSpeechRecognizer.canceled(this.privSpeechRecognizer, s) } catch (c) {} }
                if (!!this.privSuccessCallback) {
                    h = new r.SpeechRecognitionResult(t, r.ResultReason.Canceled, undefined, undefined, undefined, e, undefined, o);
                    try {
                        this.privSuccessCallback(h);
                        this.privSuccessCallback = undefined
                    } catch (l) {}
                }
            }, t
        }(u.ServiceRecognizerBase);
    t.SpeechServiceRecognizer = e
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        u = function() {
            function n(n) {
                this.privDetailedSpeechPhrase = JSON.parse(n);
                this.privDetailedSpeechPhrase.RecognitionStatus = r.RecognitionStatus[this.privDetailedSpeechPhrase.RecognitionStatus]
            }
            return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "RecognitionStatus", { get: function() { return this.privDetailedSpeechPhrase.RecognitionStatus }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "NBest", { get: function() { return this.privDetailedSpeechPhrase.NBest }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Duration", { get: function() { return this.privDetailedSpeechPhrase.Duration }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privDetailedSpeechPhrase.Offset }, enumerable: !0, configurable: !0 }), n
        }();
    t.DetailedSpeechPhrase = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(25),
        u = function() {
            function n(n) {
                this.privSimpleSpeechPhrase = JSON.parse(n);
                this.privSimpleSpeechPhrase.RecognitionStatus = r.RecognitionStatus[this.privSimpleSpeechPhrase.RecognitionStatus]
            }
            return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "RecognitionStatus", { get: function() { return this.privSimpleSpeechPhrase.RecognitionStatus }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "DisplayText", { get: function() { return this.privSimpleSpeechPhrase.DisplayText }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Offset", { get: function() { return this.privSimpleSpeechPhrase.Offset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Duration", { get: function() { return this.privSimpleSpeechPhrase.Duration }, enumerable: !0, configurable: !0 }), n
        }();
    t.SimpleSpeechPhrase = u
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            this.modelImpl = n;
            this.intentName = t
        }
        return n
    }();
    t.AddedLmIntent = i
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(4),
        r = i(30),
        u = i(25),
        o = function(n) {
            function t(t, i, r, u, f) { var e = n.call(this, t, i, r, u, f) || this; return e.privIntentRecognizer = f, e.privIntentDataSent = !1, e }
            return f(t, n), t.prototype.setIntents = function(n, t) {
                this.privAddedLmIntents = n;
                this.privUmbrellaIntent = t;
                this.privIntentDataSent = !0
            }, t.prototype.processTypeSpecificMessages = function(n) {
                var i = this,
                    f, t, c = !1,
                    a = new r.PropertyCollection,
                    o, s, w, l, h, v, y, p;
                n.messageType === e.MessageType.Text && a.setProperty(r.PropertyId.SpeechServiceResponse_JsonResult, n.textBody);
                switch (n.path.toLowerCase()) {
                    case "speech.hypothesis":
                        o = u.SpeechHypothesis.fromJSON(n.textBody);
                        f = new r.IntentRecognitionResult(undefined, this.privRequestSession.requestId, r.ResultReason.RecognizingIntent, o.Text, o.Duration, o.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, n.textBody, a);
                        this.privRequestSession.onHypothesis(f.offset);
                        if (t = new r.IntentRecognitionEventArgs(f, o.Offset + this.privRequestSession.currentTurnAudioOffset, this.privRequestSession.sessionId), !!this.privIntentRecognizer.recognizing) try { this.privIntentRecognizer.recognizing(this.privIntentRecognizer, t) } catch (k) {}
                        c = !0;
                        break;
                    case "speech.phrase":
                        if (s = u.SimpleSpeechPhrase.fromJSON(n.textBody), f = new r.IntentRecognitionResult(undefined, this.privRequestSession.requestId, u.EnumTranslation.implTranslateRecognitionResult(s.RecognitionStatus), s.DisplayText, s.Duration, s.Offset + this.privRequestSession.currentTurnAudioOffset, undefined, n.textBody, a), t = new r.IntentRecognitionEventArgs(f, f.offset, this.privRequestSession.sessionId), w = function() {
                                if (!!i.privIntentRecognizer.recognized) try { i.privIntentRecognizer.recognized(i.privIntentRecognizer, t) } catch (r) {}
                                if (!!i.privSuccessCallback) {
                                    try { i.privSuccessCallback(f) } catch (n) {!i.privErrorCallback || i.privErrorCallback(n) }
                                    i.privSuccessCallback = undefined;
                                    i.privErrorCallback = undefined
                                }
                            }, !1 === this.privIntentDataSent || r.ResultReason.NoMatch === t.result.reason) {
                            this.privRequestSession.onPhraseRecognized(t.offset + t.result.duration);
                            w()
                        } else this.privPendingIntentArgs = t;
                        c = !0;
                        break;
                    case "response":
                        if (t = this.privPendingIntentArgs, this.privPendingIntentArgs = undefined, undefined === t) {
                            if ("" === n.textBody) return;
                            t = new r.IntentRecognitionEventArgs(new r.IntentRecognitionResult, 0, this.privRequestSession.sessionId)
                        }
                        l = u.IntentResponse.fromJSON(n.textBody);
                        h = this.privAddedLmIntents[l.topScoringIntent.intent];
                        this.privUmbrellaIntent !== undefined && (h = this.privUmbrellaIntent);
                        null !== l && h !== undefined && (v = h.intentName === undefined ? l.topScoringIntent.intent : h.intentName, y = t.result.reason, undefined !== v && (y = r.ResultReason.RecognizedIntent), p = undefined !== t.result.properties ? t.result.properties : new r.PropertyCollection, p.setProperty(r.PropertyId.LanguageUnderstandingServiceResponse_JsonResult, n.textBody), t = new r.IntentRecognitionEventArgs(new r.IntentRecognitionResult(v, t.result.resultId, y, t.result.text, t.result.duration, t.result.offset, t.result.errorDetails, t.result.json, p), t.offset, t.sessionId));
                        this.privRequestSession.onPhraseRecognized(t.offset + t.result.duration);
                        if (!!this.privIntentRecognizer.recognized) try { this.privIntentRecognizer.recognized(this.privIntentRecognizer, t) } catch (k) {}
                        if (!!this.privSuccessCallback) {
                            try { this.privSuccessCallback(t.result) } catch (b) {!this.privErrorCallback || this.privErrorCallback(b) }
                            this.privSuccessCallback = undefined;
                            this.privErrorCallback = undefined
                        }
                        c = !0
                }
                return c
            }, t.prototype.cancelRecognition = function(n, t, i, f, e) {
                var o = new r.PropertyCollection,
                    s, h;
                if (o.setProperty(u.CancellationErrorCodePropertyName, r.CancellationErrorCode[f]), !!this.privIntentRecognizer.canceled) { s = new r.IntentRecognitionCanceledEventArgs(i, e, f, undefined, undefined, n); try { this.privIntentRecognizer.canceled(this.privIntentRecognizer, s) } catch (c) {} }
                if (!!this.privSuccessCallback) {
                    h = new r.IntentRecognitionResult(undefined, t, r.ResultReason.Canceled, undefined, undefined, undefined, e, undefined, o);
                    try {
                        this.privSuccessCallback(h);
                        this.privSuccessCallback = undefined
                    } catch (l) {}
                }
            }, t
        }(u.ServiceRecognizerBase);
    t.IntentServiceRecognizer = o
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privIntentResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "query", { get: function() { return this.privIntentResponse.query }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "topScoringIntent", { get: function() { return this.privIntentResponse.topScoringIntent }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "entities", { get: function() { return this.privIntentResponse.entities }, enumerable: !0, configurable: !0 }), n
    }();
    t.IntentResponse = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(105),
        f = i(127),
        e = function() {
            function n(n) {
                var t = this;
                this.privIsDisposed = !1;
                this.privDetachables = [];
                this.privIsAudioNodeDetached = !1;
                this.privIsRecognizing = !1;
                this.privIsSpeechEnded = !1;
                this.privTurnStartAudioOffset = 0;
                this.privLastRecoOffset = 0;
                this.privHypothesisReceived = !1;
                this.privBytesSent = 0;
                this.privRecogNumber = 0;
                this.onAudioSourceAttachCompleted = function(n, i) {
                    if (t.privAudioNode = n, t.privIsAudioNodeDetached = !1, i) t.onComplete();
                    else t.onEvent(new u.ListeningStartedEvent(t.privRequestId, t.privSessionId, t.privAudioSourceId, t.privAudioNodeId))
                };
                this.onPreConnectionStart = function(n, i) {
                    t.privAuthFetchEventId = n;
                    t.privSessionId = i;
                    t.onEvent(new u.ConnectingToServiceEvent(t.privRequestId, t.privAuthFetchEventId, t.privSessionId))
                };
                this.onAuthCompleted = function(n) { n && t.onComplete() };
                this.onConnectionEstablishCompleted = function(n) {
                    if (n === 200) {
                        t.onEvent(new u.RecognitionStartedEvent(t.requestId, t.privAudioSourceId, t.privAudioNodeId, t.privAuthFetchEventId, t.privSessionId));
                        !t.privAudioNode || t.privAudioNode.replay();
                        t.privTurnStartAudioOffset = t.privLastRecoOffset;
                        t.privBytesSent = 0;
                        return
                    }
                    n === 403 && t.onComplete()
                };
                this.onServiceTurnEndResponse = function(n) { t.privTurnDeferral.resolve(!0);!n || t.isSpeechEnded ? t.onComplete() : (t.privTurnStartAudioOffset = t.privLastRecoOffset, t.privRequestId = r.createNoDashGuid(), t.privAudioNode.replay()) };
                this.onServiceTurnStartResponse = function() {
                    t.privTurnDeferral.state() === r.PromiseState.None && t.privTurnDeferral.reject("Another turn started before current completed.");
                    t.privTurnDeferral = new r.Deferred
                };
                this.dispose = function() {
                    var n, i, r;
                    if (!t.privIsDisposed) {
                        for (t.privIsDisposed = !0, n = 0, i = t.privDetachables; n < i.length; n++) r = i[n], r.detach();
                        t.privServiceTelemetryListener.dispose()
                    }
                };
                this.getTelemetry = function() { return t.privServiceTelemetryListener.hasTelemetry ? t.privServiceTelemetryListener.getTelemetry() : null };
                this.onEvent = function(n) {
                    if (!!t.privServiceTelemetryListener) t.privServiceTelemetryListener.onEvent(n);
                    r.Events.instance.onEvent(n)
                };
                this.onComplete = function() {!t.privIsRecognizing || (t.privIsRecognizing = !1, t.detachAudioNode()) };
                this.detachAudioNode = function() { t.privIsAudioNodeDetached || (t.privIsAudioNodeDetached = !0, t.privAudioNode && t.privAudioNode.detach()) };
                this.privAudioSourceId = n;
                this.privRequestId = r.createNoDashGuid();
                this.privAudioNodeId = r.createNoDashGuid();
                this.privTurnDeferral = new r.Deferred;
                this.privTurnDeferral.resolve(!0)
            }
            return Object.defineProperty(n.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "audioNodeId", { get: function() { return this.privAudioNodeId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "turnCompletionPromise", { get: function() { return this.privTurnDeferral.promise() }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isSpeechEnded", { get: function() { return this.privIsSpeechEnded }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isRecognizing", { get: function() { return this.privIsRecognizing }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "currentTurnAudioOffset", { get: function() { return this.privTurnStartAudioOffset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "recogNumber", { get: function() { return this.privRecogNumber }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "bytesSent", { get: function() { return this.privBytesSent }, enumerable: !0, configurable: !0 }), n.prototype.listenForServiceTelemetry = function(n) {!this.privServiceTelemetryListener || this.privDetachables.push(n.attachListener(this.privServiceTelemetryListener)) }, n.prototype.startNewRecognition = function() {
                this.privIsSpeechEnded = !1;
                this.privIsRecognizing = !0;
                this.privTurnStartAudioOffset = 0;
                this.privLastRecoOffset = 0;
                this.privRequestId = r.createNoDashGuid();
                this.privRecogNumber++;
                this.privServiceTelemetryListener = new f.ServiceTelemetryListener(this.privRequestId, this.privAudioSourceId, this.privAudioNodeId);
                this.onEvent(new u.RecognitionTriggeredEvent(this.requestId, this.privSessionId, this.privAudioSourceId, this.privAudioNodeId))
            }, n.prototype.onHypothesis = function(n) { this.privHypothesisReceived || (this.privHypothesisReceived = !0, this.privServiceTelemetryListener.hypothesisReceived(this.privAudioNode.findTimeAtOffset(n))) }, n.prototype.onPhraseRecognized = function(n) {
                this.privServiceTelemetryListener.phraseReceived(this.privAudioNode.findTimeAtOffset(n));
                this.onServiceRecognized(n)
            }, n.prototype.onServiceRecognized = function(n) {
                this.privLastRecoOffset = n;
                this.privHypothesisReceived = !1;
                this.privAudioNode.shrinkBuffers(n)
            }, n.prototype.onAudioSent = function(n) { this.privBytesSent += n }, n.prototype.onStopRecognizing = function() { this.onComplete() }, n.prototype.onSpeechEnded = function() { this.privIsSpeechEnded = !0 }, n
        }();
    t.RequestSession = e
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(105),
        f = function() {
            function n(n, t, i) {
                var f = this;
                this.privIsDisposed = !1;
                this.privListeningTriggerMetric = null;
                this.privMicMetric = null;
                this.privConnectionEstablishMetric = null;
                this.onEvent = function(n) { f.privIsDisposed || (n instanceof u.RecognitionTriggeredEvent && n.requestId === f.privRequestId && (f.privListeningTriggerMetric = { End: n.eventTime, Name: "ListeningTrigger", Start: n.eventTime }), n instanceof r.AudioStreamNodeAttachingEvent && n.audioSourceId === f.privAudioSourceId && n.audioNodeId === f.privAudioNodeId && (f.privMicStartTime = n.eventTime), n instanceof r.AudioStreamNodeAttachedEvent && n.audioSourceId === f.privAudioSourceId && n.audioNodeId === f.privAudioNodeId && (f.privMicStartTime = n.eventTime), n instanceof r.AudioSourceErrorEvent && n.audioSourceId === f.privAudioSourceId && (f.privMicMetric || (f.privMicMetric = { End: n.eventTime, Error: n.error, Name: "Microphone", Start: f.privMicStartTime })), n instanceof r.AudioStreamNodeErrorEvent && n.audioSourceId === f.privAudioSourceId && n.audioNodeId === f.privAudioNodeId && (f.privMicMetric || (f.privMicMetric = { End: n.eventTime, Error: n.error, Name: "Microphone", Start: f.privMicStartTime })), n instanceof r.AudioStreamNodeDetachedEvent && n.audioSourceId === f.privAudioSourceId && n.audioNodeId === f.privAudioNodeId && (f.privMicMetric || (f.privMicMetric = { End: n.eventTime, Name: "Microphone", Start: f.privMicStartTime })), n instanceof u.ConnectingToServiceEvent && n.requestId === f.privRequestId && (f.privConnectionId = n.sessionId), n instanceof r.ConnectionStartEvent && n.connectionId === f.privConnectionId && (f.privConnectionStartTime = n.eventTime), n instanceof r.ConnectionEstablishedEvent && n.connectionId === f.privConnectionId && (f.privConnectionEstablishMetric || (f.privConnectionEstablishMetric = { End: n.eventTime, Id: f.privConnectionId, Name: "Connection", Start: f.privConnectionStartTime })), n instanceof r.ConnectionEstablishErrorEvent && n.connectionId === f.privConnectionId && (f.privConnectionEstablishMetric || (f.privConnectionEstablishMetric = { End: n.eventTime, Error: f.getConnectionError(n.statusCode), Id: f.privConnectionId, Name: "Connection", Start: f.privConnectionStartTime })), n instanceof r.ConnectionMessageReceivedEvent && n.connectionId === f.privConnectionId && n.message && n.message.headers && n.message.headers.path && (f.privReceivedMessages[n.message.headers.path] || (f.privReceivedMessages[n.message.headers.path] = []), f.privReceivedMessages[n.message.headers.path].push(n.networkReceivedTime))) };
                this.getTelemetry = function() {
                    var n = [],
                        t, i;
                    return f.privListeningTriggerMetric && n.push(f.privListeningTriggerMetric), f.privMicMetric && n.push(f.privMicMetric), f.privConnectionEstablishMetric && n.push(f.privConnectionEstablishMetric), f.privPhraseLatencies.length > 0 && n.push({ PhraseLatencyMs: f.privPhraseLatencies }), f.privHypothesisLatencies.length > 0 && n.push({ FirstHypothesisLatencyMs: f.privHypothesisLatencies }), t = { Metrics: n, ReceivedMessages: f.privReceivedMessages }, i = JSON.stringify(t), f.privReceivedMessages = {}, f.privListeningTriggerMetric = null, f.privMicMetric = null, f.privConnectionEstablishMetric = null, f.privPhraseLatencies = [], f.privHypothesisLatencies = [], i
                };
                this.dispose = function() { f.privIsDisposed = !0 };
                this.getConnectionError = function(n) {
                    switch (n) {
                        case 400:
                        case 1002:
                        case 1003:
                        case 1005:
                        case 1007:
                        case 1008:
                        case 1009:
                            return "BadRequest";
                        case 401:
                            return "Unauthorized";
                        case 403:
                            return "Forbidden";
                        case 503:
                        case 1001:
                            return "ServerUnavailable";
                        case 500:
                        case 1011:
                            return "ServerError";
                        case 408:
                        case 504:
                            return "Timeout";
                        default:
                            return "statuscode:" + n.toString()
                    }
                };
                this.privRequestId = n;
                this.privAudioSourceId = t;
                this.privAudioNodeId = i;
                this.privReceivedMessages = {};
                this.privPhraseLatencies = [];
                this.privHypothesisLatencies = []
            }
            return n.prototype.phraseReceived = function(n) { n > 0 && this.privPhraseLatencies.push(Date.now() - n) }, n.prototype.hypothesisReceived = function(n) { n > 0 && this.privHypothesisLatencies.push(Date.now() - n) }, Object.defineProperty(n.prototype, "hasTelemetry", { get: function() { return Object.keys(this.privReceivedMessages).length !== 0 || this.privListeningTriggerMetric !== null || this.privMicMetric !== null || this.privConnectionEstablishMetric !== null || this.privPhraseLatencies.length !== 0 || this.privHypothesisLatencies.length !== 0 }, enumerable: !0, configurable: !0 }), n
        }();
    t.ServiceTelemetryListener = f
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) {
            this.privContext = {};
            this.privDynamicGrammar = n
        }
        return n.prototype.setSection = function(n, t) { this.privContext[n] = t }, n.prototype.toJSON = function() { var n = this.privDynamicGrammar.generateGrammarObject(); return this.setSection("dgi", n), JSON.stringify(this.privContext) }, n
    }();
    t.SpeechContext = i
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return n.prototype.addPhrase = function(n) {
            this.privPhrases || (this.privPhrases = []);
            n instanceof Array ? this.privPhrases = this.privPhrases.concat(n) : this.privPhrases.push(n)
        }, n.prototype.clearPhrases = function() { this.privPhrases = undefined }, n.prototype.addReferenceGrammar = function(n) {
            this.privGrammars || (this.privGrammars = []);
            n instanceof Array ? this.privGrammars = this.privGrammars.concat(n) : this.privGrammars.push(n)
        }, n.prototype.clearGrammars = function() { this.privGrammars = undefined }, n.prototype.generateGrammarObject = function() { var n, t; return this.privGrammars === undefined && this.privPhrases === undefined ? undefined : (n = {}, n.ReferenceGrammars = this.privGrammars, undefined !== this.privPhrases && 0 !== this.privPhrases.length && (t = [], this.privPhrases.forEach(function(n) { t.push({ Text: n }) }), n.Groups = [{ Type: "Generic", Items: t }]), n) }, n
    }();
    t.DynamicGrammarBuilder = i
}, function(n, t, i) {
    "use strict";
    var o = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = i(2),
        u = i(4),
        r = i(30),
        h = i(131),
        f = i(25),
        c = i(133),
        e = i(107),
        l = function(n) {
            function t(t, i, o, c, l) {
                var a = n.call(this, t, i, o, c, l) || this;
                return a.sendMessage = function(n) {
                    var t = u.createGuid(),
                        i = u.createNoDashGuid(),
                        r = { context: { interactionId: t }, messagePayload: n, version: .5 },
                        f = JSON.stringify(r);
                    a.fetchDialogConnection().onSuccessContinueWith(function(n) { n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "agent", i, "application/json", f)) })
                }, a.listenOnce = function(n, t, i) {
                    return a.privRecognizerConfig.recognitionMode = n, a.privSuccessCallback = t, a.privErrorCallback = i, a.privDialogRequestSession.startNewRecognition(), a.privDialogRequestSession.listenForServiceTelemetry(a.privDialogAudioSource.events), a.dialogConnectImpl(), a.sendPreAudioMessages(), a.privDialogAudioSource.attach(a.privDialogRequestSession.audioNodeId).continueWithPromise(function(n) {
                        var t;
                        return n.isError ? (a.cancelRecognition(a.privDialogRequestSession.sessionId, a.privDialogRequestSession.requestId, r.CancellationReason.Error, r.CancellationErrorCode.ConnectionFailure, n.error), u.PromiseHelper.fromError(n.error)) : a.privDialogAudioSource.format.onSuccessContinueWithPromise(function(i) {
                            t = new s.ReplayableAudioNode(n.result, i.avgBytesPerSec);
                            a.privDialogRequestSession.onAudioSourceAttachCompleted(t, !1);
                            return a.privDialogAudioSource.deviceInfo.onSuccessContinueWithPromise(function(n) {
                                return a.privRecognizerConfig.SpeechServiceConfig.Context.audio = { source: n }, a.configConnection().continueWithPromise(function(n) {
                                    var i, f;
                                    if (n.isError) return a.cancelRecognitionLocal(r.CancellationReason.Error, r.CancellationErrorCode.ConnectionFailure, n.error), u.PromiseHelper.fromError(n.error);
                                    i = new r.SessionEventArgs(a.privDialogRequestSession.sessionId);
                                    !a.privRecognizer.sessionStarted || a.privRecognizer.sessionStarted(a.privRecognizer, i);
                                    f = a.sendAudio(t);
                                    f.on(function() {}, function(n) { a.cancelRecognition(a.privDialogRequestSession.sessionId, a.privDialogRequestSession.requestId, r.CancellationReason.Error, r.CancellationErrorCode.RuntimeError, n) });
                                    return u.PromiseHelper.fromResult(!0)
                                })
                            })
                        })
                    })
                }, a.sendAudio = function(n) {
                    return a.privDialogAudioSource.format.onSuccessContinueWithPromise(function(t) {
                        var i = new u.Deferred,
                            r = Date.now(),
                            o = a.privRecognizerConfig.parameters.getProperty("SPEECH-TransmitLengthBeforThrottleMs", "5000"),
                            s = t.avgBytesPerSec / 1e3 * parseInt(o, 10),
                            h = a.privDialogRequestSession.recogNumber,
                            f = function() {
                                if (!a.privDialogIsDisposed && !a.privDialogRequestSession.isSpeechEnded && a.privDialogRequestSession.isRecognizing && a.privDialogRequestSession.recogNumber === h) a.fetchDialogConnection().on(function(o) {
                                    n.read().on(function(n) {
                                        if (a.privDialogRequestSession.isSpeechEnded) { i.resolve(!0); return }
                                        var h, c;
                                        if (!n || n.isEnd) h = null, c = 0;
                                        else {
                                            h = n.buffer;
                                            a.privDialogRequestSession.onAudioSent(h.byteLength);
                                            c = s >= a.privDialogRequestSession.bytesSent ? 0 : Math.max(0, r - Date.now())
                                        }
                                        setTimeout(function() {
                                            h !== null && (r = Date.now() + h.byteLength * 1e3 / (t.avgBytesPerSec * 2));
                                            var s = o.send(new e.SpeechConnectionMessage(u.MessageType.Binary, "audio", a.privDialogRequestSession.requestId, null, h));
                                            n && !n.isEnd ? s.continueWith(function() { f() }) : (a.privDialogRequestSession.onSpeechEnded(), i.resolve(!0))
                                        }, c)
                                    }, function(n) { a.privDialogRequestSession.isSpeechEnded ? i.resolve(!0) : i.reject(n) })
                                }, function(n) { i.reject(n) })
                            };
                        return f(), i.promise()
                    })
                }, a.receiveDialogMessageOverride = function() {
                    var n = new u.Deferred;
                    a.fetchDialogConnection().on(function(t) {
                        return t.read().onSuccessContinueWithPromise(function(t) {
                            var b = a.isDisposed(),
                                k = !a.isDisposed() && a.terminateMessageLoop,
                                i, s, v, y, h, c, p, l, o, w;
                            if (b || k) return n.resolve(undefined), u.PromiseHelper.fromResult(undefined);
                            if (!t) return a.receiveDialogMessageOverride();
                            i = e.SpeechConnectionMessage.fromConnectionMessage(t);
                            switch (i.path.toLowerCase()) {
                                case "turn.start":
                                    s = i.requestId.toUpperCase();
                                    o = a.privDialogRequestSession.requestId.toUpperCase();
                                    s !== o ? a.privTurnStateManager.StartTurn(s) : a.privDialogRequestSession.onServiceTurnStartResponse();
                                    break;
                                case "speech.startdetected":
                                    v = f.SpeechDetected.fromJSON(i.textBody);
                                    y = new r.RecognitionEventArgs(v.Offset, a.privDialogRequestSession.sessionId);
                                    !a.privRecognizer.speechStartDetected || a.privRecognizer.speechStartDetected(a.privRecognizer, y);
                                    break;
                                case "speech.enddetected":
                                    h = void 0;
                                    h = i.textBody.length > 0 ? i.textBody : "{ Offset: 0 }";
                                    c = f.SpeechDetected.fromJSON(h);
                                    a.privDialogRequestSession.onServiceRecognized(c.Offset + a.privDialogRequestSession.currentTurnAudioOffset);
                                    p = new r.RecognitionEventArgs(c.Offset + a.privDialogRequestSession.currentTurnAudioOffset, a.privDialogRequestSession.sessionId);
                                    !a.privRecognizer.speechEndDetected || a.privRecognizer.speechEndDetected(a.privRecognizer, p);
                                    break;
                                case "turn.end":
                                    if (l = i.requestId.toUpperCase(), o = a.privDialogRequestSession.requestId.toUpperCase(), l !== o) a.privTurnStateManager.CompleteTurn(l);
                                    else {
                                        w = new r.SessionEventArgs(a.privDialogRequestSession.sessionId);
                                        a.privDialogRequestSession.onServiceTurnEndResponse(!1);
                                        if (a.privDialogRequestSession.isSpeechEnded && (!a.privRecognizer.sessionStopped || a.privRecognizer.sessionStopped(a.privRecognizer, w)), !!a.privSuccessCallback && a.privLastResult) {
                                            try {
                                                a.privSuccessCallback(a.privLastResult);
                                                a.privLastResult = null
                                            } catch (d) {!a.privErrorCallback || a.privErrorCallback(d) }
                                            a.privSuccessCallback = undefined;
                                            a.privErrorCallback = undefined
                                        }
                                    }
                                    break;
                                default:
                                    if (!a.processTypeSpecificMessages(i) && !!a.serviceEvents) a.serviceEvents.onEvent(new u.ServiceEvent(i.path.toLowerCase(), i.textBody))
                            }
                            return a.receiveDialogMessageOverride()
                        })
                    }, function() { return a.terminateMessageLoop = !0, n.resolve(undefined), u.PromiseHelper.fromResult(undefined) });
                    return n.promise()
                }, a.fetchDialogConnection = function() { return a.configConnection() }, a.sendAgentConfig = function(n) { var t, i; return a.agentConfig && !a.agentConfigSent ? (a.privRecognizerConfig.parameters.getProperty(r.PropertyId.Conversation_DialogType) === "custom_commands" && (t = a.agentConfig.get(), t.botInfo.commandsCulture = a.privRecognizerConfig.parameters.getProperty(r.PropertyId.SpeechServiceConnection_RecoLanguage, "en-us"), a.agentConfig.set(t)), i = a.agentConfig.toJsonString(), a.agentConfigSent = !0, n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "agent.config", a.privDialogRequestSession.requestId, "application/json", i))) : u.PromiseHelper.fromResult(!0) }, a.sendAgentContext = function(n) {
                    var i = u.createGuid(),
                        t = a.privDialogServiceConnector.properties.getProperty(r.PropertyId.Conversation_Speech_Activity_Template),
                        f = { channelData: "", context: { interactionId: i }, messagePayload: typeof t === undefined ? undefined : t, version: .5 },
                        o = JSON.stringify(f);
                    return n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "speech.agent.context", a.privDialogRequestSession.requestId, "application/json", o))
                }, a.privDialogServiceConnector = l, a.privDialogAuthentication = t, a.receiveMessageOverride = a.receiveDialogMessageOverride, a.privTurnStateManager = new h.DialogServiceTurnStateManager, a.recognizeOverride = a.listenOnce, a.connectImplOverride = a.dialogConnectImpl, a.configConnectionOverride = a.configConnection, a.fetchConnectionOverride = a.fetchDialogConnection, a.disconnectOverride = a.privDisconnect, a.privDialogAudioSource = o, a.privDialogRequestSession = new f.RequestSession(o.id()), a.privDialogConnectionFactory = i, a.privDialogIsDisposed = !1, a.agentConfigSent = !1, a.privLastResult = null, a
            }
            return o(t, n), t.prototype.isDisposed = function() { return this.privDialogIsDisposed }, t.prototype.dispose = function(n) { if (this.privDialogIsDisposed = !0, this.privConnectionConfigPromise) this.privConnectionConfigPromise.onSuccessContinueWith(function(t) { t.dispose(n) }) }, t.prototype.privDisconnect = function() {
                if (this.cancelRecognition(this.privDialogRequestSession.sessionId, this.privDialogRequestSession.requestId, r.CancellationReason.Error, r.CancellationErrorCode.NoError, "Disconnecting"), this.terminateMessageLoop = !0, this.agentConfigSent = !1, this.privDialogConnectionPromise.result().isCompleted) this.privDialogConnectionPromise.result().isError || (this.privDialogConnectionPromise.result().result.dispose(), this.privDialogConnectionPromise = null);
                else this.privDialogConnectionPromise.onSuccessContinueWith(function(n) { n.dispose() })
            }, t.prototype.processTypeSpecificMessages = function(n) {
                var h = new r.PropertyCollection,
                    y, t, i, l, e, a, p, w, o, v, b, k;
                n.messageType === u.MessageType.Text && h.setProperty(r.PropertyId.SpeechServiceResponse_JsonResult, n.textBody);
                switch (n.path.toLowerCase()) {
                    case "speech.phrase":
                        i = f.SimpleSpeechPhrase.fromJSON(n.textBody);
                        this.privDialogRequestSession.onPhraseRecognized(this.privDialogRequestSession.currentTurnAudioOffset + i.Offset + i.Duration);
                        if (i.RecognitionStatus === f.RecognitionStatus.Success && (l = this.fireEventForResult(i, h), this.privLastResult = l.result, !!this.privDialogServiceConnector.recognized)) try { this.privDialogServiceConnector.recognized(this.privDialogServiceConnector, l) } catch (g) {}
                        t = !0;
                        break;
                    case "speech.hypothesis":
                        e = f.SpeechHypothesis.fromJSON(n.textBody);
                        a = e.Offset + this.privDialogRequestSession.currentTurnAudioOffset;
                        y = new r.SpeechRecognitionResult(this.privDialogRequestSession.requestId, r.ResultReason.RecognizingSpeech, e.Text, e.Duration, a, undefined, n.textBody, h);
                        this.privDialogRequestSession.onHypothesis(a);
                        if (p = new r.SpeechRecognitionEventArgs(y, e.Duration, this.privDialogRequestSession.sessionId), !!this.privDialogServiceConnector.recognizing) try { this.privDialogServiceConnector.recognizing(this.privDialogServiceConnector, p) } catch (g) {}
                        t = !0;
                        break;
                    case "audio":
                        w = n.requestId.toUpperCase();
                        o = this.privTurnStateManager.GetTurn(w);
                        try { n.binaryBody ? o.audioStream.write(n.binaryBody) : o.endAudioStream() } catch (g) {}
                        t = !0;
                        break;
                    case "response":
                        var d = n.requestId.toUpperCase(),
                            s = c.ActivityPayloadResponse.fromJSON(n.textBody),
                            o = this.privTurnStateManager.GetTurn(d);
                        if (s.conversationId && (v = this.agentConfig.get(), v.botInfo.conversationId = s.conversationId, this.agentConfig.set(v)), b = o.processActivityPayload(s), k = new r.ActivityReceivedEventArgs(s.messagePayload, b), !!this.privDialogServiceConnector.activityReceived) try { this.privDialogServiceConnector.activityReceived(this.privDialogServiceConnector, k) } catch (g) {}
                        t = !0
                }
                return t
            }, t.prototype.cancelRecognition = function(n, t, i, u, e) {
                var o, s, h;
                if (this.terminateMessageLoop = !0, !this.privDialogRequestSession.isRecognizing || this.privDialogRequestSession.onStopRecognizing(), !!this.privDialogServiceConnector.canceled) {
                    o = new r.PropertyCollection;
                    o.setProperty(f.CancellationErrorCodePropertyName, r.CancellationErrorCode[u]);
                    s = new r.SpeechRecognitionCanceledEventArgs(i, e, u, undefined, n);
                    try { this.privDialogServiceConnector.canceled(this.privDialogServiceConnector, s) } catch (c) {}
                    if (!!this.privSuccessCallback) {
                        h = new r.SpeechRecognitionResult(undefined, r.ResultReason.Canceled, undefined, undefined, undefined, e, undefined, o);
                        try {
                            this.privSuccessCallback(h);
                            this.privSuccessCallback = undefined
                        } catch (l) {}
                    }
                }
            }, t.prototype.sendWaveHeader = function(n) { var t = this; return this.audioSource.format.onSuccessContinueWithPromise(function(i) { return n.send(new e.SpeechConnectionMessage(u.MessageType.Binary, "audio", t.privDialogRequestSession.requestId, "audio/x-wav", i.header)) }) }, t.prototype.dialogConnectImpl = function(n) {
                var t = this,
                    i;
                if (n === void 0 && (n = !1), this.privDialogConnectionPromise) return this.privDialogConnectionPromise.result().isCompleted && (this.privDialogConnectionPromise.result().isError || this.privDialogConnectionPromise.result().result.state() === u.ConnectionState.Disconnected) ? (this.agentConfigSent = !1, this.privDialogConnectionPromise = null, this.terminateMessageLoop = !0, this.configConnection()) : this.privDialogConnectionPromise;
                this.privDialogAuthFetchEventId = u.createNoDashGuid();
                this.privConnectionId === undefined && (this.privConnectionId = u.createNoDashGuid());
                this.privDialogRequestSession.onPreConnectionStart(this.privDialogAuthFetchEventId, this.privConnectionId);
                return i = n ? this.privDialogAuthentication.fetchOnExpiry(this.privDialogAuthFetchEventId) : this.privDialogAuthentication.fetch(this.privDialogAuthFetchEventId), this.privDialogConnectionPromise = i.continueWithPromise(function(i) {
                    if (i.isError) { t.privDialogRequestSession.onAuthCompleted(!0, i.error); throw new Error(i.error); } else t.privDialogRequestSession.onAuthCompleted(!1);
                    var f = t.privDialogConnectionFactory.create(t.privRecognizerConfig, i.result, t.privConnectionId);
                    t.privDialogRequestSession.listenForServiceTelemetry(f.events);
                    f.events.attach(function(n) { t.connectionEvents.onEvent(n) });
                    return f.open().onSuccessContinueWithPromise(function(i) {
                        if (i.statusCode === 200) {
                            t.privDialogRequestSession.onPreConnectionStart(t.privDialogAuthFetchEventId, t.privConnectionId);
                            t.privDialogRequestSession.onConnectionEstablishCompleted(i.statusCode);
                            return u.PromiseHelper.fromResult(f)
                        }
                        if (i.statusCode !== 403 || n) { t.privDialogRequestSession.onConnectionEstablishCompleted(i.statusCode, i.reason); return u.PromiseHelper.fromError("Unable to contact server. StatusCode: " + i.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + i.reason) }
                        return t.dialogConnectImpl(!0)
                    })
                }), this.privConnectionLoop = this.startMessageLoop(), this.privDialogConnectionPromise
            }, t.prototype.startMessageLoop = function() {
                var n = this,
                    t;
                this.terminateMessageLoop = !1;
                t = this.receiveDialogMessageOverride();
                return t.on(function() { return !0 }, function(t) { n.cancelRecognition(n.privDialogRequestSession.sessionId, n.privDialogRequestSession.requestId, r.CancellationReason.Error, r.CancellationErrorCode.RuntimeError, t) })
            }, t.prototype.configConnection = function() { var n = this; return this.privConnectionConfigPromise ? this.privConnectionConfigPromise.result().isCompleted && (this.privConnectionConfigPromise.result().isError || this.privConnectionConfigPromise.result().result.state() === u.ConnectionState.Disconnected) ? (this.privConnectionConfigPromise = null, this.configConnection()) : this.privConnectionConfigPromise : this.terminateMessageLoop ? (this.terminateMessageLoop = !1, u.PromiseHelper.fromError("Connection to service terminated.")) : (this.privConnectionConfigPromise = this.dialogConnectImpl().onSuccessContinueWithPromise(function(t) { return n.sendSpeechServiceConfig(t, n.privDialogRequestSession, n.privRecognizerConfig.SpeechServiceConfig.serialize()).onSuccessContinueWithPromise(function() { return n.sendAgentConfig(t).onSuccessContinueWith(function() { return t }) }) }), this.privConnectionConfigPromise) }, t.prototype.sendPreAudioMessages = function() {
                var n = this;
                this.fetchDialogConnection().onSuccessContinueWith(function(t) {
                    n.sendAgentContext(t);
                    n.sendWaveHeader(t)
                })
            }, t.prototype.fireEventForResult = function(n, t) {
                var u = f.EnumTranslation.implTranslateRecognitionResult(n.RecognitionStatus),
                    i = n.Offset + this.privDialogRequestSession.currentTurnAudioOffset,
                    e = new r.SpeechRecognitionResult(this.privDialogRequestSession.requestId, u, n.DisplayText, n.Duration, i, undefined, JSON.stringify(n), t);
                return new r.SpeechRecognitionEventArgs(e, i, this.privDialogRequestSession.sessionId)
            }, t
        }(f.ServiceRecognizerBase);
    t.DialogServiceAdapter = l
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        u = i(132),
        f = function() {
            function n() { this.privTurnMap = new Map; return }
            return n.prototype.StartTurn = function(n) { if (this.privTurnMap.has(n)) throw new r.InvalidOperationError("Service error: There is already a turn with id:" + n); var t = new u.DialogServiceTurnState(this, n); return this.privTurnMap.set(n, t), this.privTurnMap.get(n) }, n.prototype.GetTurn = function(n) { return this.privTurnMap.get(n) }, n.prototype.CompleteTurn = function(n) { if (!this.privTurnMap.has(n)) throw new r.InvalidOperationError("Service error: Received turn end for an unknown turn id:" + n); var t = this.privTurnMap.get(n); return t.complete(), this.privTurnMap.delete(n), t }, n
        }();
    t.DialogServiceTurnStateManager = f
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(37),
        u = i(36),
        f = i(133),
        e = function() {
            function n(n, t) {
                this.privRequestId = t;
                this.privIsCompleted = !1;
                this.privAudioStream = null;
                this.privTurnManager = n;
                this.resetTurnEndTimeout()
            }
            return Object.defineProperty(n.prototype, "audioStream", { get: function() { return this.resetTurnEndTimeout(), this.privAudioStream }, enumerable: !0, configurable: !0 }), n.prototype.processActivityPayload = function(n) { return n.messageDataStreamType === f.MessageDataStreamType.TextToSpeechAudio && (this.privAudioStream = u.AudioOutputStream.createPullStream(), this.privAudioStream.format = r.AudioOutputFormatImpl.getDefaultOutputFormat()), this.privAudioStream }, n.prototype.endAudioStream = function() { this.privAudioStream === null || this.privAudioStream.isClosed || this.privAudioStream.close() }, n.prototype.complete = function() {
                this.privTimeoutToken !== undefined && clearTimeout(this.privTimeoutToken);
                this.endAudioStream()
            }, n.prototype.resetTurnEndTimeout = function() {
                var n = this;
                this.privTimeoutToken !== undefined && clearTimeout(this.privTimeoutToken);
                this.privTimeoutToken = setTimeout(function() { n.privTurnManager.CompleteTurn(n.privRequestId); return }, 2e3)
            }, n
        }();
    t.DialogServiceTurnState = e
}, function(n, t) {
    "use strict";
    var i, r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    i = function() {
        function n(n) { this.privActivityResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "conversationId", { get: function() { return this.privActivityResponse.conversationId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "messageDataStreamType", { get: function() { return this.privActivityResponse.messageDataStreamType }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "messagePayload", { get: function() { return this.privActivityResponse.messagePayload }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "version", { get: function() { return this.privActivityResponse.version }, enumerable: !0, configurable: !0 }), n
    }();
    t.ActivityPayloadResponse = i,
        function(n) {
            n[n.None = 0] = "None";
            n[n.TextToSpeechAudio = 1] = "TextToSpeechAudio"
        }(r = t.MessageDataStreamType || (t.MessageDataStreamType = {}))
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n() {}
        return n.prototype.toJsonString = function() { return JSON.stringify(this.iPrivConfig) }, n.prototype.get = function() { return this.iPrivConfig }, n.prototype.set = function(n) { this.iPrivConfig = n }, n
    }();
    t.AgentConfig = i
}, function(n, t, i) {
    "use strict";
    var f, e, o, r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    f = i(136);
    t.ConversationManager = f.ConversationManager;
    e = i(137);
    t.ConversationTranslatorConfig = e.ConversationTranslatorConfig;
    o = i(138);
    t.ConversationTranslatorRecognizer = o.ConversationTranslatorRecognizer;
    r = i(144);
    t.ConversationReceivedTranslationEventArgs = r.ConversationReceivedTranslationEventArgs;
    t.LockRoomEventArgs = r.LockRoomEventArgs;
    t.MuteAllEventArgs = r.MuteAllEventArgs;
    t.ParticipantAttributeEventArgs = r.ParticipantAttributeEventArgs;
    t.ParticipantEventArgs = r.ParticipantEventArgs;
    t.ParticipantsListEventArgs = r.ParticipantsListEventArgs;
    u = i(145);
    t.ConversationTranslatorCommandTypes = u.ConversationTranslatorCommandTypes;
    t.ConversationTranslatorMessageTypes = u.ConversationTranslatorMessageTypes;
    t.InternalParticipants = u.InternalParticipants
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(32),
        u = i(30),
        r = i(137),
        e = function() {
            function n() {}
            return n.prototype.createOrJoin = function(n, t, i, e) {
                var s, o, c, d, a;
                try {
                    f.Contracts.throwIfNullOrUndefined(n, "args");
                    var v = n.getProperty(u.PropertyId.SpeechServiceConnection_RecoLanguage, r.ConversationTranslatorConfig.defaultLanguageCode),
                        y = n.getProperty(u.PropertyId.ConversationTranslator_Name),
                        p = n.getProperty(u.PropertyId.ConversationTranslator_Host, r.ConversationTranslatorConfig.host),
                        w = n.getProperty(u.PropertyId.ConversationTranslator_CorrelationId),
                        h = n.getProperty(u.PropertyId.SpeechServiceConnection_Key),
                        b = n.getProperty(u.PropertyId.SpeechServiceConnection_Region),
                        k = n.getProperty(u.PropertyId.SpeechServiceAuthorization_Token);
                    f.Contracts.throwIfNullOrWhitespace(v, "languageCode");
                    f.Contracts.throwIfNullOrWhitespace(y, "nickname");
                    f.Contracts.throwIfNullOrWhitespace(p, "endpointHost");
                    s = {};
                    s[r.ConversationTranslatorConfig.params.apiVersion] = r.ConversationTranslatorConfig.apiVersion;
                    s[r.ConversationTranslatorConfig.params.languageCode] = v;
                    s[r.ConversationTranslatorConfig.params.nickname] = y;
                    o = {};
                    w && (o[r.ConversationTranslatorConfig.params.correlationId] = w);
                    o[r.ConversationTranslatorConfig.params.clientAppId] = r.ConversationTranslatorConfig.clientAppId;
                    t !== undefined ? s[r.ConversationTranslatorConfig.params.roomId] = t : (f.Contracts.throwIfNullOrUndefined(b, r.ConversationTranslatorConfig.strings.authInvalidSubscriptionRegion), o[r.ConversationTranslatorConfig.params.subscriptionRegion] = b, h ? o[r.ConversationTranslatorConfig.params.subscriptionKey] = h : k ? o[r.ConversationTranslatorConfig.params.authorization] = "Bearer " + k : f.Contracts.throwIfNullOrUndefined(h, r.ConversationTranslatorConfig.strings.authInvalidSubscriptionKey));
                    c = {};
                    c.headers = o;
                    d = "https://" + p + r.ConversationTranslatorConfig.restPath;
                    r.request("post", d, s, null, c, function(n) {
                        var o = r.extractHeaderValue(r.ConversationTranslatorConfig.params.requestId, n.headers),
                            t, u, f;
                        if (!n.ok) {
                            if (!!e) {
                                t = r.ConversationTranslatorConfig.strings.invalidCreateJoinConversationResponse.replace("{status}", n.status.toString());
                                u = void 0;
                                try {
                                    u = JSON.parse(n.data);
                                    t += " [" + u.error.code + ": " + u.error.message + "]"
                                } catch (s) { t += " [" + n.data + "]" }
                                o && (t += " " + o);
                                e(t)
                            }
                            return
                        }
                        if (f = JSON.parse(n.data), f && (f.requestId = o), !!i) {
                            try { i(f) } catch (s) {!e || e(s) }
                            i = undefined
                        }
                    })
                } catch (l) {!e || (l instanceof Error ? (a = l, e(a.name + ": " + a.message)) : e(l)) }
            }, n.prototype.leave = function(n, t, i, e) {
                var s, h, v, l;
                try {
                    f.Contracts.throwIfNullOrUndefined(n, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "config"));
                    f.Contracts.throwIfNullOrWhitespace(t, r.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "token"));
                    var y = n.getProperty(u.PropertyId.ConversationTranslator_Host, r.ConversationTranslatorConfig.host),
                        a = n.getProperty(u.PropertyId.ConversationTranslator_CorrelationId),
                        o = {};
                    o[r.ConversationTranslatorConfig.params.apiVersion] = r.ConversationTranslatorConfig.apiVersion;
                    o[r.ConversationTranslatorConfig.params.sessionToken] = t;
                    s = {};
                    a && (s[r.ConversationTranslatorConfig.params.correlationId] = a);
                    h = {};
                    h.headers = s;
                    v = "https://" + y + r.ConversationTranslatorConfig.restPath;
                    r.request("delete", v, o, null, h, function(n) {
                        if (!n.ok, !!i) {
                            try { i() } catch (t) {!e || e(t) }
                            i = undefined
                        }
                    })
                } catch (c) {!e || (c instanceof Error ? (l = c, e(l.name + ": " + l.message)) : e(c)) }
            }, n
        }();
    t.ConversationManager = e
}, function(n, t) {
    "use strict";

    function r(n) { return n === void 0 && (n = {}), Object.keys(n).map(function(t) { return encodeURIComponent(t) + "=" + encodeURIComponent(n[t]) }).join("&") }

    function u(n, t) { t === void 0 && (t = {}); var i = r(t); return i ? n + (n.indexOf("?") === -1 ? "?" : "&") + i : n }

    function f(n) { return { data: n.responseText, headers: n.getAllResponseHeaders(), json: function() { return JSON.parse(n.responseText) }, ok: n.status >= 200 && n.status < 300, status: n.status, statusText: n.statusText } }

    function i(n, t) { return t === void 0 && (t = null), { data: t || n.statusText, headers: n.getAllResponseHeaders(), json: function() { return JSON.parse(t || '"' + n.statusText + '"') }, ok: !1, status: n.status, statusText: n.statusText } }

    function e(n, t) {
        var r = "",
            u, i;
        try {
            u = t.trim().split(/[\r\n]+/);
            i = {};
            u.forEach(function(n) {
                var t = n.split(": "),
                    r = t.shift().toLowerCase(),
                    u = t.join(": ");
                i[r] = u
            });
            r = i[n.toLowerCase()]
        } catch (f) {}
        return r
    }

    function o(n, r, e, o, s, h) {
        e === void 0 && (e = {});
        o === void 0 && (o = null);
        s === void 0 && (s = t.ConversationTranslatorConfig.defaultRequestOptions);
        var a = s.ignoreCache || t.ConversationTranslatorConfig.defaultRequestOptions.ignoreCache,
            l = s.headers || t.ConversationTranslatorConfig.defaultRequestOptions.headers,
            v = s.timeout || t.ConversationTranslatorConfig.defaultRequestOptions.timeout,
            c = new XMLHttpRequest;
        c.open(n, u(r, e), !0);
        l && Object.keys(l).forEach(function(n) { return c.setRequestHeader(n, l[n]) });
        a && c.setRequestHeader("Cache-Control", "no-cache");
        c.timeout = v;
        c.onload = function() { h(f(c)) };
        c.onerror = function() { h(i(c, "Failed to make request.")) };
        c.ontimeout = function() { h(i(c, "Request took longer than expected.")) };
        n === "post" && o ? (c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(o))) : c.send()
    }

    function s(n, t, i) { n ? n.continueWith(function(n) { try { n.isError ? !i || i(n.error) : !t || t() } catch (r) {!i || i("'Unhandled error on promise callback: " + r + ". InnerError: " + n.error + "'") } }) : !i || i("Null promise") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ConversationTranslatorConfig = { apiVersion: "2.0", auth: { placeholderRegion: "westus", placeholderSubscriptionKey: "abcdefghijklmnopqrstuvwxyz012345" }, clientAppId: "FC539C22-1767-4F1F-84BC-B4D811114F15", defaultLanguageCode: "en-US", defaultRequestOptions: { headers: { Accept: "application/json" }, ignoreCache: !1, timeout: 5e3 }, host: "dev.microsofttranslator.com", params: { apiVersion: "api-version", authorization: "Authorization", clientAppId: "X-ClientAppId", correlationId: "X-CorrelationId", languageCode: "language", nickname: "nickname", profanity: "profanity", requestId: "X-RequestId", roomId: "roomid", sessionToken: "token", subscriptionKey: "Ocp-Apim-Subscription-Key", subscriptionRegion: "Ocp-Apim-Subscription-Region", token: "X-CapitoToken" }, restPath: "/capito/room", speechHost: "{region}.s2s.speech.microsoft.com", speechPath: "/speech/translation/cognitiveservices/v1", strings: { authInvalidSubscriptionKey: "You must specify either an authentication token to use, or a Cognitive Speech subscription key.", authInvalidSubscriptionRegion: "You must specify the Cognitive Speech region to use.", invalidArgs: "Required input not found: {arg}.", invalidCreateJoinConversationResponse: "Creating/Joining conversation failed with HTTP {status}.", invalidParticipantRequest: "The requested participant was not found.", permissionDeniedConnect: "Required credentials not found.", permissionDeniedConversation: "Invalid operation: only the host can {command} the conversation.", permissionDeniedParticipant: "Invalid operation: only the host can {command} a participant.", permissionDeniedSend: "Invalid operation: the conversation is not in a connected state.", permissionDeniedStart: "Invalid operation: there is already an active conversation." }, textMessageMaxLength: 1e3, webSocketPath: "/capito/translate" };
    t.extractHeaderValue = e;
    t.request = o;
    t.PromiseToEmptyCallback = s
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = i(25),
        r = i(32),
        o = i(30),
        s = i(139),
        h = i(142),
        u = i(145),
        c = i(137),
        l = function(n) {
            function t(t, i) {
                var u = this,
                    f = t;
                return r.Contracts.throwIfNull(f, "speechConfig"), u = n.call(this, i, f.properties, new s.ConversationConnectionFactory) || this, u.privIsDisposed = !1, u.privProperties = f.properties.clone(), u
            }
            return f(t, n), Object.defineProperty(t.prototype, "conversation", { set: function(n) { this.privRoom = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", { get: function() { return this.privSpeechRecognitionLanguage }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "properties", { get: function() { return this.privProperties }, enumerable: !0, configurable: !0 }), t.prototype.isDisposed = function() { return this.privIsDisposed }, t.prototype.connect = function(n, t, i) {
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(n, "token");
                    this.privReco.conversationTranslatorToken = n;
                    this.privReco.connectAsync(t, i)
                } catch (u) {
                    if (!!i)
                        if (u instanceof Error) {
                            var f = u;
                            i(f.name + ": " + f.message)
                        } else i(u)
                }
            }, t.prototype.disconnect = function(n, t) {
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    this.privRoom = undefined;
                    this.privReco.disconnectAsync(n, t)
                } catch (i) {
                    if (!!t)
                        if (i instanceof Error) {
                            var u = i;
                            t(u.name + ": " + u.message)
                        } else t(i);
                    this.dispose(!0)
                }
            }, t.prototype.sendMessageRequest = function(n, t, i) {
                var o, e;
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId");
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId");
                    r.Contracts.throwIfNullOrWhitespace(n, "message");
                    o = { participantId: this.privRoom.participantId, roomId: this.privRoom.roomId, text: n, type: u.ConversationTranslatorMessageTypes.instantMessage };
                    this.sendMessage(JSON.stringify(o), t, i)
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, t.prototype.sendLockRequest = function(n, t, i) {
                var o, e;
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId");
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId");
                    r.Contracts.throwIfNullOrUndefined(n, "isLocked");
                    o = { command: u.ConversationTranslatorCommandTypes.setLockState, participantId: this.privRoom.participantId, roomid: this.privRoom.roomId, type: u.ConversationTranslatorMessageTypes.participantCommand, value: n };
                    this.sendMessage(JSON.stringify(o), t, i)
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, t.prototype.sendMuteAllRequest = function(n, t, i) {
                var o, e;
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId");
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId");
                    r.Contracts.throwIfNullOrUndefined(n, "isMuted");
                    o = { command: u.ConversationTranslatorCommandTypes.setMuteAll, participantId: this.privRoom.participantId, roomid: this.privRoom.roomId, type: u.ConversationTranslatorMessageTypes.participantCommand, value: n };
                    this.sendMessage(JSON.stringify(o), t, i)
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, t.prototype.sendMuteRequest = function(n, t, i, f) {
                var s, o;
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId");
                    r.Contracts.throwIfNullOrWhitespace(n, "participantId");
                    r.Contracts.throwIfNullOrUndefined(t, "isMuted");
                    s = { command: u.ConversationTranslatorCommandTypes.setMute, participantId: n, roomid: this.privRoom.roomId, type: u.ConversationTranslatorMessageTypes.participantCommand, value: t };
                    this.sendMessage(JSON.stringify(s), i, f)
                } catch (e) {
                    !f || (e instanceof Error ? (o = e, f(o.name + ": " + o.message)) : f(e));
                    this.dispose(!0)
                }
            }, t.prototype.sendEjectRequest = function(n, t, i) {
                var o, e;
                try { if (r.Contracts.throwIfDisposed(this.privIsDisposed), r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), r.Contracts.throwIfNullOrWhitespace(n, "participantId"), o = { command: u.ConversationTranslatorCommandTypes.ejectParticipant, participantId: n, roomid: this.privRoom.roomId, type: u.ConversationTranslatorMessageTypes.participantCommand }, this.sendMessage(JSON.stringify(o), t, i), !!t) try { t() } catch (s) {!i || i(s) } } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, t.prototype.sendChangeNicknameRequest = function(n, t, i) {
                var o, e;
                try {
                    r.Contracts.throwIfDisposed(this.privIsDisposed);
                    r.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId");
                    r.Contracts.throwIfNullOrWhitespace(n, "nickname");
                    o = { command: u.ConversationTranslatorCommandTypes.changeNickname, nickname: n, participantId: this.privRoom.participantId, roomid: this.privRoom.roomId, type: u.ConversationTranslatorMessageTypes.participantCommand, value: n };
                    this.sendMessage(JSON.stringify(o), t, i)
                } catch (f) {
                    !i || (f instanceof Error ? (e = f, i(e.name + ": " + e.message)) : i(f));
                    this.dispose(!0)
                }
            }, t.prototype.close = function() {
                r.Contracts.throwIfDisposed(this.privIsDisposed);
                this.dispose(!0)
            }, t.prototype.dispose = function(t) { this.privIsDisposed || t && (this.privIsDisposed = !0, n.prototype.dispose.call(this, t)) }, t.prototype.createRecognizerConfig = function(n) { return new e.RecognizerConfig(n, this.privProperties) }, t.prototype.createServiceRecognizer = function(n, t, i, r) { var u = i; return new h.ConversationServiceAdapter(n, t, u, r, this) }, t.prototype.sendMessage = function(n, t, i) {
                var r = this.privReco;
                c.PromiseToEmptyCallback(r.sendMessageAsync(n), t, i)
            }, t
        }(o.Recognizer);
    t.ConversationTranslatorRecognizer = l
}, function(n, t, i) {
    "use strict";
    var e = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(2),
        o = i(4),
        s = i(32),
        u = i(30),
        h = i(65),
        r = i(137),
        c = i(140),
        l = function(n) {
            function t() { return n !== null && n.apply(this, arguments) || this }
            return e(t, n), t.prototype.create = function(n, t, i) {
                var l = n.parameters.getProperty(u.PropertyId.ConversationTranslator_Host, r.ConversationTranslatorConfig.host),
                    a = n.parameters.getProperty(u.PropertyId.ConversationTranslator_CorrelationId, o.createGuid()),
                    v = "wss://" + l + r.ConversationTranslatorConfig.webSocketPath,
                    h = n.parameters.getProperty(u.PropertyId.ConversationTranslator_Token, undefined),
                    e;
                return s.Contracts.throwIfNullOrUndefined(h, "token"), e = {}, e[r.ConversationTranslatorConfig.params.apiVersion] = r.ConversationTranslatorConfig.apiVersion, e[r.ConversationTranslatorConfig.params.token] = h, e[r.ConversationTranslatorConfig.params.correlationId] = a, new f.WebsocketConnection(v, e, {}, new c.ConversationWebsocketMessageFormatter, f.ProxyInfo.fromRecognizerConfig(n), i)
            }, t
        }(h.ConnectionFactoryBase);
    t.ConversationConnectionFactory = l
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(141),
        f = function() {
            function n() {
                this.toConnectionMessage = function(n) {
                    var t = new r.Deferred,
                        i;
                    try { n.messageType === r.MessageType.Text ? (i = new u.ConversationConnectionMessage(n.messageType, n.textContent, {}, n.id), t.resolve(i)) : n.messageType === r.MessageType.Binary && t.resolve(new u.ConversationConnectionMessage(n.messageType, n.binaryContent, undefined, n.id)) } catch (f) { t.reject("Error formatting the message. Error: " + f) }
                    return t.promise()
                };
                this.fromConnectionMessage = function(n) {
                    var t = new r.Deferred,
                        i;
                    try { n.messageType === r.MessageType.Text && (i = "" + (n.textBody ? n.textBody : ""), t.resolve(new r.RawWebsocketMessage(r.MessageType.Text, i, n.id))) } catch (u) { t.reject("Error formatting the message. " + u) }
                    return t.promise()
                }
            }
            return n
        }();
    t.ConversationWebsocketMessageFormatter = f
}, function(n, t, i) {
    "use strict";
    var f = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(4);
    u = function(n) {
        function t(t, i, r, u) {
            var f = n.call(this, t, i, r, u) || this,
                e = JSON.parse(f.textBody);
            return e.type !== undefined && (f.privConversationMessageType = e.type), f
        }
        return f(t, n), Object.defineProperty(t.prototype, "conversationMessageType", { get: function() { return this.privConversationMessageType }, enumerable: !0, configurable: !0 }), t
    }(r.ConnectionMessage);
    t.ConversationConnectionMessage = u
}, function(n, t, i) {
    "use strict";
    var h = this && this.__extends || function() {
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        c = i(16),
        f = i(30),
        l = i(25),
        s = i(141),
        a = i(143),
        u = i(144),
        e = i(145),
        o = i(146),
        v = function(n) {
            function t(t, i, h, l, v) {
                var y = n.call(this, t, i, h, l, v) || this;
                return y.privUtteranceId = "", y.sendMessageAsync = function(n) { var t = new c.Sink; return y.fetchConversationConnection().continueWith(function(i) { try { i.isError ? t.reject(i.error) : i.result.send(new s.ConversationConnectionMessage(r.MessageType.Text, n)).continueWith(function(n) { try { n.isError ? t.reject(n.error) : t.resolve(n.result) } catch (i) { t.reject("Unhandled inner error: " + i) } }) } catch (u) { t.reject("Unhandled error: " + u) } }), new r.Promise(t) }, y.noOp = function() {}, y.receiveConversationMessageOverride = function() {
                    var n = new r.Deferred;
                    y.fetchConversationConnection().on(function(t) {
                        return t.read().onSuccessContinueWithPromise(function(t) {
                            var d = y.isDisposed(),
                                g = !y.isDisposed() && y.terminateMessageLoop,
                                s = y.privConversationRequestSession.sessionId,
                                i, h, p, c, w, b, nt, l, a, v, k;
                            if (d || g) return n.resolve(undefined), r.PromiseHelper.fromResult(undefined);
                            if (!t) return y.receiveConversationMessageOverride();
                            try {
                                switch (t.conversationMessageType.toLowerCase()) {
                                    case "info":
                                    case "participant_command":
                                    case "command":
                                        i = o.CommandResponsePayload.fromJSON(t.textBody);
                                        switch (i.command.toLowerCase()) {
                                            case "participantlist":
                                                h = o.ParticipantsListPayloadResponse.fromJSON(t.textBody);
                                                p = h.participants.map(function(n) { return { avatar: n.avatar, displayName: n.nickname, id: n.participantId, isHost: n.ishost, isMuted: n.ismuted, isUsingTts: n.usetts, preferredLanguage: n.locale } });
                                                !y.privConversationServiceConnector.participantsListReceived || y.privConversationServiceConnector.participantsListReceived(y.privConversationServiceConnector, new u.ParticipantsListEventArgs(h.roomid, h.token, h.translateTo, h.profanityFilter, h.roomProfanityFilter, h.roomLocked, h.muteAll, p, s));
                                                break;
                                            case "settranslatetolanguages":
                                                !y.privConversationServiceConnector.participantUpdateCommandReceived || y.privConversationServiceConnector.participantUpdateCommandReceived(y.privConversationServiceConnector, new u.ParticipantAttributeEventArgs(i.participantId, e.ConversationTranslatorCommandTypes.setTranslateToLanguages, i.value, s));
                                                break;
                                            case "setprofanityfiltering":
                                                !y.privConversationServiceConnector.participantUpdateCommandReceived || y.privConversationServiceConnector.participantUpdateCommandReceived(y.privConversationServiceConnector, new u.ParticipantAttributeEventArgs(i.participantId, e.ConversationTranslatorCommandTypes.setProfanityFiltering, i.value, s));
                                                break;
                                            case "setmute":
                                                !y.privConversationServiceConnector.participantUpdateCommandReceived || y.privConversationServiceConnector.participantUpdateCommandReceived(y.privConversationServiceConnector, new u.ParticipantAttributeEventArgs(i.participantId, e.ConversationTranslatorCommandTypes.setMute, i.value, s));
                                                break;
                                            case "setmuteall":
                                                !y.privConversationServiceConnector.muteAllCommandReceived || y.privConversationServiceConnector.muteAllCommandReceived(y.privConversationServiceConnector, new u.MuteAllEventArgs(i.value, s));
                                                break;
                                            case "roomexpirationwarning":
                                                !y.privConversationServiceConnector.conversationExpiration || y.privConversationServiceConnector.conversationExpiration(y.privConversationServiceConnector, new f.ConversationExpirationEventArgs(i.value, y.privConversationRequestSession.sessionId));
                                                break;
                                            case "setusetts":
                                                !y.privConversationServiceConnector.participantUpdateCommandReceived || y.privConversationServiceConnector.participantUpdateCommandReceived(y.privConversationServiceConnector, new u.ParticipantAttributeEventArgs(i.participantId, e.ConversationTranslatorCommandTypes.setUseTTS, i.value, s));
                                                break;
                                            case "setlockstate":
                                                !y.privConversationServiceConnector.lockRoomCommandReceived || y.privConversationServiceConnector.lockRoomCommandReceived(y.privConversationServiceConnector, new u.LockRoomEventArgs(i.value, s));
                                                break;
                                            case "changenickname":
                                                !y.privConversationServiceConnector.participantUpdateCommandReceived || y.privConversationServiceConnector.participantUpdateCommandReceived(y.privConversationServiceConnector, new u.ParticipantAttributeEventArgs(i.participantId, e.ConversationTranslatorCommandTypes.changeNickname, i.nickname, s));
                                                break;
                                            case "joinsession":
                                                c = o.ParticipantPayloadResponse.fromJSON(t.textBody);
                                                w = { avatar: c.avatar, displayName: c.nickname, id: c.participantId, isHost: c.ishost, isMuted: c.ismuted, isUsingTts: c.usetts, preferredLanguage: c.locale };
                                                !y.privConversationServiceConnector.participantJoinCommandReceived || y.privConversationServiceConnector.participantJoinCommandReceived(y.privConversationServiceConnector, new u.ParticipantEventArgs(w, s));
                                                break;
                                            case "leavesession":
                                                b = { id: i.participantId };
                                                !y.privConversationServiceConnector.participantLeaveCommandReceived || y.privConversationServiceConnector.participantLeaveCommandReceived(y.privConversationServiceConnector, new u.ParticipantEventArgs(b, s));
                                                break;
                                            case "disconnectsession":
                                                nt = { id: i.participantId }
                                        }
                                        break;
                                    case "partial":
                                    case "final":
                                        l = o.SpeechResponsePayload.fromJSON(t.textBody);
                                        a = new f.ConversationTranslationResult(l.participantId, y.getTranslations(l.translations), l.language, undefined, undefined, l.recognition, undefined, undefined, t.textBody, undefined);
                                        l.isFinal ? a.text !== undefined && a.text.length > 0 && l.id !== y.privUtteranceId && (!y.privConversationServiceConnector.translationReceived || y.privConversationServiceConnector.translationReceived(y.privConversationServiceConnector, new u.ConversationReceivedTranslationEventArgs(e.ConversationTranslatorMessageTypes.final, a, s))) : !y.privConversationServiceConnector.translationReceived || y.privConversationServiceConnector.translationReceived(y.privConversationServiceConnector, new u.ConversationReceivedTranslationEventArgs(e.ConversationTranslatorMessageTypes.partial, a, s));
                                        y.privUtteranceId = l.id;
                                        break;
                                    case "translated_message":
                                        v = o.TextResponsePayload.fromJSON(t.textBody);
                                        k = new f.ConversationTranslationResult(v.participantId, y.getTranslations(v.translations), v.language, undefined, undefined, v.originalText, undefined, undefined, undefined, t.textBody, undefined);
                                        !y.privConversationServiceConnector.translationReceived || y.privConversationServiceConnector.translationReceived(y.privConversationServiceConnector, new u.ConversationReceivedTranslationEventArgs(e.ConversationTranslatorMessageTypes.instantMessage, k, s))
                                }
                            } catch (tt) {}
                            return y.receiveConversationMessageOverride()
                        })
                    }, function() { y.terminateMessageLoop = !0 });
                    return n.promise()
                }, y.fetchConversationConnection = function() { return y.configConnection() }, y.privConversationServiceConnector = v, y.privConversationAuthentication = t, y.receiveMessageOverride = y.receiveConversationMessageOverride, y.recognizeOverride = y.noOp, y.connectImplOverride = y.conversationConnectImpl, y.configConnectionOverride = y.configConnection, y.fetchConnectionOverride = y.fetchConversationConnection, y.disconnectOverride = y.privDisconnect, y.privConversationRequestSession = new a.ConversationRequestSession(r.createNoDashGuid()), y.privConversationConnectionFactory = i, y.privConversationIsDisposed = !1, y
            }
            return h(t, n), t.prototype.isDisposed = function() { return this.privConversationIsDisposed }, t.prototype.dispose = function(n) { if (this.privConversationIsDisposed = !0, this.privConnectionConfigPromise) this.privConnectionConfigPromise.onSuccessContinueWith(function(t) { t.dispose(n) }) }, t.prototype.sendMessage = function(n) { this.fetchConversationConnection().onSuccessContinueWith(function(t) { t.send(new s.ConversationConnectionMessage(r.MessageType.Text, n)) }) }, t.prototype.privDisconnect = function() {
                if (!this.terminateMessageLoop)
                    if (this.cancelRecognition(this.privConversationRequestSession.sessionId, this.privConversationRequestSession.requestId, f.CancellationReason.Error, f.CancellationErrorCode.NoError, "Disconnecting"), this.terminateMessageLoop = !0, this.privConversationConnectionPromise.result().isCompleted) this.privConversationConnectionPromise.result().isError || (this.privConversationConnectionPromise.result().result.dispose(), this.privConversationConnectionPromise = null);
                    else this.privConversationConnectionPromise.onSuccessContinueWith(function(n) { n.dispose() })
            }, t.prototype.processTypeSpecificMessages = function() { return !0 }, t.prototype.cancelRecognition = function(n, t, i, r, u) { this.terminateMessageLoop = !0; var e = new f.ConversationTranslationCanceledEventArgs(i, u, r, undefined, n); try {!this.privConversationServiceConnector.canceled || this.privConversationServiceConnector.canceled(this.privConversationServiceConnector, e) } catch (o) {} }, t.prototype.conversationConnectImpl = function(n) {
                var t = this,
                    i;
                if (n === void 0 && (n = !1), this.privConversationConnectionPromise) return this.privConversationConnectionPromise.result().isCompleted && (this.privConversationConnectionPromise.result().isError || this.privConversationConnectionPromise.result().result.state() === r.ConnectionState.Disconnected) ? (this.privConnectionId = null, this.privConversationConnectionPromise = null, this.terminateMessageLoop = !0, this.conversationConnectImpl()) : this.privConversationConnectionPromise;
                this.privConversationAuthFetchEventId = r.createNoDashGuid();
                this.privConnectionId === undefined && (this.privConnectionId = r.createNoDashGuid());
                this.privConversationRequestSession.onPreConnectionStart(this.privConversationAuthFetchEventId, this.privConnectionId);
                return i = n ? this.privConversationAuthentication.fetchOnExpiry(this.privConversationAuthFetchEventId) : this.privConversationAuthentication.fetch(this.privConversationAuthFetchEventId), this.privConversationConnectionPromise = i.continueWithPromise(function(i) {
                    if (i.isError) { t.privConversationRequestSession.onAuthCompleted(!0, i.error); throw new Error(i.error); } else t.privConversationRequestSession.onAuthCompleted(!1);
                    var u = t.privConversationConnectionFactory.create(t.privRecognizerConfig, i.result, t.privConnectionId);
                    u.events.attach(function(n) { t.connectionEvents.onEvent(n) });
                    return u.open().onSuccessContinueWithPromise(function(i) {
                        if (i.statusCode === 200) {
                            t.privConversationRequestSession.onPreConnectionStart(t.privConversationAuthFetchEventId, t.privConnectionId);
                            t.privConversationRequestSession.onConnectionEstablishCompleted(i.statusCode);
                            var e = new f.SessionEventArgs(t.privConversationRequestSession.sessionId);
                            return !t.privConversationServiceConnector.connectionOpened || t.privConversationServiceConnector.connectionOpened(t.privConversationServiceConnector, e), r.PromiseHelper.fromResult(u)
                        }
                        if (i.statusCode !== 403 || n) { t.privConversationRequestSession.onConnectionEstablishCompleted(i.statusCode, i.reason); return r.PromiseHelper.fromError("Unable to contact server. StatusCode: " + i.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(f.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + i.reason) }
                        return t.conversationConnectImpl(!0)
                    })
                }), this.privConnectionLoop = this.startMessageLoop(), this.privConversationConnectionPromise
            }, t.prototype.startMessageLoop = function() {
                var n = this,
                    t;
                this.terminateMessageLoop = !1;
                t = this.receiveConversationMessageOverride();
                return t.on(function() { return !0 }, function(t) { n.cancelRecognition(n.privRequestSession ? n.privRequestSession.sessionId : "", n.privRequestSession ? n.privRequestSession.requestId : "", f.CancellationReason.Error, f.CancellationErrorCode.RuntimeError, t) })
            }, t.prototype.configConnection = function() { return this.privConnectionConfigPromise ? this.privConnectionConfigPromise.result().isCompleted && (this.privConnectionConfigPromise.result().isError || this.privConnectionConfigPromise.result().result.state() === r.ConnectionState.Disconnected) ? (this.privConnectionConfigPromise = null, this.configConnection()) : this.privConnectionConfigPromise : this.terminateMessageLoop ? r.PromiseHelper.fromResult(undefined) : (this.privConnectionConfigPromise = this.conversationConnectImpl().onSuccessContinueWith(function(n) { return n }), this.privConnectionConfigPromise) }, t.prototype.getTranslations = function(n) {
                var i, t, r, u;
                if (undefined !== n)
                    for (i = new f.Translations, t = 0, r = n; t < r.length; t++) u = r[t], i.set(u.lang, u.translation);
                return i
            }, t
        }(l.ServiceRecognizerBase);
    t.ConversationServiceAdapter = v
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = function() {
            function n(n) {
                var t = this;
                this.privIsDisposed = !1;
                this.privDetachables = [];
                this.onPreConnectionStart = function(n, i) { t.privSessionId = i };
                this.onAuthCompleted = function(n) { n && t.onComplete() };
                this.onConnectionEstablishCompleted = function(n) { n !== 200 && n === 403 && t.onComplete() };
                this.onServiceTurnEndResponse = function(n) { n ? t.privRequestId = r.createNoDashGuid() : t.onComplete() };
                this.dispose = function() {
                    var n, i, r;
                    if (!t.privIsDisposed)
                        for (t.privIsDisposed = !0, n = 0, i = t.privDetachables; n < i.length; n++) r = i[n], r.detach()
                };
                this.onComplete = function() {};
                this.privSessionId = n;
                this.privRequestId = r.createNoDashGuid();
                this.privRequestCompletionDeferral = new r.Deferred
            }
            return Object.defineProperty(n.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "completionPromise", { get: function() { return this.privRequestCompletionDeferral.promise() }, enumerable: !0, configurable: !0 }), n
        }();
    t.ConversationRequestSession = u
}, function(n, t, i) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        r, f, e, o, s, h, c;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(30);
    f = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privIsMuted = t, r }
        return u(t, n), Object.defineProperty(t.prototype, "isMuted", { get: function() { return this.privIsMuted }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.MuteAllEventArgs = f;
    e = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privIsLocked = t, r }
        return u(t, n), Object.defineProperty(t.prototype, "isMuted", { get: function() { return this.privIsLocked }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.LockRoomEventArgs = e;
    o = function(n) {
        function t(t, i) { var r = n.call(this, i) || this; return r.privParticipant = t, r }
        return u(t, n), Object.defineProperty(t.prototype, "participant", { get: function() { return this.privParticipant }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ParticipantEventArgs = o;
    s = function(n) {
        function t(t, i, r, u) { var f = n.call(this, u) || this; return f.privKey = i, f.privValue = r, f.privParticipantId = t, f }
        return u(t, n), Object.defineProperty(t.prototype, "value", { get: function() { return this.privValue }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "key", { get: function() { return this.privKey }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "id", { get: function() { return this.privParticipantId }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ParticipantAttributeEventArgs = s;
    h = function(n) {
        function t(t, i, r, u, f, e, o, s, h) { var c = n.call(this, h) || this; return c.privRoomId = t, c.privSessionToken = i, c.privTranslateTo = r, c.privProfanityFilter = u, c.privRoomProfanityFilter = f, c.privIsRoomLocked = e, c.privIsRoomLocked = o, c.privParticipants = s, c }
        return u(t, n), Object.defineProperty(t.prototype, "sessionToken", { get: function() { return this.privSessionToken }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "conversationId", { get: function() { return this.privRoomId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "translateTo", { get: function() { return this.privTranslateTo }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "profanityFilter", { get: function() { return this.privProfanityFilter }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "roomProfanityFilter", { get: function() { return this.privRoomProfanityFilter }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isRoomLocked", { get: function() { return this.privIsRoomLocked }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isMuteAll", { get: function() { return this.privIsMuteAll }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "participants", { get: function() { return this.privParticipants }, enumerable: !0, configurable: !0 }), t
    }(r.SessionEventArgs);
    t.ParticipantsListEventArgs = h;
    c = function() {
        function n(n, t, i) {
            this.privPayload = t;
            this.privCommand = n;
            this.privSessionId = i
        }
        return Object.defineProperty(n.prototype, "payload", { get: function() { return this.privPayload }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "command", { get: function() { return this.privCommand }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "sessionId", { get: function() { return this.privSessionId }, enumerable: !0, configurable: !0 }), n
    }();
    t.ConversationReceivedTranslationEventArgs = c
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n, t) {
            n === void 0 && (n = []);
            this.participants = n;
            this.meId = t
        }
        return n.prototype.addOrUpdateParticipant = function(n) { if (n !== undefined) { var t = this.getParticipantIndex(n.id); return t > -1 ? this.participants.splice(t, 1, n) : this.participants.push(n), this.getParticipant(n.id) } }, n.prototype.getParticipantIndex = function(n) { return this.participants.findIndex(function(t) { return t.id === n }) }, n.prototype.getParticipant = function(n) { return this.participants.find(function(t) { return t.id === n }) }, n.prototype.deleteParticipant = function(n) { this.participants = this.participants.filter(function(t) { return t.id !== n }) }, Object.defineProperty(n.prototype, "host", { get: function() { return this.participants.find(function(n) { return n.isHost === !0 }) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "me", { get: function() { return this.getParticipant(this.meId) }, enumerable: !0, configurable: !0 }), n
    }();
    t.InternalParticipants = i;
    t.ConversationTranslatorMessageTypes = { command: "command", final: "final", info: "info", instantMessage: "instant_message", partial: "partial", participantCommand: "participant_command", translatedMessage: "translated_message" };
    t.ConversationTranslatorCommandTypes = { changeNickname: "ChangeNickname", disconnectSession: "DisconnectSession", ejectParticipant: "EjectParticipant", instant_message: "instant_message", joinSession: "JoinSession", leaveSession: "LeaveSession", participantList: "ParticipantList", roomExpirationWarning: "RoomExpirationWarning", setLockState: "SetLockState", setMute: "SetMute", setMuteAll: "SetMuteAll", setProfanityFiltering: "SetProfanityFiltering", setTranslateToLanguages: "SetTranslateToLanguages", setUseTTS: "SetUseTTS" }
}, function(n, t, i) {
    "use strict";
    var f, r, u;
    Object.defineProperty(t, "__esModule", { value: !0 });
    f = i(147);
    t.CommandResponsePayload = f.CommandResponsePayload;
    r = i(148);
    t.ParticipantsListPayloadResponse = r.ParticipantsListPayloadResponse;
    t.ParticipantPayloadResponse = r.ParticipantPayloadResponse;
    u = i(149);
    t.SpeechResponsePayload = u.SpeechResponsePayload;
    t.TextResponsePayload = u.TextResponsePayload
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privCommandResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "type", { get: function() { return this.privCommandResponse.type }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "command", { get: function() { return this.privCommandResponse.command }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privCommandResponse.id }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "nickname", { get: function() { return this.privCommandResponse.nickname }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participantId", { get: function() { return this.privCommandResponse.participantId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "roomid", { get: function() { return this.privCommandResponse.roomid }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "value", { get: function() { return this.privCommandResponse.value }, enumerable: !0, configurable: !0 }), n
    }();
    t.CommandResponsePayload = i
}, function(n, t) {
    "use strict";
    var i, r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    i = function() {
        function n(n) { this.privParticipantsPayloadResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "roomid", { get: function() { return this.privParticipantsPayloadResponse.roomid }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privParticipantsPayloadResponse.id }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "command", { get: function() { return this.privParticipantsPayloadResponse.command }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participants", { get: function() { return this.privParticipantsPayloadResponse.participants }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "token", { get: function() { return this.privParticipantsPayloadResponse.token }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "translateTo", { get: function() { return this.privParticipantsPayloadResponse.translateTo }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "profanityFilter", { get: function() { return this.privParticipantsPayloadResponse.profanityFilter }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "roomProfanityFilter", { get: function() { return this.privParticipantsPayloadResponse.roomProfanityFilter }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "roomLocked", { get: function() { return this.privParticipantsPayloadResponse.roomLocked }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "muteAll", { get: function() { return this.privParticipantsPayloadResponse.muteAll }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "type", { get: function() { return this.privParticipantsPayloadResponse.type }, enumerable: !0, configurable: !0 }), n
    }();
    t.ParticipantsListPayloadResponse = i;
    r = function() {
        function n(n) { this.privParticipantPayloadResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "nickname", { get: function() { return this.privParticipantPayloadResponse.nickname }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "locale", { get: function() { return this.privParticipantPayloadResponse.locale }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "usetts", { get: function() { return this.privParticipantPayloadResponse.usetts }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "ismuted", { get: function() { return this.privParticipantPayloadResponse.ismuted }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "ishost", { get: function() { return this.privParticipantPayloadResponse.ishost }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participantId", { get: function() { return this.privParticipantPayloadResponse.participantId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "avatar", { get: function() { return this.privParticipantPayloadResponse.avatar }, enumerable: !0, configurable: !0 }), n
    }();
    t.ParticipantPayloadResponse = r
}, function(n, t) {
    "use strict";
    var i, r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    i = function() {
        function n(n) { this.privSpeechResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "recognition", { get: function() { return this.privSpeechResponse.recognition }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "translations", { get: function() { return this.privSpeechResponse.translations }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privSpeechResponse.id }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "language", { get: function() { return this.privSpeechResponse.language }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "nickname", { get: function() { return this.privSpeechResponse.nickname }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participantId", { get: function() { return this.privSpeechResponse.participantId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "roomid", { get: function() { return this.privSpeechResponse.roomid }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "timestamp", { get: function() { return this.privSpeechResponse.timestamp }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "type", { get: function() { return this.privSpeechResponse.type }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isFinal", { get: function() { return this.privSpeechResponse.type === "final" }, enumerable: !0, configurable: !0 }), n
    }();
    t.SpeechResponsePayload = i;
    r = function() {
        function n(n) { this.privTextResponse = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "originalText", { get: function() { return this.privTextResponse.originalText }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "translations", { get: function() { return this.privTextResponse.translations }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "id", { get: function() { return this.privTextResponse.id }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "language", { get: function() { return this.privTextResponse.language }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "nickname", { get: function() { return this.privTextResponse.nickname }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "participantId", { get: function() { return this.privTextResponse.participantId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "roomid", { get: function() { return this.privTextResponse.roomid }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "timestamp", { get: function() { return this.privTextResponse.timestamp }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "type", { get: function() { return this.privTextResponse.type }, enumerable: !0, configurable: !0 }), n
    }();
    t.TextResponsePayload = r
}, function(n, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function n(n) { this.privSynthesisAudioMetadata = JSON.parse(n) }
        return n.fromJSON = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "Metadata", { get: function() { return this.privSynthesisAudioMetadata.Metadata }, enumerable: !0, configurable: !0 }), n
    }();
    t.SynthesisAudioMetadata = i
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        f = i(36),
        e = i(152),
        u = i(153),
        o = function() {
            function n() {
                var n = this;
                this.privIsDisposed = !1;
                this.privIsSynthesizing = !1;
                this.privIsSynthesisEnded = !1;
                this.privBytesReceived = 0;
                this.privTextOffset = 0;
                this.onPreConnectionStart = function(t) {
                    n.privAuthFetchEventId = t;
                    n.onEvent(new u.ConnectingToSynthesisServiceEvent(n.privRequestId, n.privAuthFetchEventId))
                };
                this.onAuthCompleted = function(t) { t && n.onComplete() };
                this.onConnectionEstablishCompleted = function(t) {
                    if (t === 200) {
                        n.onEvent(new u.SynthesisStartedEvent(n.requestId, n.privAuthFetchEventId));
                        n.privBytesReceived = 0;
                        return
                    }
                    t === 403 && n.onComplete()
                };
                this.onServiceResponseMessage = function(t) {
                    var i = JSON.parse(t);
                    n.streamId = i.audio.streamId
                };
                this.onServiceTurnEndResponse = function() {
                    n.privTurnDeferral.resolve(!0);
                    n.onComplete()
                };
                this.onServiceTurnStartResponse = function() {
                    n.privTurnDeferral.state() === r.PromiseState.None && n.privTurnDeferral.reject("Another turn started before current completed.");
                    n.privTurnDeferral = new r.Deferred
                };
                this.dispose = function() { n.privIsDisposed || (n.privIsDisposed = !0) };
                this.onEvent = function(n) { r.Events.instance.onEvent(n) };
                this.onComplete = function() { n.privIsSynthesizing && (n.privIsSynthesizing = !1, n.privIsSynthesisEnded = !0, n.privAudioOutputStream.close(), n.privTurnAudioDestination !== undefined && (n.privTurnAudioDestination.close(), n.privTurnAudioDestination = undefined)) };
                this.privRequestId = r.createNoDashGuid();
                this.privAudioNodeId = r.createNoDashGuid();
                this.privTurnDeferral = new r.Deferred;
                this.privTurnDeferral.resolve(!0)
            }
            return Object.defineProperty(n.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "streamId", { get: function() { return this.privStreamId }, set: function(n) { this.privStreamId = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "audioOutputFormat", { get: function() { return this.privAudioOutputFormat }, set: function(n) { this.privAudioOutputFormat = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "turnCompletionPromise", { get: function() { return this.privTurnDeferral.promise() }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isSynthesisEnded", { get: function() { return this.privIsSynthesisEnded }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "isSynthesizing", { get: function() { return this.privIsSynthesizing }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "currentTextOffset", { get: function() { return this.privTextOffset }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "bytesReceived", { get: function() { return this.privBytesReceived }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "allReceivedAudio", { get: function() { return !this.privReceivedAudio ? this.privIsSynthesisEnded ? (this.readAllAudioFromStream(), this.allReceivedAudio) : null : this.privReceivedAudio }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "allReceivedAudioWithHeader", { get: function() { return !this.privReceivedAudioWithHeader ? this.privIsSynthesisEnded ? this.audioOutputFormat.hasHeader ? (this.privReceivedAudioWithHeader = e.SynthesisAdapterBase.addHeader(this.allReceivedAudio, this.audioOutputFormat), this.allReceivedAudioWithHeader) : this.allReceivedAudio : null : this.privReceivedAudioWithHeader }, enumerable: !0, configurable: !0 }), n.prototype.startNewSynthesis = function(n, t, i, r) {
                this.privIsSynthesisEnded = !1;
                this.privIsSynthesizing = !0;
                this.privRequestId = n;
                this.privRawText = t;
                this.privIsSSML = i;
                this.privAudioOutputStream = new f.PullAudioOutputStreamImpl;
                this.privAudioOutputStream.format = this.privAudioOutputFormat;
                this.privReceivedAudio = null;
                this.privReceivedAudioWithHeader = null;
                this.privBytesReceived = 0;
                r !== undefined && (this.privTurnAudioDestination = r, this.privTurnAudioDestination.format = this.privAudioOutputFormat);
                this.onEvent(new u.SynthesisTriggeredEvent(this.requestId, undefined, r === undefined ? undefined : r.id()))
            }, n.prototype.onAudioChunkReceived = function(n) { this.isSynthesizing && (this.privAudioOutputStream.write(n), this.privBytesReceived += n.byteLength, this.privTurnAudioDestination !== undefined && this.privTurnAudioDestination.write(n)) }, n.prototype.onWordBoundaryEvent = function(n) { this.updateTextOffset(n) }, n.prototype.onStopSynthesizing = function() { this.onComplete() }, n.prototype.updateTextOffset = function(n) { this.privTextOffset >= 0 && (this.privTextOffset = this.privRawText.indexOf(n, this.privTextOffset + this.privTextOffset > 0 ? 1 : 0), this.privIsSSML && this.privRawText.indexOf("<", this.privTextOffset + 1) > this.privRawText.indexOf(">", this.privTextOffset + 1) && this.updateTextOffset(n)) }, n.prototype.readAllAudioFromStream = function() { if (this.privIsSynthesisEnded) { this.privReceivedAudio = new ArrayBuffer(this.bytesReceived); try { this.privAudioOutputStream.read(this.privReceivedAudio) } catch (n) { this.privReceivedAudio = new ArrayBuffer(0) } } }, n
        }();
    t.SynthesisTurn = o
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = i(4),
        r = i(30),
        f = i(25),
        e = i(107),
        o = function() {
            function n(t, i, o, s, h) {
                var c = this;
                if (this.speakOverride = undefined, this.receiveMessageOverride = undefined, this.connectImplOverride = undefined, this.configConnectionOverride = undefined, this.fetchConnectionOverride = undefined, this.receiveMessage = function() {
                        return c.fetchConnection().on(function(t) {
                            return t.read().onSuccessContinueWithPromise(function(t) {
                                var i, v, y, h, a, o, s, l;
                                if (c.receiveMessageOverride !== undefined) return c.receiveMessageOverride();
                                if (c.privIsDisposed) return u.PromiseHelper.fromResult(undefined);
                                if (!t) return c.privSynthesisTurn.isSynthesizing ? c.receiveMessage() : u.PromiseHelper.fromResult(!0);
                                if (c.privServiceHasSentMessage = !0, i = e.SpeechConnectionMessage.fromConnectionMessage(t), i.requestId.toLowerCase() === c.privSynthesisTurn.requestId.toLowerCase()) switch (i.path.toLowerCase()) {
                                    case "turn.start":
                                        c.privSynthesisTurn.onServiceTurnStartResponse();
                                        break;
                                    case "response":
                                        c.privSynthesisTurn.onServiceResponseMessage(i.textBody);
                                        break;
                                    case "audio":
                                        if (c.privSynthesisTurn.streamId.toLowerCase() === i.streamId.toLowerCase() && !!i.binaryBody) {
                                            c.privSynthesisTurn.onAudioChunkReceived(i.binaryBody);
                                            if (!!c.privSpeechSynthesizer.synthesizing) try {
                                                v = n.addHeader(i.binaryBody, c.privSynthesisTurn.audioOutputFormat);
                                                s = new r.SpeechSynthesisEventArgs(new r.SpeechSynthesisResult(c.privSynthesisTurn.requestId, r.ResultReason.SynthesizingAudio, v));
                                                c.privSpeechSynthesizer.synthesizing(c.privSpeechSynthesizer, s)
                                            } catch (p) {}
                                            c.privSessionAudioDestination !== undefined && c.privSessionAudioDestination.write(i.binaryBody)
                                        }
                                        break;
                                    case "audio.metadata":
                                        for (y = f.SynthesisAudioMetadata.fromJSON(i.textBody).Metadata, h = 0, a = y; h < a.length; h++)
                                            if (o = a[h], o.Type.toLowerCase() === "WordBoundary".toLowerCase()) { c.privSynthesisTurn.onWordBoundaryEvent(o.Data.text.Text); if (s = new r.SpeechSynthesisWordBoundaryEventArgs(o.Data.Offset, o.Data.text.Text, o.Data.text.Length, c.privSynthesisTurn.currentTextOffset), !!c.privSpeechSynthesizer.wordBoundary) try { c.privSpeechSynthesizer.wordBoundary(c.privSpeechSynthesizer, s) } catch (p) {} }
                                        break;
                                    case "turn.end":
                                        c.privSynthesisTurn.onServiceTurnEndResponse();
                                        l = void 0;
                                        try { l = new r.SpeechSynthesisResult(c.privSynthesisTurn.requestId, r.ResultReason.SynthesizingAudioCompleted, c.privSynthesisTurn.allReceivedAudioWithHeader);!c.privSuccessCallback || c.privSuccessCallback(l) } catch (p) {!c.privErrorCallback || c.privErrorCallback(p) }
                                        if (c.privSpeechSynthesizer.synthesisCompleted) try { c.privSpeechSynthesizer.synthesisCompleted(c.privSpeechSynthesizer, new r.SpeechSynthesisEventArgs(l)) } catch (w) {}
                                        break;
                                    default:
                                        if (!c.processTypeSpecificMessages(i) && !!c.privServiceEvents) c.serviceEvents.onEvent(new u.ServiceEvent(i.path.toLowerCase(), i.textBody))
                                }
                                return c.receiveMessage()
                            })
                        }, function() {})
                    }, this.sendSynthesisContext = function(n) { var t = JSON.stringify(c.buildSynthesisContext()); return t ? n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "synthesis.context", c.privSynthesisTurn.requestId, "application/json", t)) : u.PromiseHelper.fromResult(!0) }, this.sendSpeechServiceConfig = function(n, t) { return t ? n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "speech.config", c.privSynthesisTurn.requestId, "application/json", t)) : u.PromiseHelper.fromResult(!0) }, this.sendSsmlMessage = function(n, t, i) { return n.send(new e.SpeechConnectionMessage(u.MessageType.Text, "ssml", i, "application/ssml+xml", t)) }, this.fetchConnection = function() { return c.fetchConnectionOverride !== undefined ? c.fetchConnectionOverride() : c.configureConnection() }, !t) throw new u.ArgumentNullError("authentication");
                if (!i) throw new u.ArgumentNullError("connectionFactory");
                if (!o) throw new u.ArgumentNullError("synthesizerConfig");
                this.privAuthentication = t;
                this.privConnectionFactory = i;
                this.privSynthesizerConfig = o;
                this.privIsDisposed = !1;
                this.privSpeechSynthesizer = s;
                this.privSessionAudioDestination = h;
                this.privSynthesisTurn = new f.SynthesisTurn;
                this.privConnectionEvents = new u.EventSource;
                this.privServiceEvents = new u.EventSource;
                this.privDynamicGrammar = new f.DynamicGrammarBuilder;
                this.privSpeechContext = new f.SpeechContext(this.privDynamicGrammar);
                this.privAgentConfig = new f.AgentConfig;
                this.connectionEvents.attach(function(n) {
                    if (n.name === "ConnectionClosedEvent") {
                        var t = n;
                        c.cancelSynthesisLocal(r.CancellationReason.Error, t.statusCode === 1007 ? r.CancellationErrorCode.BadRequestParameters : r.CancellationErrorCode.ConnectionFailure, t.reason + " websocket error code: " + t.statusCode)
                    }
                })
            }
            return Object.defineProperty(n.prototype, "synthesisContext", { get: function() { return this.privSpeechContext }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "dynamicGrammar", { get: function() { return this.privDynamicGrammar }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "agentConfig", { get: function() { return this.privAgentConfig }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "connectionEvents", { get: function() { return this.privConnectionEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "serviceEvents", { get: function() { return this.privServiceEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "activityTemplate", { get: function() { return this.privActivityTemplate }, set: function(n) { this.privActivityTemplate = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "audioOutputFormat", {
                set: function(n) {
                    this.privAudioOutputFormat = n;
                    this.privSynthesisTurn.audioOutputFormat = n;
                    this.privSessionAudioDestination !== undefined && (this.privSessionAudioDestination.format = n)
                },
                enumerable: !0,
                configurable: !0
            }), n.addHeader = function(n, t) {
                if (!t.hasHeader) return n;
                t.updateHeader(n.byteLength);
                var i = new Uint8Array(n.byteLength + t.header.byteLength);
                return i.set(new Uint8Array(t.header), 0), i.set(new Uint8Array(n), t.header.byteLength), i.buffer
            }, n.prototype.isDisposed = function() { return this.privIsDisposed }, n.prototype.dispose = function(n) { if (this.privIsDisposed = !0, this.privSessionAudioDestination !== undefined && this.privSessionAudioDestination.close(), this.privConnectionConfigurationPromise) this.privConnectionConfigurationPromise.onSuccessContinueWith(function(t) { t.dispose(n) }) }, n.prototype.connect = function() { this.connectImpl().result() }, n.prototype.connectAsync = function(n, t) { this.connectImpl().continueWith(function(i) { try { i.isError ? !t || t(i.error) : i.isCompleted && (!n || n()) } catch (r) {!t || t(r) } }) }, n.prototype.Speak = function(n, t, i, f, e, o) {
                var s = this,
                    h;
                return (h = t ? n : r.SpeechSynthesizer.buildSsml(n, this.privSynthesizerConfig.parameters), this.speakOverride !== undefined) ? this.speakOverride(h, i, f, e) : (this.privSuccessCallback = f, this.privErrorCallback = e, this.privSynthesisTurn.startNewSynthesis(i, n, t, o), this.fetchConnection().continueWithPromise(function(n) { return n.isError ? (s.cancelSynthesisLocal(r.CancellationReason.Error, r.CancellationErrorCode.ConnectionFailure, n.error), u.PromiseHelper.fromError(n.error)) : s.sendSynthesisContext(n.result).continueWithPromise(function(t) { return t.isError ? (s.cancelSynthesisLocal(r.CancellationReason.Error, r.CancellationErrorCode.ConnectionFailure, t.error), u.PromiseHelper.fromError(t.error)) : s.sendSsmlMessage(n.result, h, i).continueWithPromise(function(n) { var t, f; return n.isError ? (s.cancelSynthesisLocal(r.CancellationReason.Error, r.CancellationErrorCode.ConnectionFailure, n.error), u.PromiseHelper.fromError(n.error)) : (t = new r.SpeechSynthesisEventArgs(new r.SpeechSynthesisResult(i, r.ResultReason.SynthesizingAudioStarted)), !s.privSpeechSynthesizer.synthesisStarted || s.privSpeechSynthesizer.synthesisStarted(s.privSpeechSynthesizer, t), f = s.receiveMessage(), u.PromiseHelper.fromResult(!0)) }) }) }))
            }, n.prototype.cancelSynthesis = function(n, t, i, u) {
                var o = new r.PropertyCollection,
                    e, s;
                if (o.setProperty(f.CancellationErrorCodePropertyName, r.CancellationErrorCode[i]), e = new r.SpeechSynthesisResult(n, r.ResultReason.Canceled, undefined, u, o), !!this.privSpeechSynthesizer.SynthesisCanceled) { s = new r.SpeechSynthesisEventArgs(e); try { this.privSpeechSynthesizer.SynthesisCanceled(this.privSpeechSynthesizer, s) } catch (h) {} }
                if (!!this.privSuccessCallback) try {
                    this.privSuccessCallback(e);
                    this.privSuccessCallback = undefined
                } catch (c) {}
            }, n.prototype.cancelSynthesisLocal = function(n, t, i) {!this.privSynthesisTurn.isSynthesizing || (this.privSynthesisTurn.onStopSynthesizing(), this.cancelSynthesis(this.privSynthesisTurn.requestId, n, t, i)) }, n.prototype.processTypeSpecificMessages = function() { return !0 }, n.prototype.connectImpl = function(n) {
                var t = this,
                    i;
                if (n === void 0 && (n = !1), this.connectImplOverride !== undefined) return this.connectImplOverride(n);
                if (this.privConnectionPromise) return this.privConnectionPromise.result().isCompleted && (this.privConnectionPromise.result().isError || this.privConnectionPromise.result().result.state() === u.ConnectionState.Disconnected) && this.privServiceHasSentMessage === !0 ? (this.privConnectionId = null, this.privConnectionPromise = null, this.privServiceHasSentMessage = !1, this.connectImpl()) : this.privConnectionPromise;
                this.privAuthFetchEventId = u.createNoDashGuid();
                this.privConnectionId = u.createNoDashGuid();
                this.privSynthesisTurn.onPreConnectionStart(this.privAuthFetchEventId, this.privConnectionId);
                return i = n ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId) : this.privAuthentication.fetch(this.privAuthFetchEventId), this.privConnectionPromise = i.continueWithPromise(function(i) {
                    if (i.isError) throw new Error(i.error);
                    var f = t.privConnectionFactory.create(t.privSynthesizerConfig, i.result, t.privConnectionId);
                    f.events.attach(function(n) { t.connectionEvents.onEvent(n) });
                    return f.open().onSuccessContinueWithPromise(function(i) {
                        if (i.statusCode === 200) {
                            t.privSynthesisTurn.onPreConnectionStart(t.privAuthFetchEventId, t.privConnectionId);
                            t.privSynthesisTurn.onConnectionEstablishCompleted(i.statusCode);
                            return u.PromiseHelper.fromResult(f)
                        }
                        if (i.statusCode !== 403 || n) { t.privSynthesisTurn.onConnectionEstablishCompleted(i.statusCode, i.reason); return u.PromiseHelper.fromError("Unable to contact server. StatusCode: " + i.statusCode + ", " + t.privSynthesizerConfig.parameters.getProperty(r.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + i.reason) }
                        return t.connectImpl(!0)
                    })
                }), this.privConnectionPromise
            }, n.prototype.configureConnection = function() { var n = this; return this.configConnectionOverride !== undefined ? this.configConnectionOverride() : this.privConnectionConfigurationPromise ? this.privConnectionConfigurationPromise.result().isCompleted && (this.privConnectionConfigurationPromise.result().isError || this.privConnectionConfigurationPromise.result().result.state() === u.ConnectionState.Disconnected) ? (this.privConnectionConfigurationPromise = null, this.configureConnection()) : this.privConnectionConfigurationPromise : (this.privConnectionConfigurationPromise = this.connectImpl().onSuccessContinueWithPromise(function(t) { return n.sendSpeechServiceConfig(t, n.privSynthesizerConfig.SpeechServiceConfig.serialize()).onSuccessContinueWith(function() { return t }) }), this.privConnectionConfigurationPromise) }, n.prototype.buildSynthesisContext = function() { return { synthesis: { audio: { metadataOptions: { sentenceBoundaryEnabled: !1, wordBoundaryEnabled: !!this.privSpeechSynthesizer.wordBoundary }, outputFormat: this.privAudioOutputFormat.requestAudioFormatString } } } }, n.telemetryDataEnabled = !0, n
        }();
    t.SynthesisAdapterBase = o
}, function(n, t, i) {
    "use strict";
    var u = this && this.__extends || function() {
            var n = function(t, i) {
                return n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }, n(t, i)
            };
            return function(t, i) {
                function r() { this.constructor = t }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        f, r, e, o, s;
    Object.defineProperty(t, "__esModule", { value: !0 });
    f = i(4);
    r = function(n) {
        function t(t, i, r) { r === void 0 && (r = f.EventType.Info); var u = n.call(this, t, r) || this; return u.privRequestId = i, u }
        return u(t, n), Object.defineProperty(t.prototype, "requestId", { get: function() { return this.privRequestId }, enumerable: !0, configurable: !0 }), t
    }(f.PlatformEvent);
    t.SpeechSynthesisEvent = r;
    e = function(n) {
        function t(t, i, r) { var u = n.call(this, "SynthesisTriggeredEvent", t) || this; return u.privSessionAudioDestinationId = i, u.privTurnAudioDestinationId = r, u }
        return u(t, n), Object.defineProperty(t.prototype, "audioSessionDestinationId", { get: function() { return this.privSessionAudioDestinationId }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "audioTurnDestinationId", { get: function() { return this.privTurnAudioDestinationId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.SynthesisTriggeredEvent = e;
    o = function(n) {
        function t(t, i) { var r = n.call(this, "ConnectingToSynthesisServiceEvent", t) || this; return r.privAuthFetchEventId = i, r }
        return u(t, n), Object.defineProperty(t.prototype, "authFetchEventId", { get: function() { return this.privAuthFetchEventId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.ConnectingToSynthesisServiceEvent = o;
    s = function(n) {
        function t(t, i) { var r = n.call(this, "SynthesisStartedEvent", t) || this; return r.privAuthFetchEventId = i, r }
        return u(t, n), Object.defineProperty(t.prototype, "authFetchEventId", { get: function() { return this.privAuthFetchEventId }, enumerable: !0, configurable: !0 }), t
    }(r);
    t.SynthesisStartedEvent = s
}, function(n, t, i) {
    "use strict";
    var r, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(25),
        function(n) {
            n[n.Standard = 0] = "Standard";
            n[n.Custom = 1] = "Custom"
        }(u = t.SynthesisServiceType || (t.SynthesisServiceType = {}));
    f = function() {
        function n(n, t) {
            this.privSynthesisServiceType = u.Standard;
            this.privSpeechServiceConfig = n ? n : new r.SpeechServiceConfig(new r.Context(null));
            this.privParameters = t
        }
        return Object.defineProperty(n.prototype, "parameters", { get: function() { return this.privParameters }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "synthesisServiceType", { get: function() { return this.privSynthesisServiceType }, set: function(n) { this.privSynthesisServiceType = n }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "SpeechServiceConfig", { get: function() { return this.privSpeechServiceConfig }, enumerable: !0, configurable: !0 }), n
    }();
    t.SynthesizerConfig = f
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var f = i(24),
        u = i(25),
        r = i(4),
        e = function() {
            function n(n, t) {
                var i = this;
                this.privStreams = {};
                this.turnOn = function() {
                    var n;
                    if (typeof FileReader == "undefined") {
                        n = "Browser does not support FileReader.";
                        i.onEvent(new r.AudioSourceErrorEvent(n, ""));
                        return r.PromiseHelper.fromError(n)
                    }
                    if (i.privFile.name.lastIndexOf(".wav") !== i.privFile.name.length - 4) {
                        n = i.privFile.name + " is not supported. Only WAVE files are allowed at the moment.";
                        i.onEvent(new r.AudioSourceErrorEvent(n, ""));
                        return r.PromiseHelper.fromError(n)
                    }
                    i.onEvent(new r.AudioSourceInitializingEvent(i.privId));
                    i.onEvent(new r.AudioSourceReadyEvent(i.privId));
                    return r.PromiseHelper.fromResult(!0)
                };
                this.id = function() { return i.privId };
                this.attach = function(n) {
                    i.onEvent(new r.AudioStreamNodeAttachingEvent(i.privId, n));
                    return i.upload(n).onSuccessContinueWith(function(t) {
                        i.onEvent(new r.AudioStreamNodeAttachedEvent(i.privId, n));
                        return {
                            detach: function() {
                                t.close();
                                delete i.privStreams[n];
                                i.onEvent(new r.AudioStreamNodeDetachedEvent(i.privId, n));
                                i.turnOff()
                            },
                            id: function() { return n },
                            read: function() { return t.read() }
                        }
                    })
                };
                this.detach = function(n) {
                    if (n && i.privStreams[n]) {
                        i.privStreams[n].close();
                        delete i.privStreams[n];
                        i.onEvent(new r.AudioStreamNodeDetachedEvent(i.privId, n))
                    }
                };
                this.turnOff = function() {
                    var t, n;
                    for (t in i.privStreams) t && (n = i.privStreams[t], n && !n.isClosed && n.close());
                    i.onEvent(new r.AudioSourceOffEvent(i.privId));
                    return r.PromiseHelper.fromResult(!0)
                };
                this.readHeader = function() {
                    var u = i.privFile.slice(0, 44),
                        t = new FileReader,
                        n = new r.Deferred,
                        e = function(t) {
                            var u = t.target.result,
                                i = new DataView(u),
                                e = String.fromCharCode(i.getUint8(0), i.getUint8(1), i.getUint8(2), i.getUint8(3)),
                                r;
                            "RIFF" !== e && n.reject("Invalid WAV header in file, RIFF was not found");
                            r = String.fromCharCode(i.getUint8(8), i.getUint8(9), i.getUint8(10), i.getUint8(11), i.getUint8(12), i.getUint8(13), i.getUint8(14));
                            "WAVEfmt" !== r && n.reject("Invalid WAV header in file, WAVEfmt was not found");
                            var o = i.getUint16(22, !0),
                                s = i.getUint32(24, !0),
                                h = i.getUint16(34, !0);
                            n.resolve(f.AudioStreamFormat.getWaveFormatPCM(s, h, o))
                        };
                    return t.onload = e, t.readAsArrayBuffer(u), n.promise()
                };
                this.upload = function(n) {
                    return i.turnOn().onSuccessContinueWithPromise(function() {
                        return i.privAudioFormatPromise.onSuccessContinueWith(function(t) {
                            var s = new r.ChunkedArrayBufferStream(3200),
                                f = new FileReader,
                                u = new r.ChunkedArrayBufferStream(t.avgBytesPerSec / 10, n),
                                e, o;
                            return i.privStreams[n] = u, e = function() { u.isClosed || (u.writeStreamChunk({ buffer: f.result, isEnd: !1, timeReceived: Date.now() }), u.close()) }, f.onload = e, f.onerror = function(t) {
                                var u = "Error occurred while processing '" + i.privFile.name + "'. " + t;
                                i.onEvent(new r.AudioStreamNodeErrorEvent(i.privId, n, u));
                                throw new Error(u);
                            }, o = i.privFile.slice(44), f.readAsArrayBuffer(o), u.getReader()
                        })
                    })
                };
                this.onEvent = function(n) {
                    i.privEvents.onEvent(n);
                    r.Events.instance.onEvent(n)
                };
                this.privId = t ? t : r.createNoDashGuid();
                this.privEvents = new r.EventSource;
                this.privFile = n;
                this.privAudioFormatPromise = this.readHeader()
            }
            return Object.defineProperty(n.prototype, "format", { get: function() { return this.privAudioFormatPromise }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "events", { get: function() { return this.privEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "deviceInfo", { get: function() { return this.privAudioFormatPromise.onSuccessContinueWithPromise(function(n) { return r.PromiseHelper.fromResult({ bitspersample: n.bitsPerSample, channelcount: n.channels, connectivity: u.connectivity.Unknown, manufacturer: "Speech SDK", model: "File", samplerate: n.samplesPerSec, type: u.type.File }) }) }, enumerable: !0, configurable: !0 }), n
        }();
    t.FileAudioSource = e
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = function() {
            function n() {
                var n = this;
                this.record = function(t, i, u) {
                    var o = 16e3,
                        f = function() {
                            var n = 0,
                                i;
                            try { return t.createScriptProcessor(n, 1, 1) } catch (r) { for (n = 2048, i = t.sampleRate; n < 16384 && i >= 2 * o;) n <<= 1, i >>= 1; return t.createScriptProcessor(n, 1, 1) }
                        }(),
                        s = new r.RiffPcmEncoder(t.sampleRate, o),
                        h = !0,
                        c = n,
                        e;
                    f.onaudioprocess = function(n) {
                        var i = n.inputBuffer.getChannelData(0),
                            t;
                        u && !u.isClosed && (t = s.encode(i), !t || (u.writeStreamChunk({ buffer: t, isEnd: !1, timeReceived: Date.now() }), h = !1))
                    };
                    e = t.createMediaStreamSource(i);
                    !n.privSpeechProcessorScript || !t.audioWorklet ? (e.connect(f), f.connect(t.destination), n.privMediaResources = { scriptProcessorNode: f, source: e, stream: i }) : t.audioWorklet.addModule(n.privSpeechProcessorScript).then(function() {
                        var r = new AudioWorkletNode(t, "speech-processor");
                        r.port.onmessage = function(n) {
                            var i = n.data,
                                t;
                            u && !u.isClosed && (t = s.encode(i), !t || (u.writeStreamChunk({ buffer: t, isEnd: !1, timeReceived: Date.now() }), h = !1))
                        };
                        e.connect(r);
                        r.connect(t.destination);
                        n.privMediaResources = { scriptProcessorNode: r, source: e, stream: i }
                    }).catch(function() {
                        e.connect(f);
                        f.connect(t.destination);
                        n.privMediaResources = { scriptProcessorNode: f, source: e, stream: i }
                    })
                };
                this.releaseMediaResources = function(t) { n.privMediaResources && (n.privMediaResources.scriptProcessorNode && (n.privMediaResources.scriptProcessorNode.disconnect(t.destination), n.privMediaResources.scriptProcessorNode = null), n.privMediaResources.source && (n.privMediaResources.source.disconnect(), n.privMediaResources.stream.getTracks().forEach(function(n) { return n.stop() }), n.privMediaResources.source = null)) }
            }
            return n.prototype.setWorkletUrl = function(n) { this.privSpeechProcessorScript = n }, n
        }();
    t.PcmRecorder = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = i(158),
        f = function() {
            function n(n, t, i, f, e, o) {
                var s = this,
                    h, c, l, v, a;
                if (this.privIsDisposed = !1, this.dispose = function() {
                        s.privIsDisposed = !0;
                        s.privConnectionMessageAdapter && s.privConnectionMessageAdapter.close()
                    }, this.isDisposed = function() { return s.privIsDisposed }, this.state = function() { return s.privConnectionMessageAdapter.state }, this.open = function() { return s.privConnectionMessageAdapter.open() }, this.send = function(n) { return s.privConnectionMessageAdapter.send(n) }, this.read = function() { return s.privConnectionMessageAdapter.read() }, !n) throw new r.ArgumentNullError("uri");
                if (!f) throw new r.ArgumentNullError("messageFormatter");
                if (this.privMessageFormatter = f, h = "", c = 0, t)
                    for (l in t) l && (h += c === 0 && n.indexOf("?") === -1 ? "?" : "&", a = encodeURIComponent(t[l]), h += l + "=" + a, c++);
                if (i)
                    for (v in i) v && (h += c === 0 ? "?" : "&", a = encodeURIComponent(i[v]), h += v + "=" + a, c++);
                this.privUri = n + h;
                this.privId = o ? o : r.createNoDashGuid();
                this.privConnectionMessageAdapter = new u.WebsocketMessageAdapter(this.privUri, this.id, this.privMessageFormatter, e, i)
            }
            return Object.defineProperty(n.prototype, "id", { get: function() { return this.privId }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "events", { get: function() { return this.privConnectionMessageAdapter.events }, enumerable: !0, configurable: !0 }), n
        }();
    t.WebsocketConnection = f
}, function(n, t, i) {
    "use strict";
    (function(n, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = i(4),
            o = i(165),
            f = i(166),
            e = i(167),
            s = function() {
                function t(i, s, h, c, l) {
                    var a = this;
                    if (this.open = function() {
                            var i, s, l, h, c;
                            if (a.privConnectionState === u.ConnectionState.Disconnected) return u.PromiseHelper.fromError("Cannot open a connection that is in " + a.privConnectionState + " state");
                            if (a.privConnectionEstablishDeferral) return a.privConnectionEstablishDeferral.promise();
                            a.privConnectionEstablishDeferral = new u.Deferred;
                            a.privCertificateValidatedDeferral = new u.Deferred;
                            a.privConnectionState = u.ConnectionState.Connecting;
                            try {
                                i = typeof n != "undefined" && n.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0" && !a.privUri.startsWith("ws:");
                                typeof WebSocket == "undefined" || t.forceNpmWebSocket ? a.proxyInfo !== undefined && a.proxyInfo.HostName !== undefined && a.proxyInfo.Port > 0 ? (s = { host: a.proxyInfo.HostName, port: a.proxyInfo.Port }, undefined !== a.proxyInfo.UserName && (s.headers = { "Proxy-Authentication": "Basic " + new r(a.proxyInfo.UserName + ":" + (a.proxyInfo.Password === undefined) ? "" : a.proxyInfo.Password).toString("base64") }, i && (s.headers.requestOCSP = "true")), l = new o(s), h = { agent: l, headers: a.privHeaders }, a.privWebsocketClient = new f(a.privUri, h), i ? a.privWebsocketClient.addListener("upgrade", function(n) {
                                    var t = n.socket,
                                        i = t.getPeerCertificate(!0);
                                    t.cork();
                                    e.check({ cert: i.raw, httpOptions: h, issuer: i.issuerCertificate.raw }, function(n) { n ? (a.privCertificateValidatedDeferral.reject(n.message), t.destroy(n)) : (a.privCertificateValidatedDeferral.resolve(!0), t.uncork()) })
                                }) : a.privCertificateValidatedDeferral.resolve(!0)) : (c = { headers: a.privHeaders }, a.privCertificateValidatedDeferral.resolve(!0), i && (c.agent = new e.Agent({})), a.privWebsocketClient = new f(a.privUri, c)) : (a.privCertificateValidatedDeferral.resolve(!0), a.privWebsocketClient = new WebSocket(a.privUri));
                                a.privWebsocketClient.binaryType = "arraybuffer";
                                a.privReceivingMessageQueue = new u.Queue;
                                a.privDisconnectDeferral = new u.Deferred;
                                a.privSendMessageQueue = new u.Queue;
                                a.processSendQueue()
                            } catch (v) { return a.privConnectionEstablishDeferral.resolve(new u.ConnectionOpenResponse(500, v)), a.privConnectionEstablishDeferral.promise() }
                            a.onEvent(new u.ConnectionStartEvent(a.privConnectionId, a.privUri));
                            return a.privWebsocketClient.onopen = function() {
                                a.privCertificateValidatedDeferral.promise().on(function() {
                                    a.privConnectionState = u.ConnectionState.Connected;
                                    a.onEvent(new u.ConnectionEstablishedEvent(a.privConnectionId));
                                    a.privConnectionEstablishDeferral.resolve(new u.ConnectionOpenResponse(200, ""))
                                }, function(n) { a.privConnectionEstablishDeferral.reject(n) })
                            }, a.privWebsocketClient.onerror = function(n) {
                                a.onEvent(new u.ConnectionErrorEvent(a.privConnectionId, n.message, n.type));
                                a.privLastErrorReceived = n.message
                            }, a.privWebsocketClient.onclose = function(n) {
                                if (a.privConnectionState === u.ConnectionState.Connecting) a.privConnectionState = u.ConnectionState.Disconnected, a.privConnectionEstablishDeferral.resolve(new u.ConnectionOpenResponse(n.code, n.reason + " " + a.privLastErrorReceived));
                                else a.onEvent(new u.ConnectionClosedEvent(a.privConnectionId, n.code, n.reason));
                                a.onClose(n.code, n.reason)
                            }, a.privWebsocketClient.onmessage = function(n) {
                                var r = (new Date).toISOString(),
                                    t, i;
                                if (a.privConnectionState === u.ConnectionState.Connected)
                                    if (t = new u.Deferred, a.privReceivingMessageQueue.enqueueFromPromise(t.promise()), n.data instanceof ArrayBuffer) {
                                        i = new u.RawWebsocketMessage(u.MessageType.Binary, n.data);
                                        a.privMessageFormatter.toConnectionMessage(i).on(function(n) {
                                            a.onEvent(new u.ConnectionMessageReceivedEvent(a.privConnectionId, r, n));
                                            t.resolve(n)
                                        }, function(n) { t.reject("Invalid binary message format. Error: " + n) })
                                    } else {
                                        i = new u.RawWebsocketMessage(u.MessageType.Text, n.data);
                                        a.privMessageFormatter.toConnectionMessage(i).on(function(n) {
                                            a.onEvent(new u.ConnectionMessageReceivedEvent(a.privConnectionId, r, n));
                                            t.resolve(n)
                                        }, function(n) { t.reject("Invalid text message format. Error: " + n) })
                                    }
                            }, a.privConnectionEstablishDeferral.promise()
                        }, this.send = function(n) {
                            if (a.privConnectionState !== u.ConnectionState.Connected) return u.PromiseHelper.fromError("Cannot send on connection that is in " + a.privConnectionState + " state");
                            var i = new u.Deferred,
                                t = new u.Deferred;
                            a.privSendMessageQueue.enqueueFromPromise(t.promise());
                            a.privMessageFormatter.fromConnectionMessage(n).on(function(r) { t.resolve({ Message: n, RawWebsocketMessage: r, sendStatusDeferral: i }) }, function(n) { t.reject("Error formatting the message. " + n) });
                            return i.promise()
                        }, this.read = function() { return a.privConnectionState !== u.ConnectionState.Connected ? u.PromiseHelper.fromError("Cannot read on connection that is in " + a.privConnectionState + " state") : a.privReceivingMessageQueue.dequeue() }, this.close = function(n) {
                            if (a.privWebsocketClient) a.privConnectionState !== u.ConnectionState.Disconnected && a.privWebsocketClient.close(1e3, n ? n : "Normal closure by client");
                            else { var t = new u.Deferred; return t.resolve(!0), t.promise() }
                            return a.privDisconnectDeferral.promise()
                        }, this.sendRawMessage = function(n) {
                            try {
                                if (!n) return u.PromiseHelper.fromResult(!0);
                                a.onEvent(new u.ConnectionMessageSentEvent(a.privConnectionId, (new Date).toISOString(), n.Message));
                                if (a.isWebsocketOpen) a.privWebsocketClient.send(n.RawWebsocketMessage.payload);
                                else return u.PromiseHelper.fromError("websocket send error: Websocket not ready");
                                return u.PromiseHelper.fromResult(!0)
                            } catch (t) { return u.PromiseHelper.fromError("websocket send error: " + t) }
                        }, this.onClose = function(n, t) {
                            var i = "Connection closed. " + n + ": " + t;
                            a.privConnectionState = u.ConnectionState.Disconnected;
                            a.privDisconnectDeferral.resolve(!0);
                            a.privReceivingMessageQueue.dispose(t);
                            a.privReceivingMessageQueue.drainAndDispose(function() {}, i);
                            a.privSendMessageQueue.drainAndDispose(function(n) { n.sendStatusDeferral.reject(i) }, i)
                        }, this.processSendQueue = function() {
                            a.privSendMessageQueue.dequeue().on(function(n) {
                                if (n) a.sendRawMessage(n).on(function(t) {
                                    n.sendStatusDeferral.resolve(t);
                                    a.processSendQueue()
                                }, function(t) {
                                    n.sendStatusDeferral.reject(t);
                                    a.processSendQueue()
                                })
                            }, function() {})
                        }, this.onEvent = function(n) {
                            a.privConnectionEvents.onEvent(n);
                            u.Events.instance.onEvent(n)
                        }, !i) throw new u.ArgumentNullError("uri");
                    if (!h) throw new u.ArgumentNullError("messageFormatter");
                    this.proxyInfo = c;
                    this.privConnectionEvents = new u.EventSource;
                    this.privConnectionId = s;
                    this.privMessageFormatter = h;
                    this.privConnectionState = u.ConnectionState.None;
                    this.privUri = i;
                    this.privHeaders = l;
                    this.privLastErrorReceived = ""
                }
                return Object.defineProperty(t.prototype, "state", { get: function() { return this.privConnectionState }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "events", { get: function() { return this.privConnectionEvents }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isWebsocketOpen", { get: function() { return this.privWebsocketClient && this.privWebsocketClient.readyState === this.privWebsocketClient.OPEN }, enumerable: !0, configurable: !0 }), t.forceNpmWebSocket = !1, t
            }();
        t.WebsocketMessageAdapter = s
    }).call(this, i(159), i(160).Buffer)
}, function(n) {
    function h() { throw new Error("setTimeout has not been defined"); }

    function c() { throw new Error("clearTimeout has not been defined"); }

    function l(n) { if (i === setTimeout) return setTimeout(n, 0); if ((i === h || !i) && setTimeout) return i = setTimeout, setTimeout(n, 0); try { return i(n, 0) } catch (t) { try { return i.call(null, n, 0) } catch (t) { return i.call(this, n, 0) } } }

    function y(n) { if (r === clearTimeout) return clearTimeout(n); if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(n); try { return r(n) } catch (t) { try { return r.call(null, n) } catch (t) { return r.call(this, n) } } }

    function p() { o && e && (o = !1, e.length ? u = e.concat(u) : s = -1, u.length && a()) }

    function a() {
        var t, n;
        if (!o) {
            for (t = l(p), o = !0, n = u.length; n;) {
                for (e = u, u = []; ++s < n;) e && e[s].run();
                s = -1;
                n = u.length
            }
            e = null;
            o = !1;
            y(t)
        }
    }

    function v(n, t) {
        this.fun = n;
        this.array = t
    }

    function f() {}
    var t = n.exports = {},
        i, r;
    (function() { try { i = typeof setTimeout == "function" ? setTimeout : h } catch (n) { i = h } try { r = typeof clearTimeout == "function" ? clearTimeout : c } catch (n) { r = c } })();
    var u = [],
        o = !1,
        e, s = -1;
    t.nextTick = function(n) {
        var i = new Array(arguments.length - 1),
            t;
        if (arguments.length > 1)
            for (t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
        u.push(new v(n, i));
        u.length !== 1 || o || l(a)
    };
    v.prototype.run = function() { this.fun.apply(null, this.array) };
    t.title = "browser";
    t.browser = !0;
    t.env = {};
    t.argv = [];
    t.version = "";
    t.versions = {};
    t.on = f;
    t.addListener = f;
    t.once = f;
    t.off = f;
    t.removeListener = f;
    t.removeAllListeners = f;
    t.emit = f;
    t.prependListener = f;
    t.prependOnceListener = f;
    t.listeners = function() { return [] };
    t.binding = function() { throw new Error("process.binding is not supported"); };
    t.cwd = function() { return "/" };
    t.chdir = function() { throw new Error("process.chdir is not supported"); };
    t.umask = function() { return 0 }
}, function(n, t, i) {
    "use strict";
    (function(n) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        function lt() { try { var n = new Uint8Array(1); return n.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, n.foo() === 42 && typeof n.subarray == "function" && n.subarray(1, 1).byteLength === 0 } catch (t) { return !1 } }

        function h() { return r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

        function e(n, t) { if (h() < t) throw new RangeError("Invalid typed array length"); return r.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t), n.__proto__ = r.prototype) : (n === null && (n = new r(t)), n.length = t), n }

        function r(n, t, i) { if (!r.TYPED_ARRAY_SUPPORT && !(this instanceof r)) return new r(n, t, i); if (typeof n == "number") { if (typeof t == "string") throw new Error("If encoding is specified then the first argument must be a string"); return p(this, n) } return g(this, n, t, i) }

        function g(n, t, i, r) { if (typeof t == "number") throw new TypeError('"value" argument must not be a number'); return typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer ? yt(n, t, i, r) : typeof t == "string" ? vt(n, t, i) : pt(n, t) }

        function nt(n) {
            if (typeof n != "number") throw new TypeError('"size" argument must be a number');
            else if (n < 0) throw new RangeError('"size" argument must not be negative');
        }

        function at(n, t, i, r) { return (nt(t), t <= 0) ? e(n, t) : i !== undefined ? typeof r == "string" ? e(n, t).fill(i, r) : e(n, t).fill(i) : e(n, t) }

        function p(n, t) {
            if (nt(t), n = e(n, t < 0 ? 0 : b(t) | 0), !r.TYPED_ARRAY_SUPPORT)
                for (var i = 0; i < t; ++i) n[i] = 0;
            return n
        }

        function vt(n, t, i) { var u, f; if ((typeof i != "string" || i === "") && (i = "utf8"), !r.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding'); return u = tt(t, i) | 0, n = e(n, u), f = n.write(t, i), f !== u && (n = n.slice(0, f)), n }

        function w(n, t) {
            var r = t.length < 0 ? 0 : b(t.length) | 0,
                i;
            for (n = e(n, r), i = 0; i < r; i += 1) n[i] = t[i] & 255;
            return n
        }

        function yt(n, t, i, u) { if (t.byteLength, i < 0 || t.byteLength < i) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < i + (u || 0)) throw new RangeError("'length' is out of bounds"); return t = i === undefined && u === undefined ? new Uint8Array(t) : u === undefined ? new Uint8Array(t, i) : new Uint8Array(t, i, u), r.TYPED_ARRAY_SUPPORT ? (n = t, n.__proto__ = r.prototype) : n = w(n, t), n }

        function pt(n, t) { if (r.isBuffer(t)) { var i = b(t.length) | 0; return (n = e(n, i), n.length === 0) ? n : (t.copy(n, 0, 0, i), n) } if (t) { if (typeof ArrayBuffer != "undefined" && t.buffer instanceof ArrayBuffer || "length" in t) return typeof t.length != "number" || vi(t.length) ? e(n, 0) : w(n, t); if (t.type === "Buffer" && d(t.data)) return w(n, t.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }

        function b(n) { if (n >= h()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + h().toString(16) + " bytes"); return n | 0 }

        function wt(n) { return +n != n && (n = 0), r.alloc(+n) }

        function tt(n, t) {
            var i, u;
            if (r.isBuffer(n)) return n.length;
            if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(n) || n instanceof ArrayBuffer)) return n.byteLength;
            if (typeof n != "string" && (n = "" + n), i = n.length, i === 0) return 0;
            for (u = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return i;
                case "utf8":
                case "utf-8":
                case undefined:
                    return a(n).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return i * 2;
                case "hex":
                    return i >>> 1;
                case "base64":
                    return ct(n).length;
                default:
                    if (u) return a(n).length;
                    t = ("" + t).toLowerCase();
                    u = !0
            }
        }

        function bt(n, t, i) {
            var r = !1;
            if (((t === undefined || t < 0) && (t = 0), t > this.length) || ((i === undefined || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, t >>>= 0, i <= t)) return "";
            for (n || (n = "utf8");;) switch (n) {
                case "hex":
                    return ei(this, t, i);
                case "utf8":
                case "utf-8":
                    return ft(this, t, i);
                case "ascii":
                    return ui(this, t, i);
                case "latin1":
                case "binary":
                    return fi(this, t, i);
                case "base64":
                    return ii(this, t, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return oi(this, t, i);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + n);
                    n = (n + "").toLowerCase();
                    r = !0
            }
        }

        function o(n, t, i) {
            var r = n[t];
            n[t] = n[i];
            n[i] = r
        }

        function it(n, t, i, u, f) {
            if (n.length === 0) return -1;
            if (typeof i == "string" ? (u = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = f ? 0 : n.length - 1), i < 0 && (i = n.length + i), i >= n.length) {
                if (f) return -1;
                i = n.length - 1
            } else if (i < 0)
                if (f) i = 0;
                else return -1;
            if (typeof t == "string" && (t = r.from(t, u)), r.isBuffer(t)) return t.length === 0 ? -1 : rt(n, t, i, u, f);
            if (typeof t == "number") return (t = t & 255, r.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") ? f ? Uint8Array.prototype.indexOf.call(n, t, i) : Uint8Array.prototype.lastIndexOf.call(n, t, i) : rt(n, [t], i, u, f);
            throw new TypeError("val must be string, number or Buffer");
        }

        function rt(n, t, i, r, u) {
            function l(n, t) { return h === 1 ? n[t] : n.readUInt16BE(t * h) }
            var h = 1,
                c = n.length,
                o = t.length,
                f, e, a, s;
            if (r !== undefined && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
                if (n.length < 2 || t.length < 2) return -1;
                h = 2;
                c /= 2;
                o /= 2;
                i /= 2
            }
            if (u)
                for (e = -1, f = i; f < c; f++)
                    if (l(n, f) === l(t, e === -1 ? 0 : f - e)) { if (e === -1 && (e = f), f - e + 1 === o) return e * h } else e !== -1 && (f -= f - e), e = -1;
            else
                for (i + o > c && (i = c - o), f = i; f >= 0; f--) {
                    for (a = !0, s = 0; s < o; s++)
                        if (l(n, f + s) !== l(t, s)) { a = !1; break }
                    if (a) return f
                }
            return -1
        }

        function kt(n, t, i, r) {
            var f, e, u, o;
            if (i = Number(i) || 0, f = n.length - i, r ? (r = Number(r), r > f && (r = f)) : r = f, e = t.length, e % 2 != 0) throw new TypeError("Invalid hex string");
            for (r > e / 2 && (r = e / 2), u = 0; u < r; ++u) {
                if (o = parseInt(t.substr(u * 2, 2), 16), isNaN(o)) return u;
                n[i + u] = o
            }
            return u
        }

        function dt(n, t, i, r) { return v(a(t, n.length - i), n, i, r) }

        function ut(n, t, i, r) { return v(li(t), n, i, r) }

        function gt(n, t, i, r) { return ut(n, t, i, r) }

        function ni(n, t, i, r) { return v(ct(t), n, i, r) }

        function ti(n, t, i, r) { return v(ai(t, n.length - i), n, i, r) }

        function ii(n, t, i) { return t === 0 && i === n.length ? y.fromByteArray(n) : y.fromByteArray(n.slice(t, i)) }

        function ft(n, t, i) {
            var h, f, e, s, l, u;
            for (i = Math.min(n.length, i), h = [], f = t; f < i;) {
                var o = n[f],
                    r = null,
                    c = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (f + c <= i) switch (c) {
                    case 1:
                        o < 128 && (r = o);
                        break;
                    case 2:
                        e = n[f + 1];
                        (e & 192) == 128 && (u = (o & 31) << 6 | e & 63, u > 127 && (r = u));
                        break;
                    case 3:
                        e = n[f + 1];
                        s = n[f + 2];
                        (e & 192) == 128 && (s & 192) == 128 && (u = (o & 15) << 12 | (e & 63) << 6 | s & 63, u > 2047 && (u < 55296 || u > 57343) && (r = u));
                        break;
                    case 4:
                        e = n[f + 1];
                        s = n[f + 2];
                        l = n[f + 3];
                        (e & 192) == 128 && (s & 192) == 128 && (l & 192) == 128 && (u = (o & 15) << 18 | (e & 63) << 12 | (s & 63) << 6 | l & 63, u > 65535 && u < 1114112 && (r = u))
                }
                r === null ? (r = 65533, c = 1) : r > 65535 && (r -= 65536, h.push(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023);
                h.push(r);
                f += c
            }
            return ri(h)
        }

        function ri(n) {
            var r = n.length,
                i, t;
            if (r <= k) return String.fromCharCode.apply(String, n);
            for (i = "", t = 0; t < r;) i += String.fromCharCode.apply(String, n.slice(t, t += k));
            return i
        }

        function ui(n, t, i) {
            var u = "",
                r;
            for (i = Math.min(n.length, i), r = t; r < i; ++r) u += String.fromCharCode(n[r] & 127);
            return u
        }

        function fi(n, t, i) {
            var u = "",
                r;
            for (i = Math.min(n.length, i), r = t; r < i; ++r) u += String.fromCharCode(n[r]);
            return u
        }

        function ei(n, t, i) {
            var f = n.length,
                u, r;
            for ((!t || t < 0) && (t = 0), (!i || i < 0 || i > f) && (i = f), u = "", r = t; r < i; ++r) u += ci(n[r]);
            return u
        }

        function oi(n, t, i) { for (var u = n.slice(t, i), f = "", r = 0; r < u.length; r += 2) f += String.fromCharCode(u[r] + u[r + 1] * 256); return f }

        function u(n, t, i) { if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint"); if (n + t > i) throw new RangeError("Trying to access beyond buffer length"); }

        function f(n, t, i, u, f, e) { if (!r.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > f || t < e) throw new RangeError('"value" argument is out of bounds'); if (i + u > n.length) throw new RangeError("Index out of range"); }

        function c(n, t, i, r) { t < 0 && (t = 65535 + t + 1); for (var u = 0, f = Math.min(n.length - i, 2); u < f; ++u) n[i + u] = (t & 255 << 8 * (r ? u : 1 - u)) >>> (r ? u : 1 - u) * 8 }

        function l(n, t, i, r) { t < 0 && (t = 4294967295 + t + 1); for (var u = 0, f = Math.min(n.length - i, 4); u < f; ++u) n[i + u] = t >>> (r ? u : 3 - u) * 8 & 255 }

        function et(n, t, i, r) { if (i + r > n.length) throw new RangeError("Index out of range"); if (i < 0) throw new RangeError("Index out of range"); }

        function ot(n, t, i, r, u) { return u || et(n, t, i, 4, 34028234663852886e22, -34028234663852886e22), s.write(n, t, i, r, 23, 4), i + 4 }

        function st(n, t, i, r, u) { return u || et(n, t, i, 8, 17976931348623157e292, -17976931348623157e292), s.write(n, t, i, r, 52, 8), i + 8 }

        function si(n) { if (n = hi(n).replace(ht, ""), n.length < 2) return ""; while (n.length % 4 != 0) n = n + "="; return n }

        function hi(n) { return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "") }

        function ci(n) { return n < 16 ? "0" + n.toString(16) : n.toString(16) }

        function a(n, t) {
            var f;
            t = t || Infinity;
            var i, e = n.length,
                u = null,
                r = [];
            for (f = 0; f < e; ++f) {
                if (i = n.charCodeAt(f), i > 55295 && i < 57344) {
                    if (!u) {
                        if (i > 56319) {
                            (t -= 3) > -1 && r.push(239, 191, 189);
                            continue
                        } else if (f + 1 === e) {
                            (t -= 3) > -1 && r.push(239, 191, 189);
                            continue
                        }
                        u = i;
                        continue
                    }
                    if (i < 56320) {
                        (t -= 3) > -1 && r.push(239, 191, 189);
                        u = i;
                        continue
                    }
                    i = (u - 55296 << 10 | i - 56320) + 65536
                } else u && (t -= 3) > -1 && r.push(239, 191, 189);
                if (u = null, i < 128) {
                    if ((t -= 1) < 0) break;
                    r.push(i)
                } else if (i < 2048) {
                    if ((t -= 2) < 0) break;
                    r.push(i >> 6 | 192, i & 63 | 128)
                } else if (i < 65536) {
                    if ((t -= 3) < 0) break;
                    r.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128)
                } else if (i < 1114112) {
                    if ((t -= 4) < 0) break;
                    r.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, i & 63 | 128)
                } else throw new Error("Invalid code point");
            }
            return r
        }

        function li(n) { for (var i = [], t = 0; t < n.length; ++t) i.push(n.charCodeAt(t) & 255); return i }

        function ai(n, t) {
            for (var i, f, e, r = [], u = 0; u < n.length; ++u) {
                if ((t -= 2) < 0) break;
                i = n.charCodeAt(u);
                f = i >> 8;
                e = i % 256;
                r.push(e);
                r.push(f)
            }
            return r
        }

        function ct(n) { return y.toByteArray(si(n)) }

        function v(n, t, i, r) {
            for (var u = 0; u < r; ++u) {
                if (u + i >= t.length || u >= n.length) break;
                t[u + i] = n[u]
            }
            return u
        }

        function vi(n) { return n !== n }
        var y = i(162),
            s = i(163),
            d = i(164),
            k, ht;
        t.Buffer = r;
        t.SlowBuffer = wt;
        t.INSPECT_MAX_BYTES = 50;
        r.TYPED_ARRAY_SUPPORT = n.TYPED_ARRAY_SUPPORT !== undefined ? n.TYPED_ARRAY_SUPPORT : lt();
        t.kMaxLength = h();
        r.poolSize = 8192;
        r._augment = function(n) { return n.__proto__ = r.prototype, n };
        r.from = function(n, t, i) { return g(null, n, t, i) };
        r.TYPED_ARRAY_SUPPORT && (r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, typeof Symbol != "undefined" && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, { value: null, configurable: !0 }));
        r.alloc = function(n, t, i) { return at(null, n, t, i) };
        r.allocUnsafe = function(n) { return p(null, n) };
        r.allocUnsafeSlow = function(n) { return p(null, n) };
        r.isBuffer = function(n) { return !!(n != null && n._isBuffer) };
        r.compare = function(n, t) {
            var u, f, i, e;
            if (!r.isBuffer(n) || !r.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (n === t) return 0;
            for (u = n.length, f = t.length, i = 0, e = Math.min(u, f); i < e; ++i)
                if (n[i] !== t[i]) {
                    u = n[i];
                    f = t[i];
                    break
                }
            return u < f ? -1 : f < u ? 1 : 0
        };
        r.isEncoding = function(n) {
            switch (String(n).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        };
        r.concat = function(n, t) {
            var i, f, e, u;
            if (!d(n)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (n.length === 0) return r.alloc(0);
            if (t === undefined)
                for (t = 0, i = 0; i < n.length; ++i) t += n[i].length;
            for (f = r.allocUnsafe(t), e = 0, i = 0; i < n.length; ++i) {
                if (u = n[i], !r.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                u.copy(f, e);
                e += u.length
            }
            return f
        };
        r.byteLength = tt;
        r.prototype._isBuffer = !0;
        r.prototype.swap16 = function() {
            var t = this.length,
                n;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (n = 0; n < t; n += 2) o(this, n, n + 1);
            return this
        };
        r.prototype.swap32 = function() {
            var t = this.length,
                n;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (n = 0; n < t; n += 4) o(this, n, n + 3), o(this, n + 1, n + 2);
            return this
        };
        r.prototype.swap64 = function() {
            var t = this.length,
                n;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (n = 0; n < t; n += 8) o(this, n, n + 7), o(this, n + 1, n + 6), o(this, n + 2, n + 5), o(this, n + 3, n + 4);
            return this
        };
        r.prototype.toString = function() { var n = this.length | 0; return n === 0 ? "" : arguments.length === 0 ? ft(this, 0, n) : bt.apply(this, arguments) };
        r.prototype.equals = function(n) { if (!r.isBuffer(n)) throw new TypeError("Argument must be a Buffer"); return this === n ? !0 : r.compare(this, n) === 0 };
        r.prototype.inspect = function() {
            var n = "",
                i = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (n = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (n += " ... ")), "<Buffer " + n + ">"
        };
        r.prototype.compare = function(n, t, i, u, f) {
            var e;
            if (!r.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
            if (t === undefined && (t = 0), i === undefined && (i = n ? n.length : 0), u === undefined && (u = 0), f === undefined && (f = this.length), t < 0 || i > n.length || u < 0 || f > this.length) throw new RangeError("out of range index");
            if (u >= f && t >= i) return 0;
            if (u >= f) return -1;
            if (t >= i) return 1;
            if (t >>>= 0, i >>>= 0, u >>>= 0, f >>>= 0, this === n) return 0;
            var o = f - u,
                s = i - t,
                l = Math.min(o, s),
                h = this.slice(u, f),
                c = n.slice(t, i);
            for (e = 0; e < l; ++e)
                if (h[e] !== c[e]) {
                    o = h[e];
                    s = c[e];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        };
        r.prototype.includes = function(n, t, i) { return this.indexOf(n, t, i) !== -1 };
        r.prototype.indexOf = function(n, t, i) { return it(this, n, t, i, !0) };
        r.prototype.lastIndexOf = function(n, t, i) { return it(this, n, t, i, !1) };
        r.prototype.write = function(n, t, i, r) {
            var u, f;
            if (t === undefined) r = "utf8", i = this.length, t = 0;
            else if (i === undefined && typeof t == "string") r = t, i = this.length, t = 0;
            else if (isFinite(t)) t = t | 0, isFinite(i) ? (i = i | 0, r === undefined && (r = "utf8")) : (r = i, i = undefined);
            else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            if (u = this.length - t, (i === undefined || i > u) && (i = u), n.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            for (r || (r = "utf8"), f = !1;;) switch (r) {
                case "hex":
                    return kt(this, n, t, i);
                case "utf8":
                case "utf-8":
                    return dt(this, n, t, i);
                case "ascii":
                    return ut(this, n, t, i);
                case "latin1":
                case "binary":
                    return gt(this, n, t, i);
                case "base64":
                    return ni(this, n, t, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ti(this, n, t, i);
                default:
                    if (f) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase();
                    f = !0
            }
        };
        r.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
        k = 4096;
        r.prototype.slice = function(n, t) {
            var i = this.length,
                u, e, f;
            if (n = ~~n, t = t === undefined ? i : ~~t, n < 0 ? (n += i, n < 0 && (n = 0)) : n > i && (n = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < n && (t = n), r.TYPED_ARRAY_SUPPORT) u = this.subarray(n, t), u.__proto__ = r.prototype;
            else
                for (e = t - n, u = new r(e, undefined), f = 0; f < e; ++f) u[f] = this[f + n];
            return u
        };
        r.prototype.readUIntLE = function(n, t, i) {
            n = n | 0;
            t = t | 0;
            i || u(n, t, this.length);
            for (var r = this[n], f = 1, e = 0; ++e < t && (f *= 256);) r += this[n + e] * f;
            return r
        };
        r.prototype.readUIntBE = function(n, t, i) {
            n = n | 0;
            t = t | 0;
            i || u(n, t, this.length);
            for (var r = this[n + --t], f = 1; t > 0 && (f *= 256);) r += this[n + --t] * f;
            return r
        };
        r.prototype.readUInt8 = function(n, t) { return t || u(n, 1, this.length), this[n] };
        r.prototype.readUInt16LE = function(n, t) { return t || u(n, 2, this.length), this[n] | this[n + 1] << 8 };
        r.prototype.readUInt16BE = function(n, t) { return t || u(n, 2, this.length), this[n] << 8 | this[n + 1] };
        r.prototype.readUInt32LE = function(n, t) { return t || u(n, 4, this.length), (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + this[n + 3] * 16777216 };
        r.prototype.readUInt32BE = function(n, t) { return t || u(n, 4, this.length), this[n] * 16777216 + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]) };
        r.prototype.readIntLE = function(n, t, i) {
            n = n | 0;
            t = t | 0;
            i || u(n, t, this.length);
            for (var r = this[n], f = 1, e = 0; ++e < t && (f *= 256);) r += this[n + e] * f;
            return f *= 128, r >= f && (r -= Math.pow(2, 8 * t)), r
        };
        r.prototype.readIntBE = function(n, t, i) {
            n = n | 0;
            t = t | 0;
            i || u(n, t, this.length);
            for (var e = t, r = 1, f = this[n + --e]; e > 0 && (r *= 256);) f += this[n + --e] * r;
            return r *= 128, f >= r && (f -= Math.pow(2, 8 * t)), f
        };
        r.prototype.readInt8 = function(n, t) { return (t || u(n, 1, this.length), !(this[n] & 128)) ? this[n] : (256 - this[n]) * -1 };
        r.prototype.readInt16LE = function(n, t) { t || u(n, 2, this.length); var i = this[n] | this[n + 1] << 8; return i & 32768 ? i | 4294901760 : i };
        r.prototype.readInt16BE = function(n, t) { t || u(n, 2, this.length); var i = this[n + 1] | this[n] << 8; return i & 32768 ? i | 4294901760 : i };
        r.prototype.readInt32LE = function(n, t) { return t || u(n, 4, this.length), this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24 };
        r.prototype.readInt32BE = function(n, t) { return t || u(n, 4, this.length), this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3] };
        r.prototype.readFloatLE = function(n, t) { return t || u(n, 4, this.length), s.read(this, n, !0, 23, 4) };
        r.prototype.readFloatBE = function(n, t) { return t || u(n, 4, this.length), s.read(this, n, !1, 23, 4) };
        r.prototype.readDoubleLE = function(n, t) { return t || u(n, 8, this.length), s.read(this, n, !0, 52, 8) };
        r.prototype.readDoubleBE = function(n, t) { return t || u(n, 8, this.length), s.read(this, n, !1, 52, 8) };
        r.prototype.writeUIntLE = function(n, t, i, r) { var o, u, e; for (n = +n, t = t | 0, i = i | 0, r || (o = Math.pow(2, 8 * i) - 1, f(this, n, t, i, o, 0)), u = 1, e = 0, this[t] = n & 255; ++e < i && (u *= 256);) this[t + e] = n / u & 255; return t + i };
        r.prototype.writeUIntBE = function(n, t, i, r) { var o, u, e; for (n = +n, t = t | 0, i = i | 0, r || (o = Math.pow(2, 8 * i) - 1, f(this, n, t, i, o, 0)), u = i - 1, e = 1, this[t + u] = n & 255; --u >= 0 && (e *= 256);) this[t + u] = n / e & 255; return t + i };
        r.prototype.writeUInt8 = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 1, 255, 0), r.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), this[t] = n & 255, t + 1 };
        r.prototype.writeUInt16LE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = n & 255, this[t + 1] = n >>> 8) : c(this, n, t, !0), t + 2 };
        r.prototype.writeUInt16BE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 8, this[t + 1] = n & 255) : c(this, n, t, !1), t + 2 };
        r.prototype.writeUInt32LE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t + 3] = n >>> 24, this[t + 2] = n >>> 16, this[t + 1] = n >>> 8, this[t] = n & 255) : l(this, n, t, !0), t + 4 };
        r.prototype.writeUInt32BE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 24, this[t + 1] = n >>> 16, this[t + 2] = n >>> 8, this[t + 3] = n & 255) : l(this, n, t, !1), t + 4 };
        r.prototype.writeIntLE = function(n, t, i, r) {
            var u;
            n = +n;
            t = t | 0;
            r || (u = Math.pow(2, 8 * i - 1), f(this, n, t, i, u - 1, -u));
            var e = 0,
                s = 1,
                o = 0;
            for (this[t] = n & 255; ++e < i && (s *= 256);) n < 0 && o === 0 && this[t + e - 1] !== 0 && (o = 1), this[t + e] = (n / s >> 0) - o & 255;
            return t + i
        };
        r.prototype.writeIntBE = function(n, t, i, r) {
            var e;
            n = +n;
            t = t | 0;
            r || (e = Math.pow(2, 8 * i - 1), f(this, n, t, i, e - 1, -e));
            var u = i - 1,
                s = 1,
                o = 0;
            for (this[t + u] = n & 255; --u >= 0 && (s *= 256);) n < 0 && o === 0 && this[t + u + 1] !== 0 && (o = 1), this[t + u] = (n / s >> 0) - o & 255;
            return t + i
        };
        r.prototype.writeInt8 = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 1, 127, -128), r.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), n < 0 && (n = 255 + n + 1), this[t] = n & 255, t + 1 };
        r.prototype.writeInt16LE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = n & 255, this[t + 1] = n >>> 8) : c(this, n, t, !0), t + 2 };
        r.prototype.writeInt16BE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 8, this[t + 1] = n & 255) : c(this, n, t, !1), t + 2 };
        r.prototype.writeInt32LE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 4, 2147483647, -2147483648), r.TYPED_ARRAY_SUPPORT ? (this[t] = n & 255, this[t + 1] = n >>> 8, this[t + 2] = n >>> 16, this[t + 3] = n >>> 24) : l(this, n, t, !0), t + 4 };
        r.prototype.writeInt32BE = function(n, t, i) { return n = +n, t = t | 0, i || f(this, n, t, 4, 2147483647, -2147483648), n < 0 && (n = 4294967295 + n + 1), r.TYPED_ARRAY_SUPPORT ? (this[t] = n >>> 24, this[t + 1] = n >>> 16, this[t + 2] = n >>> 8, this[t + 3] = n & 255) : l(this, n, t, !1), t + 4 };
        r.prototype.writeFloatLE = function(n, t, i) { return ot(this, n, t, !0, i) };
        r.prototype.writeFloatBE = function(n, t, i) { return ot(this, n, t, !1, i) };
        r.prototype.writeDoubleLE = function(n, t, i) { return st(this, n, t, !0, i) };
        r.prototype.writeDoubleBE = function(n, t, i) { return st(this, n, t, !1, i) };
        r.prototype.copy = function(n, t, i, u) {
            if ((i || (i = 0), u || u === 0 || (u = this.length), t >= n.length && (t = n.length), t || (t = 0), u > 0 && u < i && (u = i), u === i) || n.length === 0 || this.length === 0) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
            if (u < 0) throw new RangeError("sourceEnd out of bounds");
            u > this.length && (u = this.length);
            n.length - t < u - i && (u = n.length - t + i);
            var e = u - i,
                f;
            if (this === n && i < t && t < u)
                for (f = e - 1; f >= 0; --f) n[f + t] = this[f + i];
            else if (e < 1e3 || !r.TYPED_ARRAY_SUPPORT)
                for (f = 0; f < e; ++f) n[f + t] = this[f + i];
            else Uint8Array.prototype.set.call(n, this.subarray(i, i + e), t);
            return e
        };
        r.prototype.fill = function(n, t, i, u) {
            var e, f, o, s;
            if (typeof n == "string") { if (typeof t == "string" ? (u = t, t = 0, i = this.length) : typeof i == "string" && (u = i, i = this.length), n.length === 1 && (e = n.charCodeAt(0), e < 256 && (n = e)), u !== undefined && typeof u != "string") throw new TypeError("encoding must be a string"); if (typeof u == "string" && !r.isEncoding(u)) throw new TypeError("Unknown encoding: " + u); } else typeof n == "number" && (n = n & 255);
            if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
            if (i <= t) return this;
            if (t = t >>> 0, i = i === undefined ? this.length : i >>> 0, n || (n = 0), typeof n == "number")
                for (f = t; f < i; ++f) this[f] = n;
            else
                for (o = r.isBuffer(n) ? n : a(new r(n, u).toString()), s = o.length, f = 0; f < i - t; ++f) this[f + t] = o[f % s];
            return this
        };
        ht = /[^+\/0-9A-Za-z-_]/g
    }).call(this, i(161))
}, function(n) {
    var t = function() { return this }();
    try { t = t || new Function("return this")() } catch (i) { typeof window == "object" && (t = window) }
    n.exports = t
}, function(n, t) {
    "use strict";

    function o(n) {
        var i = n.length,
            t, r;
        if (i % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return t = n.indexOf("="), t === -1 && (t = i), r = t === i ? 0 : 4 - t % 4, [t, r]
    }

    function h(n) {
        var t = o(n),
            r = t[0],
            i = t[1];
        return (r + i) * 3 / 4 - i
    }

    function c(n, t, i) { return (t + i) * 3 / 4 - i }

    function l(n) { for (var r, l = o(n), h = l[0], e = l[1], u = new s(c(n, h, e)), f = 0, a = e > 0 ? h - 4 : h, t = 0; t < a; t += 4) r = i[n.charCodeAt(t)] << 18 | i[n.charCodeAt(t + 1)] << 12 | i[n.charCodeAt(t + 2)] << 6 | i[n.charCodeAt(t + 3)], u[f++] = r >> 16 & 255, u[f++] = r >> 8 & 255, u[f++] = r & 255; return e === 2 && (r = i[n.charCodeAt(t)] << 2 | i[n.charCodeAt(t + 1)] >> 4, u[f++] = r & 255), e === 1 && (r = i[n.charCodeAt(t)] << 10 | i[n.charCodeAt(t + 1)] << 4 | i[n.charCodeAt(t + 2)] >> 2, u[f++] = r >> 8 & 255, u[f++] = r & 255), u }

    function a(n) { return r[n >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[n & 63] }

    function v(n, t, i) { for (var u, f = [], r = t; r < i; r += 3) u = (n[r] << 16 & 16711680) + (n[r + 1] << 8 & 65280) + (n[r + 2] & 255), f.push(a(u)); return f.join("") }

    function y(n) { for (var t, i = n.length, e = i % 3, f = [], o = 16383, u = 0, s = i - e; u < s; u += o) f.push(v(n, u, u + o > s ? s : u + o)); return e === 1 ? (t = n[i - 1], f.push(r[t >> 2] + r[t << 4 & 63] + "==")) : e === 2 && (t = (n[i - 2] << 8) + n[i - 1], f.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), f.join("") }
    var u, e;
    t.byteLength = h;
    t.toByteArray = l;
    t.fromByteArray = y;
    var r = [],
        i = [],
        s = typeof Uint8Array != "undefined" ? Uint8Array : Array,
        f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (u = 0, e = f.length; u < e; ++u) r[u] = f[u], i[f.charCodeAt(u)] = u;
    i["-".charCodeAt(0)] = 62;
    i["_".charCodeAt(0)] = 63
}, function(n, t) {
    t.read = function(n, t, i, r, u) {
        var f, o, l = u * 8 - r - 1,
            a = (1 << l) - 1,
            v = a >> 1,
            e = -7,
            s = i ? u - 1 : 0,
            c = i ? -1 : 1,
            h = n[t + s];
        for (s += c, f = h & (1 << -e) - 1, h >>= -e, e += l; e > 0; f = f * 256 + n[t + s], s += c, e -= 8);
        for (o = f & (1 << -e) - 1, f >>= -e, e += r; e > 0; o = o * 256 + n[t + s], s += c, e -= 8);
        if (f === 0) f = 1 - v;
        else {
            if (f === a) return o ? NaN : (h ? -1 : 1) * Infinity;
            o = o + Math.pow(2, r);
            f = f - v
        }
        return (h ? -1 : 1) * o * Math.pow(2, f - r)
    };
    t.write = function(n, t, i, r, u, f) {
        var e, o, s, l = f * 8 - u - 1,
            a = (1 << l) - 1,
            h = a >> 1,
            y = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            c = r ? 0 : f - 1,
            v = r ? 1 : -1,
            p = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === Infinity ? (o = isNaN(t) ? 1 : 0, e = a) : (e = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -e)) < 1 && (e--, s *= 2), t += e + h >= 1 ? y / s : y * Math.pow(2, 1 - h), t * s >= 2 && (e++, s /= 2), e + h >= a ? (o = 0, e = a) : e + h >= 1 ? (o = (t * s - 1) * Math.pow(2, u), e = e + h) : (o = t * Math.pow(2, h - 1) * Math.pow(2, u), e = 0)); u >= 8; n[i + c] = o & 255, c += v, o /= 256, u -= 8);
        for (e = e << u | o, l += u; l > 0; n[i + c] = e & 255, c += v, e /= 256, l -= 8);
        n[i + c - v] |= p * 128
    }
}, function(n) {
    var t = {}.toString;
    n.exports = Array.isArray || function(n) { return t.call(n) == "[object Array]" }
}, function() {}, function() {}, function() {}, function(n, t, i) {
    "use strict";
    var r, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    r = i(4);
    u = function() {
        function n(n, t) {
            var i = this;
            this.privBuffers = [];
            this.privReplayOffset = 0;
            this.privLastShrinkOffset = 0;
            this.privBufferStartOffset = 0;
            this.privBufferSerial = 0;
            this.privBufferedBytes = 0;
            this.privReplay = !1;
            this.privLastChunkAcquiredTime = 0;
            this.id = function() { return i.privAudioNode.id() };
            this.privAudioNode = n;
            this.privBytesPerSecond = t
        }
        return n.prototype.read = function() {
            var i = this,
                e, t, n, u;
            if (!!this.privReplay && this.privBuffers.length !== 0) { for (e = this.privReplayOffset - this.privBufferStartOffset, t = Math.round(e * this.privBytesPerSecond * 1e-7), 0 != t % 2 && t++, n = 0; n < this.privBuffers.length && t >= this.privBuffers[n].chunk.buffer.byteLength;) t -= this.privBuffers[n++].chunk.buffer.byteLength; return u = this.privBuffers[n].chunk.buffer.slice(t), this.privReplayOffset += u.byteLength / this.privBytesPerSecond * 1e7, n === this.privBuffers.length - 1 && (this.privReplay = !1), r.PromiseHelper.fromResult({ buffer: u, isEnd: !1, timeReceived: this.privBuffers[n].chunk.timeReceived }) }
            return this.privAudioNode.read().onSuccessContinueWith(function(n) { return n && n.buffer && (i.privBuffers.push(new f(n, i.privBufferSerial++, i.privBufferedBytes)), i.privBufferedBytes += n.buffer.byteLength), n })
        }, n.prototype.detach = function() {
            this.privAudioNode.detach();
            this.privBuffers = undefined
        }, n.prototype.replay = function() { this.privBuffers && 0 !== this.privBuffers.length && (this.privReplay = !0, this.privReplayOffset = this.privLastShrinkOffset) }, n.prototype.shrinkBuffers = function(n) {
            if (this.privBuffers !== undefined) {
                this.privLastShrinkOffset = n;
                for (var r = n - this.privBufferStartOffset, i = Math.round(r * this.privBytesPerSecond * 1e-7), t = 0; t < this.privBuffers.length && i >= this.privBuffers[t].chunk.buffer.byteLength;) i -= this.privBuffers[t++].chunk.buffer.byteLength;
                this.privBufferStartOffset = Math.round(n - i / this.privBytesPerSecond * 1e7);
                this.privBuffers = this.privBuffers.slice(t)
            }
        }, n.prototype.findTimeAtOffset = function(n) {
            var t, i;
            if (n < this.privBufferStartOffset || this.privBuffers === undefined) return 0;
            for (t = 0, i = this.privBuffers; t < i.length; t++) {
                var r = i[t],
                    u = r.byteOffset / this.privBytesPerSecond * 1e7,
                    f = u + r.chunk.buffer.byteLength / this.privBytesPerSecond * 1e7;
                if (n >= u && n <= f) return r.chunk.timeReceived
            }
            return 0
        }, n
    }();
    t.ReplayableAudioNode = u;
    f = function() {
        function n(n, t, i) {
            this.chunk = n;
            this.serial = t;
            this.byteOffset = i
        }
        return n
    }()
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(30),
        u = function() {
            function n(n, t, i, r) {
                this.privProxyHostName = n;
                this.privProxyPort = t;
                this.privProxyUserName = i;
                this.privProxyPassword = r
            }
            return n.fromParameters = function(t) { return new n(t.getProperty(r.PropertyId.SpeechServiceConnection_ProxyHostName), parseInt(t.getProperty(r.PropertyId.SpeechServiceConnection_ProxyPort), 10), t.getProperty(r.PropertyId.SpeechServiceConnection_ProxyUserName), t.getProperty(r.PropertyId.SpeechServiceConnection_ProxyPassword)) }, n.fromRecognizerConfig = function(n) { return this.fromParameters(n.parameters) }, Object.defineProperty(n.prototype, "HostName", { get: function() { return this.privProxyHostName }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Port", { get: function() { return this.privProxyPort }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "UserName", { get: function() { return this.privProxyUserName }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "Password", { get: function() { return this.privProxyPassword }, enumerable: !0, configurable: !0 }), n
        }();
    t.ProxyInfo = u
}, function(n, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(4),
        u = function() {
            function n(n) { this.privId = n ? n : r.createNoDashGuid() }
            return n.prototype.id = function() { return this.privId }, n.prototype.write = function() {}, n.prototype.close = function() {}, Object.defineProperty(n.prototype, "format", { set: function() {}, enumerable: !0, configurable: !0 }), n
        }();
    t.SpeakerAudioDestination = u
}])