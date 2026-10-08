import { useEffect, useState } from "react"

function App() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((pre) => {
  if (pre === 0) {
    return 0;
  }

  return pre -1;
});
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
    <p>{time}</p>
    </>
  )
}

export default App
