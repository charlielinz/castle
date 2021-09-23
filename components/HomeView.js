import Image from "next/image";
import selfie from "../public/img/selfie.png";
import citiesocialLogo from "../public/img/citiesocial-logo.svg";
import iiiLogo from "../public/img/iii-logo.svg";
import moldex3dLogo from "../public/img/moldex3d-logo.svg";
import pythonLogo from "../public/img/python-logo.png";
import css3Logo from "../public/img/css3-logo.png";
import html5Logo from "../public/img/html5-logo.png";
import bootstrapLogo from "../public/img/bootstrap-logo.png";
import tailwindcssLogo from "../public/img/tailwindcss-logo.svg";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div>
        <div className="max-w-sm mx-auto px-8 pt-28 pb-8 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
          <div>
            <p className="text-3xl lg:text-6xl lg:mb-4">
              Welcome to Charlie's Castle.
            </p>
            <p className="text-sm lg:text-xl text-gray-600">
              You can find my legacy here, enjoy yourself !
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto px-8 py-16 flex flex-wrap-reverse justify-center items-center border-b border-gray-200 lg:gap-20 lg:max-w-screen-lg lg:px-4">
          <div>
            <h1 className="text-xl">Art & Tech</h1>
            <h1 className="text-xl">Emotional & Rational</h1>
            <h1 className="text-5xl py-8 lg:text-6xl">Charlie Lin</h1>
            <p className="flex mb-1">
              <span className="material-icons mr-2">location_on</span>
              <span>Taipei, Taiwan</span>
            </p>
            <p className="flex mb-1">
              <span className="material-icons-round mr-2">school</span>
              <span>NTHU PME(Bachelor)</span>
            </p>
            <p className="flex mb-1">
              <span className="material-icons-round mr-2">school</span>
              <span>NCTU Music Institute(Master)</span>
            </p>
            <p className="flex mb-1">
              <span className="material-icons-round mr-2">interests</span>
              <span>Travel, Food, Music</span>
            </p>
          </div>
          <div className="relative mb-8 h-60 w-60 lg:h-72 lg:w-72">
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
                <Image src={citiesocialLogo} alt="citiesocial logo" />
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">QA Specialist</p>
                <p className="pt-2">citiesocial</p>
              </div>
            </div>
            <div className="flex pl-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>App & Web QA</li>
                <li>Manual functional & UI/UX testing</li>
                <li>Appium automaion testing with Python</li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap items-center lg:flex">
            <div className="flex w-full px-8 lg:w-1/2 lg:pl-28">
              <div className="relative w-24 px-4 pt-4">
                <Image src={iiiLogo} alt="iii logo" />
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">Associate Planner</p>
                <p className="pt-2">III</p>
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
                <Image src={moldex3dLogo} alt="moldex3d logo" />
              </div>
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">QA Engineer</p>
                <p className="pt-2">Moldex3D</p>
              </div>
            </div>
            <div className="flex px-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>Moldex3D software testing</li>
                <li>Moldex3D CAE analyst</li>
                <li>CAD Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto px-4 border-t border-gray-200 lg:max-w-screen-lg">
        <div className="flex justify-center">
          <h1 className="py-16 text-4xl lg:py-28">Skills</h1>
        </div>
        <div className="flex flex-col gap-4 mx-auto lg:flex-row lg:justify-center lg:gap-8">
          <div className="lg:flex lg:w-1/3">
            <div className="p-4 bg-gray-100 rounded-lg lg:mx-0 lg:pl-3 lg:pr-8 lg:py-6">
              <div className="flex w-full">
                <div className="m-2 h-12 w-12">
                  <Image src={pythonLogo} alt="python logo" />
                </div>
                <div className="py-4 px-2">
                  <p className="text-xl font-extrabold">Python</p>
                </div>
              </div>
              <div>
                <p className="ml-16 px-2 pb-2">
                  As a self-study programmer, I choose Python to be my primary
                  programming language.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:w-1/3">
            <div className="p-4 bg-gray-100 rounded-lg lg:mx-0 lg:pl-3 lg:pr-8 lg:py-6">
              <div className="flex w-full">
                <div className="m-2 h-12 w-12">
                  <Image src={html5Logo} alt="html5 logo" />
                </div>
                <div className="py-4 px-2">
                  <p className="text-xl font-extrabold">HTML</p>
                </div>
              </div>
              <div>
                <p className="ml-16 px-2 pb-2">
                  To organize a nice structure on your page, HTML is a must-have
                  language.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:w-1/3">
            <div className="p-4 bg-gray-100 rounded-lg lg:mx-0 lg:pl-3 lg:pr-8 lg:py-6">
              <div className="flex w-full">
                <div className="relative m-2 h-12 w-12">
                  <Image
                    src={css3Logo}
                    alt="css3 logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="py-4 px-2">
                  <p className="text-xl font-extrabold">CSS</p>
                </div>
              </div>
              <div>
                <div className="ml-16 px-2 pb-2">
                  CSS is your best friend to get HTML elements dressed. I used
                  to use
                  <div className="relative w-4 h-4 inline-block transform translate-y-0.5 ml-1 mr-0.5">
                    <Image
                      src={bootstrapLogo}
                      alt="bootstrap logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  bootstrap as my CSS framework, now I'm using
                  <div className="relative w-4 h-4 inline-block transform translate-y-0.5 ml-1 mr-0.5">
                    <Image
                      src={tailwindcssLogo}
                      alt="tailwindcss logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  tailwindcss.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeView;
