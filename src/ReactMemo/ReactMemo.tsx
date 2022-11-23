import React, {useState} from 'react';

const ReactMemo = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let ResultA = 1;
    let ResultB = 1;

    for(let i = 1; i <= a; i++ ){
        ResultA = ResultA * i
    }

    for(let i = 1; i <= b; i++ ){
        ResultB = ResultB * i
    }
    return (
        <div>
            <input type="text" value={a} onChange={(event) => {setA(+event.currentTarget.value)}}/>
            <input type="text" value={b} onChange={(event) => {setB(+event.currentTarget.value)}}/>
            <hr/>
            ResultA: {ResultA}
            ResultB: {ResultB}
        </div>
    );
};

export default ReactMemo;