
const TheHeaderCard = () => {
  return (
    <section className="shop-the-header-card py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 grid-row-span-6 gap-4">
          <div className="bg-red-500 col-span-9 row-span-6 rounded">
            <img
              className="object-fill w-full"
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner-item2.webp"
              alt=""
            />
          </div>
          <div className="bg-red-500 col-span-3 row-span-3 rounded">item</div>
          <div className="bg-red-500 col-span-3 row-span-3 rounded">item</div>
        </div>
      </div>
    </section>
  );
};

export default TheHeaderCard;
