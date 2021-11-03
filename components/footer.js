import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const allPostsData = getSortedPostsData();
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="footer-links">
            <Nav>
            <Link href={"/posts-list/posts"}>
              <a className="nav-link">Blogs</a>
            </Link>
            <Link href={"https://www.beadaut.com/"}>
              <a className="nav-link" target="_blank">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="nav-link" target="_blank">
                Updates
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
      <div className="footer-recent-posts">
        <h2>Recent Posts</h2>
        {allPostsData.map(({ id, title }) => (
          <li className="" key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </div>
      <div className="footer-copyright">
        <p>© 2021 Beadaut Blogs</p>
        <Link href={"/"}>
          <span className="">To the top ↑</span>
        </Link>
      </div>
    </section>
  );
}
