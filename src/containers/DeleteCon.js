import { useContext, useEffect, useReducer, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../service/member";
import { AuthContext } from "../store/AuthContext";
import { initialState, reducer } from "../moduls/member_red";

function DeleteCon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const hasDeleted = useRef(false);
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {

    if(hasDeleted.current) return;

    const confirmDelete = window.confirm("정말 회원 탈퇴하시겠습니까?");
    if (!confirmDelete) {
      navigate(-1); // 이전 페이지로 돌아가기
      return;
    }
  
    dispatch({ type: "LOADING" });
    const result = deleteOne(id);
    hasDeleted.current = true;

    if (result === 1) {
      dispatch({ type: "FINISHED" });
      alert("회원 탈퇴가 성공적으로 완료되었습니다.");
      logout(); // 선택사항
      navigate("/member/login");
    } else {
      dispatch({ type: "FINISHED" });
      alert("회원 탈퇴에 실패했습니다.");
    }
  }, [id, navigate, logout]);

  return null;
}

export default DeleteCon;
