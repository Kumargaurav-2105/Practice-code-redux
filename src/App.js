import logo from './logo.svg';
import './App.css';
import Parent from './NewReact/Parent';
import ComponentC from './ContextAPI/ComponentC';
import CountReducer from './Reducers/CountReducer';
import CakeContainer from './Redux/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Actions/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Parent/> */}
      {/* <ComponentC/> */}
      {/* <CountReducer/> */}
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
