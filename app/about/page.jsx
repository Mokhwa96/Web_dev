export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <h2>커뮤니티 소개</h2>
        <p>
          임베디드 메이커스 라운지는 하드웨어/펌웨어 개발자가 문제를 빠르게
          해결하고 성장하는 공간입니다. 실전 지식과 커리어 정보를 공유합니다.
        </p>
        <div className="chip-row">
          <span className="chip">실전 문제 해결</span>
          <span className="chip">지식 큐레이션</span>
          <span className="chip">커리어 성장</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>운영 원칙</h3>
          <ul className="list">
            <li>질문은 환경과 재현 과정을 적습니다.</li>
            <li>해결 기록은 간결하게 요약합니다.</li>
            <li>광고/홍보는 정해진 규칙 내에서 허용됩니다.</li>
          </ul>
        </article>
        <article className="card">
          <h3>콘텐츠 구성</h3>
          <ul className="list">
            <li>주간 이슈 라운드업</li>
            <li>핵심 기술 튜토리얼</li>
            <li>프로젝트 쇼케이스</li>
            <li>커리어/채용 인사이트</li>
          </ul>
        </article>
        <article className="card">
          <h3>연락처</h3>
          <p>파트너십/협업 문의는 이메일로 연락해 주세요.</p>
          <p>contact@embeddedmakers.dev</p>
        </article>
      </section>

      <section className="ad-slot">Ad Slot · About (Google AdSense)</section>
    </main>
  );
}
