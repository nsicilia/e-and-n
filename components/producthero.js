import React from "react";
import Image from "next/image";
import { client, urlFor } from "../sanity";
import PortableText from "react-portable-text";
import { env } from "process";

export default function ProductHero({ product }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-EN-darkblue border-b-2 border-EN-darkblue py-2 text-lg px-1">
                Description
              </a>
            </div>

            <p className="leading-relaxed list-disc mb-4">
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={product.body}
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
            </p>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color Temperature</span>
              <span className="ml-auto text-gray-900">
                {product.colortemperature}
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Sizes</span>
              <span className="ml-auto text-gray-900">{product.sizes}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Great For:</span>
              <span className="ml-auto text-gray-900">{product.greatfor}</span>
            </div>
          </div>
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={urlFor(product.mainImage).url()}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
