import selfie from "../img/selfie.jpg";
import citiesocialLogo from "../img/citiesocial_logo.svg";
import iiiLogo from "../img/iii_logo.svg";
import moldex3dLogo from "../img/moldex3d_logo.svg";

const HomeView = () => {
  return (
    <header className="space-y-20 bg-gray-50 font-san text-gray-900">
      <div className="max-w-screen-lg mx-auto px-4 pt-12 mb-16 flex">
        <div>
          <h1 className="text-xl">Art & Tech</h1>
          <h1 className="text-xl">Emotional & Rational</h1>
          <h1 className="text-6xl py-4">Charlie Lin</h1>
          <img src={selfie} alt="profile pic" className="w-72 pb-4" />
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
        <div className="pl-20 pt-16 ml-auto">
          <div className="flex mb-12">
            <img
              src={citiesocialLogo}
              alt="citiesocial logo"
              className="w-24"
            />
            <div className="py-4 px-8 ">
              <p className="text-xl font-extrabold">QA Specialist</p>
              <p className="pt-2">citiesocial</p>
            </div>
          </div>
          <div className="flex mb-12">
            <img src={iiiLogo} alt="iii logo" className="w-24 p-4" />
            <div className="py-4 px-8 ">
              <p className="text-xl font-extrabold">Associate Planner</p>
              <p className="pt-2">III</p>
            </div>
          </div>
          <div className="flex mb-12">
            <img src={moldex3dLogo} alt="moldex3d logo" className="w-24 p-4" />
            <div className="py-4 px-8 ">
              <p className="text-xl font-extrabold">QA Engineer</p>
              <p className="pt-2">Moldex3D</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeView;
