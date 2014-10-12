/* Smooth Scrolling */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
/* Scrollkr,js*/
( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );

/*
 * SVGeezy.js 1.0
 *
 * Copyright 2012, Ben Howdle http://twostepmedia.co.uk
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
*/
var svgeezy = function() {
    return {
        init: function(a, b) {
            this.avoid = a ||!1, this.filetype = b || "png", this.svgSupport = this.supportsSvg(), this.svgSupport || (this.images = document.getElementsByTagName("img"), this.imgL = this.images.length, this.fallbacks())
        },
        fallbacks: function() {
            for (; this.imgL--;)
                if (!this.hasClass(this.images[this.imgL], this.avoid) ||!this.avoid) {
                    var a = this.images[this.imgL].getAttribute("src");
                    if (null === a)
                        continue;
                        if ("svg" == this.getFileExt(a)) {
                            var b = a.replace(".svg", "." + this.filetype);
                            this.images[this.imgL].setAttribute("src", b)
                        }
                    }
            },
        getFileExt: function(a) {
            var b = a.split(".").pop();
            return -1 !== b.indexOf("?") && (b = b.split("?")[0]), b
        },
        hasClass: function(a, b) {
            return (" " + a.className + " ").indexOf(" " + b + " ")>-1
        },
        supportsSvg: function() {
            return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }
    }
}();
/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/
(function(a) {
    function m() {
        d.setAttribute("content", g), h=!0
    }
    function n() {
        d.setAttribute("content", f), h=!1
    }
    function o(b) {
        l = b.accelerationIncludingGravity, i = Math.abs(l.x), j = Math.abs(l.y), k = Math.abs(l.z), (!a.orientation || a.orientation === 180) && (i > 7 || (k > 6 && j < 8 || k < 8 && j > 6) && i > 5) ? h && n() : h || m()
    }
    var b = navigator.userAgent;
    if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(b) && b.indexOf("AppleWebKit")>-1))
        return;
    var c = a.document;
    if (!c.querySelector)
        return;
    var d = c.querySelector("meta[name=viewport]"), e = d && d.getAttribute("content"), f = e + ",maximum-scale=1", g = e + ",maximum-scale=10", h=!0, i, j, k, l;
    if (!d)
        return;
    a.addEventListener("orientationchange", m, !1), a.addEventListener("devicemotion", o, !1)
})(this);
/* Enable CSS active pseudo styles in Mobile Safari */
document.addEventListener("touchstart", function() {}, false);
/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a) {
    "use strict";
    function x() {
        u(!0)
    }
    var b = {};
    if (a.respond = b, b.update = function() {}, b.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches, !b.mediaQueriesSupported) {
        var q, r, t, c = a.document, d = c.documentElement, e = [], f = [], g = [], h = {}, i = 30, j = c.getElementsByTagName("head")[0] || d, k = c.getElementsByTagName("base")[0], l = j.getElementsByTagName("link"), m = [], n = function() {
            for (var b = 0; l.length > b; b++) {
                var c = l[b], d = c.href, e = c.media, f = c.rel && "stylesheet" === c.rel.toLowerCase();
                d && f&&!h[d] && (c.styleSheet && c.styleSheet.rawCssText ? (p(c.styleSheet.rawCssText, d, e), h[d]=!0) : (!/^([a-zA-Z:]*\/\/)/.test(d)&&!k || d.replace(RegExp.$1, "").split("/")[0] === a.location.host) && m.push({
                    href: d,
                    media: e
                }))
            }
            o()
        }, o = function() {
            if (m.length) {
                var b = m.shift();
                v(b.href, function(c) {
                    p(c, b.href, b.media), h[b.href]=!0, a.setTimeout(function() {
                        o()
                    }, 0)
                })
            }
        }, p = function(a, b, c) {
            var d = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi), g = d && d.length || 0;
            b = b.substring(0, b.lastIndexOf("/"));
            var h = function(a) {
                return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
            }, i=!g && c;
            b.length && (b += "/"), i && (g = 1);
            for (var j = 0; g > j; j++) {
                var k, l, m, n;
                i ? (k = c, f.push(h(a))) : (k = d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, f.push(RegExp.$2 && h(RegExp.$2))), m = k.split(","), n = m.length;
                for (var o = 0; n > o; o++)
                    l = m[o], e.push({
                    media: l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                    rules: f.length-1,
                    hasquery: l.indexOf("(")>-1,
                    minw: l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                })
            }
            u()
        }, s = function() {
            var a, b = c.createElement("div"), e = c.body, f=!1;
            return b.style.cssText = "position:absolute;font-size:1em;width:1em", e || (e = f = c.createElement("body"), e.style.background = "none"), e.appendChild(b), d.insertBefore(e, d.firstChild), a = b.offsetWidth, f ? d.removeChild(e) : e.removeChild(b), a = t = parseFloat(a)
        }, u = function(b) {
            var h = "clientWidth", k = d[h], m = "CSS1Compat" === c.compatMode && k || c.body[h] || k, n = {}, o = l[l.length-1], p = (new Date).getTime();
            if (b && q && i > p - q)
                return a.clearTimeout(r), r = a.setTimeout(u, i), void 0;
            q = p;
            for (var v in e)
                if (e.hasOwnProperty(v)) {
                    var w = e[v], x = w.minw, y = w.maxw, z = null === x, A = null === y, B = "em";
                    x && (x = parseFloat(x) * (x.indexOf(B)>-1 ? t || s() : 1)), y && (y = parseFloat(y) * (y.indexOf(B)>-1 ? t || s() : 1)), w.hasquery && (z && A ||!(z || m >= x) ||!(A || y >= m)) || (n[w.media] || (n[w.media] = []), n[w.media].push(f[w.rules]))
                }
            for (var C in g)
                g.hasOwnProperty(C) && g[C] && g[C].parentNode === j && j.removeChild(g[C]);
            for (var D in n)
                if (n.hasOwnProperty(D)) {
                    var E = c.createElement("style"), F = n[D].join("\n");
                    E.type = "text/css", E.media = D, j.insertBefore(E, o.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(c.createTextNode(F)), g.push(E)
                }
        }, v = function(a, b) {
            var c = w();
            c && (c.open("GET", a, !0), c.onreadystatechange = function() {
                4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
            }, 4 !== c.readyState && c.send(null))
        }, w = function() {
            var b=!1;
            try {
                b = new a.XMLHttpRequest
            } catch (c) {
                b = new a.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return b
            }
        }();
        n(), b.update = n, a.addEventListener ? a.addEventListener("resize", x, !1) : a.attachEvent && a.attachEvent("onresize", x)
    }
})(this);
