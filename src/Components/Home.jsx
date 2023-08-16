
import Header from './Layout/Header'
import Footer from './Layout/Footer'

export default function Home() {
    return (
      <div>
        <Header />
        <main className='main--container'>
          <h1 className='main--title'>You got the travel plans, we got the travel vans.</h1>
          <p className='main--content'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className='main--button'>Find your van</button>
        </main>
        <Footer />
      </div>
    )
  }