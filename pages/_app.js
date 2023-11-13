import "../styles/styles.scss";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
