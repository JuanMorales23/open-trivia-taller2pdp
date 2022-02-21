import React, { useRef, useEffect, useState } from "react";

const Timer = ({restart, pause}) => {
    const [num, setNum] = useState(30);    
    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    /*useEffect(() => {
            intervalRef.current = setInterval(decreaseNum, 1000);
            return () => clearInterval(intervalRef.current);
    }, []);*/

    useEffect(() => {       
        setNum(30);
    }, [restart]);

    useEffect(() => {        
        if(pause){
            clearInterval(intervalRef.current);
        }else{
            intervalRef.current = setInterval(decreaseNum, 1000);
            return () => clearInterval(intervalRef.current);
        }
    }, [pause]);


    return (
        <div>
            {num}                        
        </div>
    );
}

export default Timer