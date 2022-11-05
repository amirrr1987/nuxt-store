import { Icon } from "@iconify/react";
import { Button, Divider, Form, Input, Select } from "antd";
import { Fragment } from "react";

const TheShoppingCart = () => {
  const list = [
    {
      img: "src/assets/images/items/1.webp",
      title: "Winter jacket for men and lady",
      color: ["Yellow", "Jeans"],
      count: 10,
      total: 100,
      perItem: 10,
    },
    {
      img: "src/assets/images/items/2.webp",
      title: "Mens T-shirt Cotton Base",
      color: ["Blue", "Medium"],
      count: 10,
      total: 200,
      perItem: 20,
    },
    {
      img: "src/assets/images/items/3.webp",
      title: "Blazer Suit Dress Jacket for Men",
      color: ["XL size", "Jeans", "Blue"],
      count: 5,
      total: 200,
      perItem: 20,
    },
  ];
  const Items = (): any => {
    return list.map((item, index) => {
      return (
        <div
          className="grid grid-cols-[max-content,3fr,1fr,max-content] gap-x-4 border px-4 rounded mb-4"
          key={index}
        >
          <img className="w-20" src={item.img} alt="" />
          <div className="flex flex-col justify-center gap-x-4">
            <div>{item.title}</div>
            <div>{item.color}</div>
          </div>

          <div className="flex items-center gap-x-4">
            <Select value={item.count} className="w-20" />
            <div>
              <div>${item.total}</div>
              <div>${item.perItem}</div>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Button
              type="default"
              icon={<Icon icon="icon-park-outline:like" />}
            ></Button>
            <Button type="default" danger>
              Remove
            </Button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="shop-the-shopping-cart bg-gray-100 py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 p-4 bg-white rounded shadow">
            <h3>Your shopping cart</h3>
            <Items />
            <Divider />
            <div>
              <Icon icon="icon-park-outline:home" />
              <span> Free Delivery within 1-2 weeks</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div className="col-span-3 grid gap-y-4 grid-rows-3">
            <div className="p-4 bg-white rounded shadow row-span-1">
              <Form layout="vertical">
                <Form.Item label="Have coupon?">
                  <Input
                    addonAfter={
                      <Button
                        type="text"
                        className="-mx-3 -my-1"
                        placeholder="Coupon code"
                      >
                        Apply
                      </Button>
                    }
                  />
                </Form.Item>
              </Form>
            </div>
            <div className="p-4 bg-white rounded shadow row-span-2">sdf</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheShoppingCart;
