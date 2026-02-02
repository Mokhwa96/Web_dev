export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h2>임베디드 개발자들이 모이는 실전 커뮤니티</h2>
        <p>
          MCU, RTOS, 보드 설계, 디버깅, 툴체인까지. 반복되는 문제를 빠르게
          해결하고 프로젝트를 확장할 수 있도록 핵심 정보를 정리합니다.
        </p>
        <div className="chip-row">
          <span className="chip">MCU · RTOS</span>
          <span className="chip">보드 설계</span>
          <span className="chip">디버깅 노트</span>
          <span className="chip">프로젝트 쇼케이스</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>핵심 카테고리</h3>
          <ul className="list">
            <li>STM32 · ESP32 · nRF · RISC-V</li>
            <li>FreeRTOS · Zephyr · RT-Thread</li>
            <li>전원 · 신호 무결성 · 레이아웃</li>
            <li>로깅 · 펌웨어 테스트 · OTA</li>
          </ul>
        </article>
        <article className="card">
          <h3>이번 주 인기 질문</h3>
          <ul className="list">
            <li>DMA 인터럽트 누락 원인 분석</li>
            <li>스텝다운 레귤레이터 발열 저감</li>
            <li>RTOS 우선순위 역전 대응</li>
            <li>CAN-FD 버스 오류 로그 해석</li>
          </ul>
        </article>
        <article className="card">
          <h3>참여 방법</h3>
          <p>
            질문은 구체적으로, 해결 과정은 짧게 요약해 주세요. 테스트 로그와
            회로 캡처가 있는 글은 우선적으로 큐레이션됩니다.
          </p>
        </article>
      </section>

      <section className="ad-slot">Ad Slot · Top Banner (Google AdSense)</section>

      <section className="grid">
        <article className="card">
          <h3>빠른 스타터 키트</h3>
          <ul className="list">
            <li>개발환경 설치 체크리스트</li>
            <li>시리얼 로그 포맷 템플릿</li>
            <li>현장 재현 테스트 케이스</li>
          </ul>
        </article>
        <article className="card">
          <h3>프로젝트 쇼케이스</h3>
          <p>
            주간 하이라이트는 프로젝트 페이지에서 확인하세요. 하드웨어 사진과
            펌웨어 구조를 함께 소개합니다.
          </p>
        </article>
        <article className="card">
          <h3>커리어 라운지</h3>
          <p>
            면접 질문 풀이, 포트폴리오 리뷰, 채용 공고 요약을 함께 제공합니다.
          </p>
        </article>
      </section>

      <section className="ad-slot">Ad Slot · In-Content (Google AdSense)</section>

      <div className="footer">
        임베디드 메이커스 라운지는 실전 경험 공유를 위한 커뮤니티입니다.
      </div>
    </main>
  );
}
