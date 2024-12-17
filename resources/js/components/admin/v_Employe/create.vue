<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Formulir Data Karyawan</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item">Formulir Data Karyawan</li>
                            <li class="breadcrumb-item active">Create</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Buat Data</h3>
            </div>
    
            <form class="form-horizontal" @submit.prevent="createDatas">
                <div class="card-body form-background container-fluid" style="padding: 20px;">
                    <div class="row justify-content-center">
                        <!-- Kolom pertama -->
                        <div class="col-lg-5 col-md-6 col-sm-12">
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.nama_lengkap }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">NAMA LENGKAP</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Nama Lengkap" v-model="employe.nama_lengkap" />
                                    <span v-if="errors.nama_lengkap" class="help-block">{{ errors.nama_lengkap[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.tempat_lahir }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">TEMPAT LAHIR</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Tempat Lahir" v-model="employe.tempat_lahir" />
                                    <span v-if="errors.tempat_lahir" class="help-block">{{ errors.tempat_lahir[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.alamat_domisili }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">ALAMAT DOMISILI</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Alamat Domisili" v-model="employe.alamat_domisili" />
                                    <span v-if="errors.alamat_domisili" class="help-block">{{ errors.alamat_domisili[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.jenis_kelamin }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">JENIS KELAMIN</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.jenis_kelamin" class="form-control">
                                        <option v-for="jenis_kelamin in jeniskelaminOptions" :key="jenis_kelamin" :value="jenis_kelamin">{{ jenis_kelamin }}</option>
                                    </select>
                                    <span v-if="errors.jenis_kelamin" class="help-block">{{ errors.jenis_kelamin[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.email }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">EMAIL</label>
                                <div class="col-sm-8">
                                    <input type="email" class="form-control" placeholder="Email" v-model="employe.email" />
                                    <span v-if="errors.email" class="help-block">{{ errors.email[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.npwp }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">NPWP</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="NPWP" v-model="employe.npwp" @input="formatNPWP" />
                                    <span v-if="errors.npwp" class="help-block">{{ errors.npwp[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.jabatan }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">JABATAN</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.jabatan" class="form-control">
                                        <option v-for="jabatan in jabatanOptions" :key="jabatan" :value="jabatan">{{ jabatan }}</option>
                                    </select>
                                    <span v-if="errors.jabatan" class="help-block">{{ errors.jabatan[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.tanggal_masuk }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">TANGGAL MASUK</label>
                                <div class="col-sm-8">
                                    <input type="date" class="form-control" v-model="employe.tanggal_masuk" />
                                    <span v-if="errors.tanggal_masuk" class="help-block">{{ errors.tanggal_masuk[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.tanggal_kontrak }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">MULAI KONTRAK</label>
                                <div class="col-sm-8">
                                    <input type="date" class="form-control" v-model="employe.tanggal_kontrak" />
                                    <span v-if="errors.tanggal_kontrak" class="help-block">{{ errors.tanggal_kontrak[0] }}</span>
                                </div>
                            </div>
                        </div>
    
                        <!-- Kolom kedua -->
                        <div class="col-lg-5 col-md-6 col-sm-12">
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.nik }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">NIK</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="NIK" v-model="employe.nik" />
                                    <span v-if="errors.nik" class="help-block">{{ errors.nik[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.tanggal_lahir }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">TANGGAL LAHIR</label>
                                <div class="col-sm-8">
                                    <input type="date" class="form-control" v-model="employe.tanggal_lahir" />
                                    <span v-if="errors.tanggal_lahir" class="help-block">{{ errors.tanggal_lahir[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.nomor_hp }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">NOMOR HP</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder="Nomor HP" v-model="employe.nomor_hp" />
                                    <span v-if="errors.nomor_hp" class="help-block">{{ errors.nomor_hp[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.agama }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">AGAMA</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.agama" class="form-control">
                                        <option v-for="agama in agamaOptions" :key="agama" :value="agama">{{ agama }}</option>
                                    </select>
                                    <span v-if="errors.agama" class="help-block">{{ errors.agama[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.status }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">STATUS PEKERJAAN</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.status" class="form-control">
                                        <option v-for="status in statusOptions" :key="status" :value="status">{{ status }}</option>
                                    </select>
                                    <span v-if="errors.status" class="help-block">{{ errors.status[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.pendidikan }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">PENDIDIKAN</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.pendidikan" class="form-control">
                                        <option v-for="pendidikan in pendidikanOptions" :key="pendidikan" :value="pendidikan">{{ pendidikan }}</option>
                                    </select>
                                    <span v-if="errors.pendidikan" class="help-block">{{ errors.pendidikan[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.departemen }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">DEPARTEMEN</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.departemen" class="form-control">
                                        <option v-for="departemen in departemenOptions" :key="departemen" :value="departemen">{{ departemen }}</option>
                                    </select>
                                    <span v-if="errors.departemen" class="help-block">{{ errors.departemen[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.aktif_pensiun }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">STATUS PEGAWAI</label>
                                <div class="col-sm-8">
                                    <select v-model="employe.aktif_pensiun" class="form-control">
                                        <option v-for="aktif_pensiun in aktifpensiunOptions" :key="aktif_pensiun" :value="aktif_pensiun">{{ aktif_pensiun }}</option>
                                    </select>
                                    <span v-if="errors.aktif_pensiun" class="help-block">{{ errors.aktif_pensiun[0] }}</span>
                                </div>
                            </div>
    
                            <div class="form-group row mb-3" :class="{ 'has-error': errors.tanggal_akhir_kontrak }">
                                <label class="col-sm-4 col-form-label text-end" style="font-size: 14px;font-weight: bold; color: #333;">AKHIR KONTRAK</label>
                                <div class="col-sm-8">
                                    <input type="date" class="form-control" v-model="employe.tanggal_akhir_kontrak" />
                                    <span v-if="errors.tanggal_akhir_kontrak" class="help-block">{{ errors.tanggal_akhir_kontrak[0] }}</span>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </div>
    
                <div class="card-footer text-center">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-secondary" @click.prevent="onCancel">Cancel</button>
                </div>
            </form>
    
        </div>
    </div>
    </template>
    
    <style>
    .form-background {
        position: relative;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.925);
        /* Transparansi latar belakang form */
    }
    
    .form-background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/images/danoya.jpg');
        /* Path gambar */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.4;
        /* Sesuaikan nilai ini untuk mengatur transparansi gambar */
        z-index: -1;
        /* Agar berada di belakang konten form */
        border-radius: 8px;
        /* Mengikuti bentuk form */
    }
    
    input,
    label,
    button {
        position: relative;
        z-index: 1;
        /* Pastikan elemen ini berada di atas gambar */
    }
    
    .card-body {
        position: relative;
        z-index: 1;
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
                    ktp: "",
                    ijazah: "",
                    surat_perjanjian: "",
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
            onFileChange(event, fieldName) {
                this.employe[fieldName] = event.target.files[0];
            },
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
                    name: "admin.karyawan"
                });
            },
            async createDatas(e) {
                e.preventDefault(); // Mencegah form submit default behavior
    
                const formData = new FormData();
                formData.append('nama_lengkap', this.employe.nama_lengkap);
                formData.append('nik', this.employe.nik);
                formData.append('tanggal_lahir', this.employe.tanggal_lahir);
                formData.append('tempat_lahir', this.employe.tempat_lahir);
                formData.append('alamat_domisili', this.employe.alamat_domisili);
                formData.append('email', this.employe.email);
                formData.append('nomor_hp', this.employe.nomor_hp);
                formData.append('npwp', this.employe.npwp);
                formData.append('jabatan', this.employe.jabatan);
                formData.append('departemen', this.employe.departemen);
                formData.append('tanggal_masuk', this.employe.tanggal_masuk);
                formData.append('tanggal_kontrak', this.employe.tanggal_kontrak);
                formData.append('tanggal_akhir_kontrak', this.employe.tanggal_akhir_kontrak);
                formData.append('status', this.employe.status);
                formData.append('agama', this.employe.agama);
                formData.append('pendidikan', this.employe.pendidikan);
                formData.append('aktif_pensiun', this.employe.aktif_pensiun);
                formData.append('jenis_kelamin', this.employe.jenis_kelamin);
    
                try {
                    const response = await axios.post('/api/admin/karyawan/simpan', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
    
                    // Success: Show SweetAlert and redirect to the admin.karyawan page
                    this.$swal.fire({
                        title: 'Sukses!',
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
                        title: 'Gagal!',
                        text: 'Gagal!',
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonText: 'OK',
                    });
                }
            },
    
        },
    };
    </script>
    