<template>
<div>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Karyawan</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#" class="text-dark">#</a>
                        </li>
                        <li class="breadcrumb-item active">
                            <a href="">Karyawan</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-gradient-info d-flex justify-content-between align-items-center" style="background: #ffffff; border-bottom: 1px solid #ddd; padding: 10px 20px; border-radius: 8px;">
                    <!-- Add Employee Button -->
                    <router-link :to="{ name: 'admin.karyawan.tambah' }" class="btn btn-primary btn-sm add-button">
                        <i class="fas fa-plus mr-1"></i> Baru
                    </router-link>

                    <!-- Desktop Form Section (Non-mobile devices) -->
                    <div class="card-tools d-flex align-items-center ml-auto" v-if="!isMobile">
                        <form id="mainFormUsers" class="d-flex align-items-center">
                            <a @click.prevent="downloadExcel" class="btn bg-gradient-warning btn-sm">
                                <i class="fas fa-fw fa-download"></i> Unduh
                            </a>

                            <!-- "Upload" button is disabled after a file is uploaded -->
                            <label class="btn bg-gradient-success btn-sm mb-0 ml-2" :class="{ 'disabled': isFileUploaded }">
                                <i class="fas fa-fw fa-file-upload"></i> Unggah
                                <input type="file" ref="fileInput" accept=".xls,.xlsx" @change="handleFileUpload" style="display: none;" :disabled="isFileUploaded" />
                            </label>

                            <!-- Display selected file name -->
                            <span v-if="fileName" class="ml-2 text-muted" style="font-style: italic;">{{ fileName }}</span>

                            <!-- Submit button -->
                            <label v-if="fileName" class="btn btn-secondary btn-sm mb-0 ml-2">
                                <i class="fas fa-fw fa-file-import"></i> Kirim
                                <input type="submit" @click.prevent="saveExcelUser" style="display: none;" />
                            </label>
                        </form>
                    </div>

                    <!-- Search Section (Desktop) -->
                    <div v-if="!isMobile" class="input-group input-group-sm ml-3" style="max-width: 220px;">
                        <input type="text" id="search" @keyup="doSearch()" v-model="search" class="form-control" placeholder="Cari..." aria-label="Search" style="border-radius: 20px;">
                    </div>

                    <!-- Mobile Form Section -->
                    <div v-if="isMobile" class="d-flex flex-column align-items-center mt-1 mb-1">
                        <a @click.prevent="downloadExcel" class="btn bg-gradient-warning btn-sm mr-auto mobile-button mb-2">
                            <i class="fas fa-fw fa-download"></i> Unduh
                        </a>

                        <!-- "Upload" button is disabled after a file is uploaded -->
                        <label class="btn bg-gradient-success btn-sm mr-auto mobile-button mb-2" :class="{ 'disabled': isFileUploaded }">
                            <i class="fas fa-fw fa-file-upload"></i> Unggah
                            <input type="file" ref="fileInput" accept=".xls,.xlsx" @change="handleFileUpload" style="display: none;" :disabled="isFileUploaded" />
                        </label>

                        <!-- Display selected file name -->
                        <span v-if="fileName" class="text-muted mb-2" style="font-style: italic;">{{ fileName }}</span>

                        <!-- Submit button -->
                        <label v-if="fileName" class="btn btn-outline-primary btn-sm mr-auto mobile-button mb-2">
                            <i class="fas fa-fw fa-file-import"></i> Kirim
                            <input type="submit" @click.prevent="saveExcelUser" style="display: none;" />
                        </label>
                    </div>

                    <!-- Mobile Search Section -->
                    <div v-if="isMobile" class="input-group input-group-sm mt-2 justify-content-center" style="width: 100%; max-width: 400px; margin: 0 auto;">
                        <input type="text" id="search-mobile" @keyup="doSearch()" v-model="search" class="form-control" placeholder="Cari..." aria-label="Search" style="border-radius: 20px; width: 100%;">
                    </div>
                </div>

                <!-- Dropdown Select Inputs Section -->
                <div class="card-body bg-gradient-light">
                    <div class="button-group d-flex justify-content-center mb-3">
                        <button @click="toggleDropdown" class="btn btn-outline-secondary mx-1">
                            <i class="fas fa-filter"></i> Filter
                            <i class="fas" :class="isDropdownVisible ? 'fa-fw fa-chevron-up' : 'fa-fw fa-chevron-down'"></i>
                        </button>

                        <button @click="resetFilters" class="btn btn-outline-danger mx-1">
                            <i class="fas fa-undo"></i> Reset
                        </button>
                    </div>

                    <transition name="fade">
                        <div v-if="isDropdownVisible" class="form-group-pair d-flex flex-wrap">
                            <div class="form-group mr-2" style="flex: 1 1 48%;">
                                <label for="status">Status Pekerjaan</label>
                                <select id="status" class="form-control" v-model="selectedStatus">
                                    <option value="">Semua Status</option>
                                    <option v-for="status in statusOptions" :key="status" :value="status">
                                        {{ status }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group" style="flex: 1 1 48%;">
                                <label for="jabatan">Jabatan</label>
                                <select id="jabatan" class="form-control" v-model="selectedJabatan">
                                    <option value="">Semua Jabatan</option>
                                    <option v-for="jabatan in jabatanOptions" :key="jabatan" :value="jabatan">
                                        {{ jabatan }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group mr-2" style="flex: 1 1 48%;">
                                <label for="pendidikan">Pendidikan</label>
                                <select id="pendidikan" class="form-control" v-model="selectedPendidikan">
                                    <option value="">Semua Pendidikan</option>
                                    <option v-for="pendidikan in pendidikanOptions" :key="pendidikan" :value="pendidikan">
                                        {{ pendidikan }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group" style="flex: 1 1 48%;">
                                <label for="jeniskelamin">Jenis Kelamin</label>
                                <select id="jeniskelamin" class="form-control" v-model="selectedJenisKelamin">
                                    <option value="">Semua Jenis Kelamin</option>
                                    <option v-for="jenis_kelamin in jeniskelaminOptions" :key="jenis_kelamin" :value="jenis_kelamin">
                                        {{ jenis_kelamin }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group mr-2" style="flex: 1 1 48%;">
                                <label for="departemen">Departemen</label>
                                <select id="departemen" class="form-control" v-model="selectedDepartemen">
                                    <option value="">Semua Departemen</option>
                                    <option v-for="departemen in departemenOptions" :key="departemen" :value="departemen">
                                        {{ departemen }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group" style="flex: 1 1 48%;">
                                <label for="aktifpensiun">Status Pegawai</label>
                                <select id="aktifpensiun" class="form-control" v-model="selectedAktifPensiun">
                                    <option value="">Semua Status Pegawai</option>
                                    <option v-for="aktif_pensiun in aktifpensiunOptions" :key="aktif_pensiun" :value="aktif_pensiun">
                                        {{ aktif_pensiun }}
                                    </option>
                                </select>
                            </div>

                            <!-- Filter Tanggal -->
                            <div class="d-flex justify-content-between w-100 mb-3 flex-wrap">
                                <div class="form-group mr-2" style="flex: 1 1 48%;">
                                    <label for="tanggal_awal">Dari Tanggal</label>
                                    <input type="date" id="tanggal_awal" class="form-control" v-model="startDate">
                                </div>

                                <div class="form-group" style="flex: 1 1 48%;">
                                    <label for="tanggal_akhir">Sampai Tanggal</label>
                                    <div class="d-flex align-items-center">
                                        <input type="date" id="tanggal_akhir" class="form-control" v-model="endDate">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mr-2" style="flex: 1 1 48%;">
                                <label for="agama">Agama</label>
                                <select id="agama" class="form-control" v-model="selectedAgama">
                                    <option value="">Semua Status Agama</option>
                                    <option v-for="agama in agamaOptions" :key="agama" :value="agama">
                                        {{ agama }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="total-karyawan-container">
                    <div class="total-karyawan-card">
                        <div class="total-karyawan-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 1.5c-3.5 0-10.5 1.8-10.5 5.3V21h21v-2.3c0-3.5-7-5.2-10.5-5.2z" />
                            </svg>
                        </div>
                        <div class="total-karyawan-content">
                            <p class="total-karyawan-label">Total Karyawan</p>
                            <p class="total-karyawan-count">{{ filteredResultsCount }}</p>
                        </div>
                    </div>
                </div>

                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th style="min-width: 150px;">NAMA LENGKAP</th>
                                <th>NIK</th>
                                <th style="min-width: 120px;">TANGGAL LAHIR</th>
                                <th style="min-width: 120px;">TEMPAT LAHIR</th>
                                <th style="min-width: 200px;">ALAMAT DOMISILI</th>
                                <th>EMAIL</th>
                                <th>Nomor HP</th>
                                <th>NPWP</th>
                                <th style="min-width: 120px;">JABATAN</th>
                                <th>DEPARTEMEN</th>
                                <th style="min-width: 120px;">TANGGAL MASUK</th>
                                <th style="min-width: 120px;">TANGGAL AWAL</th>
                                <th style="min-width: 120px;">TANGGAL AKHIR</th>
                                <th>STATUS PEKERJAAN</th>
                                <th>AGAMA</th>
                                <th>PENDIDIKAN</th>
                                <th>STATUS PEGAWAI</th>
                                <th>JENIS KELAMIN</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(r, index) in filteredResults" :key="r.id_karyawan" class="text-center" @click="tampilData(r.id_karyawan, r.nama_lengkap)" style="cursor: pointer;">
                                <td>{{ (page - 1) * perPage + index + 1 }}</td>
                                <td>{{ r.nama_lengkap }}</td>
                                <td>{{ r.nik }}</td>
                                <td>{{ formatDate(r.tanggal_lahir) }}</td>
                                <td>{{ r.tempat_lahir }}</td>
                                <td style="white-space: normal; word-wrap: break-word;">{{ r.alamat_domisili }}</td>
                                <td>{{ r.email }}</td>
                                <td>{{ r.nomor_hp }}</td>
                                <td>{{ r.npwp }}</td>
                                <td>{{ r.jabatan }}</td>
                                <td>{{ r.departemen }}</td>
                                <td>{{ formatDate(r.tanggal_masuk) }}</td>
                                <td>{{ formatDate(r.tanggal_kontrak) }}</td>
                                <td :class="{
        'highlight-red': r.aktif_pensiun === 'non-aktif',
        'highlight-black': r.aktif_pensiun !== 'non-aktif' && r.status === 'Staff',
        'highlight-blue': r.aktif_pensiun !== 'non-aktif' && r.status === 'Kontrak',
        'highlight-yellow': r.aktif_pensiun !== 'non-aktif' && r.status === 'DW'
      }">{{ formatDate(r.tanggal_akhir_kontrak) }}</td>
                                <td>{{ r.status }}</td>
                                <td>{{ r.agama }}</td>
                                <td>{{ r.pendidikan }}</td>
                                <td>{{ r.aktif_pensiun }}</td>
                                <td>{{ r.jenis_kelamin }}</td>
                                <td>
                                    <button type="button" @click.stop="deletePost(r.id_karyawan, index)" class="btn btn-sm btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="card-footer bg-gradient-muted">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center mt-2">
                            <!-- Tombol Sebelumnya -->
                            <li :class="['page-item', page == 1 ? 'disabled' : '']">
                                <a class="page-link" href="#" tabindex="-1" @click.prevent="page--">
                                    <i class="fas fa-chevron-left"></i>
                                </a>
                            </li>

                            <!-- Menampilkan Nomor Halaman -->
                            <li v-for="pageNumber in displayedPages" :key="pageNumber" :class="['page-item', pageNumber === page ? 'active' : '']">
                                <template v-if="pageNumber === '...'">
                                    <!-- Titik tidak bisa diklik -->
                                    <span class="page-link">...</span>
                                </template>
                                <template v-else>
                                    <!-- Nomor halaman bisa diklik -->
                                    <a class="page-link" href="#" @click.prevent="page = pageNumber">{{ pageNumber }}</a>
                                </template>
                            </li>

                            <!-- Tombol Berikutnya -->
                            <li :class="['page-item', page == totalPages ? 'disabled' : '']">
                                <a class="page-link" href="#" @click.prevent="page++">
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Modal Popup -->
                <div class="modal-custom" id="modals" tabindex="-1" aria-labelledby="modalsLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <!-- Header Modal -->
                            <div class="modal-header">
                                <button class="btn-back" @click="handleBack" v-if="!isModalTampilData">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h4 class="modal-title" id="modalsLabel" v-html="truncatedNamaLengkap"></h4>
                                <button class="btn btn-primary btn-sm add-file-btn" @click="goToCreatePage" v-if="isModalBerkas">
                                    Add File
                                </button>
                            </div>

                            <!-- Body Modal -->
                            <div class="modal-body">
                                <div class="table-wrapper">
                                    <!-- Opsi Pilihan dengan Desain Flat dan Dinamis -->
                                    <div v-if="isModalTampilData" class="options-container">
                                        <div class="option-card" @click="lihatBerkas(selectedIDKaryawan, selectedNamaLengkap)">
                                            <i class="fas fa-file-alt icon"></i>
                                            <div class="option-text">
                                                <h3>Lihat Berkas</h3>
                                                <p>Periksa dokumen terkait karyawan.</p>
                                            </div>
                                        </div>
                                        <div class="option-card" @click="goToEditPage(selectedIDKaryawan)">
                                            <i class="fas fa-pencil-alt icon"></i>
                                            <div class="option-text">
                                                <h3>Ubah Data</h3>
                                                <p>Modifikasi data karyawan yang sudah ada.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="berkas-list" v-if="isModalBerkas">
                                        <div v-for="(file, index) in berkasData" :key="index" class="berkas-item">
                                            <div class="berkas-links">
                                                <a :href="'/storage/' + file.path.replace('public/', '')" target="_blank" class="btn-berkas">
                                                    <i v-if="file.type === 'ktp'" class="fas fa-id-card"></i>
                                                    <i v-else-if="file.type === 'ijazah'" class="fas fa-graduation-cap"></i>
                                                    <i v-else-if="file.type === 'surat_perjanjian'" class="fas fa-file-signature"></i>
                                                    {{ file.displayName }}
                                                </a>
                                            </div>
                                            <button @click="hapusBerkas(file.id, file.type, file.path, index)" class="btn-hapus">
                                                <i class="fas fa-trash-alt"></i> Hapus
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Footer Modal -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger btn-sm close-btn" data-dismiss="modal" v-if="isModalTampilData">
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

    
<style>
/* Container */
.total-karyawan-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

/* Card */
.total-karyawan-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #f4f4f4;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 240px;
    padding: 20px;
}

/* Icon */
.total-karyawan-icon {
    width: 50px;
    height: 50px;
    background: #4caf50;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: white;
}

.total-karyawan-icon svg {
    width: 30px;
    height: 30px;
}

/* Label */
.total-karyawan-label {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    color: #333;
}

/* Count */
.total-karyawan-count {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 5px 0 0;
    color: #4caf50;
}

.total-karyawan-card {
    width: 200px;
    padding: 15px;
}

.total-karyawan-icon {
    width: 40px;
    height: 40px;
}

.total-karyawan-icon svg {
    width: 25px;
    height: 25px;
}

.total-karyawan-label {
    font-size: 0.9rem;
}

.total-karyawan-count {
    font-size: 1.5rem;
}

.highlight-black {
    background-color: black;
    color: white;
    /* Teks tetap terlihat di atas warna hitam */
}

.highlight-red {
    background-color: red;
    color: white;
    /* Teks tetap terlihat di atas warna merah */
}

.highlight-blue {
    background-color: rgb(130, 218, 247);
    color: black;
    /* Teks terlihat jelas di atas warna biru muda */
}

.highlight-yellow {
    background-color: rgb(247, 247, 146);
    color: rgba(0, 0, 0, 0.877);
    /* Teks terlihat jelas di atas warna kuning muda */
}

/* Container untuk Berkas */
.berkas-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

/* Efek hover untuk kontainer berkas */
.berkas-container:hover {
    transform: translateY(-5px);
}

/* Header untuk kolom Berkas Karyawan */
.berkas-header {
    font-size: 28px;
    font-weight: 600;
    color: #1d1d1d;
    text-transform: uppercase;
    border-bottom: 3px solid #007bff;
    padding-bottom: 12px;
    margin-bottom: 25px;
}

/* Styling untuk daftar berkas */
.berkas-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 30px;
    transition: all 0.3s ease;
}

/* Styling untuk tiap berkas */
.berkas-item {
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Efek hover pada berkas */
.berkas-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Styling untuk links (tautan berkas) */
.berkas-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Styling untuk setiap tombol berkas */
.btn-berkas {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
    padding: 14px 18px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    font-weight: 500;
}

/* Hover effect pada tombol berkas */
.btn-berkas:hover {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
    transform: translateY(-2px);
}

/* Ikon di dalam tombol */
.btn-berkas i {
    margin-right: 10px;
    font-size: 18px;
}

/* Styling untuk tombol hapus */
.btn-hapus {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 12px 18px;
    font-size: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Hover effect pada tombol hapus */
.btn-hapus:hover {
    background-color: #d32f2f;
    transform: translateY(-2px);
}

/* Ikon di dalam tombol hapus */
.btn-hapus i {
    margin-right: 10px;
}

/* Container Utama */
.options-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

/* Kartu Opsi */
.option-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    position: relative;
}

.option-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Ikon */
.icon {
    font-size: 30px;
    color: #007bff;
    transition: color 0.3s ease;
}

.option-card:hover .icon {
    color: #0056b3;
}

/* Teks Opsi */
.option-text {
    display: flex;
    flex-direction: column;
}

.option-text h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    transition: color 0.3s ease;
}

.option-text p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
}

/* Efek Hover pada Teks */
.option-card:hover .option-text h3 {
    color: #007bff;
}

/* Animasi untuk Efek Hover */
.option-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 123, 255, 0.1);
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s;
}

