import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Boubou</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/create_game">Creer Partie</Link> |{" "}
        <Link to="/join_game">Rejoindre Partie</Link>
      </nav>
    </div>
  );
}

export default App;
