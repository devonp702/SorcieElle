import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className = "container">
      <div className = "col-3">
        <h1>SorcieElle</h1>
        <p>Media links</p>
      </div>
      <div className = "col-6">
        <p>Pictures here</p>
      </div>
      <div className = "col-3">
      <p>Links</p>
      <Signup />
      </div>
    </div>
  );
}

export default App;
