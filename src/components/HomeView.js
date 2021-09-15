import selfie from "../img/selfie.png";
import citiesocialLogo from "../img/citiesocial_logo.svg";
import iiiLogo from "../img/iii_logo.svg";
import moldex3dLogo from "../img/moldex3d_logo.svg";

const HomeView = () => {
  const jobs = [
    {
      img: (
        <img src={citiesocialLogo} alt="citiesocial logo" className="w-24" />
      ),
      position: "QA Specialist",
      company: "citiesocial",
    },
    {
      img: <img src={iiiLogo} alt="iii logo" className="w-24 p-4" />,
      position: "Associate Planner",
      company: "III",
    },
    {
      img: <img src={moldex3dLogo} alt="moldex3d logo" className="w-24 p-4" />,

      position: "QA Engineer",
      company: "Moldex3D",
    },
  ];
  
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="h-screen">
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
      <div className="max-w-screen-lg mx-auto px-16">
        {jobs.map((job) => (
          <div className="flex mb-12">
            {job.img}
            <div className="py-4 px-8 ">
              <p className="text-xl font-extrabold">{job.position}</p>
              <p className="pt-2">{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default HomeView;
