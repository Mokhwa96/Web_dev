"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));
  }, []);

  async function signUp() {
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password });
    setMessage(error ? error.message : "회원가입 메일을 확인하세요.");
  }

  async function signIn() {
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setMessage(error ? error.message : "로그인 완료");
    const { data } = await supabase.auth.getUser();
    setUser(data.user || null);
  }

  async function signInWithGoogle() {
    setMessage("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google"
    });
    if (error) setMessage(error.message);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setMessage("로그아웃 완료");
  }

  return (
    <main>
      <section className="hero">
        <h2>로그인 / 회원가입</h2>
        <p>이메일 계정 또는 Google 로그인으로 커뮤니티에 참여하세요.</p>
      </section>

      <section className="card">
        {user ? (
          <>
            <p>현재 로그인: {user.email}</p>
            <button className="button" onClick={signOut} type="button">
              로그아웃
            </button>
          </>
        ) : (
          <div className="form-grid">
            <input
              className="input"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="button" onClick={signIn} type="button">
              로그인
            </button>
            <button className="button secondary" onClick={signUp} type="button">
              회원가입
            </button>
            <button
              className="button secondary"
              onClick={signInWithGoogle}
              type="button"
            >
              Google 로그인
            </button>
          </div>
        )}
        {message ? <p className="helper">{message}</p> : null}
      </section>
    </main>
  );
}
