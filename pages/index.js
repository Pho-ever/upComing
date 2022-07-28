import Navbar from '../components/_App/navbar'
import Landing from '../components/landing'
import Swiper from '../components/swiper'
// import Swiper from ''


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Landing />
      <Swiper />
    </div>
  )
}
