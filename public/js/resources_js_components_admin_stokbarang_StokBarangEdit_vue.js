(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_stokbarang_StokBarangEdit_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      stokbarang: {
        barangs_id: "",
        jumlah_stok: "",
        satuans_id: ""
      },
      errors: [],
      barang: [],
      SearchBarang: "",
      pageBarang: 1,
      perPageBarangs: 3,
      pagesBarangs: [],
      satuan: [],
      SearchSatuan: "",
      pageSatuan: 1,
      perpagesatuan: 3,
      pagesSatuans: []
    };
  },
  created: function created() {
    var _this = this;

    var uriRoles = "/api/admin/stokbarang/".concat(this.$route.params.id_stokbarang, "/edit");
    this.axios.get(uriRoles).then(function (response) {
      _this.stokbarang = response.data;
      console.log(response.data);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this2.getData();

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
        }
      }, _callee, null, [[0, 5]]);
    }))();
  },
  methods: {
    getData: function getData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.axios.get("/api/admin/barang");

              case 2:
                _this3.barang = _context2.sent.data.barang;
                _context2.next = 5;
                return _this3.axios.get("/api/admin/satuan");

              case 5:
                _this3.satuan = _context2.sent.data.satuan;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onCancel: function onCancel() {
      console.log("CANCEL SUBMIT");
      this.$router.push({
        name: "admin.stokbarang"
      });
    },
    updateData: function updateData(e) {
      var _this4 = this;

      if (this.$data.stokbarang.jumlah_stok.length === 0) {
        this.errors.push("Jumlah Stok is require!");
        this.$swal.fire({
          title: "Error",
          text: "Jumlah Stok is require !",
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000
        });
      } else {
        var uri = "/api/admin/stokbarang/update/".concat(this.$route.params.id_stokbarang);
        this.axios.put(uri, {
          barangs_id: this.stokbarang.barangs_id,
          jumlah_stok: this.stokbarang.jumlah_stok,
          satuans_id: this.stokbarang.satuans_id
        }).then(function (response) {
          _this4.$swal.fire({
            title: "Success",
            text: "Stok Barang created successfully",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
          });

          _this4.$router.push({
            name: "admin.stokbarang"
          });
        })["catch"](function (e) {
          // console.log(e);
          _this4.$swal.fire({
            title: "Error!",
            text: "Stok Barang failed to created!",
            icon: "error",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
          });
        });
        e.preventDefault();
      }
    },
    pilihBarangs: function pilihBarangs(id_barang, nama_barang) {
      document.querySelector("#id_barang").setAttribute("value", id_barang);
      this.stokbarang.barangs_id = id_barang;
      document.querySelector("#nama_barang").setAttribute("value", nama_barang);
      this.stokbarang.nama_barang = nama_barang;
    },
    dosearchBarangs: function dosearchBarangs() {
      var _this5 = this;

      var go = this.barang.filter(function (item) {
        return _this5.SearchBarang.toLowerCase().split(" ").every(function (v) {
          return item.nama_barang.toLowerCase().includes(v);
        });
      });
      this.searchResultBarang = go;
      this.pagesBarangs = [];
      this.setPagesBarang();
    },
    displayBarang: function displayBarang() {
      var paginateBarangs;

      if (this.SearchBarang == "") {
        paginateBarangs = this.paginateBarangs(this.barang);
      } else {
        paginateBarangs = this.paginateBarangs(this.searchResultBarang);
      }

      return paginateBarangs;
    },
    setPagesBarang: function setPagesBarang() {
      var numberOfPages;

      if (this.SearchBarang == "") {
        numberOfPages = Math.ceil(this.barang.length / this.perPageBarangs);
      } else {
        numberOfPages = Math.ceil(this.searchResultBarang.length / this.perPageBarangs);
      }

      for (var index = 1; index <= numberOfPages; index++) {
        this.pagesBarangs.push(index);
      }
    },
    paginateBarangs: function paginateBarangs(barang) {
      var pageBarang = this.pageBarang;
      var perPageBarangs = this.perPageBarangs;
      var from = pageBarang * perPageBarangs - perPageBarangs;
      var to = pageBarang * perPageBarangs;
      return barang.slice(from, to);
    },
    pilihSatuan: function pilihSatuan(id_satuan, nama_satuanbarang) {
      document.querySelector("#id_satuan").setAttribute("value", id_satuan);
      this.stokbarang.satuans_id = id_satuan;
      document.querySelector("#nama_satuanbarang").setAttribute("value", nama_satuanbarang);
      this.stokbarang.nama_satuanbarang = nama_satuanbarang;
    },
    dofindsatuan: function dofindsatuan() {
      var _this6 = this;

      var go = this.satuan.filter(function (item) {
        return _this6.SearchSatuan.toLowerCase().split(" ").every(function (v) {
          return item.nama_satuanbarang.toLowerCase().includes(v);
        });
      });
      this.searchResultSatuan = go;
      this.pagesSatuans = [];
      this.setPagesSatuan();
    },
    displaySatuan: function displaySatuan() {
      var paginateSatuan;

      if (this.SearchSatuan == "") {
        paginateSatuan = this.paginateSatuan(this.satuan);
      } else {
        paginateSatuan = this.paginateSatuan(this.searchResultSatuan);
      }

      return paginateSatuan;
    },
    setPagesSatuan: function setPagesSatuan() {
      var numberOfPages;

      if (this.SearchSatuan == "") {
        numberOfPages = Math.ceil(this.satuan.length / this.perpagesatuan);
      } else {
        numberOfPages = Math.ceil(this.searchResultSatuan.length / this.perpagesatuan);
      }

      for (var index = 1; index <= numberOfPages; index++) {
        this.pagesSatuans.push(index);
      }
    },
    paginateSatuan: function paginateSatuan(satuan) {
      var pageSatuan = this.pageSatuan;
      var perpagesatuan = this.perpagesatuan;
      var from = pageSatuan * perpagesatuan - perpagesatuan;
      var to = pageSatuan * perpagesatuan;
      return satuan.slice(from, to);
    }
  },
  watch: {
    barang: function barang() {
      this.pagesBarangs = [];
      this.setPagesBarang();
    },
    satuan: function satuan() {
      this.pagesSatuans = [];
      this.setPagesSatuan();
    }
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/admin/stokbarang/StokBarangEdit.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/admin/stokbarang/StokBarangEdit.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StokBarangEdit.vue?vue&type=template&id=691715c4& */ "./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4&");
/* harmony import */ var _StokBarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StokBarangEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StokBarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/stokbarang/StokBarangEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StokBarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StokBarangEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StokBarangEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StokBarangEdit_vue_vue_type_template_id_691715c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StokBarangEdit.vue?vue&type=template&id=691715c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/stokbarang/StokBarangEdit.vue?vue&type=template&id=691715c4& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "examplemodalBarang",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                            Barang\n                            "
                    ),
                    _c("div", { staticClass: "card-tools" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input-group input-group-sm",
                          staticStyle: { width: "150px" },
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.SearchBarang,
                                expression: "SearchBarang",
                              },
                            ],
                            staticClass: "form-control float-right",
                            attrs: {
                              type: "text",
                              id: "SearchBarang",
                              placeholder: "Search",
                            },
                            domProps: { value: _vm.SearchBarang },
                            on: {
                              keyup: function ($event) {
                                return _vm.dosearchBarangs()
                              },
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.SearchBarang = $event.target.value
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body table-responsive p-0" }, [
                    _c(
                      "table",
                      { staticClass: "table table-hover text-nowrap" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.displayBarang(), function (barang, index) {
                            return _c("tr", { key: barang.id_barang }, [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(barang.nama_barang.toUpperCase()) +
                                    "\n                                        "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-sm",
                                    attrs: {
                                      "data-dismiss": "modal",
                                      "aria-label": "Close",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.pilihBarangs(
                                          barang.id_barang,
                                          barang.nama_barang
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                Pilih\n                                            "
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c("td", { attrs: { colspan: "7" } }, [
                              _c(
                                "nav",
                                {
                                  attrs: {
                                    "aria-label": "Page navigation example",
                                  },
                                },
                                [
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "pagination justify-content-end",
                                    },
                                    [
                                      _c(
                                        "li",
                                        {
                                          class: [
                                            "page-item",
                                            _vm.pageBarang == 1
                                              ? "disabled"
                                              : "",
                                          ],
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "page-link",
                                              attrs: {
                                                href: "#",
                                                tabindex: "-1",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageBarang--
                                                },
                                              },
                                            },
                                            [_vm._v("Previous")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.pagesBarangs.slice(
                                          _vm.pageBarang - 1,
                                          _vm.pageBarang + 5
                                        ),
                                        function (pageNumber) {
                                          return _c(
                                            "li",
                                            {
                                              class: [
                                                "page-item",
                                                pageNumber == _vm.pageBarang
                                                  ? "active"
                                                  : "",
                                              ],
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageBarang = pageNumber
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "page-link",
                                                  attrs: { href: "#" },
                                                },
                                                [_vm._v(_vm._s(pageNumber))]
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          class: [
                                            "page-item",
                                            _vm.pageBarang <
                                            _vm.pagesBarangs.length
                                              ? ""
                                              : "disabled",
                                          ],
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "page-link",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageBarang++
                                                },
                                              },
                                            },
                                            [_vm._v("Next")]
                                          ),
                                        ]
                                      ),
                                    ],
                                    2
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c("small", [
                  _vm._v(
                    "\n                        © TOKO. All rights reserved.\n                        " +
                      _vm._s(new Date().getFullYear())
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "examplemodalSatuan",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                            Satuan Barang\n                            "
                    ),
                    _c("div", { staticClass: "card-tools" }, [
                      _c(
                        "div",
                        {
                          staticClass: "input-group input-group-sm",
                          staticStyle: { width: "150px" },
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.SearchSatuan,
                                expression: "SearchSatuan",
                              },
                            ],
                            staticClass: "form-control float-right",
                            attrs: {
                              type: "text",
                              id: "SearchSatuan",
                              placeholder: "Search",
                            },
                            domProps: { value: _vm.SearchSatuan },
                            on: {
                              keyup: function ($event) {
                                return _vm.dofindsatuan()
                              },
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.SearchSatuan = $event.target.value
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body table-responsive p-0" }, [
                    _c(
                      "table",
                      { staticClass: "table table-hover text-nowrap" },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(
                            _vm.displaySatuan(),
                            function (satuanbarang, index) {
                              return _c("tr", { key: satuanbarang.id_satuan }, [
                                _c("td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        satuanbarang.nama_satuanbarang.toUpperCase()
                                      ) +
                                      "\n                                        "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary btn-sm",
                                      attrs: {
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.pilihSatuan(
                                            satuanbarang.id_satuan,
                                            satuanbarang.nama_satuanbarang
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                Pilih\n                                            "
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            }
                          ),
                          0
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c("td", { attrs: { colspan: "7" } }, [
                              _c(
                                "nav",
                                {
                                  attrs: {
                                    "aria-label": "Page navigation example",
                                  },
                                },
                                [
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "pagination justify-content-end",
                                    },
                                    [
                                      _c(
                                        "li",
                                        {
                                          class: [
                                            "page-item",
                                            _vm.pageSatuan == 1
                                              ? "disabled"
                                              : "",
                                          ],
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "page-link",
                                              attrs: {
                                                href: "#",
                                                tabindex: "-1",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageSatuan--
                                                },
                                              },
                                            },
                                            [_vm._v("Previous")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.pagesSatuans.slice(
                                          _vm.pageSatuan - 1,
                                          _vm.pageSatuan + 5
                                        ),
                                        function (pageNumber) {
                                          return _c(
                                            "li",
                                            {
                                              class: [
                                                "page-item",
                                                pageNumber == _vm.pageSatuan
                                                  ? "active"
                                                  : "",
                                              ],
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageSatuan = pageNumber
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "page-link",
                                                  attrs: { href: "#" },
                                                },
                                                [_vm._v(_vm._s(pageNumber))]
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          class: [
                                            "page-item",
                                            _vm.pageSatuan <
                                            _vm.pagesSatuans.length
                                              ? ""
                                              : "disabled",
                                          ],
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "page-link",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  _vm.pageSatuan++
                                                },
                                              },
                                            },
                                            [_vm._v("Next")]
                                          ),
                                        ]
                                      ),
                                    ],
                                    2
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c("small", [
                  _vm._v(
                    "\n                        © TOKO. All rights reserved.\n                        " +
                      _vm._s(new Date().getFullYear())
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("div", { staticClass: "card card-primary" }, [
      _vm._m(5),
      _vm._v(" "),
      _vm.errors.length
        ? _c("div", { staticClass: "alert alert-danger" }, [
            _c("b", [_vm._v("Terdapat kesalahan dalam input data:")]),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(_vm.errors, function (error) {
                return _c("li", { key: error }, [_vm._v(_vm._s(error))])
              }),
              0
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "form-horizontal",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.updateData()
            },
          },
        },
        [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-2 col-form-label",
                  attrs: { for: "inputEmail3" },
                },
                [_vm._v("Nama Barang")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.stokbarang.nama_barang,
                      expression: "stokbarang.nama_barang",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "nama_barang",
                    placeholder: "Nama Barang",
                    "data-target": "#examplemodalBarang",
                    "data-toggle": "modal",
                    readonly: "",
                  },
                  domProps: { value: _vm.stokbarang.nama_barang },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.stokbarang,
                        "nama_barang",
                        $event.target.value
                      )
                    },
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.stokbarang.barangs_id,
                      expression: "stokbarang.barangs_id",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "hidden",
                    id: "id_barang",
                    placeholder: "ID Barang",
                    "data-target": "#examplemodalBarang",
                    "data-toggle": "modal",
                    readonly: "",
                  },
                  domProps: { value: _vm.stokbarang.barangs_id },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.stokbarang,
                        "barangs_id",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-2 col-form-label",
                  attrs: { for: "inputEmail3" },
                },
                [_vm._v("Jumlah Stok")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.stokbarang.jumlah_stok,
                      expression: "stokbarang.jumlah_stok",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "inputEmail3",
                    placeholder: "Jumlah Stok",
                  },
                  domProps: { value: _vm.stokbarang.jumlah_stok },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.stokbarang,
                        "jumlah_stok",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-2 col-form-label",
                  attrs: { for: "inputEmail3" },
                },
                [_vm._v("Nama Barang")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.stokbarang.nama_satuanbarang,
                      expression: "stokbarang.nama_satuanbarang",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "nama_satuanbarang",
                    placeholder: "Nama Satuan Barang",
                    "data-target": "#examplemodalSatuan",
                    "data-toggle": "modal",
                    readonly: "",
                  },
                  domProps: { value: _vm.stokbarang.nama_satuanbarang },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.stokbarang,
                        "nama_satuanbarang",
                        $event.target.value
                      )
                    },
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.stokbarang.satuans_id,
                      expression: "stokbarang.satuans_id",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "hidden",
                    id: "id_satuan",
                    placeholder: "ID Satuan",
                    "data-target": "#examplemodalSatuan",
                    "data-toggle": "modal",
                    readonly: "",
                  },
                  domProps: { value: _vm.stokbarang.satuans_id },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.stokbarang,
                        "satuans_id",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("Save")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default float-right",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.onCancel.apply(null, arguments)
                  },
                },
              },
              [_vm._v("\n                    Cancel\n                ")]
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("\n                        Data Barang\n                    ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Barang")]),
        _vm._v(" "),
        _c("th", [_vm._v("Aksi")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                        Data Satuan Barang\n                    "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Satuan")]),
        _vm._v(" "),
        _c("th", [_vm._v("Aksi")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [
              _vm._v("Create Stok Barang"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item" }, [
                _vm._v("Stok Barang"),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Create"),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Form Create")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);