"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_v_Employe_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
      isDropdownVisible: false,
      employe: [],
      page: 1,
      perPage: 10,
      pages: [],
      search: "",
      searchResult: [],
      fileName: "",
      // Add reactive variable for file name
      isMobile: this.detectMobile(),
      statusOptions: [],
      jabatanOptions: [],
      pendidikanOptions: [],
      jeniskelaminOptions: [],
      departemenOptions: [],
      aktifpensiunOptions: [],
      agamaOptions: [],
      selectedStatus: "",
      selectedJabatan: "",
      selectedPendidikan: "",
      selectedJenisKelamin: "",
      selectedDepartemen: "",
      selectedAktifPensiun: "",
      selectedAgama: "",
      startDate: '',
      // Tanggal Awal
      endDate: '',
      // Tanggal Akhir
      isFileUploaded: false,
      // New variable to track if a file has been uploaded
      selectedNamaLengkap: "",
      selectedIDKaryawan: "",
      berkasData: "",
      isModalBerkas: false,
      isModalTampilData: false
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
            _context.next = 5;
            return _this.getStatusOptions();
          case 5:
            _context.next = 7;
            return _this.getJabatanOptions();
          case 7:
            _context.next = 9;
            return _this.getPendidikanOptions();
          case 9:
            _context.next = 11;
            return _this.getJenisKelaminOptions();
          case 11:
            _context.next = 13;
            return _this.getDepartemenOptions();
          case 13:
            _context.next = 15;
            return _this.getAktifPensiunOptions();
          case 15:
            _context.next = 17;
            return _this.getAgamaOptions();
          case 17:
            _this.updateIsMobile();
            window.addEventListener("resize", _this.updateIsMobile);
            window.addEventListener("orientationchange", _this.updateIsMobile);
            _context.next = 25;
            break;
          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 22]]);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    // Hapus event listener saat komponen di-destroy
    window.removeEventListener("resize", this.updateIsMobile);
    window.removeEventListener("orientationchange", this.updateIsMobile);
  },
  methods: {
    hapusBerkas: function hapusBerkas(id, type, path, index) {
      var _this2 = this;
      var confirmed = confirm("Apakah Anda yakin ingin menghapus file ini?");
      if (!confirmed) return;
      var uri = "/api/admin/karyawan/".concat(id, "/berkas/hapus");
      this.axios["delete"](uri, {
        data: {
          type: type
        }
      }) // Kirim tipe file (ktp, ijazah, surat_perjanjian)
      .then(function (response) {
        if (response.data.success) {
          // Hapus file dari daftar berkasData
          _this2.berkasData.splice(index, 1);

          // Jika data karyawan dihapus seluruhnya, kosongkan data
          if (response.data.message.includes("data karyawan juga dihapus")) {
            _this2.berkasData = [];
            _this2.isModalBerkas = false;
          }
          alert(response.data.message);
        } else {
          alert("Gagal menghapus file: " + response.data.message);
        }
      })["catch"](function (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menghapus file.");
      });
    },
    goToCreatePage: function goToCreatePage() {
      var modal = document.getElementById('modals');
      if (modal) {
        $(modal).modal('hide'); // Menutup modal

        // Menghapus backdrop jika masih ada
        $('.modal-backdrop').remove(); // Hapus backdrop secara manual
        $('body').removeClass('modal-open'); // Menghapus kelas 'modal-open' yang menahan scroll
      }

      //   this.$router.push({
      //     name: "admin.karyawan.berkas.create",
      //     params: { selectedIDKaryawan: this.selectedIDKaryawan }, // Kirim data sebagai query
      //   });
      sessionStorage.setItem("selectedIDKaryawan", this.selectedIDKaryawan);
      window.location.href = "/admin/karyawan/berkas/tambah";
    },
    toggleDropdown: function toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    resetFilters: function resetFilters() {
      window.location.reload();
    },
    tampilData: function tampilData(id_karyawan, nama_lengkap) {
      this.selectedIDKaryawan = id_karyawan;
      this.selectedNamaLengkap = nama_lengkap;
      this.isModalBerkas = false;
      this.isModalTampilData = true;
      // Buka modal
      var modal = new bootstrap.Modal(document.getElementById('modals'), {
        keyboard: false
      });
      modal.show();
    },
    lihatBerkas: function lihatBerkas(selectedIDKaryawan, selectedNamaLengkap) {
      var _this3 = this;
      this.isModalBerkas = true;
      this.isModalTampilData = false;
      var uri = "/api/admin/karyawan/".concat(selectedIDKaryawan, "/lihatBerkas");
      this.axios.get(uri).then(function (response) {
        var groupedData = response.data;
        _this3.berkasData = []; // Kosongkan data sebelumnya

        // Tanggal sekarang untuk penamaan file
        var currentDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-"); // Format: DD-MM-YYYY

        // Ubah data menjadi satu-satu dengan format nama file
        groupedData.forEach(function (item, index) {
          if (item.ktp_path) {
            _this3.berkasData.push({
              id: item.id,
              type: "ktp",
              path: item.ktp_path,
              displayName: "".concat(currentDate, "-ktp-").concat(index + 1, "-").concat(selectedNamaLengkap)
            });
          }
          if (item.ijazah_path) {
            _this3.berkasData.push({
              id: item.id,
              type: "ijazah",
              path: item.ijazah_path,
              displayName: "".concat(currentDate, "-ijazah-").concat(index + 1, "-").concat(selectedNamaLengkap)
            });
          }
          if (item.surat_perjanjian_path) {
            _this3.berkasData.push({
              id: item.id,
              type: "surat_perjanjian",
              path: item.surat_perjanjian_path,
              displayName: "".concat(currentDate, "-surat_perjanjian-").concat(index + 1, "-").concat(selectedNamaLengkap)
            });
          }
        });
        console.log(_this3.berkasData); // Debugging untuk memverifikasi hasil transformasi
      });
    },
    handleBack: function handleBack() {
      this.isModalBerkas = false;
      this.isModalTampilData = true;
    },
    goToEditPage: function goToEditPage(id_karyawan) {
      // Mendapatkan elemen modal dan menutupnya dengan jQuery
      var modal = document.getElementById('modals');
      if (modal) {
        $(modal).modal('hide'); // Menutup modal

        // Menghapus backdrop jika masih ada
        $('.modal-backdrop').remove(); // Hapus backdrop secara manual
        $('body').removeClass('modal-open'); // Menghapus kelas 'modal-open' yang menahan scroll
      }

      // Arahkan ke halaman edit setelah modal ditutup
      this.$router.push({
        name: 'admin.karyawan.ubah',
        params: {
          id_karyawan: id_karyawan
        }
      });
    },
    getStatusOptions: function getStatusOptions() {
      var _this4 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this4.statusOptions = response.data.statusOptions;
      });
    },
    getJabatanOptions: function getJabatanOptions() {
      var _this5 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this5.jabatanOptions = response.data.jabatanOptions;
      });
    },
    getPendidikanOptions: function getPendidikanOptions() {
      var _this6 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this6.pendidikanOptions = response.data.pendidikanOptions;
      });
    },
    getJenisKelaminOptions: function getJenisKelaminOptions() {
      var _this7 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this7.jeniskelaminOptions = response.data.jeniskelaminOptions;
      });
    },
    getDepartemenOptions: function getDepartemenOptions() {
      var _this8 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this8.departemenOptions = response.data.departemenOptions;
      });
    },
    getAktifPensiunOptions: function getAktifPensiunOptions() {
      var _this9 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this9.aktifpensiunOptions = response.data.aktifpensiunOptions;
      });
    },
    getAgamaOptions: function getAgamaOptions() {
      var _this10 = this;
      axios.get('/api/admin/karyawan').then(function (response) {
        _this10.agamaOptions = response.data.agamaOptions;
      });
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

      // Create a new element to hold the truncated text
      tempDiv.innerHTML = text;
      return tempDiv.innerHTML;
    },
    getData: function getData() {
      var _this11 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var employeResponse;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this11.axios.get("/api/admin/karyawan");
            case 3:
              employeResponse = _context2.sent;
              _this11.employe = employeResponse.data.data;
              _this11.setPages(); // Panggil setPages di sini juga
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    formatCurrency: function formatCurrency(amount) {
      var formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      formatted = 'Rp ' + formatted;
      return formatted;
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year);
    },
    handleFileUpload: function handleFileUpload(event) {
      var file = event.target.files[0];
      if (file) {
        this.fileName = file.name; // Set the file name
        this.isFileUploaded = true; // Disable the upload button
      }
    },
    deletePost: function deletePost(id, index) {
      var _this12 = this;
      this.$swal.fire({
        title: "Are You Sure?",
        text: "Really?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
        cancelButtonText: "BATAL"
      }).then(function (result) {
        if (result.value) {
          var uri = "/api/admin/karyawan/hapus/".concat(id);
          _this12.axios["delete"](uri).then(function (response) {
            _this12.employe.splice(index, 1);
            if (response.status == 200) {
              _this12.$swal.fire({
                title: "Sukses!",
                text: "Data berhasi dihapus!",
                icon: "success",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1000
              });
              setTimeout(function () {
                window.location.href = "/admin/karyawan";
              }, 2000);
            } else {
              _this12.$swal.fire({
                title: "Gagal!",
                text: "Gagal!",
                icon: "error",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1000
              });
            }
          })["catch"](function (e) {
            _this12.$swal.fire({
              title: "Gagal!",
              text: "Gagal!",
              icon: "error",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1000
            });
          });
        }
      });
    },
    detectMobile: function detectMobile() {
      // Memeriksa apakah perangkat adalah mobile (Android atau iPhone)
      return /Android|iPhone/i.test(navigator.userAgent);
    },
    updateIsMobile: function updateIsMobile() {
      this.isMobile = this.detectMobile();
    },
    doSearch: function doSearch() {
      var _this13 = this;
      var go = this.employe.filter(function (item) {
        return _this13.search.toLowerCase().split(" ").every(function (v) {
          return item.nama_lengkap.toLowerCase().includes(v);
        });
      });
      this.searchResult = go;
      this.page = 1; // Reset ke halaman pertama setelah pencarian
      this.setPages();
    },
    displayData: function displayData() {
      var paginate;
      if (this.search == "") {
        paginate = this.paginate(this.employe);
      } else {
        paginate = this.paginate(this.searchResult);
      }
      return paginate;
    },
    setPages: function setPages() {
      var numberOfPages;
      if (this.search == "") {
        numberOfPages = Math.ceil(this.employe.length / this.perPage);
      } else {
        numberOfPages = Math.ceil(this.searchResult.length / this.perPage);
      }
      this.pages = []; // Reset pages
      for (var index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate: function paginate(data) {
      var from = (this.page - 1) * this.perPage;
      var to = from + this.perPage;
      return data.slice(from, to);
    },
    saveExcelUser: function saveExcelUser() {
      var _this14 = this;
      var formData = new FormData();
      var fileInput = this.$refs.fileInput;

      // Ensure there is a file uploaded
      if (fileInput.files.length === 0) {
        alert('Silakan pilih file untuk diunggah.');
        return;
      }

      // Append the file to the formData
      formData.append('select_users_file', fileInput.files[0]);

      // Perform a POST request to the server
      this.axios.post('/api/admin/karyawan/unggah_excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // Handle success
        if (response.status === 200) {
          _this14.$swal.fire({
            title: "Berhasil!",
            text: "Data berhasil diunggah!",
            icon: "success",
            showConfirmButton: true
          });
          // Optionally refresh the data or redirect
          setTimeout(function () {
            window.location.href = "/admin/karyawan";
          }, 2000);
        }
      })["catch"](function (error) {
        // Handle error
        console.error(error);
        _this14.$swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat mengunggah data!",
          icon: "error",
          showConfirmButton: true
        });
      });
    },
    downloadExcel: function downloadExcel() {
      var _this15 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, url, link;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this15.axios.get('/api/admin/karyawan/unduh_excel', {
                responseType: 'blob' // Important for downloading files
              });
            case 3:
              response = _context3.sent;
              // Create a blob URL for the downloaded file
              url = window.URL.createObjectURL(new Blob([response.data])); // Create a link element and click it to trigger the download
              link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'employees.xlsx'); // Change the file name as needed
              document.body.appendChild(link);
              link.click();

              // Clean up and remove the link
              link.parentNode.removeChild(link);
              _context3.next = 17;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console.error('Failed to download Excel file:', _context3.t0);
              _this15.$swal.fire({
                title: 'Error!',
                text: 'Failed to download the file.',
                icon: 'error'
              });
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    }
  },
  computed: {
    truncatedNamaLengkap: function truncatedNamaLengkap() {
      return this.truncateHtml(this.selectedNamaLengkap, 15);
    },
    displayedPages: function displayedPages() {
      var pages = [];
      var totalPages = this.totalPages;
      var currentPage = this.page;
      if (totalPages <= 5) {
        // Jika total halaman kurang dari atau sama dengan 5, tampilkan semua halaman
        for (var i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Jika lebih dari 5 halaman, tampilkan 3 halaman pertama, halaman terakhir, dan "..."
        if (currentPage < 4) {
          pages.push(1, 2, 3, '...', totalPages);
        } else if (currentPage > totalPages - 3) {
          pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(1, '...', currentPage, '...', totalPages);
        }
      }
      return pages;
    },
    filteredResults: function filteredResults() {
      var _this16 = this;
      var start = (this.page - 1) * this.perPage;
      var end = start + this.perPage;
      var filteredData = this.employe.filter(function (item) {
        var matchesNamaLengkap = _this16.search ? item.nama_lengkap.toLowerCase().includes(_this16.search.toLowerCase()) : true;
        var matchesStatus = _this16.selectedStatus ? item.status === _this16.selectedStatus : true;
        var matchesJabatan = _this16.selectedJabatan ? item.jabatan === _this16.selectedJabatan : true;
        var matchesPendidikan = _this16.selectedPendidikan ? item.pendidikan === _this16.selectedPendidikan : true;
        var matchesJenisKelamin = _this16.selectedJenisKelamin ? item.jenis_kelamin === _this16.selectedJenisKelamin : true;
        var matchesDepartemen = _this16.selectedDepartemen ? item.departemen === _this16.selectedDepartemen : true;
        var matchesAktifPensiun = _this16.selectedAktifPensiun ? item.aktif_pensiun === _this16.selectedAktifPensiun : true;
        var matchesAgama = _this16.selectedAgama ? item.agama === _this16.selectedAgama : true;

        // Filter based on End Date (tanggal_akhir_kontrak) only
        var matchesTanggal = function () {
          if (_this16.startDate && _this16.endDate) {
            return item.tanggal_akhir_kontrak >= _this16.startDate && item.tanggal_akhir_kontrak <= _this16.endDate;
          } else if (_this16.startDate) {
            return item.tanggal_akhir_kontrak >= _this16.startDate;
          } else if (_this16.endDate) {
            return item.tanggal_akhir_kontrak <= _this16.endDate;
          }
          return true;
        }();
        return matchesNamaLengkap && matchesStatus && matchesJabatan && matchesPendidikan && matchesJenisKelamin && matchesDepartemen && matchesAktifPensiun && matchesAgama && matchesTanggal;
      });
      return filteredData.slice(start, end);
    },
    filteredResultsCount: function filteredResultsCount() {
      var _this17 = this;
      return this.employe.filter(function (item) {
        var matchesNamaLengkap = _this17.search ? item.nama_lengkap.toLowerCase().includes(_this17.search.toLowerCase()) : true;
        var matchesStatus = _this17.selectedStatus ? item.status === _this17.selectedStatus : true;
        var matchesJabatan = _this17.selectedJabatan ? item.jabatan === _this17.selectedJabatan : true;
        var matchesPendidikan = _this17.selectedPendidikan ? item.pendidikan === _this17.selectedPendidikan : true;
        var matchesJenisKelamin = _this17.selectedJenisKelamin ? item.jenis_kelamin === _this17.selectedJenisKelamin : true;
        var matchesDepartemen = _this17.selectedDepartemen ? item.departemen === _this17.selectedDepartemen : true;
        var matchesAktifPensiun = _this17.selectedAktifPensiun ? item.aktif_pensiun === _this17.selectedAktifPensiun : true;
        var matchesAgama = _this17.selectedAgama ? item.agama === _this17.selectedAgama : true;
        var matchesTanggal = function () {
          if (_this17.startDate && _this17.endDate) {
            return item.tanggal_akhir_kontrak >= _this17.startDate && item.tanggal_akhir_kontrak <= _this17.endDate;
          } else if (_this17.startDate) {
            return item.tanggal_akhir_kontrak >= _this17.startDate;
          } else if (_this17.endDate) {
            return item.tanggal_akhir_kontrak <= _this17.endDate;
          }
          return true;
        }();
        return matchesNamaLengkap && matchesStatus && matchesJabatan && matchesPendidikan && matchesJenisKelamin && matchesDepartemen && matchesAktifPensiun && matchesAgama && matchesTanggal;
      }).length;
    },
    totalPages: function totalPages() {
      var _this18 = this;
      var filteredDataCount = this.employe.filter(function (item) {
        var matchesNamaLengkap = _this18.search ? item.nama_lengkap.toLowerCase().includes(_this18.search.toLowerCase()) : true;
        var matchesStatus = _this18.selectedStatus ? item.status === _this18.selectedStatus : true;
        var matchesJabatan = _this18.selectedJabatan ? item.jabatan === _this18.selectedJabatan : true;
        var matchesPendidikan = _this18.selectedPendidikan ? item.pendidikan === _this18.selectedPendidikan : true;
        var matchesJenisKelamin = _this18.selectedJenisKelamin ? item.jenis_kelamin === _this18.selectedJenisKelamin : true;
        var matchesDepartemen = _this18.selectedDepartemen ? item.departemen === _this18.selectedDepartemen : true;
        var matchesAktifPensiun = _this18.selectedAktifPensiun ? item.aktif_pensiun === _this18.selectedAktifPensiun : true;
        var matchesAgama = _this18.selectedAgama ? item.agama === _this18.selectedAgama : true;
        var matchesTanggal = function () {
          if (_this18.startDate && _this18.endDate) {
            return item.tanggal_akhir_kontrak >= _this18.startDate && item.tanggal_akhir_kontrak <= _this18.endDate;
          } else if (_this18.startDate) {
            return item.tanggal_akhir_kontrak >= _this18.startDate;
          } else if (_this18.endDate) {
            return item.tanggal_akhir_kontrak <= _this18.endDate;
          }
          return true;
        }();
        return matchesNamaLengkap && matchesStatus && matchesJabatan && matchesPendidikan && matchesJenisKelamin && matchesDepartemen && matchesAktifPensiun && matchesAgama && matchesTanggal;
      }).length;
      return Math.ceil(filteredDataCount / this.perPage);
    }
  },
  watch: {
    "package": function _package() {
      this.pages = [];
      this.setPages();
    }
  },
  filters: {
    trimWords: function trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-gradient-info d-flex justify-content-between align-items-center",
    staticStyle: {
      background: "#ffffff",
      "border-bottom": "1px solid #ddd",
      padding: "10px 20px",
      "border-radius": "8px"
    }
  }, [_c("router-link", {
    staticClass: "btn btn-primary btn-sm add-button",
    attrs: {
      to: {
        name: "admin.karyawan.tambah"
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v(" Baru\r\n                    ")]), _vm._v(" "), !_vm.isMobile ? _c("div", {
    staticClass: "card-tools d-flex align-items-center ml-auto"
  }, [_c("form", {
    staticClass: "d-flex align-items-center",
    attrs: {
      id: "mainFormUsers"
    }
  }, [_c("a", {
    staticClass: "btn bg-gradient-warning btn-sm",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadExcel.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-fw fa-download"
  }), _vm._v(" Unduh\r\n                            ")]), _vm._v(" "), _c("label", {
    staticClass: "btn bg-gradient-success btn-sm mb-0 ml-2",
    "class": {
      disabled: _vm.isFileUploaded
    }
  }, [_c("i", {
    staticClass: "fas fa-fw fa-file-upload"
  }), _vm._v(" Unggah\r\n                                "), _c("input", {
    ref: "fileInput",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      accept: ".xls,.xlsx",
      disabled: _vm.isFileUploaded
    },
    on: {
      change: _vm.handleFileUpload
    }
  })]), _vm._v(" "), _vm.fileName ? _c("span", {
    staticClass: "ml-2 text-muted",
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v(_vm._s(_vm.fileName))]) : _vm._e(), _vm._v(" "), _vm.fileName ? _c("label", {
    staticClass: "btn btn-secondary btn-sm mb-0 ml-2"
  }, [_c("i", {
    staticClass: "fas fa-fw fa-file-import"
  }), _vm._v(" Kirim\r\n                                "), _c("input", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.saveExcelUser.apply(null, arguments);
      }
    }
  })]) : _vm._e()])]) : _vm._e(), _vm._v(" "), !_vm.isMobile ? _c("div", {
    staticClass: "input-group input-group-sm ml-3",
    staticStyle: {
      "max-width": "220px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    staticStyle: {
      "border-radius": "20px"
    },
    attrs: {
      type: "text",
      id: "search",
      placeholder: "Cari...",
      "aria-label": "Search"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      keyup: function keyup($event) {
        return _vm.doSearch();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.isMobile ? _c("div", {
    staticClass: "d-flex flex-column align-items-center mt-1 mb-1"
  }, [_c("a", {
    staticClass: "btn bg-gradient-warning btn-sm mr-auto mobile-button mb-2",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadExcel.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-fw fa-download"
  }), _vm._v(" Unduh\r\n                        ")]), _vm._v(" "), _c("label", {
    staticClass: "btn bg-gradient-success btn-sm mr-auto mobile-button mb-2",
    "class": {
      disabled: _vm.isFileUploaded
    }
  }, [_c("i", {
    staticClass: "fas fa-fw fa-file-upload"
  }), _vm._v(" Unggah\r\n                            "), _c("input", {
    ref: "fileInput",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      accept: ".xls,.xlsx",
      disabled: _vm.isFileUploaded
    },
    on: {
      change: _vm.handleFileUpload
    }
  })]), _vm._v(" "), _vm.fileName ? _c("span", {
    staticClass: "text-muted mb-2",
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v(_vm._s(_vm.fileName))]) : _vm._e(), _vm._v(" "), _vm.fileName ? _c("label", {
    staticClass: "btn btn-outline-primary btn-sm mr-auto mobile-button mb-2"
  }, [_c("i", {
    staticClass: "fas fa-fw fa-file-import"
  }), _vm._v(" Kirim\r\n                            "), _c("input", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.saveExcelUser.apply(null, arguments);
      }
    }
  })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.isMobile ? _c("div", {
    staticClass: "input-group input-group-sm mt-2 justify-content-center",
    staticStyle: {
      width: "100%",
      "max-width": "400px",
      margin: "0 auto"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    staticStyle: {
      "border-radius": "20px",
      width: "100%"
    },
    attrs: {
      type: "text",
      id: "search-mobile",
      placeholder: "Cari...",
      "aria-label": "Search"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      keyup: function keyup($event) {
        return _vm.doSearch();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body bg-gradient-light"
  }, [_c("div", {
    staticClass: "button-group d-flex justify-content-center mb-3"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary mx-1",
    on: {
      click: _vm.toggleDropdown
    }
  }, [_c("i", {
    staticClass: "fas fa-filter"
  }), _vm._v(" Filter\r\n                            "), _c("i", {
    staticClass: "fas",
    "class": _vm.isDropdownVisible ? "fa-fw fa-chevron-up" : "fa-fw fa-chevron-down"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger mx-1",
    on: {
      click: _vm.resetFilters
    }
  }, [_c("i", {
    staticClass: "fas fa-undo"
  }), _vm._v(" Reset\r\n                        ")])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.isDropdownVisible ? _c("div", {
    staticClass: "form-group-pair d-flex flex-wrap"
  }, [_c("div", {
    staticClass: "form-group mr-2",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "status"
    }
  }, [_vm._v("Status Pekerjaan")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedStatus,
      expression: "selectedStatus"
    }],
    staticClass: "form-control",
    attrs: {
      id: "status"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedStatus = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Status")]), _vm._v(" "), _vm._l(_vm.statusOptions, function (status) {
    return _c("option", {
      key: status,
      domProps: {
        value: status
      }
    }, [_vm._v("\r\n                                        " + _vm._s(status) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "jabatan"
    }
  }, [_vm._v("Jabatan")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedJabatan,
      expression: "selectedJabatan"
    }],
    staticClass: "form-control",
    attrs: {
      id: "jabatan"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedJabatan = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Jabatan")]), _vm._v(" "), _vm._l(_vm.jabatanOptions, function (jabatan) {
    return _c("option", {
      key: jabatan,
      domProps: {
        value: jabatan
      }
    }, [_vm._v("\r\n                                        " + _vm._s(jabatan) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-2",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "pendidikan"
    }
  }, [_vm._v("Pendidikan")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedPendidikan,
      expression: "selectedPendidikan"
    }],
    staticClass: "form-control",
    attrs: {
      id: "pendidikan"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedPendidikan = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Pendidikan")]), _vm._v(" "), _vm._l(_vm.pendidikanOptions, function (pendidikan) {
    return _c("option", {
      key: pendidikan,
      domProps: {
        value: pendidikan
      }
    }, [_vm._v("\r\n                                        " + _vm._s(pendidikan) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "jeniskelamin"
    }
  }, [_vm._v("Jenis Kelamin")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedJenisKelamin,
      expression: "selectedJenisKelamin"
    }],
    staticClass: "form-control",
    attrs: {
      id: "jeniskelamin"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedJenisKelamin = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Jenis Kelamin")]), _vm._v(" "), _vm._l(_vm.jeniskelaminOptions, function (jenis_kelamin) {
    return _c("option", {
      key: jenis_kelamin,
      domProps: {
        value: jenis_kelamin
      }
    }, [_vm._v("\r\n                                        " + _vm._s(jenis_kelamin) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-2",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "departemen"
    }
  }, [_vm._v("Departemen")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedDepartemen,
      expression: "selectedDepartemen"
    }],
    staticClass: "form-control",
    attrs: {
      id: "departemen"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedDepartemen = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Departemen")]), _vm._v(" "), _vm._l(_vm.departemenOptions, function (departemen) {
    return _c("option", {
      key: departemen,
      domProps: {
        value: departemen
      }
    }, [_vm._v("\r\n                                        " + _vm._s(departemen) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "aktifpensiun"
    }
  }, [_vm._v("Status Pegawai")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAktifPensiun,
      expression: "selectedAktifPensiun"
    }],
    staticClass: "form-control",
    attrs: {
      id: "aktifpensiun"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedAktifPensiun = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Status Pegawai")]), _vm._v(" "), _vm._l(_vm.aktifpensiunOptions, function (aktif_pensiun) {
    return _c("option", {
      key: aktif_pensiun,
      domProps: {
        value: aktif_pensiun
      }
    }, [_vm._v("\r\n                                        " + _vm._s(aktif_pensiun) + "\r\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between w-100 mb-3 flex-wrap"
  }, [_c("div", {
    staticClass: "form-group mr-2",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "tanggal_awal"
    }
  }, [_vm._v("Dari Tanggal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.startDate,
      expression: "startDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "tanggal_awal"
    },
    domProps: {
      value: _vm.startDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.startDate = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "tanggal_akhir"
    }
  }, [_vm._v("Sampai Tanggal")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.endDate,
      expression: "endDate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "tanggal_akhir"
    },
    domProps: {
      value: _vm.endDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.endDate = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mr-2",
    staticStyle: {
      flex: "1 1 48%"
    }
  }, [_c("label", {
    attrs: {
      "for": "agama"
    }
  }, [_vm._v("Agama")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedAgama,
      expression: "selectedAgama"
    }],
    staticClass: "form-control",
    attrs: {
      id: "agama"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedAgama = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Semua Status Agama")]), _vm._v(" "), _vm._l(_vm.agamaOptions, function (agama) {
    return _c("option", {
      key: agama,
      domProps: {
        value: agama
      }
    }, [_vm._v("\r\n                                        " + _vm._s(agama) + "\r\n                                    ")]);
  })], 2)])]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "total-karyawan-container"
  }, [_c("div", {
    staticClass: "total-karyawan-card"
  }, [_c("div", {
    staticClass: "total-karyawan-icon"
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 1.5c-3.5 0-10.5 1.8-10.5 5.3V21h21v-2.3c0-3.5-7-5.2-10.5-5.2z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "total-karyawan-content"
  }, [_c("p", {
    staticClass: "total-karyawan-label"
  }, [_vm._v("Total Karyawan")]), _vm._v(" "), _c("p", {
    staticClass: "total-karyawan-count"
  }, [_vm._v(_vm._s(_vm.filteredResultsCount))])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body table-responsive p-0"
  }, [_c("table", {
    staticClass: "table table-hover text-center"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.filteredResults, function (r, index) {
    return _c("tr", {
      key: r.id_karyawan,
      staticClass: "text-center",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.tampilData(r.id_karyawan, r.nama_lengkap);
        }
      }
    }, [_c("td", [_vm._v(_vm._s((_vm.page - 1) * _vm.perPage + index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.nama_lengkap))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.nik))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(r.tanggal_lahir)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.tempat_lahir))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "white-space": "normal",
        "word-wrap": "break-word"
      }
    }, [_vm._v(_vm._s(r.alamat_domisili))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.nomor_hp))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.npwp))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.jabatan))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.departemen))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(r.tanggal_masuk)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(r.tanggal_kontrak)))]), _vm._v(" "), _c("td", {
      "class": {
        "highlight-red": r.aktif_pensiun === "non-aktif",
        "highlight-black": r.aktif_pensiun !== "non-aktif" && r.status === "Staff",
        "highlight-blue": r.aktif_pensiun !== "non-aktif" && r.status === "Kontrak",
        "highlight-yellow": r.aktif_pensiun !== "non-aktif" && r.status === "DW"
      }
    }, [_vm._v(_vm._s(_vm.formatDate(r.tanggal_akhir_kontrak)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.status))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.agama))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.pendidikan))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.aktif_pensiun))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(r.jenis_kelamin))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm btn-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.deletePost(r.id_karyawan, index);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash-alt"
    })])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer bg-gradient-muted"
  }, [_c("nav", {
    attrs: {
      "aria-label": "Page navigation example"
    }
  }, [_c("ul", {
    staticClass: "pagination justify-content-center mt-2"
  }, [_c("li", {
    "class": ["page-item", _vm.page == 1 ? "disabled" : ""]
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#",
      tabindex: "-1"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.page--;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-left"
  })])]), _vm._v(" "), _vm._l(_vm.displayedPages, function (pageNumber) {
    return _c("li", {
      key: pageNumber,
      "class": ["page-item", pageNumber === _vm.page ? "active" : ""]
    }, [pageNumber === "..." ? [_c("span", {
      staticClass: "page-link"
    }, [_vm._v("...")])] : [_c("a", {
      staticClass: "page-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.page = pageNumber;
        }
      }
    }, [_vm._v(_vm._s(pageNumber))])]], 2);
  }), _vm._v(" "), _c("li", {
    "class": ["page-item", _vm.page == _vm.totalPages ? "disabled" : ""]
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.page++;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-right"
  })])])], 2)])]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "modal-header"
  }, [!_vm.isModalTampilData ? _c("button", {
    staticClass: "btn-back",
    on: {
      click: _vm.handleBack
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  })]) : _vm._e(), _vm._v(" "), _c("h4", {
    staticClass: "modal-title",
    attrs: {
      id: "modalsLabel"
    },
    domProps: {
      innerHTML: _vm._s(_vm.truncatedNamaLengkap)
    }
  }), _vm._v(" "), _vm.isModalBerkas ? _c("button", {
    staticClass: "btn btn-primary btn-sm add-file-btn",
    on: {
      click: _vm.goToCreatePage
    }
  }, [_vm._v("\r\n                                    Add File\r\n                                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "table-wrapper"
  }, [_vm.isModalTampilData ? _c("div", {
    staticClass: "options-container"
  }, [_c("div", {
    staticClass: "option-card",
    on: {
      click: function click($event) {
        return _vm.lihatBerkas(_vm.selectedIDKaryawan, _vm.selectedNamaLengkap);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-alt icon"
  }), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("div", {
    staticClass: "option-card",
    on: {
      click: function click($event) {
        return _vm.goToEditPage(_vm.selectedIDKaryawan);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-pencil-alt icon"
  }), _vm._v(" "), _vm._m(3)])]) : _vm._e(), _vm._v(" "), _vm.isModalBerkas ? _c("div", {
    staticClass: "berkas-list"
  }, _vm._l(_vm.berkasData, function (file, index) {
    return _c("div", {
      key: index,
      staticClass: "berkas-item"
    }, [_c("div", {
      staticClass: "berkas-links"
    }, [_c("a", {
      staticClass: "btn-berkas",
      attrs: {
        href: "/storage/" + file.path.replace("public/", ""),
        target: "_blank"
      }
    }, [file.type === "ktp" ? _c("i", {
      staticClass: "fas fa-id-card"
    }) : file.type === "ijazah" ? _c("i", {
      staticClass: "fas fa-graduation-cap"
    }) : file.type === "surat_perjanjian" ? _c("i", {
      staticClass: "fas fa-file-signature"
    }) : _vm._e(), _vm._v("\r\n                                                    " + _vm._s(file.displayName) + "\r\n                                                ")])]), _vm._v(" "), _c("button", {
      staticClass: "btn-hapus",
      on: {
        click: function click($event) {
          return _vm.hapusBerkas(file.id, file.type, file.path, index);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash-alt"
    }), _vm._v(" Hapus\r\n                                            ")])]);
  }), 0) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_vm.isModalTampilData ? _c("button", {
    staticClass: "btn btn-danger btn-sm close-btn",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\r\n                                    Tutup\r\n                                ")]) : _vm._e()])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-header"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row mb-2"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("h1", {
    staticClass: "m-0 text-dark"
  }, [_vm._v("Karyawan")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ol", {
    staticClass: "breadcrumb float-sm-right"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    staticClass: "text-dark",
    attrs: {
      href: "#"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active"
  }, [_c("a", {
    attrs: {
      href: ""
    }
  }, [_vm._v("Karyawan")])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("No")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("NAMA LENGKAP")]), _vm._v(" "), _c("th", [_vm._v("NIK")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("TANGGAL LAHIR")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("TEMPAT LAHIR")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("ALAMAT DOMISILI")]), _vm._v(" "), _c("th", [_vm._v("EMAIL")]), _vm._v(" "), _c("th", [_vm._v("Nomor HP")]), _vm._v(" "), _c("th", [_vm._v("NPWP")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("JABATAN")]), _vm._v(" "), _c("th", [_vm._v("DEPARTEMEN")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("TANGGAL MASUK")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("TANGGAL AWAL")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("TANGGAL AKHIR")]), _vm._v(" "), _c("th", [_vm._v("STATUS PEKERJAAN")]), _vm._v(" "), _c("th", [_vm._v("AGAMA")]), _vm._v(" "), _c("th", [_vm._v("PENDIDIKAN")]), _vm._v(" "), _c("th", [_vm._v("STATUS PEGAWAI")]), _vm._v(" "), _c("th", [_vm._v("JENIS KELAMIN")]), _vm._v(" "), _c("th", [_vm._v("#")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "option-text"
  }, [_c("h3", [_vm._v("Lihat Berkas")]), _vm._v(" "), _c("p", [_vm._v("Periksa dokumen terkait karyawan.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "option-text"
  }, [_c("h3", [_vm._v("Ubah Data")]), _vm._v(" "), _c("p", [_vm._v("Modifikasi data karyawan yang sudah ada.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Container */\n.total-karyawan-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10px;\n}\r\n\r\n/* Card */\n.total-karyawan-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #f4f4f4;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n    width: 240px;\r\n    padding: 20px;\n}\r\n\r\n/* Icon */\n.total-karyawan-icon {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #4caf50;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    color: white;\n}\n.total-karyawan-icon svg {\r\n    width: 30px;\r\n    height: 30px;\n}\r\n\r\n/* Label */\n.total-karyawan-label {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    color: #333;\n}\r\n\r\n/* Count */\n.total-karyawan-count {\r\n    font-size: 1.8rem;\r\n    font-weight: bold;\r\n    margin: 5px 0 0;\r\n    color: #4caf50;\n}\n.total-karyawan-card {\r\n    width: 200px;\r\n    padding: 15px;\n}\n.total-karyawan-icon {\r\n    width: 40px;\r\n    height: 40px;\n}\n.total-karyawan-icon svg {\r\n    width: 25px;\r\n    height: 25px;\n}\n.total-karyawan-label {\r\n    font-size: 0.9rem;\n}\n.total-karyawan-count {\r\n    font-size: 1.5rem;\n}\n.highlight-black {\r\n    background-color: black;\r\n    color: white;\r\n    /* Teks tetap terlihat di atas warna hitam */\n}\n.highlight-red {\r\n    background-color: red;\r\n    color: white;\r\n    /* Teks tetap terlihat di atas warna merah */\n}\n.highlight-blue {\r\n    background-color: rgb(130, 218, 247);\r\n    color: black;\r\n    /* Teks terlihat jelas di atas warna biru muda */\n}\n.highlight-yellow {\r\n    background-color: rgb(247, 247, 146);\r\n    color: rgba(0, 0, 0, 0.877);\r\n    /* Teks terlihat jelas di atas warna kuning muda */\n}\r\n\r\n/* Container untuk Berkas */\n.berkas-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    padding: 40px;\r\n    background-color: #ffffff;\r\n    border-radius: 16px;\r\n    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);\r\n    transition: transform 0.3s ease;\n}\r\n\r\n/* Efek hover untuk kontainer berkas */\n.berkas-container:hover {\r\n    transform: translateY(-5px);\n}\r\n\r\n/* Header untuk kolom Berkas Karyawan */\n.berkas-header {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #1d1d1d;\r\n    text-transform: uppercase;\r\n    border-bottom: 3px solid #007bff;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 25px;\n}\r\n\r\n/* Styling untuk daftar berkas */\n.berkas-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\r\n    gap: 30px;\r\n    transition: all 0.3s ease;\n}\r\n\r\n/* Styling untuk tiap berkas */\n.berkas-item {\r\n    background-color: #f9f9f9;\r\n    border-radius: 12px;\r\n    padding: 20px;\r\n    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\n}\r\n\r\n/* Efek hover pada berkas */\n.berkas-item:hover {\r\n    transform: translateY(-6px);\r\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\r\n\r\n/* Styling untuk links (tautan berkas) */\n.berkas-links {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\n}\r\n\r\n/* Styling untuk setiap tombol berkas */\n.btn-berkas {\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: #007bff;\r\n    font-size: 16px;\r\n    padding: 14px 18px;\r\n    background-color: #ffffff;\r\n    border-radius: 10px;\r\n    border: 1px solid #ccc;\r\n    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;\r\n    font-weight: 500;\n}\r\n\r\n/* Hover effect pada tombol berkas */\n.btn-berkas:hover {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border-color: #007bff;\r\n    transform: translateY(-2px);\n}\r\n\r\n/* Ikon di dalam tombol */\n.btn-berkas i {\r\n    margin-right: 10px;\r\n    font-size: 18px;\n}\r\n\r\n/* Styling untuk tombol hapus */\n.btn-hapus {\r\n    background-color: #f44336;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 18px;\r\n    font-size: 16px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\r\n\r\n/* Hover effect pada tombol hapus */\n.btn-hapus:hover {\r\n    background-color: #d32f2f;\r\n    transform: translateY(-2px);\n}\r\n\r\n/* Ikon di dalam tombol hapus */\n.btn-hapus i {\r\n    margin-right: 10px;\n}\r\n\r\n/* Container Utama */\n.options-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    padding: 25px;\r\n    background-color: #f7f7f7;\r\n    border-radius: 10px;\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\r\n    max-width: 600px;\r\n    margin: 0 auto;\n}\r\n\r\n/* Kartu Opsi */\n.option-card {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    transition: transform 0.3s, box-shadow 0.3s;\r\n    cursor: pointer;\r\n    position: relative;\n}\n.option-card:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\r\n\r\n/* Ikon */\n.icon {\r\n    font-size: 30px;\r\n    color: #007bff;\r\n    transition: color 0.3s ease;\n}\n.option-card:hover .icon {\r\n    color: #0056b3;\n}\r\n\r\n/* Teks Opsi */\n.option-text {\r\n    display: flex;\r\n    flex-direction: column;\n}\n.option-text h3 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #333;\r\n    transition: color 0.3s ease;\n}\n.option-text p {\r\n    margin: 5px 0 0;\r\n    font-size: 14px;\r\n    color: #666;\n}\r\n\r\n/* Efek Hover pada Teks */\n.option-card:hover .option-text h3 {\r\n    color: #007bff;\n}\r\n\r\n/* Animasi untuk Efek Hover */\n.option-card::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 123, 255, 0.1);\r\n    border-radius: 8px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\n}\n.option-card:hover::before {\r\n    opacity: 1;\n}\r\n\r\n/* Modal Responsif */\n.modal-custom {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1050;\r\n    transition: opacity 0.3s ease-in-out;\n}\n.modal-custom.show {\r\n    display: flex;\r\n    opacity: 1;\n}\n.modal-dialog {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 8px;\r\n    /* Rounded corners */\r\n    width: 100%;\r\n    max-width: 500px;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    margin: 0;\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\n}\n.modal-header {\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid #ddd;\r\n    border-top-left-radius: 8px;\r\n    /* Rounded corners for top left */\r\n    border-top-right-radius: 8px;\r\n    /* Rounded corners for top right */\n}\n.modal-title {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n.modal-body {\r\n    padding: 15px;\r\n    max-height: 70vh;\r\n    overflow-y: auto;\r\n    border-bottom-left-radius: 8px;\r\n    /* Rounded corners for bottom left */\r\n    border-bottom-right-radius: 8px;\r\n    /* Rounded corners for bottom right */\n}\n.table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-radius: 8px;\r\n    /* Apply rounding to the table */\r\n    overflow: hidden;\r\n    /* Ensure rounding applies to the entire table */\n}\n.table thead th {\r\n    background-color: #f8f9fa;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    padding: 10px;\n}\n.table tbody td {\r\n    padding: 10px;\r\n    border-bottom: 1px solid #ddd;\n}\n.table tbody tr:hover {\r\n    background-color: #f1f1f1;\n}\n.table-wrapper {\r\n    overflow-x: auto;\r\n    border-radius: 8px;\r\n    /* Round the container */\n}\r\n\r\n/* Ukuran tombol di perangkat mobile */\n.mobile-button {\r\n    font-size: 0.875rem;\r\n    /* Sesuaikan agar mirip ukuran dengan tombol Add Employee */\r\n    padding: 5px 10px;\n}\n.fade-enter-active,\r\n.fade-leave-active {\r\n    transition: opacity 0.5s;\n}\n.fade-enter,\r\n.fade-leave-to\r\n\r\n/* .fade-leave-active in <2.1.8 */\r\n    {\r\n    opacity: 0;\n}\r\n\r\n/* CSS khusus untuk memusatkan elemen pencarian dan tombol pada perangkat mobile */\n.d-flex.flex-column.align-items-center.mt-3 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 1rem;\n}\n.page-link {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 8px 12px;\r\n    color: #6c757d;\r\n    font-weight: 500;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n    font-size: 14px;\r\n    /* Adjusts font size for better icon alignment */\n}\r\n\r\n/* Default state for page links */\n.page-link {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 8px 14px;\r\n    color: #0069d9;\r\n    /* Default text color */\r\n    font-weight: 500;\r\n    border-radius: 30px;\r\n    /* Rounded corners */\r\n    transition: all 0.3s ease-in-out;\r\n    /* Smooth transition */\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n    /* Light background */\r\n    border: 1px solid #0069d9;\r\n    /* Default border is blue */\r\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);\r\n    /* Soft shadow */\r\n    font-size: 14px;\r\n    letter-spacing: 0.3px;\n}\r\n\r\n/* Icon size for the arrows */\n.page-link i {\r\n    font-size: 16px;\r\n    color: #0069d9;\r\n    /* Icon color */\n}\r\n\r\n/* Hover and focus effect for normal page links and arrows */\n.page-link:hover,\r\n.page-link:focus {\r\n    background-color: #0069d9;\r\n    /* Blue background on hover/focus */\r\n    color: white;\r\n    /* White text */\r\n    border-color: #0069d9;\r\n    /* Blue border */\r\n    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.2);\r\n    /* Light shadow on hover */\r\n    transform: scale(1.05);\r\n    /* Slight zoom on hover */\n}\r\n\r\n/* Active state for the current page number (1, 2, 3, ...) */\n.page-item.active .page-link {\r\n    background-color: #0069d9;\r\n    /* Blue background for active page */\r\n    color: white;\r\n    /* White text for active page */\r\n    border-color: #0069d9;\r\n    /* Blue border */\r\n    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);\r\n    /* Stronger shadow for active page */\n}\r\n\r\n/* Disabled state for page links */\n.page-item.disabled .page-link {\r\n    color: #adb5bd;\r\n    /* Grey color for disabled links */\r\n    pointer-events: none;\r\n    /* Disable clicks on disabled items */\r\n    box-shadow: none;\r\n    /* No shadow for disabled items */\n}\r\n\r\n/* Styling for the first and last page links (arrows) */\n.page-item .page-link:first-child,\r\n.page-item .page-link:last-child {\r\n    width: 36px;\r\n    height: 36px;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n    /* Circle shape */\r\n    background-color: #f8f9fa;\r\n    /* Light background for arrows */\r\n    border-color: #0069d9;\r\n    /* Border color remains blue */\n}\r\n\r\n/* Icon styling for arrows */\n.page-item .page-link:first-child i,\r\n.page-item .page-link:last-child i {\r\n    font-size: 16px;\r\n    /* Arrow icon size */\r\n    color: #0069d9;\r\n    /* Icon color is blue */\n}\r\n\r\n/* Active state for arrows when clicked or focused */\n.page-item .page-link:first-child:focus,\r\n.page-item .page-link:last-child:focus {\r\n    background-color: #0069d9;\r\n    /* Blue background for focused arrow */\r\n    color: white;\r\n    /* White icon */\r\n    border-color: #0069d9;\r\n    /* Blue border */\n}\r\n\r\n/* Ensuring clicked arrows and page numbers stay blue */\n.page-item .page-link:active {\r\n    background-color: #0069d9;\r\n    /* Blue background when clicked */\r\n    color: white;\r\n    /* White text for active state */\r\n    border-color: #0069d9;\r\n    /* Blue border */\n}\n.card-header {\r\n    background: #ffffff;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 10px 20px;\r\n    border-radius: 8px;\n}\n.btn {\r\n    border-radius: 20px;\r\n    padding: 8px 15px;\r\n    transition: background 0.3s, transform 0.2s;\n}\n.btn:hover {\r\n    transform: translateY(-2px);\n}\n.input-group {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\n}\n.input-group input {\r\n    border-radius: 20px 0 0 20px;\r\n    padding: 6px;\n}\n.input-group-append .btn {\r\n    border-radius: 0 20px 20px 0;\n}\n.table-responsive {\r\n    overflow-x: auto;\n}\n.table th,\r\n.table td {\r\n    white-space: nowrap;\n}\n.custom-select {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\n}\n.custom-select {\r\n    width: 100%;\r\n    padding: 0.50rem 1rem;\r\n    padding-right: 2.5rem;\r\n    /* Make space for the custom arrow */\r\n    border: 1px solid #ccc;\r\n    border-radius: 0.5rem;\r\n    background-color: #f9f9f9;\r\n    color: #333;\r\n    font-size: 1rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.custom-select:focus {\r\n    border-color: #007bff;\r\n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n    outline: none;\n}\n.select-container::after {\r\n    content: '\\25BC';\r\n    /* Custom arrow using Unicode character */\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    transform: translateY(-50%);\r\n    pointer-events: none;\r\n    color: #007bff;\r\n    font-size: 1.25rem;\n}\n.custom-select:hover {\r\n    border-color: #0056b3;\n}\n.custom-select:disabled {\r\n    background-color: #e9ecef;\r\n    cursor: not-allowed;\n}\n.card-body .button-group {\r\n    max-width: 400px;\r\n    /* Limit width of button group for a professional look */\r\n    width: 100%;\r\n    /* Center-align container */\n}\n.card-body .btn {\r\n    flex: 1 1 auto;\r\n    /* Allow buttons to grow/shrink evenly */\r\n    padding: 0.5rem 1rem;\r\n    /* Adjust padding for optimal touch target */\n}\n.card-body .btn i {\r\n    margin-right: 0.3rem;\r\n    /* Space between icon and text */\n}\r\n\r\n/* Pastikan tombol terlihat rapi */\n.add-file-btn {\r\n    padding: 6px 10px;\r\n    /* Ukuran padding kecil */\r\n    font-size: 12px;\r\n    /* Ukuran font lebih kecil */\r\n    max-width: 80px;\r\n    /* Lebar maksimum tombol */\r\n    text-align: center;\n}\r\n\r\n/* Modal-header dengan Flexbox */\n.modal-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    /* Spasi antara title dan tombol */\r\n    align-items: center;\r\n    /* Sejajarkan secara vertikal */\r\n    padding: 10px 15px;\r\n    /* Sesuaikan padding modal */\n}\n.btn-back {\r\n    background: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    color: #007bff;\r\n    cursor: pointer;\r\n    padding: 0 10px;\n}\n.btn-back i {\r\n    margin-right: 5px;\n}\r\n\r\n/* Media Queries for Responsiveness */\n@media (max-width: 768px) {\n.berkas-container {\r\n        padding: 20px;\n}\n.berkas-header {\r\n        font-size: 24px;\n}\n.berkas-list {\r\n        grid-template-columns: 1fr;\n}\n.btn-berkas {\r\n        font-size: 14px;\r\n        padding: 12px 16px;\n}\n.btn-hapus {\r\n        font-size: 14px;\r\n        padding: 10px 14px;\n}\n.options-container {\r\n        padding: 20px;\n}\n.option-card {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        text-align: center;\n}\n.icon {\r\n        font-size: 28px;\n}\n.option-text h3 {\r\n        font-size: 16px;\n}\n.option-text p {\r\n        font-size: 12px;\n}\n.modal-dialog {\r\n        width: 100%;\r\n        height: auto;\r\n        border-radius: 8px;\r\n        /* Ensure rounded corners persist on mobile */\r\n        transform: none;\r\n        top: auto;\r\n        bottom: 0;\r\n        left: 0;\n}\n.modal-body {\r\n        max-height: 75vh;\n}\n.table thead th,\r\n    .table tbody td {\r\n        font-size: 14px;\n}\n.add-file-btn {\r\n        padding: 4px 8px;\r\n        /* Ukuran padding lebih kecil */\r\n        font-size: 11px;\r\n        /* Ukuran font lebih kecil */\r\n        max-width: 70px;\r\n        /* Lebar lebih kecil untuk layar kecil */\n}\n.card-header {\r\n        flex-direction: column;\r\n        align-items: flex-start;\n}\n.card-body .btn {\r\n        font-size: 14px;\r\n        /* Smaller text for mobile */\n}\n.input-group {\r\n        width: 100%;\r\n        /* Full width on smaller screens */\r\n        margin-top: 20px;\r\n        /* Spacing above search bar */\n}\n.btn {\r\n        width: 100%;\r\n        /* Full width buttons on small screens */\r\n        margin: 5px 0;\r\n        /* Space between buttons */\n}\n.add-button {\r\n        width: 80px;\r\n        /* Adjust width for mobile */\n}\n}\r\n\r\n/* Mobile-friendly adjustments */\n@media (max-width: 576px) {\n.page-link {\r\n        font-size: 12px;\r\n        /* Smaller font size for mobile */\r\n        padding: 4px 8px;\r\n        /* Reduced padding */\n}\n.page-item .page-link {\r\n        padding: 4px 6px;\n}\r\n\r\n    /* Smaller size for arrows on mobile */\n.page-item .page-link:first-child,\r\n    .page-item .page-link:last-child {\r\n        width: 28px;\r\n        height: 28px;\n}\n.page-item .page-link:first-child i,\r\n    .page-item .page-link:last-child i {\r\n        font-size: 14px;\r\n        /* Adjusted icon size */\n}\n.custom-select {\r\n        font-size: 0.875rem;\n}\n.select-container::after {\r\n        font-size: 1rem;\r\n        right: 0.75rem;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12feee94_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=12feee94&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12feee94_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12feee94_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/v_Employe/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/v_Employe/index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=12feee94 */ "./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_12feee94_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=12feee94&lang=css */ "./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/v_Employe/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_12feee94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=12feee94 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=template&id=12feee94");


/***/ }),

/***/ "./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_12feee94_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=12feee94&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/v_Employe/index.vue?vue&type=style&index=0&id=12feee94&lang=css");


/***/ })

}]);