"use client"

import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const AdminPanel: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [admin, setAdmin] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/admin/authorized', {
      headers: {
        "Authorization": "" + token
      }
    }).then(res => {
      if (!res.ok) {
        router.push('/')
      }
      return res.json();
    })
      .then(data => {
        console.log(data)
        if (data.is_admin != 1) {
          router.push('/')
        } else {
          setAdmin(true);
        }
      })
  }, [])

  if (admin) {
    return (
      <>Hello From Admin</>
    )
  }
}

export default AdminPanel;
