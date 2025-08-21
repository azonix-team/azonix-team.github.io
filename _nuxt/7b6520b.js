(window.webpackJsonp = window.webpackJsonp || []).push([[10, 3, 4, 5, 7], {
    307: function(t, e, r) {
        var content = r(312);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(52).default)("45c67bb4", content, !0, {
            sourceMap: !1
        })
    },
    308: function(t, e, r) {
        "use strict";
        r.r(e);
        r(36),
        r(53);
        var o = {
            props: {
                title: {
                    type: String,
                    required: !0
                },
                description: {
                    type: String
                }
            }
        }
          , n = r(24)
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "justify-center mb-12 text-center"
            }, [e("h1", {
                staticClass: "font-bold text-4xl text-center heading"
            }, [t._v(t._s(t.title))]), t._v(" "), t.description ? e("h2", {
                staticClass: "text-xl subtext mt-2"
            }, [t._v(t._s(t.description))]) : t._e()])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    309: function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return c
        }
        )),
        r.d(e, "a", (function() {
            return d
        }
        )),
        r.d(e, "d", (function() {
            return h
        }
        )),
        r.d(e, "c", (function() {
            return m
        }
        ));
        var o = r(10)
          , n = (r(50),
        new (r(316).a)({
            url: "https://abnormals-ghost.hardaway.dev",
            key: "079b120332690da289eff92580",
            version: "v3"
        }));
        function c() {
            return l.apply(this, arguments)
        }
        function l() {
            return (l = Object(o.a)(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            n.posts.browse({
                                limit: 3,
                                fields: "title,slug,published_at,primary_tag,feature_image",
                                include: "tags"
                            }).catch((function(t) {
                                console.error(t)
                            }
                            ));
                        case 2:
                            return t.abrupt("return", t.sent);
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function d() {
            return f.apply(this, arguments)
        }
        function f() {
            return (f = Object(o.a)(regeneratorRuntime.mark((function t() {
                var e, i;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            n.posts.browse({
                                fields: "title,slug,published_at,featured,primary_tag,feature_image",
                                include: "tags"
                            }).catch((function(t) {
                                console.error(t)
                            }
                            ));
                        case 2:
                            e = t.sent,
                            i = 0;
                        case 4:
                            if (!(i < e.length)) {
                                t.next = 10;
                                break
                            }
                            if (!e[i].featured) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", e[i]);
                        case 7:
                            i++,
                            t.next = 4;
                            break;
                        case 10:
                            return t.abrupt("return", !1);
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function h() {
            return w.apply(this, arguments)
        }
        function w() {
            return (w = Object(o.a)(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            n.posts.browse({
                                limit: "all",
                                fields: "title,slug,published_at,primary_tag,feature_image",
                                include: "tags"
                            }).catch((function(t) {
                                console.error(t)
                            }
                            ));
                        case 2:
                            return t.abrupt("return", t.sent);
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function m(t) {
            return x.apply(this, arguments)
        }
        function x() {
            return (x = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            n.posts.read({
                                slug: e,
                                include: "tags"
                            }).catch((function(t) {
                                console.error(t)
                            }
                            ));
                        case 2:
                            return t.abrupt("return", t.sent);
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
    },
    310: function(t, e, r) {
        t.exports = {
            srcSet: r.p + "img/cde9844-336.webp 336w",
            images: [{
                path: r.p + "img/cde9844-336.webp",
                width: 336,
                height: 189
            }],
            src: r.p + "img/cde9844-336.webp",
            toString: function() {
                return r.p + "img/cde9844-336.webp"
            },
            width: 336,
            height: 189
        }
    },
    311: function(t, e, r) {
        "use strict";
        r(307)
    },
    312: function(t, e, r) {
        var o = r(51)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".blog{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.blog:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;opacity:.8;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.blog img{border-color:#537db5;border-width:4px}.blog:hover img{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-color:#2d5993;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark .blog img{border-color:#384681}.dark .blog:hover img{--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;border-color:#252c5f;box-shadow:0 0 transparent,0 0 transparent,0 0 transparent;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}", ""]),
        o.locals = {},
        t.exports = o
    },
    314: function(t, e, r) {
        var content = r(351);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(52).default)("db895314", content, !0, {
            sourceMap: !1
        })
    },
    315: function(t, e, r) {
        "use strict";
        r.r(e);
        r(37);
        var o = {
            props: {
                post: {
                    type: Object,
                    required: !0
                }
            }
        }
          , n = (r(311),
        r(24))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("nuxt-link", {
                staticClass: "blog mx-2 lg:mx-auto",
                attrs: {
                    to: "/blog/" + t.post.slug
                }
            }, [e("div", [t.post.feature_image ? e("img", {
                attrs: {
                    alt: t.post.title,
                    src: t.post.feature_image,
                    width: "336",
                    height: "192"
                }
            }) : e("img", {
                attrs: {
                    alt: t.post.title,
                    src: r(310),
                    width: "336",
                    height: "192"
                }
            }), t._v(" "), e("p", {
                staticClass: "text-white font-semibold text-center uppercase tracking-wide"
            }, [e("span", {
                staticClass: "relative -top-3.5 p-2 blueprint-background"
            }, [t.post.primary_tag ? e("span", [t._v(t._s(t.post.primary_tag.name))]) : e("span", [t._v("Misc")])])])]), t._v(" "), e("div", [e("h3", {
                staticClass: "text-xl font-bold text-center heading"
            }, [t._v(t._s(t.post.title))]), t._v(" "), e("p", {
                staticClass: "subtext text-xs text-center font-normal italic"
            }, [t._v(t._s(t.$moment(t.post.published_at).format("MMM Do, YYYY")))])])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    346: function(t, e, r) {
        t.exports = {
            srcSet: r.p + "img/6f3a1e0-512.webp 512w",
            images: [{
                path: r.p + "img/6f3a1e0-512.webp",
                width: 512,
                height: 330
            }],
            src: r.p + "img/6f3a1e0-512.webp",
            toString: function() {
                return r.p + "img/6f3a1e0-512.webp"
            },
            width: 512,
            height: 330
        }
    },
    347: function(t, e, r) {
        "use strict";
        var o = r(2)
          , n = r(348);
        o({
            target: "String",
            proto: !0,
            forced: r(349)("link")
        }, {
            link: function(t) {
                return n(this, "a", "href", t)
            }
        })
    },
    348: function(t, e, r) {
        var o = r(4)
          , n = r(20)
          , c = r(12)
          , l = /"/g
          , d = o("".replace);
        t.exports = function(t, e, r, o) {
            var f = c(n(t))
              , h = "<" + e;
            return "" !== r && (h += " " + r + '="' + d(c(o), l, "&quot;") + '"'),
            h + ">" + f + "</" + e + ">"
        }
    },
    349: function(t, e, r) {
        var o = r(3);
        t.exports = function(t) {
            return o((function() {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }
            ))
        }
    },
    350: function(t, e, r) {
        "use strict";
        r(314)
    },
    351: function(t, e, r) {
        var o = r(51)((function(i) {
            return i[1]
        }
        ));
        o.push([t.i, ".about-section a{border-bottom-width:2px;border-color:#2d5993;color:#537db5;font-weight:500;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.about-section a:hover{--tw-border-opacity:0.8;opacity:.8}", ""]),
        o.locals = {},
        t.exports = o
    },
    356: function(t, e, r) {
        "use strict";
        r.r(e);
        r(36),
        r(53),
        r(347);
        var o = {
            props: {
                link: {
                    type: String,
                    required: !1
                },
                linkText: {
                    type: String,
                    required: !1
                },
                flip: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                heading: {
                    type: String,
                    required: !0
                },
                description: {
                    type: String,
                    required: !0
                },
                image: {
                    type: String,
                    required: !0
                },
                width: {
                    type: String,
                    required: !1,
                    default: "512"
                },
                height: {
                    type: String,
                    required: !1,
                    default: "512"
                }
            }
        }
          , n = (r(350),
        r(24))
          , component = Object(n.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "grid lg:grid-cols-2 md:gap-16 items-center p-6 about-section"
            }, [e("div", {
                staticClass: "my-6 lg:my-auto",
                class: t.flip ? "lg:order-last" : ""
            }, [e("img", {
                attrs: {
                    src: t.image,
                    alt: t.heading,
                    width: t.width,
                    height: t.height
                }
            })]), t._v(" "), e("div", {
                staticClass: "text-center lg:text-left"
            }, [e("h2", {
                staticClass: "text-3xl font-bold heading"
            }, [t._v(t._s(t.heading))]), t._v(" "), e("p", {
                staticClass: "py-2 subtext text-xl"
            }, [t._v(t._s(t.description))]), t._v(" "), t.link && t.linkText ? e("p", {
                staticClass: "mt-4 text-2xl subtext"
            }, [e("span", [e("a", {
                attrs: {
                    href: t.link
                }
            }, [t._v(t._s(t.linkText))])])]) : t._e()])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    357: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(24)
          , component = Object(o.a)({}, (function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "blueprint-background",
                attrs: {
                    id: "hero"
                }
            }, [e("div", {
                staticClass: "page-container py-24"
            }, [e("div", {
                staticClass: "grid md:grid-cols-2 lg:gap-16 items-center text-center md:text-left"
            }, [e("div", {
                staticClass: "mx-8"
            }, [e("h1", {
                staticClass: "text-3xl font-bold text-white mb-2"
            }, [t._v("Welcome to Team Abnormals!")]), t._v(" "), e("p", {
                staticClass: "text-white text-xl"
            }, [t._v("We are a small modding team focused on creating mods with quality art and\n\t\t\t\t\tdesign for Minecraft Java Edition.")]), t._v(" "), e("br"), t._v(" "), e("nuxt-link", {
                staticClass: "text-white text-sm font-bold uppercase tracking-wider hover:opacity-80 transition ease-in-out",
                attrs: {
                    to: "/blog/welcome"
                }
            }, [t._v("Read about our new website! "), e("font-awesome-icon", {
                staticClass: "fa-sm",
                attrs: {
                    icon: "arrow-right"
                }
            })], 1)], 1), t._v(" "), e("img", {
                staticClass: "mt-24 px-3 lg:px-0 md:mt-auto",
                attrs: {
                    src: r(346),
                    alt: "Slabfish and Yak",
                    width: "512",
                    height: "330"
                }
            })])])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    365: function(t, e, r) {
        t.exports = {
            srcSet: r.p + "img/e9888e8-472.webp 472w",
            images: [{
                path: r.p + "img/e9888e8-472.webp",
                width: 472,
                height: 407
            }],
            src: r.p + "img/e9888e8-472.webp",
            toString: function() {
                return r.p + "img/e9888e8-472.webp"
            },
            width: 472,
            height: 407
        }
    },
    366: function(t, e, r) {
        t.exports = {
            srcSet: r.p + "img/431515a-472.webp 472w",
            images: [{
                path: r.p + "img/431515a-472.webp",
                width: 472,
                height: 319
            }],
            src: r.p + "img/431515a-472.webp",
            toString: function() {
                return r.p + "img/431515a-472.webp"
            },
            width: 472,
            height: 319
        }
    },
    367: function(t, e, r) {
        t.exports = {
            srcSet: r.p + "img/5122952-472.webp 472w",
            images: [{
                path: r.p + "img/5122952-472.webp",
                width: 472,
                height: 393
            }],
            src: r.p + "img/5122952-472.webp",
            toString: function() {
                return r.p + "img/5122952-472.webp"
            },
            width: 472,
            height: 393
        }
    },
    383: function(t, e, r) {
        "use strict";
        r.r(e);
        var o = r(10)
          , n = (r(50),
        r(309))
          , c = {
            asyncData: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.$content,
                                t.params,
                                e.next = 3,
                                Object(n.b)();
                            case 3:
                                return r = e.sent,
                                e.abrupt("return", {
                                    blogs: r
                                });
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
        }
          , l = r(24)
          , component = Object(l.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("Hero"), t._v(" "), e("section", {
                staticClass: "py-12 white-background",
                attrs: {
                    id: "blog"
                }
            }, [e("SectionTitle", {
                attrs: {
                    description: "Get the latest news regarding our mods and community!",
                    title: "Latest News and Blogs"
                }
            }), t._v(" "), e("div", {
                staticClass: "page-container px-12"
            }, [e("div", {
                staticClass: "grid lg:grid-cols-3 gap-6"
            }, t._l(t.blogs, (function(t, r) {
                return e("Postcard", {
                    key: r,
                    attrs: {
                        post: t
                    }
                })
            }
            )), 1)]), t._v(" "), e("div", {
                staticClass: "justify-center pt-12 text-center"
            }, [e("nuxt-link", {
                staticClass: "text-lg heading font-bold uppercase border-b-4 border-black dark:border-gray-300 hover:opacity-80 transition ease-in-out",
                attrs: {
                    to: "/blog"
                }
            }, [t._v("\n\t\t\t\tView More\n\t\t\t")])], 1)], 1), t._v(" "), e("section", {
                staticClass: "py-12 toned-background min-h-screen",
                attrs: {
                    id: "about"
                }
            }, [e("div", {
                staticClass: "page-container px-12"
            }, [e("div", {
                staticClass: "grid about-section"
            }, [e("AboutSection", {
                staticClass: "section",
                attrs: {
                    flip: !1,
                    description: "We like to ensure that our mods fit the design philosophy of Minecraft. Every new friend, foe, and location should feel like a new experience for the player to enjoy.",
                    heading: "Our Goals",
                    width: "472",
                    height: "407",
                    image: r(365)
                }
            }), t._v(" "), e("AboutSection", {
                staticClass: "section",
                attrs: {
                    flip: !0,
                    description: "Explore many biomes and locations, while meeting new friends along the way. Experiment with a variety of foods and potions, build with an expanded selection of materials, and equip new gear for your next fight.",
                    heading: "Expectations",
                    width: "472",
                    height: "319",
                    image: r(366)
                }
            }), t._v(" "), e("AboutSection", {
                staticClass: "section",
                attrs: {
                    flip: !1,
                    link: "https://www.teamabnormals.com/discord",
                    linkText: "Join our Discord!",
                    description: "If you want to learn more information about each mod, join our Discord server down below!",
                    heading: "Find Out More",
                    width: "472",
                    height: "393",
                    image: r(367)
                }
            })], 1)])])], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Hero: r(357).default,
            SectionTitle: r(308).default,
            Postcard: r(315).default,
            AboutSection: r(356).default
        })
    }
}]);
