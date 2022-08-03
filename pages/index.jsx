import Navbar from '../components/_App/navbar'
import Landing from '../components/Landing/landing'
import FavActor from '../components/Landing/favActor'
// import Swiper from ''


export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Landing />
      </div>
      <FavActor />

    </>
  )
}
