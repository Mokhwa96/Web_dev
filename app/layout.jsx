import "./globals.css";
import Script from "next/script";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "임베디드 메이커스 라운지",
  description:
    "임베디드 하드웨어/소프트웨어 개발자를 위한 커뮤니티. MCU, RTOS, 보드, 디버깅, 툴체인, 커리어 토픽을 한 곳에서 나누세요."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7210181923076065" />
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7210181923076065"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K53HBFRR');`}
        </Script>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vahp3bmjf2");`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K53HBFRR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="layout">
          <Sidebar />
          <div className="content">
            <div className="topbar">
              <div>Embedded Makers</div>
              <div className="menu">메뉴</div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
