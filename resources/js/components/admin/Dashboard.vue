<template>
<div>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ capitalizeFirstLetter(title) }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#" class="text-dark">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/admin/dashboard">{{ capitalizeFirstLetter(title) }}</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <div class="row">
                <!-- Alert for total employees about to expire contract -->
                <div class="col-12 mb-4" v-if="totalKaryawan !== null">
                    <div class="alert alert-info" role="alert">
                        <strong>{{ totalKaryawan }} Karyawan</strong> dengan Kontrak Akan Berakhir
                        <br />
                        <small>Bulan: {{ bulan }} Tahun: {{ tahun }}</small>
                        <br />
                        <small><i>{{ formatLastUpdated(lastUpdated) }}</i></small>
                        <br />
                        <!-- Tombol di dalam alert -->
                        <button class="btn btn-sm btn-primary mt-2" @click="handleButtonClick">
                            Lihat
                        </button>
                    </div>
                </div>

              <!-- Modal Popup -->
<div class="modal-custom" id="modals" tabindex="-1" aria-labelledby="modalsLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Header Modal -->
            <div class="modal-header">
                <h4 class="modal-title" id="modalsLabel">Karyawan Akan Berakhir</h4>
            </div>

            <!-- Body Modal -->
            <div class="modal-body">
                <div class="table-wrapper">
                    <!-- Tabel yang Diperbarui -->
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Nama Lengkap</th>
                                <th>Jabatan</th>
                                <th>Departemen</th>
                                <th>Akhir Kontrak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="karyawan in expiredKaryawan" :key="karyawan.id_karyawan">
                                <td>{{ karyawan.nama_lengkap }}</td>
                                <td>{{ karyawan.jabatan }}</td>
                                <td>{{ karyawan.departemen }}</td>
                                <td>{{ formatDate(karyawan.tanggal_akhir_kontrak) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Footer Modal dengan Tombol Close yang Diperbarui -->
            <div class="modal-footer">
                                    <button type="button" class="btn btn-danger btn-sm close-btn" data-dismiss="modal">
                                        Tutup
                                    </button>
                                </div>
        </div>
    </div>
</div>

                <!-- Other charts -->
                <div class="col-md-6 mb-4" v-for="(chartData, index) in charts" :key="index">
                    <div class="card shadow-lg border-0 rounded">
                        <div class="card-header bg-secondary text-white">
                            <h5 class="card-title mb-0">{{ chartData.title }}</h5>
                        </div>
                        <div class="card-body">
                            <canvas :id="chartData.id" width="400" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isModalVisible: false,
            expiredKaryawan: [],
            title: "Dashboard",
            totalKaryawan: null,
            bulan: "",
            tahun: "",
            lastUpdated: "",
            charts: [{
                    id: "chartStatusKaryawan",
                    title: "Distribusi Karyawan",
                    data: {}
                },
                {
                    id: "chartJabatan",
                    title: "Distribusi Jabatan",
                    data: {}
                },
                {
                    id: "chartDepartemen",
                    title: "Distribusi Departemen",
                    data: {}
                },
                {
                    id: "chartPendidikan",
                    title: "Distribusi Pendidikan",
                    data: {}
                },
            ],
            isLoading: true,
        };
    },
    async mounted() {
        await this.getData();
        await this.fetchChartData();
        this.isLoading = false;
        this.renderCharts();
    },
    methods: {
        async getData() {
            try {
                const response = await this.axios.get("/api/admin/karyawan/totalAkhirKontrak");
                if (response.data.status === "success") {
                    this.totalKaryawan = response.data.total;
                    this.bulan = response.data.bulan;
                    this.tahun = response.data.tahun;
                    this.lastUpdated = new Date().toLocaleString();
                } else {
                    this.totalKaryawan = 0;
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data total karyawan:", error);
                this.totalKaryawan = 0;
            }
        },
        async fetchChartData() {
            try {
                const responses = await Promise.all([
                    this.axios.get("/api/admin/karyawan/status"),
                    this.axios.get("/api/admin/karyawan/jabatan"),
                    this.axios.get("/api/admin/karyawan/departemen"),
                    this.axios.get("/api/admin/karyawan/pendidikan"),
                ]);
                this.charts[0].data = responses[0].data;
                this.charts[1].data = responses[1].data.jabatan;
                this.charts[2].data = responses[2].data.departemen;
                this.charts[3].data = responses[3].data.pendidikan;
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data grafik:", error);
            }
        },
        renderCharts() {
            this.charts.forEach((chartData) => {
                const ctx = document.getElementById(chartData.id).getContext("2d");

                let chartType = "";
                let chartOptions = {};

                // Set dynamic font size based on device width
                const dynamicFontSize = window.innerWidth < 768 ? 10 : 14; // Smaller font for mobile devices

                if (chartData.title === "Distribusi Departemen") {
                    chartType = "pie";
                    const departmentColors = [
                        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF5733", "#C70039", "#900C3F", "#581845"
                    ];

                    chartOptions = {
                        type: chartType,
                        data: {
                            labels: Object.keys(chartData.data),
                            datasets: [{
                                label: "Jumlah Karyawan",
                                data: Object.values(chartData.data),
                                backgroundColor: Object.keys(chartData.data).map((_, index) => departmentColors[index % departmentColors.length]),
                                borderColor: "#fff",
                                borderWidth: 2,
                            }, ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false, // Allow the chart to adjust to the container
                            plugins: {
                                legend: {
                                    position: "top",
                                    labels: {
                                        font: {
                                            size: dynamicFontSize,
                                            weight: 'bold',
                                        },
                                        boxWidth: 15,
                                    },
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        },
                    };
                } else if (chartData.title === "Distribusi Pendidikan") {
                    chartType = "doughnut";
                    const pendidikanColors = [
                        "#FFB6C1", "#FF6347", "#FFD700", "#98FB98", "#87CEEB", "#DDA0DD", "#FF1493", "#32CD32"
                    ];

                    chartOptions = {
                        type: chartType,
                        data: {
                            labels: Object.keys(chartData.data),
                            datasets: [{
                                label: "Jumlah Karyawan",
                                data: Object.values(chartData.data),
                                backgroundColor: Object.keys(chartData.data).map((_, index) => pendidikanColors[index % pendidikanColors.length]),
                                borderColor: "#fff",
                                borderWidth: 2,
                            }, ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        font: {
                                            size: dynamicFontSize,
                                        },
                                    },
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                        },
                    };
                } else if (chartData.title === "Distribusi Karyawan") {
                    chartType = "bar";
                    chartOptions = {
                        type: chartType,
                        data: {
                            labels: Object.keys(chartData.data),
                            datasets: [{
                                label: "Jumlah Karyawan",
                                data: Object.values(chartData.data),
                                backgroundColor: "#4BC0C0",
                                borderColor: "#FFFFFF",
                                borderWidth: 1,
                            }, ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    ticks: {
                                        font: {
                                            size: dynamicFontSize,
                                        },
                                        autoSkip: true,
                                        maxRotation: 45,
                                        minRotation: 0,
                                    },
                                },
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        },
                    };
                } else if (chartData.title === "Distribusi Jabatan") {
                    chartType = "line";
                    chartOptions = {
                        type: chartType,
                        data: {
                            labels: Object.keys(chartData.data),
                            datasets: [{
                                label: "Jumlah Karyawan",
                                data: Object.values(chartData.data),
                                borderColor: "#FFCE56",
                                backgroundColor: "rgba(255, 206, 86, 0.2)",
                                borderWidth: 2,
                            }, ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: "top",
                                    labels: {
                                        font: {
                                            size: dynamicFontSize,
                                        },
                                    },
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                                        },
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        font: {
                                            size: dynamicFontSize,
                                        },
                                        autoSkip: false, // Do not auto skip labels
                                        maxRotation: 90, // Rotate labels to make room
                                        minRotation: 90,
                                        maxTicksLimit: 30, // Increase max ticks limit to show all labels
                                        padding: 10, // Add padding between labels
                                    },
                                },
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        font: {
                                            size: dynamicFontSize,
                                        },
                                    },
                                },
                            },
                        },
                    };
                }

                // Render the chart
                new Chart(ctx, chartOptions);
            });
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        formatLastUpdated(date) {
            return this.convertToIndonesianDate(date);
        },
        convertToIndonesianDate(date) {
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            return new Date(date).toLocaleDateString("id-ID", options);
        },
        formatDate(dateString) {
                if (!dateString) return '';
                const date = new Date(dateString);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            },

        async handleButtonClick() {
            try {
                const response = await axios.get("/api/admin/karyawan");
                const karyawanData = Array.isArray(response.data.data) ? response.data.data : [];

                if (karyawanData.length === 0) {
                    alert("Tidak ada data karyawan.");
                    return;
                }

                const currentDate = new Date();
                const currentMonth = currentDate.getMonth();
                const currentYear = currentDate.getFullYear();

                this.expiredKaryawan = karyawanData.filter(karyawan => {
                    const endDate = new Date(karyawan.tanggal_akhir_kontrak);
                    return endDate.getMonth() === currentMonth && endDate.getFullYear() === currentYear;
                });

                var modal = new bootstrap.Modal(document.getElementById('modals'), {
                    keyboard: false
                });
                modal.show();
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Gagal mengambil data karyawan.");
            }
        },

        closeModal() {
            this.isModalVisible = false;
        },
    },
};
</script>

