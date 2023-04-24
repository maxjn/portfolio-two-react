import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialLinks = [
  {
    id: 1,
    child: (
      <>
        Linkdin <FaLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/in/maxjn/",
    style: "rounded-tr-md",
    download: false,
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={25} />
      </>
    ),
    href: "mailto:maxjn763@gmail.com",
    style: "",
    download: false,
  },
  {
    id: 3,
    child: (
      <>
        Email <MdOutlineMail size={25} />
      </>
    ),
    href: "https://github.com/maxjn",
    style: "",
    download: false,
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={25} />
      </>
    ),
    href: "../assets/html.png",
    style: "rounded-br-md",
    download: true,
  },
];

function SocialLinks() {
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 text-white">
      <ul>
        {socialLinks.map(({ id, child, href, style, download }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            download={download}
          >
            <li
              className={
                "bg-gray-500  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-out cursor-pointer flex justify-between items-center px-4   h-14 w-40 align-middle " +
                style
              }
            >
              {child}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