.option-card:hover::before {
    opacity: 1;
}

/* Modal Responsif */
.modal-custom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    transition: opacity 0.3s ease-in-out;
}

.modal-custom.show {
    display: flex;
    opacity: 1;
}

.modal-dialog {
    position: relative;
    background: white;
    border-radius: 8px;
    /* Rounded corners */
    width: 100%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}

.modal-header {
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 8px;
    /* Rounded corners for top left */
    border-top-right-radius: 8px;
    /* Rounded corners for top right */
}

.modal-title {
    flex-grow: 1;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.modal-body {
    padding: 15px;
    max-height: 70vh;
    overflow-y: auto;
    border-bottom-left-radius: 8px;
    /* Rounded corners for bottom left */
    border-bottom-right-radius: 8px;
    /* Rounded corners for bottom right */
}

.table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    /* Apply rounding to the table */
    overflow: hidden;
    /* Ensure rounding applies to the entire table */
}

.table thead th {
    background-color: #f8f9fa;
    font-weight: bold;
    text-align: left;
    padding: 10px;
}

.table tbody td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.table tbody tr:hover {
    background-color: #f1f1f1;
}

.table-wrapper {
    overflow-x: auto;
    border-radius: 8px;
    /* Round the container */
}

/* Ukuran tombol di perangkat mobile */
.mobile-button {
    font-size: 0.875rem;
    /* Sesuaikan agar mirip ukuran dengan tombol Add Employee */
    padding: 5px 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

/* CSS khusus untuk memusatkan elemen pencarian dan tombol pada perangkat mobile */
.d-flex.flex-column.align-items-center.mt-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}

