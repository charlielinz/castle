import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setSubmit(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-28 pb-8 lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="flex justify-center text-3xl lg:font-black lg:text-4xl">
          Contact me.
        </p>
      </div>
      <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4">
        {submit ? (
          <div
            className="fixed z-50 max-w-sm bg-gray-50 w-3/4 lg:w-1/4 inset-x-0 mx-auto rounded-2xl lg:max-w-screen-lg"
            onClick={() => setSubmit(false)}
          >
            <div className="p-8">
              <p className="text-2xl">Succeed!</p>
              <p className="pt-4">Email is sent successfully.</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        <form className="text-lg flex flex-col items-center gap-4 pt-8 lg:text-xl lg:pt-0">
          <div className="flex flex-col w-4/5 lg:w-1/2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Charlie Lin"
              className="my-2 px-2 py-1 focus:outline-none"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-4/5 lg:w-1/2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="example@gmail.com"
              className="my-2 px-2 py-1 focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-4/5 lg:w-1/2">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              className="my-2 px-2 py-1 h-32 focus:outline-none"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="rounded-lg py-2 w-4/5 lg:w-1/2 hover:bg-truegray-200 transition duration-300 focus:outline-none"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
      <div
        className={
          submit ? "fixed z-30 top-0 h-full w-full bg-black opacity-60" : ""
        }
        onClick={() => setSubmit(false)}
      />
    </header>
  );
};

export default ContactForm;
