<template>
  <div id="app">
    <Loader/>
    <Header/>
      <Home/>
    <Footer/>
  </div>
</template>

<script>
window.$ = require('jquery')
window.jQuery = require('jquery')

import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'

export default {
  name: 'App',
  components: {
    Loader,
    Header,
    Footer,
    Home
  },
  mounted() {
    postscribe('#app', `<script src="js/jquery-2.2.4.min.js"><\/script>`)
    postscribe('#app', `<script src="js/popper.min.js"><\/script>`)
    postscribe('#app', `<script src="js/bootstrap.min.js"><\/script>`)
    postscribe('#app', `<script src="js/plugins.js"><\/script>`)
    postscribe('#app', `<script src="js/slick.min.js"><\/script>`)
    postscribe('#app', `<script src="js/footer-reveal.min.js"><\/script>`)
    postscribe('#app', `<script src="js/active.js"><\/script>`)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cabin:400,500,700|Montserrat:400,500,700');
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/animate.css');
@import url('./assets/css/magnific-popup.css');
@import url('./assets/css/owl.carousel.min.css');
@import url('./assets/css/slick.css');
@import url('./assets/css/font-awesome.min.css');
@import url('./assets/css/themify-icons.css');
@import url('./assets/css/ionicons.min.css');
@import url('./assets/style.css');
@import url('./assets/css/responsive.css');
</style>
