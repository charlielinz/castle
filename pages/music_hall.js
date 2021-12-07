import Header from "../components/Header";
import RecordHolder from "../components/RecordHolder";

const MusicHall = () => {
  const slogan = "Listen to me.";
  return (
    <>
      <Header slogan={slogan} />
      <RecordHolder />
    </>
  );
};

export default MusicHall;
