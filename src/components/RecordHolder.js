import Programs from "./Programs";
import useScrollToTop from "../hooks/useScrollToTop";

const RecordHolder = () => {
  const soloRecitalPrograms = [
    {
      name: "Bach: Prelude and Fugue in C major, BWV 870, from The Well Tempered Clavier Book II",
      url: "https://www.youtube.com/embed/FxwB1xpeN5k",
    },
    {
      name: "Beethoven: Piano Sonata in A-flat Major, Op.26",
      url: "https://www.youtube.com/embed/FxwB1xpeN5k",
    },
    {
      name: "Rachmaninoff: Morceaux de fantaisie, Op.3",
      url: "https://www.youtube.com/embed/ZH58ImCTOtI",
    },
    {
      name: "Schulhoff: Suite Dansante En Jazz, WV.98",
      url: "https://www.youtube.com/embed/TjekmPU6_-g",
    },
  ];

  const chamberMusicPrograms = [
    {
      name: "F. Poulenc: Trio for Oboe, Bassoon and Piano, FP 43",
      url: "https://www.youtube.com/embed/8tC-ixacUms",
    },
    {
      name: "J. Francaix: Trio for Oboe, Bassoon and Piano",
      url: "https://www.youtube.com/embed/CnvZ8QWQUpQ"
    },
    {
      name: "A. Previn: Trio for Oboe, Bassoon and Piano",
      url: "https://www.youtube.com/embed/gs9OqtcCQ3Q"
    }
  ];

  useScrollToTop()

  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-2xl lg:text-4xl">Enjoy my recital here.</p>
      </div>
      <div className="max-w-sm mx-auto pt-12 px-4 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8">
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2019.06.14</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Piano Solo Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-4 lg:max-w-screen-lg lg:px-8">
        <Programs programs={soloRecitalPrograms} />
      </div>
      <div className="max-w-sm mx-auto pt-12 px-4 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8">
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2018.06.23</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Chamber Music Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-4 lg:max-w-screen-lg lg:px-8">
        <Programs programs={chamberMusicPrograms} />
      </div>
    </header>
  );
};

export default RecordHolder;
