import { Fragment } from "react";
import TheBlogPosts from "../components/TheBlogPosts";
import TheFeature from "../components/TheFeature";
import TheIntro from "../components/TheIntro";
import TheNewProducts from "../components/TheNewproducts";

const TheIndex1 = () => {
  return (
    <Fragment>
      <TheIntro />
      <TheNewProducts />
      <TheFeature />
      <TheBlogPosts />
    </Fragment>
  );
};

export default TheIndex1;
