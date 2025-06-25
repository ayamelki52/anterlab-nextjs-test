'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  if (!loggedIn) return <div>You must be logged in to view this page.</div>;

  return <div>Welcome to the dashboard!</div>;
}
