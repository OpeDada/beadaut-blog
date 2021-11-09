import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Date from "../../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

function getBeforeAndAfter(postId, allPostsData) {
  let before;
  let after;
  allPostsData.forEach((element, id) => {
    if (postId === element.id) {
      if (id === 0) {
        before = undefined;
        after = id + 1;
      } else if (id === allPostsData.length - 1) {
        after = undefined;
        before = id - 1;
      } else {
        after = id + 1;
        before = id - 1;
      }
    }
  });
  return { before, after };
}

export default function Post({ postData, allPostsData }) {
  const { before, after } = getBeforeAndAfter(postData.id, allPostsData);
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
          <div className="art-infos">
            <li>
              By <a>{postData.author}</a>
            </li>
            <li>
              <a>
                <Date dateString={postData.date} />
              </a>
            </li>
          </div>
        </div>
        <div className="other-article-info">
          <Image
            priority
            src={postData.image}
            className="article-img"
            alt=""
            layout="responsive"
            objectFit="cover"
            width={6}
            height={4}
          />
          <div className="other-article">
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
                  <FontAwesomeIcon
                    icon={faFacebook}
                    width="16"
                    className="pb-1"
                  />{" "}
                  Facebook
                </a>
              </Link>
            </div>
            <div className="divider div-transparent div-dot"></div>
            <div className="art-infos">
              {before !== undefined && (
                <Link href={`/posts/${allPostsData[before].id}`}>
                  <a>{allPostsData[before].title}</a>
                </Link>
              )}
              {after !== undefined && (
                <Link href={`/posts/${allPostsData[after].id}`}>
                  <a>{allPostsData[after].title}</a>
                </Link>
              )}
            </div>
            <div className="divider div-transparent div-dot"></div>
          </div>
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
