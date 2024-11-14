"use client";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Use next/navigation in App Router

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    console.log('Response status:', res.status);
  
    if (!res.ok) {
      const errorText = await res.text(); // Get the error text
      console.log('Error response body:', errorText); // Log error response for debugging
      setError('Something went wrong. Please try again.');
      return;
    }
  
    const text = await res.text();
    console.log('Raw response:', text);
  
    try {
      const data = JSON.parse(text);
      console.log('Parsed data:', data);
  
      if (data.success) {
        router.push('/userData');
      } else {
        setError(data.message || 'Incorrect username or password');
      }
    } catch (error) {
      console.log('Error parsing JSON:', error);
      setError('Invalid JSON response');
    }
  };
  
  
  

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            className="w-full mt-1 p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
