"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import Link from "next/link";
import "../../../public/css/blog.css";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    if (!slug) return;
    fetch(`${baseURL}/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    fetch(`${baseURL}/wp-json/wp/v2/posts?_embed`)
      .then((res) => res.json())
      .then((data1) => {
        setPosts(data1);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Header />

      <section
        className="bnr-scn inner-bnr"
        style={{ backgroundImage: "url('/images/blog.jpg')" }}
      >
        <div className="container">
          <div className="bnr-cont-group">
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </div>
        </div>
      </section>
      <section className="blog-post-signal">
        <div className="container">
          <div className="blog-post-inner">
            <div className="blog-post-left">
              <div className="signalpost-img">
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    width={800}
                    height={450}
                    alt={post.title.rendered}
                  />
                )}
                <span className="postdate">
                  {post.date
                    ? new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
            <div className="blog-post-right">
              <h5>Related Post</h5>
              <ul>
                {posts?.map((item, index) => (
                  <li className="item" key={index}>
                    <Link href={`/blog/${item.slug}`}>
                      {item.title.rendered}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
