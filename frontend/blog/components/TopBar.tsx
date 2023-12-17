"use client";
import { useState, useEffect } from "react";

const TopBar: React.FC = () => {
  const [article, setArticle] = useState<string>('');
  const [pfp, setPfp] = useState<{ source: string }>({ source: '' });

  const handleSearch = () => {

  }

  useEffect(() => { // set profile picture according to user
    setPfp({ source: "/test-pfp.png" })
  }, [])

  return (
    <nav className="bg-[#202325] w-[82%] h-20 right-0 absolute rounded-b-md flex justify-between text-white">
      <div className="h-full flex">
        <form className="bg-[#181A1B] p-2 pl-4 my-auto ml-16 rounded-2xl" onSubmit={handleSearch}>
          <button className="absolute left-20 bottom-8"><img src="/icon-search.png" alt="submit" /></button>
          <input className="ml-6 focus:outline-none bg-transparent" type="text" placeholder="Search Article" onChange={(e) => setArticle(e.target.value)} />
        </form>
      </div>
      <div className="my-auto mr-20 flex flex-row">
        <button className="bg-green-400 p-2 rounded-xl">Create +</button>
        <img src={pfp.source} alt="profile picture" className="h-10 w-10 rounded-3xl ml-4 my-auto" />
      </div>
    </nav>
  )
}

export default TopBar;
