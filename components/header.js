import React, { Component } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="header-group">
      <Navbar expand="lg">
        <div className="header-titles">
          <Navbar.Brand href="/">Beadaut Blogs </Navbar.Brand>
          <br />
          <p>Curated posts and updates from Beadaut</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link href={"/posts-list/posts"}>
              <a
                style={{
                  color: "#FFAD42",
                  textDecoration: router.pathname.includes("/posts-list/posts")
                    ? "underline"
                    : "",
                }}
                className="nav-link"
              >
                Blogs
              </a>
            </Link>
            <Link href={"/updates/feature"}>
              <a
                style={{
                  color: "#FFAD42",
                  textDecoration: router.pathname.includes("/updates/feature")
                    ? "underline"
                    : "",
                }}
                className="nav-link"
              >
                Updates
              </a>
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
