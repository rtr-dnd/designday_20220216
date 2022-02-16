import React, { useState } from 'react';
import './App.css';
import Webcam from 'react-webcam';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import front from './front_red.png';

function App() {
  const [top, setTop] = useState(0);

  return (
    <div className="App">
      <img src={front} className='front'></img>
      {/* <ReactScrollWheelHandler
        upHandler={(e) => {console.log(e.deltaY)}}
        downHandler={(e) => {console.log(e.deltaY)}}
      > */}
        <div style={{
          // clipPath: `inset(${top} 50% 50px 70px)`,
          width: '100vw',
          height: '100vh',
        }}>
          <Webcam 
            mirrored={true}
            className="webcam"
            // style={`clip-path: ${clipPath}`}
          />
        </div>
      {/* </ReactScrollWheelHandler> */}
    </div>
  );
}

export default App;
