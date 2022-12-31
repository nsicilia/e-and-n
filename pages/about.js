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
        <AboutUs
          title={about.abouttitle}
          body={about.aboutdescription}
          img1={about.firstimage}
          img2={about.secondimage}
          img3={about.thirdimage}
        />
        <Statistics about={about} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "aboutpagesingle"][0] {
    _id,
    abouttitle,
    aboutdescription,
    firstimage,
    secondimage,
    thirdimage,
    stat1,
    stat1title,
    stat1description,
    stat2,
    stat2title,
    stat2description,
    stat3,
    stat3title,
    stat3description,
    }`;

  const about = await client.fetch(query);

  return {
    props: {
      about,
    },

    revalidate: 10,
  };
};
