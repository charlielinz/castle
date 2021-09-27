import Image from "next/image";
import imiterReport from "../public/img/imiter-report.png";

const CodeProjectHolder = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-3xl lg:font-black lg:text-4xl">
          Learn from me.
        </p>
      </div>
      <div className="max-w-sm mx-auto px-8 pt-12 pb-12 lg:max-w-screen-lg lg:px-4 lg:py-28">
        <div className="grid grid-flow-row grid-cols-13 grid-rows-2 lg:mx-6 lg:pb-4">
          <span className="fas fa-robot text-2xl mt-3 ml-1 pt-0.5 lg:text-8xl lg:row-span-2 lg:col-span-2"></span>
          <h1 className="text-2xl col-start-2 col-end-13 mt-3 ml-5 lg:text-4xl lg:font-extrabold lg:col-start-3 lg:col-end-13 lg:mt-4 lg:ml-1">
            Imiter
          </h1>
          <p className="text-sm text-gray-600 col-start-1 col-end-13 ml-1 mb-2 lg:text-lg lg:col-start-3 lg:col-end-13 lg:mt-3">
            To test your apps with emulator automaticlly.
          </p>
        </div>
        <div className="relative flex lg:mx-6">
          <video autoPlay loop muted playsInline>
            <source src="/video/imiter.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute w-3/5 top-6 right-4">
            <Image
              src={imiterReport}
              alt="imiter report"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CodeProjectHolder;
