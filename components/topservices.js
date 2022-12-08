import Link from "next/link";
import Image from "next/image";

export const TopServices = () => {
  //List of top products
  const topProducts = [
    {
      image: "/products/smd-tube-light.jpeg",
      title: "LED Premium Flat Panel 2'X4'",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/panel-light.webp",
      title: "LED Panel Lights",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          {/* The Lightning bolt icon */}
          <div aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-EN-secondary">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  className="text-white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>

          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Product Categories</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          &quot;Sed ut perspiciatis unde omnis iste natus error sit iste
          voluptatem accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste.&quot;
        </p>
      </div>

      {/* The Grid of Products */}
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {topProducts.map((item, id) => {
          return (
            <div key={id}>
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
            </div>
          );
        })}
      </div>

      {/* The See More button */}
      <div className="text-center">
        <Link
          href="/products"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-EN-darkblue"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};