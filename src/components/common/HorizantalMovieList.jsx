import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  base_image_path,
  getFreeToWatch,
  getPopulars,
  getTrailerVideos,
  getTrailers,
  getTrends,
} from "../../js/service";
import Modal from "./Modal";
import CardSelector from "../home/CardSelector";
import { getEnvVar } from "../../utils/utils";

const HorizantalMovieList = ({ type, title }) => {
  const [data, setData] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVideoURL, setModalVideoURL] = useState("");

  useEffect(() => {
    getMovieByType();
  }, []);

  const navigate = useNavigate();

  const getMovieByType = (category) => {
    if (type === "trend") {
      getTrendMovie(category);
    } else if (type === "trailers") {
      getTrailerMovie(category);
    } else if (type === "populars") {
      getPopularMovie(category);
    } else if (type === "free-ones") {
      getFreeToWatchMovie(category);
    }
  };

  const goToMovieDetailPage = (item) => {
    navigate(`/detail/${item.id}`);
  };

  const getTrendMovie = async (type = "day") => {
    const data = await getTrends(type);
    setData(data);
  };
  const getTrailerMovie = async (type = "movie") => {
    const data = await getTrailers(type);
    setData(data);
  };
  const getPopularMovie = async (type = "movie") => {
    const data = await getPopulars(type);
    setData(data);
  };
  const getFreeToWatchMovie = async (type = "day") => {
    const data = await getFreeToWatch(type);
    setData(data);
  };
  const openTrailerModal = async (item) => {
    const data = await getTrailerVideos(item.id);
    const videoURL = `https://www.youtube.com/embed/${data[0].key}`;

    setOpenModal(true);
    setModalVideoURL(videoURL);
    setModalTitle(item.title);
  };

  const changeBackground = (item) => {
    const trailers = document.querySelector(".trailers");
    trailers.style.background = `url(${
      base_image_path + item.backdrop_path
    }) no-repeat center`;
    trailers.style.backgroundSize = "cover";
  };

  const handleCategoryClick = (category) => {
    getMovieByType(category);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        setOpenModal={setOpenModal}
        modalTitle={modalTitle}
        modalVideoURL={modalVideoURL}
      />
      <section className={type}>
        <div className="fading"></div>
        <div className="section__header">
          <h2
            className={
              type == "trailers"
                ? "trailers__header__h2 section__header__h2"
                : "section__header__h2"
            }
          >
            {title}
          </h2>
          <CardSelector handleCategoryClick={handleCategoryClick} type={type} />
        </div>

        <div className="section__posters">
          {type == "trailers"
            ? data.map((item, index) => (
                <div
                  onMouseEnter={() => changeBackground(item)}
                  className="trailer__poster-card fade"
                  key={index}
                >
                  <div
                    className="poster-card__img trailer-card-img"
                    onClick={() => openTrailerModal(item)}
                  >
                    <i className="fa-solid fa-play play-btn"></i>
                    <img
                      src={base_image_path + item.backdrop_path}
                      alt="trailer__poster-card__img"
                    />
                    <div className="poster-card-img__options">
                      <div className="dropdown" data-dropdown>
                        <i
                          className="fa-solid fa-ellipsis"
                          data-dropdown-item
                        ></i>
                        <div className="dropdown-menu option-dropdown-menu">
                          <p className="option-dropdown-text">
                            Bu öğeyi derecelendirmek veya bir listeye eklemek
                            ister misiniz?
                          </p>
                          <button className="option-dropdown-btn">
                            Giriş
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                          <div className="line"></div>
                          <p className="option-dropdown-text">
                            Üye değil misin?
                          </p>
                          <button className="option-dropdown-btn">
                            Kaydolun ve topluluğa katılın
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="poster-card__header">
                    <a href="#" className="poster-card__link link-style">
                      {item.title || item.original_name}
                    </a>
                    <p className="poster-card__date">
                      {item.release_date || item.first_air_date}
                    </p>
                  </div>
                </div>
              ))
            : data.map((item, index) => (
                <div className="fade" key={index}>
                  <div className="poster-card__img">
                    <a href="" className="link-style">
                      <img
                        onClick={() => goToMovieDetailPage(item)}
                        src={base_image_path + item.poster_path}
                        alt="trend__poster-card__img"
                      />
                    </a>
                    <div className="poster-card-img__options">
                      <div className="dropdown" data-dropdown>
                        <i
                          className="fa-solid fa-ellipsis"
                          data-dropdown-item
                        ></i>
                        <div className="dropdown-menu option-dropdown-menu">
                          <p className="option-dropdown-text">
                            Bu öğeyi derecelendirmek veya bir listeye eklemek
                            ister misiniz?
                          </p>
                          <button className="option-dropdown-btn">
                            Giriş
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                          <div className="line"></div>
                          <p className="option-dropdown-text">
                            Üye değil misin?
                          </p>
                          <button className="option-dropdown-btn">
                            Kaydolun ve topluluğa katılın
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="outer-ring flex-center-center"
                      style={{
                        background: `conic-gradient(${
                          item.vote_average < 7 ? "yellow" : "green"
                        } ${item.vote_average * 36}deg, #ededed 0deg)`,
                      }}
                    >
                      <div className="poster-card-img__user_score_chart flex-center-center">
                        <span className="progress-value">
                          {Math.round(item.vote_average * 10)}
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  <div
                    className="poster-card__header"
                    onClick={() => goToMovieDetailPage(item)}
                  >
                    <a href="" className="poster-card__link link-style">
                      {item.title || item.original_name}
                    </a>
                    <p className="poster-card__date">
                      {item.release_date || item.first_air_date}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default HorizantalMovieList;
