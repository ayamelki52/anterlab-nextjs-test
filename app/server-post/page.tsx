


export default async function ServerPostPage() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();
  
    return (
      <div>
        <h1>Server-side Fetched Post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
  