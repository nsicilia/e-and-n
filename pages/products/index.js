import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { AllProducts } from "../../components/allproducts";
import { Top } from "../../components/top";

export default function Products() {
  //List of top products
  const topProducts = [
    {
      image: "/products/2x4panel.jpg",
      title: "LED Premium Flat Panel 2'X4' ",
      slug: "led-premium-flat-panel-2x4",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/panel-light.webp",
      title: "LED Premium Flat Panel 2'X2' ",
      slug: "led-premium-flat-panel-2x2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      slug: "galaxies-orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      slug: "galaxies-orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      slug: "galaxies-orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      image: "/products/smd-tube-light.jpeg",
      title: "Galaxies Orion",
      slug: "galaxies-orion",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
  ];

  return (
    <div>
      <Top />

      <main>
        <AllProducts topProducts={topProducts} />

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {/* The Grid of Products */}
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {topProducts.map((item, id) => {
              return (
                <div key={id}>
                  {/* <Link
                    href={{
                      pathname: `/products/${item.slug}`,
                      query: { topProducts },
                    }}
                  >
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
                  </Link> */}

                  <Link
                    href={{
                      pathname: `/products/${item.slug}`,
                      query: { topProducts },
                    }}
                  >
                    <div>
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
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
