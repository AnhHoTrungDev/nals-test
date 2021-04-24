import React from 'react';

const Header = () => {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <link className="navbar-brand brand-logo mr-5" href="index.html"><img src="images/logo.svg" className="mr-2" alt="logo"/></link>
          <link className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="ti-view-list"></span>
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                  <span className="input-group-text" id="search">
                    <i className="ti-search"></i>
                  </span>
                </div>
                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown mr-1">
              <link href="#" className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown"  data-toggle="dropdown">
                <i className="ti-email mx-0"></i>
              </link>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                      <img src="images/faces/face4.jpg" alt="item" className="profile-pic"/>
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">David Grey
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </link>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                      <img src="images/faces/face2.jpg" alt="item" className="profile-pic"/>
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">Tim Cook
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </link>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                      <img src="images/faces/face3.jpg" alt="item" className="profile-pic"/>
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal"> Johnson
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <link className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i className="ti-bell mx-0"></i>
                <span className="count"></span>
              </link>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-success">
                      <i className="ti-info-alt mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </link>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-warning">
                      <i className="ti-settings mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </link>
                <link className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-info">
                      <i className="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </link>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                <img src="images/faces/face28.jpg" alt="profile"/>
              </link>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <link className="dropdown-item">
                  <i className="ti-settings text-primary"></i>
                  Settings
                </link>
                <link className="dropdown-item">
                  <i className="ti-power-off text-primary"></i>
                  Logout
                </link>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="ti-view-list"></span>
          </button>
        </div>
      </nav>
    );
}

export default Header;
