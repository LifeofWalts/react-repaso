import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home/Home'
import { Add } from './Components/Add/Add';
import { Edit } from './Components/Edit/Edit';

function App() {
  return (
    <>
    <div className="App">
      <Home />
      <Add />
      <Edit />
    </div>
    </>
  );
}

export default App;
