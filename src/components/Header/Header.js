import "./Header.scss";
import avatar from "../../assets/images/avatar.jpg"

const Header = () => {
  return (
    
      <nav className="header">
        <div className="header__title-container">
        <h1 className="header__title">On Tour</h1>
        </div>
        <section className="header__searchbar">
            <div className="header__search-container">
            <input className="header__input" name="search" type="text" placeholder="Search Events" />
            <button className="header__button">Search</button>
            </div>
            <div className="header__user">
                <div className="header__avatar">
                    <img className="header__img" src={avatar} alt="" />
                </div>
                <div className="header__user-title">
                    <h4 className="header__username">Steph88</h4>
                </div>
            </div>
        </section>
      </nav>
    
  );
};

export default Header;
