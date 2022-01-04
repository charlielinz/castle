import Image from "next/image";
import selfie from "../../public/img/selfie.png";
import heroBanner from "../../public/img/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <>
      <div className="invisible lg:visible lg:-top-4 lg:opacity-20">
        <Image
          src={heroBanner}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <div className="absolute invisible lg:relative lg:visible max-w-sm mx-auto px-8 pt-28 pb-8 flex justify-center lg:max-w-screen-lg lg:justify-start lg:px-14 lg:py-20 xl:px-4">
          <div>
            <p className="lg:animate-slidein text-3xl lg:text-6xl">
              Welcome to My Castle.
            </p>
            <p className="lg:animate-slidein text-sm pt-2 text-gray-600 lg:text-xl">
              You can find my legacy here, enjoy yourself !
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto px-8 py-16 flex flex-wrap justify-center items-center border-b border-gray-200 lg:pb-44 lg:justify-start lg:gap-20 lg:max-w-screen-lg lg:px-14 xl:px-4">
          <div className="relative visible my-12 h-64 w-64 lg:absolute lg:invisible">
            <Image
              src={selfie}
              alt="profile pic"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center lg:block">
            <h1 className="text-xl lg:animate-fadein-1500-1700">Art & Tech</h1>
            <h1 className="text-xl lg:animate-fadein-1500-1900">
              Emotional & Rational
            </h1>
            <h1 className="text-3xl py-4 lg:py-8 lg:text-6xl lg:animate-slidein">
              Charlie Lin
            </h1>
            <div className="flex flex-col pl-6 mt-4 lg:pl-0 lg:mt-0 lg:block">
              <p className="flex mb-1 lg:animate-fadein-1500-2100">
                <span className="material-icons mr-2 ">location_on</span>
                <span>Taipei, Taiwan</span>
              </p>
              <p className="flex mb-1 lg:animate-fadein-1500-2300">
                <span className="material-icons-round mr-2">school</span>
                <span>NTHU Power Mechanical Engineering (Bachelor)</span>
              </p>
              <p className="flex mb-1 lg:animate-fadein-1500-2500">
                <span className="material-icons-round mr-2">school</span>
                <span>NCTU Music Institute (Master)</span>
              </p>
              <p className="flex mb-1 lg:animate-fadein-1500-2700">
                <span className="material-icons-round mr-2 ">interests</span>
                <span>Travel, Food, Music</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
