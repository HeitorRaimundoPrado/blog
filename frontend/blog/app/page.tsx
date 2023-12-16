import Image from 'next/image'
import Head from 'next/head'
import "@/style/index.css"
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function Home() {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </Head>
      <NavBar />
      <div className='text-white pb-6 font-sans font-roboto'>
        <div className='slate-background-top h-80 bg-green-400 flex'>
          <div className='mt-24 ml-28'>
            <h2 className=' text-3xl  font-bold w-60'>Welcome to my Coding Journey</h2>
            <p className='mt-6'>Sharing my coding experiences</p>
          </div>
        </div>
        <Image src="/landing_page_top.png" width={300} height={300} alt="background image" style={{ position: "relative", bottom: "18rem", left: "50rem" }} />
        <div className='mt-28 flex flex-row'>
          <div className='bg-green-400 flex w-1/4 h-40 flex flex-col pt-8 rounded-md info-square-1'>
            <h2 className='font-bold text-center text-xl'>Remember to always KISS</h2>
            <p className='ml-28'>Keep it simple stupid</p>
          </div>
          <div className="ml-12">
            <h2 className="text-lg  uppercase relative bottom-8 text-gray-400">Feature</h2>
            <h1 className="font-bold text-lg mb-4">Simplicity and Efficiency</h1>
            <p>I specialize in Computer Science, programming specially web-development and competitive programming,
              and I also like to share my knowledge with others</p>

            <a href="#" className="text-sm text-gray-400">Explore more</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
