import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const portfolios = [
  {
    id: 1,
    src: arrayDestruct,
    demoLink: "",
    codeLink: "",
  },
  {
    id: 2,
    src: installNode,
    demoLink: "",
    codeLink: "",
  },
  {
    id: 3,
    src: navbar,
    demoLink: "",
    codeLink: "",
  },
  {
    id: 4,
    src: reactParallax,
    demoLink: "",
    codeLink: "",
  },
  {
    id: 5,
    src: reactSmooth,
    demoLink: "",
    codeLink: "",
  },
  {
    id: 6,
    src: reactWeather,
    demoLink: "",
    codeLink: "",
  },
];
function Portfolio() {
  return (
    <section
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center px-10 lg:px-0"
    >
      <div className="max-w-screen-lg  mx-auto ">
        {/* Title */}
        <div className="pb-8">
          <h3 className=" inline text-4xl border-b-4 border-gray-500">
            Portfolio
          </h3>
          <p className="py-6 text-xl">Check out some of my works here</p>
        </div>
        <div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolios.map(({ id, src, demoLink, codeLink }) => (
              <article
                key={id}
                className="group block rounded-lg shadow-md shadow-gray-500"
              >
                <figure className="rounded-lg overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="group-hover:scale-105 duration-300"
                  />
                </figure>
                <div className="flex items-center justify-center">
                  <a
                    href={demoLink}
                    className=" inline-block text-center w-1/2 py-3 px-6 "
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    className=" inline-block text-center w-1/2 py-3 px-6 "
                  >
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
