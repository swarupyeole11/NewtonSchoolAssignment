import React, { useRef, useState } from "react";


function CountWords() {

	const [randominput , setRandomInput] = useState()
    const renders = useRef(0)


	const [count, setCount] = useState(0);
	// const inputEl = useRef(null);
	

	const onChange = (e) =>{
		setRandomInput(e.target.value)
        // renders.current++
	}

	const onButtonClick = () => {
		setCount(inputEl.current.value.split(" ").length);
		//inputEl.current.focus();
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
