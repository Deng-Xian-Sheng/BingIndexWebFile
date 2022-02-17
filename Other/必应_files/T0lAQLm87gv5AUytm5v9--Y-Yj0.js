var OutlinePolyfil = function() {
    function n() {
        var n = this;
        this.attachHandlers = function() { n.attachHandlersForOutline() };
        this.attachHandlersForOutline = function() {
            addEventListener("keydown", n.onTabKey);
            addEventListener("mousedown", n.onMouseDown)
        };
        this.onTabKey = function(n) { n.keyCode == 9 && document.body.classList.add("tabbing") };
        this.onMouseDown = function() { document.body.classList.remove("tabbing") };
        this.attachHandlers()
    }
    return n
}();
new OutlinePolyfil