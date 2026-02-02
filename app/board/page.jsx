"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export default function BoardPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase
      .from("posts")
      .select("id,title,created_at,author,tag_list")
      .order("created_at", { ascending: false })
      .then(({ data }) => setPosts(data || []));
  }, []);

  return (
    <main>
      <section className="hero">
        <h2>임베디드 게시판</h2>
        <p>
          실전 이슈, 디버깅 기록, 회로 캡처를 공유하는 공간입니다. 질문은
          환경(보드, MCU, 버전)을 함께 적어주세요.
        </p>
        <div className="chip-row">
          <span className="chip">질문</span>
          <span className="chip">해결 공유</span>
          <span className="chip">디버깅 로그</span>
          <span className="chip">툴체인 팁</span>
        </div>
      </section>

      <section className="board-list">
        {posts.map((post) => (
          <article className="board-item" key={post.id}>
            <h4>
              <Link href={`/board/${post.id}`}>{post.title}</Link>
            </h4>
            <div className="meta">
              {post.author || "익명"} ·{" "}
              {post.created_at
                ? new Date(post.created_at).toLocaleDateString("ko-KR")
                : ""}
            </div>
            <div className="tags">
              {(post.tag_list || []).map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
        {!posts.length ? (
          <div className="helper">아직 게시글이 없습니다.</div>
        ) : null}
      </section>

      <section className="ad-slot">Ad Slot · Board (Google AdSense)</section>
    </main>
  );
}
