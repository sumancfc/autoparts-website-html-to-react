import React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header Here    */}
      {children}
      {/* Footer Here */}
      <Footer />
    </>
  );
};

export default Layout;
