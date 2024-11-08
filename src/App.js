import './App.css';
import { FaPlus, FaUser} from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Pending from './pages/Pending';
import Approved from './pages/Approved';
import Declined from './pages/Declined';
import Create from './pages/create';
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1 className='title'>REQUEST-LEAVE </h1>
        <div className='logo'><FaUser /></div>
      </nav>

      
      <Router className='main'>
      <div className='link-con'>
      
      <div className='links'>
        <Link to="/" className="link"><h3>All</h3></Link>
        </div>

        <div className='links'>
        <Link to="/pending" className="link"><h3>Pending</h3></Link>
        </div>

        <div className='links'>
        <Link to="/approved" className="link"><h3>Approved</h3></Link>

        </div>

        <div className='links'>
        <Link to="/declined" className="link"><h3>Declined</h3></Link>
        </div>

        <div className='create'>
        <Link to="/create" className="link"><FaPlus/></Link>
        </div>
        
        <div style={{fontSize:'20px',color:'gray',marginLeft:'130px'}}><h3>Request Details</h3> </div>
        </div>
      
    
        
        <div className='route-con'>
        <div className='con'>
      <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/declined" element={<Declined />} />
          <Route path="/create" element={<Create />} />
      </Routes>

      </div>
        
        <div className='request-con'>
          <h1 className='req-name'>ABDUL SAHITH M</h1>
           
           <h3 className='req-det'>Department:  ARTIFICIAL INTELLIGENCE AND DATA SCIENCE </h3>
           <h3 className='req-det'>hostel Name: Valluvar </h3>
           <h3 className='req-det'>Year:    II</h3>
           <h3 className='req-det'>NO OF Leaves: 5 </h3>
          <h2 style={{fontSize:'30px',marginLeft:'20px',marginTop:'50px'}}>
            Leave hierarchy
          </h2>
          <div className='hiracy'>
              <div className='hir-con'>
                <div className='hir-logo'><FaUser /></div>
                <h4>ADVISOR</h4>
              </div>

              <div className='hir-con'>
                <div className='hir-logo'><FaUser /></div>
                <h4 style={{marginLeft:'10px'}}>  HOD</h4>
              </div>

              <div className='hir-con'>
                <div className='hir-logo'><FaUser /></div>
                <h4>ASST WARDEN</h4>
              </div>

              <div className='hir-con'>
                <div className='hir-logo'><FaUser /></div>
                <h4>DEPTY WARDEN</h4>
              </div>
          </div>
        </div>

      </div>
      </Router>
      
      

    </div>
  );
}

export default App;
