import { posts } from '@/utils/posts';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
