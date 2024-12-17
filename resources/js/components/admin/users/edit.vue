<template>
    <div>
        <!-- Modal Roles -->
        <div
            class="modal fade"
            id="examplemodalRole"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Data Roles
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-header">
                                Roles
                                <div class="card-tools">
                                    <div
                                        class="input-group input-group-sm"
                                        style="width: 150px"
                                    >
                                        <input
                                            type="text"
                                            id="SearchRole"
                                            @keyup="dosearchroles()"
                                            v-model="SearchRole"
                                            class="form-control float-right"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nama Role</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="(
                                                role, index
                                            ) in displayedRole()"
                                            :key="role.id_role"
                                        >
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                                {{
                                                    role.nama_role.toUpperCase()
                                                }}
                                            </td>
                                            <td>
                                                <button
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    class="btn btn-primary btn-sm"
                                                    v-on:click="
                                                        pilihRoles(
                                                            role.id_role,
                                                            role.nama_role
                                                        )
                                                    "
                                                >
                                                    Pilih
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="7">
                                                <nav
                                                    aria-label="Page navigation example"
                                                >
                                                    <ul
                                                        class="pagination justify-content-end"
                                                    >
                                                        <li
                                                            :class="[
                                                                'page-item',
                                                                pageRole == 1
                                                                    ? 'disabled'
                                                                    : '',
                                                            ]"
                                                        >
                                                            <a
                                                                class="page-link"
                                                                href="#"
                                                                tabindex="-1"
                                                                @click="
                                                                    pageRole--
                                                                "
                                                                >Previous</a
                                                            >
                                                        </li>
                                                        <li
                                                            :class="[
                                                                'page-item',
                                                                pageNumber ==
                                                                pageRole
                                                                    ? 'active'
                                                                    : '',
                                                            ]"
                                                            v-for="pageNumber in pagesRole.slice(
                                                                pageRole - 1,
                                                                pageRole + 5
                                                            )"
                                                            @click="
                                                                pageRole =
                                                                    pageNumber
                                                            "
                                                        >
                                                            <a
                                                                class="page-link"
                                                                href="#"
                                                                >{{
                                                                    pageNumber
                                                                }}</a
                                                            >
                                                        </li>
                                                        <li
                                                            :class="[
                                                                'page-item',
                                                                pageRole <
                                                                pagesRole.length
                                                                    ? ''
                                                                    : 'disabled',
                                                            ]"
                                                        >
                                                            <a
                                                                class="page-link"
                                                                href="#"
                                                                @click="
                                                                    pageRole++
                                                                "
                                                                >Next</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <small>
                            © Bayu Ari Hartono. All rights reserved.
                            {{ new Date().getFullYear() }}</small
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- End Modal Roles -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Edit Users</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item">Users</li>
                            <li class="breadcrumb-item active">Edit</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Form</h3>
            </div>
            <!-- /.card-header -->
            <div class="alert alert-danger" v-if="errors.length">
                <b>Terdapat kesalahan dalam input data:</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
            <!-- form start -->
            <form class="form-horizontal" @submit.prevent="updateUser()">
                <div class="card-body">
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label"
                            >Nama Role</label
                        >
                        <div class="col-sm-10">
                            <input
                                type="text"
                                class="form-control"
                                id="nama_role"
                                placeholder="Nama Role"
                                v-model="users.nama_role"
                                data-target="#examplemodalRole"
                                data-toggle="modal"
                            />

                            <input
                                type="hidden"
                                class="form-control"
                                id="id_role"
                                placeholder="Nama Role"
                                v-model="users.roles_id"
                                data-target="#examplemodalRole"
                                data-toggle="modal"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label"
                            >Email</label
                        >
                        <div class="col-sm-10">
                            <input
                                type="email"
                                class="form-control"
                                id="inputEmail3"
                                placeholder="Email"
                                v-model="users.email"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label"
                            >Password</label
                        >
                        <div class="col-sm-10">
                            <input
                                type="text"
                                class="form-control"
                                id="inputEmail3"
                                placeholder="Password"
                                v-model="users.password"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label"
                            >Blokir</label
                        >
                        <div class="col-sm-6">
                            <!-- radio -->
                            <div class="form-group">
                                <div class="custom-control custom-radio">
                                    <input
                                        class="custom-control-input"
                                        type="radio"
                                        id="RadioYa"
                                        v-model="users.blokir"
                                        value="Y"
                                    />
                                    <label
                                        for="RadioYa"
                                        class="custom-control-label"
                                        >Ya</label
                                    >
                                </div>
                                <div class="custom-control custom-radio">
                                    <input
                                        class="custom-control-input"
                                        type="radio"
                                        id="RadioTidak"
                                        v-model="users.blokir"
                                        value="T"
                                    />
                                    <label
                                        for="RadioTidak"
                                        class="custom-control-label"
                                        >Tidak</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button
                        type="button"
                        class="btn btn-default float-right"
                        @click.prevent="onCancel"
                    >
                        Cancel
                    </button>
                </div>
                <!-- /.card-footer -->
            </form>
        </div>
    </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { id } from "vuejs-datepicker/dist/locale";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
    components: {
        Datepicker,
        VueCropper,
    },
    data() {
        return {
            users: {
                email: "",
                password: "",
                blokir: "T",
                roles_id: "",
            },
            roles: [],
            errors: [],
            SearchRole: "",
            pageRole: 1,
            perPagesRoles: 3,
            pagesRole: [],

            format: "d MMMM yyyy",
            id: id,
        };
    },
    async mounted() {
        try {
            await this.getData();
        } catch (e) {
            console.error(e);
        }
    },
    created() {
        let uriUsers = `/api/admin/users/${this.$route.params.id_user}/edit`;
        this.axios.get(uriUsers).then((response) => {
            this.users = response.data;
            console.log(response.data);
        });
    },
    methods: {
        async getData() {
            this.roles = (await this.axios.get("/api/admin/roles")).data.roles;
        },
        onCancel() {
            console.log("CANCEL SUBMIT");
            this.$router.push({ name: "admin.users" });
        },
        updateUser(e) {
            if (this.$data.users.roles_id.length === 0) {
                this.errors.push("Nama role wajib diisi !");
                this.$swal.fire({
                    title: "Error",
                    text: "Nama role harus wajib diisi !",
                    icon: "error",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else if (this.$data.users.email.length === 0) {
                this.errors.push("Email harus diisi !");
                this.$swal.fire({
                    title: "Error",
                    text: "Email harus wajib diisi !",
                    icon: "error",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                let uri = `/api/admin/users/update/${this.$route.params.id_user}`;
                this.axios
                    .put(uri, {
                        email: this.users.email,
                        password: this.users.password,
                        roles_id: this.users.roles_id,
                        blokir: this.users.blokir,
                    })
                    .then((response) => {
                        if (response.statusText == "OK") {
                            this.$swal.fire({
                                title: "Success",
                                text: "User updated successfully",
                                icon: "success",
                                showCancelButton: false,
                                showConfirmButton: false,
                                timer: 1000,
                            });
                        } else {
                            this.$swal.fire({
                                title: "Error",
                                text: "Something wrong, cant update user!",
                                icon: "error",
                                showCancelButton: false,
                                showConfirmButton: false,
                                timer: 1000,
                            });
                        }
                        this.$router.push({ name: "admin.users" });
                    });
                return true;
            }
        },

        pilihRoles(id_role, nama_role) {
            document.querySelector("#id_role").setAttribute("value", id_role);
            document
                .querySelector("#nama_role")
                .setAttribute("value", nama_role);
            this.users.roles_id = id_role;
            this.users.nama_role = nama_role;
        },
        dosearchroles() {
            let go = this.roles.filter((item) => {
                return this.SearchRole.toLowerCase()
                    .split(" ")
                    .every((v) => item.nama_role.toLowerCase().includes(v));
            });
            this.searchResultRoles = go;
            this.pagesRole = [];
            this.setRoles();
        },

        displayedRole() {
            let paginateRoles;

            if (this.SearchRole == "") {
                paginateRoles = this.paginateRoles(this.roles);
            } else {
                paginateRoles = this.paginateRoles(this.searchResultRoles);
            }

            return paginateRoles;
        },

        setRoles() {
            let numberOfPages;

            if (this.SearchRole == "") {
                numberOfPages = Math.ceil(
                    this.roles.length / this.perPagesRoles
                );
            } else {
                numberOfPages = Math.ceil(
                    this.searchResultRoles.length / this.perPagesRoles
                );
            }
            for (let index = 1; index <= numberOfPages; index++) {
                this.pagesRole.push(index);
            }
        },
        paginateRoles(roles) {
            let pageRole = this.pageRole;
            let perPagesRoles = this.perPagesRoles;
            let from = pageRole * perPagesRoles - perPagesRoles;
            let to = pageRole * perPagesRoles;
            return roles.slice(from, to);
        },
    },

    watch: {
        roles() {
            this.pagesRole = [];
            this.setRoles();
        },
    },
    filters: {
        trimWords(value) {
            return value.split(" ").splice(0, 20).join(" ") + "...";
        },
    },
};
</script>
