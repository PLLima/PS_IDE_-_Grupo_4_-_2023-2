import Header from './components/Header'
import Banner from './components/Banner'
import SobreNos from './components/SobreNos'
import Forms from './components/Forms'
import Footer from './components/Footer'
import StartersAgua from './components/StartersAgua'

export default function Home(){
  return(
    <>
      <Header/>
      <Banner/>
      <Starters/>
      <StartersAgua/>
      <SobreNos/>
      <Forms/>
      <Footer/>
    </>
  )
}
