import { useRouter } from "next/router";
import { Top } from "../../components/top";
import ProductHero from "../../components/producthero";

const ProductSlug = () => {
  const router = useRouter();
  const topProducts = router.query;

  console.log(topProducts);

  return (
    <div>
      <Top />

      <main>
        {/* <p>{item.slug}</p> */}
        <ProductHero />
      </main>
    </div>
  );
};

export default ProductSlug;
