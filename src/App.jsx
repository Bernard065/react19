import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
      Count: {count}
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
