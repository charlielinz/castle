import Programs from "./Programs";

const RecordHolder = () => {
  const programs = [
    {
      name: "Bach: Prelude and Fugue in C major, BWV 870, from The Well Tempered Clavier Book II",
      url: "https://www.youtube.com/embed/FxwB1xpeN5k"
    },
    {
      name: "Beethoven: Piano Sonata in A-flat Major, Op.26",
      url: "https://www.youtube.com/embed/FxwB1xpeN5k"
    },
    {
      name: "Rachmaninoff: Morceaux de fantaisie, Op.3",
      url: "https://www.youtube.com/embed/ZH58ImCTOtI"
    },
    {
      name: "Schulhoff: Suite Dansante En Jazz, WV.98",
      url: "https://www.youtube.com/embed/TjekmPU6_-g"
    }
  ]

  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-2xl lg:text-4xl">Enjoy my recital here.</p>
      </div>
      <div className="max-w-sm mx-auto pt-12 lg:flex lg:gap-4 lg:max-w-screen-lg">
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2019.06.14</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">Piano Solo Recital</p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 lg:max-w-screen-lg ">
        <Programs programs={programs} />
      </div>
    </header>
  );
};

export default RecordHolder;
