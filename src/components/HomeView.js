import selfie from "../img/selfie.png";
import citiesocialLogo from "../img/citiesocial_logo.svg";
import iiiLogo from "../img/iii_logo.svg";
import moldex3dLogo from "../img/moldex3d_logo.svg";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div>
        <div className="max-w-sm mx-auto px-8 pt-28 pb-8 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
          <div>
            <p className="text-4xl lg:text-6xl lg:mb-4">
              Welcome to Charlie's Castle.
            </p>
            <p className="text-sm lg:text-xl text-gray-600">
              You can find my legacy here, enjoy yourself !
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto px-8 py-16 flex flex-wrap-reverse justify-center items-center lg:border-b lg:border-gray-200 lg:gap-20 lg:max-w-screen-lg lg:px-4">
          <div>
            <h1 className="text-xl">Art & Tech</h1>
            <h1 className="text-xl">Emotional & Rational</h1>
            <h1 className="text-6xl py-8">Charlie Lin</h1>
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
              className="h-72 w-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto lg:max-w-screen-lg">
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
    </header>
  );
};

export default HomeView;
