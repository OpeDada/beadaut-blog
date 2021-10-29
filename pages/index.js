import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData, getAboutData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  let aboutData;
  try {

    aboutData = await getAboutData()
  } catch (error) {
    aboutData = {
      id:0,
      contentHtml:"Loading...",
    }
  }
  return {
    props: {
      allPostsData, aboutData
    }
  }
}

export default function Home({ allPostsData, aboutData }) {
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
          <section className="about-section">
                {/* <p>{aboutData.contentHtml}</p> */}
                {/* Tolu Owoyemi */}
                <div>
                <div className="about-content" dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
                </div>
                <div className="white-card">
                  <div className="white-content">
                  <h2>Start your creator journey on the Beadaut learning platform!</h2>
                  <p>Share your knowledge and broaden your horizon. Gain unlimited access to great online courses.</p>
                  <Link href={"https://app.beadaut.com/app/courses"}>
                  <a target="_blank"><button>GO TO APP</button></a>
                </Link>

                  </div>
                  </div>
          </section>
    </Layout>
    </div>
  )
}