.page-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    color: #6c757d;
    font-weight: 500;
    border-radius: 50px;
    transition: all 0.3s ease;
    text-decoration: none;
    background-color: #f8f9fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    /* Adjusts font size for better icon alignment */
}

/* Default state for page links */
.page-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    color: #0069d9;
    /* Default text color */
    font-weight: 500;
    border-radius: 30px;
    /* Rounded corners */
    transition: all 0.3s ease-in-out;
    /* Smooth transition */
    text-decoration: none;
    background-color: #f8f9fa;
    /* Light background */
    border: 1px solid #0069d9;
    /* Default border is blue */
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    /* Soft shadow */
    font-size: 14px;
    letter-spacing: 0.3px;
}

/* Icon size for the arrows */
.page-link i {
    font-size: 16px;
    color: #0069d9;
    /* Icon color */
}

/* Hover and focus effect for normal page links and arrows */
.page-link:hover,
.page-link:focus {
    background-color: #0069d9;
    /* Blue background on hover/focus */
    color: white;
    /* White text */
    border-color: #0069d9;
    /* Blue border */
    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.2);
    /* Light shadow on hover */
    transform: scale(1.05);
    /* Slight zoom on hover */
}

/* Active state for the current page number (1, 2, 3, ...) */
.page-item.active .page-link {
    background-color: #0069d9;
    /* Blue background for active page */
    color: white;
    /* White text for active page */
    border-color: #0069d9;
    /* Blue border */
    box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
    /* Stronger shadow for active page */
}

