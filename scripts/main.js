$(function() {
    "use strict";

    function e(e, n) {
        for (var t = n.length, o = 0; t >= o; o++) {
            console.log(n[o]);
            var s = n[o].title;
            if (s === e) return n[o]
        }
        return null
    }
    var n = "#cy",
        t = "network.json",
        o = "style.json";
    $(n).cytoscape({
        layout: {
            name: "preset",
            padding: 10
        },
        ready: function() {
            window.cy = this, $.getJSON(t).success(function(n) {
                $.getJSON(o).success(function(t) {
                    cy.load(n.elements), console.log(n);
                    var o = e("default", t);
                    null === o && (o = t[0]), cy.style().fromJson(o.style).update()
                })
            })
        }
    })
});