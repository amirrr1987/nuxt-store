import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const TheAuth = () => {
  return (
    <div className="shop-the-auth">
      <Outlet />
    </div>
  );
};

export default TheAuth;
