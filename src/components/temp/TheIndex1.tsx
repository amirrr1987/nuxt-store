import { Button } from "antd";
import { Fragment } from "react";
import TheBlogPosts from "../components/TheBlogPosts";
import TheCategories from "../components/TheCategories";
import TheFeature from "../components/TheFeature";
import TheInfoCard from "../components/TheInfoCard";
import TheIntro from "../components/TheIntro";
import TheNewProducts from "../components/TheNewproducts";

const TheIndex1 = () => {
  return (
    <Fragment>
      <TheCategories />
      <TheInfoCard />
      <TheIntro />
      <TheNewProducts />
      <TheFeature />
      <TheBlogPosts />
    </Fragment>
  );
};

export default TheIndex1;
