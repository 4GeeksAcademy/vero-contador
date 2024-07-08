import React from "react";

const Card = ({ number1, number2, number3, number4, number5, number6, number7 }) => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number7}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number6}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number5}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number4}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number3}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number2}
            </p>
            <p className="border border-1 border-primary fs-1" 
            style={{width:"100px",height:"80px", marginRight:"10px"}}>
                {number1}
            </p>
        </div>
    )
};
export default Card;