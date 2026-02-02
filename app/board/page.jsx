const POSTS = [
  {
    title: "STM32 UART DMA 수신이 가끔 멈춥니다",
    author: "hw_firmware",
    time: "2시간 전",
    tags: ["STM32", "DMA", "UART"]
  },
  {
    title: "FreeRTOS 우선순위 역전 로그 공유",
    author: "kernel.dev",
    time: "6시간 전",
    tags: ["FreeRTOS", "Mutex", "Debug"]
  },
  {
    title: "전원 레귤레이터 발열 줄이는 방법",
    author: "boardlab",
    time: "어제",
    tags: ["Power", "Layout", "Thermal"]
  },
  {
    title: "ESP32 OTA 업데이트 실패 사례",
    author: "iotbuilder",
    time: "2일 전",
    tags: ["ESP32", "OTA", "Wi-Fi"]
  },
  {
    title: "CAN-FD 버스 오류 분석 로그",
    author: "vehicle-fw",
    time: "3일 전",
    tags: ["CAN-FD", "Logging"]
  }
];

export default function BoardPage() {
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
        {POSTS.map((post) => (
          <article className="board-item" key={post.title}>
            <h4>{post.title}</h4>
            <div className="meta">
              {post.author} · {post.time}
            </div>
            <div className="tags">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="ad-slot">Ad Slot · Board (Google AdSense)</section>
    </main>
  );
}
