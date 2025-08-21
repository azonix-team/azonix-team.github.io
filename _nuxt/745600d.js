(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    309: function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return c
        }
        )),
        r.d(e, "a", (function() {
            return m
        }
        )),
        r.d(e, "d", (function() {
            return f
        }
        )),
        r.d(e, "c", (function() {
            return w
        }
        ));
        var n = r(10)
          , o = (r(50),
        new (r(316).a)({
            url: "https://abnormals-ghost.hardaway.dev",
            key: "079b120332690da289eff92580",
            version: "v3"
        }));
        function c() {
            return l.apply(this, arguments)
        }
        function l() {
            return (l = Object(n.a)(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            o.posts.browse({
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
        function m() {
            return d.apply(this, arguments)
        }
        function d() {
            return (d = Object(n.a)(regeneratorRuntime.mark((function t() {
                var e, i;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            o.posts.browse({
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
        function f() {
            return h.apply(this, arguments)
        }
        function h() {
            return (h = Object(n.a)(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            o.posts.browse({
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
        function w(t) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            o.posts.read({
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
    353: function(t, e, r) {
        var content = r(364);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(52).default)("c64a302c", content, !0, {
            sourceMap: !1
        })
    },
    362: function(t, e, r) {
        t.exports = r.p + "img/92626d7.webp"
    },
    363: function(t, e, r) {
        "use strict";
        r(353)
    },
    364: function(t, e, r) {
        var n = r(51)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, ".header-img{border-color:#537db5;border-width:4px}.dark .header-img{border-color:#384681}", ""]),
        n.locals = {},
        t.exports = n
    },
    382: function(t, e, r) {
        "use strict";
        r.r(e);
        r(37);
        var n = r(10)
          , o = (r(50),
        r(309))
          , c = {
            asyncData: function(t) {
                return Object(n.a)(regeneratorRuntime.mark((function e() {
                    var r, n, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = t.params,
                                n = t.error,
                                e.prev = 1,
                                e.next = 4,
                                Object(o.c)(r.slug);
                            case 4:
                                return c = e.sent,
                                e.abrupt("return", {
                                    page: c
                                });
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(1),
                                n({
                                    statusCode: 404,
                                    message: "Can't find the page you're looking for."
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 8]])
                }
                )))()
            },
            head: function() {
                if (this.page)
                    return {
                        title: this.page.title + " — Team Abnormals",
                        meta: [{
                            property: "og:title",
                            content: this.page.title + " — Team Abnormals"
                        }, {
                            property: "twitter:title",
                            content: this.page.title + " — Team Abnormals"
                        }, {
                            hid: "description",
                            name: "description",
                            content: this.page.tagline ? this.page.tagline : "Welcome to Team Abnormals! We are a small modding team focused on creating mods with quality art and design for Minecraft Java Edition."
                        }, {
                            property: "og:description",
                            content: this.page.tagline ? this.page.tagline : "Welcome to Team Abnormals! We are a small modding team focused on creating mods with quality art and design for Minecraft Java Edition."
                        }, {
                            property: "twitter:description",
                            content: "Welcome to Team Abnormals! We are a small modding team focused on creating mods with quality art and design for Minecraft Java Edition."
                        }, {
                            property: "og:url",
                            content: "https://www.teamabnormals.com/blog/" + this.page.slug
                        }, {
                            property: "og:image",
                            content: this.page.thumbnail
                        }, {
                            property: "twitter:url",
                            content: "https://www.teamabnormals.com/blog/" + this.page.slug
                        }, {
                            property: "twitter:image",
                            content: this.page.thumbnail
                        }]
                    }
            }
        }
          , l = (r(363),
        r(24))
          , component = Object(l.a)(c, (function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("div", {
                staticClass: "py-12 toned-background"
            }, [e("div", {
                staticClass: "page-container px-12"
            }, [e("div", [t.page.feature_image ? e("img", {
                staticClass: "header-img",
                attrs: {
                    alt: t.page.title,
                    src: t.page.feature_image
                }
            }) : e("img", {
                staticClass: "header-img",
                attrs: {
                    alt: t.page.title,
                    src: r(362)
                }
            }), t._v(" "), e("p", {
                staticClass: "text-white font-semibold text-center uppercase tracking-wide"
            }, [e("a", {
                staticClass: "relative -top-3.5 p-2 blueprint-background"
            }, [t.page.primary_tag ? e("span", [t._v(t._s(t.page.primary_tag.name))]) : e("span", [t._v("Misc")])])])])])]), t._v(" "), e("div", {
                staticClass: "py-12 white-background min-h-screen"
            }, [e("div", {
                staticClass: "container mx-auto px-12 max-w-sm md:max-w-4xl"
            }, [e("div", {
                staticClass: "mb-6"
            }, [e("h3", {
                staticClass: "text-center font-bold text-4xl heading"
            }, [t._v(t._s(t.page.title))]), t._v(" "), e("p", {
                staticClass: "text-center subtext font-normal italic"
            }, [t._v(t._s(t.$moment(t.page.published_at).format("MMM Do, YYYY")))]), t._v(" "), t.page.tagline ? e("p", {
                staticClass: "text-center text-xl mt-2 subtext"
            }, [t._v(t._s(t.page.tagline))]) : t._e()]), t._v(" "), e("div", {
                staticClass: "post",
                domProps: {
                    innerHTML: t._s(t.page.html)
                }
            })])])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    }
}]);
