import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  } 
  return (
    <>
      <nav id="tmdb-navbar" className="flex-center-between">
        <div className="tmdb-navbar">
          <div className="tmdb-navbar__left">
            <ul className="tmdb-navbar__left__menu flex-center list-style">
              <li className="logo-list">
                <img
                  onClick={goToHomePage}
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="themoviedb-logo"
                  className="tmdb-logo"
                />
              </li>
              <div className="dropdown" data-dropdown>
                <li data-dropdown-item>Filmler</li>
                <div className="dropdown-menu">
                  <div className="dropdown-links">
                    <a href="" className="dropdown-link link-style">
                      Popüler
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Gösterimdekiler
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Yakında
                    </a>
                    <a href="" className="dropdown-link link-style">
                      En Fazla Oy Alanlar
                    </a>
                  </div>
                </div>
              </div>

              <div className="dropdown" data-dropdown>
                <li data-dropdown-item>Diziler</li>
                <div className="dropdown-menu">
                  <div className="dropdown-links">
                    <a href="" className="dropdown-link link-style">
                      Popüler
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Günün Programı
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Televizyonda
                    </a>
                    <a href="" className="dropdown-link link-style">
                      En Fazla Oy Alanlar
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown" data-dropdown>
                <li data-dropdown-item>Kişiler</li>
                <div className="dropdown-menu">
                  <div className="dropdown-links">
                    <a href="" className="dropdown-link link-style">
                      Popüler Kişiler
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown" data-dropdown>
                <li data-dropdown-item>Daha Fazla</li>
                <div className="dropdown-menu">
                  <div className="dropdown-links">
                    <a href="" className="dropdown-link link-style">
                      Tartışmalar
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Öne Çıkanlar
                    </a>
                    <a href="" className="dropdown-link link-style">
                      Destek
                    </a>
                    <a href="" className="dropdown-link link-style">
                      API
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="tmdb-navbar-right">
            <ul className="tmdb-navbar__right__menu flex-center list-style">
              <li className="navbar-plus">+</li>
              <div className="dropdown lang-menu" data-dropdown>
                <li className="navbar-lang" data-dropdown-item>
                  TR
                </li>
                <div className="dropdown-menu">
                  <i className="fa-solid fa-play arrow-up"></i>
                  <div className="lang-link">
                    <h2>Dil Ayarları</h2>
                    <div className="lang-settings">
                      <label>Varsayılan Dil</label>
                      <button className="reset-btn">Sıfırla</button>
                    </div>
                    <select
                      name="default-lang"
                      id="default-lang-select"
                      className="default-lang-select"
                    >
                      <option value="tr">Türkçe(tr-TR)</option>
                      <option value="en">English(en-US)</option>
                    </select>
                    <label>Geri Dönüş Dili</label>
                    <select name="default-lang" id="default-lang-select">
                      <option value="en">English(en-US)</option>
                      <option value="tr">Türkçe(tr-TR)</option>
                    </select>
                  </div>
                </div>
              </div>

              <li>Giriş</li>
              <li>TMDb'ye Katıl</li>
              <li>
                <img
                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                  className="navbar-search"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="responsive-navbar flex-center-between display-none">
          <div className="hamburger-menu">
            <i className="fa-solid fa-bars menu"></i>
          </div>

          <div className="responsive-navbar__tmdb-logo">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
          </div>
          <div className="flex-center-between">
            <div className="responsive-navbar__user">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="responsive-navbar__search navbar-search">
              <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                alt=""
              />
            </div>
          </div>
          <div className="sidebar">
            <ul className="list-style">
              <li>
                <a href="#" className="link-style sidebar__link">
                  Filmler
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link">
                  Diziler
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link">
                  Kişiler
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  Katılım Başvuru Kitabı
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  Öne Çıkanlar
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  Destek
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="#" className="link-style sidebar__link-light">
                  Giriş
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
