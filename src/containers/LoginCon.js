import { useContext, useReducer, useRef } from "react";
import LoginCom from "../components/LoginCom";
import{initialState,reducer} from "../moduls/member_red"
import { AuthContext } from "../store/AuthContext";
import { loginCheck } from "../service/member";
import {useNavigate} from "react-router-dom"


function LoginCon(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(null);
    const pwdRef = useRef(null);
  
    const onChange = (e) =>{
        const{name, value} = e.target;
        dispatch({type:"CHANGE_INPUT",name,value, form:"login"})
    
    }

    console.log("login con state : ", state)

    const {login}=useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (e) =>{
        e.preventDefault();

        if (!state.login.id) {
            alert("아이디를 입력해주세요.");
            idRef.current.focus();
            return;
          }
          if (!state.login.pwd) {
            alert("비밀번호를 입력해주세요.");
            pwdRef.current.focus();
            return;
          }

        dispatch({type:"LOADING"})
        const result = loginCheck(state.login.id, state.login.pwd);
        dispatch({type:"FINISHED"})
        if(result ===0){
            login(state.login.id)
            navigate("/member/list")
        }else if(result ===1){
            alert("아이디가 존재하지 않습니다.")
            idRef.current.focus()
    }
}

    return(
        <>
        <LoginCom
         loading={state.loading}
         onSubmit={onSubmit}
         username={state.login.id} 
         password={state.login.pwd} 
         onChange={onChange} 
         idRef={idRef}
         pwdRef={pwdRef}
        />
        </>
    )
}

export default LoginCon;