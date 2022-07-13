import useCounter from './useCounter';



export default function App() {
    const quantity = useCounter(0);
    // { value, increment, decrement, reset }  = useCounter(0);
    return (
        <div className="Cart">
            <h1>My Cart</h1>
            {quantity.value}
            <button onClick={() => quantity.decrement()}>-</button>
            <button onClick={() => quantity.reset()}>Reset</button>
            <button onClick={() => quantity.increment()}>+</button>

        </div>
    );
}

// import "./styles.css";
// import React from "react";
// import useCounter from "./useCounter";

// //In custom hook, parent component is rendered even though child is changed.

// export default function App() {
//   const [count, increment, decrement, reset] = useCounter(0);
//   console.log("rendered");
//   return (
//     <div className="App">
//       <h1>Count = {count}</h1>
//       <button onClick={() => increment()}>Increment</button>
//       <button onClick={() => decrement()}>Decrement</button>
//       <button onClick={() => reset()}>Reset</button>
//     </div>
//   );
// }
