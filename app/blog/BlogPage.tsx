"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import "../../public/css/blog.css";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Define type for WP Post
interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
    }>;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/wp-json/wp/v2/posts?_embed`)
      .then((res) => res.json())
      .then((data: WPPost[]) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section
        className="bnr-scn inner-bnr"
        style={{ backgroundImage: "url('/images/blog.jpg')" }}
      >
        <div className="container">
          <div className="bnr-cont-group">
            <h1 className="h2">Our Blog</h1>
          </div>
        </div>
      </section>
      <section className="bloglist-scn">
        <div className="container">
          <div>
            <div className="blog-list">
              {posts.map((post) => (
                <div key={post.id} className="blog-item">
                  <div className="blog-item-inner">
                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                      <div className="blog-img">
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          width={400}
                          height={250}
                          alt={post.title.rendered}
                        />
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
                    )}
                    <div className="blog-cont">
                      <h6>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="b-item-name"
                        >
                          {post.title.rendered}
                        </Link>
                      </h6>

                      {/* If you want excerpts: */}
                      {/* <div
                        className="excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      /> */}

                      <Link href={`/blog/${post.slug}`} className="blog-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
