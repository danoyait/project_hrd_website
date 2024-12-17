<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Edit Roles</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item">Roles</li>
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
                <h3 class="card-title">Form Edit</h3>
            </div>
            <!-- /.card-header -->
            <div class="alert alert-danger" v-if="errors.length">
                <b>Terdapat kesalahan dalam input data:</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
            <!-- form start -->
            <form class="form-horizontal" @submit.prevent="updateRole()">
                <div class="card-body">
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label"
                            >Nama Role</label
                        >
                        <div class="col-sm-10">
                            <input
                                type="text"
                                class="form-control"
                                id="inputEmail3"
                                placeholder="Nama Role"
                                v-model="role.nama_role"
                            />
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Update
                    </button>
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
export default {
    data() {
        return {
            role: {
                nama_role: "",
            },
            errors: [],
        };
    },
    created() {
        let uriRoles = `/api/admin/roles/${this.$route.params.id_role}/edit`;
        this.axios.get(uriRoles).then((response) => {
            this.role = response.data;
            console.log(response.data);
        });
    },
    methods: {
        onCancel() {
            console.log("CANCEL SUBMIT");
            this.$router.push({ name: "admin.roles" });
        },
        updateRole(e) {
            if (this.$data.role.nama_role.length != 0) {
                let uri = `/api/admin/roles/update/${this.$route.params.id_role}`;
                this.axios.put(uri, this.role).then((response) => {
                    if (response.statusText == "OK") {
                        this.$swal.fire({
                            title: "Success",
                            text: "Role updated successfully",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 1000,
                        });
                    } else {
                        this.$swal.fire({
                            title: "Error",
                            text: "Something wrong, cant update role!",
                            icon: "error",
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 1000,
                        });
                    }
                    this.$router.push({ name: "admin.roles" });
                });
                return true;
            } else {
                this.errors.push("Nama role is require !");

                this.$swal.fire({
                    title: "Error",
                    text: "Nama role is require !",
                    icon: "error",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }

            e.preventDefault();
        },
    },
};
</script>
