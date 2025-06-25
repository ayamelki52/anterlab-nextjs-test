'use client';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function AboutPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
