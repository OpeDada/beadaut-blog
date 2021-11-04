import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

const name = "Beadaut Blogs";
export const siteTitle = "Beadaut Blogs";

export default function Layout({ children, home }) {
  return (
    <div>
      {/* TODO: please fix the metadata below */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Beadaut Blogs"
          content="Curated posts and updates from Beadaut. Beadaut is the first open platform for course creators and in-demand courses in Nigeria."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
