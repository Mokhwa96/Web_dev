export default function ResourcesPage() {
  return (
    <main>
      <section className="hero">
        <h2>자료실</h2>
        <p>
          데이터시트, 예제 코드, 툴체인 링크를 한 곳에 모았습니다. 실전에 바로
          적용할 수 있는 체크리스트와 템플릿을 제공합니다.
        </p>
        <div className="chip-row">
          <span className="chip">데이터시트</span>
          <span className="chip">툴체인</span>
          <span className="chip">테스트 템플릿</span>
          <span className="chip">레퍼런스 설계</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>데이터시트 모음</h3>
          <ul className="list">
            <li>MCU 전력 모드 비교표</li>
            <li>센서 인터페이스 선택 가이드</li>
            <li>RF 모듈 인증 체크리스트</li>
          </ul>
        </article>
        <article className="card">
          <h3>툴체인</h3>
          <ul className="list">
            <li>GDB 스크립트 템플릿</li>
            <li>펌웨어 릴리즈 노트 양식</li>
            <li>CI 빌드 파이프라인 예시</li>
          </ul>
        </article>
        <article className="card">
          <h3>테스트/검증</h3>
          <ul className="list">
            <li>전원 온/오프 스트레스 테스트</li>
            <li>통신 에러 재현 시나리오</li>
            <li>필드 로그 수집 전략</li>
          </ul>
        </article>
      </section>

      <section className="ad-slot">Ad Slot · Resources (Google AdSense)</section>
    </main>
  );
}
