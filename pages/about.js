import Head from "next/head";
import Image from "next/image";
import { AboutUs } from "../components/aboutus";
import Navbar from "../components/navbar";
import { Statistics } from "../components/stats";
import { Top } from "../components/top";

export default function About() {
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
