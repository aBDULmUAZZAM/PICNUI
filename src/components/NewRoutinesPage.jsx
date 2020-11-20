import React, { Component } from 'react';

export default class NewRoutines extends Component{


    render() {
    
        return (
            <div>
                <h1> Routines Registration Page:</h1>

                <div className="row">
                    <div className="col">
                        Routine Name:  <input type="Routine Name" />
                    </div>
                </div>

                <br>
                    {/* Recorded Video Module */}
                </br>
                <div className="row">
                    <div className="col">
                        <input id="input-b1" name="input-b1" type="file" class="file" data-browse-on-zoom-click="true" accept=".mp4" />
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"> Select Recorded Video</button>
                    </div>
                </div>
                
                {/* Live Video Module */}


                <h3> Input Video Mode:</h3>


                <button class="btn btn-primary" > Using Kinect</button>


                <button class="btn btn-primary"  > Using Embeded Camera</button>



                {/* Live Video Module End*/}

                <br /><br />

                <h3> Input Image Mode:</h3>
                
                <button className="btn btn-primary"> Select Image</button>
                <button className="btn btn-primary"> Capture Image </button>

                <br /><br />
                <div className="row">

                    <div className="col-1"></div>
                    <div className="col-4" >IMage url</div>
                    <div className="col-1"></div>
                    <div className="col-5 " >dvfgr</div>
                    <div className="col-1"></div>

                </div>

                <br />

                <div className="row">
                    <div className="col">

                        <center>
                            <button className="btn btn-warning"> Retry </button>
                            <button className="btn btn-warning"> Back </button>
                            <button className="btn btn-warning"> Next </button>
                            <button className="btn btn-warning"> Save </button>
                        </center>

                    </div>

                </div>
     

            </div>
        );

}



}
