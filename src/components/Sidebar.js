import pageLogoLight from "../assets/logo-light.svg";
import boardIcon from "../assets/icon-board.svg";
import iconLightTheme from "../assets/icon-light-theme.svg";
import iconDarkTheme from "../assets/icon-dark-theme.svg";
import iconHide from "../assets/icon-hide-sidebar.svg";
export default function Sidebar({ toggleSidebar, sidebar }) {
  return (
    <aside className={sidebar ? "sidebar sidebar--open": "sidebar sidebar--close"}>
      <div className="logo-content">
        <img src={pageLogoLight} className="logo" alt="page logo" />
        <h1 className="page-name">kanban</h1>
      </div>
      <div className="menu-section">
        <small className="menu-count">All boards</small>
        <ul className="menus">
          <li className="menu">
            <img src={boardIcon} className="menu-icon" alt="" />
            <h3 className="menu-name">Platform Launch</h3>
          </li>
          <li className="menu">
            <img src={boardIcon} className="menu-icon" alt="" />
            <h3 className="menu-name">Marketing Plan</h3>
          </li>
          <li className="menu">
            <img src={boardIcon} className="menu-icon" alt="" />
            <h3 className="menu-name">Roadmap</h3>
          </li>
          <li className="menu">
            <img src={boardIcon} className="menu-icon" alt="" />
            <h3 className="menu-add">+Create New Board</h3>
          </li>
        </ul>
      </div>
      <div className="settings">
        <div className="theme">
          <img src={iconLightTheme} alt="" />
          <input type="checkbox" name="theme" id="theme" />
          <img src={iconDarkTheme} alt="" />
        </div>
      </div>
      <div className="hide-sidebar" onClick={toggleSidebar}>
        <img src={iconHide} alt="" />
        <strong>Hide Sidebar</strong>
      </div>
    </aside>
  );
}
