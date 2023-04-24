function Contact() {
  return (
    <section
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center px-10 lg:px-0"
    >
      <div className="max-w-screen-lg  mx-auto ">
        {/* Title */}
        <div className="pb-8">
          <h3 className=" inline text-4xl border-b-4 border-gray-500">
            Contact
          </h3>
          <p className="py-6 text-xl">
            Let's have a chat and discuss more about how I could make your
            products and projects stand out from competitors!
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* Form */}
          <form
            action="https://getform.io/f/64fe657d-69cd-4ab9-a899-474226923272"
            method="POST"
            className="w-full max-w-md flex flex-col gap-4 items-center justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="bg-transparent rounded-md border-white p-2 focus:outline-none border-2 w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="bg-transparent rounded-md border-white p-2 focus:outline-none border-2 w-full "
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message..."
              className="bg-transparent rounded-md border-white p-2 focus:outline-none border-2 w-full "
            ></textarea>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-md w-fit my-4">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
