import React, { Component } from 'react';

import { BrowserRouter as Router,Route, Link, NavLink } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import RoutineView from './RoutineView';

export default class LoadRoutines extends Component{

    state = {
        Routines: this.props.routines,
        

}


    
    

    render() {
    
        return (<Router>


            <h1> Registered Routines: </h1>
            <div className="row" style={{ margin: '2%', overflow: 'scroll', height: '50%', backgroundColor: 'transparent' }}>
                {this.state.Routines.map((r) =>
                    
                    
                    <NavLink to='/RoutineView' key={r.name} style={{ margin: '1%', padding: '1%' }} className="btn btn-primary" >{r.name}</NavLink>
                
                
                
                )}

                
                
            </div>
            <Route path='/RoutineView' exact component={() => <RoutineView />} />
        </Router>);

}



}
