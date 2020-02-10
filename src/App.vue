<template>
  <div id="app">
    <Header/>
    <Welcome/>
    <Special/>
    <Features/>
    <Video/>
    <CoolFacts/>
    <ScreenShoot/>
    <Pricing/>
    <Feedback/>
    <Cta/>
    <OurTeam/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
window.$ = require('jquery')
window.jQuery = require('jquery')

import Header from './components/Header'
import Welcome from './components/Welcome'
import Special from './components/Special'
import Features from './components/Features'
import Video from './components/Video'
import CoolFacts from './components/CoolFacts'
import ScreenShoot from './components/ScreenShoot'
import Pricing from './components/Pricing'
import Feedback from './components/Feedback'
import Cta from './components/CTA'
import OurTeam from './components/OurTeam'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Welcome,
    Special,
    Features,
    Video,
    CoolFacts,
    ScreenShoot,
    Pricing,
    Feedback,
    Cta,
    OurTeam,
    Contact,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cabin:400,500,700|Montserrat:400,500,700');
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/animate.css');
@import url('./assets/css/magnific-popup.css');
/* @import url('./assets/css/owl.carousel.min.css'); */
@import url('./assets/css/slick.css');
@import url('./assets/css/font-awesome.min.css');
@import url('./assets/css/themify-icons.css');
@import url('./assets/css/ionicons.min.css');
@import url('./assets/style.css');
@import url('./assets/css/responsive.css');
</style>
