"use client";

import { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        alert('Registration successful');
      } else {
        const data = await res.json();
        alert("Registration failed: " + data.msg)
      }
    } catch (error) {
      alert("Error during registration")
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <input type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

      <input type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register;
