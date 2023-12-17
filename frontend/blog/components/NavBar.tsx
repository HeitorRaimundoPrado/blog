import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className='text-white flex justify-between p-6'>
        <ul className="flex w-60 justify-between">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <ul className="flex justify-between w-40">
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
