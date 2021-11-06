import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <div className="article-header">
          <div className="semi-links">
            {postData.category.map((item) => (
              <Link href="#">
                <a>{item}</a>
              </Link>
            ))}
          </div>
          <h2>{postData.title}</h2>
          <p>{postData.intro}</p>
          <ul className="art-infos">
            <li>
              By{" "}
              <Link href={""}>
                <a>{postData.author}</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a>
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
            {postData.cta ? (
              <Link href={postData.ctaLink}>
                <a target="_blank">{postData.cta}</a>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="social-section">
          <h1>Share this:</h1>
          <Link href={"https://twitter.com/beadautedtech"}>
            <a target="_blank" className="social-button">
              <FontAwesomeIcon icon={faTwitter} width="16" /> Twitter
            </a>
          </Link>
          <Link href={"https://www.facebook.com/beadautedtech"}>
            <a target="_blank" className="social-button" target="_blank">
              <FontAwesomeIcon icon={faFacebook} width="16" className="pb-1" />{" "}
              Facebook
            </a>
          </Link>
          <Link href={""}>
            <a target="_blank" className="social-button" target="_blank">
              <FontAwesomeIcon icon={faThumbsUp} width="16" className="pb-1" />{" "}
              Like
            </a>
          </Link>
        </div>
        <div className="divider div-transparent div-dot"></div>
        <div className="divider div-transparent div-dot"></div>
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
