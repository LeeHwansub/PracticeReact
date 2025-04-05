import OneCom from "../components/OneCom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import { getOne } from "../service/member";
import { AuthContext } from "../store/AuthContext"
import { initialState, reducer } from "../moduls/member_red";

function OneCon() {
  const { auth } = useContext(AuthContext);
  const [params] = useSearchParams();
  const [data, setData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  useEffect(() => {
    const id = params.get("id");

    dispatch({ type: "LOADING" });
    try {
      const member = getOne(id);
      if (member) {
        setData(member);
        dispatch({ type: "FINISHED" });
      } else {
        dispatch({ type: "ERROR", error: "회원을 찾을 수 없습니다." });
      }
    } catch (e) {
      dispatch({ type: "ERROR", error: e.toString() });
    }
  }, [params]);

  const oneDelete = (id) => navigate("/member/delete/" + id);
  const oneUpdate = (id) => navigate("/member/update/" + id);

  if (state.loading) return <p>로딩 중...</p>;
  if (state.error) return <p style={{ color: "red" }}>{state.error}</p>;
  
    return (
      <div>
        <OneCom data={data} oneDelete={oneDelete} oneUpdate={oneUpdate} loginUser={auth.user}/>
      </div>
    );
  }
  export default OneCon;