const Footer = () => {
  return (
      <footer id="tmdb-footer" className="tmdb-footer">
        <div className="footer__left">
          <div className="tmdb-footer__logo">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="tmdb-footer__logo"
              className="footer-logo"
            />
          </div>
          <button className="footer__join-btn">FORUMA KATILIN</button>
        </div>
        <div className="footer__right">
          <ul className="list-style">
            <li className="link-style footer__list-header">TEMEL</li>
            <li className="link-style">TMDB Hakkında</li>
            <li className="link-style">Bize Ulaşın</li>
            <li className="link-style">Destek Forumları</li>
            <li className="link-style">API</li>
            <li className="link-style">Sistem Durumu</li>
          </ul>
          <ul className="list-style">
            <li className="link-style footer__list-header">KATKIDA BULUNUN</li>
            <li className="link-style">Katılım Başvuru Kitabı</li>
            <li className="link-style">Yeni Film Ekle</li>
            <li className="link-style">Yeni Dizi Ekle</li>
          </ul>
          <ul className="list-style">
            <li className="link-style footer__list-header">TOPLULUK</li>
            <li className="link-style">Tartışmalar</li>
            <li className="link-style">Öne Çıkanlar</li>
          </ul>
          <ul className="list-style">
            <li className="link-style footer__list-header">YASAL</li>
            <li className="link-style">Kullanım Koşulları</li>
            <li className="link-style">API Kullanım Şartları</li>
            <li className="link-style">Gizlilik Politikası</li>
            <li className="link-style">DMCA Siyaseti</li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
