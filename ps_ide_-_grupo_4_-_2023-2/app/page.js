import Image from 'next/image'
import Forms from './components/Forms'
import SobreNos from './components/SobreNos'
import Header from './components/Header'
import Footer from './components/Footer'
import Starters from './components/Starters'

export default function Home() {
  return (
    <>
      <Header/>
      <Starters/>
      <SobreNos/>
      <Forms/>
      <Footer/>
    </>
  )
}
