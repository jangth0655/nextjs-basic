# Next.js Basic concept Note

개인적인 공부 목적으로 기록을 남기기 위해 작성하였습니다

#### 💡 Notion Note

<br />

· [Next.js란](https://jangtaehee.notion.site/Next-js-a15be6787ced485cae98d284cb3d7f28)

· [CSR에 대해](https://jangtaehee.notion.site/CSR-46f8b82f4fc6478a99272cda3b81cf26)

· [ISR,SSG,SSR](https://jangtaehee.notion.site/SSG-ISR-SSR-a088447ea119436099ea439d5b65d1a1)

· [하이브리드](https://jangtaehee.notion.site/b3b9aaf20c8e48798edbb11ebe89c19f)

· [웹개발시 중요한 포인트](https://jangtaehee.notion.site/Web-App-da2fc130a27e4bab98b2aca81556b90d)

· [SEO](https://jangtaehee.notion.site/SEO-9dc2e15a36fe434eaf66784cf03aa5a1)

---

# Class

<br />

### ✅ 페이지 구성

- 라우팅 (정적·동적)
- 레이아웃
- 링크
- SEO

<br /><br />

### ✅ 최신버전의 큰 차이즘 (13 version VS 12 version)

- 12 version

  - 페이지 단위로 렌더링 방식을 규정.
    즉 페이지 단위로 ISR, SSG, SSR로 정의

- 13 version
  - React의 서버컴포넌트를 도입
    따라서, **컴포넌트 단위**로 랜덜이 방시을 규정
  - **디폴트로 Server Component**이며 **Client Component**와 **혼합**하여 사용할 수 있다.
  - Server Component
    ⒈ 서버에서 실행이된다.
    ⒉ 서버에서 실행되어 pre rendering된 HTML을 만들기 때문에, 브라우저에서 출력이 안된다.
    ⒊ 서버에서 실행되기 때문에 **브라우저 APIs를 사용 ❌**, but **Node APIs 사용 ✅**하다.
    ⒋ 따라서 상태관련된 것을 사용 불가 ❌ (useState, useEffect ...)

---

### 💡 블로그 프로젝트
