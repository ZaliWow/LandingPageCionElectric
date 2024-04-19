import { Navbar } from './components/navbar'
import { Promise } from './components/promise'
import { Services } from './components/services'
import { AboutUS } from './components/aboutUs'
import { WhyPickUs } from './components/pick'
import { ReviewsComponent } from './components/reviews'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { CarretePhotos } from './components/carretephotos'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Promise></Promise>
    <Services></Services>
    <AboutUS></AboutUS>
    <WhyPickUs></WhyPickUs>
    <ReviewsComponent></ReviewsComponent>

    <Footer></Footer>
    

    </>
  )
}

export default App
