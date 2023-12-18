import Dashboard from '@/components/Dashboard'
import TopBar from '@/components/TopBar';
import UserInfo from '@/components/profile/UserInfo'

const AccountSettings: React.FC = () => {
  return (
    <>
      <Dashboard />
      <div className="text-white w-1/2 mx-auto mt-32">
        <TopBar />
        <UserInfo />
      </div>
    </>
  )
}

export default AccountSettings;
