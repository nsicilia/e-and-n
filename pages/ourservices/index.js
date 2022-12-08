import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { ServicesHeader } from "../../components/servicehero";
import { ServiceCard } from "../../components/servicecard";

export default function About() {
  //list of services
  const serviceOfferings = [{ one: "two" }, { one: "two" }, { one: "two" }];

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
          {serviceOfferings.map((item, id) => {
            return (
              <div key={id}>
                <ServiceCard />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}