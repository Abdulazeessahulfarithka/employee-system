import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Usercontext from '../../context/Usercontext';

function Sidebar() {
  const userData=useContext(Usercontext)
  // console.log(userData)
  return (
   <>
     <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar Brand */}
        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Employee Dashboard
          {userData.user.name}
          </div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        {/* <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li> */}

        {/* Divider */}
        <hr className="sidebar-divider my-8" />

        {/* Heading */}
        {/* <div className="sidebar-heading">Interface</div> */}

        {/* Nav Item - Components */}
        {/* <li className="nav-item">
          <Link to="#" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </Link>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link to="/buttons" className="collapse-item">Buttons</Link>
              <Link to="/cards" className="collapse-item">Cards</Link>
            </div>
          </div>
        </li> */}
        <li className="nav-item active">
          <Link to="/task-details" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Task</span>
          </Link>
        </li>

        {/* Nav Item - Utilities */}
        {/* <li className="nav-item">
          <Link to="#" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </Link>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link to="/utilities-color" className="collapse-item">Colors</Link>
              <Link to="/utilities-border" className="collapse-item">Borders</Link>
              <Link to="/utilities-animation" className="collapse-item">Animations</Link>
              <Link to="/utilities-other" className="collapse-item">Other</Link>
            </div>
          </div>
        </li> */}
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Project</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/task-report" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Report</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        {/* <div className="sidebar-heading">Addons</div> */}

        {/* Nav Item - Pages */}
        {/* <li className="nav-item">
          <Link to="#" className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link to="/login" className="collapse-item">Login</Link>
              <Link to="/register" className="collapse-item">Register</Link>
              <Link to="/forgot-password" className="collapse-item">Forgot Password</Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link to="/404" className="collapse-item">404 Page</Link>
              <Link to="/blank" className="collapse-item">Blank Page</Link>
            </div>
          </div>
        </li> */}

        {/* Nav Item - Charts */}
        {/* <li className="nav-item">
          <Link to="/charts" className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li> */}

        {/* Nav Item - Tables */}
        {/* <li className="nav-item">
          <Link to="/tables" className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li> */}

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* Sidebar Toggler */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
   </>
    
  );
}

export default Sidebar;
