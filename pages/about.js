import Image from "next/image";
import { AboutUs } from "../components/aboutus";
import { Statistics } from "../components/stats";
import { Top } from "../components/top";
import { client, urlFor } from "../sanity";

export default function About({ about }) {
  console.log(about);

  return (
    <div>
      <Top />

      <main>
        <AboutUs />
        <Statistics />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = ` *[_type == "about"] {
    _id,
    title,
    description,
    image,
    "slug": slug.current,
    }`;

  const about = await client.fetch(query);

  return {
    props: {
      about,
    },
  };
};
