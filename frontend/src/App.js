import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import './App.css';
import List from './components/todo';
import InputTodo from './components/InputTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <>
    <div className='container'>
      <Router>
        <Routes>
        <Route path="/" element={<List/>}/>
        <Route exact path="/edit" element={<EditTodo/>}/>
        </Routes>
      </Router>
        {/* <Switch> */}
       
        {/* </Switch> */}
    {/* <InputTodo/> */}
    {/* <EditTodo/>
       <List/> */}
    </div>
    </>
  );
}

export default App;
