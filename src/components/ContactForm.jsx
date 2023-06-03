import { useState } from "react";
import axios from "axios";


export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Todo: send data to server
    const res = await axios.post(
      "https://",
      formData
    );
    setFormData({
      name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
    })
  };
  return (
    <div className="bg-web text-txt">
      <div className="md:mx-40 mx-5 py-10 md:py-20">
        <div className="flex md:flex-row flex-col max-md:gap-10 justify-between items-start">
          <div className="md:w-1/3 w-full">
            <h1 className="md:text-xl text-lg">Contact with us through filling this form:</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  md:w-2/3 w-full gap-6 font-regular ">
            <div className="flex flex-col gap-4">
              <h1>
                {" "}
                Full Name:<span className="text-red-500">*</span>
              </h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-200 border-opacity-50 rounded-md p-2 w-full bg-bg text-white"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1>
                {" "}
                Mobile:<span className="text-red-500">*</span>
              </h1>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border-2 border-gray-200 border-opacity-50 rounded-md p-2 w-full bg-bg text-white"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1>
                {" "}
                Email Address:<span className="text-red-500">*</span>
              </h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-200 border-opacity-50 rounded-md p-2 w-full bg-bg text-white"
                placeholder="Your email"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1> Company:</h1>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border-2 border-gray-200 border-opacity-50 rounded-md p-2 w-full bg-bg text-white"
                placeholder="Company"
              />
            </div>
            <div className="flex flex-col gap-4 items-start justify-start">
              <h1>
                {" "}
                Message:<span className="text-red-500">*</span>
              </h1>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-2 border-gray-200 border-opacity-50 rounded-md p-2   w-full h-56 text-justify  bg-bg text-white"
                placeholder="Type your Message here....."
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-btn text-white p-4 text-center justify-center items-center  w-1/4 flex ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}