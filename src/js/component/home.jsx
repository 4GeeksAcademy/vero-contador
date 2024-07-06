import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Contador from "./contador";
//create your first component
const Home = ({number1, number2, number3, number4, number5, number6, number7}) => {
	return (
		<div className="text-center">
			<Contador number1 = {number1} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6} number7={number7}/>
		</div>
	);
};

export default Home;
