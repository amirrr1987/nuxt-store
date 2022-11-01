import { Fragment } from "react";
import TheFooter from "../layouts/TheFooter";
import TheHeader from "../layouts/TheHeader";
import TheMain from "../layouts/TheMain";

const TheLandingPage = () => {
  return (
    <Fragment>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </Fragment>
  );
};

export default TheLandingPage;
