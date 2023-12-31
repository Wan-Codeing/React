/*
    Fragments?

    return되는 컴포넌트를 감싸는 틀

    컴포넌트를 단위로 요소를 return할때는 반드시 단일한 1개의 요소만 반환할수 있기 때문에, 태그요소를 반환하고 싶다면
    반드시 하나의 HTML요소 태그로 감싸주어야 한다.

    반환시키고자하는 값이 여러개인경우 에러가 발생할 수 있는데, 이떄 Fragments태그를 활용하면 불필요한 HTML코드를 없애고 여러개의 요소를 반환할 수 있다.
*/
function Fragments() {
    return (
        // <React.Fragment>
        //     <td>리액트1</td>
        //     <td>리액트2</td>
        // </React.Fragment>
        <>
            <td>리액트1</td>
            <td>리액트2</td>
        </>
    ) 
}

export default Fragments;
