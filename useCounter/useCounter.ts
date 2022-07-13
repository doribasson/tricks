import { useState } from 'react';

const useCounter = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(c => c + 1);
  const decrement = () => setValue(c => c - 1);
  const reset = () => setValue(initialValue);

  return { value, increment, decrement, reset };
};

export default useCounter;




// import React from "react";

// function useCounter(initialCount) {
//   const [count, setCount] = React.useState(initialCount);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(initialCount);
//   console.log("return new");
//   return [count, increment, decrement, reset];
// }

// export default useCounter;
