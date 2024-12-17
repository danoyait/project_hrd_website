<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Roles</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#" class="text-dark">Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                <a href="">Roles</a>
                            </li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link
                            :to="{ name: 'admin.roles.create' }"
                            class="btn btn-primary btn-sm"
                            ><i class="fas fa-save"></i
                        ></router-link>

                        <div class="card-tools">
                            <div
                                class="input-group input-group-sm"
                                style="width: 150px"
                            >
                                <input
                                    type="text"
                                    id="search"
                                    @keyup="doSearch()"
                                    v-model="search"
                                    class="form-control float-right"
                                    placeholder="Search"
                                />

                                <div class="input-group-append">
                                    <button
                                        type="submit"
                                        class="btn btn-default"
                                    >
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Role</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(r, index) in displayedRole()"
                                    :key="r.id_role"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ r.nama_role }}</td>

                                    <td>
                                        <router-link
                                            :to="{
                                                name: 'admin.roles.edit',
                                                params: { id_role: r.id_role },
                                            }"
                                            class="btn btn-warning btn-sm"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </router-link>

                                        <span
                                            v-if="
                                                r.nama_role == 'admin' ||
                                                r.nama_role == 'super admin'
                                            "
                                        >
                                            <button
                                                type="button"
                                                @click="
                                                    deletePost(r.id_role, index)
                                                "
                                                class="btn btn-sm btn-danger btn-sm"
                                                disabled
                                            >
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </span>

                                        <span v-else>
                                            <button
                                                type="button"
                                                @click="
                                                    deletePost(r.id_role, index)
                                                "
                                                class="btn btn-sm btn-danger btn-sm"
                                            >
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4">
                                        <nav
                                            aria-label="Page navigation example"
                                        >
                                            <ul
                                                class="pagination justify-content-end"
                                            >
                                                <li
                                                    :class="[
                                                        'page-item',
                                                        page == 1
                                                            ? 'disabled'
                                                            : '',
                                                    ]"
                                                >
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        tabindex="-1"
                                                        @click="page--"
                                                        >Previous</a
                                                    >
                                                </li>
                                                <li
                                                    :class="[
                                                        'page-item',
                                                        pageNumber == page
                                                            ? 'active'
                                                            : '',
                                                    ]"
                                                    v-for="pageNumber in pages.slice(
                                                        page - 1,
                                                        page + 5
                                                    )"
                                                    @click="page = pageNumber"
                                                >
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        >{{ pageNumber }}</a
                                                    >
                                                </li>
                                                <li
                                                    :class="[
                                                        'page-item',
                                                        page < pages.length
                                                            ? ''
                                                            : 'disabled',
                                                    ]"
                                                >
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        @click="page++"
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
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roles: [],
            page: 1,
            perPage: 3,
            pages: [],
            search: "",
            searchResult: [],
        };
    },
    async mounted() {
        try {
            await this.getData();
        } catch (e) {
            console.error(e);
        }
    },

    methods: {
        async getData() {
            this.roles = (await this.axios.get("/api/admin/roles")).data.roles;
        },
        deletePost(id, index) {
            this.$swal
                .fire({
                    title: "Are You Sure?",
                    text: "Really?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK",
                    cancelButtonText: "BATAL",
                })
                .then((result) => {
                    if (result.value) {
                        let uri = `/api/admin/roles/destroy/${id}`;
                        this.axios
                            .delete(uri)
                            .then((response) => {
                                this.roles.splice(this.roles.index, 1);
                                if (response.status == 200) {
                                    this.$swal.fire({
                                        title: "Success!",
                                        text: "Role deleted successfully!",
                                        icon: "success",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                } else {
                                    this.$swal.fire({
                                        title: "Error!",
                                        text: "Something wrong, can not delete role!",
                                        icon: "error",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                }
                            })
                            .catch((e) => {
                                // console.log(e);
                                this.$swal.fire({
                                    title: "Error!",
                                    text: "Role failed to deleted!",
                                    icon: "error",
                                    showCancelButton: false,
                                    showConfirmButton: false,
                                    timer: 1000,
                                });
                            });
                    }
                });
        },
        doSearch() {
            let go = this.roles.filter((item) => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every((v) => item.nama_role.toLowerCase().includes(v));
            });
            this.searchResult = go;
            this.pages = [];
            this.setPages();
        },

        displayedRole() {
            let paginate;

            if (this.search == "") {
                paginate = this.paginate(this.roles);
            } else {
                paginate = this.paginate(this.searchResult);
            }

            return paginate;
        },
        setPages() {
            let numberOfPages;

            if (this.search == "") {
                numberOfPages = Math.ceil(this.roles.length / this.perPage);
            } else {
                numberOfPages = Math.ceil(
                    this.searchResult.length / this.perPage
                );
            }
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(roles) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return roles.slice(from, to);
        },
    },
    watch: {
        roles() {
            this.pages = [];
            this.setPages();
        },
    },

    filters: {
        trimWords(value) {
            return value.split(" ").splice(0, 20).join(" ") + "...";
        },
    },
};
</script>
