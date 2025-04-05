import "../Css/Login.css";

function LoginCom({ onSubmit, loading, username, password, onChange, idRef, pwdRef }) {
  return (
    <>
      {loading ? (
        <div className="login-form-container">
          <h3>로그인 처리중...</h3>
        </div>
      ) : (
        <form className="login-form-container" onSubmit={onSubmit}>
          <input
            type="text"
            name="id"
            value={username}
            onChange={onChange}
            placeholder="아이디"
            ref={idRef}
          />
          <input
            type="password"
            name="pwd"
            value={password}
            onChange={onChange}
            placeholder="비밀번호"
            ref={pwdRef}
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </>
  );
}

export default LoginCom;
