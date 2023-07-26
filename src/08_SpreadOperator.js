/*
    전개연산자?
    ... 점 3개를 연달아서 사용하는 연산자로 여러개의 객체를 '병합'하여
    한개의 객체로 만들려고할때 사용. (깊은복사를 일으킴)

    얕은 복사 => 주소값만 복사하는것으로, 복사본에서 작업, 수정한 내용이 원본에 영향을 끼치는 복사

*/

import { useState,useCallback } from "react";

const jeans = [1,2,3];
const newjeans = [...jeans,4,5];

// 전개연산자를 활용한 이미지 추가기능
function Spread(){
    const [images, setImages]  = useState([]);
    // images변수에 빈 배열 등록

    const addImage = useCallback(() => {
        const random = randomImages();
        const newImages = {
            id: random,
            src: `./img/flower${random}.jpg`
            // 정적인 이미지 파일들은 모두 public패키지안에 보관
        }
        setImages([...images,newImages]);
    },[images]);
    
    const clearImage = useCallback(() => {
        setImages([]);
    });

    const randomImages = () => Math.ceil(Math.random()*5);


    return(
        <>
            {console.log(images)}
            {
                // [].map(콜백함수) : virtual Dom 이랑 잘어울림 => 바뀐값만 비교해서 다시 랜더링
                images.map(
                    (img) => <img src={img.src}/>
                )
            }
            <button id='add' onClick={addImage}>이미지 추가</button>
            <button id='clear' onClick={clearImage}>이미지 삭제</button>
        </>
    )

}

export default Spread;