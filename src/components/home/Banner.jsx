const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="banner__top">
        <div className="banner__top__info">
          <div className="header">
            <h2 className="banner__top__h2">Hoş Geldiniz.</h2>
            <h3 className="banner__top__h3">
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h3>
          </div>
          <div className="banner__search-box">
            <input
              type="search"
              className="banner__search-box__input"
              placeholder="Film, dizi, kişi ara..."
            />
            <button className="banner__search-box__btn">Search</button>
          </div>
        </div>
      </div>
      <div className="banner__bottom">
        <div className="banner__bottom__info">
          <h2 className="banner__bottom__h2">That's a</h2>
          <h2 className="banner__bottom__h2">Wrap 2023</h2>
          <p className="banner__bottom__text">
            The best (and worst) of the year from TMDB.
          </p>
          <button className="banner__check__btn">
            Check it out!
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
