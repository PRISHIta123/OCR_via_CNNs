import React, { Component, Fragment } from 'react';
    import './App.css';
    import Canvas from './canvas';
    import Dropdown from './Dropdown';
    import Output from './Output';

    class App extends Component {
      render() {
        return (
          <Fragment>
            <h2 style={{ textAlign: 'center' }}>Language Character Classifier</h2>
            <div className="main">
              <Dropdown />
              <Canvas >
                <div classname="lang_trans">
                  <h4>Tools</h4>
                  <div>
                   <button onClick={(e) => this.clearCanvas(e)}>
                     Classify
                   </button>
                  </div>
                </div>
              </Canvas>
              <Output />
            </div>
          </Fragment>
        );
      }
    }
    export default App;