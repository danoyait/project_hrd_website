"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_travel_destinations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      modalVisible: false,
      selectedDestination: {},
      tour_destination: [],
      detail_tour_destination: [],
      businesses: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.getData();
          case 3:
            _context.next = 8;
            break;
          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 5]]);
    }))();
  },
  methods: {
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

      // Create a new element to hold the truncated text
      tempDiv.innerHTML = text;
      return tempDiv.innerHTML;
    },
    formatCurrency: function formatCurrency(amount) {
      var formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      formatted = 'Rp ' + formatted;
      return formatted;
    },
    goToTravel: function goToTravel() {
      window.location.href = '/travel';
    },
    openModal: function openModal(destination) {
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
        console.error("Error in openModal:", e);
      }
    },
    closeModal: function closeModal() {
      this.modalVisible = false;
    },
    openWhatsApp: function openWhatsApp(book) {
      try {
        var bookNow = book;
        var myMoney = this.formatCurrency(bookNow.price);
        var message = "Hello, I'm interested in ".concat(bookNow.name_tour_destination, "'s destination with ").concat(bookNow.name_package, "'s package and price is ").concat(myMoney);
        var phoneNumber = '1234567890'; // Replace with your WhatsApp number
        window.open("https://wa.me/".concat(this.businesses[0].whatsapp_number, "?text=").concat(encodeURIComponent(message)), '_blank');
      } catch (e) {}
    },
    getData: function getData() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.isLoading = true;
              _context2.prev = 1;
              _context2.next = 4;
              return _this3.axios.get("/api/admin/tour_destination");
            case 4:
              _this3.tour_destination = _context2.sent.data.data;
              _context2.next = 7;
              return _this3.axios.get("/api/admin/businesses");
            case 7:
              _this3.businesses = _context2.sent.data.whatsapp;
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              console.error(_context2.t0);
            case 13:
              _context2.prev = 13;
              _this3.isLoading = false;
              return _context2.finish(13);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 10, 13, 16]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("button", {
    staticClass: "back-button",
    attrs: {
      "aria-label": "Back"
    },
    on: {
      click: _vm.goToTravel
    }
  }, [_c("span", {
    staticClass: "back-icon"
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M15 19l-7-7 7-7",
      stroke: "#ff9800",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "logo",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Explore Our Destinations")])])]), _vm._v(" "), _c("section", {
    staticClass: "destinations",
    attrs: {
      id: "destinations"
    }
  }, [_c("div", {
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
          return _vm.openModal(r);
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
  }, [_c("button", {
    staticClass: "modal-close",
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("×")]), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("h2", {
    domProps: {
      innerHTML: _vm._s(_vm.detail_tour_destination[0].name_tour_destination)
    }
  }) : _vm._e(), _vm._v(" "), _vm.detail_tour_destination && _vm.detail_tour_destination[0] ? _c("img", {
    staticClass: "modal-photo",
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
      staticClass: "text-decoration-none"
    }, [_vm._v(_vm._s(pkg.name_package))]), _vm._v(" "), _c("img", {
      staticClass: "package-photo",
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
      staticClass: "book-now-container"
    }, [_c("button", {
      staticClass: "whatsapp-button",
      on: {
        click: function click($event) {
          return _vm.openWhatsApp(pkg);
        }
      }
    }, [_c("span", {
      staticClass: "whatsapp-icon"
    })])])]), _vm._v(" "), _c("br")]);
  }), 0)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "footer"
  }, [_c("p", [_vm._v("© 2024 Travel Excite. All rights reserved.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.loading-animation {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\n}\n.spinner {\r\n    border: 8px solid rgba(0, 0, 0, 0.1);\r\n    border-left-color: #ff9800;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: spin 1s linear infinite;\n}\n@keyframes spin {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(360deg);\n}\n}\r\n\r\n/* Custom Scrollbar Styles */\n::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\n}\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n    border-radius: 5px;\n}\n::-webkit-scrollbar-thumb {\r\n    background: #ff9800;\r\n    border-radius: 5px;\n}\n::-webkit-scrollbar-thumb:hover {\r\n    background: #e68a00;\n}\r\n\r\n/* For Firefox */\nhtml {\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #ff9800 #f1f1f1;\n}\r\n\r\n/* For Microsoft Edge */\nbody {\r\n    scrollbar-color: #ff9800 #f1f1f1;\n}\nbody {\r\n    margin: 0;\r\n    font-family: 'Arial', sans-serif;\r\n    color: #333;\r\n    background: #fff;\r\n    box-sizing: border-box;\n}\n.book-now-container {\r\n    display: inline-flex;\r\n    align-items: center;\n}\n.whatsapp-button {\r\n    background-color: #25D366;\r\n    border: none;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-left: 5px;\n}\n.whatsapp-icon {\r\n    width: 15px;\r\n    height: 15px;\r\n    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png');\r\n    background-size: contain;\r\n    display: inline-block;\n}\r\n\r\n/* Navbar */\n.navbar {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: #ffffff;\r\n    padding: 15px 0;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n    z-index: 1000;\r\n    transition: background 0.3s, box-shadow 0.3s;\n}\n.navbar .container {\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\n}\n.navbar .back-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #ffffff;\r\n    border: 2px solid #ff9800;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    color: #ff9800;\r\n    font-size: 1.2rem;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    transition: background 0.3s, color 0.3s, border-color 0.3s;\r\n    margin-right: 15px;\r\n    transform: translateY(-5px);\r\n    position: relative;\r\n    /* Center content vertically and horizontally */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.navbar .back-icon {\r\n    /* Ensure the icon is inline and centered within the button */\r\n    display: inline-block;\r\n    font-size: 1.2rem;\r\n    /* Adjust font size as needed */\r\n    line-height: 1;\n}\n.navbar .back-button:hover {\r\n    background: #ff99004f;\r\n    color: #ffffff;\r\n    border-color: #ff9800;\n}\n.navbar .logo {\r\n    font-size: 1.4rem;\r\n    color: #ff9800;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    transition: color 0.3s;\r\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n.navbar.transparent {\r\n    background: transparent;\r\n    box-shadow: none;\n}\n.navbar.scrolled {\r\n    background: #ffffff;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\r\n\r\n/* Hide the nav-toggle button */\n.nav-toggle {\r\n    display: none;\n}\r\n\r\n/* Destinations section adjusts to fill available space */\n.destinations {\r\n    flex: 1;\r\n    padding: 120px 20px 40px;\r\n    background: #f0f0f0;\n}\n.destination-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 20px;\n}\n.destination-item {\r\n    position: relative;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\r\n    transition: transform 0.5s, box-shadow 0.5s;\n}\n.destination-item img {\r\n    width: 100%;\r\n    height: auto;\r\n    transition: transform 0.5s;\n}\n.destination-info {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    padding: 20px;\r\n    text-align: center;\r\n    height: 90px;\r\n    box-sizing: border-box;\n}\n.destination-item:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.destination-item:hover img {\r\n    transform: scale(1.1);\n}\n.destination-item:hover .destination-info {\r\n    transform: translateY(0);\n}\n.destination-info h3 {\r\n    font-size: 1.6rem;\r\n    margin: 0;\r\n    color: #ff9800;\n}\n.destination-info p {\r\n    font-size: 1.1rem;\r\n    margin: 10px 0;\r\n    color: #fff;\n}\n.destination-link {\r\n    text-decoration: none;\r\n    color: inherit;\n}\r\n\r\n/* Modal Styles */\n.modal-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 1001;\n}\r\n\r\n/* Modal Styles */\n.modal-content {\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    max-width: 600px;\r\n    max-height: 80vh;\r\n    overflow-y: auto;\r\n    text-align: left;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\r\n\r\n/* Close Button */\n.modal-close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    background: #ddd;\r\n    border: none;\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    color: #333;\r\n    /* Adjust vertical alignment with h2 */\r\n    transform: translateY(-59%);\n}\n.modal-content h2 {\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n    font-size: 1rem;\n}\n.modal-photo {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\n}\r\n\r\n/* Close Button */\n.modal-close {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    background: #ddd;\r\n    border: none;\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    color: #333;\n}\n.package-photo {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\n}\nbutton {\r\n    background-color: #ff9800;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\n}\nbutton:hover {\r\n    background-color: #e68a00;\n}\n.whatsapp-button {\r\n    background-color: #25D366;\n}\n.whatsapp-button:hover {\r\n    background-color: #128C7E;\n}\r\n\r\n/* Footer */\n.footer {\r\n    background: #ffffff;\r\n    color: #333;\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);\r\n    margin-top: auto;\r\n    box-sizing: border-box;\n}\n#app {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\n}\n.footer {\r\n    margin-top: auto;\n}\r\n\r\n/* Media Queries */\n@media (max-width: 768px) {\n.nav-links {\r\n        display: none;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        background: #ffffff;\r\n        position: absolute;\r\n        top: 60px;\r\n        left: 0;\r\n        padding: 15px 0;\r\n        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.nav-links.active {\r\n        display: flex;\n}\n.nav-links a {\r\n        padding: 10px 20px;\r\n        text-align: center;\r\n        border-bottom: 1px solid #ddd;\n}\n.nav-toggle {\r\n        display: none;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_style_index_0_id_51ef7802_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_style_index_0_id_51ef7802_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_style_index_0_id_51ef7802_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/travel/destinations.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/travel/destinations.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destinations.vue?vue&type=template&id=51ef7802 */ "./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802");
/* harmony import */ var _destinations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinations.vue?vue&type=script&lang=js */ "./resources/js/components/travel/destinations.vue?vue&type=script&lang=js");
/* harmony import */ var _destinations_vue_vue_type_style_index_0_id_51ef7802_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css */ "./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _destinations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__.render,
  _destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/travel/destinations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/travel/destinations.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/travel/destinations.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./destinations.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_template_id_51ef7802__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./destinations.vue?vue&type=template&id=51ef7802 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=template&id=51ef7802");


/***/ }),

/***/ "./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_destinations_vue_vue_type_style_index_0_id_51ef7802_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/travel/destinations.vue?vue&type=style&index=0&id=51ef7802&lang=css");


/***/ })

}]);