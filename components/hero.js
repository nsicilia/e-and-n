import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The highest quality Commercial & Industrial Lighting
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-wrap md:items-start">
            <p>Call for a FREE Estimate: </p>
            <br></br>
            <Link
              href="/"
              aria-label=""
              className="py-3 px-4 text-white bg-EN-secondary hover:bg-EN-darkblue rounded-md shadow rounded font-semibold transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              (516) 655 3484
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <Image
          className="object-cover w-full h-56 rounded shadow-lg md:rounded-none lg:rounded-l lg:shadow-none sm:h-96 lg:h-full"
          src="/lights_in_bay.jpg"
          alt="We install high qualaity lights"
          priority
          height={656}
          width={960}
        />
      </div>
    </div>
  );
};
