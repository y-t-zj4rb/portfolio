module.exports = {
  title: 'Y.T.Portfolio', 
  description: '' ,
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio/' }
    ],
    sidebar: 'auto',
  },
  base:'/portfolio/',
  dest: 'docs'
  }