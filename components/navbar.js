import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-500 transition-transform duration-300">
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <div className="text-slate-900 dark:text-white ">
          <span className="self-center text-xl font-semibold whitespace-nowrap italic">
            Filipe Martins
          </span>
        </div>

        <div className="text-slate-900 dark:text-white flex flex-row text-xl divide-x-2 divide-slate-200 dark:divide-slate-700 items-center">
          <section className="mx-2 transition-transform duration-300 border-0 scale-75 rounded-full text-white bg-indigo-600 hover:bg-inherit dark:bg-sky-500 hover:text-indigo-600 dark:hover:text-inherit dark:hover:bg-transparent hover:-translate-y-1 hover:scale-110">
            {" "}
            <ThemeSwitch />
          </section>
          <section className="px-2">
            {" "}
            <Socials />
          </section>
        </div>
      </div>
    </nav>
  );
}
