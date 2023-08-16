import Header from './Layout/Header'
import Footer from './Layout/Footer'

export default function About() {
    return (
      <div>
        <Header />
          <div className='about--main'>
            <img className='about--image' src="/Images/about-page.png" />
            <h1 className='about--title'>Don&apos;t squeeze in a sedan when you could relax in a van.</h1>
            <p className='about--content'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)<br></br><br></br> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className='about--bottom'>
              <h2 className='about--title--second'>Your destination is waiting. Your van is ready.</h2>
              <button className='about--button'>Explore our vans</button>
            </div>
          </div>
        <Footer />
      </div>
    )
  }