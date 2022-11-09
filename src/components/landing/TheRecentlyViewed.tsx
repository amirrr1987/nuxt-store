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
];

const Product = (): any => {
  return list.map((item, index) => {
    return (
      <figure
        className="col-span-12 md:col-span-6 lg:col-span-2 shadow border rounded"
        key={index}
      >
        <img
          className="mx-auto"
          src={`src/assets/images/items/${index + 1}.webp`}
          alt="dfg"
        />
      </figure>
    );
  });
};

const TheNewProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-8">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-8">
          TheRecentlyViewed
        </h3>
        <div className="grid grid-cols-12 gap-8">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default TheNewProducts;
