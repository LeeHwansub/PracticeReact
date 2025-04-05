import "../Css/Reg.css";

function RegCom({ input, onChange, onSubmit, inputRef, onCheckDuplicate }) {
  return (
    <form className="register-form" onSubmit={onSubmit}>
      <div>
        <label>아이디</label>
        <div className="id-check">
          <input
            type="text"
            name="id"
            value={input.id || ""}
            onChange={onChange}
            ref={(el) => (inputRef.current[0] = el)}
          />
          <button type="button" onClick={onCheckDuplicate}>
            중복확인
          </button>
        </div>
      </div>

      <div>
        <label>비밀번호</label>
        <input
          type="password"
          name="pwd"
          value={input.pwd || ""}
          onChange={onChange}
          ref={(el) => (inputRef.current[1] = el)}
        />
      </div>

      <div>
        <label>비밀번호 확인</label>
        <input
          type="password"
          name="checkPwd"
          value={input.checkPwd || ""}
          onChange={onChange}
          ref={(el) => (inputRef.current[2] = el)}
        />
      </div>

      <div>
        <label>이름</label>
        <input
          type="text"
          name="name"
          value={input.name || ""}
          onChange={onChange}
          ref={(el) => (inputRef.current[3] = el)}
        />
      </div>

      <div>
        <label>주소</label>
        <input
          type="text"
          name="addr"
          value={input.addr || ""}
          onChange={onChange}
          ref={(el) => (inputRef.current[4] = el)}
        />
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
}

export default RegCom;