import { useEffect, useState } from "react";

import "./App.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

function App() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if(error) {
    return <div><h1>404 - There was an unexpected Error...!</h1></div>
  }

  if (isLoading) {
    return <div>Data loading...</div>;
  }

  return (
    <>
      <div className="tutorial">
        <h1>Lets Fetch these Data</h1>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
