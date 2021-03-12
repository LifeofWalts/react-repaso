import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRoute } from './Routes/MainRoute';
import {TaskContextProvider} from './Context/TaskContext'
function App() {
  return (
    <>
      <TaskContextProvider>
        <div className="App">
          <MainRoute />
        </div>
      </TaskContextProvider>
    </>
  );
}

export default App;
