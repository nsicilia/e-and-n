import Image from "next/image";

export const Statistics = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              6K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <Image
                src="/lightbulb-regular.svg"
                alt="Purple Lantern Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Lights Installed</p>
          <p className="text-gray-700">
            Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
            Amazon. They’re very famous and very high-maintenance effort.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              11,000 kWh
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-black w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Energy Saved</p>
          <p className="text-gray-700">
            One day, after filming a scene deep in the rainforest, the three
            actors and their agents decide to head back to home base by foot.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              174
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <Image
                src="/face-smile-regular.svg"
                alt="Purple Lantern Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Happy Customers</p>
          <p className="text-gray-700">
            Suddenly, they come to a large river. On the riverbank, they find a
            small rowboat, but it’s only big enough to hold two of them at one
            time.
          </p>
        </div>
      </div>
    </div>
  );
};
