import { Icon } from "@iconify/react";
import { Button } from "antd";

const TheCategories = () => {
  const list = [
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
    {
      icon: "icon-park-outline:home",
      label: "tilew sdfsdf",
    },
  ];

  const Categories = (): any => {
    return list.map((card: any, index: any) => {
      return (
        <div className="flex flex-col items-center justify-center" key={index}>
          <Button type="default" icon={<Icon icon={card.icon} />} />
          <p>{card.label}</p>
        </div>
      );
    });
  };
  return (
    <section className="shop-the-categories py-12">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-8 gap-8">
          <Categories />
        </div>
      </div>
    </section>
  );
};

export default TheCategories;
