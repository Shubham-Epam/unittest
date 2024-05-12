import React, {useState, useRef} from "react";

export default function withCounter(Comp, initial, dest) {
    return function ButtonWithCounter() {
        const [count, setCount] = useState(initial);
        const [currentDest, setCurrentDest] = useState(dest);

        function handleClick() {
           if(currentDest === 10) {
                if(count === 9) setCurrentDest(1);
                setCount(count+1);
            }
            else if(currentDest === 1) {
                if(count === 2) setCurrentDest(10);
                setCount(count-1);
            }
        }
        return(
            <Comp handleClick={handleClick} count={count}/>
        )
    }
    
}