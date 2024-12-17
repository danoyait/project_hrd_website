"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_frontend_home_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js ***!
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      loading: true,
      currentIndex: 0,
      // Initialize current slide index
      isTransparent: true,
      perusahaan: [],
      headervideo: [],
      produkditawarkan: [],
      jadwalusaha: [],
      sosialMedia: [],
      selectedProduk: [],
      detailproduks: [],
      selectedNamaProduk: [],
      showReview: [],
      galeri: [],
      rating_bintang: ""
    }, "isTransparent", true), "isNavCollapsed", true), "isTransparent", true), "isSmallScreen", false), "currentIndeks", 0);
  },
  filters: {
    formatJamMenit: function formatJamMenit(value) {
      if (value) {
        // Memastikan nilai adalah string
        var waktu = String(value);
        // Memisahkan jam dan menit
        var _waktu$split = waktu.split(':'),
          _waktu$split2 = _slicedToArray(_waktu$split, 2),
          jam = _waktu$split2[0],
          menit = _waktu$split2[1];
        // Menggabungkan kembali dalam format yang diinginkan
        return "".concat(jam, ":").concat(menit);
      }
      return value;
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getDataPerusahaan();
          case 2:
            _context.next = 4;
            return _this.getDataVideoHeader();
          case 4:
            _context.next = 6;
            return _this.getDataProduk();
          case 6:
            _context.next = 8;
            return _this.getJadwalUsaha();
          case 8:
            _context.next = 10;
            return _this.getSosialMedia();
          case 10:
            _context.next = 12;
            return _this.getShowReview();
          case 12:
            _context.next = 14;
            return _this.getGaleri();
          case 14:
            window.addEventListener('scroll', _this.handleScroll);
            setInterval(_this.nextSlide, 5000); // Change slide every 5 seconds
            // Mengecek apakah lebar layar kurang dari atau sama dengan 576px
            _this.isSmallScreen = window.innerWidth <= 576;
            // Menambahkan event listener untuk memperbarui nilai isSmallScreen saat ukuran layar berubah
            window.addEventListener('resize', function () {
              _this.isSmallScreen = window.innerWidth <= 576;
            });
            _this.aturSlideOtomatis();
            _this.loading = false;
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;
    // Membersihkan event listener saat komponen dihancurkan
    window.removeEventListener('resize', function () {
      _this2.isSmallScreen = window.innerWidth <= 576;
    });
  },
  methods: {
    capitalizeDescription: function capitalizeDescription(description) {
      // Pisahkan deskripsi menjadi kalimat-kalimat
      var sentences = description.split('. ');

      // Loop melalui setiap kalimat
      for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];

        // Ubah huruf pertama di setiap kalimat menjadi huruf kapital
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

        // Gabungkan kembali kalimat yang telah diubah
        sentences[i] = sentence;
      }

      // Gabungkan semua kalimat menjadi deskripsi baru
      return sentences.join('. ');
    },
    geserSebelumnya: function geserSebelumnya() {
      this.currentIndeks = (this.currentIndeks - 1 + this.galeri.length) % this.galeri.length;
    },
    geserBerikutnya: function geserBerikutnya() {
      this.currentIndeks = (this.currentIndeks + 1) % this.galeri.length;
    },
    pilihSlide: function pilihSlide(index) {
      this.currentIndeks = index;
    },
    aturSlideOtomatis: function aturSlideOtomatis() {
      var _this3 = this;
      setInterval(function () {
        _this3.geserBerikutnya();
      }, 3000); // Ganti 3000 dengan interval waktu yang diinginkan (dalam milidetik)
    },
    formatDate: function formatDate(dateTime) {
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      };
      var formattedDate = new Date(dateTime).toLocaleDateString('id-ID', options);
      return formattedDate;
    },
    nextSlide: function nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.showReview.length;
    },
    // Method to go to the previous slide
    prevSlide: function prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.showReview.length) % this.showReview.length;
    },
    // Method to go to a specific slide
    goToSlide: function goToSlide(index) {
      this.currentIndex = index;
    },
    getSosialMedia: function getSosialMedia() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this4.axios.get("/api/admin/sosialmedia");
            case 2:
              _this4.sosialMedia = _context2.sent.data.sosialmedia;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getDataPerusahaan: function getDataPerusahaan() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.axios.get("/api/admin/perusahaan");
            case 2:
              _this5.perusahaan = _context3.sent.data.perusahaans;
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getJadwalUsaha: function getJadwalUsaha() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this6.axios.get("/api/admin/jadwalusaha");
            case 2:
              _this6.jadwalusaha = _context4.sent.data.jadwalusaha;
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getDataVideoHeader: function getDataVideoHeader() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this7.axios.get("/api/admin/videos");
            case 2:
              _this7.headervideo = _context5.sent.data.headervideos;
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    getDataProduk: function getDataProduk() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this8.axios.get("/api/admin/produkditawarkan");
            case 2:
              _this8.produkditawarkan = _context6.sent.data.produkditawarkan;
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getShowReview: function getShowReview() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this9.axios.get("/api/admin/produkditawarkandetail/showreview");
            case 2:
              _this9.showReview = _context7.sent.data.testimoni;
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getGaleri: function getGaleri() {
      var _this10 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this10.axios.get("/api/admin/galeriphoto");
            case 2:
              _this10.galeri = _context8.sent.data.galeri;
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    handleScroll: function handleScroll() {
      // Add logic to determine when to make the background transparent
      // For example, you can check the scroll position and change isTransparent accordingly
      this.isTransparent = window.scrollY < 50;
    },
    formatCurrency: function formatCurrency(amount) {
      var formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      formatted = 'Rp ' + formatted;
      return formatted;
    },
    tampilkanDetailProduk: function tampilkanDetailProduk(produk, nama_produk) {
      var _this11 = this;
      // Atur produk yang dipilih untuk ditampilkan di modal
      this.selectedProduk = produk;
      this.selectedNamaProduk = nama_produk;
      var uri = "/api/admin/produkditawarkandetail/".concat(this.selectedProduk, "/show");
      this.axios.get(uri).then(function (response) {
        _this11.detailproduks = response.data;
        console.log(response.data);
      });
      // Buka modal
      var modal = new bootstrap.Modal(document.getElementById('produkModal'), {
        keyboard: false
      });
      modal.show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224 ***!
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
  }, [_c("nav", {
    staticClass: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbarResponsive",
    "class": {
      "bg-dark": _vm.isTransparent,
      "bg-transparent": _vm.isTransparent
    },
    attrs: {
      id: "mainNav"
    }
  }, [_c("div", {
    staticClass: "container px-3"
  }, [_vm.perusahaan[0].photo ? _c("a", {
    staticClass: "text-decoration-none",
    attrs: {
      href: "/homespa"
    }
  }, [_c("img", {
    staticClass: "logo-img",
    attrs: {
      src: "/images/perusahaan/".concat(_vm.perusahaan[0].id_perusahaan, "/").concat(_vm.perusahaan[0].photo),
      alt: "Perusahaan Logo",
      width: "92",
      height: "92"
    }
  })]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "navbar-toggler",
    staticStyle: {
      "background-color": "#000000"
    },
    attrs: {
      type: "button",
      "aria-expanded": !_vm.isNavCollapsed,
      "aria-controls": "navbarResponsive",
      "aria-label": "Toggle navigation"
    },
    on: {
      click: function click($event) {
        _vm.isNavCollapsed = !_vm.isNavCollapsed;
      }
    }
  }, [_c("span", {
    staticClass: "navbar-toggler-icon"
  })]), _vm._v(" "), _c("div", {
    "class": {
      collapse: _vm.isNavCollapsed,
      "navbar-collapse": true
    },
    attrs: {
      id: "navbarResponsive"
    }
  }, [_c("ul", {
    staticClass: "navbar-nav",
    "class": {
      "ms-auto": !_vm.isSmallScreen,
      "ms-3": _vm.isSmallScreen
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])])])]), _vm._v(" "), _c("header", {
    staticClass: "bg-primary bg-dark text-white",
    staticStyle: {
      "background-color": "#000000 !important"
    }
  }, [_vm.headervideo.length > 0 ? _c("div", {
    staticClass: "container px-4 text-center"
  }, [_c("video", {
    staticClass: "custom-video",
    attrs: {
      src: "/video/headervideo/" + _vm.headervideo[0].video,
      autoplay: "",
      loop: "",
      muted: "",
      playsinline: "",
      controls: ""
    },
    domProps: {
      muted: true
    }
  })]) : _c("div", {
    staticClass: "container px-4 text-center"
  }, [_c("div", {
    staticClass: "custom-video animate-pulse"
  }), _vm._v(" "), _c("div", {
    staticClass: "custom-video animate-pulse"
  }), _vm._v(" "), _c("div", {
    staticClass: "custom-video animate-pulse"
  })])]), _vm._v(" "), _c("section", {
    staticClass: "produk-section",
    staticStyle: {
      "background-color": "#000000 !important"
    },
    attrs: {
      id: "product"
    }
  }, [_vm.loading ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-top": "50px"
    }
  }, [_c("div", {
    staticClass: "spinner"
  })]) : _c("div", [_c("div", {
    staticClass: "modal",
    attrs: {
      id: "produkModal",
      tabindex: "-1",
      "aria-labelledby": "produkModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    staticStyle: {
      "font-size": "16px"
    },
    attrs: {
      id: "produkModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.selectedNamaProduk))]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-primary btn-sm btn-custom",
    attrs: {
      href: "https://www.fresha.com/book-now/kou-spa-l9zexlgg/all-offer?pId=1178617",
      target: "_blank"
    }
  }, [_vm._v("Book Now")])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "card-body table-responsive p-0"
  }, [_c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", _vm._l(_vm.detailproduks, function (r, index) {
    return _c("tr", {
      key: r.id_detail_produk_ditawarkan
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.durasi_waktu))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatCurrency(r.harga)))]), _vm._v(" "), _vm._l(_vm.sosialMedia, function (sosialmedia, index) {
      return _c("td", {
        key: index,
        staticStyle: {
          "float": "left"
        }
      }, [sosialmedia.nama_sosial_media === "Whatsapp" ? _c("a", {
        attrs: {
          href: sosialmedia.link_sosial_media + "?text=" + "Hi, I would like to book: " + _vm.selectedNamaProduk + " " + r.durasi_waktu + " " + _vm.formatCurrency(r.harga)
        }
      }, [_c("i", {
        staticClass: "fab fa-whatsapp text-primary whatsapp-icon"
      })]) : _vm._e()]);
    })], 2);
  }), 0)])])]), _vm._v(" "), _vm._m(6)])])]), _vm._v(" "), _c("div", {
    staticClass: "container px-4"
  }, [_c("div", {
    staticClass: "row gx-4 justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "produk-container mt-4"
  }, _vm._l(_vm.produkditawarkan, function (produk, index) {
    return _c("div", {
      key: index,
      staticClass: "produk-card"
    }, [_c("div", {
      staticClass: "produk-card-img"
    }, [_c("img", {
      attrs: {
        src: "../../../../images/produk/" + produk.id_produk + "/" + produk.photo,
        alt: "Product Image"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "produk-card-body"
    }, [_c("h5", {
      staticClass: "produk-card-title"
    }, [_vm._v(_vm._s(produk.nama_produk))]), _vm._v(" "), _c("p", {
      staticClass: "produk-card-text"
    }, [_vm._v(_vm._s(_vm.capitalizeDescription(produk.deskripsi_produk)))]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-white rounded-button",
      on: {
        click: function click($event) {
          return _vm.tampilkanDetailProduk(produk.id_produk, produk.nama_produk);
        }
      }
    }, [_c("span", {
      staticClass: "button-text"
    }, [_vm._v("Book Now")]), _vm._v(" "), _c("span", {
      staticClass: "arrow-right"
    })])])]);
  }), 0)])])])])]), _vm._v(" "), _c("section", {
    staticClass: "bg-light d-flex justify-content-center",
    staticStyle: {
      "background-color": "#000000 !important"
    },
    attrs: {
      id: "schedule"
    }
  }, [_c("div", {
    staticClass: "container px-4"
  }, [_c("div", {
    staticClass: "row gx-4 justify-content-center text-white"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, _vm._l(_vm.jadwalusaha, function (jadwal, index) {
    return _c("div", {
      key: index,
      staticClass: "col-md-4"
    }, [_c("div", {
      staticClass: "custom-card"
    }, [_c("h5", {
      staticClass: "card-header"
    }, [_vm._v(_vm._s(jadwal.hari))]), _vm._v(" "), _c("div", {
      staticClass: "card-body mt-0"
    }, [_c("h5", {
      staticClass: "ccard-header text-white"
    }, [_c("b", [_vm._v("Open:")]), _vm._v(" " + _vm._s(_vm._f("formatJamMenit")(jadwal.dari_jam)))]), _vm._v(" "), _c("h5", {
      staticClass: "ccard-header text-white"
    }, [_c("b", [_vm._v("Closed:")]), _vm._v(" " + _vm._s(_vm._f("formatJamMenit")(jadwal.sampai_jam)))])])])]);
  }), 0)])])])])]), _vm._v(" "), _c("section", {
    staticStyle: {
      "background-color": "#000000 !important",
      "margin-bottom": "10px"
    },
    attrs: {
      id: "galeri"
    }
  }, [_c("div", {
    staticClass: "container px-6 text-white"
  }, [_c("div", {
    staticClass: "row gx-4 justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "galeri-container"
  }, [_c("div", {
    staticClass: "galeri-wrapper"
  }, _vm._l(_vm.galeri, function (foto, index) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.currentIndeks === index,
        expression: "currentIndeks === index"
      }],
      key: index,
      staticStyle: {
        padding: "10px"
      }
    }, [_c("img", {
      staticStyle: {
        width: "100%",
        height: "auto"
      },
      attrs: {
        src: "../../../../images/galeriphoto/" + foto.id_galeryphoto + "/" + foto.photo,
        alt: "Galeri Foto"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "tombol-sebelumnya",
      on: {
        click: _vm.geserSebelumnya
      }
    }, [_vm._v("<")]), _vm._v(" "), _c("div", {
      staticClass: "tombol-berikutnya",
      on: {
        click: _vm.geserBerikutnya
      }
    }, [_vm._v(">")]), _vm._v(" "), _c("div", {
      staticClass: "galeri-indikator"
    }, _vm._l(_vm.galeri, function (foto, index) {
      return _c("span", {
        key: index,
        staticClass: "indikator",
        "class": {
          aktif: _vm.currentIndeks === index
        },
        on: {
          click: function click($event) {
            return _vm.pilihSlide(index);
          }
        }
      });
    }), 0)]);
  }), 0)])])])])]), _vm._v(" "), _c("section", {
    staticClass: "margin-top:35px;",
    staticStyle: {
      "background-color": "#000000 !important"
    },
    attrs: {
      id: "contact"
    }
  }, [_c("div", {
    staticClass: "container px-6 text-white"
  }, [_c("div", {
    staticClass: "row gx-4 justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 text-center"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, _vm._l(_vm.sosialMedia, function (sosial, index) {
    return sosial.nama_sosial_media === "Instagram" ? _c("div", {
      key: index,
      staticClass: "stylish-card"
    }, [_c("div", {
      staticClass: "card-content"
    }, [_c("a", {
      staticStyle: {
        "text-decoration": "none"
      },
      attrs: {
        href: sosial.link_sosial_media,
        target: "_blank"
      }
    }, [_c("i", {
      staticClass: "fab fa-instagram text-white"
    }), _vm._v(" "), _c("p", {
      staticClass: "card-text text-white"
    }, [_vm._v(_vm._s(sosial.nama_sosial_media))])])])]) : _vm._e();
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, _vm._l(_vm.sosialMedia, function (sosial, index) {
    return sosial.nama_sosial_media === "Google Maps" ? _c("div", {
      key: index,
      staticClass: "stylish-card"
    }, [_c("div", {
      staticClass: "card-content"
    }, [_c("a", {
      staticStyle: {
        "text-decoration": "none"
      },
      attrs: {
        href: sosial.link_sosial_media,
        target: "_blank"
      }
    }, [_c("i", {
      staticClass: "fas fa-map-marker-alt text-white"
    }), _vm._v(" "), _c("p", {
      staticClass: "card-text text-white"
    }, [_vm._v(_vm._s(sosial.nama_sosial_media))])])])]) : _vm._e();
  }), 0)])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "whatsapp-button"
  }, _vm._l(_vm.sosialMedia, function (sosial, index) {
    return sosial.nama_sosial_media === "Whatsapp" ? _c("a", {
      key: index,
      staticClass: "stylish-card",
      attrs: {
        href: sosial.link_sosial_media,
        target: "_blank"
      }
    }, [_c("i", {
      staticClass: "fab fa-whatsapp"
    })]) : _vm._e();
  }), 0), _vm._v(" "), _c("footer", {
    staticClass: "py-5 bg-dark footers",
    staticStyle: {
      "background-color": "#000000 !important"
    }
  }, [_c("div", {
    staticClass: "container px-4 d-flex justify-content-between align-items-center"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "text-white px-3",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_c("p", {
    staticClass: "m-0",
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("i", {
    staticClass: "fab fa-whatsapp"
  }), _vm._v(" +" + _vm._s(_vm.perusahaan[0].wa_perusahaan) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "m-0 ml-2"
  }, [_vm._v("\n                Copyright © KOU " + _vm._s(new Date().getFullYear()) + "\n            ")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    staticStyle: {
      color: "rgb(255, 255, 255)"
    },
    attrs: {
      href: "#product"
    }
  }, [_vm._v("Product")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    staticStyle: {
      color: "rgb(255, 255, 255)"
    },
    attrs: {
      href: "#schedule"
    }
  }, [_vm._v("Schedule")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    staticStyle: {
      color: "rgb(255, 255, 255)"
    },
    attrs: {
      href: "#review"
    }
  }, [_vm._v("Review")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    staticStyle: {
      color: "rgb(255, 255, 255)"
    },
    attrs: {
      href: "#contact"
    }
  }, [_vm._v("Contact")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    staticStyle: {
      color: "rgb(255, 255, 255)"
    },
    attrs: {
      href: "/documents/Mobile Flyer and pricelist.pdf",
      download: ""
    }
  }, [_vm._v("Download Menu SPA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("No")]), _vm._v(" "), _c("th", [_vm._v("Duration")]), _vm._v(" "), _c("th", [_vm._v("Price")]), _vm._v(" "), _c("th", [_vm._v("Whatsapp")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Close  "), _c("i", {
    staticClass: "fas fa-times mt-1"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "px-3"
  }, [_c("small", {
    staticClass: "m-0 text-white",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n                Jalan. Kayu Tulang, Canggu, Kec. Kuta Utara, Kab. Badung, "), _c("br"), _vm._v(" Bali, Indonesia\n            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spinner {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  border-top-color: #000;\n  animation: spin 1s ease-in-out infinite;\n}\n@keyframes spin {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.btn-custom {\n  padding: 0.25rem 0.5rem; /* Atur padding sesuai kebutuhan */\n  font-size: 0.75rem; /* Atur ukuran font sesuai kebutuhan */\n}\n\n/* Floating button WhatsApp */\n.whatsapp-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n}\n.whatsapp-button a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  width: 50px;\n  height: 50px;\n  background-color: #25d366;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.whatsapp-button a i {\n  margin-top: 0; /* Penyesuaian margin atas ikon */\n  margin-bottom: 0; /* Penyesuaian margin atas ikon */\n  margin-left: 0;\n  margin-right: 0;\n}\n.whatsapp-button a:hover {\n  background-color: #25d366;\n  transform: scale(1.1);\n}\n.modern-card {\n  background-color: #f8f9fa; /* Warna latar belakang */\n  border-radius: 6px;\n  padding: 20px;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease-in-out;\n  margin-top: 26px;\n  margin-bottom: -12px;\n}\n.modern-card:hover {\n  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);\n}\n.tombol-sebelumnya,\n.tombol-berikutnya {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 24px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n  z-index: 1000;\n}\n.tombol-sebelumnya {\n  left: 10px;\n}\n.tombol-berikutnya {\n  right: 10px;\n}\n.galeri-container {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  margin-top: -19px;\n}\n.galeri-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n}\n.galeri-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.galeri-navigasi {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n}\n.galeri-navigasi button {\n  margin: 0 10px;\n  padding: 10px 20px;\n  border: 1px solid #fff;\n  color: #fff;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.galeri-navigasi button:hover {\n  background-color: #ccc;\n}\n.galeri-indikator {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n}\n.galeri-indikator .indikator {\n  margin: 0 5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #ccc;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.galeri-indikator .indikator.aktif {\n  background-color: #fff;\n}\n.rounded-button {\n  border-radius: 20px; /* Atur radius sesuai keinginan Anda */\n  border: 2px solid #51250A; /* Warna dan ketebalan garis tepi */\n  padding: 10px 20px; /* Sesuaikan padding sesuai kebutuhan */\n  display: flex; /* Menggunakan flexbox */\n  align-items: center; /* Posisikan konten secara vertikal di tengah */\n  justify-content: center; /* Posisikan konten secara horizontal di tengah */\n  position: relative; /* Diperlukan untuk ikon panah */\n  width: auto;\n  height: 30px;\n  top:5px;\n  left: 0;\n  right: 0;\n  font-size: 12px;\n}\n.button-text {\n  margin-right: 5px; /* Sesuaikan jarak antara tulisan \"More\" dan panah */\n  display: inline-block; /* Agar panah dan teks \"More\" memiliki posisi yang sejajar */\n}\n.arrow-right {\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent; /* Ubah sesuai keinginan */\n  border-bottom: 5px solid transparent; /* Ubah sesuai keinginan */\n  border-left: 8px solid #51250A; /* Warna panah */\n  vertical-align: middle; /* Memastikan panah sejajar dengan teks \"More\" */\n  margin-top: 2px; /* Turunkan posisi panah sedikit */\n}\n#product{\n    margin-top:-227px;\n}\n#schedule{\n    margin-top: -285px;\n}\n#review{\n    margin-top: -252px;\n}\n#contact{\n    margin-top: -277px;\n    margin-bottom: auto;\n}\n#galeri{\n    margin-top: -242px;\n    margin-bottom: auto;\n}\n\n  /* #galeri{\n    margin-top: -235px;\n    margin-bottom: auto;\n  }\n   */\n.whatsapp-icon {\nfont-size: 24px; /* Sesuaikan ukuran ikon sesuai kebutuhan */\nmargin-right: 10px; /* Atur jarak antara ikon dan teks lain jika diperlukan */\nvertical-align: middle; /* Untuk mengatur posisi vertikal ikon */\n}\n.navbar {\ntransition: background-color 0.3s ease;\nbackground-color: transparent !important;\n}\n.navbar.bg-transparent {\nbackground-color: transparent !important;\n}\n.custom-video {\nborder-radius: 20px; /* Contoh: Menambahkan sudut melengkung */\nbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Contoh: Menambahkan bayangan */\nfilter: brightness(80%) opacity(0.8);\n-o-object-fit: cover;\n   object-fit: cover;\nwidth: 100%; /* Menetapkan lebar video menjadi 100% dari container */\nheight: 100%; /* Menetapkan tinggi video menjadi 100% dari container */\nmargin-top:-60px;\n}\n.produk-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; /* Mengubah justify-content menjadi space-around untuk menyebarkan item lebih merata */\n  gap: 43px; /* Menambahkan ruang antara setiap item */\n}\n.produk-card {\n  display: flex; /* Menggunakan flexbox */\n  flex-direction: column; /* Mengatur susunan elemen secara vertikal */\n  border-radius: 15px;\n  background-color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n  max-width: 300px;\n  overflow: hidden;\n}\n.produk-card:hover {\n  transform: translateY(-5px) scale(1.02); /* Menambahkan sedikit efek scaling pada hover */\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Meningkatkan bayangan pada hover */\n}\n.produk-card-img {\n  border-radius: 15px 15px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 200px; /* Menentukan tinggi gambar */\n}\n.produk-card-img img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; /* Memastikan gambar mengisi seluruh area tanpa distorsi */\n}\n.produk-card-body {\n  flex-grow: 1; /* Memanjangkan elemen ini sebanyak mungkin */\n  padding: 20px;\n}\n.produk-card-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.produk-card-text {\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 0;\n}\n.produk-card-footer {\n  padding: 10px;\n  text-align: center;\n}\n.btn-primary {\nbackground-color: #007bff;\ncolor: #fff;\npadding: 10px 20px;\nborder-radius: 5px;\ntext-decoration: none;\n}\n.btn-primary:hover {\nbackground-color: #0056b3;\n}\n.custom-card {\n  border: 1px solid #ddd; /* Menambahkan border */\n  border-radius: 8px; /* Menambahkan sudut border */\n  overflow: hidden; /* Mengatasi overflow */\n  height: 90%;\n  text-align: center; /* Pusatkan teks header */\n}\n.custom-card .card-header {\n  background-color: #ECC07E; /* Warna latar header */\n  color: #51250A; /* Warna teks header */\n  text-align: center; /* Pusatkan teks header */\n}\n.custom-card .card-body {\n  padding: 15px; /* Menambahkan padding pada body */\n  font-weight: 200;\n}\n.stylish-card {\n      background-color: #51250A; /* Warna latar belakang kartu */\n      border-radius: 12px; /* Sudut bulatan kartu */\n      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan kartu */\n      transition: transform 0.3s ease; /* Transisi ketika kartu dihover */\n      margin-bottom: 36px; /* Jarak antar kartu */\n      overflow: hidden; /* Agar bayangan tidak muncul di luar batas kartu */\n      color: #ecf0f1; /* Warna teks dalam kartu */\n}\n.stylish-card:hover {\n      transform: translateY(-5px); /* Geser kartu ke atas saat dihover */\n}\n.stylish-card .card-content {\n      padding: 20px; /* Padding konten kartu */\n      text-align: center; /* Pusatkan teks dalam kartu */\n}\n.stylish-card i {\n      font-size: 36px; /* Ukuran ikon dalam kartu */\n      margin-bottom: 15px; /* Jarak antara ikon dan teks */\n}\n.stylish-card p {\n      font-size: 18px; /* Ukuran teks dalam kartu */\n      margin: 0; /* Hapus margin bawaan */\n}\n/* Styling for Slider Controls */\n.slider-controls {\nposition: relative;\nmargin-top: 20px;\ntext-align: center;\n}\n.prev-btn,\n.next-btn {\nbackground-color: #51250A;\ncolor: #fff;\npadding: 10px 20px;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\ntransition: background-color 0.3s ease;\n}\n.prev-btn:hover,\n.next-btn:hover {\nbackground-color: #51250A;\n}\n.prev-btn {\nmargin-right: 10px;\n}\n\n/* Slider styles */\n.slider-container {\nposition: relative;\noverflow: hidden;\n}\n.slide {\ndisplay: none;\n}\n.slide.active {\ndisplay: block;\n}\n\n/* Bullets */\n.bullets {\nposition: absolute;\nbottom: 10px;\nleft: 50%;\ntransform: translateX(-50%);\ndisplay: flex;\njustify-content: center;\n}\n.bullet {\nwidth: 10px;\nheight: 10px;\nbackground-color: rgba(255, 255, 255, 0.5);\nborder-radius: 50%;\nmargin: 0 5px;\ncursor: pointer;\n}\n.bullet.active {\nbackground-color: white;\n}\n.rating {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.rating input {\n        display: none;\n}\n.rating label {\n        font-size: 0; /* Menghilangkan teks */\n        margin: 0;\n        cursor: pointer;\n        position: relative;\n}\n.rating label:before {\n        content: \"\\2605\";\n        font-size: 16px; /* Ukuran gambar rating diubah menjadi 16px */\n        color: #aaa;\n}\n.rating input:checked ~ label:before {\n        color: orange;\n}\n.form-group {\n        margin-bottom: 20px;\n}\n.star {\n        font-size: 16px; /* Ukuran bintang diubah menjadi 16px */\n        color: #aaa; /* Warna default bintang */\n}\n.star.orange {\n        color: orange; /* Warna bintang jika rating diwarnai */\n}\n.footers{\n    margin-top: -140px;\n}\n\n\n/* Responsive style jika lebar layar kecil */\n@media (max-width: 576px) {\n.custom-card {\n      width: 100%; /* Lebar kartu 100% pada layar kecil */\n}\n.navbarResponsive {\n    background-color: #000000 !important; /* Warna latar belakang untuk mobile dan tablet dalam orientasi potret */\n}\n.logo-img {\n    max-width: 64px; /* Atur lebar gambar menjadi 60px */\n    height: 60px; /* Sesuaikan ketinggian secara otomatis */\n}\n.ms-auto {\n    display: none; /* Sembunyikan ms-auto */\n}\n.custom-video{\n    margin-top:-58px;\n}\n#product{\n    margin-top:-225px;\n}\n#schedule{\n    margin-top: -294px;\n}\n#review{\n    margin-top: -257px;\n}\n#contact{\n    margin-top: -283px;\n    margin-bottom: auto;\n}\n#galeri {\n    margin-bottom: 0;\n    background-color: #000;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.galeri-container {\n    max-width: 100%;\n    height: auto;\n    margin-top: 94px; /* Menggeser galeri-container ke atas */\n    margin-bottom: 95px;\n}\n.galeri-wrapper img {\n    height: auto;\n}\n.galeri-navigasi,\n  .galeri-indikator {\n    margin-top: 10px;\n}\n.footers{\n    margin-top: -165px;\n}\n.navbar-nav {\n        float: right;\n}\n}\n\n\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_685f5224_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=685f5224&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_685f5224_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_685f5224_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/frontend/home/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/frontend/home/Index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=685f5224 */ "./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_685f5224_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=685f5224&lang=css */ "./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/home/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_685f5224__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=685f5224 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=template&id=685f5224");


/***/ }),

/***/ "./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_685f5224_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=685f5224&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/home/Index.vue?vue&type=style&index=0&id=685f5224&lang=css");


/***/ })

}]);