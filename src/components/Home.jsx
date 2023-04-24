import heroImage from "../assets/hero.jpg";
import { MdArrowForwardIos } from "react-icons/md";

function Home() {
  return (
    <section className="pt-[5.5rem] pb-4 px-10 lg:px-0  text-white bg-gradient-to-b from-black via-black to-gray-800 h-screen ">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center max-w-screen-lg mx-auto h-full gap-6">
        {/* Hero Text */}
        <div>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            {" "}
            I'm a Front-end Developer{" "}
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            I like to learn when I have some free time for myself.. ❤️ <br></br>
            I have a particular sensitivity to standard and clean coding.
            <br></br> My main services are:
            <li className="ml-7 font-bold">
              {" "}
              Creating Custom WordPress Themes
            </li>
            <li className="ml-7 font-bold"> Coding Fron-end </li>
            Let's have a chat and discuss more about how I could make your
            products and projects stand out from competitors!
            <br></br>
            <br></br> Best Regards,&nbsp;<br></br>
            <b>Muhammad (Maxjn)</b>
          </p>
          <div>
            <button className="group flex items-center my-2 py-3 px-6 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              Portfolio
              <span className="group-hover:rotate-90 ms-2 duration-300">
                <MdArrowForwardIos />
              </span>
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <figure className=" w-2/3 md:w-full mx-auto rounded-2xl overflow-hidden max-w-md">
          <img src={heroImage} alt="My Profile" />
        </figure>
      </div>
    </section>
  );
}

export default Home;
