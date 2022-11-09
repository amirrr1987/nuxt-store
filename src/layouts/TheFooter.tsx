import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "antd";
import { Icon } from "@iconify/react";

const TheFooter = () => {
  return (
    <footer>
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 text-base">
            <aside className="col-span-4 md:col-span-2">
              <h6 className="font-semibold mb-1">Store</h6>
              <ul className="">
                <li>
                  {" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Find store</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Categories</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </aside>
            <aside className="col-span-4 md:col-span-2">
              <h6 className="">Store</h6>
              <ul className="">
                <li>
                  {" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Find store</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Categories</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </aside>
            <aside className="col-span-4 md:col-span-2">
              <h6 className="">Store</h6>
              <ul className="">
                <li>
                  {" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Find store</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Categories</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </aside>
            <aside className="col-span-12 md:col-span-6 lg:col-span-3">
              <h6 className="mb-1">Newsletter</h6>
              <p className="mb-3">
                Stay in touch with latest updates about our products and offers{" "}
              </p>
              {/* <Form>
                        <FormItem>
                            <Input className="" type="text" placeholder="Email">
                  
                            </Input>
                        </FormItem>
                    </Form> */}
            </aside>
            <aside className="col-span-12 lg:col-span-3">
              <article className="">
                <img src="" className="" />
                <p className="py-4">
                  {" "}
                  © 2018- 2021 Templatemount. <br /> All rights reserved.{" "}
                </p>
              </article>
            </aside>
          </div>
          <div className="flex justify-between">
            <div>
              <i className="fab fa-lg fa-cc-visa"></i>
              <i className="fab fa-lg fa-cc-amex"></i>
              <i className="fab fa-lg fa-cc-mastercard"></i>
              <i className="fab fa-lg fa-cc-paypal"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 py-1">
        <div className="px-8 text-center">sf</div>
      </div>
    </footer>
  );
};

export default TheFooter;
