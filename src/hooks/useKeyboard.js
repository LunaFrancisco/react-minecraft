import { useEffect, useState } from "react"


const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    ShiftLeft: 'sprint',                                                
    KeyC: 'crouch',
    Digit1: 'dirt',
    Digit2: 'wood',
    Digit3: 'grass',
    Digit4: 'log',
    Digit5: 'glass',
    
}


export const useKeybooard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        sprint: false,
        crouch: false,
        dirt:false,
        wood:false,
        grass:false,
        log:false,
        glass:false,
        
    })
    useEffect(()=>{
        const handleKeyDown = (e) => {
            const { code } = e
            const action = ACTIONS_KEYBOARD_MAP[code]
            if(action){
                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: true,
                }))
            }

        }
        const handleKeyUp = (e) => {
            const { code } = e
            const action = ACTIONS_KEYBOARD_MAP[code]
            if(action){
                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: false,
                }))
            }
        }

    
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
        
    })
    return actions
}
