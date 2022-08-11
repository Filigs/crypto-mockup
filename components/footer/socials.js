import { ImGithub, ImLinkedin2 } from "react-icons/im";

export default function Socials() {
  const contacts = {
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };

  return (
    <ul
      id={"contacts"}
      className="flex rounded-xl border-0 md:flex-row lg:gap-1"
    >
      <span className="sr-only">{"Social Links"}</span>

      <li className="rounded-full p-1 lg:p-2 hover:-translate-y-1 hover:scale-110 text-slate-200 bg-transparent dark:bg-transparent text-xl md:text-2xl transition-transform duration-300">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn Profile"
        >
          <ImLinkedin2 />
          <span className="sr-only">{"Linkedin Profile"}</span>
        </a>
      </li>

      <li className="rounded-full items-center p-1 lg:p-2 hover:-translate-y-1 hover:scale-110 text-slate-200  bg-transparent dark:bg-transparent text-xl md:text-2xl transition-transform duration-300">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          alt="Github Profile"
        >
          <ImGithub />
          <span className="sr-only">{"Github Profile"}</span>
        </a>
      </li>
    </ul>
  );
}
