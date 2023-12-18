export const PageSelector: React.FC<{ setPage: (data: { page: number }) => void }> = ({ setPage }) => {
  return (
    <ul className="flex flex-row justify-between border-b border-gray-700 pb-2 mb-6">
      <li><button onClick={() => setPage({ page: 0 })}>Edit Profile</button></li>
      <li><button onClick={() => setPage({ page: 1 })}>Change Password</button></li>
      <li><button onClick={() => setPage({ page: 2 })}>Notifications</button></li>
      <li><button onClick={() => setPage({ page: 3 })}>Subscription</button></li>
    </ul>
  )
}
export default PageSelector;
