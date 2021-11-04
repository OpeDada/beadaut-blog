import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="post-page">
          {allPostsData.map(
            ({ id, date, title, author, image, intro, category }) => (
              <div className="post-page-info" key={id}>
                <div className="post-header">
                  <div className="semi-links">
                    {category.map((item) => (
                      <Link href="#">
                        <a>{item}</a>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <h2>{title}</h2>
                    </a>
                  </Link>
                  <ul className="article-infos">
                    <li>
                      By{" "}
                      <Link href={""}>
                        <a>{author}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={""}>
                        <a>
                          <Date dateString={date} />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
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
                <p>{intro}</p>
                <div className="divider div-transparent div-dot"></div>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
  );
}
