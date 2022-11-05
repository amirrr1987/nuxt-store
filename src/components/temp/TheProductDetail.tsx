import { Icon } from "@iconify/react";
import { Button, Divider, Form, InputNumber, Rate, Select, Table, Tabs } from "antd";
import { Fragment } from "react";

const TheProductDetail = () => {
  const list = [
    {
      label: "streetwear",
      value: "streetwear",
    },
    {
      label: "Hoodie",
      value: "Hoodie",
    },
  ];

  const Items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab Title ${id}`,
      key: id,
      children: (
        <>
          <p>Content of Tab Pane tre{id}</p>
          <p>Content of Tab Pane {id}</p>
          <p>Content of Tab Pane {id}</p>
        </>
      ),
    };
  });
  return (
    <Fragment>
      <div className="shop-the-product-detail">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 p-4">
              <div className="border">
                <img
                  className="mx-auto p-4"
                  src="src/assets/images/items/1.webp"
                  alt="dfg"
                />
              </div>
              <div className="flex justify-center gap-x-4 py-4">
                <div className="border w-20">
                  <img
                    className="mx-auto p-1"
                    src="src/assets/images/items/1.webp"
                    alt="dfg"
                  />
                </div>
                <div className="border w-20">
                  <img
                    className="mx-auto p-1"
                    src="src/assets/images/items/1.webp"
                    alt="dfg"
                  />
                </div>
                <div className="border w-20">
                  <img
                    className="mx-auto p-1"
                    src="src/assets/images/items/1.webp"
                    alt="dfg"
                  />
                </div>
                <div className="border w-20">
                  <img
                    className="mx-auto p-1"
                    src="src/assets/images/items/1.webp"
                    alt="dfg"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-4">
              <div>
                Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie
              </div>
              <div>
                <Rate />
              </div>
              <p>
                Modern look and quality demo item is a streetwear-inspired
                collection that continues to break away from the conventions of
                mainstream fashion. Made in Italy, these black and brown
                clothing low-top shirts for men.
              </p>
              <div className="grid grid-cols-2 w-72">
                <span>Type:</span>
                <span>Regular</span>

                <span>Color:</span>
                <span>Brown</span>

                <span>Material:</span>
                <span>Cotton, Jeans</span>

                <span>Brand:</span>
                <span>Reebook</span>
              </div>
              <div>
                <Divider />

                <Form layout="vertical" className="grid grid-cols-2">
                  <Form.Item label="Size">
                    <Select options={list} />
                  </Form.Item>

                  <Form.Item label="Quantity">
                    <Button></Button>
                    <InputNumber
                      addonBefore={
                        <Button
                          type="text"
                          className="-mx-3 !-my-3"
                          icon={<Icon icon="icon-park-outline:plus" />}
                        ></Button>
                      }
                      addonAfter={
                        <Button
                          type="text"
                          className="-mx-3"
                          icon={<Icon icon="icon-park-outline:minus" />}
                        ></Button>
                      }
                    />
                  </Form.Item>
                </Form>

                <div className="!flex gap-x-4">
                  <Button className="!rounded" type="primary">
                    Buy now
                  </Button>
                  <Button className="!rounded" type="primary" danger>
                    Add to cart
                  </Button>
                  <Button className="!rounded" type="primary">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 bg-gray-50">
            <div className="col-span-7 p-4">
              <Tabs
                type="card"
                items={[
                  {
                    label: `Specification`,
                    key: "1",
                    children: (
                      <>
                        <p>
                          With supporting text below as a natural lead-in to
                          additional content. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="grid grid-cols-2">
                          <div>
                            <Icon icon="icon-park-outline:home" />
                            <span>Lorem ipsum dolor sit amet.</span>
                          </div>
                          <div>Lorem ipsum dolor sit amet.</div>
                          <div>Lorem ipsum dolor sit amet.</div>
                          <div>Lorem ipsum dolor sit amet.</div>
                          <div>Lorem ipsum dolor sit amet.</div>
                          <div>Lorem ipsum dolor sit amet.</div>
                        </div>
                        <Table></Table>
                      </>
                    ),
                  },
                  {
                    label: `Warranty info`,
                    key: "2",
                    children: (
                      <>
                        <p>
                          Tab content or sample information now <br /> Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Lorem ipsum dolor
                          sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </>
                    ),
                  },
                  {
                    label: `Shipping info`,
                    key: "3",
                    children: (
                      <>
                        <p>
                          Another tab content or sample information now <br />{" "}
                          Dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </>
                    ),
                  },

                  {
                    label: `Seller profile`,
                    key: "4",
                    children: (
                      <>
                        <p>
                          Some other tab content or sample information now
                          <br /> Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </div>
            <div className="col-span-5 p-4 bg-white flex flex-col gap-y-4">
              <div className="flex gap-x-4 items-center">
                <div className="border rounded w-20">
                  <img src="src/assets/images/items/1.webp" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <strong>$38.90</strong>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="border rounded w-20">
                  <div className="border rounded w-20">
                    <img src="src/assets/images/items/1.webp" alt="" />
                  </div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <strong>$38.90</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TheProductDetail;
