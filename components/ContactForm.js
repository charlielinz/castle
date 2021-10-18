import { useState } from "react";

const EmailValidation = (email) => {
  const mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (email.value.match(mail_format)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
};

const ContactForm = () => {
  const hint = {
    success: { title: "Succeed!", text: "Email is sent successfully." },
    failure: { title: "Warning!", text: "Make sure you enter all fields." },
  };

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [hintMessage, setHintMessage] = useState(hint.success);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    if (value) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const email_pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.match(email_pattern)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (value) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };
    if (nameIsValid && emailIsValid && messageIsValid && name && email && message) {
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
    } else {
      setSubmit(true);
      setHintMessage(hint.failure);
    }
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
              <p className="text-2xl">{hintMessage.title}</p>
              <p className="pt-4">{hintMessage.text}</p>
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
              placeholder="ex: Charlie Lin"
              autoComplete="off"
              className={
                nameIsValid
                  ? "mt-2 mb-1 px-2 py-2 rounded-sm focus:outline-none"
                  : "mt-2 mb-1 px-2 py-2 rounded-sm focus:outline-none border border-red-500"
              }
              onChange={(e) => {
                handleName(e);
              }}
              onClick={() => setNameIsValid(false)}
            />
            <p className="ml-1 text-sm text-red-500">
              {nameIsValid ? "" : "Name is required."}
            </p>
          </div>
          <div className="flex flex-col w-4/5 lg:w-1/2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="ex: example@gmail.com"
              autoComplete="off"
              className={
                emailIsValid
                  ? "mt-2 mb-1 px-2 py-2 rounded-sm focus:outline-none"
                  : "mt-2 mb-1 px-2 py-2 rounded-sm focus:outline-none border border-red-500"
              }
              onChange={(e) => {
                handleEmail(e);
              }}
              onClick={() => setEmailIsValid(false)}
            />
            <p className="ml-1 text-sm text-red-500">
              {emailIsValid ? "" : "Please enter a valid email."}
            </p>
          </div>
          <div className="flex flex-col w-4/5 lg:w-1/2">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              autoComplete="off"
              className={
                messageIsValid
                  ? "mt-2 mb-1 px-2 py-2 h-32 rounded-sm focus:outline-none"
                  : "mt-2 mb-1 px-2 py-2 h-32 rounded-sm focus:outline-none border border-red-500"
              }
              onChange={(e) => {
                handleMessage(e);
              }}
              onClick={() => setMessageIsValid(false)}
            />
            <p className="ml-1 text-sm text-red-500">
              {messageIsValid ? "" : "Message is required."}
            </p>
          </div>
          <input
            type="submit"
            value="Send it!"
            className="appearance-none bg-truegray-300 rounded-lg py-2 w-4/5 lg:w-1/2 hover:bg-truegray-200 transition duration-300 focus:outline-none cursor-pointer"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
          <p></p>
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