<style>
/* Add smooth scroll */
html {
    scroll-behavior: smooth; /* Modern scroll behavior */
}

/* Styling untuk modal */
.modal-title {
        flex-grow: 1;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
    
.modal-data {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 30px;
    transition: all 0.3s ease-in-out;
}

.modal-data {
    grid-template-columns: 1fr;
}

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
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.modal-custom.show {
    display: flex;
    opacity: 1;
    transform: scale(1);
    animation: modalOpen 0.4s ease-out;
}

.modal-custom.hide {
    opacity: 0;
    transform: scale(0.9);
    animation: modalClose 0.4s ease-in;
}

/* Modal dialog */
.modal-dialog {
    position: relative;

    border-radius: 15px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    animation: fadeIn 0.4s ease-out, scaleUp 0.4s ease-out;
}

/* Modal header and body */
.modal-header {
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    border-radius: 15px 15px 0 0;
    animation: slideInTop 0.5s ease-out;
}

.modal-body {
    padding: 15px;
    max-height: 70vh;
    overflow-y: auto;
    border-radius: 0 0 15px 15px;
    animation: fadeIn 0.5s ease-out;
}

/* Button and hover effect */
/* .modal-footer .btn {
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-danger {
    background-color: #e74c3c;
    border-color: #c0392b;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
} */

.btn {
        border-radius: 20px;
        padding: 8px 15px;
        transition: background 0.3s, transform 0.2s;
    }

/* Table with scroll */
.table-wrapper {
    overflow-x: auto;
}

.table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    color: #333;
}

