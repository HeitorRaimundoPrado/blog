import NavBar from '@/components/NavBar'
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/components/Footer'
import "@/style/contact.css"

const Contact: React.FC = () => {
  return (
    <div className="text-white font-sans font-roboto">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </Head>
      <NavBar />
      <div className="flex  flex-col">
        <h1 className="mx-auto text-2xl mt-14">Contact</h1>
        <h2 className="mx-auto">Get in touch with me.</h2>
      </div>
      <div className="content mt-20 flex flex-row justify-between mb-40">
        <form action="http:/localhost:5000/contact" className="w-1/2">
          <div className="mr-8 ">
            <div className="flex flex-col ">
              <label htmlFor="name" className="font-bold">Your Name</label>
              <input name="name" id="name" type="text" placeholder="Full Name" className="bg-transparent mt-2 shadow-[0_3px_10px_rgb(60,60,60,0.2)] p-2 rounded-md focus:outline-none" />
            </div>
            <div className="flex flex-col  mt-14">
              <label htmlFor="email" className="font-bold">Your Email</label>
              <input name="email" id="email" type="text" placeholder="email@email.com" className="bg-transparent mt-2 shadow-[0_3px_10px_rgb(60,60,60,0.2)] p-2 rounded-md focus:outline-none" />
            </div>
            <div className="flex flex-col  mt-14">
              <label htmlFor="subject" className="font-bold">Subject</label>
              <input name="subject" id="subject" type="text" placeholder="Tell me how can I be of use" className="bg-transparent mt-2 shadow-[0_3px_10px_rgb(60,60,60,0.2)] p-2 rounded-md focus:outline-none" />
            </div>
            <div className="flex flex-col  mt-14">
              <label htmlFor="message" className="font-bold">Message</label>
              <input name="message" id="message" type="text" placeholder="Write your message here" className="bg-transparent mt-2 shadow-[0_3px_10px_rgb(60,60,60,0.2)] p-2 rounded-md focus:outline-none" />
            </div>
          </div>
          <button className="bg-gray-800 rounded-xl mt-20 ml-40 p-3">Send Message</button>
        </form>
        <div className="relative right-0">
          <Image src="/contact-page-1.png" alt="Computer Image" width={500} height={800} className="rounded-md" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
