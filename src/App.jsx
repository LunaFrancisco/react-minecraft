import { Canvas } from '@react-three/fiber';
import {Sky} from '@react-three/drei';
import {Physics} from '@react-three/cannon';
import {Ground} from './Components/Ground/Ground.jsx';
import { FPV } from './Components/FPV/index.jsx';
import { Player } from './Components/Player/index.jsx';
import { Cubes } from './Components/Cubes/index.jsx';
 
function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[300,100,20]} />
        <ambientLight intensity={0.5}  />
        <Physics >
          <Cubes/>
          <Ground/>
          <Player/>
          <FPV/>
        </Physics>
        </Canvas>
        <div className='pointer'>+</div>
    </>
  )
}

export default App
