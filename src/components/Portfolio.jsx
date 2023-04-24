import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
function Portfolio() {
  return (
    <section
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center"
    >
      <div className="max-w-screen-lg  mx-auto ">
        {/* Title */}
        <div className="">
          <h3 className=" inline text-4xl border-b-4 border-gray-500">
            Portfolio
          </h3>
        </div>
        <div>
          {/* Cards */}
          <article className="">
            <figure>
              <img src="" alt="" />
            </figure>
            <div>
              <button></button>
              <button></button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
