import 'bootstrap/dist/css/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.js'
import 'bootstrap/dist/css/jquery.min.js'
import 'bootstrap/dist/css/simple-sidebar.css'

// import '../SideBarAssets/bootstrap.bundle.min.js';

// import '../SideBarAssets/jquery.min.js';
// import '../SideBarAssets/simple-sidebar.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Link } from 'react-router-dom';
import LoadRoutines from './LoadRoutinesPage';
import ManageRoutines from './ManageRoutinesPage';
import NewRoutines from './NewRoutinesPage';
import RoutineView from './RoutineView';
import Welcome from './Welcome';



class MainPage extends Component{


  state = {

    RoutinesList: [
      { name: 'UR3', points: [{ x: 3, y: 5, z: 3 }, { x: 3, y: 8, z: 0 }], capturedBy: 'Moazzam' },
      { name: 'UR5', points: [{ x: 3, y: 5, z: 3 }, { x: 3, y: 8, z: 0 }], capturedBy: 'A. Moazzam' },
      { name: 'UR10', points: [{ x: 3, y: 5, z: 3 }, { x: 3, y: 8, z: 0 }], capturedBy: 'Abdul Moazzam' },
      { name: 'UR3', points: [{ x: 3, y: 5, z: 3 }, { x: 3, y: 8, z: 0 }], capturedBy: 'Adeel' },
    ]

}


  componentDidMount() {
    // $("#menu-toggle").onclick(function(e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  
}

    render() {
        
      return (
        <Router>
        <div>

        <div className="d-flex" id="wrapper" >
          
          {/* Sidebar */}
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Learning Management System (LMS) </div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action bg-light">Robots</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Routines</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Mappings</a>
            </div>
          
            <div className="sidebar-heading"> <Link to='WelcomePage' >Robot Learning Management System (RLMS)</Link> </div>
                <div className="list-group list-group-flush">
                  <NavLink to='LoadRoutinesPage' className="list-group-item list-group-item-action bg-dark">Load Routines</NavLink>
                  <NavLink to='NewRoutinesPage' className="list-group-item list-group-item-action bg-dark">New Routines</NavLink>
                  <NavLink to='ManageRoutinesPage' className="list-group-item list-group-item-action bg-dark">Manage Routines</NavLink>

                  {/* <a href="" className="list-group-item list-group-item-action bg-light">Load Routines</a>
              <a href="" className="list-group-item list-group-item-action bg-light">New Routine </a>
              <a href="" className="list-group-item list-group-item-action bg-light">Manage Routines</a> */}
            </div>
          
          </div>
          {/* /#sidebar-wrapper */}
          
          {/* Page Content */}
          <div id="page-content-wrapper">
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle"  >Toggle Menu</button>
          
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                                  
              {/* 
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li class="nav-item active">
                       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                     </li>
                    </ul>
                  </div> */}
          
          
            </nav>
          
            <div className="container-fluid">
            
                  
                  <Route path='/' exact component={Welcome} />
                  <Route path='/WelcomePage' exact component={Welcome} />
                  <Route path='/LoadRoutinesPage' exact component={() => <LoadRoutines routines={this.state.RoutinesList} />} />
                  <Route path='/NewRoutinesPage' exact component={NewRoutines} />
                  <Route path='/ManageRoutinesPage' exact component={() => <ManageRoutines routines={this.state.RoutinesList} />} />
                  
                  
               
            </div>
          </div>
          {/* /#page-content-wrapper */}
          
        </div>
        {/* #wrapper  */}
                      
          
          </div>



          </Router>
      );

    }


}

export default MainPage