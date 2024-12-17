<template>
    <div class="modern-form-wrapper">
        <div class="card-modern">
            <div class="card-header-modern">
                <h3 class="card-title-modern">Formulir Karyawan</h3>
            </div>
    
            <form class="form-horizontal-modern">
                <div class="card-body-modern container-fluid">
                    <form-wizard @on-complete="createDatas" title="" subtitle="" ref="wizard" shape="circle" color="#007bff">
                        <tab-content title="Langkah 1">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <!-- NIK -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.nik }">
                                        <label>NIK</label>
                                        <input type="text" class="form-control-modern" placeholder="NIK" v-model="employe.nik" />
                                        <span v-if="errors.nik" class="help-block">{{ errors.nik[0] }}</span>
                                    </div>
    
                                    <!-- Alamat Domisili -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.alamat_domisili }">
                                        <label>Alamat Domisili</label>
                                        <input type="text" class="form-control-modern" placeholder="Alamat Domisili" v-model="employe.alamat_domisili" />
                                        <span v-if="errors.alamat_domisili" class="help-block">{{ errors.alamat_domisili[0] }}</span>
                                    </div>
    
                                    <!-- Jenis Kelamin -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.jenis_kelamin }">
                                        <label>Jenis Kelamin</label>
                                        <select v-model="employe.jenis_kelamin" class="form-control-modern">
                                            <option v-for="jenis_kelamin in jeniskelaminOptions" :key="jenis_kelamin" :value="jenis_kelamin">{{ jenis_kelamin }}</option>
                                        </select>
                                        <span v-if="errors.jenis_kelamin" class="help-block">{{ errors.jenis_kelamin[0] }}</span>
                                    </div>
    
                                    <!-- Tempat Lahir -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.tempat_lahir }">
                                        <label>Tempat Lahir</label>
                                        <input type="text" class="form-control-modern" placeholder="Tempat Lahir" v-model="employe.tempat_lahir" />
                                        <span v-if="errors.tempat_lahir" class="help-block">{{ errors.tempat_lahir[0] }}</span>
                                    </div>
    
                                    <!-- Tanggal Lahir -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.tanggal_lahir }">
                                        <label>Tanggal Lahir</label>
                                        <input type="date" class="form-control-modern" v-model="employe.tanggal_lahir" />
                                        <span v-if="errors.tanggal_lahir" class="help-block">{{ errors.tanggal_lahir[0] }}</span>
                                    </div>
                                </div>
    
                                <div class="col-lg-6 col-md-6 col-sm-12">
    
                                    <!-- Nama Lengkap -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.nama_lengkap }">
                                        <label>Nama Lengkap</label>
                                        <input type="text" class="form-control-modern" placeholder="Nama Lengkap" v-model="employe.nama_lengkap" />
                                        <span v-if="errors.nama_lengkap" class="help-block">{{ errors.nama_lengkap[0] }}</span>
                                    </div>
    
                                    <!-- Nomor HP -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.nomor_hp }">
                                        <label>Nomor HP</label>
                                        <input type="text" class="form-control-modern" placeholder="Nomor HP" v-model="employe.nomor_hp" />
                                        <span v-if="errors.nomor_hp" class="help-block">{{ errors.nomor_hp[0] }}</span>
                                    </div>
    
                                    <!-- Agama -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.agama }">
                                        <label>Agama</label>
                                        <select v-model="employe.agama" class="form-control-modern">
                                            <option v-for="agama in agamaOptions" :key="agama" :value="agama">{{ agama }}</option>
                                        </select>
                                        <span v-if="errors.agama" class="help-block">{{ errors.agama[0] }}</span>
                                    </div>
    
                                    <!-- Pendidikan -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.pendidikan }">
                                        <label>Pendidikan</label>
                                        <select v-model="employe.pendidikan" class="form-control-modern">
                                            <option v-for="pendidikan in pendidikanOptions" :key="pendidikan" :value="pendidikan">{{ pendidikan }}</option>
                                        </select>
                                        <span v-if="errors.pendidikan" class="help-block">{{ errors.pendidikan[0] }}</span>
                                    </div>
    
                                    <!-- Email -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.email }">
                                        <label>Email</label>
                                        <input type="email" class="form-control-modern" placeholder="Email" v-model="employe.email" />
                                        <span v-if="errors.email" class="help-block">{{ errors.email[0] }}</span>
                                    </div>
                                </div>
                            </div>
                        </tab-content>
    
                        <tab-content title="Langkah 2">
                            <div class="small text-danger font-weight-bold mb-4 text-center" style="font-size: 0.90em; margin: 0 auto; max-width: 600px;">
                                Silakan tanyakan kepada <u><b>HRD</b></u> jika ada pertanyaan yang ingin diajukan.
                            </div>
    
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <!-- NPWP -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.npwp }">
                                        <label>NPWP</label>
                                        <input type="text" class="form-control-modern" placeholder="NPWP" v-model="employe.npwp" @input="formatNPWP" />
                                        <span v-if="errors.npwp" class="help-block">{{ errors.npwp[0] }}</span>
                                    </div>
    
                                    <!-- Jabatan -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.jabatan }">
                                        <label>Jabatan</label>
                                        <select v-model="employe.jabatan" class="form-control-modern">
                                            <option v-for="jabatan in jabatanOptions" :key="jabatan" :value="jabatan">{{ jabatan }}</option>
                                        </select>
                                        <span v-if="errors.jabatan" class="help-block">{{ errors.jabatan[0] }}</span>
                                    </div>
    
                                    <!-- Departemen -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.departemen }">
                                        <label>Departemen</label>
                                        <select v-model="employe.departemen" class="form-control-modern">
                                            <option v-for="departemen in departemenOptions" :key="departemen" :value="departemen">{{ departemen }}</option>
                                        </select>
                                        <span v-if="errors.departemen" class="help-block">{{ errors.departemen[0] }}</span>
                                    </div>
                                </div>
    
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <!-- Tanggal Masuk -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.tanggal_masuk }">
                                        <label>Tanggal Masuk</label>
                                        <input type="date" class="form-control-modern" v-model="employe.tanggal_masuk" />
                                        <span v-if="errors.tanggal_masuk" class="help-block">{{ errors.tanggal_masuk[0] }}</span>
                                    </div>
    
                                    <!-- Tanggal Kontrak -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.tanggal_kontrak }">
                                        <label>Mulai Kontrak</label>
                                        <input type="date" class="form-control-modern" v-model="employe.tanggal_kontrak" />
                                        <span v-if="errors.tanggal_kontrak" class="help-block">{{ errors.tanggal_kontrak[0] }}</span>
                                    </div>
    
                                    <!-- Status Pekerjaan -->
                                    <div class="form-group-modern" :class="{ 'has-error': errors.status }">
                                        <label>Status Pekerjaan</label>
                                        <select v-model="employe.status" class="form-control-modern">
                                            <option v-for="status in statusOptions" :key="status" :value="status">{{ status }}</option>
                                        </select>
                                        <span v-if="errors.status" class="help-block">{{ errors.status[0] }}</span>
                                    </div>
                                </div>
                            </div>
                        </tab-content>
    
                        <template slot="footer" slot-scope="{ activeTabIndex, isLastStep, nextTab, prevTab }">
                            <div class="wizard-footer-modern">
                                <button v-if="activeTabIndex > 0" @click="prevTab" type="button" class="btn btn-outline-primary-modern">Kembali</button>
                                <button v-if="!isLastStep" @click="nextTab" type="button" class="btn btn-primary-modern">Berikutnya</button>
                                <button v-else type="button" @click="createDatas" class="btn btn-primary-modern">Simpan</button>
                            </div>
                        </template>
                    </form-wizard>
                </div>
            </form>
        </div>
    </div>
    </template>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    .modern-form-wrapper {
        background-image: url('/images/danoya.jpg');
        background-size: cover;
        background-position: center;
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    
    .card-modern {
        background: rgba(255, 255, 255, 0.85);
        /* Transparent effect */
        border-radius: 15px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 900px;
        width: 100%;
    }
    
    .card-header-modern {
        background-color: rgba(0, 123, 255, 0.9);
        border-radius: 15px 15px 15px 15px;
        padding: 20px;
        text-align: center;
        font-family: 'Dancing Script', cursive;
    }
    
    .card-title-modern {
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
    }
    
    .form-horizontal-modern {
        margin-top: 20px;
    }
    
    .form-group-modern {
        margin-bottom: 20px;
    }
    
    .form-control-modern {
        display: block;
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        color: #495057;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: 10px;
        transition: border-color 0.3s, box-shadow 0.3s;
    }
    
    .form-control-modern:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    
    .row {
        margin-left: -10px;
        margin-right: -10px;
    }
    
    .col-lg-6,
    .col-md-6,
    .col-sm-12 {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .btn-primary-modern,
    .btn-outline-primary-modern {
        font-size: 1.1rem;
        padding: 10px 30px;
        border-radius: 12px;
        transition: background-color 0.3s, box-shadow 0.3s;
    }
    
    .btn-primary-modern {
        background-color: #007bff;
        color: white;
    }
    
    .btn-primary-modern:hover {
        background-color: #0056b3;
    }
    
    .btn-outline-primary-modern {
        background-color: transparent;
        border: 2px solid #007bff;
        color: #007bff;
    }
    
    .btn-outline-primary-modern:hover {
        background-color: #007bff;
        color: white;
    }
    
    .wizard-footer-modern {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }
    
    .help-block {
        color: red;
        font-size: 0.875rem;
    }
    </style>
    
    <script>
    import VueCropper from "vue-cropperjs";
    import "cropperjs/dist/cropper.css";
    import {
        FormWizard,
        TabContent
    } from "vue-form-wizard";
    import "vue-form-wizard/dist/vue-form-wizard.min.css";
    
    export default {
        components: {
            VueCropper,
            FormWizard,
        },
        data() {
            return {
                employe: {
                    nama_lengkap: "",
                    nik: "",
                    tanggal_lahir: "",
                    tempat_lahir: "",
                    alamat_domisili: "",
                    email: "",
                    nomor_hp: "",
                    npwp: "",
                    jabatan: "",
                    departemen: "",
                    tanggal_masuk: "",
                    tanggal_kontrak: "",
                    tanggal_akhir_kontrak: "",
                    status: "",
                    agama: "",
                    pendidikan: "",
                    aktif_pensiun: "",
                    jenis_kelamin: "",
                },
                errors: {},
                statusOptions: [],
                jabatanOptions: [],
                pendidikanOptions: [],
                jeniskelaminOptions: [],
                departemenOptions: [],
                aktifpensiunOptions: [],
                agamaOptions: [],
                img: "",
                fileSizeError: "",
            };
        },
        mounted() {
            this.getStatusOptions();
            this.getJabatanOptions();
            this.getPendidikanOptions();
            this.getJenisKelaminOptions();
            this.getDepartemenOptions();
            this.getAktifPensiunOptions();
            this.getAgamaOptions();
        },
        methods: {
            formatNPWP() {
                // Membersihkan input dari karakter non-angka
                let cleaned = this.employe.npwp.replace(/\D/g, '');
    
                // Menerapkan format "40.742.41.1-8541.000"
                if (cleaned.length > 2) cleaned = cleaned.slice(0, 2) + '.' + cleaned.slice(2);
                if (cleaned.length > 6) cleaned = cleaned.slice(0, 6) + '.' + cleaned.slice(6);
                if (cleaned.length > 10) cleaned = cleaned.slice(0, 10) + '.' + cleaned.slice(10);
                if (cleaned.length > 12) cleaned = cleaned.slice(0, 12) + '-' + cleaned.slice(12);
                if (cleaned.length > 16) cleaned = cleaned.slice(0, 16) + '.' + cleaned.slice(16);
    
                // Set kembali value npwp dengan format baru
                this.employe.npwp = cleaned;
            },
            cleanNPWPFormat(npwp) {
                return npwp.replace(/\D/g, ''); // Menghapus titik dan tanda strip
            },
            getStatusOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.statusOptions = response.data.statusOptions;
                });
            },
            getJabatanOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.jabatanOptions = response.data.jabatanOptions;
                });
            },
            getPendidikanOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.pendidikanOptions = response.data.pendidikanOptions;
                });
            },
            getJenisKelaminOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.jeniskelaminOptions = response.data.jeniskelaminOptions;
                });
            },
            getDepartemenOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.departemenOptions = response.data.departemenOptions;
                });
            },
            getAktifPensiunOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.aktifpensiunOptions = response.data.aktifpensiunOptions;
                });
            },
            getAgamaOptions() {
                axios.get('/api/admin/karyawan').then((response) => {
                    this.agamaOptions = response.data.agamaOptions;
                });
            },
            setImage(e) {
                const file = e.target.files[0];
                if (file.type.indexOf("image/") === -1) {
                    alert("Please select an image file");
                    return;
                }
                if (file.size > 2 * 1024 * 1024) {
                    this.fileSizeError = "File size cannot exceed 2MB";
                    return;
                } else {
                    this.fileSizeError = "";
                }
                if (typeof FileReader === "function") {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this.employe.photo_tour_destination = event.target.result;
                        this.$refs.cropper.replace(event.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Sorry, FileReader API not supported");
                }
                console.log(e);
            },
            cropImage() {
                this.img = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            showFileChooser() {
                this.$refs.input.click();
            },
            onCancel() {
                console.log("CANCEL SUBMIT");
                this.$router.push({
                    name: "admin.employe"
                });
            },
            createDatas(e) {
                let uri = "/api/admin/karyawan/simpan";
                this.axios
                    .post(uri, {
                        nama_lengkap: this.employe.nama_lengkap,
                        nik: this.employe.nik,
                        tanggal_lahir: this.employe.tanggal_lahir,
                        tempat_lahir: this.employe.tempat_lahir,
                        alamat_domisili: this.employe.alamat_domisili,
                        email: this.employe.email,
                        nomor_hp: this.employe.nomor_hp,
                        npwp: this.employe.npwp,
                        jabatan: this.employe.jabatan,
                        departemen: this.employe.departemen,
                        tanggal_masuk: this.employe.tanggal_masuk,
                        tanggal_kontrak: this.employe.tanggal_kontrak,
                        tanggal_akhir_kontrak: this.employe.tanggal_akhir_kontrak,
                        status: this.employe.status,
                        agama: this.employe.agama,
                        pendidikan: this.employe.pendidikan,
                        aktif_pensiun: this.employe.aktif_pensiun,
                        jenis_kelamin: this.employe.jenis_kelamin,
                    })
                    .then((response) => {
                        this.$swal.fire({
                            title: "Success",
                            text: "Data Berhasil Disimpan",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 1000,
                        });
    
                        setTimeout(() => {
                            window.location.href = "/form-karyawan";
                        }, 2000);
                    })
                    .catch((e) => {
                        this.errors = e.response.data.errors || {
                            general: ["Failed to create data"]
                        };
    
                        let errorMessages = '';
                        Object.keys(this.errors).forEach(key => {
                            errorMessages += this.errors[key][0] + ' ';
                        });
    
                        this.$swal.fire({
                            title: "Error!",
                            text: errorMessages.trim(),
                            icon: "error",
                            showCancelButton: false,
                            showConfirmButton: true,
                        });
                    });
    
                e.preventDefault();
            },
        },
    };
    </script>
    