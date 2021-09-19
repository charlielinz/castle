import useWindowWidth from "../hooks/useWindowWidth";

const YoutubeEmbed = ({ program }) => {
  const windowWidth = useWindowWidth();
  return (
    <div className="py-2 lg:py-4">
      <p className="py-2 font-thin lg:text-xl lg:py-4">{program.name}</p>
      {windowWidth > 1024 ? (
        <iframe
          width="560"
          height="315"
          src={program.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      ) : (
        <iframe
          width="280"
          height="160"
          src={program.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeEmbed;
