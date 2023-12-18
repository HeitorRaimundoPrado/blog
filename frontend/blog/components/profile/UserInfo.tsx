"use client";
import { useState } from 'react'
import PageSelector from './PageSelector'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'
import Notifications from './Notifications'
import Subscription from './Subscription'

interface Page {
  page: 0 | 1 | 2 | 3
}

const UserInfo: React.FC = () => {
  const [page, setPage] = useState<Page>({ page: 0 });

  const pages = [<EditProfile />, <ChangePassword />, <Notifications />, <Subscription />]

  return (
    <div className="bg-[var(--secondary-color)] p-4 rounded-md mb-10">
      <PageSelector setPage={setPage} />
      {pages[page.page]}
    </div >
  )
}

export default UserInfo;
