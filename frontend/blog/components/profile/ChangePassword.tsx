const ChangePassword: React.FC = () => {
  return (
    <>
      <form className="flex flex-col">
        <h2>New Password</h2>
        <div className="flex flex-col mt-10">
          <label htmlFor="password" className="ml-2">Password</label>
          <input type="password" id="password" placeholder="Password" className="p-2 rounded-md bg-[var(--primary-color)] w-1/2 mt-2" />
        </div>
        <div className="flex flex-col mt-6 ">
          <label htmlFor="confirm-password" className="ml-2">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm Password" className="p-2 rounded-md bg-[var(--primary-color)] w-1/2 mt-2" />
        </div>
        <button className="p-2 rounded-md bg-[var(--primary-color)] w-1/4 mt-8 mx-auto">Save Changes</button>
      </form>
    </>
  )
}

export default ChangePassword;
