import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function App() {
  return (
      <Canvas></Canvas>
  );
}

export default App;
