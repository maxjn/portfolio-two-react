import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
    style: "shadow-white",
  },
  {
    id: 7,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
];

function Experience() {
  return (
    <section
      name="portfolio"
      className="w-full h-full py-20 md:py-0 md:h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex items-center px-10 lg:px-0"
    >
      <div className="max-w-screen-lg  mx-auto w-full ">
        {/* Title */}
        <div className="pb-8">
          <h3 className=" inline text-4xl border-b-4 border-gray-500">
            Experience
          </h3>
          <p className="py-6 text-xl">
            These are the technologies I've worked with
          </p>
        </div>
        <div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md ${style} rounded-lg py-4 group`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-20 mx-auto group-hover:scale-105 duration-500"
                />

                <p className="pt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
