import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductGrid from "../components/Products/ProductGrid";
import HeroSlider from "../components/Slider";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      {/* <HeroSlider /> */}
      <ProductGrid category='auto parts' limit={10} />
    </Layout>
  );
};

export default Home;
