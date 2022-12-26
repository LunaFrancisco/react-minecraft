import { useBox } from "@react-three/cannon";
import * as textures from '../../images/textures.js';
import { useStore } from "../../hooks/useStore.js";
import { useState } from "react";
export const Cube = ({id, position, texture }) => {
    const [removeCube] = useStore(state => [state.removeCube]);
    const [isHovered, setIsHovered] = useState(false);
    const [ref] = useBox(() => ({
    type: 'Static',
    position
    }));
    const activeTexture = textures[texture + 'Texture'];
 
    return (
        <mesh
        onPointerMove={(e) => {
            e.stopPropagation();
            setIsHovered(true);
        }}
        onPointerOut={(e) => {
            e.stopPropagation();
            setIsHovered(false);
        }}
        ref={ref}
        onClick={(e) => {
            e.stopPropagation();
            console.log("event",e); 
            if(e.altKey){
                console.log("alt key")
                removeCube(id);
            }
        }}
        >
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial
             map={activeTexture}
             color={isHovered ? 'hotpink' : 'white'}
             transparent 
             attach='material' />
        </mesh>
        )
}