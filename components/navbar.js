import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [state, setState] = useState(false);
  const { asPath } = useRouter();

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Indoor Products", path: "javascript:void(0)" },
    { title: "Outdoor Products", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white w-full border-b sticky top-0 z-50 md:border-0 md:sticky">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src="/EandNlogo.svg"
              width={360}
              height={80}
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-EN-darkblue">
                  <Link
                    href={item.path}
                    className={asPath == item.path && "font-bold"}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className="inline-block md:hidden">
              <div>
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-white bg-EN-secondary hover:bg-EN-darkblue rounded-md shadow"
                >
                  Call us: (516) 655 3484
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="javascript:void(0)"
            className=" text-slate-800 font-bold hover:text-EN-darkblue"
          >
            Call us: (516) 655-3484
          </a>
        </div>
      </div>
    </nav>
  );
}
