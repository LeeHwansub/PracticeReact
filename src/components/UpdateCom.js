import "../Css/Update.css"

function UpdateCom({ onChange, onSubmit, input }) {
  return (
    <form className="update-form-container" onSubmit={onSubmit}>
      <label>
        ID:
        <input type="text" name="inputId" value={input.inputId} readOnly />
      </label>
      <label>
        Password:
        <input type="text" name="inputPwd" value={input.inputPwd} onChange={onChange} />
      </label>
      <label>
        Name:
        <input type="text" name="inputName" value={input.inputName} onChange={onChange} />
      </label>
      <label>
        Addr:
        <input type="text" name="inputAddr" value={input.inputAddr} onChange={onChange} />
      </label>
      <button type="submit">수정하기</button>
    </form>
  );
}

export default UpdateCom;
