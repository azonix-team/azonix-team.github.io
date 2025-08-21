(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    199: function(t, o, r) {
        var content = r(291);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(52).default)("163aaac7", content, !0, {
            sourceMap: !1
        })
    },
    200: function(t, o, r) {
        var content = r(294);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(52).default)("7041c29c", content, !0, {
            sourceMap: !1
        })
    },
    211: function(t, o, r) {
        "use strict";
        r.r(o);
        var e = {
            data: function() {
                return {
                    dark: !1
                }
            },
            props: {
                themeSwitcher: {
                    type: Function,
                    required: !0
                }
            },
            methods: {
                toggle: function() {
                    this.themeSwitcher(),
                    this.dark = document.documentElement.classList.contains("dark")
                }
            },
            mounted: function() {
                this.dark = document.documentElement.classList.contains("dark")
            }
        }
          , n = r(24)
          , component = Object(n.a)(e, (function() {
            var t = this
              , o = t._self._c;
            return o("footer", [o("div", {
                staticClass: "blueprint-background"
            }, [o("div", {
                staticClass: "container mx-auto flex items-center justify-between p-3 text-white"
            }, [o("div", [o("button", {
                staticClass: "ml-3 text-yellow-300 my-3 hover:opacity-80 transition ease-in-out",
                class: "text-yellow-300",
                attrs: {
                    title: "Switch Theme"
                },
                on: {
                    click: t.toggle
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fas", t.dark ? "moon" : "sun"]
                }
            })], 1)]), t._v(" "), o("div", [o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://www.teamabnormals.com/discord"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "discord"]
                }
            })], 1), t._v(" "), o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://github.com/team-abnormals"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "github"]
                }
            })], 1), t._v(" "), o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://patreon.com/teamabnormals"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "patreon"]
                }
            })], 1), t._v(" "), o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://twitter.com/TeamAbnormals"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "twitter"]
                }
            })], 1), t._v(" "), o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://www.youtube.com/channel/UCazZwfmCwwDOIYQj32d36Dw"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "youtube"]
                }
            })], 1), t._v(" "), o("a", {
                staticClass: "m-3 hover:opacity-80 transition ease-in-out",
                attrs: {
                    href: "https://twitch.tv/TeamAbnormals"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-lg",
                attrs: {
                    icon: ["fab", "twitch"]
                }
            })], 1)])])]), t._v(" "), t._m(0)])
        }
        ), [function() {
            var t = this
              , o = t._self._c;
            return o("div", {
                staticClass: "dark-blueprint-background"
            }, [o("div", {
                staticClass: "container mx-auto flex items-center justify-between p-3 py-6"
            }, [o("div", [o("h1", {
                staticClass: "text-white font-medium"
            }, [t._v("Copyright 2021 © Team Abnormals")]), t._v(" "), o("p", {
                staticClass: "text-gray-300"
            }, [t._v("Team Abnormals is not affiliated with or endorsed by Mojang Studios or Microsoft")])])])])
        }
        ], !1, null, null, null);
        o.default = component.exports;
        installComponents(component, {
            Footer: r(211).default
        })
    },
    217: function(t, o, r) {
        "use strict";
        var e = {
            methods: {
                toggleTheme: function() {
                    var t;
                    var o = window.__theme__.mode;
                    console.log(null === (t = document.documentElement.dataset.theme) || void 0 === t ? void 0 : t.split(" ")),
                    o.update((function(t) {
                        return "light" === t ? "dark" : "light"
                    }
                    ))
                }
            }
        }
          , n = (r(290),
        r(24))
          , component = Object(n.a)(e, (function() {
            var t = this
              , o = t._self._c;
            return o("div", {
                staticClass: "white-background"
            }, [o("Header"), t._v(" "), o("Nuxt"), t._v(" "), o("Footer", {
                attrs: {
                    themeSwitcher: t.toggleTheme
                }
            })], 1)
        }
        ), [], !1, null, null, null);
        o.a = component.exports;
        installComponents(component, {
            Header: r(306).default,
            Footer: r(211).default
        })
    },
    220: function(t, o, r) {
        r(221),
        t.exports = r(222)
    },
    281: function(t, o, r) {
        t.exports = {
            srcSet: r.p + "img/404.png 512w",
            images: [{
                path: r.p + "img/404.png",
                width: 512,
                height: 323
            }],
            src: r.p + "img/404.png",
            toString: function() {
                return r.p + "img/404.png"
            },
            width: 512,
            height: 323
        }
    },
    290: function(t, o, r) {
        "use strict";
        r(199)
    },
    291: function(t, o, r) {
        var e = r(51)((function(i) {
            return i[1]
        }
        ));
        e.push([t.i, ".page-container{width:100%}@media (min-width:640px){.page-container{max-width:640px}}@media (min-width:768px){.page-container{max-width:768px}}@media (min-width:1024px){.page-container{max-width:1024px}}@media (min-width:1280px){.page-container{max-width:1280px}}@media (min-width:1536px){.page-container{max-width:1536px}}.page-container{margin-left:auto;margin-right:auto;max-width:24rem}@media (min-width:768px){.page-container{max-width:72rem}}.page-enter,.page-leave-to{opacity:0}body{background-color:#537db5}.dark body{background-color:#384681}*{scrollbar-color:#ccd7e7 #88a5d1;scrollbar-width:thin;transition-property:background-color,border-color,color,opacity;transition:.3s ease-in-out}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background-color:#88a5d1}::-webkit-scrollbar-thumb{background-color:#ccd7e7;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#e9eff8}.dark-blueprint-background{background-color:#2d5993}.blueprint-background{background-color:#537db5}.toned-background{background-color:#e9eff8}.white-background{background-color:#fff}.dark .heading{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.subtext{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.dark .subtext{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.dark{scrollbar-color:#5d6592 #42487b;scrollbar-width:thin}.dark ::-webkit-scrollbar{width:12px}.dark ::-webkit-scrollbar-track{background-color:#42487b}.dark ::-webkit-scrollbar-thumb{background-color:#5d6592;border-radius:10px}.dark ::-webkit-scrollbar-thumb:hover{background-color:#7781a7}.dark .dark-blueprint-background{background-color:#252c5f}.dark .blueprint-background{background-color:#384681}.dark .toned-background{background-color:#1d1d20}.dark .white-background{background-color:#161619}img{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.post h1{font-size:1.875rem;font-weight:500;line-height:2.25rem;margin-top:.5rem}.dark .post h1{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post h2{font-size:1.5rem;font-weight:500;line-height:2rem;margin-top:.5rem}.dark .post h2{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post h3{font-size:1.25rem;font-weight:500;line-height:1.75rem;margin-top:.5rem}.dark .post h3{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post h4{font-size:1.125rem;font-weight:500;line-height:1.75rem;margin-top:.5rem}.dark .post h4{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post h5{font-size:.875rem;font-weight:500;line-height:1.25rem;margin-top:.25rem}.dark .post h5{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post h6{font-size:.75rem;font-weight:500;line-height:1rem;margin-top:.25rem}.dark .post h6{--tw-text-opacity:1;color:#d1d5db;color:rgb(209 213 219/var(--tw-text-opacity))}.post figure{display:block;padding:1rem}.post img{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark .post img{--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;box-shadow:0 0 transparent,0 0 transparent,0 0 transparent;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.post p{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));font-size:1.125rem;line-height:1.75rem;padding-bottom:.5rem;padding-top:.5rem}.dark .post p{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post figcaption{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));display:block;font-weight:700;padding-top:1rem;text-align:center}.dark .post figcaption{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post blockquote{--tw-text-opacity:1;background-color:#e9eff8;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.dark .post blockquote{--tw-text-opacity:1;background-color:#1d1d20;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post blockquote{border-color:#537db5;border-left:10px solid;margin:1.5em 10px;padding:.5em 10px}.dark .post blockquote{border-color:#384681}.post blockquote p{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.dark .post blockquote p{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post a{border-bottom-width:2px;border-color:#2d5993;color:#537db5;font-weight:500;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.post a:hover{--tw-border-opacity:0.8;opacity:.8}.post ul{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));list-style-position:inside;list-style-type:disc;padding-bottom:.5rem;padding-top:.5rem}.dark .post ul{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post ol{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));list-style-position:inside;list-style-type:decimal}.dark .post ol{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post ol ul,.post ul ul{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));list-style-position:inside;list-style-type:circle;margin-left:15px}.dark .post ol ul,.dark .post ul ul{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post ol ol,.post ul ol{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity));list-style-position:inside;list-style-type:lower-latin;margin-left:15px}.dark .post ol ol,.dark .post ul ol{--tw-text-opacity:1;color:#9ca3af;color:rgb(156 163 175/var(--tw-text-opacity))}.post hr{margin-bottom:1rem;margin-top:1rem}", ""]),
        e.locals = {},
        t.exports = e
    },
    292: function(t, o, r) {
        t.exports = {
            srcSet: r.p + "img/logo.png 295w",
            images: [{
                path: r.p + "img/logo.png",
                width: 295,
                height: 48
            }],
            src: r.p + "img/logo.png",
            toString: function() {
                return r.p + "img/logo.png"
            },
            width: 295,
            height: 48
        }
    },
    293: function(t, o, r) {
        "use strict";
        r(200)
    },
    294: function(t, o, r) {
        var e = r(51)((function(i) {
            return i[1]
        }
        ));
        e.push([t.i, "li .nav-link{--tw-border-opacity:0;border-bottom-width:4px;border-color:transparent;border-color:rgb(0 0 0/var(--tw-border-opacity));padding-bottom:.25rem;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}li .nav-link:hover{--tw-border-opacity:0.2}li .nuxt-link-active{--tw-border-opacity:0.3;border-bottom-width:4px;border-color:rgba(0,0,0,.3);border-color:rgb(0 0 0/var(--tw-border-opacity));padding-bottom:.25rem}@media (max-width:767px){nav .navigation{left:0;margin:1.5rem .75rem .75rem;opacity:0;position:absolute;right:0;transition:all .2s ease-in-out;visibility:hidden;z-index:9999}nav .navigation.active{opacity:1;visibility:visible}}", ""]),
        e.locals = {},
        t.exports = e
    },
    305: function(t, o) {
        function r(t) {
            var o = new Error("Cannot find module '" + t + "'");
            throw o.code = "MODULE_NOT_FOUND",
            o
        }
        r.keys = function() {
            return []
        }
        ,
        r.resolve = r,
        t.exports = r,
        r.id = 305
    },
    306: function(t, o, r) {
        "use strict";
        r.r(o);
        var e = {
            data: function() {
                return {
                    open: !1
                }
            },
            methods: {
                drawer: function() {
                    this.open = !this.open
                }
            },
            watch: {
                $route: function(t, o) {
                    this.open = !1
                }
            }
        }
          , n = (r(293),
        r(24))
          , component = Object(n.a)(e, (function() {
            var t = this
              , o = t._self._c;
            return o("nav", {
                staticClass: "block p-2 dark-blueprint-background"
            }, [o("div", {
                staticClass: "container mx-auto"
            }, [o("div", {
                staticClass: "md:hidden text-white text-xl justify-between p-6 md:p-0 mobile-toggle"
            }, [o("button", {
                on: {
                    click: t.drawer
                }
            }, [o("font-awesome-icon", {
                attrs: {
                    icon: "bars"
                }
            })], 1)]), t._v(" "), o("div", {
                staticClass: "navigation",
                class: t.open ? "active dark-blueprint-background" : ""
            }, [o("ul", {
                staticClass: "md:flex md:justify-center md:items-center uppercase font-bold text-xl text-white my-3 md:my-0"
            }, [o("nuxt-link", {
                attrs: {
                    to: "/"
                }
            }, [o("img", {
                staticClass: "h-6 md:h-12 m-6 md:mx-6",
                attrs: {
                    src: r(292),
                    alt: "Abnormals Logo",
                    width: "295",
                    height: "48"
                }
            })]), t._v(" "), o("li", {
                staticClass: "m-6"
            }, [o("nuxt-link", {
                staticClass: "nav-link",
                attrs: {
                    exact: "",
                    to: "/"
                }
            }, [t._v("Home")])], 1), t._v(" "), o("li", {
                staticClass: "m-6"
            }, [o("nuxt-link", {
                staticClass: "nav-link",
                attrs: {
                    to: "/blog"
                }
            }, [t._v("Blog")])], 1), t._v(" "), o("li", {
                staticClass: "m-6"
            }, [o("nuxt-link", {
                staticClass: "nav-link",
                attrs: {
                    exact: "",
                    to: "/mods"
                }
            }, [t._v("Mods")])], 1), t._v(" "), o("li", {
                staticClass: "m-6"
            }, [o("a", {
                staticClass: "nav-link",
                attrs: {
                    href: "https://github.com/team-abnormals/announcements/blob/main/faq.md"
                }
            }, [o("font-awesome-icon", {
                staticClass: "fa-sm",
                attrs: {
                    icon: ["fas", "external-link-alt"]
                }
            }), t._v("\n\t\t\t\t\t\tFAQ")], 1)])], 1)])])])
        }
        ), [], !1, null, null, null);
        o.default = component.exports
    },
    44: function(t, o, r) {
        "use strict";
        var e = {
            props: ["error"],
            layout: "default",
            head: function() {
                return {
                    title: this.error.statusCode + " — Team Abnormals",
                    meta: [{
                        property: "og:title",
                        content: this.error.statusCode + " — Team Abnormals"
                    }, {
                        property: "twitter:title",
                        content: this.error.statusCode + " — Team Abnormals"
                    }]
                }
            }
        }
          , n = r(24)
          , component = Object(n.a)(e, (function() {
            var t = this
              , o = t._self._c;
            return o("div", {
                staticClass: "flex items-top justify-center min-h-screen items-center white-background"
            }, [o("div", {
                staticClass: "page-container"
            }, [o("div", {
                staticClass: "grid lg:grid-cols-2 items-center"
            }, [o("div", {
                staticClass: "text-center lg:text-left"
            }, [o("h1", {
                staticClass: "text-6xl font-bold heading mb-2"
            }, [t._v("Oops! " + t._s(t.error.statusCode))]), t._v(" "), o("p", {
                staticClass: "text-4xl lg:text-3xl subtext font-medium"
            }, [t._v("Can't find the page you're looking for.")]), t._v(" "), o("br"), t._v(" "), o("nuxt-link", {
                staticClass: "text-4xl lg:text-3xl font-medium hover:opacity-80 transition ease-in-out",
                staticStyle: {
                    color: "#537db5"
                },
                attrs: {
                    to: "/"
                }
            }, [t._v("Go Home\n\t\t\t\t\t"), o("font-awesome-icon", {
                staticClass: "fa-sm",
                attrs: {
                    icon: "arrow-right"
                }
            })], 1)], 1), t._v(" "), o("img", {
                staticClass: "p-10 pt-24 lg:p-0 mx-auto",
                attrs: {
                    alt: t.error.statusCode,
                    src: r(281)
                }
            })])])])
        }
        ), [], !1, null, null, null);
        o.a = component.exports
    }
}, [[220, 12, 2, 13]]]);
