import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const headleCountButton = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="">Hello, React with Webpack!</h1>
      <button onClick={headleCountButton}>按鈕</button>
      <p>{count}</p>

    </div>
  );
}

export default App;
