import Image from "next/image";
import herobg from "/public/herobg.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function LandingPage() {
  return (
    <section className="bg-white dark:bg-slate-900 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 transition-transform duration-300">
        <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-start items-center transition-transform duration-300">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <p className="lg:text-end">
            <button className="inline-flex font-serif items-center justify-center px-5 py-3 mr-3 text-lg lg:text-xl font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 tracking-wide">
              <span className="mr-3">{"Get Started "} </span>
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </p>
        </div>
        <div className="order-first lg:order-last lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={herobg}
            alt="Blockchain Technology background"
            placeholder="empty"
            className="transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
