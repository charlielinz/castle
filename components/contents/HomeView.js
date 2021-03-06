import Image from "next/image";
import citiesocialLogo from "../../public/img/citiesocial-logo.svg";
import iiiLogo from "../../public/img/iii-logo.svg";
import moldex3dLogo from "../../public/img/moldex3d-logo.svg";
import Skills from "./Skills";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto mb-20 lg:max-w-screen-lg">
        <div className="flex justify-center">
          <h1 className="py-16 text-4xl lg:py-28">Experience</h1>
        </div>
        <div className="flex flex-col gap-12 mx-auto">
          <div className="flex-wrap items-center lg:flex">
            <div className="flex w-full px-8 lg:w-1/2 lg:pl-28">
              <div className="relative w-24">
                <a href="https://www.citiesocial.com/" target="_blank">
                  <Image src={citiesocialLogo} alt="citiesocial logo" />
                </a>
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">QA Specialist</p>
                <p className="pt-2">
                  <a href="https://www.citiesocial.com/" target="_blank">
                    citiesocial
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>App & Web QA</li>
                <li>Manual functional & UI/UX testing</li>
                <li>Automaion testing using Appium in Python</li>
                <li>Load testing using Locust in Python</li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap items-center lg:flex">
            <div className="flex w-full px-8 lg:w-1/2 lg:pl-28">
              <div className="relative w-24 px-4 pt-4">
                <a href="https://www.iii.org.tw/" target="_blank">
                  <Image src={iiiLogo} alt="iii logo" />
                </a>
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">Associate Planner</p>
                <p className="pt-2">
                  <a href="https://www.iii.org.tw/" target="_blank">
                    III
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>Plan and implement the government bid plan</li>
                <li>Assist in implementing the income plan</li>
                <li>Think tank staff</li>
                <li>Event coordinator for Digital Taipei 2020</li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap items-center lg:flex">
            <div className="flex w-full px-8 lg:w-1/2 lg:pl-28">
              <div className="relative w-24 p-4">
                <a href="https://ch.moldex3d.com/" target="_blank">
                  <Image src={moldex3dLogo} alt="moldex3d logo" />
                </a>
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">QA Engineer</p>
                <p className="pt-2">
                  <a href="https://ch.moldex3d.com/" target="_blank">
                    Moldex3D
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>Moldex3D manual testing</li>
                <li>Product failures analysis</li>
                <li>Creating test case with CAD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto px-4 border-t border-gray-200 lg:max-w-screen-lg">
        <div className="flex justify-center">
          <h1 className="py-16 text-4xl lg:py-28">Skills</h1>
        </div>
        <Skills />
      </div>
    </header>
  );
};

export default HomeView;
