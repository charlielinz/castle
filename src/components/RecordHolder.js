import Programs from "./Programs";
import useScrollToTop from "../hooks/useScrollToTop";

const RecordHolder = () => {
  const soloRecitalPrograms = [
    {
      id: 1,
      name: "Bach: Prelude and Fugue in C major, BWV 870, from The Well Tempered Clavier Book II",
      url: "https://www.youtube-nocookie.com/embed/FxwB1xpeN5k",
    },
    {
      id: 2,
      name: "Beethoven: Piano Sonata in A-flat Major, Op.26",
      url: "https://www.youtube-nocookie.com/embed/FxwB1xpeN5k",
    },
    {
      id: 3,
      name: "Rachmaninoff: Morceaux de fantaisie, Op.3",
      url: "https://www.youtube-nocookie.com/embed/ZH58ImCTOtI",
    },
    {
      id: 4,
      name: "Schulhoff: Suite Dansante En Jazz, WV.98",
      url: "https://www.youtube-nocookie.com/embed/TjekmPU6_-g",
    },
  ];

  const firstChamberMusicPrograms = [
    {
      id: 1,
      name: "F. Poulenc: Trio for Oboe, Bassoon and Piano, FP 43",
      url: "https://www.youtube-nocookie.com/embed/8tC-ixacUms",
    },
    {
      id: 2,
      name: "J. Francaix: Trio for Oboe, Bassoon and Piano",
      url: "https://www.youtube-nocookie.com/embed/CnvZ8QWQUpQ",
    },
    {
      id: 3,
      name: "A. Previn: Trio for Oboe, Bassoon and Piano",
      url: "https://www.youtube-nocookie.com/embed/gs9OqtcCQ3Q",
    },
  ];

  const secondChamberMusicPrograms = [
    {
      id: 1,
      name: "F. Schimitt-Sonatine en Trio for Flute, Clarinet and Piano, op.85",
      url: "https://www.youtube-nocookie.com/embed/q2f3EAjZr2A",
    },
    {
      id: 2,
      name: "C. Debussy-Prelude to 'Afternoon of of a Faun' for Flute, Clarinet and Piano",
      url: "https://www.youtube-nocookie.com/embed/ifm3uDmyMQo",
    },
    {
      id: 3,
      name: "E. Bloch-Concertino for Flute, Clarinet and Piano",
      url: "https://www.youtube-nocookie.com/embed/RyrPahDjhpw",
    },
    {
      id: 4,
      name: "M. Emmanuel-Sonata for Flute, Clarinet and Piano, op.11",
      url: "https://www.youtube-nocookie.com/embed/F7_M9S9-3Is",
    },
    {
      id: 5,
      name: "B. Rossignal-Suite for Flute, Clarinet and Piano",
      url: "https://www.youtube-nocookie.com/embed/B3vYgVczn-U",
    },
  ];

  useScrollToTop();

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
        <Programs programs={firstChamberMusicPrograms} />
      </div>
      <div className="max-w-sm mx-auto pt-12 px-4 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8">
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2018.06.03</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Chamber Music Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-4 lg:max-w-screen-lg lg:px-8">
        <Programs programs={secondChamberMusicPrograms} />
      </div>
    </header>
  );
};

export default RecordHolder;
