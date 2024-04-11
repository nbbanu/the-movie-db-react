import Banner from "../../components/home/Banner";
import HorizantalMovieList from "../../components/common/HorizantalMovieList";
import Join from "../../components/home/Join";
import LeaderBoards from "../../components/home/LeaderBoards";

const Home = () => {
  return (
    <div className="container">
      <Banner/>
      <HorizantalMovieList type="trend" title="Trend" />
      <HorizantalMovieList type="trailers" title="Latest Trailers" />
      <HorizantalMovieList type="populars" title="What's Popular" />
      <HorizantalMovieList type="free-ones" title="Free To Watch" />
      <Join/>
      <LeaderBoards/>
    </div>
  );
};

export default Home;
