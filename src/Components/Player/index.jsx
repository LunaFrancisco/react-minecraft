import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {  Vector3 } from "three";
import { useKeybooard } from "../../hooks/useKeyboard";

const CHARACTER_SPEED= 3;
const CHARACTER_JUMP_FORCE = 4;

export const Player = () => {
    const {
        moveBackward,
        moveForward,
        moveLeft,
        moveRight,
        jump,
        crouch
    } = useKeybooard()
    const { camera  } = useThree();
    
    const [ ref,api ] = useSphere(() => ({
        mass:1,
        type: 'Dynamic',
        position: [0,0.5,0],
    }))

    const pos = useRef([0,0,0])
    useEffect(() => {
        api.position.subscribe((position) => {
            pos.current = position
        })
    }, [api.position])

    const vel = useRef([0,0,0])
    useEffect(() => {
        api.velocity.subscribe((velocity) => {
            vel.current = velocity
        })
    }, [api.velocity])

    useFrame(() => {
      camera.position.copy(
        new Vector3(
            pos.current[0],
            pos.current[1],
            pos.current[2]
        ) )  
        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
            )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
            )
            
        direction
            .subVectors(frontVector,sideVector)
            .normalize()
            .multiplyScalar(6)
            .applyEuler(camera.rotation)
  
        
      //movement
      //set asdw to move

      api.velocity.set(
        direction.x,
        vel.current[1], //??? saltar
        direction.z
      )

        //jump
        if(jump && Math.abs(vel.current[1].toFixed(2)) < 0.05) {
            api.velocity.set(
                vel.current[0],
                CHARACTER_JUMP_FORCE,
                vel.current[2]
            )
        }

    })

    
    return( 
    <mesh ref={ref}
     /> )
 
    }
