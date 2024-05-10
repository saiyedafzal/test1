import Image from "next/image";

interface POST {
  id: number;
  productCategory: string;
  name: string;
  description: string;
  featuredImage: string;
  thumbnailImage: string;
}

async function getData(id: number | null): Promise<POST> {
  if (!id) {
    throw new Error("Failed to fetch data");
  }
  const res = await fetch(`https://dummyapi.online/api/products/${id}`, {cache: "no-store"});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {

  const id = parseInt(params.slug);
  const post = await getData(id);
  return (
    <div className="wrapper" style={{ marginTop: "80px" }}>
      <div className="product-container">
        <div key={post.id} className="product">
          <h1>
            {post.name.length > 10 ? post.name.slice(0, 15) + "..." : post.name}
          </h1>
          <Image
            src={post.featuredImage}
            alt={post.name}
            width={800}
            height={600}
            priority
          />
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
