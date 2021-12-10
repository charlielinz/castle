import Header from "../components/sections/Header";
import RecordArchive from "../components/contents/RecordArchive";

const MusicHall = () => {
  const slogan = "Listen to me.";
  return (
    <>
      <Header slogan={slogan} />
      <RecordArchive />
    </>
  );
};

export default MusicHall;
