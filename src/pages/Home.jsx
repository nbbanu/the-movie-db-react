import Banner from "../components/Banner";
import HorizantalMovieList from "../components/HorizantalMovieList";

const Home = () => {
  return (
    <div>
      <Banner/>
      <HorizantalMovieList type="trend" title="Trend" />
      <HorizantalMovieList type="trailers" title="Latest Trailers" />
      <HorizantalMovieList type="populars" title="What's Popular" />
      <HorizantalMovieList type="free-ones" title="Free To Watch" />
    </div>
  );
};

export default Home;
