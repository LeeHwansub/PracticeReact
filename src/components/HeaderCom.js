import "../Css/Header.css";
import { Link, Outlet } from "react-router-dom";

function HeaderCom({ isLoggedIn, user, onLogout }) {
  
  return (
    
    <div>
      <header className="header">
        <nav className="nav-left">
          <Link to="/">Home</Link>
        </nav>

        <nav className="nav-center">
          {isLoggedIn && <Link to="/member/list">회원 LIST</Link>}
        </nav>

        <nav className="nav-right">
          {isLoggedIn ? (
            <>
              <span>{user}님 환영합니다&nbsp;</span>
              <Link to="/member/logout" onClick={onLogout}>LOGOUT</Link>
            </>
          ) : (
            <>
              <Link to="/member/login">LOGIN</Link>
              <Link to="/member/register">회원가입</Link>
            </>
          )}
        </nav>
      </header>

      <main style={{ padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default HeaderCom;