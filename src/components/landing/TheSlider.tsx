import { Carousel } from "antd";

const TheSlider = () => {
  return (
    <section className="shop-the-header-card py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 grid-rows-span-6 gap-4 h-96">
          <div className="bg-gray-200 col-span-9 row-span-6 rounded p-1 relative">
            <Carousel autoplay>
              <img src="https://picsum.photos/id/135/1200/414" alt="" />
              <img src="https://picsum.photos/id/136/1200/414" alt="" />
              <img src="https://picsum.photos/id/137/1200/414" alt="" />
            </Carousel>
          </div>
          <div className="bg-gray-200 col-span-3 row-span-3 rounded p-1">
            <Carousel autoplay>
              <img src="https://picsum.photos/id/335/300/152" alt="" />
              <img src="https://picsum.photos/id/336/300/152" alt="" />
              <img src="https://picsum.photos/id/337/300/152" alt="" />
            </Carousel>
          </div>
          <div className="bg-gray-200 col-span-3 row-span-3 rounded p-1">
            <Carousel autoplay>
              <img src="https://picsum.photos/id/235/300/152" alt="" />
              <img src="https://picsum.photos/id/236/300/152" alt="" />
              <img src="https://picsum.photos/id/237/300/152" alt="" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSlider;
