import React from "react";

const Card =({number1, number2, number3, number4, number5, number6, number7 })=> {
    return(
<div className="d-flex">
    <p>{number7}</p>
    <p>{number6}</p>
    <p>{number5}</p>
    <p>{number4}</p>
    <p>{number3}</p>
    <p>{number2}</p>
    <p>{number1}</p>
</div>
    )
};
export default Card;