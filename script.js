(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[50], {
    "+RTd": function(t, e, a) {
        "use strict";
        a.r(e);
        var c = a("q1tI")
          , s = a.n(c)
          , o = a("z/o8")
          , l = a("pc+1")
          , h = a("FDNW")
          , n = a("E31f")
          , r = a.n(n)
          , i = s.a.createElement;
        o.b.registerPlugin(h.MorphSVGPlugin);
        var y = Object(c.memo)((function() {
            var t = Object(c.useRef)()
              , e = Object(c.useState)(!0)
              , a = e[0]
              , s = e[1]
              , o = Object(c.useMemo)((function() {
                return new l.j({
                    repeat: -1,
                    ease: l.d.easeIn
                })
            }
            ), [])
              , h = Object(c.useMemo)((function() {
                return "M202.1,171.7c0,0,27.9,0,37.2,0c1.7,0,7,0,7,0"
            }
            ), [])
              , n = Object(c.useMemo)((function() {
                return "M235.1,157.9l-5.3,2.9c2,20-21.8,9.5-23.5,7"
            }
            ), [])
              , y = Object(c.useMemo)((function() {
                return "M47.9,157.2c0,0-27.7-1.6-36.9-2.2c-1.4-0.1-5.8-0.3-5.8-0.3"
            }
            ), [])
              , z = Object(c.useMemo)((function() {
                return "M23.7,126.4l6.5,3c-9.6,17.2,17.8,22,17.8,22"
            }
            ), []);
            Object(c.useEffect)((function() {
                var t = document.querySelectorAll(".zht-lines path")
                  , e = .5;
                o.set(".zht-body", {
                    y: 300
                }).to(".zht-hole", .2, {
                    rx: 136.06,
                    ry: 20.41
                }, e += 1).to(".zht-body", .2, {
                    x: 0,
                    y: 90
                }, e += .2).to(".zht-eo", .4, {
                    x: -10
                }, e += .2).to(".zht-eo", .4, {
                    x: 10
                }, e += .4).to(".zht-eo", .4, {
                    x: 0
                }, e += .4).to(".zht-body", .2, {
                    x: 0,
                    y: 70,
                    ease: l.b.easeOut
                }, e += .4).to(".zht-hl", .2, {
                    rotate: 95
                }, e).to(".zht-hr", .2, {
                    rotate: -40
                }, e).to(".zht-hr", .2, {
                    x: -5,
                    y: -5,
                    rotate: -30
                }, e += .2).to(".zht-hl", .2, {
                    rotate: 40
                }, e).to(".zht-body", .2, {
                    x: 120,
                    y: 20,
                    rotate: 20
                }, e).to(".zht-body", .2, {
                    x: 30,
                    y: 5,
                    rotate: 10
                }, e += .2).to(".zht-flt", .2, {
                    x: 0,
                    y: -8,
                    rotate: 15
                }, e).to(".zht-flb", .2, {
                    x: 0,
                    y: 5,
                    rotate: -50
                }, e).to(".zht-hr", .2, {
                    x: 0,
                    y: 0,
                    rotate: -15
                }, e).to(".zht-hl", .2, {
                    rotate: 10
                }, e - .4).to(".zht-body", .2, {
                    x: 0,
                    y: 0,
                    rotate: 0
                }, e += .2).to(".zht-flt", .1, {
                    x: 0,
                    y: 0,
                    rotate: 0
                }, e).to(".zht-flb", .1, {
                    x: 0,
                    y: 0,
                    rotate: 0
                }, e).to(".zht-hr", .2, {
                    x: 0,
                    y: 0,
                    rotate: 0
                }, e).to(".zht-hl", .2, {
                    rotate: 0
                }, e);
                for (var a = .1 * t.length, c = 0; c < t.length; c++)
                    0 !== c && o.set(t[c - 1], {
                        opacity: 0
                    }, e += .1).set(t[c - 1], {
                        opacity: 0
                    }, e + a).to(".zht-hole", .5, {
                        rx: 0,
                        ry: 0,
                        ease: l.d.easeIn
                    }, e).to(".zht-hole-b", .2, {
                        rx: 136.06,
                        ry: 20.41
                    }, e + 2.4),
                    0 === c && (o.to(".zht-eo", .4, {
                        y: 10
                    }, e + .2),
                    o.to(".zht-n", .4, {
                        y: 5
                    }, e + .2),
                    o.to(".zht-b", .4, {
                        css: {
                            rotationY: "50deg"
                        }
                    }, e + .2)),
                    o.set(t[c], {
                        opacity: 1
                    }, e),
                    o.set(t[c], {
                        opacity: 1
                    }, e + a),
                    c === Math.floor(t.length / 2) && (o.to(".zht-eo", .3, {
                        y: 0
                    }, e + .6),
                    o.to(".zht-n", .3, {
                        y: 0
                    }, e + .6)),
                    o.set(t[t.length - 1], {
                        opacity: 0
                    }, e),
                    o.set(t[t.length - 1], {
                        opacity: 0
                    }, e + a);
                return o.set(".zht-eo", {
                    opacity: 0
                }, e += .3 + a),
                o.set(".zht-ex", {
                    opacity: 1
                }, e),
                o.set(".zht-eo", {
                    opacity: 1
                }, e += .3),
                o.set(".zht-ex", {
                    opacity: 0
                }, e),
                o.to(".zht-flt", .1, {
                    transformOrigin: "center",
                    rotate: 40,
                    x: -24,
                    y: -9
                }, e),
                o.to(".zht-flb", .1, {
                    transformOrigin: "center",
                    rotate: 30,
                    x: -38,
                    y: -18
                }, e),
                o.to(".zht-frt", .1, {
                    transformOrigin: "center",
                    rotate: 40,
                    x: -14,
                    y: -9
                }, e),
                o.to(".zht-frb", .1, {
                    transformOrigin: "center",
                    rotate: 30,
                    x: -29,
                    y: -9
                }, e),
                o.to(".zht-hr", .15, {
                    morphSVG: h
                }, e),
                o.to(".zht-hl", .15, {
                    morphSVG: y
                }, e),
                o.to(".zht-hr", .15, {
                    morphSVG: n
                }, e + .15),
                o.to(".zht-hl", .15, {
                    morphSVG: z
                }, e + .15),
                o.to(".zht-bodyg", 1.5, {
                    transformOrigin: "center",
                    rotate: 1e3,
                    y: 1e3
                }, e),
                o.to(".zht-hole-b", .2, {
                    rx: 0,
                    ry: 0
                }, e + 1.3),
                window.addEventListener("scroll", p),
                function() {
                    window.removeEventListener("scroll", p),
                    o.clear().kill()
                }
            }
            ), []);
            var p = Object(c.useCallback)((function() {
                var e = t.current.getBoundingClientRect();
                s(e.y > .7 * -window.innerHeight && e.y < window.innerHeight)
            }
            ), []);
            return Object(c.useEffect)((function() {
                a ? o.play() : o.progress(0).pause()
            }
            ), [a]),
            i("div", {
                ref: t,
                className: "".concat(r.a.ziggyHomeTop)
            }, i("svg", {
                style: {
                    overflow: "visible"
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 272.13 267.46"
            }, i("defs", null, i("clipPath", {
                id: "zhtClip",
                clipPathUnits: "userSpaceOnUse"
            }, i("rect", {
                className: "zht-cl",
                x: "0",
                y: "0",
                width: "300",
                height: "247.5"
            })), i("clipPath", {
                id: "zhtClipBig",
                clipPathUnits: "userSpaceOnUse"
            }, i("rect", {
                className: "zht-cl",
                x: "0",
                y: "0",
                width: "300",
                height: "800"
            }))), i("ellipse", {
                className: "zht-hole ".concat(r.a.fillBlack),
                cx: "136.06",
                cy: "247.05",
                rx: "0",
                ry: "0"
            }), i("ellipse", {
                className: "zht-hole-b ".concat(r.a.fillBlack),
                cx: "136.06",
                cy: "790.06",
                rx: "0",
                ry: "0"
            }), i("g", {
                className: "zht-bodylg",
                style: {
                    overflow: "hidden"
                },
                clipPath: "url(#zhtClipBig)"
            }, i("g", {
                className: "zht-bodyg",
                style: {
                    overflow: "hidden"
                },
                clipPath: "url(#zhtClip)"
            }, i("g", {
                className: "zht-body ".concat(r.a.body)
            }, i("g", {
                className: "zht-f"
            }, i("path", {
                className: "zht-flt ".concat(r.a.defStyle),
                d: "M117.65,193.4c3.41,21,.53,18.26-1.43,22.3a10.15,10.15,0,0,0-1.09,3.57"
            }), i("path", {
                className: "zht-flb ".concat(r.a.defStyle),
                d: "M115.13,219.27c-.29,3.72,3,4.83,3.08,7.4.29,5.41.2,12.07,0,15.67-7.82.94-11.71,1.87-19.53,2.8"
            }), i("path", {
                className: "zht-frt ".concat(r.a.defStyle),
                d: "M147.13,195.1c.57,15.88.16,15.56,2.12,19.6a9.51,9.51,0,0,1,1.1,4.29"
            }), i("path", {
                className: "zht-frb ".concat(r.a.defStyle),
                d: "M150.35,219c-.06,3.56-3,5.25-3.1,7.68-.28,5.41-.19,11.07,0,14.67,7.82.94,11.71,1.87,19.53,2.8"
            })), i("g", {
                className: "zht-bg"
            }, i("path", {
                className: "zht-b ".concat(r.a.fillBlack),
                d: "M156.58,98.9,131.44,64.35l-13.37,42.1L82.68,83.08,80.75,118l-39.64-8.18,14.17,32.3L29.53,157.79l30.68,11.34L60,200.92,94.13,181l9.22,33.45,26.75-27.64,25.76,25.11L172.92,178,213,193.34l-5.42-37.66,41.21-8.2-37.75-17.32,18.11-40.08L193,107.42l-5.18-36Z"
            }), i("path", {
                className: "zht-n ".concat(r.a.fillWhite),
                d: "M123.08,158.58v4.34H118.6v-4.34Z"
            }), i("g", {
                className: "zht-eo"
            }, i("path", {
                className: "".concat(r.a.fillWhite),
                d: "M109.53,140.6a7.37,7.37,0,0,1,3,2.91,9.69,9.69,0,0,1,0,8.93,7.5,7.5,0,0,1-3,2.91,9.55,9.55,0,0,1-8.59,0,7.41,7.41,0,0,1-3-2.91,9.61,9.61,0,0,1,0-8.93,7.28,7.28,0,0,1,3-2.91,9.72,9.72,0,0,1,8.59,0Zm-7.24,3.83a5.83,5.83,0,0,0,0,7.11,4.15,4.15,0,0,0,5.9,0,5.83,5.83,0,0,0,0-7.11,4.15,4.15,0,0,0-5.9,0Z"
            }), i("path", {
                className: "".concat(r.a.fillWhite),
                d: "M140.77,140.6a7.35,7.35,0,0,1,3,2.91,9.61,9.61,0,0,1,0,8.93,7.47,7.47,0,0,1-3,2.91,9.55,9.55,0,0,1-8.59,0,7.5,7.5,0,0,1-3-2.91,9.69,9.69,0,0,1,0-8.93,7.37,7.37,0,0,1,3-2.91,9.72,9.72,0,0,1,8.59,0Zm-7.25,3.83a5.83,5.83,0,0,0,0,7.11,4.15,4.15,0,0,0,5.9,0,5.83,5.83,0,0,0,0-7.11,4.15,4.15,0,0,0-5.9,0Z"
            })), i("g", {
                className: "zht-ex ".concat(r.a["zht-ex"])
            }, i("path", {
                className: "".concat(r.a.fillWhite),
                d: "M99.76,151.23H95.63l7.08-15.73h4l7,15.73h-4.13l-4.9-10.92Z"
            }), i("path", {
                className: "".concat(r.a.fillWhite),
                d: "M132.06,151.23h-4.14L135,135.5h4l7.05,15.73h-4.13L137,140.31Z"
            })), i("g", {
                className: "zht-h"
            }, i("path", {
                className: "zht-hr ".concat(r.a.defStyle),
                d: "M205.91,160.17c3,0,24.94,14,7.18,23.4l.51,6.05"
            }), i("path", {
                className: "zht-hl ".concat(r.a.defStyle),
                d: "M47.92,159s-8.69,26.42,11,26.05l-.38,7.18"
            }))), i("g", {
                className: "zht-lines"
            }, i("path", {
                className: "".concat(r.a.lines),
                d: "M141.34,15.76S122.73,26.09,110.07,19c-12.83-7.21-.23,30.61,7.46,30.61S147,4.34,138.79,7.62C131.47,10.52,89.67,19.81,93,28s29.28,15.76,25.91,8.55-26.18-22.7-16.09-23.18,49.09,19.36,41.89,11.56c-16-17.34-19.63,22.77-10.49,22.39,20.69-.85-36-45.16-30-34.87,18.13,31.55,42,8.74,40.54,22.68S116.57-8.5,112.87,1.73C101.65,32.79,101.55,30.49,137,43.12"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M114.37,52.53s5.85-20.46,19.84-24.38c14.18-4-24-25.84-29.48-20.41S129.43,57.12,132.94,49c3.11-7.23,15.1-35.86,6.94-39.26s-45.46,12.87-38,15.59,48.18-5.78,41.38,1.7-54.59,8.84-44,9.26c23.57.94-4.2-30.12,2.6-24s51.68,28.46,40.22,25.36C107,28.15,106.76,53.2,97.93,42.33s51.11,9.84,46.49,0c-14-29.91-12.33-28.35-46.35-12.19"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M110.69,48.78s11-22.73,24.94-26.65c14.17-4,3.83-17-1.61-11.58s9.09,32.78,1.61,28-12.82-24.38-21-27.78-18.82,5.79-11.34,8.51,37.06,6.56,30.26,14-43.47-3.5-32.86-3.08c23.57.94,17-26.51,23.79-20.39s30.49,24.85,19,21.75c-35.12-9.49-17,27.19-25.83,16.31s-.89-45.64,10-45.64S109.43,23,103.32,24.4"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M110.73,47.57S126,24.14,138.41,20.66C151,17.13,115.89-.62,111.06,4.21s25.17,41.43,21.85,34.29c-2.39-5.14-4-23.25-18.66-24.7-7.81-.78-16.73,5.14-10.08,7.56s33,5.84,26.91,12.48-38.65-3.11-29.22-2.73c21,.83,17.26,4.83,23.31,10.27S148.08,36.55,140.72,29C107.83-4.77,124.21,47.09,117,46.82c-12.45-.47-.79-40.58,8.88-40.58S109.61,24.69,104.17,25.9"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M143.88,40.71S134.52,17.4,131,5c-3.53-12.6-35.34,30.58-30.51,35.42S142,15.2,134.81,18.53c-5.13,2.38-23.25,4-24.7,18.65-.78,7.82,5.14,16.73,7.56,10.08s-.52-24.5,6.13-18.46S143.9,38,136.07,44.31c-16.36,13.13-4.38-27.58,3.09-24.39,4.84,2.07-34.94,5.25-35.61-3.87-1.94-26.16,40.61.12,40.33,7.36-.47,12.45-41.33,11.84-41.33,2.17S121,41.82,122.21,47.26"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M101.9,20.71s41.46,18.36,44.18,4.08-4.75-17-10.19-11.55-8.16,27.18-15.63,22.43,4.07-25.83-4.08-29.23-15,8.84-7.48,11.56,33.54,10.55,26.75,18-41,3.71-32.87-3.08,17-26.51,23.79-20.39,29.91,17,19,21.75-17,27.18-25.82,16.31-8.16-31.27,2.71-31.27-9.51,24.11-15.63,25.47"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M102.19,3.39s9.75,22.85,12.11,10.45,13.6-.39,19.64,2.47c13.36,6.32,1,28.63-15.06,25.11-7.52-1.65,15.63-14.74,8.54-17.7S92.29,13.49,98.78,15.85,137,28.85,143.23,35s-35.12-8-43.39,0c-6.64,6.4,19.93-24.63,25.83-19.31s8.93-12.93-1.36-12.31c-35.49,2.14-15.37,50.34-3.6,42.38C130.79,39,127.39,7.44,136.84,7.44s-23,35.13-28.29,36.31"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M136.66,11.59s-17.52,40-25.86,34.72c-4.43-2.82-21.17-57.62,15.49-2.39,8,12.09,19.59-4.3,15.91-24-1.26-6.73-12.52,19-10.22,12.66s-3.17-29.88-5-24.08S124,46,119.21,51.58s-.95-34.71-7.16-42.1c-5-5.94-13.75,25-7.17,30.55,8,6.71,33.67,6.17,31.77-8.67-4-31.45-39.17-13.74-33-3.22,5.31,9,29.83,6,29.83,14.43s-15.09-30.28-16-35"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M99.68,12.15S120.89,41,133,29.53s-4.72-18.06-9.43-7.35-14.48,32.94-15.15,17.45c-.21-4.65-.71-9.56-1-13.81-.62-9.89.08-16.17,9.06-7.07,12.82,13,17.36,28.88,20.8,17.81s13.73-27.12,0-20.75S135.91,46.28,126.62,41s-14.14,2.22-12.12-10-1.69-29.47,6.06-18.82,31.28,8.64,23.7,17.38-13.4,32.19-16.63,15.41-1.14-22.81-10.44-18.11S106.75,45.35,123.59,45"
            }), i("path", {
                className: "".concat(r.a.lines),
                d: "M101.41,26.17c5.86-2.14,14.65-4.19,9.08-8s6.19,6.15,1.78,9.09c-1.39.92-3.22,2.34-5,3.55-3.78,2.62-7.14,4.24-4.73-2.38C106.1,18.76,95.25,9.82,112,13s16.7,2.73,10.26,12.32,2.42,20.08,4,7.8-8.5-5-12.4-2.06-10.35,3.14-6.83-4.86,2.93-5.66,13.77-4.48S136,21.91,133.94,31c-1.95,8.66-15.33,17.55-16,7.91a12.31,12.31,0,0,1,0-1.72c.78-12.31,10.19-23.92,1.37-20.81s2.34,16.41-8.8,18.47-5.84,18.09,1.17,7.68,39.57-4.58,32-16.39-12.31-12.64-15,3S131,53.94,123.08,49.1s-25.33-2.71-19.92-14.52S138,26.12,128.08,12.33s19.63,19.4,9.67,27.53-11.72-.88-17,5-7-2.34-11.72-5.57"
            })))))))
        }
        ));
        e.default = y
    },
    E31f: function(t, e, a) {
        t.exports = {
            ziggyHomeTop: "style_ziggyHomeTop__2A5X6",
            "zht-ex": "style_zht-ex__2bXZg",
            defStyle: "style_defStyle__3MGYX",
            fillWhite: "style_fillWhite__3lGQA",
            fillBlack: "style_fillBlack__IIEI6",
            lines: "style_lines___3itg"
        }
    }
}]);
