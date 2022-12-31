import Link from "next/link";
import Image from "next/image";
import PortableText from "react-portable-text";
import { urlFor } from "../sanity";

export const Hero = ({ hero }) => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {hero.title && hero.title}
            </h2>

            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={hero.overview}
              serializers={{
                h1: (props) => (
                  <h1 className="text-2xl font-bold">{props.children}</h1>
                ),
                h2: (props) => (
                  <h2 className="text-xl font-bold">{props.children}</h2>
                ),
                h3: (props) => (
                  <h3 className="text-lg font-bold">{props.children}</h3>
                ),
                li: (props) => (
                  <li className="leading-relaxed mb-4">{props.children}</li>
                ),
                link: (href, children) => (
                  <a href={href} className="text-EN-darkblue">
                    {children}
                  </a>
                ),
              }}
            />
          </div>

          <div className="flex flex-col items-center md:flex-wrap md:items-start">
            <p>Call for a FREE Estimate: </p>
            <br></br>
            <a
              href="tel:516-655-3484"
              aria-label="phone"
              className="py-3 px-4 text-black bg-EN-primary hover:bg-EN-darkblue hover:text-white rounded-md shadow rounded font-semibold transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <span className="flex">
                <Image
                  src="/phone-solid.svg"
                  alt="call now"
                  width={20}
                  height={20}
                  className="mr-2"
                />{" "}
                &#40;516&#41; 655&#45;3484
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <div className="relative h-60 w-full md:h-full">
          <Image
            className="object-cover w-full h-56 rounded shadow-lg md:rounded-none lg:rounded-l lg:shadow-none sm:h-96 lg:h-full"
            src={urlFor(hero.mainImage).url()}
            alt="We install high qualaity lights"
            priority
            // height={656}
            // width={960}
            fill
          />
        </div>
      </div>
    </div>
  );
};
