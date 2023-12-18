"use client";
import { useState, useEffect } from 'react';

const EditProfile: React.FC = () => {
  const [pfp, setPfp] = useState<string>('');

  useEffect(() => {
    setPfp("/test-pfp.png");
  })
  return (
    <>
      <div>
        <form className="flex flex-col">
          <label htmlFor="image-input">
            <img className="rounded-[50%]" src={pfp} alt="pfp" width={100} height={100} />
          </label>

          <input type='file' style={{ display: 'none' }} id="image-input" />

          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="ml-2">First Name</label>
              <input type="text" placeholder="First Name" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="ml-2">Last Name</label>
              <input type="text" placeholder="Last Name" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <label htmlFor="email" className="ml-2">Email</label>
            <input id="email" type="email" placeholder="email@email.com" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
          </div>
          <div className="mt-10 flex flex-col">
            <label htmlFor="phone" className="ml-2">Phone Number</label>
            <input id="phone" type="phone" placeholder="+123456789" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
          </div>
          <div className="mt-10 flex flex-col">
            <label htmlFor="adress" className="ml-2">Street Adress</label>
            <input id="adress" type="text" placeholder="123 Main Street" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col">
              <label htmlFor="zip-code" className="ml-2">ZIP code</label>
              <input type="number" placeholder="12345" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="ml-2">City</label>
              <input type="text" placeholder="San Francisco" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col">
              <label htmlFor="state" className="ml-2">State</label>
              <input type="text" placeholder="California" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="ml-2">Country</label>
              <input type="text" placeholder="USA" className="bg-[var(--primary-color)] rounded-lg p-2 mt-2" />
            </div>
          </div>
          <button className="mx-auto shadow-2 bg-[var(--primary-color)] p-2 mt-6 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </>
  )
}

export default EditProfile;
