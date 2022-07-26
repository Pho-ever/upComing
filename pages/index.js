import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Swiper from '../components/swiper'


export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Landing />
      <Swiper />
    </div>
  )
}
