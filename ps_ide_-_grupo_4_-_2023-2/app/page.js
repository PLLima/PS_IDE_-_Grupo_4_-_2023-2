import Image from 'next/image'
import Forms from './components/Forms'
import SobreNos from './components/SobreNos'
import Header from './components/Header'
import Footer from './components/Footer'
import StartersAgua from './components/StartersAgua'

export default function Home() {
  return (
    <>
      <Header/>
      <StartersAgua/>
      <SobreNos/>
      <Forms/>
      <Footer/>
    </>
  )
}
