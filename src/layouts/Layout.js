import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header Here    */}
      <Header />
      {children}
      {/* Footer Here */}
      <Footer />
    </>
  );
};

export default Layout;
