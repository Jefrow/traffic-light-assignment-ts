import './App.css';
import { FunctionalTrafficLight } from './components/FunctionalTrafficLight';
import { ClassTrafficLight } from './components/ClassTrafficLight';

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight />
          </div>
          <div className="right">
            <ClassTrafficLight />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
