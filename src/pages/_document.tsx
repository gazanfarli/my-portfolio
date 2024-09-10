import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications. Explore my projects, skills, and professional journey."
        />
        <meta
          name="keywords"
          content="Gazanfar Gazanfarli, Software Engineer, Frontend Developer, React Developer, Web Developer, Azerbaijan, Portfolio, Mobile-first Web Applications, International Bank of Azerbaijan, Java Microservices, Backend-for-Frontend, Chakra UI, Tailwind CSS, React Native"
        />
        <meta name="author" content="Gazanfar Gazanfarli" />

        <meta property="og:title" content="Gazanfar Gazanfarli - Software Engineer | Portfolio Website" />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications. Explore my projects, skills, and professional journey."
        />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/18XYRY68JZmiQoDS3TYje-CqWjJXLRP8i/view?usp=drive_link"
        />
        <meta property="og:url" content="https://gazanfarli.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="Gazanfar Gazanfarli" />
        <meta name="twitter:title" content="Gazanfar Gazanfarli - Software Engineer | Portfolio Website" />
        <meta
          name="twitter:description"
          content="Welcome to the portfolio of Gazanfar Gazanfarli, a passionate Software Engineer from Baku, Azerbaijan. Specializing in React, Node.js, and mobile-first web applications."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/file/d/18XYRY68JZmiQoDS3TYje-CqWjJXLRP8i/view?usp=drive_link"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
