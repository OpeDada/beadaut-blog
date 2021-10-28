import React, { Component } from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Header extends Component {
  render() {
    return (
      <div className="header-group">
        <Navbar expand="lg">
            <Navbar.Brand href="#home">Beadaut Blogs </Navbar.Brand>
            <br />
            <p>Curated posts and updates from Beadaut</p>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Link href={"/posts-list/posts"}>
                  <a className="nav-link">Blogs</a>
                </Link>
                <Link href={"https://www.beadaut.com/"}>
                  <a className="nav-link" target="_blank">About</a>
                </Link>
                <Link href="/">
                  <a className="nav-link" target="_blank">Updates</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
  }
}
