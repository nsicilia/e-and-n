import Link from "next/link";
import Image from "next/image";
import { AllProducts } from "../../components/allproducts";
import { Top } from "../../components/top";
import { client, urlFor } from "../../sanity";

export default function Products({ products }) {
  return (
    <div>
      <Top />

      <main>
        <AllProducts />

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {/* The Grid of Products */}
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {products.map((item, id) => {
              return (
                <div key={id}>
                  <Link href={`/products/${item.slug.current}`}>
                    <div>
                      <Image
                        className="object-cover w-full h-56 mb-6 rounded border shadow-lg md:h-64 xl:h-80 hover:shadow-xl"
                        src={urlFor(item.mainImage).url()}
                        alt=""
                        height={750}
                        width={1260}
                      />
                      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                        {item.title}
                      </p>
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

export const getStaticProps = async () => {
  const query = ` *[_type == "product"] {
    _id,
    title,
    mainImage,
    slug {
      current
    }
    }`;

  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};
