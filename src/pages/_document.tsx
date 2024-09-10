import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications. Explore my projects, skills, and professional journey."
          name="description"
        />
        <meta
          content="Gazanfar Gazanfarli, Software Engineer, Frontend Developer, React Developer, Web Developer, Azerbaijan, Portfolio, Mobile-first Web Applications, International Bank of Azerbaijan, Java Microservices, Backend-for-Frontend, Chakra UI, Tailwind CSS, React Native"
          name="keywords"
        />
        <meta content="Gazanfar Gazanfarli" name="author" />

        <meta content="Gazanfar Gazanfarli - Software Engineer | Portfolio Website" property="og:title" />
        <meta
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications. Explore my projects, skills, and professional journey."
          property="og:description"
        />
        <meta
          content="https://drive.google.com/file/d/18XYRY68JZmiQoDS3TYje-CqWjJXLRP8i/view?usp=drive_link"
          property="og:image"
        />
        <meta content="https://gazanfarli.com" property="og:url" />
        <meta content="website" property="og:type" />

        <meta content="Gazanfar Gazanfarli" name="twitter:card" />
        <meta content="Gazanfar Gazanfarli - Software Engineer | Portfolio Website" name="twitter:title" />
        <meta
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications."
          name="twitter:description"
        />
        <meta
          content="https://drive.google.com/file/d/18XYRY68JZmiQoDS3TYje-CqWjJXLRP8i/view?usp=drive_link"
          name="twitter:image"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
