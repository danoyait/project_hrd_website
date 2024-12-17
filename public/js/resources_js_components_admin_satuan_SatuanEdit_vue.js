"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_satuan_SatuanEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      satuan: {
        nama_satuanbarang: ""
      },
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    var uriSatuan = "/api/admin/satuan/".concat(this.$route.params.id_satuan, "/edit");
    this.axios.get(uriSatuan).then(function (response) {
      _this.satuan = response.data;
      console.log(response.data);
    });
  },
  methods: {
    onCancel: function onCancel() {
      console.log("CANCEL SUBMIT");
      this.$router.push({
        name: "admin.satuan"
      });
    },
    updateSatuan: function updateSatuan(e) {
      var _this2 = this;

      if (this.$data.satuan.nama_satuanbarang.length != 0) {
        var uri = "/api/admin/satuan/update/".concat(this.$route.params.id_satuan);
        this.axios.put(uri, this.satuan).then(function (response) {
          if (response.statusText == "OK") {
            _this2.$swal.fire({
              title: "Success",
              text: "Satuan updated successfully",
              icon: "success",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1000
            });
          } else {
            _this2.$swal.fire({
              title: "Error",
              text: "Something wrong, cant update satuan!",
              icon: "error",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1000
            });
          }

          _this2.$router.push({
            name: "admin.satuan"
          });
        });
        return true;
      } else {
        this.errors.push("Nama satuan is require !");
        this.$swal.fire({
          title: "Error",
          text: "Nama satuan is require !",
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000
        });
      }

      e.preventDefault();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/satuan/SatuanEdit.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/satuan/SatuanEdit.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SatuanEdit.vue?vue&type=template&id=1ded8f04& */ "./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04&");
/* harmony import */ var _SatuanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SatuanEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SatuanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__.render,
  _SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/satuan/SatuanEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatuanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatuanEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatuanEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SatuanEdit_vue_vue_type_template_id_1ded8f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatuanEdit.vue?vue&type=template&id=1ded8f04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/satuan/SatuanEdit.vue?vue&type=template&id=1ded8f04& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card card-primary" }, [
      _vm._m(1),
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
              return _vm.updateSatuan()
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
                [_vm._v("Nama Satuan")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.satuan.nama_satuanbarang,
                      expression: "satuan.nama_satuanbarang",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "inputEmail3",
                    placeholder: "Nama Satuan Barang",
                  },
                  domProps: { value: _vm.satuan.nama_satuanbarang },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.satuan,
                        "nama_satuanbarang",
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
                [_vm._v("Keterangan")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.satuan.keterangan,
                      expression: "satuan.keterangan",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "inputEmail3",
                    placeholder: "Keterangan",
                  },
                  domProps: { value: _vm.satuan.keterangan },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.satuan, "keterangan", $event.target.value)
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
              [_vm._v("\n                    Update\n                ")]
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
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Edit Satuan")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Satuan")]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Edit"),
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("Form Edit")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);