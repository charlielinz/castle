import selfie from "../img/selfie.png";
import citiesocialLogo from "../img/citiesocial_logo.svg";
import iiiLogo from "../img/iii_logo.svg";
import moldex3dLogo from "../img/moldex3d_logo.svg";

const HomeView = () => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div>
        <div className="max-w-screen-lg mx-auto px-4 py-28 flex justify-center">
          <div>
            <p className="text-6xl mb-4">Welcome to Charlie's Castle.</p>
            <p className="text-xl text-gray-600">
              You can find my legacy here, enjoy yourself !
            </p>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 py-16 border-b border-gray-200 flex justify-center items-center gap-20">
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
          <div>
            <img
              src={selfie}
              alt="profile pic"
              className="h-72 w-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-sm lg:max-w-screen-lg mx-auto">
        <div className="flex justify-center">
          <h1 className="py-16 lg:py-28 text-4xl">Experience</h1>
        </div>
        <div className="flex flex-col gap-12 mx-auto">
          <div className="flex-wrap lg:flex items-center">
            <div className="flex w-full lg:w-1/2 px-8 lg:pl-20">
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
                <li>
                  Manual functional & UI/UX testing
                </li>
                <li>
                  Appium automaion testing with Python
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap lg:flex items-center">
            <div className="flex w-full lg:w-1/2 px-8 lg:pl-20">
              <img src={iiiLogo} alt="iii logo" className="w-24 px-4" />
              <div className="py-4 px-8 w-60">
                <p className="text-xl font-extrabold">Associate Planner</p>
                <p className="pt-2">III</p>
              </div>
            </div>
            <div className="flex px-12 py-2 lg:w-1/2">
              <ul className="list-minus list-outside">
                <li>
                  Plan and implement the government bid plan
                </li>
                <li>
                  Assist in implementing the income plan
                </li>
                <li>Think tank staff</li>
                <li>
                  Event coordinator for Digital Taipei 2020
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap lg:flex items-center">
            <div className="flex w-full lg:w-1/2 px-8 lg:pl-20">
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
                <li>
                  Moldex3D software testing
                </li>
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
