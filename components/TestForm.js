import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-lg flex flex-col items-center gap-4 pt-8 lg:text-xl lg:pt-0"
        >
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </div>
    </header>
  );
}
