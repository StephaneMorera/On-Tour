import "./Header.scss";
import avatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import banner from "../../assets/images/dj.jpg"

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <div className="header__title-container">
          <h1 className="header__title">On Tour</h1>
        </div>
      </Link>
      <section className="header__searchbar">
        <div className="header__search-container">
          <img className="header__banner" src={banner} alt="banner" />
        </div>
        <div className="header__user">
          <div className="header__avatar">
            <img className="header__img" src={avatar} alt="" />
          </div>
          <div className="header__user-title">
            <Link to="profile" className="header__link">
              <h4 className="header__username">Steph88</h4>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
