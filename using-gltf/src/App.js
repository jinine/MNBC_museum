import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF } from '@react-three/drei';
import './index.css'


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.39, 0.73]} rotation={[-0.18, 0, -0.01]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_1.geometry} material={materials.material0} />
          <mesh geometry={nodes.Model_material0_0_2.geometry} material={materials.material0} />
        </group>
      </group>
    </group>
  )
}

function App() {

  return (
    <div className = "App">
          <div className="wrapper">
        <div className="card"> 
            <div className="product-canvas">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight />
                  <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                 <Model scale={1}/>
                 <OrbitControls enablePan={true} enableRotate = {true} enableZoom = {true} />
                </Suspense>
              </Canvas>
            </div>
       
        </div>
    </div>
     

    </div>
  );
}

export default App;