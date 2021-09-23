import selfie from "../img/selfie.png";
import citiesocialLogo from "../img/citiesocial-logo.svg";
import iiiLogo from "../img/iii-logo.svg";
import moldex3dLogo from "../img/moldex3d-logo.svg";
import pythonLogo from "../img/python-logo.png";
import css3Logo from "../img/css3-logo.png";
import html5Logo from "../img/html5-logo.png";
import bootstrapLogo from "../img/bootstrap-logo.png";
import tailwindcssLogo from "../img/tailwindcss-logo.svg";
import useScrollToAnchor from "../hooks/useScrollToAnchor";

const HomeView = () => {
  useScrollToAnchor()
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
          <div className="mb-8">
            <img
              src={selfie}
              alt="profile pic"
              className="h-60 w-60 rounded-full object-cover lg:h-72 lg:w-72"
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
              <img
                src={citiesocialLogo}
                alt="citiesocial logo"
                className="w-24"
              />
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
              <img src={iiiLogo} alt="iii logo" className="w-24 px-4" />
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
              <img
                src={moldex3dLogo}
                alt="moldex3d logo"
                className="w-24 p-4"
              />
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
                <img
                  src={pythonLogo}
                  alt="python logo"
                  className="m-2 h-12 w-12"
                />
                <div className="py-4 px-2 w-60">
                  <p className="text-xl font-extrabold">Python</p>
                </div>
              </div>
              <div>
                <p className="ml-16 px-2 pb-2">
                  As a self-study programmer, I choose Python to be my primary programming
                  language.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:w-1/3">
            <div className="p-4 bg-gray-100 rounded-lg lg:mx-0 lg:pl-3 lg:pr-8 lg:py-6">
              <div className="flex w-full">
                <img
                  src={html5Logo}
                  alt="html5 logo"
                  className="my-2 ml-3 mr-1 h-12 w-12"
                />
                <div className="py-4 px-2 w-60">
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
                <img src={css3Logo} alt="css3 logo" className="my-2 ml-4 mr-2 h-12 w-12" />
                <div className="py-4 px-2 w-60">
                  <p className="text-xl font-extrabold">CSS</p>
                </div>
              </div>
              <div>
                <div className="ml-16 px-2 pb-2">
                  CSS is your best friend to get HTML elements dressed. I used
                  to use
                  <p className="inline-block mx-1">
                    <img
                      src={bootstrapLogo}
                      alt="bootstrap logo"
                      className="pb-0.5 mx-0.5 h-4 w-4 inline-block"
                    />
                    bootstrap
                  </p>
                  as my CSS framework, now I'm using
                  <p className="inline-block mx-1">
                    <img
                      src={tailwindcssLogo}
                      alt="tailwindcss logo"
                      className="pb-0.5 mx-0.5 h-4 w-4 inline-block"
                    />
                    tailwindcss.
                  </p>
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
