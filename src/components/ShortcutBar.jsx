const ShortcutBar = () => {
    return(
        <section className="shortcut_bar">
        <ul className="shortcut_bar-list list-style">
          <div className="dropdown" data-dropdown>
            <li
              data-dropdown-item
              style={{borderBottom:"4px solid rgb(1, 180, 228)"}}
            >
              Overview <i className="fa-solid fa-caret-down"></i>
            </li>
            <div className="dropdown-menu">
              <div className="dropdown-links">
                <a href="" className="dropdown-link link-style">
                  Main
                </a>
                <a href="" className="dropdown-link link-style">
                  Alternative Titles
                </a>
                <a href="" className="dropdown-link link-style">
                  Cast & Crew
                </a>
                <a href="" className="dropdown-link link-style">
                  Release Date
                </a>
                <a href="" className="dropdown-link link-style">
                  Translations
                </a>
                <a href="" className="dropdown-link link-style">
                  Changes
                </a>
                <a href="" className="dropdown-link link-style">
                  Report
                </a>
                <a href="" className="dropdown-link link-style">
                  Edit
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown" data-dropdown>
            <li data-dropdown-item>
              Media
              <i className="fa-solid fa-caret-down"></i>
            </li>
            <div className="dropdown-menu">
              <div className="dropdown-links">
                <a href="" className="dropdown-link link-style">
                  Backdrops
                </a>
                <a href="" className="dropdown-link link-style">
                  Logos
                </a>
                <a href="" className="dropdown-link link-style">
                  Posters
                </a>
                <a href="" className="dropdown-link link-style">
                  Videos
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown" data-dropdown>
            <li data-dropdown-item>
              Fandom
              <i className="fa-solid fa-caret-down"></i>
            </li>
            <div className="dropdown-menu">
              <div className="dropdown-links">
                <a href="" className="dropdown-link link-style">
                  Discussions
                </a>
                <a href="" className="dropdown-link link-style">
                  Reviews
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown" data-dropdown>
            <li data-dropdown-item>
              Share
              <i className="fa-solid fa-caret-down"></i>
            </li>
            <div className="dropdown-menu">
              <div className="dropdown-links">
                <a href="" className="dropdown-link link-style">
                  Share Link
                </a>
                <a href="" className="dropdown-link link-style">
                  Facebook
                </a>
                <a href="" className="dropdown-link link-style">
                  Tweet
                </a>
              </div>
            </div>
          </div>
        </ul>
      </section>
    )
}

export default ShortcutBar;