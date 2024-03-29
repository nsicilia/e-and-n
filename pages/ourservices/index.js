import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { ServicesHeader } from "../../components/servicehero";
import { ServiceCard } from "../../components/servicecard";
import { client, urlFor } from "../../sanity";

export default function About({ services }) {
  return (
    <div>
      <Head>
        <title>E&N Contracting Group</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" />
      </Head>

      <Navbar />

      <main>
        <ServicesHeader />
        <div>
          {services.map((service, id) => {
            return (
              <div key={id}>
                <ServiceCard
                  item={service}
                  image={urlFor(service.mainImage).url()}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "service"] {
    _id,
    title,
    body,
    mainImage,
    point1,
    point3,
    point3,
    point4,
    point5,
    point6,
    }`;

  const services = await client.fetch(query);

  return {
    props: {
      services,
    },

    revalidate: 10,
  };
};
