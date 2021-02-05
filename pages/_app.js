import '../styles/globals.css'
import withGA from "next-ga";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return <Component { ...pageProps } />
}
export default withGA("G-0T2EQZMD2V", Router)(MyApp);
