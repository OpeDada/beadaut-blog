import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

export default function Footer({ pageId }) {
  const router = useRouter();
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <Nav>
            <Link href={"/posts-list/posts"}>
              <a className="nav-link">Blogs</a>
            </Link>
            <Link href={"/updates/feature"}>
              <a className="nav-link">Updates</a>
            </Link>
            <Link href={"https://www.beadaut.com/about.html"}>
              <a
                style={{ color: "#d79237" }}
                className="nav-link"
                target="_blank"
              >
                About Beadaut
              </a>
            </Link>
          </Nav>
        </div>
        <div className="footer-socials">
          <Link href={"https://www.facebook.com/beadautedtech"}>
            <a className="nav-link" target="_blank">
              <FontAwesomeIcon icon={faFacebook} width="24" />
            </a>
          </Link>
          <Link href={"https://twitter.com/beadautedtech"}>
            <a className="nav-link" target="_blank">
              <FontAwesomeIcon icon={faTwitter} width="24" />
            </a>
          </Link>
          <Link href={"https://www.instagram.com/beadautedtech/"}>
            <a className="nav-link" target="_blank">
              <FontAwesomeIcon icon={faInstagram} width="24" />
            </a>
          </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 Beadaut Blogs</p>
        <Link href={pageId ? `/posts/${pageId}` : router.pathname}>
          <div>
            <span className="to-the-top">To the top ↑</span>
            <span className="up">Up ↑</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
