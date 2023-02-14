// 

import React, { useRef, useState } from "react";


function CountWords() {

	const [randominput , setRandomInput] = useState()
    const renders = useRef(0)


	const [count, setCount] = useState(0);
	// implement the intilization of useRef This will pass your test case 2 and 3
	

	const onChange = (e) =>{
		setRandomInput(e.target.value)
        // implement this to pass the first test case here you will learn how to change value of variable intialized using useRef
	}

	const onButtonClick = () => {
		setCount(inputEl.current.value.split(" ").length);
		// implement this functionality to pass the 4th test case here you will learn how you can manipulate the react elements using use Ref
	};

	return (
		<>
			<input
			 ref={inputEl}
			 type="text" 
			 onChange={onChange}
			/>

			<button onClick={onButtonClick}>Count words</button>
            
			<p id="p1">Render count: {renders.current}</p>

			<p id="p2">Word count: {count}</p>
			
		</>
	);
}

export default CountWords;
