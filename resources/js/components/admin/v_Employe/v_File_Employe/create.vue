<template>
<div>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Unggah Berkas</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">Unggah Berkas</li>
                        <li class="breadcrumb-item active">Create</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="card card-primary shadow-sm">
        <div class="card-header">
            <h3 class="card-title">Employee Form</h3>
        </div>

        <form class="form-horizontal" @submit.prevent="createDatas">
            <div class="card-body form-background">
                <!-- KTP File Upload -->
                <div class="form-group" :class="{ 'has-error': errors.ktp }">
                    <label class="form-label">KTP (PDF):</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" @change="onFileChange($event, 'ktp')" accept="application/pdf" id="ktpFile" />
                        <label class="custom-file-label" for="ktpFile">{{ employe.ktp?.name || 'Unggah Berkas' }}</label>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm mt-2" @click="removeFile('ktp')" v-if="employe.ktp">
                        Hapus Berkas
                    </button>
                    <span v-if="errors.ktp" class="help-block">{{ errors.ktp[0] }}</span>
                </div>

                <!-- Surat Perjanjian File Upload -->
                <div class="form-group" :class="{ 'has-error': errors.surat_perjanjian }">
                    <label class="form-label">Surat Perjanjian (PDF):</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" @change="onFileChange($event, 'surat_perjanjian')" accept="application/pdf" id="suratPerjanjianFile" />
                        <label class="custom-file-label" for="suratPerjanjianFile">{{ employe.surat_perjanjian?.name || 'Unggah Berkas' }}</label>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm mt-2" @click="removeFile('surat_perjanjian')" v-if="employe.surat_perjanjian">
                        Remove File
                    </button>
                    <span v-if="errors.surat_perjanjian" class="help-block">{{ errors.surat_perjanjian[0] }}</span>
                </div>

                <!-- Ijazah File Upload -->
                <div class="form-group" :class="{ 'has-error': errors.ijazah }">
                    <label class="form-label">Ijazah (PDF):</label>
                    <div class="custom-file">
                        <input class="custom-file-input" type="file" @change="onFileChange($event, 'ijazah')" accept="application/pdf" id="ijazahFile" />
                        <label class="custom-file-label" for="ijazahFile">{{ employe.ijazah?.name || 'Unggah Berkas' }}</label>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm mt-2" @click="removeFile('ijazah')" v-if="employe.ijazah">
                        Remove File
                    </button>
                    <span v-if="errors.ijazah" class="help-block">{{ errors.ijazah[0] }}</span>
                </div>

                <!-- Action Buttons -->
                <div class="form-footer text-center mt-4">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" class="ml-3 btn btn-secondary" @click.prevent="onCancel">Cancel</button>
                </div>
            </div>
        </form>

    </div>
</div>
</template>

  
<style>
/* Loader Styling */
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    height: 100vh;
}

.form-background {
    position: relative;
    padding: 30px;
    border-radius: 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 254, 254, 0.955);
    /* Slight transparency */
    opacity: 0.99;
    overflow: hidden;
}

.form-background::before {
    content: '';
    position: absolute;
    top: -860px;
    /* Raised much further */
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/danoya.jpg');
    /* Background image */
    background-size: cover;
    /* Ensure it covers the container */
    background-position: center center;
    /* Center the image */
    background-repeat: no-repeat;
    /* Prevent image repetition */
    opacity: 0.3;
    /* Lower opacity for better content visibility */
    z-index: -1;
    /* Place image behind the form content */
    border-radius: 12px;
}

.form-label {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    display: block;
}

.custom-file-label {
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 5px;
    padding: 8px 12px;
    color: #495057;
    cursor: pointer;
    display: inline-block;
    /* Align properly with file input */
    transition: background-color 0.3s ease;
    /* Smooth transition on hover */
}

.custom-file-input:focus+.custom-file-label {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.6);
}

.custom-file-label:hover {
    background-color: #e9ecef;
}

.card-header {
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    border-radius: 12px 12px 0 0;
}

.card-footer {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 0 0 12px 12px;
}

.btn-primary {
    background-color: #007bff;
    border: none;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.btn-secondary {
    background-color: #6c757d;
    border: none;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-secondary:hover {
    background-color: #545b62;
}

.help-block {
    font-size: 12px;
    color: red;
}

.breadcrumb {
    background-color: transparent;
}

.breadcrumb-item a {
    color: #007bff;
}

.breadcrumb-item.active {
    color: #6c757d;
}

.form-footer {
    display: flex;
    /* Use flexbox for layout */
    justify-content: center;
    /* Center the buttons horizontally */
    align-items: center;
    /* Vertically align the buttons */
    margin-top: 20px;
}

.form-footer button {
    width: auto;
    /* Allow buttons to be naturally sized */
    padding: 10px 20px;
    /* Adjust padding to control the button size */
    margin: 0 10px;
    /* Add space between the buttons */
}

@media (max-width: 768px) {
    .form-footer {
        flex-direction: row;
        /* Ensure buttons are in a row on smaller screens */
    }

    .form-footer button {
        padding: 8px 15px;
        /* Slightly smaller padding for smaller screens */
    }
}
</style>

    
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
    components: {
        VueCropper,
    },
    data() {
        return {
            employe: {
                id_karyawan: "",
                ktp: "",
                ijazah: "",
                surat_perjanjian: "",
            },
            errors: {},
            img: "",
            fileSizeError: "",
            isLoading: true, // Status loading
        };
    },
    mounted() {
        this.selectedIDKaryawan = sessionStorage.getItem("selectedIDKaryawan");

    },
    methods: {
        onFileChange(event, fieldName) {
            const file = event.target.files[0];

            // Check if the file is a PDF and size is less than 4MB
            if (file && file.type === 'application/pdf') {
                if (file.size <= 4 * 1024 * 1024) { // 4MB in bytes
                    this.employe[fieldName] = file;
                    this.errors[fieldName] = null; // Clear any previous error messages
                } else {
                    this.errors[fieldName] = ['File size cannot be greater than 4MB'];
                    this.employe[fieldName] = null; // Clear the file field
                }
            } else {
                this.errors[fieldName] = ['Please upload a valid PDF file'];
                this.employe[fieldName] = null; // Clear the file field
            }
        },

        onCancel() {
            console.log("CANCEL SUBMIT");
            this.$router.push({
                name: "admin.karyawan"
            });
        },
        async createDatas(e) {
            e.preventDefault(); // Mencegah form submit default behavior

            const formData = new FormData();
            this.employe.id_karyawan = sessionStorage.getItem("selectedIDKaryawan");
            formData.append('id_karyawan', this.employe.id_karyawan);
            formData.append('ktp', this.employe.ktp);
            formData.append('ijazah', this.employe.ijazah);
            formData.append('surat_perjanjian', this.employe.surat_perjanjian);

            try {
                const response = await axios.post('/api/admin/karyawan/berkas/simpan', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Success: Show SweetAlert and redirect to the admin.karyawan page
                this.$swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Redirect to the "admin.karyawan" page after confirming the alert
                    this.$router.push({
                        name: 'admin.karyawan'
                    });
                });

            } catch (error) {
                console.error(error.response.data);

                // If there's an error, show SweetAlert with error message
                this.$swal.fire({
                    title: 'Error!',
                    text: 'Failed to create data. Please try again.',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'OK',
                });
            }
        },

        removeFile(fieldName) {
            this.employe[fieldName] = null; // Hapus data file
            const inputElement = document.getElementById(`${fieldName}File`);
            if (inputElement) {
                inputElement.value = ""; // Reset input file
            }
        },

    },
};
</script>
