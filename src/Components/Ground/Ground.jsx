 import { usePlane } from '@react-three/cannon'
 import { groundTexture } from '../../images/textures';
 import { useStore } from '../../hooks/useStore.js';

export function Ground () {
  const [ref] = usePlane(() => (
    {
        rotation: [-Math.PI / 2, 0, 0], 
        position: [0,-0.5,0]
    }));
    
    const[addCube] = useStore(state => [state.addCube]); 
    const handleClickGround = (event) =>{
        event.stopPropagation();
        console.log("asdasd",event.point)
        const [x,y,z] = Object.values(event.point)
                .map(n => Math.ceil(n));
        addCube(x,y,z)
    }

    groundTexture.repeat.set(100,100)

    return (
        <mesh
            onClick={handleClickGround}
            ref={ref}
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )

}
