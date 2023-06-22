import portfolioBlog from "../assets/portfolio/portfolioBlog.jpg";
import myworkout from "../assets/portfolio/myworkout.jpg";
import starwars from "../assets/portfolio/starwars.jpg";
import promptopia from "../assets/portfolio/promptopia.jpg";
import airbnbClone from "../assets/portfolio/airbnbClone.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const portfolios = [
  {
    id: 1,
    src: portfolioBlog,
    demoLink: "https://maxjn-portfolio-blog.vercel.app/",
    codeLink: "https://github.com/maxjn/portfolio-blog",
  },
  {
    id: 2,
    src: myworkout,
    demoLink: "https://maxjn-my-workout.vercel.app/",
    codeLink: "https://github.com/maxjn/my-workout-mern",
  },
  {
    id: 3,
    src: starwars,
    demoLink: "https://maxjn-starwars.pages.dev/people",
    codeLink: "https://github.com/maxjn/starwars-react",
  },
  {
    id: 4,
    src: promptopia,
    demoLink: "https://maxjn-promptopia.vercel.app/",
    codeLink: "https://github.com/maxjn/promptopia",
  },
  {
    id: 5,
    src: airbnbClone,
    demoLink: "https://maxjn-airbnb-clone.vercel.app/",
    codeLink: "https://github.com/maxjn/airbnb-clone",
  },
  {
    id: 6,
    src: reactWeather,
    demoLink: "https://maxjn-weather-forcast.pages.dev/",
    codeLink: "https://github.com/maxjn/weather-forcast",
  },
];
function Portfolio() {
  return (
    <section
      name="portfolio"
      className="w-full h-full py-20 md:py-0  md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center px-10 lg:px-0"
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
                    target="_blank"
                    rel="noreferrer"
                    href={demoLink}
                    className=" inline-block text-center w-1/2 py-3 px-6 "
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
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
