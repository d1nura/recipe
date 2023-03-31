import "./App.scss";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-layout">
        <Header></Header>
        <div className="card-holder">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
