import YoutubeEmbed from "../utils/YoutubeEmbed";

const Programs = ({ programs }) => {
    return (
        <>
          {programs.map((program) => {
            return (
              <YoutubeEmbed
                program={program}
              />
            );
          })}
        </>
      );
    }

export default Programs
