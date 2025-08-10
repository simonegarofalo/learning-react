import Timer from './components/timer.jsx';

import "./App.css";

const ATHLETES = ["Simone", "Salvatore", "Carmelo", "Giancarlo"];

function App() {
 return (
    <>
    <h1>TRACKING ATHLETES' TIME</h1>
    <div className='timer-container'>
      <Timer />
      {ATHLETES.map((athlete, index) => (
        <Timer key={index} athlete={athlete} />
      ))}
      </div>
    </>
  ) 
}

export default App;
