import { Button } from "antd";
const TheIntro = () => {
  return (
    <section className="bg-blue-600 py-20 mt-0 mb-4 box-border text-xl font-normal text-white ">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2">
          <article className="flex flex-col gap-4 ">
            <h1 className="font-semibold text-white text-2xl lg:text-5xl ">
              {" "}
              Best products &amp; brands in our store
            </h1>
            <p className="mb-8 box-border text-xl font-light text-white lg:text-2xl">
              Trendy Products, Factory Prices, Excellent Service
            </p>
            <div className="flex gap-4">
              <Button type="primary" danger size="large" className="rounded">
                Purchase now
              </Button>
              <Button type="default" danger size="large" className="rounded">
                Learn more
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TheIntro;
