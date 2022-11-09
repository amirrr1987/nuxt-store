import {
  Badge,
  Button,
  Checkbox,
  Collapse,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
} from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const { Panel } = Collapse;

const TheProductsList = () => {
  const onChange = (checkedValues: any) => {
    console.log("checked = ", checkedValues);
  };

  const optionsWithDisabled = [
    { label: "xs", value: "xs" },
    { label: "sm", value: "sm" },
    { label: "md", value: "md", disabled: true },
    { label: "lg", value: "lg" },
    { label: "xl", value: "xl" },
    { label: "xxl", value: "xxl", disabled: true },
  ];

  const listView = [
    { label: "=", value: false },
    { label: "+", value: true },
  ];

  const [value4, setValue4] = useState("xs");

  const onChange4 = ({ target: { value } }: any) => {
    console.log("radio4 checked", value);
    setValue4(value);
  };

  const productList = [
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp",
      discount: "$99.00",
      fee: "$170.00",
      title: "T-shirts with multiple colors, for men and lady",
      link: "https://google.com/",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp",
      discount: "$99.00",
      fee: "$170.00",
      title: "T-shirts with multiple colors, for men and lady",
      link: "https://google.com/",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp",
      discount: "$99.00",
      fee: "$170.00",
      title: "T-shirts with multiple colors, for men and lady",
      link: "https://google.com/",
    },
  ];

  const TheCards = (): any => {
    return productList.map((card: any, index: any) => {
      return (
        <div className="rounded shadow border" key={index}>
          <img className="mx-auto" src={card.img} alt="" />
          <div className="p-4 flex flex-col gap-y-2">
            <div>{card.title}</div>
            <div>{card.fee}</div>
            <div>{card.discount}</div>
            <div className="flex gap-x-4">
              <Button type="primary">Add to Cart</Button>
              <Button type="default">like</Button>
            </div>
          </div>
        </div>
      );
    });
  };

  const TheLists = (): any => {
    return productList.map((card: any, index: any) => {
      return (
        <div className="grid grid-cols-12 gap-4 border rounded p-4 items-center" key={index}>
          <div className="col-span-2">
            <img className="mx-auto" src={card.img} alt="" />
          </div>
          <div className="col-span-8">
            <div>{card.title}</div>
          </div>
          <div className="col-span-2">
            <div>{card.fee}</div>
            <div>{card.discount}</div>
            <div className="flex gap-x-4">
              <Button type="primary">Add to Cart</Button>
              <Button type="default">like</Button>
            </div>
          </div>
        </div>
      );
    });
  };

  const [active, setActive] = useState(false);

  let Amir = <TheCards />;

  if (active) {
    Amir = <TheCards />;
  }
  if (!active) {
    Amir = <TheLists />;
  }

  const changeView = (event: any) => {
    setActive(event.target.value);
  };

  return (
    <div className="shop-the-products-list py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 p-4">
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel key={"1"} header={"Related items"}>
                <ul className="grid gap-y-4">
                  <li>
                    <NavLink to={""}>sdf</NavLink>
                  </li>
                  <li>
                    <NavLink to={""}>sdf</NavLink>
                  </li>
                  <li>
                    <NavLink to={""}>sdf</NavLink>
                  </li>
                  <li>
                    <NavLink to={""}>sdf</NavLink>
                  </li>
                </ul>
              </Panel>
              <Panel key={"2"} header={"Brands"}>
                <ul className="grid gap-y-4">
                  <li className="flex justify-between items-center">
                    <Checkbox>sample </Checkbox>
                    <Badge count={252} />
                  </li>
                  <li className="flex justify-between items-center">
                    <Checkbox>sample </Checkbox>
                    <Badge count={252} />
                  </li>
                  <li className="flex justify-between items-center">
                    <Checkbox>sample </Checkbox>
                    <Badge count={252} />
                  </li>
                  <li className="flex justify-between items-center">
                    <Checkbox>sample </Checkbox>
                    <Badge count={252} />
                  </li>
                  <li className="flex justify-between items-center">
                    <Checkbox>sample </Checkbox>
                    <Badge count={252} />
                  </li>
                </ul>
              </Panel>
              <Panel key={"3"} header={"Price"}>
                <Slider range defaultValue={[20, 50]} />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <InputNumber prefix="$" style={{ width: "100%" }} />
                  <InputNumber prefix="$" style={{ width: "100%" }} />
                </div>
                <Button type="default" block>
                  Apply
                </Button>
              </Panel>
              <Panel key={"4"} header={"Size"}>
                <Radio.Group
                  options={optionsWithDisabled}
                  onChange={onChange4}
                  value={value4}
                  optionType="button"
                  buttonStyle="solid"
                />
                <Checkbox.Group
                  options={optionsWithDisabled}
                  disabled
                  defaultValue={["xs"]}
                  onChange={onChange}
                />
              </Panel>
              <Panel key={"5"} header={"Ratings"}>
                <ul>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={5} />
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={4} />
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={3} />
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={2} />
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={1} />
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <Rate disabled defaultValue={0} />
                    </Checkbox>
                  </li>
                </ul>
              </Panel>
            </Collapse>
          </div>
          <div className="col-span-9 p-4">
            <div className="flex justify-between">
              <div>32 Items found</div>
              <div className="flex gap-x-4">
                <Select options={optionsWithDisabled} />
                <Radio.Group
                  optionType="button"
                  options={listView}
                  onChange={changeView}
                />
              </div>
            </div>
            <div className={`grid  gap-8 py-4 ${active ? "grid-cols-3" : ""}`}>
              {Amir}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProductsList;
