"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/board", label: "게시판" },
  { href: "/board/new", label: "글쓰기" },
  { href: "/resources", label: "자료실" },
  { href: "/showcase", label: "프로젝트" },
  { href: "/about", label: "커뮤니티 소개" },
  { href: "/login", label: "로그인" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>Embedded Makers</h1>
        <p>HW · FW 개발자 커뮤니티</p>
      </div>
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="meta">
        오늘의 가이드: 전원 노이즈 줄이는 보드 레이아웃 팁, 디버깅 로그
        공유 방식, OTA 업데이트 체크리스트
      </div>
    </aside>
  );
}
