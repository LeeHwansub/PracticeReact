import { Link } from "react-router-dom";
import "../Css/Index.css";

function IndexPage() {
  return (
    <div className="index-container">
      <h1>👋 Welcome to My Member App</h1>
      <p>회원 등록, 조회, 수정, 삭제 기능을 제공하는 간단한 예제 프로젝트입니다.</p>
      <div className="index-buttons">
        <Link to="/member/login" className="index-btn">로그인</Link>
        <Link to="/member/register" className="index-btn">회원가입</Link>
      </div>
    </div>
  );
}

export default IndexPage;
