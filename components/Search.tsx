'use client';
import { useState } from 'react';
import { posts } from '@/utils/posts';

export default function Search() {
  const [query, setQuery] = useState('');

  const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      {filtered.map(post => <div key={post.slug}>{post.title}</div>)}
    </div>
  );
}
