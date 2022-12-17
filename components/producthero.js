import React from "react";

export default function ProductHero() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              LED Flat Panel
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-EN-darkblue border-b-2 border-EN-darkblue py-2 text-lg px-1">
                Description
              </a>
            </div>
            {/* Description List */}
            <ul className="list-disc pl-5 mb-4">
              <li className="leading-relaxed mb-4">High energy efficiency</li>
              <li className="leading-relaxed mb-4">
                Ultra-slim edge lit design with high transmission diffuser
              </li>
              <li className="leading-relaxed mb-4">White frame construction</li>
              <li className="leading-relaxed mb-4">White frame construction</li>
            </ul>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color Temperature</span>
              <span className="ml-auto text-gray-900">3000K/4000K/5000K</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Sizes</span>
              <span className="ml-auto text-gray-900">
                2x2 (40W), 2x4 (35W/50W/60W/72W) & 1x4 (40W)
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Great For:</span>
              <span className="ml-auto text-gray-900">
                Schools/ hospitals, office, retails, commercial and more
              </span>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
}
