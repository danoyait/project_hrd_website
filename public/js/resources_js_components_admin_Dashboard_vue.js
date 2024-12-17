"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
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
      isModalVisible: false,
      expiredKaryawan: [],
      title: "Dashboard",
      totalKaryawan: null,
      bulan: "",
      tahun: "",
      lastUpdated: "",
      charts: [{
        id: "chartStatusKaryawan",
        title: "Distribusi Karyawan",
        data: {}
      }, {
        id: "chartJabatan",
        title: "Distribusi Jabatan",
        data: {}
      }, {
        id: "chartDepartemen",
        title: "Distribusi Departemen",
        data: {}
      }, {
        id: "chartPendidikan",
        title: "Distribusi Pendidikan",
        data: {}
      }],
      isLoading: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getData();
          case 2:
            _context.next = 4;
            return _this.fetchChartData();
          case 4:
            _this.isLoading = false;
            _this.renderCharts();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.axios.get("/api/admin/karyawan/totalAkhirKontrak");
            case 3:
              response = _context2.sent;
              if (response.data.status === "success") {
                _this2.totalKaryawan = response.data.total;
                _this2.bulan = response.data.bulan;
                _this2.tahun = response.data.tahun;
                _this2.lastUpdated = new Date().toLocaleString();
              } else {
                _this2.totalKaryawan = 0;
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Terjadi kesalahan saat mengambil data total karyawan:", _context2.t0);
              _this2.totalKaryawan = 0;
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    fetchChartData: function fetchChartData() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var responses;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Promise.all([_this3.axios.get("/api/admin/karyawan/status"), _this3.axios.get("/api/admin/karyawan/jabatan"), _this3.axios.get("/api/admin/karyawan/departemen"), _this3.axios.get("/api/admin/karyawan/pendidikan")]);
            case 3:
              responses = _context3.sent;
              _this3.charts[0].data = responses[0].data;
              _this3.charts[1].data = responses[1].data.jabatan;
              _this3.charts[2].data = responses[2].data.departemen;
              _this3.charts[3].data = responses[3].data.pendidikan;
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.error("Terjadi kesalahan saat mengambil data grafik:", _context3.t0);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    renderCharts: function renderCharts() {
      this.charts.forEach(function (chartData) {
        var ctx = document.getElementById(chartData.id).getContext("2d");
        var chartType = "";
        var chartOptions = {};

        // Set dynamic font size based on device width
        var dynamicFontSize = window.innerWidth < 768 ? 10 : 14; // Smaller font for mobile devices

        if (chartData.title === "Distribusi Departemen") {
          chartType = "pie";
          var departmentColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF5733", "#C70039", "#900C3F", "#581845"];
          chartOptions = {
            type: chartType,
            data: {
              labels: Object.keys(chartData.data),
              datasets: [{
                label: "Jumlah Karyawan",
                data: Object.values(chartData.data),
                backgroundColor: Object.keys(chartData.data).map(function (_, index) {
                  return departmentColors[index % departmentColors.length];
                }),
                borderColor: "#fff",
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              // Allow the chart to adjust to the container
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    font: {
                      size: dynamicFontSize,
                      weight: 'bold'
                    },
                    boxWidth: 15
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function label(tooltipItem) {
                      return "".concat(tooltipItem.label, ": ").concat(tooltipItem.raw);
                    }
                  }
                }
              }
            }
          };
        } else if (chartData.title === "Distribusi Pendidikan") {
          chartType = "doughnut";
          var pendidikanColors = ["#FFB6C1", "#FF6347", "#FFD700", "#98FB98", "#87CEEB", "#DDA0DD", "#FF1493", "#32CD32"];
          chartOptions = {
            type: chartType,
            data: {
              labels: Object.keys(chartData.data),
              datasets: [{
                label: "Jumlah Karyawan",
                data: Object.values(chartData.data),
                backgroundColor: Object.keys(chartData.data).map(function (_, index) {
                  return pendidikanColors[index % pendidikanColors.length];
                }),
                borderColor: "#fff",
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    font: {
                      size: dynamicFontSize
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function label(tooltipItem) {
                      return "".concat(tooltipItem.label, ": ").concat(tooltipItem.raw);
                    }
                  }
                }
              }
            }
          };
        } else if (chartData.title === "Distribusi Karyawan") {
          chartType = "bar";
          chartOptions = {
            type: chartType,
            data: {
              labels: Object.keys(chartData.data),
              datasets: [{
                label: "Jumlah Karyawan",
                data: Object.values(chartData.data),
                backgroundColor: "#4BC0C0",
                borderColor: "#FFFFFF",
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: dynamicFontSize
                    },
                    autoSkip: true,
                    maxRotation: 45,
                    minRotation: 0
                  }
                },
                y: {
                  beginAtZero: true
                }
              }
            }
          };
        } else if (chartData.title === "Distribusi Jabatan") {
          chartType = "line";
          chartOptions = {
            type: chartType,
            data: {
              labels: Object.keys(chartData.data),
              datasets: [{
                label: "Jumlah Karyawan",
                data: Object.values(chartData.data),
                borderColor: "#FFCE56",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    font: {
                      size: dynamicFontSize
                    }
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function label(tooltipItem) {
                      return "".concat(tooltipItem.label, ": ").concat(tooltipItem.raw);
                    }
                  }
                }
              },
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: dynamicFontSize
                    },
                    autoSkip: false,
                    // Do not auto skip labels
                    maxRotation: 90,
                    // Rotate labels to make room
                    minRotation: 90,
                    maxTicksLimit: 30,
                    // Increase max ticks limit to show all labels
                    padding: 10 // Add padding between labels
                  }
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    font: {
                      size: dynamicFontSize
                    }
                  }
                }
              }
            }
          };
        }

        // Render the chart
        new Chart(ctx, chartOptions);
      });
    },
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    formatLastUpdated: function formatLastUpdated(date) {
      return this.convertToIndonesianDate(date);
    },
    convertToIndonesianDate: function convertToIndonesianDate(date) {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      return new Date(date).toLocaleDateString("id-ID", options);
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year);
    },
    handleButtonClick: function handleButtonClick() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response, karyawanData, currentDate, currentMonth, currentYear, modal;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.get("/api/admin/karyawan");
            case 3:
              response = _context4.sent;
              karyawanData = Array.isArray(response.data.data) ? response.data.data : [];
              if (!(karyawanData.length === 0)) {
                _context4.next = 8;
                break;
              }
              alert("Tidak ada data karyawan.");
              return _context4.abrupt("return");
            case 8:
              currentDate = new Date();
              currentMonth = currentDate.getMonth();
              currentYear = currentDate.getFullYear();
              _this4.expiredKaryawan = karyawanData.filter(function (karyawan) {
                var endDate = new Date(karyawan.tanggal_akhir_kontrak);
                return endDate.getMonth() === currentMonth && endDate.getFullYear() === currentYear;
              });
              modal = new bootstrap.Modal(document.getElementById('modals'), {
                keyboard: false
              });
              modal.show();
              _context4.next = 20;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              console.error("Error fetching data:", _context4.t0);
              alert("Gagal mengambil data karyawan.");
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 16]]);
      }))();
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "content-header"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row mb-2"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("h1", [_vm._v(_vm._s(_vm.capitalizeFirstLetter(_vm.title)))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ol", {
    staticClass: "breadcrumb float-sm-right"
  }, [_vm._m(0), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "/admin/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.capitalizeFirstLetter(_vm.title)))])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm.totalKaryawan !== null ? _c("div", {
    staticClass: "col-12 mb-4"
  }, [_c("div", {
    staticClass: "alert alert-info",
    attrs: {
      role: "alert"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.totalKaryawan) + " Karyawan")]), _vm._v(" dengan Kontrak Akan Berakhir\n                        "), _c("br"), _vm._v(" "), _c("small", [_vm._v("Bulan: " + _vm._s(_vm.bulan) + " Tahun: " + _vm._s(_vm.tahun))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("small", [_c("i", [_vm._v(_vm._s(_vm.formatLastUpdated(_vm.lastUpdated)))])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-primary mt-2",
    on: {
      click: _vm.handleButtonClick
    }
  }, [_vm._v("\n                            Lihat\n                        ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-custom",
    attrs: {
      id: "modals",
      tabindex: "-1",
      "aria-labelledby": "modalsLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "table-wrapper"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.expiredKaryawan, function (karyawan) {
    return _c("tr", {
      key: karyawan.id_karyawan
    }, [_c("td", [_vm._v(_vm._s(karyawan.nama_lengkap))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(karyawan.jabatan))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(karyawan.departemen))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(karyawan.tanggal_akhir_kontrak)))])]);
  }), 0)])])]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _vm._l(_vm.charts, function (chartData, index) {
    return _c("div", {
      key: index,
      staticClass: "col-md-6 mb-4"
    }, [_c("div", {
      staticClass: "card shadow-lg border-0 rounded"
    }, [_c("div", {
      staticClass: "card-header bg-secondary text-white"
    }, [_c("h5", {
      staticClass: "card-title mb-0"
    }, [_vm._v(_vm._s(chartData.title))])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("canvas", {
      attrs: {
        id: chartData.id,
        width: "400",
        height: "200"
      }
    })])])]);
  })], 2)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    staticClass: "text-dark",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Home")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    attrs: {
      id: "modalsLabel"
    }
  }, [_vm._v("Karyawan Akan Berakhir")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Nama Lengkap")]), _vm._v(" "), _c("th", [_vm._v("Jabatan")]), _vm._v(" "), _c("th", [_vm._v("Departemen")]), _vm._v(" "), _c("th", [_vm._v("Akhir Kontrak")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm close-btn",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n                                        Tutup\n                                    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Add smooth scroll */\nhtml {\n    scroll-behavior: smooth; /* Modern scroll behavior */\n}\n\n/* Styling untuk modal */\n.modal-title {\n        flex-grow: 1;\n        text-align: center;\n        font-size: 18px;\n        font-weight: bold;\n}\n.modal-data {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n    gap: 30px;\n    transition: all 0.3s ease-in-out;\n}\n.modal-data {\n    grid-template-columns: 1fr;\n}\n.modal-custom {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 1050;\n    opacity: 0;\n    transform: scale(1.1);\n    transition: opacity 0.4s ease, transform 0.4s ease;\n}\n.modal-custom.show {\n    display: flex;\n    opacity: 1;\n    transform: scale(1);\n    animation: modalOpen 0.4s ease-out;\n}\n.modal-custom.hide {\n    opacity: 0;\n    transform: scale(0.9);\n    animation: modalClose 0.4s ease-in;\n}\n\n/* Modal dialog */\n.modal-dialog {\n    position: relative;\n\n    border-radius: 15px;\n    width: 100%;\n    max-width: 500px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    margin: 0;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    animation: fadeIn 0.4s ease-out, scaleUp 0.4s ease-out;\n}\n\n/* Modal header and body */\n.modal-header {\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #ddd;\n    border-radius: 15px 15px 0 0;\n    animation: slideInTop 0.5s ease-out;\n}\n.modal-body {\n    padding: 15px;\n    max-height: 70vh;\n    overflow-y: auto;\n    border-radius: 0 0 15px 15px;\n    animation: fadeIn 0.5s ease-out;\n}\n\n/* Button and hover effect */\n/* .modal-footer .btn {\n    font-size: 16px;\n    font-weight: bold;\n    padding: 12px;\n    transition: transform 0.3s ease, background-color 0.3s ease;\n}\n\n.btn-danger {\n    background-color: #e74c3c;\n    border-color: #c0392b;\n    color: white;\n    border-radius: 8px;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n} */\n.btn {\n        border-radius: 20px;\n        padding: 8px 15px;\n        transition: background 0.3s, transform 0.2s;\n}\n\n/* Table with scroll */\n.table-wrapper {\n    overflow-x: auto;\n}\n.table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 14px;\n    color: #333;\n}\n.table th, .table td {\n    padding: 12px;\n    text-align: left;\n    border: 1px solid #ddd;\n}\n.table th {\n    background-color: #f4f4f4;\n    font-weight: bold;\n}\n.table-hover tbody tr:hover {\n    background-color: #f1f1f1;\n    cursor: pointer;\n    transform: scale(1.02);\n    transition: transform 0.3s ease;\n}\n\n/* Global Styles */\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: linear-gradient(135deg, #f3f4f6, #e8ecf1);\n    color: #333;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    animation: fadeIn 0.8s ease-out;\n}\n\n/* Breadcrumb */\n.breadcrumb {\n    background: none;\n    padding: 0;\n    margin: 0;\n    font-size: 0.95rem;\n}\n.breadcrumb-item a {\n    color: #007bff;\n    font-weight: 500;\n    text-decoration: none;\n    transition: color 0.3s ease, transform 0.3s ease;\n}\n.breadcrumb-item a:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    transform: translateY(-2px);\n}\n\n/* Page Header */\n.content-header h1 {\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: #333;\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    animation: fadeIn 0.5s ease-out, slideInBottom 0.6s ease-out;\n}\n.content-header h1::before {\n    content: '📊';\n    font-size: 2.5rem;\n}\n\n/* Cards */\n.card {\n    background: linear-gradient(145deg, #ffffff, #f7f9fc);\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\n    overflow: hidden;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    animation: fadeIn 0.5s ease-out, bounceIn 0.6s ease-out;\n}\n.card:hover {\n    transform: translateY(-10px) scale(1.03);\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n\n/* Card Header */\n.card-header {\n    background: linear-gradient(90deg, #007bff, #0056b3);\n    color: #fff;\n    font-size: 1.5rem;\n    font-weight: 600;\n    padding: 20px;\n    text-align: center;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.05);\n    text-transform: uppercase;\n    animation: fadeIn 0.5s ease-out, slideInLeft 0.7s ease-out;\n}\n\n/* Card Body */\n.card-body {\n    padding: 20px;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Alert */\n.alert {\n    background: linear-gradient(145deg, #eef6fc, #dbeefb);\n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    font-size: 1.1rem;\n    font-weight: 500;\n    color: #003d80;\n    animation: fadeIn 0.5s ease-out, bounceIn 0.6s ease-out;\n}\n.alert strong {\n    font-weight: 700;\n    color: #001d40;\n}\n.alert i {\n    font-size: 0.9rem;\n    color: #555;\n}\n.alert .btn {\n    background-color: #003d80;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 15px;\n    font-size: 0.9rem;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.alert .btn:hover {\n    background-color: #001d40;\n    transform: translateY(-2px);\n}\n\n/* Loading Spinner */\n.loading-spinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n.loading-spinner::after {\n    content: '';\n    width: 50px;\n    height: 50px;\n    border: 5px solid #007bff;\n    border-top-color: transparent;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n/* Chart Wrapper */\n.chart-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: space-evenly;\n}\n\n/* Animations */\n@keyframes fadeIn {\n0% { opacity: 0;\n}\n100% { opacity: 1;\n}\n}\n@keyframes scaleUp {\n0% { transform: scale(0.5);\n}\n100% { transform: scale(1);\n}\n}\n@keyframes slideInTop {\n0% { transform: translateY(-30px); opacity: 0;\n}\n100% { transform: translateY(0); opacity: 1;\n}\n}\n@keyframes slideInLeft {\n0% { transform: translateX(-100%); opacity: 0;\n}\n100% { transform: translateX(0); opacity: 1;\n}\n}\n@keyframes slideInBottom {\n0% { transform: translateY(30px); opacity: 0;\n}\n100% { transform: translateY(0); opacity: 1;\n}\n}\n@keyframes bounceIn {\n0% { transform: scale(0.5); opacity: 0;\n}\n50% { transform: scale(1.1); opacity: 1;\n}\n100% { transform: scale(1); opacity: 1;\n}\n}\n@keyframes modalOpen {\n0% { opacity: 0; transform: scale(0.9);\n}\n100% { opacity: 1; transform: scale(1);\n}\n}\n@keyframes modalClose {\n0% { opacity: 1; transform: scale(1);\n}\n100% { opacity: 0; transform: scale(0.9);\n}\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n.table {\n        font-size: 12px;\n}\n.modal-dialog {\n        width: 100%;\n        height: auto;\n        border-radius: 8px;\n        transform: none;\n        top: auto;\n        bottom: 0;\n        left: 0;\n}\n.modal-body {\n        max-height: 75vh;\n}\n.card {\n        height: auto;\n        padding: 20px;\n}\n.btn {\n            width: 100%;\n            /* Full width buttons on small screens */\n            margin: 5px 0;\n            /* Space between buttons */\n}\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=12658639 */ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_12658639_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css */ "./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=12658639 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639");


/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_12658639_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=style&index=0&id=12658639&lang=css");


/***/ })

}]);