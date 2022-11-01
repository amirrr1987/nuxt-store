import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "antd";
import { Icon } from "@iconify/react";

const TheFeature = () => {
  const list = [
    {
      icon: "icon-park-solid:home",
      title: "Reasonable prices",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor",
    },
    {
      icon: "icon-park-solid:car",
      title: "Best quality",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor",
    },
    {
      icon: "icon-park-solid:key",
      title: "Worldwide shipping",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor",
    },
  ];

  const Cards = (): any => {
    return list.map((item, index) => {
      return (
        <figure className="grid" key={index}>
          <div className="bg-blue-500 aspect-square rounded-full m-12">
            <Icon className="text-white text-2xl" icon={item.icon} />
          </div>
          <figcaption className="text-center">
            <h6 className="font-semibold text-2xl mb-4">{item.title}</h6>
            <p className="font-normal text-xl">{item.desciption}</p>
          </figcaption>
        </figure>
      );
    });
  };

  return (
    <section className="py-12 bg-light-200">
      <div className="container mx-auto px-8">
        <h3 className="mb-8 box-border font-semibold leading-tight xl:text-3xl text-[rgba(33,37,41,1)] text-[calc(1.3rem_+_0.6vw)]">
          Why choose us
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default TheFeature;
