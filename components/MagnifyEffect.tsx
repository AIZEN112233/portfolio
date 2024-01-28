"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagnicEffectProps {
    children: React.ReactNode;
    [key: string]: any;
}

export default function MagnicEffect({
    children,
    ...props
}: MagnicEffectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    function mouseLeave() {
        setPosition({ x: 0, y: 0 });
    }

    function mouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
            ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    }

    const { x, y } = position;

    return (
        <motion.div
            {...props}
            animate={{ x, y }}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
            ref={ref}
        >
            {children}
        </motion.div>
    );
}
