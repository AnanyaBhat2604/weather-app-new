import "./home.css";
import Header from "../../components/header/header";
import HeaderTabs from "../../components/headerTabs/headerTabs";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="weatherBody">
        <HeaderTabs />
      </div>
    </div>
  );
};

export default Home;
