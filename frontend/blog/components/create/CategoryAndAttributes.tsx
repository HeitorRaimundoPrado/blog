const CategoryAndAttributes: React.FC = () => {
  return (
    <div className="mt-20 text-white w-1/2 bg-[var(--secondary-color)] mx-auto flex flex-col p-4 rounded-md">
      <h2>Category & Attributes</h2>
      <div className="flex flex-col">
        <label htmlFor="category" className="mt-10">Category</label>
        <select name="category" id="category" className="w-1/4 bg-[var(--primary-color)] p-2 rounded-md">
          <option value="software">Software</option>
          <option value="hacking">Hacking</option>
          <option value="music">Music</option>
          <option value="university">University</option>
        </select>
      </div>
    </div>
  )
}

export default CategoryAndAttributes;
