
import { useState, useEffect } from 'react';
const Empty = () => {
const [num, setNum] = useState(0)
const [sum, setSum] = useState(0)
const [rate, setRate] = useState(0)

const handleStar = () =>  {
  const index = Math.floor(Math.random() * 4) + 1
// const index = 4 
  setSum((prev) => prev + index)
  setNum((prevNum) => prevNum + 1)
  console.log("The num is", num);
  console.log("The sum is", sum);
//   console.log("The rate is", rate);
  setRate(sum / num)
  // setRate((prevRate) => (sum + prevRate) / num);
  // console.log("The rate is", rate);
}

// useEffect(() => {
//   // setRate((prevRate) => (sum + prevRate) / num);
//   console.log("The num is", num);
//   console.log("The sum is", sum);
//   console.log("The rate is", rate);

// }, [ num, sum ]);
return (
    <>
    <button onClick={handleStar}>Button</button>
    <h3>num is {num} sum is {sum} rate is {rate}</h3>
    </>
)
}

export default Empty