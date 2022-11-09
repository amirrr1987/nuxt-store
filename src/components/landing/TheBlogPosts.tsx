import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const TheBlogPosts = () => {
  const list: any = [
    { title: "How to promote brands" },
    { title: "How we handle shipping" },
    { title: "How to promote brands" },
    { title: "Success story of sellers" },
  ];
  const Cards = (): any => {
    return list.map((item: any, index: number) => {
      return (
        <figure className="col-span-12 md:col-span-6 lg:col-span-3" key={index}>
          <img
            style={{ aspectRatio: "3/2" }}
            className="aspect-3-2 rounded"
            src={`/src/assets/images/posts/${index + 1}.webp`}
            alt=""
          />
          <figcaption className="py-2">
            <h6 className="mt-0 mb-1 box-border text-base font-semibold leading-tight text-[rgba(33,37,41,1)] hover:text-[rgba(10,88,202,1)]">
              {item.title}
            </h6>
            <p className="mt-0 mb-4 box-border ">
              When you enter into any new area of science, you almost reach
            </p>
          </figcaption>
        </figure>
      );
    });
  };
  return (
    <section className="py-12">
      <div className="container mx-auto px-8">
        <h3 className="mb-8 box-border font-semibold leading-tight xl:text-3xl text-[rgba(33,37,41,1)] text-[calc(1.3rem_+_0.6vw)]">
          Blog posts
        </h3>
        <div className="grid grid-cols-12 gap-8">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default TheBlogPosts;
