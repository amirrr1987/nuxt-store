import { Icon } from "@iconify/react";
import { Button, Input } from "antd";
import { Fragment } from "react";

const TheSubscribe = () => {
  return (
    <section className="shop-the-subscribe py-12 bg-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex justify-between">
          <Input
                      className="!w-1/3"
                      placeholder="Email"
            addonAfter={
              <Button type="text" className="!my-0 !border-0 !h-full">
                Subscribe
              </Button>
            }
          ></Input>
          <div className="flex gap-x-4">
            <Button
              type="default"
              icon={<Icon icon="icon-park-outline:home" />}
            ></Button>
            <Button
              type="default"
              icon={<Icon icon="icon-park-outline:home" />}
            ></Button>
            <Button
              type="default"
              icon={<Icon icon="icon-park-outline:home" />}
            ></Button>
            <Button
              type="default"
              icon={<Icon icon="icon-park-outline:home" />}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSubscribe;
