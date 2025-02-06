import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span>You'll Enjoy
            without the Hassle
          </h1>
        </header>
      </div>
    </main>
  );
}

export default App;
