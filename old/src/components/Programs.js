import YoutubeEmbed from "../utils/YoutubeEmbed";

const Programs = ({ programs }) => {
    return (
        <>
          {programs.map((program) => {
            return (
              <YoutubeEmbed
                key={program.id}
                program={program}
              />
            );
          })}
        </>
      );
    }

export default Programs
