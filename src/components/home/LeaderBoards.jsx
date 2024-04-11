import { useEffect, useState } from "react";

const LeaderBoards = () => {
  const progressBarGreen = document.querySelectorAll(
    ".leader__progress-inner-green"
  );
  const progressBarRed = document.querySelectorAll(
    ".leader__progress-inner-red"
  );
  const allTimeProgressGauges = document.querySelectorAll(
    ".all-time__progress-bar__gauge"
  );
  const thisWeekprogressGauges = document.querySelectorAll(
    ".this-week__progress-bar__gauge"
  );

  allTimeProgressGauges.forEach((gauge) => {
    let gaugeValue = gauge.innerText;

    progressBarGreen.forEach((bar) => {
      if (gaugeValue < 240) {
        bar.style.width = "40px";
      }
    });
  });

  thisWeekprogressGauges.forEach((gauge) => {
    let gaugeValue = parseFloat(gauge.innerText);
    let width = 12.7 * gaugeValue;
    progressBarRed.forEach((bar) => {
      bar.style.width = width + "px";
      if (gaugeValue >= 43) {
        bar.style.width = 490 + "px";
      }
    });
  });
  return (
    <>
      <section className="leaderboards">
        <div className="leaderboards__header flex-center">
          <h2 className="leaderboards__header__h2">Liderler Sıralaması</h2>
          <div className="rankings">
            <div className="ranking flex-center">
              <div className="dot dot-green"></div>
              <p className="ranking-text">Tüm Zaman Düzenlemeleri</p>
            </div>
            <div className="ranking flex-center">
              <div className="dot dot-red"></div>
              <p className="ranking-text">Bu Hafta Yapılan Düzenlemeler</p>
            </div>
          </div>
        </div>
        <div className="leaderbord">
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader flex-center">
            <div className="leader__profile">
              <img
                src="https://media.themoviedb.org/t/p/w128_and_h128_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                className="leader__img"
              />
            </div>
            <div className="leader__info">
              <div className="leader__name">Shei</div>
              <div className="leader__progresses">
                <div className="all-time__progress flex-center">
                  <div className="all-time__progress-bar leader__progress">
                    <div className="leader__progress-inner-green"></div>
                  </div>
                  <div className="all-time__progress-bar__gauge">10.761</div>
                </div>
                <div className="this-week__progress flex-center">
                  <div className="this-week__progress-bar leader__progress">
                    <div className="leader__progress-inner-red"></div>
                  </div>
                  <div className="this-week__progress-bar__gauge">10.760</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LeaderBoards;
