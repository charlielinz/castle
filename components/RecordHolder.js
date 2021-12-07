import Programs from "./Programs";

export const recitals = {
  recitals: [
    {
      date: "2019.06.14",
      title: "Piano Solo Recital",
      hash: "piano-solo-recital",
      programs: [
        {
          id: 1,
          name: "Bach: Prelude and Fugue in C major, BWV 870, from The Well Tempered Clavier Book II",
          url: "https://www.youtube-nocookie.com/embed/FxwB1xpeN5k",
        },
        {
          id: 2,
          name: "Beethoven: Piano Sonata in A-flat Major, Op.26",
          url: "https://www.youtube-nocookie.com/embed/ziTu5MGuFMQ",
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
      ],
    },
    {
      date: "2018.06.23",
      title: "Chamber Music Recital",
      hash: "chamber-music-recital-1",
      programs: [
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
      ],
    },
    {
      date: "2018.06.03",
      title: "Chamber Music Recital",
      hash: "chamber-music-recital-2",
      programs: [
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
      ],
    },
  ],
};

const RecordHolder = () => {
  const recitalList = recitals.recitals;
  return (
    <>
      {recitalList.map((recital, index) => {
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
              <Programs key={index} programs={recital.programs} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default RecordHolder;
