import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { theme } from '@hackclub/design-system'

export default () => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title, description }
      }
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
        <html lang="en" />

        <link rel="preconnect" href="https://hackclub.myshopify.com" />

        <link rel="canonical" href={siteUrl} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#663399" />
        <meta name="msapplication-TileColor" content={theme.colors.primary} />
        <meta name="theme-color" content={theme.colors.primary} />

        <meta name="description" content={description} />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={`${siteUrl}/social.png`} />
        <meta property="og:image:alt" content="Hack Club Shop." />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="686" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hackclub" />
      </Helmet>
    )}
  />
)
