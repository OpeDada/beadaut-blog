import "../styles/global.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  console.log("pageProps; ", pageProps);
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer pageId={pageProps?.postData?.id} />
    </div>
  );
}
