import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <SidebarLeft />
        <div className="main-panel">
          <div className="content-wrapper">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
