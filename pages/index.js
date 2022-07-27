import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Swiper from '../components/swiper'
// import Swiper from ''


export default function Home() {
  return (
    <div className="container">
      {/* <img src="../public/images/NG-netflix.jpg" /> */}
      <Navbar />
      <Landing />
      <Swiper />
    </div>
  )
}
