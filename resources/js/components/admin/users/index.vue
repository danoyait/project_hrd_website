<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Users</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Users</li>
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
                            :to="{ name: 'admin.users.create' }"
                            class="btn btn-primary btn-sm"
                            :class="{ disabled: users.length > 0 }"
                            :disabled="users.length > 0"
                        >
                            <i class="fas fa-plus"></i>
                        </router-link>

                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px">
                                <input
                                    type="text"
                                    id="search"
                                    @keyup="doSearch()"
                                    v-model="search"
                                    class="form-control float-right"
                                    placeholder="Search"
                                />
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default">
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
                                    <th>Role Name</th>
                                    <th>Email</th>
                                    <th>Blokir</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(r, index) in displayedUser()" :key="r.id_user">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ r.nama_role }}</td>
                                    <td>{{ r.email }}</td>
                                    <td>
                                        <span v-if="r.blokir == 'Y'" class="badge bg-success">YA</span>
                                        <span v-else class="badge bg-danger">TIDAK</span>
                                    </td>
                                    <td>
                                        <router-link
                                            :to="{ name: 'admin.users.edit', params: { id_user: r.id_user } }"
                                            class="btn btn-warning btn-sm"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </router-link>
                                        <span v-if="r.nama_role == 'admin' || r.nama_role == 'super admin'">
                                            <button type="button" disabled class="btn btn-sm btn-danger btn-sm">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </span>
                                        <span v-else>
                                            <button type="button" @click="deletePost(r.id_user, index)" class="btn btn-sm btn-danger btn-sm">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="7">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li :class="['page-item', page == 1 ? 'disabled' : '']">
                                                    <a class="page-link" href="#" tabindex="-1" @click="page--">Previous</a>
                                                </li>
                                                <li
                                                    :class="['page-item', pageNumber == page ? 'active' : '']"
                                                    v-for="pageNumber in pages.slice(page - 1, page + 5)"
                                                    @click="page = pageNumber"
                                                >
                                                    <a class="page-link" href="#">{{ pageNumber }}</a>
                                                </li>
                                                <li :class="['page-item', page < pages.length ? '' : 'disabled']">
                                                    <a class="page-link" href="#" @click="page++">Next</a>
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
            users: [],
            page: 1,
            perPage: 10,
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
            this.users = (await this.axios.get("/api/admin/users")).data.users;
        },
        deletePost(id, index) {
            this.$swal
                .fire({
                    title: "Apakah anda yakin?",
                    text: "Jika anda hapus, maka data tidak akan kembali lagi.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK",
                    cancelButtonText: "BATAL",
                })
                .then((result) => {
                    if (result.value) {
                        let uri = `/api/admin/users/destroy/${id}`;
                        this.axios
                            .delete(uri)
                            .then((response) => {
                                this.users.splice(this.users.index, 1);
                                if (response.status == 200) {
                                    this.$swal.fire({
                                        title: "Success!",
                                        text: "User deleted successfully!",
                                        icon: "success",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                } else {
                                    this.$swal.fire({
                                        title: "Error!",
                                        text: "Something wrong, can not delete user!",
                                        icon: "error",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                }
                            })
                            .catch((e) => {
                                this.$swal.fire({
                                    title: "Error!",
                                    text: "User failed to deleted!",
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
            let go = this.users.filter((item) => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every((v) => item.email.toLowerCase().includes(v));
            });
            this.searchResult = go;
            this.pages = [];
            this.setPages();
        },
        displayedUser() {
            let paginate;

            if (this.search == "") {
                paginate = this.paginate(this.users);
            } else {
                paginate = this.paginate(this.searchResult);
            }

            return paginate;
        },
        setPages() {
            let numberOfPages;

            if (this.search == "") {
                numberOfPages = Math.ceil(this.users.length / this.perPage);
            } else {
                numberOfPages = Math.ceil(this.searchResult.length / this.perPage);
            }
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(users) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return users.slice(from, to);
        },
    },
    watch: {
        users() {
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

<style scoped>
.disabled {
    pointer-events: none;
    opacity: 0.65;
}
</style>
