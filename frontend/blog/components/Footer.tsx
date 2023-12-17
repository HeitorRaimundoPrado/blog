import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className='grid text-white font-sans font-roboto grid-cols-4 p-6'>
      <div>
        <ul>
          <li className="flex flex-row"><img className="svg-white mr-2" src="google.svg" alt="gmail" width={20} height={20} />heitorrdpp@gmail.com</li>
          <li ><Link href='https://www.instagram.com/heitorprado06/' className="flex flex-row"><img className="svg-white mr-2" src="instagram.svg" alt="instagram" width={20} height={20} />heitorprado06</Link></li>
          <li><Link href='www.linkedin.com/in/heitor-prado-99767227b' className="flex flex-row"><img className="svg-white mr-1" src="linkedin.svg" alt="linkedin" width={25} height={25} />Heitor Prado</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><Link href="/blog"></Link>Blog</li>
          <li><Link href="https://github.com/HeitorRaimundoPrado">GitHub</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>

        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
