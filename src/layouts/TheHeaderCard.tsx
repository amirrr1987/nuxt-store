import {
  Dropdown,
  Menu,
  MenuItem,
  Input,
  Form,
  FormItem,
  Button,
  Divider,
} from "antd";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const TheHeader = () => {
  return (
    <header className="">
      <nav className="py-4">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-7 gap-8 items-center justify-between">
            <a href="http://bootstrap-ecommerce.com" className="col-span-1">
              <img
                className="logo"
                height="40"
                src="src/assets/images/logo.svg"
              />
            </a>

            <div className="col-span-3">
              <Input></Input>
            </div>
            <div className="col-span-2 col-start-6 flex gap-x-4">
              <Button size="large" type="default" className="!px-12">item</Button>
              <Button size="large" type="default" className="!px-12">item</Button>
              <Button size="large" type="default" className="!px-12">item</Button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="py-4 bg-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-x-4 mb-0">
            <NavLink
              to={"/"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              home
            </NavLink>
            <NavLink
              to={"product-detail"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              product-detail
            </NavLink>
            <NavLink
              to={"shopping-cart"}
              className="text-primary-500 capitalize"
            >
              shopping-cart
            </NavLink>
            <NavLink
              to={"checkout"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              checkout
            </NavLink>
            <NavLink
              to={"register"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              register
            </NavLink>
            <NavLink
              to={"signin"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              signin
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default TheHeader;
