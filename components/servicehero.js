import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "./contactform";
export const ServicesHeader = () => {
  return (
    <div className="relative">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Commercial Services
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-800 md:text-lg">
              We are Long island&apos;s premiere commercial light installer
              committed to delivering excellent customer service, using quality
              products provided by a knowledgeable team.
            </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl border-EN-secondary p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Get a Free Energy Audit
              </h3>

              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
