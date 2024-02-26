import { useEffect, useState } from "react";

import "./App.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<Error | string>();
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      try{
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch(error){
        if(error instanceof Error) {
          setIsError(error.message)
        }
      } finally {
        setIsLoading(false);
      }
    }

    getPosts()
  }, [])

  if(isError) {
    return <div>There was an unexpected error, try again....</div>
  }

  if(isLoading) {
    return <div>Lists are loading...</div>
  }

  return (
    <>
      <h3>The Lists of Tasks</h3>
      <ul>{posts.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}</ul>
    </>
  );
}

export default App;
