import YoutubeEmbed from "./YoutubeEmbed";

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
