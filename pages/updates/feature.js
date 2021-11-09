import React from "react";
import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { getSortedPostsData } from "../../lib/updates";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Updates({ allPostsData }) {
  return (
    <div>
      <h1 className="feature-header">Feature Updates</h1>
      <div className="all-updates">
        <h2 className="feature-intro">
          Find the latest updates on the Beadaut Platform here.
        </h2>
        <div className="feature-app-button">
          <Link href={"https://app.beadaut.com/app/courses"}>
            <a target="_blank">Go to App</a>
          </Link>
        </div>
        <div className="feature-infos">
          {allPostsData.map(({ id, date, title, image, contentHtml }) => (
            <div className="feature-info" key={id}>
              <div className="left-items">
                <p>
                  <strong>{title}</strong>
                  <br />
                  <Date dateString={date} />
                </p>
              </div>
              <div className="right-items">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <br />
                {image ? (
                  <Image
                    priority
                    src={image}
                    className=""
                    alt=""
                    layout="responsive"
                    objectFit="fill"
                    width={6}
                    height={4}
                  />
                ) : null}
              </div>
            </div>
          ))}
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
        </div>
      </div>
    </div>
  );
}
