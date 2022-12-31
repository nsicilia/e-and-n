import Image from "next/image";

export const Statistics = ({ about }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {about.stat1}
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
          <p className="mb-2 font-bold md:text-lg">{about.stat1title}</p>
          <p className="text-gray-700">{about.stat1description}</p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {about.stat2}
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
          <p className="mb-2 font-bold md:text-lg">{about.stat2title}</p>
          <p className="text-gray-700">{about.stat2description}</p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {about.stat3}
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
          <p className="mb-2 font-bold md:text-lg">{about.stat3title}</p>
          <p className="text-gray-700">{about.stat3description}</p>
        </div>
      </div>
    </div>
  );
};
