import Main from "./components/Main";
import Nav from "./components/Nav";

interface POST {
  id: number;
  movie: string;
  rating: number;
  imdb_url: string;
}
async function getData() {
  const res = await fetch('https://dummyapi.online/api/movies', {"cache": 'no-store'})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const posts = await getData()
  return (
    <div className="wrapper">
      <Main />
      <Nav />
      <div>
      {posts.map((post: POST) => {
        return (
          <div key={post.id}>
            <h1><a href={post.imdb_url}>{post.movie}</a></h1>
            <p>{post.rating}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
}
