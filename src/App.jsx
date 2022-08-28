import { useState } from "react";
import Data from "./data/quotes.json";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Button from "./components/Button";
import "./App.css";

function App() {

	const randomIndex = Math.floor(Math.random() * Data.length);
	const [index, setIndex] = useState(randomIndex);

	const [color, setColor] = useState("red");
	const [bg, setBg] = useState("red-bg");

	const colorsArray = ["red", "green", "blue", "purple", "pink", "yellow"];
	const bgArray = ["red-bg", "green-bg", "blue-bg", "purple-bg", "pink-bg", "yellow-bg"];

	function changeColors() {
		const randomNumber = Math.floor(Math.random() * colorsArray.length);
		const colorValue = colorsArray[randomNumber];
		const bgValue = bgArray[randomNumber];
		setColor(colorValue);
		setBg(bgValue);
		setIndex(randomIndex);
	}

	return (
		<div className={`App ${bg}`}>
			<div className="container-quote">
				<Quote
					color={color}
					quote={Data[index].quote} />
				<Author
					color={color}
					author={Data[index].author} />
				<Button
					bg={bg}
					changeColors={changeColors} />
			</div>
		</div>
	);
}

export default App;
