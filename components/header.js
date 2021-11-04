import React, { Component } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Header extends Component {
  render() {
    return (
      <div className="header-group">
        <Navbar expand="lg">
          <div className="header-titles">
            <Navbar.Brand href="/">Beadaut Blogs </Navbar.Brand>
            <br />
            <p>Curated posts and updates from Beadaut</p>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link href={"/posts-list/posts"}>
                <a style={{ color: "#FFAD42" }} className="nav-link">
                  Blogs
                </a>
              </Link>
              <Link href={"https://www.beadaut.com/about"}>
                <a
                  style={{ color: "#FFAD42" }}
                  className="nav-link"
                  target="_blank"
                >
                  About
                </a>
              </Link>
              <Link href={"/updates/feature"}>
                <a style={{ color: "#FFAD42" }} className="nav-link">
                  Updates
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
