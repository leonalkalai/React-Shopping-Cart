import "./HamburgerMenu.css";
import { useEffect, useState, createContext, useContext  } from "react";
import { AppContext, } from "../../../App";

export default function HamburgerMenu() {
  const { counter } = useContext(AppContext);
  return (
    <>
      <div className="more">
        <a className="menu" href="#">
          <i className="fa fa-align-right" />
        </a>
        <div className="figure">{counter}</div>
      </div>
    </>
  );
}
