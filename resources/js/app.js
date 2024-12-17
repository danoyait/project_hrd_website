require("./bootstrap");
window.Vue = require("vue").default;
import App from "./components/App.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Pagination from "vue-pagination-2";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard);
Vue.component("pagination", Pagination);
//content
const routes = [
    {
        name: "admin.dashboard",
        path: "/admin/dashboard",
        component: () => import("./components/admin/Dashboard.vue"),
        meta: { requiresAuth: true }
    },


    {
        name: "admin.users",
        path: "/admin/users",
        component: () => import("./components/admin/users/index.vue"),
    },
    {
        name: "admin.users.create",
        path: "/admin/users/create",
        component: () => import("./components/admin/users/create.vue"),
    },
    {
        name: "admin.users.edit",
        path: "/admin/users/:id_user/edit",
        component: () => import("./components/admin/users/edit.vue"),
    },
    {
        name: "admin.karyawan",
        path: "/admin/karyawan",
        component: () => import("./components/admin/v_Employe/index.vue"),
    },
    {
        name: "admin.karyawan.ubah",
        path: "/admin/karyawan/:id_karyawan/ubah",
        component: () => import("./components/admin/v_Employe/edit.vue"),
    },
    {
        name: "admin.karyawan.tambah",
        path: "/admin/karyawan/tambah",
        component: () => import("./components/admin/v_Employe/create.vue"),
    },
    {
        name: "admin.karyawan.berkas.tambah",
        path: "/admin/karyawan/berkas/tambah",
        component: () => import("./components/admin/v_Employe/v_File_Employe/create.vue"),
    },
    {
        name: "form-karyawan",
        path: "/form-karyawan",
        component: () => import("./components/v_Form_karyawan/index.vue"),
    },

];

const router = new VueRouter({ mode: "history", routes: routes });

window.onpageshow = (event) => {
    var isHistoryTransfersal = event.persisted ||
        (typeof window.performance != "undefined"
            && window.performance.navigation.type === 2);

    if (isHistoryTransfersal
        && /(.*)admin(.*)/i.test(location.pathname)) {
        // console.log('reloading...');
        location.reload();
    }
};


new Vue(Vue.util.extend({ router }, App)).$mount("#app");
