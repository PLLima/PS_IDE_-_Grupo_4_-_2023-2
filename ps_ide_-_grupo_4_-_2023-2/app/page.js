import Header from './components/Header'
import Banner from './components/Banner'
import SobreNos from './components/SobreNos'
import Forms from './components/Forms'
import Footer from './components/Footer'
import Starters from './components/Starters'

export default function Home(){
  return(
    <>
      <Header/>
      <Banner/>
      <Starters/>
      <SobreNos/>
      <Forms/>
      <Footer/>
    </>
  )
}
