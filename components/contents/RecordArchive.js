import YoutubeEmbed from "./YoutubeEmbed"
import { recitals } from "./RecitalList";

const RecordArchive = () => {
  return (
    <>
      {recitals.map((recital, index) => {
        return (
          <>
            <div
              key={index}
              id={recital.hash}
              className="max-w-sm mx-auto pt-16 px-8 lg:pt-10 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8"
            >
              <p className="text-lg font-bold lg:text-2xl lg:font-bold">
                {recital.date}
              </p>
              <p className="text-lg font-bold lg:text-2xl lg:font-bold">
                {recital.title}
              </p>
            </div>
            <div className="max-w-sm mx-auto pt-4 pb-8 px-8 lg:max-w-screen-lg lg:px-8">
              {recital.programs.map((program) => {
                return <YoutubeEmbed key={program.id} program={program} />;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default RecordArchive;
