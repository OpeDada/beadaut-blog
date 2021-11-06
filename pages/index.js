import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, getAboutData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  let aboutData;
  try {
    aboutData = await getAboutData();
  } catch (error) {
    aboutData = {
      id: 0,
      contentHtml: "Loading...",
    };
  }
  return {
    props: {
      allPostsData,
      aboutData,
    },
  };
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
              <li className="blog-topics" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>
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
                    <h2>{title}</h2>
                  </a>
                </Link>
                <p>{intro}</p>
                <small>
                  <p>
                    <Date dateString={date} />
                  </p>
                </small>
              </li>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="divider div-transparent div-dot"></div>
          <div
            className="about-content"
            dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
          />
          <div className="white-card">
            <div className="white-content">
              <h2>
                Start your creator journey on the Beadaut learning platform!
              </h2>
              <p>
                Share your knowledge and broaden your horizon. Gain unlimited
                access to great online courses.
              </p>
              <div className="app-button">
                <Link href={"https://app.beadaut.com/app/courses"}>
                  <a target="_blank">Go to App</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
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
        </section>
      </Layout>
    </div>
  );
}