/* Disabled state for page links */
.page-item.disabled .page-link {
    color: #adb5bd;
    /* Grey color for disabled links */
    pointer-events: none;
    /* Disable clicks on disabled items */
    box-shadow: none;
    /* No shadow for disabled items */
}

/* Styling for the first and last page links (arrows) */
.page-item .page-link:first-child,
.page-item .page-link:last-child {
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 50%;
    /* Circle shape */
    background-color: #f8f9fa;
    /* Light background for arrows */
    border-color: #0069d9;
    /* Border color remains blue */
}

/* Icon styling for arrows */
.page-item .page-link:first-child i,
.page-item .page-link:last-child i {
    font-size: 16px;
    /* Arrow icon size */
    color: #0069d9;
    /* Icon color is blue */
}

/* Active state for arrows when clicked or focused */
.page-item .page-link:first-child:focus,
.page-item .page-link:last-child:focus {
    background-color: #0069d9;
    /* Blue background for focused arrow */
    color: white;
    /* White icon */
    border-color: #0069d9;
    /* Blue border */
}

/* Ensuring clicked arrows and page numbers stay blue */
.page-item .page-link:active {
    background-color: #0069d9;
    /* Blue background when clicked */
    color: white;
    /* White text for active state */
    border-color: #0069d9;
    /* Blue border */
}

