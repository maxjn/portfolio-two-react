import heroImage from "../assets/hero.webp";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <section
      name="home"
      className="pt-[5.5rem] pb-4 px-10 lg:px-0  text-white  bg-gradient-to-b from-black via-black to-gray-800 h-fit md:h-screen "
    >
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center max-w-screen-lg mx-auto h-full gap-6">
        {/* Hero Text */}
        <div>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            {" "}
            I&apos;m a Full stack Developer{" "}
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            <br></br>I specialize in <b>MERN</b> & <b>Nextjs</b> full-stack
            development and always strive for <i>clean coding</i> practices.
            <br></br>
            <br></br> <b>My services</b> include building <i>efficient </i> &{" "}
            <i>responsive to user needs </i>web applications.
            <br></br>
            <br></br>
            Check out my work on GitHub or Linkedin! Let&apos;s chat about how
            we can make your products stand out from the rest!
            <br></br>
            <br></br>{" "}
            <i>
              Best regards,<b> Mohamad Haqnegahdar</b>
            </i>
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center my-2 py-3 px-6 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 ms-2 duration-300">
                <MdArrowForwardIos />
              </span>
            </Link>
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
