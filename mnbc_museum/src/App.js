import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Canvas} from 'react-three-fiber';

function App() {
  return (<>
    
    <Canvas>
      <mesh>
        <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
        <meshStandardMaterial attach='material'/>
      </mesh>
    </Canvas>

  </>);
}

export default App;
