const NavBar: React.FC = () => {
  return (
    <>
      <nav className='text-white flex justify-between p-6'>
        <ul className="flex w-60 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <ul className="flex justify-between w-40">
          <li>Search</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
