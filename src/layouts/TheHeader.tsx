import {
  Dropdown,
  Menu,
  MenuItem,
  Input,
  Form,
  FormItem,
  Button,
} from "antd";
import { Icon } from "@iconify/react";

const TheHeader = () => {
  return (
    <header className="">
      <nav className="py-4 border-b">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 items-center">
            <a href="http://bootstrap-ecommerce.com" className="col-span-2">
              <img
                className="logo"
                height="40"
                src="@/assets/images/logo.svg"
              />
            </a>
       
            <div className="col-span-3 col-start-10 flex gap-4">

            </div>
          </div>
        </div>
      </nav>
      <nav className="py-4 border-b">
        <div className="container mx-auto px-4">
          <ul className="flex">

          </ul>
        </div>
      </nav>
    </header>
  );
};
export default TheHeader;
