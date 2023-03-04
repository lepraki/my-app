import { useState } from "react";
const App = ({value}) => {
    const [counter,setCounter] = useState (value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubsstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }
    return (
        <>
        <h1> Counter xD </h1>
        <span> {counter} </span>
        <button onClick={()=> handleAdd()}>+1</button>

        <h1> handleSubsstract </h1>
        <span> {counter} </span>
        <button onClick={()=> handleSubsstract()}>-1</button>

        <h1> handleReset </h1>
        <span> {counter} </span>
        <button onClick={()=> handleReset()}>=1</button>
        </>

        
    )
}
export default App
