import Main from "./components/Main";
import Image from "next/image";
import Link from 'next/link'

interface POST {
  id: number;
  productCategory: string;
  name: string;
  description: string;
  featuredImage: string;
  thumbnailImage: string;
}
async function getData() {
  const res = await fetch('https://dummyapi.online/api/products')
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
      {/* <Nav /> */}
      <div className="product-container">
      {posts.map((post: POST) => {
        return (
          <Link href={`/${post.id}`}>
            <div key={post.id} className="product">
              <h1>{post.name.length > 10 ? post.name.slice(0, 15) + "..." : post.name}</h1>
              <Image src={post.thumbnailImage} alt={post.name} width={400} height={300} />
            </div>
          </Link>
        )
      })}
      </div>
    </div>
  );
}
