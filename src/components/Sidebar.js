function Sidebar() {
  return (
    <div className="Sidebar bg-dark">
      <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Ztashia</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="table.html">
                <i className="fas fa-table"></i>
                <span>Table</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <i className="far fa-user-circle"></i>
                <span>Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                <i className="fas fa-user-circle"></i>
                <span>Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="forgot-password.html">
                <i className="fas fa-key"></i>
                <span>Forgotten Password</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="404.html">
                <i className="fas fa-exclamation-circle"></i>
                <span>Page Not Found</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="blank.html">
                <i className="fas fa-window-maximize"></i>
                <span>Blank Page</span>
              </a>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            ></button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
