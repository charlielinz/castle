import Image from "next/image";
import selfie from "../../public/img/selfie.png";
import heroBanner from "../public/img/hero-banner.jpg";

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
        <p className="lg:animate-slide-in text-3xl lg:text-6xl">
          Welcome to Charlie's Castle.
        </p>
        <p className="lg:animate-slide-in text-sm pt-2 text-gray-600 lg:text-xl">
          You can find my legacy here, enjoy yourself !
        </p>
      </div>
      <div>
        <h1 className="text-xl lg:animate-fadein-1500-1700">Art & Tech</h1>
        <h1 className="text-xl lg:animate-fadein-1500-1900">
          Emotional & Rational
        </h1>
        <h1 className="text-3xl lg:py-8 lg:text-6xl lg:animate-fadein-1500-2100">
          Charlie Lin
        </h1>
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
    </>
  );
};

export default HeroBanner;
