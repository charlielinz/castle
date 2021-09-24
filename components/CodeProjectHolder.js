import Image from "next/image";
import imiterReport from "../public/img/imiter-report.png";
import useWindowWidth from "../hooks/useWindowWidth";

const CodeProjectHolder = () => {
  const windowWidth = useWindowWidth();
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-3xl font-black lg:text-4xl">
          Here are my profolios in coding.
        </p>
      </div>
      <div className="max-w-sm mx-auto px-8 pt-12 pb-12 lg:max-w-screen-lg lg:px-4 lg:py-28">
        {windowWidth > 1024 ? (
          <>
            <div className="flex items-center mx-6 pb-4">
              <p className="fas fa-robot text-8xl pr-4"></p>
              <div className="px-3">
                <h1 className="text-4xl font-extrabold pb-2">
                  Imiter
                </h1>
                <p className="text-lg text-gray-600">
                  To test your apps with emulator automaticlly.
                </p>
              </div>
            </div>
            <div className="relative flex mx-6">
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
          </>
        ) : (
          <>
            <div className="lg:mx-6">
              <div className="flex">
                <p className="fas fa-robot mt-1 pt-0.5 pr-2 text-xl"></p>
                <h1 className="text-2xl">
                  Imiter
                </h1>
              </div>
              <p className="py-2 px-1 text-gray-600 font-light">
                To test your apps with emulator automaticlly.
              </p>
            </div>
            <div className="relative flex">
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
          </>
        )}
      </div>
    </header>
  );
};

export default CodeProjectHolder;
