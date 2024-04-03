import { useParams } from "react-router-dom";
import ShortcutBar from "../components/ShortcutBar";
import { useEffect, useState } from "react";
import {
  base_image_path,
  getMovieDetail,
  getTrailerVideos,
} from "../js/service";
import Modal from "../components/Modal";

const DetailPage = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const [isOpen, setOpenModal] = useState(false);
  const [modalVideoURL, setModalVideoURL] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    loadMovieDetail();
  }, []);

  const loadMovieDetail = async () => {
    const data = await getMovieDetail(movieId);
    setData(data);
  };

  const openTrailerModal = async (item) => {
    const data = await getTrailerVideos(item.id);
    const videoURL = `https://www.youtube.com/embed/${data[0].key}`;
    setOpenModal(true);
    setModalVideoURL(videoURL);
    setModalTitle(item.title);
  };

  return (
    <div className="detail-page">
      <Modal
        isOpen={isOpen}
        setOpenModal={setOpenModal}
        modalVideoURL={modalVideoURL}
        modalTitle={modalTitle}
      />

      <ShortcutBar />
      <section className="main-movie-top flex-center"
        style={{
          backgroundImage: `url(${base_image_path + data?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="movie-poster">
          <img src={base_image_path + data?.poster_path} alt="" />
        </div>
        <div className="movie-details">
          <div className="movie-detail_header">
            <a href="#" className="link-style">
              <h2 className="movie-detail_header-h2 text-hover">
                {data?.title}
                <span className="movie-detail_header-year">(2023)</span>
              </h2>
            </a>
          </div>
          <div className="movie-detail_facts">
            <div className="movie-detail_facts-resp-top flex-center">
              <span className="certification">
                {data.adult ? "18+" : "13+"}
              </span>
              <span className="release">{data?.release_date}</span>
              <span className="detail-dot"></span>
              <span className="genres">
                {data?.genres?.map((genre, index) => (
                  <span key={index} className="genre text-hover">
                    {genre.name}
                    {data?.genres?.length - 1 === index ? "" : ", "}
                  </span>
                ))}
              </span>
              <span className="detail-dot"></span>
              <span className="runtime">
                {Math.floor(data?.runtime / 60) +
                  " h " +
                  (data?.runtime % 60) +
                  "m"}
              </span>
            </div>
            <div>
              <span className="genres-responsive"> </span>
            </div>
          </div>
          <div className="movie-detail_actions">
            <ul className="movie-detail_actions-list list-style flex-center">
              <li className="tooltip_chart flex-center-between link-style">
                <div
                  className="outer-ring flex-center-center"
                  style={{
                    background: `
                        conic-gradient(${
                          data?.vote_average < 7 ? "yellow" : "green"
                        } ${data?.vote_average * 36}deg, #ededed 0deg)
                                  `,
                  }}
                >
                  <div className="poster-card-img__user_score_chart flex-center-center">
                    <span className="progress-value">
                      {Math.round(data?.vote_average * 10)}
                    </span>
                    %
                  </div>
                </div>
                <div className="user-score">
                  <p>User</p>
                  <p>Score</p>
                </div>
              </li>
              <li
                className="tooltip dropdown tooltip_list"
                data-dropdown
                data-dropdown-item
              >
                <i className="fa-solid fa-list tooltip-icon" data-dropdown-item>
                  <div className="display-none add-to-list tooltip_hover">
                    <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                    <p>Add to list</p>
                  </div>
                </i>
                <div className="dropdown-menu tooltip_dropdown-menu">
                  <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                  <div className="tooltip_dropdown-header">
                    <i className="fa-solid fa-plus tooltip_dropdown-plus-icon"></i>
                    <a
                      href="#"
                      className="tooltip_dropdown-header-text link-style"
                    >
                      Create New List
                    </a>
                  </div>
                  <span className="tooltip_dropdown-text">
                    Add Poor Things to one of your lists
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </div>
              </li>
              <li className="tooltip tooltip_heart">
                <i className="fa-solid fa-heart tooltip-icon">
                  <div className="display-none mark-favorite tooltip_hover">
                    <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                    <p>Mark as favorite</p>
                  </div>
                </i>
              </li>
              <li className="tooltip tooltip_bookmark">
                <i className="fa-solid fa-bookmark tooltip-icon">
                  <div className="display-none add-watchlist tooltip_hover">
                    <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                    <p>Add to your watchlist</p>
                  </div>
                </i>
              </li>
              <li
                className="tooltip tooltip_star dropdown"
                data-dropdown
                data-dropdown-item
              >
                <i className="fa-solid fa-star tooltip-icon" data-dropdown-item>
                  <div className="display-none rate tooltip_hover">
                    <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                    <p>Rate it!</p>
                  </div>
                </i>
                <div className="dropdown-menu tooltip_dropdown-menu">
                  <i className="fa-solid fa-play arrow-up dark-arrow-up"></i>
                  <div className="flex-center">
                    <i className="fa-solid fa-minus delete-icon"></i>
                    <div className="stars">
                      <span className="star">
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span className="star">
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span className="star">
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span className="star">
                        <i className="fa-regular fa-star"></i>
                      </span>
                      <span className="star">
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="tooltip_play flex-center text-hover">
                <div className="play-trailer">
                  <i className="fa-solid fa-play"></i>
                </div>
                <p
                  className="play-trailer_text"
                  onClick={() => openTrailerModal(data)}
                >
                  Play Trailer
                </p>
                <div></div>
              </li>
            </ul>
          </div>
          <div className="movie-detail_tagline">
            <p className="movie-detail_tagline-text">{data?.tagline}</p>
          </div>
          <div className="movie-detail_overview">
            <h3 className="movie-detail_overview-h3">Overview</h3>
            <p className="movie-detail_overview-text">{data?.overview}</p>
          </div>
          <div className="movie-detail_people">
            <ul className="movie-detail_people-list list-style">
              <li className="link-style profile">
                <p className="people">
                  <a href="#" className="people-link link-style">
                    Denis Villeneuve
                  </a>
                </p>
                <p className="character">Director, Screenplay</p>
              </li>
              <li className="link-style profile">
                <p className="people">
                  <a href="#" className="people-link link-style">
                    Frank Herbert
                  </a>
                </p>
                <p className="character">Novel</p>
              </li>
              <li className="link-style profile">
                <p className="people">
                  <a href="#" className="people-link link-style">
                    Jon Spaihts
                  </a>
                </p>
                <p className="character">Screenplay</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="main-movie-bottom container">
        <div className="main-movie-bottom-left">
        
        <div className="top-billed-cast">
          <div className="fading"></div>
          <h3 className="section-header_h3">Top Billed Cast</h3>
          <div className="people section__posters">
            {Array.from({ length: 10 }).map(() => (
              <div className="person-card">
                <div className="person-card-img card-img">
                  <img
                    src="https://media.themoviedb.org/t/p/w276_and_h350_face/jEf57uD2UG36m0aFkWXm3EMQq8l.jpg"
                    alt=""
                  />
                  <a
                    href="#"
                    className="link-style person-card-actor text-hover"
                  >
                    Franck Gastambide
                  </a>
                  <p className="person-card-character">Fred</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="cast-link link-style">
            Full Cast & Crew
          </a>
        </div>
        <div className="line"></div>
        <div className="social-panel">
          <div className="panel-menu flex-center">
            <h3 className="social-panel-menu-header menu-header primary-text">
              Social
            </h3>
            <ul className="list-style flex-center">
              <div className="fading"></div>
              <li className="link-style menu-item primary-text active">
              <a href="#" className="link-style"> Review  <span className="count-of-item">0</span></a>
              </li>
              <li className="link-style menu-item primary-text">
               <a href="#" className="link-style">Discussions <span className="count-of-item">0</span></a> 
              </li>
            </ul>
          </div>
           <div className="social-panel-content">
            <div className="social-panel-content-card">
            <div className="social-panel-content-card-top flex-center">
              <div className="avatar">
                <img src="https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg?s=90" alt="" />
              </div>
              <div className="social-panel-content-card-header">
                <a href="#" className="link-style text-hover">A review by<span>Deneme</span></a>
                <div></div>
              </div>
            </div>
            </div>
            </div>
        </div>
        <div className="line"></div>

        <div className="media-panel">
          <div className="panel-menu flex-center">
            <h3 className="media-panel-menu-header menu-header primary-text">
              Media
            </h3>
            <ul className="list-style flex-center">
              <li className="link-style menu-item primary-text active">
                Most Popular
              </li>
              <li className="link-style menu-item primary-text">
                Videos <span className="count-of-item">0</span>
              </li>
              <li className="link-style menu-item primary-text">
                Videos <span className="count-of-item">2</span>
              </li>
              <li className="link-style menu-item primary-text">
                Backdrops <span className="count-of-item">6</span>
              </li>
              <li className="link-style menu-item primary-text">
                Posters <span className="count-of-item">23</span>
              </li>
            </ul>
          </div>
          <div className="media-panel-content">

          </div>
        </div>

        <div className="line"></div>

        <div className="recommendation-panel">
          <h3 className="recommendation-panel-menu-header menu-header primary-text">
            Recommendation
          </h3>
          <div className="recommendation-cards section__posters">
            <div className="fading"></div>
            {Array.from({ length: 10 }).map(() => 
              <div className="recommendation-card">
                <div className="recommendation-card-img card-img">
                  <img
                    src="https://media.themoviedb.org/t/p/w500_and_h282_face/1n00NlOGRFZVs8coBxyZLm5l4EC.jpg"
                    alt=""
                  />
                </div>
                <p className="recommendation-card-content">
                  <a href="#" className="recommendation-card-header link-style">
                    Transformers: The Last Nigth
                  </a>
                  <span className="recommendation-card-vote">61%</span>
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
        <div className="main-movie-bottom-right">
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
