import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Hello world</h1>
          <Weather city="Utrecht" />
        </p>
      </header>
    </div>
  );
}

export default App;
