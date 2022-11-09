// import { Button } from "antd";
import { Fragment } from "react";
import TheSlider from "../components/landing/TheSlider";
import TheCategories from "../components/landing/TheCategories";
import TheNewProducts from "../components/landing/TheNewproducts";
import TheFeature from "../components/landing/TheFeature";
import TheBlogPosts from "../components/landing/TheBlogPosts";
import TheRecommended from "../components/landing/TheRecommended";
import TheRecentlyViewed from "../components/landing/TheRecentlyViewed";
import TheSubscribe from "../components/landing/TheSubscribe";
// import TheInfoCard from "../components/TheInfoCard";
// import TheIntro from "../components/TheIntro";

const TheHome = () => {
  return (
    <Fragment>
      <TheSlider />
      <TheCategories />
      <TheNewProducts />
      <TheFeature />
      <TheRecommended />
      <TheRecentlyViewed />
      <TheSubscribe />
      <TheBlogPosts />

      {/* 

      <TheInfoCard />
      <TheIntro />
      
      */}
    </Fragment>
  );
};

export default TheHome;
