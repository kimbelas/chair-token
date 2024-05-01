import React from "react";
import "./Footer.css";

// Social link component
const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  </li>
);

// Footer link component
const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

// Array of social links
const socialLinks = [
  { href: "https://twitter.com", iconClass: "bi bi-twitter" },
  { href: "https://t.me", iconClass: "bi bi-telegram" },
];

// Array of footer links
const footerLinks = [
];

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="join-us">
            <h1>
              JOIN US VIA
              <br />
              <span>TWITTER</span>
            </h1>
            <div className="cta">
              <a href="https://discord.gg/3Qq9VJ6Z" target="_blank" rel="noopener noreferrer">
                Join Twitter
              </a>
            </div>
          </div>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} iconClass={link.iconClass} />
            ))}
          </ul>

          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.href} text={link.text} />
            ))}
          </ul>

          <p className="copy">© 2024 CHAIR. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
