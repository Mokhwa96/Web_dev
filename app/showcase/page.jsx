const SHOWCASES = [
  {
    title: "nRF52 BLE 센서 노드",
    summary: "전력 최적화와 배터리 수명 측정을 공유합니다."
  },
  {
    title: "산업용 게이트웨이 CM4",
    summary: "입출력 보드 설계와 열관리 팁 정리."
  },
  {
    title: "저전력 부트로더 설계",
    summary: "펌웨어 업데이트 안정성을 높이는 전략."
  },
  {
    title: "CAN-FD 로깅 파이프라인",
    summary: "실차 로그 수집 및 분석 흐름."
  }
];

export default function ShowcasePage() {
  return (
    <main>
      <section className="hero">
        <h2>프로젝트 쇼케이스</h2>
        <p>
          실무 프로젝트를 공유하고, 하드웨어 설계와 펌웨어 구조를 함께
          피드백합니다. 완성도보다 학습 과정이 중요합니다.
        </p>
        <div className="chip-row">
          <span className="chip">보드 사진</span>
          <span className="chip">펌웨어 구조</span>
          <span className="chip">테스트 로그</span>
          <span className="chip">배포 노트</span>
        </div>
      </section>

      <section className="grid">
        {SHOWCASES.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </section>

      <section className="ad-slot">Ad Slot · Showcase (Google AdSense)</section>
    </main>
  );
}
