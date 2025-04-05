import { useReducer, useRef, useState } from "react";
import RegCom from "../components/RegCom";
import { initialState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { getList, register } from "../service/member";

function RegCon(){
    const [state, dispatch]= useReducer(reducer,initialState);
    const [isIdChecked, setIsIdChecked] = useState(false);
    const inputRef = useRef([]);
    const navigate = useNavigate()

    const onChange = (e) =>{
        const{value,name} = e.target;
        dispatch({type:"CHANGE_INPUT",name,value,form:"register"})
        if(name === "id"){
            setIsIdChecked(false);
        }
    }

    const onCheckDuplicate = () => {
        const { id } = state.register;
    
        const exists = getList().find((user) => user.id === id);
        if (exists) {
            alert("이미 존재하는 아이디입니다.");
            dispatch({ type: "CHANGE_INPUT", name: "id", value: "", form: "register" });
            inputRef.current[0].focus();
            setIsIdChecked(false);
        } else {
            alert("사용 가능한 아이디입니다!");
            setIsIdChecked(true);
        }
    };
    
    const onSubmit = (e) =>{
        e.preventDefault();

        const { pwd, checkPwd } = state.register;

        for(let i=0; i<inputRef.current.length; i++){
            if(inputRef.current[i].value ===""){
                alert(`${inputRef.current[i].name}은(는) 필수항목입니다.`);
                inputRef.current[i].focus();
                return;
            }
        }

        if (!isIdChecked) {
            alert("아이디 중복확인을 해주세요.");
            inputRef.current[0].focus();
            return;
        }

        if(pwd !== checkPwd){
            alert("비밀번호가 일치하지 않습니다.")
            inputRef.current[1].focus();
            dispatch({ type: "CHANGE_INPUT", name: "pwd", value: "", form: "register" });
            dispatch({ type: "CHANGE_INPUT", name: "checkPwd", value: "", form: "register" });
            return;
        }


        console.log("register : ", state)

        try{
            dispatch({type:"LOADING"})
            // setTimeout(()=>{ 
                const { checkPwd: _, ...userData } = state.register;
                const result = register(state.register)
                dispatch({type:"FINISHED"})
                console.log("result : ", result )
                if(result ===1){
                    navigate("/")
                }else{
                    throw new Error("알수 없는 오류가 발생했습니다.")
                }
            // },2000)
            
        }catch(e){
            dispatch({type:"ERROR",error: e.toString()
            })
        }
        
    }
    return(
        <>
        <RegCom 
        input={state.register}
        inputRef={inputRef}
        onChange={onChange}
        onSubmit={onSubmit}
        onCheckDuplicate={onCheckDuplicate}
        />
        </>
    )
}
export default RegCon;