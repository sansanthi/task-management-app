import pageLogoLight from "../assets/logo-light.svg";
import addIcon from "../assets/icon-add-task-mobile.svg";
import ellipseIcon from "../assets/icon-vertical-ellipsis.svg";
import { useEffect, useState } from "react";

export default function Header({ sidebar }) {
  return (
    <div className="header-page">
      <div className="logo-content">
        <img src={pageLogoLight} className="logo" alt="page logo" />
        <h1 className="page-name">kanban</h1>
      </div>
      <header className={sidebar ? "header header--sidebar" : "header full-page"}>
        <div className="header--menu">
          <img src={pageLogoLight} alt="" className="logo-img" />
          <h2 className="menu-name">Platform Lauch</h2>
        </div>
        <div className="task-add">
          <button className="task-add-btn btn--lightpurple">
            <div>
              <img src={addIcon} alt="" />
              <p className="task-text">Add new task</p>
            </div>
          </button>
          <img src={ellipseIcon} alt="" />
        </div>
      </header>
    </div>
  );
}
