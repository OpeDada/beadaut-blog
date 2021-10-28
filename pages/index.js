import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
        <section>
          <h1>Broaden Your Knowledge, Broaden Your Horizon. </h1>
          </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest from the Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, intro, image }) => (
          <li className={utilStyles.listItem} key={id}>
            <img src={image} alt="" />
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
              <a>{intro}</a>
            <br />
            <small className={utilStyles.lightText}>
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
