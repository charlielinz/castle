import recitals from "../jsons/recitals.json";
import Programs from "./Programs";

const RecordHolder = () => {
  const recitalList = recitals.recitals;
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-20 pb-12 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="text-3xl font-black lg:text-4xl">
          Enjoy my recital here.
        </p>
      </div>
      {recitalList.map((recital, index) => {
        return (
          <>
            <div
              key={index}
              id={recital.hash}
              className="max-w-sm mx-auto pt-16 px-8 lg:pt-32 lg:flex lg:gap-4 lg:max-w-screen-lg lg:px-8"
            >
              <p className="text-lg font-bold lg:text-2xl lg:font-bold">
                {recital.date}
              </p>
              <p className="text-lg font-bold lg:text-2xl lg:font-bold">
                {recital.title}
              </p>
            </div>
            <div className="max-w-sm mx-auto pt-4 pb-8 px-8 lg:max-w-screen-lg lg:px-8">
              <Programs key={index} programs={recital.programs} />
            </div>
          </>
        );
      })}
    </header>
  );
};

export default RecordHolder;
