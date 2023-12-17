import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
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
        <Image src="/landing_page_top.png" width={300} height={300} alt="background image" style={{ position: "relative", bottom: "19rem", left: "50rem" }} />
        <div className='mt-10 flex flex-row mb-20'>
          <div className='bg-green-400 flex w-1/4 h-40 flex flex-col pt-8 rounded-md info-square-1'>
            <h2 className='font-bold text-center text-xl'>Remember to always KISS</h2>
            <p className='ml-28'>Keep it simple stupid</p>
          </div>
          <div className="ml-12 info-square-2 relative bottom-6">
            <h2 className="text-lg  uppercase relative bottom-4 text-gray-400">Feature</h2>
            <h1 className="font-bold text-lg  relative">Simplicity and Efficiency</h1>
            <p className="text-justify mb-6">I specialize in Computer Science, programming specially web-development and competitive programming,
              and I also like to share my knowledge with others</p>
            <a href="#" className="text-sm text-gray-400 ml-6">Explore more</a>
          </div>
        </div>
        <div className="mt-48 flex flex-row">
          <div className="info-square-4">
            <h2 className="text-lg uppercase relative bottom-4 text-gray-400">Feature</h2>
            <h1 className="font-bold text-lg mb-4 ">Simplicity is Key</h1>
            <p className="text-justify mb-8">A minimalist approach to coding enables me to deliver high quality content without unecessary complexity or clutter.
              I focus on what's important, and my readers appreciate the effiency and effectiveness of my articles.
            </p>
            <a href="#" className="text-sm text-gray-400 ml-4">Read More</a>
          </div>
          <div className="info-square-3 rounded-md flex ml-16">
            <Image src='/landing-page-image2.png' alt="background image" width={300} height={300} className='rounded-md m-auto' />
          </div>
        </div>
        <div className="mt-48 flex flex-row">
          <div className="info-square-5 rounded-md flex bg-green-400 rounded-md">
            <Image src='/landing-page-image3.png' alt="background image" width={300} height={300} className='rounded-md m-auto' />
          </div>
          <div className="info-square-6 ml-12">
            <h2 className="text-lg uppercase relative bottom-4 text-gray-400">Feature</h2>
            <h1 className="font-bold text-lg mb-4 ">Coding is for Everyone</h1>
            <p className="text-justify mb-8">No matter what is your background, you can also learn how to code. So
              follow my blog to be up to date with the newest technologies involved in programming</p>
            <a href="#" className="text-sm text-gray-400 ml-4">Browse articles</a>
          </div>
        </div>
        <div className='mt-48 flex flex-row'>
          <div className="info-square-7 mt-16">
            <h2 className="uppercase text-4xl">Connect</h2>
          </div>
          <div className="ml-28">
            <div className="flex flex-row">
              <div className="info-square-left">
                <Link href="#"><img className="svg-white svg-landing relative bottom-10 left-10" src="github.svg" alt="Github" /></Link>
                <Link href="#"><img className="svg-white svg-landing" src="youtube.svg" alt="YouTube" /></Link>
                <Link href="#" className="relative top-10 right-10"><img className="svg-white svg-landing" src="discord.svg" alt="Discord" /></Link>
              </div>
              <div className="info-square-right">
                <Link href="#"><img className="svg-white svg-landing relative bottom-10 left-10" src="instagram.svg" alt="Instagram" /></Link>
                <Link href="#"><img className="svg-white svg-landing" src="leetcode.svg" alt="Leetcode" /></Link>
                <Link href="#"><img className="svg-white svg-landing relative top-10 right-10" src="linkedin.svg" alt="Linkedin" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-green-400 flex p-10 flex-col">
          <h1 className="uppercase text-4xl m-auto">Get Started</h1>
          <p className="m-auto mt-8">No experience required. Start your coding journey today!</p>
          <div className="m-auto mt-4 justify-between flex w-60">
            <Link href="/blog" ><button className="rounded-2xl w-28 h-10 bg-gray-800 ">Start Now</button></Link>
            <Link href="/contact"><button className="rounded-2xl w-28 h-10 bg-gray-800">Contact Me</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
