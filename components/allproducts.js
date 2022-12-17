import Link from "next/link";
import Image from "next/image";

export const AllProducts = ({ topProducts }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Products We Offer</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Image src="/ul.svg" alt="UL Listed" width={30} height={30} />
          <Image
            src="/dlccert.png"
            alt="DLC Certification"
            width={30}
            height={30}
          />
          <Image
            className=" pt-1"
            src="/ce-4.svg"
            alt="CE"
            width={30}
            height={30}
          />
          <Image
            className=" pt-1"
            src="/energy-star-3.svg"
            alt="Energy Star"
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* The Grid of Products */}
      {/* <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {topProducts.map((item, id) => {
          return (
            <div key={id}>
              <Link href={`/products/${item.slug}`}>
                <Image
                  className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                  src={item.image}
                  alt=""
                  height={750}
                  width={1260}
                />
                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  {item.title}
                </p>
                <p className="text-gray-700">{item.description}</p>
              </Link>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
