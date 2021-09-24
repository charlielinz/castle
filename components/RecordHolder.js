import Programs from "./Programs";
import programs from "../jsons/programs.json"

const RecordHolder = () => {
  const soloRecitalPrograms = programs.soloRecitalPrograms
  const firstChamberMusicPrograms = programs.firstChamberMusicPrograms
  const secondChamberMusicPrograms = programs.secondChamberMusicPrograms

  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-3xl font-black lg:text-4xl">Enjoy my recital here.</p>
      </div>
      <div
        id="piano-solo-recital"
        className="max-w-sm mx-auto pt-16 px-8 lg:pt-32 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8"
      >
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2019.06.14</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Piano Solo Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-8 lg:max-w-screen-lg lg:px-8">
        <Programs programs={soloRecitalPrograms} />
      </div>
      <div
        id="chamber-music-recital-1"
        className="max-w-sm mx-auto pt-16 px-8 lg:pt-32 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8"
      >
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2018.06.23</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Chamber Music Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-8 lg:max-w-screen-lg lg:px-8">
        <Programs programs={firstChamberMusicPrograms} />
      </div>
      <div
        id="chamber-music-recital-2"
        className="max-w-sm mx-auto pt-16 px-8 lg:pt-32 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8"
      >
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">2018.06.03</p>
        <p className="text-lg font-bold lg:text-2xl lg:font-bold">
          Chamber Music Recital
        </p>
      </div>
      <div className="max-w-sm mx-auto pt-4 pb-8 px-8 lg:max-w-screen-lg lg:px-8">
        <Programs programs={secondChamberMusicPrograms} />
      </div>
    </header>
  );
};

export default RecordHolder;
