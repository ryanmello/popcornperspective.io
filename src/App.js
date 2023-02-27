import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/adduser' element={<AddUser />}></Route>
          <Route exact path='/edituser/:id' element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
