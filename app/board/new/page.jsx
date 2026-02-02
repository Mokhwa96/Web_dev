"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function NewPostPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    if (!user) {
      setMessage("로그인이 필요합니다.");
      return;
    }
    if (!title.trim()) {
      setMessage("제목을 입력하세요.");
      return;
    }

    let attachmentUrl = null;
    if (file) {
      const filePath = `${user.id}/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("attachments")
        .upload(filePath, file, { upsert: false });
      if (uploadError) {
        setMessage(uploadError.message);
        return;
      }
      const { data: publicUrlData } = supabase.storage
        .from("attachments")
        .getPublicUrl(filePath);
      attachmentUrl = publicUrlData?.publicUrl || null;
    }

    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        tag_list: tagList,
        author: user.email,
        attachment_url: attachmentUrl,
        user_id: user.id
      }
    ]);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/board");
  }

  return (
    <main>
      <section className="hero">
        <h2>글쓰기</h2>
        <p>디버깅 로그, 회로 캡처, 재현 절차를 간단히 공유해 주세요.</p>
      </section>

      <section className="card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="내용"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="태그 (쉼표로 구분)"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />
          <input
            className="input"
            type="file"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
          />
          <button className="button" type="submit">
            게시하기
          </button>
          {message ? <p className="helper">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
