const Footer: React.FC = () => {
  return (
    <div className='grid text-white font-sans font-roboto grid-cols-4 p-6'>
      <div>
        <ul>
          <li className="flex flex-row"><img className="svg-white mr-2" src="google.svg" alt="gmail" width={20} height={20} />heitorrdpp@gmail.com</li>
          <li className="flex flex-row"><img className="svg-white mr-2" src="instagram.svg" alt="instagram" width={20} height={20} />heitorprado06</li>
          <li className="flex flex-row"><img className="svg-white mr-1" src="linkedin.svg" alt="linkedin" width={25} height={25} />Heitor Prado</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Blog</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>About Me</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
