import Navbar from '../components/_App/navbar'
import Landing from '../components/Landing/landing'
import LandingTwo from '../components/Landing/landingTwo'


export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Landing />
      </div>
      <LandingTwo />

    </>
  )
}
