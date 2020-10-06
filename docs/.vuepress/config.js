module.exports = {
  title: 'Demo VuePress', 
  description: 'VuePressデモ' ,
  themeConfig: {
    nav: [
      { text: 'ほーむ', link: '/' },
      { text: 'あばうと', link: '/about/' }
    ],
    sidebar: 'auto',
  },
  base:'/yasudataiki/',
  dest: 'dist'
  }