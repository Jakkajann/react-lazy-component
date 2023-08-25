import React from "react";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const ready = React.useRef(false);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPosts((posts) => (posts = data));
    };
    ready.current = true;
    fetchData();
  }, [setPosts]);

  return (
    <div>
      {ready.current || <p>Carregando...</p>}
      {ready.current && posts.map((p) => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}

export default Posts;
