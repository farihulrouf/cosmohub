import Head from 'next/head'
import Image from 'next/image'
import SectionBanner from '../components/home/SectionBanner'
import NavBar from '../components/NavBar'
import SectionTwo from '../components/home/SectionTwo'
import SectionThree from '../components/home/SectionThree'
import SectionFour from '../components/home/SectionFour'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cosmohub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <SectionBanner />
        <SectionTwo />
        <SectionThree/>
        <SectionFour />
      </main>

      <footer>
      
      </footer>
    </div>
  )
}
