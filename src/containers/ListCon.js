import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { getList } from "../service/member";
import { initialState, reducer } from "../moduls/member_red";

function ListCon(){

    const [state, dispatch] = useReducer(reducer, initialState)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(()=>{
        dispatch({type:"LOADING"})
        try{
            setTimeout(()=>{
                const data = getList();
                dispatch({type:"FINISHED"})
                dispatch({type:"LIST", data})
            }, 1)
        }catch(e){
            dispatch({type:"ERROR", error:e.toString()})
        }
    
    }, [])

    const totalPages = Math.ceil(state.data.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentData = state.data.slice(startIdx, startIdx + itemsPerPage);

    return(
        <>
        <ListCom
            data={currentData}
            loading={state.loading}
            error={state.error}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onPageSizeChange={(size) => {
                setItemsPerPage(size);
                setCurrentPage(1); // 페이지 수 바꾸면 1페이지부터
            }}
        />
      </>
    )
}
export default ListCon;