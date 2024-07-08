import React from "react";
import Card from "./card";

const Contador =({number1, number2,number3,number4, number5, number6, number7}) => {
    return (
        <div className="row bg-black text-white">
            <Card number1={number1} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6} number7={number7} />
           
        </div>
    )
};

export default Contador;