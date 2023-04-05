export default function ProductsLoading() {
  return <p>로딩중 입니다... 😃</p>;
}

/**
 * 내부적으로는 React suspense로 감싸준다.
 * 해당 페이지 (products)에서 데이터가 로드되면 로딩을 보여주고
 * 로드가 완료되면 요청한 페이지를 보여준다.
 * 💡 자동적으로 layout.js의 children(page)을 react suspense로 감싸고 있다고 생각할 수 있다.
 */
