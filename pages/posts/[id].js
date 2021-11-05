import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <div className="article-header">
          <div className="semi-links">
            <Link href="#">
              <a>{postData.category}</a>
            </Link>
          </div>
          <h2>{postData.title}</h2>
          <p>{postData.intro}</p>
          <ul className="article-infos">
            <li style={{ color: "#6d6d6d;" }}>
              By{" "}
              <Link href={""}>
                <a style={{ color: "#6d6d6d;" }}>{postData.author}</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a style={{ color: "#6d6d6d;" }}>
                  <Date dateString={postData.date} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Image
          priority
          src={postData.image}
          className=""
          alt=""
          layout="responsive"
          objectFit="cover"
          width={6}
          height={4}
        />
        <div className="article-content">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div className="article-app-button">
            <Link href={"https://app.beadaut.com/app/courses"}>
              <a target="_blank">Start your creator journey on beadaut</a>
            </Link>
          </div>
          <p>
            Talk soon, <br /> Joshua <br />
            Founder, Beadaut.
          </p>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
