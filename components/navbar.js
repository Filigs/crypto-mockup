import ThemeSwitch from "./index/theme";
// import Socials from "./navbar/socials";
// import LaunchApp from "./app/launch";

export default function NavBar() {
  return (
    <nav className="bg-inherit dark:bg-inherit transition-transform duration-300">
      <div className="flex flex-row flex-wrap justify-around items-center mt-8 pb-8 max-w-full">
        <div className="text-gray-900 dark:text-white ">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Deverano
          </span>
        </div>
        <div className="mx-2 transition-transform duration-300 border-0 scale-75 rounded-full text-white bg-blue-600 hover:bg-inherit dark:bg-yellow-400 hover:text-blue-600 dark:hover:text-yellow-200 dark:hover:bg-transparent hover:-trangray-y-1 hover:scale-110">
          <ThemeSwitch />
        </div>
        <div className="text-gray-900 dark:text-white leading-relaxed flex flex-row text-xl divide-x-2 divide-gray-200 dark:divide-gray-700 items-center">
          {/* <LaunchApp className="p-2" /> */} {"Soon"}
        </div>
      </div>
    </nav>
  );
}
