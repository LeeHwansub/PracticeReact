import { useContext, useReducer } from "react";
import HeaderCom from "../components/HeaderCom";
import { AuthContext } from "../store/AuthContext";
import { initialState, reducer } from "../moduls/member_red";

function HeaderCon() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const{auth, logout} = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    logout();
    dispatch({ type: "FINISHED" });
  }
    return (
    <HeaderCom onLogout={onLogout} isLoggedIn={auth.isLoggedIn} user={auth.user} loading={state.loading}/>
    );
  }
  export default HeaderCon;