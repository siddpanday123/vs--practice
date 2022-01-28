
import './App.css';
import Form from './Components/Form';
import UncForm from './Components/UncForm';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';


const App = () => {
  return( 
  <div className='app'>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<Form/>}/>
      <Route path="/UncForm" element={<UncForm/>}/>
    </Routes>
  </div>);
};

export default App;
