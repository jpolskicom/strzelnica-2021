import { useState, useEffect } from 'react';

export function useScreen() {

    const initialScreenPosition = {
        width:document.body.clientWidth,
        height:window.innerHeight
    };

    const [screenPosition,setScreen] = useState(initialScreenPosition);

    useEffect(() => {
        const resize = window.addEventListener('resize', (e) => {
            setScreen({
                width:document.body.clientWidth,
                height:document.body.clientHeight
            })
        });
        return () => {
            window.removeEventListener("resize",resize);
        };
    }, []);

    return screenPosition;

}