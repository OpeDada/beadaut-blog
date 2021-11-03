import "../styles/global.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
