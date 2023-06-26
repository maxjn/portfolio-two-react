import { Link } from "react-scroll";
import { MdArrowForwardIos } from "react-icons/md";
function About() {
  return (
    <section
      name="about"
      className="px-10 lg:px-0 w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex items-center"
    >
      <div className="max-w-screen-lg  mx-auto ">
        <div className="">
          <h3 className=" inline text-4xl border-b-4 border-gray-500">About</h3>
        </div>
        <div>
          <p className="text-xl mt-20 pb-8">
            I'm Mohamad Haqnegahdar , aka Maxjn! 😃
            <br></br>I specialize in <b>MERN</b> & <b>Nextjs</b> full-stack
            development and always strive for <i>clean coding</i> practices.
            <br></br> <b>My services</b> include building <i>efficient </i> &{" "}
            <i>responsive to user needs </i>web applications.
            <br></br>
            Check out my work on GitHub or Linkedin! Let's chat about how we can
            make your products stand out from the rest!
            <br></br>
            <br></br>{" "}
            <i>
              Best regards,<b> Mohamad Haqnegahdar</b>
            </i>
          </p>
          <Link
            to="contact"
            smooth
            duration={500}
            className="group flex items-center my-2 py-3 px-6 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg cursor-pointer"
          >
            Let's Talk
            <span className="group-hover:rotate-90 ms-2 duration-300">
              <MdArrowForwardIos />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
