import { Canvas } from '@react-three/fiber';
import {Sky} from '@react-three/drei';
import {Physics} from '@react-three/cannon';
import {Ground} from './Components/Ground/Ground.jsx';
import { FPV } from './Components/FPV/index.jsx';
 
function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[300,100,20]} />
        <ambientLight intensity={0.5}  />
        <Physics>
        <Ground/>
        <FPV/>
        </Physics>

        </Canvas>
    </>
  )
}

export default App
