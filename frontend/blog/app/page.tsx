import Image from 'next/image'
import Head from 'next/head'
import "@/style/index.css"
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function Home() {

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <div className='matte-container pb-6'>
        <div className='content'>
          <h1 className='font-lobster text-3xl text-center mb-2'>Heitor's Blog</h1>
          <Image src='/background_landing.png'
            alt='Background image'
            layout='responsive'
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto', maxWidth: 500, marginInline: 'auto' }}
          />
          <div className='width-full flex mt-10 content'>
            <a href="#contact" className='text-white bg-amber-600 p-2 rounded-xl  mx-auto'>Contact Me</a>
          </div>
          <main className='ml-64 mt-20 mr-64'>
            <article className='font-serif'>
              <section>
                <h1 className='font-bold'>About Me</h1>
                <p> I am a Computer Science student at UFU ( Universidade Federal de Uberlândia )</p>
                <p> My interests at the moment are mostly web development related, with focus on
                  Python for backend with Flask framework and React / Next for frontend</p>
                <p> I have been always interested in computers, and have studied some competitive programming as well
                  competing in the Brazillian Olympiad in Informatics and winning two medals ( one bronze and one silver ) </p>

              </section>
            </article>
          </main>

        </div>
        <div>
        </div>
        <div className='matte-left'></div>
        <div className="matte-right"></div>
      </div>
      <Footer />
    </>
  )
}
