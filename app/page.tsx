import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homePage/home'
import Intro from '../components/introPage/intro'
import About from '../components/AboutPage/about'
import Footer from '../components/footer/footer'
import Act from '../components/activityPage/activity'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Intro />
      <About />
      <Act />
      <Footer />
    </>
  )
}
