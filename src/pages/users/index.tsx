import React from "react";

const Users: React.FC = () => {
  return (
    <div className="container-scroller">
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo mr-5" href="../../index.html">
            <img src="../../images/logo.svg" className="mr-2" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="../../index.html">
            <img src="../../images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="ti-view-list"></span>
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div
                  className="input-group-prepend hover-cursor"
                  id="navbar-search-icon"
                >
                  <span className="input-group-text" id="search">
                    <i className="ti-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown mr-1">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="ti-email mx-0"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="messageDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Messages
                </p>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img
                      src="../../images/faces/face4.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">David Grey</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img
                      src="../../images/faces/face2.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img
                      src="../../images/faces/face3.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="ti-bell mx-0"></i>
                <span className="count"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                <a className="dropdown-item">
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
                </a>
                <a className="dropdown-item">
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
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-info">
                      <i className="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="../../images/faces/face28.jpg" alt="profile" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item">
                  <i className="ti-settings text-primary"></i>
                  Settings
                </a>
                <a className="dropdown-item">
                  <i className="ti-power-off text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="ti-view-list"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="../../index.html">
                <i className="ti-shield menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i className="ti-palette menu-icon"></i>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/ui-features/buttons.html"
                    >
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/ui-features/typography.html"
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../pages/forms/basic_elements.html"
              >
                <i className="ti-layout-list-post menu-icon"></i>
                <span className="menu-title">Form elements</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/charts/chartjs.html">
                <i className="ti-pie-chart menu-icon"></i>
                <span className="menu-title">Charts</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../pages/tables/basic-table.html"
              >
                <i className="ti-view-list-alt menu-icon"></i>
                <span className="menu-title">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/icons/themify.html">
                <i className="ti-star menu-icon"></i>
                <span className="menu-title">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/samples/login.html"
                    >
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/samples/login-2.html"
                    >
                      {" "}
                      Login 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/samples/register.html"
                    >
                      {" "}
                      Register{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/samples/register-2.html"
                    >
                      {" "}
                      Register 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="../../pages/samples/lock-screen.html"
                    >
                      {" "}
                      Lockscreen{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../documentation/documentation.html"
              >
                <i className="ti-write menu-icon"></i>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic Table</h4>
                    <p className="card-description">
                      Add className <code>.table</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>VatNo.</th>
                            <th>Created</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>53275531</td>
                            <td>12 May 2017</td>
                            <td>
                              <label className="badge badge-danger">
                                Pending
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>53275532</td>
                            <td>15 May 2017</td>
                            <td>
                              <label className="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>53275533</td>
                            <td>14 May 2017</td>
                            <td>
                              <label className="badge badge-info">Fixed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>53275534</td>
                            <td>16 May 2017</td>
                            <td>
                              <label className="badge badge-success">
                                Completed
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td>20 May 2017</td>
                            <td>
                              <label className="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Hoverable Table</h4>
                    <p className="card-description">
                      Add className <code>.table-hover</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Product</th>
                            <th>Sale</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>Photoshop</td>
                            <td className="text-danger">
                              {" "}
                              28.76% <i className="ti-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-danger">
                                Pending
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>Flash</td>
                            <td className="text-danger">
                              {" "}
                              21.06% <i className="ti-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Premier</td>
                            <td className="text-danger">
                              {" "}
                              35.00% <i className="ti-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-info">Fixed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>After effects</td>
                            <td className="text-success">
                              {" "}
                              82.00% <i className="ti-arrow-up"></i>
                            </td>
                            <td>
                              <label className="badge badge-success">
                                Completed
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td className="text-success">
                              {" "}
                              98.05% <i className="ti-arrow-up"></i>
                            </td>
                            <td>
                              <label className="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Striped Table</h4>
                    <p className="card-description">
                      Add className <code>.table-striped</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>First name</th>
                            <th>Progress</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face1.jpg"
                                alt="image"
                              />
                            </td>
                            <td>Herman Beck</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face2.jpg"
                                alt="image"
                              />
                            </td>
                            <td>Messsy Adam</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$245.30</td>
                            <td>July 1, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face3.jpg"
                                alt="image"
                              />
                            </td>
                            <td>John Richards</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$138.00</td>
                            <td>Apr 12, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face4.jpg"
                                alt="image"
                              />
                            </td>
                            <td>Peter Meggik</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face5.jpg"
                                alt="image"
                              />
                            </td>
                            <td>Edward</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: " 35%" }}
                                  aria-valuenow={35}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 160.25</td>
                            <td>May 03, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face6.jpg"
                                alt="image"
                              />
                            </td>
                            <td>John Doe</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 123.21</td>
                            <td>April 05, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img
                                src="../../images/faces/face7.jpg"
                                alt="image"
                              />
                            </td>
                            <td>Henry Tom</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow={20}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 150.00</td>
                            <td>June 16, 2015</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Bordered table</h4>
                    <p className="card-description">
                      Add className <code>.table-bordered</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Progress</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Messsy Adam</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$245.30</td>
                            <td>July 1, 2015</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>John Richards</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$138.00</td>
                            <td>Apr 12, 2015</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Peter Meggik</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Edward</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "35%" }}
                                  aria-valuenow={35}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 160.25</td>
                            <td>May 03, 2015</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>John Doe</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 123.21</td>
                            <td>April 05, 2015</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Henry Tom</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow={20}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </td>
                            <td>$ 150.00</td>
                            <td>June 16, 2015</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Inverse table</h4>
                    <p className="card-description">
                      Add className <code>.table-dark</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Messsy Adam</td>
                            <td>$245.30</td>
                            <td>July 1, 2015</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>John Richards</td>
                            <td>$138.00</td>
                            <td>Apr 12, 2015</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Peter Meggik</td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Edward</td>
                            <td>$ 160.25</td>
                            <td>May 03, 2015</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>John Doe</td>
                            <td>$ 123.21</td>
                            <td>April 05, 2015</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Henry Tom</td>
                            <td>$ 150.00</td>
                            <td>June 16, 2015</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      Table with contextual classNamees
                    </h4>
                    <p className="card-description">
                      Add className <code>`.table-{"color"}`</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-info">
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>Photoshop</td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr className="table-warning">
                            <td>2</td>
                            <td>Messsy Adam</td>
                            <td>Flash</td>
                            <td>$245.30</td>
                            <td>July 1, 2015</td>
                          </tr>
                          <tr className="table-danger">
                            <td>3</td>
                            <td>John Richards</td>
                            <td>Premeire</td>
                            <td>$138.00</td>
                            <td>Apr 12, 2015</td>
                          </tr>
                          <tr className="table-success">
                            <td>4</td>
                            <td>Peter Meggik</td>
                            <td>After effects</td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr className="table-primary">
                            <td>5</td>
                            <td>Edward</td>
                            <td>Illustrator</td>
                            <td>$ 160.25</td>
                            <td>May 03, 2015</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © bootstrapdash.com 2020
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                {" "}
                Free{" "}
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  Bootstrap dashboard templates
                </a>{" "}
                from Bootstrapdash.com
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Users;
