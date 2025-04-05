import "../Css/One.css";

function OneCom({ data, oneDelete, oneUpdate, loginUser }) {
  if (!data || !loginUser) return null;

  return (
    <div className="member-detail-container">
      <ul>
        <li>아이디 : {data.id}</li>
        <li>비밀번호 : {data.pwd}</li>
        <li>이름 : {data.name}</li>
        <li>주소 : {data.addr}</li>
        {loginUser === data.id && (
          <li>
            <button onClick={() => oneUpdate(data.id)}>회원수정</button>
            <button onClick={() => oneDelete(data.id)}>회원탈퇴</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default OneCom;
