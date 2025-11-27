import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div>
          Design and Developed by{" "}
          <span className="author-name">Mohammed Tharick</span>
        </div>
        <div>
          Copyright © 2025 <span className="author-name">MT</span>
        </div>
        <div className="social-links">
          <a
            href="https://www.instagram.com/md_tharick22/"
            target="_blank"
            className="social-link"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/md.tharick/"
            target="_blank"
            className="social-link"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://www.x.com/a_tharick52871"
            target="_blank"
            className="social-link"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://www.github.com/MohammedTharick25"
            target="_blank"
            className="social-link"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/mdtharick/"
            target="_blank"
            className="social-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
