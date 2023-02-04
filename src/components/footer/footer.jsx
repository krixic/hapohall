import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer-section">
      <svg
        id="visual"
        viewBox="0 0 900 300"
        width="900"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 209L25 205.5C50 202 100 195 150 191.5C200 188 250 188 300 190.7C350 193.3 400 198.7 450 202C500 205.3 550 206.7 600 208C650 209.3 700 210.7 750 205.7C800 200.7 850 189.3 875 183.7L900 178L900 301L875 301C850 301 800 301 750 301C700 301 650 301 600 301C550 301 500 301 450 301C400 301 350 301 300 301C250 301 200 301 150 301C100 301 50 301 25 301L0 301Z"
          fill="#8080ff"
        ></path>
        <path
          d="M0 241L25 236.3C50 231.7 100 222.3 150 217.7C200 213 250 213 300 215.2C350 217.3 400 221.7 450 221.5C500 221.3 550 216.7 600 214.5C650 212.3 700 212.7 750 214C800 215.3 850 217.7 875 218.8L900 220L900 301L875 301C850 301 800 301 750 301C700 301 650 301 600 301C550 301 500 301 450 301C400 301 350 301 300 301C250 301 200 301 150 301C100 301 50 301 25 301L0 301Z"
          fill="#6b69f0"
        ></path>
        <path
          d="M0 255L25 251.8C50 248.7 100 242.3 150 238.5C200 234.7 250 233.3 300 232C350 230.7 400 229.3 450 227.8C500 226.3 550 224.7 600 228.8C650 233 700 243 750 246.2C800 249.3 850 245.7 875 243.8L900 242L900 301L875 301C850 301 800 301 750 301C700 301 650 301 600 301C550 301 500 301 450 301C400 301 350 301 300 301C250 301 200 301 150 301C100 301 50 301 25 301L0 301Z"
          fill="#5553e2"
        ></path>
        <path
          d="M0 256L25 255.2C50 254.3 100 252.7 150 253C200 253.3 250 255.7 300 259.7C350 263.7 400 269.3 450 270.5C500 271.7 550 268.3 600 268.8C650 269.3 700 273.7 750 276.7C800 279.7 850 281.3 875 282.2L900 283L900 301L875 301C850 301 800 301 750 301C700 301 650 301 600 301C550 301 500 301 450 301C400 301 350 301 300 301C250 301 200 301 150 301C100 301 50 301 25 301L0 301Z"
          fill="#3c3cd3"
        ></path>
        <div className="layered-spacer">
          <div className="copyright">
            <div className="copyright-title">
              © Copyright 2023 krixic.github.io/hapohall
            </div>
            <div className="copyright-subtitle">All rights reserved</div>
          </div>
          <div className="terms-of-use">
            <div className="terms-title">Terms of Use</div>
            <div className="terms-subtitle">
              All content on krixic.github.io/hapohall is provided free of
              charge. However, you may not redistribute, in any way, any
              original content found here without the creator's explicit
              permission. All content is provided without any guarantees.
            </div>
          </div>
        </div>
      </svg>
    </section>
  );
};