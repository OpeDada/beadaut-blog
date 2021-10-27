import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="header-group">
        <div>
        <h2>Beadaut Blogs</h2>
        <p>Curated posts and updates from Beadaut</p>
        </div>
        <ul>
          <li>
            <Link href={"/posts-list/posts"}>
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href={"https://www.beadaut.com/"}>
              <a className="foo" target="_blank">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="foo" target="_blank">Updates</a>
            </Link>
          </li>
        </ul>
      </header>
      </div>
    )
  }
}
