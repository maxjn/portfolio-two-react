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
            I like to learn when I have some free time for myself.. ❤️ <br></br>
            I have a particular sensitivity to standard and clean coding.
            <br></br> My main services are:
            <li className="ml-7 font-bold">
              {" "}
              Building stunning portfolio websites{" "}
            </li>
            <li className="ml-7 font-bold"> Front-end Web Development </li>
            Let's have a chat and discuss more about how I could make your
            products and projects stand out from competitors!
            <br></br>
            <br></br> Best Regards,&nbsp;<br></br>
            <b>Mohamad Haqnegahdar</b>
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
