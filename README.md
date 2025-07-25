# 🗺️ react-navermap-self-practice

> 이 레포는 **React.js** 프론트엔드 프레임워크에서 **Naver Map API**가 정상적으로 호출되고 동작하는지 확인하기 위한 **실습용 테스트 프로젝트**입니다.

본 테스트는 추후 구름톤 단국대학교(천안캠퍼스) 프로젝트인 [청년팜 프로젝트]([https://github.com/9oormthonUnivDKUC/FE-farm]) 프론트엔드에 Naver Map 기능을 적용하기 전에 테스트용으로 구성된 레포지토리입니다.
(실제론 Kakao Map API가 사용되었음)
---

## 🛠️ 기술 스택

- **Frontend Framework**: React.js (Vite 또는 CRA 기반)
- **지도 서비스**: Naver Maps JavaScript API v3
- **언어**: JavaScript / JSX
- **API 키**: 환경변수 파일(.env)에 보관 (커밋 제외)

---

## 📁 프로젝트 구조 

```plaintext
.
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   └── components/NaverMap.js
├── .env               # (숨김 처리됨)
├── .gitignore
├── package.json
└── README.md
