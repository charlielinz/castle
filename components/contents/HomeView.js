import Image from "next/image";
import selfie from "../../public/img/selfie.png";
import citiesocialLogo from "../../public/img/citiesocial-logo.svg";
import iiiLogo from "../../public/img/iii-logo.svg";
import moldex3dLogo from "../../public/img/moldex3d-logo.svg";
import bootstrapLogo from "../../public/img/bootstrap-logo.png";
import tailwindcssLogo from "../../public/img/tailwindcss-logo.svg";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div>
        <div className="max-w-sm mx-auto px-8 pt-28 pb-8 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
          <div>
            <p className="text-3xl lg:text-6xl lg:mb-4">
              Welcome to Charlie's Castle.
            </p>
            <p className="text-sm pt-2 lg:text-xl text-gray-600">
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
          <div className="relative mb-8 h-60 w-60 lg:h-72 lg:w-72 lg:mb-0">
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
            <div className="flex pl-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>App & Web QA</li>
                <li>Manual functional & UI/UX testing</li>
                <li>Appium automaion testing with Python</li>
                <li>Load testing with Locust in Python</li>
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
        <div className="flex flex-col flex-wrap mx-auto lg:flex-row lg:justify-center">
          <div className="lg:w-1/3 lg:flex lg:items-stretch">
            <div className="bg-gray-100 rounded-lg grid grid-cols-5 auto-rows-min py-8 px-6 m-2 lg:grid-cols-5 lg:px-8 lg:m-4">
              <div className="h-12 w-12">
                <i className="fab fa-python text-5xl text-yellow-400" />
              </div>
              <div className="col-start-2 col-end-6 flex items-center ml-1 lg:col-start-2 lg:col-end-6">
                <p className="text-xl font-extrabold">Python</p>
              </div>
              <div className="col-start-2 col-end-6 mt-3 ml-1 lg:col-start-2 lg:col-end-6">
                <p>
                  As a self-study programmer, I choose Python to be my primary
                  programming language.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:flex lg:items-stretch">
            <div className="bg-gray-100 rounded-lg grid grid-cols-5 auto-rows-min py-8 px-6 m-2 lg:grid-cols-5 lg:px-8 lg:m-4">
              <div className="h-12 w-12">
                <i className="fab fa-html5 text-5xl text-yellow-600" />
              </div>
              <div className="col-start-2 col-end-6 flex items-center ml-1 lg:col-start-2 lg:col-end-6">
                <p className="text-xl font-extrabold">HTML</p>
              </div>
              <div className="col-start-2 col-end-6 mt-3 ml-1 lg:col-start-2 lg:col-end-6">
                <p>
                  To organize a nice structure on your page, HTML is a must-have
                  language.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:flex lg:items-stretch">
            <div className="bg-gray-100 rounded-lg grid grid-cols-5 auto-rows-min py-8 px-6 m-2 lg:grid-cols-5 lg:px-8 lg:m-4">
              <div className="h-12 w-12">
                <i className="fab fa-css3-alt text-5xl text-blue-600" />
              </div>
              <div className="col-start-2 col-end-6 flex items-center ml-1 lg:col-start-2 lg:col-end-6">
                <p className="text-xl font-extrabold">CSS</p>
              </div>
              <div className="col-start-2 col-end-6 mt-3 ml-1 lg:col-start-2 lg:col-end-6">
                <div>
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
                  Bootstrap as my CSS framework, now I'm using
                  <div className="relative w-4 h-4 inline-block transform translate-y-0.5 ml-1 mr-0.5">
                    <Image
                      src={tailwindcssLogo}
                      alt="tailwindcss logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  TailwindCSS.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:flex lg:items-stretch">
            <div className="bg-gray-100 rounded-lg grid grid-cols-5 auto-rows-min py-8 px-6 m-2 lg:grid-cols-5 lg:px-8 lg:m-4">
              <div className="h-12 w-12">
                <i className="fab fa-js text-5xl text-yellow-300 " />
              </div>
              <div className="col-start-2 col-end-6 flex items-center ml-1 lg:col-start-2 lg:col-end-6">
                <p className="text-xl font-extrabold">Javascript</p>
              </div>
              <div className="col-start-2 col-end-6 mt-3 ml-1 lg:col-start-2 lg:col-end-6">
                <p>
                  On client side we got HTML and CSS, but still need some
                  Javascript to make it lively. I use React + Next.js for my
                  first option. React easy to learn and Next.js help me handle
                  routing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeView;
