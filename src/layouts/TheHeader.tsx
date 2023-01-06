import {
  Input,
  Button,
  Select,
} from "antd";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const TheHeader = () => {
  const [list, setList] = useState([
    {
      label: "Number 1",
      value: 1,
    },
    {
      label: "Number 2",
      value: 2,
    },
    {
      label: "Number 3",
      value: 3,
    },
  ]);
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
              <Input
                size="large"
                placeholder="Search"
                className="!px-0 !rounded-full"
                addonAfter={
                  <div className="flex gap-x-4 -mr-3">
                    <Select
                      className="!flex items-center"
                      options={list}
                      placeholder="Choose a number"
                    />
                    <Button
                      size="large"
                      type="primary"
                      className="!flex items-center justify-center"
                      icon={<Icon icon="tabler:search" />}
                    ></Button>
                  </div>
                }
              ></Input>
            </div>
            <div className="col-span-2 col-start-6 flex gap-x-4">
              <Button
                size="large"
                type="default"
                className="!flex items-center justify-between gap-x-4"
                icon={<Icon icon="tabler:user" />}
              >
                Signin
              </Button>
              <Button
                size="large"
                type="default"
                className="!flex items-center justify-between gap-x-4"
                icon={<Icon icon="tabler:heart" />}
              >
                Wishlist
              </Button>
              <Button
                size="large"
                type="default"
                className="!flex items-center justify-between gap-x-4"
                icon={<Icon icon="icon-park-outline:shopping" />}
              >
                My cart
              </Button>
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
              to={"/product-detail"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              product-detail
            </NavLink>
            <NavLink
              to={"/products-list"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              products-list
            </NavLink>
            <NavLink
              to={"/shopping-cart"}
              className="text-primary-500 capitalize"
            >
              shopping-cart
            </NavLink>
            <NavLink
              to={"/checkout"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              checkout
            </NavLink>
            <NavLink
              to={"/auth/register"}
              className="text-primary-500 hover:text-red-500 capitalize"
            >
              register
            </NavLink>
            <NavLink
              to={"/auth/signin"}
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
