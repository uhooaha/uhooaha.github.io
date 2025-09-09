// Firebase SDK 구성(config) 객체
// 여러분의 Firebase 프로젝트 설정 정보를 여기에 붙여넣으세요.
const firebaseConfig = {
  apiKey: "AIzaSyDyAv5QqZ1IUYTluxpvKeOam64yR67-CqQ",
  authDomain: "uhooaha-771ca.firebaseapp.com",
  projectId: "uhooaha-771ca",
  storageBucket: "uhooaha-771ca.firebasestorage.app",
  messagingSenderId: "280847031296",
  appId: "1:280847031296:web:98735d9119f6f1e12acce5"
};

// Firebase 앱 초기화
firebase.initializeApp(firebaseConfig);

// 이후 프로젝트에서 사용될 Firestore 서비스에 대한 참조를 내보냅니다.
export const db = firebase.firestore();