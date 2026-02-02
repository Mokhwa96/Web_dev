"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function BoardDetailPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!params?.id) return;
    supabase
      .from("posts")
      .select("id,title,content,created_at,author,tag_list,attachment_url")
      .eq("id", params.id)
      .single()
      .then(({ data }) => setPost(data || null));
  }, [params]);

  if (!post) {
    return (
      <main>
        <section className="card">
          <p className="helper">게시글을 불러오는 중입니다.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <h2>{post.title}</h2>
        <p>
          {post.author || "익명"} ·{" "}
          {post.created_at
            ? new Date(post.created_at).toLocaleString("ko-KR")
            : ""}
        </p>
        <div className="chip-row">
          {(post.tag_list || []).map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <p>{post.content}</p>
        {post.attachment_url ? (
          <div className="card">
            <a href={post.attachment_url} target="_blank" rel="noreferrer">
              첨부파일 보기
            </a>
          </div>
        ) : null}
      </section>
    </main>
  );
}