.card-header {
    background: #ffffff;
    border-bottom: 1px solid #ddd;
    padding: 10px 20px;
    border-radius: 8px;
}

.btn {
    border-radius: 20px;
    padding: 8px 15px;
    transition: background 0.3s, transform 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
}

.input-group {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.input-group input {
    border-radius: 20px 0 0 20px;
    padding: 6px;
}

.input-group-append .btn {
    border-radius: 0 20px 20px 0;
}

.table-responsive {
    overflow-x: auto;
}

.table th,
.table td {
    white-space: nowrap;
}

.custom-select {
    position: relative;
    display: inline-block;
    width: 100%;
}

.custom-select {
    width: 100%;
    padding: 0.50rem 1rem;
    padding-right: 2.5rem;
    /* Make space for the custom arrow */
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    color: #333;
    font-size: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    appearance: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

.select-container::after {
    content: '\25BC';
    /* Custom arrow using Unicode character */
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: #007bff;
    font-size: 1.25rem;
}

.custom-select:hover {
    border-color: #0056b3;
}

.custom-select:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
}

.card-body .button-group {
    max-width: 400px;
    /* Limit width of button group for a professional look */
    width: 100%;
    /* Center-align container */
}

.card-body .btn {
    flex: 1 1 auto;
    /* Allow buttons to grow/shrink evenly */
    padding: 0.5rem 1rem;
    /* Adjust padding for optimal touch target */
}

.card-body .btn i {
    margin-right: 0.3rem;
    /* Space between icon and text */
}

/* Pastikan tombol terlihat rapi */
.add-file-btn {
    padding: 6px 10px;
    /* Ukuran padding kecil */
    font-size: 12px;
    /* Ukuran font lebih kecil */
    max-width: 80px;
    /* Lebar maksimum tombol */
    text-align: center;
}

/* Modal-header dengan Flexbox */
.modal-header {
    display: flex;
    justify-content: space-between;
    /* Spasi antara title dan tombol */
    align-items: center;
    /* Sejajarkan secara vertikal */
    padding: 10px 15px;
    /* Sesuaikan padding modal */
}

.btn-back {
    background: none;
    border: none;
    font-size: 18px;
    color: #007bff;
    cursor: pointer;
    padding: 0 10px;
}

.btn-back i {
    margin-right: 5px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .berkas-container {
        padding: 20px;
    }

    .berkas-header {
        font-size: 24px;
    }

    .berkas-list {
        grid-template-columns: 1fr;
    }

    .btn-berkas {
        font-size: 14px;
        padding: 12px 16px;
    }

    .btn-hapus {
        font-size: 14px;
        padding: 10px 14px;
    }

    .options-container {
        padding: 20px;
    }

    .option-card {
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
    }

    .icon {
        font-size: 28px;
    }

    .option-text h3 {
        font-size: 16px;
    }

    .option-text p {
        font-size: 12px;
    }

    .modal-dialog {
        width: 100%;
        height: auto;
        border-radius: 8px;
        /* Ensure rounded corners persist on mobile */
        transform: none;
        top: auto;
        bottom: 0;
        left: 0;
    }

    .modal-body {
        max-height: 75vh;
    }

    .table thead th,
    .table tbody td {
        font-size: 14px;
    }

    .add-file-btn {
        padding: 4px 8px;
        /* Ukuran padding lebih kecil */
        font-size: 11px;
        /* Ukuran font lebih kecil */
        max-width: 70px;
        /* Lebar lebih kecil untuk layar kecil */
    }

    .card-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .card-body .btn {
        font-size: 14px;
        /* Smaller text for mobile */
    }

    .input-group {
        width: 100%;
        /* Full width on smaller screens */
        margin-top: 20px;
        /* Spacing above search bar */
    }

    .btn {
        width: 100%;
        /* Full width buttons on small screens */
        margin: 5px 0;
        /* Space between buttons */
    }

    .add-button {
        width: 80px;
        /* Adjust width for mobile */
    }
}

/* Mobile-friendly adjustments */
@media (max-width: 576px) {
    .page-link {
        font-size: 12px;
        /* Smaller font size for mobile */
        padding: 4px 8px;
        /* Reduced padding */
    }

    .page-item .page-link {
        padding: 4px 6px;
    }

    /* Smaller size for arrows on mobile */
    .page-item .page-link:first-child,
    .page-item .page-link:last-child {
        width: 28px;
        height: 28px;
    }

    .page-item .page-link:first-child i,
    .page-item .page-link:last-child i {
        font-size: 14px;
        /* Adjusted icon size */
    }

    .custom-select {
        font-size: 0.875rem;
    }

    .select-container::after {
        font-size: 1rem;
        right: 0.75rem;
    }
}
</style>

    
<script>
export default {
    data() {
        return {
            isDropdownVisible: false,
            employe: [],
            page: 1,
            perPage: 10,
            pages: [],
            search: "",
            searchResult: [],
            fileName: "", // Add reactive variable for file name
            isMobile: this.detectMobile(),
            statusOptions: [],
            jabatanOptions: [],
            pendidikanOptions: [],
            jeniskelaminOptions: [],
            departemenOptions: [],
            aktifpensiunOptions: [],
            agamaOptions: [],
            selectedStatus: "",
            selectedJabatan: "",
            selectedPendidikan: "",
            selectedJenisKelamin: "",
            selectedDepartemen: "",
            selectedAktifPensiun: "",
            selectedAgama: "",
            startDate: '', // Tanggal Awal
            endDate: '', // Tanggal Akhir
            isFileUploaded: false, // New variable to track if a file has been uploaded
            selectedNamaLengkap: "",
            selectedIDKaryawan: "",
            berkasData: "",
            isModalBerkas: false,
            isModalTampilData: false,
        };
    },
    async mounted() {
        try {
            await this.getData();
            await this.getStatusOptions();
            await this.getJabatanOptions();
            await this.getPendidikanOptions();
            await this.getJenisKelaminOptions();
            await this.getDepartemenOptions();
            await this.getAktifPensiunOptions();
            await this.getAgamaOptions();
            this.updateIsMobile();
            window.addEventListener("resize", this.updateIsMobile);
            window.addEventListener("orientationchange", this.updateIsMobile);
        } catch (e) {
            console.error(e);
        }
    },
    beforeDestroy() {
        // Hapus event listener saat komponen di-destroy
        window.removeEventListener("resize", this.updateIsMobile);
        window.removeEventListener("orientationchange", this.updateIsMobile);
    },
    methods: {
        hapusBerkas(id, type, path, index) {
            const confirmed = confirm("Apakah Anda yakin ingin menghapus file ini?");
            if (!confirmed) return;

            const uri = `/api/admin/karyawan/${id}/berkas/hapus`;

            this.axios
                .delete(uri, {
                    data: {
                        type
                    }
                }) // Kirim tipe file (ktp, ijazah, surat_perjanjian)
                .then((response) => {
                    if (response.data.success) {
                        // Hapus file dari daftar berkasData
                        this.berkasData.splice(index, 1);

                        // Jika data karyawan dihapus seluruhnya, kosongkan data
                        if (response.data.message.includes("data karyawan juga dihapus")) {
                            this.berkasData = [];
                            this.isModalBerkas = false;
                        }

                        alert(response.data.message);
                    } else {
                        alert("Gagal menghapus file: " + response.data.message);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert("Terjadi kesalahan saat menghapus file.");
                });
        },
        goToCreatePage() {
            var modal = document.getElementById('modals');
            if (modal) {
                $(modal).modal('hide'); // Menutup modal

                // Menghapus backdrop jika masih ada
                $('.modal-backdrop').remove(); // Hapus backdrop secara manual
                $('body').removeClass('modal-open'); // Menghapus kelas 'modal-open' yang menahan scroll
            }

            //   this.$router.push({
            //     name: "admin.karyawan.berkas.create",
            //     params: { selectedIDKaryawan: this.selectedIDKaryawan }, // Kirim data sebagai query
            //   });
            sessionStorage.setItem("selectedIDKaryawan", this.selectedIDKaryawan);
            window.location.href = "/admin/karyawan/berkas/tambah";
        },
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        resetFilters() {
            window.location.reload();
        },
        tampilData(id_karyawan, nama_lengkap) {
            this.selectedIDKaryawan = id_karyawan;
            this.selectedNamaLengkap = nama_lengkap;
            this.isModalBerkas = false;
            this.isModalTampilData = true;
            // Buka modal
            var modal = new bootstrap.Modal(document.getElementById('modals'), {
                keyboard: false
            });
            modal.show();
        },
        lihatBerkas(selectedIDKaryawan, selectedNamaLengkap) {
            this.isModalBerkas = true;
            this.isModalTampilData = false;
            let uri = `/api/admin/karyawan/${selectedIDKaryawan}/lihatBerkas`;
            this.axios.get(uri).then((response) => {
                const groupedData = response.data;
                this.berkasData = []; // Kosongkan data sebelumnya

                // Tanggal sekarang untuk penamaan file
                const currentDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-"); // Format: DD-MM-YYYY

                // Ubah data menjadi satu-satu dengan format nama file
                groupedData.forEach((item, index) => {
                    if (item.ktp_path) {
                        this.berkasData.push({
                            id: item.id,
                            type: "ktp",
                            path: item.ktp_path,
                            displayName: `${currentDate}-ktp-${index + 1}-${selectedNamaLengkap}`,
                        });
                    }
                    if (item.ijazah_path) {
                        this.berkasData.push({
                            id: item.id,
                            type: "ijazah",
                            path: item.ijazah_path,
                            displayName: `${currentDate}-ijazah-${index + 1}-${selectedNamaLengkap}`,
                        });
                    }
                    if (item.surat_perjanjian_path) {
                        this.berkasData.push({
                            id: item.id,
                            type: "surat_perjanjian",
                            path: item.surat_perjanjian_path,
                            displayName: `${currentDate}-surat_perjanjian-${index + 1}-${selectedNamaLengkap}`,
                        });
                    }
                });

                console.log(this.berkasData); // Debugging untuk memverifikasi hasil transformasi
            });
        },

        handleBack() {
            this.isModalBerkas = false;
            this.isModalTampilData = true;
        },
        goToEditPage(id_karyawan) {
            // Mendapatkan elemen modal dan menutupnya dengan jQuery
            var modal = document.getElementById('modals');
            if (modal) {
                $(modal).modal('hide'); // Menutup modal

                // Menghapus backdrop jika masih ada
                $('.modal-backdrop').remove(); // Hapus backdrop secara manual
                $('body').removeClass('modal-open'); // Menghapus kelas 'modal-open' yang menahan scroll
            }

            // Arahkan ke halaman edit setelah modal ditutup
            this.$router.push({
                name: 'admin.karyawan.ubah',
                params: {
                    id_karyawan
                }
            });
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
        truncateHtml(html, limit = 100) {
            // Create a temporary DOM element to parse the HTML
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Extract plain text
            let text = tempDiv.textContent || tempDiv.innerText || '';

            // Truncate text
            if (text.length > limit) {
                text = text.slice(0, limit) + '...';
            }

            // Create a new element to hold the truncated text
            tempDiv.innerHTML = text;

            return tempDiv.innerHTML;
        },
        async getData() {
            try {
                const employeResponse = await this.axios.get("/api/admin/karyawan");
                this.employe = employeResponse.data.data;
                this.setPages(); // Panggil setPages di sini juga
            } catch (e) {
                console.error(e);
            }
        },

        formatCurrency(amount) {
            let formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            formatted = 'Rp ' + formatted;
            return formatted;
        },

        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },

        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.fileName = file.name; // Set the file name
                this.isFileUploaded = true; // Disable the upload button
            }
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
                        let uri = `/api/admin/karyawan/hapus/${id}`;
                        this.axios
                            .delete(uri)
                            .then((response) => {
                                this.employe.splice(index, 1);
                                if (response.status == 200) {
                                    this.$swal.fire({
                                        title: "Sukses!",
                                        text: "Data berhasi dihapus!",
                                        icon: "success",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                    setTimeout(() => {
                                        window.location.href = "/admin/karyawan";
                                    }, 2000);
                                } else {
                                    this.$swal.fire({
                                        title: "Gagal!",
                                        text: "Gagal!",
                                        icon: "error",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000,
                                    });
                                }
                            })
                            .catch((e) => {
                                this.$swal.fire({
                                    title: "Gagal!",
                                    text: "Gagal!",
                                    icon: "error",
                                    showCancelButton: false,
                                    showConfirmButton: false,
                                    timer: 1000,
                                });
                            });
                    }
                });
        },
        detectMobile() {
            // Memeriksa apakah perangkat adalah mobile (Android atau iPhone)
            return /Android|iPhone/i.test(navigator.userAgent);
        },
        updateIsMobile() {
            this.isMobile = this.detectMobile();
        },
        doSearch() {
            let go = this.employe.filter((item) => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every((v) => item.nama_lengkap.toLowerCase().includes(v));
            });
            this.searchResult = go;
            this.page = 1; // Reset ke halaman pertama setelah pencarian
            this.setPages();
        },
        displayData() {
            let paginate;

            if (this.search == "") {
                paginate = this.paginate(this.employe);
            } else {
                paginate = this.paginate(this.searchResult);
            }

            return paginate;
        },
        setPages() {
            let numberOfPages;

            if (this.search == "") {
                numberOfPages = Math.ceil(this.employe.length / this.perPage);
            } else {
                numberOfPages = Math.ceil(this.searchResult.length / this.perPage);
            }
            this.pages = []; // Reset pages
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(data) {
            let from = (this.page - 1) * this.perPage;
            let to = from + this.perPage;
            return data.slice(from, to);
        },
        saveExcelUser() {
            const formData = new FormData();
            const fileInput = this.$refs.fileInput;

            // Ensure there is a file uploaded
            if (fileInput.files.length === 0) {
                alert('Silakan pilih file untuk diunggah.');
                return;
            }

            // Append the file to the formData
            formData.append('select_users_file', fileInput.files[0]);

            // Perform a POST request to the server
            this.axios.post('/api/admin/karyawan/unggah_excel', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    // Handle success
                    if (response.status === 200) {
                        this.$swal.fire({
                            title: "Berhasil!",
                            text: "Data berhasil diunggah!",
                            icon: "success",
                            showConfirmButton: true
                        });
                        // Optionally refresh the data or redirect
                        setTimeout(() => {
                            window.location.href = "/admin/karyawan";
                        }, 2000);
                    }
                })
                .catch(error => {
                    // Handle error
                    console.error(error);
                    this.$swal.fire({
                        title: "Error!",
                        text: "Terjadi kesalahan saat mengunggah data!",
                        icon: "error",
                        showConfirmButton: true
                    });
                });
        },

        async downloadExcel() {
            try {
                const response = await this.axios.get('/api/admin/karyawan/unduh_excel', {
                    responseType: 'blob', // Important for downloading files
                });

                // Create a blob URL for the downloaded file
                const url = window.URL.createObjectURL(new Blob([response.data]));

                // Create a link element and click it to trigger the download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'employees.xlsx'); // Change the file name as needed
                document.body.appendChild(link);
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            } catch (error) {
                console.error('Failed to download Excel file:', error);
                this.$swal.fire({
                    title: 'Error!',
                    text: 'Failed to download the file.',
                    icon: 'error',
                });
            }
        },

    },
    computed: {
        truncatedNamaLengkap() {
            return this.truncateHtml(this.selectedNamaLengkap, 15);
        },
        displayedPages() {
            const pages = [];
            const totalPages = this.totalPages;
            const currentPage = this.page;

            if (totalPages <= 5) {
                // Jika total halaman kurang dari atau sama dengan 5, tampilkan semua halaman
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Jika lebih dari 5 halaman, tampilkan 3 halaman pertama, halaman terakhir, dan "..."
                if (currentPage < 4) {
                    pages.push(1, 2, 3, '...', totalPages);
                } else if (currentPage > totalPages - 3) {
                    pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
                } else {
                    pages.push(1, '...', currentPage, '...', totalPages);
                }
            }
            return pages;
        },
        filteredResults() {
            const start = (this.page - 1) * this.perPage;
            const end = start + this.perPage;

            const filteredData = this.employe.filter((item) => {
                const matchesNamaLengkap = this.search ?
                    item.nama_lengkap.toLowerCase().includes(this.search.toLowerCase()) :
                    true;

                const matchesStatus = this.selectedStatus ? item.status === this.selectedStatus : true;
                const matchesJabatan = this.selectedJabatan ? item.jabatan === this.selectedJabatan : true;
                const matchesPendidikan = this.selectedPendidikan ? item.pendidikan === this.selectedPendidikan : true;
                const matchesJenisKelamin = this.selectedJenisKelamin ? item.jenis_kelamin === this.selectedJenisKelamin : true;
                const matchesDepartemen = this.selectedDepartemen ? item.departemen === this.selectedDepartemen : true;
                const matchesAktifPensiun = this.selectedAktifPensiun ? item.aktif_pensiun === this.selectedAktifPensiun : true;
                const matchesAgama = this.selectedAgama ? item.agama === this.selectedAgama : true;

                // Filter based on End Date (tanggal_akhir_kontrak) only
                const matchesTanggal = (() => {
                    if (this.startDate && this.endDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate && item.tanggal_akhir_kontrak <= this.endDate;
                    } else if (this.startDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate;
                    } else if (this.endDate) {
                        return item.tanggal_akhir_kontrak <= this.endDate;
                    }
                    return true;
                })();

                return (
                    matchesNamaLengkap &&
                    matchesStatus &&
                    matchesJabatan &&
                    matchesPendidikan &&
                    matchesJenisKelamin &&
                    matchesDepartemen &&
                    matchesAktifPensiun &&
                    matchesAgama &&
                    matchesTanggal
                );
            });

            return filteredData.slice(start, end);
        },

        filteredResultsCount() {
            return this.employe.filter((item) => {
                const matchesNamaLengkap = this.search ?
                    item.nama_lengkap.toLowerCase().includes(this.search.toLowerCase()) :
                    true;
                const matchesStatus = this.selectedStatus ? item.status === this.selectedStatus : true;
                const matchesJabatan = this.selectedJabatan ? item.jabatan === this.selectedJabatan : true;
                const matchesPendidikan = this.selectedPendidikan ? item.pendidikan === this.selectedPendidikan : true;
                const matchesJenisKelamin = this.selectedJenisKelamin ? item.jenis_kelamin === this.selectedJenisKelamin : true;
                const matchesDepartemen = this.selectedDepartemen ? item.departemen === this.selectedDepartemen : true;
                const matchesAktifPensiun = this.selectedAktifPensiun ? item.aktif_pensiun === this.selectedAktifPensiun : true;
                const matchesAgama = this.selectedAgama ? item.agama === this.selectedAgama : true;

                const matchesTanggal = (() => {
                    if (this.startDate && this.endDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate && item.tanggal_akhir_kontrak <= this.endDate;
                    } else if (this.startDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate;
                    } else if (this.endDate) {
                        return item.tanggal_akhir_kontrak <= this.endDate;
                    }
                    return true;
                })();

                return (
                    matchesNamaLengkap &&
                    matchesStatus &&
                    matchesJabatan &&
                    matchesPendidikan &&
                    matchesJenisKelamin &&
                    matchesDepartemen &&
                    matchesAktifPensiun &&
                    matchesAgama &&
                    matchesTanggal
                );
            }).length;
        },

        totalPages() {
            const filteredDataCount = this.employe.filter((item) => {
                const matchesNamaLengkap = this.search ? item.nama_lengkap.toLowerCase().includes(this.search.toLowerCase()) : true;
                const matchesStatus = this.selectedStatus ? item.status === this.selectedStatus : true;
                const matchesJabatan = this.selectedJabatan ? item.jabatan === this.selectedJabatan : true;
                const matchesPendidikan = this.selectedPendidikan ? item.pendidikan === this.selectedPendidikan : true;
                const matchesJenisKelamin = this.selectedJenisKelamin ? item.jenis_kelamin === this.selectedJenisKelamin : true;
                const matchesDepartemen = this.selectedDepartemen ? item.departemen === this.selectedDepartemen : true;
                const matchesAktifPensiun = this.selectedAktifPensiun ? item.aktif_pensiun === this.selectedAktifPensiun : true;
                const matchesAgama = this.selectedAgama ? item.agama === this.selectedAgama : true;

                const matchesTanggal = (() => {
                    if (this.startDate && this.endDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate && item.tanggal_akhir_kontrak <= this.endDate;
                    } else if (this.startDate) {
                        return item.tanggal_akhir_kontrak >= this.startDate;
                    } else if (this.endDate) {
                        return item.tanggal_akhir_kontrak <= this.endDate;
                    }
                    return true;
                })();

                return (
                    matchesNamaLengkap &&
                    matchesStatus &&
                    matchesJabatan &&
                    matchesPendidikan &&
                    matchesJenisKelamin &&
                    matchesDepartemen &&
                    matchesAktifPensiun &&
                    matchesAgama &&
                    matchesTanggal
                );
            }).length;

            return Math.ceil(filteredDataCount / this.perPage);
        },

    },

    watch: {
        package() {
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
