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
      <div className="max-w-screen-lg mx-auto px-20">
        <div className="flex justify-center">
          <h1 className="py-28 text-4xl">Experience</h1>
        </div>
        <div className="flex flex-col gap-12 mx-auto">
          <div className="flex">
            <img
              src={citiesocialLogo}
              alt="citiesocial logo"
              className="w-24"
            />
            <div className="py-4 px-8 w-60">
              <p className="text-xl font-extrabold">QA Specialist</p>
              <p className="pt-2">citiesocial</p>
            </div>
            <div className="py-2 pl-20 ">
              <ul>
                <li className="list-disc list-outside">App & Web QA</li>
                <li className="list-disc list-outside">
                  Manual functional & UI/UX testing
                </li>
                <li className="list-disc list-outside">
                  Appium automaion testing with Python
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <img src={iiiLogo} alt="iii logo" className="w-24 p-4" />
            <div className="py-4 px-8 w-60">
              <p className="text-xl font-extrabold">Associate Planner</p>
              <p className="pt-2">III</p>
            </div>
            <div className="py-2 pl-20 ">
              <ul>
                <li className="list-disc list-outside">
                  Plan and implement the government bid plan
                </li>
                <li className="list-disc list-outside">
                  Assist in implementing the income plan
                </li>
                <li className="list-disc list-outside">Think tank staff</li>
                <li className="list-disc list-outside">
                  Event coordinator for Digital Taipei 2020
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <img src={moldex3dLogo} alt="moldex3d logo" className="w-24 p-4" />
            <div className="py-4 px-8 w-60">
              <p className="text-xl font-extrabold">QA Engineer</p>
              <p className="pt-2">Moldex3D</p>
            </div>
            <div className="py-2 pl-20 ">
              <ul>
                <li className="list-disc list-outside">
                  Moldex3D software testing
                </li>
                <li className="list-disc list-outside">Moldex3D CAE analyst</li>
                <li className="list-disc list-outside">CAD Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeView;
