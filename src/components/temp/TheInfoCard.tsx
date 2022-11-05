import { Button } from "antd";

const TheInfoCard = () => {
  return (
    <section className="shop-the-info-card py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="bg-[#0d6efd] col-span-8 rounded p-4 text-white">
            <div className="text-2xl">Great products with best deals</div>
            <p>
              No matter how far along you are in your sophistication as an
              amateur astronomer, there is always one.
            </p>
            <Button type="primary" className="rounded">
              More..
            </Button>
          </div>
          <div className="bg-[#ff8100] col-span-4 rounded p-4 text-white">
            <div>Amazing Gifts</div>
            <p>No matter how far along you are in your sophistication</p>
            <Button type="primary" danger className="rounded">
              View
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheInfoCard;
