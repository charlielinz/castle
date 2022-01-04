import Image from "next/image";
import selfie from "../../public/img/selfie.png";
import citiesocialLogo from "../../public/img/citiesocial-logo.svg";
import iiiLogo from "../../public/img/iii-logo.svg";
import moldex3dLogo from "../../public/img/moldex3d-logo.svg";
import Skills from "./Skills";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div>
        <div className="max-w-sm mx-auto px-8 pt-28 pb-8 flex justify-center lg:max-w-screen-lg lg:justify-start lg:px-14 lg:py-20 xl:px-4">
          <div>
            <p className="lg:animate-slide-in text-3xl lg:text-6xl">
              Welcome to Charlie's Castle.
            </p>
            <p className="lg:animate-slide-in text-sm pt-2 text-gray-600 lg:text-xl">
              You can find my legacy here, enjoy yourself !
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto px-8 py-16 flex flex-wrap-reverse justify-center items-center border-b border-gray-200 lg:pb-44 lg:justify-start lg:gap-20 lg:max-w-screen-lg lg:px-14 xl:px-4">
          <div>
            <h1 className="text-xl lg:animate-fadein-1500-1700">Art & Tech</h1>
            <h1 className="text-xl lg:animate-fadein-1500-1900">Emotional & Rational</h1>
            <h1 className="text-3xl lg:py-8 lg:text-6xl lg:animate-fadein-1500-2100">Charlie Lin</h1>
            <p className="flex mb-1 lg:animate-fadein-1500-2300">
              <span className="material-icons mr-2 ">location_on</span>
              <span>Taipei, Taiwan</span>
            </p>
            <p className="flex mb-1 lg:animate-fadein-1500-2500">
              <span className="material-icons-round mr-2">school</span>
              <span>NTHU PME(Bachelor)</span>
            </p>
            <p className="flex mb-1 lg:animate-fadein-1500-2700">
              <span className="material-icons-round mr-2">school</span>
              <span>NCTU Music Institute(Master)</span>
            </p>
            <p className="flex mb-1 lg:animate-fadein-1500-2900">
              <span className="material-icons-round mr-2 ">interests</span>
              <span>Travel, Food, Music</span>
            </p>
          </div>
          <div className="relative visible mb-8 h-60 w-60 lg:absolute lg:invisible lg:h-72 lg:w-72 lg:mb-0">
            <Image
              src={selfie}
              alt="profile pic"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
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
