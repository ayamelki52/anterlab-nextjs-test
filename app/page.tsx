import { posts } from '@/utils/posts';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Blog</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <div
            key={post.slug}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <a
              href={`/${post.slug}`}
              className="inline-block text-blue-500 hover:text-blue-700 font-medium"
            >
              Read more &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
