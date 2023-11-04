import Header from './components/Header'
import Banner from './components/Banner'
import SobreNos from './components/SobreNos'
import Forms from './components/Forms'
import Footer from './components/Footer'
import StartersAgua from './components/StartersAgua'
import StarterMain from "./components/StartersMain"
import StartersFogo from "./components/StartersFogo"
import StartersPlanta from "./components/StartersPlanta"

export default function Home(){
  return(
    <>
      <Header/>
      <Banner/>
      <StarterMain/>
      <StartersAgua/>
      <SobreNos/>
      <Forms/>
      <Footer/>
    </>
  )
}
