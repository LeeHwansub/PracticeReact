
let data_set = Array.from({ length: 50 }, (_, i) => {
    const num = (i + 1).toString().padStart(3, "0");
    const id = `user${num}`;
    const pwd = `pass${num}`;
  
    const names = [
      "홍길동", "김개똥", "고길동", "박찬호", "이순신",
      "유재석", "정우성", "강호동", "장원영", "한예슬",
      "임꺽정", "나홀로", "배트맨", "손흥민", "지드래곤",
      "노홍철", "아이유", "제니", "카리나", "뽀로로"
    ];
  
    const addrs = [
      "산골짜기", "개똥별", "마포구", "강남역", "홍대입구",
      "어벤져스타워", "은하수길", "신비의숲", "방구마을", "열정도",
      "광기구", "피자스팟", "편의점뒤", "양꼬치천국", "어디메",
      "멋짐동", "치킨로드", "무지성타운", "노잼구", "신비동"
    ];
  
    return {
      id,
      pwd,
      name: names[i % names.length],
      addr: addrs[i % addrs.length]
    };
  });
  
const getList = () => data_set;

const getOne = ( id ) => //결과가 배열로 나오기때문에 0번째 전달
    data_set.filter( data => data.id === id )[0]

const register = (user) => {
    data_set = data_set.concat(user)
    return 1
}
const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id ===  id)
    console.log(id,pwd)
    console.log(data)
    if(data.length !== 0){
        if(data[0].pwd === pwd){
            return 0 //인증 성공
        }else{
            return 1 //비밀번호 틀림
        }
    }else{
        return -1 //존재하지 않는 id
    }
}

const deleteOne = (id) => {
    const idx = data_set.findIndex(data => data.id === id)
    if(idx !== -1){
        data_set.splice(idx, 1)
        return 1 //삭제 성공
    }else{
        return 0 //삭제 실패
    }
}

function updateOne(id, data) {
  const index = data_set.findIndex(m => m.id === id);
  if (index !== -1) {
    data_set[index] = data;
    return 1;
  }
  return 0;
}
  

export { register ,  getList, loginCheck, getOne, deleteOne, updateOne}

