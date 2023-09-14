import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <div>
      <img src={reactLogo} alt="reactLogo" />
      <Navbar />
    </div>
  );
}

export default App;
