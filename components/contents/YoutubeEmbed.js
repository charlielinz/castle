import useWindowWidth from "../../hooks/useWindowWidth";

const YoutubeEmbed = ({ program }) => {
  const windowWidth = useWindowWidth();
  const videoSize = {
    large: { width: "560", height: "320" },
    small: { width: "280", height: "160" },
  };
  return (
    <div className="py-2 lg:py-4">
      <p className="py-2 font-thin lg:text-xl lg:py-4">{program.name}</p>
      <iframe
        width={
          windowWidth > 1024
            ? `${videoSize.large.width}`
            : `${videoSize.small.width}`
        }
        height={
          windowWidth > 1024
            ? `${videoSize.large.height}`
            : `${videoSize.small.height}`
        }
        src={program.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
