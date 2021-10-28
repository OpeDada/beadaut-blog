import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className="banner">
          <h1>
          Broaden Your Knowledge,
          <br /> Broaden Your Horizon.
          </h1>
        </section>
        <section className="main-blog-list">
          <h2 className="latest-blogs">Latest from the Blog</h2>
            <ul className="blog-list">
              {allPostsData.map(({ id, date, title, intro, image }) => (
              <li className="" key={id}>
                <Image
                priority
                src={image}
                className=""
                height={144}
                width={144}
                alt=""
                />
                <br />
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                  <a>{intro}</a>
                <br />
                <small className="">
                  <Date dateString={date} />
                </small>
              </li>
              ))}
            </ul>
          </section>
    </Layout>
    </div>
  )
}
