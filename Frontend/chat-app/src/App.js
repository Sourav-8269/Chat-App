import logo from './logo.svg';
import './App.css';
import MainRoutes from './MainRoutes/MainRoutes';
import { store } from './Redux/store';

function App() {
  console.log(store.getState());
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
