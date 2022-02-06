import LowStock from "../components/home/lowStock";

const Home = (props) => {
  const { alcohols, mixers } = props;

  return (
    <>
      <LowStock alcohols={alcohols} mixers={mixers} />
    </>
  );
};

export default Home;
