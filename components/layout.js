import Head from "next/head";

const name = "Beadaut Blogs";
export const siteTitle = "Beadaut Blogs";

export default function Layout({ children }) {
  return (
    <div>
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
    </div>
  );
}
