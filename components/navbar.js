import ThemeSwitch from "./index/theme";
// import Socials from "./footer/socials";

export default function NavBar() {
  return (
    <nav className="bg-transparent dark:bg-slate-900 shadow-sm border-b-2 border-x-0 border-t-0 border-slate-200 dark:border-slate-700 transition-transform duration-300 px-2 lg:p-3 inset-x-0">
      <div className="flex flex-row flex-wrap justify-between items-center px-4 py-2 transition-transform duration-300">
        <div className="text-slate-900 dark:text-white">
          <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap font-mono italic transition-transform duration-300 tracking-wide">
            Day Swap
          </span>
        </div>

        <div className="text-white dark:text-white flex flex-row text-xl divide-x-2 divide-slate-200 dark:divide-slate-700 items-center">
          <section className="mx-2 transition-transform text-xl md:text-2xl  duration-300 border-0 scale-75 rounded-full text-slate-900 bg-white hover:bg-transparent dark:text-white dark:bg-transparent hover:text-indigo-700 dark:hover:text-yellow-300 dark:hover:bg-transparent hover:-translate-y-1 hover:scale-110">
            {" "}
            <ThemeSwitch />
          </section>
          {/*  */}
          <section className="px-2"> {/* <Socials /> */}</section>
        </div>
      </div>
    </nav>
  );
}
