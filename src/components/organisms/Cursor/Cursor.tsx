import {FC, useEffect, useRef, useState} from 'react';
import cx from "classnames";

const Cursor: FC = () => {


    const [hasMoved, setHasMoved] = useState(false);

    const cursorElm = useRef<HTMLDivElement | null>(null);
    const raf = useRef<number | null>(null);

    const state = useRef({
        x:0,
        y:0,
        cx:0,
        cy:0, 
    })

    const lerp = (value1:number, value2:number, amount:number) => {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return value1 + (value2 - value1) * amount;
    };

    const mouseMove = (e: MouseEvent) => {
        state.current.x = e.clientX;
        state.current.y = e.clientY;

        setHasMoved(true);            
    }
    
    const loop = () => {

        state.current.cx = lerp(state.current.x, state.current.cx, 0.9);
        state.current.cy = lerp(state.current.y, state.current.cy, 0.9);

        cursorElm.current.style.transform = `translate3d(${state.current.cx}px,${state.current.cy}px,0px)`;

        raf.current = requestAnimationFrame(loop);
    }

    useEffect(() => {
        if(hasMoved) {
            state.current.cx = state.current.x;
            state.current.cy = state.current.y;
        }
    },[hasMoved])

    useEffect(() => {

        window.addEventListener('mousemove', mouseMove)
        raf.current = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            cancelAnimationFrame(raf.current);
        }
    },[])

    return (
        <div ref={cursorElm} className={
            cx("fixed -top-3 -left-3 z-50 w-6 h-6 pointer-events-none transition-opacity duration-500 ease-out",
                {'opacity-100': hasMoved},
                {'opacity-0': !hasMoved},
            )
            }>
                <span className="block absolute inset-0 m-auto w-full h-px bg-white"></span>
                <span className="block absolute inset-0 m-auto w-full h-px bg-white transform rotate-90"></span>

        </div>
    )
}

export { Cursor };