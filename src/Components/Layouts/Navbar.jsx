import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <span>
          <a href="/">QRGenerator</a>
        </span>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="about">How To Use</a></li>
          <li>
            <GitHubIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
}
