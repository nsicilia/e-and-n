import { useRouter } from "next/router";
import { Top } from "../../components/top";
import ProductHero from "../../components/producthero";
import { client, urlFor } from "../../sanity";

const ProductSlug = ({ item }) => {
  return (
    <div>
      <Top />

      <main>
        <ProductHero product={item} />
      </main>
    </div>
  );
};

export default ProductSlug;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    _id,
    title,
    body,
    mainImage,
    colortemperature,
    sizes,
    greatfor,
    "slug": slug.current,
}`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    colortemperature,
    sizes,
    greatfor,
    "slug": slug.current,
}`;

  const product = await client.fetch(query, { slug: params?.slug });

  return {
    props: {
      item: product,
    },
  };
};
