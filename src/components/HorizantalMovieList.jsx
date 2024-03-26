import { useEffect, useState } from "react";
import {
  base_image_path,
  getFreeToWatch,
  getPopulars,
  getTrailerVideos,
  getTrailers,
  getTrends,
} from "../js/service";
import Modal from "./Modal";

const HorizantalMovieList = ({ type, title }) => {
  const [data, setData] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVideoURL, setModalVideoURL] = useState("");

  useEffect(() => {
    if (type === "trend") {
      getTrendMovie();
    } else if (type === "trailers") {
      getTrailerMovie();
    } else if (type === "populers") {
      getPopularMovie();
    } else if (type === "free-ones") {
      getFreeToWatchMovie();
    }
  }, []);

  const getTrendMovie = async () => {
    const data = await getTrends();
    setData(data);
  };
  const getTrailerMovie = async () => {
    const data = await getTrailers();
    setData(data);
  };
  const getPopularMovie = async () => {
    const data = await getPopulars();
    setData(data);
  };
  const getFreeToWatchMovie = async () => {
    const data = await getFreeToWatch();
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
    const trailers = document.querySelector(".trailers")
    trailers.style.background = `url(${
      base_image_path + item.backdrop_path
    }) no-repeat center`;
    trailers.style.backgroundSize = "cover";
  }
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
          <h2 className="section__header__h2">{title}</h2>
          <div className="card__selector">
            <button
              id="todayBtn"
              onClick="loadTrendsToUI('day')"
              className="card__selector-btn active"
            >
              Bugün
            </button>
            <button
              id="thisWeekBtn"
              onClick="loadTrendsToUI('week')"
              className="card__selector-btn"
            >
              Bu Hafta
            </button>
          </div>
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
                      {item.release_date || ""}
                    </p>
                  </div>
                </div>
              ))
            : data.map((item, index) => (
                <div className="fade" key={index}>
                  <div className="poster-card__img">
                    <a href="detail.html?id=${item.id}">
                      <img
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

                  <div className="poster-card__header">
                    <a
                      href="detail.html?id=${
             item.id
           }"
                      className="poster-card__link link-style"
                    >
                      {item.title}
                    </a>
                    <p className="poster-card__date">{item.release_date}</p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default HorizantalMovieList;
