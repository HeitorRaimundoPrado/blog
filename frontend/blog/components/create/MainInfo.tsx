const MainInfo: React.FC = () => {
  return (
    <div className="bg-[#202325] text-white mt-40 ml-[25%] w-1/2 flex flex-col p-4 rounded-md">
      <h2 className="ml-2">Article Title & Description</h2>
      <div className="mt-4 flex flex-col">
        <label className="ml-2" htmlFor="title">Enter Article Title</label>
        <input id="title" type="text" placeholder="Article Title" className="bg-[#181A1B] w-1/2 mt-1 p-2 rounded-2xl focus:outline-none" />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="ml-2" htmlFor="title">Enter Article Description</label>
        <input id="title" type="text" placeholder="Article Description" className="bg-[#181A1B] w-1/2 mt-1 p-2 rounded-2xl focus:outline-none" />
      </div>
      <div className="mt-4 flex flex-col">
        <label className="ml-2" htmlFor="title">Enter Tags Space Separated</label>
        <input id="title" type="text" placeholder="Tags" className="bg-[#181A1B] w-1/2 mt-1 p-2 rounded-2xl focus:outline-none" />
      </div>
    </div>
  )
}

export default MainInfo;
