<aside class="main-sidebar {{ config('adminlte.classes_sidebar', 'sidebar-dark-primary elevation-4') }}">
    {{-- Sidebar brand logo --}}
    <div class="sidebar-brand">
        <img src="https://static.wixstatic.com/media/7dca68_d5de0bb9a4bb4c48b6bb2f12593f0187~mv2.png/v1/fill/w_376,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7dca68_d5de0bb9a4bb4c48b6bb2f12593f0187~mv2.png" alt="Danoya Villa Logo" class="sidebar-logo">
    </div>

    {{-- Sidebar menu --}}
    <div class="sidebar">
        <nav>
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item pt-3">
                    <a href="{{ route('admin.dashboard') }}" class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                        <i class="nav-icon fas fa-fw fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </a>
                </li>

                <li class="nav-item pt-3">
                    <a href="{{ route('admin.karyawan') }}" class="nav-link {{ request()->routeIs('admin.karyawan') ? 'active' : '' }}">
                        <i class="nav-icon fas fa-fw fa-users"></i>
                        <p>Karyawan</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<script>
    document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.main-sidebar');
    const sidebarToggleButton = document.querySelector('[data-widget="pushmenu"]'); // Adjust this selector based on your toggle button

    sidebarToggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-collapse');
    });
});
</script>
<style>
    /* Sidebar container */
.main-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    background: linear-gradient(180deg, #2f3542 0%, #434a58 100%);
    color: #d1d8e0;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding-top: 20px; /* Space for logo */
}

/* Sidebar content */
.sidebar {
    display: flex;
    flex-direction: column;
    flex: 1;
}

/* Sidebar brand/logo */
.sidebar-brand {
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: center; /* Center logo horizontally */
    align-items: center; /* Center logo vertically */
}

/* Logo styling */
.sidebar-logo {
    width: 180px; /* Default logo size */
    height: auto;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for the logo */
    background-color: white;
    padding: 5px; /* Padding around the logo */
}

/* On desktop, when the sidebar is collapsed, hide the logo */
@media (min-width: 1024px) {
    .main-sidebar.sidebar-collapse .sidebar-logo {
        display: none; /* Hide logo when sidebar is collapsed on desktop */
    }
}

/* On mobile, ensure the logo is always displayed and centered */
@media (max-width: 1024px) {
    .sidebar-logo {
        display: block !important; /* Always show the logo on mobile */
        margin: 0 auto; /* Center logo horizontally */
    }
}

/* Styling for navigation links */
.nav-link {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #b8c7ce;
    padding: 15px 20px;
    transition: all 0.3s ease;
}

/* Active link styling */
.nav-link.active {
    background-color: #4e73df; /* Blue background for active link */
    color: white;
    font-weight: bold;
    border-radius: 8px;
}

/* Hover effect for links */
.nav-link:hover {
    background-color: #2c3e50;
    color: white;
    border-radius: 8px;
}

/* Spacing between nav items */
.nav-item + .nav-item {
    margin-top: 10px;
}

/* Indentation for nested navigation */
.nav-treeview {
    padding-left: 20px;
}

</style>