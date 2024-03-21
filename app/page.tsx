import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homePage/home'
import Intro from '../components/introPage/intro'
import Footer from '../components/footer/footer'
import Table from '../components/table/table'
import Gallery from '../components/gallery/gallery'
import Act from '../components/activityPage/activity'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Intro />
      <Table />
      <Act />
      <Gallery />
      <Footer />
    </>
  )
}
