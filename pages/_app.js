import Head from "next/head";
import Layout from "../components/layout/Layout";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Charlie's Castle</title>
        <meta name="title" content="This is Charlie Lin" />
        <meta name="description" content="Welcome to my castle" />
        <meta name="og:title" content="This is Charlie Lin" />
        <meta name="og:description" content="Welcome to my castle" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2Z5DHP2DS7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2Z5DHP2DS7', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