.table th, .table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
}

.table th {
    background-color: #f4f4f4;
    font-weight: bold;
}

.table-hover tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.3s ease;
}

/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f3f4f6, #e8ecf1);
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    animation: fadeIn 0.8s ease-out;
}

/* Breadcrumb */
.breadcrumb {
    background: none;
    padding: 0;
    margin: 0;
    font-size: 0.95rem;
}

.breadcrumb-item a {
    color: #007bff;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
}

.breadcrumb-item a:hover {
    color: #0056b3;
    text-decoration: underline;
    transform: translateY(-2px);
}

/* Page Header */
.content-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: fadeIn 0.5s ease-out, slideInBottom 0.6s ease-out;
}

.content-header h1::before {
    content: '📊';
    font-size: 2.5rem;
}

/* Cards */
.card {
    background: linear-gradient(145deg, #ffffff, #f7f9fc);
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: fadeIn 0.5s ease-out, bounceIn 0.6s ease-out;
}

.card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Card Header */
.card-header {
    background: linear-gradient(90deg, #007bff, #0056b3);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 20px;
    text-align: center;
    border-bottom: 5px solid rgba(0, 0, 0, 0.05);
    text-transform: uppercase;
    animation: fadeIn 0.5s ease-out, slideInLeft 0.7s ease-out;
}

/* Card Body */
.card-body {
    padding: 20px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Alert */
.alert {
    background: linear-gradient(145deg, #eef6fc, #dbeefb);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    font-weight: 500;
    color: #003d80;
    animation: fadeIn 0.5s ease-out, bounceIn 0.6s ease-out;
}

.alert strong {
    font-weight: 700;
    color: #001d40;
}

.alert i {
    font-size: 0.9rem;
    color: #555;
}

.alert .btn {
    background-color: #003d80;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 0.9rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.alert .btn:hover {
    background-color: #001d40;
    transform: translateY(-2px);
}

/* Loading Spinner */
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.loading-spinner::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 5px solid #007bff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Chart Wrapper */
.chart-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
}

/* Animations */
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes scaleUp {
    0% { transform: scale(0.5); }
    100% { transform: scale(1); }
}

@keyframes slideInTop {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideInLeft {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideInBottom {
    0% { transform: translateY(30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes bounceIn {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes modalOpen {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes modalClose {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.9); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .table {
        font-size: 12px;
    }

    .modal-dialog {
        width: 100%;
        height: auto;
        border-radius: 8px;
        transform: none;
        top: auto;
        bottom: 0;
        left: 0;
    }

    .modal-body {
        max-height: 75vh;
    }

    .card {
        height: auto;
        padding: 20px;
    }

    .btn {
            width: 100%;
            /* Full width buttons on small screens */
            margin: 5px 0;
            /* Space between buttons */
        }
}


</style>
