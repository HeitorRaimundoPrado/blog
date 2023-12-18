"use client"

import Link from "next/link";

const Dashboard: React.FC = () => {
  const handleBack = () => {

  }

  return (
    <nav className="font-sans font-roboto text-white p-12 fixed top-0 flex flex-col justify-between h-screen w-80">
      <div>
        <h2>Dashboard</h2>
        <ul className="mt-10">
          <li><Link href='/' className="flex flex-row"><img src="/icon-home.png" alt="home" style={{ width: 20, height: 20, marginBlock: 'auto' }} /><span className="ml-10">Home</span> </Link></li>
          <li className="mt-6"><button onClick={handleBack} className="flex flex-row"><img src="icon-back.png" alt="back" style={{ width: 20, height: 20, marginBlock: 'auto' }} /> <span className="ml-10">Back</span></button></li>
          <li className="mt-6"><Link href="/my-articles" className="flex flex-row"><img src="icon-articles.png" alt="articles" style={{ width: 20, height: 20, marginBlock: 'auto' }} /> <span className="ml-10">Articles</span></Link></li>
          <li className="mt-6"><Link href="/accounts-and-cards" className="flex flex-row"><img src="icon-credit-card.png" alt="accounts and cards" style={{ width: 20, height: 20, marginBlock: 'auto' }} /> <span className="ml-10">Accounts And Cards</span></Link></li>
        </ul>
      </div>
      <ul>

        <li><Link href='/settings' className="flex flex-row"><img src="/icon-user.png" alt="settings" style={{ width: 20, height: 20, marginBlock: 'auto' }} /><span className="ml-10">Settings</span> </Link></li>
        <li className="mt-6"><Link href='/logout' className="flex flex-row"><img src="/icon-logout.png" alt="home" style={{ width: 20, height: 20, marginBlock: 'auto' }} /><span className="ml-10">Log Out</span> </Link></li>
      </ul>
    </nav>
  )
}

export default Dashboard;
