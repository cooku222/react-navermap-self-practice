// src/App.js

import { NavermapsProvider } from "react-naver-maps";
import NaverMapsMarkerCluster from "./components/NaverMapsMarkerCluster";
 
function App() {
  // ncpClientId에 네이버 지도 API 클라이언트 키를 넣으면 된다.
  // npx create-react-app으로 프로젝트를 생성했다면-별도의 의존성 설치 없이-프로젝트 최상위 폴더에 .env 파일을 생성하고 키를 기입하면 된다.
  // .env에는 REACT_APP_NAVER_KEY의 값으로 키를 기입하면 되는데, REACT_APP_라는 prefix에 유의 하자!
  const naverKey = process.env.REACT_APP_NAVER_KEY;
 
  return (
    <NavermapsProvider
      ncpClientId={naverKey} // 지도서비스 Client ID
      error={<p>error</p>}
      loading={<p>Maps Loading</p>}
    >
      <div style={{ display: "flex", width: "100dvw", height: "100dvh" }}>
        <NaverMapsMarkerCluster />
      </div>
      
    </NavermapsProvider>
  );
}
 
export default App;