import { useForm } from "react-hook-form";
import { useEffect } from "react";

const MessageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    fetch("/api/sgmailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    isSubmitSuccessful && reset({ name: "", email: "", message: "" });
  });

  return (
    <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4">
      <form
        className="text-lg flex flex-col items-center gap-4 pt-8 lg:text-xl lg:pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-4/5 lg:w-1/2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Please write down your name.",
              },
            })}
            placeholder="Charlie Lin"
            className="mt-2 mb-2 px-2 py-2 rounded-sm focus:outline-none"
          />
          <p className="mb-2 text-sm text-red-500">
            {errors.name && errors.name.message}
          </p>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Please write down your email.",
              },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please write down a valid email.",
              },
            })}
            placeholder="example@gmail.com"
            className="mt-2 mb-2 px-2 py-2 rounded-sm focus:outline-none"
          />
          <p className="mb-2 text-sm text-red-500">
            {errors.email && errors.email.message}
            {errors.email && errors.email.pattern}
          </p>
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Please write down the message.",
              },
            })}
            className="mt-2 mb-2 px-2 py-2 h-32 rounded-sm focus:outline-none"
          />
          <p className="mb-2 text-sm text-red-500">
            {errors.message && errors.message.message}
          </p>
          <input
            type="submit"
            value="Send it!"
            className="appearance-none bg-truegray-300 rounded-lg py-2 mt-2 hover:bg-truegray-200 transition duration-300 focus:outline-none cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
