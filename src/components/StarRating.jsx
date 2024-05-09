import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [ hover, setHover ] = useState(0);

  function handleClick(index){
    setRating(index);
  }

  function handleMouseEnter(index){
    setHover(index);
  }

  function handleMouseLeave(){
    setHover(rating);
  }

  return (
    <div className="max-w-md mx-auto flex flex-row m-4 space-x-2">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "text-yellow-500" : "text-black"}
            onClick={()=> handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={()=> handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
