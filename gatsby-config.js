module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Most Simply Me`,
        icon: `content/assets/img/logo.png`,
        short_name: `mostsimplyme`,
        start_url: `/`,
        background_color: `#2C5282`,
        theme_color: `#2C5282`,
        display: `standalone`,
        scope: '/',
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: {
          family: `Arizonia`,
          variable: true,
          weights: [400, 700, 900],
        },
      },
    },
  ],
  siteMetadata: {
    title: `Most Simply Me`,
    author: `Megan Rhodes`,
    description: ``,
    greeting: ``,
    copyright: `Copyright © 2020 Most Simply Me LLC - I cannot LOVE at ALL until I LOVE it ALL`,
    loginDesc: '',
    isAuthApp: false,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/reuben.ellis.338',
      twitter: '',
      instagram: '',
      github: 'https://www.github.com/ethriel3695/gatsby-theme-contentful',
      email: 'mailto:mmostsimplyme@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
    categories: [
      'react',
      'gatsby',
      'gatsbyjs',
      'themes',
      'web development',
      'contentful',
      'production',
      'tailwindcss',
      'storybook',
    ],
    hasCTA: false,
  },
};
