"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_sosialmedia_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sosialmedias: {
        nama_sosial_media: "",
        link_sosial_media: ""
      },
      errors: []
    };
  },
  created: function created() {
    var _this = this;
    var uri = "/api/admin/sosialmedia/".concat(this.$route.params.id_sosial_media, "/edit");
    this.axios.get(uri).then(function (response) {
      _this.sosialmedias = response.data;
      console.log(response.data);
    });
  },
  methods: {
    onCancel: function onCancel() {
      console.log("CANCEL SUBMIT");
      this.$router.push({
        name: "admin.sosialmedia"
      });
    },
    updateRole: function updateRole(e) {
      var _this2 = this;
      if (this.$data.sosialmedias.nama_sosial_media.length != 0) {
        var uri = "/api/admin/sosialmedia/update/".concat(this.$route.params.id_sosial_media);
        this.axios.put(uri, this.sosialmedias).then(function (response) {
          if (response.statusText == "OK") {
            _this2.$swal.fire({
              title: "Success",
              text: "Data updated successfully",
              icon: "success",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1000
            });
          } else {
            _this2.$swal.fire({
              title: "Error",
              text: "Something wrong, cant update !",
              icon: "error",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1000
            });
          }
          _this2.$router.push({
            name: "admin.sosialmedia"
          });
        });
        return true;
      } else {
        this.errors.push("Data is require !");
        this.$swal.fire({
          title: "Error",
          text: "Data is require !",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-primary"
  }, [_vm._m(1), _vm._v(" "), _vm.errors.length ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_c("b", [_vm._v("Terdapat kesalahan dalam input data:")]), _vm._v(" "), _c("ul", _vm._l(_vm.errors, function (error) {
    return _c("li", {
      key: error
    }, [_vm._v(_vm._s(error))]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("form", {
    staticClass: "form-horizontal",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateRole();
      }
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Nama Sosial Media")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sosialmedias.nama_sosial_media,
      expression: "sosialmedias.nama_sosial_media"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "inputEmail3",
      placeholder: "Nama Sosial Media"
    },
    domProps: {
      value: _vm.sosialmedias.nama_sosial_media
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sosialmedias, "nama_sosial_media", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-2 col-form-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Link Sosial Media")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sosialmedias.link_sosial_media,
      expression: "sosialmedias.link_sosial_media"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "inputEmail3",
      placeholder: "Link Sosial Media"
    },
    domProps: {
      value: _vm.sosialmedias.link_sosial_media
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sosialmedias, "link_sosial_media", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                    Update\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-default float-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.onCancel.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                    Cancel\n                ")])])])])]);
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
  }, [_vm._v("Edit Sosial Media")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ol", {
    staticClass: "breadcrumb float-sm-right"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_vm._v("Sosial Media")]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v("Edit")])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("h3", {
    staticClass: "card-title"
  }, [_vm._v("Form Edit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/admin/sosialmedia/edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/sosialmedia/edit.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=2174343d */ "./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d");
/* harmony import */ var _edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js */ "./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sosialmedia/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2174343d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=2174343d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/sosialmedia/edit.vue?vue&type=template&id=2174343d");


/***/ })

}]);