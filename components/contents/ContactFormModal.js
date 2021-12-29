import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ContactFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      reset({ name: "", email: "", message: "" });
    }, 500);
  };

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

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="mr-3 px-4 py-3 text-lg text-truegray-700 bg-truegray-200 rounded-2xl lg:transition-all lg:duration-300 hover:text-white hover:bg-truegray-400"
      >
        Contact me
      </button>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 shadow-xl rounded-2xl">
                {isSubmitSuccessful ? (
                  <>
                    <Dialog.Title className="text-2xl text-gray-900 transition">
                      Succeed!
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                      Your message has been sent successfully.
                    </Dialog.Description>
                  </>
                ) : (
                  <>
                    <Dialog.Title className="text-2xl text-gray-900">
                      Contact me!
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                      Any questions or cooperation invitations are welcome.
                    </Dialog.Description>
                    <form
                      className="text-lg flex flex-col items-start gap-4 pt-8 lg:pt-8"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="flex flex-col w-full">
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
                          id="submit-button"
                          type="submit"
                          value="Send it!"
                          className="appearance-none bg-truegray-300 rounded-lg py-2 mt-2 hover:bg-truegray-200 transition duration-300 focus:outline-none cursor-pointer"
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactFormModal;
