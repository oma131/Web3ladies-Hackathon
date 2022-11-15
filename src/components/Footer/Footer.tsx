import { FC } from "react";
import "./Footer.css";
import Opensea from "assets/svgs/opensea.svg";
import Discord from "assets/svgs/discord.svg";
import Twitter from "assets/svgs/twitter.svg";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-title-main">
        <div className="footer-title-wrapper">
          <h2 className="footer-title">BINA Minting Website</h2>
          <h3 className="footer-subtitle">BINA x Bunzz X Web3Ladies</h3>
        </div>

        <div className="links">
          <a href="https://opensea.io/" target="_blank">
            <img src={Opensea} alt="opensea" />
          </a>
          <a href="https://discord.com/" target="_blank">
            <img src={Discord} alt="discord" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2022 BINA Inc. All rights reserved.
      </div>
    </footer>
  );
};