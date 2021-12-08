import Header from "../components/layout/Header";
import RecordHolder from "../components/contents/RecordHolder";

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
