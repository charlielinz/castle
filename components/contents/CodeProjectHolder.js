import Image from "next/image";
import imiterReport from "../public/img/imiter-report.png";

const CodeProjectHolder = () => {
  return (
    <div className="max-w-sm mx-auto px-8 py-8 lg:max-w-screen-lg lg:px-4">
      <div className="grid grid-flow-row grid-cols-13 grid-rows-2 lg:mx-6 lg:pb-4">
        <h1 className="text-2xl col-start-1 col-end-13 mt-3 lg:text-3xl lg:font-extrabold lg:col-start-1 lg:col-end-13 lg:mt-4">
          Imiter
        </h1>
        <p className="text-sm text-gray-600 col-start-1 col-end-13 mb-2 lg:text-lg lg:col-start-1 lg:col-end-13 lg:mt-3">
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
      <div className="lg:mx-6 lg:mt-4 mt-4 text-sm lg:text-lg">
        <ul className="lg:mx-1">
          <li className="list-item list-inside list-disc lg:py-1">
            Easy to do automation testing on mobile apps.
          </li>
          <li className="list-item list-inside list-disc lg:py-1">
            Using Appium framework: can drive iOS, Android and Windows apps.
          </li>
          <li className="list-item list-inside list-disc lg:py-1">
            Export a HTML report with details after testing is done.
          </li>
          <li className="list-item list-inside list-disc lg:py-1">
            Self-made element-selector parser.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodeProjectHolder;
