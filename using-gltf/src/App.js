import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Html, useProgress, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const LoadItem = (args) => {
  const gltf = useLoader(useGLTF, './assets/artifact/scene.gltf');
  return <primitive object={gltf.scene} {...args} />;
};

function App() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Suspense fallback={<Loader />}>
        <pointLight color="yellow" position={[10, 10, 10]} />
        <LoadItem position={[1, 1, 1]} scale={0.2} rotation-x={1} />
      </Suspense>
    </Canvas>
  );
}

export default App;