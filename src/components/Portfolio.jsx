import ecommerceAdmin from "../assets/portfolio/Dashboard.webp";
import myworkout from "../assets/portfolio/myworkout.webp";
import starwars from "../assets/portfolio/starwars.webp";
import EcommerceStore from "../assets/portfolio/Store.webp";
import airbnbClone from "../assets/portfolio/airbnbClone.webp";
import netflixClone from "../assets/portfolio/netflix-clone.webp";

const portfolios = [
  {
    id: 4,
    src: ecommerceAdmin,
    demoLink: "https://maxjn-ecommerce-admin.vercel.app/",
    codeLink: "https://github.com/maxjn/ecommerce-admin",
  },
  {
    id: 1,
    src: EcommerceStore,
    demoLink: "https://maxjn-ecommerce-store.vercel.app/",
    codeLink: "https://github.com/maxjn/ecommerce-store",
  },
  {
    id: 5,
    src: airbnbClone,
    demoLink: "https://maxjn-airbnb-clone.vercel.app/",
    codeLink: "https://github.com/maxjn/airbnb-clone",
  },
  {
    id: 6,
    src: netflixClone,
    demoLink: "https://maxjn-netflix-clone.vercel.app/",
    codeLink: "https://github.com/maxjn/netflix-clone",
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
