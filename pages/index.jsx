import Navbar from '../components/_App/navbar'
import Landing from '../components/Landing/landing'
import LandingTwo from '../components/Landing/landingTwo'
import Questions from '../components/Landing/Questions'


export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Landing />
      </div>
      <LandingTwo />
      <Questions />

    </>
  )
}
