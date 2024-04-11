const Join = () => {
    return(
        <>
        <section className="join">
          <h2 className="join__header">Bugün Katıl</h2>
          <div className="join__bottom">
            <div className="join__left">
              <p className="join__text">
                Get access to maintain your own
                <span className="join__text__light">
                  custom personal lists, track what you've seen
                </span>
                and search and filter for
                <span className="join__text__light">what to watch next</span>—regardless
                if it's in theatres, on TV or available on popular streaming
                services like YouTube Premium, Netflix, blutv, Amazon Prime Video,
                and MUBI.
              </p>
              <button className="join__btn">Kaydol</button>
            </div>
            <div className="join__right">
              <ul className="join__info">
                <li>Reklamsız TMDb'nin tadını çıkarın</li>
                <li>Kişisel bir izleme listesi tutun</li>
                <li>
                  Abone olduğunuz akış hizmetlerine göre filtreleyin ve izleyecek
                  bir şeyler bulun
                </li>
                <li>İzlediğiniz filmleri, dizileri ve TV şovlarını kaydedin</li>
                <li>Kişisel listeler oluşturun</li>
                <li>Veritabanımıza katkıda bulunun ve geliştirin</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    )

};

export default Join;