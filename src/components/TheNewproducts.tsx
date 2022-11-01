import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "antd";
import { Icon } from "@iconify/react";

let list = [
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
  {
    title: "sdfsdf",
  },
];

const Product = () => {
  return list.map((item, index) => {
    return (
      <figure
        className="col-span-12 md:col-span-6 lg:col-span-3 shadow border rounded"
        key={index}
      >
        <img
          className="mx-auto"
          src={`src/assets/images/items/${index + 1}.webp`}
        />
        <figcaption className="p-4 border-t">
          <div className="">$790.50</div>
          <p className="py-4">GoPro HERO6 4K Action Camera - Black</p>
          <div className="flex gap-4">
            <Button type="primary" className="rounded">
              Add to cart
            </Button>
            <Button
              type="default"
              className="rounded flex items-center justify-center"
            >
              <Icon icon="icon-park-outline:like" />
            </Button>
          </div>
        </figcaption>
      </figure>
    );
  });
};

const TheNewProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-8">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-8">
          New products
        </h3>
        <div className="grid grid-cols-12 gap-8">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default TheNewProducts;
