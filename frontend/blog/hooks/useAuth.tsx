"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useAuth = (): { isAuthenticated: boolean } => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router])

  if (typeof window !== 'undefined') {
    return { isAuthenticated: !!localStorage.getItem('token') };
  }
  return { isAuthenticated: false }
}
