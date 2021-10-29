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
          <div className="latest-blogs">
          <h5>Latest from the Blog</h5>
          </div>
            <div className="blog-list">
              {allPostsData.map(({ id, date, title, intro, image }) => (
              <li className="" key={id}>
                <Image
                priority
                src={image}
                className=""
                alt=""
                layout="responsive"
                objectFit="cover"
                width={6}
                height={4}
                />
                <Link href={`/posts/${id}`}>
                  <a><h2>{title}</h2></a>
                </Link>
                <p>{intro}</p>
                <small>
                  <p><Date dateString={date} /></p>
                </small>
              </li>
              ))}
            </div>
          </section>
    </Layout>
    </div>
  )
}
