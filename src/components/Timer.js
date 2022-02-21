import React, { useRef, useEffect, useState } from "react";

const Timer = ({restart, pause, setI, setVisible}) => {
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

    useEffect(() => {
        if(num === 0){
            clearInterval(intervalRef.current);
            setI(10);
            setVisible(true);
        }else{            

        }
    }, [num]);

    return (
        <>
            {num}                        
        </>
    );
}

export default Timer