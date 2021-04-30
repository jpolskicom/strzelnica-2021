import { useState, useEffect } from 'react';

export function useCursor() {

    const initialCursorPosition = {
        x:0,
        y:0
    };

    const [cursorPosition,setCursor] = useState(initialCursorPosition);

    useEffect(() => {
        const mousemove = document.addEventListener('mousemove', (e) => {
            setCursor({
                x:e.clientX,
                y:e.clientY
            })
        });
        return () => {
            window.removeEventListener("mousemove",mousemove);
        };
    }, []);

    return cursorPosition;

}