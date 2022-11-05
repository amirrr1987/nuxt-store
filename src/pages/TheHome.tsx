// import { Button } from "antd";
import { Fragment } from "react";
import TheHeaderCard from "../components/TheHeader";
import TheCategories from "../components/TheCategories";
import TheNewProducts from "../components/TheNewproducts";
import TheFeature from "../components/TheFeature";
import TheBlogPosts from "../components/TheBlogPosts";
import TheRecommended from "../components/TheRecommended";
import TheRecentlyViewed from "../components/TheRecentlyViewed";
import TheSubscribe from "../components/TheSubscribe";
// import TheInfoCard from "../components/TheInfoCard";
// import TheIntro from "../components/TheIntro";

const TheHome = () => {
  return (
    <Fragment>
      <TheHeaderCard />
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
