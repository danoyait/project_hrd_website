"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_travel_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      isLoading: false,
      businesses: [],
      galeryphototravel: [],
      isModalOpen: false,
      newTestimonial: '',
      newAuthor: '',
      home_content: [],
      modalVisible: false,
      selectedDestination: {},
      tour_destination: [],
      detail_tour_destination: []
    }, "businesses", []), "package", []), "testimonials", []), "logo", []), "maps", []);
  },
  methods: {
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var galeryphototravelResponse;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.isLoading = true;
              _context.prev = 1;
              _context.next = 4;
              return _this.axios.get("/api/admin/galeryphototravel");
            case 4:
              galeryphototravelResponse = _context.sent;
              _this.galeryphototravel = galeryphototravelResponse.data.galeryphototravel;
              _context.next = 8;
              return _this.axios.get("/api/admin/businesses");
            case 8:
              _this.businesses = _context.sent.data.whatsapp;
              _context.next = 11;
              return _this.axios.get("/api/admin/home_content");
            case 11:
              _this.home_content = _context.sent.data.dataHomeContent;
              _context.next = 14;
              return _this.axios.get("/api/admin/tour_destination");
            case 14:
              _this.tour_destination = _context.sent.data.frontend;
              _context.next = 17;
              return _this.axios.get("/api/admin/package");
            case 17:
              _this["package"] = _context.sent.data.dataPackage;
              _context.next = 20;
              return _this.axios.get("/api/admin/testimonials");
            case 20:
              _this.testimonials = _context.sent.data.testimonials;
              _context.next = 23;
              return _this.axios.get("/api/admin/businesses");
            case 23:
              _this.logo = _context.sent.data.logo;
              _context.next = 26;
              return _this.axios.get("/api/admin/businesses");
            case 26:
              _this.maps = _context.sent.data.maps;
              _context.next = 32;
              break;
            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
            case 32:
              _context.prev = 32;
              _this.isLoading = false;
              return _context.finish(32);
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 29, 32, 35]]);
      }))();
    },
    openModal: function openModal() {
      this.isModalOpen = true;
    },
    closeModal: function closeModal() {
      this.isModalOpen = false;
    },
    openModalDestination: function openModalDestination(destination) {
      var _this2 = this;
      try {
        this.selectedDestination = destination;
        this.modalVisible = true;
        var uri = "/api/admin/package/".concat(this.selectedDestination.id_tour_destination, "/show");
        this.axios.get(uri).then(function (response) {
          _this2.detail_tour_destination = response.data.length > 0 ? response.data : [];
        })["catch"](function (error) {
          console.error("Error fetching destination details:", error);
          _this2.detail_tour_destination = [];
        });
      } catch (e) {
        console.log(e);
      }
    },
    closeModalDestination: function closeModalDestination() {
      this.modalVisible = false;
    },
    submitTestimonial: function submitTestimonial(e) {
      if (this.$data.testimonials.name.length === 0) {
        this.errors.push("Name is required!");
        this.$swal.fire({
          title: "Error",
          text: "Name is required!",
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000
        });
      } else {
        // Directly show the success message without making an API request
        this.$swal.fire({
          title: "Success",
          text: "Thank you for visiting our website! If you're interested in our website or would like to become a reseller, please contact us at 62895415580656. We look forward to hearing from you!",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 15000
        });

        // Optionally redirect to another page or close the modal
        window.location.href = '/travel';
        this.isModalOpen = false;
        e.preventDefault();
      }
    },
    getGoogleMapsUrl: function getGoogleMapsUrl(url) {
      var getURL = url.website_url;
      window.open("".concat(getURL), '_blank');
    },
    truncateHtml: function truncateHtml(html) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      // Create a temporary DOM element to parse the HTML
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Extract plain text
      var text = tempDiv.textContent || tempDiv.innerText || '';

      // Truncate text
      if (text.length > limit) {
        text = text.slice(0, limit) + '...';
      }
      tempDiv.innerHTML = text;
      return tempDiv.innerHTML;
    },
    formatCurrency: function formatCurrency(amount) {
      var formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      formatted = 'Rp ' + formatted;
      return formatted;
    },
    openWhatsApp: function openWhatsApp(book) {
      try {
        var bookNow = book;
        var myMoney = this.formatCurrency(bookNow.price);
        var message = "Hello, I'm interested in ".concat(bookNow.name_tour_destination, "'s destination with ").concat(bookNow.name_package, "'s package and price is ").concat(myMoney);
        var phoneNumber = '1234567890'; // Replace with your WhatsApp number
        window.open("https://wa.me/".concat(this.businesses[0].whatsapp_number, "?text=").concat(encodeURIComponent(message)), '_blank');
      } catch (e) {
        console.log(e);
      }
    },
    openWhatsAppPackage: function openWhatsAppPackage(book) {
      try {
        var bookNow = book;
        var myMoney = this.formatCurrency(bookNow.price);
        var message = "Hello, I'm interested in ".concat(bookNow.name_tour_destination, "'s destination with ").concat(bookNow.name_package, "'s package and price is ").concat(myMoney);
        var phoneNumber = '1234567890'; // Replace with your WhatsApp number
        window.open("https://wa.me/".concat(this.businesses[0].whatsapp_number, "?text=").concat(encodeURIComponent(message)), '_blank');
      } catch (e) {}
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var script, navbar, logo, whatsappButton, mapsButton, homeSection, navToggle, navLinks, updateNavbar, prevButton, nextButton, container, items, totalItems, index, showSlide, sections, observer;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            showSlide = function _showSlide(newIndex) {
              if (newIndex < 0) newIndex = totalItems - 1;
              if (newIndex >= totalItems) newIndex = 0;
              index = newIndex;
              container.style.transform = "translateX(-".concat(index * 100, "%)");
            };
            _context2.next = 3;
            return _this3.getData();
          case 3:
            // Load Swiper script dynamically
            script = document.createElement('script');
            script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
            script.onload = function () {
              new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
              });
            };
            document.head.appendChild(script);

            // Handle navbar and logo visibility
            navbar = document.querySelector('.navbar');
            logo = document.querySelector('.logo');
            whatsappButton = document.querySelector('.whatsapp-button');
            mapsButton = document.querySelector('.maps-button');
            homeSection = document.querySelector('#home');
            navToggle = document.querySelector('.nav-toggle');
            navLinks = document.querySelector('.nav-links');
            navToggle.addEventListener('click', function () {
              navLinks.classList.toggle('active');
            });
            updateNavbar = function updateNavbar() {
              var homeSectionTop = homeSection.offsetTop;
              var scrollY = window.scrollY;
              if (scrollY < homeSectionTop + homeSection.offsetHeight) {
                navbar.classList.add('transparent');
                navbar.classList.remove('scrolled');
                logo.style.visibility = 'hidden';
                whatsappButton.style.visibility = 'hidden';
                mapsButton.style.visibility = 'hidden';
              } else {
                navbar.classList.remove('transparent');
                navbar.classList.add('scrolled');
                logo.style.visibility = 'visible';
                whatsappButton.style.visibility = 'visible';
                mapsButton.style.visibility = 'visible';
              }
            };
            updateNavbar();
            window.addEventListener('scroll', updateNavbar);

            // Handle testimonials slider
            prevButton = document.querySelector('.slider-prev');
            nextButton = document.querySelector('.slider-next');
            container = document.querySelector('.testimonial-container');
            items = document.querySelectorAll('.testimonial-item');
            totalItems = items.length;
            index = 0;
            prevButton.addEventListener('click', function () {
              return showSlide(index - 1);
            });
            nextButton.addEventListener('click', function () {
              return showSlide(index + 1);
            });
            setInterval(function () {
              return showSlide(index + 1);
            }, 7000);

            // Initialize Intersection Observer
            sections = document.querySelectorAll('section');
            observer = new IntersectionObserver(function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
                  observer.unobserve(entry.target);
                }
              });
            }, {
              threshold: 0.1
            });
            sections.forEach(function (section) {
              observer.observe(section);
            });
          case 30:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "app"
    }
  }, [_vm.isLoading ? _c("div", {
    staticClass: "loading-animation"
  }, [_c("div", {
    staticClass: "spinner"
  })]) : _c("div", [_c("nav", {
    staticClass: "navbar"
  }, [_c("div", {
    staticClass: "container"
  }, [_vm._l(_vm.logo, function (r, index) {
    return _c("a", {
      key: r.id_businesses,
      staticClass: "logo",
      attrs: {
        href: "#"
      },
      domProps: {
        innerHTML: _vm._s(r.business_name)
      }
    });
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)], 2)]), _vm._v(" "), _c("section", {
    staticClass: "home",
    attrs: {
      id: "home"
    }
  }, [_c("div", {
    staticClass: "swiper-container"
  }, [_c("div", {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.galeryphototravel, function (r, index) {
    return _c("div", {
      key: r.id_photo_travel,
      staticClass: "swiper-slide"
    }, [_c("img", {
      attrs: {
        src: "/images/galery_photo_travel/".concat(r.id_photo_travel, "/").concat(r.photo_crop_travel),
        alt: "Destination 1"
      }
    })]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "swiper-pagination"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev"
  })]), _vm._v(" "), _vm._l(_vm.home_content, function (r, index) {
    return _c("div", {
      key: r.id_home_content,
      staticClass: "home-content"
    }, [_c("h1", {
      domProps: {
        innerHTML: _vm._s(r.title)
      }
    }), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(r.description)
      }
    })]);
  })], 2), _vm._v(" "), _c("section", {
    staticClass: "destinations",
    attrs: {
      id: "destinations"
    }
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("Explore Our Destinations")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "destination-grid"
  }, _vm._l(_vm.tour_destination, function (r, index) {
    return _c("a", {
      key: r.id_tour_destination,
      staticClass: "destination-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.openModalDestination(r);
        }
      }
    }, [_c("div", {
      staticClass: "destination-item"
    }, [_c("img", {
      attrs: {
        src: "/images/tour_destination/".concat(r.id_tour_destination, "/").concat(r.photo_crop_tour_destination),
        alt: "Sunny Shores"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "destination-info"
    }, [_c("h3", {
      staticStyle: {
        "font-size": "16px"
      }
    }, [_vm._v(_vm._s(_vm.truncateHtml(r.name_tour_destination, 25)))]), _vm._v(" "), _c("p", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_vm._v(_vm._s(_vm.truncateHtml(r.description_tour_destination, 30)))])])])]);
  }), 0)]), _vm._v(" "), _vm.modalVisible ? _c("div", {
    staticClass: "custom-modal-overlay",
    on: {
      click: _vm.closeModalDestination
    }
  }, [_c("div", {
    staticClass: "custom-modal-content",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("button", {
    staticClass: "custom-modal-close",
    on: {
      click: _vm.closeModalDestination
    }
  }, [_vm._v("×")]), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("h2", {
    domProps: {
      innerHTML: _vm._s(_vm.detail_tour_destination[0].name_tour_destination)
    }
  }) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("img", {
    staticClass: "custom-modal-photo",
    attrs: {
      src: "/images/tour_destination/".concat(_vm.detail_tour_destination[0].id_tour_destination, "/").concat(_vm.detail_tour_destination[0].photo_crop_tour_destination),
      alt: "Destination Photo"
    }
  }) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("p", [_c("strong", [_vm._v("Description:")]), _vm._v(" "), _c("span", {
    staticStyle: {
      "text-align": "justify"
    },
    domProps: {
      innerHTML: _vm._s(_vm.detail_tour_destination[0].description_tour_destination)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("p", [_c("strong", [_vm._v("Includes:")]), _vm._v(" "), _c("span", {
    staticStyle: {
      "text-align": "justify"
    },
    domProps: {
      innerHTML: _vm._s(_vm.detail_tour_destination[0].includes_tour_destination)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("p", [_c("strong", [_vm._v("What to Bring:")]), _vm._v(" "), _c("span", {
    staticStyle: {
      "text-align": "justify"
    },
    domProps: {
      innerHTML: _vm._s(_vm.detail_tour_destination[0].what_to_brings)
    }
  })]) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination.length ? _c("div", [_c("h3", [_vm._v("Available Packages:")]), _vm._v(" "), _c("ul", _vm._l(_vm.detail_tour_destination, function (pkg, index) {
    return _c("li", {
      key: index
    }, [_c("h4", {
      staticClass: "custom-package-name"
    }, [_vm._v(_vm._s(pkg.name_package))]), _vm._v(" "), _c("img", {
      staticClass: "custom-package-photo",
      attrs: {
        src: pkg.photo_crop_package ? "/images/package/".concat(pkg.id_package, "/").concat(pkg.photo_crop_package) : "/images/package/no-image.jpg",
        alt: "Package Photo"
      }
    }), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Description:")]), _vm._v(" "), _c("span", {
      staticStyle: {
        "text-align": "justify"
      },
      domProps: {
        innerHTML: _vm._s(pkg.description_package)
      }
    })]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Price:")]), _vm._v(" "), _c("span", {
      staticStyle: {
        "text-align": "justify"
      },
      domProps: {
        innerHTML: _vm._s(_vm.formatCurrency(pkg.price))
      }
    })]), _vm._v(" "), _c("p", {
      staticStyle: {
        "text-align": "justify"
      }
    }, [_c("strong", [_vm._v("Category:")]), _vm._v(" " + _vm._s(pkg.name_package_category))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Book Now:")]), _vm._v(" "), _c("span", {
      staticClass: "custom-book-now-container"
    }, [_c("button", {
      staticClass: "custom-whatsapp-button",
      on: {
        click: function click($event) {
          return _vm.openWhatsApp(pkg);
        }
      }
    }, [_c("span", {
      staticClass: "custom-whatsapp-icon"
    })])])]), _vm._v(" "), _c("br")]);
  }), 0)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("section", {
    staticClass: "packages",
    attrs: {
      id: "packages"
    }
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("Amazing Travel Packages")]), _vm._v(" "), _c("div", {
    staticClass: "package-grid"
  }, _vm._l(_vm["package"], function (r, index) {
    return _c("div", {
      key: r.id_package,
      staticClass: "package-item"
    }, [_c("div", {
      staticClass: "package-image"
    }, [_c("img", {
      attrs: {
        src: r.photo_crop_package ? "/images/package/".concat(r.id_package, "/").concat(r.photo_crop_package) : "/images/package/no-image.jpg",
        alt: "Cruise"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "package-details"
    }, [_c("h3", {
      domProps: {
        innerHTML: _vm._s(r.name_package)
      }
    }), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(r.description_package)
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "price",
      domProps: {
        innerHTML: _vm._s(_vm.formatCurrency(r.price))
      }
    }), _vm._v(" "), _c("a", {
      staticClass: "btn-main",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.openWhatsAppPackage(r);
        }
      }
    }, [_vm._v("Book Now")])])]);
  }), 0)]), _vm._v(" "), _c("section", {
    staticClass: "testimonials",
    attrs: {
      id: "testimonials"
    }
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("What Our Guests Say")]), _vm._v(" "), _c("button", {
    staticClass: "add-testimonial",
    on: {
      click: _vm.openModal
    }
  }, [_vm._v("+")]), _vm._v(" "), _c("div", {
    staticClass: "testimonial-slider"
  }, [_c("button", {
    staticClass: "slider-prev"
  }, [_vm._v("◀")]), _vm._v(" "), _c("div", {
    staticClass: "testimonial-container"
  }, _vm._l(_vm.testimonials, function (r, index) {
    return _c("div", {
      key: r.id,
      staticClass: "testimonial-item"
    }, [_c("p", [_vm._v('"' + _vm._s(r.message) + '"')]), _vm._v(" "), _c("p", {
      staticClass: "author"
    }, [_vm._v("- " + _vm._s(r.name) + ".")])]);
  }), 0), _vm._v(" "), _c("button", {
    staticClass: "slider-next"
  }, [_vm._v("▶")])])]), _vm._v(" "), _vm.isModalOpen ? _c("div", {
    staticClass: "modal-overlay",
    on: {
      click: _vm.closeModal
    }
  }, [_c("div", {
    staticClass: "modal-content",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("button", {
    staticClass: "modal-close",
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("×")]), _vm._v(" "), _c("h2", {
    staticClass: "modal-title"
  }, [_vm._v("Add Your Testimonial")])]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitTestimonial.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "author"
    }
  }, [_vm._v("Your Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.testimonials.name,
      expression: "testimonials.name"
    }],
    attrs: {
      id: "author",
      placeholder: "Enter your name"
    },
    domProps: {
      value: _vm.testimonials.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.testimonials, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "testimonial"
    }
  }, [_vm._v("Testimonial:")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.testimonials.message,
      expression: "testimonials.message"
    }],
    attrs: {
      id: "testimonial",
      placeholder: "Share your experience"
    },
    domProps: {
      value: _vm.testimonials.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.testimonials, "message", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn-main",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])])])]) : _vm._e(), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._l(_vm.businesses, function (r, index) {
    return _c("a", {
      key: r.id_businesses,
      staticClass: "whatsapp-button",
      attrs: {
        href: "https://wa.me/".concat(r.whatsapp_number),
        target: "_blank"
      }
    }, [_c("img", {
      attrs: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png",
        alt: "WhatsApp"
      }
    })]);
  }), _vm._v(" "), _vm._l(_vm.maps, function (r, index) {
    return _c("button", {
      key: r.id_businesses,
      staticClass: "maps-button",
      on: {
        click: function click($event) {
          return _vm.getGoogleMapsUrl(r);
        }
      }
    }, [_c("img", {
      attrs: {
        src: "https://img.icons8.com/ios/50/000000/google-maps.png",
        alt: "Google Maps"
      }
    })]);
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "nav-links"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#home"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#destinations"
    }
  }, [_vm._v("Destinations")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#packages"
    }
  }, [_vm._v("Packages")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#testimonials"
    }
  }, [_vm._v("Testimonials")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "nav-toggle",
    staticStyle: {
      "margin-top": "-5px"
    },
    attrs: {
      id: "nav-toggle"
    }
  }, [_c("span", {
    staticClass: "bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "bar"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "read-more",
    attrs: {
      href: "/travel/destinations"
    }
  }, [_c("span", {
    staticClass: "circle"
  }, [_c("span", {
    staticClass: "arrow"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "footer"
  }, [_c("p", [_vm._v("© 2024 Travel Excite. All rights reserved.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Basic fade-in animation */\n@keyframes fadeIn {\nfrom {\n        opacity: 0;\n        transform: translateY(20px);\n}\nto {\n        opacity: 1;\n        transform: translateY(0);\n}\n}\nsection {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: opacity 0.6s ease, transform 0.6s ease;\n}\nsection.animate {\n    opacity: 1;\n    transform: translateY(0);\n    animation: fadeIn 0.6s ease-out forwards;\n}\n#home.animate {\n    animation: fadeIn 0.8s ease-out forwards;\n}\n#destinations.animate {\n    animation: fadeIn 1s ease-out forwards;\n}\n#packages.animate {\n    animation: fadeIn 1.2s ease-out forwards;\n}\n#testimonials.animate {\n    animation: fadeIn 1.4s ease-out forwards;\n}\n.loading-animation {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n.spinner {\n    border: 8px solid rgba(0, 0, 0, 0.1);\n    border-left-color: #ff9800;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    animation: spin 1s linear infinite;\n}\n@keyframes spin {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n\n/* Modal Overlay */\n.custom-modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1001;\n}\n\n/* Modal Content */\n.custom-modal-content {\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    max-width: 600px;\n    max-height: 80vh;\n    overflow-y: auto;\n    text-align: left;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n/* Close Button */\n.custom-modal-close {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    background: #ddd;\n    border: none;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 18px;\n    color: #333;\n    /* Adjust vertical alignment with h2 */\n    transform: translateY(-59%);\n}\n\n/* Title (h2) */\n.custom-modal-content h2 {\n    margin-top: 0;\n    margin-bottom: 20px;\n    font-size: 1rem;\n}\n\n/* Modal Photo */\n.custom-modal-photo {\n    width: 100%;\n    height: auto;\n    border-radius: 10px;\n    margin-bottom: 10px;\n}\n\n/* Package Photo */\n.custom-package-photo {\n    width: 100%;\n    height: auto;\n    border-radius: 10px;\n    margin-bottom: 10px;\n}\n\n/* General Button */\nbutton {\n    background-color: #ff9800;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-top: 10px;\n}\nbutton:hover {\n    background-color: #e68a00;\n}\n\n/* Custom WhatsApp Button */\n.custom-whatsapp-button {\n    background-color: #25D366;\n}\n.custom-whatsapp-button:hover {\n    background-color: #128C7E;\n}\n.custom-whatsapp-icon {\n    width: 15px;\n    /* Sesuaikan lebar ikon */\n    height: 15px;\n    /* Sesuaikan tinggi ikon */\n    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png');\n    background-size: contain;\n    display: inline-block;\n}\n\n/* Modal Overlay */\n.modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n}\n\n/* Modal Content */\n.modal-content {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n    width: 100%;\n    max-width: 480px;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n    position: relative;\n    overflow: hidden;\n    transform: scale(0.95);\n    transition: transform 0.3s ease-in-out;\n}\n\n/* Modal Animation */\n.modal-content.show {\n    transform: scale(1);\n}\n\n/* Close Button */\n.modal-close {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    background: #ddd;\n    border: none;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 18px;\n    color: #333;\n    /* Adjust vertical alignment with h2 */\n    transform: translateY(-40%);\n}\n\n/* Modal Title */\n.modal-title {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n    font-weight: 600;\n    color: #333;\n}\n\n/* Modal title position */\n.modal-title {\n    margin-top: -10px;\n    padding-top: 10px;\n}\n\n/* Form Elements */\n.form-group {\n    margin-bottom: 20px;\n}\nlabel {\n    display: block;\n    font-size: 0.9rem;\n    margin-bottom: 5px;\n    color: #555;\n}\ninput,\ntextarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 0.9rem;\n    box-sizing: border-box;\n}\ntextarea {\n    resize: vertical;\n    min-height: 100px;\n}\n\n/* Submit Button */\n.btn-main {\n    background: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    padding: 12px 20px;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: background 0.3s ease;\n}\n.btn-main:hover {\n    background: #0056b3;\n}\n\n/* WhatsApp Button */\n.whatsapp-button {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 60px;\n    height: 60px;\n    background-color: #25D366;\n    /* Warna hijau WhatsApp */\n    border-radius: 50%;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n    transition: background-color 0.3s;\n}\n.whatsapp-button img {\n    width: 30px;\n    height: 30px;\n}\n.whatsapp-button:hover {\n    background-color: #128C7E;\n}\n\n/* Google Maps Button */\n.maps-button {\n    position: fixed;\n    bottom: 100px;\n    right: 20px;\n    width: 60px;\n    height: 60px;\n    background-color: #4285F4;\n    /* Warna biru Google Maps */\n    border-radius: 50%;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n    transition: background-color 0.3s;\n}\n.maps-button img {\n    width: 30px;\n    height: 30px;\n}\n.maps-button:hover {\n    background-color: #357ae8;\n}\n\n/* Custom Scrollbar Styles */\n::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n}\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 5px;\n}\n::-webkit-scrollbar-thumb {\n    background: #ff9800;\n    border-radius: 5px;\n}\n::-webkit-scrollbar-thumb:hover {\n    background: #e68a00;\n}\n\n/* For Firefox */\nhtml {\n    scrollbar-width: thin;\n    scrollbar-color: #ff9800 #f1f1f1;\n}\n\n/* For Microsoft Edge */\nbody {\n    scrollbar-color: #ff9800 #f1f1f1;\n}\nbody {\n    margin: 0;\n    font-family: 'Arial', sans-serif;\n    color: #333;\n    background: #fff;\n    box-sizing: border-box;\n}\n\n/* Navbar */\n.navbar {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    background: #ffffff;\n    padding: 15px 0;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    transition: background 0.3s, box-shadow 0.3s;\n}\n.navbar .container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 15px;\n}\n.navbar.transparent {\n    background: transparent;\n    box-shadow: none;\n}\n\n/* Additional styles for scroll effect */\n.navbar.scrolled {\n    background: #ffffff;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.logo {\n    font-size: 1.4rem;\n    color: #ff9800;\n    text-decoration: none;\n    font-weight: bold;\n    transition: color 0.3s;\n    font-family: 'Pacifico', cursive;\n    /* Contoh font kekinian */\n}\n.logo:hover {\n    color: #f57c00;\n}\n.nav-links {\n    list-style: none;\n    display: flex;\n    gap: 20px;\n    margin: 0;\n    padding: 0;\n}\n.nav-links a {\n    color: #333;\n    text-decoration: none;\n    font-weight: bold;\n    position: relative;\n    transition: color 0.3s;\n}\n.nav-links a::after {\n    content: '';\n    display: block;\n    height: 2px;\n    background: #ff9800;\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    right: 0;\n    transform: scaleX(0);\n    transition: transform 0.3s;\n}\n.nav-links a:hover::after {\n    transform: scaleX(1);\n}\n\n/* Navbar Toggle Button */\n.nav-toggle {\n    display: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: 1.5rem;\n    z-index: 1001;\n    margin-left: auto;\n}\n.nav-toggle .bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    background: #ff9800;\n    margin: 5px 0;\n}\n\n/* Swiper Container */\n.swiper-container {\n    width: 100%;\n    height: 100vh;\n}\n\n/* Swiper Slide */\n.swiper-slide {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n.swiper-slide img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n/* Swiper Navigation */\n.swiper-button-next,\n.swiper-button-prev {\n    color: #fff;\n}\n\n/* Swiper Pagination */\n.swiper-pagination-bullet {\n    background: #fff;\n}\n.home {\n    height: 100vh;\n    background: linear-gradient(to right, #ff9800, #fbc02d);\n\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    color: #fff;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n}\n.home-content {\n    background: rgba(255, 254, 254, 0.344);\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n    /* Ensure the content is above the slider */\n    text-align: center;\n    color: #050505;\n}\n.home-content h1 {\n    font-size: 3rem;\n    margin-bottom: 20px;\n}\n.home-content p {\n    font-size: 1.2rem;\n    margin-bottom: 20px;\n}\n.btn-main {\n    background: #ff9800;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 30px;\n    font-size: 1.2rem;\n    text-decoration: none;\n    transition: background 0.3s, transform 0.3s;\n}\n.btn-main:hover {\n    background: #f57c00;\n    transform: scale(1.05);\n}\n\n/* Destinations */\n.destinations {\n    padding: 50px 20px;\n    background: #f0f0f0;\n}\n.section-title {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-bottom: 30px;\n    color: #ff9800;\n    font-family: 'Helvetica Neue', sans-serif;\n    /* Modern font */\n    font-weight: 700;\n}\n.read-more {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    margin-bottom: 45px;\n}\n.circle {\n    width: 60px;\n    height: 60px;\n    background: linear-gradient(135deg, #ff9800, #e68900);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 28px;\n    text-align: center;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;\n    cursor: pointer;\n    position: relative;\n    /* Add this to position the arrow correctly */\n}\n.arrow {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n.arrow::before {\n    content: '→';\n    font-size: 28px;\n    display: inline-block;\n    transition: transform 0.3s ease, color 0.3s ease;\n}\n.circle:hover .arrow::before {\n    color: #fff;\n}\n.circle:active .arrow::before {\n    transform: rotate(45deg);\n}\n.destination-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n.destination-item {\n    position: relative;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    transition: transform 0.5s, box-shadow 0.5s;\n}\n.destination-item img {\n    width: 100%;\n    height: auto;\n    transition: transform 0.5s;\n}\n.destination-info {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    padding: 20px;\n    text-align: center;\n    transform: translateY(0);\n    transition: transform 0.5s;\n    height: 94px;\n    /* Set a fixed height */\n    box-sizing: border-box;\n}\n.destination-item:hover {\n    transform: scale(1.05);\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.destination-item:hover img {\n    transform: scale(1.1);\n}\n.destination-item:hover .destination-info {\n    transform: translateY(0);\n}\n.destination-info h3 {\n    font-size: 1.6rem;\n    margin: 0;\n    color: #ff9800;\n}\n.destination-info p {\n    font-size: 1.1rem;\n    margin: 10px 0;\n    color: #fff;\n}\n.destination-link {\n    text-decoration: none;\n    color: inherit;\n}\n.destination-link .destination-item {\n    display: block;\n}\n\n/* Packages */\n.packages {\n    padding: 50px 20px;\n}\n.package-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n}\n.package-item {\n    background: #ffffff;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    transition: transform 0.5s, background 0.3s;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.package-image img {\n    width: 100%;\n    height: auto;\n    transition: transform 0.5s;\n    margin: 0 auto;\n}\n.package-details {\n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    max-height: 200px;\n    overflow-y: auto;\n}\n.package-details h3 {\n    font-size: 1.1rem;\n    margin: 0;\n    color: #ff9800;\n}\n.package-details p {\n    font-size: 0.8rem;\n    margin: 10px 0;\n    /* Consistent margin to ensure spacing */\n    color: #666;\n    text-align: justify;\n}\n.package-details .price {\n    font-size: 1.0rem;\n    margin: 15px 0;\n    /* Consistent margin to ensure spacing */\n    color: #ff9800;\n}\n.package-details .btn-main {\n    display: inline-block;\n    padding: 10px 20px;\n    background-color: #ff9800;\n    color: #fff;\n    text-decoration: none;\n    border-radius: 5px;\n    transition: background-color 0.3s;\n}\n.package-details .btn-main:hover {\n    background-color: #e68a00;\n}\n\n/* Testimonials */\n.testimonials {\n    padding: 50px 20px;\n    background: #f1f1f1;\n    position: relative;\n}\n.testimonial-slider {\n    display: flex;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n}\n.testimonial-container {\n    display: flex;\n    transition: transform 0.5s ease-in-out;\n    width: 100%;\n}\n.testimonial-item {\n    background: #ffffff;\n    border-radius: 10px;\n    padding: 20px;\n    text-align: center;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    flex: 0 0 100%;\n    box-sizing: border-box;\n    margin: 0 10px;\n}\n.testimonial-item p {\n    font-size: 1rem;\n    margin: 10px 0;\n}\n.author {\n    font-size: 0.8rem;\n    color: #888;\n}\n.slider-prev,\n.slider-next {\n    background: transparent;\n    border: 2px solid #ff9800;\n    color: #ff9800;\n    font-size: 1.5rem;\n    padding: 8px;\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 10;\n    transition: background 0.3s;\n}\n.slider-prev:hover,\n.slider-next:hover {\n    background: rgba(255, 152, 0, 0.1);\n}\n.slider-prev {\n    left: 10px;\n}\n.slider-next {\n    right: 10px;\n}\n.add-testimonial {\n    background: #ff9800;\n    border: none;\n    color: white;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: background 0.3s, transform 0.3s;\n    margin: 30px auto;\n}\n.add-testimonial:hover {\n    background: #e68900;\n    transform: scale(1.1);\n}\n.add-testimonial:focus {\n    outline: none;\n}\n\n/* Footer */\n.footer {\n    background: #ffffff;\n    color: #333;\n    text-align: center;\n    padding: 20px;\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* Media Queries */\n@media (max-width: 768px) {\n.nav-links {\n        display: none;\n        flex-direction: column;\n        width: 100%;\n        background: #ffffff;\n        position: absolute;\n        top: 60px;\n        /* Adjust based on navbar height */\n        left: 0;\n        padding: 15px 0;\n        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.nav-links.active {\n        display: flex;\n}\n.nav-links a {\n        padding: 10px 20px;\n        text-align: center;\n        border-bottom: 1px solid #ddd;\n}\n.nav-toggle {\n        display: block;\n}\n.testimonial-item {\n        padding: 15px;\n        margin: 0 5px;\n}\n.slider-prev,\n    .slider-next {\n        font-size: 1.2rem;\n        padding: 6px;\n}\n.add-testimonial {\n        width: 40px;\n        height: 40px;\n        font-size: 1.2rem;\n        margin-bottom: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41a16a30_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=41a16a30&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41a16a30_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41a16a30_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/travel/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/travel/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=41a16a30 */ "./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/travel/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_41a16a30_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=41a16a30&lang=css */ "./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/travel/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/travel/index.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/travel/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30":
/*!********************************************************************************!*\
  !*** ./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41a16a30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=41a16a30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=template&id=41a16a30");


/***/ }),

/***/ "./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41a16a30_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=41a16a30&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/index.vue?vue&type=style&index=0&id=41a16a30&lang=css");


/***/ })

}]);