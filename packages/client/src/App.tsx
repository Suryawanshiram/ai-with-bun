import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, [message]);

  return (
    <div className="">
      <h1 className="">AI Project</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
