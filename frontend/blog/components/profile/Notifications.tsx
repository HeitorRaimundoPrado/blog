"use client"
import { useState, useEffect } from 'react'
const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    setNotifications(['Notification 1', 'Notification 2', 'Notification 3'])
  }, [])

  const removeNotification = (idx: number) => {
  }

  return (
    <div>
      <h2 className="mb-6">Notifications</h2>
      <ul>
        {notifications.map((notification, idx) => {
          return (
            <li className="flex flex-row justify-between mt-4 rounded-lg bg-[var(--third-color)] p-4">
              {notification}<button onClick={removeNotification(idx)} className="bg-red-400 text-white rounded-xl w-4 h-4  align-center flex justify-center items-center p-3">x</button>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default Notifications;
